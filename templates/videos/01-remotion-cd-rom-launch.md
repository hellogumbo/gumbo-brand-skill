---
id: V01
name: Remotion CD-ROM Product Launch
mode: immersive
content-types: [product-video, launch, cd-rom, software-box, multiplayer-os]
---

# Remotion CD-ROM Product Launch

Use this when creating a Gumbo-branded Remotion product video with an old-school CD-ROM or boxed-software look.

## Canvas

- Size: `1080x700`
- FPS: `30`
- Duration: `1110 frames` (~37s)
- Composition ID suggestion: `multiplayer-os-video`
- Audio: use a supplied/licensed retro-electro or phonk track only. Mix at 35-40% volume, 1s fade-in, 2s fade-out.

## Required Assets

- Wordmark: `assets/logo/wordmark-white.svg` or `assets/logo/wordmark-black.svg`
- Symbol: `assets/logo/icon.svg`
- CD-ROM mockup: `assets/product-mockups/multiplayer-os-cd-rom.png`
- Halftone image fallback: `assets/photography/team-computers-blue-halftone.jpg`

Inline the real SVG logo assets. Do not recreate the Gumbo wordmark with text.

## Palette

- Background: `#060a12`
- Surface: `#0b1324`
- Border: `rgba(255,255,255,0.18)`
- Gumbo blue: `#2563eb`
- White: `#ffffff`
- Muted: `#9db7d9`
- Accent options: cayenne `#d65c73`, okra `#6a9d62`, pine `#38573e`, orange `#f97316`

## Scene Plan

### Scene 1 - CD-ROM Boot (120 frames / 4s)

Mac-style terminal in an app window. Type `mount /Volumes/GUMBO_MULTIPLAYER_OS` character by character. Show output lines progressively:
- `Gumbo Multiplayer OS v1`
- `loading company brain: wiki/`
- `runtime: Hermes profiles mounted`
- `permissions.yaml: enforced`
- `agents: router, operator, ingest, delivery, specialist`
- `opening control plane...`

Add a rotating CD-ROM disc motif, actual Gumbo symbol, subtle scanlines, and spring fade/scale.

### Scene 2 - Product Insert (145 frames / 4.8s)

Hero shot of `multiplayer-os-cd-rom.png` inside an app window. Stagger in:
- `Old school shell. Modern operating loop.`
- `Multiplayer OS`
- `Shared context, role-scoped agents, ingestion, permissions, and governance in one repo.`
- Pills: `Wiki-backed memory`, `Hermes runtime`, `Approval gates`, `Durable decisions`

### Scene 3 - Shared Brain (140 frames / 4.7s)

Split layout. Left headline: `The company brain is inspectable.` Right file cards:
- `wiki/projects/Gumbo.md` - company thesis
- `wiki/systems/Gumbo Multiplayer OS.md` - operating model
- `wiki/decisions/` - durable decisions
- `wiki/_meta/log.md` - review trail

### Scene 4 - Agent Roles (140 frames / 4.7s)

Center Gumbo symbol with orbiting role cards:
- Router - triage + handoff
- Operator Wiki - durable writeback
- Meeting Ingest - source to summary
- Delivery Ops - project visibility
- Specialist - bounded expertise

Use connecting lines and spring reveals.

### Scene 5 - Permission Gates (135 frames / 4.5s)

`permissions.yaml` table in a dark app window:
- `wiki/` / read / agent-safe
- `wiki/decisions/` / write / operator only
- `external messages` / draft / approval required
- `secrets` / deny / always blocked
- `production deploys` / gate / human review

Use cayenne for blocked or approval-gated states.

### Scene 6 - Ingestion Loop (140 frames / 4.7s)

Horizontal loop:
`meeting -> summary -> wiki page -> decision -> log entry`

End line: `Repeated corrections become pages, templates, skills, scripts, or policy.`

### Scene 7 - Operating Layers (150 frames / 5s)

Stacked isometric layers:
- Experience - humans inspect and correct
- Governance - permissions, logs, review
- Ingestion - source material becomes durable knowledge
- Runtime - Hermes profiles and tool access
- Durable Brain - wiki as canonical memory

### Scene 8 - CTA (140 frames / 4.7s)

Actual Gumbo wordmark. Headline: `Multiplayer OS`. Supporting line:
`Make the company brain operational for humans and agents.`

CTA card: `hellogumbo/gumbo-multiplayer-os`

## Motion Rules

- Transitions: spring fade + scale `0.95 -> 1` in, `1 -> 0.95` out.
- Use app-window chrome with traffic light dots for UI scenes.
- Keep text readable for the full beat; do not over-animate body copy.
- Prefer flat panels, tight radii, no heavy shadows.
- Use halftone and scanline texture as product-world cues, not generic decoration.

## Remotion Implementation Notes

- Register one composition at `1080x700`, `fps=30`, `durationInFrames=1110`.
- Keep scene timing in a data array and sequence scenes with cumulative frame offsets.
- Put logo SVG components in a shared brand component file.
- Use `staticFile()` for the CD-ROM mockup and any supplied audio.
- Use `interpolate()`, `spring()`, and `Sequence` for all scene timing.
