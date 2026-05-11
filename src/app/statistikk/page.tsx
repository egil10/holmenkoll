"use client";

import { SectionHeader } from "@/components/section-header";
import { winners } from "@/data/winners";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { timeToSeconds } from "@/lib/utils";
import { TrendingDown, Users, Trophy } from "lucide-react";

// Participation data (lag/runners) — sourced from history page and reportage
const participation = [
  { year: 1923, lag: 10 },
  { year: 1924, lag: 19 },
  { year: 1927, lag: 41 },
  { year: 1928, lag: 39 },
  { year: 1933, lag: 103 },
  { year: 1939, lag: 114 },
  { year: 1946, lag: 187 },
  { year: 1947, lag: 199 },
  { year: 1948, lag: 158 },
  { year: 1958, lag: 92 },
  { year: 1973, lag: 248 },
  { year: 1980, lag: 660 },
  { year: 1984, lag: 1000 },
  { year: 1990, lag: 1963 },
  { year: 1991, lag: 2000 },
  { year: 1993, lag: 2289 },
  { year: 2011, lag: 2000 },
  { year: 2012, lag: 2700 },
  { year: 2019, lag: 3278 },
  { year: 2022, lag: 3000 },
  { year: 2023, lag: 3800 },
  { year: 2024, lag: 4993 },
  { year: 2025, lag: 5200 },
  { year: 2026, lag: 5500 },
];

export default function StatistikkPage() {
  const mennTimes = winners.menn
    .filter((w) => w.time && !w.time.includes("."))
    .map((w) => ({ year: w.year, sec: timeToSeconds(w.time as string) }));
  const kvinnerTimes = winners.kvinner
    .filter((w) => w.time && !w.time.includes("."))
    .map((w) => ({ year: w.year, sec: timeToSeconds(w.time as string) }));

  const allYears = Array.from(
    new Set([...mennTimes.map((x) => x.year), ...kvinnerTimes.map((x) => x.year)])
  ).sort();

  const merged = allYears.map((y) => ({
    year: y,
    menn: mennTimes.find((x) => x.year === y)?.sec ?? null,
    kvinner: kvinnerTimes.find((x) => x.year === y)?.sec ?? null,
  }));

  const wins: Record<"menn" | "kvinner", { team: string; n: number }[]> = {
    menn: countWins(winners.menn),
    kvinner: countWins(winners.kvinner),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Statistikk"
        title="Tallene bak Vårens vakreste eventyr"
        subtitle="Deltakerutviklingen siden 1923 er en historie om eksplosiv vekst — fra 10 lag i første utgave til over 5 500 i 2026. Vinnertidene har samtidig falt fra 46 minutter til godt under 49."
      />

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-no-blue" />
          <h3 className="serif text-xl font-bold text-no-ink">
            Antall fullførende lag, 1923–2026
          </h3>
        </div>
        <div className="card p-4 h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={participation} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="lagGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#BA0C2F" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#BA0C2F" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,18,38,0.08)" />
              <XAxis dataKey="year" stroke="#5B6478" fontSize={12} />
              <YAxis stroke="#5B6478" fontSize={12} />
              <Tooltip
                formatter={(v: number) => [`${v.toLocaleString("no-NO")} lag`, "Fullført"]}
                labelFormatter={(l) => `År ${l}`}
              />
              <Area
                type="monotone"
                dataKey="lag"
                stroke="#BA0C2F"
                strokeWidth={2.5}
                fill="url(#lagGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-no-muted mt-2 italic">
          Punktene er sammensatt fra offisiell historieside og avisreportasjer; mellomliggende
          år er ikke nødvendigvis med. Pandemien gjorde at 2020 og 2021 ikke ble arrangert.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <TrendingDown className="w-5 h-5 text-no-red" />
          <h3 className="serif text-xl font-bold text-no-ink">
            Vinnertider over tid (sekunder)
          </h3>
        </div>
        <div className="card p-4 h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={merged} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,18,38,0.08)" />
              <XAxis dataKey="year" stroke="#5B6478" fontSize={12} />
              <YAxis
                stroke="#5B6478"
                fontSize={12}
                tickFormatter={(s) =>
                  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`
                }
              />
              <Tooltip
                formatter={(v: number) =>
                  `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}`
                }
                labelFormatter={(l) => `År ${l}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="menn"
                stroke="#BA0C2F"
                strokeWidth={2.5}
                dot={{ r: 3 }}
                name="Menn elite"
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="kvinner"
                stroke="#00205B"
                strokeWidth={2.5}
                dot={{ r: 3 }}
                name="Kvinner elite"
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-no-red" />
            <h3 className="serif text-xl font-bold text-no-ink">
              Seire menn elite (bekreftede år)
            </h3>
          </div>
          <div className="card p-4 h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wins.menn.slice(0, 8)} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,18,38,0.08)" />
                <XAxis type="number" stroke="#5B6478" fontSize={12} />
                <YAxis dataKey="team" type="category" stroke="#5B6478" fontSize={11} width={150} />
                <Tooltip />
                <Bar dataKey="n" fill="#BA0C2F">
                  {wins.menn.slice(0, 8).map((_, i) => (
                    <Cell key={i} fill={i === 0 ? "#BA0C2F" : "#BA0C2F99"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-no-blue" />
            <h3 className="serif text-xl font-bold text-no-ink">
              Seire kvinner elite (bekreftede år)
            </h3>
          </div>
          <div className="card p-4 h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wins.kvinner.slice(0, 8)} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,18,38,0.08)" />
                <XAxis type="number" stroke="#5B6478" fontSize={12} />
                <YAxis dataKey="team" type="category" stroke="#5B6478" fontSize={11} width={150} />
                <Tooltip />
                <Bar dataKey="n" fill="#00205B">
                  {wins.kvinner.slice(0, 8).map((_, i) => (
                    <Cell key={i} fill={i === 0 ? "#00205B" : "#00205B99"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

function countWins(list: typeof winners.menn) {
  const map = new Map<string, number>();
  for (const w of list) map.set(w.team, (map.get(w.team) ?? 0) + 1);
  return [...map.entries()]
    .map(([team, n]) => ({ team, n }))
    .sort((a, b) => b.n - a.n);
}
