"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { navbarLabels } from "@/data/ui";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const isScrolled = useNavbarScroll();
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = pathname === "/";
  const showSolidBackground = !isHomePage || isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showSolidBackground
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label={navbarLabels.mainNavigation}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-display text-lg md:text-xl font-bold text-white tracking-wider hover:text-brand-red transition-colors"
          >
            {siteConfig.shortName}
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium uppercase tracking-widest transition-colors relative group",
                    link.highlight
                      ? "px-4 py-2 bg-brand-red text-white font-semibold rounded-sm hover:bg-brand-red-dark shadow-lg shadow-brand-red/20"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  {!link.highlight && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? navbarLabels.closeMenu : navbarLabels.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3 px-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-colors",
                      link.highlight
                        ? "bg-brand-red text-white font-semibold text-center"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
