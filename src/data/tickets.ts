import type { Ticket } from "@/types";

export const ticketsPageLabels = {
  title: "Billetterie",
  subtitle: "Choisissez votre emplacement",
  description:
    "Trois catégories selon votre place dans l'Arena. Tarif Normal, Groupe (dès 10 personnes) ou Enfant (moins de 10 ans).",
  disclaimer:
    "La catégorie correspond à votre emplacement dans l'Arena. Paiement sécurisé via notre partenaire billetterie.",
  externalNote:
    "Un clic et vous basculez sur la plateforme partenaire pour finaliser votre commande.",
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
  subtitle: "27 février 2027 · Arena Grand Paris",
  viewAll: "Voir les tarifs",
} as const;

export const tickets: Ticket[] = [
  {
    id: "ticket-cat-1",
    name: "Catégorie 1",
    description:
      "Emplacement privilégié dans l'Arena. La meilleure vue sur le circuit.",
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
      "Emplacement intermédiaire. Excellent équilibre entre vue et tarif.",
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
      "Emplacement accessible dans l'Arena. Vivez toute l'ambiance Super Enduro.",
    prices: {
      normal: 39,
      group: 30,
      child: 29,
    },
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/categorie-3",
    tier: "category3",
  },
];
