<#
.SYNOPSIS
    Copies the Globetrotter countries viewer (WebAssembly) into countries/.

.DESCRIPTION
    Builds the browser site of a Globetrotter checkout with its own
    build-web.ps1, then replaces countries/ here with the countries
    viewer's files from it: its page (as index.html), countries.wasm, the
    scripts it loads (wasm_exec.js, which must match the Go version that
    built the .wasm, globetrotter.js and webgpu.js) and the country map
    files (atlas/). The page loads them all by relative URL, so this site
    serves the viewer at srd-tools.com/countries/.

    Run it again, and commit the result, to update the viewer.

.PARAMETER Globetrotter
    The Globetrotter checkout to build. Defaults to ..\..\Globetrotter.
#>

param(
    [string]$Globetrotter = (Join-Path $PSScriptRoot "..\..\Globetrotter")
)

$ErrorActionPreference = "Stop"

$build = Join-Path ([System.IO.Path]::GetTempPath()) "tsg-countries-build"
if (Test-Path $build) { Remove-Item $build -Recurse -Force }

Push-Location $Globetrotter
try {
    & ./build-web.ps1 -OutDir $build
    if ($LASTEXITCODE) { exit $LASTEXITCODE }
    $commit = git rev-parse --short HEAD
} finally {
    Pop-Location
}

$out = Join-Path $PSScriptRoot "countries"
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
New-Item -ItemType Directory -Path $out | Out-Null
Copy-Item (Join-Path $build "countries.html") (Join-Path $out "index.html")
foreach ($f in "countries.wasm", "wasm_exec.js", "globetrotter.js", "webgpu.js") {
    Copy-Item (Join-Path $build $f) $out
}
Copy-Item (Join-Path $build "atlas") $out -Recurse
Remove-Item $build -Recurse -Force

Write-Host "Copied the countries viewer from Globetrotter $commit into $out"
