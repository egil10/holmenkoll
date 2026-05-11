import Link from "next/link";
import { Github, Heart, Footprints } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-no-line bg-no-paper">
      <div className="h-[3px] flag-bar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Footprints className="w-4 h-4 text-no-red" />
            <span className="serif font-bold text-no-ink">Holmenkollstafetten</span>
          </div>
          <p className="text-sm text-no-muted leading-relaxed">
            Et hobbyprosjekt som samler resultater og historie fra Norges største
            stafett. Ikke tilknyttet IK Tjalve eller arrangøren.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-no-ink mb-3">Innhold</p>
          <ul className="flex flex-col gap-1.5 text-no-muted">
            <li><Link className="hover:text-no-red" href="/resultater">Resultater</Link></li>
            <li><Link className="hover:text-no-red" href="/lopa">Løypa</Link></li>
            <li><Link className="hover:text-no-red" href="/etapper">Etapper</Link></li>
            <li><Link className="hover:text-no-red" href="/historie">Historie</Link></li>
            <li><Link className="hover:text-no-red" href="/mestere">Mestere</Link></li>
            <li><Link className="hover:text-no-red" href="/sammenlign">Sammenlign</Link></li>
            <li><Link className="hover:text-no-red" href="/statistikk">Statistikk</Link></li>
            <li><Link className="hover:text-no-red" href="/om">Om & kilder</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-no-ink mb-3">Lenker</p>
          <ul className="flex flex-col gap-1.5 text-no-muted">
            <li>
              <a className="hover:text-no-red" href="https://holmenkollstafetten.no" target="_blank" rel="noreferrer">
                Offisiell side
              </a>
            </li>
            <li>
              <a className="hover:text-no-red" href="https://live.ultimate.dk/desktop/front/index.php?eventid=7129" target="_blank" rel="noreferrer">
                Live-resultater 2026
              </a>
            </li>
            <li>
              <a className="hover:text-no-red flex items-center gap-1.5" href="https://github.com/egil10/holmenkoll" target="_blank" rel="noreferrer">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-no-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-no-muted">
          <p>© {new Date().getFullYear()} — Hobbyprosjekt. Data hentet fra offentlige kilder.</p>
          <p className="flex items-center gap-1.5">
            Bygget med <Heart className="w-3 h-3 text-no-red fill-no-red" /> i Oslo
          </p>
        </div>
      </div>
    </footer>
  );
}
