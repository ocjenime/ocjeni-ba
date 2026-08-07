import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import { FBIH_CITIES, FBIH_CANTON_CITIES } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gradovi | Ocjeni.ba",
  description:
    "Svi gradovi i općine Federacije Bosne i Hercegovine na jednom mjestu.",
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Lokacije"
        title="Gradovi Federacije BiH"
        subtitle={`Istražite firme u ${FBIH_CITIES.length} gradova i općina`}
        backgroundImage="https://source.unsplash.com/featured/2400x1400?bosnia,city"
      />

      {/* Kantoni */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          {Object.entries(FBIH_CANTON_CITIES).map(([canton, cities], groupIndex) => (
            <SlideUp key={canton} delay={groupIndex * 0.05} className="mb-12">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
                <MapPin className="h-5 w-5 text-emerald-400" />
                {canton}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {cities.map((city, index) => (
                  <SlideUp key={city} delay={index * 0.02}>
                    <Link
                      href={`/gradovi/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-emerald-500/30 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Building2 className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium text-white transition-colors group-hover:text-emerald-400">
                          {city}
                        </div>
                        <div className="text-xs text-foreground/40">FBiH</div>
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-foreground/30 transition-colors group-hover:text-emerald-400" />
                    </Link>
                  </SlideUp>
                ))}
              </div>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <SlideUp>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Pridružite se
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Ne vidite svoj grad?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/60">
              Prijavite firmu i dodajte je na Ocjeni.ba
            </p>
            <Link href="/tvrtke/prijava" className="btn-primary mt-6">
              Dodajte firmu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
