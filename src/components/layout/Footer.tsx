"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import {
  footerNavLinks,
  legalLinks,
  socialLinks,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { EventButton } from "@/components/ui/EventButton";

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram size={20} />,
  facebook: <Facebook size={20} />,
  youtube: <Youtube size={20} />,
  twitter: <Twitter size={20} />,
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email });
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              {siteConfig.shortName}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Placeholder footer description — Replace with event summary and
              key information.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
              Newsletter
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Placeholder — Subscribe for event updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 bg-surface border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-red/50"
                required
              />
              <EventButton type="submit" size="sm" variant="primary">
                Join
              </EventButton>
            </form>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface border border-white/10 text-zinc-400 hover:text-white hover:border-brand-red/50 transition-all"
                >
                  {socialIcons[social.id]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
