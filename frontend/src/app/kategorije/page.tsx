"use client";

import Link from "next/link";
import {
  Search,
  ChevronRight,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { FBIH_CITIES } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";

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
    description: "Supermarketi, tržni centri, specijalizovane trgovine",
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
      { name: "Dizajn enterijera", slug: "dizajn-enterijera", count: 45 },
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
    description: "IT firme, servisi, web razvoj, software",
    count: 89,
    subcategories: [
      { name: "IT firme", slug: "it-tvrtke", count: 89 },
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
    description: "Zaštitarske firme, alarmi, kamere",
    count: 34,
    subcategories: [
      { name: "Zaštitarske firme", slug: "zastitarske-tvrtke", count: 56 },
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
    description: "Ostale usluge i firme",
    count: 56,
    subcategories: [
      { name: "Praonice rublja", slug: "praonice-rublja", count: 56 },
      { name: "Zlatari", slug: "zlatari", count: 45 },
      { name: "Grijanje", slug: "grijanje", count: 56 },
    ],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Istražite"
        title="Kategorije firmi"
        subtitle={`Istražite ${categories.length} kategorija i pronađite najbolje firme u Federaciji BiH`}
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Pretraga */}
      <section className="py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-4">
                <Search className="h-4 w-4 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Pretraži kategorije..."
                  className="flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-foreground/40"
                />
              </div>
              <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/70 outline-none">
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
      </section>

      {/* Kategorije */}
      <section className="py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="space-y-3">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:border-emerald-500/30 hover:bg-white/[0.03]"
              >
                <Link
                  href={`/kategorije/${cat.slug}`}
                  className="flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Building2 className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white transition-colors group-hover:text-emerald-400">
                        {cat.name}
                      </div>
                      <div className="mt-0.5 text-sm text-foreground/50">
                        {cat.description}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden text-sm text-foreground/50 sm:block">
                      {cat.count} firmi
                    </span>
                    <ChevronRight className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-emerald-400" />
                  </div>
                </Link>

                <div className="flex flex-wrap gap-2 px-5 pb-4">
                  {cat.subcategories.slice(0, 6).map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/kategorije/${cat.slug}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/60 transition-colors hover:border-emerald-500/30 hover:text-emerald-400"
                    >
                      {sub.name}
                    </Link>
                  ))}
                  {cat.subcategories.length > 6 && (
                    <span className="px-3 py-1.5 text-xs text-emerald-400">
                      +{cat.subcategories.length - 6} više
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradovi */}
      <section className="border-y border-white/5 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Prema gradu
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Gradovi Federacije BiH
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {FBIH_CITIES.slice(0, 30).map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.01 }}
              >
                <Link
                  href={`/gradovi/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm transition-all hover:border-emerald-500/30 hover:bg-white/[0.04]"
                >
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span className="truncate font-medium text-white transition-colors group-hover:text-emerald-400">
                    {city.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link
            href="/gradovi"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Svi gradovi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Pridružite se
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Vaša firma nije na listi?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/60">
            Prijavite se besplatno i počnite primati recenzije odmah.
          </p>
          <Link href="/tvrtke/prijava" className="btn-primary mt-6">
            Dodajte firmu besplatno
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
