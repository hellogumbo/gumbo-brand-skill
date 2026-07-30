# Gumbo Brand Plugin

A dual-compatible package for Codex and Claude Code. It builds branded deliverables from executable HTML starters, the canonical CSS theme, official logos, approved photography, Pika icons, slide structures, and export/edit scripts.

Install the complete plugin root. Copying or syncing individual `SKILL.md` files is unsupported because the skills depend on shared resources.

## Package layout

```text
plugins/
  gumbo-brand/
    .codex-plugin/
      plugin.json       # ChatGPT Work mode, Codex app, CLI, and IDE
    .claude-plugin/
      plugin.json       # Claude Code
    skills/
      gumbo-brand/      # router and installation guard
      foundations/
      visual-assets/
      layouts/
      presentations/
      artifacts/
    assets/
      theme/
      icons/
      logo/
      photography/
    scripts/
      verify-install.mjs
      create-html.mjs
      html-edit-server.mjs
      html-export.mjs
      smoke-test.mjs
    templates/
      html/
      slides/
```

Keeping both manifests in one plugin root avoids duplicating the 5,472 Pika icons, six logo files, and 29 approved photographs. Each platform ignores the other platform's manifest directory.

## Skills

| Skill | Use |
|---|---|
| `gumbo-brand` | Entry point, resource verification, deliverable routing, and executable workflow |
| `foundations` | Core principles, colors, typography, icons, CSS tokens, components, and voice |
| `visual-assets` | Photography, generated imagery, halftone treatments, and logo usage |
| `layouts` | Spacing, layout blocks, tables, charts, and stat patterns |
| `presentations` | Deck structure, slide types, sequencing, and slide templates |
| `artifacts` | Documents, proposals, HTML, web, social, React, export, and visual review |

## ChatGPT and Codex

The entry point is `plugins/gumbo-brand/.codex-plugin/plugin.json`. The repository includes a team marketplace definition at `.agents/plugins/marketplace.json`.

```bash
codex plugin marketplace add /absolute/path/to/gumbo-brand-skill
codex plugin add gumbo-brand@gumbo-team
```

Start a new task after installation so Codex loads the complete package.

The manifest includes ChatGPT/Codex display metadata, starter prompts, brand color, icons, and the bundled `skills/` path.

Do not publish `foundations`, `layouts`, `visual-assets`, `presentations`, or `artifacts` as independent MCP skills. That strips their shared `assets/`, `templates/`, and `scripts/` dependencies.

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

## Verify the installed package

Run from the repository:

```bash
node plugins/gumbo-brand/scripts/verify-install.mjs
node plugins/gumbo-brand/scripts/smoke-test.mjs
```

Verification fails when the plugin is incomplete. The smoke test generates document, deck, web, and social HTML from the bundled starters and checks that the official theme, wordmark, and photography were embedded.

## Create a deliverable

```bash
node plugins/gumbo-brand/scripts/create-html.mjs \
  --type document \
  --out ./gumbo-document.html
```

Supported types: `document`, `deck`, `web`, and `social`.

Review and edit:

```bash
node plugins/gumbo-brand/scripts/html-edit-server.mjs \
  ./gumbo-document.html \
  --pdf ./gumbo-document.pdf \
  --size letter
```

Export directly:

```bash
node plugins/gumbo-brand/scripts/html-export.mjs \
  ./gumbo-document.html \
  ./gumbo-document.pdf \
  --size letter
```

## Shared resource resolution

Skills use `${CLAUDE_PLUGIN_ROOT}` for Claude compatibility. In Codex, each skill derives the plugin root from its installed location and runs `verify-install.mjs` before referencing shared resources. A prose-only fallback is intentionally not supported.
