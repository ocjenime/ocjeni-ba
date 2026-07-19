"use client";

import Link from "next/link";
import { Code2, ArrowRight, Copy, Globe, Star, CheckCircle } from "lucide-react";

const widgetCode = `<!-- Ocjeni.ba Widget -->
<div id="ocjeni-widget" data-business="vasa-firma"></div>
<script src="https://ocjeni.ba/widget/embed.js"
  async defer></script>`;

export default function WidgetsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Widgeti za web
            </h1>
          </div>
          <p className="text-gray-500 text-lg">
            Dodajte Ocjeni.ba na svoju web stranicu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dodajte Ocjeni.ba na svoju web stranicu
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prikažite svoje recenzije direktno na vašoj web stranici. Naši
            widgeti se lako integriraju i podržavaju potpuno prilagođavanje
            izgleda.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Primjer koda za ugradnju
            </h3>
          </div>
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
              <span className="text-gray-400 text-xs font-medium">HTML</span>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-5 text-sm text-gray-300 overflow-x-auto">
              <code>{widgetCode}</code>
            </pre>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <Globe className="w-6 h-6 text-emerald-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Responzivan</h4>
            <p className="text-sm text-gray-500">
              Widget se automatski prilagođava svim uređajima
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <Star className="w-6 h-6 text-emerald-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Prilagodljiv</h4>
            <p className="text-sm text-gray-500">
              Promijenite boje, stil i veličinu po potrebi
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <CheckCircle className="w-6 h-6 text-emerald-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Brza instalacija</h4>
            <p className="text-sm text-gray-500">
              Kopirajte kod i zalijepite na svoju stranicu
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Spremni za početak?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Prijavite svoju firmu i dobijte pristup widgetima i naprednoj
            analitici recenzija.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Prijavite firmu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
