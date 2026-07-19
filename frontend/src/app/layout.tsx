import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocjeni.ba - Recenzije firmi u Bosni i Hercegovini",
  description: "Hiljade provjerenih recenzija firmi u BiH. Čitajte, ocjenjujte i donosite pametne odluke.",
  keywords: ["recenzije", "ocjene", "Bosna i Hercegovina", "BiH", "firme", "usluge", "proizvodi"],
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
