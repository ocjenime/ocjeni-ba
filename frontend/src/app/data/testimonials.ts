export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "ocijeni.ba nam je pomogao da izgradimo povjerenje s klijentima. Recenzije su postale naš najjači marketing.",
    author: "Amir H.",
    role: "Vlasnik restorana",
    location: "Sarajevo",
  },
  {
    id: "t2",
    quote:
      "Konačno platforma gdje mogu naći provjerene majstore bez straha da ću preplatiti uslugu.",
    author: "Maja K.",
    role: "Korisnik",
    location: "Mostar",
  },
  {
    id: "t3",
    quote:
      "Kao lanac hotela, Enterprise paket nam daje sve alate za upravljanje reputacijom na jednom mjestu.",
    author: "Damir S.",
    role: "Marketing direktor",
    location: "Banja Luka",
  },
];
