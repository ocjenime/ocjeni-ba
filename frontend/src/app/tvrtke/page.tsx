"use client";

import { useState, useMemo } from "react";
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
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { businesses, getAllCities, getAllCategorySlugs } from "@/app/data/businesses";

export default function TvrtkePage() {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const cities = useMemo(() => getAllCities(), []);
  const categorySlugs = useMemo(() => getAllCategorySlugs(), []);
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    businesses.forEach((b) => map.set(b.categorySlug, b.category));
    return Array.from(map.entries());
  }, []);

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q);
      const matchesCity = !cityFilter || b.city === cityFilter;
      const matchesCategory = !categoryFilter || b.categorySlug === categoryFilter;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [search, cityFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Directorij"
        title="Sve firme"
        subtitle="Pretražite sve verificirane firme u Bosni i Hercegovini. Pronađite najbolje ocijenjene pružaoci usluga."
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Search */}
      <section className="py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <div className="flex flex-1 items-center overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5 transition-colors focus-within:border-emerald-400/50">
              <Search className="ml-4 h-5 w-5 text-foreground/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pretražite firme po imenu, kategoriji ili gradu..."
                className="w-full bg-transparent px-4 py-4 text-foreground outline-none placeholder:text-foreground/40"
              />
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`rounded-xl border p-4 transition-colors ${
                showFilters
                  ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-400"
                  : "border-foreground/10 bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
              aria-expanded={showFilters}
              aria-controls="business-filters"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>

          {showFilters && (
            <div
              id="business-filters"
              className="mx-auto mt-4 grid max-w-2xl gap-3 rounded-xl border border-foreground/10 bg-foreground/5 p-4 sm:grid-cols-2"
            >
              <div>
                <label htmlFor="city-filter" className="mb-1 block text-xs font-medium text-foreground/60">
                  Grad
                </label>
                <select
                  id="city-filter"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full rounded-lg border border-foreground/10 bg-background px-3 py-2 text-sm text-foreground outline-none"
                >
                  <option value="">Svi gradovi</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="category-filter" className="mb-1 block text-xs font-medium text-foreground/60">
                  Kategorija
                </label>
                <select
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full rounded-lg border border-foreground/10 bg-background px-3 py-2 text-sm text-foreground outline-none"
                >
                  <option value="">Sve kategorije</option>
                  {categories.map(([slug, name]) => (
                    <option key={slug} value={slug}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Business listings */}
      <section className="py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-foreground/50">
              Prikazano {filtered.length} firmi
            </p>
            {(cityFilter || categoryFilter) && (
              <button
                onClick={() => {
                  setCityFilter("");
                  setCategoryFilter("");
                }}
                className="text-sm text-emerald-400 hover:underline"
              >
                Očisti filtere
              </button>
            )}
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
                  className="group flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition-all hover:border-emerald-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                      {biz.logoUrl ? (
                        <Image
                          src={biz.logoUrl}
                          alt={biz.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-emerald-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-lg font-semibold text-foreground transition-colors group-hover:text-emerald-400">
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
                  <div className="mt-5 flex items-center gap-2 border-t border-foreground/5 pt-4">
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
                              : "fill-foreground/10 text-foreground/10"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground/50">
                      {biz.reviewCount} recenzija
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
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Nema rezultata
              </h3>
              <p className="text-foreground/50">
                Pokušajte s drugačijim pojmom za pretragu ili promijenite filtere.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 py-16 dark:border-white/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Pridružite se
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
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
