# Good Partner (AI Collaboration Protocol)

![Good Partner Banner](public/banner.png)

[![NPM Version](https://img.shields.io/npm/v/@jhkim0602/good-partner)](https://www.npmjs.com/package/@jhkim0602/good-partner)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**The Ultimate Collaboration Skill between Humans, AI, and Vibe Coders.**
Enforce documentation-driven development, agile workflows, and perfect context sharing.

---

## 🌏 Languages
- [English](#english)
- [한국어 (Korean)](#korean)
- [中文 (Chinese)](#chinese)

---

<a name="english"></a>
## 🇺🇸 English

### What is Good Partner?
Good Partner is not just a tool; it's a **protocol** that standardizes how Humans and AI (Vibe Coders) work together. By enforcing a strict folder structure and documentation rules, it ensures that **context is never lost**, even when switching between different AI models or human developers.

### Getting Started
```bash
# Run the interactive installation wizard
npx @jhkim0602/good-partner init
```

### 🚀 Agile Collaboration with AI
Good Partner enables an Agile workflow where AI actively participates:

1.  **Phase (Epic) Definition**: Humans define the high-level goals in `phases/`.
2.  **Task Automation**: AI generates concrete work packets in `work/` based on the Phase documents.
3.  **Implementation**: AI writes code while simultaneously updating the `work/` document to reflect progress.
4.  **Handoff**: When an AI session ends or a human takes over, a `handoffs/` document is generated to summarize the state.

### 📂 How AI Generates Structure
The folder structure is designed to be **AI-readable and AI-writable**:

- **`projects/`**: Root of all work. AI creates project folders here (e.g., `P-0001__my-app`).
- **`work/T-xxxx__slug.md`**: AI creates these "Living Tasks". They contain the Todo list, progress, and technical notes.
- **`sessions/`**: AI logs its own thought process here daily. This allows "Time Travel" debugging.
- **`registry/`**: AI registers itself (`ai-codex`) and the human (`u-owner`) to track ownership.

---

<a name="korean"></a>
## 🇰🇷 한국어 (Korean)

### Good Partner란 무엇인가요?
Good Partner는 단순한 도구가 아닙니다. **인간과 AI(바이브 코더)가 완벽하게 협업하기 위한 규약(Protocol)**입니다. 엄격한 폴더 구조와 문서화 규칙을 통해, AI 모델이 바뀌거나 개발자가 바뀌어도 **맥락(Context)이 절대 유실되지 않도록** 보장합니다.

### 시작하기
```bash
# 대화형 설치 마법사 실행 (프로젝트 설정, 언어 선택, AI 어댑터 설치)
npx @jhkim0602/good-partner init
```

### 🚀 AI와 함께하는 애자일(Agile) 협업
Good Partner는 AI가 단순 코딩 머신이 아니라, **능동적인 팀원**으로 참여하는 애자일 워크플로우를 제공합니다:

1.  **Phase (Epic) 정의**: 인간이 `phases/` 폴더에 큰 목표와 요구사항을 정의합니다.
2.  **Task 자동화**: AI는 Phase 문서를 읽고, 구체적인 작업 단위인 `work/` 문서를 자동으로 생성합니다.
3.  **구현 및 동기화**: AI가 코드를 작성함과 동시에, 자신의 작업 진행 상황(Task 문서)을 실시간으로 업데이트합니다.
4.  **Handoff (인수인계)**: AI 작업 세션이 끝나거나 사람이 바톤을 이어받을 때, `handoffs/` 폴더에 요약 문서를 남깁니다.

### 📂 폴더 구조와 AI의 역할
이 프로젝트의 모든 폴더는 **AI가 이해하고 생성할 수 있도록** 설계되었습니다:

- **`projects/`**: 작업의 중심입니다. AI가 `P-0001` 같은 고유 ID로 프로젝트 폴더를 생성합니다.
- **`work/T-xxxx__slug.md`**: AI가 생성하는 **"살아있는 작업 문서"**입니다. 할 일 목록, 고민 과정, 해결책이 기록됩니다.
- **`sessions/`**: AI가 자신의 사고 과정(Chain of Thought)을 일기처럼 남기는 곳입니다. "어제 AI가 왜 저렇게 짰지?"를 추적할 수 있습니다.
- **`registry/`**: AI도 팀원으로서 `registry/people.yaml`에 등록됩니다. (예: `ai-codex`, `ai-claude`)

---

<a name="chinese"></a>
## 🇨🇳 中文 (Chinese)

### 什么是 Good Partner?
Good Partner 不仅仅是一个工具，它是人类与 AI（Vibe Coders）协同工作的**协议**。通过强制执行严格的文件夹结构和文档规则，它确保即使在不同的 AI 模型或人类开发者之间切换，**上下文也能完美保留**。

### 快速开始
```bash
# 运行交互式安装向导
npx @jhkim0602/good-partner init
```

### 🚀 与 AI 的敏捷协作
1.  **定义阶段 (Phase)**: 人类在 `phases/` 中定义高层目标。
2.  **任务自动化 (Task)**: AI 基于 Phase 文档自动生成具体的 `work/` 任务包。
3.  **实现与同步**: AI 在编写代码的同时，实时更新任务文档。
4.  **移交 (Handoff)**: 当 AI 会话结束或人类接手时，自动生成移交文档。

### 📂 文件夹结构
- **`projects/`**: 项目根目录。
- **`work/`**: AI 生成的任务文档。
- **`sessions/`**: AI 的思维日志。
