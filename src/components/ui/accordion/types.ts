import { cva, type VariantProps } from "class-variance-authority"

const accordionVariants = cva(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "text-foreground",
        spotlite: "text-black font-semibold",
      },
      size: {
        default: "py-4",
        small: "py-2 text-sm",
        large: "py-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { accordionVariants }
export type AccordionVariantsProps = VariantProps<typeof accordionVariants>


