// Holmenkollstafetten class catalog
// F = Friidrett (Athletics), A = Sammensatte (Mixed/Combined), B = Bedrift, S = Studenter, M = Militær
export type ClassDef = {
  code: string;
  slug: string; // sportsidioten URL slug fragment, e.g. "menn-elite"
  label: string;
  gender: "M" | "K" | "X";
  group: "elite" | "alder" | "bedrift" | "mosjon" | "student" | "militaer" | "veldedig";
  description?: string;
};

export const classes: ClassDef[] = [
  // Elite & age
  { code: "F1", slug: "menn-elite", label: "Menn elite", gender: "M", group: "elite" },
  { code: "F6", slug: "kvinner-elite", label: "Kvinner elite", gender: "K", group: "elite" },
  { code: "F2", slug: "menn-senior", label: "Menn senior", gender: "M", group: "alder" },
  { code: "F7", slug: "kvinner-senior", label: "Kvinner senior", gender: "K", group: "alder" },
  { code: "F3", slug: "menn-junior", label: "Menn junior (U23)", gender: "M", group: "alder" },
  { code: "F8", slug: "kvinner-junior", label: "Kvinner junior (U23)", gender: "K", group: "alder" },
  { code: "F4", slug: "menn-veteran", label: "Menn veteran", gender: "M", group: "alder" },
  { code: "F9", slug: "kvinner-veteran", label: "Kvinner veteran", gender: "K", group: "alder" },
  { code: "F5", slug: "menn-superveteran", label: "Menn superveteran", gender: "M", group: "alder" },
  { code: "F10", slug: "kvinner-superveteran", label: "Kvinner superveteran", gender: "K", group: "alder" },
  // Bedrift / mosjon
  { code: "B1", slug: "menn-bedrift", label: "Menn bedrift", gender: "M", group: "bedrift" },
  { code: "B4", slug: "kvinner-bedrift", label: "Kvinner bedrift", gender: "K", group: "bedrift" },
  { code: "A1M", slug: "bedrift-mosjonslag-flest-menn", label: "Bedrift & mosjon (flest menn)", gender: "X", group: "mosjon" },
  { code: "A1K", slug: "bedrift-mosjonslag-flest-kvinner", label: "Bedrift & mosjon (flest kvinner)", gender: "X", group: "mosjon" },
  // Special
  { code: "S1", slug: "menn-studenter", label: "Menn studenter", gender: "M", group: "student" },
  { code: "S2", slug: "kvinner-studenter", label: "Kvinner studenter", gender: "K", group: "student" },
  { code: "M1", slug: "militaere-forlegninger", label: "Militære forlegninger", gender: "X", group: "militaer" },
  { code: "V1", slug: "veldedige-organisasjoner", label: "Veldedige organisasjoner", gender: "X", group: "veldedig" },
];

export const groupLabel: Record<string, string> = {
  elite: "Elite",
  alder: "Aldersklasser",
  bedrift: "Bedrift",
  mosjon: "Mosjonsklasser",
  student: "Studenter",
  militaer: "Militære",
  veldedig: "Veldedige org.",
};
