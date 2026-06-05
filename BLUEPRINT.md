# BLUEPRINT.md

A reference for how **holmenkoll** (the Holmenkollstafetten dashboard) is built — its
architecture, design language, fonts, colours, data model and performance decisions.
Use this if you ever want to rebuild the site from scratch or port the look to another
project.

> *Vårens vakreste eventyr* — a hobby dashboard for the world's largest relay race,
> held in Oslo since 1923. Norwegian-flag palette, newspaper-era typography, all data
> in typed TypeScript files.

---

## 1. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14.2** (App Router) | `src/app/*` route segments |
| Language | **TypeScript** (strict) | Path alias `@/*` → `src/*` |
| Styling | **Tailwind CSS 3.4** + a small layer of hand-written CSS | `src/app/globals.css` holds the design tokens & component classes |
| Charts | **Recharts 2.12** | Line / area / bar charts on `/statistikk`, `/lag/[slug]` |
| Icons | **lucide-react** | Per-icon imports, tree-shaken |
| Animation helpers | **framer-motion** (installed) + CSS keyframes | Most motion is plain CSS |
| Class utils | **clsx + tailwind-merge** via `cn()` | `src/lib/utils.ts` |

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

---

## 2. Directory map

```
src/
  app/
    layout.tsx            # Root layout: fonts, <Nav/>, <main>, <Footer/>, metadata
    globals.css           # Design tokens + component classes (.card, .chip, .table-clean…)
    page.tsx              # Home (server component)
    resultater/           # All results, by year + class (client)
    lag/                  # Team search (client)
      [slug]/             # One team's history + chart (client, dynamic)
      gruppe/[slug]/      # Company group of related teams (client, dynamic)
    lopa/                 # Course map + elevation profile (server)
    etapper/              # 15 stages + stage records (client)
    historie/             # Vertical timeline (server)
    mestere/              # Hall of fame / winners (client)
    sammenlign/           # Club-vs-club comparison (client)
    statistikk/           # Charts: participation, winning times, win counts (client)
    om/                   # About + sources (server)
  components/
    nav.tsx               # Fixed top nav, scroll-aware, mobile drawer (client)
    footer.tsx            # 3-column footer
    results-table.tsx     # Paginated, accent-themed results table (client)
    section-header.tsx    # eyebrow + serif title + subtitle
    stat-card.tsx         # Icon + label + big serif value
  data/                   # All content lives here as typed TS
  lib/
    utils.ts              # cn(), time helpers, slugify(), teamStem()  ← NO data imports
    team-index.ts         # Builds the searchable team index from results-all
```

### Routing & rendering model
- Pages that only render static content (`/`, `/historie`, `/om`, `/lopa`) are **server
  components** — their data never reaches the browser.
- Interactive pages (`/resultater`, `/lag`, `/etapper`, `/mestere`, `/sammenlign`,
  `/statistikk`) are **client components** (`"use client"`).
- `/lag/[slug]` and `/lag/gruppe/[slug]` are **dynamic** (`ƒ`) — server-rendered on
  demand, no `generateStaticParams`. If you ever need a fully static export
  (`output: 'export'`), add `generateStaticParams` to pre-render team/group slugs.

---

## 3. Design language

The whole identity is the **Norwegian flag**: deep red + navy blue on a warm
off-white "paper" background, with a serif headline face that nods to inter-war
newspapers.

### 3.1 Colour tokens
Defined twice — as CSS custom properties in `globals.css` (`:root`) and as Tailwind
colours in `tailwind.config.ts` (so you can write `text-no-red`, `bg-no-blue/8`, etc.).

| Token | Hex | Use |
|---|---|---|
| `--no-red` / `no-red` | `#BA0C2F` | Primary brand / men's elite accent, links, CTAs |
| `--no-red-dark` | `#8E0823` | Hover state for red |
| `--no-blue` / `no-blue` | `#00205B` | Secondary / women's elite accent |
| `--no-blue-dark` | `#001340` | Hover state for blue |
| `no-blue-light` | `#1d3a8a` | Occasional lighter blue |
| `--no-cream` | `#F8F5EE` | Page background ("paper") |
| `--no-paper` | `#FFFFFF` | Cards, nav, footer surfaces |
| `--no-ink` | `#0E1226` | Primary text |
| `--no-muted` | `#5B6478` | Secondary text, labels |
| `--no-line` | `rgba(14,18,38,0.08)` | Borders, dividers |

