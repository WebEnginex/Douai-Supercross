"use client";

import { eventConfig } from "@/data/event";
import { galleryImages } from "@/data/gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Gallery } from "@/components/gallery/Gallery";

export function GallerySection() {
  const { gallery } = eventConfig.sections;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={gallery.title} subtitle={gallery.subtitle} />
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
}
