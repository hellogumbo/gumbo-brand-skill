---
name: gumbo-brand
description: Apply Gumbo's brand identity to any output — presentations, documents, HTML artifacts, and React prototypes. Use whenever the user mentions "Gumbo", "gumbo brand", "on-brand", or wants outputs styled for Gumbo. Also trigger when creating any deliverable (deck, doc, artifact, report, social post) for Gumbo or its clients, even if the user doesn't explicitly say "brand." If this skill is available, assume all Gumbo-related outputs should use it. Always use Pika icons — never substitute with other icon libraries.
---

# Gumbo Brand System

Gumbo is an AI-first product and engineering studio. The brand communicates forward momentum, technical confidence, and human craft. Think: a team that ships fast, explains things plainly, and doesn't hide behind jargon.

This skill exists so that every output Claude produces for Gumbo — whether it's a pitch deck, a client report, an HTML prototype, a social post, or an internal doc — feels like it came from the same studio. Consistency is the goal, rigidity is not. Use judgment.

## Design Philosophy

The visual language lives in the tension between **precision and warmth**. Clean layouts that breathe. Typography that's confident but not loud. Color used with intention, not decoration. Photography treated through a halftone lens that bridges analog craft and digital future.

The signature layout pattern is the **split-header**: a large heading anchored left (~1/3 width) with body copy flowing to the right (~2/3 width). This rhythm shows up on nearly every surface and is the default starting point for any content layout.

Two visual modes alternate depending on context:

- **Clean mode**: white/light backgrounds for content that needs to breathe — data, explanations, process flows, case studies. Background `#ffffff` or `#fafafa`, text in `#111111` or `#252525`, card surfaces in `#f3f3f3`.
- **Immersive mode**: full-bleed photography with a deep blue overlay for narrative or emotional beats — title slides, section openers, big statements. Photo treatment uses a blue-tinted halftone/dot-matrix effect. When halftone isn't achievable, fall back to a solid `#2563eb` background or a dark blue gradient.

## What Gumbo Doesn't Look Like (Anti-Patterns)

This section matters as much as the design specs. AI-generated layouts tend toward the same safe defaults. Gumbo's visual language is the opposite of those defaults.

- **Don't center headings.** Anchor them left. Centered text is generic and passive. Left-anchored headings are confident.
- **Don't put body text inside colored containers.** Let text sit directly on the background. Colored boxes around text scream "template."
- **Don't use drop shadows on cards.** Surfaces are flat. Depth comes from the grayscale — `#f3f3f3` on `#ffffff` — not from shadows.
- **Don't split layouts 50/50.** Symmetry is boring. Go 1/3 + 2/3, or full-width, or asymmetric. The split-header is always weighted.
- **Don't stack everything vertically.** Use horizontal relationships. Three cards side by side. Stats in a row. Icons in a strip. Horizontal layouts feel intentional.
- **Don't add decorative elements.** No gradient backgrounds, no floating shapes, no abstract swooshes. Every element should have a purpose. When in doubt, remove something rather than add it.
- **Don't use generic stock photography.** Either use the halftone-treated brand images, a solid color, or nothing. An untreated stock photo instantly breaks the brand.
- **Don't over-use the brand blue.** It's powerful because it's used with restraint on clean layouts and fully committed on immersive ones. A page shouldn't be littered with blue accents.
- **Don't use rounded/bubbly buttons or components.** Keep border radii tight (4-8px for most elements). Rounded-full is for stat badges only, not for buttons or cards.

## Artboard Sizes

Always start from the right canvas size. Using the wrong artboard leads to wrong type sizing, wrong spacing, and wrong density — even if the colors and fonts are correct.

### Documents

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Letter one-pager | 816 × 1056 | 8.5 × 11" | Client one-pagers, proposals, flyers |
| Letter multi-page | 816 × 1056/page | 8.5 × 11" | Reports, SOWs, multi-page docs |
| A4 | 595 × 842 | 210 × 297mm | International documents |

### Presentations

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Slide deck | 1920 × 1080 | 16:9 | Pitch decks, internal presentations |

### Web

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Web desktop | 1440 wide, fluid height | — | Landing pages, dashboards, web apps |
| Web mobile | 390 wide, fluid height | — | Mobile views |

### Social

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Twitter/X post | 1200 × 675 | 16:9 | Post images, announcements |
| Twitter/X header | 1500 × 500 | 3:1 | Profile banner |
| LinkedIn post | 1200 × 627 | ~1.91:1 | Feed images |
| Instagram square | 1080 × 1080 | 1:1 | Feed posts |
| Instagram story | 1080 × 1920 | 9:16 | Stories, reels |
| OG / link preview | 1200 × 630 | ~1.91:1 | Link sharing cards |

