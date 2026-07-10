import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { ProgrammePageContent } from "./ProgrammePageContent";

export const metadata: Metadata = createMetadata({
  title: "Programme",
  description: `Consultez le programme provisoire de la soirée ${siteConfig.name}. Horaires, animations et déroulé des courses.`,
  path: "/programme",
});

export default function ProgrammePage() {
  return <ProgrammePageContent />;
}
