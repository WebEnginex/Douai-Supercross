import type { Ticket } from "@/types";
import { ticketsPageLabels } from "@/data/tickets";
import { cn } from "@/lib/cn";
import { ExternalLink, Check } from "lucide-react";

const tierStyles: Record<
  Ticket["tier"],
  { accent: string; glow: string; label: string }
> = {
  standard: {
    accent: "from-zinc-500 to-zinc-600",
    glow: "group-hover:shadow-zinc-500/10",
    label: "text-zinc-400",
  },
  premium: {
    accent: "from-sky-500 to-cyan-600",
    glow: "group-hover:shadow-sky-500/15",
    label: "text-sky-400",
  },
  vip: {
    accent: "from-brand-red to-red-700",
    glow: "group-hover:shadow-brand-red/20",
    label: "text-brand-red",
  },
  paddock: {
    accent: "from-amber-500 to-orange-600",
    glow: "group-hover:shadow-amber-500/15",
    label: "text-amber-400",
  },
};

interface TicketCardProps {
  ticket: Ticket;
  className?: string;
}

export function TicketCard({ ticket, className }: TicketCardProps) {
  const styles = tierStyles[ticket.tier];

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full",
        className
      )}
    >
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
        aria-label={`${ticketsPageLabels.cta} — ${ticket.name}`}
      >
        <div className={cn("h-1.5 w-full bg-gradient-to-r", styles.accent)} />

        <div className="flex flex-col flex-1 p-6 md:p-7">
          {ticket.badge && (
            <span className="self-start mb-4 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 bg-brand-red/10 text-brand-red rounded-sm">
              {ticket.badge}
            </span>
          )}

          <p className={cn("text-xs uppercase tracking-widest mb-2", styles.label)}>
            {ticket.tier === "standard" && "Entrée"}
            {ticket.tier === "premium" && "Premium"}
            {ticket.tier === "vip" && "VIP"}
            {ticket.tier === "paddock" && "Exclusif"}
          </p>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            {ticket.name}
          </h3>

          <p className="font-display text-xl text-white mb-4">{ticket.price}</p>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {ticket.description}
          </p>

          <ul className="space-y-2.5 mb-8 flex-1">
            {ticket.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-zinc-300"
              >
                <Check
                  size={16}
                  className="text-brand-red shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-brand-red text-white font-semibold text-sm uppercase tracking-widest rounded-sm transition-colors group-hover:bg-brand-red-dark">
            {ticketsPageLabels.cta}
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
