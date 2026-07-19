import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Star,
  ChevronRight,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FBIH_CITIES } from "@/lib/constants";

const categories = [
  {
    name: "Hrana i piće",
    slug: "hrana-i-pice",
    description: "Restorani, kafići, pekare i drugi ugostiteljski objekti",
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Kategorije tvrtki
          </h1>
          <p className="text-gray-500 mt-2">
            Istražite {categories.length} kategorija i pronađite najbolje
            tvrtke u Federaciji BiH
          </p>
        </div>
      </div>

      {/* Pretraga */}
      <div className="max-w-5xl mx-auto px-4 -mt-5">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center border border-gray-200 rounded-lg px-4">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Pretraži kategorije..."
                className="flex-1 px-3 py-3 outline-none text-sm"
              />
            </div>
            <select className="px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none">
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

      {/* Kategorije */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="space-y-2">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="group border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all"
            >
              <Link
                href={`/kategorije/${cat.slug}`}
                className="flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">
                      {cat.description}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 hidden sm:block">
                    {cat.count} tvrtki
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </Link>

              {/* Podkategorije - inline */}
              <div className="px-5 pb-4 flex flex-wrap gap-2">
                {cat.subcategories.slice(0, 6).map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/kategorije/${cat.slug}/${sub.slug}`}
                    className="text-xs bg-gray-50 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition-colors border border-gray-100 hover:border-emerald-200"
                  >
                    {sub.name}
                  </Link>
                ))}
                {cat.subcategories.length > 6 && (
                  <span className="text-xs text-emerald-500 px-3 py-1.5">
                    +{cat.subcategories.length - 6} više
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradovi */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Gradovi Federacije BiH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {FBIH_CITIES.slice(0, 30).map((city) => (
              <Link
                key={city.name}
                href={`/gradovi/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all text-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium truncate">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/gradovi"
            className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold text-sm mt-6"
          >
            Svi gradovi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Vaša tvrtka nije na listi?
          </h2>
          <p className="text-gray-500 mb-6">
            Prijavite se besplatno i počnite primati recenzije odmah.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Dodajte tvrtku besplatno
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
