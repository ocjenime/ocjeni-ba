"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  BarChart3,
  Award,
  Settings,
  Bell,
  MapPin,
  CheckCircle,
  Star,
  Clock,
  ThumbsUp,
  Flag,
  Send,
  LogOut,
  Globe,
  FileText,
  Mail,
  Shield,
  Crown,
  Target,
  ShieldCheck,
  Sparkles,
  Construction,
  Inbox,
} from "lucide-react";

const mockReviews = [
  {
    id: 1,
    user: "Amar H.",
    rating: 5,
    title: "Odlična kava i atmosfera!",
    content:
      "Bio sam jako zadovoljan uslugom. Profesionalan pristup i odlična kafa. Preporučujem svima!",
    date: "prije 2 dana",
    response:
      "Hvala vam puno! Veseli nas što vam se sviđa naša kava.",
    status: "answered",
  },
  {
    id: 2,
    user: "Selma M.",
    rating: 4,
    title: "Dobra usluga, malo duže čekanje",
    content:
      "Usluga je bila dobra, ali smo malo duže čekali na kafu. Sveukupno pozitivno iskustvo.",
    date: "prije 5 dana",
    response: null,
    status: "pending",
  },
  {
    id: 3,
    user: "Ivan P.",
    rating: 5,
    title: "Najbolji kafić u Sarajevu!",
    content:
      "Redovito dolazim ovdje. Kafa je uvijek savršena, atmosfera ugodna. Toplo preporučujem!",
    date: "prije 1 tjedan",
    response: null,
    status: "pending",
  },
  {
    id: 4,
    user: "Lena K.",
    rating: 3,
    title: "Prosjek, ništa posebno",
    content:
      "Očekivala sam više na osnovu preporuka. Kafa je bila solidna, ali ništa posebno.",
    date: "prije 2 tjedna",
    response: null,
    status: "pending",
  },
];

const badges = [
  {
    name: "Verificirano",
    description: "Tvrtka je potvrđena putem emaila ili telefona",
    icon: ShieldCheck,
    earned: true,
  },
  {
    name: "Najbolje ocijenjen",
    description: "Ocjena 4.5+ s minimalno 20 recenzija",
    icon: Crown,
    earned: true,
  },
  {
    name: "Odgovara",
    description: "Odgovorite na 90%+ recenzija u zadnjih 30 dana",
    icon: MessageSquare,
    earned: true,
  },
  {
    name: "Brza usluga",
    description: "Prosječno vrijeme odgovora manje od 24 sata",
    icon: Target,
    earned: false,
  },
  {
    name: "Favorit",
    description: "Među top 10 tvrtki u kategoriji",
    icon: Sparkles,
    earned: false,
  },
];

const quickActions = [
  {
    name: "Odgovori na recenziju",
    description: "3 na čekanju",
    icon: MessageSquare,
  },
  {
    name: "Pošalji pozivnicu",
    description: "Pozovi korisnike",
    icon: Mail,
  },
  {
    name: "Pogledaj widget",
    description: "Ugradi na stranicu",
    icon: Globe,
  },
  {
    name: "Eksportuj izvještaj",
    description: "Preuzmi PDF",
    icon: FileText,
  },
];

