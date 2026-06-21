-- ─── MIGRAZIONE 0005: Storie italiane mancanti + Pubblicazioni + Progetto Vita ─
-- Data: 2026-06-21
-- Fonte: Google Drive https://drive.google.com/drive/folders/1b2SDQ1sJSUjny6IXAg2ZbRvjmWWZ_vEN
-- Cartelle: "immagini sito" (storie .docx) + "Media & Pubblicazioni" (docx/pdf)

-- ─── 1. AGGIORNAMENTO STORIE ITALIANE ESISTENTI con testo completo ─────────────

-- VITTORIA (id=6 in produzione): storia completa da "Ciao a tutti amici.docx"
UPDATE storie SET
  desc_it = 'Ciao a tutti amici!!!! Mi chiamo Vittoria, ho 14 anni e vivo in Italia a Milano. Sono una ragazzina ReNU. Finalmente il mio papà e la mia mamma lo sanno — hanno scoperto la mia malattia nel 2024. Sono una ragazzina molto brava, dolce ed estremamente socievole (abbraccio e bacio volentieri), ma sono anche molto testarda. Adoro l''acqua, giocare a palla, l''altalena. Mi piacciono tanto i libri, i treni, gli autobus e le macchine. Ascolto la musica di cantanti che amo e rido da matti quando gli animali fanno i loro versi! Sono molto curiosa ed entusiasta. Comunico con la CAA perché non sono verbale, ma mi faccio capire bene da tutti, sia con i gesti che con le mie espressioni facciali. Sono certa di diventare sempre più brava, ma soprattutto adesso ho tanti amici come me e questo non può che essere una gioia!',
  desc_en = 'Hello everyone! My name is Vittoria, I am 14 years old and I live in Milan, Italy. I am a ReNU girl — my parents found out about my condition in 2024. I am a very good, sweet and extremely sociable girl (I love hugs and kisses), but I am also very stubborn. I love water, playing ball, and swings. I love books, trains, buses and cars. I listen to music and laugh so hard when animals make their sounds! I am very curious and enthusiastic. I communicate using AAC because I am non-verbal, but I make myself understood well by everyone. I am sure I will keep improving, and now I have so many friends like me — that can only be a joy!',
  desc_fr = 'Bonjour à tous ! Je m''appelle Vittoria, j''ai 14 ans et je vis à Milan, en Italie. Je suis une fille ReNU — mes parents ont découvert ma maladie en 2024. Je suis très gentille, douce et extrêmement sociable, mais aussi très têtue. J''adore l''eau, jouer au ballon et la balançoire. J''aime les livres, les trains, les bus et les voitures. J''écoute de la musique et je ris beaucoup quand les animaux font leurs bruits ! Je suis très curieuse et enthousiaste. Je communique avec la CAA car je ne parle pas, mais je me fais comprendre par tout le monde. Je suis sûre de devenir de plus en plus habile, et maintenant j''ai tellement d''amis comme moi !',
  desc_es = '¡Hola a todos! Me llamo Vittoria, tengo 14 años y vivo en Milán, Italia. Soy una chica ReNU — mis padres descubrieron mi condición en 2024. Soy muy buena, dulce y extremadamente sociable, pero también muy terca. Me encanta el agua, jugar a la pelota y los columpios. Me gustan mucho los libros, los trenes, los autobuses y los coches. Escucho música y me río muchísimo cuando los animales hacen sus sonidos. Soy muy curiosa y entusiasta. Me comunico con CAA porque no soy verbal, pero me hago entender por todos. ¡Estoy segura de mejorar cada día, y ahora tengo tantos amigos como yo!',
  desc_de = 'Hallo alle! Ich heiße Vittoria, bin 14 Jahre alt und lebe in Mailand, Italien. Ich bin ein ReNU-Mädchen — meine Eltern haben meine Erkrankung 2024 entdeckt. Ich bin sehr brav, süß und extrem gesellig, aber auch sehr stur. Ich liebe Wasser, Ballspiele und Schaukeln. Ich liebe Bücher, Züge, Busse und Autos. Ich höre Musik und lache laut, wenn Tiere ihre Geräusche machen! Ich bin sehr neugierig und begeistert. Ich kommuniziere mit AAC, weil ich nicht verbal bin, aber ich mache mich allen verständlich. Ich bin sicher, immer besser zu werden, und jetzt habe ich so viele Freunde wie ich!'
