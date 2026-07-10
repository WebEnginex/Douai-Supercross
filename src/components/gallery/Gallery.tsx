"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/types";
import { galleryLabels } from "@/data/ui";
import { cn } from "@/lib/cn";

interface GalleryProps {
  images: GalleryImage[];
}

const aspectClasses: Record<GalleryImage["aspectRatio"], string> = {
  square: "aspect-square",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
};

export function Gallery({ images }: GalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = images.find((img) => img.id === selectedId);

  const close = useCallback(() => setSelectedId(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (selectedId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedId, close]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedId(image.id)}
            className={cn(
              "relative w-full break-inside-avoid rounded-lg overflow-hidden group cursor-pointer border border-white/5",
              aspectClasses[image.aspectRatio]
            )}
            aria-label={`${galleryLabels.viewImage} ${image.alt}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-zinc-600 text-xs uppercase tracking-widest">
                {image.alt}
              </span>
            </div>
            <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors flex items-center justify-center">
              <ZoomIn
                size={32}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white z-10"
              aria-label={galleryLabels.closeLightbox}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-zinc-500 uppercase tracking-widest">
                {selected.alt}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
