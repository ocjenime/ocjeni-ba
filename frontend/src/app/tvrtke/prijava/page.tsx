"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Mail,
  Lock,
  Phone,
  MapPin,
  Globe,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
} from "lucide-react";
import { FBIH_CITIES } from "@/lib/constants";

export default function BusinessSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    password: "",
    phone: "",
    businessName: "",
    category: "",
    city: "",
    address: "",
    website: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Registration:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mesh-gradient p-4">
      <div className="w-full max-w-lg">
        <div className="bg-midnight-900/60 backdrop-blur-xl border border-midnight-800/50 rounded-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-midnight-950 font-black text-lg">O</span>
              </div>
              <span className="text-xl font-black text-white">ocjeni.ba</span>
            </Link>
            <h1 className="text-2xl font-black text-white text-center">
              Registrirajte tvrtku
            </h1>
            <p className="text-midnight-400 text-center mt-2">
              Koristite besplatni plan ili odaberite premium
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= 1
                    ? "bg-amber-500 text-midnight-950"
                    : "bg-midnight-800 text-midnight-500"
                }`}
              >
                1
              </div>
              <span className="text-xs text-midnight-400 mt-2 whitespace-nowrap">
                Podaci vlasnika
              </span>
            </div>
            <div className="relative mx-3 mb-6">
              <div className="w-16 h-1 bg-midnight-700 rounded-full" />
              <div
                className={`absolute top-0 left-0 h-1 rounded-full transition-all ${
                  step >= 2 ? "bg-amber-500 w-16" : "bg-amber-500 w-0"
                }`}
              />
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= 2
                    ? "bg-amber-500 text-midnight-950"
                    : "bg-midnight-800 text-midnight-500"
                }`}
              >
                2
              </div>
              <span className="text-xs text-midnight-400 mt-2 whitespace-nowrap">
                Podaci tvrtke
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-5">
                {/* Full name */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Ime i prezime *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) =>
                        setFormData({ ...formData, ownerName: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="Vaše ime"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Email adresa *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="email"
                      required
                      value={formData.ownerEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ownerEmail: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="vas@email.ba"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Lozinka *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-11 pr-12 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="Min. 8 znakova"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-midnight-500 hover:text-midnight-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Telefon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="+387 XX XXX XXX"
                    />
                  </div>
                </div>

                {/* Next button */}
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Dalje
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Business name */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Naziv tvrtke *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="Naziv vaše tvrtke"
                    />
                  </div>
                </div>

                {/* Category & City */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                      Kategorija *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                    >
                      <option value="">Odaberite...</option>
                      <option value="restorani">Restorani</option>
                      <option value="kafici">Kafići</option>
                      <option value="trgovine">Trgovine</option>
                      <option value="automehanicari">Automehaničari</option>
                      <option value="gradjevinarstvo">Građevinarstvo</option>
                      <option value="nekretnine">Nekretnine</option>
                      <option value="zdravlje">Zdravlje</option>
                      <option value="usluge">Usluge</option>
                      <option value="frizerski">Frizerski saloni</option>
                      <option value="tehnologija">Tehnologija</option>
                      <option value="ostalo">Ostalo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                      Grad *
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                    >
                      <option value="">Odaberite grad...</option>
                      {FBIH_CITIES.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Adresa
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="Ulica i broj"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Web stranica
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      placeholder="https://vasa-stranica.ba"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                    Opis tvrtke
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors resize-none"
                    placeholder="Kratki opis vaše tvrtke..."
                  />
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1"
                  >
                    Natrag
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Registriraj se
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-midnight-400 mt-6">
          Već imate račun?{" "}
          <Link
            href="/tvrtke/login"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Prijavite se
          </Link>
        </p>
      </div>
    </div>
  );
}
