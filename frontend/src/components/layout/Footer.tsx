import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Shield,
  Star,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              GDPR usklađeno
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              SSL enkripcija
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Sigurni serveri
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              24/7 moderacija
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold">ocjeni.ba</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              Platforma broj 1 za recenzije u BiH. Hiljade provjerenih ocjena firmi širom zemlje.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Platforma</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/tvrtke"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Sve firme
                </Link>
              </li>
              <li>
                <Link
                  href="/kategorije"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Kategorije
                </Link>
              </li>
              <li>
                <Link
                  href="/gradovi"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Gradovi
                </Link>
              </li>
              <li>
                <Link
                  href="/najnovije"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Najnovije recenzije
                </Link>
              </li>
            </ul>
          </div>

          {/* Za tvrtke */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Za firme</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/za-tvrtke"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Započnite besplatno
                </Link>
              </li>
              <li>
                <Link
                  href="/cjenik"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Cjenik
                </Link>
              </li>
              <li>
                <Link
                  href="/widgeti"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Widgeti za web
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  API dokumentacija
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>info@ocjeni.ba</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+387 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Sarajevo, BiH</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donji dio */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Ocjeni.ba. Sva prava pridržana.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/pravila"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
            >
              Pravila korištenja
            </Link>
            <Link
              href="/privatnost"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
            >
              Politika privatnosti
            </Link>
            <Link
              href="/kolacici"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
            >
              Kolačići
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
