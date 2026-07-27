import { PatternBackground } from "@/components/brand/PatternBackground";
import { Button } from "@/components/ui/Button";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Página no encontrada", "La página que buscas no existe o fue movida.");

  return (
    <section className="relative overflow-hidden bg-cream px-6 py-28 text-center">
      <PatternBackground opacity={0.12} />
      <div className="relative mx-auto max-w-xl">
        <p className="mb-3 text-sm font-bold tracking-[0.15em] text-grass uppercase">Error 404</p>
        <h1 className="mb-5 text-[clamp(2.4rem,6vw,4rem)] font-extrabold tracking-tight text-grass">
          Esta página no existe
        </h1>
        <p className="mb-9 text-lg leading-relaxed text-ink/75">
          Puede que el enlace esté roto o que la página haya sido movida. Vuelve al inicio o
          explora el modelo de Residuos que Educan.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button to="/">Volver al inicio</Button>
          <Button to="/como-funciona" variant="secondary">
            Ver cómo funciona
          </Button>
        </div>
      </div>
    </section>
  );
}
