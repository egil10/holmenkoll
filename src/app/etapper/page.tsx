"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { stages, stageRecords, courseRecords, stageHighlights } from "@/data/stages";
import { Trophy, Timer, MapPin, ChevronUp, ChevronDown, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EtapperPage() {
  const [klass, setKlass] = useState<"menn" | "kvinner">("menn");
  const records = useMemo(
    () => stageRecords.filter((r) => r.klass === klass),
    [klass]
  );

  const totalDistance = stages.reduce((s, x) => s + x.distance, 0);
  const longest = [...stages].sort((a, b) => b.distance - a.distance)[0];
  const shortest = [...stages].sort((a, b) => a.distance - b.distance)[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Etapper"
        title="15 etapper, 18,8 km, én by"
        subtitle="Holmenkollstafetten består av 15 etapper med kongelig variasjon: hurtige sprintstrekk i bygata, lange motbakker mot Holmenkollen og høyt tempo nedover Frognerparken. Her er etappene og rekordene."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div className="card p-4 flag-corner pl-5">
          <p className="text-xs uppercase tracking-widest text-no-muted font-semibold">Total</p>
          <p className="serif text-2xl font-bold mt-1">
            {(totalDistance / 1000).toFixed(2)} km
          </p>
        </div>
        <div className="card p-4 flag-corner pl-5">
          <p className="text-xs uppercase tracking-widest text-no-muted font-semibold">Lengste</p>
          <p className="serif text-2xl font-bold mt-1">{longest.distance} m</p>
          <p className="text-xs text-no-muted">Etappe {longest.leg}</p>
        </div>
        <div className="card p-4 flag-corner pl-5 flag-corner-blue">
          <p className="text-xs uppercase tracking-widest text-no-muted font-semibold">Korteste</p>
          <p className="serif text-2xl font-bold mt-1">{shortest.distance} m</p>
          <p className="text-xs text-no-muted">Etappe {shortest.leg}</p>
        </div>
        <div className="card p-4 flag-corner pl-5 flag-corner-blue">
          <p className="text-xs uppercase tracking-widest text-no-muted font-semibold">Løyperekord menn</p>
          <p className="serif text-2xl font-bold mt-1 font-mono">{courseRecords.menn.time}</p>
          <p className="text-xs text-no-muted">{courseRecords.menn.team} ({courseRecords.menn.year})</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {[
          { id: "menn", label: "Menn" },
          { id: "kvinner", label: "Kvinner" },
        ].map((c) => (
          <button
            key={c.id}
            onClick={() => setKlass(c.id as "menn" | "kvinner")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors",
              klass === c.id
                ? "bg-no-red text-white border-no-red"
                : "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
        <Mountain className="w-5 h-5 text-no-red" /> Etappeoversikt &amp; rekorder ({klass})
      </h3>

      <div className="space-y-3">
        {stages.map((s) => {
          const rec = records.find((r) => r.leg === s.leg);
          const pct = (s.distance / longest.distance) * 100;
          return (
            <article key={s.leg} className="card p-5 flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-no-red/8 text-no-red font-bold serif text-lg flex items-center justify-center">
                  {s.leg}
                </div>
                <div className="min-w-0">
                  <h4 className="serif text-lg font-bold text-no-ink leading-tight">{s.name}</h4>
                  <p className="text-sm text-no-muted mt-1 leading-relaxed">{s.description}</p>
                  <p className="text-xs text-no-muted mt-1.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {s.startArea} → {s.endArea}
                  </p>
                  {s.highlight && (
                    <p className="text-xs italic text-no-red/80 mt-1">★ {s.highlight}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:items-end gap-2 lg:w-72 shrink-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-no-ink text-lg">{s.distance}</span>
                  <span className="text-xs text-no-muted">meter</span>
                </div>
                <div className="w-full lg:w-48 h-1.5 bg-no-line rounded-full overflow-hidden">
                  <div
                    className="h-full bg-no-red"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {rec ? (
                  <div className="text-xs space-y-0.5 lg:text-right">
                    <p className="flex items-center gap-1 lg:justify-end font-mono font-bold text-no-ink">
                      <Timer className="w-3 h-3 text-no-red" /> {rec.time}
                    </p>
                    <p className="text-no-muted">
                      {rec.runner} · {rec.team} · {rec.year}
                    </p>
                    {rec.note && <p className="text-no-muted/80 italic">{rec.note}</p>}
                  </div>
                ) : (
                  <p className="text-xs text-no-muted/70 italic">Rekord ikke verifisert</p>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-14">
        <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-no-blue" /> Verdt å vite
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stageHighlights.map((h, i) => (
            <div key={i} className="card p-5 flag-corner pl-6">
              <p className="text-xs uppercase tracking-widest text-no-red font-semibold">
                {h.year}
              </p>
              <p className="mt-1 font-semibold text-no-ink">{h.runner}</p>
              <p className="text-sm text-no-muted">{h.team}</p>
              <p className="text-sm text-no-muted mt-2 leading-relaxed">{h.note}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-no-muted mt-8 italic">
        Distansene er omtrentlige; løypa har blitt justert flere ganger (1928, 1948, 1988, 2011, 2013).
        Etapperekordene er hentet fra Kondis, Friidrett1 og sportsidioten.no.
      </p>
    </div>
  );
}
