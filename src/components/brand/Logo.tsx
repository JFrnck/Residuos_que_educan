import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "color" | "blanco" | "negro";
  className?: string;
};

/**
 * El archivo fuente (public/images/logo.png) es el lockup horizontal real de
 * la marca en PNG transparente. Sobre fondos oscuros (footer, bloques `sea`)
 * el trazo verde fijo del isotipo perdería contraste, así que ahí se usa el
 * wordmark en texto — el mismo criterio que el prototipo de diseño aplica en
 * su footer.
 */
export function Logo({ variant = "color", className }: LogoProps) {
  if (variant === "color") {
    return (
      <img
        src="/images/logo.png"
        alt="Residuos que Educan"
        className={cn("h-16 w-auto mix-blend-multiply", className)}
      />
    );
  }

  const textColor = variant === "blanco" ? "text-white" : "text-grass";

  return (
    <span
      className={cn(
        "flex flex-col leading-[1.05] font-extrabold tracking-tight",
        textColor,
        className,
      )}
    >
      <span className="text-[0.62em] font-medium">Residuos que</span>
      <span className="text-[0.85em] font-extrabold">Educan</span>
    </span>
  );
}
