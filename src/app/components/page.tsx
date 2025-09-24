'use client'

import { SpotliteButtonExamples } from '@/components/examples/SpotliteButton'
import { SpotliteTypographyExamples } from '@/components/examples/SpotliteTypography'

export default function ComponentsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold mb-4">컴포넌트 라이브러리</h1>
          <p className="text-base font-normal">
            재사용 가능한 UI 컴포넌트들을 탐색하고 사용해보세요. MUI 테마와 Tailwind/shadcn이 완벽하게 매칭되어 있습니다.
          </p>
        </div>

        <div className="space-y-12">
          <SpotliteTypographyExamples />
          <SpotliteButtonExamples />
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">사용법 가이드</h2>
          <div className="space-y-4 text-base font-normal">
            <p>
              <strong>1. Tailwind 클래스 사용:</strong> 모든 MUI 테마 값들이 Tailwind 클래스로 매핑되어 있습니다.
            </p>
            <p>
              <strong>2. shadcn 컴포넌트 사용:</strong> <code className="bg-muted px-2 py-1 rounded">Button</code>, <code className="bg-muted px-2 py-1 rounded">Card</code> 등 shadcn 기본 컴포넌트를 사용하여 일관된 스타일을 적용할 수 있습니다.
            </p>
            <p>
              <strong>3. CSS 변수:</strong> 모든 색상과 스타일이 CSS 변수로 정의되어 다크 모드와 라이트 모드를 지원합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
