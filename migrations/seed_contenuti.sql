-- ─────────────────────────────────────────────────────────────────────────────
-- SEED contenuti – Sindrome ReNU Italia APS
-- Estrazione di tutti i contenuti hardcoded da src/index.tsx
-- Data: 2026-06-20
-- ─────────────────────────────────────────────────────────────────────────────

-- ─── FAQ ─────────────────────────────────────────────────────────────────────
-- Schema: id, categoria, domanda_it, domanda_en, risposta_it, risposta_en, ordine, attiva

INSERT OR IGNORE INTO faq (categoria, domanda_it, domanda_en, risposta_it, risposta_en, ordine, attiva) VALUES
('diagnosi',
 'Quando va fatta la diagnosi?',
 'When should diagnosis be made?',
 'Prima possibile. Contattare centri di genetica clinica con esperienza nelle malattie rare. Per diagnosticare RNU4-2 in Italia è necessario il Sequenziamento dell''Intero Genoma (WGS). Il WES non è in grado di rilevarlo.',
 'As soon as possible. Contact clinical genetics centers experienced in rare diseases. In Italy, Whole Genome Sequencing (WGS) is required to diagnose RNU4-2. WES cannot detect it.',
 10, 1),

('diagnosi',
 'La Sindrome ReNU è ereditaria?',
 'Is ReNU Syndrome hereditary?',
 'Nella maggior parte dei casi è sporadica (de novo). Il rischio di ricorrenza è basso ma va valutato con un genetista.',
 'In most cases it is sporadic (de novo). Recurrence risk is low but should be assessed with a geneticist.',
 20, 1),

('terapie',
 'Esistono terapie specifiche per ReNU?',
 'Are there specific therapies for ReNU?',
 'Al momento non esiste una terapia causale. Le terapie sono di supporto: fisioterapia, logopedia, CAA, terapia Feuerstein, ecc. Ogni percorso terapeutico deve essere personalizzato in base ai bisogni del bambino e condiviso con i professionisti di riferimento.',
 'Currently no causal therapy exists. Therapies are supportive (physiotherapy, speech therapy, AAC, Feuerstein, etc.). Each therapeutic path must be personalized based on the child''s needs.',
 30, 1),

('comunita',
 'Come posso connettermi con altre famiglie italiane?',
 'How can I connect with other Italian families?',
 'Scrivici a info@sindromerenu.it o unisciti al gruppo Facebook "Sindrome ReNU Italia". Puoi anche unirti alla chat WhatsApp della rete genitori italiani.',
 'Write to info@sindromerenu.it or join the Facebook group "Sindrome ReNU Italia". You can also join the Italian parent network WhatsApp chat.',
 40, 1),

('ricerca',
 'Come accedo ai contributi per la ricerca?',
 'How do I access research contributions?',
 'La ricerca avanza tramite studi internazionali (INDEED, RARE-X, GestaltMatcher). Prima di iscriversi a qualsiasi ricerca, crea un ID di Ricerca Clinica (CRID) su thecrid.org. Contattaci per informazioni su come partecipare.',
 'Research advances through international studies (INDEED, RARE-X, GestaltMatcher). Before enrolling in any research, create a Clinical Research ID (CRID) at thecrid.org. Contact us for information on how to participate.',
 50, 1),

('medici',
 'Dove posso trovare medici esperti in Italia?',
 'Where can I find expert doctors in Italy?',
 'Il comitato scientifico di Sindrome ReNU Italia è coordinato dalla Dr.ssa Donatella Milani. Contattaci a info@sindromerenu.it per informazioni sui centri WGS e medici esperti.',
 'The scientific committee is coordinated by Dr. Donatella Milani. Contact us at info@sindromerenu.it for information on WGS centers and expert physicians.',
 60, 1),

('diritti',
 'Come richiedere la Legge 104?',
 'How to apply for Law 104?',
 'Rivolgersi al proprio medico di base per ottenere il verbale di valutazione dell''handicap. Presentare domanda all''INPS tramite il sito inps.it o tramite un patronato (gratuito). Attendere la convocazione della Commissione Medica ASL. In caso di urgenza documentata, è possibile richiedere la visita d''urgenza. Ottenuto il verbale di handicap grave (art. 3 comma 3), si può procedere con le agevolazioni lavorative e scolastiche.',
 'Ask your family doctor for a disability assessment report. Submit an application to INPS via inps.it or through a free patronato. Wait for the Medical Commission (ASL) appointment. In documented urgent cases, you can request an urgent visit. Once the severe disability certificate (art. 3 comma 3) is obtained, you can proceed with work and school benefits.',
 70, 1),

