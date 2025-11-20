# rollylindenshnizzer’s Site

> A tiny, single-page hub for my tools & experiments, with live Beat Saber map data pulled from BeatSaver.

---

## Overview

This repository contains the source for **my personal landing page** – a compact “tool index” plus a Beat Saber map browser, all implemented in a single `index.html` file.

The page is built with **pure HTML, CSS, and vanilla JavaScript**. There are **no external dependencies, frameworks, or build steps** – just open the file in a browser or host it with GitHub Pages.

---

## Features

### 🔧 Tool index

- Card-based layout for listing tools and experiments.
- Each tool card includes:
  - Title and short description
  - A tag (e.g. *Minecraft utility*)
  - A pill-style metadata label (e.g. *JSON-focused*)
  - A primary action link (e.g. *Open tool ↗*)
- Currently includes:
  - **Minecraft JSON Generator** – a utility for quickly generating Minecraft-ready JSON snippets (loot tables, advancements, blockstates, etc.) without hand-writing every brace.

You can easily add more tools by copying and modifying the existing card markup.

---

### 🎵 Beat Saber map browser

- A **collapsible “Beat Saber maps” section** that loads on demand when you expand it.
- Uses the **BeatSaver public API** to pull maps from a specific user profile.
- Fetches **all maps across pages**, merges them, and sorts by upload date.
- Renders a card for each map with:
  - Song name and (if available) sub-name
  - Short description / mapper notes
  - BPM and duration (formatted `M:SS`)
  - Upload date (in local time)
  - Rating percentage or download count
  - A link directly to the map’s page on BeatSaver

If no maps are found, a friendly “No maps found (yet ✨)” message is shown instead.

---

## Tech stack

- **HTML5** – semantic markup, no templating engine
- **CSS3** – custom styling with:
  - Glassmorphism-style panels
  - Soft glows and gradients
  - Responsive grid layout
- **Vanilla JavaScript** – for:
  - Dynamic BeatSaver API integration
  - Accessible toggle for the maps section
  - DOM-based rendering of map cards
  - Automatic current year in the footer

No bundlers, node modules, or external CSS/JS files are required.

---

## Project structure

```text
.
└── index.html   # Entire site (HTML, CSS, and JS in one file)
