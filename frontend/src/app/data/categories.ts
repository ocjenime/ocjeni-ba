export interface Category {
  slug: string;
  name: string;
  count: number;
  description: string;
  image: string;
  highlights: string[];
  icon: IconSlug;
}

export type IconSlug =
  | "utensils"
  | "utensils-crossed"
  | "bed"
  | "bed-double"
  | "sparkles"
  | "heart"
  | "car"
  | "wrench"
  | "hammer"
  | "home"
  | "cpu"
  | "monitor";

export const categories: Category[] = [
  {
    slug: "restorani-i-kafici",
    name: "Restorani i kafići",
    count: 6,
    description: "Od tradicionalnih bosanskih restorana do modernih kafića s najboljom kavom u gradu.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Meni i cijene", "Recenzije gostiju", "Rezervacije"],
    icon: "utensils",
  },
  {
    slug: "hoteli-i-smjestaj",
    name: "Hoteli i smještaj",
    count: 1,
    description: "Boutique hoteli, planinski smještaj i apartmani koji su ocijenili stvarni gosti.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Fotografije soba", "Ocjene čistoće", "Lokacija"],
    icon: "bed",
  },
  {
    slug: "ljepota-i-wellness",
    name: "Ljepota i wellness",
    count: 2,
    description: "Frizerski saloni, kozmetički tretmani i spa centri preporučeni od strane korisnika.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cjenik usluga", "Termini", "Ocjene osoblja"],
    icon: "sparkles",
  },
  {
    slug: "auto-servisi",
    name: "Auto servisi",
    count: 3,
    description: "Pouzdani mehaničari, autoelektričari i salonske usluge za vaše vozilo.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cijene dijelova", "Garancija", "Hitne intervencije"],
    icon: "car",
  },
  {
    slug: "gradevina-i-uredenje",
    name: "Građevina i uređenje",
    count: 2,
    description: "Provjerene građevinske firme, majstori i dizajneri interijera za vaš dom.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Reference", "Ponude", "Rokovi"],
    icon: "hammer",
  },
  {
    slug: "tehnologija-i-servis",
    name: "Tehnologija i servis",
    count: 2,
    description: "IT firme, servisi mobitela i računala te tehnološke trgovine u vašem gradu.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Brzina odgovora", "Cjenik", "Dostava"],
    icon: "cpu",
  },
];
