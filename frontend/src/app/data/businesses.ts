export interface Review {
  name: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

export interface WorkingHour {
  day: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface BusinessStat {
  label: string;
  value: string;
}

export interface BusinessData {
  id: string;
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  category: string;
  categorySlug: string;
  subcategory?: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
  website: string;
  description: string;
  longDescription: string;
  founded: string;
  employees: string;
  verified: boolean;
  badge: "verified" | "top-rated" | "new" | "trending" | "";
  logoUrl: string;
  images: string[];
  coverGradient: string;
  workingHours: WorkingHour[];
  services: string[];
  reviews: Review[];
  stats: BusinessStat[];
  socialLinks: SocialLink[];
}

const DEFAULT_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "08:00 - 17:00" },
  { day: "Utorak", hours: "08:00 - 17:00" },
  { day: "Srijeda", hours: "08:00 - 17:00" },
  { day: "Četvrtak", hours: "08:00 - 17:00" },
  { day: "Petak", hours: "08:00 - 17:00" },
  { day: "Subota", hours: "09:00 - 14:00" },
  { day: "Nedjelja", hours: "Zatvoreno" },
];

const RESTAURANT_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "08:00 - 23:00" },
  { day: "Utorak", hours: "08:00 - 23:00" },
  { day: "Srijeda", hours: "08:00 - 23:00" },
  { day: "Četvrtak", hours: "08:00 - 23:00" },
  { day: "Petak", hours: "08:00 - 24:00" },
  { day: "Subota", hours: "08:00 - 24:00" },
  { day: "Nedjelja", hours: "09:00 - 22:00" },
];

const CAFE_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "06:00 - 23:00" },
  { day: "Utorak", hours: "06:00 - 23:00" },
  { day: "Srijeda", hours: "06:00 - 23:00" },
  { day: "Četvrtak", hours: "06:00 - 23:00" },
  { day: "Petak", hours: "06:00 - 24:00" },
  { day: "Subota", hours: "06:00 - 24:00" },
  { day: "Nedjelja", hours: "07:00 - 22:00" },
];

const SHOP_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "07:00 - 21:00" },
  { day: "Utorak", hours: "07:00 - 21:00" },
  { day: "Srijeda", hours: "07:00 - 21:00" },
  { day: "Četvrtak", hours: "07:00 - 21:00" },
  { day: "Petak", hours: "07:00 - 21:00" },
  { day: "Subota", hours: "07:00 - 21:00" },
  { day: "Nedjelja", hours: "08:00 - 14:00" },
];

const SALON_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "09:00 - 19:00" },
  { day: "Utorak", hours: "09:00 - 19:00" },
  { day: "Srijeda", hours: "09:00 - 19:00" },
  { day: "Četvrtak", hours: "09:00 - 19:00" },
  { day: "Petak", hours: "09:00 - 19:00" },
  { day: "Subota", hours: "09:00 - 16:00" },
  { day: "Nedjelja", hours: "Zatvoreno" },
];

const PHARMACY_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "08:00 - 20:00" },
  { day: "Utorak", hours: "08:00 - 20:00" },
  { day: "Srijeda", hours: "08:00 - 20:00" },
  { day: "Četvrtak", hours: "08:00 - 20:00" },
  { day: "Petak", hours: "08:00 - 20:00" },
  { day: "Subota", hours: "09:00 - 15:00" },
  { day: "Nedjelja", hours: "Zatvoreno" },
];

const HOTEL_HOURS: WorkingHour[] = [
  { day: "Ponedjeljak", hours: "00:00 - 24:00" },
  { day: "Utorak", hours: "00:00 - 24:00" },
  { day: "Srijeda", hours: "00:00 - 24:00" },
  { day: "Četvrtak", hours: "00:00 - 24:00" },
  { day: "Petak", hours: "00:00 - 24:00" },
  { day: "Subota", hours: "00:00 - 24:00" },
  { day: "Nedjelja", hours: "00:00 - 24:00" },
];

const REVIEWS_POOL: Review[] = [
  { name: "Amir Husić", rating: 5, date: "15.07.2026.", content: "Iznimno zadovoljan uslugom. Osoblje je profesionalno i ljubazno. Svakako preporučujem.", helpful: 12 },
  { name: "Lejla Begić", rating: 5, date: "02.07.2026.", content: "Odlična lokacija i kvalitet. Cijene su pristupačne, a atmosfera ugodna. Dolazim opet.", helpful: 8 },
  { name: "Senad Tufekčić", rating: 4, date: "20.06.2026.", content: "Vrlo dobro iskustvo. Jedino malo duže čekanje, ali kvaliteta je na visini.", helpful: 5 },
  { name: "Fatima Dedić", rating: 5, date: "10.06.2026.", content: "Najbolji u gradu! Brza usluga, ljubazno osoblje i odličan odnos cijene i kvalitete.", helpful: 15 },
  { name: "Haris Kovačević", rating: 5, date: "28.05.2026.", content: "Preporučujem svima koji traže kvalitetu i pouzdanost. Sve pohvale za tim.", helpful: 9 },
  { name: "Amina Smajić", rating: 4, date: "15.05.2026.", content: "Dobro iskustvo. Usluga je korektna i cijene razumne. Vratit ću se sigurno.", helpful: 6 },
];

function getReviews(count: number): Review[] {
  return REVIEWS_POOL.slice(0, count);
}

function avatar(name: string, color = "10B981"): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color}&color=fff&size=256`;
}

function unsplash(id: string): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

function makeBusiness(b: Partial<BusinessData> & Pick<BusinessData, "id" | "name" | "slug" | "category" | "categorySlug" | "city" | "address" | "description" | "longDescription" | "services">): BusinessData {
  const id = b.id;
  const name = b.name;
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  const color = b.coverGradient?.includes("emerald") ? "10B981" :
    b.coverGradient?.includes("blue") ? "3B82F6" :
    b.coverGradient?.includes("amber") ? "F59E0B" :
    b.coverGradient?.includes("pink") ? "EC4899" :
    b.coverGradient?.includes("violet") ? "8B5CF6" :
    b.coverGradient?.includes("orange") ? "F97316" :
    b.coverGradient?.includes("red") ? "EF4444" :
    b.coverGradient?.includes("cyan") ? "06B6D4" :
    b.coverGradient?.includes("indigo") ? "6366F1" :
    b.coverGradient?.includes("teal") ? "14B8A6" : "10B981";

  return {
    rating: 4.7,
    reviewCount: 42,
    phone: "+387 37 000 000",
    website: "",
    email: "",
    founded: "2015",
    employees: "5",
    verified: true,
    badge: "verified",
    coverGradient: "from-emerald-600 via-green-600 to-teal-700",
    workingHours: DEFAULT_HOURS,
    ...b,
    id,
    name,
    slug: b.slug,
    category: b.category,
    categorySlug: b.categorySlug,
    city: b.city,
    address: b.address,
    description: b.description,
    longDescription: b.longDescription,
    services: b.services,
    logoUrl: b.logoUrl || avatar(name, color),
    images: b.images?.length ? b.images : [unsplash("1517248135467-4c7edcad34c4")],
    stats: b.stats || [
      { label: "Godina osnivanja", value: b.founded || "2015" },
      { label: "Zaposlenih", value: b.employees || "5" },
      { label: "Ocjena", value: `${b.rating?.toFixed(1) || "4.7"} ⭐` },
      { label: "Recenzija", value: String(b.reviewCount || 42) },
    ],
    reviews: b.reviews || getReviews(4),
    socialLinks: b.socialLinks || [{ platform: "Facebook", url: `https://www.facebook.com/${b.slug}`, label: name }],
  } as BusinessData;
}

// =============================================================================
// POSTOJEĆE TVRTKE
// =============================================================================

