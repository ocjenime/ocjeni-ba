"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/app/data/testimonials";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Priče korisnika
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Šta kažu o{" "}
            <span className="gradient-text">ocijeni.ba</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-black/[0.02] p-8 sm:p-12 dark:border-white/5 dark:bg-white/[0.02]"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

              <blockquote className="relative z-10">
                <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
                  {testimonials[active].quote}
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-sm font-semibold text-white">
                    {testimonials[active].author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-foreground">
                      {testimonials[active].author}
                    </cite>
                    <p className="text-sm text-foreground/60">
                      {testimonials[active].role} · {testimonials[active].location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
              aria-label="Prethodna preporuka"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    active === index
                      ? "w-8 bg-gradient-to-r from-emerald-400 to-green-500"
                      : "w-2 bg-foreground/20 hover:bg-foreground/30"
                  )}
                  aria-label={`Idi na preporuku ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
              aria-label="Sljedeća preporuka"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
