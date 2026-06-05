"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Trophy, Medal, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn, formatTime, timeToSeconds, slugify } from "@/lib/utils";
import type { Result } from "@/data/results-2026";

type Accent = "red" | "blue" | "neutral";

export function ResultsTable({
  results,
  highlight,
  pageSize = 50,
  accent = "neutral",
}: {
  results: Result[];
  highlight?: string;
  pageSize?: number;
  accent?: Accent;
}) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(results.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);

  const winnerSeconds = results.length ? timeToSeconds(results[0].time) : 0;

  const slice = useMemo(
    () => results.slice(safePage * pageSize, safePage * pageSize + pageSize),
    [results, safePage, pageSize]
  );

  const accentRow =
    accent === "red"
      ? "hover:bg-no-red/5"
      : accent === "blue"
        ? "hover:bg-no-blue/5"
        : "hover:bg-no-ink/3";

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
            {slice.map((r) => {
              const gapSec = timeToSeconds(r.time) - winnerSeconds;
              const min = Math.floor(gapSec / 60);
              const sec = gapSec % 60;
              const gap =
                r.rank === 1
                  ? "—"
                  : min > 0
                    ? `+${min}:${String(sec).padStart(2, "0")}`
                    : `+${sec}s`;
              const isHighlight =
                highlight && r.team.toLowerCase().includes(highlight.toLowerCase());
              return (
                <tr
                  key={r.rank}
                  className={cn(
                    accentRow,
                    isHighlight && (accent === "blue" ? "bg-no-blue/8" : "bg-no-red/8")
                  )}
                >
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
                  <td className="font-medium text-no-ink">
                    <Link
                      href={`/lag/${slugify(r.team)}`}
                      className="hover:text-no-red inline-flex items-center gap-1 group/link"
                    >
                      {r.team}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                    </Link>
                  </td>
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

      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-2 px-4 py-3 border-t border-no-line text-sm">
          <span className="text-no-muted">
            Viser <span className="font-semibold text-no-ink">{safePage * pageSize + 1}</span>
            –
            <span className="font-semibold text-no-ink">
              {Math.min((safePage + 1) * pageSize, results.length)}
            </span>{" "}
            av <span className="font-semibold text-no-ink">{results.length}</span> lag
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(0)}
              disabled={safePage === 0}
              className="px-2 py-1 rounded-md border border-no-line text-xs text-no-muted hover:text-no-ink disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ‹‹
            </button>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={safePage === 0}
              className="px-2 py-1 rounded-md border border-no-line text-no-muted hover:text-no-ink disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-no-muted">
              Side {safePage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={safePage === totalPages - 1}
              className="px-2 py-1 rounded-md border border-no-line text-no-muted hover:text-no-ink disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPage(totalPages - 1)}
              disabled={safePage === totalPages - 1}
              className="px-2 py-1 rounded-md border border-no-line text-xs text-no-muted hover:text-no-ink disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ››
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
