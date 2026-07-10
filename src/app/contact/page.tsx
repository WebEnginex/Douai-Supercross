import type { Metadata } from "next";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { organizerInfo, contactPageLabels } from "@/data/contact";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contactez les organisateurs de ${siteConfig.name}. Billets, VIP, presse, partenariats et plus encore.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={contactPageLabels.title}
          subtitle={contactPageLabels.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center shrink-0">
                <User size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  {contactPageLabels.organizer}
                </h3>
                <p className="text-zinc-400">{organizerInfo.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  {contactPageLabels.email}
                </h3>
                <p className="text-zinc-400">{organizerInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  {contactPageLabels.phone}
                </h3>
                <p className="text-zinc-400">{organizerInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  {contactPageLabels.venue}
                </h3>
                <p className="text-zinc-400">{organizerInfo.address}</p>
              </div>
            </div>

            <div className="aspect-video bg-surface border border-white/5 rounded-lg flex items-center justify-center">
              <span className="text-zinc-500 uppercase tracking-widest text-sm">
                {organizerInfo.mapPlaceholder}
              </span>
            </div>
          </div>

          <div className="bg-surface border border-white/5 rounded-lg p-6 md:p-8">
            <h3 className="text-white font-display text-xl font-bold mb-6">
              {contactPageLabels.sendMessage}
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
