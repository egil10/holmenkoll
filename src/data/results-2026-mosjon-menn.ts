// Holmenkollstafetten 2026 — Bedrift & mosjonslag flest menn (full table 1-561)
// Source: sportsidioten.no
import type { Result } from "./results-2026";

const data = `
1|Tjommiene TC|0:53:55
2|Midt-Troms Rørservice|0:53:56
3|Bish på Tish x Antilope|0:53:57
4|Team Svimus|0:54:19
5|Clos Lagarto|0:54:56
6|Schonhowd Fysioterapi|0:55:21
7|Frogner Runners|0:55:26
8|Advokatfirmaet Haavind 1|0:55:41
9|Wikborg Rein BIL 1|0:55:59
10|Juul & Partners AS|0:56:03
11|Advokatfirmaet BAHR AS 1|0:56:11
12|Advokatfirmaet Wiersholm 2|0:57:04
13|Fysiomarens helter|0:57:04
14|Team Thommessen 5|0:57:38
15|PwC Deals 1|0:57:49
16|Nardo Løpeklubb|0:57:49
17|EY BIL FSO 1|0:57:50
18|KL Running 1|0:57:53
19|Capgemini Invent 1|0:58:14
20|Oslo Economics|0:58:35
21|Team DRIV|0:58:36
22|Team Furutangen 1 – Åsen Elite|0:58:43
23|Eidsiva & Hafslund BIL 1|0:58:44
24|Bane NOR 1|0:58:50
25|reMarkable 1|0:58:54
26|Aker BP 1|0:58:56
27|SML|0:59:07
28|CMS Kluge Advokatfirma 1|0:59:08
29|Team Kjjææh|0:59:08
30|Sopra Steria 1|0:59:18
31|Oddvar Brås Utvalgte|0:59:18
32|Team Sanna|0:59:19
33|PHS STAVERN|0:59:28
34|Vaskeladden + partners|0:59:30
35|SB1 Markets 1|1:00:04
36|Bingen|1:00:07
37|ASKO MIDT-NORGE 1|1:00:11
38|Glipptak IL|1:00:16
39|UiO: Fysikk øst|1:00:23
40|EY BIL EY-Parthenon 1|1:00:26
41|Ålesund Friidrettsklubb|1:00:49
42|DNB Asset Management 1|1:00:53
43|Deloitte Advokatfirma|1:00:58
44|Bøler IF Friidrett Mix|1:00:59
45|HELP 1|1:01:01
46|Malling Elite|1:01:02
47|Regjeringsadvokaten|1:01:03
48|Danske Bank Elite|1:01:07
49|Barken IF|1:01:15
50|PwC Assurance 3 – 1|1:01:22
51|Astrup Fearnley 1|1:01:24
52|PwC Assurance 2 – 1|1:01:29
53|Cardo Partners|1:01:30
54|Young Solutioneers 1|1:01:31
55|Team Vingrom|1:01:32
56|Daimyo AS|1:01:33
57|Industrifinans|1:01:33
58|PwC Assurance 1 – 1|1:01:33
59|SK Holding 1|1:01:34
60|Deloitte 30|1:01:34
61|SpareBank 1 Nord-Norge 1|1:01:36
62|Bekk 1|1:01:48
63|Twoday 1|1:01:53
64|Advokatfirmaet Selmer 1|1:01:54
65|KPMG AS CFO A(re) 1|1:02:02
66|ASKO VEST 1|1:02:13
67|UiO Matematisk institutt|1:02:16
68|Hovden Skigymnas|1:02:17
69|Tripletex AS 1|1:02:20
70|FOAK|1:02:22
71|Mizuno Torshov Sport Runners 1|1:02:23
72|ASKO OSLO 1|1:02:31
73|TechnipFMC 1|1:02:33
74|Kongsberg Maritime 2|1:02:34
75|SANDS Advokatfirma 1|1:02:37
76|DNB Trondheim Elite|1:02:38
77|XXL Sport og Villmark – HQ|1:02:40
78|Running Rabbits|1:02:41
79|EY BIL AI & Data 1|1:02:41
80|Aider Elite|1:02:45
81|Cisco 1|1:02:45
82|IF forsikring 1|1:02:45
83|EY BIL Assurance Advisory 1|1:02:55
84|DNB Carnegie, Investment Banking 1|1:02:56
85|Treg Responstid|1:02:56
86|Appfarm 1|1:03:00
87|KPMG Customer & Operations 1|1:03:02
88|Team Optio Incentive 1|1:03:04
89|Clarksons Platou 1 1|1:03:06
90|UiO-SMN Turbo|1:03:07
91|DNB Private banking 1|1:03:08
92|Gjensidige Forretningsstyring Privat + venner|1:03:08
93|Helsedirektoratet S-laget|1:03:08
94|NIH streberne|1:03:16
95|Lillehammer 92|1:03:18
96|Fred. Olsen & Co Sportsklubb 1|1:03:18
97|TRØNDERBATALJONEN|1:03:19
98|Prokura AS|1:03:21
99|Lokomotivet 1|1:03:22
100|Protector Forsikring 1|1:03:27
101|Amer Sports 1|1:03:27
102|Kredinor 1|1:03:28
103|Fredensborgfritid + AT|1:03:33
104|BDO PARTNERS|1:03:35
105|Guttaguttagutta|1:03:35
106|HÖEGH 1|1:03:43
107|Statsbygg BIL 1|1:03:43
108|Røa Junior|1:03:43
109|Echo Oslo|1:03:44
110|Gritera 1|1:03:51
111|Metier 1|1:03:53
112|Scan Survey|1:03:58
113|KPMG Large Enterprise 1|1:04:00
114|Holte Consulting 1|1:04:01
115|Hjertemedisin Ullevål|1:04:03
116|Kristelig Gymnasium 1|1:04:05
117|Pareto Bank 1|1:04:07
118|Sokna/Støren|1:04:10
119|RunnersHei|1:04:10
120|MENY Brotorvet Rosa|1:04:11
121|Kearney|1:04:12
122|Lovavdelingen|1:04:15
123|Dare to move|1:04:19
124|Advokatfirmaet CLP 1|1:04:23
125|Altor|1:04:25
126|Vår Energi Stavanger|1:04:28
127|mnemonic mobil 1.0|1:04:30
128|KDA Kjeller 1|1:04:30
129|Deloitte 35|1:04:31
130|REQ|1:04:32
131|CBRE 1|1:04:35
132|(©NTB)|1:04:36
133|BearingPoint 1|1:04:38
134|EY Partnerlag Gul|1:04:42
135|Bouvet 1|1:04:42
136|Brødrene Jensen|1:04:42
137|PwC Tromsø|1:04:48
138|Mittanbud 1|1:04:54
139|Landkreditt 1 1|1:04:57
140|Majorstua Janitsjar 2|1:04:58
141|KLP 1 Satselaget|1:05:03
142|Sentrumsmiks|1:05:04
143|Eitzen|1:05:08
144|EY BIL SKYE|1:05:17
145|Finanstilsynet 1|1:05:20
146|Smuglergods|1:05:20
147|Gungnir of Norway|1:05:22
148|GEODATA BIL 1|1:05:23
149|NRK Sport|1:05:23
150|Patatas SK|1:05:26
151|NG KI 1|1:05:29
152|NoA – The North Alliance 3|1:05:30
153|KSAT Team A 1|1:05:31
154|DNB Carnegie Securities Services|1:05:34
155|Multiconsult Industri & Anlegg|1:05:38
156|FINBIL 1|1:05:42
157|VIEW Group Elite|1:05:43
158|Kristelig Gymnasium Elever|1:05:43
159|Team Kiropraktor|1:05:46
160|Akershus Eiendom|1:05:47
161|Random Runners|1:05:48
162|Team HEIR|1:05:48
163|Menon Economics 1|1:05:49
164|FOSS Sport|1:05:50
165|Visma Software 1|1:05:53
166|Team Jordanes|1:05:55
167|ABB BIL 6|1:05:55
168|Gjensidige Sport Oslo|1:06:03
169|Netcompany 1|1:06:05
170|THEMActive|1:06:06
171|Heimstaden Group|1:06:09
172|Langesund Tri|1:06:09
173|NOCCO Norge|1:06:10
174|ASKO OSLOFJORD 1|1:06:11
175|OBOS Nye Hjem 1|1:06:12
176|Nexans Oslo 1|1:06:13
177|Running Scared|1:06:14
178|Kvale Advokatfirma 1 1|1:06:15
179|Nordvik 1|1:06:15
180|Sopra Steria RaaS|1:06:17
181|Vitamin Well|1:06:17
182|Attensi Superfast|1:06:18
183|Knowit Experience Performance Mode|1:06:20
184|Birkenes IL|1:06:21
185|Partnerlag PwC|1:06:22
186|PwC Consulting 1|1:06:22
187|Aibel Asker BIL 3|1:06:24
188|Advokatfirmaet Hjort AS 1|1:06:24
189|UiO IMB-Turbo, Medisinsk fakultet|1:06:28
190|Telenor IGnite & Run 3.0|1:06:30
191|EY BIL Risk|1:06:31
192|20 kil|1:06:31
193|Heimdall Power|1:06:32
194|Nordea BB Region Oslo 1 1|1:06:33
195|Sporveien Samlet|1:06:34
196|Team fast track|1:06:36
197|L0 Series Maglev|1:06:38
198|Patentstyrets bedriftsidrettslag|1:06:43
199|KLDBIL – Klima- og miljødepartementet|1:06:45
200|BEIN Engineering|1:06:47
201|Odin Forvaltning 1|1:06:48
202|REITAN RETAIL – REMA 1000 K&I|1:06:51
203|KPMG DA1|1:06:51
204|Nordea Markets|1:06:54
205|Nofence GOAT 1|1:06:55
206|Colliers Norway|1:06:55
207|Valler vgs|1:06:56
208|Handelshøyskolen BI 1|1:06:57
209|Equinor BIL Oslo Mixed|1:06:57
210|Amedia 1|1:06:58
211|Statnett BIL Mix 3|1:07:01
212|Høydalsmo Idrottslag|1:07:11
213|Fondberg Beverage Group|1:07:12
214|BAMA 2|1:07:13
215|Oslo Handelsgymnasium – Lærerne 1|1:07:14
216|Mizuno Anton Sport Snø|1:07:15
217|Sentrum A5|1:07:17
218|Entra BIL 1|1:07:17
219|NVE 6|1:07:17
220|Volvat NIMI|1:07:18
221|O3 Cyber|1:07:21
222|Rambøll CR East|1:07:26
223|Löplabbet Norge 2|1:07:26
224|KDA Aerostructures 1|1:07:31
225|Runtime Error|1:07:31
226|Albatross Velferdsfond 6|1:07:36
227|Satsebuss, Rutebuss, Beredskapsbuss 1|1:07:39
228|Equity on the run|1:07:43
229|Visma Vinst|1:07:44
230|Team Fossum 2|1:07:44
231|GKN Aerospace GAN BIL 1 1|1:07:51
232|KPMGs Partnerlag|1:07:51
233|Rambøll Geo|1:07:52
234|Progit|1:07:55
235|Atlas Running Club|1:07:55
236|DNV Pipeliners|1:07:56
237|Halmsås og omegn skilag|1:07:58
238|Microsoft 3|1:07:59
239|wheel.me|1:08:00
240|Lovisenberg Medisin Leger|1:08:00
241|4subsea|1:08:02
242|Crayon 1|1:08:06
243|Advokatfirmaet Føyen 1|1:08:06
244|KPMG AS Sikkerhetssprinterne|1:08:07
245|Fyk|1:08:09
246|NIF BIL 1|1:08:10
247|TGS 1 1|1:08:12
248|Cedra Drammen|1:08:15
249|Equinor SBIL Mix 3|1:08:19
250|Fokus Boys|1:08:19
251|Siemenslaget 1|1:08:20
252|K33|1:08:20
253|FrontRunners|1:08:22
254|Huseierne|1:08:23
255|Olympiatroppen|1:08:25
256|DAB ULTRA SKATERS|1:08:25
257|Deloitte 5|1:08:26
258|DNB WM S&I/STR 1|1:08:29
259|Economic Mind|1:08:31
260|Team Fossum 3|1:08:32
261|Enso|1:08:33
262|Norges Skiforbund|1:08:35
263|Energihovedstaden Speed|1:08:37
264|Askeladden & Co 1|1:08:37
265|Real Team Six|1:08:38
266|Avosome|1:08:39
267|Kringsjå skole|1:08:39
268|Ultimate Nordic|1:08:40
269|Ahusortopedene|1:08:41
270|Audit Corporates 1|1:08:41
271|Tikampen.no|1:08:42
272|DNB CIFI|1:08:43
273|Defence Communications 1|1:08:43
274|Bain & Company 1|1:08:44
275|Orkla Foods Norge 1 1|1:08:45
276|ASKO ROGALAND 1|1:08:46
277|Cermaq – Run to win|1:08:47
278|Inocean Wave Runners|1:08:48
279|Aker Qrill Company|1:08:49
280|Team Craft|1:08:51
281|Hallgruppen AS|1:08:52
282|AutoStore 1|1:08:54
283|Equinor SBIL Mix 1|1:08:55
284|BW LNG|1:08:55
285|Wolt 1|1:08:56
286|impact.com|1:08:57
287|NVE 2|1:08:58
288|WAL 1|1:08:59
289|Cedra Innlandet|1:09:00
290|Schjødt 1|1:09:00
291|Øvip 1|1:09:01
292|Kamigos|1:09:03
293|Glittertind|1:09:04
294|NG Data 1|1:09:05
295|Equinor Deep and Harsh|1:09:05
296|Trifid 2|1:09:06
297|Danske Bank 2|1:09:07
298|Vipps, så går det fort!|1:09:09
299|SEB 1|1:09:09
300|SpareBank 1 Østlandet – Direktebanken Satselag|1:09:10
301|Aker BP 2|1:09:11
302|Equinor EST Oslo|1:09:11
303|Team Fossum 1|1:09:11
304|PwC Trondheim|1:09:12
305|PwC Kristiansand|1:09:12
306|DDS&E 1|1:09:12
307|Vend Marketplaces|1:09:13
308|Hyre|1:09:14
309|Unloc|1:09:14
310|Nymoen Paulsen Family&Friends|1:09:15
311|ASKO ØST 1|1:09:16
312|Thales Norway|1:09:17
313|KPMG AS Tech Olympians|1:09:17
314|EY BIL Finance Consulting|1:09:20
315|Deloitte Trondheim|1:09:21
316|Raven Consulting 1|1:09:25
317|Riksrevisjonen BIL 1 1|1:09:26
318|Schibsted SMS 2|1:09:26
319|DNB advokatene|1:09:27
320|Justis- og beredskapsdepartementet 1|1:09:28
321|DNB Greenhouse 1|1:09:28
322|Global Maritime|1:09:28
323|Lagersjefen|1:09:30
324|Newsec PAM AS|1:09:30
325|Svelgen Turn og Idrettsforening|1:09:30
326|Cloudrunners|1:09:32
327|Helse Nord IKT BIL 1|1:09:32
328|Team Aker ASA|1:09:34
329|Credo Partners AS|1:09:35
330|DeepOcean Skøyen|1:09:35
331|Flow Technologies|1:09:35
332|Systek|1:09:35
333|Geirs Løp og Padel Club|1:09:37
334|Team Mosjon 1.lag|1:09:38
335|Advokatfirmaet DLA Piper 1|1:09:38
336|Wikborg Rein BIL 2|1:09:40
337|Yara A – Competing team|1:09:40
338|PwC Deals 2|1:09:40
339|REITAN RETAIL – UNO-X MOBILITY|1:09:40
340|Advisory Project Pacers|1:09:41
341|Jernbanedirektoratet – Snabbtog|1:09:42
342|Kirurgiske leger Ahus|1:09:42
343|ABP|1:09:42
344|Tratec Teknikken Flekkefjord|1:09:43
345|KIWI 1|1:09:43
346|Team WANG Ung Follo|1:09:44
347|PwC T&L Tax|1:09:46
348|FFI FØK|1:09:47
349|Bekk BMC|1:09:47
350|BDO Oslo – Deals|1:09:48
351|Sinsen skole|1:09:48
352|HCG|1:09:48
353|FundingPartner AS|1:09:49
354|Fiken Rakett|1:09:50
355|OUS Ortopedene|1:09:51
356|Bergen 1|1:09:54
357|KLP 7 Kapitalforvaltning|1:09:55
358|Thermopylae|1:09:55
359|Oslo Skadelegevakt|1:10:00
360|Kernel|1:10:00
361|Innlandet|1:10:02
362|Reiulf Ramstad Arkitekter|1:10:02
363|EY Tromsø|1:10:02
364|Visma Enterprise – Happy Racers|1:10:04
365|Team Furutangen 2|1:10:05
366|Ballbingen United|1:10:06
367|Trafalgar|1:10:08
368|Atea 1|1:10:11
369|Stor-Oslo Eiendom AS|1:10:13
370|Norsk Regnesentral|1:10:14
371|Svalner Atlas|1:10:16
372|Sykehusinnkjøp 1|1:10:17
373|Høyenhall skole|1:10:20
374|SEB CF|1:10:20
375|PPI Elite|1:10:21
376|Bane NOR – Data|1:10:22
377|Kommunalbanken|1:10:23
378|Madserud Gård|1:10:24
379|BDO Oslo – Revisjonsgruppe 2 – Lag 1|1:10:25
380|7Legs|1:10:25
381|Torvald Klaveness|1:10:27
382|JM Norge AS 1|1:10:27
383|NAV Kunnskap|1:10:28
384|Magnat Center|1:10:28
385|Running the Transformation|1:10:29
386|Pearl 1|1:10:31
387|Kraftlaget Sognekraft|1:10:31
388|Deloitte 40|1:10:31
389|BearingPoint Capital|1:10:33
390|Hydro Aktiv – Markets and friends|1:10:35
391|SKULD 1|1:10:35
392|Valle Hovin videregående skole|1:10:35
393|Lærum|1:10:36
394|Bredvid AS|1:10:37
395|Sørum IL|1:10:37
396|SINTEF Matte & Kyb|1:10:37
397|Vatne Capital|1:10:38
398|TIKAMPEN – Siden 1992|1:10:39
399|Simonsen Vogt Wiig 2|1:10:39
400|Stovner vgs 1|1:10:40
401|BDO Oslo – Tech|1:10:41
402|PrivatMegleren Aksept|1:10:41
403|BekkeLAGET|1:10:42
404|Norges Bank IL – PPO|1:10:43
405|Sopra Steria – Team Pingebrigtsen|1:10:47
406|Ringnes 1|1:10:47
407|DNB Carnegie FICC|1:10:48
408|Eidra 1|1:10:48
409|JBF 1|1:10:49
410|Differ Group|1:10:49
411|Midtstuen Running Club|1:10:50
412|Materials & Testing|1:10:51
413|Vind AI|1:10:51
414|Perfectly Competitive|1:10:51
415|PwC PIM|1:10:51
416|Run(a)wayFBU|1:10:52
417|Falken Sportsklubb|1:10:52
418|Stokke IL|1:10:54
419|MAGNA|1:10:55
420|Knowit Management Consulting|1:10:56
421|KDA Land Systems 1|1:10:57
422|BDO Oslo – Revisjonsgruppe 1 – Lag 1|1:10:57
423|Norges Bank IL – Gull|1:10:58
424|Uniconsult BIL 1|1:10:58
425|Antire AS 1|1:10:59
426|Operaens 1. lag|1:11:00
427|Orkla Foods Norge 1 3|1:11:01
428|DLVRY AS|1:11:01
429|B-laget|1:11:02
430|SLB Oslo 1|1:11:02
431|Akuttpsyk 2|1:11:04
432|Nueva Seas|1:11:05
433|Domstolene i Oslo 2 1|1:11:07
434|Hurtigruten – Havets Helteløpere 1|1:11:08
435|Klassekampen 1|1:11:08
436|Seebrite|1:11:08
437|TV 2 Sporten|1:11:09
438|ASKO HEDMARK 1|1:11:09
439|Fram Eiendom – Verdens Beste Eiendomsselskap|1:11:10
440|Carbon Circle|1:11:14
441|DNB BMN Østlandet|1:11:14
442|Øyeblikkelig hjelp 2|1:11:14
443|Magnora Pacers|1:11:15
444|PwC Deals 4|1:11:15
445|Ungdomsakutten|1:11:16
446|Salesforce Norge 1|1:11:16
447|PA Consulting|1:11:16
448|Pareto Asset Management AS|1:11:16
449|FJK|1:11:18
450|SD|1:11:19
451|Eikeli skole|1:11:19
452|Ludenso|1:11:19
453|Team NordicSemi 1|1:11:22
454|Multiconsult Hydrologi|1:11:25
455|Statsadvokatene|1:11:27
456|BraCom AS|1:11:28
457|Aim High|1:11:28
458|APP|1:11:28
459|Axaz|1:11:29
460|HTB Racing|1:11:29
461|Analytika|1:11:30
462|Inventura AS|1:11:30
463|Tunable|1:11:30
464|Team Nordic|1:11:31
465|Multiconsult Spesialfag|1:11:31
466|Deloitte Partnerlag|1:11:31
467|Viaplay Group 1|1:11:32
468|Vestre Viken Eyes Eyes Baby|1:11:32
469|Skagerak Energi Bedriftsidrettslag 1|1:11:33
470|Nordea IB&E + LevFin|1:11:33
471|EY BIL EY-Parthenon 3|1:11:34
472|ASKO AGDER 1|1:11:37
473|Carucel|1:11:38
474|Avisa Oslo|1:11:39
475|TerraTwin|1:11:39
476|DNB Energy|1:11:40
477|Hitecvision|1:11:41
478|Gjensidige Commercial|1:11:41
479|Finago 1|1:11:44
480|FINBIL 2|1:11:45
481|KPMG Law 1|1:11:48
482|DNB HTS|1:11:52
483|Karlsen & Nordseth Entreprenør AS|1:11:53
484|Sateba Norway|1:11:55
485|EVIDI 1|1:11:56
486|REITAN RETAIL – REITAN RETAIL|1:11:56
487|Høyesterett|1:11:56
488|Albatross Velferdsfond 5|1:11:57
489|BPI|1:11:58
490|Eidsiva & Hafslund BIL 8|1:11:58
491|CGI Norge 1|1:11:59
492|Aon Norway|1:11:59
493|Sandvika vgs1 Elitelaget|1:12:00
494|Propely|1:12:02
495|Rambøll Vann|1:12:02
496|PHS OSLO B1|1:12:03
497|Awilhelmsen|1:12:04
498|Advokatfirmaet Økland & Co|1:12:05
499|Goodtech BIL|1:12:06
500|DM on the run|1:12:06
501|EIK&Friends|1:12:07
502|BDO Oslo – Revisjonsgruppe 3 – Lag 1|1:12:07
503|ATC 1|1:12:08
504|Multiconsult GEO 2|1:12:09
505|Nitschke AS|1:12:11
506|Nordic Trustee 1|1:12:11
507|COWI triVVSel|1:12:11
508|Deloitte 22|1:12:13
509|Nordea CREA|1:12:14
510|Moss Maritime|1:12:14
511|PwC FS Risk|1:12:15
512|Behandlerverket|1:12:16
513|Grieg Team|1:12:16
514|EY BIL Shipping 2|1:12:20
515|RiskPoint|1:12:21
516|Ræder Bing advokatfirma 1|1:12:21
517|Blender Agency|1:12:23
518|SØA BIL|1:12:24
519|KPMG Forensic & Security 1|1:12:24
520|PwC Poolen|1:12:27
521|Treningscamp|1:12:29
522|HSIL Langrenn 1|1:12:29
523|Deloitte 1|1:12:30
524|Airthings Athletics|1:12:30
525|Sopra Steria – Reservetropp|1:12:31
526|Nadderud vgs|1:12:32
527|Mills AS 1|1:12:32
528|HONning|1:12:32
529|EY BIL Cyber|1:12:33
530|Hydro Aktiv – Extrusions|1:12:35
531|Ris skole|1:12:36
532|Filter arkitekter|1:12:36
533|SpareBank 1 Utvikling Lag 1|1:12:36
534|HÖEGH 2|1:12:37
535|Orkla BIL 9|1:12:38
536|SSB Førstelaget|1:12:39
537|Ingenia|1:12:39
538|Hydro Aktiv – Aluminium Metal Finance & Friends|1:12:39
539|Salvesen & Thams|1:12:40
540|Aktiv og Ung Innlandet|1:12:41
541|DXC BIL Oslo|1:12:41
542|DNB Carnegie Young Guns 1|1:12:42
543|Fornebrur FK|1:12:42
544|Persbråten vgs|1:12:42
545|PHS OSLO 1|1:12:44
546|Kverva AS|1:12:44
547|Korsvoll skole|1:12:44
548|Infronteers|1:12:45
549|Advokatfirmaet Solver AS|1:12:47
550|DNB Ocean Industries|1:12:47
551|Enora 3|1:12:47
552|PwC Deals 3|1:12:49
553|Advokatfirmaet Aider Legal AS|1:12:49
554|Webstep 1|1:12:50
555|Multiconsult Nydalen|1:12:51
556|Itera 1|1:12:52
557|Hovedorganisasjonen Virke 1|1:12:54
558|Storm Studios 1|1:12:54
559|mTm|1:12:54
560|Deloitte 13|1:12:57
561|Deloitte 36|1:12:57
`;

export const mosjonMenn2026Full: Result[] = data
  .trim()
  .split("\n")
  .map((line) => {
    const [rank, team, time] = line.split("|");
    return { rank: Number(rank), team: team.trim(), time: time.trim() };
  });