('diritti',
 'Come richiedere il Pass Auto (Contrassegno Disabile)?',
 'How to get the Disabled Car Badge?',
 'Il bambino con Sindrome ReNU può avere diritto al contrassegno se ha difficoltà deambulatorie. Rivolgersi al proprio medico di base per ottenere una certificazione medica specifica. Presentare la domanda all''Ufficio Anagrafe del Comune di residenza. Il Comune rilascia il contrassegno dopo visita della commissione medica locale. Il contrassegno ha validità 5 anni (o permanente) e si rinnova con nuova certificazione.',
 'A ReNU child may qualify for the badge if they have walking difficulties. Ask your family doctor for a specific medical certificate. Submit the application to the Registry Office of your municipality. The municipality issues the badge after a local medical commission visit. The badge is valid for 5 years (or permanently) and renewed with new certification.',
 80, 1),

('diritti',
 'Come ottenere la Disability Card (Carta Europea della Disabilità)?',
 'How to get the Disability Card?',
 'La Disability Card si richiede tramite il sito INPS (myINPS) dopo aver ottenuto il riconoscimento di invalidità. È necessario avere il verbale di invalidità civile, cecità, sordità o handicap (Legge 104). Accedere a inps.it con SPID o CIE, cercare "Carta Europea della Disabilità". La card è gratuita e viene spedita a casa. Dà accesso ad agevolazioni in musei, trasporti, strutture pubbliche e private convenzionate.',
 'The Disability Card is requested via the INPS website (myINPS) after obtaining disability recognition. You need the civil disability, blindness, deafness or handicap certificate (Law 104). Log in to inps.it with SPID or CIE, search for "European Disability Card". The card is free and sent home.',
 90, 1),

('scuola',
 'Come richiedere il sostegno scolastico?',
 'How to request school support?',
 'Ottenere la certificazione di disabilità (Legge 104 art. 3 comma 1 o 3) e la diagnosi funzionale. Presentare la documentazione alla scuola prima dell''inizio dell''anno scolastico. La scuola convoca il GLHO per la definizione del PEI (Piano Educativo Individualizzato). L''insegnante di sostegno viene assegnato dall''USR. In caso di diniego o ore insufficienti, si può fare ricorso tramite il Difensore Civico o un legale. Hai diritto al PEI anche alla scuola dell''infanzia!',
 'Obtain the disability certificate (Law 104 art. 3 comma 1 or 3) and functional diagnosis. Submit documentation to the school before the start of the school year. The school convenes the GLHO to define the PEI (Individual Educational Plan). The support teacher is assigned by the Regional School Office (USR).',
 100, 1),

('bonus',
 'Quali bonus e agevolazioni sono accessibili?',
 'Which bonuses and benefits are available?',
 'Indennità di Accompagnamento INPS (~530 €/mese per chi non deambula). Assegno Unico INPS con maggiorazione per figli disabili. Detrazione IRPEF 19% per spese mediche e riabilitative. IVA agevolata 4% su ausili e dispositivi medici. Esenzione ticket sanitario per patologia. Agevolazioni acquisto veicoli adattati (IVA 4%). Fondo per le Persone con Disabilità (FNPS) tramite i Comuni. Rivolgiti a un patronato (CAAF, ACLI, CGIL, CISL, UIL) per consulenza gratuita.',
 'INPS Attendance Allowance (~€530/month). INPS Unique Allowance with supplement for disabled children. 19% IRPEF deduction for medical expenses. Reduced VAT (4%) on medical devices. Healthcare ticket exemption. Benefits for adapted vehicles. Contact a patronato for free advice.',
 110, 1);

-- ─── PUBBLICAZIONI SCIENTIFICHE ──────────────────────────────────────────────
-- Schema: id, autori, anno, titolo, rivista, pmid, doi, sintesi_it, sintesi_en, badge, ordine

INSERT OR IGNORE INTO pubblicazioni (autori, anno, titolo, rivista, pmid, doi, sintesi_it, sintesi_en, badge, ordine) VALUES
('Rius R, Blakes AJM, Chen Y, et al.',
 2026,
 'Biallelic variants in the noncoding RNA gene RNU4-2 cause a recessive neurodevelopmental syndrome with distinct white matter changes',
 'Nature Genetics. 2026 Apr;58(4):761-773.',
 '41951959',
 'https://pubmed.ncbi.nlm.nih.gov/41951959/',
 'Scoperta rivoluzionaria: le varianti bialleliche (recessive) in RNU4-2 causano una seconda sindrome del neurosviluppo, distinta da ReNU dominante, con caratteristiche cambiamenti della sostanza bianca cerebrale. Lo studio identifica 38 individui con varianti omozigoti o eterozigoti composte in RNU4-2, ampliando enormemente lo spettro delle malattie legate a questo gene.',
 'Groundbreaking discovery: biallelic (recessive) variants in RNU4-2 cause a second neurodevelopmental syndrome, distinct from dominant ReNU, with distinct white matter changes. The study identifies 38 individuals with homozygous or compound heterozygous variants in RNU4-2, greatly expanding the disease spectrum linked to this gene.',
 'NUOVO 2026',
 10),

