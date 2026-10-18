import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EcotecBanner } from "@/components/sections/EcotecBanner";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { otherActions, projects, projectsIntro, type Project } from "@/data/projects";
import { closingLine } from "@/data/site";
import { cn } from "@/lib/cn";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

function ProjectGallery({ project }: { project: Project }) {
  const [lead, ...rest] = project.photos;
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[460px] lg:grid-cols-4 lg:grid-rows-2">
      <img
        src={lead.src}
        alt={lead.alt}
        loading="lazy"
        className="col-span-2 aspect-[4/3] w-full rounded-2xl object-cover lg:row-span-2 lg:aspect-auto lg:h-full"
      />
      {rest.map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-auto lg:h-full"
        />
      ))}
    </div>
  );
}

function ProjectSection({ project, index }: { project: Project; index: number }) {
  return (
    <section
      id={project.slug}
      className={cn("scroll-mt-24 px-6 py-20", index % 2 === 0 ? "bg-white" : "bg-cream")}
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Proyecto {index + 1}
          </p>
          <h2 className="mb-2 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] font-extrabold tracking-tight text-grass">
            {project.title}
          </h2>
          <p className="mb-8 text-xl font-bold text-sea italic">{project.tagline}</p>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-[17px] leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 text-[15px] leading-relaxed text-ink/80">
              <strong className="text-grass">Aliados:</strong> {project.allies}
              <br />
              <strong className="text-grass">Lugar y año:</strong> {project.placeAndYear}
            </p>
          </div>

          <Card tone={index % 2 === 0 ? "cream" : "white"} className="self-start">
            <h3 className="mb-4 text-lg font-extrabold text-grass">Nuestro impacto</h3>
            <ul className="flex flex-col gap-3">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] leading-snug font-semibold">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-lime"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <ProjectGallery project={project} />
      </div>
    </section>
  );
}

export default function ProyectosImpacto() {
  useDocumentTitle(
    "Proyectos e impacto",
    "Mentes que Florecen, Heroínas Ambientales y Ojos por el Planeta: iniciativas de ECOTEC PERÚ que convierten el compromiso ambiental en oportunidades de bienestar.",
  );

  return (
    <>
      <section className="bg-cream px-6 pt-10 pb-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Proyectos e impacto
          </p>
          <h1 className="mb-6 text-[clamp(2.25rem,5vw,3.6rem)] leading-[1.05] font-extrabold tracking-tight text-grass">
            {projectsIntro.tagline}
          </h1>
          <p className="text-[17.5px] leading-relaxed">{projectsIntro.text}</p>
          <nav aria-label="Proyectos" className="mt-7 flex flex-wrap gap-2.5">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                className="rounded-full border border-grass/30 px-4 py-2 text-[13px] font-bold text-grass hover:bg-lime/20"
              >
                {project.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectSection key={project.slug} project={project} index={index} />
      ))}

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Más acciones" title="Otras acciones desarrolladas" />
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherActions.map((action) => (
              <Card key={action.title}>
                <h3 className="mb-3 text-lg font-extrabold text-grass">{action.title}</h3>
                <p className="text-[15.5px] leading-relaxed">{action.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EcotecBanner tone="white" />

      <FinalCTA
        title={closingLine}
        text="Súmate como aliado — agenda una reunión de 15 minutos y te mostramos cómo tu empresa (o tu organización) puede ser parte del cambio."
      />
    </>
  );
}
