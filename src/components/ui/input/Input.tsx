import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 hover:border-blue-500 focus:border-blue-500",
      },
      size: {
        small: "h-8 px-2 py-1 text-xs",
        medium: "h-10 px-3 py-2 text-sm",
        large: "h-12 px-4 py-3 text-base",
      },
      error: {
        true: "border-red-500 focus:border-red-500 focus:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      error: false,
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, error, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center justify-center w-4 h-4">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant, size, error }),
            // Icon padding
            {
              "pl-10": startIcon,
              "pr-10": endIcon,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center justify-center w-4 h-4 pointer-events-none">
            <div className="pointer-events-auto">
              {endIcon}
            </div>
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
