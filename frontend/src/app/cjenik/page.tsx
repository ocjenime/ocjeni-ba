import { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Check,
  X,
  ChevronDown,
  Shield,
  Zap,
  Crown,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Target,
  Building2,
  Search,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cjenik | Ocjeni.ba",
  description:
    "Odaberite plan koji odgovara vašim potrebama. Besplatni plan dostupan svim tvrtkama.",
};

const plans = [
  {
    name: "Besplatni",
    price: "0",
    currency: "KM",
    period: "/mjesečno",
    popular: false,
    badge: "Novo",
    features: [
      "Osnovni profil tvrtke",
      "Do 10 recenzija mjesečno",
      "Osnovna analitika",
    ],
    cta: "Počnite besplatno",
    href: "/tvrtke/prijava",
    ctaStyle: "btn-secondary",
    icon: Building2,
  },
  {
    name: "Pro",
    price: "79",
    currency: "KM",
    period: "~40€/mjesečno",
    popular: true,
    badge: null,
    features: [
      "Neograničen broj recenzija",
      "Napredna analitika",
      "Web widget",
      "Prioritetna podrška",
      "Uklanjanje reklama",
      "SEO poboljšanja",
    ],
    cta: "Odaberite Pro",
    href: "/tvrtke/prijava",
    ctaStyle: "btn-primary",
    icon: Zap,
  },
  {
    name: "Business",
    price: "199",
    currency: "KM",
    period: "~100€/mjesečno",
    popular: false,
    badge: null,
    features: [
      "Sve iz Pro plana",
      "Dedicated account manager",
      "API pristup",
      "Custom branding",
      "Multi-location",
      "Google integracija",
    ],
    cta: "Kontaktirajte nas",
    href: "/kontakt",
    ctaStyle: "btn-secondary",
    icon: Crown,
  },
  {
    name: "Enterprise",
    price: "Prilagođeno",
    currency: "",
    period: "",
    popular: false,
    badge: null,
    features: [
      "Sve iz Business plana",
      "White-label rješenje",
      "Custom integracije",
      "SLA 99.9%",
      "24/7 telefonska podrška",
      "Obuka za tim",
    ],
    cta: "Razgovarajmo",
    href: "/kontakt",
    ctaStyle: "btn-secondary",
    icon: Award,
  },
];

