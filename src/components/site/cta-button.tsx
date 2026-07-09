import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-elevated",
        navy: "bg-navy text-white hover:bg-navy/90 hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-navy hover:border-sky hover:text-sky",
        ghostLight:
          "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
        white: "bg-white text-navy shadow-card hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & { className?: string };

export function CtaButton({
  variant,
  size,
  className,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export function CtaLink({
  variant,
  size,
  className,
  to,
  ...props
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link to={to} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
