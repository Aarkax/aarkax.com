import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition duration-200 ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-amber text-navy shadow-amber hover:-translate-y-0.5 hover:bg-[#d8890d]",
        navy: "bg-navy text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-surface-deep",
        secondary: "border border-navy/15 bg-white text-navy hover:-translate-y-0.5 hover:border-navy/30 hover:bg-ivory",
        ghost: "text-navy hover:bg-navy/5"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
