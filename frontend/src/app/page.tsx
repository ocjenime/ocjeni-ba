"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import {
  Search,
  Star,
  Shield,
  Building2,
  MessageSquare,
  ArrowRight,
  MapPin,
  CheckCircle,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const topCategories = [
  { name: "Restorani", slug: "restorani", count: 245, emoji: "🍽" },
  { name: "Kafići", slug: "kafici", count: 189, emoji: "☕" },
  { name: "Trgovine", slug: "trgovine", count: 312, emoji: "🛍" },
  { name: "Automehaničari", slug: "automehanicari", count: 189, emoji: "🔧" },
  { name: "Građevinarstvo", slug: "gradjevinarstvo", count: 156, emoji: "🏗" },
  { name: "Frizeri", slug: "frizerski-saloni", count: 143, emoji: "✂" },
  { name: "Zdravlje", slug: "zdravlje", count: 234, emoji: "💊" },
  { name: "Nekretnine", slug: "nekretnine", count: 112, emoji: "🏠" },
  { name: "IT i Tech", slug: "tehnologija", count: 89, emoji: "💻" },
  { name: "Auto servisi", slug: "automobilizam", count: 189, emoji: "🚗" },
  { name: "Obrazovanje", slug: "obrazovanje", count: 134, emoji: "📚" },
  { name: "Usluge", slug: "usluge", count: 167, emoji: "⚙" },
];

const featuredBusinesses = [
  {
    name: "Pekara Bosna",
    slug: "pekara-bosna",
    rating: 4.8,
    reviews: 456,
    category: "Hrana i piće",
    city: "Sarajevo",
    verified: true,
    badge: "top-rated",
    image: "https://source.unsplash.com/featured/600x400?bakery,bread",
  },
  {
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.9,
    reviews: 203,
    category: "Frizeri",
    city: "Mostar",
    verified: true,
    badge: "top-rated",
    image: "https://source.unsplash.com/featured/600x400?hair,salon",
  },
  {
    name: "Restoran Kod Braće",
    slug: "restoran-kod-brace",
    rating: 4.7,
    reviews: 267,
    category: "Restorani",
    city: "Bihać",
    verified: true,
    badge: "verified",
    image: "https://source.unsplash.com/featured/600x400?restaurant,food",
  },
  {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviews: 81,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    verified: true,
    badge: "top-rated",
    image: "https://source.unsplash.com/featured/600x400?construction,modern",
  },
  {
    name: "Auto Servis Meridian",
    slug: "auto-servis-meridian",
    rating: 4.5,
    reviews: 127,
    category: "Automehaničari",
    city: "Tuzla",
    verified: true,
    badge: "verified",
    image: "https://source.unsplash.com/featured/600x400?car,service",
  },
  {
    name: "Apoteka Zdravlje",
    slug: "apoteka-zdravlje",
    rating: 4.8,
    reviews: 178,
    category: "Zdravlje",
    city: "Zenica",
    verified: true,
    badge: "verified",
    image: "https://source.unsplash.com/featured/600x400?pharmacy,medicine",
  },
];

const stats = [
  { value: "10,000+", label: "Firmi" },
  { value: "500,000+", label: "Recenzija" },
  { value: "50+", label: "Gradova" },
  { value: "4.8", label: "Prosjek" },
];

const testimonials = [
  {
    name: "Mirza K.",
    company: "Restoran Stari Most",
    role: "Vlasnik",
    content: "Otkad koristimo ocijeni.ba, broj naših gostiju se povećao za 40%. Kupci nam dolaze jer vide naše odlične recenzije.",
    rating: 5,
  },
  {
    name: "Amira S.",
    company: "Auto Servis Mehmed",
    role: "Menadžerica",
    content: "Platforma nam je pomogla da shvatimo šta kupci zaista misle o nama. Sada znamo gdje se poboljšati.",
    rating: 5,
  },
  {
    name: "Dragan P.",
    company: "Digital Solutions BiH",
    role: "CEO",
    content: "Kao IT firma, nama je online reputacija ključna. ocijeni.ba nam je pomogao da se istaknemo na tržištu.",
    rating: 5,
  },
];

const features = [
  {
    icon: Shield,
    title: "Provjerene recenzije",
    description: "Svaka ocjena dolazi od stvarnih korisnika. Borimo se protiv lažnih recenzija.",
  },
  {
    icon: Search,
    title: "Lokalna pretraga",
    description: "Pronađite tvrtke po gradu, kategoriji i ocjeni u svojoj blizini.",
  },
  {
    icon: Building2,
    title: "Profili tvrtki",
    description: "Detaljni profili s fotografijama, radnim vremenom i kontaktom.",
  },
  {
    icon: Star,
    title: "Pametne ocjene",
    description: "Ocjene po kategorijama: kvaliteta, cijena, brzina i komunikacija.",
  },
];

