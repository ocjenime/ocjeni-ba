"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Building2,
  Star,
  MapPin,
  CheckCircle,
  ArrowRight,
  Filter,
} from "lucide-react";

const businesses = [
  {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviews: 81,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    verified: true,
    description: "Profesionalne građevinske usluge s višegodišnjim iskustvom.",
  },
  {
    name: "Cafe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviews: 318,
    category: "Kafići",
    city: "Velika Kladuša",
    verified: true,
    description: "Omiljeni kafić s odličnom atmosferom i domaćom kafom.",
  },
];

export default function TvrtkePage() {
  const [search, setSearch] = useState("");

  const filtered = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Directorij
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              Sve firme
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Pretražite sve verificirane firme u Bosni i Hercegovini. Pronađite
              najbolje ocijenjene pružaoci usluga.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pretražite firme po imenu, kategoriji ili gradu..."
                className="w-full px-4 py-4 text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Business listings */}
      <section className="py-8 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Prikazano {filtered.length} firmi
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((biz) => (
              <Link
                key={biz.slug}
                href={`/tvrtke/${biz.slug}`}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                        {biz.name}
                      </h2>
                      {biz.verified && (
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {biz.city} · {biz.category}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {biz.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-100">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {biz.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(biz.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {biz.reviews} recenzija
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-emerald-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Nema rezultata
              </h3>
              <p className="text-gray-500">
                Pokušajte s drugačijim pojmom za pretragu.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vaša firma nije na listi?
          </h2>
          <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
            Pridružite se hiljadama firmi koje već koriste Ocjeni.ba. Potpuno
            besplatno.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25"
          >
            Prijavite firmu besplatno
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