## Colors

### Primary

**Gumbo Hyper-Roux Blue** `#2563eb` — The brand's signature color.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#eff6ff` | Lightest tint, subtle backgrounds |
| 100  | `#dbeafe` | Light backgrounds, hover states |
| 200  | `#bfdbfe` | Borders, secondary backgrounds |
| 300  | `#93c5fd` | Inactive elements, illustrations |
| 400  | `#60a5fa` | Supporting UI, links |
| 500  | `#3b82f6` | Interactive elements |
| 600  | `#2563eb` | **Primary — the brand blue** |
| 700  | `#1d4ed8` | Hover/pressed states on primary |
| 800  | `#1e40af` | Dark accents |
| 900  | `#1e3a8a` | Deepest blue, immersive overlays |

### Accents — use sparingly and with purpose

Each accent has a personality. Don't use them decoratively — use them when the meaning fits.

**Cayenne Red** `#d65c73` — Attention, urgency, or a warm pop.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#fdf2f4` | Lightest tint, subtle error backgrounds |
| 100  | `#fce4e8` | Light backgrounds, soft warnings |
| 200  | `#f5c4cc` | Borders, hover tints |
| 300  | `#e9a0ad` | Inactive/muted states |
| 400  | `#df7e8f` | Supporting accents |
| 500  | `#d65c73` | **Primary cayenne** |
| 600  | `#c44860` | Hover/pressed |
| 700  | `#b03a52` | Dark accent |
| 800  | `#932d43` | Deeper emphasis |
| 900  | `#7a2038` | Deepest red |

**Bayou Pine** `#38573e` — Depth, maturity, trust.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#f0f5f1` | Lightest tint |
| 100  | `#e0ebe2` | Light backgrounds |
| 200  | `#bdd4c0` | Borders, subtle fills |
| 300  | `#8fb396` | Muted/inactive |
| 400  | `#6b8f71` | Supporting accents |
| 500  | `#527a59` | Mid-range |
| 600  | `#436849` | Standard use |
| 700  | `#38573e` | **Primary pine** |
| 800  | `#2a4430` | Dark accent |
| 900  | `#1f3323` | Deepest green |

**Okra Leaf** `#6a9d62` — Growth, success, positive states.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#f3f8f2` | Lightest tint, success backgrounds |
| 100  | `#e6f0e4` | Light backgrounds |
| 200  | `#c8dec5` | Borders, subtle fills |
| 300  | `#a3cca0` | Muted/inactive |
| 400  | `#87b482` | Supporting accents |
| 500  | `#6a9d62` | **Primary okra** |
| 600  | `#578b50` | Hover/pressed |
| 700  | `#4a7a44` | Dark accent |
| 800  | `#3b6536` | Deeper emphasis |
| 900  | `#2d5228` | Deepest green |

**Creole Orange** `#f97316` — Energy, highlights, calls to action that need warmth.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#fff7ed` | Lightest tint |
| 100  | `#ffedd5` | Light backgrounds |
| 200  | `#fed7aa` | Borders, subtle fills |
| 300  | `#fdba74` | Muted/inactive |
| 400  | `#fb923c` | Supporting accents |
| 500  | `#f97316` | **Primary orange** |
| 600  | `#ea580c` | Hover/pressed |
| 700  | `#c2410c` | Dark accent |
| 800  | `#9a3412` | Deeper emphasis |
| 900  | `#7c2d12` | Deepest orange |

### Neutrals

| Token        | Hex       | Use |
|-------------|-----------|-----|
| Black 100   | `#111111` | Primary text, darkest backgrounds |
| Black 90    | `#444444` | Secondary text |
| Black 80    | `#5b5b5b` | Tertiary text |
| Black 70    | `#727272` | Muted text, captions |
| Black 60    | `#a1a1a1` | Placeholder text, disabled states |
| Black 50    | `#b9b9b9` | Borders (subtle) |
| Black 40    | `#d0d0d0` | Dividers |
| Black 30    | `#e8e8e8` | Subtle borders, separators |
| Black 20    | `#f3f3f3` | Card surfaces, input backgrounds |
| Black 10    | `#fafafa` | Page backgrounds (off-white) |
| White       | `#ffffff` | Surfaces, text on dark |

### Color on dark backgrounds

On immersive blue or dark backgrounds, text is always `#ffffff`. Use `rgba(255,255,255,0.6)` for secondary text and `rgba(255,255,255,0.2)` for subtle dividers or separators.

### Contrast Reference

Use these combinations for accessible text. All meet WCAG AA (4.5:1 for normal text, 3:1 for large text).

