import type { ScheduleCategory, ScheduleItem } from "@/types";

export const programmePageLabels = {
  title: "Programme",
  subtitle: "Déroulé de la soirée",
  disclaimer:
    "Programme provisoire — emplacement réservé. Les horaires et activités seront confirmés et mis à jour dans ce fichier de données.",
  emptyState: "Aucun élément ne correspond à ce filtre.",
} as const;

export const scheduleCategories: ScheduleCategory[] = [
  { id: "all", label: "Programme complet" },
  { id: "public", label: "Grand public" },
  { id: "vip", label: "VIP" },
];

export const scheduleItems: ScheduleItem[] = [
  {
    id: "schedule-01",
    time: "Horaire — emplacement réservé",
    title: "Ouverture des portes",
    description:
      "Description — emplacement réservé. Remplacez par les détails d'accueil du public.",
    category: "public",
  },
  {
    id: "schedule-02",
    time: "Horaire — emplacement réservé",
    title: "Accès VIP & Paddock",
    description:
      "Description — emplacement réservé. Remplacez par les prestations réservées aux pass VIP.",
    category: "vip",
    highlight: true,
  },
  {
    id: "schedule-03",
    time: "Horaire — emplacement réservé",
    title: "Essais & reconnaissance du circuit",
    description:
      "Description — emplacement réservé. Remplacez par le déroulé des essais officiels.",
    category: "all",
  },
  {
    id: "schedule-04",
    time: "Horaire — emplacement réservé",
    title: "Séance autographes",
    description:
      "Description — emplacement réservé. Remplacez par le lieu et les pilotes présents.",
    category: "public",
  },
  {
    id: "schedule-05",
    time: "Horaire — emplacement réservé",
    title: "Qualifications",
    description:
      "Description — emplacement réservé. Remplacez par le format et la durée des qualifications.",
    category: "all",
    highlight: true,
  },
  {
    id: "schedule-06",
    time: "Horaire — emplacement réservé",
    title: "Pause technique",
    description:
      "Description — emplacement réservé. Remplacez par les animations ou services disponibles.",
    category: "public",
  },
  {
    id: "schedule-07",
    time: "Horaire — emplacement réservé",
    title: "Finale Super Enduro",
    description:
      "Description — emplacement réservé. Remplacez par le détail des manches de finale.",
    category: "all",
    highlight: true,
  },
  {
    id: "schedule-08",
    time: "Horaire — emplacement réservé",
    title: "Cérémonie de remise des prix",
    description:
      "Description — emplacement réservé. Remplacez par le protocole de podium et les accès.",
    category: "all",
  },
  {
    id: "schedule-09",
    time: "Horaire — emplacement réservé",
    title: "Fin de l'événement",
    description:
      "Description — emplacement réservé. Remplacez par les horaires de fermeture et consignes de sortie.",
    category: "all",
  },
];