export default function BusinessDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    "reviews" | "badges" | "analytics" | "settings"
  >("reviews");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "pending" | "answered"
  >("all");
  const [respondingTo, setRespondingTo] = useState<number | null>(null);
  const [response, setResponse] = useState("");

  const filteredReviews = mockReviews.filter((r) => {
    if (activeFilter === "pending") return r.status === "pending";
    if (activeFilter === "answered") return r.status === "answered";
    return true;
  });

  const pendingCount = mockReviews.filter((r) => r.status === "pending").length;
  const answeredCount = mockReviews.filter(
    (r) => r.status === "answered"
  ).length;

  const handleRespond = (reviewId: number) => {
    console.log("Responding to review", reviewId, ":", response);
    setRespondingTo(null);
    setResponse("");
  };

  const navItems = [
    { id: "reviews" as const, icon: MessageSquare, label: "Recenzije" },
    { id: "analytics" as const, icon: BarChart3, label: "Analitika" },
    { id: "badges" as const, icon: Award, label: "Bedževi" },
    { id: "settings" as const, icon: Settings, label: "Postavke" },
  ];

  return (
    <div className="flex min-h-screen bg-midnight-950">
      {/* Sidebar */}
      <div className="w-64 bg-midnight-900/80 border-r border-midnight-800/50 p-6 flex flex-col hidden lg:flex">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">O</span>
          </div>
          <span className="font-bold text-white">ocjeni.ba</span>
        </Link>

        {/* Nav */}
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-midnight-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User card */}
        <div className="border-t border-midnight-800/50 pt-4 mt-4">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-sm">M</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">
                Mirza K.
              </div>
              <div className="text-xs text-midnight-500">Vlasnik</div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-midnight-500 hover:text-red-400 text-xs mt-2 px-1 transition-colors">
            <LogOut className="w-3.5 h-3.5" />
            Odjavi se
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-white">
                Caffe Bar Kod Brace
              </h1>
              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" />
                Verificirano
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-midnight-400" />
              <span className="text-sm text-midnight-400">
                Sarajevo · Kafići
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-midnight-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
            <Link
              href="/tvrtke/caffe-bar-kod-brace"
              className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Pogledaj profil
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Ukupno recenzija",
              value: "234",
              change: "+12% ove sedmice",
            },
            {
              label: "Prosječna ocjena",
              value: "4.8",
              change: "+12% ove sedmice",
            },
            {
              label: "Nepročitane",
              value: "3",
              change: "+12% ove sedmice",
            },
            {
              label: "Pregledi profila",
              value: "1,247",
              change: "+12% ove sedmice",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-midnight-900/50 border border-midnight-800/50 rounded-xl p-5"
            >
              <div className="text-xs text-midnight-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {stat.value}
              </div>
              <div className="text-xs text-emerald-400 mt-1">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className="bg-midnight-900/40 hover:bg-midnight-800/60 border border-midnight-800/40 hover:border-amber-500/30 rounded-xl p-4 transition-all text-left"
            >
              <action.icon className="w-5 h-5 text-amber-400 mb-2" />
              <div className="text-sm font-medium text-white">
                {action.name}
              </div>
              <div className="text-xs text-midnight-500 mt-0.5">
                {action.description}
              </div>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-midnight-900/30 rounded-xl p-1">
          {[
            { id: "reviews" as const, label: "Recenzije" },
            { id: "badges" as const, label: "Bedževi" },
            { id: "analytics" as const, label: "Analitika" },
            { id: "settings" as const, label: "Postavke" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-midnight-800 text-white"
                  : "text-midnight-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: Reviews */}
        {activeTab === "reviews" && (
          <div>
            {/* Filters */}
            <div className="flex gap-2 mb-6">
              {[
                { id: "all" as const, label: "Sve" },
                { id: "pending" as const, label: `Na čekanju (${pendingCount})` },
                { id: "answered" as const, label: `Odgovorene (${answeredCount})` },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-amber-500/10 text-amber-400"
                      : "text-midnight-500 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-midnight-900/40 border border-midnight-800/40 rounded-xl p-5"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-midnight-700 flex items-center justify-center">
                      <span className="text-midnight-300 font-medium text-sm">
                        {review.user.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">
                        {review.user}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-midnight-500">
                        <Clock className="w-3 h-3" />
                        {review.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-midnight-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-white mb-1">
                    {review.title}
                  </h3>
                  <p className="text-midnight-300 text-sm">{review.content}</p>

                  {/* Response */}
                  {review.response && (
                    <div className="bg-midnight-800/50 rounded-lg p-3 mt-3 border-l-2 border-amber-500">
                      <div className="text-xs text-amber-400 font-medium mb-1">
                        Odgovor tvrtke
                      </div>
                      <p className="text-midnight-300 text-sm">
                        {review.response}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 mt-3">
                    {respondingTo === review.id ? (
                      <div className="flex-1 flex gap-2 items-center">
                        <input
                          type="text"
                          value={response}
                          onChange={(e) => setResponse(e.target.value)}
                          placeholder="Napišite odgovor..."
                          className="flex-1 px-3 py-2 bg-midnight-800/50 border border-midnight-700/50 rounded-lg text-sm text-white placeholder-midnight-500 outline-none focus:border-amber-500/50 transition-colors"
                        />
                        <button
                          onClick={() => handleRespond(review.id)}
                          className="btn-primary text-xs px-3 py-2"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setRespondingTo(null);
                            setResponse("");
                          }}
                          className="btn-secondary text-xs px-3 py-2"
                        >
                          Odustani
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => setRespondingTo(review.id)}
                          className="btn-secondary text-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Odgovori
                        </button>
                        <button className="flex items-center gap-1 text-xs text-midnight-500 hover:text-white transition-colors px-2 py-1">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          Korisno
                        </button>
                        <button className="flex items-center gap-1 text-xs text-midnight-500 hover:text-red-400 transition-colors px-2 py-1">
                          <Flag className="w-3.5 h-3.5" />
                          Prijavi
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Badges */}
        {activeTab === "badges" && (
          <div>
            <h2 className="text-lg font-bold text-white mb-6">
              Badgeovi pouzdanosti
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className="bg-midnight-900/40 border border-midnight-800/40 rounded-xl p-5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        badge.earned
                          ? "bg-gradient-to-br from-amber-500 to-amber-600"
                          : "bg-midnight-700"
                      }`}
                    >
                      <badge.icon
                        className={`w-6 h-6 ${
                          badge.earned ? "text-white" : "text-midnight-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold ${
                          badge.earned ? "text-white" : "text-midnight-600"
                        }`}
                      >
                        {badge.name}
                      </div>
                      <div className="text-xs text-midnight-400 mt-0.5">
                        {badge.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    {badge.earned ? (
                      <span className="badge badge-success text-xs">
                        Ostvareno
                      </span>
                    ) : (
                      <span className="text-xs text-midnight-600">
                        Nije ostvareno
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Analytics */}
        {activeTab === "analytics" && (
          <div className="bg-midnight-900/40 border border-midnight-800/40 rounded-xl p-12 text-center">
            <Construction className="w-12 h-12 text-midnight-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">U izradi</h3>
            <p className="text-midnight-400 text-sm">
              Detaljna analitika bit će dostupna uskoro. Pratite nas za
              ažuriranja.
            </p>
          </div>
        )}

        {/* Tab: Settings */}
        {activeTab === "settings" && (
          <div className="bg-midnight-900/40 border border-midnight-800/40 rounded-xl p-12 text-center">
            <Construction className="w-12 h-12 text-midnight-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">U izradi</h3>
            <p className="text-midnight-400 text-sm">
              Uređivanje profila tvrtke bit će dostupno uskoro. Pratite nas za
              ažuriranja.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
