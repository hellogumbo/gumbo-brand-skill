# Gumbo resource map

Use these resources directly. Do not approximate or replace them.

## Theme and structure

- `assets/theme/gumbo.css` — complete tokens, typography, page shells, split headers, content stages, cards, stats, buttons, footers, and responsive rules.
- `templates/html/document.html` — Letter document/proposal structure.
- `templates/html/deck.html` — 16:9 multi-slide structure.
- `templates/html/web-page.html` — responsive marketing/product page structure.
- `templates/html/social-card.html` — 1200 × 627 social card structure.
- `templates/slides/` — seven content-specific slide skeletons.

## Official marks

- `assets/logo/wordmark-black.svg` — light backgrounds.
- `assets/logo/wordmark-white.svg` — dark and immersive backgrounds.
- `assets/logo/pot-icon.svg` — small or playful brand mark.
- `assets/logo/icon.svg` — compact lettermark.

Inline the SVG source. Never rebuild the wordmark with text.

## Photography

Use `assets/photography/hero-landscape-halftone.jpg` as the general default. Select another bundled image when its subject better fits the content. Keep the approved halftone treatment intact.

## Iconography

Use SVGs from `assets/icons/stroke/` by default. Use `contrast/` only for larger illustrative moments. Never substitute Lucide, Heroicons, Font Awesome, emoji, or generated glyphs.

## Scripts

- `scripts/verify-install.mjs` — fail fast when the installed plugin is incomplete.
- `scripts/create-html.mjs` — create a self-contained deliverable from a starter.
- `scripts/html-edit-server.mjs` — inspect, edit, save, and export locally.
- `scripts/html-export.mjs` — render PDF or PNG with Puppeteer.
- `scripts/smoke-test.mjs` — exercise verification and all four starters.

