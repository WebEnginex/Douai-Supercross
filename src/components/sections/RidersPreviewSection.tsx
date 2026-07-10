"use client";

import { motion } from "framer-motion";
import { riders, riderPreviewCount } from "@/data/riders";
import { eventConfig } from "@/data/event";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RiderCard } from "@/components/riders/RiderCard";
import { EventButton } from "@/components/ui/EventButton";
import { useIsMounted } from "@/hooks/useIsMounted";

export function RidersPreviewSection() {
  const previewRiders = riders.slice(0, riderPreviewCount);
  const { ridersPreview } = eventConfig.sections;
  const isMounted = useIsMounted();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={ridersPreview.title} subtitle={ridersPreview.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewRiders.map((rider, index) => (
            <RiderCard key={rider.id} rider={rider} index={index} />
          ))}
        </div>

        <motion.div
          initial={isMounted ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <EventButton href="/pilotes" variant="outline" size="lg">
            {ridersPreview.viewAll}
          </EventButton>
        </motion.div>
      </div>
    </section>
  );
}
