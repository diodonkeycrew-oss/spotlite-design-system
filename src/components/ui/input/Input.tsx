import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: "default" | "outlined" | "filled" | "standard"
  size?: "small" | "medium" | "large"
  error?: boolean
  helperText?: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "outlined", size = "medium", error, helperText, label, ...props }, ref) => {
    const inputId = React.useId()
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              "block text-sm font-bold mb-1",
              error ? "text-red-600" : "text-black"
            )}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            // Variant styles
            {
              "border-gray-300 hover:border-blue-500 focus:border-blue-500": variant === "outlined",
              "border-0 border-b-2 border-gray-300 rounded-none hover:border-blue-500 focus:border-blue-500": variant === "standard",
              "bg-gray-100 border-0 hover:bg-gray-200 focus:bg-gray-200": variant === "filled",
            },
            // Size styles
            {
              "h-8 px-2 py-1 text-xs": size === "small",
              "h-10 px-3 py-2 text-sm": size === "medium", 
              "h-12 px-4 py-3 text-base": size === "large",
            },
            // Error styles
            {
              "border-red-500 focus:border-red-500 focus:ring-red-500": error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "mt-1 text-xs",
            error ? "text-red-600" : "text-gray-600"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
