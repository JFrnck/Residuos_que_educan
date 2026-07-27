import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "color" | "blanco" | "negro";
  className?: string;
};

/**
 * El archivo fuente (public/images/logo.jpg) es el lockup horizontal real de
 * la marca sobre fondo blanco. Sobre fondos claros se muestra tal cual con
 * mix-blend-mode:multiply para que el blanco desaparezca. Sobre fondos oscuros
 * (footer, bloques `sea`) el multiply no funciona: el trazo verde perdería
 * contraste, así que se usa el wordmark en texto — el mismo criterio que el
 * prototipo de diseño aplica en su footer.
 * // TODO: reemplazar por el isotipo en SVG/PNG transparente cuando el
 * cliente lo entregue, sin cambiar la API de este componente.
 */
export function Logo({ variant = "color", className }: LogoProps) {
  if (variant === "color") {
    return (
      <img
        src="/images/logo.jpg"
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
