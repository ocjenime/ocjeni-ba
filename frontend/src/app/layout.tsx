import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocjeni.ba - Platforma za recenzije u Bosni i Hercegovini",
  description: "Pronađite najbolje tvrtke u BiH na temelju provjerenih recenzija. Čitajte, pišite i dijelite recenzije proizvoda i usluga.",
  keywords: ["recenzije", "ocjene", "Bosna i Hercegovina", "BiH", "tvrtke", "usluge", "proizvodi"],
  openGraph: {
    title: "Ocjeni.ba - Platforma za recenzije",
    description: "Najpouzdaniji izvor recenzija u Bosni i Hercegovini",
    url: "https://ocjeni.ba",
    siteName: "Ocjeni.ba",
    locale: "bs_BA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
