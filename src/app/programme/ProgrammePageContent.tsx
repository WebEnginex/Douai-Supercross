"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import {
  programmePageLabels,
  scheduleCategories,
  scheduleItems,
} from "@/data/programme";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScheduleTimeline } from "@/components/programme/ScheduleTimeline";
import { useIsMounted } from "@/hooks/useIsMounted";
import { cn } from "@/lib/cn";

export function ProgrammePageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const isMounted = useIsMounted();

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return scheduleItems;
    return scheduleItems.filter(
      (item) => item.category === activeCategory || item.category === "all"
    );
  }, [activeCategory]);

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={programmePageLabels.title}
          subtitle={programmePageLabels.subtitle}
        />

        <motion.div
          initial={isMounted ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-10 p-4 md:p-5 bg-brand-red/5 border border-brand-red/20 rounded-lg flex gap-3"
        >
          <Info size={20} className="text-brand-red shrink-0 mt-0.5" />
          <p className="text-zinc-400 text-sm leading-relaxed">
            {programmePageLabels.disclaimer}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {scheduleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium uppercase tracking-widest rounded-sm transition-all",
                activeCategory === category.id
                  ? "bg-brand-red text-white"
                  : "bg-surface border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="text-center text-zinc-500 py-16">
            {programmePageLabels.emptyState}
          </p>
        ) : (
          <ScheduleTimeline items={filteredItems} />
        )}
      </div>
    </div>
  );
}
