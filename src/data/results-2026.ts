// Holmenkollstafetten 2026 — 9. mai 2026, Bislett stadion, Oslo
// Sources: live.ultimate.dk/desktop/front/index.php?eventid=7129,
// sportsidioten.no, friidrett1.wordpress.com (Vidar og Ullensaker/Kisa vant 2026)

export type Result = {
  rank: number;
  team: string;
  time: string;
};

export const mennElite2026: Result[] = [
  { rank: 1, team: "Ullensaker/Kisa IL Friidrett 1", time: "0:48:45" },
  { rank: 2, team: "SK Vidar M Elite 1", time: "0:49:28" },
  { rank: 3, team: "IK Tjalve 1", time: "0:49:39" },
  { rank: 4, team: "IL i BUL 1", time: "0:49:41" },
  { rank: 5, team: "Hälle IF", time: "0:50:22" },
  { rank: 6, team: "IL Gneist", time: "0:51:01" },
  { rank: 7, team: "Jølster IL – Friidrett 2", time: "0:51:10" },
  { rank: 8, team: "Kjelsås Langrenn", time: "0:51:37" },
  { rank: 9, team: "Heming Elite", time: "0:51:47" },
  { rank: 10, team: "Idrottslaget Gular 1", time: "0:51:59" },
  { rank: 11, team: "Svorkmo/NOI 1", time: "0:52:21" },
  { rank: 12, team: "Haugesund IL Friidrett", time: "0:52:23" },
  { rank: 13, team: "IF Kamp/Vestheim", time: "0:52:54" },
  { rank: 14, team: "Lillehammer IF", time: "0:53:12" },
  { rank: 15, team: "Varegg Fleridrett 1", time: "0:53:16" },
  { rank: 16, team: "Namdal løpeklubb elite Herrer", time: "0:53:40" },
  { rank: 17, team: "Mosvik IL Friidrett", time: "0:53:45" },
  { rank: 18, team: "Tyrving IL", time: "0:54:01" },
];

export const kvinnerElite2026: Result[] = [
  { rank: 1, team: "SK Vidar K Elite 1", time: "0:55:42" },
  { rank: 2, team: "IK Tjalve", time: "0:56:26" },
  { rank: 3, team: "Hälle IF", time: "0:59:02" },
  { rank: 4, team: "Idrottslaget Gular 2", time: "0:59:45" },
  { rank: 5, team: "Varegg Fleridrett 2", time: "1:00:03" },
  { rank: 6, team: "Bratsberg IL 3", time: "1:00:31" },
  { rank: 7, team: "Mölndals AIK", time: "1:00:56" },
  { rank: 8, team: "SK Vidar K Elite 2", time: "1:00:59" },
  { rank: 9, team: "Ullensaker/Kisa IL Friidrett 7", time: "1:01:16" },
  { rank: 10, team: "Raumnes & Årnes IL", time: "1:02:10" },
  { rank: 11, team: "Sandefjord TIF", time: "1:03:03" },
  { rank: 12, team: "Spirit friidrett 7", time: "1:03:13" },
  { rank: 13, team: "SK Vidar K Elite 3", time: "1:03:29" },
  { rank: 14, team: "Kjelsås Langrenn", time: "1:04:04" },
  { rank: 15, team: "Tyrving IL", time: "1:04:15" },
  { rank: 16, team: "FIK Ren-Eng", time: "1:05:50" },
  { rank: 17, team: "IL i BUL 3", time: "1:05:51" },
  { rank: 18, team: "Namdal løpeklubb elite damer", time: "1:06:25" },
];

export type StageRecord = {
  leg: number;
  runner: string;
  team: string;
  time: string;
  note?: string;
};

export const stageRecords2026: { menn: StageRecord[]; kvinner: StageRecord[] } = {
  menn: [
    { leg: 7, runner: "Jacob Boutera", team: "Ull/Kisa", time: "5:34", note: "lang etappe i motbakke" },
    { leg: 11, runner: "Trym Fjøsne-Hexeberg", team: "Ull/Kisa", time: "3:52", note: "etapperekord" },
    { leg: 13, runner: "Andreas Fjeld Halvorsen", team: "Ull/Kisa", time: "2:38" },
  ],
  kvinner: [
    { leg: 1, runner: "Malin Ingeborg Nyfors", team: "SK Vidar", time: "3:14", note: "etapperekord" },
    { leg: 5, runner: "Anna Marie Nordengen Sirevåg", team: "SK Vidar", time: "3:32", note: "−9 sek" },
    { leg: 9, runner: "Alice Ulla Berg", team: "SK Vidar", time: "1:33" },
    { leg: 10, runner: "Amalie Sæten", team: "SK Vidar", time: "8:07", note: "−14 sek" },
    { leg: 12, runner: "(Frognerparken)", team: "SK Vidar", time: "4:27" },
  ],
};
