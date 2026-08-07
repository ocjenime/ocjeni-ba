"use client";

import Link from "next/link";
import { useState } from "react";
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
  Award,
  CheckCircle,
  ArrowRight,
  Send,
  X,
  ImageIcon,
  Mail,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { BusinessData, Review } from "@/app/data/businesses";
import Image from "next/image";

function StarRating({ rating, size = "md", interactive = false, onRate }: { rating: number; size?: "sm" | "md" | "lg"; interactive?: boolean; onRate?: (r: number) => void }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onRate?.(star)}
          className={interactive ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            className={`${sizeClasses[size]} ${
              star <= rating
                ? "fill-amber-400 text-amber-400"
                : "fill-foreground/10 text-foreground/10"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function BusinessProfileClient({
  business,
}: {
  business: BusinessData;
}) {
  const [likedReviews, setLikedReviews] = useState<Record<number, boolean>>({});
  const [reviews, setReviews] = useState<Review[]>(business.reviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewContent, setNewReviewContent] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: business.images[0] || business.logoUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.split(",")[0],
      addressLocality: business.city,
      addressCountry: "BA",
    },
    telephone: business.phone,
    url: business.website || `https://ocijeni-ba-redesign.vercel.app/tvrtke/${business.slug}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    priceRange: "$$",
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewContent.trim()) return;
    const review: Review = {
      name: newReviewName.trim(),
      rating: newReviewRating,
      date: new Date().toLocaleDateString("bs-BA"),
      content: newReviewContent.trim(),
      helpful: 0,
    };
    setReviews((prev) => [review, ...prev]);
    setNewReviewName("");
    setNewReviewContent("");
    setNewReviewRating(5);
    setShowReviewForm(false);
  };

  const handleSubmitReply = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    if (!replyContent.trim()) return;
    // In a real app this would persist a reply; here we acknowledge it
    setReplyingTo(null);
    setReplyContent("");
    alert(`Odgovor na recenziju #${index + 1} poslan: ${replyContent.trim()}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label={business.category}
        title={business.name}
        subtitle={business.description}
        minHeight="min-h-[55vh]"
      />

      <div className="container mx-auto -mt-16 px-4 pb-12 relative z-20">
        <div className="rounded-3xl border border-black/5 bg-white/[0.03] p-6 backdrop-blur-sm shadow-2xl md:p-8 dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-foreground/10 bg-foreground/5 shadow-2xl md:h-32 md:w-32">
              <Image
                src={business.logoUrl}
                alt={business.name}
                fill
                sizes="(min-width: 768px) 128px, 96px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
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
                {business.badge === "new" && (
                  <span className="flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    Novo
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {business.address}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </div>
                {business.email && (
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    {business.email}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-semibold text-foreground">
                  {business.rating}
                </span>
                <div>
                  <StarRating rating={Math.round(business.rating)} />
                  <p className="text-sm text-foreground/50">
                    {business.reviewCount} recenzija
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReviewForm((v) => !v)}
                className="btn-primary"
              >
                Ostavi recenziju
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 md:p-8 dark:border-white/5 dark:bg-white/[0.02]">
              <h2 className="mb-4 text-xl font-semibold text-foreground">O nama</h2>
              <div className="space-y-4">
                {business.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-foreground/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {business.images.length > 0 && (
              <section className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 md:p-8 dark:border-white/5 dark:bg-white/[0.02]">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
                  <ImageIcon className="h-5 w-5 text-emerald-400" />
                  Galerija
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {business.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-video overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img}
                        alt={`${business.name} - slika ${i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 md:p-8 dark:border-white/5 dark:bg-white/[0.02]">
              <h2 className="mb-4 text-xl font-semibold text-foreground">Usluge</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {business.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 dark:border-white/5 dark:bg-white/5"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-foreground/80">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="recenzije" className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 md:p-8 dark:border-white/5 dark:bg-white/[0.02]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Recenzije ({reviews.length})
                </h2>
                <div className="flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="text-lg font-semibold text-foreground">
                    {business.rating}
                  </span>
                  <span className="text-sm text-foreground/50">/ 5.0</span>
                </div>
              </div>

              {showReviewForm && (
                <form
                  onSubmit={handleSubmitReview}
                  className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5"
                >
                  <h3 className="mb-3 font-semibold text-foreground">Napišite recenziju</h3>
                  <div className="mb-3">
                    <label className="mb-1 block text-sm text-foreground/70">Vaše ime</label>
                    <input
                      type="text"
                      value={newReviewName}
                      onChange={(e) => setNewReviewName(e.target.value)}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-3 py-2 text-foreground outline-none focus:border-emerald-400/50"
                      placeholder="Ime i prezime"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 block text-sm text-foreground/70">Ocjena</label>
                    <StarRating
                      rating={newReviewRating}
                      interactive
                      onRate={setNewReviewRating}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 block text-sm text-foreground/70">Recenzija</label>
                    <textarea
                      value={newReviewContent}
                      onChange={(e) => setNewReviewContent(e.target.value)}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-3 py-2 text-foreground outline-none focus:border-emerald-400/50"
                      rows={4}
                      placeholder="Podijelite svoje iskustvo..."
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="btn-primary flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Pošalji recenziju
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="rounded-lg border border-foreground/10 px-4 py-2 text-sm text-foreground/70 hover:bg-foreground/5"
                    >
                      Odustani
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-black/5 bg-black/[0.03] p-5 transition-all hover:border-black/10 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
                          <span className="text-sm font-bold text-white">
                            {getInitials(review.name)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{review.name}</p>
                          <p className="text-xs text-foreground/50">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-foreground/70">
                      {review.content}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/50">
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
                      <button
                        onClick={() => setReplyingTo(replyingTo === i ? null : i)}
                        className="flex items-center gap-1 hover:text-foreground"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        Odgovori
                      </button>
                    </div>

                    {replyingTo === i && (
                      <form
                        onSubmit={(e) => handleSubmitReply(e, i)}
                        className="mt-4 rounded-lg border border-foreground/10 bg-foreground/5 p-3"
                      >
                        <textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          className="w-full rounded-lg border border-foreground/10 bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-emerald-400/50"
                          rows={3}
                          placeholder="Napišite odgovor..."
                          required
                        />
                        <div className="mt-2 flex gap-2">
                          <button type="submit" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-600">
                            Pošalji odgovor
                          </button>
                          <button
                            type="button"
                            onClick={() => setReplyingTo(null)}
                            className="rounded-lg border border-foreground/10 px-3 py-1.5 text-xs text-foreground/70 hover:bg-foreground/5"
                          >
                            Odustani
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 font-semibold text-foreground">Informacije</h3>
              <div className="grid grid-cols-2 gap-4">
                {business.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-black/5 bg-black/[0.03] p-3 text-center dark:border-white/5 dark:bg-white/5"
                  >
                    <p className="text-lg font-semibold text-emerald-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-foreground/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
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
                          : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 font-semibold text-foreground">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 transition-colors hover:border-emerald-500/30 dark:border-white/5 dark:bg-white/5"
                >
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{business.phone}</p>
                    <p className="text-xs text-foreground/50">Pozovite nas</p>
                  </div>
                </a>
                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="group flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 transition-colors hover:border-emerald-500/30 dark:border-white/5 dark:bg-white/5"
                  >
                    <Mail className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{business.email}</p>
                      <p className="text-xs text-foreground/50">Pošaljite email</p>
                    </div>
                  </a>
                )}
                <a
                  href={business.website || "#"}
                  target={business.website ? "_blank" : undefined}
                  rel={business.website ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 transition-colors dark:border-white/5 dark:bg-white/5 ${
                    business.website
                      ? "hover:border-emerald-500/30"
                      : "cursor-not-allowed opacity-50"
                  }`}
                >
                  <Globe className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
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
                  className="group flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 transition-colors hover:border-emerald-500/30 dark:border-white/5 dark:bg-white/5"
                >
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {business.address}
                    </p>
                    <p className="text-xs text-foreground/50">Pogledajte na mapi</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 font-semibold text-foreground">Društvene mreže</h3>
              <div className="space-y-2">
                {business.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.03] p-3 transition-colors hover:border-emerald-500/30 dark:border-white/5 dark:bg-white/5"
                  >
                    <ExternalLink className="h-4 w-4 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[80vh] w-[90vw]">
            <Image
              src={selectedImage}
              alt="Uvećana slika"
              fill
              sizes="90vw"
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
