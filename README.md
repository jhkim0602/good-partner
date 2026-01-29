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

- **📂 Spec-Kit Structure**: All artifacts live in a clean **`good-partner/`** directory. No root clutter.
- **📋 Kanban-Driven**: `good-partner/kanban.md` is the single source of truth for AI and Humans.
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

## 🚀 Quick Start

### 1. Initialize a Project
```bash
good-partner init
```
This simply creates a **`good-partner/`** folder in your repository.
It includes a `kanban.md` board, `specs/` for requirements, and `work/` for active tasks.

### 2. Register
```bash
good-partner register "Junghwan"
```
This adds you to `good-partner/team.yaml`.

### 3. How to Collaborate
1.  **Check Kanban**: Open `good-partner/kanban.md`.
2.  **Pick a Task**: Move an item to **IN PROGRESS**.
3.  **Code & Log**: AI will automatically read your `specs/` and log progress in `logs/`.

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
