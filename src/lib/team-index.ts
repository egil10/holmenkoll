// Team search index — built at module load (static), used by /lag and /lag/[slug]
import { results } from "@/data/results-all";
import { classes } from "@/data/classes";

export type TeamEntry = {
  year: number;
  classCode: string; // slug, e.g. "menn-elite"
  classLabel: string;
  classGender: "M" | "K" | "X";
  rank: number;
  team: string; // original team name as listed
  time: string;
};

export type TeamHistory = {
  team: string; // canonical display name
  slug: string;
  entries: TeamEntry[];
  bestRank: number;
  bestTime: string;
  bestYear: number;
  classes: string[]; // unique class labels touched
  years: number[]; // unique years
};

// "Company stem" — for grouping related teams from the same organization.
// "EY Herrer", "EY Damer", "EY BIL FSO 1" → "EY"
// "Advokatfirmaet Haavind 1", "Advokatfirmaet Haavind – Herrer Elite" → "Advokatfirmaet Haavind"
const STEM_STOPWORDS = new Set([
  "il", "if", "ik", "sk", "as", "asa", "bil", "fk", "lag",
  "herrer", "damer", "kvinner", "menn", "elite", "senior", "junior",
  "veteran", "superveteran", "mix", "mixed", "team", "the",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
  "i", "ii", "iii", "iv", "v", "a", "b", "c",
  "-", "–", "—",
  "lag", "lagk", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9",
]);

export function teamStem(name: string): string {
  const cleaned = name
    .replace(/[()]/g, " ")
    .replace(/[–—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Split into tokens, keep first 1-3 meaningful tokens
  const tokens = cleaned.split(" ");
  const meaningful: string[] = [];
  for (const t of tokens) {
    const lower = t.toLowerCase().replace(/[.,]/g, "");
    if (STEM_STOPWORDS.has(lower)) {
      // If we already have 2+ meaningful tokens, stop here
      if (meaningful.length >= 2) break;
      continue;
    }
    // Stop on pure numbers
    if (/^\d+$/.test(t)) {
      if (meaningful.length > 0) break;
      continue;
    }
    meaningful.push(t);
    if (meaningful.length >= 3) break;
  }
  if (meaningful.length === 0) return cleaned;
  return meaningful.join(" ");
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[æå]/g, "a")
    .replace(/ø/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const classLabelMap = new Map(classes.map((c) => [c.slug, c]));

export function buildIndex(): TeamEntry[] {
  const out: TeamEntry[] = [];
  for (const yearStr of Object.keys(results)) {
    const year = Number(yearStr);
    const yearData = results[year];
    if (!yearData) continue;
    for (const slug of Object.keys(yearData)) {
      const rows = yearData[slug];
      const meta = classLabelMap.get(slug);
      if (!rows || !meta) continue;
      for (const row of rows) {
        out.push({
          year,
          classCode: slug,
          classLabel: meta.label,
          classGender: meta.gender,
          rank: row.rank,
          team: row.team,
          time: row.time,
        });
      }
    }
  }
  return out;
}

let _index: TeamEntry[] | null = null;
let _byStem: Map<string, TeamEntry[]> | null = null;
let _byTeam: Map<string, TeamEntry[]> | null = null;

export function allEntries(): TeamEntry[] {
  if (!_index) _index = buildIndex();
  return _index;
}

export function groupByStem(): Map<string, TeamEntry[]> {
  if (_byStem) return _byStem;
  const map = new Map<string, TeamEntry[]>();
  for (const e of allEntries()) {
    const stem = teamStem(e.team);
    if (!map.has(stem)) map.set(stem, []);
    map.get(stem)!.push(e);
  }
  _byStem = map;
  return map;
}

export function groupByTeam(): Map<string, TeamEntry[]> {
  if (_byTeam) return _byTeam;
  const map = new Map<string, TeamEntry[]>();
  for (const e of allEntries()) {
    if (!map.has(e.team)) map.set(e.team, []);
    map.get(e.team)!.push(e);
  }
  _byTeam = map;
  return map;
}

export function search(q: string, limit = 50): TeamEntry[] {
  const lower = q.trim().toLowerCase();
  if (!lower) return [];
  return allEntries()
    .filter((e) => e.team.toLowerCase().includes(lower))
    .slice(0, limit);
}

export function topStems(): Array<{ stem: string; count: number; teams: string[] }> {
  const map = groupByStem();
  const out: Array<{ stem: string; count: number; teams: string[] }> = [];
  for (const [stem, entries] of map.entries()) {
    const teams = Array.from(new Set(entries.map((e) => e.team)));
    out.push({ stem, count: entries.length, teams });
  }
  return out.sort((a, b) => b.count - a.count);
}

// Total counts for hero stats
export function totals() {
  const idx = allEntries();
  const teams = new Set(idx.map((e) => e.team));
  const years = new Set(idx.map((e) => e.year));
  const classes = new Set(idx.map((e) => e.classCode));
  return { entries: idx.length, teams: teams.size, years: years.size, classes: classes.size };
}
