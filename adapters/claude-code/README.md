# Claude Code Adapter

This adapter wires Good Partner into Claude Code using project settings and an optional context file.

## Install (project scope)
1) Create `.claude/` in your repo root.
2) Copy `settings.json` into `.claude/settings.json`.
3) Copy `CLAUDE.md` into repo root (or `.claude/CLAUDE.md`).
4) Optional: copy `commands/` if you want a minimal slash command (avoid heavy usage).

## Notes
- Hooks are configured via `.claude/settings.json`.
- CLAUDE.md is used for persistent project instructions.
