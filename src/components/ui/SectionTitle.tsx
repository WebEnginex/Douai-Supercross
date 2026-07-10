"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useIsMounted } from "@/hooks/useIsMounted";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const isMounted = useIsMounted();

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <p className="text-brand-red text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 bg-brand-red",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
