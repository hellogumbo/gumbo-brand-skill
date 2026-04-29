# Gumbo Brand Skill

A reusable [Claude Code skill](https://docs.anthropic.com/en/docs/claude-code/skills) that applies Gumbo's brand identity to any AI-generated output — presentations, documents, HTML artifacts, social posts, videos, and React prototypes.

## What's in here

```
SKILL.md              # The brand system (the skill itself)
assets/
  icons/              # 6,120 Pika icon SVGs (stroke, solid, duo-stroke, duo-solid, contrast)
  logo/               # Wordmarks + icon marks
  product-mockups/    # Generated Gumbo product mockups for video/social compositions
  images/halftone/    # Pre-treated brand photography
templates/
  videos/             # Remotion/product-video briefs
references/           # Design tokens and reference files
```

## Installation

Copy or symlink this repo into your Claude Code skills directory:

```bash
# Option 1: Clone directly into skills
git clone git@github.com:<your-username>/gumbo-brand-skill.git ~/.claude/skills/gumbo-brand

# Option 2: Symlink
git clone git@github.com:<your-username>/gumbo-brand-skill.git ~/projects/gumbo-brand-skill
ln -s ~/projects/gumbo-brand-skill ~/.claude/skills/gumbo-brand
```

Once installed, the skill triggers automatically when Claude detects Gumbo-related work.

## What it covers

- Design philosophy and anti-patterns
- Color system (primary blue + 4 accent palettes, full 10-step scales)
- Canvas-aware typography (4 tiers for different output sizes)
- 15+ layout blocks with exact spacing specs
- Presentation slide types and deck sequencing
- Data table, chart, and graph styling
- Photography treatment and image generation prompts
- Voice and tone guidance
- Output-specific rules for PPTX, DOCX, PDF, HTML, social, video, email, and React
