import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { RidersPageContent } from "./RidersPageContent";

export const metadata: Metadata = createMetadata({
  title: "Riders",
  description: `Discover the elite rider lineup for ${siteConfig.name}. Search and filter by country and manufacturer.`,
  path: "/riders",
});

export default function RidersPage() {
  return <RidersPageContent />;
}
