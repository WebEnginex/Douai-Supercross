"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Countdown } from "@/components/countdown/Countdown";

export function CountdownSection() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Countdown to Race Day"
          subtitle="Event Date"
        />
        <p className="text-center text-zinc-500 mb-10 text-sm">
          Target date configured in{" "}
          <code className="text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
            data/event.ts
          </code>
        </p>
        <Countdown />
      </div>
    </section>
  );
}