WHERE nome = 'Vittoria' AND nazione = 'IT';

-- MEILDA (id=5): storia completa da "presentazione Meilda.docx"
UPDATE storie SET
  desc_it = 'Ciao, mi chiamo Meilda, ho 16 anni. Sono nata a Monza nel 2009. Appena nata ero una bambina paffutella, ma poi ho iniziato a perdere peso e mangiare sempre meno. A pochi mesi mi nutrivo con un sondino nasogastrico, che riuscivo sempre a togliermi — finché i miei genitori hanno deciso di toglierlo definitivamente. Da quel momento ho iniziato a mangiare da sola, un cucchiaino alla volta. Ho lottato con la mia ipotonia: a 3 anni, grazie alla fisioterapia, sono riuscita a camminare. Mi è stata diagnosticata la Glomerulosclerosi focale — il dott. Morello mi segue con attenzione ogni 6 mesi. Ad oggi cammino da sola, ho ancora qualche difficoltà nella comunicazione ma riesco a farmi capire. Mi piace tanto ridere e scherzare con la mia famiglia, andare a scuola e al centro diurno, e amo la musica e i giri in macchina la sera. A settembre 2024 mi è stata diagnosticata la Sindrome RNU4-2.',
  desc_en = 'Hello, my name is Meilda, I am 16 years old. I was born in Monza in 2009. Right after birth I was a chubby baby, but then I started losing weight and eating less and less. At a few months old I was fed through a nasogastric tube, which I always managed to remove — until my parents decided to remove it permanently. From that moment I started eating on my own, one teaspoon at a time. I struggled with hypotonia: at age 3, thanks to physiotherapy, I managed to walk. I was diagnosed with focal glomerulosclerosis — Dr. Morello follows me carefully every 6 months. Today I walk independently and still have some communication difficulties but manage to make myself understood. I love laughing and joking with my family, going to school and the day centre, and I love music and evening drives. In September 2024 I was diagnosed with RNU4-2 Syndrome.',
  desc_fr = 'Bonjour, je m''appelle Meilda, j''ai 16 ans. Je suis née à Monza en 2009. À la naissance j''étais une bébé potelée, mais ensuite j''ai commencé à perdre du poids et à moins manger. À quelques mois, je me nourrissais par sonde nasogastrique — que j''arrivais toujours à retirer — jusqu''à ce que mes parents décident de l''enlever définitivement. Depuis, j''ai commencé à manger seule, une petite cuillère à la fois. J''ai lutté contre l''hypotonie : à 3 ans, grâce à la kinésithérapie, j''ai réussi à marcher. On m''a diagnostiqué une glomérulosclérose focale — le Dr Morello me suit avec attention tous les 6 mois. Aujourd''hui je marche seule, j''ai encore quelques difficultés de communication mais je me fais comprendre. J''adore rire avec ma famille, aller à l''école et au centre de jour, et j''aime la musique. En septembre 2024, on m''a diagnostiqué le syndrome RNU4-2.',
  desc_es = 'Hola, me llamo Meilda, tengo 16 años. Nací en Monza en 2009. Al nacer era una bebé gordita, pero luego empecé a perder peso y comer cada vez menos. Con pocos meses me alimentaban por sonda nasogástrica — que siempre lograba quitarme — hasta que mis padres decidieron quitarla definitivamente. Desde entonces empecé a comer sola, una cucharadita a la vez. Luché contra la hipotonía: a los 3 años, gracias a la fisioterapia, logré caminar. Me diagnosticaron glomeruloesclerosis focal — el Dr. Morello me controla con atención cada 6 meses. Hoy camino sola, todavía tengo algunas dificultades de comunicación pero logro hacerme entender. Me encanta reír con mi familia, ir al colegio y al centro de día, y adoro la música. En septiembre de 2024 me diagnosticaron el Síndrome RNU4-2.',
  desc_de = 'Hallo, ich heiße Meilda, bin 16 Jahre alt. Ich wurde 2009 in Monza geboren. Als Baby war ich mollig, aber dann begann ich Gewicht zu verlieren und immer weniger zu essen. Mit wenigen Monaten wurde ich über eine nasogastrale Sonde ernährt — die ich immer wieder entfernte — bis meine Eltern sich entschieden, sie dauerhaft zu entfernen. Seitdem begann ich alleine zu essen, einen Teelöffel nach dem anderen. Ich kämpfte gegen meine Hypotonie: Mit 3 Jahren konnte ich dank Physiotherapie laufen. Mir wurde fokale Glomerulosklerose diagnostiziert — Dr. Morello betreut mich sorgfältig alle 6 Monate. Heute gehe ich selbstständig, habe noch einige Kommunikationsschwierigkeiten, mache mich aber verständlich. Ich liebe es, mit meiner Familie zu lachen, zur Schule zu gehen und Musik zu hören. Im September 2024 wurde mir das RNU4-2-Syndrom diagnostiziert.'
