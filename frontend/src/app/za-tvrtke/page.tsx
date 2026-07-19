import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Mail,
  Bell,
  Lock,
  Award,
  Target,
  Eye,
  Sparkles,
  Crown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Za tvrtke | Ocjeni.ba",
  description:
    "Povećajte povjerenje kupaca, primajte recenzije i rastite s Ocjeni.ba platformom.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Upravljajte recenzijama",
    description:
      "Odgovarajte na recenzije kupaca, pratite trendove i poboljšavajte svoje usluge na temelju povratnih informacija.",
  },
  {
    icon: BarChart3,
    title: "Napredna analitika",
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
    title: "Widgeti za web",
    description:
      "Prikažite svoje recenzije na web stranici. Prilagodite dizajn vašem brendu. Povećajte konverziju za 27%.",
  },
  {
    icon: Shield,
    title: "Verificirani bedž",
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
    title: "Pozovite kupce",
    description:
      "Šaljite pozivnice za recenzije putem emaila, SMS-a ili QR koda. Automatski podsjetnici povećavaju odziv.",
  },
  {
    number: "03",
    title: "Upravljajte reputacijom",
    description:
      "Odgovarajte na recenzije, pratite analitiku i koristite uvide za poboljšanje usluga.",
  },
  {
    number: "04",
    title: "Rastite s nama",
    description:
      "Više recenzija = više kupaca. Tvrtke s aktivnim profilima na Ocjeni.ba privlače 3x više novih klijenata.",
  },
];

const stats = [
  { value: "3x", label: "Više kupaca", description: "Tvrtke s recenzijama" },
  { value: "73%", label: "Veće povjerenje", description: "Verificirani bedž" },
  { value: "27%", label: "Veća konverzija", description: "S widgetima" },
  { value: "4.2x", label: "Više lojalnosti", description: "S odgovorima" },
];

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6">
                <Sparkles className="w-4 h-4" />
                Za tvrtke koje žele rasti
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Vaša reputacija je
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  vaš najjači alat
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Pridružite se 10,000+ tvrtki koje već koriste Ocjeni.ba za
                izgradnju povjerenja, privlačenje kupaca i rast poslovanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tvrtke/prijava"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25"
                >
                  Započnite besplatno
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/cjenik"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-lg"
                >
                  Pogledajte planove
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Bez kreditne kartice
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Bez ugovorne obveze
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Otkazivanje u bilo kojem trenutku
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Restoran Stari Most
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 font-medium">4.9</span>
                        <span className="text-gray-400">(312)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Verificirano
                    </span>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Top Rated
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      Aktivno
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">312</div>
                      <div className="text-xs text-gray-500">Recenzija</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">98%</div>
                      <div className="text-xs text-gray-500">Preporučuju</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-emerald-600">
                        +42%
                      </div>
                      <div className="text-xs text-gray-500">Rast</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Novi kupci</div>
                      <div className="text-sm font-bold text-emerald-600">
                        +127 ovaj mjesec
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Prosjek</div>
                      <div className="text-sm font-bold text-amber-600">
                        4.9 ★ (312)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Jednostavno
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Kako funkcionira?
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Započnite u 4 jednostavna koraka. Bez komplikacija, bez skrivenih
              troškova.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-black text-emerald-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Alati
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Sve što vam treba na jednom mjestu
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Tvrtke koje nam vjeruju
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["Restoran Stari Most", "Auto Servis Mehmed", "Digital Solutions BiH", "Frizerski Salon Glamour"].map(
              (name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                >
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {name}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spremni za rast?
          </h2>
          <p className="text-emerald-100 mb-8 text-lg max-w-xl mx-auto">
            Pridružite se 10,000+ tvrtki koje već grade svoju reputaciju na
            Ocjeni.ba
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tvrtke/prijava"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              Započnite besplatno
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/cjenik"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Pogledajte cjenik
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
