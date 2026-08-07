"use client";

import HeroSection from "@/app/sections/HeroSection";
import CategoryGridSection from "@/app/sections/CategoryGridSection";
import FeatureListSection from "@/app/sections/FeatureListSection";
import PlansSection from "@/app/sections/PlansSection";
import TestimonialsSection from "@/app/sections/TestimonialsSection";
import BusinessFormSection from "@/app/sections/BusinessFormSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CategoryGridSection />
      <FeatureListSection />
      <PlansSection />
      <TestimonialsSection />
      <BusinessFormSection />
    </div>
  );
}