WHERE nome = 'Meilda' AND nazione = 'IT';

-- MAYA / MAYA SOFIA (id=4): storia completa da "Mi chiamo Maya Sofia (1).docx"
UPDATE storie SET
  nome = 'Maya Sofia',
  desc_it = 'Mi chiamo Maya Sofia, ho undici anni e sono nata a Milano. Nei primi giorni è emerso che avevo difficoltà ad alimentarmi ed ero spesso molto addormentata. Poco dopo abbiamo scoperto che ero ipotonica e ogni piccolo progresso richiedeva grande impegno — ora però mangio molto, dopo tanta terapia! Ho iniziato a gattonare a due anni, diventando velocissima. A quasi quattro anni, dopo tanta fisioterapia, ho mosso i miei primi passi. Non parlo ancora, ma comunico attraverso gesti, espressioni e qualche piccola parola. Mi faccio capire molto bene: quando apprendo un concetto, lo faccio mio e non lo dimentico. Sono testarda, allegra e sorridente. Ho seguito percorsi di fisioterapia, logopedia, psicomotricità e ho partecipato con entusiasmo a teatro e piscina — amo profondamente l''acqua. Sto lavorando sul linguaggio verbale, imparando vocali e prime parole. La mia determinazione è forte. Sono una bambina abitudinaria, amo molto gli animali. A marzo 2025 ho ricevuto la diagnosi di Sindrome di ReNU e continuo il mio percorso con forza e coraggio.',
  desc_en = 'My name is Maya Sofia, I am eleven years old and I was born in Milan. In the first days it emerged that I had difficulty feeding and was often very sleepy. Shortly after we discovered I was hypotonic and every small step required great effort — but now I eat a lot, after so much therapy! I started crawling at two, becoming very fast. At almost four years old, after lots of physiotherapy, I took my first steps. I don''t speak yet, but I communicate through gestures, expressions and a few small words. I make myself understood very well: when I learn a concept, I make it mine and never forget it. I am stubborn, cheerful and smiley. I have followed physiotherapy, speech therapy, psychomotor sessions and enthusiastically participated in theatre and swimming — I deeply love water. I am working on verbal language, learning vowels and first words. My determination is strong. I love animals. In March 2025 I received the diagnosis of ReNU Syndrome and I continue my journey with strength and courage.',
  desc_fr = 'Je m''appelle Maya Sofia, j''ai onze ans et je suis née à Milan. Dans les premiers jours, il est apparu que j''avais du mal à m''alimenter et que je dormais souvent beaucoup. Peu après nous avons découvert que j''étais hypotonique et chaque petit progrès demandait beaucoup d''efforts — mais maintenant je mange beaucoup, après beaucoup de thérapie ! J''ai commencé à ramper à deux ans, devenant très rapide. À presque quatre ans, après beaucoup de kinésithérapie, j''ai fait mes premiers pas. Je ne parle pas encore, mais je communique par gestes, expressions et quelques petits mots. Je me fais très bien comprendre : quand j''apprends quelque chose, je le retiens. Je suis têtue, joyeuse et souriante. J''aime profondément l''eau. En mars 2025 j''ai reçu le diagnostic du Syndrome ReNU et je continue mon chemin avec force et courage.',
  desc_es = 'Me llamo Maya Sofia, tengo once años y nací en Milán. En los primeros días resultó que tenía dificultades para alimentarme y dormía mucho. Poco después descubrimos que era hipotónica y cada pequeño progreso requería gran esfuerzo — ¡pero ahora como mucho, después de mucha terapia! Empecé a gatear a los dos años, siendo muy rápida. A casi cuatro años, después de mucha fisioterapia, di mis primeros pasos. Todavía no hablo, pero me comunico con gestos, expresiones y algunas palabras. Me hago entender muy bien. Soy terca, alegre y sonriente. Amo profundamente el agua. En marzo de 2025 recibí el diagnóstico del Síndrome ReNU y continúo mi camino con fuerza y valentía.',
  desc_de = 'Ich heiße Maya Sofia, bin elf Jahre alt und wurde in Mailand geboren. In den ersten Tagen zeigte sich, dass ich Ernährungsschwierigkeiten hatte und oft sehr schläfrig war. Kurz danach stellten wir fest, dass ich hypoton war und jeder kleine Fortschritt große Anstrengung erforderte — aber jetzt esse ich nach vieler Therapie sehr gut! Ich begann mit zwei Jahren zu krabbeln und wurde sehr schnell. Mit fast vier Jahren machte ich nach viel Physiotherapie meine ersten Schritte. Ich spreche noch nicht, kommuniziere aber durch Gesten, Ausdrücke und einige Wörter. Ich liebe Wasser sehr. Im März 2025 erhielt ich die Diagnose ReNU-Syndrom und setze meinen Weg mit Stärke und Mut fort.'
