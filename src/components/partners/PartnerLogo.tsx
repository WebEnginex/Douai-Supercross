"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMounted } from "@/hooks/useIsMounted";

interface PartnerLogoProps {
  name: string;
  logoSrc: string;
  index: number;
}

export function PartnerLogo({ name, logoSrc, index }: PartnerLogoProps) {
  const isMounted = useIsMounted();

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, scale: 0.95 } : false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center justify-center h-28 md:h-32 bg-white/[0.04] border border-white/5 rounded-lg px-5 py-4 md:px-6 md:py-5 transition-colors hover:border-white/15 hover:bg-white/[0.07]"
    >
      <div className="relative flex items-center justify-center w-full h-16 md:h-20">
        <Image
          src={logoSrc}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 40vw, 200px"
        />
      </div>
    </motion.div>
  );
}
