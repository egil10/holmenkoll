"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { winners } from "@/data/winners";
import { mennElite2026, kvinnerElite2026 } from "@/data/results-2026";
import { mennElite2024, kvinnerElite2024 } from "@/data/results-2024";
import { mennElite2025 } from "@/data/results-2025";
import { ArrowLeftRight, Trophy, Timer } from "lucide-react";
import { cn, formatTime, timeToSeconds } from "@/lib/utils";

const datasets: Record<string, { menn: any[]; kvinner: any[] }> = {
  "2026": { menn: mennElite2026, kvinner: kvinnerElite2026 },
  "2025": { menn: mennElite2025, kvinner: [] },
  "2024": { menn: mennElite2024, kvinner: kvinnerElite2024 },
};

function getAllTeams() {
  const set = new Set<string>();
  for (const k of Object.keys(datasets)) {
    datasets[k].menn.forEach((r) => set.add(r.team));
    datasets[k].kvinner.forEach((r) => set.add(r.team));
  }
  winners.menn.forEach((w) => set.add(w.team));
  winners.kvinner.forEach((w) => set.add(w.team));
  return Array.from(set).sort();
}

function teamStats(team: string) {
  const mennWins = winners.menn.filter((w) => normalize(w.team) === normalize(team)).length;
  const kvinnerWins = winners.kvinner.filter((w) => normalize(w.team) === normalize(team)).length;
  const best = [...winners.menn, ...winners.kvinner]
    .filter((w) => normalize(w.team) === normalize(team) && w.time)
    .sort((a, b) => timeToSeconds(a.time!) - timeToSeconds(b.time!))[0];
  return { mennWins, kvinnerWins, best };
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+\d+$/, "")
    .replace(/\s+m elite$/i, "")
    .replace(/\s+k elite$/i, "")
    .replace(/\s+elite$/i, "")
    .replace(/ il /g, " ")
    .trim();
}

export default function SammenlignPage() {
  const teams = useMemo(getAllTeams, []);
  const [a, setA] = useState("Ullensaker/Kisa IL Friidrett 1");
  const [b, setB] = useState("IK Tjalve");

  const statsA = teamStats(a);
  const statsB = teamStats(b);

  // Year-by-year comparison if both have results in 2024-2026
  const yearComparison = ["2024", "2025", "2026"].map((y) => {
    const finder = (list: any[]) =>
      list.find((r) => normalize(r.team) === normalize(a)) ??
      list.find((r) => r.team.toLowerCase().includes(normalize(a)));
    const finderB = (list: any[]) =>
      list.find((r) => normalize(r.team) === normalize(b)) ??
      list.find((r) => r.team.toLowerCase().includes(normalize(b)));
    const allRes = [...datasets[y].menn, ...datasets[y].kvinner];
    const rA = finder(allRes);
    const rB = finderB(allRes);
    return { year: y, a: rA, b: rB };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Sammenlign"
        title="Klubb mot klubb"
        subtitle="Velg to klubber/lag og se historiske seire og resultater fra de siste utgavene sammenstilt."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <TeamPicker label="Lag A" value={a} onChange={setA} options={teams} color="red" />
        <TeamPicker label="Lag B" value={b} onChange={setB} options={teams} color="blue" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <StatsBox team={a} stats={statsA} color="red" />
        <StatsBox team={b} stats={statsB} color="blue" />
      </div>

      <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
        <ArrowLeftRight className="w-5 h-5 text-no-red" /> År for år (eliteklassene)
      </h3>
      <div className="card overflow-hidden">
        <table className="table-clean">
          <thead>
            <tr>
              <th>År</th>
              <th>{a || "Lag A"}</th>
              <th>{b || "Lag B"}</th>
            </tr>
          </thead>
          <tbody>
            {yearComparison.map((row) => (
              <tr key={row.year}>
                <td className="font-mono font-semibold">{row.year}</td>
                <td className="text-sm">
                  {row.a ? (
                    <span className="text-no-ink">
                      <span className="font-mono">#{row.a.rank}</span> · {row.a.team} ·{" "}
                      <span className="font-mono text-no-muted">{formatTime(row.a.time)}</span>
                    </span>
                  ) : (
                    <span className="text-no-muted italic">Ikke i topp-listene</span>
                  )}
                </td>
                <td className="text-sm">
                  {row.b ? (
                    <span className="text-no-ink">
                      <span className="font-mono">#{row.b.rank}</span> · {row.b.team} ·{" "}
                      <span className="font-mono text-no-muted">{formatTime(row.b.time)}</span>
                    </span>
                  ) : (
                    <span className="text-no-muted italic">Ikke i topp-listene</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TeamPicker({
  label,
  value,
  onChange,
  options,
  color,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  color: "red" | "blue";
}) {
  const accent = color === "red" ? "border-no-red" : "border-no-blue";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-no-muted font-semibold">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-1 w-full bg-no-paper border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-no-cream",
          accent,
          color === "red" ? "focus:ring-no-red/40" : "focus:ring-no-blue/40"
        )}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function StatsBox({
  team,
  stats,
  color,
}: {
  team: string;
  stats: { mennWins: number; kvinnerWins: number; best: { time: string | null; year: number } | undefined };
  color: "red" | "blue";
}) {
  const flag = color === "red" ? "text-no-red" : "text-no-blue";
  return (
    <div className="card flag-corner pl-6 p-5">
      <p className={cn("text-xs uppercase tracking-widest font-semibold", flag)}>{team}</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div>
          <div className="flex items-center gap-1 text-no-muted text-xs uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> Menn
          </div>
          <p className="serif text-2xl font-bold text-no-ink">{stats.mennWins}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-no-muted text-xs uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> Kvinner
          </div>
          <p className="serif text-2xl font-bold text-no-ink">{stats.kvinnerWins}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-no-muted text-xs uppercase tracking-widest">
            <Timer className="w-3.5 h-3.5" /> Beste tid
          </div>
          <p className="serif text-xl font-bold text-no-ink font-mono">
            {stats.best?.time ? formatTime(stats.best.time) : "—"}
          </p>
          {stats.best?.year && <p className="text-xs text-no-muted">{stats.best.year}</p>}
        </div>
      </div>
    </div>
  );
}
