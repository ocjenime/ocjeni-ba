import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Politika privatnosti | Ocjeni.ba",
};

export default function PrivatnostPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Pravni dokumenti"
        title="Politika privatnosti"
        subtitle="Kako štitimo i obrađujemo vaše osobne podatke na platformi Ocjeni.ba."
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <SlideUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Politika privatnosti platforme Ocjeni.ba
                </h2>
                <p className="mx-auto mt-4 max-w-lg leading-relaxed text-foreground/70">
                  Štitimo vaše podatke. Sadržaj će uskoro biti dopunjen.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/50">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  Dokument je u pripremi
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <SlideUp>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Imate pitanja?
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Imate pitanja o privatnosti?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Kontaktirajte nas za sva pitanja vezana za zaštitu vaših podataka.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/kontakt" className="btn-primary">
                Kontaktirajte nas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/tvrtke/prijava" className="btn-secondary">
                Prijavite firmu besplatno
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
