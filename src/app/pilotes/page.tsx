import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { RidersPageContent } from "../riders/RidersPageContent";

export const metadata: Metadata = createMetadata({
  title: "Pilotes",
  description: `Découvrez le plateau de pilotes d'élite de ${siteConfig.name}. Recherchez et filtrez par pays et constructeur.`,
  path: "/pilotes",
});

export default function PilotesPage() {
  return <RidersPageContent />;
}
