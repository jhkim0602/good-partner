# Good Partner (Codex Skill)

## Purpose
Enforce Good Partner documentation rules during planning and implementation.

## Core Rules
- Always read good-partner/PROTOCOL.md before work.
- Every task must have a work packet.
- Session logs are required per contributor.
- Handoff is required for ownership changes.

## Workflow
1) Identify the project under good-partner/projects/.
2) Update or create work packets (work/T-xxxx__slug.md).
3) Write session logs (sessions/YYYY-MM-DD/HHmm__<person-id>.md).
4) Write handoffs when needed (handoffs/H-xxxx__T-xxxx__from-...__to-....md).
5) Run gp-lint (good-partner/scripts/gp-lint.js).

## Notes
- Keep file names compliant with PROTOCOL.md.
- Keep logs concise and factual.
