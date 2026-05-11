// Holmenkollstafetten 2026 — full class result tables
// Source: sportsidioten.no, parsed 9.-10. mai 2026
import type { Result } from "./results-2026";

const r = (rows: string): Result[] =>
  rows
    .trim()
    .split("\n")
    .map((line) => {
      const [rank, team, time] = line.split("|");
      return { rank: Number(rank), team: team.trim(), time: time.trim() };
    });

export const mennBedrift2026Full = r(`
1|EY Herrer|0:51:58
2|Löplabbet Norge 3|0:52:57
3|Norconsult Herrer|0:52:59
4|Pareto Securities 1|0:53:29
5|Deloitte Elite Herrer|0:53:34
6|PwC xLos Herrer|0:53:42
7|Skanska Aktiv|0:53:57
8|KPMG Herrer Elite|0:54:44
9|BDO Elite Herrer|0:55:13
10|Arctic Menn 1|0:55:19
11|DNB Bil Elite 1|0:55:30
12|Rystad Energy Power|0:55:33
13|Equinor BIL Oslo Herrer|0:55:50
14|Multiconsult Herrer|0:56:14
15|AF Gruppen Herrer|0:56:32
16|Sweco BIL Oslo Herrer|0:56:39
17|DNB Carnegie Elite|0:57:02
18|Intility M1|0:57:02
19|Statnett BIL Menn|0:57:18
20|Team Coop Elite Herrer|0:57:22
21|SATS Herrelag|0:57:49
22|Enora 1|0:57:53
23|Rambøll Menn elite|0:58:05
24|Norges Bank IL – Elite|0:58:06
25|Storebrand 24|0:58:18
26|ABG Sundal Collier 2|0:58:27
27|Arkwright Consulting 1|0:58:41
28|Boston Consulting Group 4|0:58:47
29|Veritas BIL 1|0:59:27
30|McKinsey & Company 3|0:59:54
31|Accenture Herrer|0:59:57
32|Dr.Dropin 2|1:00:24
33|Cognite|1:00:35
34|Ignite Elite|1:01:10
35|TINE YT|1:01:13
36|REITAN RETAIL – ELITE|1:01:15
37|Statkraft Runners|1:01:24
38|Pareto Securities 2|1:02:02
39|COWI BiL Elite|1:02:23
40|Equinor SBIL Men|1:02:37
41|Capgemini herrer|1:02:46
42|Intility M2|1:03:02
43|RSM Norge Herrer|1:03:10
44|DNB Bil Elite 2|1:03:34
45|Asplan Viak AS 4|1:04:33
46|Handelsbanken 7|1:05:00
47|Silicon Labs Energy Friendly Runners|1:05:18
48|Computas Herrer|1:05:34
49|Rystad Energy Oil|1:05:39
50|Intility M3|1:07:06
51|Tømrermester Jo Morten Hagen|1:07:14
52|Telia Herrer Elite|1:07:33
53|Texas Instruments BIL|1:07:38
54|BAMA Elite|1:07:42
55|Mandal Mur&Flis&Rør|1:08:27
56|Vraalstad AS|1:08:36
57|Å Energi 12|1:09:06
58|Pareto Securities 3|1:09:33
59|Circle K 2|1:09:43
60|Mur og Tak Proff AS|1:10:16
61|Løpende kredittvurdering|1:10:35
62|Viking Fotball|1:10:39
63|NGI Herrer|1:11:10
64|GE Healthcare 2|1:11:58
65|Pareto Securities 4|1:12:10
66|Flyt Entreprenør AS|1:12:43
67|Arkwright Consulting 2|1:13:03
68|Rørleggerhuset 2026|1:13:55
69|Ball & Jekkert|1:13:57
70|Team Feel24 1|1:13:58
71|Amedia Annonse|1:14:58
72|Eik teleport|1:16:23
73|Rystad Energy Hydrogen|1:17:21
74|Intility M5|1:17:38
75|Intility M8|1:17:53
76|Aceno|1:19:10
77|LY Entreprenør AS|1:19:21
78|Intility M7|1:19:42
79|Intility M6|1:19:44
80|UECC-ICO InFront|1:20:36
81|Intility M9|1:21:03
82|Tømrermestrene Øye og Knutsen|1:21:24
83|Øyvind Moen Prosjektadministrasjon|1:21:44
84|Intility M4|1:22:43
85|Mr fug|1:23:14
86|EBR ELEKTRO AS|1:24:23
87|Team HE|1:26:59
88|Tine Distribusjon Oslo|1:27:33
89|Lysglimt Elektro|1:27:46
90|Team EVO Elsykler|1:28:57
91|Team Memo|1:29:19
92|Kampegutta|1:36:22
`);

