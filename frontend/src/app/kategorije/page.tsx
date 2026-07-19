import { Metadata } from "next";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { FBIH_CITIES } from "@/lib/constants";

const categories = [
  {
    name: "Hrana i piće",
    slug: "hrana-i-pice",
    description: "Restorani, kafići, pekare i drugi ugostiteljski objekti",
    emoji: "\uD83C\uDF5C",
    count: 456,
    subcategories: [
      { name: "Restorani", slug: "restorani", count: 245 },
      { name: "Kafići", slug: "kafici", count: 189 },
      { name: "Pekare", slug: "pekare", count: 78 },
      { name: "Picerije", slug: "picerije", count: 56 },
      { name: "Ćevabdžinice", slug: "cevabdzinice", count: 123 },
      { name: "Buregdžinice", slug: "buregdzinice", count: 67 },
      { name: "Fast food", slug: "fast-food", count: 134 },
      { name: "Barovi", slug: "barovi", count: 167 },
      { name: "Klubovi", slug: "klubovi", count: 89 },
    ],
  },
  {
    name: "Trgovine",
    slug: "trgovine",
    description: "Supermarketi, tržni centri, specijalizirane trgovine",
    emoji: "\uD83D\uDED2",
    count: 312,
    subcategories: [
      { name: "Supermarketi", slug: "supermarketi", count: 89 },
      { name: "Tržni centri", slug: "trzni-centri", count: 23 },
      { name: "Mesnice", slug: "mesnice", count: 89 },
      { name: "Prodavnice odjeće", slug: "prodavnice-odjece", count: 123 },
      { name: "Elektronika", slug: "elektronika", count: 56 },
      { name: "Namještaj", slug: "namjestaj", count: 45 },
      { name: "Apotheke", slug: "apotheke", count: 156 },
    ],
  },
  {
    name: "Automobilizam",
    slug: "automobilizam",
    description: "Automehaničari, autopraonice, auto dijelovi",
    emoji: "\uD83D\uDE97",
    count: 189,
    subcategories: [
      { name: "Automehaničari", slug: "automehanicari", count: 189 },
      { name: "Autopraonice", slug: "autopraonice", count: 123 },
      { name: "Autodijelovi", slug: "autodijelovi", count: 78 },
      { name: "Auto servisi", slug: "auto-servisi", count: 156 },
      { name: "Vulkanizeri", slug: "vulkanizeri", count: 67 },
    ],
  },
  {
    name: "Građevinarstvo",
    slug: "gradjevinarstvo",
    description: "Građevinske firme, projektanti, nadzor",
    emoji: "\uD83C\uDFD7\uFE0F",
    count: 156,
    subcategories: [
      { name: "Građevinske firme", slug: "gradjevinske-firme", count: 156 },
      { name: "Projektanti", slug: "projektanti", count: 56 },
      { name: "Zidari", slug: "zidari", count: 89 },
      { name: "Keramičari", slug: "keramicari", count: 67 },
      { name: "Vodoinstalateri", slug: "vodoinstalateri", count: 89 },
      { name: "Električari", slug: "elektricari", count: 112 },
    ],
  },
  {
    name: "Nekretnine",
    slug: "nekretnine",
    description: "Agencije za nekretnine, procjena, upravljanje",
    emoji: "\uD83C\uDFE0",
    count: 112,
    subcategories: [
      { name: "Agencije za nekretnine", slug: "agencije-za-nekretnine", count: 112 },
      { name: "Arhitekti", slug: "arhitekti", count: 56 },
      { name: "Dizajn interijera", slug: "dizajn-interijera", count: 45 },
    ],
  },
  {
    name: "Zdravlje",
    slug: "zdravlje",
    description: "Ljekari, stomatolozi, apoteke, fitness centri",
    emoji: "\uD83C\uDFE5",
    count: 234,
    subcategories: [
      { name: "Ljekari", slug: "ljekari", count: 189 },
      { name: "Stomatolozi", slug: "stomatolozi", count: 156 },
      { name: "Apoteke", slug: "apoteke", count: 234 },
      { name: "Fitness centri", slug: "fitness-centri", count: 89 },
      { name: "Teretane", slug: "teretane", count: 112 },
      { name: "Masaže", slug: "masaze", count: 78 },
    ],
  },
  {
    name: "Obrazovanje",
    slug: "obrazovanje",
    description: "Škole, fakulteti, kursevi, instruktori",
    emoji: "\uD83C\uDF93",
    count: 134,
    subcategories: [
      { name: "Kursevi jezika", slug: "kursevi-jezika", count: 67 },
      { name: "Instrukcije", slug: "instrukcije", count: 89 },
      { name: "Muzičke škole", slug: "muzicke-skole", count: 23 },
    ],
  },
  {
    name: "Usluge",
    slug: "usluge",
    description: "Profesionalne usluge, savjetovanje, pravne usluge",
    emoji: "\uD83D\uDCBC",
    count: 167,
    subcategories: [
      { name: "Pravne usluge", slug: "pravne-usluge", count: 89 },
      { name: "Knjigovođe", slug: "knjigovode", count: 123 },
      { name: "IT usluge", slug: "it-usluge", count: 78 },
      { name: "Fotografija", slug: "fotografija", count: 89 },
    ],
  },
  {
    name: "Frizerski saloni",
    slug: "frizerski-saloni",
    description: "Frizeri, kozmetičari, salon ljepote",
    emoji: "\u2702\uFE0F",
    count: 143,
    subcategories: [
      { name: "Frizerski saloni", slug: "frizerski", count: 189 },
      { name: "Kozmetički saloni", slug: "kozmeticki", count: 123 },
      { name: "Manikira", slug: "manikira", count: 89 },
    ],
  },
  {
    name: "Tehnologija",
    slug: "tehnologija",
    description: "IT tvrtke, servisi, web razvoj, software",
    emoji: "\uD83D\uDCBB",
    count: 89,
    subcategories: [
      { name: "IT tvrtke", slug: "it-tvrtke", count: 89 },
      { name: "Web dizajn", slug: "web-dizajn", count: 56 },
      { name: "Servisi računara", slug: "servisi-racunara", count: 123 },
    ],
  },
  {
    name: "Putovanja",
    slug: "putovanja",
    description: "Agencije za putovanja, hoteli, apartmani",
    emoji: "\u2708\uFE0F",
    count: 98,
    subcategories: [
      { name: "Hoteli", slug: "hoteli", count: 123 },
      { name: "Apartmani", slug: "apartmani", count: 234 },
      { name: "Rent-a-car", slug: "rent-a-car", count: 56 },
      { name: "Taxi usluge", slug: "taxi-usluge", count: 189 },
    ],
  },
  {
    name: "Sport i rekreacija",
    slug: "sport-i-rekreacija",
    description: "Sportski centri, teretane, rekreacija",
    emoji: "\u26BD",
    count: 67,
    subcategories: [
      { name: "Sportski centri", slug: "sportski-centri", count: 56 },
      { name: "Bazeni", slug: "bazeni", count: 34 },
      { name: "Planinarenje", slug: "planinarenje", count: 45 },
    ],
  },
  {
    name: "Kultura i zabava",
    slug: "kultura-i-zabava",
    description: "Kino, pozorište, muzeji, koncerti",
    emoji: "\uD83C\uDFAC",
    count: 45,
    subcategories: [
      { name: "Kina", slug: "kina", count: 23 },
      { name: "Pozorišta", slug: "pozorista", count: 12 },
      { name: "Galerije", slug: "galerije", count: 34 },
    ],
  },
  {
    name: "Smještaj",
    slug: "smjestaj",
    description: "Hoteli, hosteli, apartmani, moteli",
    emoji: "\uD83C\uDFE8",
    count: 156,
    subcategories: [
      { name: "Hoteli", slug: "hoteli-smjestaj", count: 123 },
      { name: "Apartmani", slug: "apartmani-smjestaj", count: 234 },
      { name: "Seoska domaćinstva", slug: "seoska-domacinstva", count: 34 },
    ],
  },
  {
    name: "Transport",
    slug: "transport",
    description: "Prijevoz, špedicija, dostava",
    emoji: "\uD83D\uDECE",
    count: 78,
    subcategories: [
      { name: "Cestovni prijevoz", slug: "cestovni-prijevoz", count: 89 },
      { name: "Dostava", slug: "dostava", count: 123 },
      { name: "Selidbe", slug: "selidbe", count: 56 },
    ],
  },
  {
    name: "Zaštita i sigurnost",
    slug: "zastita-i-sigurnost",
    description: "Zaštitarske tvrtke, alarmi, kamere",
    emoji: "\uD83D\uDEE1\uFE0F",
    count: 34,
    subcategories: [
      { name: "Zaštitarske tvrtke", slug: "zastitarske-tvrtke", count: 56 },
      { name: "Čišćenje", slug: "ciscenje", count: 123 },
      { name: "Vrtlarstvo", slug: "vrtlarstvo", count: 67 },
    ],
  },
  {
    name: "Ljubimci",
    slug: "ljubimci",
    description: "Veterinari, zoo shopovi, šinternice",
    emoji: "\uD83D\uDC3E",
    count: 45,
    subcategories: [
      { name: "Veterinarske ambulante", slug: "veterinarske", count: 89 },
      { name: "Pet shopovi", slug: "pet-shopovi", count: 78 },
    ],
  },
  {
    name: "Ostalo",
    slug: "ostalo",
    description: "Ostale usluge i tvrtke",
    emoji: "\u2753",
    count: 56,
    subcategories: [
      { name: "Praonice rublja", slug: "praonice-rublja", count: 56 },
      { name: "Zlatari", slug: "zlatari", count: 45 },
      { name: "Grijanje", slug: "grijanje", count: 56 },
    ],
  },
];

