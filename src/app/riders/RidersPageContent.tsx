"use client";

import { useMemo, useState } from "react";
import { getRidersByCategory, riderCategories, ridersPageLabels } from "@/data/riders";
import type { RiderCategory } from "@/types";
import { RiderCard } from "@/components/riders/RiderCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";

export function RidersPageContent() {
  const [activeCategory, setActiveCategory] = useState<RiderCategory>("prestige");

  const visibleRiders = useMemo(
    () => getRidersByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-background min-h-[100dvh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ridersPageLabels.title}
          subtitle={ridersPageLabels.subtitle}
        />

        <div
          className="flex justify-center mb-12"
          role="tablist"
          aria-label="Catégories de pilotes"
        >
          <div className="inline-flex p-1 rounded-lg bg-surface border border-white/10">
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
                    "min-w-[7.5rem] px-5 py-2.5 text-sm font-semibold uppercase tracking-widest rounded-md transition-all",
                    isActive
                      ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {category.label}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {visibleRiders.map((rider, index) => (
              <RiderCard key={rider.id} rider={rider} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
