// All-class results across years, indexed as results[year][classCode] = Result[]
// Source: sportsidioten.no, live.ultimate.dk, friidrett1.wordpress.com, kondis.no
import type { Result } from "./results-2026";
import { mennElite2026, kvinnerElite2026 } from "./results-2026";
import { mennElite2025 } from "./results-2025";
import { mennElite2024, kvinnerElite2024 } from "./results-2024";

const r = (
  rows: Array<[number, string, string]>
): Result[] => rows.map(([rank, team, time]) => ({ rank, team, time }));

// --- 2026 ---
const mennSenior2026 = r([
  [1, "Osterøy IL", "0:52:30"],
  [2, "Brandbu IF 1", "0:52:46"],
  [3, "Strindheim IL 1", "0:52:56"],
  [4, "Bratsberg IL 1", "0:53:01"],
  [5, "Spirit friidrett 1", "0:53:16"],
  [6, "SK Vidar M Elite 2", "0:53:17"],
  [7, "Gloppen Friidrettslag", "0:53:19"],
  [8, "Ogndal IL", "0:54:00"],
  [9, "Steinkjer Friidrettsklubb 1", "0:54:05"],
  [10, "Førde Friidrett", "0:54:11"],
]);

const kvinnerSenior2026 = r([
  [1, "Strindheim IL 2", "1:02:53"],
  [2, "Sørild Friidrettsklubb 2", "1:04:53"],
  [3, "Steinkjer Friidrettsklubb 2", "1:05:19"],
  [4, "Moelven IL Friidrett", "1:05:34"],
  [5, "Konnerud IL Ski", "1:07:31"],
  [6, "Førde Friidrett kvinner", "1:07:49"],
  [7, "LYN SKI 3", "1:08:04"],
  [8, "Jølster Idrettslag – Friidrett 3", "1:08:10"],
  [9, "Asker Skiklubb 2", "1:09:03"],
  [10, "Brandbu IF 2", "1:10:45"],
]);

const mennJunior2026 = r([
  [1, "Ullensaker/Kisa IL Friidrett 3", "0:55:29"],
  [2, "Moelven IL Friidrett", "0:55:39"],
  [3, "IL i BUL 2", "0:56:40"],
  [4, "Spirit friidrett 4", "0:57:16"],
  [5, "Team Grenland ski 1", "0:57:54"],
  [6, "Nittedal IL 1", "0:58:54"],
  [7, "IK Tjalve 2", "0:59:40"],
  [8, "Ullensaker/Kisa IL Friidrett 4", "1:00:16"],
  [9, "Heming langrenn jr 1", "1:01:23"],
  [10, "Team TRY 1", "1:01:29"],
]);

const kvinnerJunior2026 = r([
  [1, "IK Tjalve 4", "1:05:09"],
  [2, "Nittedal IL 2", "1:05:55"],
  [3, "Team Grenland ski 2", "1:08:19"],
  [4, "Sweet Elite", "1:08:55"],
  [5, "Nesodden Idrettsforening", "1:10:05"],
  [6, "Heming langrenn jr 2", "1:12:41"],
  [7, "Ullensaker/Kisa IL Friidrett 8", "1:12:51"],
  [8, "Team TRY 2", "1:16:15"],
]);

const mennVeteran2026 = r([
  [1, "Spirit friidrett 5", "0:57:14"],
  [2, "Slevik IL", "0:59:06"],
  [3, "Heming Veteran", "1:01:43"],
  [4, "Ullensaker/Kisa IL Friidrett 5", "1:04:17"],
  [5, "Ål IL – Øvre Hallingdalske skiløperkompani", "1:10:12"],
]);

const kvinnerVeteran2026 = r([
  [1, "Bratsberg IL 4", "1:08:38"],
  [2, "SK Vidar K Veteran", "1:08:47"],
  [3, "Spirit friidrett 8", "1:09:36"],
  [4, "Ullensaker/Kisa IL Friidrett 9", "1:11:29"],
  [5, "Heming Veterandamer", "1:11:41"],
  [6, "IF Hellas 1", "1:16:09"],
]);

const mennSuperveteran2026 = r([
  [1, "Sankthanshaugen løpeklubb 3", "1:00:50"],
  [2, "Undheim IL 2", "1:01:51"],
  [3, "SK Vidar M Superveteran", "1:02:40"],
  [4, "Spirit friidrett 6", "1:04:30"],
]);

const kvinnerSuperveteran2026 = r([
  [1, "IF Hellas 2", "1:16:34"],
  [2, "Rustad IL 4", "1:18:17"],
  [3, "Sankthanshaugen løpeklubb 4", "1:19:05"],
  [4, "IF Hellas 3", "1:19:07"],
  [5, "Loddefjordløperne", "1:19:32"],
]);

