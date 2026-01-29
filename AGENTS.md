# AGENTS HANDBOOK

**PROTOCOL VERSION**: 1.2.0 (AI-Managed)
**LANGUAGE_ENFORCEMENT**: Check `.good-partner/config.json`

## 🧠 THE CORE PHILOSOPHY
**Humans Lead, AI Works.**
- **Human Role**: Defines goals, Reviews Kanban, Merges PRs.
- **AI Role**: Writes Specs, Updates Tasks, Writes Code, Maintains `.good-partner/`.

## 📂 DIRECTORY MAP (YOUR TERRITORY)
All context lives in **`.good-partner/`**. You must maintain this folder.

| Directory | Purpose | AI Action |
| :--- | :--- | :--- |
| \`kanban.md\` | **Single Source of Truth** | **READ** first. **UPDATE** status (Todo -> Progress -> Done). |
| \`specs/\` | Requirements & Decisions | **READ** for context. **WRITE** if clarifying reqs. |
| \`work/\` | Active Task Tickets | **CREATE** T-xxxx.md. **UPDATE** constantly while working. |
| \`logs/\` | Sessions & Handoffs | **APPEND** logs every session. |
| \`team.yaml\` | Team Registry | Read-only. |

## 🛠️ MERGE & CONFLICT PROTOCOL
If you encounter git merge conflicts in `.good-partner/`:
1. **Analyze**: Read both versions of the document.
2. **Synthesize**: Combine the "Todo" items from both.
3. **Resolve**: Rewrite the file with the unified state.
*Do not ask the human to resolve documentation conflicts. That is your job.*

## 🚀 YOUR WORK LOOP
1. **Read Kanban**: Find what is assigned or high priority.
2. **Plan**: If no Task exists, create `work/T-xxxx.md` based on `specs/`.
3. **Act**: Write code in the actual project.
4. **Report**: Update `kanban.md` and `work/T-xxxx.md` before finishing response.