| Text Color | Background | Ratio | Use |
|------------|------------|-------|-----|
| `#111111` | `#ffffff` | 18.3:1 | Primary text on white — default |
| `#111111` | `#fafafa` | 17.4:1 | Primary text on off-white |
| `#111111` | `#f3f3f3` | 15.9:1 | Primary text on card surfaces |
| `#444444` | `#ffffff` | 9.7:1 | Secondary text on white |
| `#727272` | `#ffffff` | 4.6:1 | Muted text on white — minimum for body |
| `#ffffff` | `#2563eb` | 4.6:1 | White text on brand blue — passes AA large |
| `#ffffff` | `#1d4ed8` | 5.8:1 | White text on blue-700 — passes AA |
| `#ffffff` | `#111111` | 18.3:1 | White text on dark — immersive mode |
| `#ffffff` | `#1e3a8a` | 9.4:1 | White text on blue-900 — immersive overlays |

**Important**: `#a1a1a1` on `#ffffff` is only 2.6:1 — use only for placeholder/disabled text, never for readable content. If muted text must be accessible, use `#727272` as the minimum.

## Typography

### Heading: Space Grotesk

- **Weight**: Regular (400) — not Bold. The font carries enough character at regular weight.
- **Availability**: Freely available on [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk). Always load it for any HTML/web output.
- **Tracking**: Scales proportionally with size. The larger the text, the tighter it can be pulled. At body-sized headings the tracking should be normal. Never use tight tracking on small text.
- **Line height**: 1.0 for display headings (single-line), 1.1-1.2 for multi-line.
- **Fallback**: `'Space Grotesk', 'Inter', system-ui, sans-serif`

### Body: SF Pro

- **Weight**: Regular (400) for body, Medium (500) for labels and emphasis.
- **Line height**: 1.5-1.6 for readability.
- **Tracking**: Slightly negative at larger sizes (20px+), normal at standard body sizes.
- **Fallback**: `'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif`

SF Pro is an Apple system font. For PDF/PNG export via Puppeteer on macOS, it renders fine. For browser-viewed HTML, Inter is the cross-platform fallback. See "HTML Artifacts" for the full font strategy by output context.

### Data Display: SF Compact Rounded

- **Weight**: Medium (500) or Semibold (600).
- **Use**: Exclusively for stat callouts, metric badges, highlighted numbers, and data badges. The rounded forms give numbers a friendly precision that works for stats like "↓50%" or "180k+". Not for body text or headings.
- **Fallback**: `'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif`

### Canvas-Aware Type Scales

Typography must adapt to the canvas. The skill groups artboards into four tiers. Always use the right tier.

**How to pick a size within a role**: When a role shows two values (e.g., "72 / 64"), the first is the default. Use the second when the heading runs long (more than ~6 words) or when content density is high and the block needs to share space. If in doubt, use the larger value.

**Tier 1 — Large canvas** (presentations 1920×1080, web desktop 1440w):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Display / H1   | Space Grotesk     | Regular | 72 / 64px | -3%      | 1.0         |
| H2             | Space Grotesk     | Regular | 52 / 48px | -2%      | 1.05        |
| H3             | Space Grotesk     | Regular | 34 / 32px | -1%      | 1.2         |
| H4             | Space Grotesk     | Regular | 24px     | 0        | 1.3         |
| Body Large     | SF Pro            | Regular | 24 / 22px | -0.02em  | 1.5         |
| Body           | SF Pro            | Regular | 17px     | 0        | 1.6         |
| Label          | SF Pro            | Medium  | 13px     | 0        | 1.4         |
| Stat           | SF Compact Rounded| Medium  | 40 / 32px | -1%      | 1.0         |

**Tier 2 — Medium canvas** (Letter 816×1056, A4 595×842, social landscape 1200×675, LinkedIn 1200×627, OG 1200×630):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Title / H1     | Space Grotesk     | Regular | 32 / 28px | -1.5%    | 1.1         |
| H2             | Space Grotesk     | Regular | 22 / 20px | -0.5%    | 1.15        |
| H3             | Space Grotesk     | Regular | 15 / 14px | 0        | 1.2         |
| H4             | Space Grotesk     | Regular | 12px     | 0        | 1.3         |
| Body           | SF Pro            | Regular | 11 / 10px | 0        | 1.5         |
| Body Small     | SF Pro            | Regular | 9px      | 0        | 1.5         |
| Caption        | SF Pro            | Medium  | 9px      | 0.02em   | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 20 / 16px | -0.5%    | 1.0         |

**Tier 3 — Small/square canvas** (Instagram 1080×1080, web mobile 390w):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Headline       | Space Grotesk     | Regular | 44 / 36px | -2%      | 1.0         |
| Subhead        | Space Grotesk     | Regular | 22 / 20px | -1%      | 1.15        |
| Body           | SF Pro            | Regular | 15 / 14px | 0        | 1.5         |
| Caption        | SF Pro            | Medium  | 12 / 11px | 0        | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 44 / 32px | -1%      | 1.0         |

