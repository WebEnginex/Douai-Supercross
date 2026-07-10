"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQ } from "@/components/faq/FAQ";
import { EventButton } from "@/components/ui/EventButton";

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="FAQ" subtitle="Good to Know" />
        <FAQ items={faqItems} />
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email });
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          title="Stay in the Loop"
          subtitle="Newsletter"
        />
        <p className="text-zinc-400 mb-8 -mt-8">
          Placeholder — Subscribe to receive event updates, rider announcements,
          and exclusive offers.
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 bg-background border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-red/50"
            required
          />
          <EventButton type="submit" size="md">
            Subscribe
          </EventButton>
        </motion.form>
      </div>
    </section>
  );
}
