"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { features } from "@/app/data/features";

export default function FeatureListSection() {
  return (
    <section
      id="prednosti"
      className="relative scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="prednosti-heading"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-green-400">
            Zašto ocijeni.ba
          </span>
          <h2
            id="prednosti-heading"
            className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Recenzije koje se{" "}
            <span className="gradient-text">mogu vjerovati</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Gradimo transparentnost između korisnika i tvrtki. Bez lažnih
            ocjena, bez skrivenih agendâ.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02] p-8 transition-all duration-300 hover:border-green-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-green-500/10 to-transparent opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-emerald-400 shadow-inner shadow-green-500/10">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {feature.description}
              </p>
              <Link
                href="/za-tvrtke"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
              >
                <span>Saznaj više</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
