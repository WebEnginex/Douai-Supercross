"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Rider } from "@/types";
import { cn } from "@/lib/cn";
import { useIsMounted } from "@/hooks/useIsMounted";

interface RiderCardProps {
  rider: Rider;
  index?: number;
  className?: string;
}

export function RiderCard({ rider, index = 0, className }: RiderCardProps) {
  const isMounted = useIsMounted();

  return (
    <motion.article
      initial={isMounted ? { opacity: 0, y: 24 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.04, 0.3), duration: 0.4 }}
      className={cn("group relative", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-brand-red/40 group-hover:shadow-[0_20px_40px_-20px_rgba(227,6,19,0.45)]">
        <Image
          src={rider.imageSrc}
          alt={`Pilote n°${rider.number}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/0 via-transparent to-brand-red/0 group-hover:to-brand-red/10 transition-colors duration-500" />

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
            <span className="text-brand-red">#</span>
            {rider.number}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