**Tier 4 — Tall/narrow canvas** (Instagram story 1080×1920, Twitter header 1500×500):

Stories and banners are special — they're either very tall or very wide, so type needs to be large and punchy with minimal copy. Favor one headline, one stat, or one statement. Don't try to fit paragraphs.

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Headline       | Space Grotesk     | Regular | 56 / 48px | -2%      | 1.0         |
| Supporting     | SF Pro            | Regular | 20 / 18px | 0        | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 64 / 48px | -1%      | 1.0         |

## Icons — Pika Icons (Non-negotiable)

**Always use Pika icons. Never substitute with Lucide, Heroicons, Font Awesome, or any other library.**

Pika icons are bundled in `assets/icons/` as SVGs. Designed on a 24px grid with 2px stroke weight. Default to the **stroke** style.

**Stroke-width by tier**: The default `stroke-width="2"` looks chunky at smaller render sizes. Adjust per tier:
- **Tier 1** (48px icons): `stroke-width="2"` (default)
- **Tier 2** (20-24px icons): `stroke-width="1.5"`
- **Tier 3+** (16px or smaller): `stroke-width="1.25"`

Available styles: `stroke` (default), `solid`, `duo-stroke`, `duo-solid`, `contrast`

27 categories: `general`, `arrows-&-chevrons`, `communication`, `devices`, `navigation`, `security`, `users`, `money-&-payments`, `chart-&-graph`, `files-&-folders`, `media`, `editing`, `development`, `ai`, `food`, `medical`, `sports`, `weather`, `building`, `automotive`, `appliances`, `apps-&-social`, `ar-&-vr`, `web3-&-crypto`, `alerts`, `time`, `maths`

### Using Pika Icons

**HTML/React:** Inline the SVG from `assets/icons/stroke/[category]/[name].svg`.

**Presentations:** Embed as SVG or PNG at 48-96px.

**Documents:** Embed as inline images at 16-20px.

### Bullet point pattern

For feature lists and deliverables: `[Pika icon] [thin vertical separator, 2px, 20% opacity] [text]`

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
| Overline | `CASESTUDY // CLIENT NAME` format. SF Pro Medium, 13px, `#727272`, uppercase, 0.08em tracking | SF Pro Medium, 9px, `#727272`, uppercase |
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

## Photography & Imagery

### The Halftone Treatment

Gumbo's signature photo treatment: retro computer halftone print texture with CRT scanlines, rasterized scan lines, subtle holographic grid. It bridges analog craft with digital futures.

Brand photography lives in `assets/photography/`:
- `hero-landscape-halftone.jpg` — pastoral landscape, teal sky, wide open plains. CTAs, closing slides.
- `sunburst-farmland-halftone.jpg` — farmland with halftone dots + sunburst rays. Section openers.
- `team-working-dark-halftone.jpg` — people at computers, dark moody blue. Dramatic intros.
- `team-computers-blue-halftone.jpg` — team collaboration, bright blue halftone. Hero slides.
- `digital-terrain-data-landscape.jpg` — aerial digital farmland, glowing cyan data points. Vision slides.

These images are pre-treated and ready to use. **Always use these bundled images first.** They cover the most common needs (hero bands, section openers, immersive backgrounds, closing slides). Read the file directly from `assets/photography/` and embed it. Only generate new images if none of the five work for the specific context.

### Generating Brand Images

When using an image generation tool, adapt the prompt to the aspect ratio and context:

**Base prompt structure:**
> Retro computer halftone print texture with CRT scanlines, subtle holographic grid emerging across the landscape, soft digital light rays stretching across the sky like a systems visualization, minimal composition, calm and spacious, [COLOR PALETTE] palette, [ASPECT RATIO GUIDANCE], designed as a UI background.

**Color palette options:**
- **Blue immersive**: `deep blue and cyan`
- **Teal landscape**: `cyan and white`
- **Dark moody**: `dark navy and steel blue`
- **Warm optimistic**: `teal, amber and white`

**Aspect ratio guidance** — append to the prompt:
- **16:9** (slides, Twitter): `wide cinematic composition, horizontal emphasis`
- **1:1** (Instagram square): `centered balanced composition, equal weight all sides`
- **9:16** (stories): `tall vertical composition, content stacked top-to-bottom`
- **~2:1** (LinkedIn, OG): `panoramic horizontal composition, expansive landscape`
- **3:1** (Twitter header): `ultra-wide banner composition, thin horizontal strip`

### Image Priority Order

