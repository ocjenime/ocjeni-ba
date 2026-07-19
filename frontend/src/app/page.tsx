import Link from "next/link";
import {
  Search,
  Star,
  Shield,
  Building2,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Trophy,
  TrendingUp,
  Globe,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { FBIH_CITIES } from "@/lib/constants";

const topCategories = [
  { name: "Restorani", slug: "restorani", count: 245, emoji: "🍽" },
  { name: "Kafići", slug: "kafici", count: 189, emoji: "☕" },
  { name: "Trgovine", slug: "trgovine", count: 312, emoji: "🛍" },
  { name: "Automehaničari", slug: "automehanicari", count: 189, emoji: "🔧" },
  { name: "Građevinarstvo", slug: "gradjevinarstvo", count: 156, emoji: "🏗" },
  { name: "Frizeri", slug: "frizerski-saloni", count: 143, emoji: "✂" },
  { name: "Zdravlje", slug: "zdravlje", count: 234, emoji: "💊" },
  { name: "Nekretnine", slug: "nekretnine", count: 112, emoji: "🏠" },
  { name: "IT i Tech", slug: "tehnologija", count: 89, emoji: "💻" },
  { name: "Auto servisi", slug: "automobilizam", count: 189, emoji: "🚗" },
  { name: "Obrazovanje", slug: "obrazovanje", count: 134, emoji: "📚" },
  { name: "Usluge", slug: "usluge", count: 167, emoji: "⚙" },
];

const featuredBusinesses = [
  {
    name: "Caffe Bar Kod Brace",
    slug: "caffe-bar-kod-brace",
    rating: 4.8,
    reviews: 234,
    category: "Kafići",
    city: "Sarajevo",
    verified: true,
  },
  {
    name: "Auto Servis Mehmed",
    slug: "auto-servis-mehmed",
    rating: 4.6,
    reviews: 156,
    category: "Automehaničari",
    city: "Tuzla",
    verified: true,
  },
  {
    name: "Restoran Stari Most",
    slug: "restoran-stari-most",
    rating: 4.9,
    reviews: 312,
    category: "Restorani",
    city: "Mostar",
    verified: true,
  },
  {
    name: "Digital Solutions BiH",
    slug: "digital-solutions-bih",
    rating: 4.7,
    reviews: 89,
    category: "IT tvrtke",
    city: "Sarajevo",
    verified: true,
  },
  {
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.5,
    reviews: 178,
    category: "Frizerski saloni",
    city: "Zenica",
    verified: true,
  },
  {
    name: "Graditelj d.o.o.",
    slug: "graditelj-doo",
    rating: 4.8,
    reviews: 67,
    category: "Građevinske firme",
    city: "Bihać",
    verified: true,
  },
];

const stats = [
  { value: "10,000+", label: "Tvrtki" },
  { value: "500,000+", label: "Recenzija" },
  { value: "50+", label: "Gradova" },
  { value: "4.8", label: "Prosjek" },
];

const testimonials = [
  {
    name: "Mirza K.",
    company: "Restoran Stari Most",
    role: "Vlasnik",
    content:
      "Otkad koristimo Ocjeni.ba, broj naših gostiju se povećao za 40%. Kupci nam dolaze jer vide naše odlične recenzije.",
    rating: 5,
  },
  {
    name: "Amira S.",
    company: "Auto Servis Mehmed",
    role: "Menadžerica",
    content:
      "Platforma nam je pomogla da shvatimo što kupci zaista misle o nama. Sada znamo gdje se poboljšati.",
    rating: 5,
  },
  {
    name: "Dragan P.",
    company: "Digital Solutions BiH",
    role: "CEO",
    content:
      "Kao IT tvrtka, nama je online reputacija ključna. Ocjeni.ba nam je pomogao da se istaknemo na tržištu.",
    rating: 5,
  },
];

function TrustScoreBadge({ rating }: { rating: number }) {
  return (
    <span className="bg-amber-500 text-midnight-950 text-xs font-bold px-2.5 py-1 rounded-md">
      {rating.toFixed(1)}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="min-h-[90vh] mesh-gradient flex items-center">
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 badge mb-8">
              <Shield className="w-4 h-4" />
              Platforma broj 1 za recenzije u BiH
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Vaše iskustvo je
              <br />
              <span className="gradient-text-hero">najbolji vodič</span>
            </h1>

            <p className="text-lg md:text-xl text-midnight-300 max-w-2xl mx-auto mt-6 mb-10">
              Čitajte provjerene recenzije stvarnih kupaca. Ocjenjujte tvrtke.
              Donosite pametne odluke.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="bg-midnight-900/60 backdrop-blur-xl rounded-2xl border border-midnight-700/50 p-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tražite tvrtku, uslugu ili kategoriju..."
                    className="flex-1 bg-transparent text-white placeholder:text-midnight-500 px-4 py-3 outline-none"
                  />
                  <button className="bg-amber-500 hover:bg-amber-400 text-midnight-950 font-bold px-8 py-3 rounded-xl transition-all hover:shadow-glow">
                    Pretraži
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {topCategories.slice(0, 5).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kategorije/${cat.slug}`}
                  className="text-sm text-midnight-400 bg-midnight-800/40 hover:bg-midnight-700/60 hover:text-white px-4 py-2 rounded-full border border-midnight-700/30 transition-all"
                >
                  {cat.emoji} {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: STATS BAR
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 border-y border-midnight-800/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text">
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
          SECTION 3: KAKO RADI (Bento Style)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-3">Kako funkcioniše</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Jednostavno. Brzo. Pouzdano.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 — large */}
            <div className="col-span-2 row-span-1 bg-midnight-900/50 border border-midnight-800/50 rounded-2xl p-8">
              <span className="text-6xl font-black text-amber-500/20">
                01
              </span>
              <Search className="w-8 h-8 text-amber-500 mt-4" />
              <h3 className="text-xl font-bold text-white mt-4">
                Pronađite tvrtku
              </h3>
              <p className="text-midnight-300 mt-2 text-lg">
                Pretražite bazu tvrtki po imenu, kategoriji ili lokaciji. Sve na
                jednom mjestu u Federaciji BiH.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-midnight-900/50 border border-midnight-800/50 rounded-2xl p-8">
              <span className="text-6xl font-black text-amber-500/20">
                02
              </span>
              <MessageSquare className="w-8 h-8 text-amber-500 mt-4" />
              <h3 className="text-xl font-bold text-white mt-4">
                Pročitajte iskustva
              </h3>
              <p className="text-midnight-300 mt-2">
                Provjerena iskustva stvarnih kupaca prije nego što donesete
                odluku.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-midnight-900/50 border border-midnight-800/50 rounded-2xl p-8">
              <span className="text-6xl font-black text-amber-500/20">
                03
              </span>
              <Star className="w-8 h-8 text-amber-500 mt-4" />
              <h3 className="text-xl font-bold text-white mt-4">
                Ocijenite
              </h3>
              <p className="text-midnight-300 mt-2">
                Podijelite svoje iskustvo i pomognite drugim kupcima da izaberu
                najbolje.
              </p>
            </div>

            {/* Card 4 — amber highlight */}
            <div className="col-span-2 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-8">
              <Trophy className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-bold text-white mt-4">
                Gradite reputaciju
              </h3>
              <p className="text-midnight-300 mt-2 text-lg">
                Tvrtke s aktivnim profilom i odgovorima na recenzije privlače 3x
                više novih kupaca. gradite povjerenje svakim danom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: KATEGORIJE (Bento Grid)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 section-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="badge mb-3">Istražite</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
                Kategorije
              </h2>
            </div>
            <Link
              href="/kategorije"
              className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              Pogledaj sve <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {topCategories.slice(0, 12).map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategorije/${cat.slug}`}
                className="bg-midnight-900/50 hover:bg-midnight-800/60 border border-midnight-800/50 hover:border-amber-500/30 rounded-xl p-5 transition-all group"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <div className="font-semibold text-white group-hover:text-amber-400 transition-colors mt-3">
                  {cat.name}
                </div>
                <div className="text-xs text-midnight-500 mt-0.5">
                  {cat.count} tvrtki
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: TOP TVRTKE (Featured)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="badge mb-3">Top ocjene</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
                Najbolje ocijenjene tvrtke
              </h2>
            </div>
            <Link
              href="/tvrtke"
              className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              Sve tvrtke <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBusinesses.map((biz) => (
              <Link
                key={biz.slug}
                href={`/tvrtke/${biz.slug}`}
                className="card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white truncate group-hover:text-amber-400 transition-colors">
                        {biz.name}
                      </span>
                      {biz.verified && (
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-sm text-midnight-500 mt-0.5">
                      {biz.city} · {biz.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-midnight-800/50">
                  <TrustScoreBadge rating={biz.rating} />
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= Math.round(biz.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-midnight-700 text-midnight-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-midnight-400 font-medium">
                    {biz.reviews} recenzija
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: CTA ZA TVRTKE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-950 border border-midnight-700/50 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-600/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl p-3">
                <Building2 className="w-10 h-10 text-amber-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mt-6 mb-4">
                Povećajte povjerenje kupaca
              </h2>
              <p className="text-midnight-300 text-lg max-w-xl mx-auto mb-8">
                Besplatno se prijavite, primajte recenzije od kupaca i
                odgovarajte na njih. gradite povjerenje i broj klijenata.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tvrtke/prijava"
                  className="btn-primary"
                >
                  Prijavite tvrtku besplatno
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/cjenik" className="btn-secondary">
                  Pogledajte planove
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-midnight-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  Bez troškova
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  Analitika u realnom vremenu
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  Certifikat pouzdanosti
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: TESTIMONIALS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-3">Svjedočanstva</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Što kažu naši korisnici
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass p-8">
                <div className="flex items-center gap-0.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-midnight-200 italic mb-6">
                  &quot;{t.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-midnight-400">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: ZAŠTO OCVENI.BA
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 section-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-3">Povjerenje</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Zašto Ocjeni.ba?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mt-4">
                Provjerene recenzije
              </h3>
              <p className="text-sm text-midnight-400 mt-1.5">
                Svaka recenzija je verificirana i povezana s pravim kupovnim
                iskustvom
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mt-4">Bez lažnih ocjena</h3>
              <p className="text-sm text-midnight-400 mt-1.5">
                Napredni sustav otkriva i sprječava manipulacije ocjenama
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <Globe className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mt-4">Federacija BiH</h3>
              <p className="text-sm text-midnight-400 mt-1.5">
                Platforma pokriva sve gradove i općine Federacije Bosne i
                Hercegovine
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mt-4">Rast za tvrtke</h3>
              <p className="text-sm text-midnight-400 mt-1.5">
                Tvrtke s aktivnim recenzijama privlače 3x više novih kupaca
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
