import type { ContactCategory } from "@/types";

export const organizerInfo = {
  name: "Nom de l'organisateur",
  email: "E-mail de l'organisateur",
  phone: "Téléphone de l'organisateur",
  address: "Adresse du lieu",
  mapPlaceholder: "Carte — emplacement réservé",
} as const;

export const contactCategories: ContactCategory[] = [
  { value: "general", label: "Informations générales" },
  { value: "tickets", label: "Billets" },
  { value: "vip", label: "VIP" },
  { value: "press", label: "Presse" },
  { value: "partnership", label: "Partenariat" },
  { value: "volunteer", label: "Bénévolat" },
  { value: "other", label: "Autre" },
];

export const contactPageLabels = {
  title: "Contact",
  subtitle: "Nous contacter",
  organizer: "Organisateur",
  email: "E-mail",
  phone: "Téléphone",
  venue: "Lieu",
  sendMessage: "Envoyer un message",
  form: {
    name: "Nom",
    email: "E-mail",
    subject: "Objet",
    category: "Catégorie",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre e-mail",
    subjectPlaceholder: "Objet",
    messagePlaceholder: "Votre message",
    submit: "Envoyer le message",
    success:
      "Emplacement réservé — Message enregistré dans la console. Connectez votre service d'e-mail lorsque vous serez prêt.",
  },
} as const;
