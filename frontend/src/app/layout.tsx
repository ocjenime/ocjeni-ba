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
  description: "Hiljade provjerenih recenzija firmi u BiH. Čitajte, ocjenjujte i donosite pametne odluke.",
  keywords: ["recenzije", "ocjene", "Bosna i Hercegovina", "BiH", "firme", "usluge", "proizvodi"],
  openGraph: {
    title: "ocjeni.ba - Platforma za recenzije",
    description: "Najpouzdaniji izvor recenzija u Bosni i Hercegovini",
    url: "https://ocjeni.ba",
    siteName: "ocjeni.ba",
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
