import { cva, type VariantProps } from "class-variance-authority"

export const inputVariants = cva(
  "flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 hover:border-blue-500 focus:border-blue-500",
        outlined: "border-gray-300 hover:border-blue-500 focus:border-blue-500",
        filled: "bg-gray-100 border-0 hover:bg-gray-200 focus:bg-gray-200",
        standard: "border-0 border-b-2 border-gray-300 rounded-none hover:border-blue-500 focus:border-blue-500",
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
      variant: "outlined",
      size: "medium",
      error: false,
    },
  }
)

export type InputVariantProps = VariantProps<typeof inputVariants>
export type InputVariant = NonNullable<InputVariantProps["variant"]>
export type InputSize = NonNullable<InputVariantProps["size"]>
