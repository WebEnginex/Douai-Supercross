"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import type { Rider } from "@/types";
import { cn } from "@/lib/cn";
import { useIsMounted } from "@/hooks/useIsMounted";

interface RiderCardProps {
  rider: Rider;
  index?: number;
  showBio?: boolean;
  className?: string;
}

export function RiderCard({
  rider,
  index = 0,
  showBio = false,
  className,
}: RiderCardProps) {
  const isMounted = useIsMounted();

  return (
    <motion.article
      initial={isMounted ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={cn(
        "group bg-surface border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5",
        className
      )}
    >
      <div className="relative aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <User
          size={64}
          className="text-zinc-600 group-hover:text-zinc-500 transition-colors"
          strokeWidth={1}
        />
        <span className="absolute bottom-3 left-3 text-xs text-zinc-500 uppercase tracking-widest">
          {rider.imagePlaceholder}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-white mb-1">
          {rider.name}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-2 py-1 bg-white/5 text-zinc-300 rounded-sm">
            {rider.country}
          </span>
          <span className="text-xs px-2 py-1 bg-brand-red/10 text-brand-red rounded-sm">
            {rider.manufacturer}
          </span>
        </div>
        <p className="text-zinc-400 text-sm">{rider.team}</p>
        {showBio && (
          <p className="text-zinc-500 text-sm mt-3 line-clamp-3 leading-relaxed">
            {rider.biography}
          </p>
        )}
      </div>
    </motion.article>
  );
}
