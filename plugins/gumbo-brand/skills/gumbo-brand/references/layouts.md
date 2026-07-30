# Gumbo Layout System

Use the plugin root already resolved and verified by `../SKILL.md`. Apply `foundations.md` alongside this reference for colors, typography, artboard tiers, icons, imagery, and logo rules.

## Contents

- [Spacing system](#spacing-system)
- [Vertical rhythm](#vertical-rhythm--block-spacing)
- [Layout blocks](#layout-blocks)
- [Data tables, charts, and graphs](#data-tables-charts--graphs)

## Spacing System

Spacing is built on a base-8 scale. Use the right token for the right job — don't just guess a pixel value.

| Token | Value | When to use |
|-------|-------|-------------|
| `--space-1` | 4px | Inline icon-to-text gaps, tight padding inside small badges |
| `--space-2` | 8px | Between related elements: icon + label, input + helper text |
| `--space-3` | 12px | Small internal padding in compact components (tags, small cards) |
| `--space-4` | 16px | Default inner padding for cards, default gap between list items |
| `--space-6` | 24px | Standard card padding, gap between form fields, content sections within a block |
| `--space-8` | 32px | Large card padding on Tier 1, gap between layout blocks on small canvases |
| `--space-12` | 48px | Gap between layout blocks on Tier 2 canvases |
| `--space-16` | 64px | Gap between layout blocks on Tier 1 canvases, major section breaks |
| `--space-24` | 96px | Top/bottom page margin on Tier 1, hero block vertical padding |
| `--space-32` | 128px | Maximum breathing room — only on Tier 1 when the layout calls for dramatic whitespace |

**General rule**: Use `--space-6` (24px) as the default when you're unsure. It works for most card padding and content gaps. Scale up for block-to-block spacing, scale down for element-to-element spacing.

## Vertical Rhythm — Block Spacing

Blocks stack vertically. The gap between them is as important as the blocks themselves. Too tight and the page feels cramped; too loose and it falls apart.

| Canvas | Gap between blocks | Gap after Hero Band | Page margins (top/bottom) | Page margins (left/right) |
|--------|-------------------|---------------------|--------------------------|--------------------------|
| Tier 1 (1920×1080) | 64px | 48px | 96px top, 64px bottom | 120px |
| Tier 1 (1440w web) | 64px | 48px | 80px top, 64px bottom | 80px (max-width: 1200px centered) |
| Tier 2 (816×1056) | 32px | 24px | 48px top, 32px bottom | 48px |
| Tier 2 (A4 595×842) | 28px | 20px | 36px top, 28px bottom | 36px |
| Tier 2 (social 1200w) | 32px | 24px | 32px all sides | 48px |
| Tier 3 (1080×1080) | 24px | 16px | 48px all sides | 48px |
| Tier 4 (story 1080×1920) | 32px | 24px | 64px top, 48px bottom | 48px |

**Rule**: When two immersive blocks are adjacent (rare), collapse the gap to 0 — they should feel like one continuous surface. When a clean block follows an immersive block, use 1.5× the standard gap to give the transition room.

## Layout Blocks

Gumbo layouts are modular — built from composable blocks, not rigid templates. Each block has its own internal logic. Assemble them in sequence to build any document, deck, or artifact.

All specs below use Tier 1 (1920×1080) as the reference. Scale proportionally for other tiers using the ratios in the spacing system.

### Block: Content Stage

The large rounded container that holds visual content below a split-header. This is a signature Gumbo pattern — it creates a distinct "canvas within a canvas" that separates the editorial header from the illustrative content.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Position | Below the split-header divider, `16px` gap | `12px` gap |
| Width | Full width of content area (edge-to-edge minus page margins) | Same |
| Height | Fills remaining slide/page height minus margins | Same |
| Background | `#f3f3f3` (default) or `1px solid #e8e8e8` on white | Same |
| Border radius | `16px` | `12px` |
| Internal padding | `48-64px` | `24-32px` |
| Content | Cards, grids, timelines, illustrations, screenshots — whatever the slide needs | Same |

On immersive slides, the content stage is replaced by a full-bleed halftone or blue background — no rounded container, just edge-to-edge coverage.

### Block: Hero Band

A halftone-treated image bleeding across the top of a page or slide, with the Gumbo wordmark positioned in the top-left corner.

| Property | Tier 1 (1920×1080) | Tier 2 (816×1056) | Tier 3 (1080×1080) |
|----------|-------------------|-------------------|-------------------|
| Image height | 360px (33% of slide) | 200px (~19% of page) | 320px (~30% of canvas) |
| Wordmark position | 48px from top, 48px from left | 24px from top, 24px from left | 32px from top, 32px from left |
| Wordmark width | 160px | 100px | 120px |
| Image treatment | Halftone, full-bleed width | Halftone, full-bleed width | Halftone, full-bleed width |
| Overlay | Optional `rgba(30,58,138,0.3)` for text legibility | Same | Same |

### Block: Split Header

The signature Gumbo pattern. Heading anchored left, body copy flowing right. A thin horizontal divider often sits below.

| Property | Tier 1 | Tier 2 | Tier 3 |
|----------|--------|--------|--------|
| Heading column | 33% width (left) | 35% width (left) | 40% width (left) |
| Body column | 60% width (right, with 7% gutter) | 58% width (right, with 7% gutter) | 55% width (right, with 5% gutter) |
| Divider below | `1px solid #e8e8e8`, full width, `16px` below content | `1px solid #e8e8e8`, full width, `12px` below | `1px solid #e8e8e8`, full width, `8px` below |
| Heading size | Display / H1 from tier scale | Title / H1 from tier scale | Headline from tier scale |
| Body size | Body Large from tier scale | Body from tier scale | Body from tier scale |
| Vertical alignment | Heading baseline aligns with first line of body copy | Same | Top-aligned |

### Block: Icon Strip

A horizontal row of Pika icons, evenly spaced, each with a short label centered below.

| Property | Tier 1 | Tier 2 | Tier 3 |
|----------|--------|--------|--------|
| Icon count | 4-6 across | 3-5 across | 3-4 across |
| Icon size | 48px | 24px | 32px |
| Icon stroke-width | `2` (default) | `1.5` (lighter at small sizes) | `2` |
| Icon color | `#111111` (clean) or `#ffffff` (immersive) | Same | Same |
| Label font | SF Pro Medium, 13px | SF Pro Medium, 9px | SF Pro Medium, 12px |
| Icon-to-label gap | 12px | 8px | 10px |
| Icon-to-icon gap | Equal distribution across available width | Same | Same |
| Background | None — icons sit directly on the surface | Same | Same |

### Block: Case Study Pair

Two case studies side by side (or stacked on Tier 3 / small canvases). In presentations, case studies often get a full slide each (see Slide Types).

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Layout | 2 columns, 48px gutter | 2 columns, 24px gutter (or stacked) |
| Context label | Optional `Client name case study` format. SF Pro Medium, 13px, `#727272`, sentence case, normal tracking | SF Pro Medium, 9px, `#727272`, sentence case, normal tracking |
| Heading | Space Grotesk, H3 from tier | Space Grotesk, H3 from tier |
| Body | SF Pro, Body from tier, 2-3 sentences max | Same |
| Stat callout | SF Compact Rounded inside a `#2563eb` badge, white text, `border-radius: 9999px`, `8px 16px` padding | Same pattern, scaled to tier |
| Deliverables list | 3 items max, prefixed with `·`, SF Pro Body, `8px` between items | Same |
| Overline-to-heading gap | 8px | 6px |
| Heading-to-body gap | 12px | 8px |
| Body-to-stat gap | 16px | 12px |

### Block: Value Props Strip

3-4 small cards in a horizontal row. Informational and compact.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Card count | 3-4 | 3 (or 2 on A4) |
| Card border | `1px solid #e8e8e8` | Same |
| Card background | None (transparent) | Same |
| Card padding | 24px | 16px |
| Card radius | 8px | 6px |
| Card-to-card gap | 24px | 16px |
| Heading | Space Grotesk, H4, `#111111` | Space Grotesk, H4, `#111111` |
| Body | SF Pro, Body, `#444444`, 1-2 lines | Same |
| Heading-to-body gap | 8px | 6px |

### Block: Immersive Split

Full-bleed photo or blue background with a vertical divide.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Background | Halftone image or gradient `#1e40af` → `#2563eb` | Same |
| Divider | `2px solid rgba(255,255,255,0.4)`, vertical, centered | `1px solid rgba(255,255,255,0.3)` |
| Left column | 45% width, heading + body, white text | 45%, same |
| Right column | 45% width, bullets or stats or pull quote, white text | 45%, same |
| Column gap | 10% (the divider sits in this gap) | Same ratio |
| Text color | `#ffffff` primary, `rgba(255,255,255,0.6)` secondary | Same |
| Padding | 64px vertical, 80px horizontal | 32px vertical, 36px horizontal |

### Block: Three-Column Cards

Equal-width cards for features, process steps, or comparisons.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Card count | 3 (or 2) | 3 (or stacked) |
| Card background | `#f3f3f3` | Same |
| Card radius | 8px | 6px |
| Card padding | 24px | 16px |
| Card-to-card gap | 24px | 16px |
| Visual area | Top portion of card — illustration, icon composition, or screenshot. Aspect ratio 16:10, fills card width | Same |
| Description | Below the card (not inside), SF Pro Body, `12px` gap between card and description | Same, `8px` gap |

### Block: Milestone Timeline

Horizontal line with diamond markers at each milestone.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Line | `2px solid #e8e8e8`, horizontal, centered vertically in the block | `1px solid #e8e8e8` |
| Diamond markers | `12px` rotated squares, `#2563eb` fill | `8px` rotated squares |
| Diamond-to-card gap | 16px below diamond | 12px |
| Card width | Auto, distributed equally | Same |
| Card content | Space Grotesk H4 + SF Pro Body (2 lines max) | Same |

### Block: Staircase

Three offerings or steps descending diagonally on an immersive background. Each step is offset down and right from the previous one.

| Property | Tier 1 |
|----------|--------|
| Background | Full-bleed halftone image or blue gradient |
| Step count | 3 (always) |
| Step layout | Each step offset `~120px` down and `~300px` right from the previous |
| Step number | SF Pro Regular, `14px`, `rgba(255,255,255,0.6)`, above heading (`01`, `02`, `03`) |
| Step heading | Space Grotesk, `~28px`, `#ffffff` |
| Step body | SF Pro, `15-17px`, `rgba(255,255,255,0.8)`, 2-3 lines max |
| Step screenshot | Optional, `~200×140px`, `8px` radius, positioned to the right of or below the text |
| Text color | All white / white-alpha |

### Block: Product Screenshot Composite

Raw product UI panels arranged on a slide — overlapping, stacked, or side-by-side. Not wrapped in device mockups.

| Property | Tier 1 |
|----------|--------|
| Screenshot style | Raw UI panels with `1px solid #e8e8e8` border, `8px` radius |
| Shadow | Very subtle if any — `0 2px 8px rgba(0,0,0,0.06)` max |
| Layout | Screenshots can overlap slightly (10-20px), can bleed off the right edge of the slide |
| Sizing | Primary screenshot `~600-900px` wide, secondary panels smaller |
| Position | Right ~60% of the slide, or filling the content stage |

### Block: Footer

Dark background with CTA and contact info.

| Property | Tier 1 | Tier 2 |
|----------|--------|--------|
| Background | `#111111` | Same |
| Padding | 64px vertical, 80px horizontal | 32px vertical, 36px horizontal |
| CTA text | Space Grotesk, H2 from tier, `#ffffff` | Space Grotesk, H2, `#ffffff` |
| Wordmark | `wordmark-white.svg`, bottom-left, 120px wide | 80px wide |
| Contact | SF Pro, Body from tier, `rgba(255,255,255,0.6)`, right-aligned | Same |

### Block: Social Statement

For social media — one confident statement, not a miniature deck.

| Property | Tier 3 (square) | Tier 4 (story) | Tier 2 (landscape) |
|----------|----------------|----------------|-------------------|
| Background | Halftone image or `#ffffff` | Halftone image or `#ffffff` | Same |
| Headline | Tier-appropriate headline size, centered vertically, left-aligned | Same | Same |
| Max text lines | 3 | 2 | 2 |
| Wordmark | Bottom-left or bottom-right, 80px wide | Bottom-center, 80px | Bottom-left, 100px |
| Padding | 48px all sides | 48px horizontal, 64px vertical | 48px all sides |

## Data Tables, Charts & Graphs

When presenting data, the same brand principles apply: clean, flat, purposeful.

### Tables

| Property | Value |
|----------|-------|
| Header row background | `#111111` |
| Header text | SF Pro Medium, `#ffffff`, tier-appropriate Label size |
| Header cell padding | `12px 16px` (Tier 1), `8px 12px` (Tier 2) |
| Body cell padding | `12px 16px` (Tier 1), `8px 12px` (Tier 2) |
| Body text | SF Pro Regular, `#111111`, tier-appropriate Body size |
| Row dividers | `1px solid #e8e8e8` |
| Alternating rows | Optional: odd rows `#ffffff`, even rows `#fafafa` |
| Cell alignment | Text left, numbers right, status badges center |
| Border radius | `8px` on the outer table container only |
| Number formatting | SF Compact Rounded for highlighted metrics, SF Pro for standard numbers |

### Charts

**Color sequence for data series** — use in this order, wrap if more than 6 series:

1. `#2563eb` (Hyper-Roux Blue)
2. `#111111` (Black)
3. `#93c5fd` (Blue 300)
4. `#d65c73` (Cayenne)
5. `#6a9d62` (Okra)
6. `#f97316` (Orange)

| Property | Value |
|----------|-------|
| Axis labels | SF Pro Regular, `#727272`, tier-appropriate Caption size |
| Axis lines | `1px solid #e8e8e8` — x-axis only by default. Y-axis line optional. |
| Grid lines | `1px solid #f3f3f3`, horizontal only. Never vertical. |
| Value labels | SF Pro Medium, `#111111`, placed directly on or near data points |
| Legend | SF Pro Regular, `#444444`, horizontal layout below the chart, `16px` gap between items |
| Bar radius | `4px` top corners (top-left, top-right) on vertical bars |
| Line weight | `2px` stroke, no fill under the line unless explicitly needed |
| Pie/donut | Avoid if possible — bar or horizontal bar is almost always clearer. If required, `4px` gap between segments, no border. |
| Background | Transparent (sits on the page/card surface) |

### Stat Callouts (standalone)

When a metric needs to stand alone outside a chart:

| Property | Value |
|----------|-------|
| Number | SF Compact Rounded, Semibold, tier Stat size, `#2563eb` or `#111111` |
| Label | SF Pro Regular, tier Caption size, `#727272`, directly below the number |
| Number-to-label gap | 4px |
| Optional trend indicator | Small arrow icon (Pika) + `#6a9d62` (up/positive) or `#d65c73` (down/negative) |
