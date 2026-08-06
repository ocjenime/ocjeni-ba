"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
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
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/10"
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
  const [likedReviews, setLikedReviews] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      {/* Hero Cover */}
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={`https://source.unsplash.com/featured/1600x900?${business.category.replace(/\s+/g, ",").toLowerCase()},business`}
          alt={business.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-8">
          <Link
            href="/tvrtke"
            className="absolute top-0 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
            Sve firme
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 shadow-2xl md:h-32 md:w-32">
              <img
                src={business.logoUrl}
                alt={business.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-foreground/80">
                  {business.category}
                </span>
                {business.verified && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <Shield className="h-3 w-3" />
                    Verificirano
                  </span>
                )}
                {business.badge === "top-rated" && (
                  <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    <Award className="h-3 w-3" />
                    Top ocjena
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {business.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {business.address}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-semibold text-white">
                  {business.rating}
                </span>
                <div>
                  <StarRating rating={Math.round(business.rating)} />
                  <p className="text-sm text-foreground/50">
                    {business.reviewCount} recenzija
                  </p>
                </div>
              </div>
              <Link
                href="#recenzije"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("recenzije")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ostavi recenziju
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">O nama</h2>
              <div className="space-y-4">
                {business.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-foreground/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">Usluge</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {business.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-foreground/80">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="recenzije" className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Recenzije ({business.reviewCount})
                </h2>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="text-lg font-semibold text-white">
                    {business.rating}
                  </span>
                  <span className="text-sm text-foreground/50">/ 5.0</span>
                </div>
              </div>

              <div className="space-y-4">
                {business.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-white/5 p-5 transition-all hover:border-white/10"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
                          <span className="text-sm font-bold text-white">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{review.name}</p>
                          <p className="text-xs text-foreground/50">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-foreground/70">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-foreground/50">
                      <button
                        onClick={() =>
                          setLikedReviews((prev) => ({
                            ...prev,
                            [i]: !prev[i],
                          }))
                        }
                        className={`flex items-center gap-1 transition-colors ${
                          likedReviews[i]
                            ? "text-emerald-400"
                            : "hover:text-foreground"
                        }`}
                      >
                        <Heart
                          className={`h-3.5 w-3.5 ${
                            likedReviews[i] ? "fill-current" : ""
                          }`}
                        />
                        Korisno ({review.helpful + (likedReviews[i] ? 1 : 0)})
                      </button>
                      <button className="flex items-center gap-1 hover:text-foreground">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Odgovori
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-semibold text-white">Informacije</h3>
              <div className="grid grid-cols-2 gap-4">
                {business.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-white/5 p-3 text-center"
                  >
                    <p className="text-lg font-semibold text-emerald-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-foreground/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <Clock className="h-5 w-5 text-emerald-400" />
                Radno vrijeme
              </h3>
              <div className="space-y-2">
                {business.workingHours.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground/60">{item.day}</span>
                    <span
                      className={`font-medium ${
                        item.hours === "Zatvoreno"
                          ? "text-red-400"
                          : "text-white"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-semibold text-white">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-emerald-500/30"
                >
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">{business.phone}</p>
                    <p className="text-xs text-foreground/50">Pozovite nas</p>
                  </div>
                </a>
                <a
                  href={business.website || "#"}
                  target={business.website ? "_blank" : undefined}
                  rel={business.website ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors ${
                    business.website
                      ? "hover:border-emerald-500/30"
                      : "cursor-not-allowed opacity-50"
                  }`}
                >
                  <Globe className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {business.website
                        ? business.website.replace("https://", "")
                        : "Nema web stranice"}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {business.website
                        ? "Posjetite web stranicu"
                        : "Web stranica nije dostupna"}
                    </p>
                  </div>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-emerald-500/30"
                >
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {business.address}
                    </p>
                    <p className="text-xs text-foreground/50">Pogledajte na mapi</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-semibold text-white">Društvene mreže</h3>
              <div className="space-y-2">
                {business.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-emerald-500/30"
                  >
                    <ExternalLink className="h-4 w-4 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {link.platform}
                      </p>
                      <p className="text-xs text-foreground/50">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-6 text-white">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <h3 className="relative mb-2 font-semibold">Jeste li vlasnik?</h3>
              <p className="relative mb-4 text-sm text-white/80">
                Preuzmite svoj profil i počnite upravljati recenzijama.
              </p>
              <Link
                href="/tvrtke/prijava"
                className="relative block w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-green-600 transition-colors hover:bg-white/90"
              >
                Preuzmi profil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