('De Jonghe J, Kim HC, Adedeji A, et al.',
 2026,
 'Saturation editing of RNU4-2 reveals distinct dominant and recessive disorders',
 'Nature. 2026 Apr (Online ahead of print).',
 '41951737',
 'https://pubmed.ncbi.nlm.nih.gov/41951737/',
 'Studio di "saturation editing" su RNU4-2 che rivela due distinte malattie: una dominante (ReNU) e una recessiva. Mappa sistematicamente le conseguenze funzionali di ogni variante possibile nello snRNA spliceosomal, identificando le posizioni critiche e fornendo la base molecolare per distinguere e comprendere entrambe le sindromi.',
 'Saturation editing study of RNU4-2 revealing two distinct disorders: one dominant (ReNU) and one recessive. Systematically maps functional consequences of every possible variant in the spliceosomal snRNA, identifying critical positions and providing molecular basis to distinguish and understand both syndromes.',
 'NUOVO 2026',
 20),

('Leitão E, Santini A, Cogne B, et al.',
 2026,
 'Systematic analysis of snRNA genes reveals frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies',
 'Nature Genetics. 2026 Apr;58(4):782-797.',
 '41912934',
 'https://pubmed.ncbi.nlm.nih.gov/41912934/',
 'Analisi sistematica dei geni snRNA che rivela varianti frequenti in RNU2-2, gene correlato a RNU4-2, in encefalopatie dello sviluppo ed epilettiche sia dominanti che recessive. Lo studio amplia la comprensione del ruolo degli snRNA nelle malattie neurologiche rare e apre nuove prospettive diagnostiche per pazienti non diagnosticati.',
 'Systematic analysis of snRNA genes revealing frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies. The study broadens understanding of snRNA roles in rare neurological diseases and opens new diagnostic perspectives for undiagnosed patients.',
 '',
 30),

('Ajmone PF, Rigamonti C, Brasca F, Milani D, et al.',
 2026,
 'Longitudinal Behavior Phenotype Hallmarks in RNU4-2 Syndrome: Implications for Clinical Management',
 'Am J Med Genet B Neuropsychiatr Genet. 2026 Apr;201(3):205-211.',
 '41681065',
 'https://pubmed.ncbi.nlm.nih.gov/41681065/',
 'Studio italiano — con la partecipazione della Dr.ssa Donatella Milani, presidente del Comitato Scientifico di Sindrome ReNU Italia — che descrive i tratti comportamentali longitudinali della Sindrome RNU4-2. Vengono identificati comportamenti caratteristici con implicazioni per la gestione clinica: umore felice, ricerca di contatto fisico, brevi episodi di agitazione. Uno dei primi studi longitudinali sul fenotipo comportamentale.',
 'Italian study — with participation of Dr. Donatella Milani, President of the Scientific Committee of Sindrome ReNU Italia — describing longitudinal behavioral traits of RNU4-2 Syndrome. Characteristic behaviors identified with implications for clinical management: happy mood, seeking physical contact, brief agitation episodes.',
 '🇮🇹 ITALIANO',
 40),

('Crocker K, O''Toole J, Pearse L, Milani D, et al.',
 2026,
 'Summary of the Inaugural ReNU Hope Conference and Scientific Symposium, July 23-25, 2025, Long Island, New York',
 'Am J Med Genet A. 2026 Feb.',
 '41714173',
 'https://pubmed.ncbi.nlm.nih.gov/41714173/',
 'Sintesi della prima Conferenza Scientifica ReNU Hope (luglio 2025, New York), che ha riunito ricercatori, famiglie, medici e sviluppatori di terapie da tutto il mondo. I temi principali: progressi nella ricerca su RNU4-2, nuovi approcci diagnostici, sviluppo di terapie, supporto alle famiglie e creazione di registri internazionali di pazienti.',
 'Summary of the inaugural ReNU Hope Conference (July 2025, New York), bringing together researchers, families, clinicians and therapy developers worldwide. Key themes: advances in RNU4-2 research, new diagnostic approaches, therapy development, family support and international patient registry creation.',
 '',
 50),

('Hayashi Y, Kajiwara K, Mizuno S, et al.',
 2025,
 'Monoallelic and biallelic RNU4-2 variants in neurodevelopmental disorders',
 'J Hum Genet. 2025 Dec.',
 '41408479',
 'https://pubmed.ncbi.nlm.nih.gov/41408479/',
 'Studio giapponese che analizza le varianti monoalleliche e bialleliche in RNU4-2 in una coorte di casi non diagnosticati con disturbi del neurosviluppo. Conferma la prevalenza delle varianti de novo nella regione critica T-loop e fornisce dati epidemiologici su popolazioni asiatiche.',
 'Japanese study analyzing monoallelic and biallelic RNU4-2 variants in a cohort of unresolved neurodevelopmental disorder cases. Confirms prevalence of de novo variants in the critical T-loop region and provides epidemiological data on Asian populations.',
 '',
 60),

