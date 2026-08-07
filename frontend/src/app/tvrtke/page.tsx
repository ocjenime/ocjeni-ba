"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Building2,
  Star,
  MapPin,
  CheckCircle,
  ArrowRight,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

const businesses = [
  {
    name: "Pekara Bosna",
    slug: "pekara-bosna",
    rating: 4.8,
    reviews: 456,
    category: "Hrana i piće",
    city: "Sarajevo",
    verified: true,
    description: "Tradicionalna pekara s najboljim somunom i burekom u Sarajevu.",
  },
  {
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.9,
    reviews: 203,
    category: "Frizeri",
    city: "Mostar",
    verified: true,
    description: "Modni frizerski salon s vrhunskim uslugama stiliziranja.",
  },
  {
    name: "Restoran Kod Braće",
    slug: "restoran-kod-brace",
    rating: 4.7,
    reviews: 267,
    category: "Restorani",
    city: "Bihać",
    verified: true,
    description: "Tradicionalna bosanska kuhinja u srcu Bihaća.",
  },
  {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviews: 81,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    verified: true,
    description: "Profesionalne građevinske usluge s višegodišnjim iskustvom.",
  },
  {
    name: "Auto Servis Meridian",
    slug: "auto-servis-meridian",
    rating: 4.5,
    reviews: 127,
    category: "Automehaničari",
    city: "Tuzla",
    verified: true,
    description: "Kompletni auto servis — dijagnostika, popravke, redovni servis.",
  },
  {
    name: "Apoteka Zdravlje",
    slug: "apoteka-zdravlje",
    rating: 4.8,
    reviews: 178,
    category: "Zdravlje",
    city: "Zenica",
    verified: true,
    description: "Moderna apoteka s širokim asortimanom lijekova i suplemenata.",
  },
  {
    name: "Caffe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviews: 318,
    category: "Kafići",
    city: "Velika Kladuša",
    verified: true,
    description: "Omiljeni kafić s odličnom atmosferom i domaćom kafom.",
  },
  {
    name: "IT Centar Digital",
    slug: "it-centar-digital",
    rating: 4.6,
    reviews: 89,
    category: "IT i Tech",
    city: "Sarajevo",
    verified: false,
    description: "Prodavnica računara, opreme i IT usluga po pristupačnim cijenama.",
  },
];

export default function TvrtkePage() {
  const [search, setSearch] = useState("");

  const filtered = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Directorij"
        title="Sve firme"
        subtitle="Pretražite sve verificirane firme u Bosni i Hercegovini. Pronađite najbolje ocijenjene pružaoci usluga."
        backgroundImage="/images/hero-bg.svg"
      />

      {/* Search */}
      <section className="py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <div className="flex flex-1 items-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors focus-within:border-emerald-400/50">
              <Search className="ml-4 h-5 w-5 text-foreground/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pretražite firme po imenu, kategoriji ili gradu..."
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-foreground/40"
              />
            </div>
            <button className="rounded-xl border border-white/10 bg-white/5 p-4 text-foreground/70 transition-colors hover:bg-white/10">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Business listings */}
      <section className="py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-6">
            <p className="text-sm text-foreground/50">
              Prikazano {filtered.length} firmi
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((biz, index) => (
              <motion.div
                key={biz.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/tvrtke/${biz.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-emerald-500/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Building2 className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">
                          {biz.name}
                        </h2>
                        {biz.verified && (
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-sm text-foreground/50">
                        <MapPin className="h-3.5 w-3.5" />
                        {biz.city} · {biz.category}
                      </div>
                      <p className="mt-2 text-sm text-foreground/60">
                        {biz.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4">
                    <span className="rounded-md bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">
                      {biz.rating.toFixed(1)}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(biz.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-white/10 text-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground/50">
                      {biz.reviews} recenzija
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-foreground/30 transition-colors group-hover:text-emerald-400" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-foreground/20" />
              <h3 className="mb-2 text-lg font-semibold text-white">
                Nema rezultata
              </h3>
              <p className="text-foreground/50">
                Pokušajte s drugačijim pojmom za pretragu.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Pridružite se
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Vaša firma nije na listi?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
            Pridružite se hiljadama firmi koje već koriste Ocjeni.ba. Potpuno
            besplatno.
          </p>
          <Link href="/tvrtke/prijava" className="btn-primary mt-6">
            Prijavite firmu besplatno
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
