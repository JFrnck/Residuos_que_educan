import { cn } from "@/lib/cn";

export type Step = {
  number: number | string;
  title: string;
  description: string;
};

type StepListProps = {
  steps: Step[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
};

const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
} as const;

export function StepList({ steps, columns = 5, className }: StepListProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5", COLS[columns], className)}>
      {steps.map((step) => (
        <div key={step.number} className="rounded-2xl border-l-[3px] border-lime bg-white p-6">
          <div className="text-4xl leading-none font-extrabold text-lime">{step.number}</div>
          <h3 className="mt-2 mb-2 text-base font-extrabold text-grass">{step.title}</h3>
          <p className="text-sm leading-relaxed text-ink/70">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
