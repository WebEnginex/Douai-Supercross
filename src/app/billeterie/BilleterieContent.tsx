import { TicketCard } from "@/components/tickets/TicketCard";
import { tickets, ticketsPageLabels } from "@/data/tickets";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Info } from "lucide-react";

export function BilleterieContent() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-background min-h-[100dvh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ticketsPageLabels.title}
          subtitle={ticketsPageLabels.subtitle}
          description={ticketsPageLabels.description}
        />

        <div className="max-w-2xl mx-auto mb-12 flex gap-3 text-zinc-400 text-sm leading-relaxed">
          <Info
            size={18}
            className="text-zinc-500 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p>{ticketsPageLabels.disclaimer}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch max-w-5xl mx-auto md:pt-3">
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