export const metadata: Metadata = {
  title: "Kategorije | Ocjeni.ba",
  description:
    "Istražite sve kategorije tvrtki u Federaciji Bosne i Hercegovine.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-midnight-950">
      {/* Section header */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="badge">{categories.length} kategorija</span>
          <h1 className="text-3xl font-black text-white mt-4">
            Sve kategorije
          </h1>
          <p className="text-midnight-400 mt-3 max-w-2xl mx-auto">
            Istražite {categories.length} kategorija i pronađite najbolje
            tvrtke u Federaciji BiH
          </p>
        </div>
      </div>

      {/* Search/filter bar */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="bg-midnight-900/50 border border-midnight-800/50 rounded-2xl p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-midnight-950 border border-midnight-800/50 rounded-xl px-4">
              <Search className="w-4 h-4 text-midnight-500" />
              <input
                type="text"
                placeholder="Pretraži kategorije..."
                className="flex-1 bg-transparent px-2 py-3 text-sm text-white placeholder:text-midnight-500 outline-none"
              />
            </div>
            <select className="bg-midnight-950 border border-midnight-800/50 rounded-xl px-4 py-3 text-sm text-midnight-300 outline-none appearance-none cursor-pointer">
              <option value="">Svi gradovi</option>
              {FBIH_CITIES.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category list */}
      <div className="max-w-5xl mx-auto px-4 space-y-3 pb-16">
        {categories.map((cat) => (
          <details
            key={cat.slug}
            className="group bg-midnight-900/40 border border-midnight-800/40 rounded-xl hover:border-midnight-700/60 transition-all"
          >
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/kategorije/${cat.slug}`}
                      className="font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <span className="badge">{cat.count} tvrtki</span>
                  </div>
                  <div className="text-sm text-midnight-400 mt-0.5">
                    {cat.description}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-midnight-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-5 pb-5 pt-2 border-t border-midnight-800/30">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {cat.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/kategorije/${cat.slug}/${sub.slug}`}
                    className="bg-midnight-800/50 text-midnight-300 hover:text-amber-400 hover:bg-midnight-700/50 px-4 py-2 rounded-lg text-sm border border-midnight-700/30 transition-colors text-center"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* Bottom cities section */}
      <div className="py-16 section-dark">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-6">
            Gradovi Federacije BiH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {FBIH_CITIES.slice(0, 30).map((city) => (
              <Link
                key={city.name}
                href={`/gradovi/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="card p-4 hover:border-amber-500/30 transition-all group"
              >
                <span className="font-medium text-white group-hover:text-amber-400 transition-colors">
                  {city.name}
                </span>
                <div className="text-midnight-500 text-xs mt-1">
                  {city.population.toLocaleString("bs")} stanovnika
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/gradovi"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold text-sm mt-6 transition-colors"
          >
            Svi gradovi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Vaša tvrtka još nije evidentirana?
          </h2>
          <p className="text-midnight-400 mb-6">
            Prijavite se besplatno i počnite primati recenzije odmah.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-amber-500 hover:bg-amber-400 text-midnight-950 px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Dodajte tvrtku besplatno
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
