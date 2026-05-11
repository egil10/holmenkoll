import { SectionHeader } from "@/components/section-header";
import { stages } from "@/data/stages";
import { MapPin, ExternalLink, History, Mountain, ArrowRight } from "lucide-react";
import Link from "next/link";

// Course changes over time — source: holmenkollstafetten.no/historie + snl.no
const courseChanges = [
  {
    year: 1923,
    title: "Første trasé",
    description:
      "Stafetten gikk fra Bislett stadion til Besserud og tilbake. 10 etapper, ca. 18 km.",
  },
  {
    year: 1928,
    title: "15 etapper",
    description:
      "Utvidet fra 10 til 15 etapper for å gi rom for det voksende antallet mellomdistanseløpere — slik svenske stafetter hadde gjort før.",
  },
  {
    year: 1948,
    title: "Trasé via Skøyen",
    description:
      "Etter henstilling fra Trafikk-politiet legges traseen om: via Skøyen, videre Drammensveien og opp Niels Juells gate. 158 lag deltar.",
  },
  {
    year: 1982,
    title: "Mosjonsstart på St. Hanshaugen",
    description:
      "For å takle kapasiteten flyttes mosjonsklassene til å starte på St. Hanshaugen. Eliteklassene starter fremdeles på Bislett.",
  },
  {
    year: 1988,
    title: "Frognerparken inkluderes",
    description:
      "Den lange etappen går nå fra Holmendammen til Frognerparken. Traseen fortsetter gjennom parken, ned Nobels gate, inn Eckersbergs gate, opp Gyldenløves gate.",
  },
  {
    year: 2004,
    title: "Bislett rives — Rådhusplassen som mål",
    description:
      "Stafetten starter på St. Hanshaugen og har innkomst på Rådhusplassen. Første gang arrangert på en lørdag.",
  },
  {
    year: 2006,
    title: "Tilbake på nye Bislett",
    description: "Det nye Bislett står klart — start og mål tilbake der det hele begynte i 1923.",
  },
  {
    year: 2011,
    title: "Justering ved Smestad",
    description:
      "Den lengste etappen ble noe endret ved Smestad. Stafettens totale lengde er nå 18 425 m fra Bislett og 18 355 m fra St. Hanshaugen.",
  },
  {
    year: 2013,
    title: "4. og 5. etappe endret",
    description:
      "Små endringer på 4. etappe og en helt ny 5. etappe. Total lengde 18 840 m fra Bislett, 18 680 m fra St. Hanshaugen.",
  },
];

const BISLETT_LAT = 59.9255;
const BISLETT_LNG = 10.7333;
const BBOX = "10.69,59.91,10.76,59.97"; // covers Bislett, Frognerparken, Holmenkollen

