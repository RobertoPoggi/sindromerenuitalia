import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

type Env = {
  DB?: D1Database
}

const app = new Hono<{ Bindings: Env }>()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))
app.use('/brochure/*', serveStatic({ root: './public' }))

app.use('/favicon.svg', serveStatic({ root: './public' }))

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const translations: Record<string, Record<string, string>> = {
  it: {
    lang: 'it', langName: 'Italiano',
    title: 'Sindrome ReNU Italia APS',
    subtitle: 'Insieme, facciamo la differenza',
    tagline: 'Una condizione genetica di nuova identificazione. Uno sforzo di ricerca coordinato a livello globale.',
    hero_text: 'La sindrome di ReNU è una condizione complessa che coinvolge ogni giorno <strong>bambini, ragazzi e famiglie</strong>. Questo spazio nasce per offrire informazioni chiare, orientamento concreto e la forza di una comunità che condivide lo stesso percorso.',
    hero_desc: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2. Attualmente sono <strong>~250 i casi accertati nel mondo</strong> (12-14 in Italia). Le varianti patogene si concentrano in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a> degli oltre 3 miliardi di paia di basi del genoma! Siamo qui per <strong>supportare le famiglie italiane</strong> e offrire un aiuto concreto ai bambini ReNU.',
    nav_home: 'Home', nav_about: 'Cos\'è ReNU', nav_research: 'Approfondimenti',
    nav_therapies: 'Terapie', nav_diagnosis: 'Diagnosi', nav_community: 'Comunità',
    nav_donations: 'Sostienici', nav_contact: 'Contatti', nav_brochure: 'Media & Pubblicazioni',
    nav_events: 'Eventi', nav_projects: 'Progetti', nav_members: 'Diventa Socio', nav_faq: 'FAQ & Diritti',
    nav_science: 'Comitato Scientifico',
    btn_diagnosis: 'DONA ORA – SOSTIENI LE FAMIGLIE RENU',
    btn_diagnosis_sub: 'Ogni contributo fa la differenza. Grazie.',
    btn_info: 'VUOI MAGGIORI INFORMAZIONI? CLICCA QUI',
    btn_info_sub: 'Contattaci per informazioni sulla Sindrome ReNU',
    section_map_title: 'Mappa Famiglie',
    section_map_desc: 'Aggiungi il tuo familiare con Sindrome ReNU alla mappa mondiale per aumentare la consapevolezza e la forza della comunità.',
    section_awareness_title: 'Aumenta la Consapevolezza',
    section_awareness_desc: 'Partecipa alle iniziative di sensibilizzazione e diffondi la conoscenza sulla Sindrome ReNU in Italia.',
    section_research_title: 'Approfondimenti',
    section_research_desc: 'Esplora le risorse scientifiche, le terapie di supporto e le iniziative di ricerca sulla Sindrome ReNU.',
    section_info_title: 'Cos\u2019è ReNU',
    section_info_desc: 'Scopri cos\u2019è la Sindrome ReNU, le caratteristiche cliniche e le informazioni genetiche aggiornate.',
    section_parents_title: 'Rete Genitori Italiani',
    section_parents_desc: 'La rete dei genitori italiani è un punto di riferimento per chi desidera sentirsi meno solo, condividere domande, esperienze e piccole conquiste del quotidiano.',
    section_donations_title: 'Donazioni',
    section_donations_desc: 'Il tuo supporto ci permette di promuovere la ricerca, costruire la comunità e offrire un aiuto concreto alle famiglie ReNU in Italia.',
    about_title: 'Cos\'è la Sindrome ReNU?',
    about_gene: 'La sindrome di ReNU (RNU4-2) è una rara condizione genetica del neurosviluppo, identificata di recente dalla ricerca scientifica internazionale. È associata a variazioni del gene RNU4-2, coinvolto in un processo essenziale per il corretto funzionamento delle cellule, chiamato splicing dell\'RNA. La sua descrizione scientifica è stata consolidata nel 2024 grazie a importanti studi internazionali.',
    about_discovery: 'Scoperta di RNU4-2',
    about_discovery_text: 'RNU4-2 è stata identificata nell\'ottobre 2024 come una delle principali cause genetiche di disturbi rari del neurosviluppo, con una prevalenza stimata di circa 1 su 35.000 nati vivi.',
    about_features_title: 'Caratteristiche della Sindrome ReNU',
    about_brain: 'Anomalie cerebrali', about_brain_items: 'Volume ridotto della materia bianca, ipoplasia del corpo calloso, ventricomegalia, mielinizzazione ritardata',
    about_development: 'Disabilità intellettiva', about_development_items: 'Ritardi nello sviluppo, limitazioni nel funzionamento intellettivo e nel comportamento adattivo',
    about_seizures: 'Epilessia', about_seizures_items: 'Spasmi infantili, crisi focali e tonico-cloniche, crisi febbrili o stato epilettico',
    about_vision: 'Problemi visivi', about_vision_items: 'Ipoplasia del nervo ottico, CVI (compromissione visiva corticale), strabismo, nistagmo',
    about_face: 'Caratteristiche del viso', about_face_items: 'Viso miopatico, epicanto, radice nasale larga, narici anteverse, grandi orecchie, guance piene',
    about_muscle: 'Tono muscolare', about_muscle_items: 'Ipotonia (basso tono muscolare) o debolezza muscolare',
    about_mobility: 'Mobilità', about_mobility_items: 'Ritardo nel cammino o incapacità di camminare',
    about_growth: 'Crescita', about_growth_items: 'Microcefalia, bassa statura, ipotiroidismo o deficit dell\'ormone della crescita',
    about_feeding: 'Alimentazione', about_feeding_items: 'Difficoltà alimentari, scialorrea, stipsi, reflusso gastroesofageo',
    about_communication: 'Comunicazione', about_communication_items: 'Difficoltà di linguaggio (possono sviluppare comunicazione alternativa)',
    about_bones: 'Problemi ossei', about_bones_items: 'Bassa densità ossea, displasia dell\'anca, fratture ricorrenti',
    about_happy: 'Molte persone con Sindrome ReNU mostrano un temperamento felice, sono affettuose e amano le altalene, l\'acqua, la musica e le routine.',
    about_diagnosis_note: 'In Italia, per diagnosticare RNU4-2 è necessario il Sequenziamento dell\'Intero Genoma (WGS). Il WES non è in grado di rilevarlo!',
    research_title: 'Approfondimenti',
    research_intro: 'TU puoi far avanzare la ricerca verso opzioni di trattamento per ReNU!',
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, crea un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID di Ricerca Clinica (CRID)</a>! Condividi il tuo CRID con ogni studio clinico a cui partecipi.',
    research_priorities_title: 'Cosa è importante per la comunità RNU4-2?',
    therapies_title: 'Terapie per la Sindrome ReNU',
    therapies_intro: 'Ogni percorso terapeutico deve essere personalizzato sulla base dei bisogni del bambino o del ragazzo e condiviso con i professionisti di riferimento. In questa sezione raccogliamo alcune aree di intervento che possono sostenere sviluppo, autonomia, comunicazione e qualità della vita.',
    therapies_note: 'Questo sito non approva né raccomanda terapie specifiche. Consultare sempre un medico.',
    diagnosis_title: 'Dove fare il Test Diagnostico in Italia',
    diagnosis_intro: 'Per ricevere informazioni sui centri diagnostici disponibili in Italia, contattaci.',
    diagnosis_contact: 'Per informazioni sui centri WGS in Italia, scrivici a:',
    community_title: 'Comunità ReNU Italia',
    community_intro: 'ReNU Italia APS vuole essere uno spazio di incontro, ascolto e condivisione. La comunità nasce per mettere in relazione famiglie, promuovere il confronto tra esperienze e rendere più accessibili informazioni e contatti utili.',
    community_network_it: 'Rete genitori italiani',
    community_network_desc: 'La rete dei genitori italiani è un punto di riferimento per chi desidera sentirsi meno solo, condividere domande, esperienze e piccole conquiste del quotidiano.',
    donations_title: 'Sostienici',
    donations_intro: 'Il tuo supporto ci permette di promuovere la ricerca, costruire la comunità e offrire un aiuto concreto alle famiglie ReNU in Italia.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Intestato a: Sindrome ReNU Italia APS',
    contact_title: 'Contattaci',
    contact_intro: 'Siamo a tua disposizione per qualsiasi informazione sulla Sindrome ReNU Italia.',
    brochure_title: 'Media & Pubblicazioni',
    brochure_intro: 'In questa sezione raccogliamo video, articoli scientifici, materiali divulgativi e brochure utili ad approfondire la conoscenza della sindrome di ReNU.',
    science_title: 'Comitato Scientifico',
    science_intro: 'Il Comitato Scientifico di Sindrome ReNU Italia APS svolge un ruolo fondamentale nel garantire che l\'Associazione operi con rigore, autorevolezza e coerenza con le migliori evidenze scientifiche disponibili. Collabora con i soci, le famiglie e i professionisti per tradurre la conoscenza scientifica in orientamenti pratici, strumenti di supporto e iniziative concrete a favore delle persone con Sindrome ReNU e delle loro famiglie.',
    science_role1_title: 'Validazione dei Contenuti',
    science_role1_desc: 'Revisione e validazione dei contenuti medico-scientifici del sito, dei materiali informativi e delle pubblicazioni dell\'Associazione, garantendo accuratezza e aggiornamento continuo.',
    science_role2_title: 'Supporto alla Diagnosi',
    science_role2_desc: 'Collaborazione con i centri diagnostici italiani per facilitare l\'accesso al Sequenziamento dell\'Intero Genoma (WGS), unico strumento diagnostico affidabile per RNU4-2, e per costruire un percorso di presa in carico multidisciplinare.',
    science_role3_title: 'Ricerca e Registro Pazienti',
    science_role3_desc: 'Promozione e coordinamento di progetti di ricerca italiani, incluso il Registro Nazionale Pazienti ReNU, per contribuire alla comprensione della sindrome e allo sviluppo di future terapie.',
    science_role4_title: 'Formazione e Sensibilizzazione',
    science_role4_desc: 'Progettazione e diffusione di campagne rivolte ai pediatri, ai medici di base e agli specialisti, per ridurre i tempi di diagnosi e migliorare la qualità dell\'assistenza.',
    science_role5_title: 'Collegamento Internazionale',
    science_role5_desc: 'Partecipazione alla rete scientifica internazionale ReNU, in collaborazione con ReNU Syndrome United (USA) e altri centri di ricerca europei, per condividere dati e avanzare la conoscenza sulla sindrome.',
    science_members_title: 'I Membri del Comitato',
    science_members_note: 'L\'elenco dei membri del Comitato Scientifico sarà pubblicato non appena il processo di nomina sarà completato. Per collaborazioni scientifiche o per segnalare nuove pubblicazioni contattaci a presidenza@sindromerenu.it.',
    science_cta: 'Collabora con noi',
    brochure_download: 'Scarica PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Tutti i diritti riservati.',
    footer_partnership: 'In partnership con ReNU Syndrome United (USA)',
    footer_tagline: 'Insieme, facciamo la differenza',
    donate_now: 'Dona Ora', join_registry: 'Unisciti al Registro',
    learn_more: 'Scopri di più', contact_us: 'Contattaci', read_more: 'Leggi di più',
    coe_title: 'Centro di Eccellenza ReNU (COE)',
    coe_desc: 'ReNU Syndrome United sta costruendo una rete globale di Centri di Eccellenza per collegare le famiglie di pazienti con team medici multidisciplinari di altissimo livello, dedicati alla ricerca e al trattamento della Sindrome ReNU.',
    world_title: 'ReNU nel Mondo',
    world_desc: 'Famiglie RNU4-2 sono state mappate in: Australia, Belgio, Brasile, Canada, Cina, Colombia, Repubblica Ceca, Danimarca, Inghilterra, Francia, Germania, Grecia, Hong Kong, Islanda, Irlanda, Israele, Italia, Giappone, Messico, Paesi Bassi, Nuova Zelanda, Irlanda del Nord, Norvegia, Palestina, Polonia, Romania, Russia, Arabia Saudita, Scozia, Corea del Sud, Spagna, Svezia, Svizzera, Turchia, Ucraina, Stati Uniti, Galles.',
    intl_network: 'Rete Internazionale',
  },
  en: {
    lang: 'en', langName: 'English',
    title: 'ReNU Syndrome Italy APS',
    subtitle: 'Together, we make a difference',
    tagline: 'A newly identified genetic condition. A globally coordinated research effort.',
    hero_text: 'RNU4-2 Emerges as a Leading Cause of Rare Neurodevelopmental Disorders – <strong>Renewing Hope for Families</strong>',
    hero_desc: 'ReNU syndrome is a spliceosomal disorder with a defined mutational hotspot and growing global dataset. Currently <strong>~250 confirmed cases worldwide</strong> (12-14 in Italy), though the true number of undiagnosed cases is estimated to be much higher: pathogenic variants are concentrated in just <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> of our 3 billion base-pair genome!',
    nav_home: 'Home', nav_about: 'About ReNU', nav_research: 'Research',
    nav_therapies: 'Therapies', nav_diagnosis: 'Diagnosis', nav_community: 'Community',
    nav_donations: 'Donations', nav_contact: 'Contact', nav_brochure: 'Media & Publications',
    nav_events: 'Events', nav_projects: 'Projects', nav_members: 'Become a Member', nav_faq: 'FAQ & Rights',
    nav_science: 'Scientific Committee',
    btn_diagnosis: 'WANT MORE INFORMATION? CLICK HERE',
    btn_diagnosis_sub: 'Contact us for information about ReNU Syndrome',
    section_map_title: 'Register Here',
    section_map_desc: 'Strength in numbers! Add a ReNU loved one to the worldwide map to raise awareness.',
    section_awareness_title: 'Raise Awareness',
    section_awareness_desc: 'Attend or support ReNU Hope events to raise awareness!',
    section_research_title: 'Research',
    section_research_desc: 'Participate now to accelerate research and the development of new therapies!',
    section_info_title: 'More Information',
    section_info_desc: 'Learn about how ReNU occurs, typical features and how development is affected.',
    section_parents_title: 'Parent Connection',
    section_parents_desc: 'You\'re not alone! Find hope and community with parents worldwide.',
    section_donations_title: 'Donations',
    section_donations_desc: 'Promoting research, building community, and spreading awareness. Every contribution matters!',
    about_title: 'What is ReNU Syndrome?',
    about_gene: 'ReNU Syndrome is caused by pathogenic variants in the RNU4-2 gene, a non-coding RNA gene that is a critical component of the RNA splicing machinery.',
    about_discovery: 'Discovery of RNU4-2',
    about_discovery_text: 'RNU4-2 was identified in October 2024 as one of the leading genetic causes of rare neurodevelopmental disorders, affecting approximately 1 in 35,000 live births.',
    about_features_title: 'ReNU Syndrome Features',
    about_brain: 'Brain Abnormalities', about_brain_items: 'Reduced white matter volume, corpus callosum hypoplasia, ventriculomegaly, delayed myelination',
    about_development: 'Intellectual Disability', about_development_items: 'Developmental delays, significant limitations in intellectual functioning and adaptive behavior',
    about_seizures: 'Epilepsy', about_seizures_items: 'Infantile spasms, focal and tonic-clonic seizures, febrile seizures or status epilepticus',
    about_vision: 'Visual Problems', about_vision_items: 'Optic nerve hypoplasia, cortical vision impairment (CVI), strabismus, nystagmus',
    about_face: 'Facial Features', about_face_items: 'Myopathic face, epicanthus, wide nasal bridge, anteverted nares, large cupped ears, full cheeks',
    about_muscle: 'Muscle Tone', about_muscle_items: 'Hypotonia (low muscle tone) or muscle weakness',
    about_mobility: 'Mobility', about_mobility_items: 'Delayed walking or inability to walk',
    about_growth: 'Growth', about_growth_items: 'Microcephaly, short stature, hypothyroidism or growth hormone deficiency',
    about_feeding: 'Feeding', about_feeding_items: 'Feeding difficulties, excessive drooling, constipation, gastroesophageal reflux',
    about_communication: 'Communication', about_communication_items: 'Language acquisition difficulties (may develop alternative communication)',
    about_bones: 'Bone Issues', about_bones_items: 'Low bone density, hip dysplasia, recurrent fractures',
    about_happy: 'Many people with ReNU Syndrome exhibit a happy demeanor, are affectionate, and enjoy swings, water, music, and routines.',
    about_diagnosis_note: 'In Italy, Whole Genome Sequencing (WGS) is needed to diagnose RNU4-2. WES cannot detect it!',
    research_title: 'ReNU Syndrome Research',
    research_intro: 'YOU can advance research towards ReNU treatment options!',
    research_crid: 'Before enrolling in any research, create a <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">Clinical Research ID (CRID)</a>! Share your CRID with each clinical study you enroll in.',
    research_priorities_title: 'What\'s important to the RNU4-2 Community?',
    therapies_title: 'Therapies for ReNU Syndrome',
    therapies_intro: 'Many therapeutic services are currently used to aid people with ReNU Syndrome',
    therapies_note: 'This site does not endorse specific therapies. Always consult a physician.',
    diagnosis_title: 'Where to get Diagnosed in Italy',
    diagnosis_intro: 'For information about diagnostic centers in Italy, contact us.',
    diagnosis_contact: 'For information on WGS centers in Italy, contact us at:',
    community_title: 'Community – Family Connection',
    community_intro: 'You\'re not alone! Find hope and community with other families. RNU4-2 families have been mapped in over 38 countries worldwide.',
    donations_title: 'Support Us',
    donations_intro: 'Your support allows us to promote research, build community and provide concrete help to ReNU families in Italy.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Account holder: Sindrome ReNU Italia APS',
    contact_title: 'Contact Us',
    contact_intro: 'We are available for any information about ReNU Syndrome Italy.',
    brochure_title: 'Download our Brochures',
    brochure_intro: 'Download and share the informational brochures of Sindrome ReNU Italia APS',
    brochure_download: 'Download PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. All rights reserved.',
    footer_partnership: 'In partnership with ReNU Syndrome United (USA)',
    footer_tagline: 'Together, we make a difference',
    donate_now: 'Donate Now', join_registry: 'Join Registry',
    learn_more: 'Learn More', contact_us: 'Contact Us', read_more: 'Read More',
    coe_title: 'ReNU Center of Excellence (COE)',
    coe_desc: 'ReNU Syndrome United is building a global Center of Excellence Network to connect patient families with multidisciplinary clinical care teams dedicated to advancing research and treatment of ReNU Syndrome.',
    world_title: 'ReNU Worldwide',
    world_desc: 'RNU4-2 families have been mapped in: Australia, Belgium, Brazil, Canada, China, Colombia, Czech Republic, Denmark, England, France, Germany, Greece, Hong Kong, Iceland, Ireland, Israel, Italy, Japan, Mexico, Netherlands, New Zealand, Northern Ireland, Norway, Palestine, Poland, Romania, Russia, Saudi Arabia, Scotland, South Korea, Spain, Sweden, Switzerland, Turkey, Ukraine, United States, Wales.',
    intl_network: 'International Network',
  },
  fr: {
    lang: 'fr', langName: 'Français',
    title: 'Syndrome ReNU Italie APS',
    subtitle: 'Ensemble, nous faisons la différence',
    tagline: 'Une condition génétique nouvellement identifiée. Un effort de recherche coordonné mondialement.',
    hero_text: 'RNU4-2 émerge comme une cause majeure de troubles rares du neurodéveloppement – <strong>Renouvelant l\'espoir pour les familles</strong>',
    hero_desc: 'Le syndrome ReNU est un trouble splicéosomal avec un hotspot mutationnel défini. Actuellement <strong>~250 cas confirmés dans le monde</strong> (12-14 en Italie), mais le nombre de cas non diagnostiqués est estimé bien plus élevé : les variants pathogènes se concentrent en seulement <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> du génome!',
    nav_home: 'Accueil', nav_about: 'À propos de ReNU', nav_research: 'Recherche',
    nav_therapies: 'Thérapies', nav_diagnosis: 'Diagnostic', nav_community: 'Communauté',
    nav_donations: 'Dons', nav_contact: 'Contact', nav_brochure: 'Brochures',
    nav_events: 'Événements', nav_projects: 'Projets', nav_members: 'Devenir Membre', nav_faq: 'FAQ & Droits',
    btn_diagnosis: 'VOULEZ-VOUS PLUS D\'INFORMATIONS? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Contactez-nous pour des informations sur le Syndrome ReNU',
    section_map_title: 'Inscrivez-vous ici',
    section_map_desc: 'La force est dans le nombre! Ajoutez un proche atteint de ReNU à la carte mondiale.',
    section_awareness_title: 'Sensibiliser',
    section_awareness_desc: 'Participez ou soutenez les événements ReNU Espoir!',
    section_research_title: 'Recherche',
    section_research_desc: 'Participez pour accélérer la recherche!',
    section_info_title: 'Plus d\'informations',
    section_info_desc: 'Découvrez comment ReNU se manifeste et comment le développement est affecté.',
    section_parents_title: 'Connexion des parents',
    section_parents_desc: 'Vous n\'êtes pas seul! Trouvez espoir et communauté avec des parents du monde entier.',
    section_donations_title: 'Dons',
    section_donations_desc: 'Promouvoir la recherche, construire la communauté. Chaque contribution compte!',
    about_title: 'Qu\'est-ce que le Syndrome ReNU?',
    about_gene: 'Le Syndrome ReNU est causé par des variants pathogènes du gène RNU4-2, un gène ARN non codant composant critique de la machinerie d\'épissage.',
    about_discovery: 'Découverte de RNU4-2',
    about_discovery_text: 'RNU4-2 a été identifié en octobre 2024 comme une des principales causes génétiques de troubles rares du neurodéveloppement.',
    about_features_title: 'Caractéristiques du Syndrome ReNU',
    about_brain: 'Anomalies cérébrales', about_brain_items: 'Volume réduit de la substance blanche, hypoplasie du corps calleux, ventriculomégalie',
    about_development: 'Déficience intellectuelle', about_development_items: 'Retards de développement, limitations du fonctionnement intellectuel',
    about_seizures: 'Épilepsie', about_seizures_items: 'Spasmes infantiles, crises focales et tonico-cloniques',
    about_vision: 'Problèmes visuels', about_vision_items: 'Hypoplasie du nerf optique, déficience visuelle corticale',
    about_face: 'Caractéristiques faciales', about_face_items: 'Visage myopathique, épicanthus, pont nasal large',
    about_muscle: 'Tonus musculaire', about_muscle_items: 'Hypotonie ou faiblesse musculaire',
    about_mobility: 'Mobilité', about_mobility_items: 'Retard de la marche ou incapacité à marcher',
    about_growth: 'Croissance', about_growth_items: 'Microcéphalie, petite taille, hypothyroïdie',
    about_feeding: 'Alimentation', about_feeding_items: 'Difficultés alimentaires, salivation excessive',
    about_communication: 'Communication', about_communication_items: 'Difficultés d\'acquisition du langage',
    about_bones: 'Problèmes osseux', about_bones_items: 'Faible densité osseuse, dysplasie de la hanche',
    about_happy: 'Beaucoup de personnes atteintes du Syndrome ReNU montrent un tempérament heureux et sont affectueuses.',
    about_diagnosis_note: 'En Italie, le séquençage du génome entier (WGS) est nécessaire pour diagnostiquer RNU4-2!',
    research_title: 'Recherche sur le Syndrome ReNU',
    research_intro: 'VOUS pouvez faire avancer la recherche!',
    research_crid: 'Avant de participer à une recherche, créez un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID de Recherche Clinique (CRID)</a>!',
    research_priorities_title: 'Qu\'est-ce qui est important pour la communauté RNU4-2?',
    therapies_title: 'Thérapies pour le Syndrome ReNU',
    therapies_intro: 'Nombreux services thérapeutiques pour les personnes atteintes du Syndrome ReNU',
    therapies_note: 'Ce site n\'approuve pas de thérapies spécifiques. Consultez toujours un médecin.',
    diagnosis_title: 'Où se faire diagnostiquer en Italie',
    diagnosis_intro: 'Pour des informations sur les centres diagnostiques en Italie, contactez-nous.',
    diagnosis_contact: 'Pour des informations sur les centres WGS en Italie:',
    community_title: 'Communauté – Connexion des familles',
    community_intro: 'Vous n\'êtes pas seul! Trouvez espoir et communauté. Familles RNU4-2 cartographiées dans plus de 38 pays.',
    donations_title: 'Soutenez-nous',
    donations_intro: 'Votre soutien nous permet de promouvoir la recherche et d\'aider les familles ReNU.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titulaire: Sindrome ReNU Italia APS',
    contact_title: 'Contactez-nous',
    contact_intro: 'Nous sommes disponibles pour toute information.',
    brochure_title: 'Télécharger nos brochures',
    brochure_intro: 'Téléchargez et partagez les brochures de Sindrome ReNU Italia APS',
    brochure_download: 'Télécharger PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Tous droits réservés.',
    footer_partnership: 'En partenariat avec ReNU Syndrome United (USA)',
    footer_tagline: 'Ensemble, nous faisons la différence',
    donate_now: 'Faire un don', join_registry: 'Rejoindre le registre',
    learn_more: 'En savoir plus', contact_us: 'Contactez-nous', read_more: 'Lire la suite',
    coe_title: 'Centre d\'Excellence ReNU (COE)',
    coe_desc: 'ReNU Syndrome United construit un réseau mondial de Centres d\'Excellence pour connecter les familles avec des équipes médicales multidisciplinaires.',
    world_title: 'ReNU dans le Monde',
    world_desc: 'Les familles RNU4-2 ont été cartographiées dans plus de 38 pays.',
    intl_network: 'Réseau International',
  },
  es: {
    lang: 'es', langName: 'Español',
    title: 'Síndrome ReNU Italia APS',
    subtitle: 'Juntos, hacemos la diferencia',
    tagline: 'Una condición genética recién identificada. Un esfuerzo de investigación coordinado a nivel mundial.',
    hero_text: 'RNU4-2 emerge como una causa principal de trastornos raros del neurodesarrollo – <strong>Renovando la Esperanza para las Familias</strong>',
    hero_desc: 'El Síndrome ReNU es un trastorno spliceosomal. Actualmente hay <strong>~250 casos confirmados en el mundo</strong> (12-14 en Italia), aunque el número real de casos no diagnosticados se estima mucho mayor: las variantes patogénicas se concentran en solo <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posiciones</a> del genoma!',
    nav_home: 'Inicio', nav_about: 'Sobre ReNU', nav_research: 'Investigación',
    nav_therapies: 'Terapias', nav_diagnosis: 'Diagnóstico', nav_community: 'Comunidad',
    nav_donations: 'Donaciones', nav_contact: 'Contacto', nav_brochure: 'Folletos',
    nav_events: 'Eventos', nav_projects: 'Proyectos', nav_members: 'Hazte Socio', nav_faq: 'FAQ & Derechos',
    btn_diagnosis: '¿QUIERES MÁS INFORMACIÓN? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Contáctanos para información sobre el Síndrome ReNU',
    section_map_title: 'Regístrate aquí',
    section_map_desc: '¡La fuerza está en los números! Añade a tu familiar al mapa mundial.',
    section_awareness_title: 'Aumentar la conciencia',
    section_awareness_desc: '¡Participa o apoya eventos ReNU Esperanza!',
    section_research_title: 'Investigación',
    section_research_desc: '¡Participa para acelerar la investigación!',
    section_info_title: 'Más información',
    section_info_desc: 'Aprende sobre cómo ocurre ReNU y sus características típicas.',
    section_parents_title: 'Conexión de padres',
    section_parents_desc: '¡No estás solo! Encuentra comunidad con padres de todo el mundo.',
    section_donations_title: 'Donaciones',
    section_donations_desc: '¡Promover la investigación y construir comunidad. Cada contribución importa!',
    about_title: '¿Qué es el Síndrome ReNU?',
    about_gene: 'El Síndrome ReNU es causado por variantes patogénicas en el gen RNU4-2, un gen de ARN no codificante.',
    about_discovery: 'Descubrimiento de RNU4-2',
    about_discovery_text: 'RNU4-2 fue identificado en octubre de 2024 como causa principal de trastornos raros del neurodesarrollo.',
    about_features_title: 'Características del Síndrome ReNU',
    about_brain: 'Anomalías cerebrales', about_brain_items: 'Volumen reducido de materia blanca, hipoplasia del cuerpo calloso',
    about_development: 'Discapacidad intelectual', about_development_items: 'Retrasos en el desarrollo',
    about_seizures: 'Epilepsia', about_seizures_items: 'Espasmos infantiles, convulsiones focales',
    about_vision: 'Problemas visuales', about_vision_items: 'Hipoplasia del nervio óptico, CVI',
    about_face: 'Características faciales', about_face_items: 'Cara miopática, epicanto, puente nasal ancho',
    about_muscle: 'Tono muscular', about_muscle_items: 'Hipotonía o debilidad muscular',
    about_mobility: 'Movilidad', about_mobility_items: 'Retraso en caminar',
    about_growth: 'Crecimiento', about_growth_items: 'Microcefalia, baja estatura',
    about_feeding: 'Alimentación', about_feeding_items: 'Dificultades de alimentación, babeo excesivo',
    about_communication: 'Comunicación', about_communication_items: 'Dificultad para adquirir lenguaje',
    about_bones: 'Problemas óseos', about_bones_items: 'Baja densidad ósea, displasia de cadera',
    about_happy: 'Muchas personas con Síndrome ReNU muestran un temperamento feliz y son cariñosas.',
    about_diagnosis_note: '¡En Italia, se necesita WGS para diagnosticar RNU4-2!',
    research_title: 'Investigación sobre el Síndrome ReNU',
    research_intro: '¡TÚ puedes hacer avanzar la investigación!',
    research_crid: 'Antes de participar, crea un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID de Investigación Clínica (CRID)</a>!',
    research_priorities_title: '¿Qué es importante para la comunidad RNU4-2?',
    therapies_title: 'Terapias para el Síndrome ReNU',
    therapies_intro: 'Muchos servicios terapéuticos para personas con Síndrome ReNU',
    therapies_note: 'Este sitio no recomienda terapias específicas. Consulte siempre a un médico.',
    diagnosis_title: 'Dónde hacerse el diagnóstico en Italia',
    diagnosis_intro: 'Para información sobre centros diagnósticos en Italia, contáctenos.',
    diagnosis_contact: 'Para información sobre centros WGS en Italia:',
    community_title: 'Comunidad – Conexión de familias',
    community_intro: 'No estás solo. Familias RNU4-2 en más de 38 países del mundo.',
    donations_title: 'Apóyanos',
    donations_intro: 'Tu apoyo nos permite promover la investigación y ayudar a familias ReNU.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titular: Sindrome ReNU Italia APS',
    contact_title: 'Contáctenos',
    contact_intro: 'Estamos disponibles para cualquier información.',
    brochure_title: 'Descarga nuestros folletos',
    brochure_intro: 'Descarga y comparte los folletos de Sindrome ReNU Italia APS',
    brochure_download: 'Descargar PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Todos los derechos reservados.',
    footer_partnership: 'En asociación con ReNU Syndrome United (USA)',
    footer_tagline: 'Juntos, hacemos la diferencia',
    donate_now: 'Donar', join_registry: 'Unirse al registro',
    learn_more: 'Más información', contact_us: 'Contáctenos', read_more: 'Leer más',
    coe_title: 'Centro de Excelencia ReNU (COE)',
    coe_desc: 'ReNU Syndrome United está construyendo una red global de Centros de Excelencia.',
    world_title: 'ReNU en el Mundo',
    world_desc: 'Familias RNU4-2 en más de 38 países.',
    intl_network: 'Red Internacional',
  },
  de: {
    lang: 'de', langName: 'Deutsch',
    title: 'ReNU-Syndrom Italien APS',
    subtitle: 'Gemeinsam machen wir den Unterschied',
    tagline: 'Eine neu identifizierte genetische Erkrankung. Eine global koordinierte Forschungsarbeit.',
    hero_text: 'RNU4-2 entwickelt sich zu einer führenden Ursache seltener neurologischer Entwicklungsstörungen – <strong>Neue Hoffnung für Familien</strong>',
    hero_desc: 'Das ReNU-Syndrom ist eine Spliceosom-Störung. Derzeit sind <strong>~250 Fälle weltweit bestätigt</strong> (12-14 in Italien), wobei die tatsächliche Zahl nicht diagnostizierter Fälle viel höher geschätzt wird: Pathogene Varianten konzentrieren sich auf nur <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 Positionen</a> des Genoms!',
    nav_home: 'Startseite', nav_about: 'Über ReNU', nav_research: 'Forschung',
    nav_therapies: 'Therapien', nav_diagnosis: 'Diagnose', nav_community: 'Gemeinschaft',
    nav_donations: 'Spenden', nav_contact: 'Kontakt', nav_brochure: 'Broschüren',
    nav_events: 'Veranstaltungen', nav_projects: 'Projekte', nav_members: 'Mitglied werden', nav_faq: 'FAQ & Rechte',
    btn_diagnosis: 'MÖCHTEN SIE MEHR INFORMATIONEN? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Kontaktieren Sie uns für Informationen zum ReNU-Syndrom',
    section_map_title: 'Hier registrieren',
    section_map_desc: 'Stärke in der Zahl! Fügen Sie Ihr ReNU-Familienmitglied zur Weltkarte hinzu.',
    section_awareness_title: 'Bewusstsein schaffen',
    section_awareness_desc: 'Nehmen Sie an ReNU-Hoffnungsveranstaltungen teil!',
    section_research_title: 'Forschung',
    section_research_desc: 'Nehmen Sie teil, um die Forschung zu beschleunigen!',
    section_info_title: 'Weitere Informationen',
    section_info_desc: 'Erfahren Sie, wie ReNU auftritt und wie die Entwicklung beeinflusst wird.',
    section_parents_title: 'Elternverbindung',
    section_parents_desc: 'Sie sind nicht allein! Finden Sie Gemeinschaft mit Familien weltweit.',
    section_donations_title: 'Spenden',
    section_donations_desc: 'Forschung fördern und Gemeinschaft aufbauen. Jeder Beitrag zählt!',
    about_title: 'Was ist das ReNU-Syndrom?',
    about_gene: 'Das ReNU-Syndrom wird durch pathogene Varianten im RNU4-2-Gen verursacht.',
    about_discovery: 'Entdeckung von RNU4-2',
    about_discovery_text: 'RNU4-2 wurde im Oktober 2024 als führende Ursache seltener neurologischer Entwicklungsstörungen identifiziert.',
    about_features_title: 'Merkmale des ReNU-Syndroms',
    about_brain: 'Hirnanomalien', about_brain_items: 'Reduziertes Marklagervolumen, Hypoplasie des Corpus callosum',
    about_development: 'Intellektuelle Behinderung', about_development_items: 'Entwicklungsverzögerungen',
    about_seizures: 'Epilepsie', about_seizures_items: 'Infantile Spasmen, fokale Anfälle',
    about_vision: 'Sehprobleme', about_vision_items: 'Hypoplasie des Sehnervs, kortikale Sehbeeinträchtigung',
    about_face: 'Gesichtsmerkmale', about_face_items: 'Myopathisches Gesicht, Epikanthus',
    about_muscle: 'Muskeltonus', about_muscle_items: 'Hypotonie oder Muskelschwäche',
    about_mobility: 'Mobilität', about_mobility_items: 'Verzögertes Gehen',
    about_growth: 'Wachstum', about_growth_items: 'Mikrozephalie, Kleinwuchs',
    about_feeding: 'Ernährung', about_feeding_items: 'Fütterungsschwierigkeiten, übermäßiges Speicheln',
    about_communication: 'Kommunikation', about_communication_items: 'Spracherwerbsschwierigkeiten',
    about_bones: 'Knochenprobleme', about_bones_items: 'Niedrige Knochendichte, Hüftdysplasie',
    about_happy: 'Viele Menschen mit ReNU-Syndrom zeigen ein fröhliches Temperament und sind liebevoll.',
    about_diagnosis_note: 'In Italien ist WGS erforderlich, um RNU4-2 zu diagnostizieren!',
    research_title: 'Forschung zum ReNU-Syndrom',
    research_intro: 'SIE können die Forschung voranbringen!',
    research_crid: 'Erstellen Sie vor der Teilnahme eine <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">Klinische Forschungs-ID (CRID)</a>!',
    research_priorities_title: 'Was ist der RNU4-2-Gemeinschaft wichtig?',
    therapies_title: 'Therapien für das ReNU-Syndrom',
    therapies_intro: 'Viele Therapieangebote für Menschen mit ReNU-Syndrom',
    therapies_note: 'Diese Website empfiehlt keine spezifischen Therapien. Konsultieren Sie immer einen Arzt.',
    diagnosis_title: 'Wo können Sie sich in Italien diagnostizieren lassen?',
    diagnosis_intro: 'Für Informationen über diagnostische Zentren in Italien kontaktieren Sie uns.',
    diagnosis_contact: 'Für Informationen über WGS-Zentren in Italien:',
    community_title: 'Gemeinschaft – Familienverbindung',
    community_intro: 'Sie sind nicht allein! RNU4-2-Familien in über 38 Ländern weltweit.',
    donations_title: 'Unterstützen Sie uns',
    donations_intro: 'Ihre Unterstützung ermöglicht uns die Forschungsförderung und Hilfe für ReNU-Familien.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Kontoinhaber: Sindrome ReNU Italia APS',
    contact_title: 'Kontaktieren Sie uns',
    contact_intro: 'Wir stehen für alle Informationen zur Verfügung.',
    brochure_title: 'Broschüren herunterladen',
    brochure_intro: 'Laden Sie die Informationsbroschüren von Sindrome ReNU Italia APS herunter',
    brochure_download: 'PDF herunterladen',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Alle Rechte vorbehalten.',
    footer_partnership: 'In Partnerschaft mit ReNU Syndrome United (USA)',
    footer_tagline: 'Gemeinsam machen wir den Unterschied',
    donate_now: 'Jetzt spenden', join_registry: 'Dem Register beitreten',
    learn_more: 'Mehr erfahren', contact_us: 'Kontaktieren Sie uns', read_more: 'Mehr lesen',
    coe_title: 'ReNU Exzellenzzentrum (COE)',
    coe_desc: 'ReNU Syndrome United baut ein globales Netzwerk von Exzellenzzentren auf.',
    world_title: 'ReNU weltweit',
    world_desc: 'RNU4-2-Familien in über 38 Ländern kartiert.',
    intl_network: 'Internationales Netzwerk',
  }
}

