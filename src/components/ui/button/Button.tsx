import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { ButtonVariant, ButtonSize } from "./types"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // 기본 shadcn variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Spotlite 커스텀 variants (MUI 컬러와 variant만 매칭, 기본 스타일은 shadcn)
        spotlite: "bg-primary text-primary-foreground hover:bg-primary/90",
        spotliteLogin: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        line: "bg-green-500 text-white hover:bg-green-600",
        lineDisconnect: "border border-green-500 text-green-500 hover:bg-green-50",
        search: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        searchSelected: "bg-blue-100 text-blue-700 border border-blue-300",
        option: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-full",
        optionSelected: "bg-blue-500 text-white border border-blue-500 rounded-full",
      } as const,
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xlarge: "h-12 rounded-md px-8 text-lg",
      } as const,
    },
    defaultVariants: {
      variant: "default" as const,
      size: "default" as const,
    },
  }
)

// buttonVariants에서 자동으로 추론되는 타입
export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