**Semantic convention — remember this:** **men = red (`no-red`), women = blue
(`no-blue`), mixed/neutral = ink.** This drives accent colours on tables, chips,
charts and stat cards everywhere. `gender: "M" | "K" | "X"` on each class maps to
red / blue / ink.

`themeColor` (browser chrome) = `#BA0C2F`.

### 3.2 Typography
Two Google fonts loaded via `next/font/google` with `display: "swap"` and exposed as
CSS variables:

| Role | Font | Variable | Tailwind |
|---|---|---|---|
| Headlines / display | **Playfair Display** (serif) | `--font-display` | `font-display`, or the `.serif` class |
| Body / UI | **Inter** (sans) | `--font-inter` | `font-sans` (default on `<body>`) |
| Numbers / times | Inter with `font-mono tabular-nums` | — | used for all race times & ranks |

- `.serif` utility = Playfair + `letter-spacing: -0.02em`. Used on every page title,
  stat value and card heading.
- Headlines scale responsively, e.g. hero `text-4xl sm:text-6xl lg:text-7xl`,
  section titles `text-3xl sm:text-4xl`.
- Eyebrows / labels: `text-xs uppercase tracking-[0.2em] text-no-red font-semibold`.

### 3.3 Reusable CSS component classes (`globals.css`)
- `.card` — white surface, `1px` `--no-line` border, `16px` radius, soft layered
  shadow. `.card-hover:hover` lifts `-2px` with a bigger shadow.
- `.flag-corner` / `.flag-corner-blue` — a 4px solid vertical accent bar on the left
  edge of a card (red by default, blue variant). Pair with `pl-6`/`pl-7`.
- `.flag-bar` — solid red strip; used as the 3px line atop the nav & footer and as
  the underline accent on the hero word.
- `.chip` and variants — pill tags. `.chip-red`/`.chip-blue` (solid), and
  `.chip-soft-red`/`.chip-soft-blue` (tinted 8% background). Soft variants follow the
  gender colour.
- `.table-clean` — the shared table style: sticky uppercase headers, 12/16px padding,
  hover row tint, `tabular-nums` times. Medal colours `.rank-medal-1/2/3` (gold/
  silver/bronze) for the top three ranks.
- `.divider` — centred fading hairline between sections.
- `.bg-grid` — faint 32px dot/line grid used behind the hero.
- `.link` — red text with a soft underline that darkens on hover.
- Custom thin scrollbar; Recharts tooltip restyled to match the card look.

### 3.4 Layout & spacing conventions
- Page container: `max-w-7xl mx-auto px-4 sm:px-6`. Narrow pages (`/om`) use
  `max-w-3xl`, detail pages `max-w-5xl`.
- Vertical rhythm: sections use `py-14` / `py-14 sm:py-20`; `<main>` has `pt-20` to
  clear the fixed header.
- Cards/grids: 1 → 2 → 3/4 columns responsively (`grid-cols-1 sm:grid-cols-2
  lg:grid-cols-3`).
- Border radius scale: chips `999px`, buttons/inputs `lg` (0.5rem), cards `16px`.
- Shadows: `shadow-card` and `shadow-card-hover` (defined in Tailwind config).

### 3.5 Motion & accessibility
- `html { scroll-behavior: smooth; scroll-padding-top: 5rem }` so anchor jumps clear
  the fixed nav.
- Global `:focus-visible` red outline for keyboard users (mouse clicks stay clean).
- `@media (prefers-reduced-motion: reduce)` disables smooth scroll, hover lifts and
  entrance animations.
- Mobile menu adds `body.nav-open { overflow: hidden }` to lock background scroll, and
  the toggle exposes `aria-expanded` / `aria-controls`.

---

## 4. Data model

All content is hand-typed TypeScript in `src/data/` — no database, no runtime fetch.
This keeps the site a static, type-checked artifact that's easy to correct via PRs.

### Result shape
```ts
type Result = { rank: number; team: string; time: string }; // time = "H:MM:SS"
```

### Key files
- `classes.ts` — the class catalogue (`ClassDef`): `code` (e.g. F1), `slug`
  (`menn-elite`), `label`, `gender` (M/K/X), `group` (elite/alder/bedrift/mosjon/
  student/militaer/veldedig/para). `groupLabel` maps groups to Norwegian headings.
- `results-2026.ts`, `results-2025.ts`, `results-2024.ts` — elite hand-entered sets,
  plus `…-full.ts` and `…-mosjon-*.ts` for fuller class tables.
