-- ─── MIGRAZIONE 0011: Aggiornamento settembre 2026 ────────────────────────────
-- Data: 2026-09-18
-- Contenuto: storie Francesco e Leonardo aggiornate + 2 nuovi eventi

-- ─── 1. AGGIORNAMENTO STORIA FRANCESCO ────────────────────────────────────────
UPDATE storie SET
  desc_it = 'Mi chiamo Francesco, ma per tanti sono semplicemente Franci. Sono nato a Milano il 6 luglio 2012, all''Ospedale Mangiagalli, con un parto cesareo d''urgenza alla trentottesima settimana. Pesavo 2 chili e 815 grammi: piccolo, ma già pronto a iniziare un cammino tutto mio. Ho un fratello maggiore, Leonardo, nato il 14 novembre 2009, con cui condivido giochi, risate e la strada della nostra famiglia.

Nei miei primi giorni di vita i medici hanno voluto tenermi sotto osservazione, perché il mio cuore aveva già bisogno di qualche attenzione in più: una bicuspide della valvola aortica. Per tre giorni sono rimasto in patologia infantile e, fin da subito, il mio cammino è iniziato in modo un po'' speciale.

Crescendo, la mia famiglia ha capito che i miei tempi erano diversi, ma non per questo meno importanti. A 7 mesi ho assaggiato le mie prime pappe, a 9 mesi ho imparato a stare seduto, intorno all''anno ho iniziato a gattonare e a 18 mesi ho mosso i miei primi passi. Ogni conquista è arrivata con il suo ritmo, passo dopo passo, e ognuna è stata accolta come un piccolo grande traguardo. Più avanti sono arrivate altre vittorie: a 6 anni ho imparato a stare a galla in piscina, dopo otto mesi di corso, e a 6 anni la bicicletta con le rotelle. Poi, a 11 anni, in un dicembre che non dimenticherò, la bicicletta senza rotelle, pedalando insieme al mio educatore Ivan.

Nel mio percorso non sono mancate le salite: il tono muscolare un po'' debole, l''epilessia, la fatica nell''attenzione, nell''organizzazione e in alcuni apprendimenti. Le mie crisi sono cominciate a cinque anni e mezzo e, per sette anni, hanno accompagnato la mia famiglia (21 crisi totali con 6 ricoveri): quasi sempre arrivavano con la febbre, a volte con l''eccitazione o lo stress, e la mamma e il papà hanno imparato a riconoscerle e a gestirle. Con il tempo sono diventate sempre più rare: dal novembre 2023 la terapia quotidiana del Tegretol (iniziata ad Aprile 2022) è stata sospesa e oggi l''unico farmaco che teniamo a portata di mano è un "salvavita", per le emergenze.

Per tanti anni la mia famiglia ha cercato risposte, affrontando visite, controlli, esami e momenti di incertezza: tanti "no" che sembravano vicoli ciechi. Poi, il 12 dicembre 2024, è arrivata una parola che ha cambiato il modo di guardare la mia storia: Sindrome ReNU, una condizione genetica rara, scoperta e descritta di recente, legata al gene RNU4-2. A trovarla è stato un esame molto speciale, il sequenziamento dell''intero genoma, reso possibile anche grazie alla ricerca finanziata da Telethon. Avere un nome non ha cambiato chi sono, ma ha aiutato chi mi sta accanto a capirmi meglio e ad accompagnarmi nel modo giusto: il cuore, le crisi, i miei tempi e anche le novità che arrivano, come il controllo dei reni iniziato quest''anno, ora sono tasselli di un unico disegno che possiamo leggere insieme.

Per crescere ho percorso tante strade. Ho lavorato sul linguaggio: per comunicare ho iniziato con le immagini e, poco a poco, sono arrivate anche le parole. Poi è arrivato il lavoro sulla motricità, sull''attenzione, sulle capacità cognitive e sulla letto-scrittura, con l''aiuto di tanti specialisti. In famiglia abbiamo sperimentato diverse strade: terapie, metodi, settimane intensive in giro per l''Italia e per l''Europa. Ancora oggi continuo a imparare, e le piccole autonomie sono diventate grandi vittorie: il controllo degli sfinteri di giorno a 8 anni, quello di notte a 13, e a 12 anni ho imparato a tagliarmi la carne da solo.

Frequento la scuola con il supporto giusto per me: un progetto su misura, maestre ed educatori che mi accompagnano e compagni con cui crescere insieme. Sono un ragazzo attivo e solare, pieno di energia, e amo muovermi: vado in bicicletta, gioco a basket, nuoto, scio con l''aiuto della mamma e del maestro e mi diverto anche con l''arrampicata. Attraverso il movimento sento di poter esprimere tanto di me, della mia forza e della mia voglia di superare gli ostacoli.

