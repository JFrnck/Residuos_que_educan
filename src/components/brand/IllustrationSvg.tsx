import { useEffect, useRef, type ComponentType, type SVGProps } from "react";
import { cn } from "@/lib/cn";

type IllustrationSvgProps = {
  as: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  className?: string;
};

/**
 * Envuelve las ilustraciones animadas por SMIL (`<animate>`/`<animateTransform>`)
 * y detiene la animación cuando el usuario prefiere movimiento reducido, ya
 * que `prefers-reduced-motion` no pausa SMIL automáticamente como sí hace
 * con CSS/Web Animations.
 */
export function IllustrationSvg({ as: SvgComponent, title, className }: IllustrationSvgProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof svg.pauseAnimations !== "function") return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <SvgComponent
      ref={ref}
      role="img"
      aria-label={title}
      className={cn("h-auto w-full", className)}
    />
  );
}
