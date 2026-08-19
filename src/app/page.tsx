import { AboutSection, EventInfoSection } from "@/components/sections/AboutSection";
import { TicketsPreviewSection } from "@/components/sections/TicketsPreviewSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
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
      <TicketsPreviewSection />
      <CountdownSection />
      <PartnersSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}
