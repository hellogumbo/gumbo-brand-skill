---
name: gumbo-brand
description: Build any Gumbo-branded deliverable from the plugin's official assets, CSS theme, HTML starters, layouts, templates, and export scripts. Use whenever the user mentions Gumbo, asks for something on-brand, or creates a Gumbo deck, document, proposal, PDF, webpage, prototype, social image, email, or visual artifact. Selectively load the bundled reference modules and verify that the complete plugin—not an isolated Markdown file—is installed.
---

# Build with the Gumbo brand system

Treat the installed plugin root as the source of truth. Do not recreate logos, approximate the wordmark, substitute icon libraries, or improvise a new theme when bundled resources exist.

## Resolve and verify the plugin root

Resolve the plugin root before designing:

- Claude Code: use `${CLAUDE_PLUGIN_ROOT}`.
- Codex: resolve this `SKILL.md`, then go up from `skills/gumbo-brand/` to the plugin root.

Run:

```bash
node "<plugin-root>/scripts/verify-install.mjs"
```

Stop if verification fails. Report that the complete `plugins/gumbo-brand` directory must be installed. Never silently continue with prose-only styling.

## Route the deliverable

Read `references/foundations.md` for every branded deliverable. Then read only the matching internal reference modules:

| Request | Internal references | Start from |
|---|---|---|
| Deck, slides, pitch presentation | `layouts.md`, `visual-assets.md`, `presentations.md` | `templates/html/deck.html` or `templates/slides/` |
| Document, proposal, SOW, PDF | `layouts.md`, `visual-assets.md`, `artifacts.md` | `templates/html/document.html` |
| Website or React prototype | `layouts.md`, `visual-assets.md`, `artifacts.md` | `templates/html/web-page.html` |
| Social image or announcement | `layouts.md`, `visual-assets.md`, `artifacts.md` | `templates/html/social-card.html` |
| Brand guidance only | `foundations.md`, then any relevant supporting reference | No scaffold required |

These files are supporting instructions inside this skill, not independent skills. Do not search for or activate extra plugin-qualified skills. Ignore loose `~/.agents/skills/mcp-*` copies; they do not carry the shared assets and scripts.

## Build from executable starters

Prefer the deterministic scaffolder:

```bash
node "<plugin-root>/scripts/create-html.mjs" \
  --type document \
  --out ./gumbo-document.html
```

Supported types: `document`, `deck`, `web`, and `social`.

The scaffolder:

1. Reads the matching HTML structure from `templates/html/`.
2. Inlines the canonical Gumbo CSS theme.
3. Inlines the official wordmark SVG.
4. Embeds bundled halftone photography.
5. Produces one editable, self-contained HTML source.

Edit the generated source rather than rebuilding the structure from scratch. Use official Pika SVGs from `assets/icons/` when adding iconography.

## Review and export

For review/edit mode:

```bash
node "<plugin-root>/scripts/html-edit-server.mjs" \
  ./gumbo-document.html \
  --out ./gumbo-document.html \
  --pdf ./gumbo-document.pdf \
  --size letter
```

For direct export:

```bash
node "<plugin-root>/scripts/html-export.mjs" \
  ./gumbo-document.html \
  ./gumbo-document.pdf \
  --size letter
```

Export runs a mandatory brand audit before writing the file. It rejects all-caps phrases, decorative slash labels, non-zero tracking, crowded line height, clipped or out-of-canvas text, overlapping text blocks, and missing images. Fix every reported issue and export again; do not bypass the audit.

Render a PNG and inspect it after every structural or visual change. Retain the HTML beside the exported deliverable as its editable source.

## Resource map

Read the relevant module in `references/` before building:

- `foundations.md` — brand principles, typography, color, icons, and components
- `layouts.md` — spacing, visual composition, tables, charts, and layout blocks
- `visual-assets.md` — official photography, image generation, halftone treatment, and logos
- `presentations.md` — deck sequencing, slide structure, and slide templates
- `artifacts.md` — documents, HTML, web, social, React, export, and visual review
- `resources.md` — exact bundled resource inventory

The important resource roots are:

- `assets/theme/` — canonical CSS theme
- `assets/logo/` — official Gumbo marks
- `assets/photography/` — approved halftone imagery
- `assets/icons/` — Pika SVG library
- `templates/html/` — complete deliverable starters
- `templates/slides/` — individual slide structures
- `scripts/` — scaffold, verify, edit, and export workflows
