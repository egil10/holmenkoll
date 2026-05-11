// Holmenkollstafetten 2025 — additional classes
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

export const mennBedrift2025 = r(`
1|EY Herrer|0:51:38
2|Deloitte Herrer Elite|0:52:51
3|PwC xLos Herrer|0:53:07
4|Norconsult Herrer|0:53:31
5|Pareto Securities 1|0:53:56
6|DNB Bil Elite 1|0:54:56
7|Multiconsult herrer|0:55:04
8|Skanska Aktiv Elitelaget|0:55:12
9|KPMG AS Elite Herrer|0:55:16
10|Rystad Energy Power|0:55:40
11|McKinsey & Company 4|0:56:28
12|BDO Elite Menn|0:56:46
13|ABG Sundal Collier 2|0:56:58
14|Arkwright Consulting 1|0:57:00
15|Statnett BIL Menn|0:57:20
16|Intility M1|0:57:27
17|Statkraft Runners|0:57:53
18|Storebrand 21|0:58:45
19|Accenture 6|0:59:09
20|AF Gruppen Herrer|0:59:21
21|Capgemini 3|1:00:03
22|TINE YT|1:00:39
23|Team Coop Elite|1:01:42
24|Hydro Aktiv – AM|1:02:11
25|Rystad Energy Oil|1:02:29
26|Telia Herrer Elite|1:02:58
27|Veritas BIL 1|1:03:19
28|Rambøll Menn Elite|1:03:35
29|SEB|1:05:00
30|Silicon Labs Energy Friendly Runners|1:05:03
31|Pareto Securities 2|1:05:09
32|Intility M2|1:05:52
33|Computas Herrer|1:05:55
34|Pareto Securities 3|1:06:06
35|COWI BIL OSLO 3|1:06:24
36|NGI Herrer|1:07:33
37|Handelsbanken 7|1:09:03
38|Arkwright Consulting 2|1:09:09
39|Summa Equity|1:09:20
40|Mandal Mur&Flis|1:09:48
41|Rystad Energy Hydrogen|1:10:27
42|Team Welhaven|1:10:53
43|Å Energi BIL 1|1:11:29
44|Amedia Annonse|1:11:58
45|COWI BIL OSLO 4|1:12:18
46|Eker Design|1:12:58
47|SSY|1:13:39
48|Tømrermester Jo Morten Hagen|1:13:51
49|Intility M6|1:14:03
50|LY Entreprenør AS|1:14:03
51|Pareto Securities 4|1:14:15
52|Trailblazers|1:14:22
53|Intility M7|1:14:37
54|EDA Elektro Data Romerike AS|1:14:59
55|Rystad Energy Solar|1:15:12
56|Rørleggerhuset 2025|1:15:23
57|Team Pon 2|1:15:58
58|Intility M8|1:16:48
59|Marstrand AS|1:16:52
60|Nokas|1:17:29
61|Intility M5|1:17:34
62|Intility M3|1:17:38
63|Marlink Eik teleport|1:17:48
64|Cache Us If You Can|1:17:52
65|FLYT ENTREPRENØR AS|1:18:20
66|Intility M4|1:18:51
67|EDA Oslo|1:19:17
68|GE HealthCare 2|1:19:46
69|IdrettsPilotene|1:19:51
70|Photoncycle|1:21:02
71|OBOS Eiendomsforvaltning|1:22:16
72|Fugro 2|1:22:42
73|Mr fug|1:24:36
74|Møller Bil Kalbakken|1:24:50
75|Statement|1:25:10
76|EBR ELEKTRO AS|1:25:38
77|NORE BIL|1:26:07
78|ikkebarejobb|1:26:23
79|De raske menn fra Lambertseter|1:26:39
80|Team Memo|1:27:21
81|Fugro 1|1:27:45
82|Sony Super Sonics|1:30:45
83|Elis mosjonister|1:31:41
84|Rokea Gruppen|1:33:02
85|Røhneselmer Lillestrøm|1:35:42
86|H/S Elektro A/S|1:40:44
`);

