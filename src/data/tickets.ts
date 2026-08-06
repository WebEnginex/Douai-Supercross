import type { Ticket } from "@/types";

export const ticketsPageLabels = {
  title: "Billetterie",
  subtitle: "Choisissez votre emplacement",
  description:
    "Trois catégories selon votre emplacement dans l'Arena. Chaque catégorie propose un tarif Normal, Groupe (à partir de 10 personnes) et Enfant (moins de 10 ans).",
  disclaimer:
    "La catégorie correspond à l'emplacement dans l'Arena. Les achats sont finalisés sur la plateforme partenaire officielle.",
  externalNote:
    "Vous serez redirigé vers le site partenaire de billetterie pour finaliser votre commande en toute sécurité.",
  cta: "Réserver",
  featuredBadge: "Meilleure vue",
  priceLabels: {
    normal: "Normal",
    group: "Groupe",
    child: "Enfant",
  },
  priceNotes: {
    group: "À partir de 10 personnes",
    child: "Moins de 10 ans",
  },
} as const;

export const ticketsPreviewLabels = {
  title: "Billetterie",
  subtitle: "Réservez votre place",
  viewAll: "Voir les tarifs",
} as const;

export const tickets: Ticket[] = [
  {
    id: "ticket-cat-1",
    name: "Catégorie 1",
    description:
      "Emplacement privilégié dans l'Arena — la meilleure vue sur le circuit.",
    prices: {
      normal: 57,
      group: 48,
      child: 46,
    },
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/categorie-1",
    tier: "category1",
    featured: true,
    badge: "Meilleure vue",
  },
  {
    id: "ticket-cat-2",
    name: "Catégorie 2",
    description:
      "Emplacement intermédiaire — excellent équilibre entre vue et tarif.",
    prices: {
      normal: 48,
      group: 39,
      child: 38,
    },
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/categorie-2",
    tier: "category2",
  },
  {
    id: "ticket-cat-3",
    name: "Catégorie 3",
    description:
      "Emplacement accessible — vivez l'ambiance Super Enduro à tarif avantageux.",
    prices: {
      normal: 39,
      group: 30,
      child: 29,
    },
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/categorie-3",
    tier: "category3",
  },
];
