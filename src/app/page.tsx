import { AboutSection, EventInfoSection } from "@/components/sections/AboutSection";
import { RidersPreviewSection } from "@/components/sections/RidersPreviewSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FAQSection, NewsletterSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventInfoSection />
      <RidersPreviewSection />
      <CountdownSection />
      <GallerySection />
      <PartnersSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}
