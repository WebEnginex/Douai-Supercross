"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Rider } from "@/types";
import { cn } from "@/lib/cn";
import { useIsMounted } from "@/hooks/useIsMounted";

interface RiderCardProps {
  rider: Rider;
  index?: number;
  featured?: boolean;
  priority?: boolean;
  className?: string;
}

export function RiderCard({
  rider,
  index = 0,
  featured = false,
  priority = false,
  className,
}: RiderCardProps) {
  const isMounted = useIsMounted();

  return (
    <motion.article
      initial={isMounted ? { opacity: 0, y: 28 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.035, 0.28), duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group/rider relative isolate h-full",
        "transition-[opacity,filter] duration-500 ease-out",
        "group-hover/grid:opacity-45 group-hover/grid:saturate-50",
        "hover:!opacity-100 hover:!saturate-100",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden bg-zinc-950",
          "aspect-square",
          "ring-1 ring-inset ring-white/0 transition-[box-shadow,ring-color] duration-500",
          "group-hover/rider:ring-brand-red/50",
          "group-hover/rider:shadow-[0_0_0_1px_rgba(227,6,19,0.35),0_24px_48px_-28px_rgba(227,6,19,0.55)]"
        )}
      >
        <Image
          src={rider.imageSrc}
          alt={`Pilote n°${rider.number}`}
          fill
          priority={priority}
          quality={92}
          sizes={
            featured
              ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          }
          className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover/rider:scale-[1.06]"
        />

        {/* Soft bottom fade only — keeps faces sharp */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/rider:opacity-100 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(227,6,19,0.28),transparent_55%)]" />

        {/* Race-plate number */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4 md:p-5">
          <p
            className={cn(
              "font-display font-bold leading-none tracking-tighter text-white",
              "drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)]",
              featured
                ? "text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            )}
          >
            <span className="text-brand-red">#</span>
            {rider.number}
          </p>
          <span
            aria-hidden
            className="mb-1 h-8 w-px origin-bottom scale-y-0 bg-brand-red transition-transform duration-500 group-hover/rider:scale-y-100 sm:h-10"
          />
        </div>

        {/* Corner cut accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-10 w-10 bg-brand-red opacity-0 transition-opacity duration-300 group-hover/rider:opacity-100 [clip-path:polygon(100%_0,0_0,100%_100%)]"
        />
      </div>
    </motion.article>
  );
}
