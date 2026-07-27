import { PatternBackground } from "@/components/brand/PatternBackground";
import { IllustrationSvg } from "@/components/brand/IllustrationSvg";
import StudentIllustration from "@/assets/illustrations/student.svg?react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashList } from "@/components/ui/DashList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepList } from "@/components/ui/StepList";
import { Reveal } from "@/components/ui/Reveal";
import { StatBanner } from "@/components/sections/StatBanner";
import { GoalStats } from "@/components/sections/GoalStats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { homeModelSteps } from "@/data/steps";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const heroPills = [
  "Economía Circular",
  "Responsabilidad Extendida del Productor",
  "Responsabilidad Social Empresarial",
  "Innovación Educativa",
];

const partnerLogos = [
  "logo empresa",
  "logo municipalidad",
  "logo ministerio",
  "logo UGEL",
  "recicladores formalizados",
  "organización cooperante",
];

export default function Home() {
  useDocumentTitle(
    "Inicio",
    "Convertimos los residuos sólidos de tu empresa en Aulas de Innovación para colegios públicos del Perú, con trazabilidad total.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-6 pt-10 pb-20 sm:pt-20 sm:pb-24">
        <PatternBackground opacity={0.12} />
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-2.5 text-xs font-bold tracking-[0.15em] text-grass uppercase">
              Economía circular que transforma la educación pública
            </p>
            <p className="mb-5 text-sm font-semibold text-sea">
              Proyecto nacional 2026–2030, en marcha desde Arequipa
            </p>
            <h1 className="mb-5 text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.03] font-extrabold tracking-tight text-grass text-balance">
              Transformamos residuos en tecnología para la educación pública
            </h1>
            <p className="mb-5 max-w-xl text-[17px] leading-relaxed text-ink/85">
              Convertimos los residuos sólidos que tu empresa ya genera en Aulas de Innovación
              para colegios públicos de todo el Perú — con trazabilidad total y resultados
              medibles.
            </p>
            <p className="mb-7 border-l-[3px] border-lime pl-3.5 text-lg font-bold text-grass italic">
              “Cada residuo tiene el poder de cambiar el futuro de un estudiante.”
            </p>
            <div className="mb-6 flex flex-wrap gap-3.5">
              <Button to="/aliados" size="lg">
                Quiero donar residuos
              </Button>
              <Button to="/recibir-donacion" variant="secondary" size="lg">
                Registrar institución educativa
              </Button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-lime/25 px-3.5 py-2 text-[12.5px] font-bold text-grass"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative min-h-[380px] overflow-hidden rounded-3xl border border-grass/15 bg-gradient-to-br from-white via-cream to-lime/30 p-8"
          >
            <IllustrationSvg as={StudentIllustration} title="Estudiante con laptop" />
          </Reveal>
        </div>
      </section>

      <StatBanner number="12t">
        <strong className="text-lime">
          12 toneladas de residuos valorizados financian la implementación completa de 1 Aula de
          Innovación (S/ 10,000):
        </strong>{" "}
        tecnología, capacitación docente y montaje. Con la donación agregada de varias empresas,
        el proyecto financia progresivamente más aulas cada año, en más regiones del país.
      </StatBanner>

      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="El problema" title="Dos problemas que se resuelven juntos" />
          <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
            <Card>
              <h3 className="mb-5 text-xl font-extrabold text-grass">
                La brecha digital educativa
              </h3>
              <DashList
                items={[
                  <>
                    La brecha digital ya amenaza a más de <strong>50,000 escuelas</strong> y a{" "}
                    <strong>6 de cada 10 familias</strong> peruanas.{" "}
                    <em className="text-[13px] text-ink/50 not-italic">(CADE Educación 2025)</em>
                  </>,
                  <>
                    En primaria pública hay solo{" "}
                    <strong>1 computadora por cada 12 estudiantes</strong> — y en zonas rurales la
                    relación empeora hasta 1 por cada 94.{" "}
                    <em className="text-[13px] text-ink/50 not-italic">
                      (Censo Educativo 2023, MINEDU)
                    </em>
                  </>,
                  "Sin acceso a tecnología, los estudiantes llegan a la educación superior y al mercado laboral con menos herramientas que sus pares — la desigualdad se hereda.",
                ]}
              />
            </Card>
            <Card>
              <h3 className="mb-5 text-xl font-extrabold text-grass">
                La gestión de residuos en las empresas
              </h3>
              <DashList
                items={[
                  <>
                    Perú genera más de <strong>7 millones de toneladas</strong> de residuos
                    sólidos al año (~20,000 t diarias) — y solo se{" "}
                    <strong>recicla o valoriza el 1.9%</strong> de lo que sí es reaprovechable.{" "}
                    <em className="text-[13px] text-ink/50 not-italic">
                      (Defensoría del Pueblo; MINAM)
                    </em>
                  </>,
                  <>
                    En 2024 se valorizaron <strong>249,407 t</strong> a nivel nacional, un avance
                    real (+35% vs. 2023) — pero aún una fracción mínima de lo que las empresas y
                    ciudades generan.{" "}
                    <em className="text-[13px] text-ink/50 not-italic">(MINAM, 2024)</em>
                  </>,
                  'La mayoría de acciones de RSE no generan impacto visible ni medible en el tiempo — falta un puente formal entre "gestionar residuos" y "generar desarrollo real" para el país.',
                ]}
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Así funciona el modelo" title="De residuo a aula, en cinco movimientos" />
          <StepList steps={homeModelSteps} className="mt-10" />
          <Button to="/como-funciona" variant="secondary" size="lg" className="mt-9">
            Ver el modelo en detalle
          </Button>
        </div>
      </section>

      <section className="bg-cream px-6 py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 lg:grid-cols-2">
          <Card tone="sea" className="p-11">
            <p className="mb-3.5 text-xs font-bold tracking-[0.15em] text-lime uppercase">
              Para empresas
            </p>
            <h3 className="mb-4 text-[1.9rem] leading-tight font-extrabold tracking-tight text-white">
              Cumple la Ley REP y genera impacto medible
            </h3>
            <p className="mb-7 text-[16.5px] leading-relaxed">
              Cumple la Ley REP, fortalece tu RSE y genera impacto medible con trazabilidad
              certificada.
            </p>
            <Button to="/aliados" variant="onDark">
              Ver niveles de alianza
            </Button>
          </Card>
          <Card tone="outline" className="p-11">
            <p className="mb-3.5 text-xs font-bold tracking-[0.15em] text-grass uppercase">
              Para instituciones educativas
            </p>
            <h3 className="mb-4 text-[1.9rem] leading-tight font-extrabold tracking-tight text-grass">
              Un aula de innovación, sin costo
            </h3>
            <p className="mb-7 text-[16.5px] leading-relaxed text-ink/80">
              Registra tu colegio público y accede a un Aula de Innovación sin costo alguno.
            </p>
            <Button to="/recibir-donacion">Registrar mi institución</Button>
          </Card>
        </div>
      </section>

      <GoalStats />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Aliados y articulación institucional
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((label) => (
              <div
                key={label}
                className="flex h-[74px] items-center justify-center rounded-xl border border-dashed border-grass/30 px-2 text-center font-mono text-[11px] font-semibold text-ink/45"
              >
                {label}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-ink/55">
            Solo se muestran como referencias de trayectoria previa del equipo las organizaciones
            listadas en Nosotros.
          </p>
        </div>
      </section>

      <FinalCTA
        title="No es solo cumplir. Es liderar."
        text="Escríbenos para agendar una reunión y ver cómo tu empresa se convierte en aliada."
      />
    </>
  );
}
