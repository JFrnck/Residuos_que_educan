export function TaxDeductionBlock() {
  return (
    <section className="bg-sea px-6 py-16 text-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12">
        <p className="text-xs font-extrabold tracking-[0.18em] text-lime uppercase sm:border-r sm:border-lime/30 sm:pr-8">
          Deducción
          <br />
          Tributaria
        </p>
        <p className="text-lg leading-relaxed">
          Aplica sobre donaciones en <strong>efectivo, residuos sólidos y otros aportes</strong>.
          Residuos que Educan ya cuenta con <strong>Resolución SUNAT</strong> que lo califica como
          entidad perceptora de donaciones — el beneficio tributario para tu empresa está
          habilitado desde hoy.
        </p>
      </div>
    </section>
  );
}