La mia strada non è sempre semplice, ma è la mia, ed è fatta anche di tanta determinazione. Ogni traguardo raggiunto racconta quanto impegno ci sia stato dietro, mio e di chi mi è stato accanto ogni giorno. Sono Franci, e la mia storia parla di fatica, sì, ma anche di coraggio, crescita e conquiste. E forse è proprio questo il messaggio più bello da condividere con chi arriva adesso, con chi ha appena ricevuto una diagnosi e si sente smarrito: non siete soli. Noi che ci siamo già passati lo sappiamo per esperienza: ogni piccolo passo, uno dopo l''altro, può diventare una grande vittoria.',
  desc_en = 'My name is Francesco, but many people call me simply Franci. I was born in Milan on 6 July 2012, at Ospedale Mangiagalli, via emergency C-section at 38 weeks. I weighed 2.815 kg: small, but already ready to begin my own journey. I have an older brother, Leonardo, born on 14 November 2009, with whom I share games, laughter and the road our family walks together.

In my first days of life the doctors wanted to keep me under observation, because my heart already needed a little extra care: a bicuspid aortic valve. I spent three days in the neonatal ward and, from the very start, my path began in a rather special way.

As I grew, my family understood that my rhythms were different, but no less important. At 7 months I tasted my first purees, at 9 months I learned to sit, around one year I started crawling and at 18 months I took my first steps. Every achievement arrived at its own pace, step by step, and each one was welcomed as a small great milestone. Later came more victories: at 6 years old I learned to float in the pool after eight months of lessons, and also at 6 the bicycle with training wheels. Then, at 11, in a December I will never forget, the bicycle without training wheels — pedalling together with my educator Ivan.

Along the way there were challenges: slightly low muscle tone, epilepsy, difficulty with attention, organisation and some learning. My seizures began at five and a half years old and, for seven years, accompanied my family (21 seizures total with 6 hospitalisations). With time they became rarer: since November 2023, the daily Tegretol therapy (started in April 2022) has been discontinued, and today the only medicine we keep on hand is an emergency "life-saver".

For many years my family searched for answers. Then, on 12 December 2024, a word arrived that changed how we see my story: ReNU Syndrome, a rare genetic condition linked to the RNU4-2 gene. Having a name did not change who I am, but it helped those around me understand and support me better.

I attend school with the right support for me: a tailored project, teachers and educators who accompany me and classmates to grow with. I am an active and sunny boy, full of energy, and I love moving: I cycle, play basketball, swim, ski with my mum and instructor, and enjoy climbing. Through movement I feel I can express so much of myself, my strength and my desire to overcome obstacles.

My road is not always simple, but it is mine, and it is made also of great determination. Every milestone reached tells of the effort behind it — mine and that of everyone who has been by my side every day. I am Franci, and my story speaks of hard work, yes, but also of courage, growth and achievements. And perhaps that is the most beautiful message to share with those arriving now: you are not alone.'
WHERE nome = 'Francesco' AND nazione = 'IT';

-- ─── 2. AGGIORNAMENTO O INSERIMENTO STORIA LEONARDO ──────────────────────────
-- Se Leonardo non esiste in DB, lo inseriamo; se esiste, aggiorniamo
INSERT OR IGNORE INTO storie (nome, img_url, nazione, flag, url_storia, desc_it, desc_en, tipo, consenso_firmato, ordine, attiva)
VALUES (
  'Leonardo',
  '/images/renu_bambino_francesco.jpg',
  'IT', '🇮🇹', NULL,
  '',
  '',
  'italiana', 1, 25, 1
);

UPDATE storie SET
  desc_it = 'Leo è un dolce ragazzo di 20 anni. È nato nell''ormai lontano marzo 2006, ed è stato da subito un guerriero. La sua vita è stata segnata, fin dalle prime ore, da disturbi gastroenterologici importanti, ipotonia, problemi respiratori. Ma il suo sorriso e la sua determinazione ci hanno accompagnato fin dal primo istante. Ha cominciato a lottare per amore della vita, con un incredibile coraggio e un amore sconfinato per tutti noi che gli stavamo e gli stiamo accanto.

