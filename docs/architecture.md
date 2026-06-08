# Architecture — aiteam Landing Page

## Overview

Single-page dark-mode landing website in Vietnamese introducing **aiteam** — an AI-powered platform that automatically builds software through Telegram conversations. No backend, no API, no data persistence.

## Tech Stack

| Layer | Technology | Justification |
|---|---|---|
| Framework | Next.js 15 App Router | SSR/SSG, fast dev, optimal Lighthouse score |
| Language | TypeScript | Type safety, fewer runtime bugs |
| Styling | Tailwind CSS v3 | Utility-first, design-system friendly |
| Animations | Framer Motion | Declarative, SSR-compatible scroll animations |
| Icons | react-icons | Consistent icon set, tree-shakeable |
| Language | Vietnamese (vi) | Per SRS requirement |

## Repository Structure

```
aiteam/
├── backend/               # Go API (placeholder, not yet used)
│   ├── cmd/api/main.go
│   ├── go.mod
│   ├── Dockerfile
│   └── .env.example
├── frontend/              # Next.js landing page
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── .eslintrc.json
│   ├── Dockerfile
│   └── .env.example
├── docs/
│   ├── SRS.md
│   └── architecture.md
├── docker-compose.yml
├── .env.example
├── .gitignore
└── .github/workflows/ci.yml
```

## Design Tokens

From `design.spec`:

| Token | Hex | Usage |
|---|---|---|
| Primary | `#3B82F6` | Buttons, glows, links, accents |
| Background | `#0F172A` | Page background |
| Surface | `#1E293B` | Cards, elevated elements |
| Muted | `#94A3B8` | Secondary text, captions |
| Text | `#F8FAFC` | Body text, headings |

## Pages & Sections

1. **Hero** (`#hero`) — Headline + 2 CTAs + dark gradient + blue glow
2. **How It Works** (`#how-it-works`) — 5-step horizontal/vertical timeline
3. **AI Agents** (`#ai-agents`) — 4 cards: PM, TL, Dev, TestLead
4. **Features** (`#features`) — 6-item grid with hover glow
5. **Tech Stack** (`#tech-stack`) — 6 tech badges
6. **Final CTA** (`#final-cta`) — Headline + Telegram button + glow
7. **Footer** — Logo, Telegram/GitHub links, copyright

## Component Conventions

- `app/page.tsx` — single file orchestrating all sections (SRS is simple enough)
- One component per section, placed inline or in `app/components/`
- `"use client"` only on animated/interactive components
- Framer Motion `whileInView` for scroll-triggered entrance animations
- `transition-all duration-300` on all interactive elements
- Mobile-first: start styles at base, enhance at `md:` and `lg:`

## Naming Conventions

- File names: `kebab-case.tsx`
- Component names: `PascalCase`
- Tailwind classes: lowercase with `-` separators
- No `temp`, `data`, `result` variable names without context

## Environment Variables

### Frontend `.env.example`

| Key | Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8080` | Backend API base URL (placeholder) |

### Backend `.env.example`

| Key | Purpose |
|---|---|
| `APP_PORT` | HTTP server port |
| `DB_HOST` | PostgreSQL host |
| `DB_PORT` | PostgreSQL port |
| `DB_USER` | PostgreSQL username |
| `DB_PASSWORD` | PostgreSQL password |
| `DB_NAME` | PostgreSQL database name |

### Root `.env.example`

| Key | Purpose |
|---|---|
| `POSTGRES_USER` | Postgres default user |
| `POSTGRES_PASSWORD` | Postgres default password |
| `POSTGRES_DB` | Postgres default database |

## Running Locally

```bash
# Option 1: Docker (full stack)
docker compose up

# Option 2: Frontend only (this project)
cd frontend
npm install
npm run dev
```

### Docker Compose Services

| Service | Image | Port | Notes |
|---|---|---|---|
| `db` | `postgres:16` | `5432` | Named volume `db-data`, healthcheck |
| `backend` | Build from `./backend` | `8080` | Waits for `db:5432` healthy |
| `frontend` | Build from `./frontend` | `3000` | `NEXT_PUBLIC_API_URL=http://backend:8080` |

## CI Pipeline

`.github/workflows/ci.yml` runs on every PR and push to `main`:

1. **backend** — `go build ./... && go vet ./... && go test ./...`
2. **frontend** — `npm ci && npm run lint && npm run build && npm test --if-present`
3. **compose** — `docker compose config -q`

All three jobs must pass before merge.

## Key Decisions

- **No backend yet** — SRS is a static landing page; Go API scaffold is prepared for future features (Telegram bot, AI agent pipeline).
- **Framer Motion for animations** — SSR-compatible, declarative scroll animations without extra JS payload on initial load.
- **App Router** — Next.js 15 default; enables React Server Components for static sections.
- **Inline SVG icons** — No external icon CDN; react-icons for consistent badge icons.
- **Design tokens in Tailwind config** — Colors mapped to semantic names (`primary`, `background`, `surface`, `muted`, `text`) for maintainability.
