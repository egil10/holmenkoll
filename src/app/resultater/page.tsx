"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { ResultsTable } from "@/components/results-table";
import { results, availableYears } from "@/data/results-all";
import { classes, groupLabel } from "@/data/classes";
import { Calendar, ExternalLink, Filter, Search, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const sourceLinks: Record<number, string> = {
  2026: "https://live.ultimate.dk/desktop/front/index.php?eventid=7129",
  2025: "https://live.ultimate.dk/desktop/front/index.php?eventid=6587",
  2024: "https://live.ultimate.dk/desktop/front/index.php?eventid=6082",
  2023: "https://live.eqtiming.com/61907",
  2022: "https://live.eqtiming.com/56848",
  2019: "https://holmenkollstafetten.no/resultater",
  2018: "https://live.eqtiming.com/36865",
  2017: "https://live.eqtiming.com/31563",
  2016: "https://holmenkollstafetten.no/resultater",
  2015: "https://live.eqtiming.com/7133",
  2014: "https://live.eqtiming.com/3419",
  2013: "https://live.eqtiming.com/4505",
  2012: "https://holmenkollstafetten.no/resultater",
  2011: "https://www.kondis.no/tjalve-og-vidar-vant-holmenkollstafetten.4920899-127676.html",
  2010: "https://www.kondis.no/holmenkollstafetten-tjalve-og-vidar.4781842-127676.html",
};

const dateLabel: Record<number, string> = {
  2026: "9. mai 2026",
  2025: "10. mai 2025",
  2024: "4. mai 2024",
  2023: "13. mai 2023",
  2022: "14. mai 2022",
  2019: "11. mai 2019",
  2018: "5. mai 2018",
  2017: "13. mai 2017",
  2016: "14. mai 2016",
  2015: "9. mai 2015",
  2014: "10. mai 2014",
  2013: "11. mai 2013",
  2012: "12. mai 2012",
  2011: "14. mai 2011",
  2010: "15. mai 2010",
};

export default function ResultsPage() {
  const [year, setYear] = useState(availableYears[0]);
  const [klass, setKlass] = useState("menn-elite");
  const [query, setQuery] = useState("");

  const yearData = results[year] ?? {};
  const availableClasses = Object.keys(yearData);
  const resolvedClass = availableClasses.includes(klass) ? klass : availableClasses[0];
  const rows = (yearData[resolvedClass] ?? []).filter((r) =>
    query ? r.team.toLowerCase().includes(query.toLowerCase()) : true
  );

  const groupedClasses = useMemo(() => {
    const byGroup: Record<string, typeof classes> = {};
    for (const c of classes) {
      if (!byGroup[c.group]) byGroup[c.group] = [];
      byGroup[c.group].push(c);
    }
    return byGroup;
  }, []);

  const classMeta = classes.find((c) => c.slug === resolvedClass);
  const accent: "red" | "blue" | "neutral" =
    classMeta?.gender === "M" ? "red" : classMeta?.gender === "K" ? "blue" : "neutral";
  const accentBg =
    accent === "red"
      ? "bg-no-red text-white border-no-red"
      : accent === "blue"
        ? "bg-no-blue text-white border-no-blue"
        : "bg-no-ink text-white border-no-ink";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Resultater"
        title="Alle klasser, alle år"
        subtitle="Velg år og klasse. Datasettet dekker eliteklassene tilbake til 2010 og alle 18 klasser fra 2026. Søk på lagnavn for å finne ditt eget."
      />

      {/* Year selector */}
      <div className="mb-3 flex items-start gap-2">
        <span className="text-xs uppercase tracking-widest text-no-muted font-semibold mt-2 mr-1 shrink-0">
          År
        </span>
        <div className="flex flex-wrap gap-1.5">
          {availableYears.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-semibold border transition-colors",
                year === y
                  ? "bg-no-red text-white border-no-red"
                  : "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
              )}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Class selector grouped */}
      <div className="mb-4 flex items-start gap-2 flex-wrap">
        <span className="text-xs uppercase tracking-widest text-no-muted font-semibold mt-2 mr-1 shrink-0">
          Klasse
        </span>
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {Object.entries(groupedClasses).map(([g, list]) => (
            <div key={g} className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-widest text-no-muted/80 w-24 shrink-0">
                {groupLabel[g] ?? g}
              </span>
              {list.map((c) => {
                const has = availableClasses.includes(c.slug);
                const active = resolvedClass === c.slug;
                const activeBg =
                  c.gender === "M"
                    ? "bg-no-red text-white border-no-red"
                    : c.gender === "K"
                      ? "bg-no-blue text-white border-no-blue"
                      : "bg-no-ink text-white border-no-ink";
                return (
                  <button
                    key={c.slug}
                    disabled={!has}
                    onClick={() => has && setKlass(c.slug)}
                    title={!has ? "Ingen data for valgt år" : c.label}
                    className={cn(
                      "px-2.5 py-1 rounded-md text-xs font-medium border transition-colors",
                      active
                        ? activeBg
                        : has
                          ? "bg-no-paper text-no-muted border-no-line hover:text-no-ink"
                          : "bg-no-line/50 text-no-muted/40 border-transparent cursor-not-allowed"
                    )}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-no-muted" />
        <input
          type="text"
          placeholder="Søk lag (f.eks. Tjalve, EY, NHHS…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-no-line bg-no-paper text-sm text-no-ink focus:outline-none focus:ring-2 focus:ring-no-red/30 focus:border-no-red"
        />
      </div>

      <div className="flex items-center justify-between mb-4 text-sm text-no-muted">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-no-red" />
            {dateLabel[year] ?? `${year}`} · Bislett
          </span>
          {classMeta && (
            <span
              className={cn(
                "chip",
                classMeta.gender === "M"
                  ? "chip-soft-red"
                  : classMeta.gender === "K"
                    ? "chip-soft-blue"
                    : ""
              )}
            >
              <Trophy className="w-3 h-3" /> {classMeta.label} · {classMeta.code}
            </span>
          )}
        </div>
        {sourceLinks[year] && (
          <a
            href={sourceLinks[year]}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-no-red hover:text-no-red-dark font-medium"
          >
            Kilde <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {rows.length > 0 ? (
        <ResultsTable results={rows} accent={accent} />
      ) : (
        <div className="card p-10 text-center text-no-muted">
          {query ? (
            <>Ingen lag matcher &quot;{query}&quot; i {classMeta?.label} {year}.</>
          ) : (
            <>
              Detaljerte resultater for {classMeta?.label} i {year} er ikke i datasettet ennå.{" "}
              {sourceLinks[year] && (
                <a className="link" href={sourceLinks[year]} target="_blank" rel="noreferrer">
                  Se offisielle resultater
                </a>
              )}
              .
            </>
          )}
        </div>
      )}

      <p className="text-xs text-no-muted mt-4 italic">
        Antall lag i tabellen varierer per kilde. For komplette resultater (alle plasseringer i alle klasser),
        bruk arrangørens timing-partner lenket ovenfor.
      </p>
    </div>
  );
}
