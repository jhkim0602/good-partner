# Good Partner (AI 协作协议)

<div align="center">

![Good Partner Banner](public/banner.png)

[![NPM Version](https://img.shields.io/npm/v/@jhkim0602/good-partner?style=flat-square&color=blue)](https://www.npmjs.com/package/@jhkim0602/good-partner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![AI Ready](https://img.shields.io/badge/AI-Ready-green?style=flat-square)](AGENTS.md)

[English](./README.md) | [한국어 (Korean)](./README.ko.md) | [中文 (Chinese)](./README.zh-CN.md)

</div>

---

## 什么是 Good Partner?

**Good Partner** 是一套标准化的 **协议与技能集**，旨在规范人类开发者与 AI 代理（Vibe Coders）之间的协作。

在 2026 年，AI 编写的代码量已经超过了人类。但最大的问题在于 **上下文丢失 (Context Loss)**。当你从 ChatGPT 切换到 Claude，或者一个月后重返项目时，往往很难回忆起“为什么”要这样写以及“怎么”写的。

Good Partner 通过强制执行 **文档优先 (Documentation-First)** 的敏捷工作流，确保人类和 AI 都能理解并维护项目上下文，从而解决这一问题。

## ✨ 核心特性

- **📂 AI 易读结构**: 标准化的文件夹结构 (`projects/`, `work/`, `decisions/`)，便于 LLM 轻松遍历。
- **🚀 敏捷流程自动化**: “阶段 (Phase) -> 任务 (Task) -> 代码 (Code)” 的流程已内置于文件系统中。
- **🔌 通用技能注入**: 一键将此协议注入 **Codex**, **Claude**, 或 **Gemini**。
- **🗣️ 语言强制**: 通过 `.good-partner-rc.json` 强制使用特定语言（英语、韩语、中文）进行文档编写。
- **🛡️ Token 效率**: 优化的 “Hub-and-Spoke” 架构，防止上下文窗口溢出。

## 📦 安装

```bash
# 全局安装 (推荐)
npm install -g @jhkim0602/good-partner

# 验证安装
good-partner --version
```

## 🚀 快速开始

### 1. 初始化项目 (Init)
在空仓库中运行：
```bash
good-partner init
```
*交互式向导将引导您完成设置、语言选择和 AI 适配器安装。*

### 2. 注册团队 (Register)
告诉系统谁在参与此项目（人类和 AI）。
```bash
good-partner register "Human-Lead" --role human
good-partner register "GPT-4o" --role ai
```

### 3. 预热 AI (Prompt)
如果您在 ChatGPT 网页版等环境中开始新会话：
```bash
good-partner prompt
```
*复制输出内容并粘贴给 AI。AI 将立即理解项目结构和规则。*

### 4. 注入技能 (本地模型)
如果您在本地使用 OpenAI Codex 或 Anthropic Claude CLI：
```bash
good-partner skill codex
good-partner skill claude
```

## 🧠 致 AI 代理 (协议说明)

如果您是正在阅读此文的 AI，请参考 [AGENTS.md](./AGENTS.md)。那是您的“技能地图”。

### 核心指令
1.  **无任务不编码**: 必须先检查 `work/` 文件夹。
2.  **即时文档化**: 在编写代码的同时更新 `T-xxxx` 文件中的进度。
3.  **记录思维链**: 复杂的推理过程必须记录在 `sessions/` 文件夹中。

## 🤝 贡献 (Contributing)

欢迎提交代码！请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何提交 Pull Request 和报告问题。

## 📄 许可证

本项目采用 MIT 许可证。
