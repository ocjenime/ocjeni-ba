"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { FBIH_CITIES } from "@/lib/constants";
import { useAuth } from "@/lib/auth-context";
import PageHero from "@/components/ui/PageHero";

export default function BusinessSignupPage() {
  const { registerBusiness } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    password: "",
    confirmPassword: "",
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
      registerBusiness({
        ownerName: formData.ownerName,
        ownerEmail: formData.ownerEmail,
        phone: formData.phone,
        businessName: formData.businessName,
        category: formData.category,
        city: formData.city,
        address: formData.address,
        website: formData.website,
        description: formData.description,
        password: formData.password,
      });
      router.push("/tvrtke/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Registracija firme"
        title="Dodajte svoju firmu na Ocjeni.ba"
        subtitle="Besplatno. Bez kartice. Počnite primati recenzije danas."
        backgroundImage="/images/hero-bg.svg"
        minHeight="min-h-[45vh]"
      />

      <div className="relative overflow-hidden px-4 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-blob absolute left-1/4 top-1/4 h-[40vh] w-[40vh] opacity-40" />
          <div
            className="aurora-blob absolute bottom-1/4 right-1/4 h-[35vh] w-[35vh] opacity-30"
            style={{ animationDelay: "-4s", animationDuration: "16s" }}
          />
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex items-center justify-center gap-2"
          >
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              step >= 1
                ? "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white"
                : "border border-white/10 bg-white/5 text-foreground/50"
            }`}
          >
            1
          </div>
          <div
            className={`h-1 w-16 rounded-full ${
              step >= 2 ? "bg-gradient-to-r from-emerald-400 to-teal-500" : "bg-white/10"
            }`}
          />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              step >= 2
                ? "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white"
                : "border border-white/10 bg-white/5 text-foreground/50"
            }`}
          >
            2
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl"
        >
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

          <form onSubmit={handleSubmit} className="relative z-10">
            {step === 1 ? (
              <>
                <h2 className="mb-6 text-lg font-semibold text-white">
                  Vaši podaci
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="label">Ime i prezime *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                      <input
                        type="text"
                        required
                        value={formData.ownerName}
                        onChange={(e) =>
                          setFormData({ ...formData, ownerName: e.target.value })
                        }
                        className="input pl-11"
                        placeholder="Vaše ime"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Email adresa *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
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
                        className="input pl-11"
                        placeholder="vas@email.ba"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Lozinka *</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input pl-11 pr-12"
                        placeholder="Min. 8 znakova"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="label">Telefon *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="input pl-11"
                        placeholder="+387 XX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="animated-border mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.01]"
                >
                  Nastavi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <h2 className="mb-6 text-lg font-semibold text-white">
                  Podaci o firmi
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="label">Naziv firme *</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
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
                        className="input pl-11"
                        placeholder="Naziv vaše firme"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Kategorija *</label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            category: e.target.value,
                          })
                        }
                        className="input bg-background"
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
                      <label className="label">Grad *</label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="input bg-background"
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

                  <div>
                    <label className="label">Adresa</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="input pl-11"
                        placeholder="Ulica i broj"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Web stranica</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="input pl-11"
                        placeholder="https://vasa-stranica.ba"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Opis firme</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      rows={3}
                      className="input resize-none"
                      placeholder="Kratki opis vaše firme..."
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1"
                  >
                    Nazad
                  </button>
                  <button
                    type="submit"
                    className="animated-border inline-flex h-12 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.01]"
                  >
                    Registruj firmu
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>

        <p className="mt-6 text-center text-sm text-foreground/50">
          Već imate račun?{" "}
          <Link
            href="/tvrtke/login"
            className="font-medium text-emerald-400 hover:text-emerald-300"
          >
            Prijavite se
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
}