const mennBedrift2026 = r([
  [1, "EY Herrer", "0:51:58"],
  [2, "Löplabbet Norge 3", "0:52:57"],
  [3, "Norconsult Herrer", "0:52:59"],
  [4, "Pareto Securities 1", "0:53:29"],
  [5, "Deloitte Elite Herrer", "0:53:34"],
  [6, "PwC xLos Herrer", "0:53:42"],
  [7, "Skanska Aktiv", "0:53:57"],
  [8, "KPMG Herrer Elite", "0:54:44"],
  [9, "BDO Elite Herrer", "0:55:13"],
  [10, "Arctic Menn 1", "0:55:19"],
  [11, "DNB Bil Elite 1", "0:55:30"],
  [12, "Rystad Energy Power", "0:55:33"],
  [13, "Equinor BIL Oslo Herrer", "0:55:50"],
  [14, "Multiconsult Herrer", "0:56:14"],
  [15, "AF Gruppen Herrer", "0:56:32"],
]);

const kvinnerBedrift2026 = r([
  [1, "EY Damer", "1:03:09"],
  [2, "PwC xLos Damer", "1:03:19"],
  [3, "Norconsult Kvinner", "1:05:05"],
  [4, "Oslo Politis Idrettslag", "1:05:58"],
  [5, "Deloitte Elite Damer", "1:06:00"],
  [6, "KPMG Damer Elite", "1:06:29"],
  [7, "Statnett BIL Kvinner", "1:07:46"],
  [8, "BDO Elite Kvinner", "1:08:51"],
  [9, "Advokatfirmaet Haavind 3", "1:09:07"],
  [10, "Advokatfirmaet Wiersholm 4", "1:10:00"],
]);

const mosjonMenn2026 = r([
  [1, "Tjommiene TC", "0:53:55"],
  [2, "Midt-Troms Rørservice", "0:53:56"],
  [3, "Bish på Tish x Antilope", "0:53:57"],
  [4, "Team Svimus", "0:54:19"],
  [5, "Clos Lagarto", "0:54:56"],
  [6, "Schonhowd Fysioterapi", "0:55:21"],
  [7, "Frogner Runners", "0:55:26"],
  [8, "Advokatfirmaet Haavind 1", "0:55:41"],
  [9, "Wikborg Rein BIL 1", "0:55:59"],
  [10, "Juul & Partners AS", "0:56:03"],
]);

const mosjonKvinner2026 = r([
  [1, "Löplabbet Norge 1", "0:59:41"],
  [2, "Bull Aktiv 1", "0:59:41"],
  [3, "Team Dæhlie Runner", "0:59:42"],
  [4, "Morgenklubben +", "0:59:45"],
  [5, "Kickstart Bedrift", "1:01:17"],
  [6, "Active Brands 1", "1:03:09"],
  [7, "Advokatfirmaet Arntzen Grette 3", "1:03:14"],
  [8, "SK Vidar Super Miks", "1:03:33"],
  [9, "Bull Aktiv 2", "1:04:14"],
  [10, "Visma SW Int. Fireball", "1:04:26"],
]);

const studenterMenn2026 = r([
  [1, "Janus Ski- og Løpeklubb", "0:55:02"],
  [2, "TEAM BDO NHHS herrer", "0:55:05"],
  [3, "OSI Friidrett M Student", "0:57:40"],
  [4, "NMBUI Langrenn 1", "0:58:47"],
  [5, "Lillehammer Mosjonistforening", "1:02:02"],
  [6, "Lovstafetten Oslo 1", "1:03:07"],
  [7, "Tislegård Legends", "1:06:04"],
  [8, "Liedon lukio 1", "1:06:30"],
]);

const studenterKvinner2026 = r([
  [1, "OSI Friidrett K Student", "1:06:58"],
  [2, "Forsvarets høgskole", "1:08:35"],
  [3, "TEAM BDO NHHS kvinner", "1:10:50"],
  [4, "Lovstafetten Oslo 2", "1:13:49"],
]);

const veldedige2026 = r([
  [1, "The Bardo Foundation 1", "0:54:21"],
  [2, "Team Right To Play", "0:56:00"],
  [3, "The Bardo Foundation 3", "1:00:23"],
  [4, "Gammeldalen IL", "1:05:07"],
  [5, "Beitostølen Helsesportsenter", "1:09:54"],
  [6, "Rettssenteret", "1:10:03"],
  [7, "Skiforeningen 1", "1:10:09"],
  [8, "The Bardo Foundation 4", "1:10:33"],
]);

