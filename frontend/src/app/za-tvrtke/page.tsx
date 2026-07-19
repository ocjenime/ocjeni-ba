import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Globe,
  Mail,
  Bell,
  Shield,
  Award,
  Eye,
  ArrowRight,
  Building2,
  CheckCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Za tvrtke | Ocjeni.ba",
  description:
    "Povećajte povjerenje kupaca, primajte recenzije i rastite s Ocjeni.ba platformom.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Upravljanje recenzijama",
    description:
      "Odgovarajte na recenzije kupaca, pratite trendove i poboljšavajte svoje usluge na temelju povratnih informacija.",
  },
  {
    icon: BarChart3,
    title: "Analitika u realnom vremenu",
    description:
      "Detaljni izvještaji o ocjenama, sentimentu kupaca i usporedba s konkurentima. Donosite odluke na temelju podataka.",
  },
  {
    icon: Mail,
    title: "Pozivnice za recenzije",
    description:
      "Automatski šaljite pozivnice kupcima nakon kupovine. Povećajte broj recenzija za 3x s našim alatima.",
  },
  {
    icon: Globe,
    title: "Widget za web",
    description:
      "Prikažite svoje recenzije na web stranici. Prilagodite dizajn vašem brendu. Povećajte konverziju za 27%.",
  },
  {
    icon: Shield,
    title: "Verificirani badge",
    description:
      "Dobijte verificirani bedž koji potvrđuje autentičnost vaše tvrtke. Povećajte povjerenje kupaca za 73%.",
  },
  {
    icon: TrendingUp,
    title: "Google integracija",
    description:
      "Prikažite zvjezdice u Google oglasima. Povećajte CTR za 17%. Automatska sinkronizacija s Google Business Profile.",
  },
];

const steps = [
  {
    number: "01",
    title: "Prijavite tvrtku",
    description:
      "Registrirajte se besplatno i dodajte podatke o vašoj tvrtki. Provjera traje manje od 24 sata.",
  },
  {
    number: "02",
    title: "Potvrdite identitet",
    description:
      "Verificirajte vašu tvrtku putem emaila ili telefona. Dobijte verificirani bedž koji gradi povjerenje.",
  },
  {
    number: "03",
    title: "Primajte recenzije",
    description:
      "Šaljite pozivnice kupcima putem emaila, SMS-a ili QR koda. Automatski podsjetnici povećavaju odziv.",
  },
  {
    number: "04",
    title: "Odgovarajte i rastite",
    description:
      "Odgovarajte na recenzije, pratite analitiku i koristite uvide za poboljšanje usluga i rast poslovanja.",
  },
];

const stats = [
  { value: "3x", label: "Više kupaca" },
  { value: "73%", label: "Više povjerenja" },
  { value: "27%", label: "Više konverzija" },
  { value: "4.2x", label: "Više lojalnosti" },
];

const businesses = [
  "Restoran Stari Most",
  "Auto Servis Mehmed",
  "Digital Solutions BiH",
  "Frizerski Salon Glamour",
];

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="min-h-[80vh] mesh-gradient flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div>
              <div className="badge mb-6">Za tvrtke</div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Vaša reputacija je
                <br />
                <span className="gradient-text-hero">najjači alat</span>
              </h1>
              <p className="text-midnight-300 text-lg mt-6 mb-8 max-w-lg">
                Pridružite se 10,000+ tvrtki koje već koriste Ocjeni.ba za
                izgradnju povjerenja, privlačenje kupaca i rast poslovanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tvrtke/prijava" className="btn-primary">
                  Prijavite tvrtku besplatno
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/cjenik" className="btn-secondary">
                  Pogledajte cjenik
                </Link>
              </div>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-3 mt-8 text-sm text-midnight-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Bez ugovorne obveze
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Besplatna analitika
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Certifikat pouzdanosti
                </span>
              </div>
            </div>

            {/* Right column */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Business profile card */}
                <div className="bg-midnight-900/60 backdrop-blur-xl border border-midnight-700/50 rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-midnight-950" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">
                          Restoran Stari Most
                        </span>
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-sm text-midnight-400">
                        Mostar · Restorani
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-white font-bold">4.8</span>
                    <span className="text-midnight-400 text-sm">
                      (234 recenzije)
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-midnight-800/60 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold gradient-text">
                        4.8
                      </div>
                      <div className="text-xs text-midnight-500">Ocjena</div>
                    </div>
                    <div className="bg-midnight-800/60 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold gradient-text">
                        234
                      </div>
                      <div className="text-xs text-midnight-500">
                        Recenzije
                      </div>
                    </div>
                    <div className="bg-midnight-800/60 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold gradient-text">
                        1,247
                      </div>
                      <div className="text-xs text-midnight-500">
                        Pregledi
                      </div>
                    </div>
                  </div>

                  {/* Link */}
                  <div className="mt-6 pt-4 border-t border-midnight-700/50">
                    <span className="text-amber-400 text-sm font-medium">
                      Ocjeni.ba/vasa-tvrtka
                    </span>
                  </div>
                </div>

                {/* Floating notification */}
                <div className="absolute -left-4 top-10 bg-midnight-800 border border-midnight-700 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-white whitespace-nowrap">
                      Nova recenzija: ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-midnight-800/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-midnight-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KAKO RADI
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge mb-3">Jednostavno</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Kako funkcioniše?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-midnight-900/40 border border-midnight-800/40 rounded-2xl p-6 relative"
              >
                <span className="text-5xl font-black text-amber-500/15 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-midnight-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 section-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge mb-3">Značajke</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Sve što vam treba
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div key={feature.title} className="card glow-border p-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-bold text-white mt-4">{feature.title}</h3>
                <p className="text-sm text-midnight-400 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOCIAL PROOF
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">
            Tvrtke koje nam vjeruju
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {businesses.map((name) => (
              <span
                key={name}
                className="text-midnight-600 text-lg font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Započnite besplatno danas
            </h2>
            <p className="text-midnight-300 text-lg max-w-xl mx-auto mb-8">
              Pridružite se 10,000+ tvrtki koje već grade svoju reputaciju na
              Ocjeni.ba. Bez skrivenih troškova, bez ugovorne obveze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tvrtke/prijava" className="btn-primary">
                Prijavite tvrtku besplatno
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/cjenik" className="btn-secondary">
                Pogledajte cjenik
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-midnight-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Bez troškova
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Besplatna analitika
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Certifikat pouzdanosti
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
