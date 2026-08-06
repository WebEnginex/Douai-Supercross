import { TicketCard } from "@/components/tickets/TicketCard";
import { tickets, ticketsPageLabels } from "@/data/tickets";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Info } from "lucide-react";

export function BilleterieContent() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ticketsPageLabels.title}
          subtitle={ticketsPageLabels.subtitle}
        />

        <p className="text-center text-zinc-400 max-w-2xl mx-auto -mt-8 mb-10 leading-relaxed">
          {ticketsPageLabels.description}
        </p>

        <div className="max-w-3xl mx-auto mb-12 p-4 md:p-5 bg-brand-red/5 border border-brand-red/20 rounded-lg flex gap-3">
          <Info
            size={20}
            className="text-brand-red shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-zinc-400 text-sm leading-relaxed">
            {ticketsPageLabels.disclaimer}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12 max-w-xl mx-auto">
          {ticketsPageLabels.externalNote}
        </p>
      </div>
    </div>
  );
}