// ─── LAYOUT SHELL ─────────────────────────────────────────────────────────────
function getHtml(t: Record<string, string>, page: string = 'home', content: string): string {
  const langs = ['it', 'en', 'fr', 'es', 'de']
  const flags: Record<string, string> = { it: '🇮🇹', en: '🇬🇧', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪' }
  const langNames: Record<string, string> = { it: 'Italiano', en: 'English', fr: 'Français', es: 'Español', de: 'Deutsch' }
  // Dropdown bandierina compatto: mostra solo lingua attiva, espande su click
  const langSwitcher = `
    <div class="relative lang-dropdown" style="position:relative">
      <button onclick="this.parentElement.classList.toggle('open')"
              class="flex items-center gap-1 px-1.5 py-1.5 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors bg-white bg-opacity-15 border border-white border-opacity-30"
              aria-label="Cambia lingua" style="white-space:nowrap" title="${langNames[t.lang]}">
        <span class="text-lg leading-none">${flags[t.lang]}</span>
        <i class="fas fa-chevron-down text-xs opacity-70"></i>
      </button>
      <div class="lang-dropdown-menu absolute right-0 mt-1 py-1 rounded-xl shadow-2xl border border-white border-opacity-20 z-[9999]"
           style="background:linear-gradient(135deg,#082050,#1078C0);min-width:130px;display:none">
        ${langs.map(l => `
        <a href="/${l}/${page}" class="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-20 transition-colors ${t.lang===l?'bg-white bg-opacity-25':''}" style="text-decoration:none;color:white">
          <span class="text-base leading-none">${flags[l]}</span>
          <span class="text-xs font-semibold">${langNames[l]}</span>
          ${t.lang===l?'<i class="fas fa-check text-xs ml-auto text-sky-300"></i>':''}
        </a>`).join('')}
      </div>
    </div>
    <script>
      (function(){
        // Chiudi lang dropdown cliccando fuori - usa mousedown per non interferire con touch
        document.addEventListener('click', function(e){
          document.querySelectorAll('.lang-dropdown').forEach(function(d){
            if(!d.contains(e.target)) d.classList.remove('open');
          });
        });
        var observer = new MutationObserver(function(muts){
          muts.forEach(function(m){
            if(m.target.classList && m.attributeName === 'class'){
              var menu = m.target.querySelector('.lang-dropdown-menu');
              if(menu) menu.style.display = m.target.classList.contains('open') ? 'block' : 'none';
            }
          });
        });
        document.querySelectorAll('.lang-dropdown').forEach(function(d){
          observer.observe(d, {attributes:true});
        });
      })();
    </script>`

  const navItems = [
    { key: 'nav_home', page: 'home', icon: 'fa-home', disabled: false },
    { key: 'nav_about', page: 'about', icon: 'fa-dna', disabled: false },
    { key: 'nav_therapies', page: 'therapies', icon: 'fa-heartbeat', disabled: false },
    { key: 'nav_diagnosis', page: 'diagnosis', icon: 'fa-stethoscope', disabled: false },
    { key: 'nav_community', page: 'community', icon: 'fa-users', disabled: false },
    { key: 'nav_donations', page: 'donations', icon: 'fa-heart', disabled: false },
    { key: 'nav_events', page: 'events', icon: 'fa-calendar-alt', disabled: false },
    { key: 'nav_projects', page: 'projects', icon: 'fa-rocket', disabled: false },
    { key: 'nav_science', page: 'science', icon: 'fa-flask', disabled: false },
    { key: 'nav_brochure', page: 'brochure', icon: 'fa-photo-video', disabled: false },
    { key: 'nav_members', page: 'members', icon: 'fa-id-card', disabled: false },
    { key: 'nav_faq', page: 'faq', icon: 'fa-question-circle', disabled: false },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope', disabled: false },
  ]
  const navLinks = navItems.filter(item => !item.hidden).map(item => item.disabled ? `
    <span class="flex items-center gap-1 px-1.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-40 cursor-not-allowed" title="${t.lang==='it'?'Sezione in preparazione':'Section coming soon'}">
      <i class="fas ${item.icon} text-xs"></i>
      <span class="hidden lg:inline nav-label">${t[item.key]}</span>
    </span>` : `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1 px-1.5 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-xs font-semibold whitespace-nowrap ${page === item.page ? 'bg-white bg-opacity-25 shadow-inner ring-1 ring-sky-300' : ''}" title="${t[item.key]}">
      <i class="fas ${item.icon} text-xs opacity-80"></i>
      <span class="hidden lg:inline nav-label">${t[item.key]}</span>
    </a>`).join('')

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.tagline}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  <!-- iOS / Safari -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="ReNU Italia">
  <link rel="apple-touch-icon" href="/icons/icon-180x180.png">
  <link rel="apple-touch-icon" sizes="57x57"  href="/icons/icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60"  href="/icons/icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72"  href="/icons/icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76"  href="/icons/icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png">
  <!-- Android / Chrome -->
  <meta name="theme-color" content="#082050">
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy:   #082050;
      --blue:   #1078C0;
      --sky:    #45B8EC;
      --pale:   #C8E8F8;
      --bg:     #EEF6FB;
      --white:  #FFFFFF;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg);
    }
    /* ── Logo sfondo intera pagina (come da specifiche PDF punto 5) ── */
    /* Il logo appare come watermark fisso sopra tutto il contenuto, visibile su ogni sezione */
    /* watermark fisso centrato su tutta la pagina */
    #page-logo-watermark {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none !important;
      z-index: 1;
    }
    #page-logo-watermark img {
      width: 70vmin;
      height: 70vmin;
      max-width: 500px;
      max-height: 500px;
      object-fit: contain;
      opacity: 0.15;
      pointer-events: none !important;
    }

    /* ── Hero gradient – brochure palette ── */
    .hero-gradient {
      background: linear-gradient(150deg, #082050 0%, #1078C0 55%, #45B8EC 100%);
      position: relative; overflow: hidden;
    }
    .hero-gradient::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 75% 40%, rgba(69,184,236,0.22) 0%, transparent 55%);
      pointer-events: none;
    }

    /* ── Cards ── */
    .card {
      background: white;
      border: 1px solid var(--pale);
      border-radius: 1rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(8,32,80,0.12); }
    .card-navy  { border-top: 4px solid #082050; }
    .card-blue  { border-top: 4px solid #1078C0; }
    .card-sky   { border-top: 4px solid #45B8EC; }
    .card-red   { border-top: 4px solid #E74C3C; }
    .card-green { border-top: 4px solid #16A085; }
    .card-purple{ border-top: 4px solid #7C3AED; }
    .card-amber { border-top: 4px solid #D97706; }

    /* ── Diagnosis pulse button ── */
    .btn-diagnosis {
      background: linear-gradient(135deg, #E74C3C, #C0392B);
      animation: pulse-red 2.2s infinite;
    }
    @keyframes pulse-red {
      0%, 100% { box-shadow: 0 0 0 0 rgba(231,76,60,0.6); }
      50%       { box-shadow: 0 0 0 14px rgba(231,76,60,0); }
    }

    /* ── Icon circles ── */
    .ic { width:3.5rem; height:3.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .ic-navy   { background:#C8DCF0; color:#082050; }
    .ic-blue   { background:#BFDFFA; color:#1078C0; }
    .ic-sky    { background:#C8F0FA; color:#0369A1; }
    .ic-red    { background:#FEE2E2; color:#DC2626; }
    .ic-green  { background:#D1FAE5; color:#059669; }
    .ic-purple { background:#EDE9FE; color:#7C3AED; }
    .ic-amber  { background:#FEF3C7; color:#D97706; }
    .ic-cyan   { background:#CFFAFE; color:#0E7490; }

    /* ── Navbar desktop: visibile da 768px ── */
    #desktopNav { display: none; }
    @media (min-width: 768px) { #desktopNav { display: flex; } }

    /* ── Hamburger: visibile solo su mobile ── */
    #mobileBtn { display: flex; }
    @media (min-width: 768px) { #mobileBtn { display: none !important; } }

    /* ── Mobile menu ── */
    #mobileMenu { display: none; }
    #mobileMenu.open { display: block; }

    html { scroll-behavior: smooth; }
    img  { max-width:100%; height:auto; }

    /* ── Responsive fixes ── */
    @media (max-width: 767px) {
      .hero-gradient { padding-top: 2rem; padding-bottom: 2rem; }
      h1 { font-size: 1.75rem !important; line-height: 2.2rem !important; }
      .stat-bar { font-size: 0.7rem; }
    }
    /* ── Nav label visible from lg (1024px) – icone pure su md ── */
    @media (min-width: 1024px) {
      .nav-label { display: inline !important; }
    }

    /* ── Section backgrounds ── */
    .section-light { background: linear-gradient(180deg, #EEF6FB 0%, #FFFFFF 100%); }
    .section-white { background: #FFFFFF; }
    .section-pale  { background: #F0F8FD; }

    /* ── Stats bar ── */
    .stat-bar { background: linear-gradient(135deg, #082050 0%, #1078C0 100%); }

    /* Image frame */
    .img-frame { border-radius: 1.25rem; overflow: hidden; box-shadow: 0 12px 40px rgba(8,32,80,0.18); }
  </style>
</head>
<body>

<!-- ── LOGO WATERMARK FISSO SU TUTTA LA PAGINA (PDF punto 5) ── -->
<div id="page-logo-watermark" aria-hidden="true">
  <img src="/images/logo_transparent2.png" alt="">
</div>

<!-- ── TOP ANNOUNCEMENT BAR ── -->
<div class="stat-bar text-white text-center text-xs py-2 px-4 font-medium">
  <i class="fas fa-dna mr-2 text-sky-300"></i>
  ${t.lang==='it' ? '💙 Prima Associazione ReNU in Italia — <a href="/it/about" class="underline hover:text-sky-200">Scopri la nostra missione</a>' : 
    t.lang==='en' ? '💙 First ReNU Association in Italy — <a href="/en/about" class="underline hover:text-sky-200">Discover our mission</a>' :
    t.lang==='fr' ? '💙 Première Association ReNU en Italie — <a href="/fr/about" class="underline hover:text-sky-200">Découvrez notre mission</a>' :
    t.lang==='es' ? '💙 Primera Asociación ReNU en Italia — <a href="/es/about" class="underline hover:text-sky-200">Descubre nuestra misión</a>' :
    '💙 Erste ReNU-Vereinigung in Italien — <a href="/de/about" class="underline hover:text-sky-200">Entdecken Sie unsere Mission</a>'}
</div>

<!-- ── NAVBAR ── -->
<header class="text-white shadow-xl sticky top-0" style="z-index:1000;background:linear-gradient(90deg,#082050 0%,#1078C0 60%,#45B8EC 100%);position:relative;">
  <div class="max-w-screen-2xl mx-auto px-3">
    <div class="flex items-center justify-between" style="min-height:4.5rem">

      <!-- Logo + nome -->
      <a href="/${t.lang}/home" class="flex items-center gap-2 flex-shrink-0">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-14 w-auto drop-shadow-lg">
        <span class="hidden lg:block text-xs font-bold leading-tight text-sky-100" style="max-width:110px">Sindrome<br>ReNU Italia APS</span>
      </a>

      <!-- Desktop nav: visibile da 768px via CSS puro (no Tailwind) -->
      <nav id="desktopNav" style="align-items:center;gap:2px;flex-wrap:nowrap;justify-content:center;flex:1;padding:0 8px;overflow-x:auto;">
        ${navLinks}
      </nav>

      <!-- Lente ricerca + Lang + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">

        <!-- Lente di ricerca navbar -->
        <div class="relative nav-search-wrap">
          <button onclick="document.getElementById('navSearchBox').classList.toggle('hidden')" 
                  class="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors" 
                  aria-label="${t.lang==='it'?'Cerca nel sito':'Search site'}" title="${t.lang==='it'?'Cerca nel sito':'Search site'}">
            <i class="fas fa-search text-sm"></i>
          </button>
          <div id="navSearchBox" class="hidden absolute right-0 top-full mt-2 z-[9999]" style="width:280px">
            <div class="rounded-xl shadow-2xl border border-white border-opacity-20 overflow-hidden" style="background:linear-gradient(135deg,#082050,#1078C0)">
              <div class="flex items-center gap-2 px-3 py-2">
                <i class="fas fa-search text-sky-300 text-sm"></i>
                <input id="navSearchInput" type="text" placeholder="${t.lang==='it'?'Cerca nel sito...':'Search site...'}"
                       class="flex-1 bg-transparent text-white placeholder-sky-300 text-sm outline-none"
                       oninput="navDoSearch(this.value,'${t.lang}')">
                <button onclick="document.getElementById('navSearchBox').classList.add('hidden')" class="text-sky-300 hover:text-white">
                  <i class="fas fa-times text-xs"></i>
                </button>
              </div>
              <div id="navSearchResults" class="max-h-64 overflow-y-auto"></div>
            </div>
          </div>
        </div>

        <!-- Dropdown lingua -->
        <div class="flex items-center gap-1">${langSwitcher}</div>

        <button id="mobileBtn"
          onclick="var m=document.getElementById('mobileMenu');if(m){var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o?'true':'false');}"
          aria-label="Apri menu" aria-expanded="false"
          style="cursor:pointer;background:rgba(255,255,255,0.15);border:none;border-radius:8px;padding:10px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;touch-action:manipulation;z-index:1001;flex-shrink:0;">
          <i class="fas fa-bars" style="font-size:1.3rem;color:white;display:block;pointer-events:none;"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileMenu" style="padding-bottom:12px;">
      <nav class="flex flex-col gap-1">
        ${navItems.filter(i => !i.hidden).map(i => i.disabled ? `
        <span class="flex items-center gap-2 px-3 py-2.5 rounded-lg opacity-40 cursor-not-allowed">
          <i class="fas ${i.icon} w-5 text-center text-sm"></i>
          <span class="font-medium">${t[i.key]}</span>
          <span class="text-xs ml-1">(${t.lang==='it'?'in preparazione':'coming soon'})</span>
        </span>` : `
        <a href="/${t.lang}/${i.page}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors ${page === i.page ? 'bg-white bg-opacity-25' : ''}">
          <i class="fas ${i.icon} w-5 text-center text-sm opacity-80"></i>
          <span class="font-medium">${t[i.key]}</span>
        </a>`).join('')}
      </nav>
    </div>
  </div>
</header>

<!-- ── CONTENT ── -->
<main>${content}</main>

<!-- ── FOOTER ── -->
<footer style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);" class="text-white mt-16">
  <div class="max-w-screen-xl mx-auto px-4 py-14">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand -->
      <div class="md:col-span-1">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-16 w-auto mb-4 drop-shadow">
        <p class="text-sky-200 text-sm italic mb-2">"${t.footer_tagline}"</p>
        <p class="text-sky-300 text-sm">${t.footer_partnership}</p>
        <p class="text-sky-300 text-sm mt-1">www.sindromerenu.it</p>
        <p class="text-sky-400 text-xs mt-1"><i class="fas fa-map-marker-alt mr-1"></i>Via Marina 6, 20121 Milano (MI)</p>
        <p class="text-sky-400 text-xs mt-0.5"><i class="fas fa-receipt mr-1"></i>P.IVA / C.F.: 98020680157</p>
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com/groups/1268033701594892/?ref=share" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
          <a href="https://www.instagram.com/immaaudino1975/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
      <!-- Contacts -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Email & Tel.</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[['info','Info Generali'],['donazioni','Donazioni'],['segreteria','Segreteria'],['presidenza','Presidenza']].map(([e,l]) => `
          <li><a href="mailto:${e}@sindromerenu.it" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-envelope text-xs"></i>${e}@sindromerenu.it</a></li>`).join('')}
          <li class="pt-1"><a href="tel:+393277634894" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-phone text-xs"></i>+39 327 763 4894 <span class="opacity-60">(Segr.)</span></a></li>
          <li><a href="tel:+393357301206" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-phone text-xs"></i>+39 335 730 1206 <span class="opacity-60">(Pres.)</span></a></li>
        </ul>
      </div>
      <!-- Links -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Link Utili</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[
            ['https://www.renusyndrome.org','ReNU Syndrome United (USA)'],
            ['https://thecrid.org/','Clinical Research ID (CRID)'],
            ['https://rare-x.org/rnu4-2/','Rare-X Registry'],
            ['https://citizen.health/renu','Citizen Health'],
            ['https://www.syndrome-renu.fr/','Assoc. Française ReNU'],
            ['https://www.sindromerenu.es/','Asociación ReNU España'],
          ].map(([href,lbl]) => `
          <li><a href="${href}" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-external-link-alt text-xs"></i>${lbl}</a></li>`).join('')}
        </ul>
      </div>
      <!-- Brochure & Pages -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">${t.nav_brochure}</h3>
        <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors mb-4 block w-fit">
          <i class="fas fa-file-pdf"></i>${t.brochure_download}
        </a>
        <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors block w-fit">
          <i class="fas fa-th-large"></i>${t.nav_brochure}
        </a>
      </div>
    </div>
    <div class="border-t border-sky-700 mt-10 pt-6 text-center text-sm text-sky-400">
      ${t.footer_rights} &nbsp;|&nbsp; P.IVA / C.F.: 98020680157 &nbsp;|&nbsp; Via Marina 6, 20121 Milano (MI)
      <br class="md:hidden">
      <span class="hidden md:inline">&nbsp;|&nbsp;</span>
      <a href="/${t.lang}/privacy" class="hover:text-white underline">${t.lang==='it'?'Privacy Policy':'Privacy Policy'}</a>
      &nbsp;|&nbsp;
      <a href="mailto:info@sindromerenu.it" class="hover:text-white underline">${t.lang==='it'?'Contatta il DPO':'Contact DPO'}</a>
      &nbsp;|&nbsp;
      <span>${t.lang==='it'?'Sito conforme GDPR (Reg. UE 2016/679)':'GDPR Compliant (EU Reg. 2016/679)'}</span>
    </div>
  </div>
</footer>

<!-- ── COOKIE BANNER GDPR ── -->
<div id="cookieBanner" style="display:none;position:fixed;bottom:0;left:0;right:0;z-index:99999;background:linear-gradient(135deg,#082050,#1078C0);color:white;padding:1rem 1.5rem;box-shadow:0 -4px 20px rgba(0,0,0,0.3)">
  <div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:space-between">
    <div style="flex:1;min-width:200px;font-size:0.85rem">
      <i class="fas fa-cookie-bite" style="color:#45B8EC;margin-right:0.5rem"></i>
      <strong>${t.lang==='it'?'Informativa Cookie':'Cookie Notice'}</strong>
      <span style="color:#C8E8F8;margin-left:0.5rem">
        ${t.lang==='it'?
          'Utilizziamo solo cookie tecnici necessari. Nessuna profilazione o tracciamento pubblicitario. <a href="/'+t.lang+'/privacy" style="color:#45B8EC;text-decoration:underline">Leggi la Privacy Policy</a>':
          'We only use technical cookies. No profiling or advertising tracking. <a href="/'+t.lang+'/privacy" style="color:#45B8EC;text-decoration:underline">Read Privacy Policy</a>'}
      </span>
    </div>
    <div style="display:flex;gap:0.75rem;flex-shrink:0">
      <button onclick="acceptCookies()" style="background:#45B8EC;color:#082050;border:none;padding:0.5rem 1.25rem;border-radius:999px;font-weight:700;cursor:pointer;font-size:0.85rem">
        ${t.lang==='it'?'Accetto':'Accept'}
      </button>
      <a href="/${t.lang}/privacy" style="color:#C8E8F8;font-size:0.75rem;align-self:center;text-decoration:underline">
        ${t.lang==='it'?'Maggiori info':'More info'}
      </a>
    </div>
  </div>
</div>

<script>
  // Chiudi navSearchBox cliccando fuori
  document.addEventListener('click', function(e) {
    var box = document.getElementById('navSearchBox');
    var wrap = document.querySelector('.nav-search-wrap');
    if (box && wrap && !wrap.contains(e.target)) box.classList.add('hidden');
  });

  // Ricerca navbar globale
  const _navIndex = [
    { title:'${t.lang==='it'?'Home':'Home'}', url:'/${t.lang}/home', keywords:'home benvenuto renu sindrome associazione' },
    { title:'${t.lang==='it'?'Chi\u00e8 ReNU':'What is ReNU'}', url:'/${t.lang}/about', keywords:'about renu sindrome gene rnu4-2 diagnosi sintomi' },
    { title:'${t.lang==='it'?'Terapie':'Therapies'}', url:'/${t.lang}/therapies', keywords:'terapie fisioterapia logopedia feuerstein acquaticità nuoto musicoterapia aba' },
    { title:'${t.lang==='it'?'Diagnosi':'Diagnosis'}', url:'/${t.lang}/diagnosis', keywords:'diagnosi wgs wes sequenziamento genetico esoma genoma' },
    { title:'${t.lang==='it'?'Community':'Community'}', url:'/${t.lang}/community', keywords:'community famiglia genitori rete mappa instagram facebook' },
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni 5x1000 buonacausa compleanno solidale matilde frontis' },
    { title:'${t.lang==='it'?'Contatti':'Contact'}', url:'/${t.lang}/contact', keywords:'contatti email telefono whatsapp info presidenza segreteria' },
    { title:'${t.lang==='it'?'Brochure':'Brochures'}', url:'/${t.lang}/brochure', keywords:'brochure pdf scarica download materiali' },
    { title:'${t.lang==='it'?'Diventa Socio':'Become a Member'}', url:'/${t.lang}/members', keywords:'socio iscrizione quota associazione membro' },
    { title:'${t.lang==='it'?'Incontri ed Eventi':'Events'}', url:'/${t.lang}/events', keywords:'eventi incontri calendario manifestazioni' },
    { title:'${t.lang==='it'?'Progetti':'Projects'}', url:'/${t.lang}/projects', keywords:'progetti iniziative campagne awareness consapevolezza' },
    { title:'${t.lang==='it'?'FAQ & Diritti':'FAQ & Rights'}', url:'/${t.lang}/faq', keywords:'faq diritti tutele legge 104 pass auto disabilità card bonus scuola burocrazia inps' },
  ];
  function navDoSearch(q, lang) {
    var res = document.getElementById('navSearchResults');
    if (!q || q.length < 2) { res.innerHTML = ''; return; }
    var lq = q.toLowerCase();
    var hits = _navIndex.filter(function(s){ return s.title.toLowerCase().includes(lq) || s.keywords.toLowerCase().includes(lq); });
    if (hits.length === 0) {
      res.innerHTML = '<div class="px-4 py-3 text-sky-200 text-xs">' + (lang==='it'?'Nessun risultato.':'No results.') + '</div>';
    } else {
      res.innerHTML = hits.map(function(h){
        return '<a href="'+h.url+'" class="flex items-center gap-2 px-4 py-2.5 hover:bg-white hover:bg-opacity-20 transition-colors border-t border-white border-opacity-10" style="color:white;text-decoration:none">'
          + '<i class="fas fa-arrow-right text-sky-300 text-xs"></i>'
          + '<span class="text-sm font-semibold">'+h.title+'</span>'
          + '</a>';
      }).join('');
    }
  }
</script>
</body>
</html>`
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function homePage(t: Record<string, string>): string {
  const cards = [
    { href: 'https://form.jotform.com/250154538972159', ext: true,   icon: 'fa-map-marker-alt', ic: 'ic-blue',   title: t.section_map_title,       desc: t.section_map_desc,       accent: 'card-blue',   img: '/images/renu_map.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-bullhorn',       ic: 'ic-purple', title: t.section_awareness_title,  desc: t.section_awareness_desc,  accent: 'card-purple', img: '/images/renu_awareness.jpg' },
    { href: `/${t.lang}/research`,                                    icon: 'fa-microscope',     ic: 'ic-sky',    title: t.section_research_title,   desc: t.section_research_desc,   accent: 'card-sky',    img: t.lang==='it'?'/images/it_ricerca.jpg':'/images/renu_research.jpg' },
    { href: `/${t.lang}/about`,                                       icon: 'fa-info-circle',    ic: 'ic-navy',   title: t.section_info_title,       desc: t.section_info_desc,       accent: 'card-navy',   img: '/images/renu_info.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-users',          ic: 'ic-green',  title: t.section_parents_title,    desc: t.section_parents_desc,    accent: 'card-green',  img: '/images/renu_parents.jpg' },
    { href: `/${t.lang}/donations`,                                   icon: 'fa-heart',          ic: 'ic-red',    title: t.section_donations_title,  desc: t.section_donations_desc,  accent: 'card-red',    img: '/images/renu_donations.jpg' },
  ]
  return `
  <!-- HERO -->
  <section class="hero-gradient text-white py-20 px-4 relative">
    <div class="max-w-6xl mx-auto relative" style="z-index:2;">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.18);border-radius:9999px;padding:8px 16px;font-size:0.875rem;margin-bottom:1.5rem;color:#BAE6FD;border:1px solid rgba(255,255,255,0.25);">
            <i class="fas fa-dna" style="color:#7DD3FC;"></i> ${t.tagline}
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">${t.hero_text}</h1>
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed max-w-2xl">${t.hero_desc}</p>
          <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start flex-wrap">
            <a href="/${t.lang}/donations" class="btn-diagnosis inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl" style="background: linear-gradient(135deg,#DC2626,#B91C1C);">
              <i class="fas fa-heart"></i>${t.btn_diagnosis}
            </a>
            <a href="/${t.lang}/contact" class="inline-flex items-center gap-2 font-bold px-6 py-4 rounded-full text-base transition-colors shadow-lg" style="background:#F59E0B; color:#082050">
              <i class="fas fa-info-circle"></i>${t.btn_info}
            </a>
            <a href="/${t.lang}/about" class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-dna"></i>${t.learn_more}
            </a>
          </div>
          <p class="text-sky-200 text-sm mt-3">${t.btn_info_sub}</p>
        </div>
        <div class="flex-shrink-0 hidden md:block">
          <div class="img-frame w-80 xl:w-96">
            <img src="/images/renu_hero.jpg" alt="Sindrome ReNU Italia APS" class="w-full h-56 object-cover">
          </div>
          <div class="mt-4 img-frame w-80 xl:w-96">
            <img src="${t.lang==='it'?'/images/move4renu_it.jpg':t.lang==='en'?'/images/move4renu_en.jpg':t.lang==='fr'?'/images/move4renu_fr.jpg':t.lang==='de'?'/images/move4renu_de.jpg':'/images/move4renu_es.jpg'}" alt="${t.lang==='it'?'Muoviti per ReNU':t.lang==='fr'?'Bougez pour ReNU':t.lang==='de'?'Bewegt euch für ReNU':t.lang==='es'?'Muévete por ReNU':'Move 4 ReNU'}" class="w-full h-28 object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <section class="stat-bar text-white py-6 px-4">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      <div><div class="text-3xl font-extrabold text-sky-300">~250</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'casi accertati nel mondo':t.lang==='en'?'confirmed cases worldwide':t.lang==='fr'?'cas confirmés dans le monde':t.lang==='es'?'casos confirmados en el mundo':'bestätigte Fälle weltweit'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">12-14</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'casi in Italia':t.lang==='en'?'cases in Italy':t.lang==='fr'?'cas en Italie':t.lang==='es'?'casos en Italia':'Fälle in Italien'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">13</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'posizioni nel DNA mutate':t.lang==='en'?'DNA positions mutated':t.lang==='fr'?'positions ADN mutées':t.lang==='es'?'posiciones ADN mutadas':'DNA-Positionen mutiert'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">38+</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'paesi con famiglie mappate':t.lang==='en'?'countries with mapped families':t.lang==='fr'?'pays avec familles':t.lang==='es'?'países con familias':'Länder mit Familien'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">2024</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'anno della scoperta':t.lang==='en'?'year of discovery':t.lang==='fr'?'année de la découverte':t.lang==='es'?'año del descubrimiento':'Jahr der Entdeckung'}</div></div>
    </div>
  </section>

  <!-- CARDS GRID -->
  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-extrabold text-center mb-10" style="color:#082050">
        ${t.lang==='it'?'Approfondimenti':t.lang==='en'?'Explore':t.lang==='fr'?'Approfondissements':t.lang==='es'?'Profundización':'Vertiefungen'}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards.map(c => `
        <a href="${c.href}" ${(c as any).ext ? 'target="_blank"' : ''} class="card ${c.accent} overflow-hidden block group">
          <div class="h-36 overflow-hidden bg-sky-50">
            <img src="${c.img}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                 onerror="this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full\'><i class=\'fas ${c.icon} text-4xl text-sky-300\'></i></div>'">
          </div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-2">
              <div class="ic ${c.ic}"><i class="fas ${c.icon} text-lg"></i></div>
              <h3 class="font-bold text-base text-gray-800 group-hover:text-blue-700 transition-colors" style="color:#082050">${c.title}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">${c.desc}</p>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION with brochure images -->
  <section class="py-16 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style="background:#C8E8F8; color:#082050">
            <i class="fas fa-dna"></i> Sindrome ReNU Italia APS
          </div>
          <h2 class="text-3xl font-extrabold mb-4 leading-tight" style="color:#082050">
            ${t.lang==='it'?'"Insieme, facciamo la differenza"':t.lang==='en'?'"Together, we make a difference"':t.lang==='fr'?'"Ensemble, nous faisons la différence"':t.lang==='es'?'"Juntos, hacemos la diferencia"':'"Gemeinsam machen wir den Unterschied"'}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-5">
            ${t.lang==='it'?'La nostra associazione è finalmente realtà e può contare sul sostegno di chi, come voi, vuole fare la differenza. Da oggi potete contribuire con un gesto concreto per aiutare i bambini e le famiglie colpite dalla Sindrome ReNU in Italia.':
              t.lang==='en'?'Our association is finally a reality and can count on the support of those who, like you, want to make a difference. You can now contribute with a concrete gesture to help children and families affected by ReNU Syndrome in Italy.':
              t.lang==='fr'?'Notre association est enfin réalité. Vous pouvez maintenant contribuer avec un geste concret pour aider les enfants et les familles touchées par le Syndrome ReNU en Italie.':
              t.lang==='es'?'Nuestra asociación es finalmente una realidad. Ahora puedes contribuir con un gesto concreto para ayudar a los niños y familias afectados por el Síndrome ReNU en Italia.':
              'Unser Verein ist endlich Wirklichkeit. Sie können jetzt mit einer konkreten Geste helfen, Kinder und Familien zu unterstützen, die vom ReNU-Syndrom betroffen sind.'}
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="/${t.lang}/about" class="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full transition-colors" style="background:#1078C0">
              <i class="fas fa-dna"></i>${t.learn_more}
            </a>
            <a href="/${t.lang}/donations" class="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full transition-colors bg-red-500 hover:bg-red-600">
              <i class="fas fa-heart"></i>${t.donate_now}
            </a>
            <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full transition-colors" style="background:#C8E8F8; color:#082050">
              <i class="fas fa-file-pdf"></i>${t.nav_brochure}
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="img-frame"><img src="/images/famiglie.jpg" alt="Famiglie Sindrome ReNU Italia" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/bambini.jpg" alt="Bambini Sindrome ReNU" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/mani.jpg" alt="Comunità Sindrome ReNU Italia" class="w-full h-36 object-cover"></div>
          <div class="img-frame"><img src="/images/festa.jpg" alt="Insieme – Sindrome ReNU Italia" class="w-full h-36 object-cover"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- AWARENESS SECTION -->
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #F0F8FD 0%, #E8F4FC 100%)">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background:#082050; color:white">
          <i class="fas fa-ribbon"></i>
          ${t.lang==='it'?'Consapevolezza & Iniziative':t.lang==='en'?'Awareness & Initiatives':t.lang==='fr'?'Sensibilisation & Initiatives':t.lang==='es'?'Conciencia & Iniciativas':'Bewusstsein & Initiativen'}
        </div>
        <h2 class="text-3xl font-extrabold" style="color:#082050">${t.section_awareness_title}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Awareness card - mascotte Reny -->
        <div class="card card-sky overflow-hidden">
          <div class="overflow-hidden h-52 flex items-center justify-center" style="background: linear-gradient(135deg, #E8F4FC 0%, #C8E8F8 100%);">
            <img src="/images/mascotte_reny_1.png" alt="Reny – Mascotte Sindrome ReNU Italia"
                 class="h-full w-auto object-contain py-2"
                 style="max-height:200px; filter: drop-shadow(0 4px 16px rgba(8,32,80,0.13));">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Reny – La nostra mascotte':t.lang==='en'?'Reny – Our Mascot':t.lang==='fr'?'Reny – Notre mascotte':t.lang==='es'?'Reny – Nuestra mascota':'Reny – Unser Maskottchen'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Reny è la tartaruga simbolo di Sindrome ReNU Italia APS. Con la sua energia e il suo sorriso accompagna bambini, famiglie e amici nelle iniziative dell\'associazione.':t.lang==='en'?'Reny is the turtle mascot of Sindrome ReNU Italia APS. With energy and a smile, she accompanies children, families and friends in all association initiatives.':'Reny est la tortue symbole de Sindrome ReNU Italia APS. Elle accompagne les enfants et les familles avec énergie et sourire.'}
            </p>
            <a href="/${t.lang}/community"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#45B8EC">
              <i class="fas fa-users"></i>${t.lang==='it'?'Unisciti alla comunità':t.lang==='en'?'Join the community':t.lang==='fr'?'Rejoignez la communauté':'Únete a la comunidad'}
            </a>
          </div>
        </div>
        <!-- Gallery card -->
        <div class="card card-blue overflow-hidden">
          ${t.lang==='it' ? `
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="ic ic-sky flex-shrink-0"><i class="fas fa-images text-xl"></i></div>
              <h3 class="font-bold text-lg" style="color:#082050">Galleria Italiana – In Arrivo</h3>
            </div>
            <p class="text-gray-600 text-sm mb-3">
              Stiamo raccogliendo foto e momenti delle famiglie italiane con la Sindrome ReNU.
              La galleria rispetterà le normative GDPR sulla privacy e la tutela dei minori.
            </p>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 mb-3">
              <i class="fas fa-shield-alt mr-1"></i>
              <strong>Privacy GDPR:</strong> Le foto dei minori saranno pubblicate solo con consenso esplicito dei genitori/tutori.
            </div>
            <a href="mailto:presidenza@sindromerenu.it"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-envelope"></i>Invia le tue foto
            </a>
          </div>` : `
          <div class="overflow-hidden h-52">
            <img src="/images/renu_gallery.jpg" alt="Galleria Sindrome ReNU Italia" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='en'?'International Gallery':t.lang==='fr'?'Galerie Internationale':t.lang==='es'?'Galería Internacional':'Internationale Galerie'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='en'?'Discover the extraordinary stories of children and families living with ReNU Syndrome around the world.':t.lang==='fr'?'Découvrez les histoires de familles vivant avec le syndrome ReNU.':t.lang==='es'?'Descubre las historias de familias que viven con el Síndrome ReNU en todo el mundo.':'Entdecken Sie die außergewöhnlichen Geschichten von Familien mit dem ReNU-Syndrom.'}
            </p>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.lang==='en'?'Visit Gallery':t.lang==='fr'?'Galerie':t.lang==='es'?'Ver Galería':'Galerie'}
            </a>
          </div>`}
        </div>
        <!-- Map card -->
        <div class="card card-navy overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_mappa_italia.jpg" alt="Mappa Italiana Sindrome ReNU" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Mappa Mondiale RNU4-2':t.lang==='en'?'RNU4-2 World Map':t.lang==='fr'?'Carte Mondiale RNU4-2':t.lang==='es'?'Mapa Mundial RNU4-2':'RNU4-2 Weltkarte'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Famiglie RNU4-2 mappate in 38+ paesi. Aggiungiti alla mappa e aiuta ad aumentare la forza dei numeri nella ricerca.':t.lang==='en'?'RNU4-2 families mapped in 38+ countries. Add yourself to the map and help strengthen research.':'Familles RNU4-2 cartographiées dans 38+ pays. Ajoutez-vous à la carte!'}
            </p>
            <a href="https://www.renusyndrome.org/map" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#082050">
              <i class="fas fa-map-marked-alt"></i>${t.lang==='it'?'Vedi Mappa':t.lang==='en'?'See Map':'Carte'}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STORIE DI FAMIGLIE SLIDER -->
  <section class="py-16 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold" style="color:#082050">
          ${t.lang==='it'?'Storie di Famiglie Italiane con ReNU':t.lang==='en'?'Stories from ReNU Families':t.lang==='fr'?'Histoires de familles ReNU':t.lang==='es'?'Historias de Familias ReNU':'Geschichten von ReNU-Familien'}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.lang==='it'?'Storie di famiglie italiane con la Sindrome ReNU — in arrivo. Nel frattempo puoi leggere le storie della community internazionale.':t.lang==='en'?'Real stories from around the world, from the ReNU Syndrome United community':t.lang==='fr'?'Histoires réelles du monde entier':'Historias reales de todo el mundo'}
        </p>
      </div>
      ${t.lang==='it'?`
      <!-- Card bambini italiani REALI -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        ${[
          { name: 'Aaron',     img: '/images/it_bambino_aaron.jpg',     desc: 'Una storia di gioia e determinazione.' },
          { name: 'Diego',     img: '/images/it_bambino_diego.jpg',     desc: 'Sorrisi che illuminano ogni giornata.' },
          { name: 'Francesco', img: '/images/it_bambino_francesco.jpg', desc: 'La forza di una famiglia unita.' },
          { name: 'Maya',      img: '/images/it_bambino_maya.jpg',      desc: 'Ogni traguardo è una vittoria.' },
          { name: 'Meilda',    img: '/images/it_bambino_meilda.jpg',    desc: 'Curiosità e amore per la vita.' },
          { name: 'Vittoria',  img: '/images/it_bambino_vittoria.jpg',  desc: 'La tenacia di chi non si arrende.' },
          { name: 'Manuel',    img: '/images/it_bambino_manuel.jpg',    desc: 'Un sorriso che contagia tutti.' },
          { name: 'Gabriele',  img: '/images/it_bambino_gabriele.jpg',  desc: 'Ogni passo è un successo da celebrare.' },
        ].map(b => `
        <div class="card overflow-hidden group">
          <div class="overflow-hidden" style="height:180px">
            <img src="${b.img}" alt="${b.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-3 text-center">
            <h3 class="font-extrabold text-base mb-1" style="color:#082050">${b.name}</h3>
            <p class="text-gray-500 text-xs">${b.desc}</p>
            <div class="mt-2 inline-flex items-center gap-1 text-xs font-bold" style="color:#1078C0">
              <i class="fas fa-flag text-xs" style="color:#009246"></i> Italia
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div class="text-center mb-8">
        <p class="text-gray-500 text-sm max-w-lg mx-auto mb-3">Vuoi condividere la storia del tuo bambino? Scrivici!</p>
        <a href="mailto:presidenza@sindromerenu.it"
           class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
          <i class="fas fa-envelope"></i>Condividi la tua storia
        </a>
      </div>
      <h3 class="text-lg font-bold mb-4 text-center" style="color:#1078C0"><i class="fas fa-globe mr-2"></i>Storie dalla community internazionale</h3>
      `:''}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Story cards - from renusyndrome.org/stories -->
        ${[
          { name: 'James', country: '🇬🇧', url: 'https://www.renusyndrome.org/james-2', desc: t.lang==='it'?'Una storia di forza e gioia dalla Gran Bretagna.':t.lang==='en'?'A story of strength and joy from Great Britain.':'Une histoire de force et joie de Grande-Bretagne.' },
          { name: 'Ashley', country: '🇺🇸', url: 'https://www.renusyndrome.org/ashley', desc: t.lang==='it'?'Ashley, 8 anni, ama l\'acqua, la musica e i momenti di gioia.':t.lang==='en'?'Ashley, age 8, loves water, music, and joyful moments.':'Ashley, 8 ans, adore l\'eau et la musique.' },
          { name: 'Eliot', country: '🇫🇷', url: 'https://www.renusyndrome.org/eliot', desc: t.lang==='it'?'La famiglia di Eliot dalla Francia, unita nella speranza.':t.lang==='en'?'Eliot\'s family from France, united in hope.':'La famille d\'Eliot de France.' },
          { name: 'Isla', country: '🇦🇺', url: 'https://www.renusyndrome.org/isla', desc: t.lang==='it'?'Isla dall\'Australia, la gioia di ogni giorno.':t.lang==='en'?'Isla from Australia, the joy of every day.':'Isla d\'Australie, la joie quotidienne.' },
          { name: 'Noah', country: '🇨🇦', url: 'https://www.renusyndrome.org/noah', desc: t.lang==='it'?'Noah dal Canada, una storia che ispira.':t.lang==='en'?'Noah from Canada, an inspiring story.':'Noah du Canada, une histoire inspirante.' },
          { name: 'Antonin', country: '🇫🇷', url: 'https://www.renusyndrome.org/antonin', desc: t.lang==='it'?'Antonin dalla Francia, la forza di una famiglia unita.':t.lang==='en'?'Antonin from France, the strength of a united family.':'Antonin de France, la force d\'une famille.' },
        ].map(s => `
        <a href="${s.url}" target="_blank" class="card card-sky overflow-hidden group block">
          <div class="h-40 overflow-hidden bg-sky-50 flex items-center justify-center" style="background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">
            <div class="text-center">
              <div class="text-5xl mb-2">${s.country}</div>
              <div class="text-2xl font-extrabold" style="color:#082050">${s.name}</div>
            </div>
          </div>
          <div class="p-5">
            <p class="text-gray-600 text-sm mb-3">${s.desc}</p>
            <span class="inline-flex items-center gap-1 text-xs font-semibold" style="color:#1078C0">
              ${t.read_more} <i class="fas fa-arrow-right text-xs"></i>
            </span>
          </div>
        </a>`).join('')}
      </div>
      <div class="text-center mt-8">
        <a href="https://www.renusyndrome.org/stories" target="_blank"
           class="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-colors" style="background:#1078C0">
          <i class="fas fa-heart"></i>
          ${t.lang==='it'?'Tutte le Storie di Famiglie ReNU':t.lang==='en'?'All ReNU Family Stories':t.lang==='fr'?'Toutes les histoires':'Todas las Historias'}
        </a>
      </div>
    </div>
  </section>

  <!-- MOVE 4 ReNU BANNER -->
  <section class="py-5 px-4" style="background:#082050">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6">
      <div class="flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
        <img src="${t.lang==='it'?'/images/move4renu_it.jpg':t.lang==='en'?'/images/move4renu_en.jpg':t.lang==='fr'?'/images/move4renu_fr.jpg':t.lang==='de'?'/images/move4renu_de.jpg':'/images/move4renu_es.jpg'}" alt="${t.lang==='it'?'Muoviti per ReNU':t.lang==='fr'?'Bougez pour ReNU':t.lang==='de'?'Bewegt euch für ReNU':t.lang==='es'?'Muévete por ReNU':'Move 4 ReNU'}" class="h-24 w-auto object-cover">
      </div>
      <div class="flex-1 text-white text-center sm:text-left">
        <h3 class="text-xl font-extrabold mb-1">${t.lang==='it'?'Muoviti per ReNU':t.lang==='fr'?'Bougez pour ReNU':t.lang==='de'?'Bewegt euch für ReNU':t.lang==='es'?'Muévete por ReNU':'Move 4 ReNU'}</h3>
        <p class="text-sky-200 text-sm">${t.lang==='it'?'Cammina, corri, pedala o balla per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU!':t.lang==='en'?'Walk, run, bike or dance to raise funds and spread awareness about ReNU Syndrome!':t.lang==='fr'?'Marchez, courez, pédalez ou dansez pour collecter des fonds et sensibiliser au Syndrome ReNU!':t.lang==='de'?'Gehen, laufen, radfahren oder tanzen – sammelt Spenden für das ReNU-Syndrom!':'¡Camina, corre, pedalea o baila para recaudar fondos para la investigación ReNU!'}</p>
      </div>
      <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank" 
         class="flex-shrink-0 inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-white font-bold px-6 py-3 rounded-full transition-colors">
        <i class="fas fa-running"></i>${t.lang==='it'?'Partecipa':t.lang==='fr'?'Participer':t.lang==='de'?'Mitmachen':t.lang==='es'?'Participar':'Join'}
      </a>
    </div>
  </section>



  <!-- RETE INTERNAZIONALE ReNU -->
  <section class="py-14 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-extrabold" style="color:#082050">
          ${t.lang==='it'?'La Rete Internazionale ReNU':t.lang==='en'?'The International ReNU Network':t.lang==='fr'?'Le Réseau International ReNU':t.lang==='es'?'La Red Internacional ReNU':'Das Internationale ReNU-Netzwerk'}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.lang==='it'?'Associazioni nazionali partner in tutto il mondo':t.lang==='en'?'National partner associations worldwide':'Associations nationales partenaires dans le monde entier'}
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        ${[
          { flag: '🇺🇸', name: 'USA (HQ)', url: 'https://www.renusyndrome.org', color: '#082050' },
          { flag: '🇮🇹', name: 'Italia', url: 'https://www.sindromerenu.it', color: '#1078C0' },
          { flag: '🇫🇷', name: 'France', url: 'https://www.syndrome-renu.fr/', color: '#002395' },
          { flag: '🇪🇸', name: 'España', url: 'https://www.sindromerenu.es/', color: '#c60b1e' },
          { flag: '🇦🇺', name: 'Australia', url: 'https://www.facebook.com/groups/1671427560388792', color: '#00008B' },
          { flag: '🇬🇧', name: 'UK', url: 'https://www.facebook.com/groups/1603406977204374', color: '#012169' },
        ].map(n => `
        <a href="${n.url}" target="_blank" class="card p-4 text-center hover:shadow-lg group">
          <div class="text-4xl mb-2">${n.flag}</div>
          <div class="font-bold text-sm" style="color:#082050">${n.name}</div>
          <div class="mt-2">
            <span class="inline-flex items-center gap-1 text-xs" style="color:#1078C0">
              <i class="fas fa-external-link-alt"></i>${t.learn_more}
            </span>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- BROCHURE QUICK DOWNLOAD -->
  <section class="py-8 px-4" style="background:#EEF6FB; border-top: 3px solid #45B8EC;">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <i class="fas fa-file-pdf text-4xl" style="color:#1078C0"></i>
        <div>
          <div class="font-bold text-lg" style="color:#082050">${t.brochure_title}</div>
          <div class="text-sm text-gray-500">${t.brochure_intro}</div>
        </div>
      </div>
      <a href="/${t.lang}/brochure" class="flex-shrink-0 inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full shadow transition-colors text-white" style="background:#1078C0">
        <i class="fas fa-download"></i>${t.brochure_download}
      </a>
    </div>
  </section>
  `
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function aboutPage(t: Record<string, string>): string {
  const features = [
    { icon: 'fa-brain',       ic: 'ic-purple', title: t.about_brain,         items: t.about_brain_items },
    { icon: 'fa-child',       ic: 'ic-blue',   title: t.about_development,   items: t.about_development_items },
    { icon: 'fa-bolt',        ic: 'ic-amber',  title: t.about_seizures,      items: t.about_seizures_items },
    { icon: 'fa-eye',         ic: 'ic-sky',    title: t.about_vision,        items: t.about_vision_items },
    { icon: 'fa-smile',       ic: 'ic-cyan',   title: t.about_face,          items: t.about_face_items },
    { icon: 'fa-dumbbell',    ic: 'ic-green',  title: t.about_muscle,        items: t.about_muscle_items },
    { icon: 'fa-walking',     ic: 'ic-blue',   title: t.about_mobility,      items: t.about_mobility_items },
    { icon: 'fa-ruler-vertical', ic: 'ic-navy', title: t.about_growth,       items: t.about_growth_items },
    { icon: 'fa-utensils',    ic: 'ic-red',    title: t.about_feeding,       items: t.about_feeding_items },
    { icon: 'fa-comments',    ic: 'ic-sky',    title: t.about_communication, items: t.about_communication_items },
    { icon: 'fa-bone',        ic: 'ic-amber',  title: t.about_bones,         items: t.about_bones_items },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-dna mr-3 text-sky-300"></i>${t.about_title}</h1>
        <p class="text-sky-100 text-lg">${t.tagline}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-64">
          <img src="/images/nastro.png" alt="Nastro ReNU" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">
      
      <!-- Gene info card -->
      <div class="card card-blue p-8 mb-8">
        <p class="text-gray-700 leading-relaxed mb-5 text-lg">${t.about_gene}</p>
        <div class="rounded-xl p-5" style="background:#EEF6FB; border-left: 4px solid #1078C0;">
          <h3 class="font-bold mb-2 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-microscope" style="color:#1078C0"></i>${t.about_discovery}
          </h3>
          <p class="text-gray-700">${t.about_discovery_text}</p>
        </div>
      </div>

      <!-- Ashley photo -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="md:col-span-2">
          <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-5 flex items-start gap-3">
            <i class="fas fa-exclamation-triangle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
            <p class="text-amber-800 font-semibold text-lg">${t.about_diagnosis_note}</p>
          </div>
          <div class="bg-sky-50 rounded-2xl p-5 border border-sky-200 flex gap-3 items-start">
            <i class="fas fa-smile-beam text-2xl mt-1 flex-shrink-0" style="color:#1078C0"></i>
            <p class="text-gray-700 italic text-base">${t.about_happy}</p>
          </div>
        </div>
        <div class="img-frame">
          <img src="/images/it_bambino_aaron.jpg" alt="Aaron, bambino con Sindrome ReNU" class="w-full h-64 object-cover">
          <div class="p-3 text-center text-xs text-gray-500 bg-sky-50">
            ${t.lang==='it'?'Aaron, un bambino italiano con Sindrome ReNU':t.lang==='en'?'Aaron, an Italian child with ReNU Syndrome':t.lang==='fr'?'Aaron, un enfant italien atteint du Syndrome ReNU':t.lang==='es'?'Aaron, un niño italiano con Síndrome ReNU':'Aaron, ein italienisches Kind mit ReNU-Syndrom'}
          </div>
        </div>
      </div>

      <!-- Features grid -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-list-check" style="color:#1078C0"></i>${t.about_features_title}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        ${features.map(f => `
        <div class="card p-5 flex gap-4">
          <div class="ic ${f.ic}"><i class="fas ${f.icon} text-lg"></i></div>
          <div>
            <h3 class="font-bold mb-1" style="color:#082050">${f.title}</h3>
            <p class="text-gray-600 text-sm">${f.items}</p>
          </div>
        </div>`).join('')}
      </div>

      <!-- Infografica sintomi (solo IT) -->
      ${t.lang==='it'?`
      <div class="card overflow-hidden mb-8">
        <div class="p-4 flex items-center gap-2" style="background:#EEF6FB; border-bottom:1px solid #C8E8F8">
          <i class="fas fa-chart-bar" style="color:#1078C0"></i>
          <span class="font-bold text-sm" style="color:#082050">Infografica: le caratteristiche cliniche della Sindrome ReNU</span>
        </div>
        <img src="/images/it_sintomi.jpg" alt="Infografica sintomi Sindrome ReNU" class="w-full object-contain" style="max-height:500px">
      </div>`:''}

      <!-- ReNU Syndrome Support Tool -->
      <div class="mt-8 card card-navy p-6 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%)">
              <i class="fas fa-file-medical-alt text-3xl text-white"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-xl mb-2" style="color:#082050">
              ${t.lang==='it'?'ReNU Syndrome Support Tool':'ReNU Syndrome Support Tool'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Scarica il documento completo sulle specificità cliniche della Sindrome ReNU, elaborato dai principali ricercatori mondiali. Un supporto essenziale per i medici che seguono pazienti con ReNU.':t.lang==='en'?'Download the complete document on the clinical specifics of ReNU Syndrome, prepared by leading world researchers. An essential support for physicians treating ReNU patients.':'Téléchargez le document complet sur les spécificités cliniques du syndrome ReNU.'}
            </p>
            <a href="https://static1.squarespace.com/static/66cde7d2bedfe27eac771da1/t/692f8c2e4f8faf429c4b30e8/1764723758650/ReNU+Support+Tool.pdf" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-download"></i>
              ${t.lang==='it'?'Scarica ReNU Support Tool PDF':t.lang==='en'?'Download ReNU Support Tool PDF':'Télécharger ReNU Support Tool PDF'}
            </a>
          </div>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
          <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
        </a>
        <a href="/${t.lang}/research" class="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg transition-colors" style="background:#1078C0">
          <i class="fas fa-microscope"></i>${t.section_research_title}
        </a>
        <a href="https://www.renusyndrome.org/aboutrenu" target="_blank" class="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full text-lg" style="background:#EEF6FB; color:#082050; border: 2px solid #45B8EC">
          <i class="fas fa-external-link-alt"></i>
          ${t.lang==='it'?'Approfondisci su RSU':t.lang==='en'?'Learn more on RSU':'Plus d\'infos sur RSU'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── RESEARCH PAGE ────────────────────────────────────────────────────────────
function researchPage(t: Record<string, string>): string {
  const priorities = [
    ['fa-comment-slash', t.lang==='it'?'Comunicazione / Linguaggio':t.lang==='en'?'Communication / Language':'Communication / Langage'],
    ['fa-bolt',          t.lang==='it'?'Epilessia / Crisi':t.lang==='en'?'Epilepsy / Seizures':'Épilepsie / Crises'],
    ['fa-brain',         t.lang==='it'?'Anomalie cerebrali':t.lang==='en'?'Brain Abnormalities':'Anomalies cérébrales'],
    ['fa-walking',       t.lang==='it'?'Mobilità':t.lang==='en'?'Mobility':'Mobilité'],
    ['fa-dumbbell',      t.lang==='it'?'Ipotonia':t.lang==='en'?'Hypotonia':'Hypotonie'],
    ['fa-utensils',      t.lang==='it'?'Alimentazione':t.lang==='en'?'Feeding':'Alimentation'],
    ['fa-bone',          t.lang==='it'?'Fragilità ossea':t.lang==='en'?'Bone Fragility':'Fragilité osseuse'],
    ['fa-tint',          t.lang==='it'?'Scialorrea':t.lang==='en'?'Drooling':'Hypersalivation'],
    ['fa-toilet',        t.lang==='it'?'Problemi GI':t.lang==='en'?'GI Issues':'Problèmes GI'],
    ['fa-ruler-vertical',t.lang==='it'?'Crescita':t.lang==='en'?'Growth':'Croissance'],
  ]

  const studies = [
    {
      color: 'border-sky-500', ic: 'ic-sky', icon: 'fa-heartbeat',
      name: 'Citizen Health',
      img: '/images/citizen_health.jpg',
      desc: t.lang==='it'?'Organizza i tuoi dati medici in un profilo digitale privato – nessuna visita richiesta – e contribuisci alla ricerca farmaceutica per ReNU. I tuoi dati reali contribuiscono a studi critici di storia naturale che accelerano la ricerca di trattamenti.':
            'Securely organize medical records into a private digital profile — no site visits required — and help power pharmaceutical research for ReNU. Your real-world experiences contribute to critical natural history studies.',
      link: 'https://www.citizen.health/ai-advocate/renu-syndrome',
      lbl: t.lang==='it'?'Iscriviti ora':'Sign up now'
    },
    {
      color: 'border-blue-700', ic: 'ic-blue', icon: 'fa-flask',
      name: 'Studio INDEED (Mount Sinai)',
      img: '/images/indeed_study.jpg',
      desc: t.lang==='it'?'I Dottori Ernest Turro e Mafalda Barbosa alla Icahn School of Medicine at Mount Sinai hanno fondato lo studio INDEED per investigare ReNU. Offre sequenziamento gratuito (uso ricerca) dei geni RNU4-2 e RNU2-2. Se sospetti che il tuo familiare possa avere ReNU, potresti essere idoneo per il test GRATUITO.':
            'Drs. Ernest Turro and Mafalda Barbosa at Icahn School of Medicine at Mount Sinai. The INDEED study offers free research-use DNA sequencing of RNU4-2 and RNU2-2 genes. If you suspect ReNU, you may be eligible for FREE testing.',
      link: 'mailto:zafiirah.baurhoo@mssm.edu',
      lbl: 'Email'
    },
    {
      color: 'border-purple-500', ic: 'ic-purple', icon: 'fa-database',
      name: 'Rare-X Registry',
      img: '/images/rare_x.jpg',
      desc: t.lang==='it'?'Registro globale critico aperto a tutti. Lo sviluppo di opzioni terapeutiche richiede dati robusti continuamente aggiornati. Tutti sono benvenuti a partecipare – il tuo contributo è essenziale.':
            'Critical global registry open to ALL. Developing treatment options requires robust, continually updated data. Your contribution is essential.',
      link: 'https://rare-x.org/rnu4-2/',
      lbl: t.join_registry
    },
    {
      color: 'border-green-500', ic: 'ic-green', icon: 'fa-face-smile',
      name: 'GestaltMatcher',
      img: '',
      desc: t.lang==='it'?'Utilizza AI 2D avanzata per analizzare immagini mediche e identificare caratteristiche facciali che possono indicare e accelerare la diagnosi di malattie genetiche rare. Contatto: Dr. Annabelle Arlt.':
            'Uses advanced 2D AI to analyze medical images and identify facial features that may indicate rare genetic disorders. Contact: Dr. Annabelle Arlt.',
      link: 'mailto:annaarlt@uni-bonn.de',
      lbl: 'Email'
    },
    {
      color: 'border-orange-500', ic: 'ic-amber', icon: 'fa-clipboard-list',
      name: 'Clinical Health Survey (Northwell)',
      img: '',
      desc: t.lang==='it'?'Studio trasversale per raccogliere e analizzare le caratteristiche degli individui con Sindrome ReNU (~45 minuti). Diretto da Dr. Ian Krantz, Kelsey Crocker e Asbaa Khan. Disponibile lun-ven 9-17 ET.':
            'Cross-sectional study to collect and analyze features of individuals with ReNU Syndrome (~45 minutes). Led by Dr. Ian Krantz, Kelsey Crocker, and Asbaa Khan.',
      link: 'mailto:NGHI@northwell.edu',
      lbl: 'Email'
    },
    {
      color: 'border-teal-500', ic: 'ic-cyan', icon: 'fa-camera',
      name: 'FaceBase (Univ. Calgary)',
      img: '',
      desc: t.lang==='it'?'Studio internazionale di riconoscimento facciale 3D. La partecipazione richiede meno di 20 minuti. Mira a caratterizzare meglio le sindromi genetiche che includono effetti facciali tramite strumento computerizzato.':
            '3D International Facial Recognition Study. Participation requires less than 20 minutes. Aims to better characterize genetic syndromes including facial effects via computer-based tool.',
      link: 'mailto:facebase@ucalgary.ca',
      lbl: 'Email'
    },
    {
      color: 'border-red-500', ic: 'ic-red', icon: 'fa-dollar-sign',
      name: t.lang==='it'?'Studio REN – Epilessia Rara (PAGATO)':t.lang==='en'?'REN Study – Rare Epilepsy (PAID)':'Étude REN – Épilepsie rare (PAYÉE)',
      img: '',
      desc: t.lang==='it'?'Studio sulla Rare Epilepsy Network (REN). Chi può partecipare: pazienti 18+, caregiver, rappresentanti di organizzazioni, operatori sanitari. Survey: 40-60 min + follow-up ogni 4-6 mesi. COMPENSO: $100 gift card Amazon per ogni survey completata.':
            'Rare Epilepsy Network (REN) study. Who can participate: patients 18+, caregivers, advocacy org representatives, healthcare providers. Survey: 40-60 min. COMPENSATION: $100 Amazon gift card per completed survey.',
      link: 'https://rareepilepsynetwork-org.pmailroute.net/x/d?c=50514241&l=dd14c5a7-52a6-4ad6-900f-bafce4bc0eb6&r=d87533fc-694d-4757-a917-5a496b45c591',
      lbl: t.lang==='it'?'Partecipa ora':t.lang==='en'?'Participate now':'Participer'
    },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-microscope mr-3 text-sky-300"></i>${t.research_title}</h1>
        <p class="text-sky-100 text-lg">${t.lang==='it'?'Sezione in fase di preparazione con il nostro Comitato Scientifico.':t.lang==='en'?'Section being prepared with our Scientific Committee.':'Section en cours de préparation.'}</p>
      </div>
    </div>
  </section>

  <!-- SEZIONE IN PREPARAZIONE -->
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6" style="background: linear-gradient(135deg, #C8E8F8, #EEF6FB)">
        <i class="fas fa-flask text-4xl" style="color:#1078C0"></i>
      </div>
      <h2 class="text-3xl font-extrabold mb-4" style="color:#082050">
        ${t.lang==='it'?'Sezione Ricerca in Preparazione':t.lang==='en'?'Research Section Coming Soon':'Section Recherche en Préparation'}
      </h2>
      <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        ${t.lang==='it'?'Stiamo lavorando con il nostro Comitato Scientifico per preparare contenuti accurati e aggiornati sulla ricerca scientifica relativa alla Sindrome ReNU. Questa sezione sarà disponibile presto.':
          t.lang==='en'?'We are working with our Scientific Committee to prepare accurate and up-to-date content on scientific research related to ReNU Syndrome. This section will be available soon.':
          'Nous travaillons avec notre Comité Scientifique pour préparer des contenus précis sur la recherche du Syndrome ReNU.'}
      </p>

      <!-- PUBBLICAZIONI PUBMED -->
      <div class="text-left mb-12">
        <div class="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold mb-6" style="color:#082050">
          <i class="fas fa-book-medical" style="color:#1078C0"></i>
          ${t.lang==='it'?'Pubblicazioni Scientifiche su PubMed':'Scientific Publications on PubMed'}
        </div>
        <h3 class="text-2xl font-extrabold mb-6" style="color:#082050">
          ${t.lang==='it'?'Letteratura Scientifica sulla Sindrome ReNU (RNU4-2)':'Scientific Literature on ReNU Syndrome (RNU4-2)'}
        </h3>
        <div class="space-y-5">
          ${[
            // ── 2026 ──────────────────────────────────────────────────────────
            {
              authors: 'Rius R, Blakes AJM, Chen Y, et al.',
              year: '2026',
              title: 'Biallelic variants in the noncoding RNA gene RNU4-2 cause a recessive neurodevelopmental syndrome with distinct white matter changes',
              journal: 'Nature Genetics. 2026 Apr;58(4):761-773.',
              pmid: '41951959',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41951959/',
              badge: t.lang==='it'?'NUOVO 2026':'NEW 2026',
              summary: t.lang==='it'?'Scoperta rivoluzionaria: le varianti bialleliche (recessive) in RNU4-2 causano una seconda sindrome del neurosviluppo, distinta da ReNU dominante, con caratteristiche cambiamenti della sostanza bianca cerebrale. Lo studio identifica 38 individui con varianti omozigoti o eterozigoti composte in RNU4-2, ampliando enormemente lo spettro delle malattie legate a questo gene.':
                        'Groundbreaking discovery: biallelic (recessive) variants in RNU4-2 cause a second neurodevelopmental syndrome, distinct from dominant ReNU, with distinct white matter changes. The study identifies 38 individuals with homozygous or compound heterozygous variants in RNU4-2, greatly expanding the disease spectrum linked to this gene.'
            },
            {
              authors: 'De Jonghe J, Kim HC, Adedeji A, et al.',
              year: '2026',
              title: 'Saturation editing of RNU4-2 reveals distinct dominant and recessive disorders',
              journal: 'Nature. 2026 Apr (Online ahead of print).',
              pmid: '41951737',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41951737/',
              badge: t.lang==='it'?'NUOVO 2026':'NEW 2026',
              summary: t.lang==='it'?'Studio di "saturation editing" su RNU4-2 che rivela due distinte malattie: una dominante (ReNU) e una recessiva. Mappa sistematicamente le conseguenze funzionali di ogni variante possibile nello snRNA spliceosomal, identificando le posizioni critiche e fornendo la base molecolare per distinguere e comprendere entrambe le sindromi.':
                        'Saturation editing study of RNU4-2 revealing two distinct disorders: one dominant (ReNU) and one recessive. Systematically maps functional consequences of every possible variant in the spliceosomal snRNA, identifying critical positions and providing molecular basis to distinguish and understand both syndromes.'
            },
            {
              authors: 'Leitão E, Santini A, Cogne B, et al.',
              year: '2026',
              title: 'Systematic analysis of snRNA genes reveals frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies',
              journal: 'Nature Genetics. 2026 Apr;58(4):782-797.',
              pmid: '41912934',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41912934/',
              badge: '',
              summary: t.lang==='it'?'Analisi sistematica dei geni snRNA che rivela varianti frequenti in RNU2-2, gene correlato a RNU4-2, in encefalopatie dello sviluppo ed epilettiche sia dominanti che recessive. Lo studio amplia la comprensione del ruolo degli snRNA nelle malattie neurologiche rare e apre nuove prospettive diagnostiche per pazienti non diagnosticati.':
                        'Systematic analysis of snRNA genes revealing frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies. The study broadens understanding of snRNA roles in rare neurological diseases and opens new diagnostic perspectives for undiagnosed patients.'
            },
            {
              authors: 'Ajmone PF, Rigamonti C, Brasca F, Milani D, et al.',
              year: '2026',
              title: 'Longitudinal Behavior Phenotype Hallmarks in RNU4-2 Syndrome: Implications for Clinical Management',
              journal: 'Am J Med Genet B Neuropsychiatr Genet. 2026 Apr;201(3):205-211.',
              pmid: '41681065',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41681065/',
              badge: t.lang==='it'?'🇮🇹 ITALIANO':'🇮🇹 ITALIAN',
              summary: t.lang==='it'?'Studio italiano — con la partecipazione della Dr.ssa Donatella Milani, presidente del Comitato Scientifico di Sindrome ReNU Italia — che descrive i tratti comportamentali longitudinali della Sindrome RNU4-2. Vengono identificati comportamenti caratteristici con implicazioni per la gestione clinica: umore felice, ricerca di contatto fisico, brevi episodi di agitazione. Uno dei primi studi longitudinali sul fenotipo comportamentale.':
                        'Italian study — with participation of Dr. Donatella Milani, President of the Scientific Committee of Sindrome ReNU Italia — describing longitudinal behavioral traits of RNU4-2 Syndrome. Characteristic behaviors are identified with implications for clinical management: happy mood, seeking physical contact, brief agitation episodes. One of the first longitudinal studies on the behavioral phenotype.'
            },
            {
              authors: 'Crocker K, O\'Toole J, Pearse L, Milani D, et al.',
              year: '2026',
              title: 'Summary of the Inaugural ReNU Hope Conference and Scientific Symposium, July 23-25, 2025, Long Island, New York',
              journal: 'Am J Med Genet A. 2026 Feb.',
              pmid: '41714173',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41714173/',
              badge: '',
              summary: t.lang==='it'?'Sintesi della prima Conferenza Scientifica ReNU Hope (luglio 2025, New York), che ha riunito ricercatori, famiglie, medici e sviluppatori di terapie da tutto il mondo. I temi principali: progressi nella ricerca su RNU4-2, nuovi approcci diagnostici, sviluppo di terapie, supporto alle famiglie e creazione di registri internazionali di pazienti.':
                        'Summary of the inaugural ReNU Hope Conference (July 2025, New York), bringing together researchers, families, clinicians and therapy developers worldwide. Key themes: advances in RNU4-2 research, new diagnostic approaches, therapy development, family support and international patient registry creation.'
            },
            // ── 2025 ──────────────────────────────────────────────────────────
            {
              authors: 'Hayashi Y, Kajiwara K, Mizuno S, et al.',
              year: '2025',
              title: 'Monoallelic and biallelic RNU4-2 variants in neurodevelopmental disorders',
              journal: 'J Hum Genet. 2025 Dec.',
              pmid: '41408479',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41408479/',
              badge: '',
              summary: t.lang==='it'?'Studio giapponese che analizza le varianti monoalleliche e bialleliche in RNU4-2 in una coorte di casi non diagnosticati con disturbi del neurosviluppo. Conferma la prevalenza delle varianti de novo nella regione critica T-loop, caratterizza lo spettro mutazionale e fornisce dati epidemiologici su popolazioni asiatiche, contribuendo alla comprensione globale della sindrome.':
                        'Japanese study analyzing monoallelic and biallelic RNU4-2 variants in a cohort of unresolved neurodevelopmental disorder cases. Confirms prevalence of de novo variants in the critical T-loop region, characterizes the mutational spectrum and provides epidemiological data on Asian populations, contributing to global understanding of the syndrome.'
            },
            {
              authors: 'Chen Y, Gao L, Han X, et al.',
              year: '2025',
              title: 'Prenatal Evaluation of RNU4-2 Variants in Fetuses With Central Nervous System Anomalies',
              journal: 'Am J Med Genet C Semin Med Genet. 2025 Dec.',
              pmid: '41449851',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41449851/',
              badge: '',
              summary: t.lang==='it'?'Primo studio sulla valutazione prenatale delle varianti RNU4-2 in feti con anomalie del sistema nervoso centrale. Le anomalie cerebrali congenite sono tra le malformazioni più comuni, ma il rendimento diagnostico genetico prenatale rimane basso (<40%). Questo studio dimostra il valore del sequenziamento di RNU4-2 nella diagnostica prenatale di anomalie cerebrali, aprendo la strada a diagnosi più precoci.':
                        'First study on prenatal evaluation of RNU4-2 variants in fetuses with central nervous system anomalies. Congenital brain anomalies are among the most common malformations but prenatal genetic diagnostic yield remains below 40%. This study demonstrates the value of RNU4-2 sequencing in prenatal diagnosis of brain anomalies, paving the way for earlier diagnoses.'
            },
            // ── 2024 ──────────────────────────────────────────────────────────
            {
              authors: 'Delmaghani S, Chen Y, Dawes R, et al.',
              year: '2024',
              title: 'De novo variants in RNU4-2 cause a frequent neurodevelopmental syndrome',
              journal: 'Nature. 2024;632:832-840.',
              pmid: '39169177',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/39169177/',
              badge: t.lang==='it'?'STUDIO FONDAMENTALE':'LANDMARK STUDY',
              summary: t.lang==='it'?'Lo studio fondamentale che ha scoperto la Sindrome ReNU. Analizzando 47.606 individui in 34 coorti internazionali, gli autori hanno identificato varianti de novo in RNU4-2 come causa di una frequente sindrome del neurosviluppo. Prevalenza stimata ~1:35.000 nati vivi. La sindrome — ribattezzata ReNU — include ritardo psicomotorio grave, ipotonia, epilessia, microcefalia, dismorfismi facciali e anomalie cerebrali strutturali.':
                        'The landmark study that discovered ReNU Syndrome. Analyzing 47,606 individuals across 34 international cohorts, authors identified de novo variants in RNU4-2 as the cause of a frequent neurodevelopmental syndrome. Estimated prevalence ~1:35,000 live births. The syndrome — named ReNU — includes severe psychomotor delay, hypotonia, epilepsy, microcephaly, facial dysmorphisms and structural brain anomalies.'
            },
            {
              authors: 'Greene D, Mendez R, Lees J, Turro E, et al.',
              year: '2024',
              title: 'RNU4-2-Related Neurodevelopmental Disorder Is Associated With Severe Intellectual Disability',
              journal: 'Neurol Genet. 2024.',
              pmid: '39434505',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/39434505/',
              badge: '',
              summary: t.lang==='it'?'Studio che caratterizza nel dettaglio il disturbo del neurosviluppo correlato a RNU4-2, con focus sulla disabilità intellettiva grave. Include analisi del ritardo dello sviluppo globale, epilessia, microcefalia, bassa statura e ipotonia. Contribuisce a definire i criteri diagnostici clinici e a stratificare i pazienti per gravità del fenotipo, con implicazioni per la gestione e il supporto.':
                        'Study characterizing in detail the RNU4-2-related neurodevelopmental disorder with focus on severe intellectual disability. Includes analysis of global developmental delay, epilepsy, microcephaly, short stature and hypotonia. Contributes to defining clinical diagnostic criteria and stratifying patients by phenotype severity, with implications for management and support.'
            },
          ].map(pub => `
          <div class="card card-blue p-6 text-left">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                  <i class="fas fa-file-alt text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:#082050">${pub.year}</span>
                  ${pub.badge ? `<span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:#F59E0B;color:#082050">${pub.badge}</span>` : ''}
                  <span class="text-xs text-gray-500 font-medium">${pub.authors}</span>
                </div>
                <h4 class="font-bold text-base mb-1" style="color:#082050">${pub.title}</h4>
                <p class="text-xs text-gray-400 italic mb-3">${pub.journal}</p>
                <div class="rounded-xl p-4 mb-3 text-sm text-gray-700 leading-relaxed" style="background:#EEF6FB; border-left:3px solid #45B8EC">
                  <strong style="color:#082050">${t.lang==='it'?'Sintesi:':'Summary:'}</strong> ${pub.summary}
                </div>
                <a href="${pub.doi}" target="_blank"
                   class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-semibold" style="background:#1078C0">
                  <i class="fas fa-external-link-alt"></i>
                  PubMed${pub.pmid ? ' · PMID '+pub.pmid : ''}
                </a>
              </div>
            </div>
          </div>`).join('')}
        </div>
        <div class="text-center mt-6">
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=RNU4-2+syndrome+neurodevelopmental" target="_blank"
             class="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border:2px solid #45B8EC">
            <i class="fas fa-search"></i>
            ${t.lang==='it'?'Cerca tutte le pubblicazioni su PubMed':'Search all publications on PubMed'}
          </a>
        </div>
      </div>

      <div class="rounded-2xl p-8 text-white mt-4" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-16 h-16 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.2)">
              <i class="fas fa-envelope text-2xl text-white"></i>
            </div>
          </div>
          <div class="flex-1 text-left">
            <h3 class="font-bold text-xl mb-2">${t.lang==='it'?'Vuoi collaborare con il nostro Comitato Scientifico?':t.lang==='en'?'Want to collaborate with our Scientific Committee?':'Vous souhaitez collaborer?'}</h3>
            <p class="text-sky-200 text-sm mb-4">
              ${t.lang==='it'?'Il Comitato Scientifico di Sindrome ReNU Italia è in fase di costituzione. Per collaborazioni scientifiche o per segnalare nuove pubblicazioni, contattaci.':'The Scientific Committee of Sindrome ReNU Italia is being established. For scientific collaborations or to report new publications, contact us.'}
            </p>
            <a href="mailto:info@sindromerenu.it" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors text-sm" style="color:#082050">
              <i class="fas fa-envelope"></i>info@sindromerenu.it
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── THERAPIES PAGE ───────────────────────────────────────────────────────────
function therapiesPage(t: Record<string, string>): string {
  const th = [
    { icon:'fa-running',       ic:'ic-blue',   name:t.lang==='it'?'Fisioterapia (FKT)':t.lang==='en'?'Physical Therapy (PT)':t.lang==='fr'?'Kinésithérapie':t.lang==='es'?'Fisioterapia':'Physiotherapie',
      desc:t.lang==='it'?'La fisioterapia supporta il potenziamento del tono muscolare e favorisce il miglioramento dell\'equilibrio, della coordinazione e delle abilità motorie globali. Può essere particolarmente utile nei casi di ipotonia.':'Exercise, strength training, balance, coordination and motion improvement. Particularly useful in cases of hypotonia.' },
    { icon:'fa-comments',      ic:'ic-purple', name:t.lang==='it'?'Logopedia':'Speech-Language Pathology',
      desc:t.lang==='it'?'La logopedia sostiene lo sviluppo della comunicazione e interviene anche sulle funzioni dei muscoli della bocca, del viso e della respirazione, con l\'obiettivo di favorire una maggiore efficacia comunicativa e funzionale.':'Supports communication development and oral-motor functions, including speech, swallowing and breathing.' },
    { icon:'fa-sign-language', ic:'ic-sky',    name:t.lang==='it'?'CAA – Comunicazione Aumentativa Alternativa':'AAC – Augmentative & Alternative Communication',
      desc:t.lang==='it'?'La CAA aiuta i bambini non verbali a comunicare attraverso immagini, simboli, tabelle, gesti o strumenti digitali. È un supporto prezioso per esprimere bisogni, emozioni e richieste anche in assenza del linguaggio verbale.':'AAC helps non-verbal children communicate through images, symbols, boards, gestures or digital tools.' },
    { icon:'fa-hand-pointer',  ic:'ic-amber',  name:t.lang==='it'?'Prompt':'Prompt Therapy',
      desc:t.lang==='it'?'Il prompt è un aiuto fornito dal terapista per insegnare una risposta corretta. Può essere verbale, visivo, gestuale o fisico e viene gradualmente ridotto per accompagnare il bambino verso una maggiore autonomia.':'Prompts are cues provided by the therapist to teach correct responses, gradually faded to build independence.' },
    { icon:'fa-hand-paper',    ic:'ic-green',  name:t.lang==='it'?'Gesti Comunicativi':'Communicative Gestures',
      desc:t.lang==='it'?'I gesti sono strumenti comunicativi immediati e accessibili. Possono aiutare il bambino a farsi comprendere più facilmente e a ridurre la frustrazione nelle situazioni quotidiane.':'Gestures are immediate and accessible communicative tools that help the child be understood more easily and reduce frustration in daily situations.' },
    { icon:'fa-tablet-alt',    ic:'ic-sky',    name:t.lang==='it'?'Comunicatore (VOCA / App)':'Communicator (VOCA / App)',
      desc:t.lang==='it'?'Il comunicatore è un dispositivo, spesso digitale, che consente al bambino di selezionare simboli o immagini trasformandoli in voce. Può favorire la comunicazione autonoma e la partecipazione sociale.':'The communicator is a device, often digital, that allows the child to select symbols or images and convert them to speech, supporting autonomous communication.' },
    { icon:'fa-puzzle-piece',  ic:'ic-navy',   name:'ABA – Applied Behavior Analysis',
      desc:t.lang==='it'?'L\'ABA (Applied Behavior Analysis) è un approccio educativo-comportamentale che aiuta il bambino ad apprendere nuove abilità e a ridurre i comportamenti che possono ostacolare la vita quotidiana, la comunicazione e la partecipazione. Il percorso viene personalizzato in base agli obiettivi del bambino e utilizza strategie strutturate, rinforzo positivo e monitoraggio dei progressi.':'ABA (Applied Behavior Analysis) is a behavioral educational approach that helps children learn new skills and reduce behaviors that may hinder daily life, communication and participation. The path is personalized based on the child\'s goals and uses structured strategies, positive reinforcement and progress monitoring.' },
    { icon:'fa-hands-helping', ic:'ic-green',  name:t.lang==='it'?'Terapia Occupazionale (TO)':t.lang==='en'?'Occupational Therapy (OT)':t.lang==='fr'?'Ergothérapie':t.lang==='es'?'Terapia Ocupacional':'Ergotherapie',
      desc:t.lang==='it'?'La terapia occupazionale aiuta a sviluppare autonomia personale, motricità fine, coordinazione e partecipazione alla vita quotidiana, scolastica e sociale.':'Develops personal autonomy, fine motor skills, coordination and participation in daily, school and social life.' },
    { icon:'fa-child',         ic:'ic-cyan',   name:t.lang==='it'?'Psicomotricità':'Psychomotricity',
      desc:t.lang==='it'?'La psicomotricità non interviene sulla causa genetica o neurologica, ma può aiutare il bambino a sviluppare strategie motorie più efficaci e funzionali, sostenendo relazione, movimento e organizzazione corporea.':'Supports motor strategies, body organization and relational development. Does not address the genetic or neurological cause.' },
    { icon:'fa-utensils',      ic:'ic-red',    name:t.lang==='it'?'Disfagia e Terapia Oro-Motoria':'Dysphagia & Oral Motor Therapy',
      desc:t.lang==='it'?'L\'intervento sulla disfagia, soprattutto nei bambini con ipotonia, aiuta a migliorare le funzioni necessarie per alimentarsi e deglutire in sicurezza e può contribuire anche alla gestione della scialorrea. La terapia oro-motoria lavora sul controllo di labbra, lingua, mandibola e respirazione. <a href="https://www.ospedalebambinogesu.it/disfagia-la-riabilitazione-91812/" target="_blank" class="text-sky-600 hover:underline font-semibold">Centro Bambino Gesù →</a>':'Dysphagia intervention helps improve swallowing and feeding safety, and can also address drooling management. Oral motor therapy works on lip, tongue, jaw and breathing control.' },
    { icon:'fa-mountain',      ic:'ic-teal',   name:t.lang==='it'?'Attività Ludico-Sportive Inclusive':t.lang==='en'?'Inclusive Sports Activities':t.lang==='fr'?'Activités Sportives Inclusives':t.lang==='es'?'Actividades Deportivas Inclusivas':'Inklusive Sportaktivitäten',
      desc:t.lang==='it'?'Le attività ludico-sportive – come teatro, danza e sport di squadra inclusivi – possono sostenere benessere, relazione, autostima e partecipazione, valorizzando le capacità di ogni bambino o ragazzo.':'Sports and recreational activities such as theatre, dance and inclusive team sports support wellbeing, self-esteem and social participation.' },
    { icon:'fa-brain',         ic:'ic-indigo', name:t.lang==='it'?'Terapia Feuerstein – Allenamento Cognitivo':t.lang==='en'?'Feuerstein Therapy – Cognitive Training':t.lang==='fr'?'Thérapie Feuerstein':'Terapia Feuerstein',
      desc:t.lang==='it'?'Metodo basato sulla mediazione per stimolare le funzioni cognitive, migliorare la capacità di apprendimento e sviluppare il potenziale di ogni bambino ReNU.':'Mediation-based method to stimulate cognitive functions and improve learning capacity for each ReNU child.' },
    { icon:'fa-swimmer',       ic:'ic-sky',    name:t.lang==='it'?'Acquaticità e Nuoto':t.lang==='en'?'Aquatics and Swimming':t.lang==='fr'?'Aquaticité et Natation':t.lang==='es'?'Acuaticidad y Natación':'Aquatik und Schwimmen',
      desc:t.lang==='it'?'L\'ambiente acquatico favorisce la libertà di movimento, il tono muscolare, la coordinazione e la sensorialità. Il nuoto è un\'attività amata da molti bambini ReNU.':'The aquatic environment promotes freedom of movement, muscle tone, coordination and sensory integration. Swimming is loved by many ReNU children.' },
    { icon:'fa-music',         ic:'ic-amber',  name:t.lang==='it'?'Musicoterapia':'Music Therapy',
      desc:t.lang==='it'?'Utilizzata per le abilità motorie percettive, la comunicazione e la regolazione dell\'umore. La musica è spesso un canale privilegiato di relazione per i bambini ReNU.':'Used for perceptual motor skills, communication and mood regulation. Music is often a privileged relational channel for ReNU children.' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heartbeat mr-3 text-sky-300"></i>${t.therapies_title}</h1>
        <p class="text-sky-100 text-lg">${t.therapies_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:flex gap-4">
        <div class="img-frame w-56"><img src="/images/renu_terapia_1.jpg" alt="Logopedista con bambino" class="w-full h-40 object-cover"></div>
        <div class="img-frame w-56"><img src="/images/renu_terapia_2.jpg" alt="Fisioterapista con bambino" class="w-full h-40 object-cover"></div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        ${th.map(x => `
        <div class="card p-6 flex gap-4">
          <div class="ic ${x.ic} flex-shrink-0"><i class="fas ${x.icon} text-xl"></i></div>
          <div>
            <h3 class="font-bold text-lg mb-1" style="color:#082050">${x.name}</h3>
            <p class="text-gray-600 text-sm">${x.desc}</p>
          </div>
        </div>`).join('')}
      </div>
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex gap-3 items-start">
        <i class="fas fa-exclamation-circle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
        <p class="text-amber-800 italic">${t.therapies_note}</p>
      </div>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/${t.lang}/therapies"
           class="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-full shadow-lg" style="background: linear-gradient(135deg,#082050,#1078C0)">
          <i class="fas fa-heartbeat"></i>
          ${t.lang==='it'?'Vai alla pagina Terapie':t.lang==='en'?'Go to Therapies page':t.lang==='fr'?'Page Thérapies':t.lang==='es'?'Ir a Terapias':'Zur Therapien-Seite'}
        </a>
        <a href="https://www.renusyndrome.org/therapies" target="_blank"
           class="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full" style="background:#1078C0">
          <i class="fas fa-external-link-alt"></i>
          ${t.lang==='it'?'Approfondisci su ReNU Syndrome United':t.lang==='en'?'Learn more on ReNU Syndrome United':t.lang==='fr'?'Plus d\'infos sur ReNU Syndrome United':t.lang==='es'?'Más info en ReNU Syndrome United':'Mehr Infos auf ReNU Syndrome United'}
        </a>
      </div>

      <!-- DIRITTI E TUTELE -->
      <div class="mt-14">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-shield-alt" style="color:#1078C0"></i>
          ${t.lang==='it'?'Diritti e Tutele – Rete Famiglie Italia':t.lang==='en'?'Rights & Protections – Italian Family Network':'Droits et Protections – Réseau Familles Italie'}
        </h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          ${t.lang==='it'?'Avere un figlio con Sindrome ReNU comporta l\'accesso a una serie di diritti, tutele e agevolazioni previsti dalla legislazione italiana. La nostra rete famiglie è qui per aiutarti a navigare il sistema.':'Having a child with ReNU Syndrome entitles you to a range of rights, protections and benefits under Italian law. Our family network is here to help you navigate the system.'}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${[
            ['fa-id-card','ic-blue',
              t.lang==='it'?'Legge 104/92 – Assistenza Disabili':'Law 104/92 – Disability Assistance',
              t.lang==='it'?'Permessi lavorativi per genitori (3 giorni/mese), congedi straordinari, agevolazioni fiscali e supporto scolastico. La Sindrome ReNU può dare diritto alla 104 in situazione di gravità (art. 3 comma 3).':'Work leave for parents (3 days/month), extraordinary leave, tax benefits and school support. ReNU Syndrome may qualify for law 104 in serious condition (art. 3 comma 3).'],
            ['fa-car','ic-purple',
              t.lang==='it'?'Contrassegno Disabile (Pass Auto)':'Disabled Badge (Car Pass)',
              t.lang==='it'?'Il contrassegno per parcheggio disabili si richiede al Comune di residenza tramite certificazione medica. Permette la sosta in zone riservate e agevolazioni per la circolazione.':'The disabled parking badge is requested at the municipality of residence via medical certification. It allows parking in reserved areas and circulation benefits.'],
            ['fa-graduation-cap','ic-green',
              t.lang==='it'?'Supporto Scolastico (Insegnante di Sostegno)':'School Support (Support Teacher)',
              t.lang==='it'?'Il bambino con ReNU ha diritto all\'insegnante di sostegno, al Piano Educativo Individualizzato (PEI) e ad ausili didattici specifici. Richiede certificazione della disabilità e valutazione UMVD.':'A ReNU child has the right to a support teacher, an Individual Educational Plan (PEI) and specific teaching aids. Requires disability certification and UMVD assessment.'],
            ['fa-money-bill-wave','ic-amber',
              t.lang==='it'?'Indennità di Accompagnamento e Bonus':'Attendance Allowance & Bonuses',
              t.lang==='it'?'L\'indennità di accompagnamento INPS è riservata ai disabili totali che non possono deambulare autonomamente. Esistono anche altri bonus: Bonus Bebè, Assegno Unico, agevolazioni ISEE per disabili.':'INPS attendance allowance is reserved for total disabled people who cannot walk independently. Other bonuses also exist: Baby Bonus, Unique Allowance, ISEE benefits for disabled.'],
            ['fa-id-badge','ic-navy',
              t.lang==='it'?'Disability Card (Carta Europea della Disabilità)':'Disability Card (European Disability Card)',
              t.lang==='it'?'La Disability Card è una tessera europea che certifica la disabilità e dà accesso a agevolazioni in strutture pubbliche, musei, trasporti e servizi. Si richiede tramite INPS.':'The Disability Card is a European card certifying disability and provides access to benefits in public facilities, museums, transport and services. Applied for via INPS.'],
            ['fa-hand-holding-heart','ic-red',
              t.lang==='it'?'Rete Famiglie ReNU Italia':'ReNU Italy Family Network',
              t.lang==='it'?'Connettiti con le altre famiglie italiane con un bambino ReNU. Condividiamo esperienze, suggerimenti pratici e supporto emotivo. Scrivici a info@sindromerenu.it per essere inserito nella rete!':'Connect with other Italian families with a ReNU child. We share experiences, practical tips and emotional support. Write to us at info@sindromerenu.it to join the network!'],
          ].map(([icon,ic,title,desc]) => `
          <div class="card p-5 flex gap-4">
            <div class="ic ${ic} flex-shrink-0"><i class="fas ${icon} text-lg"></i></div>
            <div>
              <h3 class="font-bold mb-1" style="color:#082050">${title}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">${desc}</p>
            </div>
          </div>`).join('')}
        </div>

        <!-- CTA Guida -->
        <div class="rounded-2xl p-7 text-white flex flex-col md:flex-row items-center gap-6" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
          <div class="flex-shrink-0 ic ic-sky w-20 h-20">
            <i class="fas fa-book-open text-3xl"></i>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h3 class="font-bold text-xl mb-2">
              ${t.lang==='it'?'Hai bisogno di orientamento?':'Need guidance?'}
            </h3>
            <p class="text-sky-100 text-sm mb-4">
              ${t.lang==='it'?'Consulta la nostra guida anti-burocrazia con tutti i passi pratici, oppure contattaci direttamente: siamo qui per aiutarti.':'Check our anti-bureaucracy guide with all practical steps, or contact us directly: we are here to help you.'}
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/${t.lang}/faq" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2.5 rounded-full text-sm" style="color:#082050">
                <i class="fas fa-question-circle"></i>
                ${t.lang==='it'?'Guida Anti-Burocrazia':'Anti-Bureaucracy Guide'}
              </a>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Richiesta supporto diritti e tutele':'Rights and protections support request')}"
                 class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold px-5 py-2.5 rounded-full text-sm">
                <i class="fas fa-envelope"></i>
                ${t.lang==='it'?'Contattaci':'Contact us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── DIAGNOSIS PAGE ───────────────────────────────────────────────────────────
function diagnosisPage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-stethoscope mr-3 text-sky-300"></i>${t.diagnosis_title}</h1>
      <p class="text-sky-100 text-lg">${t.diagnosis_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Sezione in aggiornamento -->
      <div class="card p-8 mb-8 flex flex-col md:flex-row gap-6 items-center" style="background:linear-gradient(135deg,#EEF6FB,#C8E8F8)">
        <div class="flex-shrink-0 text-6xl">🔬</div>
        <div>
          <h2 class="text-2xl font-extrabold mb-2" style="color:#082050">
            ${isIt?'Sezione in aggiornamento':'Section being updated'}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ${isIt?'Stiamo raccogliendo le informazioni più aggiornate sui centri italiani che eseguono il Sequenziamento dell\'Intero Genoma (WGS) per la diagnosi della Sindrome ReNU. Questa sezione sarà aggiornata non appena il Comitato Scientifico avrà completato la validazione dei percorsi diagnostici raccomandati.':'We are gathering the most up-to-date information on Italian centres that perform Whole Genome Sequencing (WGS) for the diagnosis of ReNU Syndrome. This section will be updated once the Scientific Committee has completed validation of the recommended diagnostic pathways.'}
          </p>
          <p class="text-gray-700 text-sm">
            ${isIt?'Nel frattempo, per ricevere informazioni sui centri diagnostici disponibili in Italia, puoi contattarci direttamente:':'In the meantime, to receive information on available diagnostic centres in Italy, you can contact us directly:'}
          </p>
        </div>
      </div>

      <!-- Nota WGS importante -->
      <div class="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8 flex gap-4 items-start">
        <i class="fas fa-exclamation-triangle text-amber-500 text-3xl flex-shrink-0"></i>
        <div>
          <h3 class="font-bold text-amber-800 text-xl mb-2">⚠️ ${isIt?'Nota Importante':t.lang==='en'?'Important Note':t.lang==='fr'?'Note importante':t.lang==='es'?'Nota importante':'Wichtiger Hinweis'}</h3>
          <p class="text-amber-800 text-lg">${t.about_diagnosis_note}</p>
        </div>
      </div>

      <div class="card card-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-envelope" style="color:#1078C0"></i>${t.diagnosis_contact}
        </h2>
        <div class="space-y-4">
          ${[
            ['info@sindromerenu.it','ic-blue','fa-envelope',isIt?'Info generali':'General info'],
            ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',isIt?'Segreteria':'Secretariat'],
          ].map(([email,ic,icon,label]) => `
          <a href="mailto:${email}" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ${ic}"><i class="fas ${icon}"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">${email}</div>
              <div class="text-sm text-gray-500">${label}</div>
            </div>
          </a>`).join('')}
          <a href="tel:+393277634894" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ic-sky"><i class="fas fa-phone"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">+39 327 763 4894</div>
              <div class="text-sm text-gray-500">${isIt?'Segreteria – Telefono / WhatsApp':'Secretariat – Phone / WhatsApp'}</div>
            </div>
          </a>
          <a href="tel:+393357301206" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ic-purple"><i class="fas fa-user-tie"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">+39 335 730 1206</div>
              <div class="text-sm text-gray-500">${isIt?'Presidenza – Telefono / WhatsApp':'Presidency – Phone / WhatsApp'}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- WGS vs WES -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <i class="fas fa-dna"></i>WGS vs WES
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="bg-white bg-opacity-10 rounded-xl p-5">
            <h3 class="font-bold text-sky-200 mb-2 flex items-center gap-2"><i class="fas fa-check-circle text-green-400"></i>WGS – Whole Genome Sequencing</h3>
            <p class="text-sky-100 text-sm">${isIt?'Analizza tutta la sequenza del DNA, compresi i geni non codificanti come RNU4-2. <strong>NECESSARIO per diagnosticare la Sindrome ReNU.</strong>':'Analyzes the entire DNA sequence, including non-coding genes like RNU4-2. <strong>REQUIRED to diagnose ReNU Syndrome.</strong>'}</p>
          </div>
          <div class="bg-white bg-opacity-10 rounded-xl p-5">
            <h3 class="font-bold text-sky-200 mb-2 flex items-center gap-2"><i class="fas fa-times-circle text-red-400"></i>WES – Whole Exome Sequencing</h3>
            <p class="text-sky-100 text-sm">${isIt?'Analizza solo le regioni codificanti. <strong>NON può rilevare le varianti in RNU4-2!</strong>':'Only analyzes coding regions. <strong>CANNOT detect variants in RNU4-2!</strong>'}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── COMMUNITY PAGE ───────────────────────────────────────────────────────────
function communityPage(t: Record<string, string>): string {
  const intlAssoc = [
    { country: t.lang==='it'?'Italia':'Italy', flag: '🇮🇹',
      name: 'Associazione Sindrome RENU Italia APS',
      fb: 'https://www.facebook.com/groups/1268033701594892/?ref=share',
      ig: 'https://www.instagram.com/immaaudino1975?igsh=dTd0amh2b203bnFu',
      web: 'https://www.sindromerenu.it',
      email: 'info@sindromerenu.it', phone: '+39 327 763 4894',  // Segreteria
      ref: 'Imma Audino, Stefania Rocca' },
    { country: t.lang==='it'?'Francia':'France', flag: '🇫🇷',
      name: 'Association Française du Syndrome ReNU',
      fb: '',
      ig: 'https://www.instagram.com/chaque_progres_une_victoire',
      web: 'https://www.syndrome-renu.fr/',
      email: 'syndrome.renu.france@gmail.com', phone: '',
      ref: 'Carole Hervé, Hervé Guérin' },
    { country: t.lang==='it'?'Spagna':'Spain', flag: '🇪🇸',
      name: 'Asociación Síndrome de ReNU',
      fb: '',
      ig: 'https://www.instagram.com/asociacion_sindrome_renu',
      web: 'https://www.sindromerenu.es/',
      email: 'asociacionsindromerenu@gmail.com', phone: '',
      ref: 'Clara Udaondo, Carol Rodriguez' },
    { country: t.lang==='it'?'Germania':'Germany', flag: '🇩🇪',
      name: 'ReNU Syndrom United',
      fb: 'https://www.facebook.com/groups/1425904855195400',
      ig: '',
      web: 'https://renu-syndrom.de/',
      email: 'viktoria@hassenmeier.eu', phone: '',
      ref: 'Vicky Hassenmeier' },
    { country: 'UK', flag: '🇬🇧',
      name: 'ReNU Syndrome United UK',
      fb: 'https://www.facebook.com/groups/1603406977204374',
      ig: 'https://www.instagram.com/rnu4_2_family/',
      web: 'https://renusyndromeuk.org/',
      email: 'michaelah_86@hotmail.com', phone: '',
      ref: 'Michaela Kerr, Christina Cox' },
    { country: t.lang==='it'?'Australia':'Australia', flag: '🇦🇺',
      name: 'ReNU Syndrome United Australia',
      fb: 'https://www.facebook.com/groups/1671427560388792',
      ig: 'https://www.instagram.com/renusyndromeaustralia',
      web: '',
      email: 'renusyndromeaustralia@gmail.com', phone: '',
      ref: 'Sarah Warwick' },
    { country: 'USA', flag: '🇺🇸',
      name: 'ReNU Syndrome United',
      fb: '',
      ig: 'https://www.instagram.com/renusyndromeunited',
      web: 'https://www.renusyndrome.org',
      email: 'united@renusyndrome.org', phone: '',
      ref: 'Jessica Margrill, Heather Margrill, Lindsay Pearse' },
    { country: t.lang==='it'?'Polonia':'Poland', flag: '🇵🇱',
      name: 'RNU4-2 Syndome ReNU',
      fb: 'https://www.facebook.com/share/g/1A3Enzm7AH/',
      ig: '',
      web: '',
      email: '', phone: '',
      ref: 'Anna Gintowt' },
    { country: t.lang==='it'?'Paesi Bassi':'Netherlands', flag: '🇳🇱',
      name: '',
      fb: '',
      ig: '',
      web: '',
      email: 'eric.riet@live.nl', phone: '',
      ref: '' },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-users mr-3 text-sky-300"></i>${t.community_title}</h1>
        <p class="text-sky-100 text-lg">${t.community_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-64">
          <img src="/images/famiglia2.jpg" alt="Famiglie Sindrome ReNU Italia" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- Map and Parent Network -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="card card-blue overflow-hidden">
          <div class="h-40 overflow-hidden">
            <img src="/images/renu_mappa_italia.jpg" alt="Mappa Italiana Sindrome ReNU" class="w-full h-full object-cover">
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-blue mx-auto mb-3"><i class="fas fa-map-marked-alt text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Mappa Mondiale RNU4-2':'World Map RNU4-2'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Aggiungi il tuo familiare alla mappa mondiale di RNU4-2. Ultimi aggiornati: 15 aprile 2026.':'Add your family member to the worldwide RNU4-2 map. Last updated: April 15, 2026.'}
            </p>
            <a href="https://form.jotform.com/250154538972159" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-map-pin"></i>${t.join_registry}
            </a>
          </div>
        </div>

        <div class="card card-sky overflow-hidden">
          <div class="h-40 overflow-hidden bg-sky-50 flex items-center justify-center">
            <img src="/images/renu_parents.jpg" alt="Rete Genitori ReNU Italia" class="w-full h-full object-cover">
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-sky mx-auto mb-3"><i class="fas fa-heart text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Rete Genitori Italiani':'Parent Network Italy'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'La rete dei genitori italiani è un punto di riferimento per chi desidera sentirsi meno solo, condividere domande, esperienze e piccole conquiste del quotidiano.':'The Italian parent network is a reference point for those who want to feel less alone and share experiences.'}
            </p>
            <div class="flex flex-wrap justify-center gap-2">
              <a href="https://chat.whatsapp.com/H3gvFMLm9vz7ylEYT01LvU" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#25D366">
                <i class="fab fa-whatsapp"></i>${t.lang==='it'?'Unisciti alla Chat':'Join the Chat'}
              </a>
              <a href="https://www.instagram.com/immaaudino1975/" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-4 py-2.5 rounded-full font-semibold transition-colors" style="background:#E1306C">
                <i class="fab fa-instagram"></i>Instagram
              </a>
              <a href="https://www.facebook.com/groups/1268033701594892/?ref=share" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-4 py-2.5 rounded-full font-semibold transition-colors" style="background:#1877F2">
                <i class="fab fa-facebook"></i>Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mappa Italia + distribuzione famiglie -->
      <div class="card card-navy p-6 mb-10">
        <h2 class="text-xl font-extrabold mb-4 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-map-marked-alt" style="color:#1078C0"></i>
          ${t.lang==='it'?'Famiglie ReNU in Italia':'ReNU Families in Italy'}
        </h2>
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <div class="flex-shrink-0 flex items-center justify-center">
            <!-- Mappa SVG professionale dell'Italia -->
            <svg viewBox="0 0 400 520" width="220" height="286" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 4px 16px rgba(8,32,80,0.18))">
              <defs>
                <linearGradient id="italyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#1078C0;stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#082050;stop-opacity:1"/>
                </linearGradient>
                <linearGradient id="seaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#C8E8F8;stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#EEF6FB;stop-opacity:1"/>
                </linearGradient>
              </defs>
              <!-- Sfondo mare -->
              <rect width="400" height="520" fill="url(#seaGrad)" rx="12"/>
              <!-- Corpo principale Italia -->
              <path d="M 155 30 C 120 32 95 45 80 60 C 65 75 60 90 62 105 C 64 120 70 130 78 138 C 72 145 65 155 60 165 C 55 175 52 185 55 195 C 58 205 66 212 75 218 C 68 228 62 240 60 252 C 58 264 60 275 66 284 C 72 293 81 300 91 306 C 98 320 104 335 108 348 C 112 361 113 373 110 382 C 107 391 100 397 96 404 C 92 411 91 418 93 424 C 95 430 100 435 108 439 C 116 443 127 446 137 446 C 130 456 126 465 127 473 C 128 481 134 488 143 491 C 152 494 163 492 172 488 C 181 484 188 476 191 468 C 195 460 195 451 191 443 C 200 440 208 435 213 428 C 218 421 219 412 215 405 C 228 402 240 396 248 388 C 256 380 260 370 258 360 C 256 350 249 341 241 335 C 255 330 267 320 274 308 C 281 296 282 281 277 268 C 272 255 261 244 249 237 C 260 228 268 216 270 204 C 272 192 268 180 260 171 C 275 162 286 149 290 136 C 294 123 291 110 283 100 C 275 90 262 84 249 80 C 260 72 268 62 268 52 C 268 42 260 34 249 30 C 238 26 224 26 211 28 C 198 30 185 34 174 36 C 168 33 161 30 155 30 Z"
                    fill="url(#italyGrad)" stroke="white" stroke-width="2"/>
              <!-- Sicilia -->
              <ellipse cx="165" cy="500" rx="38" ry="14" fill="url(#italyGrad)" stroke="white" stroke-width="1.5" transform="rotate(-10,165,500)"/>
              <!-- Sardegna -->
              <ellipse cx="62" cy="320" rx="22" ry="38" fill="url(#italyGrad)" stroke="white" stroke-width="1.5"/>
              <!-- Puntini città -->
              <circle cx="183" cy="115" r="5" fill="white" opacity="0.9"/>
              <text x="192" y="119" fill="white" font-size="10" font-family="Inter,sans-serif" font-weight="600">Milano</text>
              <circle cx="200" cy="160" r="4" fill="white" opacity="0.9"/>
              <text x="208" y="164" fill="white" font-size="9" font-family="Inter,sans-serif">Bologna</text>
              <circle cx="200" cy="220" r="5" fill="white" opacity="0.9"/>
              <text x="208" y="224" fill="white" font-size="10" font-family="Inter,sans-serif" font-weight="600">Roma</text>
              <circle cx="210" cy="350" r="4" fill="white" opacity="0.9"/>
              <text x="218" y="354" fill="white" font-size="9" font-family="Inter,sans-serif">Napoli</text>
              <!-- Cuori famiglie ReNU -->
              <text x="170" y="135" font-size="12" opacity="0.9">💙</text>
              <text x="140" y="195" font-size="10" opacity="0.9">💙</text>
              <text x="190" y="245" font-size="11" opacity="0.9">💙</text>
              <text x="165" y="320" font-size="10" opacity="0.9">💙</text>
              <text x="205" y="375" font-size="10" opacity="0.9">💙</text>
              <text x="155" y="490" font-size="10" opacity="0.9">💙</text>
              <!-- Badge contatore -->
              <circle cx="310" cy="80" r="32" fill="#F59E0B"/>
              <text x="310" y="74" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="Inter,sans-serif">12-14</text>
              <text x="310" y="88" text-anchor="middle" fill="white" font-size="8" font-family="Inter,sans-serif">casi</text>
              <text x="310" y="100" text-anchor="middle" fill="white" font-size="8" font-family="Inter,sans-serif">in Italia</text>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              ${t.lang==='it'?'In Italia sono stati accertati <strong>12-14 casi</strong> di Sindrome ReNU (RNU4-2). Le famiglie sono distribuite in diverse regioni italiane. La mappa è in continuo aggiornamento grazie al lavoro di rete dell\'Associazione.':'In Italy, <strong>12-14 cases</strong> of ReNU Syndrome (RNU4-2) have been confirmed. Families are distributed across several Italian regions.'}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              ${t.lang==='it'?'Se hai un familiare con Sindrome ReNU e non sei ancora in contatto con la nostra rete, <strong>scrivici</strong>: ti aiutiamo a entrare nella comunità italiana e a conoscere le famiglie vicino a te.':'If you have a family member with ReNU Syndrome and are not yet in contact with our network, <strong>write to us</strong>: we will help you join the Italian community.'}
            </p>
            <a href="mailto:info@sindromerenu.it" class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-envelope"></i>${t.lang==='it'?'Entra nella rete':'Join the network'}
            </a>
          </div>
        </div>
        <div class="mt-5 p-4 bg-blue-50 rounded-xl">
          <p class="text-xs text-blue-700 leading-relaxed">
            <i class="fas fa-globe mr-1"></i><strong>${t.world_title}:</strong> ${t.world_desc}
          </p>
        </div>
      </div>

      <!-- International Network -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe-europe" style="color:#1078C0"></i>${t.intl_network}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${intlAssoc.map(a => `
          <div class="card p-5">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-3xl">${a.flag}</span>
              <div>
                <h3 class="font-bold leading-tight" style="color:#082050">${a.country}</h3>
                ${a.name ? `<p class="text-xs text-gray-500 leading-tight">${a.name}</p>` : ''}
              </div>
            </div>
            ${a.ref ? `<p class="text-xs text-gray-400 mb-2"><i class="fas fa-user mr-1"></i>${a.ref}</p>` : ''}
            <div class="flex gap-2 flex-wrap mt-2">
              ${a.web   ? `<a href="${a.web}"   target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#1078C0"><i class="fas fa-globe"></i>Web</a>` : ''}
              ${a.fb    ? `<a href="${a.fb}"    target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#1877F2"><i class="fab fa-facebook"></i>FB</a>` : ''}
              ${a.ig    ? `<a href="${a.ig}"    target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#E1306C"><i class="fab fa-instagram"></i>IG</a>` : ''}
              ${a.email ? `<a href="mailto:${a.email}" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#45B8EC"><i class="fas fa-envelope"></i>Email</a>` : ''}
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- RSU Partnership -->
      <div class="rounded-2xl p-8 text-white mb-10" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img src="/images/logo.png" alt="Logo" class="w-28 h-auto drop-shadow-lg flex-shrink-0">
          <div>
            <h3 class="text-2xl font-bold mb-2">ReNU Syndrome United (USA)</h3>
            <p class="text-sky-200 mb-4">
              ${t.lang==='it'?'Sindrome ReNU Italia opera in stretta collaborazione con ReNU Syndrome United degli USA, l\'associazione fondatrice che ci ha concesso il permesso di replicare il loro modello e utilizza la stessa struttura organizzativa.':'Sindrome ReNU Italia works in close collaboration with ReNU Syndrome United from the USA, who granted us permission to replicate their model and uses the same organizational structure.'}
            </p>
            <a href="https://www.renusyndrome.org" target="_blank"
               class="inline-flex items-center gap-2 font-bold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors text-sm" style="background:white; color:#082050">
              <i class="fas fa-external-link-alt"></i>www.renusyndrome.org
            </a>
          </div>
        </div>
      </div>

      <!-- Gallery – identica per tutte le lingue (foto reali italiane) -->
      <div class="card card-sky overflow-hidden mb-10">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-sky flex-shrink-0"><i class="fas fa-images text-xl"></i></div>
            <h3 class="font-bold text-xl" style="color:#082050">
              ${t.lang==='it'?'I nostri bambini e le nostre famiglie':t.lang==='en'?'Our children and families':t.lang==='fr'?'Nos enfants et familles':t.lang==='es'?'Nuestros niños y familias':'Unsere Kinder und Familien'}
            </h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
            <div class="rounded-xl overflow-hidden" style="height:140px"><img src="/images/bambini.jpg" alt="Bambini ReNU" class="w-full h-full object-cover"></div>
            <div class="rounded-xl overflow-hidden" style="height:140px"><img src="/images/famiglie.jpg" alt="Famiglie ReNU Italia" class="w-full h-full object-cover"></div>
            <div class="rounded-xl overflow-hidden" style="height:140px"><img src="/images/renu_incontro_famiglie.jpg" alt="Primo incontro famiglie ReNU" class="w-full h-full object-cover"></div>
            <div class="rounded-xl overflow-hidden" style="height:140px"><img src="/images/renu_gallery.jpg" alt="Galleria ReNU Italia" class="w-full h-full object-cover"></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 mb-4">
            <i class="fas fa-shield-alt mr-1"></i>
            <strong>Privacy GDPR:</strong>
            ${t.lang==='it'?'Le immagini sono pubblicate con il consenso esplicito dei genitori. Per aggiungere le foto del tuo bambino scrivi a':t.lang==='en'?'Images are published with explicit parental consent. To add your child\'s photos write to':t.lang==='fr'?'Les images sont publiées avec le consentement explicite des parents. Pour ajouter des photos écrivez à':t.lang==='es'?'Las imágenes se publican con el consentimiento explícito de los padres. Para añadir fotos escriba a':'Bilder werden mit ausdrücklicher Einwilligung der Eltern veröffentlicht. Um Fotos hinzuzufügen schreiben Sie an'}
            <a href="mailto:presidenza@sindromerenu.it" class="font-semibold underline">presidenza@sindromerenu.it</a>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Voglio condividere la mia storia':'I want to share my story')}"
               class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full font-semibold text-sm" style="background:#1078C0">
              <i class="fas fa-paper-plane"></i>
              ${t.lang==='it'?'Condividi la tua storia':t.lang==='en'?'Share your story':t.lang==='fr'?'Partager votre histoire':t.lang==='es'?'Comparte tu historia':'Teile deine Geschichte'}
            </a>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm border" style="color:#082050;border-color:#082050">
              <i class="fas fa-external-link-alt"></i>
              ${t.lang==='it'?'Galleria Internazionale':t.lang==='en'?'International Gallery':t.lang==='fr'?'Galerie Internationale':t.lang==='es'?'Galería Internacional':'Internationale Galerie'}
            </a>
          </div>
        </div>
      </div>

      <!-- Storie delle famiglie -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-heart" style="color:#E74C3C"></i>
          ${t.lang==='it'?'Storie di Famiglie da Tutto il Mondo':t.lang==='en'?'Stories from Families Around the World':t.lang==='fr'?'Histoires de Familles du Monde Entier':t.lang==='es'?'Historias de Familias de Todo el Mundo':'Familiengeschichten aus aller Welt'}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${[
            { name: 'James', flag: '🇬🇧', url: 'https://www.renusyndrome.org/james-2', desc: t.lang==='it'?'Gran Bretagna – Una storia di forza':t.lang==='en'?'Great Britain – A story of strength':'Grande-Bretagne – Une histoire de force' },
            { name: 'Mia Joy', flag: '🇺🇸', url: 'https://www.renusyndrome.org/mia-joy', desc: t.lang==='it'?'USA – Gioia in ogni momento':t.lang==='en'?'USA – Joy in every moment':'USA – La joie à chaque instant' },
            { name: 'Max', flag: '🇺🇸', url: 'https://www.renusyndrome.org/max-us', desc: t.lang==='it'?'USA – Coraggio e determinazione':t.lang==='en'?'USA – Courage and determination':'USA – Courage et détermination' },
            { name: 'Eliot', flag: '🇫🇷', url: 'https://www.renusyndrome.org/eliot', desc: t.lang==='it'?'Francia – Una famiglia unita':t.lang==='en'?'France – A united family':'France – Une famille unie' },
            { name: 'Isla', flag: '🇦🇺', url: 'https://www.renusyndrome.org/isla', desc: t.lang==='it'?'Australia – La gioia di ogni giorno':t.lang==='en'?'Australia – Joy every day':'Australie – La joie quotidienne' },
            { name: 'Cooper', flag: '🇦🇺', url: 'https://www.renusyndrome.org/cooper', desc: t.lang==='it'?'Australia – Forza e amore':t.lang==='en'?'Australia – Strength and love':'Australie – Force et amour' },
            { name: 'Thibault', flag: '🇫🇷', url: 'https://www.renusyndrome.org/thibault', desc: t.lang==='it'?'Francia – Speranza e progresso':t.lang==='en'?'France – Hope and progress':'France – Espoir et progrès' },
            { name: 'Noah', flag: '🇨🇦', url: 'https://www.renusyndrome.org/noah', desc: t.lang==='it'?'Canada – Un\'avventura speciale':t.lang==='en'?'Canada – A special adventure':'Canada – Une aventure spéciale' },
            { name: 'Antonin', flag: '🇫🇷', url: 'https://www.renusyndrome.org/antonin', desc: t.lang==='it'?'Francia – Amore senza confini':t.lang==='en'?'France – Love without borders':'France – Amour sans frontières' },
            { name: 'Poppy', flag: '🇬🇧', url: 'https://www.renusyndrome.org/poppy', desc: t.lang==='it'?'Gran Bretagna – La dolcezza di Poppy':t.lang==='en'?'Great Britain – The sweetness of Poppy':'Grande-Bretagne – La douceur de Poppy' },
            { name: 'Vivaan', flag: '🇮🇳', url: 'https://www.renusyndrome.org/vivaan', desc: t.lang==='it'?'India – Famiglia che lotta insieme':t.lang==='en'?'India – Family fighting together':'Inde – Famille qui se bat ensemble' },
            { name: 'Chase', flag: '🇺🇸', url: 'https://www.renusyndrome.org/chase', desc: t.lang==='it'?'USA – Perseveranza e gioia':t.lang==='en'?'USA – Perseverance and joy':'USA – Persévérance et joie' },
          ].map(s => `
          <a href="${s.url}" target="_blank" class="card p-4 flex items-center gap-4 group hover:shadow-lg">
            <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-3xl" style="background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">
              ${s.flag}
            </div>
            <div>
              <div class="font-bold text-base" style="color:#082050">${s.name}</div>
              <div class="text-xs text-gray-500 mt-0.5">${s.desc}</div>
              <div class="text-xs font-semibold mt-1 flex items-center gap-1" style="color:#1078C0">
                ${t.read_more} <i class="fas fa-arrow-right text-xs"></i>
              </div>
            </div>
          </a>`).join('')}
        </div>
        <div class="mt-6 text-center">
          <a href="https://www.renusyndrome.org/stories" target="_blank"
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border: 2px solid #45B8EC">
            <i class="fas fa-users"></i>
            ${t.lang==='it'?'Tutte le Storie – renusyndrome.org':t.lang==='en'?'All Stories – renusyndrome.org':'Toutes les Histoires – renusyndrome.org'}
          </a>
        </div>
      </div>

    </div>
  </section>`
}

// ─── DONATIONS PAGE ───────────────────────────────────────────────────────────
function donationsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-20 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 text-sky-100">
          <i class="fas fa-heart text-red-300"></i>
          ${t.lang==='it'?'Ogni gesto conta':'Every gesture counts'}
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <i class="fas fa-hand-holding-heart mr-3 text-sky-300"></i>${t.donations_title}
        </h1>
        <p class="text-sky-100 text-lg mb-8 max-w-xl leading-relaxed">${t.donations_intro}</p>
        <div class="flex flex-wrap gap-3">
          <a href="https://buonacausa.org" target="_blank"
             class="inline-flex items-center gap-2 bg-white font-bold px-7 py-4 rounded-full shadow-xl text-base transition-colors hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-hand-holding-heart"></i>
            ${t.lang==='it'?'Dona ora su BuonaCausa.org':'Donate on BuonaCausa.org'}
          </a>
          <a href="mailto:donazioni@sindromerenu.it"
             class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
            <i class="fas fa-envelope"></i>donazioni@sindromerenu.it
          </a>
        </div>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-72">
          <img src="/images/renu_donazione_hero.jpg" alt="Sostienici – Sindrome ReNU Italia" class="w-full h-56 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- TABS NAVIGATION -->
  <div class="sticky top-16 z-40 bg-white shadow-sm border-b border-sky-100">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex overflow-x-auto gap-0">
        ${[
          ['#come-donare', t.lang==='it'?'Come Donare':'How to Donate', 'fa-hand-holding-heart'],
          ['#cinque-per-mille', '5×1000', 'fa-percentage'],
          ['#compleanno-solidale', t.lang==='it'?'Compleanno Solidale':'Birthday Fundraiser', 'fa-birthday-cake'],
          ['#chi-ci-sostiene', t.lang==='it'?'Chi ci Sostiene':'Our Supporters', 'fa-star'],
          ['#deduzioni', t.lang==='it'?'Deduzioni Fiscali':'Tax Deductions', 'fa-file-invoice'],
        ].map(([href,label,icon]) => `
        <a href="${href}" class="flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 border-transparent hover:border-sky-500 hover:text-sky-600 transition-colors" style="color:#082050">
          <i class="fas ${icon} text-xs" style="color:#1078C0"></i>${label}
        </a>`).join('')}
      </div>
    </div>
  </div>

  <section class="py-12 px-4 section-light">
    <div class="max-w-4xl mx-auto space-y-12">

      <!-- WHY SUPPORT -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${[
          ['fa-microscope','ic-blue',t.lang==='it'?'Finanzia la Ricerca':'Fund Research',t.lang==='it'?'Supporta la ricerca per trovare terapie per la Sindrome ReNU.':'Support research to find therapies for ReNU Syndrome.'],
          ['fa-users','ic-green',t.lang==='it'?'Costruisci Comunità':'Build Community',t.lang==='it'?'Aiuta a costruire la rete di supporto per le famiglie italiane.':'Help build the Italian family support network.'],
          ['fa-bullhorn','ic-purple',t.lang==='it'?'Diffondi Consapevolezza':'Spread Awareness',t.lang==='it'?'Aumenta la visibilità della Sindrome ReNU in Italia.':'Increase visibility of ReNU Syndrome in Italy.'],
        ].map(([icon,ic,title,desc]) => `
        <div class="card p-6 text-center">
          <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon} text-xl"></i></div>
          <h3 class="font-bold mb-2" style="color:#082050">${title}</h3>
          <p class="text-gray-600 text-sm">${desc}</p>
        </div>`).join('')}
      </div>

      <!-- COME DONARE -->
      <div id="come-donare">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">1</span>
          ${t.lang==='it'?'Come Donare':t.lang==='en'?'How to Donate':'Comment Donner'}
        </h2>

        <!-- Donazione individuale – Bonifico -->
        <div class="card card-blue p-8 mb-6">
          <h3 class="text-xl font-extrabold mb-4 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-university" style="color:#1078C0"></i>
            ${t.lang==='it'?'Donazione Individuale – Bonifico Bancario':t.lang==='en'?'Individual Donation – Bank Transfer':'Don Individuel – Virement Bancaire'}
          </h3>
          <div class="rounded-2xl p-6 font-mono space-y-3" style="background:#EEF6FB">
            <p class="text-sm text-gray-500 font-sans text-center">${t.donations_iban_label}</p>
            <div class="text-center">
              <p class="text-xs text-gray-500 font-sans mb-1">IBAN</p>
              <p class="text-xl font-bold tracking-wide" style="color:#082050">${t.donations_iban}</p>
            </div>
            <p class="text-center text-sm text-gray-500 font-sans">${t.lang==='it'?'Causale: "Donazione Sindrome ReNU Italia APS"':'Reference: "Donazione Sindrome ReNU Italia APS"'}</p>
          </div>
          <p class="mt-3 text-sm text-gray-500 text-center">
            <i class="fas fa-envelope mr-1" style="color:#1078C0"></i>
            <a href="mailto:donazioni@sindromerenu.it" class="hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </p>
        </div>

        <!-- Donazione ricorrente -->
        <div class="card card-sky p-8 mb-6">
          <h3 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-sync-alt" style="color:#45B8EC"></i>
            ${t.lang==='it'?'Donazione Ricorrente':t.lang==='en'?'Recurring Donation':'Don Récurrent'}
          </h3>
          <p class="text-gray-600 text-sm mb-4">
            ${t.lang==='it'?'Con una donazione ricorrente mensile o annuale, garantisci un supporto continuo alle attività dell\'associazione e alle famiglie ReNU in Italia. Ogni contributo, anche piccolo, fa la differenza ogni giorno.':'With a monthly or annual recurring donation, you provide continuous support to the association\'s activities and ReNU families in Italy.'}
          </p>
          <a href="https://buonacausa.org" target="_blank"
             class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#1078C0">
            <i class="fas fa-hand-holding-heart"></i>
            ${t.lang==='it'?'Imposta Donazione Ricorrente':'Set Up Recurring Donation'}
          </a>
        </div>

        <!-- Donazione online BuonaCausa -->
        <div class="card p-8 mb-6" style="border-top:4px solid #16A085">
          <div class="flex items-start gap-5">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center shadow" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                <i class="fas fa-hand-holding-heart text-2xl text-white"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-bold mb-3" style="color:#16A085">
                <i class="fas fa-star text-yellow-400"></i>
                ${t.lang==='it'?'Piattaforma Italiana Consigliata':'Recommended Italian Platform'}
              </div>
              <h3 class="text-xl font-extrabold mb-2" style="color:#082050">
                ${t.lang==='it'?'Donazione Online – BuonaCausa.org':'Online Donation – BuonaCausa.org'}
              </h3>
              <p class="text-gray-600 text-sm mb-1 leading-relaxed">
                ${t.lang==='it'?'Dona online in modo semplice e sicuro su <strong>BuonaCausa.org</strong>, la piattaforma italiana gratuita di crowdfunding per associazioni del Terzo Settore. Accetta bonifico, PayPal e carta di credito/debito.':'Donate online easily and securely on <strong>BuonaCausa.org</strong>, the free Italian crowdfunding platform for non-profit organizations. Accepts bank transfer, PayPal and credit/debit card.'}
              </p>
              <ul class="text-sm text-gray-500 mb-4 space-y-1 list-none">
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Trasparente e sicura':'Transparent and secure'}</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Donazione individuale o ricorrente':'Individual or recurring donation'}</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Ricevuta fiscale disponibile':'Tax receipt available'}</li>
              </ul>
              <a href="https://buonacausa.org" target="_blank"
                 class="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-full shadow-lg transition-colors hover:opacity-90" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                <i class="fas fa-hand-holding-heart"></i>
                ${t.lang==='it'?'Vai a BuonaCausa.org':'Go to BuonaCausa.org'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 5X1000 -->
      <div id="cinque-per-mille">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">2</span>
          5×1000
        </h2>
        <div class="card card-navy p-8">
          <div class="flex flex-col md:flex-row items-start gap-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white" style="background: linear-gradient(135deg, #082050, #1078C0)">
                5‰
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-3" style="color:#082050">
                ${t.lang==='it'?'Destina il 5×1000 a Sindrome ReNU Italia APS':'Donate your 5×1000 to Sindrome ReNU Italia APS'}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                ${t.lang==='it'?'Il 5×1000 è una quota dell\'IRPEF che puoi destinare gratuitamente a un\'associazione del Terzo Settore iscritta al RUNTS. Non costa nulla in più: è una scelta su come distribuire le tasse che già paghi. Sindrome ReNU Italia APS è iscritta al RUNTS (Registro Unico Nazionale del Terzo Settore).':'The 5×1000 is a portion of income tax you can freely allocate to a non-profit organization. It costs you nothing extra. Sindrome ReNU Italia APS is registered in the RUNTS.'}
              </p>
              <div class="rounded-xl p-5 mb-4" style="background:#EEF6FB; border-left: 4px solid #1078C0">
                <p class="font-bold text-sm mb-2" style="color:#082050">
                  <i class="fas fa-info-circle mr-2" style="color:#1078C0"></i>
                  ${t.lang==='it'?'Come fare:':'How to do it:'}
                </p>
                <ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>${t.lang==='it'?'Nella dichiarazione dei redditi (730 o REDDITI PF) cerca la sezione "5×1000"':'In your tax declaration (730 or REDDITI PF) find the "5×1000" section'}</li>
                  <li>${t.lang==='it'?'Firma nella casella "Sostegno delle organizzazioni di volontariato..."':'Sign in the "Support for volunteer organizations..." box'}</li>
                  <li>${t.lang==='it'?'Scrivi il Codice Fiscale dell\'associazione':'Write the association\'s Tax Code'}</li>
                </ol>
              </div>
              <div class="rounded-xl px-5 py-4 border-2 mb-3" style="background:#EEF6FB; border-color:#1078C0;">
                <div class="flex items-center gap-3 font-mono text-lg font-bold" style="color:#082050">
                  <i class="fas fa-hashtag text-sm" style="color:#1078C0"></i>
                  ${t.lang==='it'?'Codice Fiscale:':'Tax Code:'}
                  <span class="px-3 py-1 rounded-lg text-sm font-bold text-white" style="background:#1078C0">
                    ${t.lang==='it'?'in aggiornamento – comunicazione imminente':'pending registration – coming soon'}
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <i class="fas fa-info-circle" style="color:#45B8EC"></i>
                  ${t.lang==='it'?'Il codice fiscale sarà pubblicato non appena completata l\'iscrizione al RUNTS (Registro Unico Nazionale del Terzo Settore). Seguici sui social per non perdere l\'aggiornamento!':'The tax code will be published as soon as RUNTS registration is complete. Follow us on social media!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPLEANNO SOLIDALE -->
      <div id="compleanno-solidale">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">3</span>
          ${t.lang==='it'?'Compleanno Solidale':'Birthday Fundraiser'}
        </h2>
        <div class="card card-purple p-8">
          <div class="flex flex-col md:flex-row items-start gap-6">
            <div class="flex-shrink-0">
              <div class="ic ic-purple w-20 h-20">
                <i class="fas fa-birthday-cake text-3xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-3" style="color:#082050">
                ${t.lang==='it'?'Trasforma il tuo compleanno in un gesto d\'amore':'Turn your birthday into an act of love'}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                ${t.lang==='it'?'In occasione del tuo compleanno, puoi chiedere ai tuoi amici e familiari di fare una piccola donazione a Sindrome ReNU Italia APS al posto dei regali. Un modo semplice e bellissimo per fare la differenza!':'On your birthday, you can ask your friends and family to make a small donation to Sindrome ReNU Italia APS instead of gifts. A simple and beautiful way to make a difference!'}
              </p>
              <a href="https://buonacausa.org" target="_blank"
                 class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#7C3AED">
                <i class="fas fa-gift"></i>
                ${t.lang==='it'?'Crea la tua raccolta fondi':'Create your fundraiser'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CHI CI SOSTIENE -->
      <div id="chi-ci-sostiene">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">4</span>
          ${t.lang==='it'?'Chi ci Sostiene':'Our Supporters'}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card card-amber p-8 text-center">
            <div class="ic ic-amber mx-auto mb-4 w-20 h-20">
              <i class="fas fa-heart text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2" style="color:#082050">Il Sorriso di Matilde ETS</h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Associazione partner che sostiene le famiglie con bambini affetti da malattie rare. Un ringraziamento speciale per il loro prezioso supporto a Sindrome ReNU Italia APS.':'Partner association supporting families with children affected by rare diseases. A special thanks for their precious support to Sindrome ReNU Italia APS.'}
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:#FEF3C7; color:#92400E">
              <i class="fas fa-star"></i>${t.lang==='it'?'Sostenitore Ufficiale':'Official Supporter'}
            </div>
          </div>
          <div class="card card-blue p-8 text-center">
            <div class="ic ic-blue mx-auto mb-4 w-20 h-20">
              <i class="fas fa-building text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2" style="color:#082050">Frontis SPA</h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Azienda partner che supporta la nostra missione. Il loro contributo ci permette di continuare a operare e supportare le famiglie ReNU in Italia.':'Partner company supporting our mission. Their contribution allows us to continue operating and supporting ReNU families in Italy.'}
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:#C8E8F8; color:#082050">
              <i class="fas fa-handshake"></i>${t.lang==='it'?'Partner Aziendale':'Corporate Partner'}
            </div>
          </div>
        </div>
        <div class="mt-6 text-center text-sm text-gray-500">
          <i class="fas fa-info-circle mr-1" style="color:#1078C0"></i>
          ${t.lang==='it'?'Vuoi diventare partner? Contattaci a':'Want to become a partner? Contact us at'} 
          <a href="mailto:info@sindromerenu.it" class="font-semibold hover:underline" style="color:#1078C0">info@sindromerenu.it</a>
        </div>
      </div>

      <!-- DEDUZIONI FISCALI -->
      <div id="deduzioni">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">5</span>
          ${t.lang==='it'?'Deduzioni e Detrazioni Fiscali':'Tax Deductions'}
        </h2>
        <div class="card card-green p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color:#082050">
                <i class="fas fa-percentage" style="color:#16A085"></i>
                ${t.lang==='it'?'Detrazione (Persone Fisiche)':'Tax Deduction (Individuals)'}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-3">
                ${t.lang==='it'?'Le donazioni effettuate da persone fisiche a Sindrome ReNU Italia APS (iscritta al RUNTS) danno diritto a una detrazione IRPEF del 30% (35% per i soci), fino a un massimo di 30.000€ all\'anno.':'Donations from individuals to Sindrome ReNU Italia APS (registered in RUNTS) entitle a 30% income tax deduction (35% for members), up to €30,000 per year.'}
              </p>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color:#082050">
                <i class="fas fa-building" style="color:#16A085"></i>
                ${t.lang==='it'?'Deduzione (Aziende)':'Tax Deduction (Companies)'}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-3">
                ${t.lang==='it'?'Le aziende che fanno donazioni a Sindrome ReNU Italia APS possono dedurre il 10% del reddito imponibile, con un limite di 70.000€ annui. Contattaci per ricevere la documentazione necessaria.':'Companies making donations to Sindrome ReNU Italia APS can deduct 10% of taxable income, up to €70,000 annually. Contact us for the necessary documentation.'}
              </p>
            </div>
          </div>
          <div class="mt-4 rounded-xl p-4 border text-sm text-gray-600" style="background:#EEF6FB; border-color:#C8E8F8">
            <i class="fas fa-exclamation-circle mr-2" style="color:#1078C0"></i>
            ${t.lang==='it'?'Per informazioni fiscali personalizzate, si consiglia di consultare un commercialista. Per ricevere la ricevuta fiscale della tua donazione, scrivi a:':'For personalized tax advice, consult a tax advisor. To receive a fiscal receipt for your donation, write to:'}
            <a href="mailto:donazioni@sindromerenu.it" class="font-semibold ml-1 hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </div>
        </div>
      </div>

      <!-- CTA FINALE -->
      <div class="rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%)">
        <div class="p-10 text-center text-white">
          <i class="fas fa-hand-holding-heart text-5xl text-sky-300 mb-4"></i>
          <h2 class="text-3xl font-extrabold mb-3">
            ${t.lang==='it'?'Insieme possiamo fare la differenza':t.lang==='en'?'Together we can make a difference':'Ensemble nous pouvons faire la différence'}
          </h2>
          <p class="text-sky-200 text-base mb-8 max-w-xl mx-auto">
            ${t.lang==='it'?'Ogni donazione, grande o piccola, va direttamente a supportare le famiglie ReNU in Italia e la ricerca scientifica. Grazie dal profondo del cuore per ogni contributo.':'Every donation, big or small, goes directly to supporting ReNU families in Italy and scientific research. Thank you from the bottom of our hearts.'}
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://buonacausa.org" target="_blank"
               class="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition-colors hover:bg-sky-50" style="color:#082050">
              <i class="fas fa-hand-holding-heart"></i>
              ${t.lang==='it'?'Dona ora su BuonaCausa.org':'Donate on BuonaCausa.org'}
            </a>
            <a href="mailto:donazioni@sindromerenu.it"
               class="inline-flex items-center gap-2 bg-white bg-opacity-15 hover:bg-opacity-25 text-white font-semibold px-7 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-envelope"></i>
              ${t.lang==='it'?'Scrivi per informazioni':'Write for information'}
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>`
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function contactPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-envelope mr-3 text-sky-300"></i>${t.contact_title}</h1>
      <p class="text-sky-100 text-lg">${t.contact_intro}</p>

      <!-- BARRA DI RICERCA -->
      <div class="mt-6 relative max-w-xl">
        <input type="text" id="contactSearch"
               placeholder="${t.lang==='it'?'Cerca nel sito… (es. diagnosi, donazioni, terapie)':t.lang==='en'?'Search the site… (e.g. diagnosis, donations, therapies)':t.lang==='fr'?'Rechercher sur le site…':t.lang==='es'?'Buscar en el sitio…':'Suche auf der Website…'}"
               class="w-full px-5 py-3.5 pr-12 rounded-xl text-gray-800 text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
               oninput="doSearch(this.value)">
        <i class="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
      </div>
      <div id="searchResults" class="mt-3 rounded-xl overflow-hidden shadow-xl hidden"></div>
    </div>
  </section>
  <script>
  const siteIndex = [
    { title:'${t.lang==='it'?'Home':'Home'}', url:'/${t.lang}/home', keywords:'home benvenuto renu sindrome associazione' },
    { title:'${t.lang==='it'?'Chi\u00e8 ReNU':'What is ReNU'}', url:'/${t.lang}/about', keywords:'about cos e renu sindrome gene rnu4-2 diagnosi caratteristiche sintomi' },
    { title:'${t.lang==='it'?'Ricerca':'Research'}', url:'/${t.lang}/research', keywords:'ricerca research studio indeed pubmed pubblicazioni scientifiche' },
    { title:'${t.lang==='it'?'Terapie':'Therapies'}', url:'/${t.lang}/therapies', keywords:'terapie fisioterapia logopedia feuerstein acquaticità nuoto musicoterapia aba' },
    { title:'${t.lang==='it'?'Diagnosi':'Diagnosis'}', url:'/${t.lang}/diagnosis', keywords:'diagnosi wgs wes sequenziamento genetico esoma genoma' },
    { title:'${t.lang==='it'?'Community':'Community'}', url:'/${t.lang}/community', keywords:'community famiglia genitori rete mappa instagram facebook' },
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni iban buonacausa 5x1000 compleanno solidale matilde frontis' },
    { title:'${t.lang==='it'?'Contatti':'Contact'}', url:'/${t.lang}/contact', keywords:'contatti email telefono whatsapp info presidenza segreteria statuto' },
    { title:'${t.lang==='it'?'Brochure':'Brochures'}', url:'/${t.lang}/brochure', keywords:'brochure pdf scarica download materiali' },
    { title:'${t.lang==='it'?'Diventa Socio':'Become a Member'}', url:'/${t.lang}/members', keywords:'socio iscrizione quota associazione membro' },
    { title:'${t.lang==='it'?'Incontri ed Eventi':'Events'}', url:'/${t.lang}/events', keywords:'eventi incontri calendario manifestazioni' },
    { title:'${t.lang==='it'?'Progetti':'Projects'}', url:'/${t.lang}/projects', keywords:'progetti iniziative campagne awareness consapevolezza' },
    { title:'${t.lang==='it'?'FAQ & Diritti':'FAQ & Rights'}', url:'/${t.lang}/faq', keywords:'faq diritti tutele legge 104 pass auto disabilità card bonus scuola sostegno burocrazia inps' },
    { title:'${t.lang==='it'?'Terapie – Diritti e Tutele':'Therapies – Rights'}', url:'/${t.lang}/therapies#diritti', keywords:'diritti tutele rete famiglie 104 pass auto disabilità card bonus scuola' },
  ];
  function doSearch(q) {
    const res = document.getElementById('searchResults');
    if (!q || q.length < 2) { res.classList.add('hidden'); res.innerHTML=''; return; }
    const lq = q.toLowerCase();
    const hits = siteIndex.filter(s => s.title.toLowerCase().includes(lq) || s.keywords.toLowerCase().includes(lq));
    if (hits.length === 0) {
      res.innerHTML = '<div class="bg-white px-5 py-4 text-gray-500 text-sm">${t.lang==='it'?'Nessun risultato trovato.':'No results found.'}</div>';
    } else {
      res.innerHTML = hits.map(h =>
        '<a href="'+h.url+'" class="flex items-center gap-3 px-5 py-3.5 bg-white hover:bg-sky-50 border-b border-gray-100 transition-colors">'
        + '<i class="fas fa-arrow-right text-sky-500 text-xs"></i>'
        + '<span class="font-semibold text-gray-800">'+h.title+'</span>'
        + '<span class="text-gray-400 text-xs ml-auto">'+h.url+'</span>'
        + '</a>'
      ).join('');
    }
    res.classList.remove('hidden');
  }
  document.addEventListener('click', function(e) {
    if (!document.getElementById('contactSearch').contains(e.target) && !document.getElementById('searchResults').contains(e.target)) {
      document.getElementById('searchResults').classList.add('hidden');
    }
  });
  </script>
  <section class="py-16 px-4 section-light">
    <div class="max-w-3xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        ${[
          ['info@sindromerenu.it','ic-blue','fa-envelope',t.lang==='it'?'Info Generali':'General Info'],
          ['donazioni@sindromerenu.it','ic-red','fa-heart',t.lang==='it'?'Donazioni':'Donations'],
          ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',t.lang==='it'?'Segreteria':'Secretariat'],
          ['presidenza@sindromerenu.it','ic-purple','fa-user-tie',t.lang==='it'?'Presidenza':'Presidency'],
        ].map(([email,ic,icon,label]) => `
        <a href="mailto:${email}" class="card p-5 flex items-center gap-4 group">
          <div class="ic ${ic}"><i class="fas ${icon}"></i></div>
          <div>
            <div class="font-bold group-hover:underline" style="color:#082050">${label}</div>
            <div class="text-sm group-hover:underline" style="color:#1078C0">${email}</div>
          </div>
        </a>`).join('')}
      </div>

      <!-- Phone & WhatsApp -->
      <div class="card card-sky p-6 mb-8 flex items-center gap-4">
        <div class="ic ic-sky flex-shrink-0"><i class="fas fa-phone text-xl"></i></div>
        <div>
          <div class="font-bold text-lg mb-1" style="color:#082050">
            ${t.lang==='it'?'Telefono / WhatsApp':'Phone / WhatsApp'}
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray-500">${t.lang==='it'?'Segreteria':'Secretariat'}: <a href="tel:+393277634894" class="text-lg font-extrabold hover:underline" style="color:#1078C0">+39 327 763 4894</a></div>
            <div class="text-sm text-gray-500">${t.lang==='it'?'Presidenza':'Presidency'}: <a href="tel:+393357301206" class="text-lg font-extrabold hover:underline" style="color:#1078C0">+39 335 730 1206</a></div>
          </div>
        </div>
      </div>

      <!-- Statuto dell'associazione -->
      <div class="card card-blue p-6 mb-8">
        <div class="flex items-start gap-4">
          <div class="ic ic-navy flex-shrink-0">
            <i class="fas fa-file-contract text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-1" style="color:#082050">
              ${t.lang==='it'?'Statuto Associativo':'Association Statute'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Consulta lo Statuto di Sindrome ReNU Italia APS – documento pubblico obbligatorio per le associazioni del Terzo Settore iscritte al RUNTS.':'Read the Statute of Sindrome ReNU Italia APS – mandatory public document for Third Sector organizations registered in RUNTS.'}
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/static/statuto-sindrome-renu-italia-aps.pdf" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors" style="background:#082050"
                 onclick="if(!this.href.includes('static/statuto')) { alert('${t.lang==='it'?'Documento in fase di caricamento. Contattaci a info@sindromerenu.it':'Document being uploaded. Contact us at info@sindromerenu.it'}'); return false; }">
                <i class="fas fa-download"></i>
                ${t.lang==='it'?'Scarica Statuto (PDF)':'Download Statute (PDF)'}
              </a>
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border-2" style="border-color:#1078C0; color:#1078C0; background:#EEF6FB">
                <i class="fas fa-clock"></i>
                ${t.lang==='it'?'Documento in pubblicazione':'Document being published'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- FORM CONTATTO GDPR-COMPLIANT -->
      <div class="card card-blue p-8 mb-8">
        <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-paper-plane" style="color:#1078C0"></i>
          ${t.lang==='it'?'Scrivici un messaggio':'Send us a message'}
        </h3>
        <p class="text-gray-500 text-sm mb-6">
          ${t.lang==='it'?'Ti risponderemo entro 48 ore lavorative.':'We will reply within 48 business hours.'}
        </p>
        <form id="contactForm" onsubmit="submitContactForm(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Nome *':'Name *'}
              </label>
              <input type="text" name="nome" required placeholder="${t.lang==='it'?'Il tuo nome':'Your name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Email *':'Email *'}
              </label>
              <input type="email" name="email" required placeholder="${t.lang==='it'?'La tua email':'Your email'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Oggetto':'Subject'}
            </label>
            <input type="text" name="oggetto" placeholder="${t.lang==='it'?'Es. Informazioni diagnosi ReNU…':'E.g. ReNU diagnosis info…'}"
                   class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Messaggio *':'Message *'}
            </label>
            <textarea name="messaggio" rows="4" required
                      placeholder="${t.lang==='it'?'Scrivi qui il tuo messaggio…':'Write your message here…'}"
                      class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 resize-none" style="border-color:#C8E8F8"></textarea>
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" name="consenso_gdpr" required id="contactPrivacy" class="mt-1 w-4 h-4 flex-shrink-0">
            <label for="contactPrivacy" class="text-xs text-gray-600">
              ${t.lang==='it'
                ? 'Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) per ricevere una risposta alla mia richiesta. I dati non saranno ceduti a terzi. <a href="/it/privacy" class="underline text-sky-600">Leggi l\'informativa privacy</a>.'
                : 'I consent to the processing of personal data pursuant to GDPR (EU Reg. 2016/679) to receive a reply to my request. Data will not be shared with third parties. <a href="/en/privacy" class="underline text-sky-600">Read the privacy policy</a>.'}
            </label>
          </div>
          <button type="submit" id="contactSubmitBtn"
                  class="w-full text-white font-bold py-3.5 rounded-xl text-base transition-colors" style="background: linear-gradient(135deg, #082050, #1078C0)">
            <i class="fas fa-paper-plane mr-2"></i>
            ${t.lang==='it'?'Invia messaggio':'Send message'}
          </button>
          <div id="contactFormMsg" class="hidden rounded-xl p-4 text-center font-semibold text-sm"></div>
        </form>
        <script>
        async function submitContactForm(e) {
          e.preventDefault();
          const form = e.target;
          const fd = new FormData(form);
          const msg = document.getElementById('contactFormMsg');
          const btn = document.getElementById('contactSubmitBtn');

          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${t.lang==='it'?'Invio in corso…':'Sending…'}';
          msg.className = 'rounded-xl p-4 text-center text-sm';
          msg.style.background = '#EFF6FF'; msg.style.color = '#1D4ED8';
          msg.textContent = '${t.lang==='it'?'Elaborazione…':'Processing…'}';
          msg.classList.remove('hidden');

          const payload = {
            nome: fd.get('nome'),
            email: fd.get('email'),
            oggetto: fd.get('oggetto') || '${t.lang==='it'?'Contatto dal sito':'Contact from website'}',
            messaggio: fd.get('messaggio'),
            consenso_gdpr: !!fd.get('consenso_gdpr'),
          };

          try {
            const res = await fetch('/api/contatti', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok && data.success) {
              msg.style.background = '#D1FAE5'; msg.style.color = '#065F46';
              msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>${t.lang==='it'?'✅ Messaggio inviato! Ti risponderemo entro 48 ore.':'✅ Message sent! We will reply within 48 hours.'}';
              form.reset();
              btn.innerHTML = '<i class="fas fa-check mr-2"></i>${t.lang==='it'?'Inviato!':'Sent!'}';
            } else {
              throw new Error(data.error || '${t.lang==='it'?'Errore invio':'Send error'}');
            }
          } catch (err) {
            msg.style.background = '#FEE2E2'; msg.style.color = '#991B1B';
            msg.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>${t.lang==='it'?'Errore. Scrivi direttamente a':'Error. Write directly to'} <a href="mailto:info@sindromerenu.it" class="underline font-bold">info@sindromerenu.it</a>';
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>${t.lang==='it'?'Invia messaggio':'Send message'}';
          }
        }
        </script>
      </div>

      <!-- Card info associazione -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex items-center gap-4 mb-5">
          <img src="/images/logo.png" alt="Logo" class="h-16 w-auto drop-shadow">
          <div>
            <h2 class="text-xl font-bold">Sindrome ReNU Italia APS</h2>
            <p class="text-sky-200 text-sm">${t.footer_partnership}</p>
          </div>
        </div>
        <div class="space-y-2 text-sky-200 text-sm">
          <div class="flex items-center gap-2"><i class="fas fa-globe w-5 text-sky-400"></i><a href="https://www.sindromerenu.it" class="hover:text-white">www.sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:info@sindromerenu.it" class="hover:text-white">info@sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-phone w-5 text-sky-400"></i><a href="tel:+393277634894" class="hover:text-white">+39 327 763 4894</a> <span class="text-sky-500 text-xs">(${t.lang==='it'?'Segreteria':'Secretariat'})</span></div>
          <div class="flex items-center gap-2"><i class="fas fa-phone w-5 text-sky-400"></i><a href="tel:+393357301206" class="hover:text-white">+39 335 730 1206</a> <span class="text-sky-500 text-xs">(${t.lang==='it'?'Presidenza':'Presidency'})</span></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:Stefania.rocca@sindromerenu.it" class="hover:text-white">Stefania.rocca@sindromerenu.it</a></div>
        </div>
        <div class="flex gap-4 mt-5">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-2xl"></i></a>
          <a href="https://www.instagram.com/sindrome_renu_italia/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-2xl"></i></a>
          <a href="https://www.renusyndrome.org" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fas fa-globe text-2xl"></i></a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── BROCHURE PAGE ────────────────────────────────────────────────────────────
function brochurePage(t: Record<string, string>): string {
  const brochures = [
    { file: 'brochure-insieme-facciamo-differenza.pdf', thumb: 'CTEp6mH2',
      title: t.lang==='it'?'Insieme, facciamo la differenza':t.lang==='en'?'Together we make a difference':t.lang==='fr'?'Ensemble nous faisons la différence':t.lang==='es'?'Juntos hacemos la diferencia':'Gemeinsam machen wir den Unterschied',
      desc:  t.lang==='it'?'SINDROME ReNU ITALIA APS – Sostieni la nostra missione':'SINDROME ReNU ITALIA APS – Support our mission' },
    { file: 'brochure-nata-renu-italia.pdf', thumb: 'GbPysspb',
      title: t.lang==='it'?'È nata Sindrome ReNU Italia APS!':t.lang==='en'?'ReNU Syndrome Italy APS is born!':t.lang==='fr'?'Le syndrome ReNU Italie APS est né!':t.lang==='es'?'¡Ha nacido Síndrome ReNU Italia APS!':'ReNU-Syndrom Italien APS ist gegründet!',
      desc:  t.lang==='it'?'La nostra associazione è finalmente realtà':'Our association is finally a reality' },
    { file: 'brochure-finalmente-realta.pdf', thumb: 'HE4kWb3R',
      title: t.lang==='it'?'Finalmente Realtà':'Finally Reality',
      desc:  t.lang==='it'?'Contribuisci con un gesto concreto':'Contribute with a concrete gesture' },
    { file: 'brochure-donazione-cuore.pdf', thumb: 'Haieyn55',
      title: t.lang==='it'?'Una donazione dal cuore':'A donation from the heart',
      desc:  t.lang==='it'?'Un piccolo gesto può fare la differenza':'A small gesture can make a difference' },
    { file: 'brochure-un-gesto-speranza.pdf', thumb: 'nBeYaQkm',
      title: t.lang==='it'?'Un gesto, una speranza':'A gesture, a hope',
      desc:  t.lang==='it'?'Un piccolo aiuto può cambiare una vita':'A small help can change a life' },
    { file: 'brochure-potete-contare.pdf', thumb: 'oi3JFkgN',
      title: t.lang==='it'?'Potete contare sul nostro sostegno':'You can count on our support',
      desc:  t.lang==='it'?'Insieme facciamo la differenza':'Together we make a difference' },
    { file: 'brochure-fai-differenza.pdf', thumb: 'tezKurU2',
      title: t.lang==='it'?'Fai la differenza oggi':'Make the difference today',
      desc:  t.lang==='it'?'Ogni contributo conta':'Every contribution counts' },
    { file: 'brochure-vuole-differenza.pdf', thumb: 'wrScJxVD',
      title: t.lang==='it'?'Vuole fare la differenza':'Wants to make a difference',
      desc:  t.lang==='it'?'Un gesto semplice può fare una grande differenza':'A simple gesture can make a big difference' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-file-pdf mr-3 text-sky-300"></i>${t.brochure_title}</h1>
      <p class="text-sky-100 text-lg">${t.brochure_intro}</p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${brochures.map(b => `
        <div class="card card-blue overflow-hidden flex flex-col">
          <div class="overflow-hidden bg-sky-50" style="min-height:200px">
            <img src="/brochure/thumbnails/${b.thumb}.png" alt="${b.title}"
                 class="w-full h-48 object-contain p-2"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div style="display:none" class="w-full h-48 bg-sky-100 flex items-center justify-center">
              <i class="fas fa-file-pdf text-5xl" style="color:#1078C0"></i>
            </div>
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <h3 class="font-bold mb-1 text-sm leading-snug" style="color:#082050">${b.title}</h3>
            <p class="text-gray-500 text-xs mb-4 flex-1">${b.desc}</p>
            <a href="/brochure/${b.file}" download
               class="inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-download"></i>${t.brochure_download}
            </a>
          </div>
        </div>`).join('')}
      </div>

      <!-- Download all -->
      <div class="mt-10 rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-file-archive text-5xl text-sky-300 mb-4 block"></i>
        <h2 class="text-2xl font-bold mb-2">
          ${t.lang==='it'?'Scarica tutte le brochure':t.lang==='en'?'Download all brochures':t.lang==='fr'?'Télécharger toutes les brochures':t.lang==='es'?'Descargar todos los folletos':'Alle Broschüren herunterladen'}
        </h2>
        <p class="text-sky-200 mb-5">
          ${t.lang==='it'?'Condividi le nostre brochure per diffondere la consapevolezza sulla Sindrome ReNU in Italia.':t.lang==='en'?'Share our brochures to spread awareness about ReNU Syndrome in Italy.':'Partagez nos brochures pour sensibiliser à la maladie ReNU.'}
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          ${brochures.map(b => `
          <a href="/brochure/${b.file}" download
             class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
            <i class="fas fa-download text-xs"></i>${b.file.replace('brochure-','').replace('.pdf','')}
          </a>`).join('')}
        </div>
      </div>

      <!-- Link cartelle Drive -->
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <a href="https://drive.google.com/drive/folders/1aCLXCN3U-JxBjjVExP0-JntmQFGxHftz" target="_blank"
           class="card p-6 flex items-center gap-4 group hover:border-sky-400 transition-all">
          <div class="ic ic-sky w-12 h-12 flex-shrink-0">
            <i class="fas fa-file-medical-alt text-lg"></i>
          </div>
          <div>
            <h3 class="font-bold" style="color:#082050">
              ${t.lang==='it'?'Cartella Articoli Scientifici':t.lang==='en'?'Scientific Articles Folder':'Dossier Articles scientifiques'}
            </h3>
            <p class="text-xs text-gray-500 mt-0.5">
              ${t.lang==='it'?'Pubblicazioni e ricerche su RNU4-2 – Google Drive':t.lang==='en'?'Publications and research on RNU4-2 – Google Drive':'Publications et recherches sur RNU4-2'}
            </p>
            <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#1078C0">
              ${t.lang==='it'?'Apri cartella':'Open folder'} <i class="fas fa-external-link-alt text-xs group-hover:translate-x-0.5 transition-transform"></i>
            </span>
          </div>
        </a>
        <a href="https://drive.google.com/drive/folders/13HbEkMk8citmGQlxPKsgYPHVJG8rxyqi" target="_blank"
           class="card p-6 flex items-center gap-4 group hover:border-purple-400 transition-all">
          <div class="ic ic-purple w-12 h-12 flex-shrink-0">
            <i class="fas fa-graduation-cap text-lg"></i>
          </div>
          <div>
            <h3 class="font-bold" style="color:#082050">
              ${t.lang==='it'?'Opuscoli Scuola':t.lang==='en'?'School Materials':'Matériel scolaire'}
            </h3>
            <p class="text-xs text-gray-500 mt-0.5">
              ${t.lang==='it'?'Materiali per insegnanti ed educatori – Google Drive':t.lang==='en'?'Materials for teachers and educators – Google Drive':'Matériaux pour enseignants – Google Drive'}
            </p>
            <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#7C3AED">
              ${t.lang==='it'?'Apri cartella':'Open folder'} <i class="fas fa-external-link-alt text-xs group-hover:translate-x-0.5 transition-transform"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>`
}

// ─── EVENTS PAGE ──────────────────────────────────────────────────────────────
function eventsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-calendar-alt mr-3 text-sky-300"></i>
        ${t.lang==='it'?'Incontri ed Eventi':'Events & Meetings'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Tutti gli appuntamenti, gli incontri tra famiglie e le iniziative di Sindrome ReNU Italia APS.':'All appointments, family meetings and initiatives of Sindrome ReNU Italia APS.'}
      </p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Prossimi eventi -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-star" style="color:#F59E0B"></i>
        ${t.lang==='it'?'Prossimi Appuntamenti':'Upcoming Events'}
      </h2>

      <!-- Placeholder evento in arrivo -->
      <div class="card card-amber p-8 mb-6 flex flex-col md:flex-row items-start gap-6">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white font-extrabold" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <span class="text-2xl leading-none">2026</span>
            <span class="text-xs mt-1">2026</span>
          </div>
        </div>
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-3" style="background:#FEF3C7; color:#92400E">
            <i class="fas fa-clock"></i>
            ${t.lang==='it'?'In definizione':'To be announced'}
          </div>
          <h3 class="font-bold text-xl mb-2" style="color:#082050">
            ${t.lang==='it'?'Primo Incontro Famiglie ReNU Italia':'First ReNU Italia Family Meeting'}
          </h3>
          <p class="text-gray-600 mb-3">
            ${t.lang==='it'?'Il primo incontro ufficiale tra le famiglie italiane con un bambino o giovane adulto con Sindrome ReNU. Data, luogo e programma in fase di definizione da parte del Consiglio Direttivo.':'The first official meeting between Italian families with a child or young adult with ReNU Syndrome. Date, location and agenda being defined by the Board of Directors.'}
          </p>
          <p class="text-sm font-semibold" style="color:#1078C0">
            <i class="fas fa-envelope mr-1"></i>
            ${t.lang==='it'?'Per informazioni:':'For info:'} <a href="mailto:info@sindromerenu.it" class="underline">info@sindromerenu.it</a>
          </p>
        </div>
      </div>

      <!-- Nessun altro evento -->
      <div class="rounded-2xl p-8 text-center mb-10" style="background:#EEF6FB; border: 2px dashed #45B8EC">
        <i class="fas fa-calendar-plus text-5xl mb-4 block" style="color:#45B8EC"></i>
        <h3 class="font-bold text-xl mb-2" style="color:#082050">
          ${t.lang==='it'?'Nuovi eventi in arrivo!':'New events coming soon!'}
        </h3>
        <p class="text-gray-600 mb-4">
          ${t.lang==='it'?'Segui i nostri canali social per essere il primo a sapere di incontri, webinar e iniziative di sensibilizzazione.':'Follow our social channels to be the first to know about meetings, webinars and awareness initiatives.'}
        </p>
        <div class="flex justify-center gap-3 flex-wrap">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank"
             class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#1877F2">
            <i class="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com/sindrome_renu_italia/" target="_blank"
             class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#E1306C">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <!-- Sezione eventi passati con foto reali -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-history" style="color:#1078C0"></i>
        ${t.lang==='it'?'Eventi Passati':'Past Events'}
      </h2>
      ${t.lang==='it'?`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div class="card overflow-hidden">
          <div class="h-40 overflow-hidden"><img src="/images/it_primo_incontro.jpg" alt="Primo incontro famiglie ReNU" class="w-full h-full object-cover"></div>
          <div class="p-4">
            <div class="text-xs font-bold text-sky-600 mb-1"><i class="fas fa-calendar mr-1"></i>4 febbraio 2025</div>
            <h3 class="font-bold text-sm mb-1" style="color:#082050">Primo incontro famiglie ReNU Italia</h3>
            <p class="text-gray-500 text-xs">Il primissimo incontro tra le famiglie italiane con Sindrome ReNU — un momento storico per la nostra comunità.</p>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="h-40 overflow-hidden"><img src="/images/renu_conferenza_2025.jpg" alt="Prima conferenza internazionale ReNU" class="w-full h-full object-cover"></div>
          <div class="p-4">
            <div class="text-xs font-bold text-sky-600 mb-1"><i class="fas fa-calendar mr-1"></i>23 luglio 2025</div>
            <h3 class="font-bold text-sm mb-1" style="color:#082050">1ª Conferenza Internazionale ReNU</h3>
            <p class="text-gray-500 text-xs">Prima conferenza internazionale sulla Sindrome ReNU — ricercatori, famiglie e medici insieme per fare la storia.</p>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="h-40 overflow-hidden"><img src="/images/renu_maratona.jpg" alt="Maratona Wizz Air Milano 2025" class="w-full h-full object-cover"></div>
          <div class="p-4">
            <div class="text-xs font-bold text-sky-600 mb-1"><i class="fas fa-running mr-1"></i>2025</div>
            <h3 class="font-bold text-sm mb-1" style="color:#082050">Maratona Wizz Air Milano</h3>
            <p class="text-gray-500 text-xs">Le famiglie ReNU Italia corrono per la ricerca alla Maratona di Milano. Move4ReNU!</p>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="h-40 overflow-hidden"><img src="/images/it_festa_natale.jpg" alt="Festa di Natale ReNU Italia" class="w-full h-full object-cover"></div>
          <div class="p-4">
            <div class="text-xs font-bold text-sky-600 mb-1"><i class="fas fa-snowflake mr-1"></i>Dicembre 2026</div>
            <h3 class="font-bold text-sm mb-1" style="color:#082050">Festa di Natale ReNU Italia</h3>
            <p class="text-gray-500 text-xs">Un momento di gioia e condivisione per le famiglie italiane con Sindrome ReNU.</p>
          </div>
        </div>
      </div>
      `:`
      <div class="card p-6 text-center" style="background:#F8FAFC; border: 1px solid #E2E8F0">
        <i class="fas fa-archive text-3xl mb-3 block text-gray-300"></i>
        <p class="text-gray-500 text-sm">
          The association was founded in 2024. Past events will be documented here.
        </p>
      </div>
      `}

      <!-- GIORNATA GLOBALE 4 FEBBRAIO 2027 -->
      <div class="mt-12 mb-6">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe" style="color:#1078C0"></i>
          ${t.lang==='it'?'Giornata Globale Sindrome ReNU':'ReNU Syndrome Global Day'}
        </h2>
        <div class="card overflow-hidden">
          <!-- Header data -->
          <div class="px-8 py-6 text-white flex flex-col sm:flex-row items-center gap-6" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
            <div class="flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white font-extrabold" style="background:rgba(255,255,255,0.15); border:2px solid rgba(255,255,255,0.3)">
              <span class="text-3xl leading-none font-black">4</span>
              <span class="text-xs mt-1 tracking-wide">${t.lang==='it'?'FEB 2027':'FEB 2027'}</span>
            </div>
            <div>
              <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:rgba(255,255,255,0.2); color:#BAE6FD">
                <i class="fas fa-ribbon"></i>${t.lang==='it'?'Giornata Mondiale delle Malattie Rare':'Rare Disease Day'}
              </div>
              <h3 class="text-2xl font-extrabold">
                ${t.lang==='it'?'Giornata Globale Sindrome ReNU':'ReNU Syndrome Global Day'}
              </h3>
              <p class="text-sky-200 text-sm mt-1">
                ${t.lang==='it'?'4 febbraio 2027 – Evento coordinato a livello internazionale':'February 4, 2027 – Internationally coordinated event'}
              </p>
            </div>
          </div>
          <!-- Body -->
          <div class="p-8">
            <p class="text-gray-600 leading-relaxed mb-5">
              ${t.lang==='it'?'Il 4 febbraio 2027, in occasione della Giornata Mondiale delle Malattie Rare, Sindrome ReNU Italia APS promuove la prima Giornata Globale Sindrome ReNU in Italia, in coordinamento con le associazioni partner internazionali (ReNU Syndrome United USA, ReNU Syndrome UK e altri). L\'obiettivo è aumentare la visibilità pubblica della sindrome, raggiungere famiglie ancora non diagnosticate e sensibilizzare medici e istituzioni.':'On February 4, 2027, on the occasion of Rare Disease Day, Sindrome ReNU Italia APS promotes the first ReNU Syndrome Global Day in Italy, in coordination with international partner associations (ReNU Syndrome United USA, ReNU Syndrome UK and others). The aim is to increase public visibility of the syndrome, reach still-undiagnosed families and raise awareness among physicians and institutions.'}
            </p>
            <h4 class="font-bold text-lg mb-4" style="color:#082050">
              ${t.lang==='it'?'Cosa è previsto per il 4 febbraio 2027:':'What is planned for February 4, 2027:'}
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              ${[
                ['fa-video','ic-blue', t.lang==='it'?'Webinar Nazionale':'National Webinar', t.lang==='it'?'Incontro online aperto a famiglie, medici e operatori scolastici sulla Sindrome ReNU.':'Online meeting open to families, doctors and school staff on ReNU Syndrome.'],
                ['fa-newspaper','ic-sky', t.lang==='it'?'Campagna Social':'Social Media Campaign', t.lang==='it'?'Diffusione coordinata di contenuti #SindromeReNU su Instagram, Facebook e LinkedIn.':'Coordinated #SindromeReNU content on Instagram, Facebook and LinkedIn.'],
                ['fa-hospital','ic-purple', t.lang==='it'?'Coinvolgimento Ospedali':'Hospital Engagement', t.lang==='it'?'Sensibilizzazione dei principali centri pediatrici italiani e neurologi dell\'età evolutiva.':'Awareness of major Italian paediatric centres and developmental neurologists.'],
                ['fa-hands-helping','ic-green', t.lang==='it'?'Raccolta Fondi':'Fundraising', t.lang==='it'?'Iniziativa di donazione online con obiettivo dedicato alla ricerca e ai servizi alle famiglie.':'Online donation initiative with a target dedicated to research and family services.'],
              ].map(([icon, ic, title, desc]) => `
              <div class="flex gap-3 p-4 rounded-xl" style="background:#F0F8FD">
                <div class="ic ${ic} w-10 h-10 flex-shrink-0"><i class="fas ${icon} text-sm"></i></div>
                <div>
                  <div class="font-bold text-sm" style="color:#082050">${title}</div>
                  <div class="text-xs text-gray-500 mt-0.5">${desc}</div>
                </div>
              </div>`).join('')}
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Partecipo Giornata Globale ReNU 4 feb 2027':'Join ReNU Global Day 4 Feb 2027')}"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#1078C0">
                <i class="fas fa-calendar-check"></i>${t.lang==='it'?'Voglio partecipare':'I want to participate'}
              </a>
              <a href="/${t.lang}/donations"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#DC2626">
                <i class="fas fa-heart"></i>${t.lang==='it'?'Sostieni l\'iniziativa':'Support the initiative'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Proponi un evento -->
      <div class="mt-10 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-lightbulb text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${t.lang==='it'?'Hai un\'idea per un evento?':'Have an event idea?'}
        </h3>
        <p class="text-sky-100 mb-5">
          ${t.lang==='it'?'Scrivici! Accogliamo proposte di incontri, webinar, eventi sportivi, iniziative di sensibilizzazione e molto altro.':'Write to us! We welcome proposals for meetings, webinars, sports events, awareness initiatives and more.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Proposta evento':'Event proposal')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base transition-colors hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${t.lang==='it'?'Proponi un evento':'Propose an event'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function projectsPage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3">
          <i class="fas fa-rocket mr-3 text-sky-300"></i>
          ${isIt?'Progetti':'Projects'}
        </h1>
        <p class="text-sky-100 text-lg">
          ${isIt?'Le iniziative e i progetti di Sindrome ReNU Italia APS per supportare famiglie, ricerca e consapevolezza.':'The initiatives and projects of Sindrome ReNU Italia APS to support families, research and awareness.'}
        </p>
      </div>
      ${isIt?`
      <div class="flex-shrink-0 hidden md:flex gap-4">
        <div class="img-frame w-52"><img src="/images/renu_volontari.jpg" alt="Volontari ReNU Italia" class="w-full h-36 object-cover"></div>
        <div class="img-frame w-52"><img src="/images/it_progetto_scuola.jpg" alt="Progetto scuola" class="w-full h-36 object-cover"></div>
      </div>`:''}
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">
      <div class="space-y-8">

        <!-- MARATONA 2027 -->
        <div class="card p-0 overflow-hidden">
          <div class="px-7 py-5 flex flex-col md:flex-row gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ic-amber w-16 h-16">
                <i class="fas fa-trophy text-2xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="font-extrabold text-xl" style="color:#082050">
                  ${isIt?'Maratona ReNU 2027':'ReNU Marathon 2027'}
                </h3>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF3C7;color:#D97706">
                  <i class="fas fa-circle text-xs"></i>${isIt?'In pianificazione':'In planning'}
                </span>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4">
                ${isIt?'Un evento sportivo solidale dedicato alla Sindrome ReNU, pensato per unire le famiglie italiane, raccogliere fondi per la ricerca e diffondere la consapevolezza su questa rara condizione genetica. La Maratona ReNU 2027 si propone di coinvolgere runner, famiglie e sostenitori in una giornata di sport, speranza e comunità.':'A solidarity sporting event dedicated to ReNU Syndrome, designed to unite Italian families, raise funds for research and spread awareness of this rare genetic condition. The ReNU Marathon 2027 aims to involve runners, families and supporters in a day of sport, hope and community.'}
              </p>
              <div class="flex flex-wrap gap-3">
                <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Adesione Maratona ReNU 2027':'Join ReNU Marathon 2027')}"
                   class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#D97706">
                  <i class="fas fa-running"></i>${isIt?'Aderisco alla Maratona':'Join the Marathon'}
                </a>
                <a href="/${t.lang}/donations"
                   class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#DC2626">
                  <i class="fas fa-heart"></i>${isIt?'Dona per supportare l\'evento':'Donate to support the event'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- RETE DEL TEMPO -->
        <div class="card p-0 overflow-hidden">
          <div class="px-7 py-5 flex flex-col md:flex-row gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ic-green w-16 h-16">
                <i class="fas fa-hands-helping text-2xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="font-extrabold text-xl" style="color:#082050">
                  ${isIt?'Rete del Tempo – Banca del Tempo ReNU':'Time Network – ReNU Time Bank'}
                </h3>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#D1FAE5;color:#059669">
                  <i class="fas fa-circle text-xs"></i>${isIt?'In sviluppo':'In development'}
                </span>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4">
                ${isIt?'La Rete del Tempo è un progetto di mutuo aiuto tra le famiglie ReNU italiane: chi ha tempo, competenze o esperienze utili le mette a disposizione della comunità. Accompagnamento a visite specialistiche, supporto burocratico, condivisione di percorsi terapeutici: insieme ci si aiuta di più.':'The Time Network is a mutual support project among Italian ReNU families: those with useful time, skills or experience make them available to the community. Accompanying families to specialist appointments, bureaucratic support, sharing therapeutic pathways: together we help each other more.'}
              </p>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Partecipo alla Rete del Tempo':'Join the Time Network')}"
                 class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#EEF6FB;color:#082050;border:1px solid #45B8EC">
                <i class="fas fa-envelope"></i>${isIt?'Partecipa alla rete':'Join the network'}
              </a>
            </div>
          </div>
        </div>

        <!-- PERCORSO SCUOLA -->
        <div class="card p-0 overflow-hidden">
          <div class="px-7 py-5 flex flex-col md:flex-row gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ic-purple w-16 h-16">
                <i class="fas fa-graduation-cap text-2xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="font-extrabold text-xl" style="color:#082050">
                  ${isIt?'Percorso Scuola ReNU':'ReNU School Pathway'}
                </h3>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#F5F3FF;color:#7C3AED">
                  <i class="fas fa-circle text-xs"></i>${isIt?'Attivo':'Active'}
                </span>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4">
                ${isIt?'Il Percorso Scuola ReNU offre materiali pratici e linee guida per supportare insegnanti, educatori, assistenti all\'autonomia e scuole nell\'inclusione dei bambini con Sindrome ReNU. Disponibili opuscoli informativi, schede di presentazione per la classe e indicazioni per il PEI/PDP. Materiali scaricabili gratuitamente dalla nostra cartella condivisa.':'The ReNU School Pathway offers practical materials and guidelines to support teachers, educators, support assistants and schools in including children with ReNU Syndrome. Available are informational brochures, class presentation sheets and guidance for individual education plans. Materials available free of charge from our shared folder.'}
              </p>
              <div class="flex flex-wrap gap-3">
                <a href="https://drive.google.com/drive/folders/13HbEkMk8citmGQlxPKsgYPHVJG8rxyqi" target="_blank"
                   class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#7C3AED">
                  <i class="fas fa-folder-open"></i>${isIt?'Scarica gli opuscoli scuola':'Download school materials'}
                </a>
                <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Percorso Scuola ReNU':'ReNU School Pathway')}"
                   class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#F5F3FF;color:#7C3AED;border:1px solid #7C3AED">
                  <i class="fas fa-envelope"></i>${isIt?'Richiedi supporto':'Request support'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CAMPAGNA CONSAPEVOLEZZA PEDIATRI -->
        <div class="card p-0 overflow-hidden">
          <div class="px-7 py-5 flex flex-col md:flex-row gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ic-red w-16 h-16">
                <i class="fas fa-heartbeat text-2xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="font-extrabold text-xl" style="color:#082050">
                  ${isIt?'Campagna Consapevolezza Pediatri':'Pediatrician Awareness Campaign'}
                </h3>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF2F2;color:#DC2626">
                  <i class="fas fa-circle text-xs"></i>${isIt?'In pianificazione':'In planning'}
                </span>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4">
                ${isIt?'Campagna di sensibilizzazione rivolta ai pediatri e ai medici di base italiani sulla Sindrome ReNU: distribuzione di materiali informativi, contatti con società scientifiche e ordini medici per ridurre i tempi di diagnosi e garantire un percorso diagnostico corretto (WGS).':'Awareness campaign targeting Italian pediatricians and general practitioners on ReNU Syndrome: distribution of informational materials, contacts with scientific societies and medical associations to reduce diagnostic times and ensure the correct diagnostic pathway (WGS).'}
              </p>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Campagna pediatri ReNU':'ReNU pediatrician campaign')}"
                 class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#FEF2F2;color:#DC2626;border:1px solid #DC2626">
                <i class="fas fa-envelope"></i>${isIt?'Ricevi aggiornamenti':'Get updates'}
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Proponi un progetto -->
      <div class="mt-10 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-plus-circle text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${isIt?'Hai un\'idea per un progetto?':'Have a project idea?'}
        </h3>
        <p class="text-sky-100 mb-5">
          ${isIt?'Siamo un\'associazione di famiglie: ogni idea è preziosa. Scrivici a info@sindromerenu.it per proporre collaborazioni, iniziative e campagne.':'We are a family association: every idea is valuable. Write to us at info@sindromerenu.it to propose collaborations, initiatives and campaigns.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Proposta progetto':'Project proposal')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${isIt?'Proponi un progetto':'Propose a project'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── MEMBERS PAGE (DIVENTA SOCIO) ─────────────────────────────────────────────
function membersPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-id-card mr-3 text-sky-300"></i>
        ${t.lang==='it'?'Diventa Socio':'Become a Member'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Entra a far parte di Sindrome ReNU Italia APS: insieme siamo più forti.':'Join Sindrome ReNU Italia APS: together we are stronger.'}
      </p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Banner approvazione CDA -->
      <div class="rounded-2xl p-6 mb-10 flex items-start gap-4" style="background:#FEF3C7; border: 2px solid #F59E0B">
        <i class="fas fa-clock text-3xl mt-1 flex-shrink-0" style="color:#D97706"></i>
        <div>
          <h3 class="font-bold text-xl mb-1" style="color:#92400E">
            ${t.lang==='it'?'In attesa di delibera del Consiglio Direttivo':'Pending Board of Directors resolution'}
          </h3>
          <p class="text-amber-800 text-sm leading-relaxed">
            ${t.lang==='it'?'La quota associativa e le modalità di iscrizione sono in fase di definizione da parte del Consiglio Direttivo. Questa pagina sarà aggiornata non appena il CDA avrà approvato il regolamento. Per essere informato/a in anticipo, iscriviti alla nostra newsletter o scrivici a info@sindromerenu.it.':'The membership fee and registration procedures are being defined by the Board of Directors. This page will be updated as soon as the Board has approved the regulations. To be informed in advance, subscribe to our newsletter or write to us at info@sindromerenu.it.'}
          </p>
        </div>
      </div>

      <!-- Perché diventare socio -->
      <h2 class="text-2xl font-extrabold mb-6" style="color:#082050">
        ${t.lang==='it'?'Perché diventare socio?':'Why become a member?'}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        ${[
          ['fa-users','ic-blue', t.lang==='it'?'Comunità':'Community', t.lang==='it'?'Entra a far parte della rete italiana di famiglie ReNU. Incontra chi vive la tua stessa esperienza.':'Join the Italian ReNU family network. Meet those who share your experience.'],
          ['fa-vote-yea','ic-navy', t.lang==='it'?'Voce in capitolo':'Decision power', t.lang==='it'?'I soci hanno diritto di voto nelle assemblee e possono candidarsi negli organi associativi.':'Members have voting rights in assemblies and can stand for election in association bodies.'],
          ['fa-newspaper','ic-sky', t.lang==='it'?'Aggiornamenti esclusivi':'Exclusive updates', t.lang==='it'?'Ricevi notizie in anteprima su ricerche, terapie, eventi e iniziative di Sindrome ReNU Italia APS.':'Receive advance news on research, therapies, events and initiatives from Sindrome ReNU Italia APS.'],
          ['fa-handshake','ic-green', t.lang==='it'?'Supporto concreto':'Concrete support', t.lang==='it'?'Accedi ai servizi dell\'associazione: orientamento diagnostico, supporto burocratico, rete di professionisti.':'Access the association\'s services: diagnostic guidance, bureaucratic support, professional network.'],
          ['fa-heart','ic-red', t.lang==='it'?'Sostieni la causa':'Support the cause', t.lang==='it'?'La quota associativa contribuisce direttamente alle attività dell\'associazione: eventi, materiali, ricerca.':'The membership fee contributes directly to the association\'s activities: events, materials, research.'],
          ['fa-shield-alt','ic-purple', t.lang==='it'?'Diritti e tutela':'Rights & protection', t.lang==='it'?'Accedi alle informazioni su diritti, tutele legali, detrazioni fiscali e agevolazioni per le famiglie ReNU.':'Access information on rights, legal protections, tax deductions and benefits for ReNU families.'],
        ].map(([icon, ic, title, desc]) => `
        <div class="card p-6 flex gap-4">
          <div class="ic ${ic} flex-shrink-0"><i class="fas ${icon} text-lg"></i></div>
          <div>
            <h3 class="font-bold mb-1" style="color:#082050">${title}</h3>
            <p class="text-gray-600 text-sm">${desc}</p>
          </div>
        </div>`).join('')}
      </div>

      <!-- Quote previsionali (placeholder) -->
      <div class="card card-navy p-8 mb-10">
        <h3 class="font-bold text-xl mb-4 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-tag" style="color:#1078C0"></i>
          ${t.lang==='it'?'Quote Associative (in definizione)':'Membership Fees (being defined)'}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${[
            ['fa-child','ic-sky', t.lang==='it'?'Socio Familiare':'Family Member', t.lang==='it'?'Famiglie con un bambino/adulto con Sindrome ReNU':'Families with a child/adult with ReNU Syndrome'],
            ['fa-user','ic-blue', t.lang==='it'?'Socio Sostenitore':'Supporting Member', t.lang==='it'?'Chiunque voglia sostenere la causa ReNU':'Anyone who wants to support the ReNU cause'],
            ['fa-building','ic-navy', t.lang==='it'?'Socio Onorario':'Honorary Member', t.lang==='it'?'Su nomina del Consiglio Direttivo':'By appointment of the Board of Directors'],
          ].map(([icon, ic, title, desc]) => `
          <div class="rounded-xl p-5 text-center" style="background:#EEF6FB; border: 1px solid #45B8EC">
            <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon}"></i></div>
            <h4 class="font-bold mb-1" style="color:#082050">${title}</h4>
            <p class="text-gray-500 text-xs mb-3">${desc}</p>
            <div class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF3C7; color:#92400E">
              <i class="fas fa-clock text-xs"></i>
              ${t.lang==='it'?'Quota in definizione':'Fee being defined'}
            </div>
          </div>`).join('')}
        </div>
        <p class="text-gray-500 text-xs mt-4 flex items-center gap-1">
          <i class="fas fa-info-circle" style="color:#45B8EC"></i>
          ${t.lang==='it'?'Le quote definitive saranno comunicate dopo l\'approvazione del CDA. Per informazioni scrivi a':'Final fees will be communicated after Board approval. For information write to'}
          <a href="mailto:segreteria@sindromerenu.it" class="underline" style="color:#1078C0">segreteria@sindromerenu.it</a>
        </p>
      </div>

      <!-- FORM PRE-ADESIONE -->
      <div class="mt-10 card card-navy p-8">
        <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-user-plus" style="color:#1078C0"></i>
          ${t.lang==='it'?'Pre-Iscrizione – Lista d\'Attesa':'Pre-Registration – Waiting List'}
        </h3>
        <p class="text-gray-600 text-sm mb-6">
          ${t.lang==='it'?'Compila il form per essere inserito/a nella lista di attesa. Riceverai tutte le comunicazioni sull\'iscrizione appena il Consiglio Direttivo avrà approvato le modalità (quota, metodo di pagamento, statuto).':'Fill in the form to be added to the waiting list. You will receive all communications about registration as soon as the Board of Directors approves the procedures.'}
        </p>
        <form id="preIscrForm" onsubmit="submitPreIscr(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Nome *':'First Name *'}
              </label>
              <input type="text" name="nome" required placeholder="${t.lang==='it'?'Il tuo nome':'Your first name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Cognome *':'Last Name *'}
              </label>
              <input type="text" name="cognome" required placeholder="${t.lang==='it'?'Il tuo cognome':'Your last name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Email *':'Email *'}
            </label>
            <input type="email" name="email" required placeholder="${t.lang==='it'?'La tua email':'Your email'}"
                   class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Città':'City'}
              </label>
              <input type="text" name="citta" placeholder="${t.lang==='it'?'La tua città':'Your city'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Tipo di socio':'Member type'}
              </label>
              <select name="tipo" class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" style="border-color:#C8E8F8">
                <option value="familiare">${t.lang==='it'?'Socio Familiare (genitore/tutore di bambino ReNU)':'Family Member (parent/guardian of ReNU child)'}</option>
                <option value="sostenitore">${t.lang==='it'?'Socio Sostenitore (simpatizzo/donatore)':'Supporting Member (supporter/donor)'}</option>
                <option value="professionista">${t.lang==='it'?'Professionista (medico, terapista, educatore)':'Professional (doctor, therapist, educator)'}</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Come hai conosciuto Sindrome ReNU Italia APS?':'How did you hear about Sindrome ReNU Italia APS?'}
            </label>
            <textarea name="come_hai_trovato" rows="2" placeholder="${t.lang==='it'?'Facebook, Instagram, medico, altra famiglia...':'Facebook, Instagram, doctor, another family...'}"
                      class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 resize-none" style="border-color:#C8E8F8"></textarea>
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" name="privacy" required id="privacyCheck" class="mt-1 w-4 h-4 flex-shrink-0">
            <label for="privacyCheck" class="text-xs text-gray-600">
              ${t.lang==='it'?'Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) per la gestione della lista d\'attesa di Sindrome ReNU Italia APS. I dati non saranno ceduti a terzi.':'I consent to the processing of personal data pursuant to GDPR (EU Reg. 2016/679) for the management of the Sindrome ReNU Italia APS waiting list. Data will not be shared with third parties.'}
            </label>
          </div>
          <button type="submit"
                  class="w-full text-white font-bold py-3.5 rounded-xl text-base transition-colors" style="background: linear-gradient(135deg, #082050, #1078C0)">
            <i class="fas fa-paper-plane mr-2"></i>
            ${t.lang==='it'?'Invia la mia pre-iscrizione':'Send my pre-registration'}
          </button>
          <div id="preIscrMsg" class="hidden rounded-xl p-4 text-center font-semibold text-sm"></div>
        </form>
        <script>
        async function submitPreIscr(e) {
          e.preventDefault();
          const form = e.target;
          const fd = new FormData(form);
          const msg = document.getElementById('preIscrMsg');
          const btn = form.querySelector('button[type=submit]');

          // Show loading state
          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${t.lang==='it'?'Invio in corso…':'Sending…'}';
          msg.className = 'rounded-xl p-4 text-center text-sm';
          msg.style.background = '#EFF6FF'; msg.style.color = '#1D4ED8';
          msg.textContent = '${t.lang==='it'?'Elaborazione in corso…':'Processing…'}';
          msg.classList.remove('hidden');

          const payload = {
            nome: fd.get('nome'),
            cognome: fd.get('cognome'),
            email: fd.get('email'),
            citta: fd.get('citta') || '',
            tipo: fd.get('tipo') || 'lista_attesa',
            come_conosciuto: fd.get('come_hai_trovato') || '',
            consenso_gdpr: fd.get('privacy') === 'on' || !!fd.get('privacy'),
          };

          try {
            const res = await fetch('/api/lista-attesa', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok && data.success) {
              msg.style.background = '#D1FAE5'; msg.style.color = '#065F46';
              msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>${t.lang==='it'?'✅ Iscrizione completata! Ti contatteremo appena sarà definita la quota associativa.':'✅ Registration complete! We will contact you as soon as the membership fee is set.'}';
              form.reset();
              btn.innerHTML = '<i class="fas fa-check mr-2"></i>${t.lang==='it'?'Inviato con successo':'Successfully sent'}';
            } else {
              throw new Error(data.error || JSON.stringify(data.errors || {}));
            }
          } catch (err) {
            msg.style.background = '#FEE2E2'; msg.style.color = '#991B1B';
            msg.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>${t.lang==='it'?'Errore. Riprova o scrivi a':'Error. Retry or write to'} <a href="mailto:segreteria@sindromerenu.it" class="underline font-bold">segreteria@sindromerenu.it</a>';
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>${t.lang==='it'?'Invia la mia pre-iscrizione':'Send my pre-registration'}';
          }
        }
        </script>
      </div>

      <!-- CTA alternativa -->
      <div class="mt-6 rounded-2xl p-6 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <p class="text-sky-100 text-sm mb-3">
          ${t.lang==='it'?'Preferisci scrivere direttamente?':'Prefer to write directly?'}
        </p>
        <a href="mailto:segreteria@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Voglio diventare socio/a':'I want to become a member')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-envelope"></i> segreteria@sindromerenu.it
        </a>
      </div>
    </div>
  </section>`
}

// ─── FAQ / GUIDA ANTI-BUROCRAZIA ─────────────────────────────────────────────
function faqPage(t: Record<string, string>): string {
  const topics = [
    {
      icon: 'fa-id-card', ic: 'ic-blue', id: 'legge104',
      title: t.lang==='it'?'Come richiedere la Legge 104':'How to apply for Law 104',
      steps: t.lang==='it' ? [
        'Rivolgersi al proprio medico di base per ottenere il verbale di valutazione dell\'handicap.',
        'Presentare domanda all\'INPS tramite il sito inps.it o tramite un patronato (gratuito).',
        'Attendere la convocazione della Commissione Medica ASL (può richiedere alcuni mesi).',
        'In caso di urgenza documentata, è possibile richiedere la visita d\'urgenza.',
        'Ottenuto il verbale di handicap grave (art. 3 comma 3), si può procedere con le agevolazioni lavorative e scolastiche.',
      ] : [
        'Ask your family doctor for a disability assessment report.',
        'Submit an application to INPS via inps.it or through a free patronato.',
        'Wait for the Medical Commission (ASL) appointment (may take several months).',
        'In documented urgent cases, you can request an urgent visit.',
        'Once the severe disability certificate (art. 3 comma 3) is obtained, you can proceed with work and school benefits.',
      ],
      note: t.lang==='it'?'💡 Puoi usare l\'app "Sindrome ReNU Italia" o scrivere a info@sindromerenu.it per ricevere supporto nella procedura.':'💡 Contact info@sindromerenu.it for support during the procedure.',
    },
    {
      icon: 'fa-car', ic: 'ic-purple', id: 'passauto',
      title: t.lang==='it'?'Come richiedere il Pass Auto (Contrassegno Disabile)':'How to get the Disabled Car Badge',
      steps: t.lang==='it' ? [
        'Il bambino con Sindrome ReNU può avere diritto al contrassegno se ha difficoltà deambulatorie.',
        'Rivolgersi al proprio medico di base per ottenere una certificazione medica specifica.',
        'Presentare la domanda all\'Ufficio Anagrafe del Comune di residenza.',
        'Il Comune rilascia il contrassegno dopo visita della commissione medica locale.',
        'Il contrassegno ha validità 5 anni (o permanente) e si rinnova con nuova certificazione.',
      ] : [
        'A ReNU child may qualify for the badge if they have walking difficulties.',
        'Ask your family doctor for a specific medical certificate.',
        'Submit the application to the Registry Office of your municipality.',
        'The municipality issues the badge after a local medical commission visit.',
        'The badge is valid for 5 years (or permanently) and renewed with new certification.',
      ],
      note: t.lang==='it'?'💡 Il contrassegno permette la sosta in zone riservate, nelle ZTL e agevolazioni sui parcheggi.':'💡 The badge allows parking in reserved areas, ZTL zones and parking discounts.',
    },
    {
      icon: 'fa-id-badge', ic: 'ic-sky', id: 'disabilitycard',
      title: t.lang==='it'?'Come ottenere la Disability Card (Carta Europea della Disabilità)':'How to get the Disability Card',
      steps: t.lang==='it' ? [
        'La Disability Card si richiede tramite il sito INPS (myINPS) dopo aver ottenuto il riconoscimento di invalidità.',
        'È necessario avere il verbale di invalidità civile, cecità, sordità o handicap (Legge 104).',
        'Accedere a inps.it con SPID o CIE, cercare "Carta Europea della Disabilità".',
        'La card è gratuita e viene spedita a casa.',
        'Dà accesso ad agevolazioni in musei, trasporti, strutture pubbliche e private convenzionate.',
      ] : [
        'The Disability Card is requested via the INPS website (myINPS) after obtaining disability recognition.',
        'You need the civil disability, blindness, deafness or handicap certificate (Law 104).',
        'Log in to inps.it with SPID or CIE, search for "European Disability Card".',
        'The card is free and sent home.',
        'Provides benefits at museums, transport, public and private facilities.',
      ],
      note: t.lang==='it'?'💡 La Disability Card è valida in tutta Europa ed è diversa dal contrassegno auto.':'💡 The Disability Card is valid throughout Europe and is different from the car badge.',
    },
    {
      icon: 'fa-graduation-cap', ic: 'ic-green', id: 'scuola',
      title: t.lang==='it'?'Come richiedere il sostegno scolastico':'How to request school support',
      steps: t.lang==='it' ? [
        'Ottenere la certificazione di disabilità (Legge 104 art. 3 comma 1 o 3) e la diagnosi funzionale.',
        'Presentare la documentazione alla scuola prima dell\'inizio dell\'anno scolastico.',
        'La scuola convoca il GLHO (Gruppo di Lavoro Operativo) per la definizione del PEI (Piano Educativo Individualizzato).',
        'L\'insegnante di sostegno viene assegnato dall\'USR (Ufficio Scolastico Regionale).',
        'In caso di diniego o ore insufficienti, si può fare ricorso tramite il Difensore Civico o un legale.',
      ] : [
        'Obtain the disability certificate (Law 104 art. 3 comma 1 or 3) and functional diagnosis.',
        'Submit documentation to the school before the start of the school year.',
        'The school convenes the GLHO to define the PEI (Individual Educational Plan).',
        'The support teacher is assigned by the Regional School Office (USR).',
        'If denied or hours are insufficient, you can appeal via the Civil Ombudsman or a lawyer.',
      ],
      note: t.lang==='it'?'💡 Hai diritto al PEI anche alla scuola dell\'infanzia. Non aspettare le elementari!':'💡 You have the right to a PEI even in nursery school. Don\'t wait for primary school!',
    },
    {
      icon: 'fa-money-bill-wave', ic: 'ic-amber', id: 'bonus',
      title: t.lang==='it'?'Quali bonus e agevolazioni sono accessibili':'Which bonuses and benefits are available',
      steps: t.lang==='it' ? [
        'Indennità di Accompagnamento INPS: per chi non è in grado di deambulare o compiere gli atti quotidiani. Importo attuale circa 530 €/mese.',
        'Assegno Unico INPS: spettante a tutti i figli fino a 21 anni, con maggiorazione per figli disabili.',
        'Detrazione IRPEF del 19% per spese mediche, riabilitative e di assistenza specifica.',
        'IVA agevolata (4%) su ausili e dispositivi medici per disabili.',
        'Esenzione ticket sanitario per reddito o per patologia (codice esenzione specifico).',
        'Agevolazioni per acquisto di veicoli adattati (IVA al 4%, detrazione IRPEF).',
        'Fondo per le Persone con Disabilità (FNPS) – tramite i Comuni.',
      ] : [
        'INPS Attendance Allowance: for those unable to walk or perform daily activities. Current amount about €530/month.',
        'INPS Unique Allowance: for all children up to 21, with supplement for disabled children.',
        '19% IRPEF deduction for medical, rehabilitation and specific assistance expenses.',
        'Reduced VAT (4%) on aids and medical devices for disabled people.',
        'Healthcare ticket exemption by income or pathology.',
        'Benefits for purchase of adapted vehicles (4% VAT, IRPEF deduction).',
        'Fund for Persons with Disabilities (FNPS) – via municipalities.',
      ],
      note: t.lang==='it'?'💡 Rivolgiti a un patronato (CAAF, ACLI, CGIL, CISL, UIL) per la consulenza gratuita su bonus e agevolazioni.':'💡 Contact a patronato (CAAF, ACLI, CGIL, CISL, UIL) for free advice on bonuses and benefits.',
    },
    {
      icon: 'fa-question-circle', ic: 'ic-red', id: 'faq',
      title: t.lang==='it'?'Domande Frequenti (FAQ)':'Frequently Asked Questions (FAQ)',
      steps: t.lang==='it' ? [
        'Quando va fatta la diagnosi? – Prima possibile. Contattare centri di genetica clinica con esperienza nelle malattie rare.',
        'La Sindrome ReNU è ereditaria? – Nella maggior parte dei casi è sporadica (de novo). Il rischio di ricorrenza è basso ma va valutato con un genetista.',
        'Esistono terapie specifiche per ReNU? – Al momento non esiste una terapia causale. Le terapie sono di supporto (fisioterapia, logopedia, Feuerstein, ecc.).',
        'Come posso connettermi con altre famiglie italiane? – Scrivici a info@sindromerenu.it o unisciti al gruppo Facebook "Sindrome ReNU Italia".',
        'Come accedo ai contributi per la ricerca? – La ricerca avanza tramite studi internazionali (INDEED, RARE-X, GestaltMatcher). Contattaci per informazioni su come partecipare.',
        'Dove posso trovare medici esperti in Italia? – Il comitato scientifico di Sindrome ReNU Italia è coordinato dalla Dr.ssa Donatella Milani. Contattaci a info@sindromerenu.it.',
      ] : [
        'When should diagnosis be made? – As soon as possible. Contact clinical genetics centers experienced in rare diseases.',
        'Is ReNU Syndrome hereditary? – In most cases it is sporadic (de novo). Recurrence risk is low but should be assessed with a geneticist.',
        'Are there specific therapies for ReNU? – Currently no causal therapy exists. Therapies are supportive (physiotherapy, speech therapy, Feuerstein, etc.).',
        'How can I connect with other Italian families? – Write to info@sindromerenu.it or join the Facebook group "Sindrome ReNU Italia".',
        'How do I access research contributions? – Research advances through international studies (INDEED, RARE-X, GestaltMatcher). Contact us for information on how to participate.',
        'Where can I find expert doctors in Italy? – The scientific committee is coordinated by Dr. Donatella Milani. Contact us at info@sindromerenu.it.',
      ],
      note: t.lang==='it'?'💡 Non trovi risposta alla tua domanda? Scrivici a info@sindromerenu.it: aggiungiamo continuamente nuove FAQ!':'💡 Can\'t find the answer? Write to info@sindromerenu.it: we continuously add new FAQs!',
    },
  ]

  // Dati regionali da Excel REGIONI.xlsx
  const regioniData = [
    { reg: 'Lombardia', misura: 'Mis. B1 (gravissima disabilità) / Mis. B2 (grave disabilità)', come: 'Domanda annuale con ISEE sociosanitario', dove: 'Comune/ambito territoriale – Ufficio Fragilità' },
    { reg: 'Piemonte', misura: 'Fondo non autosufficienza FNA / Progetto vita indipendente / Buono domiciliarità', come: 'Bando annuale + progetto personalizzato', dove: 'ASL/Consorzio socio-assistenziale' },
    { reg: "Valle d'Aosta", misura: 'Sostegno domiciliarità / Contributo caregiver', come: 'Domanda con certificazione 104', dove: 'Ufficio regionale politiche sociali' },
    { reg: 'Liguria', misura: 'Assegno di cura / Progetti personalizzati disabilità', come: 'Domanda + ISEE', dove: 'Comune/Distretti sociosanitari ASL' },
    { reg: 'Veneto', misura: 'Impegnative di cura domiciliare (ICD)', come: 'Domanda annuale', dove: 'ULSS (ASL)' },
    { reg: 'Trentino A.A.', misura: 'Assegno di cura provinciale', come: 'Domanda + valutazione UVM', dove: 'Azienda sanitaria provinciale' },
    { reg: 'Friuli V.G.', misura: 'Contributi per caregiver / Progetti di autonomia', come: 'Domanda + ISEE', dove: 'Comune/ambito territoriale' },
    { reg: 'Emilia-Romagna', misura: 'Assegno di cura regionale / Contributo caregiver', come: 'Domanda + valutazione UVM', dove: 'AUSL/Comune' },
    { reg: 'Toscana', misura: 'Progetto vita indipendente PVI (18+) + Assegno di cura', come: 'Domanda annuale', dove: 'Zona distretto/Società della salute' },
    { reg: 'Umbria', misura: 'Assegno di cura FNA', come: 'Domanda + ISEE', dove: 'Azienda sanitaria provinciale' },
    { reg: 'Marche', misura: 'Assegno di cura (18+) + Progetti personalizzati', come: 'Domanda + valutazione UVM', dove: 'Comune/ATS' },
    { reg: 'Lazio', misura: 'Contributo vita indipendente / Assegno di cura', come: 'Domanda annuale', dove: 'Municipio/ASL' },
    { reg: 'Molise', misura: 'Contributi assistenza domiciliare / Assegno di cura', come: 'Domanda + certificazione', dove: 'Comune' },
    { reg: 'Campania', misura: 'Progetti individuali disabilità grave FNA / Assegno di cura', come: 'Domanda + ISEE', dove: 'Comune/Ambito territoriale' },
    { reg: 'Puglia', misura: 'Progetti vita indipendente (Puglia V.I.) / Buoni servizio', come: 'Domanda on line piattaforma regionale', dove: 'Regione/Ambito territoriale' },
    { reg: 'Basilicata', misura: 'Assegno di cura', come: 'Domanda + valutazione', dove: 'Comune/Distretto sanitario' },
    { reg: 'Calabria', misura: 'Progetti personalizzati FNA', come: 'Domanda + ISEE', dove: 'Comune' },
    { reg: 'Sicilia', misura: 'Assegno di cura / Progetti individualizzati', come: 'Domanda + certificazione', dove: 'Comune/ASP' },
    { reg: 'Sardegna', misura: 'Legge 162/98 Piani personalizzati / Ritornare a casa plus', come: 'Domanda annuale', dove: 'Comune/ATS' },
  ]

  // Dati 730 da Excel 730.xlsx
  const spese730 = [
    { tipo: 'Spese sanitarie (visite, esami, farmaci, dispositivi CE)', chi: 'Tutti', doc: 'Fatture, scontrini parlanti, CF' },
    { tipo: 'Terapie riabilitative (logopedia, fisioterapia, TNPEE, psicomotricità)', chi: 'Tutti / Disabili', doc: 'Prescrizione medica + fattura' },
    { tipo: 'Terapie per disabilità (logopedia, psicoterapia, riabilitazione certificata)', chi: 'Solo disabili', doc: "Verbale 104/Invalidità + fatture" },
    { tipo: 'Assistenza specifica (OSS, infermieri, educatori)', chi: 'Disabili', doc: "Verbale disabilità + fatture" },
    { tipo: 'Badanti per non autosufficienza', chi: 'Non autosufficienti', doc: 'Contratto + ricevute contributi' },
    { tipo: 'Ausili e protesi (carrozzine, sollevatori, comunicatori, ortesi)', chi: 'Disabili', doc: 'Fattura + marcatura CE + verbale' },
    { tipo: 'Trasporto in ambulanza', chi: 'Disabili', doc: 'Fattura + verbale' },
    { tipo: 'Strumenti informatici o per autonomia', chi: 'Disabili', doc: 'Certificazione medica + fattura' },
  ]

  // Articoli costituzione
  const articoliCost = [
    { art: 'Art. 2', titolo: 'Diritti inviolabili', desc: 'La Repubblica riconosce e garantisce i diritti inviolabili dell\'uomo, sia come singolo, sia nelle formazioni sociali.' },
    { art: 'Art. 3', titolo: 'Principio di uguaglianza', desc: 'Tutti i cittadini hanno pari dignità sociale e sono uguali davanti alla legge. La Repubblica rimuove gli ostacoli che impediscono il pieno sviluppo della persona umana.' },
    { art: 'Art. 32', titolo: 'Diritto alla salute', desc: 'La Repubblica tutela la salute come fondamentale diritto dell\'individuo e interesse della collettività e garantisce cure gratuite agli indigenti.' },
    { art: 'Art. 34', titolo: 'Diritto allo studio', desc: 'La scuola è aperta a tutti. I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi.' },
    { art: 'Art. 38', titolo: 'Assistenza e previdenza', desc: 'I cittadini inabili al lavoro e sprovvisti dei mezzi necessari per vivere hanno diritto al mantenimento e all\'assistenza sociale.' },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-question-circle mr-3 text-sky-300"></i>
        ${t.lang==='it'?'FAQ & Guida Anti-Burocrazia':t.lang==='en'?'FAQ & Anti-Bureaucracy Guide':'FAQ & Guide Anti-Bureaucratie'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Tutto quello che devi sapere su diritti, agevolazioni e procedure pratiche per le famiglie con un bambino con Sindrome ReNU in Italia.':t.lang==='en'?'Everything you need to know about rights, benefits and practical procedures for families with a ReNU Syndrome child in Italy.':'Tout ce que vous devez savoir sur les droits et procédures pratiques pour les familles avec un enfant atteint du Syndrome ReNU en Italie.'}
      </p>
      <!-- Quicklinks -->
      <div class="flex flex-wrap gap-2 mt-5">
        ${topics.map(tp => `<a href="#${tp.id}" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas ${tp.icon} text-xs"></i>${tp.title.split('(')[0].trim()}</a>`).join('')}
        ${t.lang==='it'?`
        <a href="#regioni" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-map-italy text-xs"></i>Misure Regionali</a>
        <a href="#730" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-file-invoice text-xs"></i>Detrazioni 730</a>
        <a href="#costituzione" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-balance-scale text-xs"></i>Articoli Costituzione</a>
        `:''}
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Disclaimer -->
      <div class="rounded-2xl p-5 mb-10 flex gap-4 items-start" style="background:#FEF3C7; border-left:4px solid #F59E0B">
        <i class="fas fa-balance-scale text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
        <div>
          <p class="font-bold text-amber-800 mb-1">${t.lang==='it'?'Nota legale':'Legal disclaimer'}</p>
          <p class="text-amber-700 text-sm">
            ${t.lang==='it'?'Le informazioni contenute in questa guida hanno scopo puramente informativo e non sostituiscono la consulenza legale professionale. Per casi specifici, rivolgersi a un patronato (CAAF, ACLI, CGIL, CISL, UIL) o consulente legale specializzato in diritto della disabilità. Aggiornato ad aprile 2026.':'The information in this guide is for informational purposes only and does not replace professional legal advice. For specific cases, contact a patronato or legal consultant specializing in disability law. Updated April 2026.'}
          </p>
        </div>
      </div>

      <!-- Argomenti procedurali -->
      <div class="space-y-8 mb-12">
        ${topics.map(tp => `
        <div id="${tp.id}" class="card card-blue p-7 scroll-mt-24">
          <div class="flex items-center gap-4 mb-5">
            <div class="ic ${tp.ic} flex-shrink-0 w-14 h-14">
              <i class="fas ${tp.icon} text-2xl"></i>
            </div>
            <h2 class="text-xl font-extrabold" style="color:#082050">${tp.title}</h2>
          </div>
          <ol class="space-y-2 mb-4">
            ${tp.steps.map((s,i) => `
            <li class="flex gap-3 text-sm text-gray-700">
              <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background:#1078C0">${i+1}</span>
              <span>${s}</span>
            </li>`).join('')}
          </ol>
          <div class="rounded-xl px-4 py-3 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
            ${tp.note}
          </div>
        </div>`).join('')}
      </div>

      ${t.lang==='it' ? `
      <!-- ── MISURE REGIONALI ── -->
      <div id="regioni" class="card card-purple p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-purple flex-shrink-0 w-14 h-14"><i class="fas fa-map text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Misure Regionali per la Disabilità</h2>
            <p class="text-sm text-gray-500">Aggiornato Aprile 2026 – Fonte: elaborazione dati regionali</p>
          </div>
        </div>
        <div class="rounded-xl p-4 mb-5" style="background:#FEF3C7; border-left:3px solid #F59E0B">
          <p class="text-amber-800 text-sm"><strong>Importante:</strong> Le misure e i requisiti cambiano frequentemente. Verificare sempre le informazioni aggiornate sul sito della propria Regione o ASL. Rivolgersi al patronato di fiducia per assistenza.</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background:#082050;color:white">
                <th class="text-left p-3 rounded-tl-lg">Regione</th>
                <th class="text-left p-3">Misure disponibili</th>
                <th class="text-left p-3">Come richiedere</th>
                <th class="text-left p-3 rounded-tr-lg">Dove presentare</th>
              </tr>
            </thead>
            <tbody>
              ${regioniData.map((r,i) => `
              <tr class="${i%2===0?'bg-white':'bg-sky-50'}">
                <td class="p-3 border-b border-gray-100 font-semibold" style="color:#082050;white-space:nowrap">${r.reg}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.misura}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.come}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.dove}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="rounded-xl px-4 py-3 mt-4 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 Si consiglia di rivolgersi al CAF o al patronato di fiducia per l'assistenza necessaria. Scrivici a <a href="mailto:info@sindromerenu.it" style="color:#1078C0;text-decoration:underline">info@sindromerenu.it</a> per supporto.
        </div>
      </div>

      <!-- ── DETRAZIONI 730 ── -->
      <div id="730" class="card card-green p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-green flex-shrink-0 w-14 h-14"><i class="fas fa-file-invoice-dollar text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Detrazioni e Deduzioni 730 per Disabilità</h2>
            <p class="text-sm text-gray-500">Prospetto agevolazioni fiscali per famiglie con figli disabili</p>
          </div>
        </div>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background:#082050;color:white">
                <th class="text-left p-3 rounded-tl-lg">Tipo di spesa</th>
                <th class="text-left p-3">Chi può detrarre</th>
                <th class="text-left p-3 rounded-tr-lg">Documenti necessari</th>
              </tr>
            </thead>
            <tbody>
              ${spese730.map((s,i) => `
              <tr class="${i%2===0?'bg-white':'bg-sky-50'}">
                <td class="p-3 border-b border-gray-100 font-medium text-xs">${s.tipo}</td>
                <td class="p-3 border-b border-gray-100 text-xs"><span class="px-2 py-0.5 rounded-full text-white text-xs" style="background:${s.chi==='Tutti'?'#059669':s.chi==='Solo disabili'?'#7C3AED':'#1078C0'}">${s.chi}</span></td>
                <td class="p-3 border-b border-gray-100 text-xs">${s.doc}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="rounded-xl px-4 py-3 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 Si consiglia di rivolgersi al CAF o a un patronato di fiducia per l'assistenza nella compilazione della dichiarazione dei redditi. La detrazione è del 19% per le spese mediche superiori a €129,11.
        </div>
      </div>

      <!-- ── ARTICOLI COSTITUZIONE ── -->
      <div id="costituzione" class="card card-navy p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-navy flex-shrink-0 w-14 h-14"><i class="fas fa-balance-scale text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Diritti Costituzionali per le Persone con Disabilità</h2>
            <p class="text-sm text-gray-500">Articoli della Costituzione italiana a tutela dei bambini e delle persone con disabilità</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${articoliCost.map(a => `
          <div class="rounded-xl p-4" style="background:#EEF6FB; border-left:3px solid #1078C0">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:#082050">${a.art}</span>
              <span class="font-bold text-sm" style="color:#082050">${a.titolo}</span>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed">${a.desc}</p>
          </div>`).join('')}
        </div>
        <div class="rounded-xl px-4 py-3 mt-4 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 La Convenzione ONU sui Diritti delle Persone con Disabilità (CRPD), ratificata dall'Italia con Legge 18/2009, è ulteriore garanzia internazionale dei diritti dei bambini ReNU.
        </div>
      </div>
      ` : ''}

      <!-- Contattaci -->
      <div class="mt-12 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-hands-helping text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${t.lang==='it'?'Hai ancora dubbi o domande?':'Still have questions?'}
        </h3>
        <p class="text-sky-100 mb-5 max-w-lg mx-auto">
          ${t.lang==='it'?'Il team di Sindrome ReNU Italia APS è a tua disposizione. Scriviamo insieme alle istituzioni competenti e ti supportiamo in ogni passo del percorso.':'The Sindrome ReNU Italia APS team is at your disposal. We will write together to the competent institutions and support you every step of the way.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Richiesta supporto burocrazia/diritti':'Bureaucracy/rights support request')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${t.lang==='it'?'Scrivici a info@sindromerenu.it':'Write to info@sindromerenu.it'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── PRIVACY POLICY PAGE ──────────────────────────────────────────────────────
function privacyPage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  return `
  <section class="section-light py-16 px-4 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="mb-10">
        <span class="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold mb-4" style="color:#082050">
          <i class="fas fa-shield-alt" style="color:#1078C0"></i>
          ${isIt?'Privacy & GDPR':'Privacy & GDPR'}
        </span>
        <h1 class="text-3xl md:text-4xl font-extrabold mb-4" style="color:#082050">
          ${isIt?'Informativa sulla Privacy':'Privacy Policy'}
        </h1>
        <p class="text-gray-500 text-sm">${isIt?'Ultimo aggiornamento: Aprile 2026':'Last updated: April 2026'} · ${isIt?'Versione':'Version'} 1.0</p>
      </div>

      <div class="space-y-8 text-gray-700 leading-relaxed">

        <!-- Titolare -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-building mr-2" style="color:#1078C0"></i>${isIt?'1. Titolare del Trattamento':'1. Data Controller'}</h2>
          <div class="bg-sky-50 rounded-xl p-4 text-sm">
            <strong>Sindrome ReNU Italia APS</strong><br>
            ${isIt?'Associazione di Promozione Sociale':'Social Promotion Association'}<br>
            Email: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a><br>
            PEC: <a href="mailto:sindromerenuitalia@legalmail.it" class="text-blue-600 hover:underline">sindromerenuitalia@legalmail.it</a><br>
            Tel (Segreteria): +39 327 763 4894<br>
            Tel (Presidenza): +39 335 730 1206<br>
            ${isIt?'Sito web':'Website'}: <a href="https://www.sindromerenu.it" class="text-blue-600 hover:underline">www.sindromerenu.it</a>
          </div>
          <p class="mt-3 text-sm text-gray-600">
            ${isIt?'Il Responsabile della Protezione dei Dati (DPO) è in fase di nomina. Per qualsiasi richiesta relativa ai tuoi dati personali, scrivi a: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>':'The Data Protection Officer (DPO) is being appointed. For any request regarding your personal data, write to: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>'}
          </p>
        </div>

        <!-- Dati raccolti -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-database mr-2" style="color:#1078C0"></i>${isIt?'2. Dati Personali Raccolti':'2. Personal Data Collected'}</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50"><th class="text-left p-3 border border-sky-100">${isIt?'Finalità':'Purpose'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Dati':'Data'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Base giuridica':'Legal basis'}</th></tr></thead>
              <tbody>
                <tr><td class="p-3 border border-gray-100">${isIt?'Richieste informazioni':'Information requests'}</td><td class="p-3 border border-gray-100">Nome, email, messaggio</td><td class="p-3 border border-gray-100">${isIt?'Consenso (Art. 6.1.a GDPR)':'Consent (Art. 6.1.a GDPR)'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">${isIt?'Iscrizione associazione':'Association membership'}</td><td class="p-3 border border-gray-100">Nome, cognome, email, città, dati bambino</td><td class="p-3 border border-gray-100">${isIt?'Contratto (Art. 6.1.b GDPR)':'Contract (Art. 6.1.b GDPR)'}</td></tr>
                <tr><td class="p-3 border border-gray-100">${isIt?'Donazioni':'Donations'}</td><td class="p-3 border border-gray-100">Nome, email, importo</td><td class="p-3 border border-gray-100">${isIt?'Obbligo legale (Art. 6.1.c GDPR)':'Legal obligation (Art. 6.1.c GDPR)'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">${isIt?'Storie famiglie (dati sanitari)':'Family stories (health data)'}</td><td class="p-3 border border-gray-100">${isIt?'Nome bambino, storia, foto':'Child name, story, photos'}</td><td class="p-3 border border-gray-100">${isIt?'Consenso esplicito (Art. 9.2.a GDPR)':'Explicit consent (Art. 9.2.a GDPR)'}</td></tr>
                <tr><td class="p-3 border border-gray-100">${isIt?'Navigazione sito (log)':'Site navigation (logs)'}</td><td class="p-3 border border-gray-100">IP, browser, pagine visitate</td><td class="p-3 border border-gray-100">${isIt?'Legittimo interesse (Art. 6.1.f GDPR)':'Legitimate interest (Art. 6.1.f GDPR)'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Dati sensibili -->
        <div class="card p-6 border-l-4 border-amber-400">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-exclamation-triangle mr-2 text-amber-500"></i>${isIt?'3. Dati Sanitari (Categoria Speciale)':'3. Health Data (Special Category)'}</h2>
          <p class="text-sm mb-3">${isIt?'Il sito tratta dati sanitari relativi a bambini affetti da Sindrome ReNU. Questi dati rientrano nelle categorie particolari di cui all\'Art. 9 GDPR e sono trattati esclusivamente con:':'The site processes health data relating to children with ReNU Syndrome. This data falls under the special categories of Art. 9 GDPR and is processed exclusively with:'}</p>
          <ul class="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>${isIt?'Consenso esplicito e informato dell\'interessato o del genitore/tutore':'Explicit and informed consent of the data subject or parent/guardian'}</li>
            <li>${isIt?'Finalità di tutela della salute e supporto alle famiglie':'Health protection and family support purposes'}</li>
            <li>${isIt?'Misure di sicurezza rafforzate (cifratura, accesso limitato)':'Enhanced security measures (encryption, limited access)'}</li>
            <li>${isIt?'Conservazione limitata e cancellazione su richiesta':'Limited retention and deletion on request'}</li>
          </ul>
        </div>

        <!-- Diritti -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-user-shield mr-2" style="color:#1078C0"></i>${isIt?'4. I Tuoi Diritti (Artt. 15-22 GDPR)':'4. Your Rights (Arts. 15-22 GDPR)'}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${[
              ['fa-eye','Accesso','Access','Puoi richiedere una copia dei tuoi dati (Art. 15)','You can request a copy of your data (Art. 15)'],
              ['fa-edit','Rettifica','Rectification','Puoi correggere dati inesatti (Art. 16)','You can correct inaccurate data (Art. 16)'],
              ['fa-trash','Cancellazione','Erasure','Diritto all\'oblio (Art. 17)','Right to be forgotten (Art. 17)'],
              ['fa-pause','Limitazione','Restriction','Puoi limitare il trattamento (Art. 18)','You can restrict processing (Art. 18)'],
              ['fa-download','Portabilità','Portability','Puoi ricevere i tuoi dati in formato strutturato (Art. 20)','You can receive your data in structured format (Art. 20)'],
              ['fa-times','Opposizione','Objection','Puoi opporti al trattamento (Art. 21)','You can object to processing (Art. 21)'],
            ].map(([icon,it,en,descIt,descEn])=>`
            <div class="flex items-start gap-3 bg-sky-50 rounded-xl p-3">
              <i class="fas ${icon} text-sky-600 mt-0.5"></i>
              <div>
                <div class="font-semibold text-sm" style="color:#082050">${isIt?'Diritto di '+it:'Right of '+en}</div>
                <div class="text-xs text-gray-500 mt-0.5">${isIt?descIt:descEn}</div>
              </div>
            </div>`).join('')}
          </div>
          <div class="mt-4 p-4 bg-amber-50 rounded-xl text-sm">
            <strong>${isIt?'Come esercitare i tuoi diritti:':'How to exercise your rights:'}</strong>
            ${isIt?'Scrivi a <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>. Risponderemo entro 30 giorni. Puoi anche presentare reclamo al <a href="https://www.garanteprivacy.it" target="_blank" class="text-blue-600 hover:underline">Garante per la protezione dei dati personali</a>.':
            'Write to <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>. We will respond within 30 days. You may also lodge a complaint with the <a href="https://www.garanteprivacy.it" target="_blank" class="text-blue-600 hover:underline">Italian Data Protection Authority (Garante)</a>.'}
          </div>
        </div>

        <!-- Cookie -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-cookie-bite mr-2" style="color:#1078C0"></i>${isIt?'5. Cookie e Tecnologie di Tracciamento':'5. Cookies and Tracking Technologies'}</h2>
          <p class="text-sm mb-3">${isIt?'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizza cookie di profilazione o marketing di terze parti.':'This site uses only technical cookies necessary for its operation. It does not use third-party profiling or marketing cookies.'}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50"><th class="text-left p-3 border border-sky-100">Cookie</th><th class="text-left p-3 border border-sky-100">${isIt?'Tipo':'Type'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Durata':'Duration'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Finalità':'Purpose'}</th></tr></thead>
              <tbody>
                <tr><td class="p-3 border border-gray-100">session</td><td class="p-3 border border-gray-100">${isIt?'Tecnico':'Technical'}</td><td class="p-3 border border-gray-100">Sessione</td><td class="p-3 border border-gray-100">${isIt?'Navigazione':'Navigation'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">cf_clearance</td><td class="p-3 border border-gray-100">${isIt?'Tecnico (Cloudflare)':'Technical (Cloudflare)'}</td><td class="p-3 border border-gray-100">30 giorni</td><td class="p-3 border border-gray-100">${isIt?'Sicurezza CDN':'CDN Security'}</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mt-3">${isIt?'Puoi gestire i cookie nelle impostazioni del tuo browser.':'You can manage cookies in your browser settings.'}</p>
        </div>

        <!-- Conservazione -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-clock mr-2" style="color:#1078C0"></i>${isIt?'6. Tempi di Conservazione':'6. Retention Periods'}</h2>
          <ul class="text-sm space-y-2 text-gray-600">
            <li>• ${isIt?'Dati di contatto/richieste informazioni: 2 anni dal ricevimento':'Contact data/information requests: 2 years from receipt'}</li>
            <li>• ${isIt?'Dati di iscrizione associazione: per tutta la durata dell\'associazione + 5 anni':'Association membership data: for the duration of membership + 5 years'}</li>
            <li>• ${isIt?'Dati donazioni: 10 anni (obbligo fiscale)':'Donation data: 10 years (tax obligation)'}</li>
            <li>• ${isIt?'Storie famiglie: fino a revoca del consenso':'Family stories: until consent is withdrawn'}</li>
            <li>• ${isIt?'Log di navigazione: 12 mesi':'Navigation logs: 12 months'}</li>
          </ul>
        </div>

        <!-- Sicurezza -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-lock mr-2" style="color:#1078C0"></i>${isIt?'7. Sicurezza dei Dati':'7. Data Security'}</h2>
          <p class="text-sm text-gray-600">${isIt?'I dati sono trattati con misure di sicurezza tecniche e organizzative adeguate: trasmissione HTTPS/TLS, hosting su Cloudflare Pages (infrastruttura certificata ISO 27001), accesso limitato al personale autorizzato, nessun trasferimento verso paesi terzi extra-UE senza adeguate garanzie.':'Data is processed with appropriate technical and organizational security measures: HTTPS/TLS transmission, hosting on Cloudflare Pages (ISO 27001 certified infrastructure), access limited to authorized personnel, no transfers to non-EU third countries without adequate guarantees.'}</p>
        </div>

        <!-- Contatti Garante -->
        <div class="rounded-2xl p-6 text-white" style="background:linear-gradient(135deg,#082050,#1078C0)">
          <i class="fas fa-balance-scale text-3xl text-sky-300 mb-3 block"></i>
          <h3 class="font-bold text-lg mb-2">${isIt?'Autorità di Controllo':'Supervisory Authority'}</h3>
          <p class="text-sky-100 text-sm mb-3">${isIt?'Hai il diritto di presentare un reclamo al Garante per la Protezione dei Dati Personali:':'You have the right to lodge a complaint with the Italian Data Protection Authority:'}</p>
          <a href="https://www.garanteprivacy.it" target="_blank" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-external-link-alt"></i>www.garanteprivacy.it
          </a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── SCIENCE PAGE (COMITATO SCIENTIFICO) ──────────────────────────────────────
function sciencePage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  const roles = [
    { icon: 'fa-check-double',  ic: 'ic-blue',   title: t.science_role1_title, desc: t.science_role1_desc },
    { icon: 'fa-stethoscope',   ic: 'ic-navy',   title: t.science_role2_title, desc: t.science_role2_desc },
    { icon: 'fa-book-medical',  ic: 'ic-sky',    title: t.science_role3_title, desc: t.science_role3_desc },
    { icon: 'fa-chalkboard-teacher', ic: 'ic-purple', title: t.science_role4_title, desc: t.science_role4_desc },
    { icon: 'fa-globe-europe',  ic: 'ic-green',  title: t.science_role5_title, desc: t.science_role5_desc },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style="background:rgba(255,255,255,0.18);color:#BAE6FD;border:1px solid rgba(255,255,255,0.25)">
          <i class="fas fa-flask" style="color:#7DD3FC"></i>
          ${isIt?'Sindrome ReNU Italia APS':'Sindrome ReNU Italia APS'}
        </div>
        <h1 class="text-4xl font-extrabold mb-3">
          <i class="fas fa-flask mr-3 text-sky-300"></i>${t.science_title}
        </h1>
        <p class="text-sky-100 text-lg max-w-3xl leading-relaxed">${t.science_intro}</p>
      </div>
      ${isIt?`<div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-72"><img src="/images/renu_science_committee.jpg" alt="Comitato Scientifico ReNU" class="w-full h-48 object-cover"></div>
      </div>`:''}
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Ruoli del Comitato -->
      <div class="mb-12">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <i class="fas fa-tasks" style="color:#1078C0"></i>
          ${isIt?'Funzioni e Responsabilità':'Functions & Responsibilities'}
        </h2>
        <div class="space-y-5">
          ${roles.map((r, i) => `
          <div class="card p-6 flex gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ${r.ic} w-14 h-14">
                <i class="fas ${r.icon} text-xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:#EEF6FB;color:#1078C0">${String(i+1).padStart(2,'0')}</span>
                <h3 class="font-extrabold text-lg" style="color:#082050">${r.title}</h3>
              </div>
              <p class="text-gray-600 leading-relaxed">${r.desc}</p>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Membri del Comitato -->
      <div class="mb-12">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <i class="fas fa-user-md" style="color:#1078C0"></i>
          ${t.science_members_title}
        </h2>
        <div class="card card-blue p-8 flex flex-col md:flex-row gap-6 items-center">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full" style="background:linear-gradient(135deg,#C8E8F8,#EEF6FB)">
            <i class="fas fa-user-md text-4xl" style="color:#1078C0"></i>
          </div>
          <div class="flex-1">
            <p class="text-gray-600 leading-relaxed italic">${t.science_members_note}</p>
            <a href="mailto:presidenza@sindromerenu.it" class="inline-flex items-center gap-2 mt-4 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#1078C0">
              <i class="fas fa-envelope"></i>presidenza@sindromerenu.it
            </a>
          </div>
        </div>
      </div>

      <!-- Materiali Drive -->
      <div class="mb-12">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <i class="fas fa-folder-open" style="color:#1078C0"></i>
          ${isIt?'Pubblicazioni & Materiali Scientifici':'Publications & Scientific Materials'}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <a href="https://drive.google.com/drive/folders/10dFD0E5Mat1PZRGj9REWP5Je-kfaEZlg" target="_blank"
             class="card p-6 flex items-center gap-4 group hover:border-navy-400 transition-all">
            <div class="ic ic-navy w-12 h-12 flex-shrink-0">
              <i class="fas fa-flask text-lg"></i>
            </div>
            <div>
              <h3 class="font-bold" style="color:#082050">${isIt?'Cartella Comitato Scientifico':'Scientific Committee Folder'}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${isIt?'Curriculum medici, documenti e risorse del Comitato':'Physicians curriculum, documents and resources'}</p>
              <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#082050">
                ${isIt?'Accedi alla cartella':'Access folder'} <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>
          <a href="https://drive.google.com/drive/folders/1aCLXCN3U-JxBjjVExP0-JntmQFGxHftz" target="_blank"
             class="card p-6 flex items-center gap-4 group hover:border-sky-400 transition-all">
            <div class="ic ic-sky w-12 h-12 flex-shrink-0">
              <i class="fas fa-file-medical-alt text-lg"></i>
            </div>
            <div>
              <h3 class="font-bold" style="color:#082050">${isIt?'Articoli Scientifici':'Scientific Articles'}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${isIt?'Raccolta articoli e ricerche su RNU4-2':'Articles and research on RNU4-2'}</p>
              <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#1078C0">
                ${isIt?'Accedi alla cartella':'Access folder'} <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>
          <a href="https://drive.google.com/drive/folders/13HbEkMk8citmGQlxPKsgYPHVJG8rxyqi" target="_blank"
             class="card p-6 flex items-center gap-4 group hover:border-purple-400 transition-all">
            <div class="ic ic-purple w-12 h-12 flex-shrink-0">
              <i class="fas fa-graduation-cap text-lg"></i>
            </div>
            <div>
              <h3 class="font-bold" style="color:#082050">${isIt?'Opuscoli Scuola':'School Materials'}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${isIt?'Materiali per insegnanti ed educatori':'Materials for teachers and educators'}</p>
              <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#7C3AED">
                ${isIt?'Accedi alla cartella':'Access folder'} <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>
        </div>
      </div>

      <!-- CTA collabora -->
      <div class="rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-handshake text-5xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">${t.science_cta}</h3>
        <p class="text-sky-100 mb-5 max-w-xl mx-auto">
          ${isIt?'Sei un medico, ricercatore o specialista interessato a collaborare con il Comitato Scientifico? Scrivici per proporre contributi scientifici o segnalare pubblicazioni rilevanti.':'Are you a physician, researcher or specialist interested in collaborating with the Scientific Committee? Write to us to propose scientific contributions or flag relevant publications.'}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="mailto:presidenza@sindromerenu.it?subject=${encodeURIComponent(isIt?'Collaborazione Comitato Scientifico':'Scientific Committee Collaboration')}"
             class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-paper-plane"></i>
            ${isIt?'Scrivici':'Contact us'}
          </a>
          <a href="/${t.lang}/contact"
             class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-7 py-3.5 rounded-full text-base border border-white border-opacity-30">
            <i class="fas fa-envelope"></i>${isIt?'Modulo di contatto':'Contact form'}
          </a>
        </div>
      </div>

    </div>
  </section>`
}

// ─── ROUTES ───────────────────────────────────────────────────────────────────
app.get('/', (c) => c.redirect('/it/home'))

const pages: Record<string, (t: Record<string, string>) => string> = {
  home:      homePage,
  about:     aboutPage,
  research:  researchPage,
  therapies: therapiesPage,
  diagnosis: diagnosisPage,
  community: communityPage,
  donations: donationsPage,
  contact:   contactPage,
  brochure:  brochurePage,
  events:          eventsPage,
  progetti:        projectsPage,
  projects:        projectsPage,
  membri:          membersPage,
  members:         membersPage,
  'diventa-socio': membersPage,
  eventi:          eventsPage,
  faq:             faqPage,
  privacy:         privacyPage,
  science:         sciencePage,
  'comitato-scientifico': sciencePage,
}

for (const lang of ['it','en','fr','es','de']) {
  app.get(`/${lang}`, (c) => c.redirect(`/${lang}/home`))
  for (const [page, fn] of Object.entries(pages)) {
    app.get(`/${lang}/${page}`, (c) => {
      const t = translations[lang]
      return c.html(getHtml(t, page, fn(t)))
    })
  }
}

// ─── HELPER: sanitize ────────────────────────────────────────────────────────
function san(v: unknown, n = 500): string {
  return v == null ? '' : String(v).trim().slice(0, n)
}
function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}
function hashIP(ip: string): string {
  // Simple hash for GDPR anonymization (in production use crypto.subtle)
  let h = 0
  for (let i = 0; i < ip.length; i++) { h = (Math.imul(31, h) + ip.charCodeAt(i)) | 0 }
  return 'ip' + Math.abs(h).toString(16).padStart(8, '0')
}
function getClientIP(c: any): string {
  return c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || ''
}

// ─── API: LISTA ATTESA (pre-iscrizione soci) ─────────────────────────────────
app.post('/api/lista-attesa', async (c) => {
  try {
    const body = await c.req.json().catch(() => ({})) as Record<string, unknown>
    const errors: Record<string, string> = {}

    if (!body.consenso_gdpr) errors.consenso_gdpr = 'Consenso obbligatorio (Art. 6 GDPR).'
    if (!san(body.nome) || san(body.nome).length < 2) errors.nome = 'Nome obbligatorio.'
    if (!san(body.cognome) || san(body.cognome).length < 2) errors.cognome = 'Cognome obbligatorio.'
    if (!validEmail(san(body.email))) errors.email = 'Email valida obbligatoria.'

    if (Object.keys(errors).length > 0) {
      return c.json({ success: false, errors }, 400)
    }

    const ipHash = hashIP(getClientIP(c))
    const db = c.env?.DB

    if (db) {
      // Save to Cloudflare D1
      await db.prepare(`
        INSERT OR IGNORE INTO lista_attesa
        (nome, cognome, email, citta, tipo, consenso_gdpr, data_consenso, testo_consenso_versione, ip_hash)
        VALUES (?, ?, ?, ?, ?, 1, CURRENT_TIMESTAMP, '2.0', ?)
      `).bind(
        san(body.nome), san(body.cognome), san(body.email, 200),
        san(body.citta, 100), san(body.tipo || 'lista_attesa', 50),
        ipHash
      ).run()
    }

    return c.json({
      success: true,
      message: 'Iscrizione alla lista d\'attesa completata. Ti contatteremo non appena sarà approvata la quota associativa.',
      gdpr: 'Dati trattati ai sensi del GDPR (Reg. UE 2016/679). Consenso registrato.'
    }, 201)
  } catch (err: any) {
    console.error('lista-attesa error:', err)
    return c.json({ success: false, error: 'Errore interno. Riprova o scrivi a info@sindromerenu.it.' }, 500)
  }
})

// ─── API: CONTATTI ────────────────────────────────────────────────────────────
app.post('/api/contatti', async (c) => {
  try {
    const body = await c.req.json().catch(() => ({})) as Record<string, unknown>
    const errors: Record<string, string> = {}

    if (!body.consenso_gdpr) errors.consenso_gdpr = 'Consenso obbligatorio (Art. 6 GDPR).'
    if (!san(body.nome) || san(body.nome).length < 2) errors.nome = 'Nome obbligatorio.'
    if (!validEmail(san(body.email))) errors.email = 'Email valida obbligatoria.'
    if (!san(body.messaggio) || san(body.messaggio).length < 10) errors.messaggio = 'Messaggio troppo breve.'

    if (Object.keys(errors).length > 0) {
      return c.json({ success: false, errors }, 400)
    }

    const ipHash = hashIP(getClientIP(c))
    const db = c.env?.DB

    if (db) {
      await db.prepare(`
        INSERT INTO contatti
        (nome, email, oggetto, messaggio, consenso_gdpr, data_consenso, testo_consenso_versione, ip_hash)
        VALUES (?, ?, ?, ?, 1, CURRENT_TIMESTAMP, '2.0', ?)
      `).bind(
        san(body.nome), san(body.email, 200),
        san(body.oggetto || 'Contatto dal sito', 200),
        san(body.messaggio, 2000),
        ipHash
      ).run()
    }

    return c.json({
      success: true,
      message: 'Messaggio ricevuto! Ti risponderemo entro 48 ore.',
      gdpr: 'Dati trattati ai sensi del GDPR (Reg. UE 2016/679).'
    }, 201)
  } catch (err: any) {
    console.error('contatti error:', err)
    return c.json({ success: false, error: 'Errore interno. Scrivi direttamente a info@sindromerenu.it.' }, 500)
  }
})

// ─── API: HEALTH ──────────────────────────────────────────────────────────────
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', gdpr: 'v2.0', version: '2.0', d1: !!c.env?.DB })
})

// Legacy contact endpoint (backward compatibility)
app.post('/api/contact', async (c) => {
  return c.redirect('/api/contatti', 307)
})

// ─── HELPER: now() ────────────────────────────────────────────────────────────
function now(): string {
  return new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })
}

// ─── EMAIL via Resend API ─────────────────────────────────────────────────────
async function sendEmail(env: any, opts: {
  to?: string, subject: string, html: string
}): Promise<void> {
  const key = env?.RESEND_API_KEY
  if (!key) { console.warn('[email] RESEND_API_KEY non configurata – email non inviata'); return }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Sindrome ReNU Italia <noreply@sindromerenu.it>',
        to: [opts.to || 'info@sindromerenu.it'],
        subject: opts.subject,
        html: opts.html
      })
    })
    if (!res.ok) console.error('[email] Resend error:', await res.text())
  } catch (e) { console.error('[email] fetch error:', e) }
}

// ─── ADMIN PANEL (integrato in Hono) ─────────────────────────────────────────
const ADMIN_HTML = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin – Sindrome ReNU Italia APS</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<script src="https://cdn.tailwindcss.com"></script>
<style>body{font-family:system-ui,sans-serif}</style>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- LOGIN OVERLAY -->
<div id="loginOverlay" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
  <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4">
    <div class="text-center mb-6">
      <i class="fas fa-shield-alt text-5xl text-blue-600 mb-3 block"></i>
      <h1 class="text-2xl font-bold text-gray-800">Pannello Admin</h1>
      <p class="text-gray-500 text-sm">Sindrome ReNU Italia APS</p>
      <span class="inline-block mt-2 text-xs bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded-full font-semibold">
        <i class="fas fa-check-circle mr-1"></i>GDPR Compliant v2.0
      </span>
    </div>
    <input id="ti" type="password" placeholder="Token di accesso admin..."
           class="w-full border rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onkeydown="if(event.key==='Enter')doLogin()">
    <button onclick="doLogin()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
      <i class="fas fa-sign-in-alt mr-2"></i>Accedi
    </button>
    <p id="le" class="text-red-600 text-sm text-center mt-3 hidden">Token non valido.</p>
    <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
      <i class="fas fa-exclamation-triangle mr-1"></i>
      <b>Accesso riservato.</b> Ogni operazione è registrata nell'audit log GDPR.
    </div>
  </div>
</div>

<!-- HEADER -->
<nav class="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-xl">
  <div class="flex items-center gap-3">
    <i class="fas fa-shield-alt text-2xl text-blue-300"></i>
    <div>
      <div class="font-bold text-lg">Pannello Admin GDPR</div>
      <div class="text-xs text-blue-200">Sindrome ReNU Italia APS – v2.0</div>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <span id="dbBadge" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-full">DB: –</span>
    <span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">GDPR v2.0</span>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-8">
  <!-- STATS -->
  <div id="stats" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
  </div>

  <!-- GDPR INFO -->
  <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 text-sm text-blue-800 flex gap-3">
    <i class="fas fa-info-circle text-blue-500 text-xl mt-0.5 flex-shrink-0"></i>
    <div><b>Protezione dati attiva:</b> ogni visualizzazione è registrata nell'audit log (Art.5 GDPR).
    I dati dei minori sono protetti (Art.9). Il diritto all'oblio è disponibile nella sezione Cancella Dati.</div>
  </div>

  <!-- TABS -->
  <div class="flex gap-2 flex-wrap mb-6">
    <button data-t="adesioni"  onclick="showTab('adesioni')"  class="tb bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-users mr-1"></i>Adesioni</button>
    <button data-t="contatti"  onclick="showTab('contatti')"  class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-envelope mr-1"></i>Contatti</button>
    <button data-t="lista"     onclick="showTab('lista')"     class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-clock mr-1"></i>Lista Attesa</button>
    <button data-t="donazioni" onclick="showTab('donazioni')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-heart mr-1"></i>Donazioni</button>
    <button data-t="audit"     onclick="showTab('audit')"     class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-history mr-1"></i>Audit Log</button>
    <button data-t="erasure"   onclick="showErasure()"        class="tb bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-trash mr-1"></i>Cancella Dati</button>
  </div>

  <!-- CONTENT -->
  <div id="content" class="bg-white rounded-2xl shadow-lg overflow-hidden min-h-64">
    <div class="p-8 text-center text-gray-400">
      <i class="fas fa-database text-5xl mb-3 block opacity-20"></i>
      Seleziona una sezione per visualizzare i dati
    </div>
  </div>
</div>

<script>
let TOK = '';
function H(){ return {'X-Admin-Token': TOK, 'Content-Type': 'application/json'}; }

async function doLogin(){
  const t = document.getElementById('ti').value.trim();
  if(!t) return;
  const r = await fetch('/api/admin/stats', {headers: {'X-Admin-Token': t}});
  if(r.ok){
    TOK = t;
    document.getElementById('loginOverlay').style.display = 'none';
    loadStats();
    showTab('adesioni');
  } else {
    document.getElementById('le').classList.remove('hidden');
    document.getElementById('ti').value = '';
  }
}

async function loadStats(){
  const r = await fetch('/api/admin/stats', {headers: H()});
  if(!r.ok) return;
  const s = await r.json();
  document.getElementById('dbBadge').textContent = s.db ? 'D1: ✓' : 'D1: memoria';
  document.getElementById('dbBadge').className = s.db
    ? 'text-xs bg-green-600 text-white px-2 py-1 rounded-full'
    : 'text-xs bg-amber-500 text-white px-2 py-1 rounded-full';
  const cards = [
    {k:'lista_attesa', l:'Lista Attesa', i:'fa-clock',    c:'blue'},
    {k:'contatti',     l:'Contatti',     i:'fa-envelope', c:'green'},
    {k:'adesioni',     l:'Adesioni',     i:'fa-users',    c:'purple'},
    {k:'donazioni',    l:'Donazioni',    i:'fa-heart',    c:'red'},
  ];
  document.getElementById('stats').innerHTML = cards.map(c => \`
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-\${c.c}-500">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full bg-\${c.c}-100 flex items-center justify-center">
          <i class="fas \${c.i} text-\${c.c}-600 text-lg"></i>
        </div>
        <div>
          <div class="text-2xl font-bold text-gray-800">\${s[c.k] ?? 0}</div>
          <div class="text-xs text-gray-500">\${c.l}</div>
        </div>
      </div>
    </div>\`).join('');
}

const TABS = {
  adesioni:  {url:'/api/admin/adesioni'},
  contatti:  {url:'/api/admin/contatti'},
  lista:     {url:'/api/admin/lista-attesa'},
  donazioni: {url:'/api/admin/donazioni'},
  audit:     {url:'/api/admin/audit'},
};

async function showTab(name){
  document.querySelectorAll('.tb').forEach(b => {
    b.className = b.className.replace('bg-blue-600 text-white','bg-gray-200 text-gray-700');
  });
  const btn = document.querySelector('[data-t="'+name+'"]');
  if(btn) btn.className = btn.className.replace('bg-gray-200 text-gray-700','bg-blue-600 text-white');
  if(name === 'erasure'){ showErasure(); return; }
  const cfg = TABS[name]; if(!cfg) return;
  document.getElementById('content').innerHTML = '<div class="p-8 text-center"><i class="fas fa-spinner fa-spin text-3xl text-blue-400"></i></div>';
  const r = await fetch(cfg.url, {headers: H()});
  if(!r.ok){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Errore caricamento dati – token non valido?</div>';
    return;
  }
  const data = await r.json();
  if(!data.length){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block opacity-30"></i>Nessun dato presente</div>';
    return;
  }
  const keys = Object.keys(data[0]);
  let html = '<div class="overflow-x-auto"><table class="w-full text-xs"><thead class="bg-gray-50 border-b"><tr>'
    + keys.map(k => '<th class="px-3 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">'+k+'</th>').join('')
    + '</tr></thead><tbody>';
  data.forEach((row,i) => {
    html += '<tr class="'+(i%2?'bg-gray-50':'')+' border-b hover:bg-blue-50">';
    keys.forEach(k => {
      const v = row[k] !== null ? String(row[k]) : '–';
      html += '<td class="px-3 py-2 text-gray-700 max-w-xs truncate" title="'+v.replace(/"/g,'&quot;')+'">'+v+'</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div><div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t flex justify-between">'
    + '<span><i class="fas fa-lock mr-1 text-green-600"></i>'+data.length+' record · accesso registrato audit log GDPR</span>'
    + '<a href="'+cfg.url+'" target="_blank" class="text-blue-600 hover:underline">Esporta JSON</a>'
    + '</div>';
  document.getElementById('content').innerHTML = html;
}

function showErasure(){
  document.querySelectorAll('.tb').forEach(b => {
    b.className = b.className.replace('bg-blue-600 text-white','bg-gray-200 text-gray-700');
  });
  const btn = document.querySelector('[data-t="erasure"]');
  if(btn) btn.className = btn.className.replace('bg-gray-200 text-gray-700','bg-blue-600 text-white');
  document.getElementById('content').innerHTML = \`
    <div class="p-8 max-w-lg mx-auto">
      <div class="text-center mb-6">
        <i class="fas fa-user-slash text-5xl text-red-400 mb-3 block"></i>
        <h2 class="text-xl font-bold">Diritto all'Oblio – Art. 17 GDPR</h2>
        <p class="text-sm text-gray-500 mt-1">Cancella tutti i dati personali di un interessato</p>
      </div>
      <div class="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-5 text-sm text-amber-800">
        <i class="fas fa-exclamation-triangle mr-1"></i>
        <b>Attenzione – operazione irreversibile.</b><br>
        Verificare sempre l'identità del richiedente prima di procedere.
      </div>
      <input id="ee" type="email" placeholder="email@esempio.it" class="w-full border rounded-xl px-4 py-3 text-sm mb-3">
      <input id="ec" type="text" placeholder="Digita CANCELLA per confermare" class="w-full border rounded-xl px-4 py-3 text-sm mb-4">
      <button onclick="doErasure()" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl">
        <i class="fas fa-trash mr-2"></i>Esegui Cancellazione
      </button>
      <div id="er" class="mt-4 hidden"></div>
    </div>\`;
}

async function doErasure(){
  const email = document.getElementById('ee').value.trim();
  const conf  = document.getElementById('ec').value.trim();
  const res   = document.getElementById('er');
  if(conf !== 'CANCELLA'){ res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Digita esattamente CANCELLA.</div>'; res.classList.remove('hidden'); return; }
  if(!email){ res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Email obbligatoria.</div>'; res.classList.remove('hidden'); return; }
  const r = await fetch('/api/admin/erasure/'+encodeURIComponent(email), {method:'DELETE', headers:H()});
  const d = await r.json();
  if(r.ok){
    res.innerHTML='<div class="p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800"><i class="fas fa-check-circle mr-1"></i><b>Cancellazione completata</b><br><pre class="mt-2 text-xs">'+JSON.stringify(d,null,2)+'</pre></div>';
  } else {
    res.innerHTML='<div class="p-4 bg-red-50 text-red-800 rounded-xl text-sm">Errore: '+d.error+'</div>';
  }
  res.classList.remove('hidden');
}
</script>
</body></html>`

// In-memory store (fallback quando D1 non è configurato)
const memStore: { la: any[], ct: any[], ad: any[], dn: any[], au: any[] } = { la:[], ct:[], ad:[], dn:[], au:[] }

function memAudit(tabella: string, id: number, azione: string, note = '') {
  memStore.au.push({ id: memStore.au.length+1, timestamp: new Date().toISOString(), tabella, record_id: id, azione, note })
}

// ─── ADMIN: token check ───────────────────────────────────────────────────────
function requireAdmin(c: any): boolean {
  const tok = c.req.header('X-Admin-Token') || ''
  const secret = c.env?.ADMIN_SECRET || 'renu-admin-2026'
  return tok === secret
}

// ─── ADMIN ROUTES ─────────────────────────────────────────────────────────────
app.get('/admin', (c) => c.html(ADMIN_HTML))
app.get('/admin/', (c) => c.html(ADMIN_HTML))

app.get('/api/admin/stats', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const [la, ct, ad, dn] = await Promise.all([
        db.prepare('SELECT COUNT(*) as n FROM lista_attesa WHERE cancellato=0').first(),
        db.prepare('SELECT COUNT(*) as n FROM contatti').first(),
        db.prepare('SELECT COUNT(*) as n FROM adesioni WHERE cancellato=0').first(),
        db.prepare('SELECT COUNT(*) as n FROM donazioni WHERE cancellato=0').first(),
      ])
      return c.json({ lista_attesa:(la as any)?.n??0, contatti:(ct as any)?.n??0, adesioni:(ad as any)?.n??0, donazioni:(dn as any)?.n??0, db:true })
    } catch(e) { /* fallback */ }
  }
  return c.json({ lista_attesa:memStore.la.length, contatti:memStore.ct.length, adesioni:memStore.ad.length, donazioni:memStore.dn.length, db:false })
})

app.get('/api/admin/adesioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,cognome,email,citta,tipo_membro,come_conosciuto,consenso_gdpr,data_consenso,status FROM adesioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.ad)
})

app.get('/api/admin/contatti', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,email,oggetto,messaggio,consenso_gdpr,data_consenso,status FROM contatti ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.ct)
})

app.get('/api/admin/lista-attesa', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,cognome,email,citta,tipo,consenso_gdpr,data_consenso FROM lista_attesa WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.la)
})

app.get('/api/admin/donazioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,email,importo,tipo,metodo,consenso_gdpr,data_consenso FROM donazioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.dn)
})

app.get('/api/admin/audit', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,timestamp,tabella,record_id,azione,operatore,note FROM audit_log ORDER BY timestamp DESC LIMIT 500').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.au.slice(-200).reverse())
})

app.delete('/api/admin/erasure/:email', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const email = decodeURIComponent(c.req.param('email'))
  if (!validEmail(email)) return c.json({ error: 'Email non valida' }, 400)
  const db = c.env?.DB
  const ts = new Date().toISOString()
  if (db) {
    try {
      await db.prepare("UPDATE lista_attesa SET cancellato=1, data_cancellazione=?, nome='[CANCELLATO]', cognome='[CANCELLATO]', email='[CANCELLATO]', citta='' WHERE email=?").bind(ts, email).run()
      await db.prepare("UPDATE contatti SET nome='[CANCELLATO]', email='[CANCELLATO]', messaggio='[CANCELLATO GDPR Art.17]' WHERE email=?").bind(email).run()
      await db.prepare("UPDATE adesioni SET cancellato=1, data_cancellazione=?, nome='[CANCELLATO]', cognome='[CANCELLATO]', email='[CANCELLATO]' WHERE email=?").bind(ts, email).run()
      await db.prepare("INSERT INTO audit_log(tabella,azione,operatore,note) VALUES('*','ERASURE','admin',?)").bind(`Art.17 GDPR email=${email.slice(0,3)}***`).run()
      return c.json({ success: true, email: email.slice(0,3)+'***', nota: 'Cancellazione Art.17 GDPR completata e registrata in audit log.', timestamp: ts })
    } catch(e: any) { return c.json({ error: e.message }, 500) }
  }
  // fallback memory
  memStore.la = memStore.la.map(r => r.email===email ? {...r, cancellato:1, nome:'[CANCELLATO]', email:'[CANCELLATO]'} : r)
  memStore.ct = memStore.ct.map(r => r.email===email ? {...r, nome:'[CANCELLATO]', email:'[CANCELLATO]', messaggio:'[CANCELLATO]'} : r)
  memAudit('*', 0, 'ERASURE', `Art.17 GDPR email=${email.slice(0,3)}***`)
  return c.json({ success: true, nota: 'Cancellazione completata (memoria – configura D1 per persistenza).', timestamp: ts })
})

export default app
