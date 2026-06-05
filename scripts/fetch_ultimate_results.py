from __future__ import annotations

import html
import json
import re
import time
import urllib.parse
import urllib.request
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path


BASE_URL = "https://live.ultimate.dk/desktop/front"
ROOT = Path(__file__).resolve().parents[1]
OUT_FILE = ROOT / "src" / "data" / "results-generated.ts"

EVENTS = {
    2026: 7129,
    2025: 6587,
    2024: 6082,
}

CLASS_SLUGS = {
    "A1": "a1-bedrift-mosjon",
    "A2": "a2-bedrift-mosjon",
    "A1-B": "a1-bygg-anlegg-kreftforeningen",
    "A1-C": "a1-finans-kreftforeningen",
    "A2-B": "a2-bygg-anlegg-kreftforeningen",
    "A2-C": "a2-finans-kreftforeningen",
    "A3": "a3-andre-saerforbund",
    "A4": "a4-55-pluss",
    "A6": "a6-ideelle-organisasjoner",
    "B1": "menn-bedrift",
    "B4": "kvinner-bedrift",
    "F1": "menn-elite",
    "F2": "menn-senior",
    "F3": "menn-junior",
    "F4": "menn-veteran",
    "F5": "menn-superveteran",
    "F6": "kvinner-elite",
    "F7": "kvinner-senior",
    "F8": "kvinner-junior",
    "F9": "kvinner-veteran",
    "F10": "kvinner-superveteran",
    "M1": "militaere-forlegninger",
    "S1": "menn-studenter",
    "S2": "kvinner-studenter",
    "Para": "para",
}

CLASS_GROUPS = {
    "A1": "mosjon",
    "A2": "mosjon",
    "A1-B": "veldedig",
    "A1-C": "veldedig",
    "A2-B": "veldedig",
    "A2-C": "veldedig",
    "A3": "mosjon",
    "A4": "mosjon",
    "A6": "veldedig",
    "B1": "bedrift",
    "B4": "bedrift",
    "F1": "elite",
    "F6": "elite",
    "F2": "alder",
    "F3": "alder",
    "F4": "alder",
    "F5": "alder",
    "F7": "alder",
    "F8": "alder",
    "F9": "alder",
    "F10": "alder",
    "M1": "militaer",
    "S1": "student",
    "S2": "student",
    "Para": "para",
}

CLASS_GENDERS = {
    "A1": "X",
    "A2": "X",
    "A1-B": "X",
    "A1-C": "X",
    "A2-B": "X",
    "A2-C": "X",
    "A3": "X",
    "A4": "X",
    "A6": "X",
    "B1": "M",
    "B4": "K",
    "F1": "M",
    "F2": "M",
    "F3": "M",
    "F4": "M",
    "F5": "M",
    "F6": "K",
    "F7": "K",
    "F8": "K",
    "F9": "K",
    "F10": "K",
    "M1": "X",
    "S1": "M",
    "S2": "K",
    "Para": "X",
}


@dataclass(frozen=True)
class Category:
    distance: str
    value: str
    code: str
    label: str


class SelectOptionParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.options: list[tuple[str, str]] = []
        self._value: str | None = None
        self._text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() == "option":
            attrs_dict = dict(attrs)
            self._value = attrs_dict.get("value") or ""
            self._text = []

    def handle_data(self, data: str) -> None:
        if self._value is not None:
            self._text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "option" and self._value is not None:
            text = html.unescape("".join(self._text)).strip()
            self.options.append((self._value, text))
            self._value = None
            self._text = []


class ResultTableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.rows: list[list[str]] = []
        self._in_row = False
        self._in_cell = False
        self._cells: list[str] = []
        self._cell_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        if tag == "tr":
            self._in_row = True
            self._cells = []
        elif self._in_row and tag == "td":
            self._in_cell = True
            self._cell_text = []

    def handle_data(self, data: str) -> None:
        if self._in_cell:
            self._cell_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag == "td" and self._in_cell:
            cell = html.unescape("".join(self._cell_text)).strip()
            cell = re.sub(r"\s+", " ", cell)
            self._cells.append(cell)
            self._in_cell = False
            self._cell_text = []
        elif tag == "tr" and self._in_row:
            if self._cells:
                self.rows.append(self._cells)
            self._in_row = False


def fetch(path: str, params: dict[str, str | int]) -> str:
    url = f"{BASE_URL}/{path}?{urllib.parse.urlencode(params)}"
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 holmenkoll-data-fetcher",
            "Accept": "text/html,application/javascript,*/*",
        },
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read().decode("utf-8", errors="replace")


