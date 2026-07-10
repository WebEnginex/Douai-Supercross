"use client";

import { motion } from "framer-motion";
import { riders, riderPreviewCount } from "@/data/riders";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RiderCard } from "@/components/riders/RiderCard";
import { EventButton } from "@/components/ui/EventButton";

export function RidersPreviewSection() {
  const previewRiders = riders.slice(0, riderPreviewCount);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Elite Riders" subtitle="The Lineup" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewRiders.map((rider, index) => (
            <RiderCard key={rider.id} rider={rider} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <EventButton href="/riders" variant="outline" size="lg">
            View All Riders
          </EventButton>
        </motion.div>
      </div>
    </section>
  );
}
