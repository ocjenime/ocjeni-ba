import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const getCategoryBySlug = (slug: string) => {
  const categories: Record<
    string,
    {
      name: string;
      description: string;
      subcategories: { name: string; slug: string; count: number }[];
    }
  > = {
    "hrana-i-pice": {
      name: "Hrana i piće",
      description:
        "Pronađite najbolje restorane, kafiće, pekare i druge ugostiteljske objekte u Bosni i Hercegovini.",
      subcategories: [
        { name: "Restorani", slug: "restorani", count: 245 },
        { name: "Kafići", slug: "kafici", count: 189 },
        { name: "Pekare", slug: "pekare", count: 78 },
        { name: "Picerije", slug: "picerije", count: 56 },
        { name: "Ćevabdžinice", slug: "cevabdzinice", count: 123 },
        { name: "Buregdžinice", slug: "buregdzinice", count: 67 },
        { name: "Fast food", slug: "fast-food", count: 134 },
        { name: "Kineski restorani", slug: "kineski-restorani", count: 34 },
        { name: "Turski restorani", slug: "turski-restorani", count: 28 },
        { name: "Italijanski restorani", slug: "italijanski-restorani", count: 45 },
        { name: "Ribačnice", slug: "ribacnice", count: 23 },
        { name: "Poslastičarne", slug: "slasticarne", count: 56 },
        { name: "Barovi", slug: "barovi", count: 167 },
        { name: "Klubovi", slug: "klubovi", count: 89 },
        { name: "Pivnice", slug: "pivnice", count: 45 },
      ],
    },
    trgovine: {
      name: "Trgovine",
      description:
        "Pronađite supermarkete, tržne centre, specijalizovane trgovine i ostale trgovinske objekte.",
      subcategories: [
        { name: "Supermarketi", slug: "supermarketi", count: 89 },
        { name: "Mega marketi", slug: "mega-marketi", count: 34 },
        { name: "Tržni centri", slug: "trzni-centri", count: 23 },
        { name: "Mali marketi", slug: "mali-marketi", count: 234 },
        { name: "Voće i povrće", slug: "voce-i-povrce", count: 67 },
        { name: "Mesnice", slug: "mesnice", count: 89 },
        { name: "Prodavnice odjeće", slug: "prodavnice-odjece", count: 123 },
        { name: "Prodavnice obuće", slug: "prodavnice-obuce", count: 78 },
        { name: "Elektronika", slug: "elektronika", count: 56 },
        { name: "Namještaj", slug: "namjestaj", count: 45 },
        { name: "Knjižare", slug: "knjizare", count: 34 },
        { name: "Apoteke", slug: "apotheke", count: 156 },
      ],
    },
    automobilizam: {
      name: "Automobilizam",
      description:
        "Automehaničari, autopraonice, auto dijelovi i sve vezano za automobile.",
      subcategories: [
        { name: "Automehaničari", slug: "automehanicari", count: 189 },
        { name: "Autopraonice", slug: "autopraonice", count: 123 },
        { name: "Autodijelovi", slug: "autodijelovi", count: 78 },
        { name: "Auto servisi", slug: "auto-servisi", count: 156 },
        { name: "Autolakireri", slug: "autolakeri", count: 45 },
        { name: "Auto saloni", slug: "auto-saloni", count: 34 },
        { name: "Vulkanizeri", slug: "vulkanizeri", count: 67 },
        { name: "Auto električari", slug: "auto-elektricari", count: 56 },
        { name: "Auto klima servisi", slug: "auto-klima-servisi", count: 34 },
      ],
    },
    gradjevinarstvo: {
      name: "Građevinarstvo",
      description:
        "Građevinske firme, projektanti, nadzor i sve građevinske usluge.",
      subcategories: [
        { name: "Građevinske firme", slug: "gradjevinske-firme", count: 189 },
        { name: "Projektanti", slug: "projektanti", count: 56 },
        { name: "Nadzor", slug: "nadzor", count: 34 },
        { name: "Zidari", slug: "zidari", count: 89 },
        { name: "Keramičari", slug: "keramicari", count: 67 },
        { name: "Tesar", slug: "tesar", count: 45 },
        { name: "Krovopokrivači", slug: "krovopokrivaci", count: 34 },
        { name: "Gipsari", slug: "gipsari", count: 23 },
        { name: "Moleri", slug: "moleri", count: 123 },
        { name: "Podopolagači", slug: "podopolagaci", count: 56 },
        { name: "Vodoinstalateri", slug: "vodoinstalateri", count: 89 },
        { name: "Električari", slug: "elektricari", count: 112 },
      ],
    },
    nekretnine: {
      name: "Nekretnine",
      description:
        "Agencije za nekretnine, procjena, upravljanje i sve vezano za nekretnine.",
      subcategories: [
        { name: "Agencije za nekretnine", slug: "agencije-za-nekretnine", count: 123 },
        { name: "Procjena nekretnina", slug: "procjena-nekretnina", count: 34 },
        { name: "Upravljanje nekretninama", slug: "upravljanje-nekretninama", count: 45 },
        { name: "Iznajmljivanje", slug: "iznajmljivanje", count: 89 },
        { name: "Prodaja", slug: "prodaja", count: 156 },
        { name: "Investicije", slug: "investicije", count: 23 },
        { name: "Geodetske usluge", slug: "geodetske-usluge", count: 34 },
        { name: "Arhitekti", slug: "arhitekti", count: 56 },
        { name: "Dizajn enterijera", slug: "dizajn-enterijera", count: 45 },
      ],
    },
    zdravlje: {
      name: "Zdravlje",
      description:
        "Ljekari, stomatolozi, apoteke, fitness centri i sve za vaše zdravlje.",
      subcategories: [
        { name: "Ljekari opšte prakse", slug: "ljekari-opsirne-prakse", count: 189 },
        { name: "Specijalisti", slug: "specijalisti", count: 123 },
        { name: "Stomatolozi", slug: "stomatolozi", count: 156 },
        { name: "Optičari", slug: "optickari", count: 45 },
        { name: "Apoteke", slug: "apoteke", count: 234 },
        { name: "Laboratorije", slug: "laboratorije", count: 67 },
        { name: "Bolnice", slug: "bolnice", count: 23 },
        { name: "Fitness centri", slug: "fitness-centri", count: 89 },
        { name: "Teretane", slug: "teretane", count: 112 },
        { name: "Psihoterapija", slug: "psihoterapija", count: 34 },
        { name: "Fizioterapija", slug: "fizioterapija", count: 56 },
        { name: "Masaže", slug: "masaze", count: 78 },
      ],
    },
    obrazovanje: {
      name: "Obrazovanje",
      description:
        "Škole, fakulteti, kursevi, instruktori i sve za obrazovanje.",
      subcategories: [
        { name: "Osnovne škole", slug: "osnovne-skole", count: 89 },
        { name: "Srednje škole", slug: "srednje-skole", count: 56 },
        { name: "Fakulteti", slug: "fakulteti", count: 23 },
        { name: "Privatne škole", slug: "privatne-skole", count: 34 },
        { name: "Vrtići", slug: "vrtici", count: 123 },
        { name: "Instrukcije", slug: "instrukcije", count: 89 },
        { name: "Kursevi jezika", slug: "kursevi-jezika", count: 67 },
        { name: "Kursevi računara", slug: "kursevi-racunara", count: 45 },
        { name: "Kursevi vožnje", slug: "kursevi-voznje", count: 34 },
        { name: "Muzičke škole", slug: "muzicke-skole", count: 23 },
      ],
    },
    usluge: {
      name: "Usluge",
      description:
        "Profesionalne usluge, savjetovanje, pravne usluge i ostale usluge.",
      subcategories: [
        { name: "Pravne usluge", slug: "pravne-usluge2", count: 89 },
        { name: "Knjigovođe", slug: "knjigovode", count: 123 },
        { name: "Računovođe", slug: "racunovode", count: 67 },
        { name: "Revizori", slug: "revizori", count: 34 },
        { name: "Savjetovanje", slug: "savjetovanje", count: 56 },
        { name: "Marketing agencije", slug: "marketing-agencije", count: 45 },
        { name: "IT usluge", slug: "it-usluge", count: 78 },
        { name: "Web dizajn", slug: "web-dizajn", count: 56 },
        { name: "Fotografija", slug: "fotografija-usluge", count: 89 },
        { name: "Prijevodi", slug: "prevodi", count: 34 },
        { name: "Organizacija događaja", slug: "organizacija-dogadjaja", count: 45 },
      ],
    },
    "frizerski-saloni": {
      name: "Frizerski saloni",
      description:
        "Frizeri, kozmetičari, salon ljepote i sve za vaš izgled.",
      subcategories: [
        { name: "Frizerski saloni", slug: "frizerski-saloni2", count: 189 },
        { name: "Kozmetički saloni", slug: "kozmeticki-saloni", count: 123 },
        { name: "Manikira", slug: "manikira", count: 89 },
        { name: "Pedikira", slug: "pedikira", count: 67 },
        { name: "Depilacija", slug: "depilacija", count: 56 },
        { name: "Šminkanje", slug: "sminkanje", count: 34 },
        { name: "Solariji", slug: "solariji", count: 45 },
        { name: "Tetoviranje", slug: "tetoviranje", count: 23 },
        { name: "Tretmani lica", slug: "tretmani-lica", count: 78 },
        { name: "Tretmani tijela", slug: "tretmani-tijela", count: 56 },
      ],
    },
    tehnologija: {
      name: "Tehnologija",
      description:
        "IT firme, servisi, web razvoj, software i ostale tehnološke usluge.",
      subcategories: [
        { name: "IT firme", slug: "it-tvrtke", count: 89 },
        { name: "Web dizajn", slug: "web-dizajn-firme", count: 56 },
        { name: "Programiranje", slug: "programiranje-firme", count: 45 },
        { name: "Software", slug: "software", count: 34 },
        { name: "Servisi računara", slug: "servisi-racunara", count: 123 },
        { name: "Mrežna oprema", slug: "mrezna-oprema", count: 23 },
        { name: "Sigurnosni sistemi", slug: "sigurnosni-sistemi", count: 34 },
        { name: "Smart home", slug: "smart-home", count: 12 },
        { name: "Cloud usluge", slug: "cloud-usluge", count: 18 },
      ],
    },
    finansije: {
      name: "Finansije",
      description:
        "Banke, osiguranja, investicije, računovodstvo i financijske usluge.",
      subcategories: [
        { name: "Banke", slug: "banke", count: 12 },
        { name: "Osiguranja", slug: "osiguranja", count: 23 },
        { name: "Leasing", slug: "leasing", count: 18 },
        { name: "Mjenjačnice", slug: "mjenjacnice", count: 89 },
        { name: "Investicioni fondovi", slug: "investicioni-fondovi", count: 8 },
        { name: "Mikrokreditne organizacije", slug: "mikrokreditne-organizacije", count: 34 },
        { name: "Digitalno bankarstvo", slug: "digitalno-bankarstvo", count: 15 },
        { name: "Krediti", slug: "krediti", count: 45 },
        { name: "Štednja", slug: "stednja", count: 23 },
      ],
    },
    putovanja: {
      name: "Putovanja",
      description:
        "Agencije za putovanja, hoteli, apartmani i sve za putovanja.",
      subcategories: [
        { name: "Putničke agencije", slug: "putnicke-agencije", count: 89 },
        { name: "Hoteli", slug: "hoteli", count: 123 },
        { name: "Apartmani", slug: "apartmani", count: 234 },
        { name: "Sobe za iznajmljivanje", slug: "sobe-za-iznajmljivanje", count: 156 },
        { name: "Hosteli", slug: "hosteli", count: 34 },
        { name: "Kampovi", slug: "kampovi", count: 23 },
        { name: "Kuće za odmor", slug: "kuce-za-odmor", count: 89 },
        { name: "Rent-a-car", slug: "agencije-za-rent-a-car", count: 56 },
        { name: "Taxi usluge", slug: "taxi-usluge", count: 189 },
        { name: "Vodiči", slug: "vodici", count: 45 },
      ],
    },
    "sport-i-rekreacija": {
      name: "Sport i rekreacija",
      description:
        "Sportski centri, teretane, rekreacija i sve za aktivan život.",
      subcategories: [
        { name: "Sportski centri", slug: "sportski-centri", count: 56 },
        { name: "Teretane", slug: "teretane2", count: 123 },
        { name: "Fitness centri", slug: "fitness-centri2", count: 89 },
        { name: "Bazeni", slug: "bazeni", count: 34 },
        { name: "Teniski tereni", slug: "teniski-tereni", count: 23 },
        { name: "Skijališta", slug: "skijalista", count: 12 },
        { name: "Planinarenje", slug: "planinarenje", count: 45 },
        { name: "Biciklizam", slug: "biciklizam", count: 34 },
        { name: "Plivanje", slug: "plivanje", count: 23 },
        { name: "Jahanje", slug: "jahanje", count: 18 },
      ],
    },
    "kultura-i-zabava": {
      name: "Kultura i zabava",
      description:
        "Kino, pozorište, muzeji, koncerti i zabavni sadržaji.",
      subcategories: [
        { name: "Kina", slug: "kina", count: 23 },
        { name: "Pozorišta", slug: "pozorista", count: 12 },
        { name: "Muzeji", slug: "muzeji", count: 18 },
        { name: "Galerije", slug: "galerije", count: 34 },
        { name: "Biblioteke", slug: "biblioteke", count: 23 },
        { name: "Klubovi", slug: "klubovi-kultura", count: 89 },
        { name: "Bowling", slug: "bowling", count: 12 },
        { name: "Bilijar", slug: "bilijar", count: 34 },
        { name: "Escape room", slug: "escape-room", count: 8 },
        { name: "Zabavni parkovi", slug: "zabavni-parkovi", count: 5 },
      ],
    },
    smjestaj: {
      name: "Smještaj",
      description:
        "Hoteli, hosteli, apartmani, moteli i sve za smještaj.",
      subcategories: [
        { name: "Hoteli", slug: "hoteli-smjestaj", count: 123 },
        { name: "Motel", slug: "motel-smjestaj", count: 34 },
        { name: "Hosteli", slug: "hosteli-smjestaj", count: 23 },
        { name: "Apartmani", slug: "apartmani-smjestaj", count: 234 },
        { name: "Kuće za odmor", slug: "kuce-za-odmor-smjestaj", count: 89 },
        { name: "Vile", slug: "vile-smjestaj", count: 45 },
        { name: "Kampovi", slug: "kampovi-smjestaj", count: 23 },
        { name: "Seoska domaćinstva", slug: "seoska-domacinstva", count: 34 },
        { name: "Ethno selo", slug: "ethno-selo", count: 12 },
        { name: "Glamping", slug: "glamping", count: 8 },
      ],
    },
    transport: {
      name: "Transport",
      description:
        "Prijevoz, špedicija, dostava i logističke usluge.",
      subcategories: [
        { name: "Cestovni prijevoz", slug: "cestovni-prijevoz", count: 89 },
        { name: "Špedicija", slug: "spediciona", count: 34 },
        { name: "Logistika", slug: "logistika", count: 23 },
        { name: "Skladištenje", slug: "skladistenje", count: 18 },
        { name: "Selidbe", slug: "selidbe", count: 56 },
        { name: "Dostava", slug: "dostava", count: 123 },
        { name: "Kurirske usluge", slug: "kurirske-usluge", count: 89 },
        { name: "Poštanske usluge", slug: "postanske-usluge", count: 12 },
      ],
    },
    "zastita-i-sigurnost": {
      name: "Zaštita i sigurnost",
      description:
        "Zaštitarske firme, alarmi, kamere i sigurnosni sistemi.",
      subcategories: [
        { name: "Zaštitarske firme", slug: "zastitarske-tvrtke", count: 56 },
        { name: "Alarmni sistemi", slug: "alarmni-sistemi2", count: 34 },
        { name: "Video nadzor", slug: "video-nadzor", count: 45 },
        { name: "Kontrola pristupa", slug: "kontrola-pristupa", count: 23 },
        { name: "Vatrodojavni sistemi", slug: "vatrodojavni-sistemi", count: 18 },
        { name: "Čišćenje", slug: "ciscenje", count: 123 },
        { name: "Održavanje", slug: "odrzavanje", count: 89 },
        { name: "Vrtlarstvo", slug: "vrtlarstvo", count: 67 },
        { name: "Dezinfekcija", slug: "dezinfekcija", count: 23 },
      ],
    },
    ljubimci: {
      name: "Ljubimci",
      description:
        "Veterinari, zoo shopovi, šinternice i sve za vaše ljubimce.",
      subcategories: [
        { name: "Veterinarske ambulante", slug: "veterinarske-ambulante", count: 89 },
        { name: "Zoo shopovi", slug: "zoo-shopovi2", count: 56 },
        { name: "Pet shopovi", slug: "pet-shopovi", count: 78 },
        { name: "Šinternice", slug: "sinternice", count: 12 },
        { name: "Azili", slug: "azili", count: 8 },
        { name: "Treninzi pasa", slug: "treninzi-pasa", count: 23 },
        { name: "Šišanje pasa", slug: "sisanje-pasa", count: 34 },
        { name: "Smještaj za pse", slug: "smjestaj-za-pse", count: 18 },
      ],
    },
    ostalo: {
      name: "Ostalo",
      description: "Ostale usluge i firme koje nisu kategorisane.",
      subcategories: [
        { name: "Praonice rublja", slug: "praonice-rublja", count: 56 },
        { name: "Krojači", slug: "krojaci", count: 34 },
        { name: "Postolar", slug: "postolar", count: 23 },
        { name: "Zlatari", slug: "zlatari", count: 45 },
        { name: "Sata", slug: "sata", count: 18 },
        { name: "Grijanje", slug: "grijanje", count: 56 },
        { name: "Klimatizacija", slug: "klimatizacija", count: 67 },
        { name: "Solarni paneli", slug: "solarni-paneli", count: 23 },
        { name: "Rasvjeta", slug: "rasvjeta", count: 34 },
      ],
    },
  };

  return categories[slug] || null;
};

export function generateStaticParams() {
  return [
    { slug: "hrana-i-pice" },
    { slug: "trgovine" },
    { slug: "automobilizam" },
    { slug: "gradjevinarstvo" },
    { slug: "nekretnine" },
    { slug: "zdravlje" },
    { slug: "obrazovanje" },
    { slug: "usluge" },
    { slug: "frizerski-saloni" },
    { slug: "tehnologija" },
    { slug: "finansije" },
    { slug: "putovanja" },
    { slug: "sport-i-rekreacija" },
    { slug: "kultura-i-zabava" },
    { slug: "smjestaj" },
    { slug: "transport" },
    { slug: "zastita-i-sigurnost" },
    { slug: "ljubimci" },
    { slug: "ostalo" },
  ];
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return { title: "Kategorija nije pronađena | Ocjeni.ba" };
  }
  return {
    title: `${category.name} - Firme i recenzije | Ocjeni.ba`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Ocjeni.ba`,
      description: category.description,
      url: `https://ocijeni-ba-redesign.vercel.app/kategorije/${params.slug}`,
      siteName: "ocjeni.ba",
      locale: "bs_BA",
      type: "website",
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    notFound();
  }
  return <CategoryPageClient params={params} category={category} />;
}