- `results-generated.ts` — **large machine-generated file** of full 2024–2026 class
  tables scraped from live.ultimate.dk. Stored as compact `[rank, team, time]` tuples
  and rehydrated into `Result[]` at module load (see §5). Regenerate via
  `scripts/fetch_ultimate_results.py`, then compact with
  `scripts/compact_generated.mjs`. Also exports `generatedResultCounts`.
- `results-all.ts` — **the aggregator.** Builds
  `results: Record<year, Record<classSlug, Result[]>>` by merging the generated tables
  (2024–26) with hand-entered historical podiums back to 2010. `availableYears` is the
  sorted year list. This is the single source the UI reads.
- `winners.ts` — year-by-year elite winners (`menn`, `kvinner`) + `cancelledYears`.
- `stages.ts` — the 15 legs (`stages`), `stageRecords`, `courseRecords`,
  `stageHighlights`.
- `timeline.ts` — `milestones` for the history page.
- `sources.ts` — citation list for the About page.

### The team index (`lib/team-index.ts`)
Lazily builds a flat `TeamEntry[]` from `results-all` and memoises it, plus helpers:
- `allEntries()` — every team appearance across all years/classes.
- `groupByStem()` / `topStems()` — groups teams by company "stem" (e.g. all "EY …"
  teams) using `teamStem()`.
- `groupByTeam()`, `search(q, limit)`, `totals()` (hero counters).
- `teamStem()` and `slugify()` **live in `lib/utils.ts`** and are re-exported here —
  see the performance note below.

---

## 5. Performance decisions (important)

The dataset is large (~14.8k result rows). Two rules keep it from bloating the client:

1. **`slugify` / `teamStem` must stay in `lib/utils.ts`, never in `team-index.ts`.**
   `team-index.ts` imports the full results dataset at module scope. Any client
   component that imports *anything* from it pulls the entire dataset into that
   route's JS bundle. `results-table.tsx` only needs `slugify`, so it imports from
   `utils` (which has zero data imports). This alone keeps the home page bundle small
   (~88 kB) instead of ~300 kB.
   → **Rule: data-free helpers go in `utils.ts`; only import `team-index` from pages
   that genuinely need the index (`/lag*`).**

2. **`results-generated.ts` is stored as compact tuples**, not pretty-printed objects.
   The fetcher emits objects; `scripts/compact_generated.mjs` rewrites them to
   `[rank, team, time]` tuples and a small `hydrate()` that maps them back to
   `Result[]`. This cut the file from ~1.5 MB to ~520 kB and trims the JS shipped to
   the data pages, while keeping `generatedResults`' runtime shape identical (so
   `results-all.ts` is unchanged). Re-run it after any fetch.

Other measures:
- `next.config.mjs` → `experimental.optimizePackageImports: ["lucide-react",
  "recharts"]` tree-shakes those barrels per route.
- Fonts use `display: "swap"`; only the `latin` subset is loaded.
- The OpenStreetMap iframe on `/lopa` is `loading="lazy"`.
- Server components (`/`, `/historie`, `/om`, `/lopa`) render data at build time and
  ship no dataset JS.

### Roadmap ideas if scaling further
- Pre-render `/lag/[slug]` & `/lag/gruppe/[slug]` via `generateStaticParams` (enables
  `output: 'export'` for fully static hosting).
- Code-split Recharts behind `next/dynamic` on `/statistikk` and team pages to shrink
  first load.
- Move full result tables to a fetched JSON asset (or route handler) so only the
  selected year/class is downloaded, instead of bundling all years client-side.

---

## 6. Rebuild checklist (cloning the look)

1. `create-next-app` with App Router + TypeScript + Tailwind.
2. Drop the colour tokens (§3.1) into `:root` and `tailwind.config.ts`.
3. Load Playfair Display + Inter via `next/font/google` as CSS variables; set Inter on
   `<body>`, add the `.serif` class for headings.
4. Copy the component classes from `globals.css` (`.card`, `.chip*`, `.table-clean`,
   `.flag-*`, `.divider`, `.link`) plus the a11y/motion block (§3.5).
5. Build the shell: fixed scroll-aware `Nav`, `SectionHeader`, `StatCard`, `Footer`,
   and a paginated accent-themed `ResultsTable`.
6. Put all content in typed files under `src/data/`; expose one aggregator
   (`results-all.ts`) and a memoised index (`team-index.ts`). Keep data-free helpers
   in `utils.ts`.
7. Apply the men=red / women=blue / mixed=ink rule consistently across chips, tables,
   charts and stat cards.
