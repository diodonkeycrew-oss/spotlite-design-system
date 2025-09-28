import { cva, type VariantProps } from "class-variance-authority";

export const radioVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 text-primary",
        accent: "border-blue-600 text-blue-600",
        negative: "border-red-500 text-red-500",
        line: "border-green-600 text-green-600",
        minor: "border-gray-300 text-gray-500",
      },
      size: {
        default: "h-4 w-4",
        small: "h-3 w-3",
        large: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type RadioVariantProps = VariantProps<typeof radioVariants>;


