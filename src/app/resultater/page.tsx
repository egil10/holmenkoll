"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { ResultsTable } from "@/components/results-table";
import { mennElite2026, kvinnerElite2026, stageRecords2026 } from "@/data/results-2026";
import { mennElite2025 } from "@/data/results-2025";
import { mennElite2024, kvinnerElite2024 } from "@/data/results-2024";
import { Trophy, Timer, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type Year = 2026 | 2025 | 2024;
type Class = "menn" | "kvinner";

const sources: Record<Year, string> = {
  2026: "https://live.ultimate.dk/desktop/front/index.php?eventid=7129",
  2025: "https://live.ultimate.dk/desktop/front/index.php?eventid=6587",
  2024: "https://live.ultimate.dk/desktop/front/index.php?eventid=6082",
};

const dates: Record<Year, string> = {
  2026: "9. mai 2026",
  2025: "10. mai 2025",
  2024: "4. mai 2024",
};

function getResults(year: Year, klass: Class) {
  if (year === 2026) return klass === "menn" ? mennElite2026 : kvinnerElite2026;
  if (year === 2025) return klass === "menn" ? mennElite2025 : [];
  return klass === "menn" ? mennElite2024 : kvinnerElite2024;
}

export default function ResultsPage() {
  const [year, setYear] = useState<Year>(2026);
  const [klass, setKlass] = useState<Class>("menn");
  const results = getResults(year, klass);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Resultater"
        title="Hvem løp inn på Bislett?"
        subtitle="Topp-resultater fra elite-klassene de siste utgavene. Velg år og klasse — alle data hentet fra offisielle timing-tjenester."
      />

      <div className="flex flex-wrap gap-2 mb-3">
        {[2026, 2025, 2024].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y as Year)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors",
              year === y
                ? "bg-no-red text-white border-no-red"
                : "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
            )}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "menn", label: "Menn elite" },
          { id: "kvinner", label: "Kvinner elite" },
        ].map((c) => (
          <button
            key={c.id}
            onClick={() => setKlass(c.id as Class)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors",
              klass === c.id
                ? "bg-no-blue text-white border-no-blue"
                : "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4 text-sm text-no-muted">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-no-red" />
          {dates[year]} · Bislett stadion
        </div>
        <a
          href={sources[year]}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-no-red hover:text-no-red-dark font-medium"
        >
          Offisielle live-resultater <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {results.length > 0 ? (
        <ResultsTable results={results} />
      ) : (
        <div className="card p-10 text-center text-no-muted">
          Kvinner elite-resultater for {year} er ikke importert i denne utgaven.
          Se{" "}
          <a className="link" href={sources[year]} target="_blank" rel="noreferrer">
            offisielle resultater
          </a>
          .
        </div>
      )}

      {year === 2026 && klass === "menn" && (
        <section className="mt-12">
          <h3 className="serif text-2xl font-bold text-no-ink mb-4">
            Etapperekorder satt i 2026 (menn)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stageRecords2026.menn.map((r) => (
              <div key={r.leg} className="card p-4">
                <div className="flex items-center justify-between">
                  <span className="chip chip-soft-red">Etappe {r.leg}</span>
                  <span className="font-mono text-no-ink font-bold">{r.time}</span>
                </div>
                <p className="mt-3 font-semibold text-no-ink">{r.runner}</p>
                <p className="text-sm text-no-muted">{r.team}</p>
                {r.note && (
                  <p className="text-xs text-no-muted mt-1 italic">{r.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {year === 2026 && klass === "kvinner" && (
        <section className="mt-12">
          <h3 className="serif text-2xl font-bold text-no-ink mb-4">
            Etapperekorder satt i 2026 (kvinner)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stageRecords2026.kvinner.map((r) => (
              <div key={r.leg} className="card p-4">
                <div className="flex items-center justify-between">
                  <span className="chip chip-soft-blue">Etappe {r.leg}</span>
                  <span className="font-mono text-no-ink font-bold">{r.time}</span>
                </div>
                <p className="mt-3 font-semibold text-no-ink">{r.runner}</p>
                <p className="text-sm text-no-muted">{r.team}</p>
                {r.note && (
                  <p className="text-xs text-no-muted mt-1 italic">{r.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 card p-6">
        <div className="flex items-start gap-3">
          <Timer className="w-5 h-5 text-no-red mt-0.5" />
          <div>
            <h3 className="serif text-xl font-bold text-no-ink mb-2">
              Andre klasser
            </h3>
            <p className="text-sm text-no-muted leading-relaxed">
              Holmenkollstafetten har et trettitalls klasser: senior (F2/F7),
              junior U23 (F3/F8), veteran (F4/F9), superveteran (F5/F10), studenter
              (S1/S2), militære (M1), bedriftslag (B1–B5, A1–A6) og Para. Live-resultater
              for alle klasser finnes hos arrangørens timing-partner:
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <a
                className="chip chip-soft-blue hover:text-no-blue-dark"
                href="https://live.ultimate.dk/desktop/front/index.php?eventid=7129"
                target="_blank"
                rel="noreferrer"
              >
                2026 →
              </a>
              <a
                className="chip chip-soft-blue hover:text-no-blue-dark"
                href="https://live.ultimate.dk/desktop/front/index.php?eventid=6587"
                target="_blank"
                rel="noreferrer"
              >
                2025 →
              </a>
              <a
                className="chip chip-soft-blue hover:text-no-blue-dark"
                href="https://live.ultimate.dk/desktop/front/index.php?eventid=6082"
                target="_blank"
                rel="noreferrer"
              >
                2024 →
              </a>
              <a
                className="chip chip-soft-blue hover:text-no-blue-dark"
                href="https://live.eqtiming.com/61907"
                target="_blank"
                rel="noreferrer"
              >
                2023 (EQ) →
              </a>
              <a
                className="chip chip-soft-blue hover:text-no-blue-dark"
                href="https://live.eqtiming.com/56848"
                target="_blank"
                rel="noreferrer"
              >
                2022 (EQ) →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
