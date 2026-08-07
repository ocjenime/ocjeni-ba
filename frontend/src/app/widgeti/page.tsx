"use client";

import Link from "next/link";
import { Code2, ArrowRight, Copy, Globe, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const widgetCode = `<!-- Ocjeni.ba Widget -->
<div id="ocjeni-widget" data-business="vasa-firma"></div>
<script src="https://ocjeni.ba/widget/embed.js"
  async defer></script>`;

const features = [
  {
    icon: Globe,
    title: "Responzivan",
    description: "Widget se automatski prilagođava svim uređajima",
  },
  {
    icon: Star,
    title: "Prilagodljiv",
    description: "Promijenite boje, stil i veličinu po potrebi",
  },
  {
    icon: CheckCircle,
    title: "Brza instalacija",
    description: "Kopirajte kod i zalijepite na svoju stranicu",
  },
];

export default function WidgetsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Integracije
            </span>
            <div className="mt-4 inline-flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <Code2 className="h-7 w-7 text-emerald-400" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Widgeti za web
              </h1>
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/60">
              Dodajte Ocjeni.ba na svoju web stranicu
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Ugradnja
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Dodajte Ocjeni.ba na svoju web stranicu
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/60">
            Prikažite svoje recenzije direktno na vašoj web stranici. Naši
            widgeti se lako integriraju i podržavaju potpuno prilagođavanje
            izgleda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-2">
            <h3 className="font-semibold text-white">Primjer koda za ugradnju</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="text-xs font-medium text-foreground/50">HTML</span>
              <button className="text-foreground/50 transition-colors hover:text-white">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <pre className="overflow-x-auto p-5 text-sm text-foreground/70">
              <code>{widgetCode}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 grid gap-4 sm:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card"
            >
              <feature.icon className="mb-3 h-6 w-6 text-emerald-400" />
              <h4 className="font-semibold text-white">{feature.title}</h4>
              <p className="mt-1 text-sm text-foreground/50">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-xl font-semibold text-white">Spremni za početak?</h3>
            <p className="mx-auto mt-3 max-w-md text-foreground/70">
              Prijavite svoju firmu i dobijte pristup widgetima i naprednoj
              analitici recenzija.
            </p>
            <Link href="/tvrtke/prijava" className="btn-primary mt-6">
              Prijavite firmu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
