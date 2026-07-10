import type { Ticket } from "@/types";

export const ticketsPageLabels = {
  title: "Billetterie",
  subtitle: "Choisissez votre expérience",
  description:
    "Sélectionnez la formule qui correspond à votre soirée. Tous les achats sont finalisés sur la plateforme partenaire officielle.",
  disclaimer:
    "Tarifs et disponibilités — emplacements réservés. Remplacez les prix, descriptions et liens d'achat dans src/data/tickets.ts.",
  externalNote:
    "Vous serez redirigé vers le site partenaire de billetterie pour finaliser votre commande en toute sécurité.",
  cta: "Réserver",
  featuredBadge: "Recommandé",
} as const;

export const ticketsPreviewLabels = {
  title: "Billetterie",
  subtitle: "Réservez votre place",
  viewAll: "Voir toutes les offres",
} as const;

export const tickets: Ticket[] = [
  {
    id: "ticket-standard",
    name: "Tribune Standard",
    price: "Prix — emplacement réservé",
    description:
      "Description — emplacement réservé. Accès tribune avec vue sur l'ensemble du circuit.",
    features: [
      "Accès tribune — emplacement réservé",
      "Entrée le jour J — emplacement réservé",
      "Programme officiel — emplacement réservé",
    ],
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/tribune-standard",
    tier: "standard",
  },
  {
    id: "ticket-premium",
    name: "Tribune Premium",
    price: "Prix — emplacement réservé",
    description:
      "Description — emplacement réservé. Placement privilégié et confort amélioré pour vivre la course au plus près.",
    features: [
      "Placement premium — emplacement réservé",
      "Accès prioritaire — emplacement réservé",
      "Zone dédiée — emplacement réservé",
    ],
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/tribune-premium",
    tier: "premium",
  },
  {
    id: "ticket-vip",
    name: "Pass VIP",
    price: "Prix — emplacement réservé",
    description:
      "Description — emplacement réservé. Expérience haut de gamme avec services exclusifs et accès privilégiés.",
    features: [
      "Espace VIP — emplacement réservé",
      "Restauration — emplacement réservé",
      "Rencontre pilotes — emplacement réservé",
    ],
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/pass-vip",
    tier: "vip",
    featured: true,
    badge: "Recommandé",
  },
  {
    id: "ticket-paddock",
    name: "Paddock Expérience",
    price: "Prix — emplacement réservé",
    description:
      "Description — emplacement réservé. Immersion totale dans les coulisses de la compétition.",
    features: [
      "Accès paddock — emplacement réservé",
      "Visite des stands — emplacement réservé",
      "Hospitality — emplacement réservé",
    ],
    purchaseUrl: "https://www.billetterie-partenaire-placeholder.com/paddock",
    tier: "paddock",
  },
];
