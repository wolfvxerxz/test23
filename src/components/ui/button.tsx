import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-[#2a2a2a] to-[#181818] text-primary-foreground hover:from-[#3a3a3a] hover:to-[#282828] shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(0,0,0,0.2)]",
        destructive:
          "bg-gradient-to-b from-red-500 to-red-600 text-destructive-foreground hover:from-red-600 hover:to-red-700 shadow-[0_4px_6px_rgba(220,38,38,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_8px_rgba(220,38,38,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] active:shadow-[0_1px_2px_rgba(220,38,38,0.1),inset_0_1px_3px_rgba(0,0,0,0.2)]",
        outline:
          "border-2 border-input bg-gradient-to-b from-white to-gray-100 text-gray-800 hover:from-gray-50 hover:to-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] active:shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_3px_rgba(0,0,0,0.1)]",
        secondary:
          "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-[0_4px_6px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] active:shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_3px_rgba(0,0,0,0.1)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        custom: "rounded-[5px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "custom",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, className }),
          "transform transition-transform active:translate-y-0.5 active:scale-[0.98]",
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

