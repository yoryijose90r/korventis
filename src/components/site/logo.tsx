import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export function Logo({ className, variant = "dark", showText = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-silver/80" : "text-muted-foreground";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M4 4L12 12L4 20"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4L20 12L12 20"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-heading text-lg font-extrabold tracking-tight", textColor)}>
            KORVENTIS
          </span>
          <span className={cn("text-[9px] font-semibold uppercase tracking-[0.18em]", subColor)}>
            Technology · Data · Business
          </span>
        </span>
      )}
    </span>
  );
}
