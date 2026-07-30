#!/usr/bin/env bash
# One-command Claude Code setup for the Gumbo Brand plugin.
# Adds the gumbo-team marketplace (or refreshes it) and installs the plugin
# at user scope, with no interactive prompts.
set -euo pipefail

MARKETPLACE="gumbo-team"
MARKETPLACE_SOURCE="hellogumbo/gumbo-brand-skill"
PLUGIN="gumbo-brand@${MARKETPLACE}"

if ! command -v claude >/dev/null 2>&1; then
  echo "Error: the 'claude' CLI is not on your PATH." >&2
  echo "Install Claude Code first: https://claude.com/claude-code" >&2
  exit 1
fi

if claude plugin marketplace list 2>/dev/null | grep -q "${MARKETPLACE}"; then
  echo "Marketplace '${MARKETPLACE}' already configured, refreshing..."
  claude plugin marketplace update "${MARKETPLACE}"
else
  claude plugin marketplace add "${MARKETPLACE_SOURCE}"
fi

if claude plugin list 2>/dev/null | grep -q "${PLUGIN}"; then
  echo "Plugin '${PLUGIN}' already installed, updating..."
  claude plugin update "${PLUGIN}"
else
  claude plugin install "${PLUGIN}" --scope user
fi

echo ""
echo "Done. Restart Claude Code (or run /reload-plugins in an open session) to load Gumbo Brand."
