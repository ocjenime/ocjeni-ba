import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { FBIH_CITIES, FBIH_CANTON_CITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gradovi | Ocjeni.ba",
  description:
    "Svi gradovi i općine Federacije Bosne i Hercegovine na jednom mjestu.",
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-midnight-950">
      {/* Header */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="badge">{FBIH_CITIES.length} gradova</span>
          <h1 className="text-3xl font-black text-white mt-4">
            Gradovi Federacije BiH
          </h1>
          <p className="text-midnight-400 mt-3 max-w-2xl mx-auto">
            Istražite tvrtke u {FBIH_CITIES.length} gradova i općina
            Federacije Bosne i Hercegovine
          </p>
        </div>
      </div>

      {/* Canton sections */}
      <div className="pb-16">
        {Object.entries(FBIH_CANTON_CITIES).map(([canton, cities]) => (
          <div key={canton} className="py-8">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                <MapPin className="w-5 h-5 text-amber-500" />
                {canton}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/gradovi/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-midnight-900/40 border border-midnight-800/40 hover:border-amber-500/30 rounded-xl p-4 transition-all group"
                  >
                    <div className="font-medium text-white group-hover:text-amber-400 transition-colors truncate">
                      {city}
                    </div>
                    <div className="text-xs text-midnight-500 mt-1">FBiH</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Vaš grad nije na listi?
          </h2>
          <p className="text-midnight-400 mb-6">
            Prijavite tvrtku i dodajte je na Ocjeni.ba
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-amber-500 hover:bg-amber-400 text-midnight-950 px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Dodajte tvrtku
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
