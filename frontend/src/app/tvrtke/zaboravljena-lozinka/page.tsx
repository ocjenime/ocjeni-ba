"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ocjeni.ba</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Zaboravljena lozinka
          </h1>
          <p className="text-gray-500 mt-2">
            Unesite svoju email adresu i poslat ćemo vam upute za resetovanje
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Email poslan
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ako postoji račun sa ovom email adresom, primili ste upute za
                resetovanje lozinke.
              </p>
              <Link
                href="/tvrtke/login"
                className="inline-flex items-center gap-2 mt-6 text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Natrag na prijavu
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email adresa
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="vas@email.ba"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
              >
                Pošalji upute
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {!submitted && (
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <Link
                href="/tvrtke/login"
                className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Natrag na prijavu
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
