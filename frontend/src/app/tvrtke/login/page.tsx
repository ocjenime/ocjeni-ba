"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function BusinessLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mesh-gradient p-4">
      <div className="w-full max-w-md">
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
              Pristupite dashboardu
            </h1>
            <p className="text-midnight-400 text-center mt-2">
              Prijavite se na svoj račun
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-midnight-300 mb-1.5">
                Email adresa
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                  placeholder="vas@email.ba"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-midnight-300">
                  Lozinka
                </label>
                <Link
                  href="/tvrtke/zaboravljena-lozinka"
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  Zaboravili ste lozinku?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 bg-midnight-800/50 border border-midnight-700/50 rounded-xl text-white placeholder:text-midnight-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                  placeholder="Vaša lozinka"
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

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-midnight-600 bg-midnight-800/50 text-amber-500 focus:ring-amber-500/30 focus:ring-offset-0"
              />
              <span className="text-sm text-midnight-300">Zapamti me</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Prijavi se
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-midnight-700/50" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-midnight-900/60 px-3 text-midnight-500">
                ili
              </span>
            </div>
          </div>

          {/* Register link */}
          <p className="text-center text-sm text-midnight-400">
            Nemate račun?{" "}
            <Link
              href="/tvrtke/prijava"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Registrirajte se
            </Link>
          </p>
        </div>

        {/* Back link */}
        <p className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-midnight-500 hover:text-midnight-300 transition-colors"
          >
            &larr; Natrag na početnu
          </Link>
        </p>
      </div>
    </div>
  );
}
