import type { Ticket } from "@/types";
import { ticketsPageLabels } from "@/data/tickets";
import { cn } from "@/lib/cn";
import { ExternalLink, Users, Baby } from "lucide-react";

const tierStyles: Record<
  Ticket["tier"],
  { accent: string; glow: string; label: string }
> = {
  category1: {
    accent: "from-brand-red to-red-700",
    glow: "group-hover:shadow-brand-red/20",
    label: "text-brand-red",
  },
  category2: {
    accent: "from-sky-500 to-cyan-600",
    glow: "group-hover:shadow-sky-500/15",
    label: "text-sky-400",
  },
  category3: {
    accent: "from-zinc-400 to-zinc-600",
    glow: "group-hover:shadow-zinc-500/10",
    label: "text-zinc-400",
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

  return (
    <article className={cn("group relative flex flex-col h-full", className)}>
      <a
        href={ticket.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex flex-col h-full bg-surface border rounded-lg overflow-hidden transition-all duration-300",
          "hover:border-white/20 hover:-translate-y-1 hover:shadow-xl",
          styles.glow,
          ticket.featured
            ? "border-brand-red/40 shadow-lg shadow-brand-red/5"
            : "border-white/5"
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
              <span className="font-display text-xl font-bold text-white">
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

          <span className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-brand-red text-white font-semibold text-sm uppercase tracking-widest rounded-sm transition-colors group-hover:bg-brand-red-dark">
            {cta}
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