export const businesses: BusinessData[] = [
  {
    id: "arilux",
    name: "Arilux D.O.O.",
    slug: "arilux-doo",
    rating: 5.0,
    reviewCount: 81,
    category: "Građevinarstvo",
    categorySlug: "gradjevinarstvo",
    subcategory: "Građevinske firme",
    city: "Velika Kladuša",
    address: "Trg Mladih bb, 77230 Velika Kladuša",
    phone: "+387 61 088 002",
    website: "https://arilux.ba",
    description: "Privatna građevinska firma za visoku gradnju sa sjedištem u Velikoj Kladuši. Specijalizovani za izgradnju po sistemu ključ u ruke.",
    longDescription: "Arilux d.o.o. je privatna građevinska firma osnovana 2022. godine sa sjedištem u Velikoj Kladuši. Od osnivanja pa do danas, pružamo visokokvalitetne, stručne i finansijski učinkovite usluge izvođenja građevinskih radova na području cijelog Unsko-sanskog kantona.\n\nKonstantno ulažemo u obuku svih kadrova i pratimo savremene trendove razvoja u području graditeljstva. Bilježimo stalni rast i visoke rezultate poslovanja što je vidljivo iz naših referenci, broja zaposlenih te mehanizacije.\n\nNudimo usluge izgradnje po sistemu \"ključ u ruke\" što investitoru uveliko olakša cijeli proces — od ideje do realizacije.",
    founded: "2022",
    employees: "10+",
    verified: true,
    badge: "top-rated",
    logoUrl: "https://graph.facebook.com/100092538432549/picture?type=large",
    images: [
      unsplash("1503387762-592deb58ef4e"),
      unsplash("1541888946425-d81bb19240f5"),
    ],
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
      { name: "Admir Begić", rating: 5, date: "15.06.2026.", content: "Arilux je gradio našu kuću od temelja do krova. Profesionalni, tačni i kvalitetni. Preporučujem svima koji žele pouzdanog građevinskog partnera.", helpful: 12 },
      { name: "Senada Hasković", rating: 5, date: "02.06.2026.", content: "Odličan tim! Radili su na našem poslovnom objektu u centru grada. Sve je urađeno po dogovoru, u roku i vrhunskog kvaliteta. Hvala Arilux timu!", helpful: 8 },
      { name: "Emir Talibović", rating: 5, date: "20.05.2026.", content: "Angažovali smo Arilux za renovaciju stana. Momci su profesionalci — čistoća, red i kvalitet. Cijena je fer, a rezultat je iznad očekivanja.", helpful: 15 },
      { name: "Fatima Mahmutagić", rating: 5, date: "10.05.2026.", content: "Arilux je gradio našu zgradu u naselju. Svaki detalj je bio pod kontrolom. Investitori su bili zadovoljni, a i mi kao izvođači radova s njima.", helpful: 6 },
      { name: "Haris Okanović", rating: 5, date: "28.04.2026.", content: "Vrhunska firma! Gradio sam s Ariluxom poslovni prostor. Brzina, kvalitet i profesionalnost na visokom nivou. Definitivno preporučujem.", helpful: 10 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2022." },
      { label: "Završenih projekata", value: "50+" },
      { label: "Zaposlenih", value: "10+" },
      { label: "Ocjena", value: "5.0 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/100092538432549", label: "Arilux Građevinarstvo" },
      { platform: "Web", url: "https://arilux.ba", label: "arilux.ba" },
      { platform: "TikTok", url: "https://www.tiktok.com/@arilux.ba", label: "@arilux.ba" },
      { platform: "YouTube", url: "https://www.youtube.com/@Arilux_doo", label: "Arilux d.o.o." },
    ],
  },
  {
    id: "cafe-amor",
    name: "Caffe Bar Amor",
    slug: "cafe-bar-amor",
    rating: 4.7,
    reviewCount: 318,
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Kafići",
    city: "Velika Kladuša",
    address: "Trg Mladih 5, 77230 Velika Kladuša",
    phone: "+387 61 700 896",
    website: "",
    description: "Omiljeni kafić u centru Velike Kladuše. Uživajte uz vaše omiljeno piće, sladoled ili kolač.",
    longDescription: "Caffe Bar \"Amor\" je nezavisni kafić smješten u samom centru Velike Kladuše na Trgu Mladih 5. Od svog osnivanja, Amor je postao jedno od omiljenih mjesta za kafu, druženja i zabavu.\n\nNudimo širok asortiman pića, svježe sladoled i domaće kolače u ugodnoj atmosferi. Ljetna terasa na Trgu Mladih idealno je mjesto za opuštanje tokom toplijih mjeseci.\n\nOsim svakodnevne ponude, Caffe Bar Amor je domaćin brojnih dešavanja — od sportskih večeri sa prenosima utakmica BiH reprezentacije, preko koncerata u okviru Kladuškog ljeta, do druženja i proslava.\n\nPosjetite nas i uvjerite se zašto smo jedno od omiljenih mjesta u Velikoj Kladuši!",
    founded: "2025",
    employees: "5+",
    verified: true,
    badge: "verified",
    logoUrl: "https://graph.facebook.com/100093204811748/picture?type=large",
    images: [
      unsplash("1509042239860-f550ce710b93"),
      unsplash("1445116572660-236099ec97a0"),
    ],
    coverGradient: "from-amber-500 via-orange-500 to-red-500",
    workingHours: CAFE_HOURS,
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
      { name: "Amina Delić", rating: 5, date: "18.06.2026.", content: "Najbolji kafić u Velikoj Kladuši! Atmosfera je uvijek odlična, osoblje susretljivo, a kafa perfektna. Ljetna terasa je predivna.", helpful: 20 },
      { name: "Benjamin Kovačević", rating: 5, date: "05.06.2026.", content: "Redovno dolazim u Amor. Sladoled im je najbolji u gradu, a kad je utakmica BiH — atmosfera je kao na stadionu! Preporučujem svima.", helpful: 15 },
      { name: "Lejla Šabić", rating: 4, date: "22.05.2026.", content: "Odlično mjesto za kafu s prijateljima. Malo je gužva vikendom, ali to govori o kvalitetu. Sladoled i kolači su fantastični.", helpful: 9 },
      { name: "Mirza Hrnjić", rating: 5, date: "14.05.2026.", content: "Amor je postao naše omiljeno mjesto za porodične izlaske. Djeca obožavaju sladoled, a mi uživamo u kafi. Odličan ambijent!", helpful: 11 },
      { name: "Una Mesihović", rating: 5, date: "01.05.2026.", content: "Koncert na Kladuškom ljetu + kafa u Amoru = savršen spoj! Hvala vam na svim lijepim trenucima. Nastavite tako!", helpful: 18 },
    ],
    stats: [
      { label: "Godina osnivanja", value: "2025." },
      { label: "Recenzija", value: "318" },
      { label: "Zaposlenih", value: "5+" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100093204811748", label: "Caffe bar Amor" },
      { platform: "Instagram", url: "https://www.instagram.com/caffe.bar.amor", label: "@caffe.bar.amor" },
      { platform: "TikTok", url: "https://www.tiktok.com/@caffe.bar.amor", label: "@caffe.bar.amor" },
    ],
  },
  {
    id: "pekara-bosna",
    name: "Pekara Bosna",
    slug: "pekara-bosna",
    rating: 4.8,
    reviewCount: 456,
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Pekare",
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
    logoUrl: avatar("Pekara Bosna", "8B5CF6"),
    images: [
      unsplash("1509440159596-0249088772ff"),
      unsplash("1517433677267-08d4bfad2a25"),
    ],
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
  {
    id: "glamour",
    name: "Frizerski Salon Glamour",
    slug: "frizerski-salon-glamour",
    rating: 4.9,
    reviewCount: 203,
    category: "Frizerski saloni",
    categorySlug: "frizerski-saloni",
    subcategory: "Frizerski saloni",
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
    logoUrl: avatar("Glamour", "EC4899"),
    images: [
      unsplash("1560066984-138dffb4c03b"),
      unsplash("1522337360788-8b13dee7a37e"),
    ],
    coverGradient: "from-pink-500 via-rose-500 to-red-500",
    workingHours: SALON_HOURS,
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
  {
    id: "kod-brace",
    name: "Restoran Kod Braće",
    slug: "restoran-kod-brace",
    rating: 4.7,
    reviewCount: 267,
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Restorani",
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
    logoUrl: avatar("Kod Braće", "F59E0B"),
    images: [
      unsplash("1559339352-11d035aa65de"),
      unsplash("1550966871-3ed3c47e2ce2"),
    ],
    coverGradient: "from-amber-600 via-yellow-600 to-orange-600",
    workingHours: RESTAURANT_HOURS,
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
  {
    id: "meridian",
    name: "Auto Servis Meridian",
    slug: "auto-servis-meridian",
    rating: 4.5,
    reviewCount: 127,
    category: "Automobilizam",
    categorySlug: "automobilizam",
    subcategory: "Auto servisi",
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
    logoUrl: avatar("Meridian", "3B82F6"),
    images: [
      unsplash("1486262715619-67b85e0b08d3"),
      unsplash("1580273916550-e323be2ae537"),
    ],
    coverGradient: "from-blue-600 via-indigo-600 to-blue-800",
    workingHours: DEFAULT_HOURS,
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
  {
    id: "zdravlje",
    name: "Apoteka Zdravlje",
    slug: "apoteka-zdravlje",
    rating: 4.8,
    reviewCount: 178,
    category: "Zdravlje",
    categorySlug: "zdravlje",
    subcategory: "Apoteke",
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
    logoUrl: avatar("Zdravlje", "10B981"),
    images: [
      unsplash("1585435557343-3e092621c591"),
      unsplash("1579684385127-1ef15d508118"),
    ],
    coverGradient: "from-emerald-600 via-green-600 to-teal-700",
    workingHours: PHARMACY_HOURS,
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
  {
    id: "it-digital",
    name: "IT Centar Digital",
    slug: "it-centar-digital",
    rating: 4.6,
    reviewCount: 89,
    category: "Tehnologija",
    categorySlug: "tehnologija",
    subcategory: "Servisi računara",
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
    logoUrl: avatar("IT Digital", "6366F1"),
    images: [
      unsplash("1518770660439-4636190af475"),
      unsplash("1531297424000-9d5e5f57488a"),
    ],
    coverGradient: "from-indigo-600 via-violet-600 to-purple-700",
    workingHours: DEFAULT_HOURS,
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

  // =============================================================================
  // CAZIN - Hrana i piće
  // =============================================================================
  makeBusiness({
    id: "cazin-restoran-basar",
    name: "Restoran Bašar",
    slug: "restoran-basar-cazin",
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Restorani",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 5, 77220 Cazin",
    phone: "+387 37 515 100",
    website: "",
    description: "Porodični restoran u centru Cazina s tradicionalnom bosanskom kuhinjom i ljetnom terasom.",
    longDescription: "Restoran Bašar je porodični restoran smješten u samom srcu Cazina na Trgu Alije Izetbegovića. Specijalizirani smo za tradicionalna bosanska jela pripremljena po receptima naših predaka.\n\nNaš ambijent je topao i porodičan, a ljetna terasa omiljeno je mjesto za ručak i večeru tokom toplijih mjeseci. Ponosni smo na svježe namirnice iz lokalnog okruženja i gostoprimstvo koje pamtite.\n\nOrganiziramo i porodične proslave, poslovne ručkove i manja vjenčanja. Dođite i uvjerite se zašto su naši ćevapi i bosanski lonac među najboljima u Cazinu.",
    founded: "2010",
    employees: "12",
    rating: 4.6,
    reviewCount: 128,
    verified: true,
    badge: "verified",
    coverGradient: "from-amber-600 via-orange-600 to-red-600",
    workingHours: RESTAURANT_HOURS,
    services: ["Tradicionalna bosanska kuhinja", "Ćevapi", "Bosanski lonac", "Ljetna terasa", "Porodične proslave", "Poslovni ručkovi", "Dnevni meni", "Dostava hrane"],
    images: [unsplash("1559339352-11d035aa65de"), unsplash("1547592166-23ac45744acd")],
    stats: [
      { label: "Godina osnivanja", value: "2010." },
      { label: "Kapacitet", value: "80 mjesta" },
      { label: "Zaposlenih", value: "12" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-pekara-mrvica",
    name: "Pekara Mrvica",
    slug: "pekara-mrvica-cazin",
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Pekare",
    city: "Cazin",
    address: "Ulica 8. septembra 12, 77220 Cazin",
    phone: "+387 37 515 205",
    website: "",
    description: "Svjež somun, burek i domaće pecivo svakog jutra u Cazinu.",
    longDescription: "Pekara Mrvica je porodična pekara u Cazinu poznata po svježem somunu, bureku i tradicionalnim bosanskim pecivima. Svakog jutra iz naših pećnica izlazi miris koji privlači stanovnike cijelog grada.\n\nKoristimo kvalitetno brašno i tradicionalne recepte koji se prenose s koljena na koljeno. Osim klasičnih bureka, nudimo sirnicu, zeljanicu, krompirušu, kifle i svježi kruh.\n\nPekara Mrvica je omiljeno jutarnje okupljalište Cazinaca. Posjetite nas i počnite dan s toplim pecivom iz naše pećnice.",
    founded: "2008",
    employees: "6",
    rating: 4.8,
    reviewCount: 215,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-orange-500 via-amber-500 to-yellow-500",
    workingHours: [
      { day: "Ponedjeljak", hours: "05:00 - 20:00" },
      { day: "Utorak", hours: "05:00 - 20:00" },
      { day: "Srijeda", hours: "05:00 - 20:00" },
      { day: "Četvrtak", hours: "05:00 - 20:00" },
      { day: "Petak", hours: "05:00 - 20:00" },
      { day: "Subota", hours: "05:00 - 18:00" },
      { day: "Nedjelja", hours: "06:00 - 14:00" },
    ],
    services: ["Burek", "Somun", "Sirnica", "Zeljanica", "Krompiruša", "Kifle", "Svježi kruh", "Slani kolači"],
    images: [unsplash("1509440159596-0249088772ff"), unsplash("1517433677267-08d4bfad2a25")],
    stats: [
      { label: "Godina osnivanja", value: "2008." },
      { label: "Peciva dnevno", value: "800+" },
      { label: "Zaposlenih", value: "6" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-kafana-una",
    name: "Kafana Una",
    slug: "kafana-una-cazin",
    category: "Hrana i piće",
    categorySlug: "hrana-i-pice",
    subcategory: "Kafići",
    city: "Cazin",
    address: "Ulica Mladih Muslimana 8, 77220 Cazin",
    phone: "+387 37 515 330",
    website: "",
    description: "Omiljeno mjesto za kafu, čaj i druženje u opuštenoj atmosferi.",
    longDescription: "Kafana Una je tradicionalna bosanska kafana u Cazinu gdje se okupljaju prijatelji, obitelji i poslovni partneri. Poznati smo po kvalitetnoj kafi, domaćim kolačima i ugodnoj atmosferi.\n\nNudimo širok izbor toplih i hladnih napitaka, svježih sokova i domaćih slastica. Vikendom organiziramo uživo glazbu i druženja uz sportski prenose.\n\nDođite na jutarnju kafu, poslijepodnevni čaj ili večernje izlaske. U Kafani Una uvijek ste dobrodošli.",
    founded: "2012",
    employees: "4",
    rating: 4.5,
    reviewCount: 98,
    verified: true,
    badge: "verified",
    coverGradient: "from-amber-700 via-orange-700 to-red-700",
    workingHours: CAFE_HOURS,
    services: ["Kafa i espresso", "Čajevi", "Domaći kolači", "Svježi sokovi", "Uživo glazba", "Sportski prenosi", "Druženja i proslave"],
    images: [unsplash("1509042239860-f550ce710b93"), unsplash("1445116572660-236099ec97a0")],
    stats: [
      { label: "Godina osnivanja", value: "2012." },
      { label: "Kapacitet", value: "50 mjesta" },
      { label: "Zaposlenih", value: "4" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Trgovine
  // =============================================================================
  makeBusiness({
    id: "cazin-market-cazin",
    name: "Market Cazin",
    slug: "market-cazin",
    category: "Trgovine",
    categorySlug: "trgovine",
    subcategory: "Mali marketi",
    city: "Cazin",
    address: "Ulica AVNOJ-a 22, 77220 Cazin",
    phone: "+387 37 515 400",
    website: "",
    description: "Domaći supermarket s širokim asortimanom prehrambenih i kućanskih proizvoda.",
    longDescription: "Market Cazin je lokalni supermarket koji već godinama opskrbljuje stanovnike Cazina kvalitetnim prehrambenim proizvodima, svježim voćem i povrćem, te kućanskim potrepštinama.\n\nPonosimo se brzom uslugom, povoljnim cijenama i stalnim akcijama za naše vjerne kupce. U ponudi imamo i domaće proizvode iz okolnih sela.\n\nMarket Cazin je mjesto gdje možete brzo i jednostavno obaviti dnevnu kupovinu. Radujemo se vašem posjetu.",
    founded: "2005",
    employees: "10",
    rating: 4.4,
    reviewCount: 156,
    verified: true,
    badge: "verified",
    coverGradient: "from-emerald-600 via-green-600 to-teal-600",
    workingHours: SHOP_HOURS,
    services: ["Prehrambeni proizvodi", "Svježe voće i povrće", "Mliječni proizvodi", "Meso i mesne prerađevine", "Kućanske potrepštine", "Domaći proizvodi", "Akcije i popusti"],
    images: [unsplash("1542838132-92c53300491e"), unsplash("1604719312566-8912e9227c8b")],
    stats: [
      { label: "Godina osnivanja", value: "2005." },
      { label: "Proizvoda", value: "3500+" },
      { label: "Zaposlenih", value: "10" },
      { label: "Ocjena", value: "4.4 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-butik-moderna",
    name: "Butik Moderna",
    slug: "butik-moderna-cazin",
    category: "Trgovine",
    categorySlug: "trgovine",
    subcategory: "Prodavnice odjeće",
    city: "Cazin",
    address: "Ulica Srebreničkih žrtava 14, 77220 Cazin",
    phone: "+387 37 515 520",
    website: "",
    description: "Modna odjeća i obuća za cijelu obitelj po pristupačnim cijenama.",
    longDescription: "Butik Moderna je modna trgovina u Cazinu koja nudi odjeću i obuću za žene, muškarce i djecu. Pratimo aktualne trendove i biramo kvalitetne komade za svaku priliku.\n\nU našoj ponudi možete pronaći casual odjeću, poslovne kombinacije, sportsku odjeću, obuću i modne dodatke. Osoblje je ljubazno i spremno pomoći pri odabiru.\n\nRedovno organiziramo sezonske rasprodaje i akcije za vjerne kupce. Posjetite nas i osvježite svoj ormar.",
    founded: "2014",
    employees: "4",
    rating: 4.3,
    reviewCount: 87,
    verified: true,
    badge: "verified",
    coverGradient: "from-pink-500 via-rose-500 to-purple-500",
    workingHours: SHOP_HOURS,
    services: ["Ženska odjeća", "Muška odjeća", "Dječja odjeća", "Obuća", "Modni dodaci", "Sezonske rasprodaje", "Savjetovanje pri kupovini"],
    images: [unsplash("1489987707025-afc232f29215"), unsplash("1445205170230-053b83016050")],
    stats: [
      { label: "Godina osnivanja", value: "2014." },
      { label: "Brendova", value: "25+" },
      { label: "Zaposlenih", value: "4" },
      { label: "Ocjena", value: "4.3 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Automobilizam
  // =============================================================================
  makeBusiness({
    id: "cazin-auto-centar",
    name: "Auto Centar Cazin",
    slug: "auto-centar-cazin",
    category: "Automobilizam",
    categorySlug: "automobilizam",
    subcategory: "Auto servisi",
    city: "Cazin",
    address: "Industrijska zona bb, 77220 Cazin",
    phone: "+387 37 515 600",
    website: "",
    description: "Kompletan auto servis, dijagnostika i prodaja auto dijelova u Cazinu.",
    longDescription: "Auto Centar Cazin je moderno opremljen servis za sve vrste putničkih i lakih teretnih vozila. Naši majstori godinama rješavaju probleme od najjednostavnijih do najkompleksnijih.\n\nNudimo kompjutersku dijagnostiku, servis kočnica, zamjenu ulja i filtera, geometriju, servis klima uređaja, popravke motora i elektriku. U ponudi imamo i širok asortiman auto dijelova i guma.\n\nTransparentnost i fer cijene naš su zalog. Vaše vozilo je u sigurnim rukama kod nas.",
    founded: "2011",
    employees: "7",
    rating: 4.6,
    reviewCount: 134,
    verified: true,
    badge: "verified",
    coverGradient: "from-blue-600 via-indigo-600 to-slate-700",
    workingHours: DEFAULT_HOURS,
    services: ["Kompjuterska dijagnostika", "Servis kočnica", "Zamjena ulja", "Geometrija", "Servis klima", "Popravke motora", "Auto elektrika", "Prodaja auto dijelova"],
    images: [unsplash("1486262715619-67b85e0b08d3"), unsplash("1580273916550-e323be2ae537")],
    stats: [
      { label: "Godina osnivanja", value: "2011." },
      { label: "Servisiranih vozila", value: "1500+" },
      { label: "Zaposlenih", value: "7" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-autopraonica-sjaj",
    name: "Autopraonica Sjaj",
    slug: "autopraonica-sjaj-cazin",
    category: "Automobilizam",
    categorySlug: "automobilizam",
    subcategory: "Autopraonice",
    city: "Cazin",
    address: "Ulica Mladih Muslimana 45, 77220 Cazin",
    phone: "+387 37 515 610",
    website: "",
    description: "Brzo i kvalitetno pranje vozila unutrašnje i vanjsko čišćenje.",
    longDescription: "Autopraonica Sjaj nudi brzu i temeljitu uslugu pranja svih vrsta vozila. Koristimo kvalitetna sredstva za čišćenje koja štite vašu boju i enterijer.\n\nOsim osnovnog pranja, nudimo dubinsko čišćenje enterijera, poliranje, voskiranje i čišćenje kožnih sjedala. Vaše vozilo će izaći kao novo.\n\nDođite kod nas dok obavljate kupovinu u centru grada — za pola sata vaš auto blista.",
    founded: "2016",
    employees: "3",
    rating: 4.5,
    reviewCount: 76,
    verified: true,
    badge: "verified",
    coverGradient: "from-cyan-600 via-blue-600 to-indigo-600",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 20:00" },
      { day: "Utorak", hours: "08:00 - 20:00" },
      { day: "Srijeda", hours: "08:00 - 20:00" },
      { day: "Četvrtak", hours: "08:00 - 20:00" },
      { day: "Petak", hours: "08:00 - 20:00" },
      { day: "Subota", hours: "09:00 - 18:00" },
      { day: "Nedjelja", hours: "10:00 - 16:00" },
    ],
    services: ["Vanjsko pranje", "Unutrašnje čišćenje", "Dubinsko čišćenje", "Poliranje", "Voskiranje", "Čišćenje kože", "Pranje motora"],
    images: [unsplash("1552930294-6b595f4c2974"), unsplash("1601362840469-7e5bb4e2b75b")],
    stats: [
      { label: "Godina osnivanja", value: "2016." },
      { label: "Opranih vozila", value: "5000+" },
      { label: "Zaposlenih", value: "3" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Građevinarstvo
  // =============================================================================
  makeBusiness({
    id: "cazin-gradnja-bih",
    name: "Gradnja BiH Cazin",
    slug: "gradnja-bih-cazin",
    category: "Građevinarstvo",
    categorySlug: "gradjevinarstvo",
    subcategory: "Građevinske firme",
    city: "Cazin",
    address: "Ulica 8. septembra 30, 77220 Cazin",
    phone: "+387 37 515 700",
    website: "",
    description: "Građevinska firma za izgradnju stanova, kuća i poslovnih prostora.",
    longDescription: "Gradnja BiH Cazin je građevinska firma s dugogodišnjim iskustvom u izgradnji stambenih i poslovnih objekata na području Cazina i okoline. Pružamo usluge od projekta do ključa u ruke.\n\nNaš tim čine licencirani inženjeri, arhitekti, zidari, keramičari, vodoinstalateri i električari. Koristimo kvalitetne materijale i poštujemo dogovorene rokove.\n\nBilo da gradite novu kuću, renovirate stan ili podižete poslovni objekt, Gradnja BiH Cazin je pouzdan partner.",
    founded: "2009",
    employees: "15",
    rating: 4.7,
    reviewCount: 92,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-emerald-700 via-green-700 to-teal-700",
    workingHours: DEFAULT_HOURS,
    services: ["Izgradnja kuća", "Izgradnja stanova", "Renovacija", "Adaptacija", "Roh-bau", "Završni radovi", "Fasade", "Hidroizolacija"],
    images: [unsplash("1503387762-592deb58ef4e"), unsplash("1541888946425-d81bb19240f5")],
    stats: [
      { label: "Godina osnivanja", value: "2009." },
      { label: "Završenih objekata", value: "80+" },
      { label: "Zaposlenih", value: "15" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Nekretnine
  // =============================================================================
  makeBusiness({
    id: "cazin-nekretnine-dom",
    name: "Nekretnine Dom Cazin",
    slug: "nekretnine-dom-cazin",
    category: "Nekretnine",
    categorySlug: "nekretnine",
    subcategory: "Agencije za nekretnine",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 10, 77220 Cazin",
    phone: "+387 37 515 800",
    website: "",
    description: "Agencija za prodaju, kupovinu i iznajmljivanje nekretnina u Cazinu i okolini.",
    longDescription: "Nekretnine Dom Cazin je vodeća agencija za nekretnine u Cazinu. Pomažemo vam pri kupovini, prodaji ili iznajmljivanju stanova, kuća, poslovnih prostora i zemljišta.\n\nNaši agenti poznaju lokalno tržište i pružaju stručnu pomoć od procjene vrijednosti do potpisivanja ugovora. Transparentnost i sigurnost naših klijenata naš su prioritet.\n\nBilo da tražite novi dom ili želite unovčiti imovinu, obratite se Nekretninama Dom Cazin.",
    founded: "2013",
    employees: "5",
    rating: 4.5,
    reviewCount: 64,
    verified: true,
    badge: "verified",
    coverGradient: "from-violet-600 via-purple-600 to-fuchsia-700",
    workingHours: DEFAULT_HOURS,
    services: ["Prodaja nekretnina", "Kupovina nekretnina", "Iznajmljivanje", "Procjena vrijednosti", "Pravna pomoć", "Oglašavanje", "Pregledi nekretnina"],
    images: [unsplash("1560518883-ce09059eeffa"), unsplash("1600585154340-be6161a56a0c")],
    stats: [
      { label: "Godina osnivanja", value: "2013." },
      { label: "Nekretnina", value: "120+" },
      { label: "Zaposlenih", value: "5" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Zdravlje
  // =============================================================================
  makeBusiness({
    id: "cazin-apoteka-centar",
    name: "Apoteka Centar",
    slug: "apoteka-centar-cazin",
    category: "Zdravlje",
    categorySlug: "zdravlje",
    subcategory: "Apoteke",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 3, 77220 Cazin",
    phone: "+387 37 515 900",
    website: "",
    description: "Apoteka s lijekovima, suplementima i besplatnim savjetovanjem u centru Cazina.",
    longDescription: "Apoteka Centar je moderna apoteka smještena u centru Cazina. Nudimo širok asortiman lijekova na recept i bez recepta, vitamina, suplemenata, medicinskih pomagala i dječje kozmetike.\n\nNaši farmaceuti su uvijek na raspolaganju za savjete o terapiji, doziranju i interakcijama lijekova. Posebnu pažnju posvećujemo starijim građanima i kroničnim bolesnicima.\n\nU ponudi imamo i usluge mjerenja krvnog pritiska i šećera u krvi. Vaše zdravlje je u našim rukama.",
    founded: "2006",
    employees: "6",
    rating: 4.8,
    reviewCount: 178,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-emerald-600 via-green-600 to-teal-700",
    workingHours: PHARMACY_HOURS,
    services: ["Lijekovi na recept", "Lijekovi bez recepta", "Vitamini i suplementi", "Medicinska pomagala", "Dječja kozmetika", "Mjerenje pritiska", "Mjerenje šećera", "Farmaceutsko savjetovanje"],
    images: [unsplash("1585435557343-3e092621c591"), unsplash("1579684385127-1ef15d508118")],
    stats: [
      { label: "Godina osnivanja", value: "2006." },
      { label: "Proizvoda", value: "2500+" },
      { label: "Zaposlenih", value: "6" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-ordinacija-zdravlje",
    name: "Ordinacija Opće Medicine Dr. Hadžić",
    slug: "ordinacija-hadzic-cazin",
    category: "Zdravlje",
    categorySlug: "zdravlje",
    subcategory: "Ljekari opšte prakse",
    city: "Cazin",
    address: "Ulica Srebreničkih žrtava 6, 77220 Cazin",
    phone: "+387 37 515 910",
    website: "",
    description: "Opća medicina, pregledi, vakcinacija i kontrola kroničnih bolesti.",
    longDescription: "Ordinacija opće medicine Dr. Hadžić pruža kompletne zdravstvene usluge iz područja opće medicine za pacijente svih uzrasta. Pregledi su temeljiti, a pristup svakom pacijentu individualan.\n\nNudimo redovne preglede, vakcinaciju, kontrolu kroničnih bolesti, uputnice za specijalističke preglede i savjetovanje o prevenciji bolesti.\n\nZakažite pregled i uvjerite se u stručnost i posvećenost našeg tima.",
    founded: "2004",
    employees: "3",
    rating: 4.9,
    reviewCount: 112,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-teal-600 via-emerald-600 to-green-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 16:00" },
      { day: "Utorak", hours: "08:00 - 16:00" },
      { day: "Srijeda", hours: "08:00 - 16:00" },
      { day: "Četvrtak", hours: "08:00 - 16:00" },
      { day: "Petak", hours: "08:00 - 14:00" },
      { day: "Subota", hours: "Zatvoreno" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Opći pregledi", "Vakcinacija", "Kontrola kroničnih bolesti", "Uputnice", "Savjetovanje", "Prevencija", "Domaći pregledi"],
    images: [unsplash("1631217861868-485e6009ab6b"), unsplash("1576091160399-112ba8d25d1d")],
    stats: [
      { label: "Godina osnivanja", value: "2004." },
      { label: "Pacijenata", value: "3000+" },
      { label: "Zaposlenih", value: "3" },
      { label: "Ocjena", value: "4.9 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Obrazovanje
  // =============================================================================
  makeBusiness({
    id: "cazin-centar-jezika",
    name: "Centar za Strane Jezike Lingua",
    slug: "centar-jezika-lingua-cazin",
    category: "Obrazovanje",
    categorySlug: "obrazovanje",
    subcategory: "Kursevi jezika",
    city: "Cazin",
    address: "Ulica AVNOJ-a 18, 77220 Cazin",
    phone: "+387 37 516 000",
    website: "",
    description: "Kursevi engleskog, njemačkog i turskog jezika za sve uzraste.",
    longDescription: "Centar za strane jezike Lingua je vodeća jezička škola u Cazinu. Organiziramo kurseve engleskog, njemačkog i turskog jezika za djecu, omladinu i odrasle.\n\nNaši predavači su stručni i iskusni, a nastava se odvija u malim grupama kako bismo osigurali individualni pristup. Pripremamo i polaznike za međunarodne ispite.\n\nBilo da učite jezik iz zabave, za posao ili školu, Lingua je pravo mjesto za vas.",
    founded: "2012",
    employees: "6",
    rating: 4.7,
    reviewCount: 95,
    verified: true,
    badge: "verified",
    coverGradient: "from-indigo-600 via-blue-600 to-cyan-600",
    workingHours: [
      { day: "Ponedjeljak", hours: "09:00 - 20:00" },
      { day: "Utorak", hours: "09:00 - 20:00" },
      { day: "Srijeda", hours: "09:00 - 20:00" },
      { day: "Četvrtak", hours: "09:00 - 20:00" },
      { day: "Petak", hours: "09:00 - 18:00" },
      { day: "Subota", hours: "10:00 - 14:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Kurs engleskog", "Kurs njemačkog", "Kurs turskog", "Priprema za ispite", "Individualna nastava", "Grupna nastava", "Online nastava"],
    images: [unsplash("1503676260728-1c00da094a9b"), unsplash("1523240795612-3a400b30e5e1")],
    stats: [
      { label: "Godina osnivanja", value: "2012." },
      { label: "Polaznika", value: "1200+" },
      { label: "Zaposlenih", value: "6" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Usluge
  // =============================================================================
  makeBusiness({
    id: "cazin-racunovodstvo-fokus",
    name: "Računovodstvo Fokus",
    slug: "racunovodstvo-fokus-cazin",
    category: "Usluge",
    categorySlug: "usluge",
    subcategory: "Računovođe",
    city: "Cazin",
    address: "Ulica 8. septembra 24, 77220 Cazin",
    phone: "+387 37 516 100",
    website: "",
    description: "Knjigovodstvene i računovodstvene usluge za firme i obrtnike.",
    longDescription: "Računovodstvo Fokus pruža kompletne knjigovodstvene i računovodstvene usluge za mala i srednja preduzeća, obrtnike i udruženja. Brinemo o vašoj dokumentaciji, porezima i obračunima.\n\nNaš tim prati aktualne zakonske propise i osigurava tačnost i pravovremenost svih evidencija. Pomažemo vam da se fokusirate na posao, a birokraciju prepustite nama.\n\nPouzdanost, diskrecija i fer cijene naš su zalog.",
    founded: "2010",
    employees: "4",
    rating: 4.6,
    reviewCount: 58,
    verified: true,
    badge: "verified",
    coverGradient: "from-slate-600 via-gray-600 to-zinc-700",
    workingHours: DEFAULT_HOURS,
    services: ["Knjigovodstvo", "Obračun plaća", "Porezno savjetovanje", "Financijska izvještavanja", "Registracija firmi", "Godišnji obračuni", "Predlaganje poreza"],
    images: [unsplash("1454165804606-c3d57bc86b40"), unsplash("1554224155-6726b3ff858f")],
    stats: [
      { label: "Godina osnivanja", value: "2010." },
      { label: "Klijenata", value: "80+" },
      { label: "Zaposlenih", value: "4" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-marketing-kreativa",
    name: "Marketing Agencija Kreativa",
    slug: "marketing-kreativa-cazin",
    category: "Usluge",
    categorySlug: "usluge",
    subcategory: "Marketing agencije",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 15, 77220 Cazin",
    phone: "+387 37 516 110",
    website: "",
    description: "Dizajn, društvene mreže, oglašavanje i izrada web stranica.",
    longDescription: "Marketing agencija Kreativa pomaže lokalnim firmama da izgrade prepoznatljiv brend i dođu do novih kupaca. Nudimo usluge grafičkog dizajna, vođenja društvenih mreža, digitalnog oglašavanja i izrade web stranica.\n\nNaš tim kreativaca i stručnjaka za digitalni marketing prilagođava strategije vašim potrebama i budžetu. Od ideje do realizacije, Kreativa je uz vas.\n\nPovećajte vidljivost svoje firme uz našu pomoć.",
    founded: "2017",
    employees: "5",
    rating: 4.5,
    reviewCount: 43,
    verified: true,
    badge: "new",
    coverGradient: "from-pink-600 via-rose-600 to-purple-600",
    workingHours: DEFAULT_HOURS,
    services: ["Grafički dizajn", "Društvene mreže", "Digitalno oglašavanje", "Izrada web stranica", "SEO", "Fotografija", "Video produkcija"],
    images: [unsplash("1552664730-d307ca884978"), unsplash("1460925895917-afdab827c52f")],
    stats: [
      { label: "Godina osnivanja", value: "2017." },
      { label: "Projekata", value: "120+" },
      { label: "Zaposlenih", value: "5" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Frizerski saloni
  // =============================================================================
  makeBusiness({
    id: "cazin-salon-elegance",
    name: "Salon Ljepote Elegance",
    slug: "salon-elegance-cazin",
    category: "Frizerski saloni",
    categorySlug: "frizerski-saloni",
    subcategory: "Frizerski saloni",
    city: "Cazin",
    address: "Ulica Mladih Muslimana 22, 77220 Cazin",
    phone: "+387 37 516 200",
    website: "",
    description: "Frizerske, kozmetičke i manikir usluge za žene i muškarce.",
    longDescription: "Salon ljepote Elegance je moderni salon u Cazinu koji nudi kompletne usluge njege kose, kože i noktiju. Naši frizeri i kozmetičari prate najnovije trendove i koriste kvalitetne proizvode.\n\nBilo da želite novo šišanje, bojanje, manikuru, pedikuru ili tretman lica, u Elegance ćete se osjećati posebno. Atmosfera je opuštajuća, a usluga profesionalna.\n\nZakažite svoj termin i prepustite se stručnjacima.",
    founded: "2015",
    employees: "6",
    rating: 4.8,
    reviewCount: 167,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-pink-500 via-rose-500 to-red-500",
    workingHours: SALON_HOURS,
    services: ["Šišanje", "Bojanje kose", "Feniranje", "Manikura", "Pedikura", "Tretmani lica", "Nadogradnja noktiju", "Svečane frizure"],
    images: [unsplash("1560066984-138dffb4c03b"), unsplash("1522337360788-8b13dee7a37e")],
    stats: [
      { label: "Godina osnivanja", value: "2015." },
      { label: "Tretmana mjesečno", value: "600+" },
      { label: "Zaposlenih", value: "6" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Tehnologija
  // =============================================================================
  makeBusiness({
    id: "cazin-it-servis-byte",
    name: "IT Servis Byte",
    slug: "it-servis-byte-cazin",
    category: "Tehnologija",
    categorySlug: "tehnologija",
    subcategory: "Servisi računara",
    city: "Cazin",
    address: "Ulica AVNOJ-a 7, 77220 Cazin",
    phone: "+387 37 516 300",
    website: "",
    description: "Servis računara, laptopova, mobitela i prodaja opreme.",
    longDescription: "IT Servis Byte je mjesto gdje rješavamo sve tehničke probleme s računarima, laptopovima, mobitelima i tabletima. Nudimo dijagnostiku, popravke, instalaciju sistema i zaštitu od virusa.\n\nOsim servisa, prodajemo računarsku opremu, periferiju, mobilne dodatke i potrošački materijal. Brzi smo, pouzdani i pristupačni.\n\nAko vam je potrebna tehnička pomoć ili nova oprema, posjetite Byte u centru Cazina.",
    founded: "2014",
    employees: "3",
    rating: 4.7,
    reviewCount: 143,
    verified: true,
    badge: "verified",
    coverGradient: "from-indigo-600 via-violet-600 to-purple-700",
    workingHours: DEFAULT_HOURS,
    services: ["Popravka računara", "Popravka laptopova", "Popravka mobitela", "Instalacija sistema", "Uklanjanje virusa", "Prodaja opreme", "Oporavak podataka"],
    images: [unsplash("1518770660439-4636190af475"), unsplash("1531297424000-9d5e5f57488a")],
    stats: [
      { label: "Godina osnivanja", value: "2014." },
      { label: "Servisiranih uređaja", value: "2000+" },
      { label: "Zaposlenih", value: "3" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Finansije
  // =============================================================================
  makeBusiness({
    id: "cazin-mjenjacnica-euro",
    name: "Mjenjačnica Euro",
    slug: "mjenjacnica-euro-cazin",
    category: "Finansije",
    categorySlug: "finansije",
    subcategory: "Mjenjačnice",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 2, 77220 Cazin",
    phone: "+387 37 516 400",
    website: "",
    description: "Mjenjačnica s povoljnim kursevima i brzom uslugom.",
    longDescription: "Mjenjačnica Euro je pouzdana mjenjačnica u samom centru Cazina. Nudimo povoljne kurseve za konverziju valuta, brzu i sigurnu uslugu te mogućnost rezervacije kursa.\n\nPored gotovinskog prometa, pružamo i usluge uplata i isplata novca, kao i savjetovanje o valutnim transakcijama.\n\nDođite kod nas za fer kurs i ljubaznu uslugu.",
    founded: "2007",
    employees: "3",
    rating: 4.4,
    reviewCount: 89,
    verified: true,
    badge: "verified",
    coverGradient: "from-emerald-600 via-green-600 to-teal-600",
    workingHours: SHOP_HOURS,
    services: ["Kupoprodaja valuta", "Rezervacija kursa", "Uplate i isplate", "Valutno savjetovanje", "EUR, USD, CHF", "Brza usluga"],
    images: [unsplash("1554260570-e9689a3418b8"), unsplash("1565514020169-0263a6e17ecd")],
    stats: [
      { label: "Godina osnivanja", value: "2007." },
      { label: "Valuta", value: "15+" },
      { label: "Zaposlenih", value: "3" },
      { label: "Ocjena", value: "4.4 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Putovanja
  // =============================================================================
  makeBusiness({
    id: "cazin-taxi-cazin",
    name: "Taxi Cazin",
    slug: "taxi-cazin",
    category: "Putovanja",
    categorySlug: "putovanja",
    subcategory: "Taxi usluge",
    city: "Cazin",
    address: "Stajalište Trg Alije Izetbegovića, 77220 Cazin",
    phone: "+387 61 516 500",
    website: "",
    description: "Brz i pouzdan taxi prijevoz u Cazinu i okolini, 24/7.",
    longDescription: "Taxi Cazin pruža brz, siguran i pouzdan prijevoz putnika u Cazinu i široj okolini. Dostupni smo 24 sata dnevno, sedam dana u sedmici.\n\nNaši vozači su iskusni i ljubazni, a vozila redovno održavana. Nudimo prijevoz do aerodroma, svadbi, poslovnih putovanja i noćnih izlazaka.\n\nNaručite taxi telefonom ili putem društvenih mreža.",
    founded: "2011",
    employees: "8",
    rating: 4.5,
    reviewCount: 201,
    verified: true,
    badge: "verified",
    coverGradient: "from-yellow-500 via-amber-500 to-orange-500",
    workingHours: HOTEL_HOURS,
    services: ["Lokalni prijevoz", "Prijevoz do aerodroma", "Noćni prijevoz", "Svadbe i proslave", "Poslovni prijevoz", "Prijevoz paketa"],
    images: [unsplash("1449965408868-eaa9f6e67201"), unsplash("1464219789925-1911c033e3e9")],
    stats: [
      { label: "Godina osnivanja", value: "2011." },
      { label: "Vozila", value: "6" },
      { label: "Zaposlenih", value: "8" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),
  makeBusiness({
    id: "cazin-apartmani-bosna",
    name: "Apartmani Bosna",
    slug: "apartmani-bosna-cazin",
    category: "Putovanja",
    categorySlug: "putovanja",
    subcategory: "Apartmani",
    city: "Cazin",
    address: "Ulica 8. septembra 40, 77220 Cazin",
    phone: "+387 37 516 520",
    website: "",
    description: "Udobni apartmani za kratke i duge boravke u Cazinu.",
    longDescription: "Apartmani Bosna nude udoban i povoljan smještaj u Cazinu. Svaki apartman je opremljen kuhinjom, kupaonicom, besplatnim Wi-Fi-jem i klimom.\n\nPogodni su za poslovne putnike, obitelji i grupe prijatelja. Lokacija je mirna, a u centru grada ste za par minuta hoda.\n\nRezervirajte svoj boravak i osjećajte se kao kod kuće.",
    founded: "2016",
    employees: "2",
    rating: 4.6,
    reviewCount: 78,
    verified: true,
    badge: "verified",
    coverGradient: "from-blue-500 via-cyan-500 to-teal-500",
    workingHours: HOTEL_HOURS,
    services: ["Dnevni najam", "Mjesečni najam", "Besplatan Wi-Fi", "Klima", "Parking", "Kuhinja", "Perilica rublja"],
    images: [unsplash("1502672260266-1c1ef2d93688"), unsplash("1522708323590-d24dbb6b0267")],
    stats: [
      { label: "Godina osnivanja", value: "2016." },
      { label: "Apartmana", value: "8" },
      { label: "Zaposlenih", value: "2" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Sport i rekreacija
  // =============================================================================
  makeBusiness({
    id: "cazin-fitnes-power",
    name: "Fitness Centar Power",
    slug: "fitness-power-cazin",
    category: "Sport i rekreacija",
    categorySlug: "sport-i-rekreacija",
    subcategory: "Teretane",
    city: "Cazin",
    address: "Ulica Mladih Muslimana 50, 77220 Cazin",
    phone: "+387 37 516 600",
    website: "",
    description: "Moderna teretana s opremom za kondiciju i treninge snage.",
    longDescription: "Fitness Centar Power je moderna teretana u Cazinu opremljena kardio i snagometrijom opremom. Nudimo individualne i grupne treninge pod nadzorom stručnih trenera.\n\nBilo da ste početnik ili iskusan rekreativac, naši treneri će vam pomoći da postignete svoje ciljeve. Atmosfera je motivirajuća, a prostor čist i uredan.\n\nPridružite se i započnite put prema zdravijem životu.",
    founded: "2015",
    employees: "4",
    rating: 4.7,
    reviewCount: 134,
    verified: true,
    badge: "verified",
    coverGradient: "from-red-600 via-orange-600 to-amber-600",
    workingHours: [
      { day: "Ponedjeljak", hours: "06:00 - 22:00" },
      { day: "Utorak", hours: "06:00 - 22:00" },
      { day: "Srijeda", hours: "06:00 - 22:00" },
      { day: "Četvrtak", hours: "06:00 - 22:00" },
      { day: "Petak", hours: "06:00 - 22:00" },
      { day: "Subota", hours: "08:00 - 20:00" },
      { day: "Nedjelja", hours: "08:00 - 18:00" },
    ],
    services: ["Kardio zona", "Snaga zona", "Grupni treninzi", "Personalni trening", "Savjetovanje o ishrani", "Tjedne i mjesečne članarine", "Sauna"],
    images: [unsplash("1534438327276-14e5300c3a48"), unsplash("1571019614242-c5c5dee9f50b")],
    stats: [
      { label: "Godina osnivanja", value: "2015." },
      { label: "Članova", value: "400+" },
      { label: "Zaposlenih", value: "4" },
      { label: "Ocjena", value: "4.7 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Kultura i zabava
  // =============================================================================
  makeBusiness({
    id: "cazin-kino-cazin",
    name: "Kino Cazin",
    slug: "kino-cazin",
    category: "Kultura i zabava",
    categorySlug: "kultura-i-zabava",
    subcategory: "Kina",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 18, 77220 Cazin",
    phone: "+387 37 516 700",
    website: "",
    description: "Dvorana za projekcije filmova, pozorišne predstave i kulturne događaje.",
    longDescription: "Kino Cazin je kulturni centar grada u kojem se prikazuju aktualni filmovi, organiziraju pozorišne predstave, koncerti i razni kulturni događaji.\n\nDvorana je moderno opremljena zvukom i projekcijom, a ulaznice su pristupačne. Posebno smo ponosni na programa za djecu i mlade.\n\nPratite naš raspored i dođite na filmske večeri u Cazinu.",
    founded: "1985",
    employees: "5",
    rating: 4.4,
    reviewCount: 112,
    verified: true,
    badge: "verified",
    coverGradient: "from-purple-600 via-violet-600 to-indigo-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "Zatvoreno" },
      { day: "Utorak", hours: "18:00 - 22:00" },
      { day: "Srijeda", hours: "18:00 - 22:00" },
      { day: "Četvrtak", hours: "18:00 - 22:00" },
      { day: "Petak", hours: "18:00 - 23:00" },
      { day: "Subota", hours: "17:00 - 23:00" },
      { day: "Nedjelja", hours: "17:00 - 22:00" },
    ],
    services: ["Filmske projekcije", "Pozorišne predstave", "Koncerti", "Dječji programi", "Izložbe", "Iznišmljivanje dvorane"],
    images: [unsplash("1489599849927-2ee91cede3ba"), unsplash("1517604931442-71053e3e2e3e")],
    stats: [
      { label: "Godina osnivanja", value: "1985." },
      { label: "Sjedišta", value: "200" },
      { label: "Zaposlenih", value: "5" },
      { label: "Ocjena", value: "4.4 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Smještaj
  // =============================================================================
  makeBusiness({
    id: "cazin-hotel-cazin",
    name: "Hotel Cazin",
    slug: "hotel-cazin",
    category: "Smještaj",
    categorySlug: "smjestaj",
    subcategory: "Hoteli",
    city: "Cazin",
    address: "Ulica 8. septembra 1, 77220 Cazin",
    phone: "+387 37 516 800",
    website: "",
    description: "Udoban hotel s restoranom, parkingom i konferencijskom salom.",
    longDescription: "Hotel Cazin nudi ugodan smještaj u srcu grada. Naše sobe su klimatizirane, opremljene besplatnim Wi-Fi-jem, TV-om i vlastitom kupaonicom.\n\nU sklopu hotela nalazi se restoran s tradicionalnom kuhinjom, kafe bar i konferencijska sala za poslovne sastanke i seminare. Gostima je na raspolaganju besplatan parking.\n\nBilo da ste u poslovnoj posjeti ili na odmoru, Hotel Cazin je pravi izbor.",
    founded: "1998",
    employees: "18",
    rating: 4.5,
    reviewCount: 156,
    verified: true,
    badge: "verified",
    coverGradient: "from-blue-600 via-cyan-600 to-teal-600",
    workingHours: HOTEL_HOURS,
    services: ["Sobe i apartmani", "Restoran", "Kafe bar", "Konferencijska sala", "Besplatan parking", "Recepcija 24/7", "Doručak uključen"],
    images: [unsplash("1566073771259-6a8506099945"), unsplash("1551882547-ff40c63fe5fa")],
    stats: [
      { label: "Godina osnivanja", value: "1998." },
      { label: "Soba", value: "32" },
      { label: "Zaposlenih", value: "18" },
      { label: "Ocjena", value: "4.5 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Transport
  // =============================================================================
  makeBusiness({
    id: "cazin-autobusni-prijevoz",
    name: "Autobusni Prijevoz Cazin",
    slug: "autobusni-prijevoz-cazin",
    category: "Transport",
    categorySlug: "transport",
    subcategory: "Cestovni prijevoz",
    city: "Cazin",
    address: "Autobuska stanica, Ulica 8. septembra, 77220 Cazin",
    phone: "+387 37 516 900",
    website: "",
    description: "Linijski i izletnički autobusni prijevoz iz Cazina prema većim gradovima.",
    longDescription: "Autobusni Prijevoz Cazin povezuje Cazin s Bihaćem, Velikom Kladušom, Sanskim Mostom, Banjom Lukom i drugim gradovima. Vozila su redovno održavana, a vozači iskusni.\n\nOsim redovnih linija, organiziramo i izlete, školske ekskurzije i prijevoz za proslave.\n\nKupite kartu na šalteru autobuske stanice ili telefonom.",
    founded: "1995",
    employees: "12",
    rating: 4.3,
    reviewCount: 89,
    verified: true,
    badge: "verified",
    coverGradient: "from-slate-600 via-gray-600 to-zinc-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "05:00 - 21:00" },
      { day: "Utorak", hours: "05:00 - 21:00" },
      { day: "Srijeda", hours: "05:00 - 21:00" },
      { day: "Četvrtak", hours: "05:00 - 21:00" },
      { day: "Petak", hours: "05:00 - 21:00" },
      { day: "Subota", hours: "06:00 - 20:00" },
      { day: "Nedjelja", hours: "07:00 - 19:00" },
    ],
    services: ["Linijski prijevoz", "Izletnički prijevoz", "Školske ekskurzije", "Prijevoz za proslave", "Povoljne karte", "Prtljaga"],
    images: [unsplash("1544620347-c4fd4a3d5957"), unsplash("1570125909232-eb263c188f7e")],
    stats: [
      { label: "Godina osnivanja", value: "1995." },
      { label: "Autobusa", value: "8" },
      { label: "Zaposlenih", value: "12" },
      { label: "Ocjena", value: "4.3 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Zaštita i sigurnost
  // =============================================================================
  makeBusiness({
    id: "cazin-sigurnosni-sistemi",
    name: "Sigurnosni Sistemi Cazin",
    slug: "sigurnosni-sistemi-cazin",
    category: "Zaštita i sigurnost",
    categorySlug: "zastita-i-sigurnost",
    subcategory: "Alarmni sistemi",
    city: "Cazin",
    address: "Industrijska zona 2, 77220 Cazin",
    phone: "+387 37 517 000",
    website: "",
    description: "Montaža i održavanje alarmnih sistema, kamera i kontrole pristupa.",
    longDescription: "Sigurnosni Sistemi Cazin specijalizirani su za instalaciju i održavanje sigurnosne opreme za domove, firme i javne objekte. Nudimo alarme, video nadzor, interfone i kontrolu pristupa.\n\nNaši tehničari vam pomažu od projekta do instalacije, a nudimo i redovno servisiranje postojećih sistema. Vaša sigurnost je naša briga.\n\nKontaktirajte nas za besplatnu procjenu i ponudu.",
    founded: "2012",
    employees: "4",
    rating: 4.6,
    reviewCount: 67,
    verified: true,
    badge: "verified",
    coverGradient: "from-zinc-600 via-gray-600 to-slate-700",
    workingHours: DEFAULT_HOURS,
    services: ["Alarmni sistemi", "Video nadzor", "Kontrola pristupa", "Interfoni", "Servis i održavanje", "Projektovanje", "Hitne intervencije"],
    images: [unsplash("1558002038-1091a1661c98"), unsplash("1581092160562-40d3f5ad600a")],
    stats: [
      { label: "Godina osnivanja", value: "2012." },
      { label: "Instaliranih sistema", value: "350+" },
      { label: "Zaposlenih", value: "4" },
      { label: "Ocjena", value: "4.6 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Ljubimci
  // =============================================================================
  makeBusiness({
    id: "cazin-veterinarska-ambulanta",
    name: "Veterinarska Ambulanta Cazin",
    slug: "veterinarska-ambulanta-cazin",
    category: "Ljubimci",
    categorySlug: "ljubimci",
    subcategory: "Veterinarske ambulante",
    city: "Cazin",
    address: "Ulica AVNOJ-a 35, 77220 Cazin",
    phone: "+387 37 517 100",
    website: "",
    description: "Veterinarske usluge, vakcinacija, liječenje i savjetovanje za kućne ljubimce.",
    longDescription: "Veterinarska ambulanta Cazin pruža kompletne zdravstvene usluge za pse, mačke i druge kućne ljubimce. Nudimo redovne preglede, vakcinaciju, liječenje bolesti, hirurgiju i savjete o ishrani.\n\nNaš veterinar je stručan i posvećen, a ambulanta je opremljena za hitne intervencije. Brinemo o zdravlju vaših najboljih prijatelja.\n\nZakažite pregled ili nas nazovite u hitnim slučajevima.",
    founded: "2008",
    employees: "2",
    rating: 4.9,
    reviewCount: 134,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    workingHours: [
      { day: "Ponedjeljak", hours: "09:00 - 17:00" },
      { day: "Utorak", hours: "09:00 - 17:00" },
      { day: "Srijeda", hours: "09:00 - 17:00" },
      { day: "Četvrtak", hours: "09:00 - 17:00" },
      { day: "Petak", hours: "09:00 - 17:00" },
      { day: "Subota", hours: "09:00 - 13:00" },
      { day: "Nedjelja", hours: "Hitno" },
    ],
    services: ["Redovni pregledi", "Vakcinacija", "Liječenje bolesti", "Hirurgija", "Savjeti o ishrani", "Hitne intervencije", "Čipiranje"],
    images: [unsplash("1623366302587-b38b1ddaefd9"), unsplash("1514888286974-6c27e2d035ce")],
    stats: [
      { label: "Godina osnivanja", value: "2008." },
      { label: "Pregleda godišnje", value: "2000+" },
      { label: "Zaposlenih", value: "2" },
      { label: "Ocjena", value: "4.9 ⭐" },
    ],
  }),

  // =============================================================================
  // CAZIN - Ostalo
  // =============================================================================
  makeBusiness({
    id: "cazin-postolar-mujo",
    name: "Postolar Mujo",
    slug: "postolar-mujo-cazin",
    category: "Ostalo",
    categorySlug: "ostalo",
    subcategory: "Postolar",
    city: "Cazin",
    address: "Trg Alije Izetbegovića 7, 77220 Cazin",
    phone: "+387 37 517 200",
    website: "",
    description: "Popravak cipela, torbica i kožne galanterije u Cazinu.",
    longDescription: "Postolar Mujo je tradicionalna postolarska radnja u Cazinu koja već desetljećima rješava probleme s cipelama, torbicama i kožnom galanterijom. Rade se popravci petica, zalijevanje cipela, šivanje i restauracija kožnih proizvoda.\n\nKvaliteta rada i fer cijene privlače vjerne kupce iz cijelog grada. Ako imate omiljene cipele koje trebaju novi život, donesite ih Muji.",
    founded: "1992",
    employees: "1",
    rating: 4.8,
    reviewCount: 102,
    verified: true,
    badge: "top-rated",
    coverGradient: "from-amber-700 via-yellow-700 to-orange-700",
    workingHours: [
      { day: "Ponedjeljak", hours: "08:00 - 18:00" },
      { day: "Utorak", hours: "08:00 - 18:00" },
      { day: "Srijeda", hours: "08:00 - 18:00" },
      { day: "Četvrtak", hours: "08:00 - 18:00" },
      { day: "Petak", hours: "08:00 - 18:00" },
      { day: "Subota", hours: "08:00 - 14:00" },
      { day: "Nedjelja", hours: "Zatvoreno" },
    ],
    services: ["Popravak cipela", "Zalijevanje", "Šivanje", "Restauracija kože", "Zamjena petica", "Čišćenje i njega kože"],
    images: [unsplash("1544967082-c9028c7a4b9a"), unsplash("1606103920299-0f0a7f0b5e8f")],
    stats: [
      { label: "Godina osnivanja", value: "1992." },
      { label: "Popravaka godišnje", value: "1500+" },
      { label: "Zaposlenih", value: "1" },
      { label: "Ocjena", value: "4.8 ⭐" },
    ],
  }),
];

// =============================================================================
// POMOĆNE FUNKCIJE
// =============================================================================

export function getBusinessBySlug(slug: string): BusinessData | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getBusinessesByCity(city: string): BusinessData[] {
  return businesses.filter((b) => b.city.toLowerCase() === city.toLowerCase());
}

export function getBusinessesByCategory(categorySlug: string): BusinessData[] {
  return businesses.filter((b) => b.categorySlug === categorySlug);
}

export function getAllCities(): string[] {
  return Array.from(new Set(businesses.map((b) => b.city))).sort((a, b) => a.localeCompare(b, "hr"));
}

export function getAllCategorySlugs(): string[] {
  return Array.from(new Set(businesses.map((b) => b.categorySlug)));
}

export function searchBusinesses(query: string): BusinessData[] {
  const q = query.toLowerCase().trim();
  if (!q) return businesses;
  return businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.city.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.services.some((s) => s.toLowerCase().includes(q))
  );
}

export function getBusinessesByCityAndCategory(city: string, categorySlug: string): BusinessData[] {
  return businesses.filter(
    (b) => b.city.toLowerCase() === city.toLowerCase() && b.categorySlug === categorySlug
  );
}

export function getTopBusinesses(limit = 6): BusinessData[] {
  return [...businesses]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, limit);
}

export function getCategoryCounts(): Record<string, number> {
  return businesses.reduce((acc, b) => {
    acc[b.categorySlug] = (acc[b.categorySlug] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export function getCityCounts(): Record<string, number> {
  return businesses.reduce((acc, b) => {
    acc[b.city] = (acc[b.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
