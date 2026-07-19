import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Pravila korištenja | Ocjeni.ba",
};

export default function PravilaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Pravni dokumenti
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              Pravila korištenja
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Uslovi korištenja platforme Ocjeni.ba za sve korisnike i firme.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pravila korištenja platforme Ocjeni.ba
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
              Ova pravila opisuju uslove korištenja naše platforme. Sadržaj će
              uskoro biti dopunjen.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Dokument je u pripremi
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Imate pitanja o pravilima?
          </h2>
          <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
            Kontaktirajte nas za sva pitanja vezana uz korištenje platforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25"
            >
              Kontaktirajte nas
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tvrtke/prijava"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Prijavite firmu besplatno
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
