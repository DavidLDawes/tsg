# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Traveller SRD (Science Fiction Role-Playing Game System Reference Document) World Generator that creates randomized star systems and sector maps. It's a browser-based application that generates planetary systems with detailed characteristics including stars, planets, starports, atmospheres, populations, governments, and trade classifications.

## Build and Optimization Commands

```bash
# Minify HTML
npx html-minifier --collapse-whitespace --remove-comments index.html -o mini/index.html

# Minify JavaScript
terser -c toplevel --mangle -- sysgen.js > sysgen-terser.js
```

## Architecture

### Core Structure

- **index.html** - Single-page application with canvas-based hex map display and system information panel
- **sysgen.js** - Monolithic JavaScript file containing all generation logic, lookup tables, and UI interaction
- **hexagons.png** - Background image for the sector hex map

### Key Components

**Canvas Rendering (`generateCanvas`)**: Creates an 8x10 hex grid sector map. Systems are randomly placed (50% chance per hex). Each occupied hex displays its UWP (Universal World Profile) code. Canvas click detection matches screen coordinates to hex row/column for system selection.

**System Generation Pipeline** (called for each occupied hex):
1. `getStarsNum()` - Determines if system is single, binary, or triple star
2. `getStarsTypes()` - Assigns star types (A/F/G/K/M/L) and companion orbits
3. `getPlanets()` - Generates epistellar, inner, and outer planets including asteroid belts, dwarf planets, terrestrial worlds, and gas giants with satellites
4. `getWorld()` - Creates the mainworld details:
   - `getStarport()` - Quality from X (none) to A (excellent)
   - `getSize()` - Planetary diameter and gravity
   - `getAtmosphere()` - Type and pressure (size-dependent)
   - `getHydrology()` - Water coverage (size/atmosphere-dependent)
   - `getPopulation()` - Population level
   - `getGovernment()` - Government type (population-dependent)
   - `getLaw()` - Weapon restrictions (government-dependent)
   - `getTech()` - Technology level with modifiers from all other stats
   - `getCodes()` - Trade classifications (Ag, In, Hi, etc.)
   - `getUWP()` - Builds the compact UWP string

**Data Model**: Arrays indexed by system number store all generated values (`row[]`, `column[]`, `numStars[]`, `starport[]`, `size[]`, `atmos[]`, etc.). `currentSystem` tracks the displayed system.

**Random Number Generation**: Uses probability distributions matching Traveller dice mechanics:
- `zero2one()` - Coin flip (d2-1)
- `zero2five()` - 1d6-1
- `zero2ten()` - 2d6-2 (bell curve, 5 most likely)
- `zero2fifteen()` - 3d6-3 (bell curve, 7-8 most likely)

### Traveller UWP Format

The Universal World Profile is a compact notation: `ASAHTGL-T`
- A = Starport (X/E/D/C/B/A)
- S = Size (0-A)
- A = Atmosphere (0-F)
- H = Hydrosphere (0-A)
- T = Temperature (implied, not coded)
- G = Government (0-D)
- L = Law Level (0-9+)
- T = Tech Level (0-9, A-Z for 10+)

Example: `B687974-A` = Good starport, 9600km world, standard atmosphere, 70% water, 10 billion population, Charismatic Dictator government, No firearms allowed, Tech Level 10 (Early Stellar)

## Code Characteristics

- Pure vanilla JavaScript, no frameworks or build system required
- All lookup tables defined as global arrays at top of sysgen.js
- No modules or separation of concerns - all logic in one file
- Direct DOM manipulation via `document.getElementById()`
- Imperative procedural style throughout
- Switch statements often lack break statements intentionally (fall-through logic)