WHERE nome = 'Maya' AND nazione = 'IT';

-- ─── 2. NUOVO PROGETTO "Patologie RENU – Progetto Vita" ───────────────────────
-- La tabella storie non ha una colonna "tipo_documento" per progetti
-- Aggiungiamo come storia speciale con tipo='progetto' oppure usiamo una nuova tabella
-- Usiamo la tabella brochure esistente che è adatta per documenti/progetti

INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1WpwAG_WlMYm3nlb2ZZ_KsRUipf2SISLN/view',
  NULL,
  'Patologie ReNU – Progetto Vita',
  'ReNU Pathologies – Life Project',
  'Pathologies ReNU – Projet Vie',
  'Patologías ReNU – Proyecto Vida',
  'ReNU-Pathologien – Lebensprojekt',
  'Documento illustrativo sulle patologie associate alla Sindrome ReNU e sul Progetto Vita: un percorso di supporto globale per le famiglie e i bambini con ReNU, con indicazioni su terapie, risorse e strumenti di inclusione.',
  'Illustrative document on pathologies associated with ReNU Syndrome and the Life Project: a global support pathway for families and children with ReNU, with guidance on therapies, resources and inclusion tools.',
  'Document illustratif sur les pathologies associées au Syndrome ReNU et le Projet Vie : un parcours de soutien global pour les familles et les enfants ReNU, avec des indications sur les thérapies, ressources et outils d''inclusion.',
  'Documento ilustrativo sobre las patologías asociadas al Síndrome ReNU y el Proyecto Vida: un recorrido de apoyo global para las familias y niños con ReNU, con indicaciones sobre terapias, recursos y herramientas de inclusión.',
  'Illustratives Dokument über die mit dem ReNU-Syndrom assoziierten Pathologien und das Lebensprojekt: ein globaler Unterstützungsweg für Familien und Kinder mit ReNU, mit Hinweisen zu Therapien, Ressourcen und Inklusionsmitteln.',
  1, 1
);

