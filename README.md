# Spotlite Design System

MUI 테마와 Tailwind CSS/shadcn/ui가 완벽하게 매칭된 현대적인 디자인 시스템입니다.

## 🎨 주요 특징

- **완벽한 테마 매칭**: MUI 테마의 모든 색상, 타이포그래피, 스페이싱이 Tailwind 클래스로 매핑
- **다크 모드 지원**: CSS 변수를 통한 자동 다크/라이트 모드 전환
- **타입 안전성**: TypeScript로 완전히 작성된 유틸리티 함수들
- **일관된 디자인**: MUI와 Tailwind/shadcn 간의 완벽한 디자인 일관성
- **재사용성**: 컴포넌트별 유틸리티 함수로 쉬운 스타일링

## 🚀 설치 및 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

## 📚 사용법

### 기본 Tailwind 클래스 사용

```tsx
// Spotlite 타이포그래피
<h1 className="text-spotlite-h1">Main Heading</h1>
<h2 className="text-spotlite-h2">Sub Heading</h2>
<p className="text-spotlite-body">Body text</p>

// Spotlite 색상
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-accent text-accent-foreground">Accent</div>
<div className="bg-negative text-negative-foreground">Error</div>

// Spotlite 버튼
<button className="btn-spotlite btn-spotlite-large bg-primary text-primary-foreground">
  Large Button
</button>
```

### 유틸리티 함수 사용

```tsx
import { createButtonClasses, createTypographyClasses } from '@/lib/theme-utils'

// 버튼 스타일 생성
const buttonClasses = createButtonClasses('contained', 'large')
<button className={buttonClasses}>Button</button>

// 타이포그래피 스타일 생성
const textClasses = createTypographyClasses('h1')
<h1 className={textClasses}>Heading</h1>
```

### 컴포넌트 예시

```tsx
import { SpotliteButton, SpotliteTypography } from '@/components/examples'

// Spotlite 버튼 컴포넌트
<SpotliteButton variant="contained" size="large">
  Click me
</SpotliteButton>

// Spotlite 타이포그래피 컴포넌트
<SpotliteTypography variant="h1" as="h1">
  Main Title
</SpotliteTypography>
```

## 🎯 매핑된 요소들

### 색상 시스템

- **Primary**: `#000000` (검정)
- **Secondary**: `#EDEEFC` (연한 보라)
- **Accent**: `#5058E3` (보라)
- **Minor**: `#F1F1F1` (연한 회색)
- **Negative**: `#D32F2F` (빨강)
- **Line**: `#06C755` (초록)
- **Highlight**: `#FFFF99` (노랑)

### 타이포그래피

- **H1**: 3rem (모바일: 2rem), 600 weight
- **H2**: 3rem (모바일: 2rem), 500 weight
- **H3**: 1.5rem (모바일: 1.2rem), 600 weight
- **H4**: 1.5rem (모바일: 1.2rem), 500 weight
- **Body**: 1rem (모바일: 0.9rem), 500 weight
- **Caption**: 0.875rem (모바일: 0.75rem), 400 weight

### 브레이크포인트

- **xs**: 0px
- **sm**: 600px
- **md**: 900px
- **lg**: 1200px
- **xl**: 1600px

### 폰트 패밀리

- **Metropolis**: 영문용 메인 폰트
- **Pretendard**: 한글용 메인 폰트
- **Roboto**: Google 폰트
- **Figtree**: Google 폰트

## 🛠️ 파일 구조

```
src/
├── lib/
│   ├── theme-utils.ts      # 테마 유틸리티 함수들
│   └── utils.ts           # 기본 유틸리티
├── components/
│   └── examples/          # 예제 컴포넌트들
│       ├── SpotliteButton.tsx
│       └── SpotliteTypography.tsx
├── styles/
│   └── theme.ts           # MUI 테마 정의
└── app/
    ├── globals.css        # 전역 스타일 및 CSS 변수
    └── layout.tsx         # 폰트 설정
```

## 🎨 CSS 변수

모든 색상과 스타일이 CSS 변수로 정의되어 있어 테마 커스터마이징이 용이합니다:

```css
:root {
  --primary: 0 0% 0%;
  --secondary: 236 100% 97%;
  --accent: 236 100% 31%;
  --spotlite-text-primary: 0 0% 0%;
  --spotlite-text-secondary: 0 0% 35%;
  /* ... 더 많은 변수들 */
}
```

## 📖 예제 페이지

프로젝트를 실행하고 `/components` 페이지를 방문하여 모든 컴포넌트와 스타일의 예제를 확인할 수 있습니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
