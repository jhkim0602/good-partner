# Good Partner

This folder is the collaboration hub for planning and execution.

## Quick Start
- Read PROTOCOL.md
- Use the single template set in templates/default/
- Run lint: `node good-partner/scripts/gp-lint.js`
- Initialize a project: `node good-partner/scripts/gp-init.js --project P-0001__project-slug`

## Adapters
- Tool-specific configs live under adapters/
- Copy the adapter files into your project/tool config location
- Or run: `node good-partner/scripts/install-adapters.js`

## Usage
- See USAGE.md for workflow details
- See REFERENCES.md for tool alignment references

## CI (Optional)
- CI template: `good-partner/scripts/ci/github-actions-good-partner.yml`

## Notes
- All naming rules are enforced by gp-lint.
- Session logs must be personal and append-only.
