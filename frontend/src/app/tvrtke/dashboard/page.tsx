"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
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
  { label: "Ukupno recenzija", value: "234", change: "+12", icon: MessageSquare, color: "emerald" },
  { label: "Prosječna ocjena", value: "4.8", change: "+0.1", icon: Star, color: "amber" },
  { label: "Nepročitanih", value: "3", change: "", icon: Bell, color: "blue" },
  { label: "Pogledi profila", value: "1,247", change: "+18%", icon: Eye, color: "purple" },
];

const badges = [
  { name: "Verificirana firma", icon: Shield, color: "emerald", earned: true },
  { name: "Top rated", icon: Crown, color: "amber", earned: true },
  { name: "Odgovara na recenzije", icon: MessageSquare, color: "blue", earned: true },
  { name: "Brza usluga", icon: Target, color: "purple", earned: false },
  { name: "Omiljena firma", icon: Award, color: "rose", earned: false },
];

const quickActions = [
  { name: "Odgovori na recenziju", icon: MessageSquare, count: 2, color: "emerald" },
  { name: "Pošalji pozivnicu", icon: Mail, count: null, color: "blue" },
  { name: "Pogledaj widget", icon: Globe, count: null, color: "purple" },
  { name: "Eksportuj izvještaj", icon: FileText, count: null, color: "gray" },
];

export default function BusinessDashboardPage() {
  const { user, business, logout, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<"reviews" | "analytics" | "badges" | "settings">("reviews");
  const [respondingTo, setRespondingTo] = useState<number | null>(null);
  const [response, setResponse] = useState("");

  const handleRespond = (reviewId: number) => {
    console.log("Responding to review", reviewId, ":", response);
    setRespondingTo(null);
    setResponse("");
  };

  if (typeof window !== "undefined" && !isAuthenticated) {
    window.location.href = "/tvrtke/login";
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="font-bold text-gray-900">ocjeni.ba</span>
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-700 font-bold text-sm">IB</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                 {user?.name || "Vlasnik"}
               </div>
               <div className="text-xs text-gray-500">Vlasnik</div>
            </div>
          </div>
          <button
            onClick={() => { logout(); window.location.href = "/"; }}
            className="w-full flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm px-4 py-2 mt-2"
          >
            <LogOut className="w-4 h-4" />
            Odjavi se
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold text-gray-900">
                 {business?.businessName || "Moja firma"}
               </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <MapPin className="w-4 h-4" />
                Sarajevo · Kafići
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600">Verificirano</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <Link
                 href="/tvrtke/dashboard"
                 className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
               >
                Pogledaj profil →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                  {stat.change && (
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {quickActions.map((action) => (
              <button
                key={action.name}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all text-left"
              >
                <action.icon className={`w-5 h-5 text-${action.color}-500`} />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {action.name}
                  </div>
                  {action.count && (
                    <div className="text-xs text-emerald-600 font-medium">
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  Posljednje recenzije
                </h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm font-medium bg-emerald-50 text-emerald-700 rounded-lg">
                    Sve (4)
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-lg">
                    Na čekanju (2)
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-lg">
                    Odgovorene (2)
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {review.user}
                            </span>
                            {review.verified && (
                              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                Verificirano
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        {review.status === "pending" && (
                          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Na čekanju
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{review.content}</p>

                    {/* Response */}
                    {review.response && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-emerald-500">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                          <Building2 className="w-4 h-4 text-emerald-500" />
                          Odgovor firme
                        </div>
                        <p className="text-sm text-gray-600">
                          {review.response}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      {respondingTo === review.id ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Napišite odgovor..."
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <button
                            onClick={() => handleRespond(review.id)}
                            className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setRespondingTo(null);
                              setResponse("");
                            }}
                            className="text-gray-500 hover:text-gray-700 text-sm"
                          >
                            Odustani
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => setRespondingTo(review.id)}
                            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                          >
                            <MessageSquare className="w-4 h-4" />
                            Odgovori
                          </button>
                          <button className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            Korisno
                          </button>
                          <button className="text-sm text-gray-400 hover:text-red-500 flex items-center gap-1">
                            <Flag className="w-4 h-4" />
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

          {/* Badges */}
          {activeTab === "badges" && (
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  Vaši bedževi
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Bedževi povećavaju povjerenje kupaca
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`bg-white rounded-xl border p-6 transition-all ${
                      badge.earned
                        ? "border-emerald-200 hover:shadow-md"
                        : "border-gray-200 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          badge.earned
                            ? `bg-${badge.color}-100`
                            : "bg-gray-100"
                        }`}
                      >
                        <badge.icon
                          className={`w-7 h-7 ${
                            badge.earned
                              ? `text-${badge.color}-600`
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {badge.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {badge.earned ? "Zarađeno" : "Nije zarađeno"}
                        </div>
                      </div>
                      {badge.earned && (
                        <CheckCircle className="w-5 h-5 text-emerald-500 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* How to earn */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Kako zaraditi bedževe?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <div className="font-semibold">Verificirana firma</div>
                      <div className="text-sm text-gray-300">
                        Potvrdite svoju firmu putem emaila ili telefona
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-amber-400 mt-0.5" />
                    <div>
                      <div className="font-semibold">Top rated</div>
                      <div className="text-sm text-gray-300">
                        Ocjena 4.5+ s minimalno 20 recenzija
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="font-semibold">
                        Odgovara na recenzije
                      </div>
                      <div className="text-sm text-gray-300">
                        Odgovorite na 90%+ recenzija u zadnjih 30 dana
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <div className="font-semibold">Brza usluga</div>
                      <div className="text-sm text-gray-300">
                        Prosječno vrijeme odgovora manje od 24 sata
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics placeholder */}
          {activeTab === "analytics" && (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Analitika
              </h3>
              <p className="text-gray-500">
                Detaljna analitika bit će dostupna uskoro.
              </p>
            </div>
          )}

          {/* Settings placeholder */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Postavke
              </h3>
              <p className="text-gray-500">
                Uređivanje profila firme bit će dostupno uskoro.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
