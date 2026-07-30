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
      gumbo-brand/
        SKILL.md        # single user-facing skill and router
        references/     # internal brand and production guidance
          foundations.md
          visual-assets.md
          layouts.md
          presentations.md
          artifacts.md
          resources.md
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

## Skill

The plugin exposes exactly one user-facing skill: `gumbo-brand`. It verifies the complete package, selects the right executable starter, and loads only the internal guidance needed for the requested deliverable.

The detailed foundations, layouts, visual assets, presentations, artifacts, and resource inventory live under `skills/gumbo-brand/references/`. They are supporting modules, not extra skills, so installation shows one clean “Gumbo Brand” entry instead of six.

## ChatGPT and Codex

The entry point is `plugins/gumbo-brand/.codex-plugin/plugin.json`. The repository includes a team marketplace definition at `.agents/plugins/marketplace.json`.

```bash
codex plugin marketplace add /absolute/path/to/gumbo-brand-skill
codex plugin add gumbo-brand@gumbo-team
```

Start a new task after installation so Codex loads the complete package.

The manifest includes ChatGPT/Codex display metadata, starter prompts, brand color, icons, and the bundled `skills/` directory. That directory contains only one discoverable `SKILL.md`.

Do not publish the files in `skills/gumbo-brand/references/` as independent skills. That would clutter discovery and strip their shared `assets/`, `templates/`, and `scripts/` dependencies.

## Claude Code

Install the Gumbo marketplace and plugin from GitHub:

```text
/plugin marketplace add hellogumbo/gumbo-brand-skill
/plugin install gumbo-brand@gumbo-team
/reload-plugins
```

Choose user scope when Claude asks where to install it. User scope makes Gumbo Brand available from any project folder, including a new empty folder.

In Claude Code Desktop, open the plugin manager from the `+` menu beside the prompt. Add `hellogumbo/gumbo-brand-skill` as a marketplace, install `gumbo-brand` from the `Gumbo Team` marketplace, and reload plugins.

Do not copy `SKILL.md` into `~/.claude/skills`, and do not symlink the plugin root there. A standalone skill does not establish `${CLAUDE_PLUGIN_ROOT}`, so Claude can load the instructions while missing every bundled asset.

For local plugin development only, clone the repository and load the plugin root for that session:

```bash
claude --plugin-dir ./plugins/gumbo-brand
```

After a repository update, refresh the marketplace and plugin:

```text
/plugin marketplace update gumbo-team
/plugin update gumbo-brand@gumbo-team
/reload-plugins
```

The Claude manifest intentionally omits a fixed version. Claude therefore keys marketplace updates to the Git commit SHA instead of leaving users pinned to an older plugin with the same semantic version.

## Verify the installed package

Run from the repository:

```bash
npm install --prefix plugins/gumbo-brand
node plugins/gumbo-brand/scripts/verify-install.mjs
node plugins/gumbo-brand/scripts/smoke-test.mjs
```

The package declares Playwright for PDF/PNG rendering, and the exporter can also drive an installed Google Chrome directly with no local `node_modules`. Verification fails when the plugin is incomplete. The smoke test generates document, deck, web, and social HTML from the bundled starters and checks that the official theme, wordmark, and photography were embedded.

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

The skill uses `${CLAUDE_PLUGIN_ROOT}` for Claude compatibility. In Codex, it derives the plugin root from its installed location and runs `verify-install.mjs` before referencing shared resources. The project folder is only the output destination; bundled assets always come from the verified plugin root. A prose-only fallback is intentionally not supported.