-- ─── 3. PUBBLICAZIONI SCIENTIFICHE ────────────────────────────────────────────
-- Inserisce le pubblicazioni nella tabella brochure (già progettata per media/documenti)

-- Pubblicazione: ricercatori svedesi - riprogrammazione cellule cerebrali
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/12wfdI7tEqMO-QGlPiat0tAbaKRfpF4dD/view',
  NULL,
  'Ricercatori svedesi riprogrammano cellule cerebrali',
  'Swedish Researchers Reprogram Brain Cells',
  'Des chercheurs suédois reprogramment des cellules cérébrales',
  'Investigadores suecos reprograman células cerebrales',
  'Schwedische Forscher programmieren Gehirnzellen um',
  'Ricercatori dell''Università di Lund hanno sviluppato un metodo per trasformare cellule gliali di supporto in interneuroni parvalbumina — i "freni" del cervello. Questa scoperta apre la strada a future terapie geniche per schizofrenia, epilessia e Alzheimer.',
  'Researchers at Lund University have developed a method to transform supportive glial cells into parvalbumin interneurons — the brain''s "brakes". This discovery opens the path to future gene therapies for schizophrenia, epilepsy and Alzheimer''s.',
  'Des chercheurs de l''Université de Lund ont développé une méthode pour transformer des cellules gliales de soutien en interneurones à parvalbumine — les "freins" du cerveau. Cette découverte ouvre la voie à de futures thérapies géniques pour la schizophrénie, l''épilepsie et Alzheimer.',
  'Investigadores de la Universidad de Lund han desarrollado un método para transformar células gliales de soporte en interneuronas parvalbumina — los "frenos" del cerebro. Este descubrimiento abre el camino a futuras terapias génicas para esquizofrenia, epilepsia y Alzheimer.',
  'Forscher der Universität Lund haben eine Methode entwickelt, um Stützgliazellen in Parvalbumin-Interneurone — die "Bremsen" des Gehirns — umzuprogrammieren. Diese Entdeckung ebnet den Weg für künftige Gentherapien bei Schizophrenie, Epilepsie und Alzheimer.',
  2, 1
);

-- Pubblicazione: Caratteristiche Longitudinali del Fenotipo Comportamentale (Policlinico Milano)
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1oyFL7hoxnco9uBN9jqwvbjUM0cul00LF/view',
  NULL,
  'Caratteristiche Longitudinali del Fenotipo Comportamentale nella Sindrome RNU4-2',
  'Longitudinal Behavioral Phenotype Characteristics in RNU4-2 Syndrome',
  'Caractéristiques Longitudinales du Phénotype Comportemental dans le Syndrome RNU4-2',
  'Características Longitudinales del Fenotipo Conductual en el Síndrome RNU4-2',
  'Longitudinale Verhaltensphänotyp-Merkmale beim RNU4-2-Syndrom',
  'Studio del Policlinico di Milano (UONPIA): prima caratterizzazione neuropsichiatrica longitudinale di pazienti con varianti RNU4-2, dall''infanzia all''adolescenza. Evidenzia ritardo cognitivo moderato-grave, ASD, deficit linguistici e attentivi come tratti distintivi della sindrome. Pubblicato su American Journal of Medical Genetics B, Febbraio 2026. Autori: Ajmone, Rigamonti, Brasca, Milani et al.',
  'Study from Policlinico di Milano (UONPIA): first longitudinal neuropsychiatric characterization of patients with RNU4-2 variants, from childhood to adolescence. Highlights moderate-to-severe cognitive delay, ASD, language and attention deficits as hallmarks of the syndrome. Published in American Journal of Medical Genetics B, February 2026. Authors: Ajmone, Rigamonti, Brasca, Milani et al.',
  'Étude du Policlinico di Milano (UONPIA) : première caractérisation neuropsychiatrique longitudinale de patients porteurs de variants RNU4-2, de l''enfance à l''adolescence. Met en évidence le retard cognitif modéré à sévère, le TSA, les déficits du langage et de l''attention comme caractéristiques de la syndrome. Publié dans American Journal of Medical Genetics B, février 2026.',
  'Estudio del Policlinico di Milano (UONPIA): primera caracterización neuropsiquiátrica longitudinal de pacientes con variantes RNU4-2, desde la infancia hasta la adolescencia. Destaca el retraso cognitivo moderado-grave, TEA, déficits lingüísticos y de atención como rasgos distintivos del síndrome. Publicado en American Journal of Medical Genetics B, febrero 2026.',
  'Studie des Policlinico di Milano (UONPIA): erste longitudinale neuropsychiatrische Charakterisierung von Patienten mit RNU4-2-Varianten vom Kindes- bis Jugendalter. Hebt mäßige bis schwere kognitive Verzögerung, ASD sowie Sprach- und Aufmerksamkeitsdefizite als Kennzeichen des Syndroms hervor. Veröffentlicht im American Journal of Medical Genetics B, Februar 2026.',
  3, 1
);