('Chen Y, Gao L, Han X, et al.',
 2025,
 'Prenatal Evaluation of RNU4-2 Variants in Fetuses With Central Nervous System Anomalies',
 'Am J Med Genet C Semin Med Genet. 2025 Dec.',
 '41449851',
 'https://pubmed.ncbi.nlm.nih.gov/41449851/',
 'Primo studio sulla valutazione prenatale delle varianti RNU4-2 in feti con anomalie del sistema nervoso centrale. Dimostra il valore del sequenziamento di RNU4-2 nella diagnostica prenatale di anomalie cerebrali, aprendo la strada a diagnosi più precoci.',
 'First study on prenatal evaluation of RNU4-2 variants in fetuses with central nervous system anomalies. Demonstrates the value of RNU4-2 sequencing in prenatal diagnosis of brain anomalies, paving the way for earlier diagnoses.',
 '',
 70),

('Delmaghani S, Chen Y, Dawes R, et al.',
 2024,
 'De novo variants in RNU4-2 cause a frequent neurodevelopmental syndrome',
 'Nature. 2024;632:832-840.',
 '39169177',
 'https://pubmed.ncbi.nlm.nih.gov/39169177/',
 'Lo studio fondamentale che ha scoperto la Sindrome ReNU. Analizzando 47.606 individui in 34 coorti internazionali, gli autori hanno identificato varianti de novo in RNU4-2 come causa di una frequente sindrome del neurosviluppo. Prevalenza stimata ~1:35.000 nati vivi. La sindrome — ribattezzata ReNU — include ritardo psicomotorio grave, ipotonia, epilessia, microcefalia, dismorfismi facciali e anomalie cerebrali strutturali.',
 'The landmark study that discovered ReNU Syndrome. Analyzing 47,606 individuals across 34 international cohorts, authors identified de novo variants in RNU4-2 as the cause of a frequent neurodevelopmental syndrome. Estimated prevalence ~1:35,000 live births.',
 'STUDIO FONDAMENTALE',
 80),

('Greene D, Mendez R, Lees J, Turro E, et al.',
 2024,
 'RNU4-2-Related Neurodevelopmental Disorder Is Associated With Severe Intellectual Disability',
 'Neurol Genet. 2024.',
 '39434505',
 'https://pubmed.ncbi.nlm.nih.gov/39434505/',
 'Studio che caratterizza nel dettaglio il disturbo del neurosviluppo correlato a RNU4-2, con focus sulla disabilità intellettiva grave. Include analisi del ritardo dello sviluppo globale, epilessia, microcefalia, bassa statura e ipotonia. Contribuisce a definire i criteri diagnostici clinici.',
 'Study characterizing in detail the RNU4-2-related neurodevelopmental disorder with focus on severe intellectual disability. Includes analysis of global developmental delay, epilepsy, microcephaly, short stature and hypotonia.',
 '',
 90);

-- ─── STORIE FAMIGLIE ITALIANE ─────────────────────────────────────────────────
INSERT OR IGNORE INTO storie (nome, img_url, nazione, flag, url_storia, desc_it, desc_en, desc_fr, desc_es, desc_de, tipo, consenso_firmato, ordine, attiva) VALUES
('Aaron', '/images/renu_bambino_aaron.jpg', 'IT', '🇮🇹', NULL,
 'Una storia di gioia e determinazione.', 'A story of joy and determination.',
 'Une histoire de joie et de détermination.', 'Una historia de alegría y determinación.', 'Eine Geschichte der Freude und Entschlossenheit.',
 'italiana', 1, 10, 1),

('Diego', '/images/renu_bambino_diego.jpg', 'IT', '🇮🇹', NULL,
 'Sorrisi che illuminano ogni giornata.', 'Smiles that light up every day.',
 'Des sourires qui illuminent chaque journée.', 'Sonrisas que iluminan cada día.', 'Lächeln, das jeden Tag erhellt.',
 'italiana', 1, 20, 1),

('Francesco', '/images/renu_bambino_francesco.jpg', 'IT', '🇮🇹', NULL,
 'La forza di una famiglia unita.', 'The strength of a united family.',
 'La force d''une famille unie.', 'La fuerza de una familia unida.', 'Die Stärke einer vereinten Familie.',
 'italiana', 1, 30, 1),

('Maya', '/images/renu_bambina_maya.jpg', 'IT', '🇮🇹', NULL,
 'Ogni traguardo è una vittoria.', 'Every milestone is a victory.',
 'Chaque étape est une victoire.', 'Cada logro es una victoria.', 'Jeder Meilenstein ist ein Sieg.',
 'italiana', 1, 40, 1),

