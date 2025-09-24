import React from 'react'
import { cn } from '@/lib/utils'

interface SpotliteTypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodyStrong' | 'caption' | 'captionStrong' | 'captionSmall'
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const typographyStyles = {
  h1: "text-4xl font-semibold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  body: "text-base font-normal",
  bodyStrong: "text-base font-semibold",
  caption: "text-sm font-normal",
  captionStrong: "text-sm font-semibold",
  captionSmall: "text-xs font-normal",
}

export const SpotliteTypography: React.FC<SpotliteTypographyProps> = ({
  variant,
  children,
  className,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={cn(typographyStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

// 사용 예시 컴포넌트
export const SpotliteTypographyExamples: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Spotlite Typography</h2>

        <div className="space-y-4">
          <SpotliteTypography variant="h1" as="h1">
            Heading 1 - Main Heading
          </SpotliteTypography>

          <SpotliteTypography variant="h2" as="h2">
            Heading 2 - Sub Heading
          </SpotliteTypography>

          <SpotliteTypography variant="h3" as="h3">
            Heading 3 - Subsection Heading
          </SpotliteTypography>

          <SpotliteTypography variant="h4" as="h4">
            Heading 4 - Detailed Section Heading
          </SpotliteTypography>

          <SpotliteTypography variant="body">
            Body text - This is the main content text with medium weight.
          </SpotliteTypography>

          <SpotliteTypography variant="bodyStrong">
            Body Strong - This is emphasized body text with semibold weight.
          </SpotliteTypography>

          <SpotliteTypography variant="caption">
            Caption - This is smaller text for secondary information.
          </SpotliteTypography>

          <SpotliteTypography variant="captionStrong">
            Caption Strong - This is emphasized caption text.
          </SpotliteTypography>

          <SpotliteTypography variant="captionSmall">
            Caption Small - This is the smallest text size available.
          </SpotliteTypography>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Typography with Colors</h2>

        <div className="space-y-2">
          <SpotliteTypography variant="body" className="text-spotlite-text-primary">
            Primary text color
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="text-spotlite-text-secondary">
            Secondary text color
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="text-accent">
            Accent color text
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="text-negative">
            Negative/Error color text
          </SpotliteTypography>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Font Families</h2>

        <div className="space-y-2">
          <SpotliteTypography variant="body" className="font-metropolis">
            Metropolis font family
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="font-pretendard">
            Pretendard font family
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="font-roboto">
            Roboto font family
          </SpotliteTypography>

          <SpotliteTypography variant="body" className="font-figtree">
            Figtree font family
          </SpotliteTypography>
        </div>
      </div>
    </div>
  )
}
