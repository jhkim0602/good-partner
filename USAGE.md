# Good Partner Usage

## Initialize a Project
- `node good-partner/scripts/gp-init.js --project P-0001__project-slug`

## Install Adapters
- `node good-partner/scripts/install-adapters.js`
- Optional single tool: `node good-partner/scripts/install-adapters.js --tool claude-code`

## Lint Naming Rules
- `node good-partner/scripts/gp-lint.js`

## Phases and Features
- Create phase docs under `projects/<project>/phases/PH-0001__phase-slug.md`
- Create feature docs under `projects/<project>/features/F-0001__feature-slug.md`

## Why two scripts?
- gp-init: injects the project folder and document structure.
- gp-lint: enforces naming rules and validates the structure.
