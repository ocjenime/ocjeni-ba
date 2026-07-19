import { Metadata } from "next";
import Link from "next/link";
import { Building2, ChevronLeft } from "lucide-react";
import BusinessProfileClient from "./BusinessProfileClient";

interface BusinessData {
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  category: string;
  city: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  longDescription: string;
  founded: string;
  employees: string;
  verified: boolean;
  badge: string;
  logoUrl: string;
  coverGradient: string;
  workingHours: { day: string; hours: string }[];
  services: string[];
  reviews: {
    name: string;
    rating: number;
    date: string;
    content: string;
    helpful: number;
  }[];
  stats: { label: string; value: string }[];
  socialLinks: { platform: string; url: string; label: string }[];
}

const businesses: Record<string, BusinessData> = {
  "arilux-doo": {
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviewCount: 81,
    category: "Građevinske firme",
    city: "Velika Kladuša",
    address: "Trg Mladih bb, 77230 Velika Kladuša",
    phone: "+387 61 088 002",
    website: "https://arilux.ba",
    description:
      "Privatna građevinska firma za visoku gradnju sa sjedištem u Velikoj Kladuši. Specijalizovani za izgradnju po sistemu ključ u ruke.",
    longDescription:
      "Arilux d.o.o. je privatna građevinska firma osnovana 2022. godine sa sjedištem u Velikoj Kladuši. Od osnivanja pa do danas, pružamo visokokvalitetne, stručne i finansijski učinkovite usluge izvođenja građevinskih radova na području cijelog Unsko-sanskog kantona.\n\nKonstantno ulažemo u obuku svih kadrova i pratimo savremene trendove razvoja u području graditeljstva. Bilježimo stalni rast i visoke rezultate poslovanja što je vidljivo iz naših referenci, broja zaposlenih te mehanizacije.\n\nNudimo usluge izgradnje po sistemu \"ključ u ruke\" što investitoru uveliko olakša cijeli proces — od ideje do realizacije.",
    founded: "2022",
    employees: "10+",
    verified: true,
    badge: "top-rated",
    logoUrl:
      "https://graph.facebook.com/100092538432549/picture?type=large",
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 17:00" },
      { day: "Utorak", hours: "08:00 - 17:00" },
      { day: "Srijeda", hours: "08:00 - 17:00" },
      { day: "Četvrtak", hours: "08:00 - 17:00" },
      { day: "Petak", hours: "08:00 - 17:00" },
      { day: "Subota", hours: "09:00 - 13:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: [
      "Izgradnja po sistemu ključ u ruke",
      "Izvođenje grubih radova u visokogradnji (roh-bau)",
      "Izvođenje završnih unutrašnjih radova",
      "Izvođenje završnih vanjskih radova",
      "Izgradnja poslovno-stambenih objekata",
      "Betoniranje i armiranje",
      "Postavljanje fasade",
      "Pametna instalacija rasvjete",
    ],
    reviews: [
      {
        name: "Admir Begić",
        rating: 5,
        date: "15.06.2026.",
        content:
          "Arilux je gradio našu kuću od temelja do krova. Profesionalni, tačni i kvalitetni. Preporučujem svima koji žele pouzdanog građevinskog partnera.",
        helpful: 12,
      },
      {
        name: "Senada Hasković",
        rating: 5,
        date: "02.06.2026.",
        content:
          "Odličan tim! Radili su na našem poslovnom objektu u centru grada. Sve je urađeno po dogovoru, u roku i vrhunskog kvaliteta. Hvala Arilux timu!",
        helpful: 8,
      },
      {
        name: "Emir Talibović",
        rating: 5,
        date: "20.05.2026.",
        content:
          "Angažovali smo Arilux za renovaciju stana. Momci su profesionalci — čistoća, red i kvalitet. Cijena je fer, a rezultat je iznad očekivanja.",
        helpful: 15,
      },
      {
        name: "Fatima Mahmutagić",
        rating: 5,
        date: "10.05.2026.",
        content:
          "Arilux je gradio našu zgradu u naselju. Svaki detalj je bio pod kontrolom. Investitori su bili zadovoljni, a i mi kao izvođači radova s njima.",
        helpful: 6,
      },
      {
        name: "Haris Okanović",
        rating: 5,
        date: "28.04.2026.",
        content:
          "Vrhunska firma! Gradio sam s Ariluxom poslovni prostor. Brzina, kvalitet i profesionalnost na visokom nivou. Definitivno preporučujem.",
        helpful: 10,
      },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2022." },
      { label: "Završenih projekata", value: "50+" },
      { label: "Zaposlenih", value: "10+" },
      { label: "Ocjena", value: "5.0 ⭐" },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/100092538432549",
        label: "Arilux Građevinarstvo",
      },
      {
        platform: "Web",
        url: "https://arilux.ba",
        label: "arilux.ba",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@arilux.ba",
        label: "@arilux.ba",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@Arilux_doo",
        label: "Arilux d.o.o.",
      },
    ],
  },
  "cafe-bar-amor": {
    name: "Caffe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviewCount: 318,
    category: "Kafići",
    city: "Velika Kladuša",
    address: "Trg Mladih 5, 77230 Velika Kladuša",
    phone: "+387 61 700 896",
    website: "",
    description:
      "Omiljeni kafić u centru Velike Kladuše. Uživajte uz vaše omiljeno piće, sladoled ili kolač.",
    longDescription:
      "Caffe Bar \"Amor\" je nezavisni kafić smješten u samom centru Velike Kladuše na Trgu Mladih 5. Od svog osnivanja, Amor je postao jedno od omiljenih mjesta za kafu, druženja i zabavu.\n\nNudimo širok asortiman pića, svježe sladoled i domaće kolače u ugodnoj atmosferi. Ljetna terasa na Trgu Mladih idealno je mjesto za opuštanje tokom toplijih mjeseci.\n\nOsim svakodnevne ponude, Caffe Bar Amor je domaćin brojnih dešavanja — od sportskih večeri sa prenosima utakmica BiH reprezentacije, preko koncerata u okviru Kladuškog ljeta, do druženja i proslava.\n\nPosjetite nas i uvjerite se zašto smo jedno od omiljenih mjesta u Velikoj Kladuši!",
    founded: "2025",
    employees: "5+",
    verified: true,
    badge: "verified",
    logoUrl:
      "https://graph.facebook.com/100093204811748/picture?type=large",
    coverGradient: "from-amber-500 via-orange-500 to-red-500",
    workingHours: [
      { day: "Ponedjeljak", hours: "06:00 - 23:00" },
      { day: "Utorak", hours: "06:00 - 23:00" },
      { day: "Srijeda", hours: "06:00 - 23:00" },
      { day: "Četvrtak", hours: "06:00 - 23:00" },
      { day: "Petak", hours: "06:00 - 23:00" },
      { day: "Subota", hours: "06:00 - 23:00" },
      { day: "Nedjelja", hours: "07:00 - 23:00" },
    ],
    services: [
      "Kafa i espresso specialiteti",
      "Svježi sokovi i smoothie-ji",
      "Sladoled po narudžbi",
      "Kolači i poslastice",
      "Prenos sportskih utakmica",
      "Organizacija proslava",
      "Ljetna terasa na Trgu Mladih",
      "Dnevne i večernje zabave",
    ],
    reviews: [
      {
        name: "Amina Delić",
        rating: 5,
        date: "18.06.2026.",
        content:
          "Najbolji kafić u Velikoj Kladuši! Atmosfera je uvijek odlična, osoblje susretljivo, a kafa perfektna. Ljetna terasa je predivna.",
        helpful: 20,
      },
      {
        name: "Benjamin Kovačević",
        rating: 5,
        date: "05.06.2026.",
        content:
          "Redovno dolazim u Amor. Sladoled im je najbolji u gradu, a kad je utakmica BiH — atmosfera je kao na stadionu! Preporučujem svima.",
        helpful: 15,
      },
      {
        name: "Lejla Šabić",
        rating: 4,
        date: "22.05.2026.",
        content:
          "Odlično mjesto za kafu s prijateljima. Malo je gužva vikendom, ali to govori o kvalitetu. Sladoled i kolači su fantastični.",
        helpful: 9,
      },
      {
        name: "Mirza Hrnjić",
        rating: 5,
        date: "14.05.2026.",
        content:
          "Amor je postao naše omiljeno mjesto za porodične izlaske. Djeca obožavaju sladoled, a mi uživamo u kafi. Odličan ambijent!",
        helpful: 11,
      },
      {
        name: "Una Mesihović",
        rating: 5,
        date: "01.05.2026.",
        content:
          "Koncert na Kladuškom ljetu + kafa u Amoru = savršen spoj! Hvala vam na svim lijepim trenucima. Nastavite tako!",
        helpful: 18,
      },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2025." },
      { label: "Recenzija", value: "318" },
      { label: "Zaposlenih", value: "5+" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100093204811748",
        label: "Caffe bar Amor",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/caffe.bar.amor",
        label: "@caffe.bar.amor",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@caffe.bar.amor",
        label: "@caffe.bar.amor",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(businesses).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const business = businesses[params.slug];
  if (!business) {
    return { title: "Firma nije pronađena | Ocjeni.ba" };
  }
  return {
    title: `${business.name} - ${business.category} | Ocjeni.ba`,
    description: business.description,
  };
}

export default function BusinessProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const business = businesses[params.slug];

  if (!business) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">
            Firma nije pronađena
          </h1>
          <p className="text-secondary-500 mb-6">
            Tražena firma ne postoji na Ocjeni.ba
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
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
