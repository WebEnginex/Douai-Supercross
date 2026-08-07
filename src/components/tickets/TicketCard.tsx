import type { Ticket } from "@/types";
import { ticketsPageLabels } from "@/data/tickets";
import { cn } from "@/lib/cn";
import { ExternalLink, Users, Baby } from "lucide-react";

function formatPrice(amount: number): string {
  return `${amount}\u00a0€`;
}

interface TicketCardProps {
  ticket: Ticket;
  className?: string;
}

export function TicketCard({ ticket, className }: TicketCardProps) {
  const { priceLabels, priceNotes, cta } = ticketsPageLabels;
  const isFeatured = Boolean(ticket.featured);

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full",
        isFeatured && "md:z-10 md:scale-[1.03]",
        className
      )}
    >
      <a
        href={ticket.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300",
          "hover:-translate-y-1",
          isFeatured
            ? "bg-surface border border-brand-red/50 shadow-[0_0_0_1px_rgba(227,6,19,0.15),0_20px_40px_-20px_rgba(227,6,19,0.35)] hover:border-brand-red/70"
            : "bg-surface/80 border border-white/8 hover:border-white/20 hover:bg-surface"
        )}
        aria-label={`${cta} ${ticket.name}`}
      >
        <div
          className={cn(
            "h-1 w-full",
            isFeatured ? "bg-brand-red" : "bg-white/10"
          )}
        />

        <div className="flex flex-col flex-1 p-6 md:p-7">
          <div className="min-h-[1.75rem] mb-4">
            {ticket.badge ? (
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-brand-red text-white rounded-sm">
                {ticket.badge}
              </span>
            ) : null}
          </div>

          <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-white tracking-tight mb-2">
            {ticket.name}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {ticket.description}
          </p>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
              {priceLabels.normal}
            </p>
            <p
              className={cn(
                "font-display text-4xl font-bold tabular-nums leading-none",
                isFeatured ? "text-brand-red" : "text-white"
              )}
            >
              {formatPrice(ticket.prices.normal)}
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-5">
            <li className="flex items-start justify-between gap-3">
              <span className="text-sm text-zinc-400">
                <span className="inline-flex items-center gap-1.5 text-zinc-300">
                  <Users size={14} className="text-zinc-500" aria-hidden="true" />
                  {priceLabels.group}
                </span>
                <span className="block text-xs text-zinc-500 mt-0.5 pl-5">
                  {priceNotes.group}
                </span>
              </span>
              <span className="font-display text-lg font-semibold text-white shrink-0 tabular-nums">
                {formatPrice(ticket.prices.group)}
              </span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="text-sm text-zinc-400">
                <span className="inline-flex items-center gap-1.5 text-zinc-300">
                  <Baby size={14} className="text-zinc-500" aria-hidden="true" />
                  {priceLabels.child}
                </span>
                <span className="block text-xs text-zinc-500 mt-0.5 pl-5">
                  {priceNotes.child}
                </span>
              </span>
              <span className="font-display text-lg font-semibold text-white shrink-0 tabular-nums">
                {formatPrice(ticket.prices.child)}
              </span>
            </li>
          </ul>

          <span
            className={cn(
              "inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 font-semibold text-sm uppercase tracking-widest rounded-sm transition-colors",
              isFeatured
                ? "bg-brand-red text-white group-hover:bg-brand-red-dark"
                : "bg-transparent text-white border border-white/20 group-hover:border-white/40 group-hover:bg-white/5"
            )}
          >
            {cta}
            <ExternalLink size={15} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
