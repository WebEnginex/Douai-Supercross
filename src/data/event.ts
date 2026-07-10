import type { EventInfoCard } from "@/types";

export const eventConfig = {
  name: "GP Super Enduro Paris",
  edition: "Edition Placeholder",
  countdownTargetDate: "2099-12-31T18:00:00Z",
  hero: {
    title: "GP SUPER ENDURO PARIS",
    description:
      "Placeholder description — Replace with your event tagline. The world's finest Super Enduro riders converge for an electrifying night of indoor racing.",
    primaryButton: {
      label: "Get Tickets",
      href: "#tickets",
    },
    secondaryButton: {
      label: "View Riders",
      href: "/riders",
    },
    videoSrc: "/video/SuperEnduroPoland2023.webm",
    posterSrc: "/images/hero-poster.svg",
  },
  about: {
    title: "About the Event",
    subtitle: "Placeholder Subtitle",
    paragraphs: [
      "Placeholder paragraph — Replace with a compelling description of GP Super Enduro Paris. This section should highlight what makes the event unique, its international stature, and the adrenaline-fueled experience awaiting spectators.",
      "Placeholder paragraph — Add details about the championship format, venue atmosphere, and what fans can expect from race day. All content here is designed to be easily swapped without touching component code.",
    ],
    stats: [
      { value: "Placeholder", label: "Elite Riders" },
      { value: "Placeholder", label: "Hours of Action" },
      { value: "Placeholder", label: "Spectator Capacity" },
      { value: "Placeholder", label: "Nations Represented" },
    ],
  },
  cta: {
    title: "Be There When History Is Made",
    description:
      "Placeholder text — Secure your place at the most anticipated Super Enduro event of the season. Tickets, VIP experiences, and exclusive access await.",
    primaryButton: {
      label: "Get Tickets",
      href: "#tickets",
    },
    secondaryButton: {
      label: "Contact Us",
      href: "/contact",
    },
  },
} as const;

export const eventInfoCards: EventInfoCard[] = [
  {
    id: "date",
    title: "Event Date",
    value: "Event Date",
    description: "Placeholder — Replace with the official event date.",
    icon: "calendar",
  },
  {
    id: "venue",
    title: "Venue",
    value: "Venue Name",
    description: "Venue Address",
    icon: "map-pin",
  },
  {
    id: "hours",
    title: "Opening Hours",
    value: "Opening Hours",
    description: "Placeholder — Replace with gate opening times.",
    icon: "clock",
  },
  {
    id: "schedule",
    title: "Schedule",
    value: "Coming Soon",
    description: "Placeholder — Full race schedule will be published here.",
    icon: "list",
  },
  {
    id: "parking",
    title: "Parking",
    value: "Parking Information",
    description: "Placeholder — Replace with parking details and directions.",
    icon: "car",
  },
  {
    id: "vip",
    title: "VIP Area",
    value: "VIP Area",
    description: "Placeholder — Replace with VIP package information.",
    icon: "star",
  },
  {
    id: "food",
    title: "Food Area",
    value: "Food Area",
    description: "Placeholder — Replace with catering and food court details.",
    icon: "utensils",
  },
  {
    id: "merch",
    title: "Merchandising",
    value: "Merchandising",
    description: "Placeholder — Replace with official merchandise information.",
    icon: "shopping-bag",
  },
];
