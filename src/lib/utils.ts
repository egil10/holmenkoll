import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(t: string) {
  // "0:48:45" -> "48:45"
  if (!t) return "";
  const parts = t.split(":");
  if (parts.length === 3 && parts[0] === "0") return `${parts[1]}:${parts[2]}`;
  return t;
}

export function timeToSeconds(t: string): number {
  const parts = t.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return Number(parts[0]) || 0;
}

export function secondsToTime(s: number): string {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

// --- Team name helpers ---------------------------------------------------
// These live here (and NOT in team-index.ts) on purpose: team-index imports
// the full ~1.5 MB results dataset at module scope, so any client component
// that only needs `slugify` must import it from here to avoid dragging the
// entire dataset into its JS bundle.

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[æå]/g, "a")
    .replace(/ø/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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
