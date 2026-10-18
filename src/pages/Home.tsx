import { FaAward, FaChartLine, FaFileInvoiceDollar, FaHandshake } from "react-icons/fa6";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { Button } from "@/components/ui/Button";
import { PhotoCarousel, type CarouselPhoto } from "@/components/ui/PhotoCarousel";
import { Card } from "@/components/ui/Card";
import { DashList } from "@/components/ui/DashList";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepList } from "@/components/ui/StepList";
import { Reveal } from "@/components/ui/Reveal";
import { StatBanner } from "@/components/sections/StatBanner";
import { GoalStats } from "@/components/sections/GoalStats";
import { TaxDeductionBlock } from "@/components/sections/TaxDeductionBlock";
import { EcotecBanner } from "@/components/sections/EcotecBanner";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { homeModelSteps } from "@/data/steps";
import { closingLine, legalIdentity } from "@/data/site";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const companyBenefits = [
  { icon: FaHandshake, label: "Responsabilidad Social (ESG)" },
  { icon: FaChartLine, label: "Impacto medible" },
  { icon: FaAward, label: "Reputación corporativa" },
  { icon: FaFileInvoiceDollar, label: "Deducción tributaria" },
];

const heroPills = [
  "Responsabilidad Social Empresarial",
  "Economía Circular",
  "Innovación Educativa",
  "Responsabilidad Extendida del Productor",
];

const heroPhotos: CarouselPhoto[] = [
  {
    src: "/images/home/hero-1-estudiantes.webp",
    alt: "Fundador de Residuos que Educan abrazado con estudiantes de un colegio público",
  },
  {
    src: "/images/home/hero-2-campana-colegio.webp",
    alt: "Estudiantes y docentes junto a las bolsas de residuos recolectadas en una campaña escolar",
  },
  {
    src: "/images/home/hero-3-capacitacion-docentes.webp",
    alt: "Capacitación a docentes en el uso de pizarras interactivas",
  },
  {
    src: "/images/home/hero-4-planta-reciclaje.webp",
    alt: "Equipo de Residuos que Educan con recicladoras en una planta de valorización",
  },
  {
    src: "/images/home/hero-5-aula-innovacion.webp",
    alt: "Estudiante resolviendo un ejercicio en la pizarra interactiva de un Aula de Innovación",
  },
];

const KUNAN_ARTICLE_URL = "https://www.mercadonegro.pe/actualidad/desafio-kunan-2026/";

const partnerLogos = [
  { src: "/images/aliados/kunan.webp", name: "Kunan — Perú Sostenible" },
  { src: "/images/aliados/michell.webp", name: "Michell & Cía." },
  { src: "/images/aliados/municipalidad-arequipa.webp", name: "Municipalidad Provincial de Arequipa" },
  { src: "/images/aliados/ugel-arequipa-norte.webp", name: "UGEL Arequipa Norte" },
  { src: "/images/aliados/ugel-arequipa-sur.webp", name: "UGEL Arequipa Sur" },
  { src: "/images/aliados/simplybook.webp", name: "SimplyBook.me" },
];

export default function Home() {
  useDocumentTitle(
    "Inicio",
    "Convertimos los residuos sólidos de tu empresa en Aulas de Innovación para colegios públicos del Perú, con trazabilidad total.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-6 pt-10 pb-20 sm:pt-6 sm:pb-24">
        <PatternBackground opacity={0.12} />
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-2.5 text-xs font-bold tracking-[0.15em] text-grass uppercase">
              Economía circular que transforma la educación pública
            </p>
            <p className="mb-1 text-sm font-semibold text-sea">
              Proyecto nacional 2026–2030, en marcha desde Arequipa
            </p>
            <p className="mb-5 text-sm font-extrabold text-grass">
              {legalIdentity.initiativeOf}
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

          <Reveal delay={0.15}>
            <PhotoCarousel
              photos={heroPhotos}
              label="Fotos de Residuos que Educan"
              className="aspect-[4/3] w-full border border-grass/15"
            />
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

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ImageWithCaption
            src="/images/home/kunan-2026-premio.webp"
            alt="Residuos que Educan recibe el premio de S/ 15,000 como ganador de Educación con Impacto en el Desafío Kunan 2026"
            aspect="3/2"
          />
          <div>
            <img
              src="/images/aliados/desafio-kunan-2026.webp"
              alt="Desafío Kunan 2026"
              loading="lazy"
              className="mb-5 h-14 w-auto"
            />
            <h2 className="mb-5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight font-extrabold tracking-tight text-grass">
              ¡Ganamos el Desafío Kunan 2026!
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed">
              Residuos que Educan fue reconocido como ganador en la categoría{" "}
              <strong>Educación con Impacto</strong>, destacando nuestro modelo innovador que
              transforma residuos valorizables en oportunidades educativas.
            </p>
            <p className="mb-7 text-[17px] leading-relaxed">
              Este reconocimiento reafirma nuestro compromiso con una educación más inclusiva,
              innovadora y sostenible, demostrando que los residuos pueden convertirse en
              herramientas para transformar el futuro de miles de estudiantes.
            </p>
            <Button href={KUNAN_ARTICLE_URL} target="_blank" rel="noopener noreferrer">
              Conoce más sobre este reconocimiento
            </Button>
          </div>
        </div>
      </section>

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
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ImageWithCaption
            src="/images/kolekt.jpg"
            alt="App de Kolekt — trazabilidad"
            aspect="2/1"
          />
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.15em] text-grass uppercase">
              Kolekt es una empresa certificadora internacional de origen holandés
            </p>
            <h2 className="mb-6 text-[clamp(1.75rem,3.4vw,2.5rem)] font-extrabold tracking-tight text-grass">
              Trazabilidad total, certificada
            </h2>
            <DashList
              items={[
                "Cada kilo donado queda registrado y es 100% trazable, de principio a fin.",
                "Certificado de recuperación de residuos por empresa, tipo crédito ambiental.",
                <>
                  <strong>Sello físico y virtual con código QR:</strong> cualquier persona que lo
                  escanee accede a fotos, testimonios y datos reales de cómo los residuos de tu
                  empresa se convirtieron en educación.
                </>,
              ]}
            />
            <Button to="/aliados" size="lg" className="mt-8">
              Ver niveles de alianza
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Beneficios" title="Beneficios para tu empresa" />
          <TaxDeductionBlock className="mt-9 rounded-2xl" />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {companyBenefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/25 text-grass">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-ink/80">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 text-sm text-ink/55">
            {legalIdentity.ruc} · {legalIdentity.resolution}
          </p>
          <Button to="/beneficios" variant="secondary" size="lg" className="mt-6">
            Ver todos los beneficios
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
              Convierte tu Responsabilidad Social en aulas reales
            </h3>
            <p className="mb-7 text-[16.5px] leading-relaxed">
              Transforma los residuos que tu empresa ya genera en impacto social medible:
              fortalece tu estrategia ESG y de Responsabilidad Social, con trazabilidad
              certificada — y de paso, avanza en tu cumplimiento de la Ley REP.
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
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partnerLogos.map(({ src, name }) => (
              <li
                key={src}
                className="flex h-[104px] items-center justify-center rounded-xl border border-grass/15 bg-white px-4 py-3"
              >
                <img src={src} alt={name} loading="lazy" className="max-h-full max-w-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EcotecBanner tone="white" className="pt-0" />

      <FinalCTA
        title={closingLine}
        text="Súmate como aliado — agenda una reunión de 15 minutos y te mostramos cómo tu empresa (o tu organización) puede ser parte del cambio."
      />
    </>
  );
}