1. **Bundled brand images** — use the five images in `assets/photography/`. These are the default. Pick the one that best fits the context.
2. **User-supplied images** — if the user provides additional brand-treated images, use those.
3. **Generate with NanoBanana** — only if none of the bundled images fit and the context demands something specific. Use the prompt structure above.
4. **Solid color fallback** — `#2563eb` full-bleed, or gradient from `#1e40af` to `#2563eb`.
5. **Placeholder** — `#f3f3f3` rectangle with "[Brand photo — halftone treatment]" for the user to replace.

Never use untreated photography in an immersive context.

### CSS-Only Halftone Fallback

When halftone images are unavailable (no bundled image fits, no generation tool available), use this CSS combination as an acceptable alternative for hero bands and immersive sections:

```css
.halftone-fallback {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 70%, #1d4ed8 100%);
}
/* Halftone dots */
.halftone-fallback::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 1.5px, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 6px 6px;
}
/* CRT scanlines */
.halftone-fallback::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.04) 2px,
    rgba(0,0,0,0.04) 3px
  );
}
```

## Voice & Tone (Light Guidance)

The brand voice is evolving — principles, not rules:

- **Direct over clever.** "We audit, prioritize, and sequence" not "We leverage our proprietary methodology."
- **Confident, not arrogant.** "We're a partner that ships" not "We're the best agency in the world."
- **Short sentences land harder.** Mix them in.
- **Plainspoken.** No jargon, no buzzwords, no filler.
- **Cooking metaphors** are brand DNA but should feel natural, never forced.

## Applying the Brand by Output Type

### Presentations (PPTX)

Read the `pptx` SKILL.md alongside this one. Use **Tier 1** type scale. 1920×1080 (16:9). Pika icons for all iconography. Gumbo wordmark on every slide — `wordmark-white.svg` on dark, `wordmark-black.svg` on light, bottom-left, ~104px wide.

#### The Slide Skeleton

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

#### The `// Section Label` Overline

Many slides use a double-slash overline above the heading: `// GUMBO AI AUDIT SYSTEM`, `// Our Core Philosophy`, `CASESTUDY // DERMSQUARED`. This is SF Pro Medium, `11-13px`, `#727272` on clean slides or `rgba(255,255,255,0.6)` on immersive, uppercase, `0.08em` tracking. It sits `12px` above the heading.

#### Slide Types (from the reference deck)

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
Left ~35% of the slide, top-to-bottom: overline (`CASESTUDY // CLIENT NAME`, uppercase, `13px`, `#727272`), then a large heading (Space Grotesk, `~56px`) with an inline stat badge (e.g., `↓50%` in a `#2563eb` pill, SF Compact Rounded), then a subtitle line, then 2-3 body paragraphs. Right ~60% of the slide: product screenshots stacked/overlapping, bleeding off the right edge. No formal content stage — the screenshots compose freely.

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

#### Recommended Deck Sequence

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

#### Slide Transitions and Pacing

- Never put two immersive slides back-to-back. Alternate: immersive → clean → clean → immersive → clean.
- Case studies always come in pairs when possible. Two stories are more convincing than one.
- The CTA slide should feel like a natural conclusion, not an afterthought. The body copy on this slide should reference what was covered in the deck.
- Every slide should be readable in 10 seconds or less. If there's too much text, split it into two slides.

#### Slide Template Library

Slide templates live in `templates/slides/`. Each template is a `.md` file containing a ready-to-use HTML skeleton extracted from the Figma reference deck, with usage notes.

**How to use templates:**

1. Read `templates/INDEX.md` first. It has a table of all templates with ID, name, mode (clean/immersive), and content-type tags.
2. Match the user's content purpose to the `Content Types` column. If the user names a specific slide type, use that template directly.
3. Read the matching template file. Copy the HTML skeleton from the `## HTML Skeleton` section.
4. Replace placeholder text (heading, body, section label) with the user's actual content.
5. Fill image placeholders (marked with `<!-- IMAGE: ... -->`) with brand photography from `assets/photography/` or user-supplied images.
6. Inline the correct wordmark SVG from `assets/logo/`: white on dark/immersive backgrounds, black on light/clean backgrounds.
7. If no template matches, fall back to `02` (Split-Header + Content Stage).

**Template file structure:**

Each template `.md` file has:
- **Frontmatter**: `id`, `name`, `mode`, `content-types`, `figma-source`
- **HTML Skeleton**: a complete `<div class="page">` block with inline styles using CSS custom properties. Copy this directly into your slide HTML.
- **Usage Notes**: when to use this type, what content fits, sizing guidance, and gotchas.

**Building a multi-slide deck:**

Assemble slides by stacking multiple `.page` divs inside a single HTML file. Include the CSS Custom Properties block (from this document) once in a `<style>` tag. Each `.page` div is one slide. Export with:

