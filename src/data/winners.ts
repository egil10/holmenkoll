// Holmenkollstafetten — historical winners
// Sources: holmenkollstafetten.no/historie, no.wikipedia.org/wiki/Holmenkollstafetten,
// snl.no/Holmenkollstafetten, friidrett1.wordpress.com, sportsidioten.no, NRK.no
// Values without verified time are marked as null.

export type Winner = {
  year: number;
  team: string;
  time: string | null;
  notes?: string;
};

export type ClassWinners = {
  menn: Winner[];
  kvinner: Winner[];
};

export const winners: ClassWinners = {
  // Men's elite — winning team since 1923 (skipped years: 1937, 1940-1945, 1971, 2020, 2021)
  menn: [
    { year: 1923, team: "IK Tjalve", time: "46:01.8", notes: "Første utgave, 10 lag" },
    { year: 1924, team: "IK Tjalve", time: null },
    { year: 1925, team: "IK Tjalve", time: null },
    { year: 1926, team: "IK Tjalve", time: null },
    { year: 1927, team: "IK Tjalve", time: "44:47" },
    { year: 1928, team: "IK Tjalve", time: null, notes: "Utvidet til 15 etapper" },
    { year: 1929, team: "IK Tjalve", time: null },
    { year: 1930, team: "Tjalve", time: null },
    { year: 1931, team: "IK Tjalve", time: null },
    { year: 1932, team: "Tjalve", time: null },
    { year: 1933, team: "Ready", time: null, notes: "Per Foss døper løpet «Vårens vakreste eventyr»" },
    { year: 1934, team: "Ready", time: null },
    { year: 1935, team: "Tjalve", time: null },
    { year: 1936, team: "Oslo Turn", time: null },
    { year: 1938, team: "Oslo Turn", time: null },
    { year: 1939, team: "Ready", time: null },
    { year: 1946, team: "Örgryte IS", time: null, notes: "Første etterkrigsår, 187 lag" },
    { year: 1947, team: "Örgryte IS", time: null, notes: "199 lag, 2985 løpere" },
    { year: 1948, team: "Örgryte IS", time: null },
    { year: 1949, team: "Örgryte IS", time: null },
    { year: 1950, team: "Örgryte IS", time: null },
    { year: 1951, team: "Örgryte IS", time: null },
    { year: 1952, team: "Örgryte IS", time: null },
    { year: 1953, team: "IK Tjalve", time: null, notes: "Bryter svensk dominans" },
    { year: 1965, team: "IL i BUL", time: null, notes: "Syv strake seire 1959-1965" },
    { year: 1970, team: "IL Gular", time: null, notes: "Bergens-laget vinner for første gang" },
    { year: 1973, team: "IK Tjalve", time: null, notes: "248 lag, ny rekord" },
    { year: 1980, team: "IL i BUL", time: null, notes: "660 lag, 9900 deltakere" },
    { year: 1982, team: "Minerva", time: null },
    { year: 1984, team: "IL i BUL", time: "46:24", notes: "Løyperekord" },
    { year: 1988, team: "IL Gular", time: "45:39" },
    { year: 1991, team: "IL i BUL", time: null },
    { year: 1993, team: "IL i BUL", time: null, notes: "2289 lag, 34335 løpere" },
    { year: 1994, team: "Bayer Leverkusen", time: "45:14", notes: "Første ikke-skandinaviske vinner" },
    { year: 1995, team: "IL i BUL", time: null },
    { year: 2003, team: "Sparta", time: null, notes: "Eneste danske vinnerlag" },
    { year: 2004, team: "Malmö AIF", time: null, notes: "Stafetten flyttet til lørdag, start St. Hanshaugen" },
    { year: 2005, team: "IL Gular", time: "47:41" },
    { year: 2006, team: "IL Gular", time: "49:59", notes: "Tilbake på nye Bislett" },
    { year: 2007, team: "Hammarby IF", time: "49:01" },
    { year: 2008, team: "Malmö AIF", time: "48:30" },
    { year: 2009, team: "IL Gular", time: "49:37" },
    { year: 2010, team: "IK Tjalve", time: "48:04", notes: "80. utgave" },
    { year: 2011, team: "IK Tjalve", time: null },
    { year: 2012, team: "IK Tjalve", time: null },
    { year: 2013, team: "IK Tjalve", time: null },
    { year: 2014, team: "IK Tjalve", time: null },
    { year: 2015, team: "IK Tjalve", time: null },
    { year: 2016, team: "IK Tjalve", time: "50:28" },
    { year: 2017, team: "IL Gular", time: null },
    { year: 2018, team: "IL Gular", time: null },
    { year: 2019, team: "IL Gular", time: null, notes: "3278 lag, 49170 deltakere" },
    { year: 2022, team: "IL Gular", time: "49:18", notes: "Stafetten tilbake etter pandemi" },
    { year: 2023, team: "Ullensaker/Kisa IL Friidrett", time: "48:43", notes: "Hundreårsjubileum" },
    { year: 2024, team: "Ullensaker/Kisa IL Friidrett", time: "49:16", notes: "4993 lag, 70 000+ deltakere" },
    { year: 2025, team: "Ullensaker/Kisa IL Friidrett", time: "48:59" },
    { year: 2026, team: "Ullensaker/Kisa IL Friidrett", time: "48:45", notes: "4. strake seier, ni nye etapperekorder" },
  ],

  // Women's elite — established as own class in 1975
  kvinner: [
    { year: 1975, team: "IL Tyrving", time: null, notes: "Første kvinneklasse" },
    { year: 1976, team: "IL Tyrving", time: null },
    { year: 1977, team: "IL Tyrving", time: null },
    { year: 1978, team: "IL Tyrving", time: null },
    { year: 1979, team: "IL Tyrving", time: null },
    { year: 1980, team: "IL i BUL", time: null, notes: "Bryter Tyrvings seiersrekke" },
    { year: 1982, team: "Raufoss IL", time: null },
    { year: 1984, team: "Eidsvåg", time: "56:44", notes: "Første kvinnelag under 57 minutter" },
    { year: 1988, team: "BFG Fana", time: "55:11" },
    { year: 1994, team: "IL i BUL", time: "54:51", notes: "Løyperekord" },
    { year: 1995, team: "IL i BUL", time: null },
    { year: 1999, team: "Hässelby SK", time: null, notes: "Første utenlandske vinnerlag i kvinneklassen" },
    { year: 2003, team: "IK Tjalve", time: null, notes: "Tjalves første seier i kvinneklassen" },
    { year: 2004, team: "SK Vidar", time: null },
    { year: 2005, team: "IK Tjalve", time: "55:49" },
    { year: 2006, team: "SK Vidar", time: "57:23" },
    { year: 2007, team: "IK Tjalve", time: "57:42" },
    { year: 2008, team: "SK Vidar", time: null },
    { year: 2009, team: "SK Vidar", time: null },
    { year: 2010, team: "SK Vidar", time: null },
    { year: 2011, team: "SK Vidar", time: null },
    { year: 2012, team: "SK Vidar", time: null },
    { year: 2013, team: "SK Vidar", time: null },
    { year: 2014, team: "SK Vidar", time: null },
    { year: 2015, team: "SK Vidar", time: null, notes: "Åtte strake seire — rekord" },
    { year: 2016, team: "IK Tjalve", time: "59:37" },
    { year: 2017, team: "IK Tjalve", time: "59:38" },
    { year: 2018, team: "IL i BUL", time: "60:06" },
    { year: 2019, team: "IK Tjalve", time: "60:27" },
    { year: 2022, team: "SK Vidar", time: "58:47" },
    { year: 2023, team: "IK Tjalve", time: "56:50", notes: "Hundreårsjubileum" },
    { year: 2024, team: "IK Tjalve", time: "58:13" },
    { year: 2025, team: "IK Tjalve", time: null },
    { year: 2026, team: "SK Vidar", time: "55:42", notes: "18. seier, ny løyperekord" },
  ],
};

export const cancelledYears: Array<{ year: number; reason: string }> = [
  { year: 1937, reason: "Bislett stengt for ombygging" },
  { year: 1940, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1941, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1942, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1943, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1944, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1945, reason: "Andre verdenskrig / idrettsstreiken" },
  { year: 1971, reason: "Bislett stengt for ombygging" },
  { year: 2020, reason: "Korona­pandemien" },
  { year: 2021, reason: "Korona­pandemien" },
];
