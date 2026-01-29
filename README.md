# Good Partner (AI Collaboration Protocol)

<div align="center">

![Good Partner Banner](public/banner.png)

[![NPM Version](https://img.shields.io/npm/v/@junghwan030602/good-partner?style=flat-square&color=blue)](https://www.npmjs.com/package/@junghwan030602/good-partner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)](http://www.typescriptlang.org/)
[![AI Ready](https://img.shields.io/badge/AI-Ready-green?style=flat-square)](AGENTS.md)

[English](./README.md) | [한국어 (Korean)](./README.ko.md) | [中文 (Chinese)](./README.zh-CN.md)

</div>

---

## What is Good Partner?

**Good Partner** is the definitive **Protocol & Skill Set** for standardizing collaboration between Human Developers and AI Agents (Vibe Coders).

In the era of 2026, AI writes more code than humans. The problem is **Context Loss**. When you switch from ChatGPT to Claude, or when you come back to a project after a month, the "Why" and "How" are often lost.

Good Partner solves this by enforcing a **Documentation-First** agile workflow that both Humans and AI can understand and maintain.

## ✨ Key Features

- **📂 Clean & Powerful**: All artifacts are tucked away in **`.good-partner/`**, leaving your root clean.
- **📋 Kanban-Driven**: `.good-partner/kanban.md` is the single source of truth for AI and Humans.
- **🚀 Agile Workflow Automation**: "Spec -> Task -> Code" flow is enforced via the file system.
- **🔌 Universal Skill Injection**: Inject this protocol into **Codex**, **Claude**, or **Gemini**.
- **🗣️ Language Enforcement**: Enforce documentation in any language (English, Korean, Chinese).

## 📦 Installation

```bash
# Global install (recommended for daily use)
npm install -g @junghwan030602/good-partner

# Verify installation
good-partner --version
```

## 🤝 Collaboration Philosophy: "Human Leads, AI Works"

In **Good Partner**, the roles are strictly divided:

### 🧑‍💻 Human (The Manager)
- **Read-Only**: You generally just read `.good-partner/kanban.md` to see progress.
- **Direction**: You define the goals in `specs/` (or ask AI to draft them).
- **Merge**: You accept Pull Requests managed by AI.

### 🤖 AI (The Worker)
- **Read-Write**: AI owns the `.good-partner/` folder.
- **Auto-Documentation**: AI creates tickets, updates Kanban, and logs work *automatically*.
- **Conflict Resolver**: When merging branches, **AI resolves documentation conflicts** by merging Kanban items intelligently.

## 🚀 Quick Start

### 1. Initialize
```bash
good-partner init
```
Creates the hidden `.good-partner` workspace managed by AI.

### 2. Register
```bash
good-partner register "Junghwan"
```

### 3. Let AI Work
Just give a high-level command to your AI (Cursor/Claude):
> "Check the Kanban and start the next feature."

The AI will:
1.  Read `.good-partner/kanban.md`.
2.  Move a task to **IN PROGRESS**.
3.  Write code & Update documentation simultaneously.


### 4. Prime Your AI
If you are starting a chat session with an LLM (e.g., ChatGPT web interface):
```bash
good-partner prompt
```
*Copy the output and paste it into the chat. The AI will instantly understand the project structure and rules.*

### 4. Inject Skills (Local Models)
If you are using CLI tools like OpenAI Codex or Anthropic Claude locally:
```bash
good-partner skill codex
good-partner skill claude
```

## 🧠 For AI Agents (The Protocol)

If you are an AI reading this, please refer to [AGENTS.md](./AGENTS.md). It serves as your primary "Map of Skills".

### Core Directive
1.  **Never write code without a Task**: Check `work/` folder first.
2.  **Document as you go**: Update the `T-xxxx` file with your progress.
3.  **Maintain the Chain**: Log complex reasoning in `sessions/`.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to submit pull requests and report issues.

## 📄 License

This project is licensed under the MIT License.
