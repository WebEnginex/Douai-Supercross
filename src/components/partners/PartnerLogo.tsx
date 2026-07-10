"use client";

import { motion } from "framer-motion";

interface PartnerLogoProps {
  name: string;
  index: number;
}

export function PartnerLogo({ name, index }: PartnerLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex items-center justify-center h-24 md:h-28 bg-surface border border-white/5 rounded-lg p-6 transition-colors hover:border-brand-red/30 hover:bg-surface-light cursor-default"
    >
      <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest text-center">
        {name}
      </span>
    </motion.div>
  );
}