('Meilda', '/images/renu_ragazza_meilda.jpg', 'IT', '🇮🇹', NULL,
 'Curiosità e amore per la vita.', 'Curiosity and love for life.',
 'Curiosité et amour de la vie.', 'Curiosidad y amor por la vida.', 'Neugier und Lebensfreude.',
 'italiana', 1, 50, 1),

('Vittoria', '/images/renu_ragazza_vittoria.jpg', 'IT', '🇮🇹', NULL,
 'La tenacia di chi non si arrende.', 'The tenacity of those who never give up.',
 'La ténacité de qui ne renonce pas.', 'La tenacidad de quien no se rinde.', 'Die Zähigkeit derer, die nie aufgeben.',
 'italiana', 1, 60, 1),

('Manuel', '/images/renu_ragazzo_manuel.jpg', 'IT', '🇮🇹', NULL,
 'Un sorriso che contagia tutti.', 'A smile that spreads to everyone.',
 'Un sourire qui se propage à tous.', 'Una sonrisa que contagia a todos.', 'Ein Lächeln, das alle ansteckt.',
 'italiana', 1, 70, 1),

('Gabriele', '/images/renu_bambino_gabriele.jpg', 'IT', '🇮🇹', NULL,
 'Ogni passo è un successo da celebrare.', 'Every step is a success to celebrate.',
 'Chaque pas est un succès à célébrer.', 'Cada paso es un éxito que celebrar.', 'Jeder Schritt ist ein Erfolg zum Feiern.',
 'italiana', 1, 80, 1),

-- Storie internazionali
('James', NULL, 'GB', '🇬🇧', 'https://www.renusyndrome.org/james-2',
 'Gran Bretagna – Una storia di forza e gioia.', 'Great Britain – A story of strength and joy.',
 'Grande-Bretagne – Une histoire de force et joie.', 'Gran Bretaña – Una historia de fuerza y alegría.', 'Großbritannien – Eine Geschichte der Stärke und Freude.',
 'internazionale', 1, 110, 1),

('Mia Joy', NULL, 'US', '🇺🇸', 'https://www.renusyndrome.org/mia-joy',
 'USA – Gioia in ogni momento.', 'USA – Joy in every moment.',
 'USA – La joie à chaque instant.', 'USA – Alegría en cada momento.', 'USA – Freude in jedem Moment.',
 'internazionale', 1, 120, 1),

('Max', NULL, 'US', '🇺🇸', 'https://www.renusyndrome.org/max-us',
 'USA – Coraggio e determinazione.', 'USA – Courage and determination.',
 'USA – Courage et détermination.', 'USA – Valentía y determinación.', 'USA – Mut und Entschlossenheit.',
 'internazionale', 1, 130, 1),

('Eliot', NULL, 'FR', '🇫🇷', 'https://www.renusyndrome.org/eliot',
 'Francia – Una famiglia unita nella speranza.', 'France – A united family in hope.',
 'France – Une famille unie dans l''espoir.', 'Francia – Una familia unida en la esperanza.', 'Frankreich – Eine in Hoffnung vereinte Familie.',
 'internazionale', 1, 140, 1),

('Ashley', NULL, 'US', '🇺🇸', 'https://www.renusyndrome.org/ashley',
 'Ashley, 8 anni, ama l''acqua, la musica e i momenti di gioia.', 'Ashley, age 8, loves water, music, and joyful moments.',
 'Ashley, 8 ans, adore l''eau et la musique.', 'Ashley, 8 años, ama el agua y la música.', 'Ashley, 8 Jahre, liebt Wasser und Musik.',
 'internazionale', 1, 150, 1),

('Isla', NULL, 'AU', '🇦🇺', 'https://www.renusyndrome.org/isla',
 'Australia – La gioia di ogni giorno.', 'Australia – Joy every day.',
 'Australie – La joie quotidienne.', 'Australia – La alegría de cada día.', 'Australien – Freude jeden Tag.',
 'internazionale', 1, 160, 1),

('Noah', NULL, 'CA', '🇨🇦', 'https://www.renusyndrome.org/noah',
 'Canada – Una storia che inspira.', 'Canada – An inspiring story.',
 'Canada – Une histoire inspirante.', 'Canadá – Una historia inspiradora.', 'Kanada – Eine inspirierende Geschichte.',
 'internazionale', 1, 170, 1),

('Antonin', NULL, 'FR', '🇫🇷', 'https://www.renusyndrome.org/antonin',
 'Francia – Amore senza confini.', 'France – Love without borders.',
 'France – Amour sans frontières.', 'Francia – Amor sin fronteras.', 'Frankreich – Liebe ohne Grenzen.',
 'internazionale', 1, 180, 1),

('Poppy', NULL, 'GB', '🇬🇧', 'https://www.renusyndrome.org/poppy',
 'Gran Bretagna – La dolcezza di Poppy.', 'Great Britain – The sweetness of Poppy.',
 'Grande-Bretagne – La douceur de Poppy.', 'Gran Bretaña – La dulzura de Poppy.', 'Großbritannien – Poppys Süße.',
 'internazionale', 1, 190, 1),

