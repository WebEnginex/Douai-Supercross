import { BarChart3 } from "lucide-react";
import { cn } from "@/lib/cn";

const accentStyles = {
  red: {
    card: "border-brand-red/25 hover:border-brand-red/40",
    icon: "border-brand-red/30 bg-brand-red/10 text-brand-red",
    value: "text-white",
    glow: "from-brand-red/15",
  },
  sky: {
    card: "border-sky-500/25 hover:border-sky-500/40",
    icon: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    value: "text-white",
    glow: "from-sky-500/15",
  },
  amber: {
    card: "border-amber-500/25 hover:border-amber-500/40",
    icon: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    value: "text-white",
    glow: "from-amber-500/15",
  },
  violet: {
    card: "border-violet-500/25 hover:border-violet-500/40",
    icon: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    value: "text-white",
    glow: "from-violet-500/15",
  },
  emerald: {
    card: "border-emerald-500/25 hover:border-emerald-500/40",
    icon: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    value: "text-white",
    glow: "from-emerald-500/15",
  },
} as const;

export type AdminAccent = keyof typeof accentStyles;

export function AdminPageHeader({
  title,
  description,
  meta,
}: {
  title: string;
  description?: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <div className="mt-2 h-1 w-12 rounded-full bg-brand-red" />
        {description ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            {description}
          </p>
        ) : null}
      </div>
      {meta ? <div className="shrink-0 self-start sm:self-auto">{meta}</div> : null}
    </div>
  );
}

export function AdminStatCard({
  label,
  value,
  hint,
  icon,
  accent = "red",
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon?: React.ReactNode;
  accent?: AdminAccent;
}) {
  const styles = accentStyles[accent];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-zinc-950 p-4 sm:p-5 transition-colors",
        styles.card
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br to-transparent opacity-80",
          styles.glow
        )}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </p>
        {icon ? (
          <span
            className={cn(
              "rounded-md border p-2",
              styles.icon
            )}
          >
            {icon}
          </span>
        ) : null}
      </div>
      <p
        className={cn(
          "relative mt-3 font-display text-3xl tabular-nums tracking-tight sm:text-4xl",
          styles.value
        )}
      >
        {value}
      </p>
      {hint ? (
        <p className="relative mt-2 text-xs text-zinc-500">{hint}</p>
      ) : null}
    </div>
  );
}

export function AdminEmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-zinc-950/60 px-5 py-10 text-center sm:px-6 sm:py-12">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/25 bg-brand-red/10 text-brand-red">
        {icon ?? <BarChart3 size={22} />}
      </div>
      <p className="text-base font-medium text-white">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
        {description}
      </p>
    </div>
  );
}

export function AdminMetaBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
}
