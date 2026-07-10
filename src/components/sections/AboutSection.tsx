"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  List,
  Car,
  Star,
  Utensils,
  ShoppingBag,
} from "lucide-react";
import { eventConfig, eventInfoCards } from "@/data/event";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { useIsMounted } from "@/hooks/useIsMounted";

const iconMap = {
  calendar: Calendar,
  "map-pin": MapPin,
  clock: Clock,
  list: List,
  car: Car,
  star: Star,
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
};

export function AboutSection() {
  const { about } = eventConfig;
  const isMounted = useIsMounted();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={about.title} subtitle={about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={isMounted ? { opacity: 0, x: -30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={isMounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SurfaceCard className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-brand-red mb-1">
                    {stat.value}
                  </p>
                  <p className="text-zinc-400 text-sm uppercase tracking-widest">
                    {stat.label}
                  </p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventInfoSection() {
  const isMounted = useIsMounted();

  return (
    <section id="tickets" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={eventConfig.sections.eventInfo.title}
          subtitle={eventConfig.sections.eventInfo.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {eventInfoCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.id}
                initial={isMounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <SurfaceCard className="h-full">
                  <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                  <p className="text-white text-lg font-display mb-2">
                    {card.value}
                  </p>
                  <p className="text-zinc-500 text-sm">{card.description}</p>
                </SurfaceCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
