import type { FooterLink, NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Riders", href: "/riders" },
  { label: "Contact", href: "/contact" },
];

export const footerNavLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Riders", href: "/riders" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Use", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "#instagram" },
  { id: "facebook", label: "Facebook", href: "#facebook" },
  { id: "youtube", label: "YouTube", href: "#youtube" },
  { id: "twitter", label: "X / Twitter", href: "#twitter" },
];
