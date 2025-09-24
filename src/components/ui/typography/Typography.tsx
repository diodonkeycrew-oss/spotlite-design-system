import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { TypographyVariant, TypographyColor } from "./types"

const typographyVariants = cva(
  "", // 기본 클래스는 없음
  {
    variants: {
      variant: {
        // MUI Typography variants와 매칭
        h1: "text-5xl font-semibold leading-tight sm:text-4xl", // 3rem -> text-5xl, sm: 2rem -> text-4xl
        h2: "text-5xl font-medium leading-tight sm:text-4xl", // 3rem -> text-5xl, sm: 2rem -> text-4xl  
        h3: "text-2xl font-semibold text-spotlite-text-secondary sm:text-xl", // 1.5rem -> text-2xl, sm: 1.2rem -> text-xl
        h4: "text-2xl font-medium text-spotlite-text-primary sm:text-xl", // 1.5rem -> text-2xl, sm: 1.2rem -> text-xl
        h5: "text-xl font-bold", // 1rem -> text-xl
        h6: "text-lg font-semibold", // 0.9rem -> text-lg
        body1: "text-base font-medium text-spotlite-text-secondary sm:text-sm", // 1rem -> text-base, sm: 0.9rem -> text-sm
        body2: "text-sm", // 0.8rem -> text-sm
        caption: "text-xs", // 0.7rem -> text-xs

        // Spotlite 커스텀 variants
        spotliteBody: "text-base font-medium text-spotlite-text-secondary sm:text-sm", // body1과 동일
        spotliteBodyStrong: "text-base font-semibold text-spotlite-text-primary sm:text-sm", // body1 + strong
        spotliteCaption: "text-sm font-normal text-spotlite-text-secondary sm:text-xs", // 0.875rem -> text-sm, sm: 0.75rem -> text-xs
        spotliteCaptionStrong: "text-sm font-medium text-spotlite-text-secondary sm:text-xs", // spotliteCaption + medium
        spotliteCaptionSmall: "text-xs font-normal text-spotlite-text-secondary", // 0.775rem -> text-xs
      } as const,
      color: {
        // MUI 색상과 매칭
        primary: "text-spotlite-text-primary", // #000000
        secondary: "text-spotlite-text-secondary", // #5A5A5A
        accent: "text-accent", // #5058e3
        minor: "text-minor", // #F1F1F1
        negative: "text-negative", // #D32F2F
        line: "text-line", // #06C755
        success: "text-success", // #5058e3
        warning: "text-warning", // #FFDA00
        error: "text-destructive", // #ff0000
        info: "text-info", // #5058e3
      } as const,
    },
    defaultVariants: {
      variant: "body1" as const,
      color: "primary" as const,
    },
  }
)

// typographyVariants에서 자동으로 추론되는 타입
export type TypographyVariantProps = VariantProps<typeof typographyVariants>

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: TypographyColor
  as?: keyof JSX.IntrinsicElements
}

const Typography = React.forwardRef<any, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    // variant에 따라 적절한 HTML 태그 선택
    const getTag = () => {
      if (as) return as

      switch (variant) {
        case "h1":
          return "h1"
        case "h2":
          return "h2"
        case "h3":
          return "h3"
        case "h4":
          return "h4"
        case "h5":
          return "h5"
        case "h6":
          return "h6"
        case "body1":
        case "body2":
        case "spotliteBody":
        case "spotliteBodyStrong":
          return "p"
        case "caption":
        case "spotliteCaption":
        case "spotliteCaptionStrong":
        case "spotliteCaptionSmall":
          return "span"
        default:
          return "p"
      }
    }

    const Component = getTag() as any

    return (
      <Component
        className={cn(typographyVariants({ variant, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
