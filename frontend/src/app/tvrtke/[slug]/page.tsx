import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  Shield,
  Heart,
  MessageSquare,
  ExternalLink,
  ChevronLeft,
  Building2,
  Users,
  Award,
  TrendingUp,
  Facebook,
  Instagram,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface BusinessData {
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  category: string;
  city: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  longDescription: string;
  founded: string;
  employees: string;
  verified: boolean;
  badge: string;
  logoUrl: string;
  coverGradient: string;
  workingHours: { day: string; hours: string }[];
  services: string[];
  reviews: {
    name: string;
    rating: number;
    date: string;
    content: string;
    helpful: number;
  }[];
  stats: { label: string; value: string }[];
  socialLinks: { platform: string; url: string; label: string }[];
}

const businesses: Record<string, BusinessData> = {
  "arilux-doo": {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviewCount: 10,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    address: "Trg Mladih bb, 77230 Velika Kladuša",
    phone: "+387 61 088 002",
    website: "https://arilux.ba",
    description:
      "Privatna građevinska firma za visoku gradnju sa sjedištem u Velikoj Kladuši. Specijalizovani za izgradnju po sistemu ključ u ruke.",
    longDescription:
      "Arilux d.o.o. je privatna građevinska firma osnovana 2022. godine sa sjedištem u Velikoj Kladuši. Od osnivanja pa do danas, pružamo visokokvalitetne, stručne i finansijski učinkovite usluge izvođenja građevinskih radova na području cijelog Unsko-sanskog kantona.\n\nKonstantno ulažemo u obuku svih kadrova i pratimo savremene trendove razvoja u području graditeljstva. Bilježimo stalni rast i visoke rezultate poslovanja što je vidljivo iz naših referenci, broja zaposlenih te mehanizacije.\n\nNudimo usluge izgradnje po sistemu \"ključ u ruke\" što investitoru uveliko olakša cijeli proces — od ideje do realizacije.",
    founded: "2022",
    employees: "10+",
    verified: true,
    badge: "top-rated",
    logoUrl:
      "https://graph.facebook.com/100092538432549/picture?type=large",
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 17:00" },
      { day: "Utorak", hours: "08:00 - 17:00" },
      { day: "Srijeda", hours: "08:00 - 17:00" },
      { day: "Četvrtak", hours: "08:00 - 17:00" },
      { day: "Petak", hours: "08:00 - 17:00" },
      { day: "Subota", hours: "09:00 - 13:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: [
      "Izgradnja po sistemu ključ u ruke",
      "Izvođenje grubih radova u visokogradnji (roh-bau)",
      "Izvođenje završnih unutrašnjih radova",
      "Izvođenje završnih vanjskih radova",
      "Izgradnja poslovno-stambenih objekata",
      "Betoniranje i armiranje",
      "Postavljanje fasade",
      "Pametna instalacija rasvjete",
    ],
    reviews: [
      {
        name: "Admir Begić",
        rating: 5,
        date: "15.06.2026.",
        content:
          "Arilux je gradio našu kuću od temelja do krova. Profesionalni, tačni i kvalitetni. Preporučujem svima koji žele pouzdanog građevinskog partnera.",
        helpful: 12,
      },
      {
        name: "Senada Hasković",
        rating: 5,
        date: "02.06.2026.",
        content:
          "Odličan tim! Radili su na našem poslovnom objektu u centru grada. Sve je urađeno po dogovoru, u roku i vrhunskog kvaliteta. Hvala Arilux timu!",
        helpful: 8,
      },
      {
        name: "Emir Talibović",
        rating: 5,
        date: "20.05.2026.",
        content:
          "Angažovali smo Arilux za renovaciju stana. Momci su profesionalci — čistoća, red i kvalitet. Cijena je fer, a rezultat je iznad očekivanja.",
        helpful: 15,
      },
      {
        name: "Fatima Mahmutagić",
        rating: 5,
        date: "10.05.2026.",
        content:
          "Arilux je gradio našu zgradu u naselju. Svaki detalj je bio pod kontrolom. Investitori su bili zadovoljni, a i mi kao izvođači radova s njima.",
        helpful: 6,
      },
      {
        name: "Haris Okanović",
        rating: 5,
        date: "28.04.2026.",
        content:
          "Vrhunska firma! Gradio sam s Ariluxom poslovni prostor. Brzina, kvalitet i profesionalnost na visokom nivou. Definitivno preporučujem.",
        helpful: 10,
      },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2022." },
      { label: "Završenih projekata", value: "50+" },
      { label: "Zaposlenih", value: "10+" },
      { label: "Ocjena", value: "5.0 ⭐" },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/100092538432549",
        label: "Arilux Građevinarstvo",
      },
      {
        platform: "Web",
        url: "https://arilux.ba",
        label: "arilux.ba",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@arilux.ba",
        label: "@arilux.ba",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@Arilux_doo",
        label: "Arilux d.o.o.",
      },
    ],
  },
  "cafe-bar-amor": {
    name: "Caffe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviewCount: 14,
    category: "Kafići",
    city: "Velika Kladuša",
    address: "Trg Mladih 5, 77230 Velika Kladuša",
    phone: "+387 61 700 896",
    website: "",
    description:
      "Omiljeni kafić u centru Velike Kladuše. Uživajte uz vaše omiljeno piće, sladoled ili kolač.",
    longDescription:
      "Caffe Bar \"Amor\" je nezavisni kafić smješten u samom centru Velike Kladuše na Trgu Mladih 5, u vlasništvu Ivana Blažeka. Od svog osnivanja, Amor je postao jedno od omiljenih mjesta za kafu, druženja i zabavu.\n\nNudimo širok asortiman pića, svježe sladoled i domaće kolače u ugodnoj atmosferi. Ljetna terasa na Trgu Mladih idealno je mjesto za opuštanje tokom toplijih mjeseci.\n\nOsim svakodnevne ponude, Caffe Bar Amor je domaćin brojnih dešavanja — od sportskih večeri sa prenosima utakmica BiH reprezentacije, preko koncerata u okviru Kladuškog ljeta, do druženja i proslava.\n\nPosjetite nas i uvjerite se zašto smo jedno od omiljenih mjesta u Velikoj Kladuši!",
    founded: "2025",
    employees: "5+",
    verified: true,
    badge: "verified",
    logoUrl:
      "https://graph.facebook.com/100093204811748/picture?type=large",
    coverGradient: "from-amber-500 via-orange-500 to-red-500",
    workingHours: [
      { day: "Ponedjeljak", hours: "06:00 - 23:00" },
      { day: "Utorak", hours: "06:00 - 23:00" },
      { day: "Srijeda", hours: "06:00 - 23:00" },
      { day: "Četvrtak", hours: "06:00 - 23:00" },
      { day: "Petak", hours: "06:00 - 23:00" },
      { day: "Subota", hours: "06:00 - 23:00" },
      { day: "Nedjelja", hours: "07:00 - 23:00" },
    ],
    services: [
      "Kafa i espresso specialiteti",
      "Svježi sokovi i smoothie-ji",
      "Sladoled po narudžbi",
      "Kolači i poslastice",
      "Prenos sportskih utakmica",
      "Organizacija proslava",
      "Ljetna terasa na Trgu Mladih",
      "Dnevne i večernje zabave",
    ],
    reviews: [
      {
        name: "Amina Delić",
        rating: 5,
        date: "18.06.2026.",
        content:
          "Najbolji kafić u Velikoj Kladuši! Atmosfera je uvijek odlična, osoblje susretljivo, a kafa perfektna. Ljetna terasa je predivna.",
        helpful: 20,
      },
      {
        name: "Benjamin Kovačević",
        rating: 5,
        date: "05.06.2026.",
        content:
          "Redovno dolazim u Amor. Sladoled im je najbolji u gradu, a kad je utakmica BiH — atmosfera je kao na stadionu! Preporučujem svima.",
        helpful: 15,
      },
      {
        name: "Lejla Šabić",
        rating: 4,
        date: "22.05.2026.",
        content:
          "Odlično mjesto za kafu s prijateljima. Malo je gužva vikendom, ali to govori o kvalitetu. Sladoled i kolači su fantastični.",
        helpful: 9,
      },
      {
        name: "Mirza Hrnjić",
        rating: 5,
        date: "14.05.2026.",
        content:
          "Amor je postao naše omiljeno mjesto za porodične izlaske. Djeca obožavaju sladoled, a mi uživamo u kafi. Odličan ambijent!",
        helpful: 11,
      },
      {
        name: "Una Mesihović",
        rating: 5,
        date: "01.05.2026.",
        content:
          "Koncert na Kladuškom ljetu + kafa u Amoru = savršen spoj! Hvala vam na svim lijepim trenucima. Nastavite tako!",
        helpful: 18,
      },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2025." },
      { label: "Posjeta dnevno", value: "100+" },
      { label: "Zaposlenih", value: "5+" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100093204811748",
        label: "Caffe bar Amor",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/caffe.bar.amor",
        label: "@caffe.bar.amor",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@caffe.bar.amor",
        label: "@caffe.bar.amor",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(businesses).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const business = businesses[params.slug];
  if (!business) {
    return { title: "Firma nije pronađena | Ocjeni.ba" };
  }
  return {
    title: `${business.name} - ${business.category} | Ocjeni.ba`,
    description: business.description,
  };
}

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function BusinessProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const business = businesses[params.slug];

  if (!business) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">
            Firma nije pronađena
          </h1>
          <p className="text-secondary-500 mb-6">
            Tražena firma ne postoji na Ocjeni.ba
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Nazad na početnu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Cover */}
      <div
        className={`relative bg-gradient-to-br ${business.coverGradient} text-white`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Ocjeni.ba
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white shadow-2xl flex-shrink-0">
              <img
                src={business.logoUrl}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {business.name}
                </h1>
                {business.verified && (
                  <CheckCircle className="w-7 h-7 text-emerald-300 flex-shrink-0" />
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {business.category}
                </span>
                <div className="flex items-center gap-2">
                  <StarRating rating={business.rating} />
                  <span className="font-bold text-lg">{business.rating}</span>
                  <span className="text-white/70">
                    ({business.reviewCount} recenzija)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {business.address}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {business.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-secondary-100 shadow-sm">
              <h2 className="text-xl font-bold text-secondary-900 mb-4">
                O nama
              </h2>
              <div className="prose prose-secondary max-w-none">
                {business.longDescription
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p key={i} className="text-secondary-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-secondary-100 shadow-sm">
              <h2 className="text-xl font-bold text-secondary-900 mb-4">
                Usluge
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {business.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-700 text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-secondary-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-secondary-900">
                  Recenzije ({business.reviewCount})
                </h2>
                <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-primary-700 text-lg">
                    {business.rating}
                  </span>
                  <span className="text-primary-600 text-sm">/ 5.0</span>
                </div>
              </div>

              <div className="space-y-4">
                {business.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="border border-secondary-100 rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary-600">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-secondary-900">
                              {review.name}
                            </p>
                            <p className="text-xs text-secondary-400">
                              {review.date}
                            </p>
                          </div>
                        </div>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="text-secondary-600 text-sm leading-relaxed mb-3">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-secondary-400">
                      <button className="flex items-center gap-1 hover:text-primary-500 transition-colors">
                        <Heart className="w-3.5 h-3.5" />
                        Korisno ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary-500 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Odgovori
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                  Učitaj još recenzija
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm">
              <h3 className="font-bold text-secondary-900 mb-4">
                Informacije
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {business.stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-secondary-50 rounded-lg">
                    <p className="text-lg font-bold text-primary-600">
                      {stat.value}
                    </p>
                    <p className="text-xs text-secondary-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm">
              <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                Radno vrijeme
              </h3>
              <div className="space-y-2">
                {business.workingHours.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-secondary-600">{item.day}</span>
                    <span
                      className={`font-medium ${
                        item.hours === "Zatvoreno"
                          ? "text-red-500"
                          : "text-secondary-900"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm">
              <h3 className="font-bold text-secondary-900 mb-4">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                      {business.phone}
                    </p>
                    <p className="text-xs text-secondary-400">Pozovite nas</p>
                  </div>
                </a>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <Globe className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                      {business.website.replace("https://", "")}
                    </p>
                    <p className="text-xs text-secondary-400">
                      Posjetite web stranicu
                    </p>
                  </div>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                      {business.address}
                    </p>
                    <p className="text-xs text-secondary-400">
                      Pogledajte na mapi
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm">
              <h3 className="font-bold text-secondary-900 mb-4">
                Društvene mreže
              </h3>
              <div className="space-y-2">
                {business.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-primary-500" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                        {link.platform}
                      </p>
                      <p className="text-xs text-secondary-400">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Jeste li vlasnik?</h3>
              <p className="text-primary-100 text-sm mb-4">
                Preuzmite svoj profil na Ocjeni.ba i počnite upravljati recenzijama.
              </p>
              <Link
                href="/tvrtke/prijava"
                className="block w-full text-center bg-white text-primary-600 px-4 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Preuzmi profil
              </Link>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm">
              <h3 className="font-bold text-secondary-900 mb-4">
                Postignuća
              </h3>
              <div className="space-y-3">
                {business.badge === "top-rated" && (
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-sm font-bold text-yellow-800">
                        Top Ocjena
                      </p>
                      <p className="text-xs text-yellow-600">
                        5.0 zvjezdica — najbolja ocjena!
                      </p>
                    </div>
                  </div>
                )}
                {business.verified && (
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <Shield className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="text-sm font-bold text-emerald-800">
                        Verificirana firma
                      </p>
                      <p className="text-xs text-emerald-600">
                        Identitet potvrđen
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-sm font-bold text-blue-800">
                      Aktivna firma
                    </p>
                    <p className="text-xs text-blue-600">
                      Redovno odgovara na recenzije
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
