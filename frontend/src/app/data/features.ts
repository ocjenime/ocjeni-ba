import { ShieldCheck, MapPin, Building2, Star, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: "verified-reviews",
    title: "Provjerene recenzije",
    description:
      "Svaka ocjena dolazi od stvarnih korisnika. Borimo se protiv lažnih recenzija i nagrada transparentnost.",
    icon: ShieldCheck,
  },
  {
    id: "discover-local",
    title: "Otkrij lokalno",
    description:
      "Pretražujte tvrtke po gradu, kategoriji i ocjeni. Pronađite najbolje usluge u vašoj blizini.",
    icon: MapPin,
  },
  {
    id: "business-profiles",
    title: "Profili tvrtki",
    description:
      "Detaljni profili s fotografijama, radnim vremenom, cjenikom i kontaktom — sve na jednom mjestu.",
    icon: Building2,
  },
  {
    id: "smart-ratings",
    title: "Pametne ocjene",
    description:
      "Ocjene po kategorijama: kvaliteta, cijena, brzina i komunikacija. Jasno i pošteno.",
    icon: Star,
  },
  {
    id: "for-businesses",
    title: "Za tvrtke",
    description:
      "Preuzmite svoj profil, odgovarajte na recenzije i izgradite povjerenje s korisnicima.",
    icon: Zap,
  },
];
