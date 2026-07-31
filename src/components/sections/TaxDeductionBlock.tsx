import { cn } from "@/lib/cn";

type TaxDeductionBlockProps = {
  className?: string;
};

export function TaxDeductionBlock({ className }: TaxDeductionBlockProps) {
  return (
    <section className={cn("bg-sea px-6 py-16 text-cream", className)}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12">
        <p className="text-xs font-extrabold tracking-[0.18em] text-lime uppercase sm:border-r sm:border-lime/30 sm:pr-8">
          Deducción
          <br />
          Tributaria
        </p>
        <p className="text-lg leading-relaxed">
          <strong>Deducción tributaria habilitada desde hoy</strong> — aplica sobre donaciones en
          efectivo, residuos sólidos y otros aportes. Residuos que Educan ya cuenta con{" "}
          <strong>Resolución SUNAT</strong> como entidad perceptora de donaciones.
        </p>
      </div>
    </section>
  );
}
