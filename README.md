# tsg

This repo is the **root site of [srd-tools.com](https://srd-tools.com)** — a Traveller SRD (Science Fiction Role-Playing Game) toolset.

It hosts:
- **The Sector Generator** (`sector.html` / `sysgen.js`) — generates randomized star systems and sector maps, served directly from this repo at `/`.
- The homepage (`index.html`) linking out to the other Traveller design tools, each deployed independently under its own path:
  - **[Small Craft Designer](https://srd-tools.com/SmallCraftDesign/)** — `/SmallCraftDesign/*`, from [DavidLDawes/vehicles](https://github.com/DavidLDawes/vehicles)
  - **[Ship Designer](https://srd-tools.com/ShipDesign/)** — `/ShipDesign/*`, from [DavidLDawes/aid](https://github.com/DavidLDawes/aid) (`main` branch)
  - **[Capital Ship Designer](https://srd-tools.com/CapitalShipDesign/)** — `/CapitalShipDesign/*`, from [DavidLDawes/aid](https://github.com/DavidLDawes/aid) (`capital` branch)
  - **[Megastructure Designer](https://srd-tools.com/MegaDesign/)** — `/MegaDesign/*`, from [DavidLDawes/aid](https://github.com/DavidLDawes/aid) (`megastructure` branch)
  - **[Starship Architect](https://srd-tools.com/StarshipArchitect/)** — `/StarshipArchitect/*`, from [DavidLDawes/StarshipArchitetect](https://github.com/DavidLDawes/StarshipArchitetect)

## Architecture

All six routes share the single `srd-tools.com` zone on Cloudflare but are deployed as **separate Cloudflare Workers**, each with its own repo and its own [Workers Routes](https://developers.cloudflare.com/workers/configuration/routing/routes/) path pattern (`srd-tools.com/<prefix>` and `srd-tools.com/<prefix>/*`). This repo's Worker is `tsg-root`, mounted at `srd-tools.com/*` as the catch-all/root.

This repo serves its files as static [Workers Assets](https://developers.cloudflare.com/workers/static-assets/) — see `wrangler.jsonc`. `.assetsignore` excludes repo/tooling files (`.git`, `.github`, `node_modules`, etc.) and the other five apps' directories, which are deployed from their own repos, not from here.

## Deployment

Pushes to `main` auto-deploy to Cloudflare via GitHub Actions (`.github/workflows/deploy.yml`), which runs `wrangler deploy`. This requires two repo secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

All changes go through a branch + PR — nothing is pushed directly to `main`.

## Useful Commands

```bash
# Minify HTML
npx html-minifier --collapse-whitespace --remove-comments index.html -o mini/index.html

# Minify JavaScript
terser -c toplevel --mangle -- sysgen.js > sysgen-terser.js

# Deploy manually (normally handled by CI on merge to main)
npx wrangler deploy
```
