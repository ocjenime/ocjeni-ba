import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Kolačići | Ocjeni.ba",
  description:
    "Politika kolačića platforme Ocjeni.ba. Saznajte kako koristimo kolačiće za poboljšanje korisničkog iskustva.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Pravni dokumenti
            </span>
            <div className="mt-4 inline-flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <Cookie className="h-7 w-7 text-emerald-400" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Kolačići
              </h1>
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/60">
              Politika kolačića platforme Ocjeni.ba
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <SlideUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative">
                <Cookie className="mx-auto mb-5 h-12 w-12 text-foreground/30" />
                <p className="mx-auto max-w-lg leading-relaxed text-foreground/70">
                  Politika kolačića platforme Ocjeni.ba. Koristimo kolačiće za
                  poboljšanje korisničkog iskustva. Sadržaj će uskoro biti dopunjen.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <section className="border-t border-white/5 py-10">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazad na početnu stranicu
          </Link>
        </div>
      </section>
    </div>
  );
}