// --- 2025 ---
const kvinnerElite2025 = r([
  [1, "Tjalve", "0:57:12"],
  [2, "SK Vidar 1", "0:58:17"],
  [3, "Varegg Fleriidrett", "0:59:20"],
  [4, "Hälle IF", "0:59:28"],
  [5, "Idrottslaget Gular", "0:59:41"],
  [6, "Ullensaker/Kisa IL Friidrett", "1:01:26"],
  [7, "SK Vidar 2", "1:01:49"],
  [8, "Raumnes & Årnes IL", "1:02:09"],
  [9, "IL i BUL", "1:03:19"],
  [10, "Tyrving IL 1", "1:03:29"],
]);

const mennSenior2025 = r([
  [1, "Tyrving IL 2", "0:52:47"],
  [2, "Haugesund IL Friidrett", "0:53:17"],
  [3, "Spirit friidrett 1", "0:53:20"],
  [4, "Ullensaker/Kisa IL Friidrett 2", "0:53:47"],
  [5, "Steinkjer Friidrettsklubb", "0:54:00"],
  [6, "Førde friidrett 1", "0:54:00"],
  [7, "Brandbu IF 1", "0:54:01"],
  [8, "Ogndal IL", "0:54:16"],
  [9, "SK Vidar MS 1", "0:54:34"],
  [10, "Asker Skiklubb 1", "0:55:07"],
]);

const kvinnerSenior2025 = r([
  [1, "Bratsberg IL 2", "1:04:31"],
  [2, "Team Hedmark Sjusjøen", "1:08:04"],
  [3, "Jølster Idrettslag", "1:08:33"],
  [4, "Rustad Idrettslag 2", "1:09:59"],
  [5, "Modum Friidrettsklubb", "1:10:24"],
  [6, "Asker Skiklubb 2", "1:10:40"],
  [7, "LYN SKI", "1:10:51"],
  [8, "Svorkmo/NOI 3", "1:11:12"],
  [9, "Brandbu IF 2", "1:11:26"],
  [10, "Ringerike Friidrettsklubb Damer", "1:12:21"],
]);

// --- 2024 ---
const mennSenior2024 = r([
  [1, "Lillehammer idrettsforening", "0:53:06"],
  [2, "Namdal Løpeklubb", "0:53:54"],
  [3, "Steinkjer Friidrettsklubb", "0:53:57"],
  [4, "spirit friidrett", "0:54:31"],
  [5, "Ullensaker/Kisa Friidrett", "0:54:38"],
  [6, "SK Vidar MS 1", "0:54:38"],
  [7, "IK Hind", "0:55:45"],
  [8, "Friidrettsklubken Orion", "0:55:49"],
  [9, "Hommelvik IL", "0:55:57"],
  [10, "Bromma IL", "0:56:05"],
]);

const kvinnerSenior2024 = r([
  [1, "STIF", "1:08:19"],
  [2, "Nesodden Idrettsforening", "1:08:33"],
  [3, "Spirit FIK", "1:08:37"],
  [4, "Bjerkreim IL 3", "1:10:28"],
  [5, "Rustad IL 3", "1:10:32"],
  [6, "Ås IL", "1:11:04"],
  [7, "Ringerike Friidrettsklubb", "1:11:31"],
  [8, "LYN SKI 3", "1:11:41"],
  [9, "Modum friidrettsklubb", "1:12:10"],
  [10, "Undheim IL", "1:12:41"],
]);

const mennJunior2024 = r([
  [1, "FIK Ren-Eng", "0:53:50"],
  [2, "Ullensaker/Kisa Friidrett", "0:54:38"],
  [3, "Nittedal IL", "0:56:55"],
  [4, "IL Gneist – Friidrett 2", "0:57:23"],
  [5, "Jølster IL", "0:58:52"],
  [6, "Step Forward Stockholm", "0:58:55"],
  [7, "Wangkers", "0:59:52"],
  [8, "Heming Langrenn Junior", "1:00:09"],
  [9, "Ullensaker/Kisa IL Friidrett", "1:00:32"],
  [10, "Team Grenland ski", "1:00:45"],
]);

