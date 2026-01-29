# Good Partner Protocol

This document is the single source of truth for collaboration rules. All tools must load and follow it.

## Core Rules
- All work must be represented in documents before and after implementation.
- Every task has a work packet (T-xxxx) and a handoff (H-xxxx) when ownership changes.
- Session logs are personal and append-only to reduce conflicts.
- File and folder names must follow the naming rules in this document.
- No exceptions: changes without documentation are considered incomplete.

## Naming Rules (Spec Kit Style)
- ASCII only; lowercase letters, numbers, and hyphens only.
- No spaces or underscores.
- Slug regex: ^[a-z0-9]+(?:-[a-z0-9]+)*$
- IDs are fixed prefixes with 4 digits.

### ID Prefixes
- Project: P-0001
- Task: T-0001
- Handoff: H-0001
- Decision: ADR-0001
- Research: R-0001
- QA: Q-0001
- Evidence: E-0001
- Phase: PH-0001
- Feature: F-0001

### Paths and File Names
- Projects: projects/P-0001__project-slug/
- Project index: projects/P-0001__project-slug/INDEX.md
- Task: work/T-0001__task-slug.md
- Handoff: handoffs/H-0001__T-0001__from-<person-id>__to-<person-id>.md
- Decision: decisions/ADR-0001__decision-slug.md
- Research: research/R-0001__research-slug.md
- Phase: phases/PH-0001__phase-slug.md
- Feature: features/F-0001__feature-slug.md
- Session: sessions/YYYY-MM-DD/HHmm__<person-id>.md
- QA: qa/results/Q-0001__qa-slug.md
- Evidence: uploads/YYYY-MM-DD/E-0001__evidence-slug.ext

### Person IDs
- Human: u-<slug>
- AI: ai-<slug>
- Automation: bot-<slug>

## Required Documents
- Project: overview.md, scope.md, roadmap.md, requirements.md
- Work packet: work/T-xxxx__slug.md
- Phase document(s): phases/PH-xxxx__slug.md
- Feature document(s): features/F-xxxx__slug.md
- Handoff (on ownership change)
- Session log per contributor per day

## Enforced by
- gp-lint script
- git hooks / CI (recommended)
