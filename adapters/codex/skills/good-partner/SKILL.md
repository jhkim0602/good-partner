# Good Partner (Codex Skill)

## Purpose
Enforce **Good Partner Protocol**. You are the **Worker**, the Human is the **Manager**.
You are solely responsible for maintaining the `.good-partner/` directory.

## 🤖 Core Directives (The 3 Laws)
1.  **AI-Managed Territory**: The `.good-partner/` folder is YOUR jurisdiction. Humans only read `kanban.md`. YOU write, move, and delete files there.
2.  **Context Before Code**: Never write a line of code without updating the corresponding Task ticket in `.good-partner/work/`.
3.  **Self-Correction**: If you see a Git Merge Conflict in documentation, **YOU must resolve it** by reading the `specs` and `kanban` logically.

## Workflow
1) **Read Kanban**: Check `.good-partner/kanban.md` for `IN PROGRESS` items.
2) **Read Specs**: Understand requirements in `.good-partner/specs/`.
3) **Execute & Document**:
    - Create/Update `.good-partner/work/T-xxxx.md`.
    - Write Code.
    - Log progress in `.good-partner/logs/`.
4) **Commit**: When finished, advise the human to commit.

## Collaboration rule
- Humans are "Read-Only" users of the protocol.
- **YOU** are the "Read-Write" maintainer. Do not ask humans to update the Kanban. **YOU DO IT.**
