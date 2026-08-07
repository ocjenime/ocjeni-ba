import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ocjeni.ba - Recenzije firmi u Bosni i Hercegovini",
  description:
    "Hiljade provjerenih recenzija firmi u BiH. Čitajte, ocjenjujte i donosite pametne odluke o restoranima, servisima, trgovinama i drugim tvrtkama.",
  keywords: [
    "recenzije",
    "ocjene",
    "Bosna i Hercegovina",
    "BiH",
    "firme",
    "usluge",
    "proizvodi",
    "restorani",
    "servisi",
    "Cazin",
    "Sarajevo",
    "Mostar",
  ],
  metadataBase: new URL("https://ocijeni-ba-redesign.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ocjeni.ba - Platforma za recenzije",
    description: "Najpouzdaniji izvor recenzija u Bosni i Hercegovini",
    url: "https://ocijeni-ba-redesign.vercel.app",
    siteName: "ocjeni.ba",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ocjeni.ba - Recenzije firmi u BiH",
    description: "Hiljade provjerenih recenzija firmi u Bosni i Hercegovini",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TODO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
