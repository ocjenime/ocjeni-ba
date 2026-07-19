import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  Filter,
  ChevronRight,
  Building2,
} from "lucide-react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Ovdje bi se podaci dohvatili iz baze podataka
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
        { name: "Apotheke", slug: "apotheke", count: 156 },
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
    title: `${category.name} | Ocjeni.ba`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Kategorija nije pronađena
          </h1>
          <p className="text-secondary-600 mb-8">
            Tražena kategorija ne postoji ili je premještena.
          </p>
          <Link
            href="/kategorije"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Pogledajte sve kategorije
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-secondary-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-secondary-600">
            <Link href="/" className="hover:text-primary-500 transition-colors">
              Početna
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/kategorije"
              className="hover:text-primary-500 transition-colors"
            >
              Kategorije
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-900 font-medium">
              {category.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero sekcija */}
      <section className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-secondary-200 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Pretraga i filteri */}
      <section className="container mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder={`Pretraži ${category.name.toLowerCase()}...`}
                className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">Svi gradovi</option>
                <option value="sarajevo">Sarajevo</option>
                <option value="banja-luka">Banja Luka</option>
                <option value="tuzla">Tuzla</option>
                <option value="zenica">Zenica</option>
                <option value="mostar">Mostar</option>
                <option value="bijeljina">Bijeljina</option>
              </select>
              <button className="px-4 py-3 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Podkategorije */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Podkategorije
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              href={`/kategorije/${params.slug}/${sub.slug}`}
              className="group flex items-center justify-between p-4 bg-white rounded-xl border border-secondary-100 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <div>
                <h3 className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {sub.name}
                </h3>
                <p className="text-sm text-secondary-500">
                  {sub.count} firmi
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-secondary-400 group-hover:text-primary-500 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Najbolje rangirane firme */}
      <section className="bg-white py-12 border-t border-secondary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Najbolje rangirane firme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-secondary-50 rounded-xl border border-secondary-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary-900">
                      Tvrtka {i}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-secondary-900">
                        {(5 - i * 0.3).toFixed(1)}
                      </span>
                      <span className="text-sm text-secondary-500">
                        ({100 - i * 20} recenzija)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-secondary-500 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span>Sarajevo</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tražite nešto drugo?
          </h2>
          <p className="text-primary-100 mb-6">
            Pogledajte sve kategorije ili pretražite po gradu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kategorije"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Sve kategorije
            </Link>
            <Link
              href="/gradovi"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors border border-primary-400"
            >
              Prema gradovima
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
