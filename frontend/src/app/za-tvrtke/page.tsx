import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Star,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Globe,
  CheckCircle2,
  ArrowRight,
  Building2,
  Mail,
  Sparkles,
  Crown,
} from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Za firme | Ocjeni.ba",
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
      "Detaljni izvještaji o ocjenama, sentimentu kupaca i uporedba s konkurentima. Donosite odluke na temelju podataka.",
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
      "Dobijte verificirani bedž koji potvrđuje autentičnost vaše firme. Povećajte povjerenje kupaca za 73%.",
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
    title: "Prijavite firmu",
    description:
      "Registrujte se besplatno i dodajte podatke o vašoj firmi. Provjera traje manje od 24 sata.",
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
      "Više recenzija = više kupaca. Firme s aktivnim profilima na Ocjeni.ba privlače 3x više novih klijenata.",
  },
];

const stats = [
  { value: "3x", label: "Više kupaca", description: "Firme s recenzijama" },
  { value: "73%", label: "Veće povjerenje", description: "Verificirani bedž" },
  { value: "27%", label: "Veća konverzija", description: "S widgetima" },
  { value: "4.2x", label: "Više lojalnosti", description: "S odgovorima" },
];

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-emerald-500/10 blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-1/4 h-[40vh] w-[40vh] rounded-full bg-teal-500/10 blur-3xl opacity-50" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                <Sparkles className="h-4 w-4" />
                Besplatno za sve firme
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                Vaša reputacija je
                <br />
                <span className="gradient-text">vaš najjači alat</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-foreground/60">
                10,000+ firmi iz cijele BiH već koristi Ocjeni.ba da dobiju više klijenata.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/tvrtke/prijava" className="btn-primary">
                  Započnite besplatno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/cjenik" className="btn-secondary">
                  Pogledajte planove
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-foreground/50">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Bez kreditne kartice
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Bez ugovorne obveze
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Otkazivanje u bilo kojem trenutku
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 shadow-2xl">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Restoran Stari Most
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="font-medium text-white">4.9</span>
                        <span className="text-foreground/50">(312)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                      <Shield className="h-3 w-3" />
                      Verificirano
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400">
                      <Crown className="h-3 w-3" />
                      Top Rated
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
                      <MessageSquare className="h-3 w-3" />
                      Aktivno
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                      <div className="text-lg font-semibold text-white">312</div>
                      <div className="text-xs text-foreground/50">Recenzija</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                      <div className="text-lg font-semibold text-white">98%</div>
                      <div className="text-xs text-foreground/50">Preporučuju</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                      <div className="text-lg font-semibold text-emerald-400">
                        +42%
                      </div>
                      <div className="text-xs text-foreground/50">Rast</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/50">Novi kupci</div>
                      <div className="text-sm font-semibold text-emerald-400">
                        +127 ovaj mjesec
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10">
                      <Star className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/50">Prosjek</div>
                      <div className="text-sm font-semibold text-amber-400">
                        4.9 ★ (312)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <SlideUp key={stat.label} delay={index * 0.08}>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-emerald-400 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-medium text-white">{stat.label}</div>
                  <div className="text-sm text-foreground/50">{stat.description}</div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Jednostavno
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Za 4 jednostavna koraka do više klijenata
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
              Započnite u 4 jednostavna koraka. Bez komplikacija, bez skrivenih
              troškova.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <SlideUp key={step.number} delay={index * 0.08}>
                <div className="relative">
                  <div className="mb-4 text-6xl font-black text-emerald-500/10">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/50">{step.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Alati
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Alati koji vam donose nove kupce svaki dan
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <SlideUp key={feature.title} delay={index * 0.08}>
                <div className="card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-foreground/50">{feature.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Povjerenje
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Firme iz Sarajeva, Tuzle, Mostara... koje nam vjeruju
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4">
            {[
              "Restoran Stari Most",
              "Auto Servis Mehmed",
              "Digital Solutions BiH",
              "Frizerski Salon Glamour",
            ].map((name, index) => (
              <SlideUp key={name} delay={index * 0.08}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Building2 className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">{name}</div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <SlideUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500 to-teal-500 p-10 text-center md:p-14">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <span className="text-sm font-medium uppercase tracking-widest text-emerald-100">
                  Započnite danas
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  Vaši konkurenti su već ovdje. A vi?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100">
                  Pridružite se 10,000+ firmi koje već grade svoju reputaciju na
                  Ocjeni.ba
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/tvrtke/prijava"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
                  >
                    Započnite besplatno
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/cjenik"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Pogledajte cjenik
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
