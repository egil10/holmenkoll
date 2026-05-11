"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { allEntries, slugify, teamStem } from "@/lib/team-index";
import {
  ArrowLeft,
  Trophy,
  Timer,
  Calendar,
  Users,
  Medal,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { cn, formatTime, timeToSeconds, secondsToTime } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function TeamPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entries = allEntries();
  const matching = useMemo(
    () => entries.filter((e) => slugify(e.team) === slug),
    [entries, slug]
  );

  if (matching.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/lag" className="inline-flex items-center gap-1 text-no-red mb-4">
          <ArrowLeft className="w-4 h-4" /> Tilbake til søk
        </Link>
        <h1 className="serif text-3xl font-bold mb-2">Fant ikke laget</h1>
        <p className="text-no-muted">
          Vi fant ingen lag med slug &quot;{slug}&quot;. Sjekk{" "}
          <Link href="/lag" className="link">
            lagsiden
          </Link>{" "}
          for å søke på nytt.
        </p>
      </div>
    );
  }

  const teamName = matching[0].team;
  const stem = teamStem(teamName);
  const stemSlug = slugify(stem);

  // Same company group (other teams with same stem)
  const sameStem = entries.filter(
    (e) => teamStem(e.team) === stem && e.team !== teamName
  );
  const sameStemTeams = Array.from(new Set(sameStem.map((e) => e.team)));

  // Sort entries by year
  const byYear = [...matching].sort((a, b) => b.year - a.year);

  // Stats
  const best = [...matching].sort((a, b) => timeToSeconds(a.time) - timeToSeconds(b.time))[0];
  const bestRank = Math.min(...matching.map((e) => e.rank));
  const bestRankEntry = matching.find((e) => e.rank === bestRank)!;
  const years = Array.from(new Set(matching.map((e) => e.year))).sort();

  // Chart data — time over time
  const chartData = byYear
    .slice()
    .reverse()
    .map((e) => ({
      year: e.year,
      sec: timeToSeconds(e.time),
      rank: e.rank,
      label: e.classLabel,
    }));

  // Trend
  const trend =
    chartData.length >= 2
      ? chartData[chartData.length - 1].sec - chartData[0].sec
      : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <Link href="/lag" className="inline-flex items-center gap-1 text-no-red hover:text-no-red-dark mb-4 text-sm font-semibold">
        <ArrowLeft className="w-4 h-4" /> Tilbake til søk
      </Link>

      <h1 className="serif text-3xl sm:text-5xl font-bold text-no-ink tracking-tight mb-2">
        {teamName}
      </h1>
      <p className="text-no-muted mb-2">
        {matching.length} oppmøter · {years.length} {years.length === 1 ? "år" : "år"}{" "}
        ({years[0]}–{years[years.length - 1]})
      </p>

      {sameStemTeams.length > 0 && (
        <Link
          href={`/lag/gruppe/${stemSlug}`}
          className="inline-flex items-center gap-1.5 text-sm chip chip-soft-red mb-8 hover:bg-no-red/15"
        >
          <Users className="w-3.5 h-3.5" /> Se alle {sameStemTeams.length + 1} lag fra «{stem}»
        </Link>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 mt-2">
        <StatCard
          icon={Trophy}
          label="Beste plassering"
          value={`#${bestRank}`}
          hint={`${bestRankEntry.classLabel}, ${bestRankEntry.year}`}
          accent={bestRankEntry.classGender === "K" ? "blue" : "red"}
        />
        <StatCard
          icon={Timer}
          label="Beste tid"
          value={formatTime(best.time)}
          hint={`${best.classLabel}, ${best.year}`}
          accent="ink"
        />
        <StatCard
          icon={Calendar}
          label="Først"
          value={String(years[0])}
          hint={byYear[byYear.length - 1].classLabel}
          accent="ink"
        />
        <StatCard
          icon={chartData.length >= 2 ? (trend < 0 ? TrendingDown : TrendingUp) : Medal}
          label="Trend"
          value={
            chartData.length < 2
              ? "—"
              : `${trend < 0 ? "−" : "+"}${Math.abs(Math.floor(trend / 60))}:${String(Math.abs(trend) % 60).padStart(2, "0")}`
          }
          hint={chartData.length < 2 ? "Trenger flere år" : `siste vs. første`}
          accent={trend < 0 ? "red" : "ink"}
        />
      </div>

      {/* Chart */}
      {chartData.length >= 2 && (
        <section className="card p-5 mb-10">
          <h3 className="serif text-lg font-bold text-no-ink mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-no-red" /> Total tid over år
          </h3>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,18,38,0.08)" />
                <XAxis dataKey="year" stroke="#5B6478" fontSize={12} />
                <YAxis
                  stroke="#5B6478"
                  fontSize={12}
                  tickFormatter={(s) => secondsToTime(s as number)}
                />
                <Tooltip
                  formatter={(v: number) => secondsToTime(v)}
                  labelFormatter={(l) => `År ${l}`}
                />
                <Line type="monotone" dataKey="sec" stroke="#BA0C2F" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      {/* Year-by-year */}
      <h3 className="serif text-xl font-bold text-no-ink mb-3">Alle oppmøter</h3>
      <div className="card overflow-hidden">
        <table className="table-clean">
          <thead>
            <tr>
              <th>År</th>
              <th>Klasse</th>
              <th className="text-right">Plass</th>
              <th className="text-right">Tid</th>
            </tr>
          </thead>
          <tbody>
            {byYear.map((e, i) => (
              <tr key={i}>
                <td className="font-mono font-semibold">{e.year}</td>
                <td>
                  <span
                    className={cn(
                      "chip text-[11px]",
                      e.classGender === "M"
                        ? "chip-soft-red"
                        : e.classGender === "K"
                          ? "chip-soft-blue"
                          : ""
                    )}
                  >
                    {e.classLabel}
                  </span>
                </td>
                <td className="text-right font-mono">#{e.rank}</td>
                <td className="text-right font-mono tabular-nums text-no-ink">
                  {formatTime(e.time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sameStemTeams.length > 0 && (
        <section className="mt-10">
          <h3 className="serif text-xl font-bold text-no-ink mb-3">
            Andre lag fra «{stem}»
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sameStemTeams.map((t) => {
              const count = sameStem.filter((x) => x.team === t).length;
              return (
                <Link
                  key={t}
                  href={`/lag/${slugify(t)}`}
                  className="card card-hover p-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-no-ink text-sm truncate">{t}</p>
                    <p className="text-xs text-no-muted">{count} oppmøter</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent,
}: {
  icon: any;
  label: string;
  value: string;
  hint?: string;
  accent: "red" | "blue" | "ink";
}) {
  const bg =
    accent === "red"
      ? "bg-no-red/10 text-no-red"
      : accent === "blue"
        ? "bg-no-blue/10 text-no-blue"
        : "bg-no-ink/10 text-no-ink";
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center", bg)}>
          <Icon className="w-4 h-4" />
        </span>
        <span className="text-xs uppercase tracking-widest text-no-muted font-semibold">
          {label}
        </span>
      </div>
      <p className="serif text-2xl font-bold text-no-ink">{value}</p>
      {hint && <p className="text-xs text-no-muted mt-0.5">{hint}</p>}
    </div>
  );
}
