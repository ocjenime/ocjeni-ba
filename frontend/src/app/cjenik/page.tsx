"use client";

import Link from "next/link";
import { Fragment } from "react";
import {
  Star,
  Shield,
  Zap,
  Crown,
  Building2,
  MessageSquare,
  Target,
  ArrowRight,
  CheckCircle2,
  Award,
  ChevronRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

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

const badges = [
  {
    icon: Shield,
    title: "Verificirana firma",
    description: "Potvrda autentičnosti vaše firme. Povećava povjerenje kupaca za 73%.",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Crown,
    title: "Top rated",
    description: "Za firme s ocjenom 4.5+ i minimalno 20 recenzija. Istaknite se iznad konkurencije.",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    icon: MessageSquare,
    title: "Odgovara na recenzije",
    description: "Pokažite da vam je stalo do mišljenja kupaca. Firme koje odgovaraju imaju 4.2x više povjerenja.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Target,
    title: "Brza usluga",
    description: "Za firme koje brzo odgovaraju na upite i recenzije. Prosječno vrijeme odgovora manje od 24 sata.",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Heart,
    title: "Omiljena firma",
    description: "Za firme koje su najčešće spremile u favorite od strane kupaca. Znak lojalnosti.",
    gradient: "from-rose-400 to-rose-600",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Cjenik"
        title="Odaberite plan koji odgovara vašim potrebama"
        highlight="odgovara vašim potrebama"
        subtitle="Svi planovi su mjesečni. Otkažite kad god hoćete. Bez skrivenih troškova."
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 ${
                  plan.popular
                    ? "border-emerald-500/30 bg-black/[0.03] shadow-2xl shadow-green-500/10 dark:bg-white/[0.03]"
                    : "border-black/5 bg-black/[0.02] hover:border-black/10 hover:bg-black/[0.03] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/[0.03]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-green-500/25">
                      NAJPOPULARNIJI
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      plan.popular
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-foreground/10 bg-foreground/5 text-foreground/70"
                    }`}
                  >
                    <plan.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-foreground/50">{plan.tagline}</p>
                </div>

                <div className="mb-6 text-center">
                  {plan.price === "Po dogovoru" ? (
                    <div className="text-2xl font-semibold text-foreground">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg text-foreground/50">od</span>
                      <span className="text-5xl font-semibold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-lg font-medium text-foreground/50">
                        {plan.currency}
                      </span>
                    </div>
                  )}
                  <p className="mt-1 text-sm text-foreground/50">{plan.period}</p>
                </div>

                <p className="mb-6 text-center text-sm text-foreground/60">
                  {plan.description}
                </p>

                <Link
                  href={plan.name === "Enterprise" ? "/kontakt" : "/tvrtke/prijava"}
                  className={`mb-6 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white shadow-lg shadow-green-500/25 hover:scale-[1.02]"
                      : plan.name === "Business"
                      ? "bg-foreground/10 text-foreground hover:bg-foreground/15"
                      : "border border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-auto space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                      ) : (
                        <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-foreground/10" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-foreground/70" : "text-foreground/30"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-black/5 py-12 dark:border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10,000+", label: "Zadovoljnih firmi" },
              { value: "500,000+", label: "Recenzija" },
              { value: "4.8/5", label: "Prosjek platforme" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-semibold text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Usporedba
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Usporedite planove
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
              Uporedite planove — šta dobijate za svoj novac
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/5 bg-black/[0.03] dark:border-white/5 dark:bg-white/[0.03]">
                    <th className="w-1/4 px-6 py-4 text-left font-semibold text-foreground">
                      Funkcionalnost
                    </th>
                    <th className="w-1/6 px-4 py-4 text-center font-semibold text-foreground">
                      Free
                    </th>
                    <th className="w-1/6 bg-emerald-500/10 px-4 py-4 text-center font-semibold text-emerald-400">
                      Pro
                    </th>
                    <th className="w-1/6 px-4 py-4 text-center font-semibold text-foreground">
                      Business
                    </th>
                    <th className="w-1/6 px-4 py-4 text-center font-semibold text-foreground">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((group) => (
                    <Fragment key={group.category}>
                      <tr>
                        <td
                          colSpan={5}
                          className="bg-black/[0.02] px-6 py-3 text-sm font-bold uppercase tracking-wider text-emerald-400 dark:bg-white/[0.02]"
                        >
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-b border-black/5 transition-colors hover:bg-black/[0.02] dark:border-white/5 dark:hover:bg-white/[0.02]"
                        >
                          <td className="px-6 py-3 text-sm text-foreground/80">
                            {feature.name}
                          </td>
                          {["free", "pro", "business", "enterprise"].map(
                            (plan) => (
                              <td
                                key={plan}
                                className={`px-4 py-3 text-center text-sm ${
                                  plan === "pro" ? "bg-emerald-500/5" : ""
                                }`}
                              >
                                {typeof feature[plan as keyof typeof feature] ===
                                "boolean" ? (
                                  feature[plan as keyof typeof feature] ? (
                                    <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-400" />
                                  ) : (
                                    <div className="mx-auto h-5 w-5 rounded-full border-2 border-foreground/10" />
                                  )
                                ) : (
                                  <span className="font-medium text-foreground/80">
                                    {feature[plan as keyof typeof feature]}
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
        </div>
      </section>

      {/* Badges Showcase */}
      <section className="border-y border-black/5 py-20 dark:border-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Značke
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Značke i bedževi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
              Povećajte povjerenje kupaca s našim sistemom znački
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card text-center"
              >
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.gradient} shadow-lg`}
                >
                  <badge.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{badge.title}</h3>
                <p className="mt-2 text-sm text-foreground/50">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Svjedočanstva
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Šta kažu naši korisnici
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card"
              >
                <div className="mb-4 flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm italic leading-relaxed text-foreground/70">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground/50">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                    {testimonial.plan}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-black/5 py-20 dark:border-white/5">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Često postavljana pitanja
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-foreground transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                  {faq.question}
                  <ChevronRight className="h-5 w-5 text-foreground/40 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-sm text-foreground/60">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500 to-teal-500 p-10 text-center text-white md:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                Spremni da vaša firma postane vidljiva?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-emerald-100">
                Pridružite se 10,000+ firmi koje već koriste Ocjeni.ba za
                poboljšanje svog poslovanja.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/tvrtke/prijava"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
                >
                  Započnite besplatno
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
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