('Vivaan', NULL, 'IN', '🇮🇳', 'https://www.renusyndrome.org/vivaan',
 'India – Famiglia che lotta insieme.', 'India – Family fighting together.',
 'Inde – Famille qui se bat ensemble.', 'India – Familia luchando junta.', 'Indien – Familie, die gemeinsam kämpft.',
 'internazionale', 1, 200, 1),

('Chase', NULL, 'US', '🇺🇸', 'https://www.renusyndrome.org/chase',
 'USA – Perseveranza e gioia.', 'USA – Perseverance and joy.',
 'USA – Persévérance et joie.', 'USA – Perseverancia y alegría.', 'USA – Ausdauer und Freude.',
 'internazionale', 1, 210, 1),

('Cooper', NULL, 'AU', '🇦🇺', 'https://www.renusyndrome.org/cooper',
 'Australia – Forza e amore.', 'Australia – Strength and love.',
 'Australie – Force et amour.', 'Australia – Fuerza y amor.', 'Australien – Stärke und Liebe.',
 'internazionale', 1, 220, 1),

('Thibault', NULL, 'FR', '🇫🇷', 'https://www.renusyndrome.org/thibault',
 'Francia – Speranza e progresso.', 'France – Hope and progress.',
 'France – Espoir et progrès.', 'Francia – Esperanza y progreso.', 'Frankreich – Hoffnung und Fortschritt.',
 'internazionale', 1, 230, 1);

-- ─── BROCHURE ────────────────────────────────────────────────────────────────
INSERT OR IGNORE INTO brochure (file_name, thumb_id, titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de, desc_it, desc_en, ordine, attiva) VALUES
('brochure-insieme-facciamo-differenza.pdf', 'CTEp6mH2',
 'Insieme, facciamo la differenza', 'Together we make a difference',
 'Ensemble nous faisons la différence', 'Juntos hacemos la diferencia', 'Gemeinsam machen wir den Unterschied',
 'SINDROME ReNU ITALIA APS – Sostieni la nostra missione', 'SINDROME ReNU ITALIA APS – Support our mission',
 10, 1),

('brochure-nata-renu-italia.pdf', 'GbPysspb',
 'È nata Sindrome ReNU Italia APS!', 'ReNU Syndrome Italy APS is born!',
 'Le syndrome ReNU Italie APS est né!', '¡Ha nacido Síndrome ReNU Italia APS!', 'ReNU-Syndrom Italien APS ist gegründet!',
 'La nostra associazione è finalmente realtà', 'Our association is finally a reality',
 20, 1),

('brochure-finalmente-realta.pdf', 'HE4kWb3R',
 'Finalmente Realtà', 'Finally Reality',
 'Enfin Réalité', 'Finalmente Realidad', 'Endlich Wirklichkeit',
 'Contribuisci con un gesto concreto', 'Contribute with a concrete gesture',
 30, 1),

('brochure-donazione-cuore.pdf', 'Haieyn55',
 'Una donazione dal cuore', 'A donation from the heart',
 'Un don du cœur', 'Una donación del corazón', 'Eine Spende vom Herzen',
 'Un piccolo gesto può fare la differenza', 'A small gesture can make a difference',
 40, 1),

('brochure-un-gesto-speranza.pdf', 'nBeYaQkm',
 'Un gesto, una speranza', 'A gesture, a hope',
 'Un geste, un espoir', 'Un gesto, una esperanza', 'Eine Geste, eine Hoffnung',
 'Un piccolo aiuto può cambiare una vita', 'A small help can change a life',
 50, 1),

('brochure-potete-contare.pdf', 'oi3JFkgN',
 'Potete contare sul nostro sostegno', 'You can count on our support',
 'Vous pouvez compter sur notre soutien', 'Pueden contar con nuestro apoyo', 'Sie können auf unsere Unterstützung zählen',
 'Insieme facciamo la differenza', 'Together we make a difference',
 60, 1),

('brochure-fai-differenza.pdf', 'tezKurU2',
 'Fai la differenza oggi', 'Make the difference today',
 'Fais la différence aujourd''hui', 'Haz la diferencia hoy', 'Mach heute den Unterschied',
 'Ogni contributo conta', 'Every contribution counts',
 70, 1),

('brochure-vuole-differenza.pdf', 'wrScJxVD',
 'Vuole fare la differenza', 'Wants to make a difference',
 'Veut faire la différence', 'Quiere hacer la diferencia', 'Will den Unterschied machen',
 'Un gesto semplice può fare una grande differenza', 'A simple gesture can make a big difference',
 80, 1);

