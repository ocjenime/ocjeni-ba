import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { FBIH_CITIES, FBIH_CANTON_CITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gradovi | Ocjeni.ba",
  description:
    "Svi gradovi i općine Federacije Bosne i Hercegovine na jednom mjestu.",
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Gradovi Federacije BiH
          </h1>
          <p className="text-gray-500 mt-2">
            Istražite firme u {FBIH_CITIES.length} gradova i općina
          </p>
        </div>
      </div>

      {/* Kantoni */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {Object.entries(FBIH_CANTON_CITIES).map(([canton, cities]) => (
          <div key={canton} className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-500" />
              {canton}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/gradovi/${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                      {city}
                    </div>
                    <div className="text-xs text-gray-400">FBiH</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ne vidite svoj grad?
          </h2>
          <p className="text-gray-500 mb-6">
            Prijavite firmu i dodajte je na Ocjeni.ba
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Dodajte firmu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
