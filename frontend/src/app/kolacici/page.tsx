import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Kolačići | Ocjeni.ba",
  description:
    "Politika kolačića platforme Ocjeni.ba. Saznajte kako koristimo kolačiće za poboljšanje korisničkog iskustva.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Kolačići
            </h1>
          </div>
          <p className="text-gray-500">
            Politika kolačića platforme Ocjeni.ba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center">
          <Cookie className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
            Politika kolačića platforme Ocjeni.ba. Koristimo kolačiće za
            poboljšanje korisničkog iskustva. Sadržaj će uskoro biti dopunjen.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na početnu stranicu
          </Link>
        </div>
      </div>
    </div>
  );
}