const comparisonFeatures = [
  {
    category: "Osnovno",
    features: [
      { name: "Profil tvrtke", free: true, pro: true, business: true, enterprise: true },
      { name: "Recenzije", free: "Do 10", pro: "Neograničeno", business: "Neograničeno", enterprise: "Neograničeno" },
      { name: "Ocjena", free: true, pro: true, business: true, enterprise: true },
      { name: "Badgeovi", free: false, pro: true, business: true, enterprise: true },
      { name: "Odgovori na recenzije", free: true, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Analitika",
    features: [
      { name: "Osnovna analitika", free: true, pro: true, business: true, enterprise: true },
      { name: "Napredna analitika", free: false, pro: true, business: true, enterprise: true },
      { name: "Export podataka", free: false, pro: true, business: true, enterprise: true },
      { name: "API pristup", free: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    category: "Marketing",
    features: [
      { name: "Web widget", free: false, pro: true, business: true, enterprise: true },
      { name: "SEO", free: false, pro: true, business: true, enterprise: true },
      { name: "Google integracija", free: false, pro: false, business: true, enterprise: true },
      { name: "Custom branding", free: false, pro: false, business: true, enterprise: true },
      { name: "Multi-location", free: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    category: "Podrška",
    features: [
      { name: "Email podrška", free: true, pro: true, business: true, enterprise: true },
      { name: "Prioritetna podrška", free: false, pro: true, business: true, enterprise: true },
      { name: "Dedicated manager", free: false, pro: false, business: true, enterprise: true },
      { name: "24/7 telefonska", free: false, pro: false, business: false, enterprise: true },
      { name: "SLA", free: false, pro: false, business: false, enterprise: true },
    ],
  },
];

const badges = [
  {
    name: "Verificirano",
    description: "Potvrda autentičnosti vaše tvrtke. Povećava povjerenje kupaca za 73%.",
    icon: Shield,
  },
  {
    name: "Najbolje ocijenjen",
    description: "Za tvrtke s ocjenom 4.5+ i minimalno 20 recenzija. Istaknite se iznad konkurencije.",
    icon: Crown,
  },
  {
    name: "Odgovara",
    description: "Pokažite da vam je stalo do mišljenja kupaca. Tvrtke koje odgovaraju imaju 4.2x više povjerenja.",
    icon: MessageSquare,
  },
  {
    name: "Brza usluga",
    description: "Za tvrtke koje brzo odgovaraju na upite i recenzije. Prosječno vrijeme odgovora manje od 24 sata.",
    icon: Target,
  },
  {
    name: "Favorit",
    description: "Za tvrtke koje su najčešće spremile u favorite od strane kupaca. Znak lojalnosti.",
    icon: Heart,
  },
];

const testimonials = [
  {
    name: "Mirza K.",
    company: "Restoran Stari Most",
    role: "Vlasnik",
    content: "Otkad koristimo Ocjeni.ba, broj naših gostiju se povećao za 40%. Kupci nam dolaze jer vide naše odlične recenzije.",
    rating: 5,
    plan: "Pro",
  },
  {
    name: "Amira S.",
    company: "Auto Servis Mehmed",
    role: "Menadžerica",
    content: "Business plan nam je omogućio da pratimo konkurenciju i poboljšamo naše usluge. Analitika je nevjerovatna.",
    rating: 5,
    plan: "Business",
  },
  {
    name: "Dragan P.",
    company: "Digital Solutions BiH",
    role: "CEO",
    content: "Kao IT tvrtka, nama je online reputacija ključna. Ocjeni.ba nam je pomogao da se istaknemo na tržištu.",
    rating: 5,
    plan: "Pro",
  },
];

const faqs = [
  {
    question: "Mogu li besplatno koristiti platformu?",
    answer: "Da, besplatni plan je dostupan svim tvrtkama i uključuje osnovni profil, do 10 recenzija mjesečno i osnovnu analitiku. Možete ga koristiti koliko god dugo želite bez ikakvih troškova.",
  },
  {
    question: "Kako funkcioniše verifikacija recenzija?",
    answer: "Svaka recenzija prolazi kroz naš sustav provjere koji analizira autentičnost. Verificirane recenzije dobivaju poseban bedž što povećava povjerenje kupaca u vašu tvrtku.",
  },
  {
    question: "Mogu li odgovarati na recenzije?",
    answer: "Da, svi planovi uključuju mogućnost odgovaranja na recenzije. To povećava angažman kupaca i pokazuje da vam je stalo do mišljenja korisnika.",
  },
  {
    question: "Što je s privatnošću podataka?",
    answer: "Vaši podaci su kod nas sigurni. Koristimo enktriciju bankovnog nivoa, GDPR smo u potpunosti usklađeni, a vaši podaci se nikad ne dijele s trećim stranama bez vaše suglasnosti.",
  },
  {
    question: "Kako se mogu otkazati?",
    answer: "Možete otkazati pretplatu u bilo kojem trenutku iz svog dashboarda. Nema ugovorne obveze niti penala. Vaši podaci ostaju sigurni 30 dana nakon otkazivanja.",
  },
  {
    question: "Postoji li ugovor?",
    answer: "Ne, svi planovi su mjesečni i nemamo ugovornu obvezu. Plaćate samo za mjesec koji koristite i možete prestati u bilo kojem trenutku.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-midnight-950">
      {/* Hero */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge mb-6 inline-flex">
            <Sparkles className="w-4 h-4 mr-2" />
            Pretplate
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Odaberite svoj plan
          </h1>
          <p className="text-midnight-300 text-lg max-w-2xl mx-auto">
            Započnite besplatno. Nadogradite kada ste spremni. Bez ugovorne obveze i skrivenih troškova.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-midnight-900/50 border rounded-2xl p-6 transition-all duration-300 ${
                plan.popular
                  ? "scale-105 border-amber-500/50 shadow-glow"
                  : "border-midnight-800/50 hover:border-midnight-700/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-midnight-950 text-xs font-bold px-4 py-1 rounded-full">
                    NAJPOPULARNIJI
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    plan.popular
                      ? "bg-amber-500/10"
                      : "bg-midnight-800/50"
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${
                      plan.popular ? "text-amber-400" : "text-midnight-400"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                {plan.badge && (
                  <span className="inline-block mt-2 text-xs font-semibold bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="text-center mb-6">
                {plan.price === "Prilagođeno" ? (
                  <div className="text-2xl font-bold text-white">
                    {plan.price}
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-midnight-400">
                      {plan.currency}
                    </span>
                  </div>
                )}
                {plan.period && (
                  <p className="text-sm text-midnight-500 mt-1">{plan.period}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-midnight-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-midnight-800/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">10,000+</div>
              <div className="text-sm text-midnight-500 mt-1">Tvrtki</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">500,000+</div>
              <div className="text-sm text-midnight-500 mt-1">Recenzija</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">4.8</div>
              <div className="text-sm text-midnight-500 mt-1">Prosjek</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">99.9%</div>
              <div className="text-sm text-midnight-500 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">
            Usporedite planove
          </h2>
          <p className="text-midnight-400 mt-2">
            Detaljna usporedba svih funkcionalnosti
          </p>
        </div>

        <div className="bg-midnight-900/50 border border-midnight-800/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-midnight-800/50">
                  <th className="text-left py-4 px-6 font-semibold text-midnight-300 w-1/4">
                    Značajka
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white w-1/6">
                    Besplatni
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-amber-400 w-1/6 bg-amber-500/5">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white w-1/6">
                    Business
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white w-1/6">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((group, groupIdx) => (
                  <Fragment key={group.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="py-3 px-6 bg-midnight-900/30 font-bold text-midnight-400 text-xs uppercase tracking-wider"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature, featureIdx) => (
                      <tr
                        key={feature.name}
                        className={`border-b border-midnight-800/30 ${
                          featureIdx % 2 === 0 ? "bg-midnight-900/30" : "bg-midnight-900/50"
                        }`}
                      >
                        <td className="py-3 px-6 text-sm text-midnight-300">
                          {feature.name}
                        </td>
                        {(["free", "pro", "business", "enterprise"] as const).map(
                          (plan) => (
                            <td
                              key={plan}
                              className={`py-3 px-4 text-center text-sm ${
                                plan === "pro" ? "bg-amber-500/5" : ""
                              }`}
                            >
                              {typeof feature[plan] === "boolean" ? (
                                feature[plan] ? (
                                  <Check className="w-5 h-5 text-amber-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-midnight-600 mx-auto" />
                                )
                              ) : (
                                <span className="font-medium text-midnight-300">
                                  {feature[plan] as string}
                                </span>
                              )}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Badges Showcase */}
      <section className="py-16 section-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">
              Badgeovi pouzdanosti
            </h2>
            <p className="text-midnight-400 mt-2">
              Povećajte povjerenje kupaca s našim sustavom bedževa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {badges.slice(0, 3).map((badge) => (
              <div
                key={badge.name}
                className="bg-midnight-900/50 border border-midnight-800/50 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-7 h-7 text-midnight-950" />
                </div>
                <h3 className="font-bold text-white mb-2">{badge.name}</h3>
                <p className="text-sm text-midnight-400">{badge.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
            {badges.slice(3).map((badge) => (
              <div
                key={badge.name}
                className="bg-midnight-900/50 border border-midnight-800/50 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-7 h-7 text-midnight-950" />
                </div>
                <h3 className="font-bold text-white mb-2">{badge.name}</h3>
                <p className="text-sm text-midnight-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">
            Što kažu naši korisnici
          </h2>
          <p className="text-midnight-400 mt-2">
            Tvrtke koje već koriste Ocjeni.ba
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass p-6">
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-midnight-300 text-sm mb-6 italic">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-midnight-500">
                    {t.role}, {t.company}
                  </div>
                </div>
                <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full">
                  {t.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">
            Česta pitanja
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-midnight-900/40 border border-midnight-800/40 rounded-xl overflow-hidden group"
            >
              <summary className="p-5 font-medium text-white cursor-pointer hover:text-amber-400 transition-colors flex items-center justify-between">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-midnight-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
              </summary>
              <div className="px-5 pb-5 text-midnight-300 text-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Spremni za početak?
            </h2>
            <p className="text-midnight-300 mb-8 text-lg max-w-xl mx-auto">
              Pridružite se 10,000+ tvrtki koje već koriste Ocjeni.ba za
              poboljšanje svog poslovanja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tvrtke/prijava"
                className="btn-primary text-lg px-8 py-4"
              >
                Započnite besplatno
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/kontakt"
                className="btn-secondary text-lg px-8 py-4"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
