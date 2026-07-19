import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Lock,
  Server,
  Shield,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight-950 text-white border-t border-midnight-800/50">
      {/* Trust Bar */}
      <div className="bg-midnight-900/50 border-b border-midnight-800/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-midnight-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              GDPR usklađen
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              SSL zaštita
            </span>
            <span className="flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-400" />
              Sigurni serveri
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              24/7 moderacija
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold text-white">ocjeni.ba</span>
            </Link>
            <p className="text-midnight-400 mb-6 text-sm leading-relaxed">
              Platforma broj 1 za recenzije u Bosni i Hercegovini
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-midnight-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-midnight-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-midnight-400 hover:text-amber-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platforma */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Platforma
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/kategorije"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Kategorije
                </Link>
              </li>
              <li>
                <Link
                  href="/gradovi"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Gradovi
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Najbolje ocijenjene
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Novo na platformi
                </a>
              </li>
            </ul>
          </div>

          {/* Za tvrtke */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Za tvrtke
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tvrtke/prijava"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Prijavi tvrtku
                </Link>
              </li>
              <li>
                <Link
                  href="/cjenik"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Cjenik
                </Link>
              </li>
              <li>
                <Link
                  href="/tvrtke/dashboard"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-midnight-400 hover:text-amber-400 transition-colors"
                >
                  Widget za web
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-midnight-400">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@ocjeni.ba</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-midnight-400">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+387 (0)XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-midnight-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Sarajevo, Bosna i Hercegovina</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-midnight-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-midnight-500">
              &copy; 2026 Ocjeni.ba. Sva prava pridržana.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-midnight-500 hover:text-amber-400 transition-colors"
              >
                Pravila korištenja
              </a>
              <a
                href="#"
                className="text-xs text-midnight-500 hover:text-amber-400 transition-colors"
              >
                Privatnost
              </a>
              <a
                href="#"
                className="text-xs text-midnight-500 hover:text-amber-400 transition-colors"
              >
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
