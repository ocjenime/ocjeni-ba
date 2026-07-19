# Ocjeni.ba 🇧🇦

Platforma za recenzije u Bosni i Hercegovini.

## O projektu

Ocjeni.ba je neovisna platforma za recenzije koja povezuje potrošače i tvrtke u Bosni i Hercegovini. Platforma omogućava provjerene, poštene recenzije proizvoda, usluga i iskustava — u sigurnom okruženju bez napada i manipulacija.

## Tehnički stack

### Frontend
- **Next.js 14** - React framework za SSR/SSG
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Prisma** - ORM za PostgreSQL

### Backend
- **NestJS** - Node.js framework
- **TypeScript** - Type-safe JavaScript
- **TypeORM** - ORM za PostgreSQL
- **PostgreSQL** - Relacijska baza podataka
- **Redis** - Cache i session management

### Infrastruktura
- **Docker** - Kontejnerizacija
- **GitHub Actions** - CI/CD

## Pokretanje projekta

### Preduvjeti
- Node.js 18+
- Docker i Docker Compose
- npm ili yarn

### 1. Pokretanje baze podataka

```bash
# Pokreni PostgreSQL i Redis
docker-compose up -d
```

### 2. Backend

```bash
# Idi u backend direktorij
cd backend

# Instaliraj ovisnosti
npm install

# Kopiraj okolinu
cp .env.example .env

# Pokreni backend
npm run start:dev
```

Backend će biti dostupan na: http://localhost:3001
Swagger dokumentacija: http://localhost:3001/api/docs

### 3. Frontend

```bash
# Idi u frontend direktorij
cd frontend

# Instaliraj ovisnosti
npm install

# Pokreni frontend
npm run dev
```

Frontend će biti dostupan na: http://localhost:3000

## Struktura projekta

```
ocjeni-ba/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # Stranice (App Router)
│   │   ├── components/      # React komponente
│   │   ├── lib/             # Pomoćne funkcije
│   │   ├── hooks/           # Custom React hookovi
│   │   └── types/           # TypeScript tipovi
│   └── public/              # Statičke datoteke
├── backend/                  # NestJS backend
│   ├── src/
│   │   ├── modules/         # Moduli (auth, users, reviews, ...)
│   │   ├── common/          # Zajednički alati
│   │   └── database/        # Migracije i seedovi
│   └── .env.example         # Primjer okoline
├── docker-compose.yml       # Docker konfiguracija
└── README.md                # Ovaj dokument
```

## Plan razvoja

### Faza 1: MVP (Mjesec 1-3)
- [ ] Registracija/prijava korisnika
- [ ] Osnovni profil tvrtke
- [ ] Pisanje i čitanje recenzija
- [ ] Osnovna pretraga
- [ ] Osnovna moderacija

### Faza 2: Core (Mjesec 4-6)
- [ ] Napredna pretraga i filtriranje
- [ ] Widgeti za web stranice
- [ ] Email pozivnice
- [ ] Napredna analitika

### Faza 3: Growth (Mjesec 7-9)
- [ ] AI moderacija
- [ ] Sentiment analiza
- [ ] API za integracije

### Faza 4: Scale (Mjesec 10-12)
- [ ] Mobilna aplikacija
- [ ] Enterprise features
- [ ] Reginalna ekspanzija

## Cijenovni planovi

### Za potrošače
- **Besplatno** - Potpuno besplatno za sve

### Za tvrtke
| Plan | Cijena | Značajke |
|------|--------|----------|
| Besplatno | 0 KM/mj | Osnovni profil, 50 pozivnica |
| Pro | 49 KM/mj | Napredni profil, 300 pozivnica |
| Business | 149 KM/mj | API, sentiment analiza |
| Enterprise | Po dogovoru | Sve + custom rješenja |

## Kontakt

- **Email:** info@ocjeni.ba
- **Web:** https://ocjeni.ba

## Licenca

MIT License
