import type { ContactCategory } from "@/types";

export const organizerInfo = {
  name: "Organizer Name",
  email: "Organizer Email",
  phone: "Organizer Phone",
  address: "Venue Address",
  mapPlaceholder: "Map Placeholder",
} as const;

export const contactCategories: ContactCategory[] = [
  { value: "general", label: "General Information" },
  { value: "tickets", label: "Tickets" },
  { value: "vip", label: "VIP" },
  { value: "press", label: "Press" },
  { value: "partnership", label: "Partnership" },
  { value: "volunteer", label: "Volunteer" },
  { value: "other", label: "Other" },
];
