import Link from "next/link";
import {
  Search,
  Star,
  Shield,
  Building2,
  MessageSquare,
  ArrowRight,
  MapPin,
  TrendingUp,
  CheckCircle,
  Zap,
  Globe,
  Award,
  Crown,
  Heart,
  Target,
  Sparkles,
  Users,
  BarChart3,
  Bell,
  Lock,
  Mail,
  CheckCircle2,
  ChevronRight,
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
    badge: "top-rated",
  },
  {
    name: "Auto Servis Mehmed",
    slug: "auto-servis-mehmed",
    rating: 4.6,
    reviews: 156,
    category: "Automehaničari",
    city: "Tuzla",
    verified: true,
    badge: "verified",
  },
  {
    name: "Restoran Stari Most",
    slug: "restoran-stari-most",
    rating: 4.9,
    reviews: 312,
    category: "Restorani",
    city: "Mostar",
    verified: true,
    badge: "top-rated",
  },
  {
    name: "Digital Solutions BiH",
    slug: "digital-solutions-bih",
    rating: 4.7,
    reviews: 89,
    category: "IT firme",
    city: "Sarajevo",
    verified: true,
    badge: "active",
  },
  {
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.5,
    reviews: 178,
    category: "Frizerski saloni",
    city: "Zenica",
    verified: true,
    badge: "verified",
  },
  {
    name: "Graditelj d.o.o.",
    slug: "graditelj-doo",
    rating: 4.8,
    reviews: 67,
    category: "Građevinske firme",
    city: "Bihać",
    verified: true,
    badge: "new",
  },
  {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviews: 81,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    verified: true,
    badge: "top-rated",
  },
  {
    name: "Cafe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviews: 318,
    category: "Kafići",
    city: "Velika Kladuša",
    verified: true,
    badge: "verified",
  },
];

const stats = [
  { value: "10,000+", label: "Firmi" },
  { value: "500,000+", label: "Recenzija" },
  { value: "50+", label: "Gradova" },
  { value: "4.8", label: "Prosjek" },
];

const testimonials = [
  {
    name: "Mirza K.",
    company: "Restoran Stari Most",
    role: "Vlasnik",
    content: "Otkad koristimo Ocjeni.ba, broj naših gostiju se povećao za 40%. Kupci nam dolaze jer vide naše odlične recenzije.",
    rating: 5,
  },
  {
    name: "Amira S.",
    company: "Auto Servis Mehmed",
    role: "Menadžerica",
    content: "Platforma nam je pomogla da shvatimo šta kupci zaista misle o nama. Sada znamo gdje se poboljšati.",
    rating: 5,
  },
  {
    name: "Dragan P.",
    company: "Digital Solutions BiH",
    role: "CEO",
    content: "Kao IT firma, nama je online reputacija ključna. Ocjeni.ba nam je pomogao da se istaknemo na tržištu.",
    rating: 5,
  },
];

function TrustScoreBadge({ rating }: { rating: number }) {
  const getColor = (r: number) => {
    if (r >= 4.5) return "bg-emerald-500";
    if (r >= 3.5) return "bg-emerald-400";
    if (r >= 2.5) return "bg-amber-400";
    if (r >= 1.5) return "bg-orange-400";
    return "bg-red-400";
  };

  return (
    <span
      className={`${getColor(rating)} text-white text-xs font-bold px-2.5 py-1 rounded-md`}
    >
      {rating.toFixed(1)}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Platforma broj 1 za recenzije u BiH
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
              Vaše iskustvo je
              <br />
              <span className="text-emerald-200">najbolji vodič</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Hiljade provjerenih recenzija od stvarnih građana BiH. Vaša odluka zaslužuje prave informacije.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex bg-white rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20">
                <div className="flex-1 flex items-center">
                  <Search className="w-5 h-5 text-gray-400 ml-5" />
                  <input
                    type="text"
                    placeholder="Tražite firmu, uslugu ili kategoriju..."
                    className="w-full px-4 py-5 text-gray-900 text-lg outline-none placeholder:text-gray-400"
                  />
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 font-semibold transition-colors">
                  Pretraži
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {topCategories.slice(0, 5).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kategorije/${cat.slug}`}
                  className="text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all"
                >
                  {cat.emoji} {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako radi */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Jednostavno
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Kako funkcioniše?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                <Search className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="absolute top-5 left-16 text-5xl font-black text-emerald-100 hidden md:block">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Pretražite
              </h3>
              <p className="text-gray-500">
                Pronađite firmu po imenu, kategoriji ili lokaciji. Sve na
                jednom mjestu.
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="absolute top-5 left-16 text-5xl font-black text-emerald-100 hidden md:block">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Istražite
              </h3>
              <p className="text-gray-500">
                Pročitajte provjerena iskustva drugih kupaca prije nego što
                donesete odluku.
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="absolute top-5 left-16 text-5xl font-black text-emerald-100 hidden md:block">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Podijelite
              </h3>
              <p className="text-gray-500">
                Ostavite svoju recenziju i pomognite drugim kupcima da izaberu
                najbolje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorije */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
                Istražite
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Kategorije
              </h2>
            </div>
            <Link
              href="/kategorije"
              className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1"
            >
              Pogledaj sve <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {topCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategorije/${cat.slug}`}
                className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <div className="font-semibold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {cat.count} firmi
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top tvrtke */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
                Top ocjene
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Najbolje ocijenjene firme u BiH
              </h2>
            </div>
            <Link
              href="/tvrtke"
              className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1"
            >
              Sve firme <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBusinesses.map((biz) => (
              <Link
                key={biz.slug}
                href={`/tvrtke/${biz.slug}`}
                className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 truncate group-hover:text-emerald-600 transition-colors">
                        {biz.name}
                      </span>
                      {biz.verified && (
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {biz.city} · {biz.category}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  <TrustScoreBadge rating={biz.rating} />
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= Math.round(biz.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {biz.reviews} recenzija
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Za tvrtke */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vaša firma zaslužuje vidljivost
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                10,000+ firmi već koristi Ocjeni.ba. Vaša firma može biti sljedeća — besplatno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tvrtke/prijava"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-lg"
                >
                  Prijavite firmu besplatno
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/cjenik"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-lg"
                >
                  Pogledajte planove
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Bez troškova
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Odgovarajte na recenzije
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Analitika
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Svjedočanstva
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Šta kažu firme koje već rastu s nama
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zašto mi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Povjerenje
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Zašto 10,000+ firmi bira Ocjeni.ba?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">
                Provjerene recenzije
              </h3>
              <p className="text-sm text-gray-500">
                Svaka recenzija je verificirana i povezana s pravim kupovnim
                iskustvom
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">
                Zaštićeni od lažnih recenzija
              </h3>
              <p className="text-sm text-gray-500">
                Napredni sistem otkriva i sprječava manipulacije ocjenama
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">
                Pokrivenost cijelom FBiH
              </h3>
              <p className="text-sm text-gray-500">
                Platforma pokriva sve gradove i općine Federacije Bosne i
                Hercegovine
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">
                Rast za firme
              </h3>
              <p className="text-sm text-gray-500">
                Firme s aktivnim recenzijama privlače 3x više novih kupaca
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
