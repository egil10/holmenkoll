// Holmenkollstafetten 2026 — Bedrift & mosjonslag flest kvinner (top 1-300)
// Source: sportsidioten.no
import type { Result } from "./results-2026";

const data = `
1|Löplabbet Norge 1|0:59:41
2|Bull Aktiv 1|0:59:41
3|Team Dæhlie Runner|0:59:42
4|Morgenklubben +|0:59:45
5|Kickstart Bedrift|1:01:17
6|Active Brands 1|1:03:09
7|Advokatfirmaet Arntzen Grette 3|1:03:14
8|SK Vidar Super Miks|1:03:33
9|Bull Aktiv 2|1:04:14
10|Visma SW Int. Fireball|1:04:26
11|Idrettens Helsesenter|1:05:15
12|Folkehelseinstituttet BIL 1|1:05:19
13|Sprint Consulting 1|1:06:29
14|DNV Maritime Advisory 2|1:06:31
15|Lillestrøm Muskel- og Leddklinikk|1:06:47
16|Team Flyge|1:07:13
17|Team Thommessen 1|1:07:29
18|SAS Ground Handling|1:07:45
19|Studentsamskipnaden SiO 3|1:09:01
20|Eidsiva & Hafslund BIL 15|1:09:03
21|Orkla Foods Norge 1 5|1:09:24
22|KL Running 2|1:09:34
23|Eidsiva & Hafslund BIL 16|1:09:37
24|Moloklinikken|1:10:05
25|NTG Bærum lag 1|1:10:12
26|Orkla Foods Norge 1 4|1:10:17
27|Advokatfirmaet Lund & Co DA|1:10:34
28|Refstad skole 1|1:10:38
29|DARK|1:10:39
30|ABEL Helse 1|1:10:42
31|Norges Friidrettsforbund|1:10:43
32|Studentsamskipnaden SiO 2|1:10:45
33|EY BIL Business Transformation|1:10:49
34|Telenor Infrastructure|1:10:51
35|Interfrukt 1|1:10:53
36|Advokatfirmaet Arntzen Grette 4|1:11:04
37|SATS Bislett|1:11:19
38|Sats Colosseum PT|1:11:22
39|Advokatfirmaet Ness Lundin|1:11:28
40|Advokatfirmaet BAHR AS 5|1:11:51
41|Manglerud skole|1:11:55
42|Enora 6|1:11:56
43|Azets Sportsklubb|1:12:03
44|OUS Blodsykdommer 1|1:12:04
45|A-laget, FI, NFD 1 NFD 2 3|1:12:09
46|Purkene|1:12:19
47|Bymiljøetaten 1|1:12:22
48|Ræder Bing advokatfirma 2|1:12:22
49|ProCardio QRS – Quick Runners Squad|1:12:25
50|Lokalsjappa|1:12:37
51|Ro Sommernes advokatfirma|1:12:48
52|Voldsløkka skole|1:12:48
53|Martina Hansens Hospital|1:12:50
54|Fartsovertredelse|1:12:51
55|LPO Arkitekter|1:13:01
56|Arbeids- og inkluderingsdepartementet|1:13:03
57|Disen Dream Team|1:13:09
58|Norsk Kardiologisk ungdomsskole|1:13:14
59|Econa|1:13:17
60|Bane NOR – Verdens beste prosjektenhet Region Midt|1:13:17
61|Norsk Tipping BIL 1 2|1:13:18
62|kkullevaal|1:13:24
63|Sprint Consulting 2|1:13:37
64|IL i BUL|1:13:42
65|Team Samba|1:13:48
66|TROG|1:13:49
67|Anestesi, Drammen sykehus|1:13:53
68|EY BIL SCO|1:14:04
69|Fjordlandslaget|1:14:05
70|Ramstad skole|1:14:05
71|Colosseum Tannlege 1|1:14:05
72|Påtale Oslo politidistrikt Enhet Sentrum|1:14:08
73|Asplan Viak AS 3|1:14:08
74|Skøyenåsen skole 1|1:14:11
75|Reisekontoret|1:14:13
76|Nordpolen skole|1:14:14
77|TINE Salg, Marked og Kategori 1|1:14:15
78|Vytis Running Club|1:14:17
79|Tonsenhagen Superstars|1:14:20
80|Norad rød 2|1:14:21
81|Scalpel Squad|1:14:23
82|Schibsted Life|1:14:31
83|Odontologen UiB|1:14:33
84|NRG-U|1:14:33
85|Miljødirektoratet BIL|1:14:36
86|AGK Ullevål|1:14:38
87|Diakonhjemmet Sykehus Elite Mix|1:14:40
88|Advokatfirmaet Selmer 2|1:14:48
89|Team Thommessen 2|1:14:48
90|Frydenberg Skole|1:14:50
91|Nukleærmedisin OUS|1:14:50
92|FBUT x SHT Elite 2|1:14:52
93|Multiconsult Miljø|1:14:52
94|Team Coop: Coop Faghandel|1:14:56
95|Advokatfirmaet CLP 2|1:14:57
96|B1-Zpeed|1:14:59
97|Lovlig gode løpere|1:15:05
98|Oslo politidistrikt – Drapsseksjonen|1:15:06
99|Nordvik Torshov|1:15:12
100|Barnelegene Drammen|1:15:12
101|Nordea DOSS|1:15:14
102|DNB Consulting|1:15:20
103|Oslo Business Forum|1:15:21
104|TV 2 Marked|1:15:22
105|PHS Run Club|1:15:31
106|Østmarka|1:15:33
107|Lambertseter Kritt & Kondis|1:15:34
108|Puls & Prosecco Løpeklubb|1:15:39
109|Fursetgruppen Elite|1:15:40
110|Team Johaug|1:15:43
111|Spike Wave Runners|1:15:44
112|Nordberglaget|1:15:45
113|Ambulanse vest|1:15:45
114|Anestesisykepleierstudentene|1:15:47
115|Mizuno Norge|1:15:48
116|Capgemini Invent 4|1:15:59
117|Helseoptimistene|1:16:04
118|Smestadlærerne|1:16:05
119|Hovseter skole|1:16:06
120|Ullevål skole|1:16:09
121|Statens vegvesen BIL O&A 1|1:16:09
122|Maxpuls|1:16:12
123|Paulsen & Nilsen|1:16:23
124|The winning team|1:16:23
125|Team Zalaris|1:16:25
126|Oslo Unge Høyre|1:16:30
127|EY BIL Tech Strategy & Transformation 2|1:16:33
128|DNV Maritime Advisory 3|1:16:35
129|ETT – bydel Sagene|1:16:38
130|Team Norrøna|1:16:39
131|NIF BIL 2|1:16:41
132|EndoRunners|1:16:41
133|Capus 1|1:16:43
134|LIS1 Drammen|1:16:45
135|The Skinners|1:16:45
136|Sankthanshaugen slektslag|1:16:48
137|Vi er Vinderen|1:16:48
138|BEST Helse|1:16:48
139|COWI Vann og miljø|1:16:50
140|Fysio Ahus|1:16:51
141|Grønt Punkt|1:16:51
142|DeepOcean Haugesund|1:16:55
143|Jordal skole|1:16:58
144|Aktivitetsgruppa GNE|1:17:00
145|Stabekk vgs|1:17:07
146|Apotek1 Born 2 Run|1:17:07
147|Admincontrol AS|1:17:11
148|SMAKS|1:17:15
149|NPO ENS|1:17:15
150|Diakonhjemmet Sykehus Mix 2|1:17:16
151|Faun|1:17:17
152|Krimvakta|1:17:19
153|TV 2 Nyheter|1:17:21
154|Oslo Economics 2|1:17:23
155|Odin Prosjekt|1:17:29
156|Haug skole|1:17:32
157|Moflata skole|1:17:34
158|Jussbuss|1:17:38
159|NTG Bodø|1:17:39
160|Farmasiet 2|1:17:46
161|Bekkestua ungdomsskole|1:17:46
162|Ullevål røntgen|1:17:51
163|Bæbu!|1:17:53
164|Generell Intensiv RH|1:17:54
165|Svensson Nøkleby Advokatfirma|1:17:54
166|Oslo politidistrikt – FSI lag 2|1:17:54
167|Grünerløkka skole|1:17:58
168|Folkehelseinstituttet BIL 2|1:17:58
169|Norsk Rikstoto Travern BIL|1:17:59
170|Fra Nord til Kollen|1:18:00
171|Dovre løpeklubb|1:18:02
172|Grindaker|1:18:04
173|Visma Flyt Happy Racers|1:18:05
174|Eidsiva & Hafslund BIL 2|1:18:06
175|Falck Norge 1|1:18:08
176|Dovre Løpeklubb2|1:18:08
177|Multiconsult Samferdsel 2|1:18:08
178|Gaustadgasellene|1:18:09
179|TRY Råd|1:18:10
180|Elvebakken VGS 2|1:18:11
181|Spinal Cord Runners|1:18:14
182|Rikshospitalet, Gastro/uro kirurgisk avd|1:18:17
183|Team Skaanes|1:18:17
184|Telenor Consumer Allstars|1:18:17
185|Rullatorbande (SEF), Bærum sykehus, Vestre Viken|1:18:21
186|Fitness & CO|1:18:26
187|Thermo Fisher Scientific – Lag 1|1:18:28
188|Farmasiet 1|1:18:29
189|Molekylær Onkologi|1:18:31
190|Nav Juridisk|1:18:36
191|Team Thommessen 3|1:18:37
192|Burson|1:18:37
193|Sens Gruppen AS|1:18:37
194|Cirkus Willisi|1:18:38
195|OMC|1:18:39
196|OUS Avd. for plastikk- og rekonstruktiv kirurgi|1:18:42
197|Mottak og FOBU|1:18:42
198|Bymiljøetaten 2|1:18:43
199|Anton LUB|1:18:45
200|Myrens Treningssenter|1:18:46
201|Norsk Fysioterapeutforbund|1:18:47
202|Espira Grefsen stasjon|1:18:48
203|OUS Nyfødtscreening RH|1:18:48
204|Odontologen Oldboyz|1:18:48
205|PSI Admin|1:18:50
206|Bufdir 1 1|1:18:50
207|Nav Grünerløkka 1|1:18:51
208|UiO HFs Dream Team|1:18:52
209|Bohus Fit for Fight 1 2|1:18:52
210|Brækhus Advokatfirma 1|1:18:54
211|Falck Norge 2|1:18:54
212|Akademiet VGS Oslo|1:18:57
213|AiR|1:18:58
214|Diplom-Is 2|1:18:59
215|Nesodden VGS|1:19:00
216|MTE – Lagging Legends|1:19:01
217|Bufdir 1 2|1:19:03
218|PRIMA UiO|1:19:07
219|Team Thommessen 4|1:19:09
220|Slemdal Skole|1:19:10
221|Grindbergsgjengen|1:19:11
222|Nordea 8th floor|1:19:14
223|Brynseng skole|1:19:15
224|15 litauere|1:19:15
225|Rustadlaget|1:19:16
226|Telenor Fixed Network|1:19:17
227|Svetteklinikken|1:19:23
228|Microbe Runners|1:19:23
229|AbbVie Aktiv|1:19:24
230|EY BIL Assurance Advisory 5|1:19:26
231|Advokatfirmaet DLA Piper 2|1:19:27
232|VIKA VGS 2|1:19:27
233|CIM-RHT|1:19:27
234|Påtaleseksjon Øst|1:19:28
235|Strålende gjeng|1:19:30
236|Hellerud VGS|1:19:30
237|Gyldendal 2|1:19:30
238|MSD|1:19:31
239|PAMS 2|1:19:31
240|A-laget, FI, NFD 1 NFD 2 4|1:19:32
241|Roche Norge|1:19:34
242|SANDS Advokatfirma 2|1:19:35
243|reMarkable 3|1:19:35
244|Utlendingsnemnda|1:19:35
245|Ortopedisk rehabilitering – Riksen|1:19:35
246|Generell intensiv Ullevål|1:19:36
247|Sweet Dreams|1:19:37
248|Borgen Ungdomsskole|1:19:37
249|Fernanda Nissen skole|1:19:37
250|Edvard Munch vgs.|1:19:39
251|Stendi Utsikten|1:19:40
252|Den Franske Skolen I OSLO|1:19:43
253|CEMAsys|1:19:44
254|UiO – Utdanningsløperne 4|1:19:45
255|Gapit Nordics|1:19:48
256|Sporto Sprintz|1:19:48
257|URRA|1:19:48
258|INFS2|1:19:49
259|Bjørkelangen skole|1:19:49
260|Solheim skole|1:19:49
261|UDI 1 2|1:19:50
262|Fagerstad|1:19:54
263|DPS Øvre Romerike|1:19:54
264|DEKSA|1:19:55
265|Aperol Sprint|1:19:57
266|Kampen skole|1:19:59
267|Balchem – Team Kappa|1:20:01
268|Legal24 Advokatfirma AS|1:20:02
269|ABG Sundal Collier 1|1:20:03
270|Ås vgs. Lag 2|1:20:05
271|Frogn Videregående skole|1:20:05
272|Sivilrettsforvaltningen|1:20:07
273|FOBU|1:20:08
274|Hjemmesykepleien|1:20:10
275|Namsfogden i Oslo|1:20:10
276|TINE FoU|1:20:10
277|Sivilombudet|1:20:11
278|ANTI|1:20:12
279|De tøffeste i HDB|1:20:12
280|Vild med venner|1:20:14
281|Kreftkirurgisk avdeling – Radiumhospitalet|1:20:15
282|Kredinor 2|1:20:18
283|OUS Ullevål Barneinfeksjon og barnemedisin|1:20:20
284|Økonomi og forvaltningsetaten|1:20:22
285|Aker Solutions Legal & Friends|1:20:24
286|Usbl 1 3|1:20:25
287|Lovisenberg Rehabilitering 1 1|1:20:25
288|Orto B|1:20:26
289|Usbl 1 2|1:20:30
290|ØNH Ahus – 1 1|1:20:31
291|Løten kommune|1:20:31
292|Oksen IL Fornebu|1:20:32
293|Løren skole|1:20:33
294|Oslo Tannlegeforening 1|1:20:35
295|SpareBank 1 SMN ETT SMN 3|1:20:36
296|Orkla Snacks Norge|1:20:36
297|Unicare Hokksund|1:20:37
298|AVCO|1:20:38
299|Folkehelseinstituttet BIL 3|1:20:39
300|Oslo Tannlegeforening|1:20:39
`;

export const mosjonKvinner2026Full: Result[] = data
  .trim()
  .split("\n")
  .map((line) => {
    const [rank, team, time] = line.split("|");
    return { rank: Number(rank), team: team.trim(), time: time.trim() };
  });