// --- 2023 ---
const mennElite2023 = r([
  [1, "Ullensaker/Kisa IL Friidrett F1 1. lag", "0:48:43"],
  [2, "Idrottslaget Gular", "0:48:54"],
  [3, "Hälle IF", "0:49:38"],
  [4, "Spårvägens Fk", "0:50:53"],
  [5, "Sportsklubben Vidar", "0:50:58"],
  [6, "Gneist IL – Friidrett", "0:51:31"],
  [7, "IK Tjalve", "0:52:20"],
  [8, "Jølster IL", "0:52:47"],
  [9, "Sportsklubben Vidar II", "0:52:49"],
  [10, "Strindheim IL", "0:52:52"],
  [11, "IL Heming 1", "0:52:54"],
  [12, "Svorkmo/NOI", "0:53:25"],
  [13, "IL Varegg Fleridrett", "0:53:27"],
  [14, "Mosvik IL Friidrett", "0:53:36"],
  [15, "IF Kamp/Vestheim", "0:54:04"],
  [16, "FIK Ren-Eng", "0:54:14"],
  [17, "Rindal IL", "0:54:52"],
  [18, "LYN SKI Elite menn", "0:55:00"],
  [19, "Ullensaker/Kisa IL Friidrett F1 2. lag", "0:55:30"],
  [20, "Namdal Løpeklubb", "0:56:09"],
]);

const kvinnerElite2023 = r([
  [1, "IK Tjalve", "0:56:49"],
  [2, "Sportsklubben Vidar", "0:58:49"],
  [3, "Raumnes & Årnes IL", "1:00:16"],
  [4, "IL Varegg Fleridrett", "1:00:25"],
  [5, "Idrottslaget Gular", "1:01:10"],
  [6, "Sportsklubben Vidar II", "1:01:30"],
  [7, "Strindheim IL", "1:02:48"],
  [8, "IL i BUL", "1:04:07"],
  [9, "Sportsklubben Vidar III", "1:04:21"],
  [10, "Kjelsås IL Langrenn", "1:05:02"],
  [11, "Ullensaker/Kisa IL Friidrett F6", "1:05:20"],
  [12, "Spirit friidrett elite", "1:05:26"],
  [13, "Il Tyrving", "1:05:49"],
  [14, "FIK Ren-Eng", "1:06:41"],
  [15, "Lillehammer Idrettsforening", "1:06:55"],
  [16, "Kif-Friidrett", "1:07:09"],
  [17, "LYN SKI Elite kvinner", "1:07:42"],
  [18, "Namdal Løpeklubb", "1:09:49"],
]);

// --- 2022 ---
const mennElite2022 = r([
  [1, "IL Gular", "0:49:17"],
  [2, "Ullensaker/Kisa IL", "0:49:24"],
  [3, "IK Tjalve", "0:51:19"],
  [4, "Sportsklubben Vidar", "0:51:54"],
  [5, "Gneist IL", "0:51:54"],
  [6, "Svorkmo/NOI", "0:53:02"],
  [7, "Mosvik IL Friidrett", "0:53:28"],
  [8, "IL Varegg Fleridrett", "0:53:33"],
  [9, "Jølster IL", "0:54:21"],
  [10, "Rindal IL", "0:54:22"],
]);

const kvinnerElite2022 = r([
  [1, "Sportsklubben Vidar", "0:58:46"],
  [2, "IK Tjalve", "0:59:11"],
  [3, "IL Gular", "1:01:34"],
  [4, "IL Varegg Fleridrett", "1:01:40"],
  [5, "Raumnes & Årnes IL", "1:02:40"],
  [6, "Ullensaker/Kisa IL", "1:03:21"],
  [7, "Tyrving IL 1", "1:03:26"],
  [8, "Strindheim IL", "1:03:55"],
  [9, "Spirit friidrett elite", "1:05:00"],
  [10, "Lillehammer IF", "1:06:22"],
]);

