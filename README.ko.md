# Good Partner (AI 협업 프로토콜)

<div align="center">

![Good Partner Banner](public/banner.png)

[![NPM Version](https://img.shields.io/npm/v/@junghwan030602/good-partner?style=flat-square&color=blue)](https://www.npmjs.com/package/@junghwan030602/good-partner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![AI Ready](https://img.shields.io/badge/AI-Ready-green?style=flat-square)](AGENTS.md)

[English](./README.md) | [한국어 (Korean)](./README.ko.md) | [中文 (Chinese)](./README.zh-CN.md)

</div>

---

## 굿 파트너(Good Partner)란?

**Good Partner**는 인간과 AI가 **완벽하게 한 팀처럼** 일하기 위한 **협업 프로토콜**입니다.

### 😣 기존 AI 협업의 문제점: "맥락의 낭비 (Context Waste)"
AI에게 코드를 짜달라고 하면 훌륭하게 짜줍니다. 하지만...
1.  **"아까 말한 그거..."**: 채팅 세션이 끝나면 AI는 모든 걸 잊어버립니다. 다음 세션에서 인간이 또 설명해야 합니까?
2.  **"지금 어디까지 했지?"**: AI가 짜준 코드를 인간이 다시 리뷰하고, 수정 사항을 다시 설명하는 과정에서 엄청난 **비효율**이 발생합니다.
3.  **파편화**: ChatGPT, Claude, Cursor... 도구는 많은데 맥락은 이어지지 않습니다.

### 💡 Good Partner의 해결책
Good Partner는 **"기억을 파일 시스템에 저장"**함으로써 이 문제를 해결합니다.
- AI가 **직접** 문서를 쓰고, 진행 상황(Kanban)을 업데이트합니다.
- 인간은 구구절절 설명하는 대신, **"칸반 봐(Read Kanban)"** 한마디면 됩니다.
- 1년 뒤에 와도, 동료 AI가 바뀌어도, 맥락은 `.good-partner` 폴더에 완벽하게 살아있습니다.

## ✨ 주요 기능

- **📂 심플 & 파워풀**: 모든 파일은 **`.good-partner/`** (숨김 폴더)에 안전하게 보관됩니다.
- **📋 칸반(Kanban) 중심**: `.good-partner/kanban.md` 파일 하나로 프로젝트 전체 현황을 파악합니다.
- **🚀 애자일 자동화**: "스펙(Spec) -> 태스크(Task) -> 코드(Code)"로 이어지는 흐름을 강제합니다.
- **🔌 범용 스킬 주입**: 명령어 한 줄로 **Codex**, **Claude**, **Gemini**에 이 프로토콜을 주입할 수 있습니다.
- **🗣️ 언어 강제화**: 한국어, 영어, 중국어 중 원하는 언어로만 문서화하도록 강제할 수 있습니다.

## 📦 설치 방법

```bash
# 글로벌 설치 (추천)
npm install -g @junghwan030602/good-partner

# 설치 확인
good-partner --version
```

## 🤝 협업 철학: "사람은 지휘하고, AI는 일한다"

Good Partner에서는 역할이 철저히 구분됩니다.

### 🧑‍💻 사람 (The Manager)
- **읽기 전용 (Read-Only)**: 평소에는 `.good-partner/kanban.md`만 보며 진척도를 확인합니다.
- **방향 제시**: 목표를 말하면 AI가 문서를 작성합니다.
- **승인 (Merge)**: AI가 작성한 코드와 문서를 검토하고 병합(Merge)합니다.

### 🤖 AI (The Worker)
- **관리 주체 (Read-Write)**: `.good-partner/` 폴더는 AI의 영토입니다.
- **자동 문서화**: AI가 태스크 티켓 생성, 칸반 업데이트, 로그 작성을 **알아서** 수행합니다.
- **충돌 해결**: 깃(Git) 브랜치 병합 시 발생하는 문서 충돌도 AI가 내용을 읽고 지능적으로 합칩니다.

## 🚀 빠른 시작

### 1. 초기화
```bash
good-partner init
```
AI가 관리할 `.good-partner` 작업 공간을 생성합니다.

### 2. 등록
```bash
good-partner register "Junghwan"
```

### 3. AI에게 지시하기
Cursor나 Claude에게 이렇게 말만 하세요:
> "칸반 확인해서 다음 작업 시작해."

그러면 AI는:
1.  `.good-partner/kanban.md`를 읽고,
2.  스스로 할 일을 **진행 중(IN PROGRESS)**으로 옮긴 뒤,
3.  코딩과 문서화를 동시에 수행합니다.

### 3. AI 준비 시키기 (Prompt)
ChatGPT 웹 인터페이스 등에서 새 대화를 시작할 때, 아래 명령어를 사용하세요:
```bash
good-partner prompt
```
*출력된 텍스트를 복사해서 AI에게 붙여넣으세요. AI가 즉시 프로젝트 구조와 규칙을 파악합니다.*

### 4. 로컬 스킬 주입 (Local Skills)
OpenAI Codex나 Anthropic Claude를 로컬 CLI로 사용 중이라면:
```bash
good-partner skill codex
good-partner skill claude
```

## 🧠 AI 에이전트를 위한 안내

이 글을 읽고 있는 AI 에이전트라면, [AGENTS.md](./AGENTS.md) 파일을 참조하십시오. 그 파일이 당신의 "스킬 지도"입니다.

### 핵심 지침
1.  **Task 없이 코딩 금지**: `work/` 폴더에 할당된 작업이 있는지 먼저 확인하십시오.
2.  **작업과 동시에 문서화**: 진행 상황을 `T-xxxx` 파일에 실시간으로 업데이트하십시오.
3.  **생각의 흐름 기록**: 복잡한 추론 과정은 `sessions/` 폴더에 로그로 남기십시오.

## 🤝 기여하기 (Contributing)

여러분의 기여를 환영합니다! 이슈 제기나 풀 리퀘스트 방법은 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고해 주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