function TrustScoreBadge({ rating }: { rating: number }) {
  const getColor = (r: number) => {
    if (r >= 4.5) return "bg-emerald-500";
    if (r >= 3.5) return "bg-emerald-400";
    if (r >= 2.5) return "bg-amber-400";
    if (r >= 1.5) return "bg-orange-400";
    return "bg-red-400";
  };

  return (
    <span
      className={`${getColor(rating)} rounded-md px-2.5 py-1 text-xs font-bold text-white`}
    >
      {rating.toFixed(1)}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/kategorije?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/kategorije");
    }
  };

  const handleBusinessSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://source.unsplash.com/featured/2400x1400?sarajevo,city,night"
            alt="Sarajevo panorama"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="aurora-blob absolute h-[50vh] w-[50vh] opacity-60" />
          <div
            className="aurora-blob absolute h-[40vh] w-[40vh] opacity-40"
            style={{ animationDelay: "-4s", animationDuration: "16s" }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/80">
              Platforma broj 1 za recenzije u BiH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Pronađi. Ocijeni.{" "}
            <span className="gradient-text">Pouzdano.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl"
          >
            Hiljade provjerenih recenzija od stvarnih građana BiH. Vaša odluka
            zaslužuje prave informacije.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-10 max-w-2xl"
          >
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-sm sm:flex-row"
            >
              <div className="relative flex flex-1 items-center px-4">
                <Search className="h-5 w-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Tražite firmu, uslugu ili kategoriju..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-0 bg-transparent px-4 py-3 text-lg text-white outline-none placeholder:text-foreground/40"
                />
              </div>
              <button
                type="submit"
                className="animated-border inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-105 sm:h-auto"
              >
                Pretraži
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {topCategories.slice(0, 5).map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategorije/${cat.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/70 backdrop-blur-sm transition-all hover:border-white/20 hover:text-foreground"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategorije */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Istražite
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Kategorije
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
              Pronađite uslugu po svom izboru — sve provjereno i ocijenjeno.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {topCategories.map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                <Link
                  href={`/kategorije/${cat.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-emerald-500/30 hover:bg-white/[0.04]"
                >
                  <span className="text-3xl">{cat.emoji}</span>
                  <div className="mt-3 font-semibold text-white transition-colors group-hover:text-emerald-400">
                    {cat.name}
                  </div>
                  <div className="mt-1 text-xs text-foreground/40">
                    {cat.count} firmi
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top tvrtke */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Top ocjene
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Najbolje ocijenjene firme
              </h2>
            </div>
            <Link
              href="/tvrtke"
              className="hidden items-center gap-1 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 sm:flex"
            >
              Sve firme <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredBusinesses.map((biz, index) => (
              <motion.div
                key={biz.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/tvrtke/${biz.slug}`}
                  className="animated-border shimmer glow-ring group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.02]"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={biz.image}
                      alt={biz.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Building2 className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate font-semibold text-white transition-colors group-hover:text-emerald-400">
                            {biz.name}
                          </span>
                          {biz.verified && (
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-foreground/50">
                          <MapPin className="h-3 w-3" />
                          {biz.city} · {biz.category}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4">
                      <TrustScoreBadge rating={biz.rating} />
                      <StarRating rating={biz.rating} />
                      <span className="text-sm text-foreground/50">
                        {biz.reviews} recenzija
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Zašto mi
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Recenzije koje se mogu vjerovati
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-green-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400 shadow-inner shadow-green-500/10">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Za tvrtke CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center md:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <Building2 className="h-8 w-8 text-emerald-400" />
              </div>
              <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                Vaša firma zaslužuje vidljivost
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/60">
                10,000+ firmi već koristi ocijeni.ba. Vaša firma može biti
                sljedeća — besplatno.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/tvrtke/prijava" className="btn-primary">
                  Prijavite firmu besplatno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/cjenik" className="btn-secondary">
                  Pogledajte planove
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Bez troškova
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Odgovarajte na recenzije
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Analitika
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Svjedočanstva
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Šta kažu firme koje rastu s nama
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10"
              >
                <div className="mb-4 flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm italic leading-relaxed text-foreground/70">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-foreground/50">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business registration form */}
      <section id="dodaj-tvrtku" className="py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Dodaj tvrtku
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Pridruži se ocijeni.ba
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            {submitted ? (
              <div className="relative z-10 flex flex-col items-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-3xl text-white">
                  <CheckCircle2 />
                </div>
                <h3 className="text-2xl font-semibold text-white">Hvala vam</h3>
                <p className="mt-3 max-w-md text-foreground/70">
                  Primili smo vaš zahtjev. Kontaktirat ćemo vas u roku od 24 sata.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBusinessSubmit} className="relative z-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label">Naziv tvrtke</label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="input"
                      placeholder="npr. Restoran Sarajevo"
                    />
                  </div>
                  <div>
                    <label className="label">Email adresa</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="input"
                      placeholder="info@tvrtka.ba"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">Kategorija</label>
                  <select className="input bg-background">
                    <option value="">Odaberite kategoriju</option>
                    {topCategories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Pošalji zahtjev
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
