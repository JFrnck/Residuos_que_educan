import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const TONES = {
  white: "bg-white border border-grass/15 shadow-[0_2px_10px_rgba(0,75,74,0.06)]",
  cream: "bg-cream border border-grass/15",
  sea: "bg-sea border border-white/10 text-cream",
  outline: "bg-white border-2 border-grass",
} as const;

type Tone = keyof typeof TONES;

type CardProps = {
  as?: ElementType;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export function Card({ as: Tag = "div", tone = "white", className, children }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,75,74,0.14)]",
        TONES[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
