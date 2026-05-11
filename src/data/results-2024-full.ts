// Holmenkollstafetten 2024 — additional bedrift classes
// Source: sportsidioten.no
import type { Result } from "./results-2026";

const r = (rows: string): Result[] =>
  rows
    .trim()
    .split("\n")
    .map((line) => {
      const [rank, team, time] = line.split("|");
      return { rank: Number(rank), team: team.trim(), time: time.trim() };
    });

export const mennBedrift2024 = r(`
1|EY Herrer|0:52:23
2|PwC xLos Herrer|0:52:40
3|Norconsult Herrer 1|0:54:15
4|Deloitte Herrer Elite|0:55:22
5|DNB BIL 1|0:55:35
6|McKinsey & Company 1|0:55:40
7|Pareto Securities 1|0:55:46
8|Boston Consulting Group 1|0:55:58
9|Rystad Energy Power|0:57:06
10|BDO Elite Menn|0:57:23
11|Arctic 1|0:57:40
12|Multiconsult Herrer|0:58:27
13|Accentureherrene|0:58:36
14|StorebrandSportHerre|0:58:37
15|Statkraft Runners|0:58:38
16|Intility M1 1|0:58:41
17|Rambøll Menn elite|1:00:12
18|Norconsult Herrer 2|1:00:24
19|Cognite|1:00:47
20|TINE YT|1:00:56
21|Statnett BIL Menn 1|1:01:34
22|Å Energi BIL M|1:01:53
23|Veritas BIL|1:02:08
24|Arkwright Consulting 1|1:03:05
25|KPMG Elitelag Herrer|1:03:10
26|Råsjøen Idrettslag|1:03:22
27|CapLøp Menn|1:03:46
28|AF Gruppen Herrer|1:03:54
29|Handelsbanken 8|1:04:04
30|Fredensborg|1:04:11
31|Valkyrien Oldstars|1:05:04
32|Silicon Labs Energy Friendly Runners|1:06:18
33|Oslobygg KF – Lag 1|1:06:30
34|Aibel Asker BIL 3|1:06:38
35|NGI herrer|1:07:28
36|Texas Instruments BIL|1:08:44
37|Arctic 2|1:09:51
38|Intility M2|1:09:51
39|COWI BIL Oslo 3|1:10:03
40|Anna Asset Management|1:10:03
41|Pareto Securities 2|1:10:06
42|Nokas|1:10:09
43|Team Welhaven|1:10:47
44|Novelda UWB Runners|1:12:36
45|Ball & Jekkert|1:13:20
46|Aprila Bank 2|1:14:08
47|FLYT|1:14:49
48|Computas 2|1:14:56
49|Intility M4|1:15:22
50|GE HealhtCare 2|1:15:42
51|Tømrermester Jo Morten Hagen|1:15:45
52|Haukeland Sykehus Idrettslag 1|1:15:47
53|Eda Elektro Data Oslo AS|1:15:48
54|Magnat Center|1:16:16
55|COWI BIL Oslo 4|1:16:45
56|Xledger 1|1:17:17
57|OsloPlaza|1:17:49
58|Rystad Energy Oil|1:18:00
59|Eda Elrektro Data Romerike AS|1:18:02
60|Kinver AS|1:18:04
61|Kongsberg Discovery 1|1:18:21
62|Team Pon|1:18:34
63|Rørleggerhuset 2024|1:19:15
64|Romerike Elektro|1:20:33
65|Team Rørteft AS|1:20:51
66|ENS|1:21:48
67|Intility M5|1:21:54
68|Eker Design|1:22:11
69|Intility M3|1:22:17
70|A/S Elektrisk|1:22:18
71|Statkraft Nore bil|1:23:01
72|Helse Midt-Norge RHF|1:23:17
73|Eker Werks|1:23:18
74|EmLogic|1:23:25
75|Bane NOR 2|1:23:44
76|Muribø AS|1:23:51
77|De raske menn fra Lambertseter|1:25:18
78|Norsk Byggtjeneste AS|1:25:47
79|Røhneselmer AS avd. Lillestrøm|1:27:03
80|Team Memo|1:28:13
81|Øvre Romerike Brann og Redning|1:29:53
82|Møller Bil Kalbakken|1:32:32
83|marlink Eik teleport|1:33:26
84|Team Onepark|1:35:00
`);

export const kvinnerBedrift2024 = r(`
1|PwC xLos Damer|1:05:50
2|EY Damer|1:06:13
3|Norconsult Kvinner|1:06:33
4|Deloitte Kvinner Elite|1:07:42
5|Multiconsult Damer|1:09:46
6|Boston Consulting Group 2|1:09:59
7|Storebrand Elite Damer|1:10:38
8|DNB BIL D|1:11:16
9|KPMG Elitelag Damer|1:11:58
10|BDO Elite Kvinner|1:12:40
11|Caretec Bardujentenr|1:13:16
12|Oslo Politis Idrettslag|1:13:40
13|Accenturekvinnene|1:13:43
14|NVE 6|1:14:36
15|CapLøp Kvinner|1:15:18
16|St Olavs Hospital|1:15:52
17|Intility K1|1:16:06
18|AF Gruppen Damer|1:17:37
19|Equinor All Girls|1:18:25
20|Statnett BIL Kvinner 1|1:18:43
21|Handelsbanken 9|1:20:47
22|Å Energi BIL K|1:21:23
23|Bergenslærerne|1:21:53
24|Cisco 5|1:22:08
25|SINTEF Løperjenter|1:22:19
26|Pareto Securities Kvinner|1:23:00
27|Arkwright Consulting 2|1:23:10
28|Computas 3|1:23:55
29|NGI kvinner|1:25:13
30|Føden Rikshospitalet|1:25:23
31|COWI BIL Oslo 5|1:25:37
32|Arctic 3|1:26:18
33|Lynrask gastro|1:26:52
34|Anita Systems|1:27:54
35|Vestre Viken Barneavdelingen, Sykepleierlaget|1:29:06
36|Team FOLLESTAD DAME|1:29:37
37|Aleris sisters|1:31:58
38|GE HealhtCare 3|1:33:18
39|Bane NOR Jentelaget|1:34:33
40|Helsetøsene|1:37:46
41|Xledger 2|1:43:09
42|KRESS|1:43:19
43|Kongsberg Discovery 2|1:46:50
`);
