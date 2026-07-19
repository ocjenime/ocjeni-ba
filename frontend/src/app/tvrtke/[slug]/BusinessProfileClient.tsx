"use client";

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
  TrendingUp,
  Award,
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

export default function BusinessProfileClient({
  business,
}: {
  business: BusinessData;
}) {
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
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white shadow-2xl flex-shrink-0">
              <img
                src={business.logoUrl}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            </div>

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
          <div className="lg:col-span-2 space-y-8">
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
                      <button
                        onClick={() => alert("Hvala vam na povratnoj informaciji!")}
                        className="flex items-center gap-1 hover:text-primary-500 transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        Korisno ({review.helpful})
                      </button>
                      <button
                        onClick={() => alert("Funkcija odgovora će uskoro biti dostupna.")}
                        className="flex items-center gap-1 hover:text-primary-500 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Odgovori
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => alert("Učitavanje dodatnih recenzija će uskoro biti dostupno.")}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Učitaj još recenzija
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>

          <div className="space-y-6">
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
                  href={business.website || "#"}
                  target={business.website ? "_blank" : undefined}
                  rel={business.website ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 p-3 bg-secondary-50 rounded-lg transition-colors group ${business.website ? "hover:bg-primary-50" : "opacity-50 cursor-not-allowed"}`}
                >
                  <Globe className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                      {business.website ? business.website.replace("https://", "") : "Nema web stranice"}
                    </p>
                    <p className="text-xs text-secondary-400">
                      {business.website ? "Posjetite web stranicu" : "Web stranica nije dostupna"}
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
