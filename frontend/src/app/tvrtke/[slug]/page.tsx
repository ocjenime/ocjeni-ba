import { Metadata } from "next";
import Link from "next/link";
import { Building2, ChevronLeft } from "lucide-react";
import BusinessProfileClient from "./BusinessProfileClient";
import { businesses, getBusinessBySlug, BusinessData } from "@/app/data/businesses";

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const business = getBusinessBySlug(params.slug);
  if (!business) {
    return { title: "Firma nije pronađena | Ocjeni.ba" };
  }
  return {
    title: `${business.name} - ${business.category} | Ocjeni.ba`,
    description: business.description,
    openGraph: {
      title: `${business.name} | Ocjeni.ba`,
      description: business.description,
      url: `https://ocijeni-ba-redesign.vercel.app/tvrtke/${business.slug}`,
      siteName: "ocjeni.ba",
      locale: "bs_BA",
      type: "website",
    },
  };
}

export default function BusinessProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Firma nije pronađena
          </h1>
          <p className="text-foreground/50 mb-6">
            Tražena firma ne postoji na ocijeni.ba
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <ChevronLeft className="w-5 h-5" />
            Nazad na početnu
          </Link>
        </div>
      </div>
    );
  }

  return <BusinessProfileClient business={business} />;
}
