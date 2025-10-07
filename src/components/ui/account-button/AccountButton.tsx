import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { AccountButtonVariant, AccountButtonSize } from "./types"

const accountButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Line 관련 variants
        line: "bg-green-500 text-white hover:bg-green-600",
        lineDisconnect: "border border-green-500 text-green-500 hover:bg-green-50",
        
        // Search 관련 variants
        search: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        searchSelected: "bg-blue-100 text-blue-700 border border-blue-300",
        
        // Option 관련 variants
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
      variant: "line" as const,
      size: "default" as const,
    },
  }
)

export interface AccountButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AccountButtonVariant
  size?: AccountButtonSize
  asChild?: boolean
}

const AccountButton = React.forwardRef<HTMLButtonElement, AccountButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(accountButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AccountButton.displayName = "AccountButton"

export { AccountButton, accountButtonVariants }