def decode_js_string(value: str) -> str:
    chars: list[str] = []
    i = 0
    while i < len(value):
        ch = value[i]
        if ch == "\\" and i + 1 < len(value):
            nxt = value[i + 1]
            chars.append({"n": "\n", "r": "\r", "t": "\t"}.get(nxt, nxt))
            i += 2
            continue
        chars.append(ch)
        i += 1
    return "".join(chars)


def extract_inner_html(js: str, element_id: str) -> str:
    pattern = (
        r"document\.getElementById\('"
        + re.escape(element_id)
        + r"'\)\.innerHTML='(.*?)';"
    )
    match = re.search(pattern, js, flags=re.S)
    return decode_js_string(match.group(1)) if match else ""


def parse_categories(eventid: int, distance: str) -> list[Category]:
    js = fetch(
        "data.php",
        {
            "eventid": eventid,
            "mode": "refreshresultsdistance",
            "distance": distance,
            "language": "us",
        },
    )
    select_html = extract_inner_html(js, "divResultsCategory")
    parser = SelectOptionParser()
    parser.feed(select_html)
    categories: list[Category] = []
    for value, label in parser.options:
        if not value.startswith("C_"):
            continue
        code = label.split(" - ", 1)[0].strip()
        if code not in CLASS_SLUGS:
            continue
        categories.append(Category(distance=distance, value=value, code=code, label=label))
    return categories


def parse_total(js: str) -> int:
    match = re.search(r"innerHTML='(\d+) participant\(s\) found'", js)
    return int(match.group(1)) if match else 0


def parse_results(js: str) -> list[dict[str, str | int]]:
    table_html = extract_inner_html(js, "list_results")
    parser = ResultTableParser()
    parser.feed(table_html)
    rows: list[dict[str, str | int]] = []
    for cells in parser.rows:
        if len(cells) < 7 or not cells[0].isdigit():
            continue
        time_value = cells[6]
        if not re.match(r"^\d+:\d{2}:\d{2}$", time_value):
            continue
        team = cells[2].strip()
        if not team:
            continue
        rows.append({"rank": int(cells[0]), "team": team, "time": time_value})
    return rows


def fetch_category(eventid: int, category: Category) -> list[dict[str, str | int]]:
    params = {
        "results_startrecord": 20000,
        "eventid": eventid,
        "mode": "results",
        "distance": category.distance,
        "category": category.value,
        "language": "us",
    }
    js = fetch("data.php", params)
    total = parse_total(js)
    rows = parse_results(js)
    if total and len(rows) != total:
        print(f"  warning: {category.code} expected {total}, parsed {len(rows)}")
    return rows


def object_literal(data: object) -> str:
    return json.dumps(data, ensure_ascii=False, indent=2)


def main() -> None:
    generated_results: dict[int, dict[str, list[dict[str, str | int]]]] = {}
    class_defs: dict[str, dict[str, str]] = {}
    source_counts: dict[int, dict[str, int]] = {}

    for year, eventid in EVENTS.items():
        print(f"{year} event {eventid}")
        generated_results[year] = {}
        source_counts[year] = {}
        seen_categories: dict[str, Category] = {}
        for distance in ("1", "2"):
            for category in parse_categories(eventid, distance):
                seen_categories.setdefault(category.code, category)
            time.sleep(0.15)

        for category in sorted(seen_categories.values(), key=lambda c: (c.distance, c.code)):
            slug = CLASS_SLUGS[category.code]
            rows = fetch_category(eventid, category)
            if not rows:
                continue
            generated_results[year][slug] = rows
            source_counts[year][slug] = len(rows)
            class_defs[slug] = {
                "code": category.code,
                "slug": slug,
                "label": category.label,
                "gender": CLASS_GENDERS[category.code],
                "group": CLASS_GROUPS[category.code],
            }
            print(f"  {category.code:5} {slug:36} {len(rows):5}")
            time.sleep(0.15)

    content = (
        "// Generated by scripts/fetch_ultimate_results.py from live.ultimate.dk.\n"
        "// Do not edit by hand; rerun the fetcher to refresh 2024-2026 full result tables.\n"
        'import type { Result } from "./results-2026";\n'
        'import type { ClassDef } from "./classes";\n\n'
        "export const generatedResults = "
        + object_literal(generated_results)
        + " satisfies Record<number, Record<string, Result[]>>;\n\n"
        "export const generatedClasses = "
        + object_literal(list(class_defs.values()))
        + " satisfies ClassDef[];\n\n"
        "export const generatedResultCounts = "
        + object_literal(source_counts)
        + " as const;\n"
    )
    OUT_FILE.write_text(content, encoding="utf-8", newline="\n")
    print(f"wrote {OUT_FILE}")


if __name__ == "__main__":
    main()
