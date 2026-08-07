"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  plan: string;
  message: string;
}

const categoryOptions = [
  "Restoran / kafić",
  "Hotel / smještaj",
  "Ljepota / wellness",
  "Auto servis",
  "Građevina / uređenje",
  "Tehnologija / servis",
  "Ostalo",
];

const planOptions = [
  { value: "", label: "Odaberite paket" },
  { value: "basic", label: "Osnovni (besplatno)" },
  { value: "business", label: "Poslovni (€29/mj)" },
  { value: "enterprise", label: "Enterprise (po dogovoru)" },
];

export default function BusinessFormSection() {
  const [form, setForm] = useState<FormData>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    category: "",
    plan: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.businessName.trim())
      nextErrors.businessName = "Unesite naziv tvrtke.";
    if (!form.contactName.trim())
      nextErrors.contactName = "Unesite ime kontakt osobe.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = "Unesite email adresu.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Unesite ispravnu email adresu.";
    }

    if (!form.city.trim()) nextErrors.city = "Unesite grad.";
    if (!form.category) nextErrors.category = "Odaberite kategoriju.";
    if (!form.plan) nextErrors.plan = "Odaberite paket.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="relative scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Dodaj tvrtku
          </span>
          <h2
            id="kontakt-heading"
            className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Pridruži se{" "}
            <span className="gradient-text">ocijeni.ba</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/60">
            Popunite formular i naš tim će vas kontaktirati u roku od 24 sata.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-black/5 bg-black/[0.02] p-6 sm:p-10 dark:border-white/5 dark:bg-white/[0.02]"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 flex flex-col items-center py-12 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-3xl text-white">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                  Hvala vam
                </h3>
                <p className="mt-3 max-w-md text-foreground/70">
                  Primili smo vaš zahtjev. Kontaktirat ćemo vas u roku od 24
                  sata kako bismo zajedno pripremili najbolju prezentaciju
                  tvrtke na ocijeni.ba.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      businessName: "",
                      contactName: "",
                      email: "",
                      phone: "",
                      city: "",
                      category: "",
                      plan: "",
                      message: "",
                    });
                  }}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Pošalji novi zahtjev
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Naziv tvrtke
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={(e) =>
                        setForm({ ...form, businessName: e.target.value })
                      }
                      className={cn(
                        "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50",
                        errors.businessName
                          ? "border-red-400/50"
                          : "border-foreground/10"
                      )}
                      placeholder="npr. Restoran Sarajevo"
                      aria-invalid={errors.businessName ? "true" : "false"}
                    />
                    {errors.businessName && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactName"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Kontakt osoba
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={form.contactName}
                      onChange={(e) =>
                        setForm({ ...form, contactName: e.target.value })
                      }
                      className={cn(
                        "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50",
                        errors.contactName
                          ? "border-red-400/50"
                          : "border-foreground/10"
                      )}
                      placeholder="npr. Amir Hadžić"
                      aria-invalid={errors.contactName ? "true" : "false"}
                    />
                    {errors.contactName && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Email adresa
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={cn(
                        "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50",
                        errors.email ? "border-red-400/50" : "border-foreground/10"
                      )}
                      placeholder="amir@tvrtka.ba"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50"
                      placeholder="+387 61 123 456"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Grad
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      className={cn(
                        "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50",
                        errors.city ? "border-red-400/50" : "border-foreground/10"
                      )}
                      placeholder="Sarajevo"
                      aria-invalid={errors.city ? "true" : "false"}
                    />
                    {errors.city && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Kategorija
                    </label>
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className={cn(
                        "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground outline-none transition-colors focus:border-emerald-400/50",
                        errors.category
                          ? "border-red-400/50"
                          : "border-foreground/10"
                      )}
                      aria-invalid={errors.category ? "true" : "false"}
                    >
                      <option value="" className="bg-background">
                        Odaberite kategoriju
                      </option>
                      {categoryOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-background"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.category}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="plan"
                    className="mb-2 block text-sm font-medium text-foreground/80"
                  >
                    Paket
                  </label>
                  <select
                    id="plan"
                    value={form.plan}
                    onChange={(e) =>
                      setForm({ ...form, plan: e.target.value })
                    }
                    className={cn(
                      "w-full rounded-xl border bg-foreground/5 px-4 py-3 text-foreground outline-none transition-colors focus:border-emerald-400/50",
                      errors.plan ? "border-red-400/50" : "border-foreground/10"
                    )}
                    aria-invalid={errors.plan ? "true" : "false"}
                  >
                    {planOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-background"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.plan && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.plan}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground/80"
                  >
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-emerald-400/50"
                    placeholder="Recite nam nešto više o vašoj tvrtci..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-8 text-base font-semibold text-white shadow-xl shadow-green-500/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Šalje se...
                    </span>
                  ) : (
                    "Pošalji zahtjev"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
