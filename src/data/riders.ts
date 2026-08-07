import type { Rider, RiderCategory } from "@/types";

export const ridersPageLabels = {
  title: "Pilotes",
  subtitle: "Le plateau",
  prestige: "Prestige",
  junior: "Junior",
  emptyState: "Aucun pilote dans cette catégorie pour le moment.",
} as const;

export const riderCategories: { id: RiderCategory; label: string }[] = [
  { id: "prestige", label: ridersPageLabels.prestige },
  { id: "junior", label: ridersPageLabels.junior },
];

/**
 * Numéros provisoires — remplacez par les numéros officiels dès confirmation.
 * Seuls la photo et le numéro sont affichés sur le site.
 */
export const riders: Rider[] = [
  // Prestige
  {
    id: "prestige-mitch",
    number: "1",
    category: "prestige",
    name: "Mitch",
    imageSrc: "/images/pilotes_prestige/Mitch-kwadrat.jpg",
  },
  {
    id: "prestige-billy",
    number: "2",
    category: "prestige",
    name: "Billy",
    imageSrc: "/images/pilotes_prestige/Billy-kwadrat.jpg",
  },
  {
    id: "prestige-cooper",
    number: "3",
    category: "prestige",
    name: "Cooper",
    imageSrc: "/images/pilotes_prestige/Cooper-kwadrat.jpg",
  },
  {
    id: "prestige-toby",
    number: "4",
    category: "prestige",
    name: "Toby",
    imageSrc: "/images/pilotes_prestige/Toby-kwadrat.jpg",
  },
  {
    id: "prestige-jonny",
    number: "5",
    category: "prestige",
    name: "Jonny",
    imageSrc: "/images/pilotes_prestige/Jonny-kwadrat.jpg",
  },
  {
    id: "prestige-eddie",
    number: "6",
    category: "prestige",
    name: "Eddie",
    imageSrc: "/images/pilotes_prestige/Eddie-kwadrat.jpg",
  },
  {
    id: "prestige-dominik",
    number: "7",
    category: "prestige",
    name: "Dominik",
    imageSrc: "/images/pilotes_prestige/Dominik-kwadrat.jpg",
  },
  {
    id: "prestige-tim",
    number: "8",
    category: "prestige",
    name: "Tim",
    imageSrc: "/images/pilotes_prestige/Tim-kwadrat.jpg",
  },
  {
    id: "prestige-will",
    number: "9",
    category: "prestige",
    name: "Will",
    imageSrc: "/images/pilotes_prestige/Will-kwadrat.jpg",
  },
  {
    id: "prestige-harry",
    number: "10",
    category: "prestige",
    name: "Harry",
    imageSrc: "/images/pilotes_prestige/Harry-kwadrat.jpg",
  },
  {
    id: "prestige-ash",
    number: "11",
    category: "prestige",
    name: "Ash",
    imageSrc: "/images/pilotes_prestige/Ash-kwadrat.jpg",
  },
  {
    id: "prestige-jordi",
    number: "12",
    category: "prestige",
    name: "Jordi",
    imageSrc: "/images/pilotes_prestige/Jordi-kwadrat.jpg",
  },
  {
    id: "prestige-diogo",
    number: "14",
    category: "prestige",
    name: "Diogo",
    imageSrc: "/images/pilotes_prestige/Diogo-kwadrat.jpg",
  },
  {
    id: "prestige-aleksander",
    number: "15",
    category: "prestige",
    name: "Aleksander",
    imageSrc: "/images/pilotes_prestige/Aleksander-kwadrat.jpg",
  },
  {
    id: "prestige-alfredo",
    number: "16",
    category: "prestige",
    name: "Alfredo",
    imageSrc: "/images/pilotes_prestige/Alfredo-kwadrat.jpg",
  },

  // Junior
  {
    id: "junior-bruneau",
    number: "21",
    category: "junior",
    name: "Liam Bruneau",
    imageSrc: "/images/pilotes_125/Bruneau_Liam.webp",
  },
  {
    id: "junior-camps",
    number: "22",
    category: "junior",
    name: "Xavier Camps Fauria",
    imageSrc: "/images/pilotes_125/Camps_Fauria_Xavier.webp",
  },
  {
    id: "junior-lopez",
    number: "23",
    category: "junior",
    name: "Yannis Lopez",
    imageSrc: "/images/pilotes_125/Lopez_Yannis.webp",
  },
  {
    id: "junior-ortiz",
    number: "24",
    category: "junior",
    name: "Ilyes Ortiz",
    imageSrc: "/images/pilotes_125/Ortiz_Ilyes.webp",
  },
  {
    id: "junior-simo",
    number: "25",
    category: "junior",
    name: "Maho Simo",
    imageSrc: "/images/pilotes_125/Simo_Maho.webp",
  },
  {
    id: "junior-desprey",
    number: "31",
    category: "junior",
    name: "Maxime Desprey",
    imageSrc: "/images/pilotes_250/Desprey_Maxime.webp",
  },
  {
    id: "junior-fonvieille",
    number: "32",
    category: "junior",
    name: "Calvin Fonvieille",
    imageSrc: "/images/pilotes_250/Fonvieille_Calvin.webp",
  },
  {
    id: "junior-irsuti",
    number: "33",
    category: "junior",
    name: "Yannis Irsuti",
    imageSrc: "/images/pilotes_250/Irsuti_Yannis.webp",
  },
  {
    id: "junior-lamarque",
    number: "34",
    category: "junior",
    name: "Mickaël Lamarque",
    imageSrc: "/images/pilotes_250/Lamarque_Mickaël.webp",
  },
  {
    id: "junior-lefrancois",
    number: "35",
    category: "junior",
    name: "Charles Lefrançois",
    imageSrc: "/images/pilotes_250/Lefrançois_Charles.webp",
  },
  {
    id: "junior-aranda",
    number: "41",
    category: "junior",
    name: "Gregory Aranda",
    imageSrc: "/images/pilotes_450/Aranda_Gregory.webp",
  },
  {
    id: "junior-bourdon",
    number: "42",
    category: "junior",
    name: "Anthony Bourdon",
    imageSrc: "/images/pilotes_450/Bourdon_Anthony.webp",
  },
  {
    id: "junior-escoffier",
    number: "43",
    category: "junior",
    name: "Adrien Escoffier",
    imageSrc: "/images/pilotes_450/Escoffier_Adrien.webp",
  },
  {
    id: "junior-ramette",
    number: "44",
    category: "junior",
    name: "Thomas Ramette",
    imageSrc: "/images/pilotes_450/Ramette_Thomas.webp",
  },
  {
    id: "junior-soubeyras",
    number: "45",
    category: "junior",
    name: "Cedric Soubeyras",
    imageSrc: "/images/pilotes_450/Soubeyras_Cedric.webp",
  },
];

export function getRidersByCategory(category: RiderCategory): Rider[] {
  return riders.filter((rider) => rider.category === category);
}