-- Pubblicazione: Febbraio 2026 - Aggiornamenti scientifici mensili
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1Sg24rDxNYdEeBy_IzeGLltT8hTC2m_ZA/view',
  NULL,
  'Aggiornamenti Scientifici – Febbraio 2026',
  'Scientific Updates – February 2026',
  'Mises à jour scientifiques – Février 2026',
  'Actualizaciones Científicas – Febrero 2026',
  'Wissenschaftliche Updates – Februar 2026',
  'Aggiornamento mensile curato dalla Dr. Claudia Gravaghi, PhD. Include: sintesi del 1° Congresso Internazionale ReNU (luglio 2025, New York); studio longitudinale sul fenotipo comportamentale RNU4-2 (Am. J. Med. Genetics B); case report su proteinuria associata a variante RNU4-2 de novo (Kidney Medicine, dic. 2025).',
  'Monthly update curated by Dr. Claudia Gravaghi, PhD. Includes: summary of the 1st International ReNU Conference (July 2025, New York); longitudinal study on RNU4-2 behavioral phenotype (Am. J. Med. Genetics B); case report on proteinuria associated with de novo RNU4-2 variant (Kidney Medicine, Dec. 2025).',
  'Mise à jour mensuelle rédigée par la Dr Claudia Gravaghi, PhD. Comprend : synthèse du 1er Congrès International ReNU (juillet 2025, New York) ; étude longitudinale sur le phénotype comportemental RNU4-2 (Am. J. Med. Genetics B) ; rapport de cas sur protéinurie associée à un variant RNU4-2 de novo (Kidney Medicine, déc. 2025).',
  'Actualización mensual elaborada por la Dra. Claudia Gravaghi, PhD. Incluye: síntesis del 1er Congreso Internacional ReNU (julio 2025, Nueva York); estudio longitudinal sobre fenotipo conductual RNU4-2 (Am. J. Med. Genetics B); reporte de caso sobre proteinuria asociada a variante RNU4-2 de novo (Kidney Medicine, dic. 2025).',
  'Monatliches Update von Dr. Claudia Gravaghi, PhD. Enthält: Zusammenfassung des 1. Internationalen ReNU-Kongresses (Juli 2025, New York); Longitudinalstudie zum Verhaltensphänotyp RNU4-2 (Am. J. Med. Genetics B); Fallbericht über Proteinurie assoziiert mit de-novo-RNU4-2-Variante (Kidney Medicine, Dez. 2025).',
  4, 1
);

