import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tvrtke/dashboard", "/tvrtke/login"],
    },
    sitemap: "https://ocijeni-ba-redesign.vercel.app/sitemap.xml",
  };
}