```bash
node scripts/html-export.mjs deck.html deck.pdf --size slide
```

**Minimum viable deck**: Opener (01), Intro (02 or 03), Services (05), Case Study (06), CTA (07).

#### Adding New Slide Templates

When extracting a new slide layout from Figma:

1. Call `get_design_context` with the frame's `fileKey` and `nodeId` from the Figma MCP.
2. Translate the returned layout code to inline-styled HTML using CSS custom properties for colors, fonts, radii, and spacing tokens.
3. Replace raw hex values with the matching `var(--gumbo-*)` token. Prefer Figma's measured spacing over SKILL.md approximations.
4. Create a new `.md` file in `templates/slides/` following the frontmatter + skeleton + usage notes format.
5. Add a row to `templates/INDEX.md`.
6. Assign content-type tags that describe the slide's purpose, not its visual structure.

### Documents (DOCX / PDF)

Read the `docx` or `pdf` SKILL.md alongside this one. Use **Tier 2** type scale.
- Letter (816×1056) or A4 (595×842)
- Assemble from blocks: hero band at top, split header, icon strip, case study pairs, value props strip, footer
- Clean mode palette — don't over-color documents
- Gumbo logo from `assets/logo/` on first page or header
- Pika icons inline where appropriate

**Fixed-height HTML documents:** Use `display: flex; flex-direction: column` on the `.page` container with `flex: 1` on the content area and `flex-shrink: 0` on the footer. Never use `position: absolute` on the footer. See the HTML Artifacts section for full details.

### Proposals & SOWs

Use **Tier 2** type scale on Letter. These are multi-page documents with a specific structure:

- **Page 1**: Hero band + split header (company intro or project overview)
- **Page 2+**: Split header for each major section (approach, scope, timeline)
- **Pricing table**: Use the data table styling from this document. Header row in `#111111`, line items left-aligned, costs right-aligned, totals row separated by a `2px solid #111111` divider. Optional phase groupings with `#f3f3f3` sub-header rows.
- **Timeline**: Milestone timeline block, or a simple table with phase/deliverable/date columns.
- **Last page**: Footer block with CTA ("Let's talk.") and contact details.

### Email Templates & Signatures

Emails are plain and functional. The brand shows through restraint, not decoration.

- **Body font**: SF Pro (or system sans-serif in email clients), 15-16px
- **Headings**: Space Grotesk if supported, otherwise bold SF Pro / system sans-serif
- **Signature layout**: Name (SF Pro Medium, `#111111`) / Title (SF Pro Regular, `#727272`) / Email + phone (SF Pro Regular, `#444444`) — stacked, no icons, no logos in the signature by default. If a logo is needed, `pot-icon.svg` at 24px to the left of the name.
- **No colors in email body** except links in `#2563eb`. Background is white.

### Infographics

Use **Tier 2** or **Tier 3** type scale depending on canvas.

- Prioritize the chart and data table styling from this document.
- One key stat at the top using the Stat Callout pattern (SF Compact Rounded, large).
- Section the infographic with horizontal dividers (`1px solid #e8e8e8`), not colored bands.
- Icons from Pika for section labels.
- Max 3 accent colors per infographic — pick from the chart color sequence.

### HTML Artifacts

Use **Tier 1** type scale (web desktop).
- Use CSS custom properties for all brand tokens
- Split-header as default page structure
- Pika icons inlined as SVGs

**Fixed-height page layout**: For fixed-height HTML pages (Letter 816x1056, A4 595x842, Slide 1920x1080), use `display: flex; flex-direction: column` on the `.page` container. The main content area should use `flex: 1` to fill available space between the hero band and footer. The footer should be a flex child with `flex-shrink: 0`, not `position: absolute`. Absolute-positioned footers create dead space between the last content block and the footer.

**Font strategy depends on the output context:**

**For HTML exported to PDF/PNG via `html-export.mjs`** (documents, decks, social):
SF Pro, SF Compact Rounded, and Space Grotesk are the primary fonts. Puppeteer's bundled Chromium renders system fonts, so SF Pro renders correctly on macOS. Load only Space Grotesk from Google Fonts. The CSS font stack stays as-is:
```css
--font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--font-body: 'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif;
--font-stat: 'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif;
```

**For HTML viewed in browsers** (web artifacts, prototypes, landing pages shared as URLs):
SF Pro and SF Compact Rounded won't render for non-Apple users. Load Inter from Google Fonts as the cross-platform fallback. Reorder the font stack so Inter comes first:
```css
--font-body: 'Inter', 'SF Pro Text', system-ui, sans-serif;
--font-stat: 'Inter', 'SF Compact Rounded', system-ui, sans-serif;
```

