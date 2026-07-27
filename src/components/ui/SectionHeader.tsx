import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  subtitle,
  as: Heading = "h2",
  tone = "light",
  align = "left",
  className,
}: SectionHeaderProps) {
  const kickerColor = tone === "dark" ? "text-lime" : "text-grass";
  const titleColor = tone === "dark" ? "text-white" : "text-grass";
  const dividerColor = tone === "dark" ? "bg-white/20" : "bg-grass/20";
  const subtitleColor = tone === "dark" ? "text-cream/85" : "text-ink/75";

  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.15em]", kickerColor)}>
        {kicker}
      </p>
      <div
        className={cn("mb-5 h-px w-16", dividerColor, align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      <Heading
        className={cn(
          "text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight",
          titleColor,
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            subtitleColor,
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
