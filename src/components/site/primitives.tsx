import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Eyebrow({
  children,
  variant = "dark",
  className,
}: {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
        variant === "light"
          ? "border-white/25 bg-white/10 text-silver"
          : "border-sky/20 bg-sky/10 text-brand",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow variant={variant}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-3xl font-bold leading-tight sm:text-4xl",
          variant === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            variant === "light" ? "text-silver/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pt-32 pb-20 text-white sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #2f80ed, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #56a0ff, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow variant="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver/85">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-7xl px-5 lg:px-8", className)}>{children}</div>;
}
