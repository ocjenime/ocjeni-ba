import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ArrowRight,
  ChevronRight,
  FolderOpen,
} from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import { FBIH_CITIES } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";

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
  return {
    title: `${city.name} | Ocjeni.ba`,
    description: `Firme i recenzije u gradu ${city.name}.`,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-semibold text-white">
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

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-white/5">
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
            <span className="font-medium text-white">{city.name}</span>
          </nav>
        </div>
      </div>

      <PageHero
        label="Grad"
        title={city.name}
        subtitle={`${city.canton} · ${city.population.toLocaleString("bs-BI")} stanovnika`}
                minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <SlideUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center md:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative">
                <FolderOpen className="mx-auto mb-4 h-12 w-12 text-foreground/30" />
                <h2 className="text-xl font-semibold text-white">
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
        </div>
      </section>
    </div>
  );
}