È un ragazzino che, dapprima timoroso di ogni nuova esperienza, si è aperto gradualmente al mondo esterno, mostrando sempre più una maggiore fiducia verso se stesso e gli altri. Oggi è un dolce e tranquillo ragazzino circondato da persone che lo amano, ha un gruppo di amici con cui si relaziona nelle sue modalità, fatte di "non verbale" ma altrettanto e, anzi, ancor più efficaci. Gesti, carezze, baci, sorrisi, piccoli versetti, routine quotidiane rassicuranti e salvifiche: questo è il colorato "mondo di Leo", un mondo che lascia spazio all''amore e alla tolleranza, alla gioia e alla consapevolezza di essere "diverso ma uguale", uguale nell''amore che sa trasmettere a chi gli è vicino e a chi si prende cura di lui.',
  desc_en = 'Leo is a sweet 20-year-old young man. He was born in March 2006, and from the very start he was a fighter. His life has been marked, from his very first hours, by important gastrointestinal disorders, hypotonia, and breathing problems. But his smile and his determination have accompanied us from the very first moment. He began fighting out of love for life, with incredible courage and a boundless love for all of us who were and still are by his side.

He is a young man who, initially fearful of every new experience, gradually opened up to the outside world, showing ever greater confidence in himself and others. Today he is a sweet and calm young man surrounded by people who love him. He has a group of friends with whom he relates in his own ways — made of "non-verbal" communication but equally and indeed even more effective. Gestures, caresses, kisses, smiles, small sounds, reassuring and life-saving daily routines: this is the colourful "world of Leo", a world that makes room for love and tolerance, for joy and for the awareness of being "different but equal" — equal in the love he transmits to those close to him and those who care for him.'
WHERE nome = 'Leonardo' AND nazione = 'IT';

-- ─── 3. NUOVI EVENTI: 20 SETTEMBRE 2026 ──────────────────────────────────────
INSERT OR IGNORE INTO eventi (titolo_it, titolo_en, data_evento, luogo, desc_it, desc_en, img_url, url_esterno, categoria, stato, ordine, attivo)
VALUES (
  'Incontro delle Famiglie ReNU',
  'ReNU Families Meeting',
  '2026-09-20',
  'Sala Amenities – Torre D, Bosco Verticale, Via Confalonieri 6, Milano',
  'Un pomeriggio dedicato alle famiglie ReNU: ci ritroviamo per una merenda insieme, per conoscere le ultime novità dell''associazione e per dare il benvenuto alle nuove famiglie. Sarà anche l''occasione per le riprese video del nostro spot ReNU. Ore 15:30 – ingresso gratuito.

Programma:
• Merenda insieme
• Le ultime novità dell''Associazione
• Conosciamo le nuove famiglie
• Riprese per il video spot ReNU',
  'An afternoon dedicated to ReNU families: we meet for a snack together, to learn the latest news from the association and to welcome new families. We will also film our ReNU video spot. 3:30 PM – free entry.

Programme:
• Snack together
• Latest news from the Association
• Meet new families
• Filming for the ReNU video spot',
  NULL,
  NULL,
  'incontro',
  'confermato',
  10,
  1
);

-- ─── 4. NUOVO EVENTO: PUNTO DI ASCOLTO (MENSILE) ─────────────────────────────
INSERT OR IGNORE INTO eventi (titolo_it, titolo_en, data_evento, luogo, desc_it, desc_en, img_url, url_esterno, categoria, stato, ordine, attivo)
VALUES (
  'Punto di Ascolto per le Famiglie ReNU',
  'ReNU Families Listening Point',
  '2026-09-30',
  'Online – ogni ultimo mercoledì del mese',
  'Nasce uno spazio virtuale dedicato alle famiglie ReNU: un incontro semplice e informale, come ritrovarsi tra amici per raccontarsi, ascoltarsi, scambiarsi esperienze e sostenersi.

L''incontro si svolge online ogni ultimo mercoledì del mese, dalle 18:30 alle 19:30.

Prossimi appuntamenti:
• Mercoledì 30 settembre 2026
• Mercoledì 28 ottobre 2026
• Mercoledì 25 novembre 2026

Il link per partecipare verrà inviato direttamente alle famiglie di volta in volta.

Potrete collegarvi quando vi è possibile, anche soltanto per una parte dell''incontro: per raccontarvi, sfogarvi, chiedere un consiglio, condividere un progresso, ascoltare o semplicemente stare insieme. NOI CI SIAMO.',
  'A virtual space for ReNU families: a simple and informal meeting, like getting together with friends to share, listen, exchange experiences and support each other.

The meeting takes place online every last Wednesday of the month, from 6:30 PM to 7:30 PM.

Upcoming dates:
• Wednesday 30 September 2026
• Wednesday 28 October 2026
• Wednesday 25 November 2026

The link to join will be sent directly to families each time.

You can join when you can, even just for part of the meeting: to share, vent, ask for advice, share a milestone, listen or simply be together. WE ARE HERE.',
  NULL,
  NULL,
  'webinar',
  'confermato',
  20,
  1
);
