"use client";

import { Trophy, Medal } from "lucide-react";
import { cn, formatTime, timeToSeconds } from "@/lib/utils";
import type { Result } from "@/data/results-2026";

export function ResultsTable({
  results,
  highlight,
}: {
  results: Result[];
  highlight?: string;
}) {
  const winnerSeconds = results.length ? timeToSeconds(results[0].time) : 0;

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table-clean">
          <thead>
            <tr>
              <th className="w-16">#</th>
              <th>Lag</th>
              <th className="text-right">Tid</th>
              <th className="text-right hidden sm:table-cell">Gap</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => {
              const gapSec = timeToSeconds(r.time) - winnerSeconds;
              const min = Math.floor(gapSec / 60);
              const sec = gapSec % 60;
              const gap =
                r.rank === 1
                  ? "—"
                  : min > 0
                    ? `+${min}:${String(sec).padStart(2, "0")}`
                    : `+${sec}s`;
              const isHighlight = highlight && r.team.toLowerCase().includes(highlight.toLowerCase());
              return (
                <tr key={r.rank} className={cn(isHighlight && "bg-no-red/5")}>
                  <td>
                    <div className="flex items-center gap-2 font-semibold">
                      {r.rank === 1 ? (
                        <Trophy className="w-4 h-4 rank-medal-1" />
                      ) : r.rank === 2 ? (
                        <Medal className="w-4 h-4 rank-medal-2" />
                      ) : r.rank === 3 ? (
                        <Medal className="w-4 h-4 rank-medal-3" />
                      ) : null}
                      <span className={cn(r.rank <= 3 ? "text-no-ink" : "text-no-muted")}>
                        {r.rank}
                      </span>
                    </div>
                  </td>
                  <td className="font-medium text-no-ink">{r.team}</td>
                  <td className="text-right font-mono tabular-nums text-no-ink">
                    {formatTime(r.time)}
                  </td>
                  <td className="text-right font-mono tabular-nums text-no-muted hidden sm:table-cell">
                    {gap}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
