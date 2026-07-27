import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const formInputClasses =
  "w-full rounded-xl border border-grass/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-grass focus:outline-none focus:ring-2 focus:ring-lime/40 aria-invalid:border-red-600";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormField({ id, label, error, hint, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-bold text-grass">
        {label}
        {required && (
          <span className="text-sea" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-ink/60">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
