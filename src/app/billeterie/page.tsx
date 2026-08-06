import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { BilleterieContent } from "./BilleterieContent";

export const metadata: Metadata = createMetadata({
  title: "Billetterie",
  description: `Réservez vos places pour ${siteConfig.name}. Trois catégories d'emplacement dans l'Arena, avec tarifs Normal, Groupe et Enfant.`,
  path: "/billeterie",
});

export default function BilleteriePage() {
  return <BilleterieContent />;
}
