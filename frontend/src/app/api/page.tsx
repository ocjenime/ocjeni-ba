import { Metadata } from "next";
import { FileCode, AlertTriangle, ArrowRight, Code, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import PageHero from "@/components/ui/PageHero";

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
  GET: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  POST: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  PUT: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  DELETE: "bg-red-500/15 text-red-400 border-red-500/25",
};

const features = [
  {
    icon: Code,
    title: "Jednostavna integracija",
    description: "RESTful endpointi s JSON odgovorima i jasnom dokumentacijom.",
  },
  {
    icon: Globe,
    title: "Webhooks",
    description: "Primajte notifikacije o novim recenzijama i događajima u realnom vremenu.",
  },
  {
    icon: Zap,
    title: "Brzi odgovori",
    description: "Optimizirani serveri osiguravaju nisku latenciju za sve pozive.",
  },
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Integracije"
        title="API dokumentacija"
        subtitle="Integrirajte Ocjeni.ba sa svojom aplikacijom putem našeg REST API-ja."
        backgroundImage="/images/hero-bg.svg"
      />

      <div className="container mx-auto max-w-3xl px-4 py-16">
        {/* Notice */}
        <FadeIn delay={0.1}>
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
            <div>
              <p className="font-semibold text-amber-200">API je trenutno u razvoju</p>
              <p className="mt-1 text-sm text-amber-200/70">
                Endpointi prikazani u nastavku su planirani i bit će dostupni u
                budućem izdanju. Pratite naše obavijesti za novosti.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Endpoints */}
        <FadeIn delay={0.2} className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Dostupni endpointi
          </h2>
          <div className="space-y-3">
            {endpoints.map((endpoint, index) => (
              <SlideUp key={endpoint.path + endpoint.method} delay={index * 0.05}>
                <div className="card group">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-md border px-2.5 py-1 text-xs font-bold ${methodColors[endpoint.method]}`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm text-emerald-300">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-sm text-foreground/60">
                    {endpoint.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </FadeIn>

        {/* Features */}
        <SlideUp className="mb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature, index) => (
              <SlideUp key={feature.title} delay={index * 0.1}>
                <div className="card text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-foreground/50">
                    {feature.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </SlideUp>

        {/* CTA */}
        <SlideUp>
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <FileCode className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Trebate pristup API-ju?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-foreground/60">
                API pristup je dostupan u Business i Enterprise planovima.
                Kontaktirajte nas za više informacija.
              </p>
              <Link href="/tvrtke/prijava" className="btn-primary mt-6">
                Prijavite firmu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
