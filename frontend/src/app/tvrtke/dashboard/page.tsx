"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Building2,
  Star,
  MessageSquare,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  ThumbsUp,
  Flag,
  Send,
  BarChart3,
  Eye,
  Shield,
  Crown,
  Award,
  Target,
  Sparkles,
  CreditCard,
  FileText,
  Globe,
  Mail,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import PageHero from "@/components/ui/PageHero";

const mockReviews = [
  {
    id: 1,
    user: "Amir H.",
    rating: 5,
    title: "Odlična usluga!",
    content:
      "Bio sam jako zadovoljan uslugom. Profesionalan pristup i brza usluga. Preporučujem svima!",
    date: "prije 2 dana",
    business: "Caffe Bar Kod Brace",
    response: null,
    status: "pending",
    verified: true,
  },
  {
    id: 2,
    user: "Selma M.",
    rating: 4,
    title: "Dobar kafe, malo gužve",
    content:
      "Kafa je odlična, ali je bilo malo gužve oko podneva. Sveukupno pozitivno iskustvo.",
    date: "prije 5 dana",
    business: "Caffe Bar Kod Brace",
    response: "Hvala vam na posjeti! Trudimo se smanjiti gužve.",
    status: "approved",
    verified: true,
  },
  {
    id: 3,
    user: "Marko K.",
    rating: 2,
    title: "Dugo sam čekao",
    content:
      "Čekao sam 20 minuta za kafu. Osoblje je bilo nezainteresirano. Moraju poboljšati uslugu.",
    date: "prije 1 tjedan",
    business: "Caffe Bar Kod Brace",
    response: null,
    status: "pending",
    verified: false,
  },
  {
    id: 4,
    user: "Jasna P.",
    rating: 5,
    title: "Najbolji kafe u gradu",
    content:
      "Redovito dolazim ovdje. Kafa je uvijek savršena, atmosfera ugodna. Toplo preporučujem!",
    date: "prije 2 tjedna",
    business: "Caffe Bar Kod Brace",
    response: "Hvala vam na vjernosti! Veselimo se vašem sljedećem dolasku.",
    status: "approved",
    verified: true,
  },
];

const stats = [
  { label: "Ukupno recenzija", value: "234", change: "+12", icon: MessageSquare },
  { label: "Prosječna ocjena", value: "4.8", change: "+0.1", icon: Star },
  { label: "Nepročitanih", value: "3", change: "", icon: Bell },
  { label: "Pogledi profila", value: "1,247", change: "+18%", icon: Eye },
];

const badges = [
  { name: "Verificirana firma", icon: Shield, earned: true },
  { name: "Top rated", icon: Crown, earned: true },
  { name: "Odgovara na recenzije", icon: MessageSquare, earned: true },
  { name: "Brza usluga", icon: Target, earned: false },
  { name: "Omiljena firma", icon: Award, earned: false },
];

const quickActions = [
  { name: "Odgovori na recenziju", icon: MessageSquare, count: 2 },
  { name: "Pošalji pozivnicu", icon: Mail, count: null },
  { name: "Pogledaj widget", icon: Globe, count: null },
  { name: "Eksportuj izvještaj", icon: FileText, count: null },
];

