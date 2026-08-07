"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageSquare,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Podrška"
        title="Kontakt"
        subtitle="Imate pitanje? Javite nam se. Odgovorit ćemo u najkraćem mogućem roku."
        backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Poruka poslana!
                  </h3>
                  <p className="mt-2 text-foreground/70">
                    Hvala vam na poruci. Odgovorit ćemo vam u najkraćem roku.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="label">Ime i prezime</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="input"
                      placeholder="Vaše ime i prezime"
                    />
                  </div>
                  <div>
                    <label className="label">Email adresa</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="input"
                      placeholder="vasa@email.com"
                    />
                  </div>
                  <div>
                    <label className="label">Predmet</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="input"
                      placeholder="O čemu se radi?"
                    />
                  </div>
                  <div>
                    <label className="label">Poruka</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="input resize-none"
                      placeholder="Vaša poruka..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Pošaljite poruku
                  </button>
                </motion.form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <h3 className="mb-4 font-semibold text-foreground">Kontakt podaci</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                      <Mail className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                        Email
                      </div>
                      <div className="font-medium text-foreground">
                        info@ocjeni.ba
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                      <Phone className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                        Telefon
                      </div>
                      <div className="font-medium text-foreground">
                        +387 XX XXX XXX
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                      <MapPin className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                        Lokacija
                      </div>
                      <div className="font-medium text-foreground">
                        Sarajevo, Bosna i Hercegovina
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-semibold text-foreground">Radno vrijeme</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Ponedjeljak - Petak</span>
                    <span className="font-medium text-foreground">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Subota</span>
                    <span className="font-medium text-foreground">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Nedjelja</span>
                    <span className="text-foreground/40">Zatvoreno</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-semibold text-foreground">Hitna podrška?</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Za hitne probleme pošaljite email direktno na{" "}
                  <span className="font-semibold text-emerald-400">
                    info@ocjeni.ba
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 py-16 dark:border-white/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Za firme
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Želite registrovati firmu?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
            Registracija je potpuno besplatna. Započnite odmah.
          </p>
          <Link href="/tvrtke/prijava" className="btn-primary mt-6">
            Prijavite firmu besplatno
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