export default function LopaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Løypa"
        title="Fra Bislett til Holmenkollen og tilbake"
        subtitle="Stafetten går i en stor sløyfe gjennom Oslos vestkant: opp gjennom Majorstuen og Slemdal, helt opp til Besserud og Holmenkollen, før det går nedover gjennom Frognerparken og inn på Bislett igjen."
      />

      {/* Map */}
      <section className="mb-12">
        <div className="card overflow-hidden">
          <div className="relative aspect-[16/10] sm:aspect-[16/8] bg-no-line">
            <iframe
              title="Holmenkollstafetten-løypa i Oslo"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${BISLETT_LAT},${BISLETT_LNG}`}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
            <p className="text-no-muted">
              <span className="font-semibold text-no-ink">Bislett stadion</span> markert. Kart fra
              OpenStreetMap.
            </p>
            <a
              href={`https://www.openstreetmap.org/?mlat=${BISLETT_LAT}&mlon=${BISLETT_LNG}#map=14/${BISLETT_LAT}/${BISLETT_LNG}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-no-red hover:text-no-red-dark font-medium"
            >
              Åpne større kart <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Schematic elevation */}
      <section className="mb-12">
        <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
          <Mountain className="w-5 h-5 text-no-red" /> Skjematisk profil
        </h3>
        <p className="text-sm text-no-muted leading-relaxed max-w-3xl mb-4">
          Holmenkollstafetten er ikke flat. Fra Bislett (~46 moh) klatrer løperne opp mot Besserud
          (~410 moh) — totalt rundt 300 høydemeter. Etapper 5, 6, 7 og 8 er motbakke-etapper.
          Etapper 9, 10 og 11 er motsatt: bratt utfor.
        </p>
        <div className="card p-6">
          <svg viewBox="0 0 800 200" className="w-full h-44">
            <defs>
              <linearGradient id="elev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#BA0C2F" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#BA0C2F" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* Simulated elevation curve over 15 stages */}
            <path
              d="M0,160 L53,158 L106,150 L160,135 L213,108 L266,75 L320,40 L373,30 L426,38 L480,45 L533,80 L586,120 L640,140 L693,150 L746,158 L800,160 L800,200 L0,200 Z"
              fill="url(#elev)"
            />
            <path
              d="M0,160 L53,158 L106,150 L160,135 L213,108 L266,75 L320,40 L373,30 L426,38 L480,45 L533,80 L586,120 L640,140 L693,150 L746,158 L800,160"
              stroke="#BA0C2F"
              strokeWidth={2.5}
              fill="none"
            />
            {/* Stage markers */}
            {stages.map((s, i) => {
              const x = (i / 14) * 800;
              const yMap = [160,158,150,135,108,75,40,30,38,45,80,120,140,150,158];
              const y = yMap[i];
              return (
                <g key={s.leg}>
                  <circle cx={x} cy={y} r={4} fill="#FFFFFF" stroke="#BA0C2F" strokeWidth={2} />
                  <text x={x} y={185} textAnchor="middle" fontSize="10" fill="#5B6478">
                    {s.leg}
                  </text>
                </g>
              );
            })}
            {/* Annotations */}
            <text x={320} y={20} textAnchor="middle" fontSize="11" fill="#00205B" fontWeight="600">
              Besserud · ~410 moh
            </text>
            <text x={20} y={180} fontSize="10" fill="#5B6478">Bislett</text>
            <text x={770} y={180} fontSize="10" fill="#5B6478" textAnchor="end">Bislett</text>
          </svg>
          <p className="text-xs text-no-muted italic mt-2">
            Illustrasjon — ikke nøyaktig høydeprofil. For nøyaktige etappedata, se{" "}
            <a className="link" href="https://www.steget.no/holmenkollstafetten/etappeplanlegger" target="_blank" rel="noreferrer">
              Stegets etappeplanlegger
            </a>
            .
          </p>
        </div>
      </section>

      {/* Stage strip */}
      <section className="mb-12">
        <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-no-blue" /> 15 etapper på rad
        </h3>
        <div className="card p-4 overflow-x-auto">
          <div className="flex items-stretch gap-2 min-w-[800px]">
            {stages.map((s) => {
              const maxDist = Math.max(...stages.map((x) => x.distance));
              const hRel = 30 + (s.distance / maxDist) * 80;
              return (
                <div key={s.leg} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full bg-no-red/20 border border-no-red/30 rounded"
                    style={{ height: `${hRel}px` }}
                  />
                  <span className="text-xs font-mono font-semibold text-no-ink">{s.leg}</span>
                  <span className="text-[10px] text-no-muted text-center leading-tight">{s.distance}m</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href="/etapper"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-no-red hover:text-no-red-dark"
          >
            Detaljerte etapper og rekorder <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Course history */}
      <section>
        <h3 className="serif text-xl font-bold text-no-ink mb-3 flex items-center gap-2">
          <History className="w-5 h-5 text-no-red" /> Hvordan løypa har endret seg
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {courseChanges.map((c) => (
            <article key={c.year} className="card p-5 flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-no-blue/10 text-no-blue font-bold serif text-lg flex items-center justify-center">
                {c.year}
              </div>
              <div>
                <h4 className="serif text-lg font-bold text-no-ink leading-tight">{c.title}</h4>
                <p className="text-sm text-no-muted mt-1 leading-relaxed">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
