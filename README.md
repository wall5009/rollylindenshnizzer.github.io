# rollylindenshnizzer’s site

A tiny, self-contained homepage that lists and routes to my personal tools — starting with a Minecraft JSON Generator.

## 🌐 What is this?

This repo contains a minimal static site with:

- A landing page: `index.html`
- A dedicated route for a tool: `MinecraftJsonGenerator.html`

The design is a clean, glassy, dark-themed hub meant to be easy to extend with more tools over time.

## 🧰 Current Tools

### 🪓 Minecraft JSON Generator

A link on the homepage that routes to `MinecraftJsonGenerator.html`.

Intended purpose:

- Generate Minecraft-ready JSON snippets
- Quickly draft things like loot tables, advancements, blockstates, etc.
- Avoid hand-writing every brace and comma

> Note: The actual generator logic/UI lives in `MinecraftJsonGenerator.html`. The homepage just acts as the hub.

## 📁 Structure

```text
.
├── index.html                 # Main landing page: "rollylindenshnizzer's site"
└── MinecraftJsonGenerator.html# Tool page (to be implemented / extended)
