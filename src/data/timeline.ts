// Holmenkollstafetten — historical timeline
// Source: holmenkollstafetten.no/om-arrangoren/historie + historie.txt (root of repo)

export type Milestone = {
  year: number | string;
  title: string;
  description: string;
  category: "founding" | "growth" | "milestone" | "war" | "winner" | "record" | "modern";
};

export const milestones: Milestone[] = [
  {
    year: 1890,
    title: "IK Tjalve stiftes",
    description:
      "Landets eldste friidrettsklubb stiftes tredje juledag, og tar seks år senere initiativ til å stifte Norges Friidrettsforbund.",
    category: "founding",
  },
  {
    year: 1923,
    title: "Første Holmenkollstafett",
    description:
      "Idrettsklubben Tjalve arrangerer stafetten 2. juni. Ti lag deltar, ti etapper fra Bislett til Besserud og tilbake. Tjalve vinner på 46.01,8.",
    category: "founding",
  },
  {
    year: 1924,
    title: "Bedriftslag for første gang",
    description: "19 lag fullfører. Postfunksjonærene blir første bedriftslag.",
    category: "growth",
  },
  {
    year: 1927,
    title: "Europeisk dimensjon",
    description:
      "41 lag, 4000 tilskuere på Bislett, 20 000 langs løypa. Tjalve tar sin tredje seier og første vandrepokal til odel og eie.",
    category: "growth",
  },
  {
    year: 1928,
    title: "15 etapper",
    description:
      "Stafetten utvides til 15 etapper og fire klasser (A, junior, Old Boys og fotballspillere). 39 lag, Tjalves fjerde seier.",
    category: "milestone",
  },
  {
    year: 1931,
    title: "Sverige debuterer",
    description: "Öregryte fra Göteborg blir første utenlandske lag. 5000 tilskuere på Bislett.",
    category: "milestone",
  },
  {
    year: 1933,
    title: "«Vårens vakreste eventyr»",
    description:
      "Journalist Per Foss døper Holmenkollstafetten med kallenavnet som brukes den dag i dag. 103 lag stiller, Ready vinner.",
    category: "milestone",
  },
  {
    year: 1937,
    title: "Avlyst",
    description: "Bislett stengt for ombygging.",
    category: "war",
  },
  {
    year: "1940–45",
    title: "Krigsårene",
    description: "Stafetten arrangeres ikke. Idrettsstreiken er en del av motstandskampen mot okkupasjonsstyret.",
    category: "war",
  },
  {
    year: 1946,
    title: "Tilbake etter krigen",
    description: "187 lag deltar. Örgryte vinner. Første gang landsomfattende med deltakerlag fra Nord-Norge (Vadsø Turn).",
    category: "milestone",
  },
  {
    year: 1947,
    title: "Deltakerrekord",
    description: "199 lag, 2985 løpere. 12 000 tilskuere på Bislett.",
    category: "record",
  },
  {
    year: 1953,
    title: "Tjalve bryter svensk dominans",
    description: "IK Tjalve vinner igjen etter Örgrytes syv strake seire.",
    category: "winner",
  },
  {
    year: 1965,
    title: "BUL kopierer rekorden",
    description: "IL i BUL Oslo tar sin syvende strake seier i eliteklassen.",
    category: "winner",
  },
  {
    year: 1970,
    title: "Gular vinner første gang",
    description: "Bergens-laget IL Gular tar sin første seier.",
    category: "winner",
  },
  {
    year: 1971,
    title: "Avlyst",
    description: "Bislett stengt for ombygging.",
    category: "war",
  },
  {
    year: 1972,
    title: "Kvinnelige protestløpere",
    description:
      "Gerd von der Lippe og Ingrid Ellingsen stiller under mannlige pseudonymer for laget Pedisten i protest mot utelukkelse av kvinner.",
    category: "milestone",
  },
  {
    year: 1973,
    title: "Ny deltakerrekord",
    description: "248 lag fullfører — første nye rekord siden 1947. Tjalve vinner.",
    category: "record",
  },
  {
    year: 1975,
    title: "Egen kvinneklasse",
    description: "Etter press både utenfra og innenfra IK Tjalve opprettes egen klasse for kvinner. IL Tyrving vinner de fem første utgavene.",
    category: "milestone",
  },
  {
    year: 1976,
    title: "Bedriftsklasse for menn",
    description: "Politiet IL, Trondheim, vinner som første bedriftslag.",
    category: "milestone",
  },
  {
    year: 1980,
    title: "660 lag, 9900 deltakere",
    description: "BUL bryter Tyrvings seiersrekke. Oslo-klubben blir første til å vinne både menn og kvinner samme år.",
    category: "record",
  },
  {
    year: 1982,
    title: "Bedriftsklasse for kvinner",
    description: "Moelven Brug vinner første utgave. Mosjonsklassene starter på St. Hanshaugen.",
    category: "milestone",
  },
  {
    year: 1984,
    title: "Over 1000 lag",
    description: "BUL setter løyperekord 46:24. Eidsvåg blir første kvinnelag under 57 minutter (56:44).",
    category: "record",
  },
  {
    year: 1990,
    title: "29 445 løpere",
    description: "1963 lag fullfører. Oslo Politis IL setter bedriftsrekord 49:57.",
    category: "record",
  },
  {
    year: 1991,
    title: "Over 2000 lag",
    description: "For første gang fullfører mer enn 2000 lag stafetten.",
    category: "record",
  },
  {
    year: 1993,
    title: "Største deltakelse",
    description: "2289 lag og 34 335 løpere fullfører — stafettens hittil største deltakelse.",
    category: "record",
  },
  {
    year: 1994,
    title: "Bayer Leverkusen vinner",
    description: "Første vinnerlag utenfor Skandinavia (45:14). BUL setter ny kvinnerekord 54:51.",
    category: "winner",
  },
  {
    year: 1995,
    title: "Miksklasse",
    description: "Miksklasse arrangeres for første gang. BUL vinner både menn og kvinner.",
    category: "milestone",
  },
  {
    year: 1999,
    title: "Utenlandsk seier i kvinneklassen",
    description: "Hässelby SK blir første utenlandske lag som vinner kvinneklassen. Miksklassen deles i to.",
    category: "winner",
  },
  {
    year: 2003,
    title: "Tjalve vinner kvinneklassen",
    description: "Tjalve vinner kvinneklassen for første gang. Ca. 42 700 lag og 630 800 løpere har til nå fullført Holmenkollstafetten.",
    category: "winner",
  },
  {
    year: 2004,
    title: "Bislett rives, lørdagsstart",
    description: "Stafetten starter på St. Hanshaugen og har innkomst på Rådhusplassen. Første gang på en lørdag.",
    category: "milestone",
  },
  {
    year: 2006,
    title: "Tilbake på nye Bislett",
    description: "Første individuelle klasse arrangeres.",
    category: "milestone",
  },
  {
    year: 2010,
    title: "Klasse for funksjonshemmede",
    description: "Stafetten arrangeres for 80. gang og får for første gang en klasse for funksjonshemmede.",
    category: "milestone",
  },
  {
    year: 2011,
    title: "750 000 løpere totalt",
    description:
      "Lengste etappe noe endret ved Smestad. Total lengde 18 425 m fra Bislett. Mer enn 50 000 lag og 750 000 løpere har deltatt totalt.",
    category: "record",
  },
  {
    year: 2012,
    title: "2700 lag påmeldt",
    description: "Ny påmeldingsrekord.",
    category: "record",
  },
  {
    year: 2017,
    title: "Én million deltakere",
    description: "Stafetten har gjennom historien hatt over 1 million deltakere.",
    category: "milestone",
  },
  {
    year: 2019,
    title: "Deltakerrekord",
    description: "3278 fullførte lag og 49 170 deltakere.",
    category: "record",
  },
  {
    year: "2020–21",
    title: "Avlyst",
    description: "Stafetten avlyses to år på rad grunnet korona­pandemien.",
    category: "war",
  },
  {
    year: 2023,
    title: "Hundreårsjubileum",
    description: "Knusende deltakerrekord, NRK-sending, seier til Ull/Kisa (menn) og Tjalve (kvinner). Folkefest av dimensjoner.",
    category: "milestone",
  },
  {
    year: 2024,
    title: "Verdens største løp",
    description: "4993 lag og over 70 000 deltakere — Holmenkollstafetten er årets største løp i verden.",
    category: "record",
  },
  {
    year: 2026,
    title: "Ny rekord: 5500 lag",
    description:
      "Over 5500 lag og mer enn 70 000 løpere stiller til start. Ull/Kisa tar 4. strake i menn elite, Vidar setter ny løyperekord i kvinner elite.",
    category: "record",
  },
];
