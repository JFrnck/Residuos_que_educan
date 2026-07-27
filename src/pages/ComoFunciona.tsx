import { FaBookOpen, FaChalkboard, FaCube, FaPersonChalkboard, FaRobot } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepList } from "@/components/ui/StepList";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import {
  businessProcessSteps,
  cycleSteps,
  innovationClassroomEquipment,
  internationalEvidence,
  schoolParticipationSteps,
  wasteCategories,
} from "@/data/steps";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const equipmentIcons = [FaChalkboard, FaRobot, FaCube, FaBookOpen, FaPersonChalkboard];

export default function ComoFunciona() {
  useDocumentTitle(
    "Cómo Funciona",
    "Conoce el modelo de economía circular de Residuos que Educan: de residuo valorizado a Aula de Innovación.",
  );

  return (
    <>
      <section className="bg-cream px-6 pt-16 pb-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Cómo funciona
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold tracking-tight text-grass">
            Un modelo de economía circular que beneficia a todos
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="El ciclo en 5 etapas" title="De la donación a miles de estudiantes" />
          <StepList steps={cycleSteps} className="mt-9" />
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Bajo el modelo STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas)
          </p>
          <h2 className="mb-9 text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold tracking-tight text-grass">
            El Aula de Innovación completa
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <ul className="mb-8 flex flex-col gap-4">
                {innovationClassroomEquipment.map((item, index) => {
                  const Icon = equipmentIcons[index % equipmentIcons.length];
                  return (
                    <li key={item} className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/25 text-grass">
                        <Icon aria-hidden="true" className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-[15.5px] leading-relaxed font-medium">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="rounded-2xl border-l-[3px] border-lime bg-white p-6">
                <p className="text-[15.5px] leading-relaxed">
                  <strong className="text-grass">No entregamos equipos y desaparecemos.</strong>{" "}
                  Capacitamos a cada docente en el uso pedagógico de la tecnología, con
                  acompañamiento y seguimiento de resultados continuo — para prevenir el
                  tecnoestrés y asegurar que el aula se use de verdad, no que quede guardada.
                </p>
              </div>
            </div>
            <ImageWithCaption
              src="/images/capacitacion.jpg"
              alt="Capacitación a docentes"
              caption="Capacitación a docentes"
              aspect="4/3"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Residuos que recibimos" title="Materiales valorizables" />
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {wasteCategories.map((category) => (
              <Card key={category.title} tone="cream">
                <h3 className="mb-2.5 text-lg font-extrabold text-grass">{category.title}</h3>
                <p className="text-[15px] leading-relaxed">{category.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            También se reciben vidrio, RAEE y otros residuos valorizables.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            kicker="Para empresas"
            title="Así trabajamos con tu empresa — de residuo a impacto en 5 pasos"
          />
          <StepList steps={businessProcessSteps} className="mt-9" />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            kicker="Evidencia"
            title="La evidencia internacional respalda el modelo"
          />
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {internationalEvidence.map((item) => (
              <Card key={item.place}>
                <h3 className="mb-2.5 text-lg font-extrabold text-grass">{item.place}</h3>
                <p className="text-[15px] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-9 text-lg font-semibold text-sea">
            La misma lógica aplica en Perú — por eso diseñamos tres niveles de alianza, para que
            cada empresa participe según su capacidad de inversión.
          </p>
          <Button to="/aliados" size="lg" className="mt-6">
            Ver niveles de alianza
          </Button>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Para colegios" title="Cómo puede ser parte un colegio" />
          <StepList steps={schoolParticipationSteps} columns={5} className="mt-9" />
          <Button to="/recibir-donacion" size="lg" className="mt-9">
            Registrar mi institución
          </Button>
        </div>
      </section>
    </>
  );
}
