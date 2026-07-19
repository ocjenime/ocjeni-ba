import { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Star,
  Shield,
  Zap,
  Crown,
  Building2,
  BarChart3,
  MessageSquare,
  Globe,
  Users,
  Bell,
  Mail,
  TrendingUp,
  Lock,
  Headphones,
  FileCode,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Infinity,
  Award,
  Target,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cjenik | Ocjeni.ba",
  description:
    "Odaberite plan koji odgovara vašim potrebama. Besplatni plan dostupan svim firmama.",
};

const plans = [
  {
    name: "Free",
    tagline: "Počnite besplatno — odmah",
    price: "0",
    currency: "KM",
    period: "/mjesečno",
    description: "Sve što vam treba za početak",
    icon: Building2,
    popular: false,
    features: [
      { text: "1 lokacija", included: true },
      { text: "Osnovni profil firme", included: true },
      { text: "Odgovori na recenzije", included: true },
      { text: "50 pozivnica mjesečno", included: true },
      { text: "1 widget za web", included: true },
      { text: "Osnovna analitika", included: true },
      { text: "Email podrška", included: true },
      { text: "Verificirani bedž", included: false },
      { text: "Napredna analitika", included: false },
      { text: "API pristup", included: false },
      { text: "White-label widgeti", included: false },
      { text: "Dedikirani account manager", included: false },
    ],
    cta: "Počnite besplatno — odmah",
    ctaStyle: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50",
  },
  {
    name: "Pro",
    tagline: "Najpopularniji — preporučujemo ga",
    price: "79",
    currency: "KM",
    period: "~40€/mjesečno",
    description: "Za firme koje žele rasti",
    icon: Zap,
    popular: true,
    features: [
      { text: "3 lokacije", included: true },
      { text: "Napredni profil firme", included: true },
      { text: "Sve iz Free plana", included: true },
      { text: "300 pozivnica mjesečno", included: true },
      { text: "5 widgeta za web", included: true },
      { text: "Napredna analitika", included: true },
      { text: "Email pozivnice", included: true },
      { text: "Prioritetna podrška", included: true },
      { text: "Verificirani bedž", included: true },
      { text: "Google Seller Ratings", included: true },
      { text: "API pristup", included: false },
      { text: "White-label widgeti", included: false },
      { text: "Dedikirani account manager", included: false },
    ],
    cta: "Počnite s Pro planom",
    ctaStyle: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25",
  },
  {
    name: "Business",
    tagline: "Za ozbiljne firme",
    price: "199",
    currency: "KM",
    period: "~100€/mjesečno",
    description: "Za firme koje dominiraju tržištem",
    icon: Crown,
    popular: false,
    features: [
      { text: "10 lokacija", included: true },
      { text: "Premium profil firme", included: true },
      { text: "Sve iz Pro plana", included: true },
      { text: "1000 pozivnica mjesečno", included: true },
      { text: "Neograničeni widgeti", included: true },
      { text: "Sentiment analiza", included: true },
      { text: "Benchmark izvještaji", included: true },
      { text: "Dedikirani account manager", included: true },
      { text: "White-label widgeti", included: true },
      { text: "API pristup", included: true },
      { text: "Konkurentska analiza", included: true },
      { text: "Custom integracije", included: true },
    ],
    cta: "Ozbiljne firme biraju Business",
    ctaStyle: "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 shadow-lg shadow-gray-900/25",
  },
  {
    name: "Enterprise",
    tagline: "Po mjeri",
    price: "Po dogovoru",
    currency: "",
    period: "",
    description: "Za korporacije i lance",
    icon: Award,
    popular: false,
    features: [
      { text: "Neograničene lokacije", included: true },
      { text: "Enterprise profil", included: true },
      { text: "Sve iz Business plana", included: true },
      { text: "Neograničene pozivnice", included: true },
      { text: "Custom razvoj", included: true },
      { text: "Dedicated server", included: true },
      { text: "SLA 99.9%", included: true },
      { text: "24/7 podrška", included: true },
      { text: "White-label rješenja", included: true },
      { text: "Multi-brand upravljanje", included: true },
      { text: "SSO integracija", included: true },
      { text: "Custom reporting", included: true },
    ],
    cta: "Kontaktirajte nas",
    ctaStyle: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50",
  },
];

