"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { search, topStems, totals, slugify, teamStem } from "@/lib/team-index";
import { Search, Users, Trophy, Building2, ArrowRight, X } from "lucide-react";
import { cn, formatTime } from "@/lib/utils";

export default function LagPage() {
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const t = useMemo(totals, []);
  const topGroups = useMemo(() => topStems().slice(0, 60), []);

  useEffect(() => {
    const h = setTimeout(() => setDebouncedQ(q), 120);
    return () => clearTimeout(h);
  }, [q]);

  const matches = useMemo(() => search(debouncedQ, 200), [debouncedQ]);

  // Group matches by team name for display
  const matchesByTeam = useMemo(() => {
    const map = new Map<string, typeof matches>();
    for (const m of matches) {
      if (!map.has(m.team)) map.set(m.team, [] as any);
      map.get(m.team)!.push(m);
    }
    return Array.from(map.entries()).slice(0, 60);
  }, [matches]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Lag"
        title="Finn ditt lag"
        subtitle={`Søk på over ${t.teams.toLocaleString("no-NO")} lag. Skriv inn lagnavn, firma eller stikkord — vi viser hvor og når det har gått.`}
      />

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-no-muted" />
        <input
          autoFocus
          type="text"
          placeholder="Søk lag — f.eks. EY, PwC, Tjalve, NRK, Ullevål…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full pl-12 pr-12 py-4 rounded-xl border border-no-line bg-no-paper text-base focus:outline-none focus:ring-2 focus:ring-no-red/30 focus:border-no-red shadow-sm"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-md hover:bg-no-ink/5 text-no-muted"
            aria-label="Tøm søk"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <Stat icon={Users} label="Lagresultater" value={t.entries.toLocaleString("no-NO")} />
        <Stat icon={Trophy} label="Unike lag" value={t.teams.toLocaleString("no-NO")} />
        <Stat icon={Building2} label="Klasser" value={String(t.classes)} />
        <Stat icon={ArrowRight} label="År med data" value={String(t.years)} />
      </div>

      {debouncedQ ? (
        <section>
          <h3 className="serif text-xl font-bold text-no-ink mb-3">
            {matchesByTeam.length === 0 ? (
              <>Ingen treff for &quot;{debouncedQ}&quot;</>
            ) : (
              <>
                {matchesByTeam.length} lag matcher &quot;{debouncedQ}&quot;
              </>
            )}
          </h3>
          <div className="space-y-2">
            {matchesByTeam.map(([team, entries]) => (
              <Link
                key={team}
                href={`/lag/${slugify(team)}`}
                className="card card-hover p-4 flex items-start sm:items-center gap-3 flex-col sm:flex-row"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-no-ink">{team}</p>
                  <p className="text-xs text-no-muted mt-0.5">
                    {entries.length} oppmøte · {Array.from(new Set(entries.map((e) => e.year))).sort((a,b)=>b-a).join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {entries.slice(0, 6).map((e, i) => (
                    <span
                      key={i}
                      className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-mono tabular-nums",
                        e.classGender === "M"
                          ? "bg-no-red/8 text-no-red"
                          : e.classGender === "K"
                            ? "bg-no-blue/8 text-no-blue"
                            : "bg-no-ink/8 text-no-ink"
                      )}
                    >
                      {e.year} · #{e.rank}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-no-muted shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <h3 className="serif text-xl font-bold text-no-ink mb-3">Populære grupper</h3>
          <p className="text-sm text-no-muted mb-4">
            Mange lag tilhører samme firma eller klubb. Klikk for å se alle lag fra en organisasjon på ett sted.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {topGroups.map((g) => (
              <Link
                key={g.stem}
                href={`/lag/gruppe/${slugify(g.stem)}`}
                className="card card-hover p-3 flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-no-ink text-sm truncate">{g.stem}</p>
                  <p className="text-xs text-no-muted">
                    {g.teams.length} {g.teams.length === 1 ? "lag" : "lag"} · {g.count} oppmøter
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-no-muted shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 text-no-muted text-xs uppercase tracking-widest font-semibold">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <p className="serif text-2xl font-bold text-no-ink mt-1.5">{value}</p>
    </div>
  );
}
