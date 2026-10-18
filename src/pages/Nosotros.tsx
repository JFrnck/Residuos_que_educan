import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { GoalStats } from "@/components/sections/GoalStats";
import { contact, legalIdentity } from "@/data/site";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const founderPills = [
  "Premio Enrique García 2025 · CAF",
  "Top 20 Most Innovator Bankers · Fintech Americas 2025",
  "Children's Climate Prize 2018",
  "Young Activist Summit · ONU 2020",
];

const trajectoryPartners = [
  "Hoteles Sonesta",
  "Universidad UTP",
  "Hotel Libertador",
  "Grupo Roberts",
  "UGEL Arequipa Norte",
  "UGEL Arequipa Sur",
];

const phases = [
  {
    status: "✓ Completada",
    title: "Fase 1 — Articulación institucional",
    description: "Coordinación con UGEL Arequipa Norte y Sur y la Gerencia Regional de Educación.",
    done: true,
  },
  {
    status: "✓ Completada",
    title: "Fase 2 — Activación del ecosistema",
    description: "Presentación oficial a directores y docentes, con demostración técnica.",
    done: true,
  },
  {
    status: "En curso",
    title: "Fase 3 — Implementación escolar",
    description: "Campañas de recolección, instalación del aula y capacitación docente.",
    done: false,
  },
  {
    status: "Próxima",
    title: "Fase 4 — Evaluación y expansión",
    description: "Monitoreo por indicadores y expansión progresiva a nuevas regiones del país.",
    done: false,
  },
];

