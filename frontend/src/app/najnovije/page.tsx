import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Building2,
  MapPin,
  ArrowRight,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Najnovije recenzije | Ocjeni.ba",
};

const reviews = [
  {
    id: 1,
    author: "Emir Hadžić",
    rating: 5,
    date: "18. juli 2026.",
    business: "Arilux D.O.O.",
    businessSlug: "arilux-doo",
    title: "Izuzetno profesionalna usluga",
    content:
      "Angažirao sam Arilux za renovaciju stana i moram priznati da sam više nego zadovoljan. Tim je bio profesionalan, tačan i kvalitet radova je na najvišem nivou. Sve preporuke!",
    helpful: 24,
  },
  {
    id: 2,
    author: "Amela Kovačević",
    rating: 5,
    date: "17. juli 2026.",
    business: "Cafe Bar Amor",
    businessSlug: "cafe-bar-amor",
    title: "Najbolji kafić u Velikoj Kladuši",
    content:
      "Amor je moj omiljeni kafić već godinama. Kafa je uvijek svježa, atmosfera ugodna, a osoblje susretljivo. Posebno mi se sviđa njihov domaći specijalitet. Rado se vraćam!",
    helpful: 18,
  },
  {
    id: 3,
    author: "Dragan Nikolić",
    rating: 4,
    date: "16. juli 2026.",
    business: "Arilux D.O.O.",
    businessSlug: "arilux-doo",
    title: "Dobar rad, mali pomaci u rokovima",
    content:
      "Arilux je odradio solidan posao na adaptaciji kupatila. Kvalitet materijala i izvedbe je odličan. Jedina zamjerka su bili blagi pomaci u rokovima, ali na kraju je sve završeno kako treba.",
    helpful: 12,
  },
  {
    id: 4,
    author: "Sabina Šabić",
    rating: 5,
    date: "15. juli 2026.",
    business: "Cafe Bar Amor",
    businessSlug: "cafe-bar-amor",
    title: "Savršeno mjesto za druženje",
    content:
      "Sa društvom redovno dolazimo u Amor. Imaju odličnu ponudu pića, a i kuhinja im je sve bolja. Konobari su uvijek nasmijani i brzi. Topla preporuka za sve koji traže ugodan ambijent!",
    helpful: 31,
  },
  {
    id: 5,
    author: "Haris Begić",
    rating: 5,
    date: "14. juli 2026.",
    business: "Arilux D.O.O.",
    businessSlug: "arilux-doo",
    title: "Vrijedan svake marke",
    content:
      "Nakon duge potrage za pouzdanim izvođačem radova, konačno sam pronašao Arilux. Cijena je fer, rad je precizan, a komunikacija s vlasnikom je bila odlična cijelo vrijeme. Definitivno 5 zvjezdica.",
    helpful: 15,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function NajnovijePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Recenzije
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              Najnovije recenzije
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Iskustva stvarnih kupaca iz cijele Bosne i Hercegovine. Sve
              recenzije su verificirane.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-bold text-sm">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-400">{review.date}</div>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {review.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={`/tvrtke/${review.businessSlug}`}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    <Building2 className="w-4 h-4" />
                    {review.business}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs text-gray-400">
                    {review.helpful} korisno
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Podijelite svoje iskustvo
          </h2>
          <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
            Vaša recenzija pomaže drugim kupcima da donesu pravu odluku.
          </p>
          <Link
            href="/tvrtke/prijava"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25"
          >
            Prijavite firmu besplatno
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
