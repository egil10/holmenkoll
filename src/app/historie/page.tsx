import { SectionHeader } from "@/components/section-header";
import { milestones } from "@/data/timeline";
import { Trophy, Users, Flag, ShieldAlert, Sparkles, Medal } from "lucide-react";

const categoryColor: Record<string, { bg: string; text: string; icon: any }> = {
  founding: { bg: "bg-no-red", text: "text-white", icon: Flag },
  growth: { bg: "bg-no-blue", text: "text-white", icon: Users },
  milestone: { bg: "bg-no-ink", text: "text-white", icon: Sparkles },
  war: { bg: "bg-no-muted", text: "text-white", icon: ShieldAlert },
  winner: { bg: "bg-no-red", text: "text-white", icon: Trophy },
  record: { bg: "bg-no-blue", text: "text-white", icon: Medal },
  modern: { bg: "bg-no-ink", text: "text-white", icon: Sparkles },
};

export default function HistoriePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Historie"
        title="Fra Bislett 1923 til folkefest 2026"
        subtitle="Holmenkollstafetten ble første gang arrangert 2. juni 1923 av IK Tjalve. Siden har den blitt en bauta i norsk idrettsliv. Her er noen av de viktigste øyeblikkene."
      />

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-no-line -translate-x-px sm:translate-x-0" />
        <ol className="space-y-6">
          {milestones.map((m, i) => {
            const cat = categoryColor[m.category];
            const Icon = cat.icon;
            const left = i % 2 === 0;
            return (
              <li key={String(m.year) + m.title} className="relative">
                <div
                  className={`grid sm:grid-cols-2 gap-4 sm:gap-12 items-start ${
                    left ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={left ? "sm:text-right sm:pr-8" : "sm:pl-8"}>
                    <article className="card p-5 inline-block max-w-full text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-7 h-7 rounded-md ${cat.bg} ${cat.text} flex items-center justify-center`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.16em] text-no-muted font-semibold">
                          {m.category}
                        </span>
                      </div>
                      <h3 className="serif text-xl font-bold text-no-ink leading-tight">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm text-no-muted leading-relaxed">
                        {m.description}
                      </p>
                    </article>
                  </div>
                  <div className="hidden sm:block" />
                </div>
                <div
                  className={`absolute top-5 left-4 sm:left-1/2 -translate-x-1/2 z-10`}
                >
                  <div className="bg-no-paper border-2 border-no-red rounded-full w-12 h-12 flex items-center justify-center serif font-bold text-no-red text-sm shadow-sm">
                    {typeof m.year === "string"
                      ? m.year.slice(-2).replace(/[^0-9]/g, "") || m.year.slice(0, 2)
                      : String(m.year).slice(-2)}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <section className="mt-16 card p-6 sm:p-8">
        <h3 className="serif text-2xl font-bold text-no-ink mb-3">Løypa</h3>
        <p className="text-sm text-no-muted leading-relaxed mb-3">
          Stafetten startet i 1923 fra Bislett opp til Besserud og tilbake — 10 etapper.
          I 1928 ble den utvidet til 15 etapper. Dagens trasé er ca.{" "}
          <span className="font-semibold text-no-ink">18,8 km</span> med rundt 300
          høydemeter og går gjennom Bislett, Majorstua, Vinderen, Slemdal, Smestad,
          Frognerparken, Homansbyen og inn igjen mot Bislett. Mosjonsklassene har siden
          1982 startet på St. Hanshaugen for å gi plass til flere lag.
        </p>
        <p className="text-sm text-no-muted leading-relaxed">
          I 2004 ble stafetten flyttet til lørdag og fra mai-helgene. Siden 2006 har
          den vært tilbake på nye Bislett.
        </p>
      </section>
    </div>
  );
}
