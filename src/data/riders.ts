import type { Rider } from "@/types";

export const riders: Rider[] = [
  {
    id: "rider-01",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-02",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-03",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-04",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-05",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-06",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-07",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-08",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-09",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-10",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-11",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
  {
    id: "rider-12",
    name: "Rider Name",
    country: "Country",
    team: "Team Name",
    manufacturer: "Manufacturer",
    biography:
      "Placeholder biography — Replace with a short rider profile. Highlight achievements, racing style, and championship history.",
    imagePlaceholder: "Rider Photo",
  },
];

export const riderPreviewCount = 6;

export function getUniqueCountries(): string[] {
  return [...new Set(riders.map((r) => r.country))].sort();
}

export function getUniqueManufacturers(): string[] {
  return [...new Set(riders.map((r) => r.manufacturer))].sort();
}
