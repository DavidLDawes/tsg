// globetrotter.js: the browser side of render/canvas. The Go game records
// each frame as a flat command list (render/canvas/recorder.go) and hands it
// over in one call to frame(); this file interprets it onto a Canvas2D
// context. Opcodes and operand layouts must match recorder.go's Op* consts.
"use strict";

window.Globetrotter = (() => {
  const OP_CLEAR = 0, OP_FILL_RECT = 1, OP_STROKE_RECT = 2, OP_LINE = 3,
    OP_DISC = 4, OP_CIRCLE = 5, OP_TEXT = 6, OP_IMAGE = 7, OP_IMAGE_REGION = 8;

  // Text is laid out by the game using measure() below, so any font works;
  // monospace keeps widths close to raylib's default font on the desktop.
  const FONT_FAMILY = "monospace";

  let canvas = null, ctx = null, dpr = 1;
  // overlay: 2D is drawn on a transparent canvas above the WebGPU one, so
  // "clear" erases to transparent rather than painting the background.
  let overlay = false;
  const textures = [];
  const colors = new Map();

  // css converts a packed 0xRRGGBBAA colour to a cached CSS colour string.
  function css(packed) {
    let s = colors.get(packed);
    if (s === undefined) {
      const r = (packed >>> 24) & 255, g = (packed >>> 16) & 255,
        b = (packed >>> 8) & 255, a = (packed & 255) / 255;
      s = `rgba(${r},${g},${b},${a})`;
      colors.set(packed, s);
    }
    return s;
  }

  const font = (size) => `${size}px ${FONT_FAMILY}`;

  return {
    init(c, asOverlay) {
      canvas = c;
      overlay = !!asOverlay;
      ctx = c.getContext("2d", { alpha: overlay });
    },

    // resize matches the canvas's backing store to its CSS size at the
    // device pixel ratio (crisp on HiDPI screens) and returns the CSS size,
    // which is the game's coordinate space.
    resize() {
      dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth, h = canvas.clientHeight;
      const bw = Math.max(1, Math.round(w * dpr)), bh = Math.max(1, Math.round(h * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      return [w, h];
    },

    measure(text, size) {
      ctx.font = font(size);
      return Math.round(ctx.measureText(text).width);
    },

    uploadTexture(id, w, h, bytes) {
      let t = textures[id];
      if (!t || t.c.width !== w || t.c.height !== h) {
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        t = { c, x: c.getContext("2d"), img: new ImageData(w, h) };
        textures[id] = t;
      }
      t.img.data.set(bytes);
      t.x.putImageData(t.img, 0, 0);
    },

    // fetchBytes fetches url for a Go fetcher (cmd/webcountries), calling
    // done(status, bytes, error): the HTTP status and, for 200, the body as
    // a Uint8Array; status 0 and an error message if there was no response.
    fetchBytes(url, done) {
      fetch(url)
        .then(async (r) => [r.status, r.ok ? new Uint8Array(await r.arrayBuffer()) : null, ""])
        .catch((e) => [0, null, String(e)])
        .then(([status, bytes, err]) => done(status, bytes, err)); // exactly once
    },

    // download hands the player a file the game produced (Platform.SaveFile).
    download(name, bytes) {
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/octet-stream" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    },

    frame(bytes, nbytes, textsJoined, textCount) {
      const f = new Float64Array(bytes.buffer, bytes.byteOffset, nbytes / 8);
      const texts = textCount === 0 ? [] : textsJoined.split("\0");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = "top";

      // Consecutive discs of one colour (most of a star field) are filled
      // as a single path.
      let discColor = -1;
      const endDiscs = () => {
        if (discColor >= 0) {
          ctx.fill();
          discColor = -1;
        }
      };

      for (let i = 0; i < f.length;) {
        const op = f[i];
        if (op !== OP_DISC) endDiscs();
        switch (op) {
          case OP_CLEAR:
            if (overlay) {
              ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            } else {
              ctx.fillStyle = css(f[i + 1]);
              ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            }
            i += 2;
            break;
          case OP_FILL_RECT:
            ctx.fillStyle = css(f[i + 5]);
            ctx.fillRect(f[i + 1], f[i + 2], f[i + 3], f[i + 4]);
            i += 6;
            break;
          case OP_STROKE_RECT:
            ctx.strokeStyle = css(f[i + 6]);
            ctx.lineWidth = f[i + 5];
            ctx.strokeRect(f[i + 1], f[i + 2], f[i + 3], f[i + 4]);
            i += 7;
            break;
          case OP_LINE:
            ctx.strokeStyle = css(f[i + 6]);
            ctx.lineWidth = f[i + 5];
            ctx.beginPath();
            ctx.moveTo(f[i + 1], f[i + 2]);
            ctx.lineTo(f[i + 3], f[i + 4]);
            ctx.stroke();
            i += 7;
            break;
          case OP_DISC: {
            const color = f[i + 4];
            if (color !== discColor) {
              endDiscs();
              ctx.fillStyle = css(color);
              ctx.beginPath();
              discColor = color;
            }
            const x = f[i + 1], y = f[i + 2], r = Math.max(0.5, f[i + 3]);
            ctx.moveTo(x + r, y);
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            i += 5;
            break;
          }
          case OP_CIRCLE:
            ctx.strokeStyle = css(f[i + 4]);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(f[i + 1], f[i + 2], f[i + 3], 0, 2 * Math.PI);
            ctx.stroke();
            i += 5;
            break;
          case OP_TEXT:
            ctx.font = font(f[i + 3]);
            ctx.fillStyle = css(f[i + 4]);
            ctx.fillText(texts[f[i + 5]], f[i + 1], f[i + 2]);
            i += 6;
            break;
          case OP_IMAGE: {
            const t = textures[f[i + 1]];
            if (t) ctx.drawImage(t.c, f[i + 2], f[i + 3]);
            i += 4;
            break;
          }
          case OP_IMAGE_REGION: {
            // Canvas2D smooths scaled images (imageSmoothingEnabled),
            // bilinearly or better.
            const t = textures[f[i + 1]];
            if (t) ctx.drawImage(t.c, f[i + 2], f[i + 3], f[i + 4], f[i + 5], f[i + 6], f[i + 7], f[i + 8], f[i + 9]);
            i += 10;
            break;
          }
          default:
            throw new Error(`globetrotter: unknown opcode ${op} at ${i}`);
        }
      }
      endDiscs();
    },

    ready() {
      document.getElementById("status").remove();
      canvas.focus();
    },

    quit(message) {
      const s = document.createElement("div");
      s.id = "status";
      s.textContent = message;
      document.body.appendChild(s);
    },
  };
})();
