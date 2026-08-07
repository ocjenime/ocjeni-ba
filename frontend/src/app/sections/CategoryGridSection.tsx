"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Star,
  Utensils,
  Bed,
  Sparkles,
  Car,
  Hammer,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { categories, Category, IconSlug } from "@/app/data/categories";

const iconMap: Record<IconSlug, LucideIcon> = {
  utensils: Utensils,
  "utensils-crossed": Utensils,
  bed: Bed,
  "bed-double": Bed,
  sparkles: Sparkles,
  heart: Sparkles,
  car: Car,
  wrench: Car,
  hammer: Hammer,
  home: Hammer,
  cpu: Cpu,
  monitor: Cpu,
};

function CategoryIcon({ icon }: { icon: IconSlug }) {
  const Icon = iconMap[icon];
  return <Icon className="h-7 w-7 text-emerald-400 transition-colors duration-300" />;
}

export default function CategoryGridSection() {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <>
      <section
        id="kategorije"
        className="relative scroll-mt-24 px-6 py-24 lg:px-8"
        aria-labelledby="kategorije-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Kategorije
            </span>
            <h2
              id="kategorije-heading"
              className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Pronađi uslugu po{" "}
              <span className="gradient-text">svom izboru</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
              Od restorana do auto servisa — sve provjereno i ocijenjeno od
              strane stvarnih korisnika.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.article
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative cursor-pointer"
                onClick={() => setSelected(category)}
                tabIndex={0}
                role="button"
                aria-label={`Pogledaj kategoriju ${category.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(category);
                  }
                }}
              >
                <div className="animated-border shimmer glow-ring relative flex h-[420px] flex-col overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute left-4 top-4 z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-black/40 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 dark:group-hover:border-emerald-500/30 dark:group-hover:bg-emerald-500/10">
                      <CategoryIcon icon={category.icon} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-widest text-emerald-400">
                        {category.count.toLocaleString("bs")} tvrtki
                      </span>
                      <span className="flex items-center gap-1 text-xs text-amber-400">
                        <Star className="h-3 w-3 fill-amber-400" />
                        <span className="text-foreground">4.7</span>
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {category.description}
                    </p>

                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {category.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs text-foreground/80"
                        >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm dark:bg-black/80"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0a0a0c]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-white/10"
                aria-label="Zatvori detalje kategorije"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0a0a0c]" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-medium uppercase tracking-widest text-emerald-400">
                  {selected.count.toLocaleString("bs")} tvrtki
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                    <CategoryIcon icon={selected.icon} />
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-foreground sm:text-4xl">
                    {selected.name}
                  </h3>
                </div>
                <p className="mt-3 text-foreground/70">{selected.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selected.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-xl border border-foreground/10 bg-foreground/5 p-4 text-center"
                    >
                      <span className="text-sm font-medium text-foreground/90">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div>
                    <span className="text-sm text-foreground/50">
                      Prosječna ocjena
                    </span>
                    <p className="text-2xl font-semibold text-foreground">
                      <span className="text-amber-400">★</span> 4.7
                    </p>
                  </div>
                  <Link
                    href={`/kategorije/${selected.slug}`}
                    onClick={() => setSelected(null)}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Pogledaj tvrtke
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
