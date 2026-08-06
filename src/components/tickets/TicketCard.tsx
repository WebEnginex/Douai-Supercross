import type { Ticket } from "@/types";
import { ticketsPageLabels } from "@/data/tickets";
import { cn } from "@/lib/cn";
import { ExternalLink, Users, Baby } from "lucide-react";

const tierStyles: Record<
  Ticket["tier"],
  { accent: string; glow: string; label: string }
> = {
  category1: {
    accent: "from-zinc-300 to-zinc-500",
    glow: "group-hover:shadow-zinc-400/10",
    label: "text-zinc-300",
  },
  category2: {
    accent: "from-zinc-500 to-zinc-600",
    glow: "group-hover:shadow-zinc-500/10",
    label: "text-zinc-400",
  },
  category3: {
    accent: "from-brand-red to-red-700",
    glow: "group-hover:shadow-brand-red/20",
    label: "text-brand-red",
  },
};

function formatPrice(amount: number): string {
  return `${amount}\u00a0€`;
}

interface TicketCardProps {
  ticket: Ticket;
  className?: string;
}

export function TicketCard({ ticket, className }: TicketCardProps) {
  const styles = tierStyles[ticket.tier];
  const { priceLabels, priceNotes, cta } = ticketsPageLabels;
  const isFeatured = Boolean(ticket.featured);

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full",
        isFeatured && "md:-mt-1 md:mb-1",
        className
      )}
    >
      <a
        href={ticket.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex flex-col h-full bg-surface border rounded-lg overflow-hidden transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-xl",
          styles.glow,
          isFeatured
            ? "border-brand-red/45 shadow-lg shadow-brand-red/10 hover:border-brand-red/60"
            : "border-white/5 hover:border-white/20"
        )}
        aria-label={`${cta} — ${ticket.name}`}
      >
        <div className={cn("h-1.5 w-full bg-gradient-to-r", styles.accent)} />

        <div className="flex flex-col flex-1 p-6 md:p-7">
          {ticket.badge && (
            <span className="self-start mb-4 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 bg-brand-red/10 text-brand-red rounded-sm">
              {ticket.badge}
            </span>
          )}

          <p className={cn("text-xs uppercase tracking-widest mb-2", styles.label)}>
            Arena
          </p>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            {ticket.name}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {ticket.description}
          </p>

          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center justify-between gap-3 border-b border-white/5 pb-3">
              <span className="text-sm text-zinc-300">{priceLabels.normal}</span>
              <span
                className={cn(
                  "font-display text-xl font-bold",
                  isFeatured ? "text-brand-red" : "text-white"
                )}
              >
                {formatPrice(ticket.prices.normal)}
              </span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
              <span className="text-sm text-zinc-300">
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} className="text-zinc-500" aria-hidden="true" />
                  {priceLabels.group}
                </span>
                <span className="block text-xs text-zinc-500 mt-0.5">
                  {priceNotes.group}
                </span>
              </span>
              <span className="font-display text-xl font-bold text-white shrink-0">
                {formatPrice(ticket.prices.group)}
              </span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="text-sm text-zinc-300">
                <span className="inline-flex items-center gap-1.5">
                  <Baby size={14} className="text-zinc-500" aria-hidden="true" />
                  {priceLabels.child}
                </span>
                <span className="block text-xs text-zinc-500 mt-0.5">
                  {priceNotes.child}
                </span>
              </span>
              <span className="font-display text-xl font-bold text-white shrink-0">
                {formatPrice(ticket.prices.child)}
              </span>
            </li>
          </ul>

          <span
            className={cn(
              "inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 font-semibold text-sm uppercase tracking-widest rounded-sm transition-colors",
              isFeatured
                ? "bg-brand-red text-white group-hover:bg-brand-red-dark"
                : "bg-transparent text-white border border-white/25 group-hover:border-white/50 group-hover:bg-white/5"
            )}
          >
            {cta}
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
