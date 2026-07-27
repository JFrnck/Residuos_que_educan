import type { ReactNode } from "react";

type StatBannerProps = {
  number: string;
  children: ReactNode;
};

export function StatBanner({ number, children }: StatBannerProps) {
  return (
    <section className="bg-sea px-6 py-16 text-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-9 sm:grid-cols-3">
        <div className="text-[clamp(5.2rem,11vw,9.4rem)] leading-[0.9] font-extrabold tracking-tight text-lime">
          {number}
        </div>
        <p className="text-lg leading-relaxed sm:col-span-2">{children}</p>
      </div>
    </section>
  );
}
