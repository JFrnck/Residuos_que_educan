import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { ecotec, legalIdentity } from "@/data/site";

type EcotecBannerProps = {
  tone?: "cream" | "white";
  className?: string;
};

/** Deja claro que Residuos que Educan es una iniciativa de ECOTEC PERÚ. */
export function EcotecBanner({ tone = "cream", className }: EcotecBannerProps) {
  return (
    <section
      aria-labelledby="ecotec-banner-title"
      className={cn("px-6 py-16", tone === "cream" ? "bg-cream" : "bg-white", className)}
    >
      <Reveal className="mx-auto flex max-w-[1180px] flex-col items-center gap-8 rounded-3xl border border-grass/15 bg-white px-8 py-10 text-center shadow-[0_2px_10px_rgba(0,75,74,0.06)] md:flex-row md:text-left">
        {ecotec.logo && (
          <img
            src={ecotec.logo}
            alt={`Logo de ${ecotec.name}`}
            loading="lazy"
            className="h-20 w-auto shrink-0 object-contain"
          />
        )}
        <div className="flex-1">
          <h2
            id="ecotec-banner-title"
            className="mb-2 text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight font-extrabold tracking-tight text-grass"
          >
            Esta iniciativa es parte de {ecotec.name}
          </h2>
          <p className="text-[16px] leading-relaxed text-ink/80">
            Residuos que Educan es impulsada y gestionada por {ecotec.name} — {ecotec.fullName},{" "}
            {legalIdentity.orgKind.toLowerCase()} legalmente constituida en el Perú.
          </p>
        </div>
        <Button to="/nosotros#organizacion" variant="secondary" className="shrink-0">
          Conoce a la organización
        </Button>
      </Reveal>
    </section>
  );
}
