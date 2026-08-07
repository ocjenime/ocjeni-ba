"use client";

import Link from "next/link";
import { Code2, ArrowRight, Copy, Globe, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

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
      <PageHero
        label="Integracije"
        title="Widgeti za web"
        subtitle="Dodajte Ocjeni.ba na svoju web stranicu"
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

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
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
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
            <h3 className="font-semibold text-foreground">Primjer koda za ugradnju</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
              <span className="text-xs font-medium text-foreground/50">HTML</span>
              <button className="text-foreground/50 transition-colors hover:text-foreground">
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
              <h4 className="font-semibold text-foreground">{feature.title}</h4>
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
            <h3 className="text-xl font-semibold text-foreground">Spremni za početak?</h3>
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
