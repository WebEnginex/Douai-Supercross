export const venueConfig = {
  name: "Arena Grand Paris",
  street: "1 Av. Traversière",
  postalCode: "93290",
  city: "Tremblay-en-France",
  /** Ligne courte : Arena Grand Paris */
  shortLabel: "Arena Grand Paris",
  /** Ligne complète pour affichage */
  fullAddress: "1 Av. Traversière, 93290 Tremblay-en-France",
  /** Affichage multiligne / contact */
  displayLines: [
    "Arena Grand Paris",
    "1 Av. Traversière",
    "93290 Tremblay-en-France",
  ] as const,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Arena+Grand+Paris+1+Avenue+de+la+Traversi%C3%A8re+93290+Tremblay-en-France",
  mapsLabel: "Voir sur Google Maps",
} as const;

export const siteConfig = {
  name: "GP Super Enduro Paris",
  shortName: "GP Super Enduro",
  tagline: "L'expérience Super Enduro indoor ultime",
  description:
    "Vivez l'action Super Enduro de classe mondiale au GP Super Enduro Paris — Arena Grand Paris, Tremblay-en-France.",
  /** URL de production — sur Vercel, getSiteUrl() utilise VERCEL_URL automatiquement. */
  url: "https://www.gpsuperenduroparis.com",
  locale: "fr",
  themeColor: "#E30613",
  ogImage: "/images/og-placeholder.svg",
  footerDescription:
    "GP Super Enduro Paris à l'Arena Grand Paris — 1 Av. Traversière, 93290 Tremblay-en-France.",
} as const;
