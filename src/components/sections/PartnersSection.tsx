"use client";

import { eventConfig } from "@/data/event";
import { partners } from "@/data/partners";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PartnerLogo } from "@/components/partners/PartnerLogo";

export function PartnersSection() {
  const { partners: partnersSection } = eventConfig.sections;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={partnersSection.title} subtitle={partnersSection.subtitle} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <PartnerLogo key={partner.id} name={partner.name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
