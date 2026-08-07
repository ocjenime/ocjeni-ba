import { MetadataRoute } from "next";
import { businesses } from "@/app/data/businesses";
import { FBIH_CITIES } from "@/lib/constants";

const BASE_URL = "https://ocijeni-ba-redesign.vercel.app";

const staticPaths = [
  "/",
  "/tvrtke",
  "/gradovi",
  "/kategorije",
  "/cjenik",
  "/kontakt",
  "/prijava",
  "/registracija",
  "/za-tvrtke",
  "/najnovije",
  "/widgeti",
  "/api",
  "/kolacici",
  "/pravila",
  "/privatnost",
];

const categorySlugs = [
  "hrana-i-pice",
  "trgovine",
  "automobilizam",
  "gradjevinarstvo",
  "nekretnine",
  "zdravlje",
  "obrazovanje",
  "usluge",
  "frizerski-saloni",
  "tehnologija",
  "finansije",
  "putovanja",
  "sport-i-rekreacija",
  "kultura-i-zabava",
  "smjestaj",
  "transport",
  "zastita-i-sigurnost",
  "ljubimci",
  "ostalo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/kategorije/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = FBIH_CITIES.map((city) => ({
    url: `${BASE_URL}/gradovi/${city.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const businessRoutes: MetadataRoute.Sitemap = businesses.map((business) => ({
    url: `${BASE_URL}/tvrtke/${business.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...routes, ...categoryRoutes, ...cityRoutes, ...businessRoutes];
}
