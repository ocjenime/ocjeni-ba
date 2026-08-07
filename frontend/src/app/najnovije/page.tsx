import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Building2,
  ArrowRight,
} from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";

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
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function NajnovijePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-full max-w-3xl bg-gradient-to-b from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Recenzije
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Najnovije recenzije
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/60">
              Iskustva stvarnih kupaca iz cijele Bosne i Hercegovine. Sve
              recenzije su verificirane.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <SlideUp key={review.id} delay={index * 0.08}>
                <div className="card">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <span className="text-sm font-bold text-emerald-400">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {review.author}
                        </div>
                        <div className="text-xs text-foreground/50">{review.date}</div>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>

                  <h3 className="mb-2 font-semibold text-white">{review.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                    {review.content}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <Link
                      href={`/tvrtke/${review.businessSlug}`}
                      className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-emerald-400"
                    >
                      <Building2 className="h-4 w-4" />
                      {review.business}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-xs text-foreground/50">
                      {review.helpful} korisno
                    </span>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <SlideUp>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Podijelite iskustvo
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Podijelite svoje iskustvo
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Vaša recenzija pomaže drugim kupcima da donesu pravu odluku.
            </p>
            <Link href="/tvrtke/prijava" className="btn-primary mt-6">
              Prijavite firmu besplatno
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
