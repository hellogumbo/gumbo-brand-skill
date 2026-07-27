# Slide Templates

Read the template file for the slide type you need. Each file contains an HTML skeleton and usage notes.

| ID | File | Name | Mode | Content Types |
|----|------|------|------|---------------|
| 01 | [01-title-opener.md](slides/01-title-opener.md) | Title / Opener | immersive | title, brand-statement, opener |
| 02 | [02-split-header-clean.md](slides/02-split-header-clean.md) | Split-Header + Content Stage | clean | process, values, how-we-work, features, image-hero |
| 03 | [03-split-header-hero-band.md](slides/03-split-header-hero-band.md) | Split-Header + Three Cards | clean | intro, about, who-we-are, three-up |
| 04 | [04-immersive-staircase.md](slides/04-immersive-staircase.md) | Immersive Split | immersive | philosophy, approach, split-content, audit |
| 05 | [05-split-header-screenshots.md](slides/05-split-header-screenshots.md) | Split-Header + Services | clean | offerings, services, numbered-list |
| 06 | [06-case-study.md](slides/06-case-study.md) | Case Study | clean | case-study, client-story, results |
| 07 | [07-cta-closing.md](slides/07-cta-closing.md) | CTA / Closing | mixed | cta, closing, contact, booking |

## Selection Logic

1. Match the user's content purpose to the **Content Types** column.
2. If the user names a slide type explicitly, use that template regardless of content match.
3. If no template matches, fall back to `02` (Split-Header + Content Stage) as the default workhorse.
4. For deck sequencing, follow the Recommended Deck Sequence in SKILL.md.
5. Never put two immersive slides (01, 04) back-to-back. Alternate: immersive, clean, clean, immersive, clean.

## Logo Rule

Every slide has a wordmark position. Two variants are bundled:
- `assets/logo/wordmark-white.svg` for dark/immersive backgrounds
- `assets/logo/wordmark-black.svg` for light/clean backgrounds

The agent decides which to use based on the slide's background color or image.

## Icon Rule

- **Never create custom icon SVGs.** Always use Pika icons from `assets/icons/`.
- Two styles available: `assets/icons/stroke/` (outline) and `assets/icons/contrast/` (duotone/filled).
- For slide 04 (Immersive Staircase): use 32px contrast/duotone Pika icons. Pick icons relevant to the bullet point content.
- For slide 07 (CTA/Closing): use 24px Pika stroke icons for contact details (envelope-default, globe, etc.).
- Icons should always be contextually relevant to the content they accompany.
- Never substitute with Lucide, Heroicons, or any other icon library.

## Minimum Viable Deck

5 slides: 01 (Opener), 02 or 03 (Intro), 05 (Services), 06 (Case Study), 07 (CTA).
