import { Info } from "lucide-react";
import { programmePageLabels, scheduleItems } from "@/data/programme";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EventButton } from "@/components/ui/EventButton";
import { ScheduleTimeline } from "@/components/programme/ScheduleTimeline";

export function ProgrammePageContent() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={programmePageLabels.title}
          subtitle={programmePageLabels.subtitle}
        />

        <div className="max-w-3xl mx-auto mb-12 p-4 md:p-5 bg-brand-red/5 border border-brand-red/20 rounded-lg flex gap-3">
          <Info
            size={20}
            className="text-brand-red shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-zinc-400 text-sm leading-relaxed">
            {programmePageLabels.disclaimer}
          </p>
        </div>

        <ScheduleTimeline items={scheduleItems} />

        <div className="text-center mt-16">
          <EventButton href="/billeterie" size="lg">
            {programmePageLabels.billetterieCta}
          </EventButton>
        </div>
      </div>
    </div>
  );
}
