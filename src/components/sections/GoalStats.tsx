import { StatCounter } from "@/components/ui/StatCounter";
import { goalStats, goalStatsHeading } from "@/data/stats";

export function GoalStats() {
  return (
    <section className="bg-sea px-6 py-20 text-cream">
      <div className="mx-auto max-w-[1180px]">
        <p className="mb-8 text-xs font-bold tracking-[0.15em] text-lime uppercase">
          {goalStatsHeading}
        </p>
        <div className="grid grid-cols-2 gap-9 sm:grid-cols-4">
          {goalStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={"suffix" in stat ? stat.suffix : undefined}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