// --- Historical podium (years where we only have top 3) ---
const mennElite2019 = r([
  [1, "IL Gular", "0:50:13"],
  // 2nd/3rd not confirmed
]);
const mennElite2018 = r([
  [1, "IL Gular", "0:50:08"],
  [2, "IK Tjalve", "0:50:45"],
  [3, "Ullensaker/Kisa 2. lag", "0:51:24"],
]);
const kvinnerElite2018 = r([
  [1, "IL i BUL", "1:00:05"],
  [2, "Strindheim IL", "1:00:39"],
]);
const mennElite2017 = r([
  [1, "IL Gular", "0:50:08"], // 18610m course
]);
const mennElite2016 = r([
  [1, "IK Tjalve", "0:50:27"],
  [2, "IL Gular", "0:51:26"],
]);
const kvinnerElite2016 = r([[1, "IK Tjalve", "0:59:37"]]);
const mennElite2015 = r([
  [1, "IK Tjalve", "0:49:55"],
  [2, "Ullensaker/Kisa IL", "0:50:54"],
  [3, "SK Vidar", "0:51:21"],
]);
const kvinnerElite2015 = r([
  [1, "SK Vidar", "1:00:10"],
  [2, "IK Tjalve", "1:01:20"],
  [3, "FIK Ren-Eng", "1:03:33"],
]);
const mennElite2014 = r([
  [1, "IK Tjalve", "0:50:06"],
  [2, "IL Gular", "0:50:26"],
  [3, "Spårvägens FK", "0:50:57"],
]);
const kvinnerElite2014 = r([
  [1, "SK Vidar", "1:00:01"],
  [2, "IL Gular", "1:02:26"],
  [3, "Strindheim IL", "1:02:35"],
]);
const mennElite2013 = r([
  [1, "IL Gular", "0:50:00"], // approx — Gular vant med 1 sek
  [2, "IK Tjalve", "0:50:01"],
  [3, "Hälle IF", "0:50:30"],
]);
const mennElite2012 = r([
  [1, "IK Tjalve", "0:50:09"],
  [2, "IL Gular", "0:50:25"],
]);
const mennElite2011 = r([
  [1, "Idrettslaget Tjalve", "0:49:48"],
  [2, "Idrottslaget Gular", "0:50:04"],
  [3, "Malmö Almänna IF", "0:50:44"],
]);
const kvinnerElite2011 = r([
  [1, "Sportsklubben Vidar", "0:58:54"],
  [2, "Idrettsklubben Tjalve", "1:00:20"],
  [3, "Idrottslaget Gular", "1:00:44"],
]);
const mennElite2010 = r([
  [1, "Idrettsklubben Tjalve", "0:48:04"],
  [2, "Idrottslaget Gular", "0:48:11"],
  [3, "Idrettslaget Skjalg", "0:48:44"],
]);
const kvinnerElite2010 = r([
  [1, "Sportsklubben Vidar 1. Lag", "0:55:31"],
  [2, "Idrottslaget Gular", "0:57:23"],
  [3, "Idrettsklubben Tjalve", "0:58:52"],
]);

export type ResultsIndex = Record<number, Partial<Record<string, Result[]>>>;

export const results: ResultsIndex = {
  2026: {
    "menn-elite": mennElite2026,
    "kvinner-elite": kvinnerElite2026,
    "menn-senior": mennSenior2026,
    "kvinner-senior": kvinnerSenior2026,
    "menn-junior": mennJunior2026,
    "kvinner-junior": kvinnerJunior2026,
    "menn-veteran": mennVeteran2026,
    "kvinner-veteran": kvinnerVeteran2026,
    "menn-superveteran": mennSuperveteran2026,
    "kvinner-superveteran": kvinnerSuperveteran2026,
    "menn-bedrift": mennBedrift2026,
    "kvinner-bedrift": kvinnerBedrift2026,
    "bedrift-mosjonslag-flest-menn": mosjonMenn2026,
    "bedrift-mosjonslag-flest-kvinner": mosjonKvinner2026,
    "menn-studenter": studenterMenn2026,
    "kvinner-studenter": studenterKvinner2026,
    "veldedige-organisasjoner": veldedige2026,
  },
  2025: {
    "menn-elite": mennElite2025,
    "kvinner-elite": kvinnerElite2025,
    "menn-senior": mennSenior2025,
    "kvinner-senior": kvinnerSenior2025,
  },
  2024: {
    "menn-elite": mennElite2024,
    "kvinner-elite": kvinnerElite2024,
    "menn-senior": mennSenior2024,
    "kvinner-senior": kvinnerSenior2024,
    "menn-junior": mennJunior2024,
  },
  2023: {
    "menn-elite": mennElite2023,
    "kvinner-elite": kvinnerElite2023,
  },
  2022: {
    "menn-elite": mennElite2022,
    "kvinner-elite": kvinnerElite2022,
  },
  2019: { "menn-elite": mennElite2019 },
  2018: { "menn-elite": mennElite2018, "kvinner-elite": kvinnerElite2018 },
  2017: { "menn-elite": mennElite2017 },
  2016: { "menn-elite": mennElite2016, "kvinner-elite": kvinnerElite2016 },
  2015: { "menn-elite": mennElite2015, "kvinner-elite": kvinnerElite2015 },
  2014: { "menn-elite": mennElite2014, "kvinner-elite": kvinnerElite2014 },
  2013: { "menn-elite": mennElite2013 },
  2012: { "menn-elite": mennElite2012 },
  2011: { "menn-elite": mennElite2011, "kvinner-elite": kvinnerElite2011 },
  2010: { "menn-elite": mennElite2010, "kvinner-elite": kvinnerElite2010 },
};

export const availableYears = Object.keys(results)
  .map(Number)
  .sort((a, b) => b - a);
