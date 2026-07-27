import { FaBriefcase, FaLeaf, FaSchool } from "react-icons/fa6";
import { Card } from "@/components/ui/Card";
import { DashList } from "@/components/ui/DashList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { TaxDeductionBlock } from "@/components/sections/TaxDeductionBlock";
import { benefitBlocks } from "@/data/benefits";
import { faq } from "@/data/faq";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const blockIcons = [FaSchool, FaBriefcase, FaLeaf];

export default function Beneficios() {
  useDocumentTitle(
    "Beneficios",
    "Beneficios de Residuos que Educan para instituciones educativas, empresas y el medio ambiente.",
  );

  return (
    <>
      <section className="bg-cream px-6 pt-10 pb-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Beneficios
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold tracking-tight text-grass">
            Un modelo donde todos ganan
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 lg:grid-cols-3">
          {benefitBlocks.map((block, index) => {
            const Icon = blockIcons[index];
            return (
              <Card key={block.title} tone="cream">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-lime/25 text-grass">
                  <Icon aria-hidden="true" className="h-5.5 w-5.5" />
                </span>
                <h2 className="mb-4 text-xl font-extrabold text-grass">{block.title}</h2>
                <DashList items={[...block.items]} />
              </Card>
            );
          })}
        </div>
      </section>

      <TaxDeductionBlock />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader kicker="Preguntas frecuentes" title="¿Tienes dudas? Aquí las resolvemos" />
          <Accordion items={[...faq]} className="mt-9" />
        </div>
      </section>
    </>
  );
}
