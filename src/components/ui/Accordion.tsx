import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItemData[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-grass/15 border-t border-b border-grass/15", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-grass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grass sm:text-lg"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-2xl leading-none font-light text-lime transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-9">
                <p className="text-sm leading-relaxed text-ink/75">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
