import { useId } from "react";
import { cn } from "@/lib/cn";

type PatternBackgroundProps = {
  /** Opacidad del patrón, 0–1. */
  opacity?: number;
  className?: string;
};

/**
 * Patrón orgánico de líneas onduladas y bucles continuos en `lime`,
 * pensado para usarse con moderación (hero, CTAs, separadores) sobre
 * fondo `cream` o `sea`. Nunca detrás de párrafos largos de texto.
 */
export function PatternBackground({ opacity = 0.14, className }: PatternBackgroundProps) {
  const patternId = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full select-none text-lime",
        className,
      )}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={patternId}
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(6)"
        >
          <path
            d="M-30,90 C0,20 40,160 90,90 C140,20 180,160 210,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M20,150 C40,120 55,180 75,150 C95,120 110,180 130,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.65"
          />
          <circle cx="150" cy="35" r="9" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
