import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { RidersPageContent } from "../riders/RidersPageContent";

export const metadata: Metadata = createMetadata({
  title: "Pilotes",
  description: `Découvrez le plateau Prestige et Junior de ${siteConfig.name}.`,
  path: "/pilotes",
});

export default function PilotesPage() {
  return <RidersPageContent />;
}
