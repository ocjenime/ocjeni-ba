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
  "pekara-bosna": {
    name: "Pekara Bosna",
    slug: "pekara-bosna",
    rating: 4.8,
    reviewCount: 456,
    category: "Hrana i piće",
    city: "Sarajevo",
    address: "Ferhadija 22, 71000 Sarajevo",
    phone: "+387 33 223 456",
    website: "https://pekara-bosna.ba",
    description: "Tradicionalna pekara s najboljim somunom i burekom u Sarajevu.",
    longDescription: "Pekara Bosna je porodična pekara koja već više od 15 godina obraduje Sarajlije tradicionalnim bosanskim specijalitetima. Nalazimo se u srcu Ferhadije, u blagom mirisu svježeg somuna i kifle.\n\nNaša misija je očuvanje tradicionalnih recepata i korištenje najkvalitetnijih prirodnih sastojaka. Svaki dan pečemo svježi somun, kifle, pogačice i tradicionalne bosanske bureke.\n\nPosebno smo ponosni na naš burek s mesom — pravljen po receptu koji se prenosi generacijama. Osim bureka, naši kupci obožavaju sirnicu, zeljanicu i krompirušu.\n\nPosjetite nas i uvjerite se zašto smo jedna od najpopularnijih pekara u Sarajevu!",
    founded: "2009",
    employees: "15+",
    verified: true,
    badge: "top-rated",
    logoUrl: "https://ui-avatars.com/api/?name=Pekara+Bosna&background=8B5CF6&color=fff&size=256",
    coverGradient: "from-violet-600 via-purple-600 to-fuchsia-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "05:00 - 20:00" },
      { day: "Utorak", hours: "05:00 - 20:00" },
      { day: "Srijeda", hours: "05:00 - 20:00" },
      { day: "Četvrtak", hours: "05:00 - 20:00" },
      { day: "Petak", hours: "05:00 - 20:00" },
      { day: "Subota", hours: "05:00 - 18:00" },
      { day: "Nedjelja", hours: "06:00 - 14:00" },
    ],
    services: ["Burek sa mesom", "Somun", "Kifle i pogačice", "Sirnica", "Zeljanica", "Krompiruša", "Pita od heljde", "Svježi kruh"],
    reviews: [
      { name: "Haris Džinić", rating: 5, date: "12.06.2026.", content: "Najbolji burek u Sarajevu, bez sumnje! Somun im je svjež svaki dan. Dolazim već 5 godina i nikad nisu razočarali.", helpful: 34 },
      { name: "Lejla Mahić", rating: 5, date: "08.06.2026.", content: "Sirnica i zeljanica su im fenomenalne. Porodična atmosfera, brza usluga i uvijek svježi proizvodi.", helpful: 21 },
      { name: "Emir Softić", rating: 4, date: "25.05.2026.", content: "Odličan burek i somun. Jedina zamjerka je što vikendom bude gužva, ali to govori o kvalitetu.", helpful: 15 },
      { name: "Aida Kreso", rating: 5, date: "18.05.2026.", content: "Krompiruša im je savršena! Kupujem svaki vikend za porodicu. Preporučujem svima.", helpful: 28 },
      { name: "Mirza Hadžić", rating: 5, date: "01.05.2026.", content: "Tradicionalna pekara s dušom. Hvala vam što čuvate bosansku tradiciju!", helpful: 19 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2009." },
      { label: "Proizvoda dnevno", value: "500+" },
      { label: "Zaposlenih", value: "15+" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/pekara-bosna", label: "Pekara Bosna" },
      { platform: "Instagram", url: "https://www.instagram.com/pekara.bosna", label: "@pekara.bosna" },
    ],
  },
  "frizerski-salon-glamour": {
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.9,
    reviewCount: 203,
    category: "Frizeri",
    city: "Mostar",
    address: "Kneza Višeslava 8, 88000 Mostar",
    phone: "+387 36 312 789",
    website: "https://salon-glamour.ba",
    description: "Modni frizerski salon s vrhunskim uslugama stiliziranja.",
    longDescription: "Frizerski salon Glamour je vodeći frizerski salon u Mostaru, poznat po vrhunskoj usluzi i modernom pristupu friziranju. Naš tim čine iskusni frizeri koji prate svjetske trendove.\n\nNudimo širok speatar usluga — od klasičnog šišanja do najsavremenijih tehnika bojanja, balayage-a i stiliziranja. Koristimo isključivo premium proizvode poznatih brendova.\n\nPosebno smo ponosni na naš bridal styling — pomoćemo vam da zablistate na svom posebnom danu.\n\nPosjetite nas i prepustite se u ruke naših stručnjaka!",
    founded: "2017",
    employees: "8",
    verified: true,
    badge: "top-rated",
    logoUrl: "https://ui-avatars.com/api/?name=Glamour&background=EC4899&color=fff&size=256",
    coverGradient: "from-pink-500 via-rose-500 to-red-500",
    workingHours: [
      { day: "Ponedjeljak", hours: "09:00 - 19:00" },
      { day: "Utorak", hours: "09:00 - 19:00" },
      { day: "Srijeda", hours: "09:00 - 19:00" },
      { day: "Četvrtak", hours: "09:00 - 20:00" },
      { day: "Petak", hours: "09:00 - 20:00" },
      { day: "Subota", hours: "09:00 - 16:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Šišanje", "Bojanje kose", "Balayage", "Bridal styling", "Frizure za posebne prilike", "Tretmani za kosu", "Prahhanje", "Pedikura"],
    reviews: [
      { name: "Adna Tabaković", rating: 5, date: "14.06.2026.", content: "Najbolji salon u Mostaru! Balayage mi je ispao savršeno. Osoblje je profesionalno i susretljivo.", helpful: 25 },
      { name: "Nermin Bubalo", rating: 5, date: "01.06.2026.", content: "Redovno dolazim već 3 godine. Uvijek izađem zadovoljan. Preporučujem svima!", helpful: 17 },
      { name: "Merima Šahinović", rating: 5, date: "22.05.2026.", content: "Bridal styling za vjenčanje — apsolutno predivno! Hvala vam na svemu!", helpful: 31 },
      { name: "Tina Marić", rating: 4, date: "10.05.2026.", content: "Odličan salon. Malo su skuplji ali kvalitet opravdava cijenu.", helpful: 12 },
      { name: "Amel Fazlić", rating: 5, date: "28.04.2026.", content: "Profesionalni pristup i odlični rezultati. Glamour je moj izbor!", helpful: 14 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2017." },
      { label: "Klijenata mjesečno", value: "300+" },
      { label: "Stilista", value: "4" },
      { label: "Ocjena", value: "4.9 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/salon-glamour-mostar", label: "Salon Glamour Mostar" },
      { platform: "Instagram", url: "https://www.instagram.com/salon.glamour", label: "@salon.glamour" },
      { platform: "TikTok", url: "https://www.tiktok.com/@salon.glamour", label: "@salon.glamour" },
    ],
  },
  "restoran-kod-brace": {
    name: "Restoran Kod Braće",
    slug: "restoran-kod-brace",
    rating: 4.7,
    reviewCount: 267,
    category: "Restorani",
    city: "Bihać",
    address: "Žrtava Domovinskog rata 15, 77000 Bihać",
    phone: "+387 37 225 100",
    website: "https://restoran-kodbracke.ba",
    description: "Tradicionalna bosanska kuhinja u srcu Bihaća.",
    longDescription: "Restoran Kod Braće je porodični restoran u Bihaću specijalizovan za tradicionalnu bosansku kuhinju. Smješten u samom centru grada, naš restoran je omiljeno mjesto i domaćih i stranih gostiju.\n\nNaši kuhari pripremaju jela po tradicionalnim receptima, koristeći svježe, lokalne namirnice. Posebno smo poznati po ćevapima, pljeskavici i dolmi.\n\nOsim unutrašnjeg prostora, nudimo i veliku ljetnu terasu s pogledom na Uni. Idealno mjesto za porodične ručkove i večere.\n\nRezervišite svoje mjesto i uživajte u autentičnom bosanskom iskustvu!",
    founded: "2014",
    employees: "12",
    verified: true,
    badge: "verified",
    logoUrl: "https://ui-avatars.com/api/?name=Kod+Braće&background=F59E0B&color=fff&size=256",
    coverGradient: "from-amber-600 via-yellow-600 to-orange-600",
    workingHours: [
      { day: "Ponedjeljak", hours: "10:00 - 22:00" },
      { day: "Utorak", hours: "10:00 - 22:00" },
      { day: "Srijeda", hours: "10:00 - 22:00" },
      { day: "Četvrtak", hours: "10:00 - 22:00" },
      { day: "Petak", hours: "10:00 - 23:00" },
      { day: "Subota", hours: "10:00 - 23:00" },
      { day: "Nedjelja", hours: "11:00 - 21:00" },
    ],
    services: ["Ćevapi", "Pljeskavica", "Dolma", "Bosanski lonac", "Burek", "Suho meso", "Begova čorba", "Ljetna terasa"],
    reviews: [
      { name: "Dragan Kojić", rating: 5, date: "10.06.2026.", content: "Najbolji ćevapi u Bihaću! Porcija je obilna, cijena fer, a atmosfera odlična. Dolazim svaki vikend.", helpful: 28 },
      { name: "Sanela Omeragić", rating: 5, date: "28.05.2026.", content: "Bosanski lonac i dolma su im fantastični. Ljetna terasa je predivna. Porodično mjesto!", helpful: 19 },
      { name: "Tomislav Pavlović", rating: 4, date: "15.05.2026.", content: "Odlična hrana i brza usluga. Malo duže čekate vikendom ali se isplati.", helpful: 11 },
      { name: "Amira Hrustić", rating: 5, date: "05.05.2026.", content: "Suho meso im je nešto najbolje što sam probala. Definitivno najbolji restoran u Bihaću.", helpful: 24 },
      { name: "Kenan Bajraktarević", rating: 4, date: "20.04.2026.", content: "Odličan izbor jela, pristupačne cijene. Preporučujem za sve posjetitelje Bihaća.", helpful: 16 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2014." },
      { label: "Jela na meniju", value: "45+" },
      { label: "Zaposlenih", value: "12" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/restoran-kod-brace", label: "Restoran Kod Braće" },
      { platform: "Instagram", url: "https://www.instagram.com/restoran.kod.brace", label: "@restoran.kod.brace" },
    ],
  },
  "auto-servis-meridian": {
    name: "Auto Servis Meridian",
    slug: "auto-servis-meridian",
    rating: 4.5,
    reviewCount: 127,
    category: "Automehaničari",
    city: "Tuzla",
    address: "Slavinovići bb, 75000 Tuzla",
    phone: "+387 35 246 300",
    website: "",
    description: "Kompletni auto servis — dijagnostika, popravke, redovni servis.",
    longDescription: "Auto Servis Meridian je moderan auto servis smješten u Slavinovićima, Tuzla. Specijalizovani smo za sve vrste popravki putničkih i lakih teretnih vozila.\n\nNudimo kompletne usluge: dijagnostiku motora, servis kočnica, zamjenu ulja i filtera, geometriju točkova, servis klima uređaja i još mnogo toga. Koristimo originalne dijelove i savremenu opremu.\n\nNaš tim čine iskusni automehaničari s višegodišnjim iskustvom. Transparentni smo u pogledu cijena — uvijek dobijete preciznu ponudu prije početka radova.\n\nVaš auto je u sigurnim rukama!",
    founded: "2018",
    employees: "6",
    verified: true,
    badge: "verified",
    logoUrl: "https://ui-avatars.com/api/?name=Meridian&background=3B82F6&color=fff&size=256",
    coverGradient: "from-blue-600 via-indigo-600 to-blue-800",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 17:00" },
      { day: "Utorak", hours: "08:00 - 17:00" },
      { day: "Srijeda", hours: "08:00 - 17:00" },
      { day: "Četvrtak", hours: "08:00 - 17:00" },
      { day: "Petak", hours: "08:00 - 17:00" },
      { day: "Subota", hours: "09:00 - 13:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Dijagnostika motora", "Servis kočnica", "Zamjena ulja i filtera", "Geometrija točkova", "Servis klime", "Zamjena guma", "Popravke motora", "Električarske usluge"],
    reviews: [
      { name: "Senad Dedić", rating: 5, date: "08.06.2026.", content: "Vrhunski servis! Dijagnoza je bila tačna, cijena fer, a auto je radio kao nov. Preporučujem!", helpful: 18 },
      { name: "Jasmina Husejinović", rating: 4, date: "25.05.2026.", content: "Redovno servisiram auto ovdje. Uvijek zadovoljna uslugom. Jedino malo duže čekanje ponekad.", helpful: 12 },
      { name: "Davor Jović", rating: 5, date: "12.05.2026.", content: "Popravili su mi klimu za sat vremena. Profesionalni i brzi. Hvala Meridian!", helpful: 9 },
      { name: "Kemal Grebo", rating: 4, date: "30.04.2026.", content: "Solidan servis s fer cijenama. Preporučujem za redovni servis.", helpful: 7 },
      { name: "Amar Mehić", rating: 5, date: "15.04.2026.", content: "Najbolji auto servis u Tuzli! Pošteni i profesionalni. Dolazim opet.", helpful: 14 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2018." },
      { label: "Servisiranih vozila", value: "2000+" },
      { label: "Zaposlenih", value: "6" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/auto-servis-meridian", label: "Auto Servis Meridian" },
    ],
  },
  "apoteka-zdravlje": {
    name: "Apoteka Zdravlje",
    slug: "apoteka-zdravlje",
    rating: 4.8,
    reviewCount: 178,
    category: "Zdravlje",
    city: "Zenica",
    address: "Kralja Tvrtka 12, 72000 Zenica",
    phone: "+387 32 447 200",
    website: "https://apoteka-zdravlje.ba",
    description: "Moderna apoteka s širokim asortimanom lijekova i suplemenata.",
    longDescription: "Apoteka Zdravlje je vodeća apoteka u Zenici, smještena u centru grada. Nudimo širok asortiman lijekova na recept i bez recepta, dijetetskih suplemenata, medicinskih pomagala i kozmetike.\n\nNaš farmaceutski tim vam je uvijek na raspolaganju za savjete o pravilnom korištenju lijekova i suplemenata. Posvećujemo posebnu pažnju individualnom pristupu svakom kupcu.\n\nOsim klasične apoteke, nudimo i usluge mjerenja krvnog pritiska i šećera u krvi. Besplatna dostava lijekova na području Zenice.\n\nZdravlje vam je naš prioritet!",
    founded: "2012",
    employees: "8",
    verified: true,
    badge: "verified",
    logoUrl: "https://ui-avatars.com/api/?name=Zdravlje&background=10B981&color=fff&size=256",
    coverGradient: "from-emerald-600 via-green-600 to-teal-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 20:00" },
      { day: "Utorak", hours: "08:00 - 20:00" },
      { day: "Srijeda", hours: "08:00 - 20:00" },
      { day: "Četvrtak", hours: "08:00 - 20:00" },
      { day: "Petak", hours: "08:00 - 20:00" },
      { day: "Subota", hours: "09:00 - 15:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Lijekovi na recept", "Lijekovi bez recepta", "Dijetetski suplementi", "Medicinska pomagala", "Kozmetika", "Mjerenje krvnog pritiska", "Mjerenje šećera", "Besplatna dostava"],
    reviews: [
      { name: "Vesna Kukić", rating: 5, date: "11.06.2026.", content: "Najbolja apoteka u Zenici! Farmaceuti su uvijek susretljivi i stručni. Besplatna dostava je odlična.", helpful: 22 },
      { name: "Ibrahim Hadžić", rating: 5, date: "02.06.2026.", content: "Uvijek imaju sve što mi treba. Cijene su pristupačne, a usluga brza i profesionalna.", helpful: 16 },
      { name: "Alma Smajlović", rating: 4, date: "20.05.2026.", content: "Odličan asortiman i stručno osoblje. Preporučujem za sve zdravstvene potrebe.", helpful: 13 },
      { name: "Miralem Pualić", rating: 5, date: "08.05.2026.", content: "Dostava na kuću za sat vremena! Ozbiljno profesionalna apoteka.", helpful: 18 },
      { name: "Sabina Kajtazović", rating: 5, date: "25.04.2026.", content: "Mjerenje krvnog pritiska besplatno — odlična usluga za penzionere. Hvala Zdravlje!", helpful: 20 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2012." },
      { label: "Proizvoda", value: "3000+" },
      { label: "Zaposlenih", value: "8" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/apoteka-zdravlje-zenica", label: "Apoteka Zdravlje" },
      { platform: "Web", url: "https://apoteka-zdravlje.ba", label: "apoteka-zdravlje.ba" },
    ],
  },
  "it-centar-digital": {
    name: "IT Centar Digital",
    slug: "it-centar-digital",
    rating: 4.6,
    reviewCount: 89,
    category: "IT i Tech",
    city: "Sarajevo",
    address: "Džidžikovac 5, 71000 Sarajevo",
    phone: "+387 33 551 678",
    website: "https://itcentar.ba",
    description: "Prodavnica računara, opreme i IT usluga po pristupačnim cijenama.",
    longDescription: "IT Centar Digital je moderan IT centar smješten u Džidžikovcu, Sarajevo. Bavimo se prodajom računara, laptopova, periferije i prateće opreme, kao i pružanjem IT usluga.\n\nNudimo širok izbor proizvoda poznatih brendova — Lenovo, HP, Dell, Apple i drugih. Naši stručnjaci će vam pomoći da odaberete idealan uređaj za vaše potrebe.\n\nPored prodaje, pružamo i usluge: instalaciju sistema, popravke računara, recovery podataka, postavljanje mreža i sigurnosne postavke.\n\nPosjetite nas ili naručite online!",
    founded: "2020",
    employees: "5",
    verified: false,
    badge: "new",
    logoUrl: "https://ui-avatars.com/api/?name=IT+Digital&background=6366F1&color=fff&size=256",
    coverGradient: "from-indigo-600 via-violet-600 to-purple-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "09:00 - 18:00" },
      { day: "Utorak", hours: "09:00 - 18:00" },
      { day: "Srijeda", hours: "09:00 - 18:00" },
      { day: "Četvrtak", hours: "09:00 - 18:00" },
      { day: "Petak", hours: "09:00 - 18:00" },
      { day: "Subota", hours: "10:00 - 15:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Prodaja računara", "Prodaja laptopova", "Popravke računara", "Instalacija sistema", "Recovery podataka", "Mrežne instalacije", "Sigurnosne postavke", "IT konsalting"],
    reviews: [
      { name: "Amir Agić", rating: 5, date: "06.06.2026.", content: "Kupio sam laptop po odličnoj cijeni. Profesionalna usluga, brza dostava. Preporučujem!", helpful: 11 },
      { name: "Naida Begić", rating: 4, date: "22.05.2026.", content: "Popravili su mi računar za jedan dan. Cijena je bila fer. Zadovoljna sam.", helpful: 8 },
      { name: "Elvir Osmančević", rating: 5, date: "10.05.2026.", content: "Najbolji IT centar u gradu. Veliki izbor, pristupačne cijene, stručno osoblje.", helpful: 14 },
      { name: "Tea Đukić", rating: 4, date: "28.04.2026.", content: "Solidan izbor opreme. Naručio sam online, sve stiglo na vrijeme.", helpful: 6 },
      { name: "Harun Kovač", rating: 5, date: "15.04.2026.", content: "Recovery podataka — spasili su mi sve fotografije. Hvala Digital!", helpful: 10 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2020." },
      { label: "Proizvoda", value: "500+" },
      { label: "Zaposlenih", value: "5" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/itcentar-digital", label: "IT Centar Digital" },
      { platform: "Web", url: "https://itcentar.ba", label: "itcentar.ba" },
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
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
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
