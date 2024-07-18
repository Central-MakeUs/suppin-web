# Suppin

## 개요

- Suppin은 supporter for influencer라는 뜻으로 인플루언서의 이벤트 생성부터 당첨자 선정 및 관리까지의 업무를 보조하는 인플루언서 마케팅 도우미 서비스입니다

## 기술 스택

- 프론트엔드
  - main
    - Vite, Typscript, React v18^
    - react-router-dom v6.14^, react-query v5^
    - redux v9.1.2, redux-toolkit v2.2.6
    - Styled-Components v6^
  - survey
    - Typescript, NextJs v14^
    - Tailwind (shadcn-ui)
- DevOps
  - Github Actions, Docker

## 프로젝트 구조

```shell
# web
<root>
│
├── web/
│   ├── /
│   ├── (index)
│   ├── result
│   ├── survey/
│   │   └── new
│   └── collect
└── auth

# app
```

### 사전 요구사항

```shell
node >= 20
npm >= 9
```

## 설치 및 실행 방법

```shell
# App
cd app

npm run android
# or
npm run ios

# Web
cd web

npm run dev
```

## 주요 기능

-

## 테스트

## 배포

## 기여 방법

- 버그 관련 제보
  - [Issue](https://github.com/Central-MakeUs/suppin-web/issues)

## 팀원

-

```
suppin-web
├─ .DS_Store
├─ README.md
├─ app
│  ├─ .expo
│  │  ├─ README.md
│  │  ├─ devices.json
│  │  ├─ packager-info.json
│  │  ├─ settings.json
│  │  ├─ types
│  │  │  └─ router.d.ts
│  │  └─ web
│  │     └─ cache
│  │        └─ production
│  │           └─ images
│  │              └─ favicon
│  │                 └─ favicon-b81b91c39787e2823c059f829e730e35ce3b848057b354ce378eda45a56b9204-contain-transparent
│  │                    └─ favicon-48.png
│  ├─ README.md
│  ├─ app
│  │  ├─ _layout.tsx
│  │  └─ index.tsx
│  ├─ app.json
│  ├─ assets
│  │  └─ images
│  │     └─ splash.png
│  ├─ babel.config.js
│  ├─ components
│  ├─ expo-env.d.ts
│  ├─ lib
│  │  └─ log.ts
│  ├─ package-lock.json
│  ├─ package.json
│  └─ tsconfig.json
└─ web
   ├─ .editorconfig
   ├─ .eslintignore
   ├─ .eslintrc.cjs
   ├─ .nvmrc
   ├─ .prettierignore
   ├─ .prettierrc
   ├─ .storybook
   │  ├─ main.ts
   │  └─ preview.ts
   ├─ README.md
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ logo.svg
   ├─ src
   │  ├─ App.tsx
   │  ├─ assets
   │  │  ├─ btn_back_black.png
   │  │  ├─ btn_delete.png
   │  │  ├─ btn_open.png
   │  │  ├─ btn_plus.png
   │  │  ├─ btn_share.png
   │  │  ├─ calander.png
   │  │  ├─ checkRect.png
   │  │  ├─ checkRound.png
   │  │  ├─ comment.png
   │  │  ├─ gift.png
   │  │  ├─ icons.tsx
   │  │  ├─ logo.svg
   │  │  ├─ main_card.png
   │  │  ├─ retry.png
   │  │  ├─ rightarrow.png
   │  │  └─ survey.png
   │  ├─ components
   │  │  ├─ common
   │  │  │  ├─ Btn_btns.tsx
   │  │  │  ├─ Btn_check.tsx
   │  │  │  ├─ Btn_comment.tsx
   │  │  │  ├─ Btn_detail.tsx
   │  │  │  ├─ Btn_main.tsx
   │  │  │  ├─ Btn_plus.tsx
   │  │  │  ├─ Btn_popup.tsx
   │  │  │  ├─ Btn_preview.tsx
   │  │  │  ├─ Btn_survey.tsx
   │  │  │  ├─ HashTag.tsx
   │  │  │  ├─ Popup.tsx
   │  │  │  ├─ SubTab.tsx
   │  │  │  ├─ Subtitle.tsx
   │  │  │  ├─ SurveyForm.tsx
   │  │  │  ├─ SurveyInput.tsx
   │  │  │  ├─ SurveyTimeInput.tsx
   │  │  │  ├─ Survey_Check.tsx
   │  │  │  ├─ main_card
   │  │  │  │  ├─ MainCard.tsx
   │  │  │  │  ├─ comment.tsx
   │  │  │  │  ├─ divider.tsx
   │  │  │  │  ├─ period.tsx
   │  │  │  │  ├─ present.tsx
   │  │  │  │  ├─ tag.tsx
   │  │  │  │  └─ title.tsx
   │  │  │  └─ underLineInput.tsx
   │  │  ├─ myevent
   │  │  │  ├─ CompletedContent.tsx
   │  │  │  ├─ ProgressContent.tsx
   │  │  │  ├─ Tabs.tsx
   │  │  │  └─ index.ts
   │  │  └─ ui
   │  │     └─ header.tsx
   │  ├─ lib
   │  │  ├─ paths.ts
   │  │  └─ query-keys.ts
   │  ├─ main.tsx
   │  ├─ pages
   │  │  ├─ auth-page.tsx
   │  │  ├─ collect-comments-page.tsx
   │  │  ├─ components.tsx
   │  │  ├─ create-survey-page.tsx
   │  │  ├─ home-page.tsx
   │  │  ├─ index.ts
   │  │  ├─ my-page.tsx
   │  │  ├─ myevent-page.tsx
   │  │  ├─ result-page.tsx
   │  │  └─ root.tsx
   │  ├─ store
   │  │  ├─ index.ts
   │  │  └─ user
   │  │     └─ index.ts
   │  ├─ stories
   │  │  ├─ colorPalette.ts
   │  │  └─ colors.mdx
   │  ├─ styles
   │  │  └─ global-styles.ts
   │  ├─ theme.ts
   │  ├─ types
   │  │  └─ HomePage.d.ts
   │  └─ vite-env.d.ts
   ├─ tests
   │  ├─ main.test.ts
   │  └─ setup.ts
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   ├─ vite.config.ts
   └─ vitest.config.ts

```