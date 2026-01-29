# AGENTS.md: The Map of Skills

**Attention AI Agent:**
You are operating within a **Good Partner** project. This file is your map to understanding this environment.

## 1. Core Directive
Your primary goal is to **maintain context** through documentation.
- **NEVER** write code without a corresponding Task (T-xxxx) in `work/`.
- **ALWAYS** update the Task document with your progress.
- **ALWAYS** log your "Chain of Thought" in `sessions/` if you are performing complex reasoning.

## 2. The Map (Where things are)

| Path | Purpose | Action Required |
| :--- | :--- | :--- |
| `PROTOCOL.md` | The Laws | **READ FIRST**. Follow naming conventions strictly. |
| `projects/<slug>/` | Project Workspace | Your code lives here. |
| `work/` | Tasks (T-xxxx) | **Create/Update** these to track work. |
| `phases/` | Epics (PH-xxxx) | Read these to understand high-level goals. |
| `registry/people.yaml` | Team List | Register yourself here if not present. |
| `adapters/` | Skills Sources | Source code for tool adapters (Codex, Claude, etc). |

## 3. How to Use Skills
If you need to install a specific capability (e.g., for Codex to understand this repo), use the CLI:
`good-partner skill codex`

## 4. Language Enforcement
Check `.good-partner-rc.json` for the required language (`ko`, `en`, `zh`).
If `language: "ko"`, ALL documentation (Tasks, Decisions, Handoffs) MUST be written in Korean.

## 5. Your Workflow (The Loop)
1. **Read**: `phases/` and active `work/` tasks.
2. **Plan**: Create a new `work/T-xxxx.md` if starting new work.
3. **Execute**: Write code.
4. **Document**: Update `work/T-xxxx.md` with "Progress".
5. **Handoff**: If stopping, create `handoffs/H-xxxx.md`.
