"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = search.trim();
    if (query) {
      router.push(`/tvrtke?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/tvrtke");
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* SVG background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80')" }}
        role="img"
        aria-label="Gradska ulica noću"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Animated aurora blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="aurora-blob absolute h-[50vh] w-[50vh] opacity-60" />
        <div
          className="aurora-blob absolute h-[40vh] w-[40vh] opacity-40"
          style={{ animationDelay: "-4s", animationDuration: "16s" }}
        />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-foreground/80">
            #1 platforma za recenzije u BiH
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Pronađi.
          <br />
          <span className="gradient-text">Ocijeni.</span>
          <br />
          Pouzdano.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl"
        >
          Najveća baza recenzija tvrtki u Bosni i Hercegovini. Pronađite
          provjerene usluge, pročitajte iskustva drugih i podijelite svoje.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pretraži tvrtke, kategorije, gradove..."
              className="h-14 w-full rounded-full border border-foreground/15 bg-foreground/5 px-6 pr-12 text-foreground placeholder-foreground/40 outline-none backdrop-blur-sm transition-colors focus:border-emerald-400/50"
            />
            <Search className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
          </div>
          <button
            type="submit"
            className="animated-border group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-8 text-base font-semibold text-white shadow-xl shadow-green-500/25 transition-transform hover:scale-105"
          >
            <span className="relative z-10">Pretraži</span>
          </button>
          <Link
            href="/kategorije"
            className="animated-border group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-foreground/5 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-foreground/10"
          >
            <span className="relative z-10">Istraži kategorije</span>
          </Link>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-foreground/50"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★★★★★</span> 4.8/5 prosječna ocjena
          </span>
          <span className="hidden h-4 w-px bg-foreground/10 sm:inline-block" />
          <span className="hidden sm:inline">10.000+ tvrtki</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/20 p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
