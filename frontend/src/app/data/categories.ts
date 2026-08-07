export interface Category {
  slug: string;
  name: string;
  count: number;
  description: string;
  image: string;
  highlights: string[];
}

export const categories: Category[] = [
  {
    slug: "restorani-i-kafici",
    name: "Restorani i kafići",
    count: 1240,
    description: "Od tradicionalnih bosanskih restorana do modernih kafića s najboljom kavom u gradu.",
    image: "https://source.unsplash.com/featured/1200x900?restaurant,interior",
    highlights: ["Meni i cijene", "Recenzije gostiju", "Rezervacije"],
  },
  {
    slug: "hoteli-i-smjestaj",
    name: "Hoteli i smještaj",
    count: 856,
    description: "Boutique hoteli, planinski smještaj i apartmani koji su ocijenili stvarni gosti.",
    image: "https://source.unsplash.com/featured/1200x900?hotel,room,luxury",
    highlights: ["Fotografije soba", "Ocjene čistoće", "Lokacija"],
  },
  {
    slug: "ljepota-i-wellness",
    name: "Ljepota i wellness",
    count: 642,
    description: "Frizerski saloni, kozmetički tretmani i spa centri preporučeni od strane korisnika.",
    image: "https://source.unsplash.com/featured/1200x900?spa,wellness",
    highlights: ["Cjenik usluga", "Termini", "Ocjene osoblja"],
  },
  {
    slug: "auto-servisi",
    name: "Auto servisi",
    count: 438,
    description: "Pouzdani mehaničari, autoelektričari i salonske usluge za vaše vozilo.",
    image: "https://source.unsplash.com/featured/1200x900?car,service,garage",
    highlights: ["Cijene dijelova", "Garancija", "Hitne intervencije"],
  },
  {
    slug: "gradevina-i-uredenje",
    name: "Građevina i uređenje",
    count: 325,
    description: "Provjerene građevinske firme, majstori i dizajneri interijera za vaš dom.",
    image: "https://source.unsplash.com/featured/1200x900?construction,interior,design",
    highlights: ["Reference", "Ponude", "Rokovi"],
  },
  {
    slug: "tehnologija-i-servis",
    name: "Tehnologija i servis",
    count: 512,
    description: "IT firme, servisi mobitela i računala te tehnološke trgovine u vašem gradu.",
    image: "https://source.unsplash.com/featured/1200x900?technology,computer,office",
    highlights: ["Brzina odgovora", "Cjenik", "Dostava"],
  },
];
