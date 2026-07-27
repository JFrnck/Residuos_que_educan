import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashList } from "@/components/ui/DashList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TaxDeductionBlock } from "@/components/sections/TaxDeductionBlock";
import { StepList } from "@/components/ui/StepList";
import { alliancePartnerSteps } from "@/data/steps";
import { tiers } from "@/data/tiers";
import { contact } from "@/data/site";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function Aliados() {
  useDocumentTitle(
    "Aliados",
    "Conoce los tres niveles de alianza para empresas: Aliado Recicla, Aliado Impacta y Aliado Transforma.",
  );

  return (
    <>
      <section className="bg-cream px-6 pt-10 pb-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Niveles de alianza
          </p>
          <h1 className="mb-5 text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold tracking-tight text-grass">
            Tres niveles para ser Aliado de Residuos que Educan
          </h1>
          <p className="text-lg leading-relaxed text-ink/80">
            No tiene que ser todo o nada. Empieza donde tenga sentido para tu empresa hoy — y
            avanza de nivel cuando quieras generar más impacto.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isPremium = tier.slug === "transforma";
            return (
              <Card
                key={tier.slug}
                tone={isPremium ? "sea" : "white"}
                className="flex flex-col p-9"
              >
                <span className="mb-4 text-sm font-extrabold text-lime">{tier.number}</span>
                <p
                  className={
                    isPremium
                      ? "mb-1.5 text-xs font-bold tracking-[0.1em] text-cream/80 uppercase"
                      : "mb-1.5 text-xs font-bold tracking-[0.1em] text-grass/70 uppercase"
                  }
                >
                  {tier.level}
                </p>
                <h2
                  className={
                    isPremium
                      ? "mb-3 text-2xl font-extrabold text-white"
                      : "mb-3 text-2xl font-extrabold text-grass"
                  }
                >
                  {tier.name}
                </h2>
                <p className={isPremium ? "mb-5 text-sm text-cream/90" : "mb-5 text-sm text-ink/70"}>
                  <em className="not-italic">Quién es:</em> {tier.who}
                </p>
                {tier.inheritsFrom && (
                  <p
                    className={
                      isPremium
                        ? "mb-3 text-xs font-bold text-lime uppercase"
                        : "mb-3 text-xs font-bold text-grass uppercase"
                    }
                  >
                    {tier.inheritsFrom}
                  </p>
                )}
                <DashList items={[...tier.features]} className="mb-8 flex-1" />
                <Button to={`/contacto?nivel=${tier.slug}`} variant={isPremium ? "onDark" : "primary"}>
                  Quiero este nivel
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ImageWithCaption
            src="/images/kolekt.jpg"
            alt="App de Kolekt — trazabilidad"
            caption="App de Kolekt — trazabilidad"
            aspect="2/1"
          />
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.15em] text-grass uppercase">
              Kolekt es una empresa certificadora internacional de origen holandés (Países Bajos)
            </p>
            <h2 className="mb-6 text-[clamp(1.75rem,3.4vw,2.5rem)] font-extrabold tracking-tight text-grass">
              Trazabilidad total con Kolekt
            </h2>
            <DashList
              items={[
                "Cada kilo donado queda registrado y es 100% trazable, de principio a fin.",
                "Certificado de recuperación de residuos por empresa, tipo crédito ambiental — bajo estándares internacionales de gestión de residuos y REP.",
                <>
                  <strong>Sello físico y virtual con código QR:</strong> cualquier persona que lo
                  escanee accede a fotos, testimonios y datos reales de cómo los residuos de tu
                  empresa se convirtieron en educación — visible para tus clientes donde tú
                  decidas mostrarlo.
                </>,
              ]}
            />
          </div>
        </div>
      </section>

      <TaxDeductionBlock />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Empezar es simple" title="Cómo empezamos" />
          <StepList steps={alliancePartnerSteps} columns={3} className="mt-9" />
        </div>
      </section>

      <FinalCTA
        title="No es solo cumplir. Es liderar."
        text="Escríbenos para agendar una reunión y ver cómo tu empresa se convierte en aliada."
      >
        <p className="mt-10 text-sm text-cream/80">
          José Adolfo Quisocala — Fundador, Residuos que Educan
          <br />
          {contact.phoneDisplay} · {contact.email}
        </p>
      </FinalCTA>
    </>
  );
}