export const kvinnerBedrift2025 = r(`
1|PwC xLos Damer|1:03:35
2|EY Damer|1:03:50
3|Norconsult Kvinner|1:04:44
4|Deloitte Kvinner Elite|1:06:42
5|KPMG AS Elite Damer|1:08:18
6|Statnett BIL Kvinner|1:09:01
7|Multiconsult damer|1:09:18
8|Oslo Politis Idrettslag|1:09:26
9|DNB Bil Elite 3|1:09:33
10|Advokatfirmaet Haavind – Kvinner Elite|1:10:16
11|BDO Elite Kvinner|1:11:06
12|Advokatfirmaet Wiersholm 1|1:11:45
13|Capgemini 4|1:14:11
14|Intility K1|1:15:02
15|Bergenslærerne|1:15:37
16|Rystad Energy Wind|1:15:38
17|Equinor All Girls|1:15:42
18|Caretec Bardujentene|1:16:06
19|Storebrand 22|1:16:43
20|Accenture 7|1:16:59
21|SINTEF Løpejentene|1:18:18
22|Arkwright Consulting 3|1:18:20
23|AF Gruppen Kvinner|1:19:19
24|Å Energi BIL 2|1:20:26
25|TINE YT Damer|1:20:26
26|Veritas BIL 2|1:20:59
27|Pareto Securities Kvinner|1:22:06
28|St Olavs Hospital|1:23:35
29|Lag 1 2|1:23:37
30|Computas Kvinner|1:24:41
31|Intility K3|1:25:00
32|COWI BIL OSLO 5|1:25:31
33|Handelsbanken 8|1:26:06
34|Infeksjonskrigerne|1:27:00
35|Føden Rikshospitalet|1:28:29
36|Sykepleierlaget Barneavdelingen Drammen|1:28:57
37|LUIsvett 2|1:31:29
38|NGI Damer|1:32:02
39|Gynekologisk poliklinikk- Anonymus|1:33:13
40|Team FOLLESTAD DAME|1:33:45
41|Bane NOR Jentelaget|1:33:52
42|Operasjonssykepleierne SOP Ahus|1:35:39
43|Høyer Byporten x Storo|1:36:51
44|Intility K2|1:36:52
45|BVT|1:37:23
46|Cisco 4|1:38:17
47|GE HealthCare 3|1:41:36
48|Anita Systems|1:42:46
49|TUA Runners|1:46:37
50|Kvinneklinikken, Lillehammer|1:47:59
51|Team NSF, Tinn Kommune|2:02:39
`);

export const mennJunior2025 = r(`
1|Ullensaker/Kisa IL Friidrett 3|0:55:56
2|Tullinge friidrott 1|0:56:31
3|Nittedal IL 1|0:56:41
4|IL i BUL|0:57:39
5|Team Grenland ski 1|0:59:05
6|IK Tjalve|1:00:25
7|IL TRY 1|1:00:53
8|Heming Langrenn jr 1|1:01:17
9|Ullensaker/Kisa IL Friidrett 4|1:01:48
10|Heming Langrenn jr 2|1:03:48
`);

export const kvinnerJunior2025 = r(`
1|Nittedal IL 2|1:07:35
2|Markane IL|1:08:23
3|Ullensaker/Kisa IL Friidrett 8|1:08:55
4|IK Tjalve|1:09:56
5|Heming Langrenn jr 3|1:10:51
6|Team Grenland ski 2|1:12:10
7|IL TRY 2|1:16:35
`);

export const mennVeteran2025 = r(`
1|Spirit friidrett|0:57:23
2|Sankthanshaugen løpeklubb 2|0:58:30
3|Slevik IL|0:59:57
4|Heming Veteran|1:00:28
5|Ullensaker/Kisa IL Friidrett 5|1:03:05
6|Lillehammer IF 2|1:05:31
7|Ås IL 2|1:07:22
8|Kristiansand løpeklubb 3|1:07:55
`);

export const kvinnerVeteran2025 = r(`
1|SK Vidar Veteran K|1:08:22
2|Lillehammer IF 4|1:09:38
3|Spirit friidrett|1:09:50
4|Ullensaker/Kisa IL Friidrett 9|1:10:57
5|Heming Veterandamer|1:12:54
6|Sankthanshaugen løpeklubb 4|1:15:39
7|If Hellas 1|1:22:49
`);