const comparisonFeatures = [
  {
    category: "Osnovno",
    features: [
      { name: "Lokacije", free: "1", pro: "3", business: "10", enterprise: "Neograničeno" },
      { name: "Pozivnice", free: "50", pro: "300", business: "1000", enterprise: "Neograničeno" },
      { name: "Widgeti", free: "1", pro: "5", business: "Neograničeno", enterprise: "Neograničeno" },
      { name: "Zaposlenici", free: "1", pro: "3", business: "10", enterprise: "Neograničeno" },
    ],
  },
  {
    category: "Analitika",
    features: [
      { name: "Osnovna analitika", free: true, pro: true, business: true, enterprise: true },
      { name: "Napredna analitika", free: false, pro: true, business: true, enterprise: true },
      { name: "Sentiment analiza", free: false, pro: false, business: true, enterprise: true },
      { name: "Benchmark izvještaji", free: false, pro: false, business: true, enterprise: true },
      { name: "Konkurentska analiza", free: false, pro: false, business: true, enterprise: true },
      { name: "Custom izvještaji", free: false, pro: false, business: false, enterprise: true },
    ],
  },
  {
    category: "Marketinški alati",
    features: [
      { name: "Email pozivnice", free: false, pro: true, business: true, enterprise: true },
      { name: "Google Seller Ratings", free: false, pro: true, business: true, enterprise: true },
      { name: "White-label widgeti", free: false, pro: false, business: true, enterprise: true },
      { name: "API pristup", free: false, pro: false, business: true, enterprise: true },
      { name: "Custom integracije", free: false, pro: false, business: true, enterprise: true },
      { name: "Embed kodovi", free: true, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Podrška",
    features: [
      { name: "Email podrška", free: true, pro: true, business: true, enterprise: true },
      { name: "Prioritetna podrška", free: false, pro: true, business: true, enterprise: true },
      { name: "Telefonska podrška", free: false, pro: false, business: true, enterprise: true },
      { name: "Dedikirani account manager", free: false, pro: false, business: true, enterprise: true },
      { name: "24/7 podrška", free: false, pro: false, business: false, enterprise: true },
      { name: "Onboarding sesija", free: false, pro: false, business: true, enterprise: true },
    ],
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
    content: "Kao IT firma, nama je online reputacija ključna. Ocjeni.ba nam je pomogao da se istaknemo na tržištu.",
    rating: 5,
    plan: "Pro",
  },
];

const faqs = [
  {
    question: "Mogu li promijeniti plan kasnije?",
    answer: "Da, možete nadograditi ili smanjiti plan u bilo kojem trenutku. Promjene stupa na snagu odmah, a razlika se proporcionalno obračunava.",
  },
  {
    question: "Postoji li ugovorna obveza?",
    answer: "Ne, svi planovi su mjesečni i možete ih otkazati u bilo kojem trenutku bez penala.",
  },
  {
    question: "Šta se događa s podacima ako otkažem plan?",
    answer: "Vaši podaci ostaju sigurni 30 dana nakon otkazivanja. Možete ih exportirati ili ponovo aktivirati račun.",
  },
  {
    question: "Da li nudite popuste za godišnje plaćanje?",
    answer: "Da, za godišnje plaćanje dobijete 2 mjeseca besplatno (20% popusta). Kontaktirajte nas za više informacija.",
  },
  {
    question: "Kako funkcioniše verificirani bedž?",
    answer: "Verificirani bedž dobijete nakon što potvrdite svoju firmu putem emaila, telefona ili poslovnih dokumenata. To povećava povjerenje kupaca.",
  },
  {
    question: "Mogu li koristiti API u Pro planu?",
    answer: "API pristup je dostupan u Business i Enterprise planovima. U Pro planu možete koristiti widgete i embed kodove.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-white mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Jednostavne cijene, bez skrivenih troškova
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Odaberite plan koji
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                odgovara vašim potrebama
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Svi planovi su mjesečni. Otkažite kad god hoćete. Bez skrivenih troškova.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 -mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${
                  plan.popular
                    ? "border-emerald-500 shadow-xl shadow-emerald-500/10 scale-105"
                    : "border-gray-200 hover:border-gray-300"
                } p-6 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      NAJPOPULARNIJI
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      plan.popular
                        ? "bg-emerald-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <plan.icon
                      className={`w-7 h-7 ${
                        plan.popular ? "text-emerald-600" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>
                </div>

                <div className="text-center mb-6">
                  {plan.price === "Po dogovoru" ? (
                    <div className="text-2xl font-bold text-gray-900">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg text-gray-500">od</span>
                      <span className="text-5xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg font-medium text-gray-500">
                        {plan.currency}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
                </div>

                <p className="text-sm text-gray-600 text-center mb-6">
                  {plan.description}
                </p>

                <Link
                  href={plan.name === "Enterprise" ? "/kontakt" : "/tvrtke/prijava"}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-200 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-500 mt-1">Zadovoljnih firmi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gray-900">500,000+</div>
              <div className="text-sm text-gray-500 mt-1">Recenzija</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gray-900">4.8/5</div>
              <div className="text-sm text-gray-500 mt-1">Prosjek platforme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-500 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Usporedite planove
            </h2>
            <p className="text-gray-500 mt-2">
              Uporedite planove — šta dobijate za svoj novac
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 w-1/4">
                      Funkcionalnost
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 w-1/6">
                      Free
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-emerald-600 w-1/6 bg-emerald-50">
                      Pro
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 w-1/6">
                      Business
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 w-1/6">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((group) => (
                    <>
                      <tr key={group.category}>
                        <td
                          colSpan={5}
                          className="py-3 px-6 bg-gray-50 font-bold text-gray-900 text-sm uppercase tracking-wider"
                        >
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 px-6 text-sm text-gray-700">
                            {feature.name}
                          </td>
                          {["free", "pro", "business", "enterprise"].map(
                            (plan) => (
                              <td
                                key={plan}
                                className={`py-3 px-4 text-center text-sm ${
                                  plan === "pro" ? "bg-emerald-50/50" : ""
                                }`}
                              >
                                {typeof feature[plan as keyof typeof feature] ===
                                "boolean" ? (
                                  feature[plan as keyof typeof feature] ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                                  ) : (
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-200 mx-auto" />
                                  )
                                ) : (
                                  <span className="font-medium text-gray-700">
                                    {feature[plan as keyof typeof feature]}
                                  </span>
                                )}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Značke i bedževi
            </h2>
            <p className="text-gray-500 mt-2">
              Povećajte povjerenje kupaca s našim sistemom znački
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Verificirana firma
              </h3>
              <p className="text-gray-500 text-sm">
                Potvrda autentičnosti vaše firme. Povećava povjerenje kupaca za
                73%.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-500/30">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Top rated
              </h3>
              <p className="text-gray-500 text-sm">
                Za firme s ocjenom 4.5+ i minimalno 20 recenzija. Istaknite se
                iznad konkurencije.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Odgovara na recenzije
              </h3>
              <p className="text-gray-500 text-sm">
                Pokažite da vam je stalo do mišljenja kupaca. Tvrtke koje
                odgovaraju imaju 4.2x više povjerenja.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-purple-500/30">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Brza usluga
              </h3>
              <p className="text-gray-500 text-sm">
                Za firme koje brzo odgovaraju na upite i recenzije.
                Prosječno vrijeme odgovora manje od 24 sata.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-rose-500/30">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Omiljena firma
              </h3>
              <p className="text-gray-500 text-sm">
                Za firme koje su najčešće spremile u favorite od strane
                kupaca. Znak lojalnosti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Šta kažu naši korisnici
            </h2>
            <p className="text-gray-500 mt-2">
              Tvrtke koje već koriste Ocjeni.ba
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                    {testimonial.plan}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Često postavljana pitanja
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Spremni da vaša firma postane vidljiva?
              </h2>
              <p className="text-emerald-100 mb-8 text-lg max-w-xl mx-auto">
                Pridružite se 10,000+ firmi koje već koriste Ocjeni.ba za
                poboljšanje svog poslovanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tvrtke/prijava"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2 text-lg"
                >
                  Započnite besplatno
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/kontakt"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-lg"
                >
                  Kontaktirajte nas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
