import type { FooterLink, NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Pilotes", href: "/pilotes" },
  { label: "Contact", href: "/contact" },
];

export const footerNavLinks: FooterLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Pilotes", href: "/pilotes" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: FooterLink[] = [
  { label: "Politique de confidentialité", href: "#privacy" },
  { label: "Conditions d'utilisation", href: "#terms" },
  { label: "Politique des cookies", href: "#cookies" },
];

export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "#instagram" },
  { id: "facebook", label: "Facebook", href: "#facebook" },
  { id: "youtube", label: "YouTube", href: "#youtube" },
  { id: "twitter", label: "X / Twitter", href: "#twitter" },
];
