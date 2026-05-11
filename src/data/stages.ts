// Holmenkollstafetten stages (etapper) — 15 legs total, course ~18.8 km
// Distances are approximate (course adjusted in 1928, 1948, 1988, 2011, 2013).
// Course length 2013: 18,840 m from Bislett. Length used for records 2011-2018: 18,610 m.

export type Stage = {
  leg: number;
  name: string;
  distance: number; // meters
  description: string;
  startArea: string;
  endArea: string;
  highlight?: string;
};

export const stages: Stage[] = [
  { leg: 1, name: "Bislett ut", distance: 660, startArea: "Bislett stadion", endArea: "Sankthanshaugen", description: "Kort åpningsetappe med tett start fra Bislett." },
  { leg: 2, name: "Hegdehaugen", distance: 1130, startArea: "Sankthanshaugen", endArea: "Hegdehaugsveien", description: "Ned mot Frogner og inn på første lange bakkedrag." },
  { leg: 3, name: "Bogstadveien", distance: 1140, startArea: "Hegdehaugsveien", endArea: "Majorstuen", description: "Gjennom shoppinggata Bogstadveien." },
  { leg: 4, name: "Majorstuen", distance: 990, startArea: "Majorstuen", endArea: "Vinderen", description: "Opp Sørkedalsveien til Vinderen.", highlight: "Kort, men ofte taktisk avgjørende." },
  { leg: 5, name: "Vinderen", distance: 800, startArea: "Vinderen", endArea: "Slemdal", description: "Bratt etappe oppover mot Slemdal." },
  { leg: 6, name: "Slemdal", distance: 1370, startArea: "Slemdal", endArea: "Holmendammen", description: "Videre opp i åsen, motbakke hele veien." },
  { leg: 7, name: "Holmendammen → Besserud", distance: 1790, startArea: "Holmendammen", endArea: "Besserud", description: "Den lengste oppoverbakken — Holmenkollstafettens kongeetappe.", highlight: "«Bakken» — det viktigste utsiktspunktet." },
  { leg: 8, name: "Besserud", distance: 460, startArea: "Besserud", endArea: "Vettakollen vei", description: "Kort etappe på toppen av løypa, før utforkjøringen begynner." },
  { leg: 9, name: "Utforkjøring", distance: 470, startArea: "Vettakollen vei", endArea: "Holmenkollveien", description: "Kort, rask nedover. Etapperekord under 1:30." },
  { leg: 10, name: "Holmendammen → Frognerparken", distance: 2840, startArea: "Holmendammen", endArea: "Frognerparken", description: "Lang nedoverbakke gjennom Vinderen og Smestad.", highlight: "Lengste etappe — gravity is back on your side." },
  { leg: 11, name: "Frognerparken", distance: 770, startArea: "Frognerparken", endArea: "Nobels gate", description: "Inn i og gjennom selve parken." },
  { leg: 12, name: "Eckersbergs gate", distance: 870, startArea: "Nobels gate", endArea: "Gyldenløves gate", description: "Korte, urbane svinger." },
  { leg: 13, name: "Gyldenløves gate", distance: 540, startArea: "Gyldenløves gate", endArea: "Colbjørnsens gate", description: "Mot innspurten — kort og rask." },
  { leg: 14, name: "Colbjørnsens gate", distance: 320, startArea: "Colbjørnsens gate", endArea: "Bislett", description: "Den nest siste — sprintkarakter." },
  { leg: 15, name: "Inn på Bislett", distance: 690, startArea: "Bislett-området", endArea: "Bislett stadion", description: "Ankeretappe inn på Bislett-stadion til jubel fra publikum." },
];

export type StageRecord = {
  leg: number;
  klass: "menn" | "kvinner";
  runner: string;
  team: string;
  time: string;
  year: number;
  note?: string;
};

// Stage records — verified entries only. Some legs are missing public records.
// Sources: kondis.no/Tilbakeblikk, friidrett1, NRK, sportsidioten.
export const stageRecords: StageRecord[] = [
  // Men
  { leg: 1, klass: "menn", runner: "Tobias Grønstad", team: "Ull/Kisa", time: "2:56", year: 2022 },
  { leg: 7, klass: "menn", runner: "Sindre Buraas", team: "IL Gular", time: "5:29", year: 2011, note: "Kongeetappen (1790 m)" },
  { leg: 9, klass: "menn", runner: "Sander Aae Skotheim", team: "SK Vidar", time: "1:21", year: 2022, note: "Forbedret rekord med 4 sek" },
  { leg: 10, klass: "menn", runner: "Marius Vedvik", team: "IL Gular", time: "7:10", year: 2019 },
  { leg: 11, klass: "menn", runner: "Trym Fjøsne-Hexeberg", team: "Ull/Kisa", time: "3:52", year: 2026 },
  { leg: 13, klass: "menn", runner: "Andreas Fjeld Halvorsen", team: "Ull/Kisa", time: "2:38", year: 2026 },
  { leg: 14, klass: "menn", runner: "Sander Aae Skotheim", team: "SK Vidar", time: "1:39", year: 2024 },

  // Women
  { leg: 1, klass: "kvinner", runner: "Malin Ingeborg Nyfors", team: "SK Vidar", time: "3:14", year: 2026, note: "Forbedret 2008-rekorden" },
  { leg: 5, klass: "kvinner", runner: "Anna Marie Nordengen Sirevåg", team: "SK Vidar", time: "3:32", year: 2026, note: "Forbedret med 9 sek" },
  { leg: 7, klass: "kvinner", runner: "Karoline Bjerkeli Grøvdal", team: "IK Tjalve", time: "6:05", year: 2016, note: "Kongeetappen — uslåtelig?" },
  { leg: 9, klass: "kvinner", runner: "Alice Ulla Berg", team: "SK Vidar", time: "1:33", year: 2026 },
  { leg: 10, klass: "kvinner", runner: "Amalie Sæten", team: "SK Vidar", time: "8:07", year: 2026, note: "Forbedret Silje Fjørtofts 2014-rekord (8:29) med 22 sek" },
  { leg: 12, klass: "kvinner", runner: "Anonymous (Vidar)", team: "SK Vidar", time: "4:27", year: 2026 },
  { leg: 13, klass: "kvinner", runner: "Pernille Karlsen Antonsen", team: "—", time: "3:05", year: 2022, note: "Forbedret 10-årig rekord med 2 sek" },
];

// Course-record winning times
export const courseRecords = {
  menn: { time: "45:14", team: "Bayer 04 Leverkusen", year: 1994, distance: "17 670 m" },
  kvinner: { time: "54:51", team: "IL i BUL", year: 1994, distance: "17 670 m" },
};

// Notable stage performances (not necessarily records, but stories worth telling)
export const stageHighlights = [
  { year: 2022, runner: "Therese Johaug", team: "SK Vidar", note: "Løp etappe 7 (Besserud) på 6:49 — ikke rekord, men ikoniske ski-til-løp." },
  { year: 2024, runner: "Andreas Kramer", team: "Ull/Kisa", note: "5:11 på 4. etappe — sterk åpning på vinnerlaget." },
  { year: 2026, runner: "Jacob Boutera", team: "Ull/Kisa", note: "5:34 på 7. etappe — kongeetappen." },
];
