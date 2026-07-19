"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Podrška
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              Kontakt
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Imate pitanje? Javite nam se. Odgovorit ćemo u najkraćem mogućem
              roku.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Poruka poslana!
                  </h3>
                  <p className="text-gray-600">
                    Hvala vam na poruci. Odgovorit ćemo vam u najkraćem roku.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all"
                      placeholder="Vaše ime i prezime"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Email adresa
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all"
                      placeholder="vasa@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Predmet
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all"
                      placeholder="O čemu se radi?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Poruka
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                      placeholder="Vaša poruka..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25"
                  >
                    <Send className="w-5 h-5" />
                    Pošaljite poruku
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Kontakt podaci</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        Email
                      </div>
                      <div className="text-gray-900 font-medium">
                        info@ocjeni.ba
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        Telefon
                      </div>
                      <div className="text-gray-900 font-medium">
                        +387 XX XXX XXX
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        Lokacija
                      </div>
                      <div className="text-gray-900 font-medium">
                        Sarajevo, Bosna i Hercegovina
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-gray-900">Radno vrijeme</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ponedjeljak - Petak</span>
                    <span className="font-medium text-gray-900">
                      09:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subota</span>
                    <span className="font-medium text-gray-900">
                      10:00 - 14:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Nedjelja</span>
                    <span className="font-medium text-gray-400">Zatvoreno</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-gray-900">Hitna podrška?</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Za hitne probleme pošaljite email direktno na{" "}
                  <span className="font-semibold text-emerald-700">
                    info@ocjeni.ba
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Želite registrovati firmu?
          </h2>
          <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
            Registracija je potpuno besplatna. Započnite odmah.
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
