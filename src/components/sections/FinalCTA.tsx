import type { ReactNode } from "react";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/site";

type FinalCTAProps = {
  title: string;
  text: string;
  children?: ReactNode;
};

export function FinalCTA({ title, text, children }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-sea px-6 py-24 text-cream">
      <PatternBackground opacity={0.14} />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="mb-8 text-lg leading-relaxed">{text}</p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button to="/contacto" variant="onDark" size="lg">
            Agendar una reunión
          </Button>
          <Button href={contact.whatsappUrl} target="_blank" rel="noopener" variant="onDarkOutline" size="lg">
            Escribir por WhatsApp
          </Button>
        </div>
        {children}
      </div>
    </section>
  );
}
