import type { Rider } from "@/types";

const riderBiography =
  "Biographie — emplacement réservé. Remplacez par un court profil du pilote. Mettez en avant ses palmarès, son style de pilotage et son historique en championnat.";

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
  subtitle: "Liste complète",
  searchPlaceholder: "Rechercher des pilotes...",
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
