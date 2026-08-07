import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Pravila korištenja | Ocjeni.ba",
};

export default function PravilaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Pravni dokumenti
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Pravila korištenja
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/60">
              Uslovi korištenja platforme Ocjeni.ba za sve korisnike i firme.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <SlideUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                  <FileText className="h-8 w-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Pravila korištenja platforme Ocjeni.ba
                </h2>
                <p className="mx-auto mt-4 max-w-lg leading-relaxed text-foreground/70">
                  Ova pravila opisuju uslove korištenja naše platforme. Sadržaj će
                  uskoro biti dopunjen.
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
              Imate pitanja o pravilima?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Kontaktirajte nas za sva pitanja vezana uz korištenje platforme.
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
