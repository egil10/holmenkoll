"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { allEntries, slugify, teamStem } from "@/lib/team-index";
import { ArrowLeft, Users, Trophy, ArrowRight, Building2 } from "lucide-react";
import { cn, formatTime, timeToSeconds } from "@/lib/utils";

export default function CompanyGroupPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const entries = allEntries();

  const matching = useMemo(() => {
    return entries.filter((e) => slugify(teamStem(e.team)) === slug);
  }, [entries, slug]);

  if (matching.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/lag" className="inline-flex items-center gap-1 text-no-red mb-4">
          <ArrowLeft className="w-4 h-4" /> Tilbake til søk
        </Link>
        <h1 className="serif text-3xl font-bold mb-2">Fant ikke gruppen</h1>
      </div>
    );
  }

  const stem = teamStem(matching[0].team);
  const teams = Array.from(new Set(matching.map((e) => e.team)));
  const years = Array.from(new Set(matching.map((e) => e.year))).sort((a, b) => b - a);

  // Best result across all teams
  const fastest = [...matching].sort(
    (a, b) => timeToSeconds(a.time) - timeToSeconds(b.time)
  )[0];

  // Group entries by team
  const teamRows = teams
    .map((t) => {
      const teamEntries = matching.filter((e) => e.team === t);
      const best = [...teamEntries].sort(
        (a, b) => timeToSeconds(a.time) - timeToSeconds(b.time)
      )[0];
      const bestRank = Math.min(...teamEntries.map((e) => e.rank));
      return {
        team: t,
        slug: slugify(t),
        count: teamEntries.length,
        years: Array.from(new Set(teamEntries.map((e) => e.year))).sort((a, b) => b - a),
        bestTime: best.time,
        bestRank,
        bestEntry: best,
      };
    })
    .sort((a, b) => timeToSeconds(a.bestTime) - timeToSeconds(b.bestTime));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <Link
        href="/lag"
        className="inline-flex items-center gap-1 text-no-red hover:text-no-red-dark mb-4 text-sm font-semibold"
      >
        <ArrowLeft className="w-4 h-4" /> Tilbake til søk
      </Link>

      <div className="flex items-center gap-2 mb-1">
        <Building2 className="w-5 h-5 text-no-red" />
        <span className="text-xs uppercase tracking-[0.2em] text-no-red font-semibold">
          Gruppe
        </span>
      </div>
      <h1 className="serif text-3xl sm:text-5xl font-bold text-no-ink tracking-tight mb-2">
        {stem}
      </h1>
      <p className="text-no-muted mb-8">
        {teams.length} ulike lag · {matching.length} oppmøter · år: {years.join(", ")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <Stat label="Lag" value={String(teams.length)} icon={Users} />
        <Stat label="Oppmøter" value={String(matching.length)} icon={Trophy} />
        <Stat
          label="Raskeste tid"
          value={formatTime(fastest.time)}
          icon={Trophy}
          hint={`${fastest.team} (${fastest.year})`}
        />
        <Stat
          label="Beste plass"
          value={`#${Math.min(...matching.map((e) => e.rank))}`}
          icon={Trophy}
        />
      </div>

      <h3 className="serif text-xl font-bold text-no-ink mb-3">Alle lag i gruppen</h3>
      <div className="space-y-2">
        {teamRows.map((row) => (
          <Link
            key={row.team}
            href={`/lag/${row.slug}`}
            className="card card-hover p-4 flex items-center gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-no-ink">{row.team}</p>
              <p className="text-xs text-no-muted mt-0.5">
                {row.count} oppmøter · år: {row.years.join(", ")}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-mono font-bold text-no-ink">{formatTime(row.bestTime)}</p>
              <p className="text-xs text-no-muted">beste tid · #{row.bestRank}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-no-muted shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
  hint,
}: {
  label: string;
  value: string;
  icon: any;
  hint?: string;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 text-no-muted text-xs uppercase tracking-widest font-semibold">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <p className="serif text-2xl font-bold text-no-ink mt-1.5">{value}</p>
      {hint && <p className="text-xs text-no-muted mt-0.5">{hint}</p>}
    </div>
  );
}
