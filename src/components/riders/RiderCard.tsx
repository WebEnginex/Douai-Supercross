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
          "relative h-full overflow-hidden bg-zinc-950 aspect-square",
          "ring-1 ring-inset ring-white/0 transition-[box-shadow,ring-color] duration-500",
          "group-hover/rider:ring-brand-red/50",
          "group-hover/rider:shadow-[0_0_0_1px_rgba(227,6,19,0.35),0_24px_48px_-28px_rgba(227,6,19,0.55)]"
        )}
      >
        <Image
          src={rider.imageSrc}
          alt={`${rider.name}, pilote n°${rider.number}`}
          fill
          priority={priority}
          quality={92}
          sizes={
            featured
              ? "(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 28vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
          }
          className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover/rider:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/rider:opacity-100 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(227,6,19,0.28),transparent_55%)]" />

        {/* Race number — compact plate */}
        <div
          className={cn(
            "absolute left-2 top-2 sm:left-3 sm:top-3",
            "inline-flex items-baseline gap-0.5 bg-black/55 backdrop-blur-sm",
            "border border-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1"
          )}
        >
          <span className="font-display text-[0.65rem] sm:text-xs font-bold text-brand-red leading-none">
            #
          </span>
          <span
            className={cn(
              "font-display font-bold tabular-nums leading-none text-white tracking-tight",
              featured ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base"
            )}
          >
            {rider.number}
          </span>
        </div>

        {/* Name */}
        <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 md:p-4">
          <h3
            className={cn(
              "font-display font-bold uppercase text-white leading-tight tracking-wide",
              "drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]",
              "line-clamp-2 break-words",
              featured
                ? "text-base sm:text-lg md:text-xl lg:text-2xl"
                : "text-[0.7rem] sm:text-sm md:text-[0.95rem]"
            )}
          >
            {rider.name}
          </h3>
          <span
            aria-hidden
            className="mt-1.5 block h-0.5 w-6 origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover/rider:scale-x-100 sm:w-8"
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-8 w-8 sm:h-10 sm:w-10 bg-brand-red opacity-0 transition-opacity duration-300 group-hover/rider:opacity-100 [clip-path:polygon(100%_0,0_0,100%_100%)]"
        />
      </div>
    </motion.article>
  );
}
