export type Source = {
  title: string;
  url: string;
  used: string;
  category: "official" | "results" | "media" | "encyclopedia";
};

export const sources: Source[] = [
  {
    title: "Holmenkollstafetten — Resultater",
    url: "https://holmenkollstafetten.no/resultater",
    used: "Lenker til alle årlige resultater (Ultimate Live, EQ Timing).",
    category: "official",
  },
  {
    title: "Holmenkollstafetten — Vår historie",
    url: "https://holmenkollstafetten.no/om-arrang%C3%B8ren/historie",
    used: "Primær kilde for tidslinje og historiske milepæler 1890–2024.",
    category: "official",
  },
  {
    title: "Holmenkollstafetten — Forside",
    url: "https://holmenkollstafetten.no/",
    used: "Generell arrangementinformasjon, dato 2026.",
    category: "official",
  },
  {
    title: "Live.Ultimate.dk — Holmenkollstafetten 2026 (eventid 7129)",
    url: "https://live.ultimate.dk/desktop/front/index.php?eventid=7129",
    used: "Offisielle live-resultater for alle klasser 2026.",
    category: "results",
  },
  {
    title: "Live.Ultimate.dk — Holmenkollstafetten 2025 (eventid 6587)",
    url: "https://live.ultimate.dk/desktop/front/index.php?eventid=6587",
    used: "Offisielle live-resultater 2025, klasseinndeling F1–F10, A1–A6 osv.",
    category: "results",
  },
  {
    title: "Live.Ultimate.dk — Holmenkollstafetten 2024 (eventid 6082)",
    url: "https://live.ultimate.dk/desktop/front/?eventid=6082&ignoreuseragent=true",
    used: "Offisielle live-resultater 2024.",
    category: "results",
  },
  {
    title: "Live.eqtiming.com — MENY Holmenkollstafetten 2023 (61907)",
    url: "https://live.eqtiming.com/61907",
    used: "Timing-tjeneste 2023.",
    category: "results",
  },
  {
    title: "Live.eqtiming.com — Holmenkollstafetten 2022 (56848)",
    url: "https://live.eqtiming.com/56848",
    used: "Timing-tjeneste 2022.",
    category: "results",
  },
  {
    title: "Live.eqtiming.com — Holmenkollstafetten 2024 (73011)",
    url: "https://live.eqtiming.com/73011",
    used: "Timing-tjeneste 2024 (parallell kilde).",
    category: "results",
  },
  {
    title: "Sportsidioten.no — Holmenkollstafetten 2026",
    url: "https://www.sportsidioten.no/lop/holmenkollstafetten-2026/",
    used: "Pent oppsatte resultattabeller for alle klasser 2026.",
    category: "results",
  },
  {
    title: "Sportsidioten.no — Menn elite 2026",
    url: "https://www.sportsidioten.no/resultater/menn-elite-holmenkollstafetten-2026/",
    used: "Topp 10 menn elite 2026.",
    category: "results",
  },
  {
    title: "Sportsidioten.no — Kvinner elite 2026",
    url: "https://www.sportsidioten.no/resultater/kvinner-elite-holmenkollstafetten-2026/",
    used: "Topp 18 kvinner elite 2026.",
    category: "results",
  },
  {
    title: "Sportsidioten.no — Menn elite 2024",
    url: "https://www.sportsidioten.no/resultater/menn-elite-holmenkollstafetten-2024/",
    used: "Topp 19 menn elite 2024.",
    category: "results",
  },
  {
    title: "Sportsidioten.no — Kvinner elite 2024",
    url: "https://www.sportsidioten.no/resultater/kvinner-elite-holmenkollstafetten-2024/",
    used: "Topp 20 kvinner elite 2024.",
    category: "results",
  },
  {
    title: "NRK — Stafettverdensmesterne slått i egen stafett",
    url: "https://www.nrk.no/sport/holmenkollstafetten_-stafettverdensmesterne-slatt-i-egen-stafett-1.17877782",
    used: "Reportasje 2026, deltakerantall, fortelling.",
    category: "media",
  },
  {
    title: "Friidrett1 — Vidar og Ullensaker/Kisa vant 2026",
    url: "https://friidrett1.wordpress.com/2026/05/09/vidar-og-ullensaker-kisa-vant-holmenkollstafetten/",
    used: "Etapperekorder 2026, navngitte løpere.",
    category: "media",
  },
  {
    title: "Friidrett1 — Favorittene innfridde 2024",
    url: "https://friidrett1.wordpress.com/2024/05/04/favorittene-innfridde-i-holmenkollstafetten/",
    used: "Etapperekorder og navngitte løpere 2024.",
    category: "media",
  },
  {
    title: "Friidrett1 — Tjalve og Ullensaker/Kisa vant 2023",
    url: "https://friidrett1.wordpress.com/2023/05/13/tjalve-og-ullensaker-kisa-vant-holmenkollstafetten/",
    used: "Resultater og fortelling 2023.",
    category: "media",
  },
  {
    title: "Wikipedia — Holmenkollstafetten",
    url: "https://no.wikipedia.org/wiki/Holmenkollstafetten",
    used: "Vinnertabell 2005–2023, deltakerstatistikk.",
    category: "encyclopedia",
  },
  {
    title: "Store norske leksikon — Holmenkollstafetten",
    url: "https://snl.no/Holmenkollstafetten",
    used: "Generell historikk, distanse, etapper, vinnerstatistikk per klubb.",
    category: "encyclopedia",
  },
];
