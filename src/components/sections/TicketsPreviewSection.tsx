import { TicketCard } from "@/components/tickets/TicketCard";
import { tickets, ticketsPreviewLabels } from "@/data/tickets";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EventButton } from "@/components/ui/EventButton";

export function TicketsPreviewSection() {
  return (
    <section id="billeterie" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ticketsPreviewLabels.title}
          subtitle={ticketsPreviewLabels.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

        <div className="text-center mt-12">
          <EventButton href="/billeterie" variant="outline" size="lg">
            {ticketsPreviewLabels.viewAll}
          </EventButton>
        </div>
      </div>
    </section>
  );
}
