import Link from "next/link";
import {
  ArrowRight,
  Users,
  CalendarDays,
  Mountain,
  Award,
  Flag,
  Timer,
  Trophy,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { SectionHeader } from "@/components/section-header";
import { ResultsTable } from "@/components/results-table";
import { mennElite2026, kvinnerElite2026 } from "@/data/results-2026";
import { milestones } from "@/data/timeline";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-no-paper border-b border-no-line">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-no-red/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-no-blue/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="chip chip-soft-red mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Hobbyprosjekt · Data fra offentlige kilder
            </span>
            <h1 className="serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-no-ink leading-[1.02]">
              Vårens vakreste{" "}
              <span className="relative inline-block">
                eventyr
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 flag-bar rounded-full" />
              </span>
              .
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-no-muted leading-relaxed max-w-2xl">
              Et dashbord for Holmenkollstafetten i Oslo — verdens største stafett.
              Resultater, historie og statistikk fra hundre år med løping, samlet på
              ett sted.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resultater"
                className="inline-flex items-center gap-2 bg-no-red text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-no-red-dark transition-colors"
              >
                Se resultater <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/historie"
                className="inline-flex items-center gap-2 bg-no-paper border border-no-line text-no-ink px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-no-ink/5 transition-colors"
              >
                Utforsk historien
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-no-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-no-red" /> Oslo, Norge
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-no-blue" /> Siden 1923
              </span>
              <span className="flex items-center gap-1.5">
                <Flag className="w-4 h-4 text-no-red" /> Arrangør: IK Tjalve
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={CalendarDays}
            label="Første utgave"
            value="1923"
            hint="2. juni — 10 lag deltok"
            accent="red"
          />
          <StatCard
            icon={Users}
            label="Lag i 2026"
            value="5 500+"
            hint="Over 70 000 løpere"
            accent="blue"
          />
          <StatCard
            icon={Mountain}
            label="Distanse"
            value="~18,8 km"
            hint="15 etapper · ~300 hm"
            accent="ink"
          />
          <StatCard
            icon={Trophy}
            label="Eliteseire"
            value="BUL · 24"
            hint="Flest seire menn elite"
            accent="red"
          />
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* Latest results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="9. mai 2026"
          title="Siste resultater"
          subtitle="Topp 10 i menn elite og kvinner elite fra årets utgave. Ull/Kisa tok sin fjerde strake seier; SK Vidar satte ny løyperekord i kvinneklassen."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="chip chip-red">
                  <Trophy className="w-3.5 h-3.5" /> Menn elite
                </span>
              </div>
              <span className="text-xs text-no-muted font-mono">15 etapper</span>
            </div>
            <ResultsTable results={mennElite2026} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="chip chip-blue">
                  <Trophy className="w-3.5 h-3.5" /> Kvinner elite
                </span>
              </div>
              <span className="text-xs text-no-muted font-mono">15 etapper</span>
            </div>
            <ResultsTable results={kvinnerElite2026.slice(0, 10)} />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/resultater"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-no-red hover:text-no-red-dark"
          >
            Se alle klasser og årganger <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* Storyline 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="Året 2026"
          title="Ni nye etapperekorder, fire strake for Ull/Kisa"
          subtitle="Vidar bygde et 45-sekunders forsprang gjennom finske Illona Mononen og slo både favorittene Tjalve og svenske Hälle IF. Petter Northugs Mosvik tok 9. plass i menn elite."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="card p-6 flag-corner pl-7">
            <Timer className="w-5 h-5 text-no-red mb-3" />
            <h3 className="serif text-xl font-bold text-no-ink mb-2">Menn elite</h3>
            <p className="text-sm text-no-muted leading-relaxed">
              Ullensaker/Kisa vant på <span className="font-semibold text-no-ink font-mono">48:45</span>{" "}
              — 14 sekunder bedre enn forrige år og 43 sekunder foran SK Vidar.
              Trym Fjøsne-Hexeberg satte etapperekord på 11. etappe (3:52).
            </p>
          </article>
          <article className="card p-6 flag-corner pl-7">
            <Award className="w-5 h-5 text-no-blue mb-3" />
            <h3 className="serif text-xl font-bold text-no-ink mb-2">Kvinner elite</h3>
            <p className="text-sm text-no-muted leading-relaxed">
              SK Vidar vant på <span className="font-semibold text-no-ink font-mono">55:42</span>,
              over ett minutt bedre enn fjorårets vinnertid. Det er klubbens 18. seier
              og første på fire år. Amalie Sæten forbedret etapperekorden med 14 sek.
            </p>
          </article>
          <article className="card p-6 flag-corner pl-7">
            <Users className="w-5 h-5 text-no-ink mb-3" />
            <h3 className="serif text-xl font-bold text-no-ink mb-2">Folkefest</h3>
            <p className="text-sm text-no-muted leading-relaxed">
              Over <span className="font-semibold text-no-ink">5 500 lag</span> og{" "}
              <span className="font-semibold text-no-ink">82 500 etapper</span> løpt
              — ny rekord. Bedrifter, idrettslag og studenter farger Oslo på en
              lørdag i mai.
            </p>
          </article>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* Mini timeline preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="100 år"
          title="Et utvalg fra historien"
          subtitle="Fra ti lag i 1923 til over 5 500 i 2026. Her er noen av de viktigste øyeblikkene."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1923, 1933, 1975, 2017, 2023, 2026].map((yr) => {
            const m = milestones.find((x) => x.year === yr);
            if (!m) return null;
            return (
              <article key={String(m.year)} className="card card-hover p-5 flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-no-red/8 text-no-red font-bold serif text-lg flex items-center justify-center">
                    {String(m.year).slice(-2)}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-no-muted">{m.year}</p>
                  <h3 className="serif text-lg font-bold text-no-ink leading-snug mt-1">
                    {m.title}
                  </h3>
                  <p className="text-sm text-no-muted mt-1.5 leading-relaxed">{m.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/historie"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-no-red hover:text-no-red-dark"
          >
            Hele tidslinjen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* Explore cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-no-red mb-2">
          Utforsk
        </p>
        <h2 className="serif text-3xl sm:text-4xl font-bold text-no-ink mb-10">
          Gå dypere i tallene.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              href: "/mestere",
              title: "Mestere",
              text: "Vinnerlag gjennom 100 år — flest seire, lengste seiersrekker, utenlandske triumfer.",
              icon: Trophy,
              accent: "red",
            },
            {
              href: "/statistikk",
              title: "Statistikk",
              text: "Deltakerutvikling, vinnertider og rekorder visualisert år for år.",
              icon: Sparkles,
              accent: "blue",
            },
            {
              href: "/sammenlign",
              title: "Sammenlign",
              text: "Sett klubber og årganger opp mot hverandre — interaktive sammenligninger.",
              icon: Award,
              accent: "ink",
            },
            {
              href: "/historie",
              title: "Historie",
              text: "Fra Tjalve i 1923 til folkefest i 2026 — alle milepælene.",
              icon: CalendarDays,
              accent: "red",
            },
            {
              href: "/resultater",
              title: "Resultater",
              text: "Topp-resultater fra 2024–2026 i menn og kvinner elite.",
              icon: Flag,
              accent: "blue",
            },
            {
              href: "/om",
              title: "Om & kilder",
              text: "Hvordan siden er bygget, datakilder og lenker. Et hobbyprosjekt.",
              icon: ChevronRight,
              accent: "ink",
            },
          ].map((c) => {
            const Icon = c.icon;
            const accentClass =
              c.accent === "red"
                ? "text-no-red bg-no-red/10"
                : c.accent === "blue"
                  ? "text-no-blue bg-no-blue/10"
                  : "text-no-ink bg-no-ink/10";
            return (
              <Link
                key={c.href}
                href={c.href}
                className="card card-hover p-6 group flex flex-col gap-3"
              >
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${accentClass}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="serif text-xl font-bold text-no-ink">{c.title}</h3>
                <p className="text-sm text-no-muted leading-relaxed">{c.text}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-no-red group-hover:gap-2 transition-all">
                  Åpne <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
