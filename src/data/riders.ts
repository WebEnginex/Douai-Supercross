import type { Rider } from "@/types";

const riderBiography =
  "Profil du pilote à confirmer. Style, palmarès et parcours seront mis à jour dès validation du plateau officiel.";

export const riders: Rider[] = [
  { id: "rider-01", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-02", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-03", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-04", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-05", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-06", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-07", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-08", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-09", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-10", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-11", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
  { id: "rider-12", name: "Nom du pilote", country: "Pays", team: "Nom de l'équipe", manufacturer: "Constructeur", biography: riderBiography, imagePlaceholder: "Photo du pilote" },
];

export const riderPreviewCount = 6;

export const ridersPageLabels = {
  title: "Pilotes",
  subtitle: "Le plateau international",
  searchPlaceholder: "Rechercher un pilote...",
  allCountries: "Tous les pays",
  allManufacturers: "Tous les constructeurs",
  emptyState: "Aucun pilote ne correspond à vos filtres. Essayez d'ajuster votre recherche.",
} as const;

export function getUniqueCountries(): string[] {
  return [...new Set(riders.map((r) => r.country))].sort();
}

export function getUniqueManufacturers(): string[] {
  return [...new Set(riders.map((r) => r.manufacturer))].sort();
}
