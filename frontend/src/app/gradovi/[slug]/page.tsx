import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle,
} from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import { FBIH_CITIES } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { businesses, getBusinessesByCity, BusinessData } from "@/app/data/businesses";

interface CityPageProps {
  params: {
    slug: string;
  };
}

function getCityBySlug(slug: string) {
  return FBIH_CITIES.find(
    (city) => city.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function generateStaticParams() {
  return FBIH_CITIES.map((city) => ({
    slug: city.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) {
    return { title: "Grad nije pronađen | Ocjeni.ba" };
  }
  const cityBusinesses = getBusinessesByCity(city.name);
  return {
    title: `${city.name} - Firme i recenzije | Ocjeni.ba`,
    description: `Pronađite ${cityBusinesses.length} firmi i usluga u gradu ${city.name}. Čitajte recenzije, ocjene i kontakt podatke lokalnih tvrtki.`,
    openGraph: {
      title: `${city.name} | Ocjeni.ba`,
      description: `Firme i recenzije u gradu ${city.name}`,
      url: `https://ocijeni-ba-redesign.vercel.app/gradovi/${params.slug}`,
      siteName: "ocjeni.ba",
      locale: "bs_BA",
      type: "website",
    },
  };
}

function BusinessCard({ biz, index }: { biz: BusinessData; index: number }) {
  return (
    <SlideUp delay={index * 0.05}>
      <Link
        href={`/tvrtke/${biz.slug}`}
        className="group flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-5 transition-all hover:border-emerald-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
      >
        <div className="flex items-start gap-4">
          <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
            {biz.logoUrl ? (
              <Image
                src={biz.logoUrl}
                alt={biz.name}
                fill
                sizes="56px"
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <Building2 className="h-7 w-7 text-emerald-400" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-emerald-400">
                {biz.name}
              </h3>
              {biz.verified && (
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
              )}
            </div>
            <p className="text-sm text-foreground/50">{biz.category}</p>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/60">
              {biz.description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-foreground/5 pt-3">
          <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">
            {biz.rating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= Math.round(biz.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-foreground/10 text-foreground/10"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-foreground/50">{biz.reviewCount} recenzija</span>
          <ArrowRight className="ml-auto h-4 w-4 text-foreground/30 transition-colors group-hover:text-emerald-400" />
        </div>
      </Link>
    </SlideUp>
  );
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-semibold text-foreground">
            Grad nije pronađen
          </h1>
          <p className="mb-8 text-foreground/60">
            Traženi grad ne postoji ili nije u našoj bazi podataka.
          </p>
          <Link
            href="/gradovi"
            className="btn-primary inline-flex items-center gap-2"
          >
            Pogledajte sve gradove
          </Link>
        </div>
      </div>
    );
  }

  const cityBusinesses = getBusinessesByCity(city.name);
  const categories = Array.from(
    new Set(cityBusinesses.map((b) => b.categorySlug))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-black/5 dark:border-white/5">
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground/50">
            <Link href="/" className="transition-colors hover:text-emerald-400">
              Početna
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/gradovi"
              className="transition-colors hover:text-emerald-400"
            >
              Gradovi
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{city.name}</span>
          </nav>
        </div>
      </div>

      <PageHero
        label="Grad"
        title={city.name}
        subtitle={`${city.canton} · ${city.population.toLocaleString("bs-BI")} stanovnika · ${cityBusinesses.length} firmi`}
        minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          {cityBusinesses.length === 0 ? (
            <SlideUp>
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-black/[0.02] p-10 text-center md:p-14 dark:border-white/5 dark:bg-white/[0.02]">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="relative">
                  <Building2 className="mx-auto mb-4 h-12 w-12 text-foreground/30" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Trenutno nema firmi u ovom gradu
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-foreground/60">
                    Budite prvi koji će dodati firmu u {city.name}. Prijavite svoju
                    firmu besplatno.
                  </p>
                  <Link
                    href="/tvrtke/prijava"
                    className="btn-primary mt-6 inline-flex items-center gap-2"
                  >
                    Dodajte firmu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SlideUp>
          ) : (
            <div className="space-y-16">
              {categories.map((categorySlug) => {
                const categoryBusinesses = cityBusinesses.filter(
                  (b) => b.categorySlug === categorySlug
                );
                const categoryName = categoryBusinesses[0]?.category || categorySlug;
                return (
                  <div key={categorySlug}>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">
                          {categoryName}
                        </h2>
                        <p className="text-sm text-foreground/50">
                          {categoryBusinesses.length} firmi u {city.name}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {categoryBusinesses.map((biz, index) => (
                        <BusinessCard key={biz.slug} biz={biz} index={index} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 py-16 dark:border-white/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Pridružite se
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              Vaša firma nije na listi?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Prijavite firmu u {city.name} i povežite se s korisnicima koji traže
              vaše usluge.
            </p>
            <Link href="/tvrtke/prijava" className="btn-primary mt-6">
              Prijavite firmu besplatno
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
