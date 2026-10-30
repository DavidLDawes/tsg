// webgpu.js: the WebGPU side of render/webgpu. The Go game packs each frame's
// 3D scene into one Float32Array (render/webgpu/recorder.go, Recorder.Packed)
// and hands it to frame(); this draws it with a depth buffer:
//
//   1. opaque spheres and star fields (depth write),
//   2. lines (blended, depth-tested),
//   3. translucent spheres, already sorted far to near (blended).
//
// Spheres are camera-facing billboards cut to a disc in the fragment shader:
// the game's spheres are unlit and flat-coloured, so a disc is exactly what a
// sphere looks like, and it costs 6 vertices instead of a mesh. The globe
// view is a screen rectangle whose fragment shader does what the CPU
// rasterizer (render.RasterizeGlobe) does per pixel. 2D UI is drawn
// separately by globetrotter.js on a canvas layered above this one.
"use strict";

window.GlobetrotterGPU = (() => {
  const SPHERE_FLOATS = 8;      // center xyz, radius, color rgba
  const LINE_FLOATS = 14;       // 2 x (xyz, rgba)
  const HEADER_FLOATS = 32;     // see Recorder.Packed
  const GLOBE_FLOATS = 18;      // see Recorder.Packed
  const MAX_GLOBES = 4;         // globe draws per frame
  const UNIFORM_STRIDE = 256;   // minUniformBufferOffsetAlignment
  const UNIFORM_FLOATS = 28;    // mat4 + right, up, offset (vec4 each)
  const MAX_DRAW_SLOTS = 16;    // star-field draws per frame (+1 base slot)

  const SHADER = /* wgsl */ `
struct Uniforms {
  viewProj: mat4x4<f32>,
  right: vec4<f32>,
  up: vec4<f32>,
  offset: vec4<f32>,   // added to every position: a star field's origin
};
@group(0) @binding(0) var<uniform> u: Uniforms;

struct SphereOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
};

@vertex
fn vsSphere(@builtin(vertex_index) vi: u32,
            @location(0) center: vec3<f32>,
            @location(1) radius: f32,
            @location(2) color: vec4<f32>) -> SphereOut {
  var corners = array<vec2<f32>, 6>(
    vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
    vec2(-1.0, -1.0), vec2(1.0, 1.0), vec2(-1.0, 1.0));
  let c = corners[vi];
  let world = center + u.offset.xyz + (u.right.xyz * c.x + u.up.xyz * c.y) * radius;
  var out: SphereOut;
  out.pos = u.viewProj * vec4(world, 1.0);
  out.uv = c;
  out.color = color;
  return out;
}

@fragment
fn fsSphere(in: SphereOut) -> @location(0) vec4<f32> {
  if (dot(in.uv, in.uv) > 1.0) {
    discard;
  }
  return in.color;
}

struct LineOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) color: vec4<f32>,
};

@vertex
fn vsLine(@location(0) pos: vec3<f32>, @location(1) color: vec4<f32>) -> LineOut {
  var out: LineOut;
  out.pos = u.viewProj * vec4(pos + u.offset.xyz, 1.0);
  out.color = color;
  return out;
}

@fragment
fn fsLine(in: LineOut) -> @location(0) vec4<f32> {
  return in.color;
}
`;

  // The globe: render.RasterizeGlobe on the GPU. The per-pixel math and the
  // texture sampling mirror the Go code exactly (globe.ViewBasis.Unproject
  // and globe.EquirectSampler.At, including its texel convention, longitude
  // wrap and latitude clamp), using integer texel loads rather than hardware
  // filtering, whose texel-centre convention differs.
  const GLOBE_SHADER = /* wgsl */ `
struct Globe {
  rect: vec4<f32>,    // x, y, w, h in CSS pixels
  view: vec4<f32>,    // viewport CSS width, height; device pixel ratio; disk radius (CSS px)
  right: vec4<f32>,
  up: vec4<f32>,
  forward: vec4<f32>,
  space: vec4<f32>,   // colour outside the disk
};
@group(0) @binding(0) var<uniform> g: Globe;
@group(0) @binding(1) var tex: texture_2d<f32>;

const PI: f32 = 3.14159265358979;

@vertex
fn vsGlobe(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4<f32> {
  var corners = array<vec2<f32>, 6>(
    vec2(0.0, 0.0), vec2(1.0, 0.0), vec2(1.0, 1.0),
    vec2(0.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0));
  let css = g.rect.xy + corners[vi] * g.rect.zw;
  return vec4(css.x / g.view.x * 2.0 - 1.0, 1.0 - css.y / g.view.y * 2.0, 0.0, 1.0);
}

fn texel(x: i32, y: i32) -> vec4<f32> {
  return textureLoad(tex, vec2<i32>(x, y), 0);
}

@fragment
fn fsGlobe(@builtin(position) pos: vec4<f32>) -> @location(0) vec4<f32> {
  // Fragment positions are pixel centres, so at a ratio of 1 this is
  // exactly RasterizeGlobe's (px + 0.5, py + 0.5).
  let p = pos.xy / g.view.z - g.rect.xy;
  let x = (p.x - g.rect.z * 0.5) / g.view.w;
  let y = -(p.y - g.rect.w * 0.5) / g.view.w;
  let r2 = x * x + y * y;
  if (r2 > 1.0) {
    return g.space;
  }
  let e = normalize(g.right.xyz * x + g.up.xyz * y + g.forward.xyz * sqrt(1.0 - r2));
  let lat = asin(clamp(e.z, -1.0, 1.0));
  var lon = atan2(e.y, e.x);
  lon = lon - floor((lon + PI) / (2.0 * PI)) * 2.0 * PI; // wrap into [-pi, pi)

  let size = vec2<i32>(textureDimensions(tex));
  let u = (lon + PI) / (2.0 * PI) * f32(size.x);
  let v = (PI / 2.0 - lat) / PI * f32(size.y);
  let fx0 = floor(u);
  let fy0 = floor(v);
  let x0 = ((i32(fx0) % size.x) + size.x) % size.x;
  let x1 = (x0 + 1) % size.x;
  let y0 = clamp(i32(fy0), 0, size.y - 1);
  let y1 = clamp(y0 + 1, 0, size.y - 1);
  let top = mix(texel(x0, y0), texel(x1, y0), u - fx0);
  let bottom = mix(texel(x0, y1), texel(x1, y1), u - fx0);
  return vec4(mix(top, bottom, v - fy0).rgb, 1.0);
}
`;

  let canvas, device, context, format;
  let pipeOpaque, pipeTranslucent, pipeLines, bindGroup, uniformBuf;
  let depthTex = null;
  let pipeGlobe, globeBGL, globeUniformBuf;
  const globes = new Map(); // texture id -> { tex, bindGroup }
  const globeUniforms = new Float32Array((UNIFORM_STRIDE / 4) * MAX_GLOBES);
  let dynSpheres = null, dynSpheresSize = 0, dynLines = null, dynLinesSize = 0;
  const fields = new Map(); // id -> { buf, size, count }
  const uniforms = new Float32Array((UNIFORM_STRIDE / 4) * (MAX_DRAW_SLOTS + 1));

  const BLEND = {
    color: { srcFactor: "src-alpha", dstFactor: "one-minus-src-alpha", operation: "add" },
    alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" },
  };

  function makePipelines(module, layout) {
    const sphereBuffers = [{
      arrayStride: SPHERE_FLOATS * 4,
      stepMode: "instance",
      attributes: [
        { shaderLocation: 0, offset: 0, format: "float32x3" },
        { shaderLocation: 1, offset: 12, format: "float32" },
        { shaderLocation: 2, offset: 16, format: "float32x4" },
      ],
    }];
    const sphere = (opaque) => device.createRenderPipeline({
      layout,
      vertex: { module, entryPoint: "vsSphere", buffers: sphereBuffers },
      fragment: { module, entryPoint: "fsSphere", targets: [opaque ? { format } : { format, blend: BLEND }] },
      primitive: { topology: "triangle-list" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: opaque, depthCompare: "less" },
    });
    pipeOpaque = sphere(true);
    pipeTranslucent = sphere(false);
    pipeLines = device.createRenderPipeline({
      layout,
      vertex: {
        module, entryPoint: "vsLine",
        buffers: [{
          arrayStride: 7 * 4,
          attributes: [
            { shaderLocation: 0, offset: 0, format: "float32x3" },
            { shaderLocation: 1, offset: 12, format: "float32x4" },
          ],
        }],
      },
      fragment: { module, entryPoint: "fsLine", targets: [{ format, blend: BLEND }] },
      primitive: { topology: "line-list" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: false, depthCompare: "less" },
    });
  }

  // ensureBuffer returns a vertex buffer of at least size bytes, reusing buf
  // when it's big enough.
  function ensureBuffer(buf, have, size) {
    if (buf && have >= size) return [buf, have];
    if (buf) buf.destroy();
    const cap = Math.max(1024, size * 2);
    return [device.createBuffer({ size: cap, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }), cap];
  }

  // resize matches the backing store and depth buffer to the CSS size.
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h || !depthTex) {
      canvas.width = w;
      canvas.height = h;
      if (depthTex) depthTex.destroy();
      depthTex = device.createTexture({ size: [w, h], format: "depth24plus", usage: GPUTextureUsage.RENDER_ATTACHMENT });
    }
  }

  return {
    // init resolves true once WebGPU is ready, false if this browser can't
    // provide it (the game then uses the Canvas2D renderer).
    async init(c) {
      try {
        if (!navigator.gpu) return false;
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) return false;
        device = await adapter.requestDevice();
        device.lost.then((info) => console.error("globetrotter: WebGPU device lost:", info.message));
        canvas = c;
        context = c.getContext("webgpu");
        format = navigator.gpu.getPreferredCanvasFormat();
        context.configure({ device, format, alphaMode: "opaque" });

        const module = device.createShaderModule({ code: SHADER });
        const info = await module.getCompilationInfo();
        for (const m of info.messages) console[m.type === "error" ? "error" : "warn"]("globetrotter WGSL:", m.lineNum, m.message);
        const bgl = device.createBindGroupLayout({
          entries: [{ binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: "uniform", hasDynamicOffset: true } }],
        });
        makePipelines(module, device.createPipelineLayout({ bindGroupLayouts: [bgl] }));
        uniformBuf = device.createBuffer({ size: uniforms.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

        const globeModule = device.createShaderModule({ code: GLOBE_SHADER });
        for (const m of (await globeModule.getCompilationInfo()).messages) console[m.type === "error" ? "error" : "warn"]("globetrotter WGSL (globe):", m.lineNum, m.message);
        globeBGL = device.createBindGroupLayout({
          entries: [
            { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: { type: "uniform", hasDynamicOffset: true } },
            { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: "unfilterable-float" } },
          ],
        });
        pipeGlobe = device.createRenderPipeline({
          layout: device.createPipelineLayout({ bindGroupLayouts: [globeBGL] }),
          vertex: { module: globeModule, entryPoint: "vsGlobe" },
          fragment: { module: globeModule, entryPoint: "fsGlobe", targets: [{ format }] },
          primitive: { topology: "triangle-list" },
          depthStencil: { format: "depth24plus", depthWriteEnabled: false, depthCompare: "always" },
        });
        globeUniformBuf = device.createBuffer({ size: globeUniforms.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
        bindGroup = device.createBindGroup({
          layout: bgl,
          entries: [{ binding: 0, resource: { buffer: uniformBuf, size: UNIFORM_FLOATS * 4 } }],
        });
        return true;
      } catch (e) {
        console.warn("globetrotter: WebGPU unavailable, using Canvas2D:", e);
        return false;
      }
    },

    // uploadGlobe creates globe texture id from w x h RGBA bytes.
    uploadGlobe(id, bytes, w, h) {
      const tex = device.createTexture({ size: [w, h], format: "rgba8unorm", usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST });
      device.queue.writeTexture({ texture: tex }, bytes, { bytesPerRow: w * 4 }, [w, h]);
      const bindGroup = device.createBindGroup({
        layout: globeBGL,
        entries: [
          { binding: 0, resource: { buffer: globeUniformBuf, size: 24 * 4 } },
          { binding: 1, resource: tex.createView() },
        ],
      });
      globes.get(id)?.tex.destroy();
      globes.set(id, { tex, bindGroup });
    },

    releaseGlobe(id) {
      globes.get(id)?.tex.destroy();
      globes.delete(id);
    },

    // uploadField replaces star field id's instances (count spheres).
    uploadField(id, bytes, nbytes, count) {
      let f = fields.get(id);
      if (!f) { f = { buf: null, size: 0, count: 0 }; fields.set(id, f); }
      if (count > 0) {
        [f.buf, f.size] = ensureBuffer(f.buf, f.size, nbytes);
        device.queue.writeBuffer(f.buf, 0, bytes, 0, nbytes);
      }
      f.count = count;
    },

    frame(bytes, nbytes) {
      const p = new Float32Array(bytes.buffer, bytes.byteOffset, nbytes / 4);
      resize();
      const clear = { r: p[22], g: p[23], b: p[24], a: p[25] };
      const has3D = p[26] !== 0;
      const nOpaque = p[27], nTrans = p[28], nLines = p[29], nDraws = Math.min(p[30], MAX_DRAW_SLOTS);
      const nGlobes = Math.min(p[31], MAX_GLOBES);
      const drawsAt = HEADER_FLOATS;
      const globesAt = drawsAt + p[30] * 4;

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{ view: context.getCurrentTexture().createView(), clearValue: clear, loadOp: "clear", storeOp: "store" }],
        depthStencilAttachment: { view: depthTex.createView(), depthClearValue: 1, depthLoadOp: "clear", depthStoreOp: "discard" },
      });

      if (nGlobes > 0) {
        const slot = UNIFORM_STRIDE / 4;
        const dpr = canvas.width / Math.max(1, canvas.clientWidth);
        for (let i = 0; i < nGlobes; i++) {
          const q = globesAt + i * GLOBE_FLOATS, o = i * slot;
          globeUniforms.set([p[q + 1], p[q + 2], p[q + 3], p[q + 4]], o);                  // rect
          globeUniforms.set([canvas.clientWidth, canvas.clientHeight, dpr, p[q + 5]], o + 4); // view
          globeUniforms.set([p[q + 6], p[q + 7], p[q + 8], 0], o + 8);                      // right
          globeUniforms.set([p[q + 9], p[q + 10], p[q + 11], 0], o + 12);                   // up
          globeUniforms.set([p[q + 12], p[q + 13], p[q + 14], 0], o + 16);                  // forward
          globeUniforms.set([p[q + 15], p[q + 16], p[q + 17], 1], o + 20);                  // space
        }
        device.queue.writeBuffer(globeUniformBuf, 0, globeUniforms, 0, nGlobes * slot);
        pass.setPipeline(pipeGlobe);
        for (let i = 0; i < nGlobes; i++) {
          const gl = globes.get(p[globesAt + i * GLOBE_FLOATS]);
          if (!gl) continue;
          pass.setBindGroup(0, gl.bindGroup, [i * UNIFORM_STRIDE]);
          pass.draw(6);
        }
      }

      if (has3D) {
        // Uniform slot 0: no offset (per-frame spheres and lines); slot
        // i+1: star-field draw i, offset by that field's origin.
        const slot = UNIFORM_STRIDE / 4;
        for (let s = 0; s <= nDraws; s++) {
          const o = s * slot;
          uniforms.set(p.subarray(0, 16), o);
          uniforms.set(p.subarray(16, 19), o + 16);
          uniforms.set(p.subarray(19, 22), o + 20);
          if (s === 0) uniforms.fill(0, o + 24, o + 28);
          else uniforms.set(p.subarray(drawsAt + (s - 1) * 4 + 1, drawsAt + (s - 1) * 4 + 4), o + 24);
        }
        device.queue.writeBuffer(uniformBuf, 0, uniforms, 0, (nDraws + 1) * slot);

        const opaqueAt = globesAt + p[31] * GLOBE_FLOATS;
        const transAt = opaqueAt + nOpaque * SPHERE_FLOATS;
        const linesAt = transAt + nTrans * SPHERE_FLOATS;
        const sphereBytes = (nOpaque + nTrans) * SPHERE_FLOATS * 4;
        if (sphereBytes > 0) {
          [dynSpheres, dynSpheresSize] = ensureBuffer(dynSpheres, dynSpheresSize, sphereBytes);
          device.queue.writeBuffer(dynSpheres, 0, p.buffer, p.byteOffset + opaqueAt * 4, sphereBytes);
        }
        const lineBytes = nLines * LINE_FLOATS * 4;
        if (lineBytes > 0) {
          [dynLines, dynLinesSize] = ensureBuffer(dynLines, dynLinesSize, lineBytes);
          device.queue.writeBuffer(dynLines, 0, p.buffer, p.byteOffset + linesAt * 4, lineBytes);
        }

        pass.setPipeline(pipeOpaque);
        for (let d = 0; d < nDraws; d++) {
          const f = fields.get(p[drawsAt + d * 4]);
          if (!f || f.count === 0) continue;
          pass.setBindGroup(0, bindGroup, [(d + 1) * UNIFORM_STRIDE]);
          pass.setVertexBuffer(0, f.buf);
          pass.draw(6, f.count);
        }
        pass.setBindGroup(0, bindGroup, [0]);
        if (nOpaque > 0) {
          pass.setVertexBuffer(0, dynSpheres);
          pass.draw(6, nOpaque);
        }
        if (nLines > 0) {
          pass.setPipeline(pipeLines);
          pass.setVertexBuffer(0, dynLines);
          pass.draw(nLines * 2);
        }
        if (nTrans > 0) {
          pass.setPipeline(pipeTranslucent);
          pass.setVertexBuffer(0, dynSpheres, nOpaque * SPHERE_FLOATS * 4);
          pass.draw(6, nTrans);
        }
      }
      pass.end();
      device.queue.submit([encoder.finish()]);
    },
  };
})();
