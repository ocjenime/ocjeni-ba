"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth-context";
import PageHero from "@/components/ui/PageHero";

export default function RegisterPage() {
  const { registerUser } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validate = (): boolean => {
    const errs: string[] = [];
    if (password.length < 8) {
      errs.push("Lozinka mora imati najmanje 8 znakova.");
    }
    if (password !== confirmPassword) {
      errs.push("Lozinke se ne podudaraju.");
    }
    setErrors(errs);
    return errs.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    registerUser(name, email, password);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Registracija"
        title="Kreirajte račun"
        subtitle="Pridružite se zajednici i ostavljajte recenzije"
        backgroundImage="https://source.unsplash.com/featured/2400x1400?register,account"
        minHeight="min-h-[50vh]"
      />

      <div className="relative overflow-hidden px-4 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-blob absolute left-1/4 top-1/4 h-[40vh] w-[40vh] opacity-40" />
          <div
            className="aurora-blob absolute bottom-1/4 right-1/4 h-[35vh] w-[35vh] opacity-30"
            style={{ animationDelay: "-4s", animationDuration: "16s" }}
          />
        </div>

        <div className="mx-auto w-full max-w-md">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl"
          >
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

            <form onSubmit={handleSubmit} className="relative z-10">
            <div className="space-y-4">
              {errors.length > 0 && (
                <div className="space-y-1 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {errors.map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              )}

              <div>
                <label className="label">Ime i prezime</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input pl-11"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
              </div>

              <div>
                <label className="label">Email adresa</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input pl-11"
                    placeholder="vas@email.ba"
                  />
                </div>
              </div>

              <div>
                <label className="label">Lozinka</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pl-11 pr-12"
                    placeholder="Najmanje 8 znakova"
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
                <label className="label">Potvrdi lozinku</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input pl-11 pr-12"
                    placeholder="Ponovite lozinku"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                  >
                    {showConfirm ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="animated-border mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.01]"
            >
              Registrujte se
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <div className="relative z-10 mt-6 border-t border-white/5 pt-6 text-center">
            <p className="text-sm text-foreground/50">
              Već imate račun?{" "}
              <Link
                href="/prijava"
                className="font-medium text-emerald-400 hover:text-emerald-300"
              >
                Prijavite se
              </Link>
            </p>
          </div>
        </motion.div>

        <p className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-foreground/50 hover:text-foreground"
          >
            ← Natrag na početnu
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
}
