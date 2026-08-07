"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  ChevronRight,
  Building2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import {
  getBusinessesByCategory,
  getAllCities,
  BusinessData,
} from "@/app/data/businesses";

interface CategoryPageClientProps {
  params: { slug: string };
  category: {
    name: string;
    description: string;
    subcategories: { name: string; slug: string; count: number }[];
  };
}

function BusinessCard({ biz, index }: { biz: BusinessData; index: number }) {
  return (
    <SlideUp delay={index * 0.05}>
      <Link
        href={`/tvrtke/${biz.slug}`}
        className="group flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-5 transition-all hover:border-emerald-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
      >
        <div className="flex items-start gap-4">
          <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
            {biz.logoUrl ? (
              <Image
                src={biz.logoUrl}
                alt={biz.name}
                fill
                sizes="56px"
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <Building2 className="h-7 w-7 text-emerald-400" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-emerald-400">
                {biz.name}
              </h3>
              {biz.verified && (
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
              )}
            </div>
            <p className="text-sm text-foreground/50">{biz.city}</p>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/60">
              {biz.description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-foreground/5 pt-3">
          <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">
            {biz.rating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= Math.round(biz.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-foreground/10 text-foreground/10"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-foreground/50">{biz.reviewCount} recenzija</span>
          <ArrowRight className="ml-auto h-4 w-4 text-foreground/30 transition-colors group-hover:text-emerald-400" />
        </div>
      </Link>
    </SlideUp>
  );
}

export default function CategoryPageClient({
  params,
  category,
}: CategoryPageClientProps) {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [subcategoryFilter, setSubcategoryFilter] = useState("");

  const categoryBusinesses = useMemo(
    () => getBusinessesByCategory(params.slug),
    [params.slug]
  );

  const cities = useMemo(() => getAllCities(), []);

  const filteredBusinesses = useMemo(() => {
    return categoryBusinesses.filter((b) => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q);
      const matchesCity = !cityFilter || b.city === cityFilter;
      const matchesSubcategory =
        !subcategoryFilter || b.subcategory === subcategoryFilter;
      return matchesSearch && matchesCity && matchesSubcategory;
    });
  }, [categoryBusinesses, search, cityFilter, subcategoryFilter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-black/5 py-4 dark:border-white/5">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground/50">
            <Link href="/" className="transition-colors hover:text-emerald-400">
              Početna
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/kategorije"
              className="transition-colors hover:text-emerald-400"
            >
              Kategorije
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{category.name}</span>
          </nav>
        </div>
      </section>

      <PageHero
        label="Kategorija"
        title={category.name}
        subtitle={category.description}
      />

      {/* Pretraga i filteri */}
      <section className="container mx-auto px-4 -mt-6">
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-4 md:p-6 dark:border-white/5 dark:bg-white/[0.02]">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={`Pretraži ${category.name.toLowerCase()}...`}
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/5 py-3 pl-11 pr-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-emerald-400/50"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground/70 outline-none"
                >
                  <option value="">Svi gradovi</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  value={subcategoryFilter}
                  onChange={(e) => setSubcategoryFilter(e.target.value)}
                  className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground/70 outline-none"
                >
                  <option value="">Sve podkategorije</option>
                  {category.subcategories.map((sub) => (
                    <option key={sub.slug} value={sub.name}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {(cityFilter || subcategoryFilter || search) && (
              <div className="mt-4 flex items-center justify-between border-t border-foreground/5 pt-3">
                <p className="text-sm text-foreground/50">
                  Prikazano {filteredBusinesses.length} firmi
                </p>
                <button
                  onClick={() => {
                    setCityFilter("");
                    setSubcategoryFilter("");
                    setSearch("");
                  }}
                  className="text-sm text-emerald-400 hover:underline"
                >
                  Očisti filtere
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Firme u kategoriji */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Firme
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            {category.name} u BiH
          </h2>
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBusinesses.map((biz, index) => (
              <BusinessCard key={biz.slug} biz={biz} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-10 text-center dark:border-white/5 dark:bg-white/[0.02]">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-foreground/30" />
            <h3 className="text-lg font-semibold text-foreground">
              Nema rezultata
            </h3>
            <p className="mx-auto mt-2 max-w-md text-foreground/60">
              Pokušajte promijeniti filtere ili pretragu.
            </p>
            <button
              onClick={() => {
                setCityFilter("");
                setSubcategoryFilter("");
                setSearch("");
              }}
              className="btn-primary mt-6"
            >
              Očisti filtere
            </button>
          </div>
        )}
      </section>

      {/* Podkategorije */}
      <section className="border-y border-black/5 py-16 dark:border-white/5">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Podkategorije
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            Pronađite specijalizovane firme
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.subcategories.map((sub, index) => (
              <SlideUp key={sub.slug} delay={index * 0.03}>
                <button
                  onClick={() => setSubcategoryFilter(sub.name)}
                  className="group flex w-full items-center justify-between rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-left transition-all hover:border-emerald-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
                >
                  <div>
                    <h3 className="font-medium text-foreground transition-colors group-hover:text-emerald-400">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-foreground/50">
                      {sub.count} firmi
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-emerald-400" />
                </button>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <SlideUp>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Pridružite se
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              Tražite nešto drugo?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/60">
              Pogledajte sve kategorije ili pretražite po gradu.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/kategorije" className="btn-primary">
                Sve kategorije
              </Link>
              <Link href="/gradovi" className="btn-secondary">
                Prema gradovima
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