export const kvinnerBedrift2026Full = r(`
1|EY Damer|1:03:09
2|PwC xLos Damer|1:03:19
3|Norconsult Kvinner|1:05:05
4|Oslo Politis Idrettslag|1:05:58
5|Deloitte Elite Damer|1:06:00
6|KPMG Damer Elite|1:06:29
7|Statnett BIL Kvinner|1:07:46
8|BDO Elite Kvinner|1:08:51
9|Advokatfirmaet Haavind 3|1:09:07
10|Advokatfirmaet Wiersholm 4|1:10:00
11|Boston Consulting Group 5|1:10:00
12|DNB Bil Elite 3|1:10:04
13|Rystad Energy Wind|1:10:56
14|Sweco BIL Oslo Damer|1:11:17
15|Intility K1|1:11:22
16|SATS Kvinnelag|1:11:28
17|Multiconsult Damer|1:12:57
18|Caretec Bardujentenr|1:14:03
19|NVE 7|1:14:15
20|Capgemini damer|1:14:33
21|DNB Bil Elite 4|1:14:49
22|Equinor BIL Oslo All Girls|1:15:09
23|Arkwright Consulting 3|1:15:22
24|Skanska Aktiv Damelag|1:15:22
25|Advokatfirmaet BAHR AS 6|1:16:11
26|Storebrand 25|1:17:05
27|Statkraft Power Ladies|1:17:15
28|TINE YT Damer|1:17:41
29|Pareto Securities Kvinner|1:17:48
30|Team Coop Elite Damer|1:18:10
31|Haukeland Sykehus Idrettslag 2|1:19:16
32|AF Gruppen Kvinner|1:19:18
33|Accenture Damer|1:20:22
34|Veritas BIL 2|1:20:36
35|Asplan Viak AS 5|1:20:40
36|TEAM EYDA|1:21:19
37|St Olavs Hospital|1:21:28
38|Equinor BIL Ladies|1:21:40
39|Intility K2|1:21:58
40|RSM Norge Kvinner|1:22:21
41|NGI Damer|1:23:05
42|Computas Kvinner|1:23:26
43|Handelsbanken 8|1:24:40
44|Dr.Dropin 3|1:24:43
45|Circle K 3|1:25:25
46|IF forsikring 7|1:25:47
47|Å Energi 13|1:25:48
48|Team WoolLand|1:27:13
49|Intility K3|1:28:10
50|Cisco 4|1:28:40
51|Rystad Energy Gas|1:28:50
52|Operasjonssykepleierne SOP AHUS|1:29:23
53|Team Feel24 2|1:30:13
54|Cognite|1:30:15
55|TUA Running Crew|1:30:19
56|Sykepleierlaget Barneavdelingen Drammen|1:32:57
57|Pust og Pæs|1:33:44
58|Familiepikene|1:33:55
59|Bane NOR Jentelaget|1:34:02
60|GE Healthcare 3|1:34:42
61|Intility K4|1:35:35
62|Nyfødt Intensiv STO|1:36:21
63|Kvale Advokatfirma 1 3|1:37:53
`);

export const veldedige2026Full = r(`
1|The Bardo Foundation 1|0:54:21
2|Team Right To Play|0:56:00
3|The Bardo Foundation 3|1:00:23
4|Gammeldalen IL|1:05:07
5|Beitostølen Helsesportsenter|1:09:54
6|Rettssenteret|1:10:03
7|Skiforeningen 1|1:10:09
8|The Bardo Foundation 4|1:10:33
9|BIL Kreftforeningen 1 1|1:11:02
10|Den Norske Turistforening|1:12:14
11|Eat Pasta Run Fasta|1:13:18
12|Norsk Luftambulanse|1:14:29
13|Svanemerket|1:14:48
14|Etisk handel Norge|1:15:32
15|Verden for Kristus|1:15:34
16|Hills & Herd Immunity|1:17:31
17|Luftambulansen Lørenskog|1:17:35
18|Europabevegelsen|1:17:52
19|ZERO & Skift|1:18:21
20|Redd Barna X|1:18:41
21|NRC Flyktninghjelpen 1|1:18:55
22|The Bardo Foundation 2|1:19:10
23|Norges Røde Kors|1:19:27
24|Barnekreftforeningen|1:19:47
25|Oslo Røde Kors|1:19:51
26|Tyrili Molde/Trondheim|1:20:36
27|Nasjonalforeningen for folkehelsen|1:20:57
28|Positronets Venneforening|1:21:04
29|Norsk Folkehjelp|1:21:17
30|BIL Kreftforeningen 1 2|1:22:10
31|Leylas team – Regnskogfondet|1:22:28
32|Pandaene|1:22:36
33|Norsk elbilforening|1:22:51
34|Rektorhaugen|1:23:18
35|Heggeli Barnehjem|1:23:24
36|Parat|1:23:45
37|Grefsenlia|1:24:13
38|DNT Oslo og Omegn|1:24:25
39|Østensjø Kanvas|1:26:07
40|Norges Blindeforbund Bedriftsidrettslag|1:26:16
41|Kondis|1:27:05
42|Agenda|1:27:32
43|INTOSAI Development Initiative|1:27:58
44|Caritas Norge|1:28:19
45|Amnesty International Norge|1:28:36
46|Blå Kors Klinikk Lade|1:28:36
47|Kirkens SOS 1|1:28:42
48|Team EITI|1:29:14
49|Skiforeningen koselaget|1:29:23
50|Naturvernforbundet|1:29:48
51|LUB|1:29:50
52|Høyskolen for ledelse og teologi|1:29:59
53|Aktiv mot kreft|1:30:47
54|Norges Vel|1:31:05
55|Strømmestiftelsen|1:31:32
56|NVIO Runners|1:31:42
57|ACE (FUNKTION)|1:32:04
58|Team Europe|1:33:30
59|Paulus Sykehjem|1:35:06
60|Kirkens SOS 2|1:36:26
61|Team Dysleksi Norge|1:37:06
62|Kirkerådet|1:41:21
63|NRC Flyktninghjelpen 2|1:42:53
64|Brannmenn mot kreft- Sunnfjord Brann og Redning|1:52:31
65|Brannmenn mot kreft – Follo brannvesen IKS|1:52:31
66|Brann- og redningskolen 3|1:52:34
67|Brann- og redningskolen 1|1:52:34
68|Brann- og redningskolen 5|1:52:35
69|Brann- og redningskolen 4|1:52:35
70|Brann- og redningskolen 2|1:52:36
71|Brannmenn mot kreft – OBIL/OBRE|1:52:36
72|MOSSEREGIONEN BRANN OG REDNING|1:52:38
73|Brannmenn mot kreft|1:52:49
`);
