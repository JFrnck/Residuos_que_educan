import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DashListProps = {
  items: ReactNode[];
  className?: string;
};

export function DashList({ items, className }: DashListProps) {
  return (
    <ul className={cn("flex flex-col gap-3.5", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 h-[3px] w-4 shrink-0 rounded-full bg-lime" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
