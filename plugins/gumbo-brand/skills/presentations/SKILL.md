---
name: presentations
description: Create and style Gumbo-branded presentations, pitch decks, slide sequences, case-study slides, and PPTX deliverables using the bundled slide templates. Use for any Gumbo deck or slide task. Apply the foundations, layouts, and visual-assets companions alongside this skill.
---

# Gumbo Presentations

Resolve `${CLAUDE_PLUGIN_ROOT}` to the installed plugin root. Claude expands it directly. In Codex, resolve this file and go from `skills/presentations/` up to the plugin root. Run `node "<plugin-root>/scripts/verify-install.mjs"` before using resources; stop if verification fails.

Apply the companions whose frontmatter names are `foundations`, `layouts`, and `visual-assets` before authoring slides.

Create the initial deck structure before writing slides:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/create-html.mjs" \
  --type deck \
  --out ./gumbo-deck.html
```

Edit that generated source or replace its pages with matching structures from `templates/slides/`. Do not recreate the theme, wordmark, or immersive treatment from scratch.

## Presentations (PPTX)

Read the `pptx` SKILL.md alongside this one. Use **Tier 1** type scale. 1920×1080 (16:9). Pika icons for all iconography. Gumbo wordmark on every slide — `wordmark-white.svg` on dark, `wordmark-black.svg` on light, bottom-left, ~104px wide.

### The Slide Skeleton

Almost every Gumbo slide follows the same two-zone structure:

**Zone 1 — Header area** (top ~30% of slide, `y: 0` to `~316px`):
- Split-header layout: heading left (~1/3), body copy right (~2/3)
- Heading starts at `x: ~100px`, `y: ~70px`
- Body copy starts at `x: ~430px`, same baseline as heading
- A `1px solid #e8e8e8` horizontal divider separates Zone 1 from Zone 2

**Zone 2 — Content stage** (bottom ~70% of slide, `y: ~316px` to `1080px`):
- A single large rounded container fills this zone: `border-radius: 16px`, background `#f3f3f3` or `1px solid #e8e8e8` on white
- OR a full-bleed immersive image/blue background fills this zone edge-to-edge
- Content (cards, screenshots, timelines, grids) lives inside this stage container
- The stage container has internal padding of `48-64px`

Not every slide uses both zones — immersive slides (like the opener) fill the entire canvas. But the split-header + content-stage pattern is the backbone.

### Context labels

Use a context label only when it adds information the heading does not. Write it in sentence case without decorative punctuation, for example `Gumbo AI audit system`, `Our core philosophy`, or `DermSquared case study`. Use SF Pro Medium at `11-13px`, `#727272` on clean slides or `rgba(255,255,255,0.6)` on immersive slides, normal tracking, and a minimum `16px` gap above the heading.

### Slide Types (from the reference deck)

**Type 1: Immersive Opener**
Full-bleed halftone image covering the entire slide. One short statement (2-4 words, Space Grotesk, ~72px) positioned left at vertical center. Thin horizontal divider below the text. Gumbo wordmark right-aligned at roughly the same vertical position as the headline. Date or context label bottom-right, small (`13px`, `rgba(255,255,255,0.6)`). No content stage — the image IS the slide.

**Type 2: Split-Header + Content Stage (Clean)**
The default workhorse slide. Zone 1 is the split-header. Zone 2 is a `#f3f3f3` rounded stage containing cards, illustrations, icons, or other visual content. Used for: "How we work", "Why now", team grids, timelines.

**Type 3: Split-Header + Hero Band**
Zone 1 is the split-header on a white background. Zone 2 is a halftone image band (full-bleed width, `~764px` tall) with the Gumbo pot icon centered as a watermark (`96px`, white, `40%` opacity). Used for intro/about slides.

**Type 4: Immersive Staircase**
Zone 1 is the split-header on white. Zone 2 is a full-bleed immersive blue/halftone background with 3 offerings stepping diagonally from top-left to bottom-right. Each step has: a small number prefix (`01`, `02`, `03` in SF Pro, `14px`), a bold heading (Space Grotesk, `~28px`), 2-3 lines of body text, and a small product screenshot (`~200×140px`, `8px` radius). The steps are offset vertically by `~120px` and horizontally by `~300px`.

**Type 5: Split-Header + Product Screenshots**
Zone 1 is the split-header. Zone 2 has product UI screenshots — raw panels (not device mockups), slightly overlapping, with subtle `1px` borders and `8px` radius. Screenshots can bleed off the right edge of the slide. Left side of Zone 2 may contain body text explaining the work.

**Type 6: Case Study**
Left ~35% of the slide, top-to-bottom: an optional sentence-case context label (`Client name case study`, `13px`, `#727272`), then a large heading (Space Grotesk, `~56px`) with an inline stat badge (e.g., `↓50%` in a `#2563eb` pill, SF Compact Rounded), then a subtitle line, then 2-3 body paragraphs. Right ~60% of the slide: product screenshots stacked/overlapping, bleeding off the right edge. No formal content stage — the screenshots compose freely.

**Type 7: Philosophy / Deep-Dive**
Left ~35% for a section label overline + large heading + subtitle + extended body copy (3+ paragraphs — this is the one slide type where longer text is okay). Right ~60% for a product screenshot composite. No content stage container. The slide feels more editorial.

