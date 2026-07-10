import type { EventInfoCard } from "@/types";

export const eventConfig = {
  name: "GP Super Enduro Paris",
  edition: "Édition — emplacement réservé",
  countdownTargetDate: "2099-12-31T18:00:00Z",
  hero: {
    title: "GP SUPER ENDURO PARIS",
    subtitle: "Super Enduro International",
    description:
      "Description — emplacement réservé. Remplacez par le slogan de votre événement. Les meilleurs pilotes Super Enduro du monde se retrouvent pour une soirée de course indoor électrisante.",
    primaryButton: {
      label: "Acheter des billets",
      href: "#tickets",
    },
    secondaryButton: {
      label: "Voir les pilotes",
      href: "/pilotes",
    },
    videoSrc: "/video/SuperEnduroPoland2023.webm",
    posterSrc: "/images/hero-poster.svg",
    scrollLabel: "Défiler",
  },
  about: {
    title: "À propos de l'événement",
    subtitle: "Sous-titre — emplacement réservé",
    paragraphs: [
      "Paragraphe — emplacement réservé. Remplacez par une description convaincante du GP Super Enduro Paris. Cette section doit mettre en avant ce qui rend l'événement unique, son envergure internationale et l'expérience pleine d'adrénaline qui attend les spectateurs.",
      "Paragraphe — emplacement réservé. Ajoutez des détails sur le format du championnat, l'ambiance du lieu et ce que les fans peuvent attendre le jour de la course. Tout le contenu ici est conçu pour être facilement remplacé sans modifier le code des composants.",
    ],
    stats: [
      { value: "Emplacement réservé", label: "Pilotes d'élite" },
      { value: "Emplacement réservé", label: "Heures d'action" },
      { value: "Emplacement réservé", label: "Capacité spectateurs" },
      { value: "Emplacement réservé", label: "Nations représentées" },
    ],
  },
  cta: {
    title: "Soyez présent quand l'histoire s'écrit",
    description:
      "Texte — emplacement réservé. Réservez votre place pour l'événement Super Enduro le plus attendu de la saison. Billets, expériences VIP et accès exclusifs vous attendent.",
    primaryButton: {
      label: "Acheter des billets",
      href: "#tickets",
    },
    secondaryButton: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
  sections: {
    eventInfo: {
      title: "Informations sur l'événement",
      subtitle: "Tout ce dont vous avez besoin",
    },
    ridersPreview: {
      title: "Pilotes d'élite",
      subtitle: "Le plateau",
      viewAll: "Voir tous les pilotes",
    },
    countdown: {
      title: "Compte à rebours avant le jour J",
      subtitle: "Date de l'événement",
      configNote: "Date cible configurée dans",
    },
    gallery: {
      title: "Galerie",
      subtitle: "Moments de la course",
    },
    partners: {
      title: "Nos partenaires",
      subtitle: "Ils nous soutiennent",
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Bon à savoir",
    },
    newsletter: {
      title: "Restez informé",
      subtitle: "Infolettre",
      description:
        "Emplacement réservé — Inscrivez-vous pour recevoir les actualités de l'événement, les annonces de pilotes et les offres exclusives.",
      placeholder: "Adresse e-mail",
      button: "S'inscrire",
    },
  },
} as const;

export const eventInfoCards: EventInfoCard[] = [
  {
    id: "date",
    title: "Date de l'événement",
    value: "Date de l'événement",
    description: "Emplacement réservé — Remplacez par la date officielle de l'événement.",
    icon: "calendar",
  },
  {
    id: "venue",
    title: "Lieu",
    value: "Nom du lieu",
    description: "Adresse du lieu",
    icon: "map-pin",
  },
  {
    id: "hours",
    title: "Horaires d'ouverture",
    value: "Horaires d'ouverture",
    description: "Emplacement réservé — Remplacez par les horaires d'ouverture des portes.",
    icon: "clock",
  },
  {
    id: "schedule",
    title: "Programme",
    value: "Bientôt disponible",
    description: "Emplacement réservé — Consultez la page Programme pour le déroulé provisoire.",
    icon: "list",
  },
  {
    id: "parking",
    title: "Parking",
    value: "Informations parking",
    description: "Emplacement réservé — Remplacez par les détails et indications de parking.",
    icon: "car",
  },
  {
    id: "vip",
    title: "Espace VIP",
    value: "Espace VIP",
    description: "Emplacement réservé — Remplacez par les informations sur les formules VIP.",
    icon: "star",
  },
  {
    id: "food",
    title: "Espace restauration",
    value: "Espace restauration",
    description: "Emplacement réservé — Remplacez par les détails sur la restauration et les espaces food.",
    icon: "utensils",
  },
  {
    id: "merch",
    title: "Merchandising",
    value: "Merchandising",
    description: "Emplacement réservé — Remplacez par les informations sur la boutique officielle.",
    icon: "shopping-bag",
  },
];
