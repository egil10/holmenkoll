// Holmenkollstafetten class catalog.
// F = friidrett, A = bedrifts-/mosjonsklasser, B = bedrift, S = studenter, M = militaer.
export type ClassDef = {
  code: string;
  slug: string;
  label: string;
  gender: "M" | "K" | "X";
  group: "elite" | "alder" | "bedrift" | "mosjon" | "student" | "militaer" | "veldedig" | "para";
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

  // Bedrift
  { code: "B1", slug: "menn-bedrift", label: "Menn bedrift", gender: "M", group: "bedrift" },
  { code: "B4", slug: "kvinner-bedrift", label: "Kvinner bedrift", gender: "K", group: "bedrift" },

  // Bedrift / mosjon
  { code: "A1", slug: "a1-bedrift-mosjon", label: "A1 bedrift, mosjon, andre lag", gender: "X", group: "mosjon" },
  { code: "A2", slug: "a2-bedrift-mosjon", label: "A2 bedrift, mosjon, andre lag", gender: "X", group: "mosjon" },
  { code: "A3", slug: "a3-andre-saerforbund", label: "Andre særforbund i NIF", gender: "X", group: "mosjon" },
  { code: "A4", slug: "a4-55-pluss", label: "55+", gender: "X", group: "mosjon" },

  // Industry / charity categories
  { code: "A1-B", slug: "a1-bygg-anlegg-kreftforeningen", label: "A1 bygg/anlegg for Kreftforeningen", gender: "X", group: "veldedig" },
  { code: "A1-C", slug: "a1-finans-kreftforeningen", label: "A1 finans for Kreftforeningen", gender: "X", group: "veldedig" },
  { code: "A2-B", slug: "a2-bygg-anlegg-kreftforeningen", label: "A2 bygg/anlegg for Kreftforeningen", gender: "X", group: "veldedig" },
  { code: "A2-C", slug: "a2-finans-kreftforeningen", label: "A2 finans for Kreftforeningen", gender: "X", group: "veldedig" },
  { code: "A6", slug: "a6-ideelle-organisasjoner", label: "Ideelle organisasjoner", gender: "X", group: "veldedig" },

  // Special
  { code: "S1", slug: "menn-studenter", label: "Menn studenter", gender: "M", group: "student" },
  { code: "S2", slug: "kvinner-studenter", label: "Kvinner studenter", gender: "K", group: "student" },
  { code: "M1", slug: "militaere-forlegninger", label: "Militaere forlegninger", gender: "X", group: "militaer" },
  { code: "Para", slug: "para", label: "Para", gender: "X", group: "para" },
];

export const groupLabel: Record<string, string> = {
  elite: "Elite",
  alder: "Aldersklasser",
  bedrift: "Bedrift",
  mosjon: "Mosjonsklasser",
  student: "Studenter",
  militaer: "Militaere",
  veldedig: "Veldedige org.",
  para: "Para",
};
