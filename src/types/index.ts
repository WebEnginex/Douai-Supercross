export interface Rider {
  id: string;
  name: string;
  country: string;
  team: string;
  manufacturer: string;
  biography: string;
  imagePlaceholder: string;
}

export interface EventInfoCard {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  alt: string;
  aspectRatio: "square" | "landscape" | "portrait";
}

export interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface ContactCategory {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  category: "all" | "public" | "vip";
  highlight?: boolean;
}

export interface ScheduleCategory {
  id: string;
  label: string;
}

export interface Ticket {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  purchaseUrl: string;
  tier: "standard" | "premium" | "vip" | "paddock";
  featured?: boolean;
  badge?: string;
}
