"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Podrška"
        title="Zaboravljena lozinka"
        subtitle="Unesite svoju email adresu i poslat ćemo vam upute za resetovanje"
        backgroundImage="https://source.unsplash.com/featured/2400x1400?password,security"
        minHeight="min-h-[50vh]"
      />

      <div className="relative overflow-hidden px-4 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-blob absolute left-1/4 top-1/4 h-[40vh] w-[40vh] opacity-40" />
          <div
            className="aurora-blob absolute bottom-1/4 right-1/4 h-[35vh] w-[35vh] opacity-30"
            style={{ animationDelay: "-4s", animationDuration: "16s" }}
          />
        </div>

        <div className="mx-auto w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl"
          >
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative z-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-4 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Email poslan</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  Ako postoji račun sa ovom email adresom, primili ste upute za
                  resetovanje lozinke.
                </p>
                <Link
                  href="/tvrtke/login"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Natrag na prijavu
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="label">Email adresa</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input pl-11"
                      placeholder="vas@email.ba"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="animated-border mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.01]"
                >
                  Pošalji upute
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}

            {!submitted && (
              <div className="mt-6 border-t border-white/5 pt-6 text-center">
                <Link
                  href="/tvrtke/login"
                  className="inline-flex items-center gap-1 text-sm text-foreground/50 hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Natrag na prijavu
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
}
