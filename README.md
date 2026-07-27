# Gumbo Brand Plugins

A dual-compatible plugin package for ChatGPT/Codex and Claude Code. Both platforms load the same five Gumbo brand skills and the same bundled assets from one self-contained plugin root.

## Package layout

```text
plugins/
  gumbo-brand/
    .codex-plugin/
      plugin.json       # ChatGPT Work mode, Codex app, CLI, and IDE
    .claude-plugin/
      plugin.json       # Claude Code
    skills/
      foundations/
      visual-assets/
      layouts/
      presentations/
      artifacts/
    assets/
      icons/
      logo/
      photography/
    scripts/
      html-export.mjs
    templates/
      slides/
```

Keeping both manifests in one plugin root avoids duplicating the Pika icon library and brand photography. Each platform ignores the other platform's manifest directory.

## Skills

| Skill | Use |
|---|---|
| `foundations` | Core principles, colors, typography, icons, CSS tokens, components, and voice |
| `visual-assets` | Photography, generated imagery, halftone treatments, and logo usage |
| `layouts` | Spacing, layout blocks, tables, charts, and stat patterns |
| `presentations` | Deck structure, slide types, sequencing, and slide templates |
| `artifacts` | Documents, proposals, HTML, web, social, React, export, and visual review |

## ChatGPT and Codex

The entry point is `plugins/gumbo-brand/.codex-plugin/plugin.json`. Add `plugins/gumbo-brand` as the source directory in a local or team Codex marketplace, then install `gumbo-brand` from that source.

The manifest includes ChatGPT/Codex display metadata, starter prompts, brand color, icons, and the bundled `skills/` path.

## Claude Code

Load the same plugin root directly during development:

```bash
claude --plugin-dir ./plugins/gumbo-brand
```

For persistent local use, clone this repository and symlink the plugin root into the Claude skills directory:

```bash
ln -s /absolute/path/to/gumbo-brand-skill/plugins/gumbo-brand ~/.claude/skills/gumbo-brand
```

Start a new Claude Code session after the first installation.

## Shared resource paths

Skill instructions use `${CLAUDE_PLUGIN_ROOT}` for Claude compatibility. In ChatGPT/Codex, each skill derives the equivalent plugin root from its installed `SKILL.md` location before accessing assets, templates, or scripts.
