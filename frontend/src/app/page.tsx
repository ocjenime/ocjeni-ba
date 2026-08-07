"use client";

import HeroSection from "@/app/sections/HeroSection";
import CategoryGridSection from "@/app/sections/CategoryGridSection";
import FeatureListSection from "@/app/sections/FeatureListSection";
import PlansSection from "@/app/sections/PlansSection";
import TestimonialsSection from "@/app/sections/TestimonialsSection";
import BusinessFormSection from "@/app/sections/BusinessFormSection";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "ocjeni.ba",
        url: "https://ocijeni-ba-redesign.vercel.app",
        logo: "https://ocijeni-ba-redesign.vercel.app/ocijenilogo.jpg",
        description:
          "Platforma za recenzije firmi u Bosni i Hercegovini. Hiljade provjerenih ocjena tvrtki, restorana, servisa i drugih usluga.",
        sameAs: [
          "https://www.facebook.com/ocjeni.ba",
          "https://www.instagram.com/ocjeni.ba",
        ],
      },
      {
        "@type": "WebSite",
        name: "ocjeni.ba",
        url: "https://ocijeni-ba-redesign.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://ocijeni-ba-redesign.vercel.app/tvrtke?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <CategoryGridSection />
      <FeatureListSection />
      <PlansSection />
      <TestimonialsSection />
      <BusinessFormSection />
    </div>
  );
}
