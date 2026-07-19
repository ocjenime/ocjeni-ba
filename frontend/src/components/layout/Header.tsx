"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-sm shadow-emerald-500/20">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ocjeni.ba</span>
          </Link>

          {/* Desktop navigacija */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/tvrtke"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              Firme
            </Link>
            <Link
              href="/kategorije"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              Kategorije
            </Link>
            <Link
              href="/gradovi"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              Gradovi
            </Link>
            <Link
              href="/za-tvrtke"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              Za firme
            </Link>
            <Link
              href="/cjenik"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              Cjenik
            </Link>
          </nav>

          {/* Desna strana */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/prijava"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm px-4 py-2"
            >
              Prijava
            </Link>
            <Link
              href="/registracija"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all shadow-sm shadow-emerald-500/20"
            >
              Registracija
            </Link>
          </div>

          {/* Mobilni hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobilni izbornik */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              <Link
                href="/tvrtke"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Firme
              </Link>
              <Link
                href="/kategorije"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Kategorije
              </Link>
              <Link
                href="/gradovi"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Gradovi
              </Link>
              <Link
                href="/za-tvrtke"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Za firme
              </Link>
              <Link
                href="/cjenik"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Cjenik
              </Link>
              <hr className="my-2 border-gray-100" />
              <Link
                href="/prijava"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Prijava
              </Link>
              <Link
                href="/registracija"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold transition-all text-center shadow-sm"
              >
                Registracija
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