**Google Fonts import** (always include, covers Space Grotesk universally and Inter for web):
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Social Posts

Use **Tier 3** for square formats, **Tier 4** for stories/banners, **Tier 2** for landscape posts.
- Social Statement block: one headline, one idea. Don't cram in paragraphs.
- Halftone brand image or clean white background
- Gumbo wordmark in a corner, small
- Stats and metrics are great social content — use SF Compact Rounded to make them pop

### React Prototypes

Follow HTML artifact principles with **Tier 1** type scale.
- Tailwind utilities mapped to brand tokens
- Component patterns: card grids, icon+separator+text bullets, stat badges

## HTML Export Pipeline

The Gumbo workflow is: **build as HTML first, then export to PDF or PNG**. HTML is the source of truth for all deliverables. The export script at `scripts/html-export.mjs` handles conversion.

This pipeline is agent-agnostic. Any AI agent, CI pipeline, or human developer can run the script. No proprietary skills, platform-specific tools, or Claude-specific features are assumed.

### Requirements

Puppeteer is the only dependency. It works without global install via `npx`:

```bash
npm install puppeteer   # or: npx puppeteer browsers install chrome
```

### Usage

```bash
node scripts/html-export.mjs <input.html> <output> [options]
```

Options:
- `--size <preset>` — named preset (default: `letter`)
- `--format pdf|png` — force output format
- `--width <px>` — custom width (overrides preset)
- `--height <px>` — custom height (overrides preset)

### Format Selection Logic

If it's a file you share, present, or print, it's a **PDF**. If it's an image you upload to a platform, it's a **PNG**.

### Presets

**PDF output (shared, presented, printed):**

| Preset | Width | Height | Use |
|--------|-------|--------|-----|
| `letter` (default) | 816px | 1056px | One-pagers, proposals, SOWs |
| `a4` | 595px | 842px | International documents |
| `slide` | 1920px | 1080px | Pitch decks, presentations |

**PNG output (uploaded to platforms as images):**

| Preset | Width | Height | Use |
|--------|-------|--------|-----|
| `twitter` | 1200px | 675px | Twitter/X post images |
| `twitter-header` | 1500px | 500px | Twitter/X banner |
| `linkedin` | 1200px | 627px | LinkedIn feed images |
| `og` | 1200px | 630px | Link preview cards |
| `ig-square` | 1080px | 1080px | Instagram feed posts |
| `ig-story` | 1080px | 1920px | Instagram stories/reels |
| `mobile` | 390px | 844px | Mobile web screenshots |

### Custom Dimensions

```bash
node scripts/html-export.mjs custom.html out.pdf --width 800 --height 1200 --format pdf
node scripts/html-export.mjs custom.html out.png --width 800 --height 600
```

Custom dimensions default to PNG unless `--format pdf` is specified. Custom dimensions override any named preset.

### Multi-Page / Multi-Slide Handling

- **PDF presets** (letter, a4, slide): if the HTML contains multiple `.page` divs, each becomes one PDF page in a single file.
- **PNG presets**: multiple `.page` divs produce numbered files: `output-01.png`, `output-02.png`, etc.

### Critical: `printBackground: true`

The script always enables `printBackground`. Without it, hero bands, dark footers, content stages, and all CSS background colors render as white in the PDF. This is non-negotiable.

### Examples

```bash
node scripts/html-export.mjs one-pager.html proposal.pdf
node scripts/html-export.mjs one-pager.html proposal.pdf --size a4
node scripts/html-export.mjs deck.html deck.pdf --size slide
node scripts/html-export.mjs post.html card.png --size linkedin
node scripts/html-export.mjs story.html story.png --size ig-story
node scripts/html-export.mjs custom.html out.png --width 1440 --height 900
```

## CSS Custom Properties Template