// Mosjon menn — top 300 of ~570
const mosjonMenn2025data = `
1|Raskere enn banken|0:51:56
2|Stampa Run Club|0:54:25
3|Tjommiene TC|0:54:36
4|Wikborg Rein BIL 1|0:54:48
5|Team Svimus|0:54:58
6|Frogner Runners|0:55:00
7|Löplabbet A-lag|0:55:22
8|Advokatfirmaet BAHR AS 1|0:55:24
9|Advokatfirmaet Haavind – Herrer Elite|0:55:39
10|Advokatfirmaet Wiersholm 2|0:55:44
11|Midt-Troms Rørservice|0:55:44
12|Oddvar Brås utvalgte|0:55:58
13|Schonhowd Fysioterapi|0:56:09
14|Team Baker Hansen|0:56:29
15|Arctic 1 1|0:57:00
16|Juul & Partners AS|0:57:12
17|Team Furutangen 1 – Åsen Elite|0:57:24
18|Equinor BIL Oslo|0:57:38
19|Team Thommessen 5|0:58:06
20|Driv Trening|0:58:12
21|Bagges|0:58:49
22|Bane NOR 1|0:58:50
23|Obligo|0:59:09
24|PwC Deals 1|0:59:19
25|Equinor SBIL Mix 1 1|0:59:22
26|Bingen|0:59:23
27|Oslo Economics 1|0:59:23
28|Astrup Fearnley 1|0:59:26
29|EY BIL FSO 1|0:59:27
30|Eidsiva & Hafslund BIL 1|0:59:42
31|Industrifinans|0:59:52
32|Ferd 1 1|0:59:52
33|Glipptak IL|0:59:52
34|Ignite Elite|1:00:03
35|EY BIL Energy 1 2|1:00:06
36|Capgemini Invent 1|1:00:14
37|ASKO MIDT-NORGE 1|1:00:36
38|Cisco 1|1:00:51
39|Sparebank 1 Markets 1|1:00:54
40|KPMG AS CFO A(re) 1|1:00:56
41|Bekk 1|1:00:58
42|Flekkerøy Løpeklubb|1:00:58
43|PwC Trust 3 #1|1:01:08
44|Bøler IF Friidrett Mix|1:01:11
45|Young Solutioneers 1|1:01:12
46|BARDU BÅL OG STIFINNERLAG|1:01:25
47|DNB Markets|1:01:26
48|Team Kiropraktor|1:01:28
49|Malling Elite 1|1:01:28
50|Clarksons Platou AS 2|1:01:33
51|Cognite|1:01:39
52|EY BIL RISK|1:01:47
53|Team Vingrom|1:01:50
54|Bonum|1:01:56
55|Fredensborg Fritid|1:02:01
56|Sokna/Støren|1:02:08
57|Solution Seeker|1:02:10
58|KLP 1|1:02:14
59|KPMG Deals 1|1:02:15
60|Altor|1:02:15
61|PwC Trust 1 #1|1:02:18
62|Fiskebeinern SK|1:02:19
63|HELP 1|1:02:22
64|Sopra Steria 1|1:02:25
65|Netlight 1|1:02:25
66|Optio Incentives 1 1|1:02:39
67|EY BIL EY-Parthenon 1|1:02:45
68|Schjødt 1|1:02:55
69|DNB Asset Management 1|1:02:58
70|Fred. Olsen & Co. Sportsklubb 1|1:03:03
71|KPMG AS Law I|1:03:03
72|Athene Accounting 1|1:03:03
73|ASKO VEST 1|1:03:04
74|Norges Bank IL|1:03:08
75|Taktisk Tempo|1:03:10
76|Vipps, så går det fort!|1:03:14
77|DNB Carnegie, Investment Banking 1|1:03:15
78|Netcompany 1|1:03:17
79|Random Runners|1:03:22
80|UiO-SMN Turbo|1:03:29
81|Bouvet 1 Gulltoppingvin|1:03:40
82|SpareBank 1 Nord-Norge 1|1:03:40
83|DNB Private Banking 1|1:03:47
84|Colliers Norway|1:03:47
85|20 kil|1:03:51
86|Metier 1|1:03:52
87|TechnipFMC 1|1:03:52
88|GuttaGuttaGutta|1:03:56
89|Politihøgskolen Oslo 1|1:03:59
90|Asplan Viak 1|1:04:01
91|BW Powerhouse|1:04:02
92|Argentum|1:04:03
93|EY BIL AI & Data 1|1:04:04
94|Aker BP 1|1:04:09
95|Bain & Company 1|1:04:10
96|HÖEGH 1|1:04:10
97|TORSHOV SPORT RUNNERS 1|1:04:11
98|Cardo Partners|1:04:13
99|Kristelig Gymnasium|1:04:14
100|Ludo klubben grei|1:04:18
101|Knowit Management Consulting|1:04:19
102|NIH Streberne 1|1:04:21
103|IF Forsikring 1|1:04:25
104|KL Running|1:04:28
105|FOAK 1|1:04:33
106|Appfarm 1|1:04:34
107|Scan Survey AS|1:04:36
108|Tripletex AS 1|1:04:38
109|Kvale Advokatfirma 1|1:04:41
110|OUS Ullevål og Aker Ortopedene|1:04:46
111|KPMG Large Enterprise 1|1:04:50
112|Antler|1:04:51
113|Aider Elite|1:04:52
114|PHS Running Club|1:04:53
115|Team Celsia|1:04:55
116|FOSS Sport|1:04:57
117|DNB Trondheim Elite|1:04:58
118|Handelshøyskolen BI 1|1:05:01
119|twoday 1|1:05:02
120|BDO Romerike 1|1:05:03
121|Economic Mind|1:05:04
122|Advokatfirmaet CLP 1|1:05:14
123|Heimdall Power|1:05:23
124|Gjensidige Sport Oslo|1:05:28
125|(©NTB)|1:05:33
126|Sør-Vekkom Lauparlag 1|1:05:35
127|Kristelig Gymnasium Elever|1:05:37
128|Team Einar|1:05:38
129|Kearney|1:05:42
130|Trafalgar|1:05:43
131|PwC Consulting 1|1:05:48
132|Dr.Dropin 1|1:05:50
133|Runtime Error|1:05:53
134|Echo Oslo|1:05:53
135|Spenst Sørumsand|1:05:54
136|ASKO OSLOFJORD 1|1:05:55
137|Pareto Bank 1|1:05:58
138|Daimyo AS|1:05:59
139|Helsedirektoratet S-laget|1:06:00
140|UiO Matematisk institutt|1:06:07
141|OUS Oncorunners|1:06:07
142|SANDS Advokatfirma DA|1:06:09
143|Statsbygg BIL 1|1:06:09
144|Amer Sports|1:06:11
145|Advokatfirmaet Føyen 1|1:06:17
146|Avosome|1:06:20
147|OHGutta|1:06:22
148|ASKO HEDMARK 1|1:06:23
149|BearingPoint 1|1:06:27
150|mnemonic mobil 1.0|1:06:32
151|Framsikt AS|1:06:38
152|Ultimate Nordic AS|1:06:43
153|KIWI 1|1:06:43
154|Deloitte 25|1:06:43
155|Prokura|1:06:48
156|Arctic 1 2|1:06:50
157|Söderberg & Partners 1 1|1:06:52
158|Hovedorganisasjonen Virke 1|1:06:55
159|Deloitte 1|1:06:57
160|KPMG AS Customer & Operations 1|1:06:57
161|BDO Business Services – Digital 1|1:06:57
162|Gard AS 1|1:06:58
163|EY BIL Finance Consulting|1:06:59
164|EY Trondheim|1:07:00
165|Advokatfirmaet Thallaug|1:07:00
166|SK Holding 2|1:07:01
167|Aker BP 2|1:07:03
168|CBRE Elite|1:07:03
169|Høydalsmo Idrottslag|1:07:06
170|Kommunalbanken|1:07:06
171|Odin Forvaltning|1:07:07
172|KWC|1:07:10
173|Askeladden & Co – Elite|1:07:12
174|Valler vgs|1:07:13
175|KPMG AS ADC 1|1:07:17
176|Mittanbud 1|1:07:20
177|Rambøll Geolaget|1:07:24
178|Domstolene i Oslo 1|1:07:25
179|4Subsea|1:07:37
180|KLP 7|1:07:38
181|KLDBIL – Klima- og miljødepartementet|1:07:40
182|PwC Tromsø|1:07:44
183|Team Jordanes 1|1:07:46
184|PwC Trust 2 #1|1:07:47
185|Geodata BIL 1|1:07:48
186|Equinor SBIL Mix 1 2|1:07:49
187|Holte Consulting|1:07:52
188|Valle Hovin videregående skole|1:07:52
189|KDA Advanced Solutions 1|1:07:52
190|Nordea BB Region Oslo|1:07:54
191|XXL Sport og Villmark – HQ|1:07:56
192|Knowit Experience Oslo|1:07:58
193|Oslo Handelsgymnasium-Lærerne|1:07:59
194|Deloitte 17|1:07:59
195|Unloc|1:07:59
196|ASKO ØST 1|1:07:59
197|FOPIL – IØPS|1:08:01
198|Equinor Deep and Harsh|1:08:02
199|OmniMod|1:08:06
200|Aibel Asker BIL 2|1:08:10
`;

