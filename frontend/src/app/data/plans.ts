export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  perks: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Osnovni",
    tagline: "Sve što vam treba za početak.",
    price: "Besplatno",
    perks: [
      "Osnovni profil tvrtke",
      "Prikupljanje recenzija",
      "Odgovaranje na ocjene",
      "Statistika pregleda",
    ],
  },
  {
    id: "business",
    name: "Poslovni",
    tagline: "Istaknite se pred konkurencijom.",
    price: "€29 / mjesec",
    featured: true,
    perks: [
      "Sve iz Osnovnog",
      "Verificirana značka",
      "Galerija fotografija",
      "Prioritet u pretrazi",
      "Analitika i izvještaji",
      "Podrška 24/7",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Za lance i veće organizacije.",
    price: "Po dogovoru",
    perks: [
      "Sve iz Poslovnog",
      "Više lokacija",
      "API pristup",
      "Widget za vašu web stranicu",
      "Dedicated account manager",
    ],
  },
];
