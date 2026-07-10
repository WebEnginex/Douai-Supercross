import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { BilleterieContent } from "./BilleterieContent";

export const metadata: Metadata = createMetadata({
  title: "Billetterie",
  description: `Réservez vos places pour ${siteConfig.name}. Tribune Standard, Premium, Pass VIP et Paddock Expérience — achat sécurisé via notre partenaire officiel.`,
  path: "/billeterie",
});

export default function BilleteriePage() {
  return <BilleterieContent />;
}