-- Pubblicazione: Aprile 2026 - Nuove scoperte su RNU4-2 e RNU2-2
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1R-wk8-U5DkCIpxE1jo1N_TsuXvKXB8tJ/view',
  NULL,
  'Nuove Pubblicazioni Scientifiche – Aprile 2026',
  'New Scientific Publications – April 2026',
  'Nouvelles Publications Scientifiques – Avril 2026',
  'Nuevas Publicaciones Científicas – Abril 2026',
  'Neue Wissenschaftliche Publikationen – April 2026',
  'Aggiornamento curato dalla Dr. Claudia Gravaghi, PhD. Tre pubblicazioni importanti su Nature e Nature Genetics: 1) Varianti recessive di RNU4-2 e alterazioni della sostanza bianca cerebrale (Nature Genetics, apr. 2026); 2) Saturation editing di RNU4-2 — forme dominanti vs recessive (Nature, apr. 2026); 3) Prima identificazione prenatale di delezione RNU4-2/RNU4-1. La ricerca sui geni RNU sta accelerando.',
  'Update curated by Dr. Claudia Gravaghi, PhD. Three important publications in Nature and Nature Genetics: 1) Recessive RNU4-2 variants and cerebral white matter changes (Nature Genetics, Apr. 2026); 2) Saturation editing of RNU4-2 — dominant vs recessive forms (Nature, Apr. 2026); 3) First prenatal identification of RNU4-2/RNU4-1 deletion. Research on RNU genes is accelerating.',
  'Mise à jour rédigée par la Dr Claudia Gravaghi, PhD. Trois publications importantes dans Nature et Nature Genetics : 1) Variants récessifs de RNU4-2 et altérations de la substance blanche cérébrale (Nature Genetics, avr. 2026) ; 2) Saturation editing de RNU4-2 — formes dominantes vs récessives (Nature, avr. 2026) ; 3) Première identification prénatale de délétion RNU4-2/RNU4-1. La recherche sur les gènes RNU s''accélère.',
  'Actualización de la Dra. Claudia Gravaghi, PhD. Tres publicaciones importantes en Nature y Nature Genetics: 1) Variantes recesivas de RNU4-2 y alteraciones de sustancia blanca cerebral (Nature Genetics, abr. 2026); 2) Saturation editing de RNU4-2 — formas dominantes vs recesivas (Nature, abr. 2026); 3) Primera identificación prenatal de deleción RNU4-2/RNU4-1. La investigación sobre genes RNU se acelera.',
  'Update von Dr. Claudia Gravaghi, PhD. Drei wichtige Veröffentlichungen in Nature und Nature Genetics: 1) Rezessive RNU4-2-Varianten und zerebrale Veränderungen der weißen Substanz (Nature Genetics, Apr. 2026); 2) Sättigungs-Editing von RNU4-2 — dominante vs rezessive Formen (Nature, Apr. 2026); 3) Erste pränatale Identifizierung einer RNU4-2/RNU4-1-Deletion. Die Forschung zu RNU-Genen beschleunigt sich.',
  5, 1
);

-- Pubblicazione: "file piu recente per sito pubblicazioni.docx" (aggiornamento cumulativo)
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/12GZcBCWsCbQxdjier9URlugOtNKVKvg8/view',
  NULL,
  'Pubblicazioni Scientifiche RNU – Aggiornamento Completo',
  'RNU Scientific Publications – Complete Update',
  'Publications Scientifiques RNU – Mise à Jour Complète',
  'Publicaciones Científicas RNU – Actualización Completa',
  'RNU Wissenschaftliche Publikationen – Vollständiges Update',
  'Documento con le più recenti pubblicazioni scientifiche sui geni RNU4-2 e RNU2-2 pubblicate su Nature e Nature Genetics. Include la scoperta delle varianti recessive RNU4-2 con alterazioni della sostanza bianca, il saturation editing che chiarisce forme dominanti e recessive, e lo studio su RNU2-2 come causa più prevalente di disturbo recessivo del neurosviluppo. Curato da Dr. Claudia Gravaghi, PhD — Associazione Famiglie ReNU Italia.',
  'Document with the latest scientific publications on RNU4-2 and RNU2-2 genes published in Nature and Nature Genetics. Includes the discovery of recessive RNU4-2 variants with white matter changes, saturation editing clarifying dominant and recessive forms, and the study on RNU2-2 as the most prevalent known recessive neurodevelopmental disorder cause. Curated by Dr. Claudia Gravaghi, PhD — ReNU Italia Families Association.',
  'Document avec les dernières publications scientifiques sur les gènes RNU4-2 et RNU2-2 publiées dans Nature et Nature Genetics. Comprend la découverte de variants récessifs RNU4-2 avec altérations de la substance blanche, le saturation editing clarifiant formes dominantes et récessives, et l''étude sur RNU2-2 comme cause la plus prévalente de trouble récessif du neurodéveloppement. Rédigé par Dr Claudia Gravaghi, PhD.',
  'Documento con las últimas publicaciones científicas sobre genes RNU4-2 y RNU2-2 publicadas en Nature y Nature Genetics. Incluye el descubrimiento de variantes recesivas RNU4-2 con alteraciones de sustancia blanca, el saturation editing que clarifica formas dominantes y recesivas, y el estudio sobre RNU2-2 como causa más prevalente de trastorno recesivo del neurodesarrollo. Elaborado por Dra. Claudia Gravaghi, PhD.',
  'Dokument mit den neuesten wissenschaftlichen Veröffentlichungen zu den Genen RNU4-2 und RNU2-2 in Nature und Nature Genetics. Enthält die Entdeckung rezessiver RNU4-2-Varianten mit Veränderungen der weißen Substanz, Sättigungs-Editing zur Klärung dominanter und rezessiver Formen, und die Studie zu RNU2-2 als häufigster bekannter Ursache rezessiver Entwicklungsstörungen. Zusammengestellt von Dr. Claudia Gravaghi, PhD.',
  6, 1
);

