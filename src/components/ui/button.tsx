import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 font-sans font-semibold uppercase tracking-btn rounded-[2px] border border-transparent whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-mustard text-ink hover:bg-paper",
        ghost:
          "bg-transparent text-paper border-line-strong hover:border-mustard hover:text-mustard",
        whatsapp: "bg-mustard text-ink hover:bg-paper",
      },
      size: {
        default: "px-7 py-4 text-xs",
        lg: "px-10 py-5 text-[0.8rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
