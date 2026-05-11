"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Hjem" },
  { href: "/resultater", label: "Resultater" },
  { href: "/lopa", label: "Løypa" },
  { href: "/etapper", label: "Etapper" },
  { href: "/historie", label: "Historie" },
  { href: "/mestere", label: "Mestere" },
  { href: "/sammenlign", label: "Sammenlign" },
  { href: "/statistikk", label: "Statistikk" },
  { href: "/om", label: "Om" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-no-paper/90 backdrop-blur-md border-b border-no-line shadow-sm"
          : "bg-no-paper/70 backdrop-blur-sm border-b border-transparent"
      )}
    >
      {/* Flag stripe */}
      <div className="h-[3px] flag-bar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-no-red text-white shadow-sm">
              <Footprints className="w-[18px] h-[18px]" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="serif text-lg font-bold text-no-ink tracking-tight">
                Holmenkollstafetten
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-no-muted">
                Vårens vakreste eventyr
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                    active
                      ? "text-no-red bg-no-red/8"
                      : "text-no-muted hover:text-no-ink hover:bg-no-ink/5"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/egil10/holmenkoll"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-no-muted hover:text-no-ink hover:bg-no-ink/5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-no-muted hover:text-no-ink hover:bg-no-ink/5 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Meny"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-no-line bg-no-paper">
          <div className="px-4 py-3 flex flex-col gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium",
                    active ? "text-no-red bg-no-red/8" : "text-no-muted hover:text-no-ink hover:bg-no-ink/5"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
