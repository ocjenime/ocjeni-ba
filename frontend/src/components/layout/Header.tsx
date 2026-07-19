"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Star } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-midnight-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-black font-bold text-sm">O</span>
            </div>
            <span className="font-bold text-lg text-white">
              ocjeni<span className="text-amber-400">.ba</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/za-tvrtke" className="px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Tvrtke
            </Link>
            <Link href="/kategorije" className="px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Kategorije
            </Link>
            <Link href="/gradovi" className="px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Gradovi
            </Link>
            <Link href="/cjenik" className="px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Cjenik
            </Link>
          </nav>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg text-midnight-400 hover:text-white hover:bg-white/5 transition-all">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/tvrtke/login" className="text-sm font-medium text-midnight-300 hover:text-white transition-colors">
              Prijava
            </Link>
            <Link href="/tvrtke/prijava" className="btn-primary px-4 py-2 text-sm rounded-lg">
              Registracija
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg text-midnight-300 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden p-4 space-y-2 border-t border-midnight-800/50 bg-midnight-950/95 backdrop-blur-xl">
            <Link href="/za-tvrtke" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Tvrtke
            </Link>
            <Link href="/kategorije" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Kategorije
            </Link>
            <Link href="/gradovi" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Gradovi
            </Link>
            <Link href="/cjenik" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Cjenik
            </Link>
            <hr className="border-midnight-800/50" />
            <Link href="/tvrtke/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-midnight-300 hover:text-white hover:bg-white/5 transition-all">
              Prijava
            </Link>
            <Link href="/tvrtke/prijava" onClick={() => setIsOpen(false)} className="block btn-primary px-4 py-2 text-sm rounded-lg text-center">
              Registracija
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