```css
:root {
  /* Primary */
  --gumbo-blue: #2563eb;
  --gumbo-blue-50: #eff6ff;
  --gumbo-blue-100: #dbeafe;
  --gumbo-blue-200: #bfdbfe;
  --gumbo-blue-300: #93c5fd;
  --gumbo-blue-400: #60a5fa;
  --gumbo-blue-500: #3b82f6;
  --gumbo-blue-600: #2563eb;
  --gumbo-blue-700: #1d4ed8;
  --gumbo-blue-800: #1e40af;
  --gumbo-blue-900: #1e3a8a;

  /* Accents */
  --gumbo-cayenne: #d65c73;
  --gumbo-cayenne-50: #fdf2f4;
  --gumbo-cayenne-100: #fce4e8;
  --gumbo-cayenne-200: #f5c4cc;
  --gumbo-cayenne-300: #e9a0ad;
  --gumbo-cayenne-400: #df7e8f;
  --gumbo-cayenne-500: #d65c73;
  --gumbo-cayenne-600: #c44860;
  --gumbo-cayenne-700: #b03a52;
  --gumbo-cayenne-800: #932d43;
  --gumbo-cayenne-900: #7a2038;

  --gumbo-pine: #38573e;
  --gumbo-pine-50: #f0f5f1;
  --gumbo-pine-100: #e0ebe2;
  --gumbo-pine-200: #bdd4c0;
  --gumbo-pine-300: #8fb396;
  --gumbo-pine-400: #6b8f71;
  --gumbo-pine-500: #527a59;
  --gumbo-pine-600: #436849;
  --gumbo-pine-700: #38573e;
  --gumbo-pine-800: #2a4430;
  --gumbo-pine-900: #1f3323;

  --gumbo-okra: #6a9d62;
  --gumbo-okra-50: #f3f8f2;
  --gumbo-okra-100: #e6f0e4;
  --gumbo-okra-200: #c8dec5;
  --gumbo-okra-300: #a3cca0;
  --gumbo-okra-400: #87b482;
  --gumbo-okra-500: #6a9d62;
  --gumbo-okra-600: #578b50;
  --gumbo-okra-700: #4a7a44;
  --gumbo-okra-800: #3b6536;
  --gumbo-okra-900: #2d5228;

  --gumbo-orange: #f97316;
  --gumbo-orange-50: #fff7ed;
  --gumbo-orange-100: #ffedd5;
  --gumbo-orange-200: #fed7aa;
  --gumbo-orange-300: #fdba74;
  --gumbo-orange-400: #fb923c;
  --gumbo-orange-500: #f97316;
  --gumbo-orange-600: #ea580c;
  --gumbo-orange-700: #c2410c;
  --gumbo-orange-800: #9a3412;
  --gumbo-orange-900: #7c2d12;

  /* Neutrals */
  --gumbo-black-100: #111111;
  --gumbo-black-90: #444444;
  --gumbo-black-80: #5b5b5b;
  --gumbo-black-70: #727272;
  --gumbo-black-60: #a1a1a1;
  --gumbo-black-50: #b9b9b9;
  --gumbo-black-40: #d0d0d0;
  --gumbo-black-30: #e8e8e8;
  --gumbo-black-20: #f3f3f3;
  --gumbo-black-10: #fafafa;
  --gumbo-white: #ffffff;

  /* Typography
     Two contexts:
     - PDF/PNG export (html-export.mjs): SF Pro renders via Puppeteer on macOS. Use stacks as-is.
     - Browser viewing: SF Pro won't render for non-Apple users. Swap Inter to first position
       for --font-body and --font-stat. See "HTML Artifacts" section for details. */
  --font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-body: 'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif;
  --font-stat: 'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif;

  /* Spacing (base-8) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Chart colors */
  --chart-1: #2563eb;
  --chart-2: #111111;
  --chart-3: #93c5fd;
  --chart-4: #d65c73;
  --chart-5: #6a9d62;
  --chart-6: #f97316;
}
```

## Component Patterns

### Cards

- Background: `#f3f3f3` (Black 20)
- Border radius: `8px`
- No border by default, or `1px solid #e8e8e8` when separation is needed
- Padding: `24px` (Tier 1), `16px` (Tier 2)
- No drop shadows — ever
- Description text below the card, not inside

### Stat Badges

- SF Compact Rounded for the number/metric
- Small pill shape with `border-radius: 9999px`
- Background: Hyper-Roux Blue or accent color
- White text
- Padding: `8px 16px`
- Often paired with a short label to the right in SF Pro

### Separators

- Horizontal: `1-2px` height, `#e8e8e8` on light backgrounds
- Vertical (immersive): `2px` width, `rgba(255,255,255,0.2-0.6)` on dark
- Functional, not decorative

### Buttons

- Primary: `#2563eb` background, white text, `border-radius: 8px`, SF Pro Medium, `12px 24px` padding
- Secondary: transparent with `1px solid #111111`, dark text, `12px 24px` padding
- Keep them simple — no gradients, no shadows, no rounded-full

## Logo Usage

Logo files in `assets/logo/`:
- `wordmark-white.svg` — for dark/immersive backgrounds
- `wordmark-black.svg` — for light backgrounds
- `wordmark-with-background.svg` — standalone
- `icon.svg` — "G" lettermark (pixel-style)
- `pot-icon.svg` — gumbo pot icon (pixel-style)

The wordmark is the default. Icon/pot for favicons, small marks, or playful contexts. Never distort, recolor, or add effects.

**Always inline the actual SVG from `assets/logo/`.** Never approximate the wordmark with styled text. The Gumbo wordmark is a custom pixel-style design that cannot be reproduced with any font. Read the SVG file and embed the markup directly.