export default function BusinessDashboardPage() {
  const { user, business, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"reviews" | "analytics" | "badges" | "settings">("reviews");
  const [respondingTo, setRespondingTo] = useState<number | null>(null);
  const [response, setResponse] = useState("");
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [reported, setReported] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/tvrtke/login");
    }
  }, [isAuthenticated, router]);

  const handleRespond = (reviewId: number) => {
    console.log("Responding to review", reviewId, ":", response);
    setRespondingTo(null);
    setResponse("");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-0">
      {/* Sidebar */}
      <div className="fixed bottom-0 left-0 top-0 hidden w-64 border-r border-black/5 bg-background lg:block dark:border-white/5 dark:bg-white/[0.02]">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/ocijenilogo.jpg"
              alt="ocijeni.ba logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="px-4">
          <div className="space-y-1">
            {[
              { id: "reviews" as const, icon: MessageSquare, label: "Recenzije" },
              { id: "analytics" as const, icon: BarChart3, label: "Analitika" },
              { id: "badges" as const, icon: Award, label: "Bedževi" },
              { id: "settings" as const, icon: Settings, label: "Postavke" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-black/5 p-4 dark:border-white/5">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
              <span className="text-sm font-bold text-white">
                {user?.name?.charAt(0) || "V"}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-foreground">
                {user?.name || "Vlasnik"}
              </div>
              <div className="text-xs text-foreground/50">Vlasnik</div>
            </div>
          </div>
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-foreground/50 hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Odjavi se
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        <PageHero
          label="Dashboard"
          title={business?.businessName || "Moja firma"}
          subtitle="Upravljajte recenzijama, analitikom i profilom vaše firme"
          backgroundImage="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
          minHeight="min-h-[35vh]"
        />

        <div className="p-6">
          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-black/5 bg-black/[0.02] p-5 transition-all hover:border-black/10 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <stat.icon className="h-5 w-5 text-emerald-400" />
                  {stat.change && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {quickActions.map((action) => (
              <button
                key={action.name}
                onClick={() => {
                  if (action.name === "Odgovori na recenziju") setActiveTab("reviews");
                  else if (action.name === "Pošalji pozivnicu") alert("Slanje pozivnica će uskoro biti dostupno.");
                  else if (action.name === "Pogledaj widget") alert("Widget pregled će uskoro biti dostupan.");
                  else if (action.name === "Eksportuj izvještaj") alert("Eksport izvještaja će uskoro biti dostupan.");
                }}
                className="flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.02] p-4 text-left transition-all hover:border-emerald-500/30 hover:bg-black/[0.04] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
              >
                <action.icon className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {action.name}
                  </div>
                  {action.count && (
                    <div className="text-xs font-medium text-emerald-400">
                      {action.count} na čekanju
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Reviews */}
          {activeTab === "reviews" && (
            <div>
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-lg font-semibold text-foreground">
                  Posljednje recenzije
                </h2>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
                    Sve (4)
                  </button>
                  <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/50 hover:bg-foreground/5">
                    Na čekanju (2)
                  </button>
                  <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/50 hover:bg-foreground/5">
                    Odgovorene (2)
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-xl border border-black/5 bg-black/[0.02] p-6 transition-all hover:border-black/10 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                          <span className="font-medium text-foreground">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">
                              {review.user}
                            </span>
                            {review.verified && (
                              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                                <Shield className="h-3 w-3" />
                                Verificirano
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/50">
                            <Clock className="h-3 w-3" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-foreground/10 text-foreground/10"
                              }`}
                            />
                          ))}
                        </div>
                        {review.status === "pending" && (
                          <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-400">
                            <AlertCircle className="h-3 w-3" />
                            Na čekanju
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="mb-2 font-semibold text-foreground">{review.title}</h3>
                    <p className="mb-4 text-sm text-foreground/70">{review.content}</p>

                    {review.response && (
                      <div className="mb-4 rounded-lg border-l-4 border-emerald-500 bg-foreground/5 p-4">
                        <div className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                          <Building2 className="h-4 w-4 text-emerald-400" />
                          Odgovor firme
                        </div>
                        <p className="text-sm text-foreground/70">
                          {review.response}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 border-t border-foreground/5 pt-4">
                      {respondingTo === review.id ? (
                        <div className="flex flex-1 gap-2">
                          <input
                            type="text"
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Napišite odgovor..."
                            className="input flex-1 py-2 text-sm"
                          />
                          <button
                            onClick={() => handleRespond(review.id)}
                            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                          >
                            <Send className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              setRespondingTo(null);
                              setResponse("");
                            }}
                            className="text-sm text-foreground/50 hover:text-foreground"
                          >
                            Odustani
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => setRespondingTo(review.id)}
                            className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300"
                          >
                            <MessageSquare className="h-4 w-4" />
                            Odgovori
                          </button>
                          <button
                            onClick={() => setLiked((prev) => ({ ...prev, [review.id]: !prev[review.id] }))}
                            className={`flex items-center gap-1 text-sm transition-colors ${liked[review.id] ? "font-medium text-emerald-400" : "text-foreground/50 hover:text-foreground"}`}
                          >
                            <ThumbsUp className="h-4 w-4" />
                            {liked[review.id] ? "Korisno ✓" : "Korisno"}
                          </button>
                          <button
                            onClick={() => setReported((prev) => ({ ...prev, [review.id]: true }))}
                            className={`flex items-center gap-1 text-sm transition-colors ${reported[review.id] ? "font-medium text-red-400" : "text-foreground/50 hover:text-red-400"}`}
                            disabled={reported[review.id]}
                          >
                            <Flag className="h-4 w-4" />
                            {reported[review.id] ? "Prijavljeno" : "Prijavi"}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Badges */}
          {activeTab === "badges" && (
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-foreground">Vaši bedževi</h2>
                <p className="mt-1 text-sm text-foreground/50">
                  Bedževi povećavaju povjerenje kupaca
                </p>
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`rounded-xl border p-6 transition-all ${
                      badge.earned
                        ? "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
                        : "border-black/5 bg-black/[0.02] opacity-60 dark:border-white/5 dark:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                          badge.earned ? "bg-emerald-500/10" : "bg-foreground/5"
                        }`}
                      >
                        <badge.icon
                          className={`h-7 w-7 ${
                            badge.earned ? "text-emerald-400" : "text-foreground/40"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {badge.name}
                        </div>
                        <div className="text-sm text-foreground/50">
                          {badge.earned ? "Zarađeno" : "Nije zarađeno"}
                        </div>
                      </div>
                      {badge.earned && (
                        <CheckCircle className="ml-auto h-5 w-5 text-emerald-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02] p-8 dark:border-white/5 dark:bg-white/[0.02]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
                <h3 className="relative mb-4 text-xl font-semibold text-foreground">
                  Kako zaraditi bedževe?
                </h3>
                <div className="relative grid gap-4 md:grid-cols-2">
                  {[
                    { icon: Shield, title: "Verificirana firma", desc: "Potvrdite svoju firmu putem emaila ili telefona" },
                    { icon: Crown, title: "Top rated", desc: "Ocjena 4.5+ s minimalno 20 recenzija" },
                    { icon: MessageSquare, title: "Odgovara na recenzije", desc: "Odgovorite na 90%+ recenzija u zadnjih 30 dana" },
                    { icon: Target, title: "Brza usluga", desc: "Prosječno vrijeme odgovora manje od 24 sata" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <item.icon className="mt-0.5 h-5 w-5 text-emerald-400" />
                      <div>
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-sm text-foreground/60">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics placeholder */}
          {activeTab === "analytics" && (
            <div className="rounded-xl border border-black/5 bg-black/[0.02] p-12 text-center dark:border-white/5 dark:bg-white/[0.02]">
              <BarChart3 className="mx-auto mb-4 h-12 w-12 text-foreground/20" />
              <h3 className="text-lg font-semibold text-foreground">Analitika</h3>
              <p className="mt-2 text-foreground/50">
                Detaljna analitika bit će dostupna uskoro.
              </p>
            </div>
          )}

          {/* Settings placeholder */}
          {activeTab === "settings" && (
            <div className="rounded-xl border border-black/5 bg-black/[0.02] p-12 text-center dark:border-white/5 dark:bg-white/[0.02]">
              <Settings className="mx-auto mb-4 h-12 w-12 text-foreground/20" />
              <h3 className="text-lg font-semibold text-foreground">Postavke</h3>
              <p className="mt-2 text-foreground/50">
                Uređivanje profila firme bit će dostupno uskoro.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
