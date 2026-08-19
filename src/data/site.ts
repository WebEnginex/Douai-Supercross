export const venueConfig = {
  name: "Arena Grand Paris",
  street: "1 Av. Traversière",
  postalCode: "93290",
  city: "Tremblay-en-France",
  shortLabel: "Arena Grand Paris",
  fullAddress: "1 Av. Traversière, 93290 Tremblay-en-France",
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
  name: "GP SuperEnduro Paris",
  shortName: "GP SuperEnduro",
  tagline: "Le Super Enduro indoor débarque à Paris",
  description:
    "GP SuperEnduro Paris. 27 février 2027 à l'Arena Grand Paris. Une soirée de courses indoor avec les meilleurs pilotes du monde.",
  url: "https://www.gpsuperenduroparis.com",
  locale: "fr",
  themeColor: "#E30613",
  ogImage: "/images/og-placeholder.svg",
  footerDescription:
    "Le 27 février 2027, le Super Enduro s'invite à l'Arena Grand Paris. Courses, dédicaces et finales sous le même toit.",
} as const;
