"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { plans } from "@/app/data/plans";
import { cn } from "@/lib/utils";

export default function PlansSection() {
  return (
    <section
      id="paketi"
      className="relative scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="paketi-heading"
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
            Paketi za tvrtke
          </span>
          <h2
            id="paketi-heading"
            className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Istakni svoju{" "}
            <span className="gold-text">tvrtku</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Od besplatnog profila do enterprise rješenja — pronađite paket koji
            odgovara vašem poslovanju.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300",
                plan.featured
                  ? "border-green-500/40 bg-gradient-to-b from-green-500/10 to-transparent shadow-2xl shadow-green-500/10 lg:-mt-4 lg:mb-4"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
              )}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-4 py-1 text-xs font-semibold text-white">
                  Najpopularniji
                </div>
              )}

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/60">{plan.tagline}</p>

              <div className="mt-6">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold text-white">
                  {plan.price.split(" ")[0]}
                </span>
                <span className="text-foreground/50">
                  {" "}
                  {plan.price.split(" ").slice(1).join(" ")}
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-xs",
                        plan.featured
                          ? "border-emerald-400/40 text-emerald-400"
                          : "border-white/20 text-white/70"
                      )}
                    >
                      ✓
                    </span>
                    <span className="text-foreground/80">{perk}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.id === "enterprise" ? "/kontakt" : "/cjenik"}
                className={cn(
                  "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-transform hover:scale-[1.02]",
                  plan.featured
                    ? "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white shadow-lg shadow-green-500/25"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                )}
              >
                {plan.id === "enterprise" ? "Kontaktirajte nas" : "Odaberi paket"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