**Type 8: Three-Column Cards**
Split-header at top. Below the divider, a content stage containing 3 equal cards (`~280px` wide, `#f3f3f3` background or `1px solid #e8e8e8`, `16px` radius, `24px` internal padding). Each card has: an illustration or icon composition at the top, then description text below the card (not inside). An optional horizontal arrow or timeline connects the cards to show progression.

**Type 9: Team Grid**
Split-header at top ("The Team" + body copy). Content stage below containing a 4×2 grid of portrait cards. Each card: `#f3f3f3` background, `8px` radius, portrait illustration filling the card. Below each card: `Name · Role Type` in SF Pro, `15-17px`. Human portraits are realistic; agent portraits use the halftone treatment.

**Type 10: Milestone Timeline**
Split-header at top. Content stage with 3 milestone columns, each with: a label above (`Milestone 1 (Day 1)`), a diamond marker on a horizontal line, and a card below with heading + body + participant badges (small pills with cursor icons, colored by type — gold for `GUMBO`, blue for `AGENT`). Optional checklist or status indicators inside cards.

**Type 11: CTA / Closing**
Left ~40%: pot icon at `64px`, large heading ("Let's Start", Space Grotesk, `~56px`), body paragraph. Right ~55%: halftone image with a floating card overlaid ("Book an audit" + button, `16px` radius, white background, subtle shadow). Below: contact emails with Pika mail icons, left-aligned. Website link right-aligned. Gumbo wordmark bottom-left.

### Recommended Deck Sequence

A standard Gumbo pitch deck follows this arc. Adapt based on content, but respect the rhythm of immersive → clean → immersive transitions:

1. **Immersive Opener** — one bold statement, full-bleed halftone
2. **Split-Header + Hero Band** — "Who we are" introduction
3. **Three-Column Cards** — core differentiators or values (clean)
4. **Split-Header + Product Demo** — show the product/platform
5. **Immersive Staircase** — service offerings or approach (3 steps)
6. **Philosophy Deep-Dive** — the "why" behind the approach
7. **Three-Column Progression** — concept evolution or process (with arrow)
8. **Case Study A** — client story with stat + screenshots
9. **Case Study B** — second client story
10. **CTA / Closing** — "Let's Start" with booking CTA and contacts
11. **Team Grid** — humans + agents
12. **Milestone Timeline** — how an engagement unfolds

Not every deck needs all 12. The minimum viable deck is: Opener → Intro → Differentiators → Case Study → CTA (5 slides).

### Slide Transitions and Pacing

- Never put two immersive slides back-to-back. Alternate: immersive → clean → clean → immersive → clean.
- Case studies always come in pairs when possible. Two stories are more convincing than one.
- The CTA slide should feel like a natural conclusion, not an afterthought. The body copy on this slide should reference what was covered in the deck.
- Every slide should be readable in 10 seconds or less. If there's too much text, split it into two slides.

### Slide Template Library

Slide templates live in `${CLAUDE_PLUGIN_ROOT}/templates/slides/`. Each template is a `.md` file containing a ready-to-use HTML skeleton extracted from the Figma reference deck, with usage notes.

**How to use templates:**

1. Read `${CLAUDE_PLUGIN_ROOT}/templates/INDEX.md` first. It has a table of all templates with ID, name, mode (clean/immersive), and content-type tags.
2. Match the user's content purpose to the `Content Types` column. If the user names a specific slide type, use that template directly.
3. Read the matching template file. Copy the HTML skeleton from the `## HTML Skeleton` section.
4. Replace placeholder text (heading, body, section label) with the user's actual content.
5. Fill image placeholders (marked with `<!-- IMAGE: ... -->`) with brand photography from `${CLAUDE_PLUGIN_ROOT}/assets/photography/` or user-supplied images.
6. Inline the correct wordmark SVG from `${CLAUDE_PLUGIN_ROOT}/assets/logo/`: white on dark/immersive backgrounds, black on light/clean backgrounds.
7. If no template matches, fall back to `02` (Split-Header + Content Stage).

**Template file structure:**

Each template `.md` file has:
- **Frontmatter**: `id`, `name`, `mode`, `content-types`, `figma-source`
- **HTML Skeleton**: a complete `<div class="page">` block with inline styles using CSS custom properties. Copy this directly into your slide HTML.
- **Usage Notes**: when to use this type, what content fits, sizing guidance, and gotchas.

**Building a multi-slide deck:**

Assemble slides by stacking multiple `.page` divs inside a single HTML file. Include the CSS Custom Properties block (from this document) once in a `<style>` tag. Each `.page` div is one slide. Export with:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/html-export.mjs" deck.html deck.pdf --size slide
```

**Minimum viable deck**: Opener (01), Intro (02 or 03), Services (05), Case Study (06), CTA (07).

### Adding New Slide Templates

When extracting a new slide layout from Figma:

1. Call `get_design_context` with the frame's `fileKey` and `nodeId` from the Figma MCP.
2. Translate the returned layout code to inline-styled HTML using CSS custom properties for colors, fonts, radii, and spacing tokens.
3. Replace raw hex values with the matching `var(--gumbo-*)` token. Prefer Figma's measured spacing over SKILL.md approximations.
4. Create a new `.md` file in `${CLAUDE_PLUGIN_ROOT}/templates/slides/` following the frontmatter + skeleton + usage notes format.
5. Add a row to `${CLAUDE_PLUGIN_ROOT}/templates/INDEX.md`.
6. Assign content-type tags that describe the slide's purpose, not its visual structure.
