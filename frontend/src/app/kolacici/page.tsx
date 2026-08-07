import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Kolačići | Ocjeni.ba",
  description:
    "Politika kolačića platforme Ocjeni.ba. Saznajte kako koristimo kolačiće za poboljšanje korisničkog iskustva.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Pravni dokumenti"
        title="Kolačići"
        subtitle="Politika kolačića platforme Ocjeni.ba"
        backgroundImage="/images/hero-bg.svg"
      />

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