-- ─── GALLERY FOTO ────────────────────────────────────────────────────────────
INSERT OR IGNORE INTO gallery (img_url, didascalia_it, didascalia_en, pagina, ordine, attiva, consenso) VALUES
-- Community page
('/images/it_primo_incontro.jpg',    'Famiglie ReNU Italia insieme', 'ReNU Italia families together', 'community', 10, 1, 1),
('/images/renu_incontro_famiglie.jpg', 'Bambini ReNU Italia', 'ReNU Italia children', 'community', 20, 1, 1),
('/images/it_bambini_gruppo.jpg',    'I nostri bambini ReNU', 'Our ReNU children', 'community', 30, 1, 1),
('/images/renu_natale_2026.jpg',     'Festa di Natale ReNU Italia 2026', 'ReNU Italia Christmas Party 2026', 'community', 40, 1, 1),
('/images/it_community.jpg',         'Famiglie della comunità ReNU', 'ReNU community families', 'community', 50, 1, 1),
('/images/renu_gallery.jpg',         'Galleria ReNU Italia', 'ReNU Italia Gallery', 'community', 60, 1, 1),
-- Home page
('/images/it_hero.jpg',              'Sindrome ReNU Italia APS', 'Sindrome ReNU Italia APS', 'home', 10, 1, 1),
('/images/renu_natale_2026.jpg',     'Natale ReNU Italia 2026', 'ReNU Italia Christmas 2026', 'home', 20, 1, 1);


-- ─── EVENTI ──────────────────────────────────────────────────────────────────
-- Schema completo con img_url: titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de, data_evento, luogo, desc_it, desc_en, img_url, url_esterno, categoria, stato, ordine, attivo
INSERT OR IGNORE INTO eventi (titolo_it, titolo_en, titolo_fr, titolo_es, titolo_de, data_evento, luogo, desc_it, desc_en, img_url, url_esterno, categoria, stato, ordine, attivo) VALUES

-- ─── EVENTI PASSATI ──────────────────────────────────────────────────────────
('Muoviti per ReNU – Aprile 2024',
 'Move4ReNU – April 2024',
 'Muoviti per ReNU – Avril 2024',
 'Muévete por ReNU – Abril 2024',
 'Beweg dich für ReNU – April 2024',
 '2024-04-01',
 'Italia (tutta)',
 'La prima iniziativa italiana di sensibilizzazione sportiva per la Sindrome ReNU. Cammina, corri, pedala o balla per tutto il mese di aprile e aiuta a far conoscere la Sindrome ReNU.',
 'The first Italian sports awareness initiative for ReNU Syndrome. Walk, run, cycle or dance throughout April and help raise awareness of ReNU Syndrome.',
 '/images/move4renu_it.jpg',
 NULL,
 'altro',
 'passato',
 5, 1),

('1ª Conferenza Internazionale ReNU Hope',
 '1st ReNU Hope International Conference',
 '1ère Conférence Internationale ReNU Hope',
 '1ª Conferencia Internacional ReNU Hope',
 '1. Internationale ReNU Hope Konferenz',
 '2025-07-23',
 'Long Island, New York (USA)',
 'La prima Conferenza Scientifica ReNU Hope ha riunito a Long Island (NY) ricercatori, famiglie, medici e sviluppatori di terapie da tutto il mondo (23-25 luglio 2025). Temi principali: avanzamenti nella ricerca su RNU4-2, diagnosi, sviluppo terapie, supporto famiglie e registri internazionali di pazienti. Sindrome ReNU Italia APS era presente con la Dr.ssa Donatella Milani.',
 'The first ReNU Hope Scientific Conference brought together researchers, families, clinicians and therapy developers in Long Island, NY (July 23-25, 2025). Key themes: RNU4-2 research advances, diagnosis, therapy development, family support and international patient registries.',
 '/images/renu_conferenza_2025.jpg',
 'https://pubmed.ncbi.nlm.nih.gov/41714173/',
 'conferenza',
 'passato',
 8, 1),

-- ─── EVENTI FUTURI / IN DEFINIZIONE ──────────────────────────────────────────
('Primo Incontro Famiglie ReNU Italia',
 'First ReNU Italia Family Meeting',
 'Première Rencontre Familles ReNU Italie',
 'Primer Encuentro Familias ReNU Italia',
 'Erstes Treffen der ReNU-Familien Italien',
 NULL,
 'Italia (in definizione)',
 'Il primo incontro ufficiale tra le famiglie italiane con un bambino o giovane adulto con Sindrome ReNU. Data, luogo e programma in fase di definizione da parte del Consiglio Direttivo.',
 'The first official meeting between Italian families with a child or young adult with ReNU Syndrome. Date, location and agenda being defined by the Board of Directors.',
 '/images/it_primo_incontro.jpg',
 NULL,
 'incontro',
 'in_definizione',
 10, 1),

