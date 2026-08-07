import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Star,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-background dark:border-white/5" role="contentinfo">
      {/* Trust Bar */}
      <div className="border-b border-black/5 dark:border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              GDPR usklađeno
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400" />
              SSL enkripcija
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              Sigurni serveri
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400" />
              24/7 moderacija
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo i opis */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500">
                <span className="text-xl font-bold text-white">O</span>
              </div>
            <span className="text-xl font-bold text-foreground">
              ocijeni<span className="gradient-text">.ba</span>
            </span>
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-foreground/50">
              Platforma broj 1 za recenzije u BiH. Hiljade provjerenih ocjena
              firmi širom zemlje.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:info@ocjeni.ba"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/5 text-foreground/70 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Platforma
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/tvrtke", label: "Sve firme" },
                { href: "/kategorije", label: "Kategorije" },
                { href: "/gradovi", label: "Gradovi" },
                { href: "/najnovije", label: "Najnovije recenzije" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Za tvrtke */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Za firme
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/za-tvrtke", label: "Započnite besplatno" },
                { href: "/cjenik", label: "Cjenik" },
                { href: "/widgeti", label: "Widgeti za web" },
                { href: "/api", label: "API dokumentacija" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-foreground/50">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>info@ocjeni.ba</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+387 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Sarajevo, BiH</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donji dio */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 md:flex-row">
          <p className="text-xs text-foreground/40">
            © 2026 ocjeni.ba. Sva prava pridržana.
          </p>
          <div className="flex gap-6 text-sm">
            {[
              { href: "/pravila", label: "Pravila korištenja" },
              { href: "/privatnost", label: "Politika privatnosti" },
              { href: "/kolacici", label: "Kolačići" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/40 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
