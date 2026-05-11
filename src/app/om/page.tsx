import { SectionHeader } from "@/components/section-header";
import { sources } from "@/data/sources";
import { Github, Database, Code2, Heart, ExternalLink, AlertCircle, Coffee } from "lucide-react";

const categoryLabel: Record<string, string> = {
  official: "Offisielt",
  results: "Resultater (timing)",
  media: "Mediedekning",
  encyclopedia: "Leksikon",
};

export default function OmPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        eyebrow="Om"
        title="Hva er dette?"
        subtitle="Et hobbyprosjekt for å samle resultater og historie fra Holmenkollstafetten på ett sted. Bygget av en glad amatør, ikke tilknyttet IK Tjalve eller noen arrangør."
      />

      <section className="card p-6 mb-6 flag-corner pl-7">
        <Heart className="w-5 h-5 text-no-red mb-3" />
        <h3 className="serif text-xl font-bold mb-2">Hobbyprosjekt</h3>
        <p className="text-sm text-no-muted leading-relaxed">
          Denne siden er laget på fritiden av en som elsker tall, kart og vårens
          vakreste eventyr. Alle data er hentet fra offentlig tilgjengelige kilder
          (se nederst). Hvis du oppdager feil, en uteglemt vinner eller et morsomt
          poeng — send gjerne en pull request på GitHub.
        </p>
      </section>

      <section className="card p-6 mb-6">
        <Code2 className="w-5 h-5 text-no-blue mb-3" />
        <h3 className="serif text-xl font-bold mb-2">Hvordan siden er bygget</h3>
        <ul className="text-sm text-no-muted leading-relaxed list-disc pl-5 space-y-1.5">
          <li>
            <span className="font-semibold text-no-ink">Next.js 14</span> med
            App Router, statisk eksportert og deployet på Vercel.
          </li>
          <li>
            <span className="font-semibold text-no-ink">Tailwind CSS</span> i
            norsk flagg-palett (rødt #BA0C2F, hvitt, blått #00205B).
          </li>
          <li>
            <span className="font-semibold text-no-ink">Recharts</span> for de
            interaktive grafene.
          </li>
          <li>
            <span className="font-semibold text-no-ink">Lucide Icons</span> for
            piktogrammer.
          </li>
          <li>
            <span className="font-semibold text-no-ink">Playfair Display + Inter</span>{" "}
            for typografi som skal minne om aviser fra mellomkrigstiden.
          </li>
          <li>
            Datasettene ligger som typesikre TypeScript-filer i{" "}
            <code className="px-1.5 py-0.5 rounded bg-no-ink/5 font-mono text-xs">
              src/data
            </code>{" "}
            — lett å rette og utvide.
          </li>
        </ul>
      </section>

      <section className="card p-6 mb-6">
        <Database className="w-5 h-5 text-no-red mb-3" />
        <h3 className="serif text-xl font-bold mb-3">Datakilder</h3>
        <p className="text-sm text-no-muted mb-4">
          Alle resultater og historiske fakta er hentet fra offentlige kilder. Disse
          er primærkildene som er brukt:
        </p>
        <div className="space-y-4">
          {(["official", "results", "media", "encyclopedia"] as const).map((cat) => (
            <div key={cat}>
              <p className="text-xs uppercase tracking-widest font-semibold text-no-red mb-2">
                {categoryLabel[cat]}
              </p>
              <ul className="space-y-1.5">
                {sources
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <li key={s.url} className="text-sm">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 link"
                      >
                        {s.title}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs text-no-muted ml-1">{s.used}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 mb-6">
        <AlertCircle className="w-5 h-5 text-no-muted mb-3" />
        <h3 className="serif text-xl font-bold mb-2">Disclaimer</h3>
        <ul className="text-sm text-no-muted leading-relaxed list-disc pl-5 space-y-1.5">
          <li>Ingen tilknytning til Idrettsklubben Tjalve eller arrangøren.</li>
          <li>
            For offisielle, fullstendige resultater — bruk{" "}
            <a className="link" href="https://holmenkollstafetten.no/resultater" target="_blank" rel="noreferrer">
              holmenkollstafetten.no/resultater
            </a>{" "}
            og timing-tjenestene Ultimate Live / EQ Timing.
          </li>
          <li>
            Historiske vinnertider og deltakerantall er sammensatt fra flere kilder
            og kan ha små unøyaktigheter.
          </li>
          <li>Logoer og varemerker tilhører sine respektive eiere.</li>
        </ul>
      </section>

      <section className="card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div>
          <p className="serif text-xl font-bold mb-1">Kode og bidrag</p>
          <p className="text-sm text-no-muted">
            Hele kildekoden ligger åpent på GitHub — issues og pull requests er
            varmt velkomne.
          </p>
        </div>
        <a
          href="https://github.com/egil10/holmenkoll"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-no-ink text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-black/80"
        >
          <Github className="w-4 h-4" /> egil10/holmenkoll
        </a>
      </section>

      <p className="mt-8 text-center text-sm text-no-muted flex items-center justify-center gap-1.5">
        Bygget med <Coffee className="w-3.5 h-3.5 text-no-red" /> og litt for mange
        skjermtimer.
      </p>
    </div>
  );
}
