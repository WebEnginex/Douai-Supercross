"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/data/event";
import { EventButton } from "@/components/ui/EventButton";
import { useIsMounted } from "@/hooks/useIsMounted";

export function CTASection() {
  const { cta } = eventConfig;
  const isMounted = useIsMounted();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-black to-brand-red/10" />
      <div className="absolute inset-0 bg-[url('/images/hero-poster.svg')] bg-cover bg-center opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={isMounted ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {cta.title}
          </h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EventButton href={cta.primaryButton.href} size="lg">
              {cta.primaryButton.label}
            </EventButton>
            <EventButton href={cta.secondaryButton.href} variant="outline" size="lg">
              {cta.secondaryButton.label}
            </EventButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
