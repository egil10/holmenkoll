# Holmenkollstafetten

A dashboard and history archive for [Holmenkollstafetten](https://holmenkollstafetten.no) — the world's largest relay race, held in Oslo every May since 1923. _Vårens vakreste eventyr_.

Live site: **https://holmenkoll.vercel.app** _(after deploy)_

## What it includes

- **Hjem** — overview with latest results, key stats, story of the year
- **Resultater** — top finishers in men's/women's elite for 2024–2026 plus stage records
- **Historie** — illustrated timeline from IK Tjalve's founding in 1890 through to 2026
- **Mestere** — hall of fame: most wins per club, all elite winners year by year
- **Sammenlign** — pick two clubs and see them side by side
- **Statistikk** — interactive charts of participation and winning times since 1923
- **Om** — disclaimers, full source list, how the site is built

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a Norwegian flag palette (red `#BA0C2F`, white, blue `#00205B`)
- Recharts for the time-series and bar charts
- Lucide for icons
- Playfair Display + Inter for typography

## Local dev

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push the repo and import on [vercel.com/new](https://vercel.com/new) — no extra config needed.

## Data

All data is hand-curated from public sources (see `/om` page) and lives as plain TypeScript files under `src/data/`. To add a result year, drop in a new `results-<year>.ts` and wire it up in the resultater page.

## Disclaimer

Hobby project. Not affiliated with IK Tjalve or the organizers. For the official, complete results, see [holmenkollstafetten.no/resultater](https://holmenkollstafetten.no/resultater).
