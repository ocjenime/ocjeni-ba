"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth-context";
import PageHero from "@/components/ui/PageHero";

export default function BusinessLoginPage() {
  const { loginBusiness } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = loginBusiness(email, password);
    if (success) {
      router.push("/tvrtke/dashboard");
    } else {
      setError("Email ili lozinka nisu tačni. Pokušajte ponovo.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Prijava firme"
        title="Dobrodošli nazad!"
        subtitle="Upravljajte recenzijama, analitikom i vašim profilom"
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
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
            className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-2xl dark:border-white/5 dark:bg-white/[0.02]"
          >
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

            <form onSubmit={handleSubmit} className="relative z-10">
            <div className="space-y-4">
              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}
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
                    placeholder="Vaša lozinka"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-foreground/10 bg-foreground/5 text-emerald-500 focus:ring-emerald-500/20"
                  />
                  <span className="text-sm text-foreground/60">Zapamti me</span>
                </label>
                <Link
                  href="/tvrtke/zaboravljena-lozinka"
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Zaboravili lozinku?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="animated-border mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.01]"
            >
              Prijavi se
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <div className="relative z-10 mt-6 border-t border-foreground/5 pt-6 text-center">
            <p className="text-sm text-foreground/50">
              Još nemate račun?{" "}
              <Link
                href="/tvrtke/prijava"
                className="font-medium text-emerald-400 hover:text-emerald-300"
              >
                Registrujte se besplatno
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