export default function Nosotros() {
  useDocumentTitle(
    "Nosotros",
    "Residuos que Educan es un proyecto de la ONG Ecotec Perú que valoriza residuos sólidos para financiar Aulas de Innovación en colegios públicos.",
  );

  return (
    <>
      <section className="bg-cream px-6 pt-10 pb-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">Nosotros</p>
          <h1 className="mb-7 text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold tracking-tight text-grass">
            ¿Quiénes somos?
          </h1>
          <p className="mb-4 text-[17.5px] leading-relaxed">
            Residuos que Educan es una iniciativa impulsada por <strong>ECOTEC PERÚ</strong> que
            conecta la gestión responsable de residuos con la transformación educativa. Mediante
            alianzas con empresas e instituciones educativas, promovemos la valorización de
            residuos para financiar recursos pedagógicos, desarrollar aulas de innovación y
            fortalecer las capacidades de docentes y estudiantes.
          </p>
          <p className="text-[17.5px] leading-relaxed">
            Nuestro propósito es cerrar la brecha tecnológica de la educación pública mediante la
            valorización de residuos sólidos donados por empresas comprometidas con el desarrollo
            sostenible.
          </p>
        </div>
      </section>

      <section id="organizacion" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader kicker="Institucional" title="Nuestra organización" />
          <p className="mt-6 mb-4 text-[17px] leading-relaxed">
            Residuos que Educan es una iniciativa impulsada y gestionada por{" "}
            <strong>
              ECOTEC PERÚ — Patronato de Educación, Ecología, Economía Social y Tecnología
            </strong>
            , organización sin fines de lucro legalmente constituida en el Perú.
          </p>
          <p className="mb-4 text-[17px] leading-relaxed">
            ECOTEC PERÚ es la entidad responsable de la administración y operación del sitio web{" "}
            <a
              href="https://www.residuosqueeducan.org.pe"
              className="font-semibold text-grass underline"
            >
              www.residuosqueeducan.org.pe
            </a>
            , desde el cual promovemos nuestros programas de educación, sostenibilidad e
            innovación social.
          </p>
          <p className="mb-6 text-[17px] leading-relaxed">
            A través de nuestras iniciativas, buscamos generar oportunidades educativas y
            fortalecer el desarrollo sostenible de las comunidades.
          </p>
          <Card tone="cream" className="text-[15px] leading-relaxed">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
              <dt className="font-bold text-grass">Razón social</dt>
              <dd>{legalIdentity.orgName}</dd>
              <dt className="font-bold text-grass">Naturaleza</dt>
              <dd>{legalIdentity.orgKind}</dd>
              <dt className="font-bold text-grass">RUC</dt>
              <dd>20498319352</dd>
              <dt className="font-bold text-grass">Donaciones</dt>
              <dd>
                {legalIdentity.donationEntity} — {legalIdentity.resolution}
              </dd>
              <dt className="font-bold text-grass">Dirección</dt>
              <dd>{contact.address}</dd>
              <dt className="font-bold text-grass">Correo</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="break-all text-grass underline">
                  {contact.email}
                </a>
              </dd>
            </dl>
          </Card>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 sm:grid-cols-2">
          <Card tone="cream">
            <h2 className="mb-3.5 text-2xl font-extrabold text-grass">Nuestra Misión</h2>
            <p className="text-[16.5px] leading-relaxed">
              Transformar residuos sólidos en oportunidades educativas mediante un modelo de
              economía circular que fortalezca la innovación tecnológica en las instituciones
              educativas públicas.
            </p>
          </Card>
          <Card tone="cream">
            <h2 className="mb-3.5 text-2xl font-extrabold text-grass">Nuestra Visión</h2>
            <p className="text-[16.5px] leading-relaxed">
              Ser el programa líder del Perú que convierta la gestión responsable de residuos en
              una herramienta permanente para mejorar la calidad de la educación pública.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Quién lo lidera
          </p>
          <Card className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
            <ImageWithCaption
              src="/images/adolfo-quisocala.jpg"
              alt="José Adolfo Quisocala, fundador de Residuos que Educan"
              aspect="4/5"
            />
            <div>
              <h2 className="mb-3.5 text-[1.6rem] font-extrabold text-grass">
                José Adolfo Quisocala
              </h2>
              <p className="mb-5 text-[16.5px] leading-relaxed">
                Emprendedor social arequipeño con más de 14 años de trayectoria en educación
                financiera, ciudadanía ambiental y economía circular. Fundador del proyecto.
              </p>
              <div className="flex flex-wrap gap-2">
                {founderPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-lime/25 px-3.5 py-2 text-[12.5px] font-bold text-grass"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Trayectoria" title="Trayectoria del equipo fundador" />
          <p className="mt-6 mb-5 max-w-2xl text-[17px] leading-relaxed">
            Antes de Residuos que Educan, nuestro equipo ya gestionó campañas y alianzas de
            recolección de residuos con empresas e instituciones como:
          </p>
          <div className="mb-6 flex flex-wrap gap-2.5">
            {trajectoryPartners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-grass/30 px-4 py-2 text-[13px] font-bold text-grass"
              >
                {partner}
              </span>
            ))}
          </div>
          <p className="mb-9 text-[17px] font-semibold text-sea">
            Esa experiencia es la base sobre la que construimos Residuos que Educan.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ImageWithCaption
              src="/images/utp.jpg"
              alt="Donación de residuos — Universidad UTP"
              caption="Donación de residuos — Universidad UTP"
            />
            <ImageWithCaption
              src="/images/camara-comercio.jpg"
              alt="Presentación del modelo en la Cámara de Comercio de Arequipa"
              caption="Presentación del modelo en la Cámara de Comercio de Arequipa"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Avance" title="El modelo ya está en marcha" />
          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-2xl border-l-[3px] border-lime bg-cream p-6"
              >
                <span
                  className={
                    phase.done
                      ? "mb-3 inline-block rounded-full bg-grass px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase"
                      : "mb-3 inline-block rounded-full border border-grass/40 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-grass uppercase"
                  }
                >
                  {phase.status}
                </span>
                <h3 className="mb-2 text-[17px] font-extrabold text-grass">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <Card tone="sea" className="p-11 text-center">
            <p className="text-lg leading-relaxed">
              Cada fin de año reconocemos públicamente, con video resumen y premio, a las empresas
              que generaron mayor impacto reciclando.
            </p>
          </Card>
        </div>
      </section>

      <GoalStats />
    </>
  );
}
