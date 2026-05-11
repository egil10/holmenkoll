"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { winners, cancelledYears } from "@/data/winners";
import { Trophy, Crown, Award, ChevronDown, ChevronUp, Flag } from "lucide-react";
import { cn, formatTime } from "@/lib/utils";

function countWinners(list: typeof winners.menn) {
  const map = new Map<string, number>();
  for (const w of list) {
    map.set(w.team, (map.get(w.team) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

export default function MesterePage() {
  const [klass, setKlass] = useState<"menn" | "kvinner">("menn");
  const list = winners[klass];
  const counts = useMemo(() => countWinners(list), [list]);
  const top = counts.slice(0, 8);
  const [showAll, setShowAll] = useState(false);
  const display = showAll ? [...list].sort((a, b) => b.year - a.year) : [...list].sort((a, b) => b.year - a.year).slice(0, 20);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Mestere"
        title="Hall of fame"
        subtitle="Klubbene som har dominert Holmenkollstafetten gjennom 100 år. Tjalve, BUL, Gular, Vidar og Ullensaker/Kisa har skrevet det meste av historien — med svenske og tyske inntog innimellom."
      />

      <div className="flex gap-2 mb-6">
        {[
          { id: "menn", label: "Menn elite", icon: Trophy, color: "bg-no-red border-no-red" },
          { id: "kvinner", label: "Kvinner elite", icon: Award, color: "bg-no-blue border-no-blue" },
        ].map((c) => {
          const Icon = c.icon;
          const active = klass === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setKlass(c.id as "menn" | "kvinner")}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors",
                active
                  ? `${c.color} text-white`
                  : "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
              )}
            >
              <Icon className="w-4 h-4" /> {c.label}
            </button>
          );
        })}
      </div>

      {/* Trophy podium / top winners */}
      <section className="mb-12">
        <h3 className="serif text-xl font-bold text-no-ink mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-no-red" /> Flest seire — {klass === "menn" ? "menn" : "kvinner"} elite
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {top.map(([team, count], i) => (
            <div
              key={team}
              className={cn(
                "card p-4 flag-corner pl-5",
                klass === "kvinner" && "flag-corner-blue",
                i === 0 &&
                  (klass === "kvinner"
                    ? "ring-2 ring-no-blue ring-offset-2 ring-offset-no-cream"
                    : "ring-2 ring-no-red ring-offset-2 ring-offset-no-cream")
              )}
            >
              <div className="flex items-center gap-2">
                <span className="serif text-2xl font-bold text-no-ink">{count}</span>
                <span className="text-xs uppercase tracking-widest text-no-muted">seire</span>
              </div>
              <p className="mt-2 font-semibold text-no-ink text-sm leading-tight">{team}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-no-muted mt-3 italic">
          {klass === "menn"
            ? "IL i BUL leder med 24 seire totalt; IK Tjalve følger på 21 og IL Gular på 15 ifølge Store norske leksikon. Tabellen over teller de bekreftede årene i datasettet."
            : "SK Vidar dominerer med 18 seire totalt; IK Tjalve har 9. IL Tyrving vant de fem første utgavene 1975–79."}
        </p>
      </section>

      {/* Year by year winners */}
      <section>
        <h3 className="serif text-xl font-bold text-no-ink mb-4">
          Vinnere år for år — {klass === "menn" ? "menn" : "kvinner"} elite
        </h3>
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-clean">
              <thead>
                <tr>
                  <th className="w-24">År</th>
                  <th>Vinnerlag</th>
                  <th className="text-right">Tid</th>
                  <th className="hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {display.map((w) => (
                  <tr key={`${w.year}-${w.team}`}>
                    <td className="font-mono font-semibold text-no-ink">{w.year}</td>
                    <td className="font-medium text-no-ink flex items-center gap-2">
                      <Flag className="w-3.5 h-3.5 text-no-red shrink-0" />
                      {w.team}
                    </td>
                    <td className="text-right font-mono text-no-muted tabular-nums">
                      {w.time ? formatTime(w.time) : "—"}
                    </td>
                    <td className="hidden md:table-cell text-sm text-no-muted italic">
                      {w.notes ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-no-red hover:text-no-red-dark"
        >
          {showAll ? (
            <>
              Vis mindre <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Vis alle ({list.length}) <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </section>

      <section className="mt-14">
        <h3 className="serif text-xl font-bold text-no-ink mb-3">Avlyste år</h3>
        <div className="card p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cancelledYears.map((c) => (
              <div key={c.year} className="text-sm">
                <p className="font-mono font-semibold text-no-ink">{c.year}</p>
                <p className="text-xs text-no-muted leading-snug">{c.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
