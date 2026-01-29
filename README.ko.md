# Good Partner (AI 협업 프로토콜)

<div align="center">

![Good Partner Banner](public/banner.png)

[![NPM Version](https://img.shields.io/npm/v/@jhkim0602/good-partner?style=flat-square&color=blue)](https://www.npmjs.com/package/@jhkim0602/good-partner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![AI Ready](https://img.shields.io/badge/AI-Ready-green?style=flat-square)](AGENTS.md)

[English](./README.md) | [한국어 (Korean)](./README.ko.md) | [中文 (Chinese)](./README.zh-CN.md)

</div>

---

## 굿 파트너(Good Partner)란?

**Good Partner**는 인간 개발자와 AI 에이전트(Vibe Coders)가 표준화된 방식으로 협업하기 위한 **프로토콜이자 스킬셋**입니다.

2026년, AI가 인간보다 더 많은 코드를 작성하는 시대가 되었습니다. 하지만 가장 큰 문제는 **맥락의 유실(Context Loss)**입니다. ChatGPT에서 Claude로 넘어가거나, 한 달 뒤에 프로젝트를 다시 열었을 때 "왜 이렇게 짰는지" 기억나지 않는 경우가 많습니다.

Good Partner는 인간과 AI 모두가 이해하고 유지할 수 있는 **문서 중심(Documentation-First) 애자일 워크플로우**를 강제하여 이 문제를 해결합니다.

## ✨ 주요 기능

- **📂 AI 친화적 구조**: LLM이 쉽게 순회할 수 있도록 표준화된 폴더 구조(`projects/`, `work/`, `decisions/`)를 제공합니다.
- **🚀 애자일 자동화**: "Phase -> Task -> Code"로 이어지는 흐름이 파일 시스템에 내장되어 있습니다.
- **🔌 범용 스킬 주입**: 명령어 한 줄로 **Codex**, **Claude**, **Gemini**에 이 프로토콜을 주입할 수 있습니다.
- **🗣️ 언어 강제화**: 한국어, 영어, 중국어 중 원하는 언어로만 문서화하도록 강제할 수 있습니다.
- **🛡️ 토큰 최적화**: "Hub-and-Spoke" 아키텍처를 통해 컨텍스트 윈도우 낭비를 막습니다.

## 📦 설치 방법

```bash
# 글로벌 설치 (추천)
npm install -g @jhkim0602/good-partner

# 설치 확인
good-partner --version
```

## 🚀 빠른 시작

### 1. 프로젝트 초기화 (Init)
빈 레포지토리에서 다음 명령어를 실행하세요:
```bash
good-partner init
```
*대화형 마법사가 설정, 언어 선택, AI 어댑터 설치를 도와드립니다.*

### 2. 팀원 등록 (Register)
이 프로젝트에 참여하는 사람과 AI를 등록하세요.
```bash
good-partner register "Human-Lead" --role human
good-partner register "GPT-4o" --role ai
```

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
