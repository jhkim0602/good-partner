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

- **📂 AI-Readable Structure**: Standardized folders (`projects/`, `work/`, `decisions/`) that LLMs can traverse easily.
- **🚀 Agile Workflow Automation**: "Phase -> Task -> Code" flow is baked into the file system.
- **🔌 Universal Skill Injection**: Inject this protocol into **Codex**, **Claude**, or **Gemini** with a single command.
- **🗣️ Language Enforcement**: Enforce documentation in any language (English, Korean, Chinese) via `.good-partner-rc.json`.
- **🛡️ Token Efficiency**: Optimized "Hub-and-Spoke" architecture prevents context window overflow.

## 📦 Installation

```bash
# Global install (recommended for daily use)
npm install -g @junghwan030602/good-partner

# Verify installation
good-partner --version
```

## 🚀 Quick Start

### 1. Initialize a Project (The Wizard)
Navigate to your empty repository and run:
```bash
good-partner init
# or without installing:
npx @junghwan030602/good-partner init
```

### 1. Initialize a Project (The Wizard)
Navigate to your repository and run:
```bash
good-partner init
# or without installing:
npx @junghwan030602/good-partner init
```

The wizard will auto-detect your environment and ask:
1.  **Structure**: Are you in a **Single Project** (current folder) or valid **Monorepo**?
2.  **Language**: Select **Primary Documentation Language** (English, Korean, Chinese).
3.  **Adapters**: Choose AI tools (Codex, Claude, etc.) to inject skills into.

### 2. Join the Project
Register yourself as a team member. (AI tools are considered "Skills", not team members).
```bash
good-partner register "Junghwan"
```

### 3. Prime Your AI
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