('Due Ore per ReNU / Rete del Tempo',
 'Two Hours for ReNU / Time Network',
 'Deux Heures pour ReNU / Réseau du Temps',
 'Dos Horas para ReNU / Red del Tiempo',
 'Zwei Stunden für ReNU / Zeitnetzwerk',
 NULL,
 'Online',
 'Iniziativa di sensibilizzazione e raccolta fondi a favore di Sindrome ReNU Italia APS. Partecipa donando due ore del tuo tempo o un contributo libero.',
 'Awareness and fundraising initiative for Sindrome ReNU Italia APS. Participate by donating two hours of your time or a free contribution.',
 '/images/it_unity.jpg',
 NULL,
 'altro',
 'in_definizione',
 20, 1),

('Muoviti per ReNU – Aprile 2027',
 'Move4ReNU – April 2027',
 'Muoviti per ReNU – Avril 2027',
 'Muévete por ReNU – Abril 2027',
 'Beweg dich für ReNU – April 2027',
 '2027-04-01',
 'Italia (tutta)',
 'Torna l''iniziativa di sensibilizzazione sportiva per la Sindrome ReNU. Per tutto il mese di aprile, cammina, corri, pedala o balla per far conoscere la Sindrome ReNU. Unisciti alla sfida!',
 'The sports awareness initiative for ReNU Syndrome returns. Throughout April, walk, run, cycle or dance to raise awareness of ReNU Syndrome. Join the challenge!',
 '/images/move4renu_it.jpg',
 NULL,
 'altro',
 'in_definizione',
 25, 1),

('Maratona Wizz Air 2027',
 'Wizz Air Marathon 2027',
 'Marathon Wizz Air 2027',
 'Maratón Wizz Air 2027',
 'Wizz Air Marathon 2027',
 '2027-04-11',
 'Milano',
 'Corri per i bambini ReNU! La nostra squadra parteciperà alla Maratona Wizz Air 2027 a Milano. Unisciti a noi per raccogliere fondi destinati alla ricerca e al supporto alle famiglie. L''edizione 2025 si è tenuta il 6 aprile con grande partecipazione.',
 'Run for ReNU children! Our team will participate in the Wizz Air Marathon 2027 in Milan. Join us to raise funds for research and family support. The 2025 edition took place on April 6th with great participation.',
 '/images/it_maratona.jpg',
 'https://www.wizzairmilanmarathon.it',
 'maratona',
 'in_definizione',
 30, 1);

-- ─── NEWS ────────────────────────────────────────────────────────────────────
INSERT OR IGNORE INTO news (titolo_it, titolo_en, testo_it, testo_en, categoria, pubblicata) VALUES
('Sindrome ReNU Italia APS ora nel RUNTS',
 'Sindrome ReNU Italia APS now in RUNTS',
 'A partire dal 28 aprile 2025, Sindrome ReNU Italia APS è ufficialmente registrata nel Registro Unico Nazionale del Terzo Settore (RUNTS). Codice fiscale: 98020680157.',
 'As of April 28, 2025, Sindrome ReNU Italia APS is officially registered in the National Register of the Third Sector (RUNTS). Tax code: 98020680157.',
 'notizia',
 1),

('DPO nominato: Avv. Francesco Conti',
 'DPO appointed: Avv. Francesco Conti',
 'Il Consiglio Direttivo, in data 9 giugno 2026, ha nominato l''Avv. Francesco Conti come Responsabile della Protezione dei Dati (DPO) ai sensi dell''Art. 37 del GDPR. Contatto: dpo@sindromerenu.it.',
 'The Board of Directors, on June 9, 2026, appointed Avv. Francesco Conti as Data Protection Officer (DPO) pursuant to Art. 37 of the GDPR. Contact: dpo@sindromerenu.it.',
 'comunicato',
 1),

('Nuove pubblicazioni 2026 su RNU4-2',
 'New 2026 publications on RNU4-2',
 'Aprile 2026: tre importanti studi scientifici su Nature e Nature Genetics ampliano la conoscenza della Sindrome ReNU. Scoperta una forma recessiva distinta (varianti bialleliche in RNU4-2) e analizzato lo spettro completo delle varianti con lo studio di "saturation editing".',
 'April 2026: three important scientific studies in Nature and Nature Genetics expand knowledge of ReNU Syndrome. A distinct recessive form (biallelic variants in RNU4-2) was discovered and the complete variant spectrum was analyzed with a "saturation editing" study.',
 'ricerca',
 1),

('Prima Conferenza ReNU Hope – Luglio 2025',
 'First ReNU Hope Conference – July 2025',
 'Si è tenuta a Long Island, New York, la prima Conferenza Scientifica ReNU Hope (23-25 luglio 2025). L''evento ha riunito ricercatori, famiglie, medici e sviluppatori di terapie da tutto il mondo.',
 'The first ReNU Hope Scientific Conference was held in Long Island, New York (July 23-25, 2025). The event brought together researchers, families, physicians and therapy developers from around the world.',
 'evento',
 1);
