import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function StatCounter({ value, suffix = "", label, className }: StatCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = numberRef.current;
    if (!el || !isInView) return;

    if (shouldReduceMotion) {
      el.textContent = value.toLocaleString("es-PE") + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        el.textContent = Math.round(latest).toLocaleString("es-PE") + suffix;
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, shouldReduceMotion]);

  return (
    <div ref={containerRef} className={cn("text-center sm:text-left", className)}>
      <span
        ref={numberRef}
        className="block text-[clamp(2.9rem,6vw,4.6rem)] leading-none font-extrabold tracking-tight text-lime"
      >
        0{suffix}
      </span>
      <p className="mt-2.5 text-sm font-semibold text-cream/90">{label}</p>
    </div>
  );
}