-- Guida all'epilessia tradotta in italiano
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1k6Kbw6a8FNRgYs-PFlYVcCIiruFl9hQr/view',
  NULL,
  'Guida all''Epilessia – Traduzione Italiana',
  'Epilepsy Guide – Italian Translation',
  'Guide sur l''Épilepsie – Traduction Italienne',
  'Guía de Epilepsia – Traducción Italiana',
  'Epilepsie-Leitfaden – Italienische Übersetzung',
  'Traduzione italiana della guida sull''epilessia, con informazioni pratiche su tipi di crisi, farmaci antiepilettici, gestione delle emergenze e supporto per famiglie di bambini con sindrome ReNU e condizioni correlate.',
  'Italian translation of the epilepsy guide, with practical information on seizure types, anti-epileptic medications, emergency management and support for families of children with ReNU syndrome and related conditions.',
  'Traduction italienne du guide sur l''épilepsie, avec des informations pratiques sur les types de crises, les médicaments antiépileptiques, la gestion des urgences et le soutien aux familles d''enfants atteints du syndrome ReNU.',
  'Traducción italiana de la guía de epilepsia, con información práctica sobre tipos de crisis, medicamentos antiepilépticos, manejo de emergencias y apoyo para familias de niños con síndrome ReNU y condiciones relacionadas.',
  'Italienische Übersetzung des Epilepsie-Leitfadens mit praktischen Informationen zu Anfallsarten, Antiepileptika, Notfallmanagement und Unterstützung für Familien von Kindern mit ReNU-Syndrom.',
  7, 1
);

-- PDF documento febbraio 2026
INSERT OR IGNORE INTO brochure (
  file_name, thumb_id,
  titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de,
  desc_it, desc_en, desc_fr, desc_es, desc_de,
  ordine, attiva
) VALUES (
  'https://drive.google.com/file/d/1E8uMZCUkBv9chgFf3kaYJSu7G-Q2WVMb/view',
  NULL,
  'Documento Scientifico – Febbraio 2026',
  'Scientific Document – February 2026',
  'Document Scientifique – Février 2026',
  'Documento Científico – Febrero 2026',
  'Wissenschaftliches Dokument – Februar 2026',
  'Documento scientifico relativo alle ultime ricerche sulla Sindrome ReNU, febbraio 2026.',
  'Scientific document related to the latest research on ReNU Syndrome, February 2026.',
  'Document scientifique relatif aux dernières recherches sur le Syndrome ReNU, février 2026.',
  'Documento científico relacionado con las últimas investigaciones sobre el Síndrome ReNU, febrero de 2026.',
  'Wissenschaftliches Dokument zu den neuesten Forschungen zum ReNU-Syndrom, Februar 2026.',
  8, 1
);
