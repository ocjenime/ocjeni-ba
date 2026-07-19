import { Metadata } from "next";
import { FileCode, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API dokumentacija | Ocjeni.ba",
  description:
    "Integrirajte Ocjeni.ba sa svojom aplikacijom putem našeg REST API-ja.",
};

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/businesses",
    description: "Dohvatite listu firmi sa mogućnošću filtriranja po gradu, kategoriji i ocjeni.",
  },
  {
    method: "GET",
    path: "/api/v1/reviews",
    description: "Dohvatite recenzije za određenu firmu sa detaljima i ocjenama.",
  },
  {
    method: "POST",
    path: "/api/v1/reviews",
    description: "Pošaljite novu recenziju za firmu. Zahtjeva autentifikaciju.",
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-100 text-emerald-700",
  POST: "bg-blue-100 text-blue-700",
  PUT: "bg-amber-100 text-amber-700",
  DELETE: "bg-red-100 text-red-700",
};

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
              <FileCode className="w-6 h-6 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              API dokumentacija
            </h1>
          </div>
          <p className="text-gray-500 text-lg">
            Integrirajte Ocjeni.ba sa svojom aplikacijom putem našeg REST
            API-ja.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-800">
              API je trenutno u razvoju
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Endpointi prikazani u nastavku su planirani i bit će dostupni u
              budućem izdanju. Pratite naše obavijesti za novosti.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Dostupni endpointi
          </h2>
          <div className="space-y-3">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.path + endpoint.method}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md ${methodColors[endpoint.method]}`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono text-gray-800">
                    {endpoint.path}
                  </code>
                </div>
                <p className="text-sm text-gray-500 ml-0.5">
                  {endpoint.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Trebate pristup API-ju?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            API pristup je dostupan u Business i Enterprise planovima.
            Kontaktirajte nas za više informacija.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Prijavite firmu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
