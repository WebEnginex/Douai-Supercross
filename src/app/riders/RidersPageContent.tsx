"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRidersByCategory, riderCategories, ridersPageLabels } from "@/data/riders";
import type { RiderCategory } from "@/types";
import { RiderCard } from "@/components/riders/RiderCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";
import { useIsMounted } from "@/hooks/useIsMounted";

export function RidersPageContent() {
  const [activeCategory, setActiveCategory] = useState<RiderCategory>("prestige");
  const isMounted = useIsMounted();

  const visibleRiders = useMemo(
    () => getRidersByCategory(activeCategory),
    [activeCategory]
  );

  const featuredRiders = visibleRiders.slice(0, 3);
  const gridRiders = visibleRiders.slice(3);

  return (
    <div className="relative pt-24 md:pt-28 pb-20 bg-background min-h-[100dvh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_at_top,rgba(227,6,19,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ridersPageLabels.title}
          subtitle={ridersPageLabels.subtitle}
        />

        <div
          className="flex justify-center mb-10 md:mb-14"
          role="tablist"
          aria-label="Catégories de pilotes"
        >
          <div className="inline-flex p-1 border border-white/10 bg-black/40 backdrop-blur-sm">
            {riderCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "relative min-w-[8rem] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors",
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="rider-category-pill"
                      className="absolute inset-0 bg-brand-red"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {visibleRiders.length === 0 ? (
          <p className="text-center text-zinc-400 py-16">
            {ridersPageLabels.emptyState}
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={isMounted ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-1.5 sm:space-y-2 md:space-y-2.5"
            >
              {/* Starting-three — large portraits */}
              <div className="group/grid grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5">
                {featuredRiders.map((rider, index) => (
                  <RiderCard
                    key={rider.id}
                    rider={rider}
                    index={index}
                    featured
                    priority
                  />
                ))}
              </div>

              {/* Rest of the field — dense pack */}
              {gridRiders.length > 0 && (
                <div className="group/grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-2 md:gap-2.5">
                  {gridRiders.map((rider, index) => (
                    <RiderCard
                      key={rider.id}
                      rider={rider}
                      index={index + featuredRiders.length}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
