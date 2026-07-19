import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ArrowRight,
  ChevronRight,
  FolderOpen,
} from "lucide-react";
import { FBIH_CITIES } from "@/lib/constants";

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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Grad nije pronađen
          </h1>
          <p className="text-gray-500 mb-8">
            Traženi grad ne postoji ili nije u našoj bazi podataka.
          </p>
          <Link
            href="/gradovi"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors"
          >
            Pogledajte sve gradove
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Početna
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/gradovi"
              className="hover:text-emerald-600 transition-colors"
            >
              Gradovi
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{city.name}</span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{city.name}</h1>
              <p className="text-gray-500 text-sm">
                {city.canton} · {city.population.toLocaleString("bs-BI")}{" "}
                stanovnika
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 text-center">
          <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Trenutno nema firmi u ovom gradu
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Budite prvi koji će dodati firmu u {city.name}. Prijavite svoju
            firmu besplatno.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Dodajte firmu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