export const mosjonMenn2025 = r(mosjonMenn2025data);

const mosjonKvinner2025data = `
1|Colosseum Tannlege 4|0:55:53
2|Fiskebeinern SK|0:57:24
3|Team Dæhlie Runners|0:58:52
4|Advokatfirmaet Arntzen 1|1:02:40
5|Visma SW Int. Fireball|1:04:18
6|NTG Bærum 1|1:04:19
7|reMarkable 5|1:04:20
8|Ullevål og Tåsen Fysioterapi og Trening|1:04:44
9|CMS Kluge Advokatfirma 1|1:05:33
10|Diakonhjemmet Sykehus Elite Mix|1:05:38
11|Maritime Advisory 1|1:06:34
12|Advokatfirmaet BAHR AS 2|1:07:21
13|Dønski idrettsfag|1:07:25
14|Lovstafetten Bergen|1:07:28
15|Ruter – Satsebussen|1:08:04
16|Brækhus Advokatfirma 1|1:08:40
17|Norvestor Sport|1:08:40
18|Kickstart Bedrift|1:08:40
19|Folkehelseinstituttet BIL 1|1:08:50
20|Lillestrøm muskel- og leddklinikk|1:08:53
21|Idrettens Helsesenter|1:09:06
22|Powered by GroupM|1:09:06
23|Hjertemedisin Ullevål|1:09:26
24|OBF Lag 1|1:09:31
25|BEST Helse|1:09:33
26|Sinsen skole|1:09:40
27|Politihøgskolen Oslo 2|1:09:52
28|Active Brands 1|1:10:13
29|Grønt Punkt Norge|1:10:24
30|Gnist Trening og Helse|1:10:30
31|Team Thommessen 1|1:10:43
32|Bymiljøetaten 1|1:10:45
33|SpareBank 1 Sør-Norge Lag 1|1:10:55
34|Nydalen DPS|1:10:59
35|Berg AKS|1:11:21
36|DNB BMN Hverdagsbank Deltid|1:11:21
37|ABEL Helse|1:11:22
38|Advokatfirmaet Selmer 1 2|1:11:27
39|twoday 4|1:11:51
40|Team Flyge|1:12:02
41|Medisin Bærum, VVHF|1:12:06
42|LPO arkitekter|1:12:11
43|OUS Blodsykdommer 1|1:12:17
44|Advokatfirmaet Grette 1|1:12:18
45|Lund & Co|1:12:19
46|reMarkable 4|1:12:21
47|IL i BUL|1:12:23
48|Huseby skole|1:12:25
49|Hvilepuls|1:12:25
50|Team Samba|1:12:27
51|Orkla 7|1:12:37
52|Oslo Kommunale Legevakt|1:12:44
53|Manglerud skole|1:12:44
54|EY BIL Energy 1 1|1:12:45
55|Reisekontoret|1:12:51
56|Volvat NIMI|1:12:59
57|Tonsenhagen Superstars|1:13:00
58|Martina Hansens Hospital|1:13:02
59|Hurtigruten – Havets Helteløpere|1:13:04
60|PwC Bergen 1 2|1:13:04
61|EY BIL SCO|1:13:06
62|Puls & Pes|1:13:12
63|Orkla Snacks Norge|1:13:13
64|Arbeids- og inkluderingsdepartementet|1:13:24
65|Team Zalaris|1:13:25
66|Moniker Sport x On|1:13:25
67|TORSHOV SPORT RUNNERS 2|1:13:26
68|Norad rød|1:13:28
69|Anestesilegene på Rikshospitalet|1:13:35
70|Unilabs|1:13:36
71|Advokatfirmaet Arntzen 3|1:13:40
72|Høyenhall skole|1:13:44
73|Run for rep|1:13:47
74|Miljødirektoratet BIL|1:13:48
75|Team Johaug|1:13:49
76|Visma Flyt Happy Racers|1:13:51
77|Braathens SAFE|1:13:56
78|Aker Solutions FunRun 1|1:13:57
79|Moloklinikken|1:14:02
80|Vulvakameratene|1:14:09
81|Trege Leger|1:14:09
82|Hovseter Skole|1:14:24
83|EY BIL Business Transformation|1:14:25
84|Fingerspitzgefühlen|1:14:28
85|Tåsen skole|1:14:28
86|Orkla 6|1:14:31
87|Maxpuls|1:14:38
88|Sats Colosseum PT|1:14:40
89|Kastellet skole|1:14:42
90|Påtale Innlandet politidistrikt|1:14:45
91|Lovlig gode løpere|1:14:49
92|A-lab|1:14:50
93|TROG|1:15:01
94|Tonsillathon|1:15:08
95|DNB Consulting|1:15:09
96|TV 2 Marked|1:15:12
97|Korsvoll skole|1:15:12
98|Landbruksdirektoratet 1|1:15:13
99|Gullaget|1:15:15
100|Unicare Jeløy|1:15:16
101|FSI|1:15:20
102|IEMR|1:15:29
103|Teleplan Globe 2|1:15:30
104|Maritime Advisory 3|1:15:32
105|Studentsamskipnaden SiO 1|1:15:34
106|Oslo politidistrikt – drapsseksjonen|1:15:35
107|Bouvet 5 Hvitkinnpingvin|1:15:37
108|Advokatfirmaet Haavind – Morolaget|1:15:39
109|Ræder Bing Advokatfirma 2|1:15:42
110|Statens vegvesen BIL O & A 1|1:15:44
111|NVE 4|1:15:44
112|Pir2|1:15:45
113|Odontologen UiB|1:15:47
114|Barnelegene Drammen|1:15:49
115|ForMotion Ortopedi|1:15:51
116|Nukleærmedisin OUS|1:15:55
117|Nordea SB&E|1:16:03
118|CEMAsys|1:16:05
119|Vestre Viken redd Steves Gym|1:16:13
120|Team Norrøna|1:16:17
121|PHS Oslo 3|1:16:19
122|Løren skole 2|1:16:19
123|Wikborg Rein BIL 3|1:16:20
124|ABG Sundal Collier 1|1:16:21
125|Sykehuset Telemark – Kirurgisk avdeling|1:16:22
126|Team bettongbein|1:16:23
127|Handelsbanken 4|1:16:23
128|Advokatfirmaet Molteberg Nilsen|1:16:24
129|Diplom-Is 1 2|1:16:26
130|Arbeidsforskningsinstituttet|1:16:29
131|Nordea Liv|1:16:31
132|Oslo Tannlegeforening 1|1:16:34
133|Smestadlærerne|1:16:35
134|TINE Industri|1:16:36
135|Bane NOR Juridiske Joggere|1:16:37
136|Rådtassene 2|1:16:39
137|Jordal Skole|1:16:40
138|Institutt for samfunnsforskning|1:16:41
139|Spinal Cord Runners|1:16:41
140|Handelsbanken 5|1:16:46
141|reMarkable 3|1:16:46
142|Team Jordanes 2|1:16:56
143|Bjølsen skole|1:16:59
144|Abelia|1:16:59
145|Aker Solutions Legal & Friends|1:17:00
146|Katastrofealarm|1:17:00
147|Advokatfirmaet CLP 2|1:17:01
148|Sats Lillestrøm|1:17:02
149|Lambertseter Kritt & Kondis|1:17:10
150|Ro Sommernes Advokatfirma DA|1:17:12
`;

export const mosjonKvinner2025 = r(mosjonKvinner2025data);
