// Build: 2026-08-27-infografica-epilessia
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
    hero_text: 'La sindrome di ReNU è una condizione complessa che coinvolge ogni giorno bambini, ragazzi e famiglie. Questo spazio nasce per offrire informazioni chiare, orientamento concreto e la forza di una comunità che condivide lo stesso percorso.',
    hero_desc: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2. Attualmente sono ~250 i casi accertati nel mondo (16 in Italia). Le varianti patogene si concentrano in soli 13 posizioni degli oltre 3 miliardi di paia di basi del genoma! Siamo qui per supportare le famiglie italiane e offrire un aiuto concreto ai bambini ReNU.',
    nav_home: 'Home', nav_about: 'Cos\'è ReNU', nav_research: 'Approfondimenti',
    nav_therapies: 'Terapie', nav_diagnosis: 'Diagnosi', nav_community: 'Comunità',
    nav_donations: 'Sostienici', nav_contact: 'Contatti', nav_brochure: 'Media & Pubblicazioni',
    nav_events: 'Eventi', nav_projects: 'Progetti', nav_members: 'Diventa Socio', nav_faq: 'FAQ & Diritti',
    nav_science: 'Comitato Scientifico',
    nav_glossary: 'Glossario',
    btn_diagnosis: 'DONA ORA – SOSTIENI LE FAMIGLIE RENU',
    btn_diagnosis_sub: 'Ogni contributo fa la differenza. Grazie.',
    btn_info: 'VUOI MAGGIORI INFORMAZIONI? CLICCA QUI',
    btn_info_sub: 'Contattaci per informazioni sulla Sindrome ReNU',
    section_map_title: 'Mappa Famiglie',
    section_map_desc: 'Aggiungi il tuo familiare con Sindrome ReNU alla mappa mondiale per aumentare la consapevolezza e la forza della comunità.',
    section_awareness_title: 'Aumenta la Consapevolezza',
    section_awareness_desc: 'Diffondi la conoscenza sulla Sindrome ReNU in Italia e aiuta a raggiungere le famiglie ancora non diagnosticate.',
    section_science_title: 'Comitato Scientifico',
    section_science_desc: 'Il Comitato Scientifico garantisce rigore e autorevolezza scientifica. Collabora con famiglie e professionisti per orientamenti pratici.',
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
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, crea un ID di Ricerca Clinica (CRID) su thecrid.org! Condividi il tuo CRID con ogni studio clinico a cui partecipi.',
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
    section_explore: 'Approfondimenti',
    stat_cases_world: 'casi accertati nel mondo',
    stat_cases_italy: 'casi in Italia',
    stat_dna: 'posizioni nel DNA mutate',
    stat_countries: 'paesi con famiglie mappate',
    stat_year: 'anno della scoperta',
    news_title: 'Consapevolezza & Iniziative',
    section_awareness_badge: 'Consapevolezza & Iniziative',
    community_join_btn: 'Unisciti alla comunità',
    gallery_btn: 'Vai alla Gallery',
    map_btn: 'Vedi i Centri di Riferimento',
    stories_nodesc: 'La storia di questo bambino sarà presto condivisa dalla famiglia.',
    privacy_link: 'Privacy Policy',
    mascot_title: 'Tartaruga Reny',
    mascot_desc: 'Reny è la mascotte di ReNU Italia. Puoi scaricare le risorse grafiche per sensibilizzare sui social media.',
    stories_it_title: 'Storie di Famiglie Italiane con ReNU',
    stories_it_desc: '',
    stories_read_full: 'Leggi la storia completa',
    stories_loading: 'Caricamento storie...',
    stories_read: 'Leggi la storia',
    stories_share_cta: 'Vuoi condividere la storia del tuo bambino? Scrivici!',
    stories_share_btn: 'Condividi la tua storia',
    stories_intl_title: 'Storie dalla community internazionale',
    stories_all_btn: 'Tutte le Storie di Famiglie ReNU',
    network_title: 'La Rete Internazionale ReNU',
    network_desc: 'Associazioni nazionali partner in tutto il mondo',
    map_title: 'Centri di Riferimento ReNU nel Mondo',
    map_desc: 'ReNU Syndrome United sta costruendo una rete globale di Centri di Riferimento per collegare le famiglie con team medici multidisciplinari dedicati alla ricerca e al trattamento della Sindrome ReNU. Scopri i centri attivi nel mondo.',
    children_title: 'I nostri bambini e famiglie',
    children_desc: 'Scopri i volti e le storie dei bambini italiani con la Sindrome ReNU e le loro famiglie.',
    research_coming: 'Sezione Ricerca in Preparazione',
    research_coming_desc: 'Stiamo lavorando con il nostro Comitato Scientifico per preparare contenuti accurati e aggiornati sulla ricerca scientifica relativa alla Sindrome ReNU. Questa sezione sarà disponibile presto.',
    pubmed_label: 'Pubblicazioni Scientifiche su PubMed',
    pubmed_title: 'Letteratura Scientifica sulla Sindrome ReNU (RNU4-2)',
    pubmed_loading: 'Caricamento pubblicazioni...',
    pubmed_search: 'Cerca tutte le pubblicazioni su PubMed',
    science_collab_title: 'Vuoi collaborare con il nostro Comitato Scientifico?',
    science_collab_desc: 'Il Comitato Scientifico di Sindrome ReNU Italia è in fase di costituzione. Per collaborazioni scientifiche o per segnalare nuove pubblicazioni, contattaci.',
    therapies_go: 'Vai alla pagina Terapie',
    therapies_rsu: 'Approfondisci su ReNU Syndrome United',
    rights_title: 'Diritti e Tutele – Rete Famiglie Italia',
    rights_desc: 'Avere un figlio con Sindrome ReNU comporta l\'accesso a una serie di diritti, tutele e agevolazioni previsti dalla legislazione italiana. La nostra rete famiglie è qui per aiutarti a navigare il sistema.',
    law104_title: 'Legge 104/92 – Assistenza Disabili',
    law104_desc: 'Permessi lavorativi per genitori (3 giorni/mese), congedi straordinari, agevolazioni fiscali e supporto scolastico. La Sindrome ReNU può dare diritto alla 104 in situazione di gravità (art. 3 comma 3).',
    carpass_title: 'Contrassegno Disabile (Pass Auto)',
    carpass_desc: 'Il contrassegno per parcheggio disabili si richiede al Comune di residenza tramite certificazione medica. Permette la sosta in zone riservate e agevolazioni per la circolazione.',
    school_title: 'Supporto Scolastico (Insegnante di Sostegno)',
    school_desc: 'Il bambino con ReNU ha diritto all\'insegnante di sostegno, al Piano Educativo Individualizzato (PEI) e ad ausili didattici specifici. Richiede certificazione della disabilità e valutazione UMVD.',
    allowance_title: 'Indennità di Accompagnamento e Bonus',
    allowance_desc: 'L\'indennità di accompagnamento INPS è riservata ai disabili totali che non possono deambulare autonomamente. Esistono anche altri bonus: Bonus Bebè, Assegno Unico, agevolazioni ISEE per disabili.',
    discard_title: 'Disability Card (Carta Europea della Disabilità)',
    discard_desc: 'La Disability Card è una tessera europea che certifica la disabilità e dà accesso a agevolazioni in strutture pubbliche, musei, trasporti e servizi. Si richiede tramite INPS.',
    network_it_title: 'Rete Famiglie ReNU Italia',
    network_it_desc: 'Connettiti con le altre famiglie italiane con un bambino ReNU. Condividiamo esperienze, suggerimenti pratici e supporto emotivo. Scrivici a info@sindromerenu.it per essere inserito nella rete!',
    faq_title: 'FAQ & Diritti',
    faq_intro: 'Domande frequenti e informazioni sui diritti delle famiglie ReNU in Italia.',
    join_title: 'Diventa Socio',
    join_intro: 'Unisciti a Sindrome ReNU Italia APS e fai parte della nostra comunità.',
    events_title: 'Incontri ed Eventi',
    events_intro: 'Incontri, conferenze ed eventi di sensibilizzazione sulla Sindrome ReNU.',
    projects_title: 'Progetti',
    projects_intro: 'Iniziative, campagne di sensibilizzazione e progetti dell\'associazione.',
    donate_5x1000: '5x1000',
    donate_5x1000_title: '5x1000 – Donazione senza costi',
    donate_5x1000_desc: 'In fase di dichiarazione dei redditi, indica il nostro codice fiscale nella casella \'Associazioni di promozione sociale\'. Non ti costa nulla ma rappresenta un supporto prezioso per noi.',
    donate_bday_title: 'Compleanno Solidale',
    donate_bday_desc: 'Trasforma il tuo compleanno o quello del tuo bambino in un\'occasione di sostegno alla ricerca sulla Sindrome ReNU.',
    donate_company_title: 'Donazioni Aziendali',
    donate_company_desc: 'La tua azienda può supportare la nostra missione e beneficiare di agevolazioni fiscali. Contattaci per maggiori informazioni.',
    donate_recurring_title: 'Donazione Ricorrente',
    donate_recurring_desc: 'Con una donazione ricorrente mensile o annuale, garantisci un supporto continuo alle attività dell\'associazione e alle famiglie ReNU in Italia.',
    donate_recurring_btn: 'Imposta Donazione Ricorrente',
    donate_intl_label: 'Per donazioni dall\'estero',
    contact_form_name: 'Nome e Cognome',
    contact_form_email: 'Indirizzo email',
    contact_form_subject: 'Oggetto',
    contact_form_message: 'Messaggio',
    contact_form_send: 'Invia messaggio',
    contact_form_sending: 'Invio in corso...',
    contact_form_success: 'Messaggio inviato con successo!',
    contact_form_error: 'Errore nell\'invio. Riprova.',
    privacy_title: 'Privacy Policy',
    cookie_notice: 'Informativa Cookie',
    cookie_text: 'Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Non vengono utilizzati cookie di profilazione o tracciamento.',
    cookie_accept: 'Accetto',
    cookie_necessary: 'Solo tecnici necessari',
    cookie_more: 'Maggiori info',
    gdpr_label: 'Sito conforme GDPR (Reg. UE 2016/679)',
    contact_dpo: 'Contatta il DPO',
    coming_soon: 'Sezione in preparazione',
    search_placeholder: 'Cerca nel sito...',
    search_label: 'Cerca nel sito',
    pubmed_syn: 'Sintesi:',
  },
  en: {
    lang: 'en', langName: 'English',
    title: 'ReNU Syndrome Italy APS',
    subtitle: 'Together, we make a difference',
    tagline: 'A newly identified genetic condition. A globally coordinated research effort.',
    hero_text: 'RNU4-2 Emerges as a Leading Cause of Rare Neurodevelopmental Disorders – <strong>Renewing Hope for Families</strong>',
    hero_desc: 'ReNU syndrome is a spliceosomal disorder with a defined mutational hotspot and growing global dataset. Currently <strong>~250 confirmed cases worldwide</strong> (16 in Italy), though the true number of undiagnosed cases is estimated to be much higher: pathogenic variants are concentrated in just <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> of our 3 billion base-pair genome!',
    nav_home: 'Home', nav_about: 'About ReNU', nav_research: 'Research',
    nav_therapies: 'Therapies', nav_diagnosis: 'Diagnosis', nav_community: 'Community',
    nav_donations: 'Donations', nav_contact: 'Contact', nav_brochure: 'Media & Publications',
    nav_events: 'Events', nav_projects: 'Projects', nav_members: 'Become a Member', nav_faq: 'FAQ & Rights',
    nav_science: 'Scientific Committee',
    nav_glossary: 'Glossary',
    btn_diagnosis: 'WANT MORE INFORMATION? CLICK HERE',
    btn_diagnosis_sub: 'Contact us for information about ReNU Syndrome',
    section_map_title: 'Register Here',
    section_map_desc: 'Strength in numbers! Add a ReNU loved one to the worldwide map to raise awareness.',
    section_awareness_title: 'Raise Awareness',
    section_awareness_desc: 'Spread awareness of ReNU Syndrome and help reach undiagnosed families.',
    section_science_title: 'Scientific Committee',
    section_science_desc: 'The Scientific Committee ensures scientific rigour and authority, collaborating with families and professionals.',
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
    brochure_title: 'Media & Publications',
    brochure_intro: 'Scientific articles, informational materials, guides and documents to deepen knowledge of ReNU Syndrome.',
    brochure_download: 'Open / Download',
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
    section_explore: 'Explore',
    stat_cases_world: 'confirmed cases worldwide',
    stat_cases_italy: 'cases in Italy',
    stat_dna: 'DNA positions mutated',
    stat_countries: 'countries with mapped families',
    stat_year: 'year of discovery',
    news_title: 'Awareness & Initiatives',
    section_awareness_badge: 'Awareness & Initiatives',
    community_join_btn: 'Join the community',
    gallery_btn: 'Visit Gallery',
    map_btn: 'See Reference Centres',
    stories_nodesc: 'This child\'s story will be shared by the family soon.',
    privacy_link: 'Privacy Policy',
    mascot_title: 'Reny the Turtle',
    mascot_desc: 'Reny is the mascot of ReNU Italia. You can download the graphic resources to raise awareness on social media.',
    stories_it_title: 'Stories from ReNU Families',
    stories_it_desc: 'Real stories from around the world, from the ReNU Syndrome United community.',
    stories_read_full: 'Read the full story',
    stories_loading: 'Loading stories...',
    stories_read: 'Read story',
    stories_share_cta: 'Want to share your child\'s story? Write to us!',
    stories_share_btn: 'Share your story',
    stories_intl_title: 'Stories from the international community',
    stories_all_btn: 'All ReNU Family Stories',
    network_title: 'The International ReNU Network',
    network_desc: 'National partner associations worldwide',
    map_title: 'ReNU Reference Centres Worldwide',
    map_desc: 'ReNU Syndrome United is building a global network of Reference Centres to connect families with multidisciplinary medical teams dedicated to research and treatment of ReNU Syndrome. Discover the active centres worldwide.',
    children_title: 'Our children and families',
    children_desc: 'Discover the faces and stories of Italian children with ReNU Syndrome and their families.',
    research_coming: 'Research Section Coming Soon',
    research_coming_desc: 'We are working with our Scientific Committee to prepare accurate and up-to-date content on scientific research related to ReNU Syndrome. This section will be available soon.',
    pubmed_label: 'Scientific Publications on PubMed',
    pubmed_title: 'Scientific Literature on ReNU Syndrome (RNU4-2)',
    pubmed_loading: 'Loading publications...',
    pubmed_search: 'Search all publications on PubMed',
    science_collab_title: 'Want to collaborate with our Scientific Committee?',
    science_collab_desc: 'The Scientific Committee of Sindrome ReNU Italia is being established. For scientific collaborations or to report new publications, contact us.',
    therapies_go: 'Go to Therapies page',
    therapies_rsu: 'Learn more on ReNU Syndrome United',
    rights_title: 'Rights & Protections – Italian Family Network',
    rights_desc: 'Having a child with ReNU Syndrome entitles you to a range of rights, protections and benefits under Italian law. Our family network is here to help you navigate the system.',
    law104_title: 'Law 104/92 – Disability Assistance',
    law104_desc: 'Work leave for parents (3 days/month), extraordinary leave, tax benefits and school support. ReNU Syndrome may qualify for law 104 in serious condition (art. 3 comma 3).',
    carpass_title: 'Disabled Badge (Car Pass)',
    carpass_desc: 'The disabled parking badge is requested at the municipality of residence via medical certification. It allows parking in reserved areas and circulation benefits.',
    school_title: 'School Support (Support Teacher)',
    school_desc: 'A ReNU child has the right to a support teacher, an Individual Educational Plan (PEI) and specific teaching aids. Requires disability certification and UMVD assessment.',
    allowance_title: 'Attendance Allowance & Bonuses',
    allowance_desc: 'INPS attendance allowance is reserved for total disabled people who cannot walk independently. Other bonuses also exist: Baby Bonus, Unique Allowance, ISEE benefits for disabled.',
    discard_title: 'Disability Card (European Disability Card)',
    discard_desc: 'The Disability Card is a European card certifying disability and provides access to benefits in public facilities, museums, transport and services. Applied for via INPS.',
    network_it_title: 'ReNU Italy Family Network',
    network_it_desc: 'Connect with other Italian families with a ReNU child. We share experiences, practical tips and emotional support. Write to us at info@sindromerenu.it to join the network!',
    faq_title: 'FAQ & Rights',
    faq_intro: 'Frequently asked questions and information on the rights of ReNU families in Italy.',
    join_title: 'Become a Member',
    join_intro: 'Join Sindrome ReNU Italia APS and be part of our community.',
    events_title: 'Events',
    events_intro: 'Meetings, conferences and awareness events on ReNU Syndrome.',
    projects_title: 'Projects',
    projects_intro: 'Initiatives, awareness campaigns and projects of the association.',
    donate_5x1000: '5x1000',
    donate_5x1000_title: '5x1000 – Free donation',
    donate_5x1000_desc: 'In your tax return, indicate our tax code in the \'Social promotion associations\' box. It costs you nothing but represents valuable support for us.',
    donate_bday_title: 'Solidarity Birthday',
    donate_bday_desc: 'Turn your birthday or your child\'s birthday into an opportunity to support ReNU Syndrome research.',
    donate_company_title: 'Corporate Donations',
    donate_company_desc: 'Your company can support our mission and benefit from tax advantages. Contact us for more information.',
    donate_recurring_title: 'Recurring Donation',
    donate_recurring_desc: 'With a monthly or annual recurring donation, you provide continuous support to the association\'s activities and ReNU families in Italy.',
    donate_recurring_btn: 'Set Up Recurring Donation',
    donate_intl_label: 'For international donations',
    contact_form_name: 'First and Last Name',
    contact_form_email: 'Email address',
    contact_form_subject: 'Subject',
    contact_form_message: 'Message',
    contact_form_send: 'Send message',
    contact_form_sending: 'Sending...',
    contact_form_success: 'Message sent successfully!',
    contact_form_error: 'Error sending. Please try again.',
    privacy_title: 'Privacy Policy',
    cookie_notice: 'Cookie Notice',
    cookie_text: 'We use only technical cookies necessary for the operation of the site. No profiling or tracking cookies are used.',
    cookie_accept: 'Accept',
    cookie_necessary: 'Necessary only',
    cookie_more: 'More info',
    gdpr_label: 'GDPR Compliant (EU Reg. 2016/679)',
    contact_dpo: 'Contact DPO',
    coming_soon: 'Section coming soon',
    search_placeholder: 'Search site...',
    search_label: 'Search site',
    pubmed_syn: 'Summary:',
  },
  fr: {
    lang: 'fr', langName: 'Français',
    title: 'Syndrome ReNU Italie APS',
    subtitle: 'Ensemble, nous faisons la différence',
    tagline: 'Une condition génétique nouvellement identifiée. Un effort de recherche coordonné mondialement.',
    hero_text: 'RNU4-2 émerge comme une cause majeure de troubles rares du neurodéveloppement – <strong>Renouvelant l\'espoir pour les familles</strong>',
    hero_desc: 'Le syndrome ReNU est un trouble splicéosomal avec un hotspot mutationnel défini. Actuellement <strong>~250 cas confirmés dans le monde</strong> (16 en Italie), mais le nombre de cas non diagnostiqués est estimé bien plus élevé : les variants pathogènes se concentrent en seulement <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> du génome!',
    nav_home: 'Accueil', nav_about: 'À propos de ReNU', nav_research: 'Recherche',
    nav_therapies: 'Thérapies', nav_diagnosis: 'Diagnostic', nav_community: 'Communauté',
    nav_donations: 'Dons', nav_contact: 'Contact', nav_brochure: 'Brochures',
    nav_events: 'Événements', nav_projects: 'Projets', nav_members: 'Devenir Membre', nav_faq: 'FAQ & Droits',
    btn_diagnosis: 'VOULEZ-VOUS PLUS D\'INFORMATIONS? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Contactez-nous pour des informations sur le Syndrome ReNU',
    section_map_title: 'Inscrivez-vous ici',
    section_map_desc: 'La force est dans le nombre! Ajoutez un proche atteint de ReNU à la carte mondiale.',
    section_awareness_title: 'Sensibiliser',
    section_awareness_desc: 'Diffusez la connaissance du Syndrome ReNU et aidez les familles non diagnostiquées.',
    section_science_title: 'Comité scientifique',
    section_science_desc: 'Le Comité scientifique garantit la rigueur scientifique et collabore avec les familles et les professionnels.',
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
    brochure_title: 'Médias & Publications',
    brochure_intro: 'Articles scientifiques, matériaux d\'information, guides et documents pour approfondir la connaissance du Syndrome ReNU.',
    brochure_download: 'Ouvrir / Télécharger',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Tous droits réservés.',
    footer_partnership: 'En partenariat avec ReNU Syndrome United (USA)',
    footer_tagline: 'Ensemble, nous faisons la différence',
    donate_now: 'Faire un don', join_registry: 'Rejoindre le registre',
    learn_more: 'En savoir plus', contact_us: 'Contactez-nous', read_more: 'Lire la suite',
    btn_info: 'VOUS SOUHAITEZ PLUS D\'INFORMATIONS? CLIQUEZ ICI',
    btn_info_sub: 'Contactez-nous pour des informations sur le Syndrome ReNU',
    community_network_it: 'Réseau de parents italiens',
    community_network_desc: 'Le réseau de parents italiens est un point de référence pour ceux qui veulent se sentir moins seuls, partager des questions et des expériences du quotidien.',
    nav_science: 'Comité Scientifique',
    nav_glossary: 'Glossaire',
    science_title: 'Comité Scientifique',
    science_intro: 'Le Comité Scientifique de Sindrome ReNU Italia APS joue un rôle fondamental pour garantir rigueur et cohérence avec les meilleures preuves scientifiques disponibles.',
    science_role1_title: 'Validation des Contenus',
    science_role1_desc: 'Révision et validation des contenus médico-scientifiques du site et des publications de l\'Association.',
    science_role2_title: 'Soutien au Diagnostic',
    science_role2_desc: 'Collaboration avec les centres diagnostiques italiens pour faciliter l\'accès au Séquençage du Génome Entier (WGS).',
    science_role3_title: 'Recherche et Registre des Patients',
    science_role3_desc: 'Promotion de projets de recherche italiens, y compris le Registre National des Patients ReNU.',
    science_role4_title: 'Formation et Sensibilisation',
    science_role4_desc: 'Conception de campagnes pour les pédiatres et les médecins généralistes afin de réduire les délais de diagnostic.',
    science_role5_title: 'Connexion Internationale',
    science_role5_desc: 'Participation au réseau scientifique international ReNU, en collaboration avec ReNU Syndrome United (USA).',
    science_members_title: 'Les Membres du Comité',
    science_members_note: 'La liste des membres du Comité Scientifique sera publiée dès que le processus de nomination sera terminé.',
    science_cta: 'Collaborez avec nous',
    coe_title: 'Centre d\'Excellence ReNU (COE)',
    coe_desc: 'ReNU Syndrome United construit un réseau mondial de Centres d\'Excellence pour connecter les familles avec des équipes médicales multidisciplinaires.',
    world_title: 'ReNU dans le Monde',
    world_desc: 'Les familles RNU4-2 ont été cartographiées dans plus de 38 pays.',
    intl_network: 'Réseau International',
    // Chiavi mancanti aggiunte
    section_explore: 'Approfondissements',
    stat_cases_world: 'cas confirmés dans le monde',
    stat_cases_italy: 'cas en Italie',
    stat_dna: 'positions ADN mutées',
    stat_countries: 'pays avec familles',
    stat_year: 'année de la découverte',
    news_title: 'Sensibilisation & Initiatives',
    section_awareness_badge: 'Sensibilisation & Initiatives',
    community_join_btn: 'Rejoindre la communauté',
    gallery_btn: 'Voir la Galerie',
    map_btn: 'Voir les Centres de Référence',
    stories_nodesc: 'L\'histoire de cet enfant sera bientôt partagée par la famille.',
    privacy_link: 'Politique de confidentialité',
    mascot_title: 'Reny la Tortue',
    mascot_desc: 'Reny est la mascotte de ReNU Italie. Vous pouvez télécharger les ressources graphiques pour sensibiliser le public sur les réseaux sociaux.',
    stories_it_title: 'Histoires de familles ReNU',
    stories_it_desc: '',
    stories_read_full: 'Lire l\'histoire complète',
    stories_loading: 'Chargement des histoires...',
    stories_read: 'Lire',
    stories_share_cta: 'Vous souhaitez partager l\'histoire de votre enfant? Écrivez-nous!',
    stories_share_btn: 'Partager votre histoire',
    stories_intl_title: 'Histoires de la communauté internationale',
    stories_all_btn: 'Toutes les histoires ReNU',
    network_title: 'Le Réseau International ReNU',
    network_desc: 'Associations nationales partenaires dans le monde entier',
    map_title: 'Centres de Référence ReNU dans le Monde',
    map_desc: 'ReNU Syndrome United construit un réseau mondial de Centres de Référence pour connecter les familles avec des équipes médicales multidisciplinaires. Découvrez les centres actifs.',
    children_title: 'Nos enfants et familles',
    children_desc: 'Découvrez les histoires des familles italiennes vivant avec le syndrome ReNU.',
    research_coming: 'Section Recherche en Préparation',
    research_coming_desc: 'Nous travaillons avec notre Comité Scientifique pour préparer des contenus précis sur la recherche du Syndrome ReNU. Cette section sera disponible prochainement.',
    pubmed_label: 'Publications Scientifiques sur PubMed',
    pubmed_title: 'Littérature Scientifique sur le Syndrome ReNU (RNU4-2)',
    pubmed_loading: 'Chargement des publications...',
    pubmed_search: 'Rechercher toutes les publications sur PubMed',
    science_collab_title: 'Vous souhaitez collaborer avec notre Comité Scientifique?',
    science_collab_desc: 'Le Comité Scientifique est en cours de constitution. Pour des collaborations scientifiques, contactez-nous.',
    therapies_go: 'Page Thérapies',
    therapies_rsu: 'Plus d\'infos sur ReNU Syndrome United',
    rights_title: 'Droits et Protections – Réseau Familles Italie',
    rights_desc: 'Avoir un enfant avec le Syndrome ReNU donne accès à une série de droits et protections prévus par la législation italienne. Notre réseau de familles est là pour vous aider.',
    law104_title: 'Loi 104/92 – Aide aux personnes handicapées',
    law104_desc: 'Congés de travail pour les parents (3 jours/mois), congés extraordinaires, avantages fiscaux et soutien scolaire.',
    carpass_title: 'Badge Handicapé (Pass Auto)',
    carpass_desc: 'Le badge de stationnement pour handicapés se demande à la mairie de résidence via certificat médical.',
    school_title: 'Soutien Scolaire (Enseignant de Soutien)',
    school_desc: 'L\'enfant avec ReNU a droit à un enseignant de soutien, à un Plan Éducatif Individualisé (PEI) et à des aides didactiques spécifiques.',
    allowance_title: 'Allocation et Aides',
    allowance_desc: 'L\'allocation d\'accompagnement INPS est réservée aux personnes ayant un handicap total. Il existe également d\'autres aides: Bonus Bébé, Allocation Unique, avantages ISEE.',
    discard_title: 'Disability Card (Carte Européenne du Handicap)',
    discard_desc: 'La Disability Card est une carte européenne certifiant le handicap et donne accès à des avantages dans les établissements publics, musées, transports.',
    network_it_title: 'Réseau Familles ReNU Italie',
    network_it_desc: 'Rejoignez les autres familles italiennes avec un enfant ReNU. Écrivez-nous à info@sindromerenu.it!',
    faq_title: 'FAQ & Droits',
    faq_intro: 'Questions fréquentes et informations sur les droits des familles ReNU en Italie.',
    join_title: 'Devenir Membre',
    join_intro: 'Rejoignez Sindrome ReNU Italia APS et faites partie de notre communauté.',
    events_title: 'Événements',
    events_intro: 'Rencontres, conférences et événements de sensibilisation sur le Syndrome ReNU.',
    projects_title: 'Projets',
    projects_intro: 'Initiatives, campagnes de sensibilisation et projets de l\'association.',
    donate_5x1000: '5x1000',
    donate_5x1000_title: '5x1000 – Don sans frais',
    donate_5x1000_desc: 'Lors de votre déclaration de revenus, indiquez notre code fiscal dans la case \'Associations de promotion sociale\'. Cela ne vous coûte rien mais représente un soutien précieux pour nous.',
    donate_bday_title: 'Anniversaire Solidaire',
    donate_bday_desc: 'Transformez votre anniversaire ou celui de votre enfant en une occasion de soutien pour la recherche sur le Syndrome ReNU.',
    donate_company_title: 'Dons d\'Entreprise',
    donate_company_desc: 'Votre entreprise peut soutenir notre mission et bénéficier d\'avantages fiscaux. Contactez-nous pour plus d\'informations.',
    donate_recurring_title: 'Don Récurrent',
    donate_recurring_desc: 'Avec un don récurrent mensuel ou annuel, vous garantissez un soutien continu aux activités de l\'association et aux familles ReNU en Italie.',
    donate_recurring_btn: 'Configurer un Don Récurrent',
    donate_intl_label: 'Pour les dons internationaux',
    contact_form_name: 'Nom et Prénom',
    contact_form_email: 'Adresse e-mail',
    contact_form_subject: 'Objet',
    contact_form_message: 'Message',
    contact_form_send: 'Envoyer le message',
    contact_form_sending: 'Envoi en cours...',
    contact_form_success: 'Message envoyé avec succès!',
    contact_form_error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
    privacy_title: 'Politique de Confidentialité',
    cookie_notice: 'Avis sur les Cookies',
    cookie_text: 'Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de profilage ou de suivi n\'est utilisé.',
    cookie_accept: 'Accepter',
    cookie_necessary: 'Nécessaires uniquement',
    cookie_more: 'Plus d\'informations',
    gdpr_label: 'Site conforme RGPD (Règl. UE 2016/679)',
    contact_dpo: 'Contacter le DPO',
    coming_soon: 'Section en préparation',
    search_placeholder: 'Rechercher sur le site...',
    search_label: 'Rechercher sur le site',
    pubmed_syn: 'Résumé:',
  },
  es: {
    lang: 'es', langName: 'Español',
    title: 'Síndrome ReNU Italia APS',
    subtitle: 'Juntos, hacemos la diferencia',
    tagline: 'Una condición genética recién identificada. Un esfuerzo de investigación coordinado a nivel mundial.',
    hero_text: 'RNU4-2 emerge como una causa principal de trastornos raros del neurodesarrollo – <strong>Renovando la Esperanza para las Familias</strong>',
    hero_desc: 'El Síndrome ReNU es un trastorno spliceosomal. Actualmente hay <strong>~250 casos confirmados en el mundo</strong> (16 en Italia), aunque el número real de casos no diagnosticados se estima mucho mayor: las variantes patogénicas se concentran en solo <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posiciones</a> del genoma!',
    nav_home: 'Inicio', nav_about: 'Sobre ReNU', nav_research: 'Investigación',
    nav_therapies: 'Terapias', nav_diagnosis: 'Diagnóstico', nav_community: 'Comunidad',
    nav_donations: 'Donaciones', nav_contact: 'Contacto', nav_brochure: 'Folletos',
    nav_events: 'Eventos', nav_projects: 'Proyectos', nav_members: 'Hazte Socio', nav_faq: 'FAQ & Derechos',
    btn_diagnosis: '¿QUIERES MÁS INFORMACIÓN? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Contáctanos para información sobre el Síndrome ReNU',
    section_map_title: 'Regístrate aquí',
    section_map_desc: '¡La fuerza está en los números! Añade a tu familiar al mapa mundial.',
    section_awareness_title: 'Aumentar la conciencia',
    section_awareness_desc: 'Difunde el conocimiento del Síndrome ReNU y ayuda a llegar a las familias sin diagnóstico.',
    section_science_title: 'Comité científico',
    section_science_desc: 'El Comité científico garantiza el rigor científico y colabora con familias y profesionales.',
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
    brochure_title: 'Medios & Publicaciones',
    brochure_intro: 'Artículos científicos, materiales informativos, guías y documentos para profundizar el conocimiento del Síndrome ReNU.',
    brochure_download: 'Abrir / Descargar',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Todos los derechos reservados.',
    footer_partnership: 'En asociación con ReNU Syndrome United (USA)',
    footer_tagline: 'Juntos, hacemos la diferencia',
    donate_now: 'Donar', join_registry: 'Unirse al registro',
    learn_more: 'Más información', contact_us: 'Contáctenos', read_more: 'Leer más',
    btn_info: 'QUIERES MÁS INFORMACIÓN? HAZ CLIC AQUÍ',
    btn_info_sub: 'Contáctenos para información sobre el Síndrome ReNU',
    community_network_it: 'Red de padres italianos',
    community_network_desc: 'La red de padres italianos es un punto de referencia para quienes desean sentirse menos solos y compartir experiencias cotidianas.',
    nav_science: 'Comité Científico',
    nav_glossary: 'Glosario',
    science_title: 'Comité Científico',
    science_intro: 'El Comité Científico de Sindrome ReNU Italia APS juega un papel fundamental para garantizar rigor y coherencia con la mejor evidencia científica disponible.',
    science_role1_title: 'Validación de Contenidos',
    science_role1_desc: 'Revisión y validación de los contenidos médico-científicos del sitio y las publicaciones de la Asociación.',
    science_role2_title: 'Apoyo al Diagnóstico',
    science_role2_desc: 'Colaboración con centros diagnósticos italianos para facilitar el acceso a la Secuenciación del Genoma Completo (WGS).',
    science_role3_title: 'Investigación y Registro de Pacientes',
    science_role3_desc: 'Promoción de proyectos de investigación italianos, incluido el Registro Nacional de Pacientes ReNU.',
    science_role4_title: 'Formación y Sensibilización',
    science_role4_desc: 'Diseño de campañas para pediatras y médicos de cabecera para reducir los tiempos de diagnóstico.',
    science_role5_title: 'Conexión Internacional',
    science_role5_desc: 'Participación en la red científica internacional ReNU, en colaboración con ReNU Syndrome United (EE.UU.).',
    science_members_title: 'Los Miembros del Comité',
    science_members_note: 'La lista de miembros del Comité Científico se publicará cuando el proceso de nombramiento haya concluido.',
    science_cta: 'Colabora con nosotros',
    coe_title: 'Centro de Excelencia ReNU (COE)',
    coe_desc: 'ReNU Syndrome United está construyendo una red global de Centros de Excelencia.',
    world_title: 'ReNU en el Mundo',
    world_desc: 'Familias RNU4-2 en más de 38 países.',
    intl_network: 'Red Internacional',
    // Chiavi mancanti aggiunte
    section_explore: 'Profundización',
    stat_cases_world: 'casos confirmados en el mundo',
    stat_cases_italy: 'casos en Italia',
    stat_dna: 'posiciones ADN mutadas',
    stat_countries: 'países con familias',
    stat_year: 'año del descubrimiento',
    news_title: 'Conciencia & Iniciativas',
    section_awareness_badge: 'Conciencia & Iniciativas',
    community_join_btn: 'Únete a la comunidad',
    gallery_btn: 'Ver Galería',
    map_btn: 'Ver Centros de Referencia',
    stories_nodesc: 'La historia de este niño será pronto compartida por la familia.',
    privacy_link: 'Política de Privacidad',
    mascot_title: 'Tortuga Reny',
    mascot_desc: 'Reny es la mascota de ReNU Italia. Puede descargar los recursos gráficos para concienciar en redes sociales.',
    stories_it_title: 'Historias de Familias ReNU',
    stories_it_desc: '',
    stories_read_full: 'Leer la historia completa',
    stories_loading: 'Cargando historias...',
    stories_read: 'Leer',
    stories_share_cta: '¿Quieres compartir la historia de tu hijo? ¡Escríbenos!',
    stories_share_btn: 'Comparte tu historia',
    stories_intl_title: 'Historias de la comunidad internacional',
    stories_all_btn: 'Todas las historias ReNU',
    network_title: 'La Red Internacional ReNU',
    network_desc: 'Asociaciones nacionales socias en todo el mundo',
    map_title: 'Centros de Referencia ReNU en el Mundo',
    map_desc: 'ReNU Syndrome United está construyendo una red global de Centros de Referencia para conectar a las familias con equipos médicos multidisciplinares. Descubre los centros activos en el mundo.',
    children_title: 'Nuestros niños y familias',
    children_desc: 'Descubre las historias de las familias italianas con Síndrome ReNU.',
    research_coming: 'Sección de Investigación en Preparación',
    research_coming_desc: 'Estamos trabajando con nuestro Comité Científico para preparar contenidos precisos sobre la investigación del Síndrome ReNU. Esta sección estará disponible pronto.',
    pubmed_label: 'Publicaciones Científicas en PubMed',
    pubmed_title: 'Literatura Científica sobre el Síndrome ReNU (RNU4-2)',
    pubmed_loading: 'Cargando publicaciones...',
    pubmed_search: 'Buscar todas las publicaciones en PubMed',
    science_collab_title: '¿Quiere colaborar con nuestro Comité Científico?',
    science_collab_desc: 'El Comité Científico está en proceso de constitución. Para colaboraciones científicas, contáctenos.',
    therapies_go: 'Ir a Terapias',
    therapies_rsu: 'Más info en ReNU Syndrome United',
    rights_title: 'Derechos y Protecciones – Red Familias Italia',
    rights_desc: 'Tener un hijo con Síndrome ReNU da derecho a una serie de derechos y protecciones bajo la legislación italiana. Nuestra red de familias está aquí para ayudarte.',
    law104_title: 'Ley 104/92 – Asistencia a Discapacitados',
    law104_desc: 'Permisos laborales para padres (3 días/mes), bajas extraordinarias, beneficios fiscales y apoyo escolar.',
    carpass_title: 'Distintivo Discapacitado (Pase de Auto)',
    carpass_desc: 'El distintivo de aparcamiento para discapacitados se solicita en el ayuntamiento mediante certificado médico.',
    school_title: 'Apoyo Escolar (Maestro de Apoyo)',
    school_desc: 'El niño con ReNU tiene derecho a un maestro de apoyo, a un Plan Educativo Individualizado (PEI) y a ayudas didácticas específicas.',
    allowance_title: 'Subsidio y Bonificaciones',
    allowance_desc: 'El subsidio de acompañamiento INPS está reservado para personas con discapacidad total. También existen otros bonos: Bonus Bebé, Asignación Única, ventajas ISEE.',
    discard_title: 'Disability Card (Tarjeta Europea de Discapacidad)',
    discard_desc: 'La Disability Card es una tarjeta europea que certifica la discapacidad y da acceso a beneficios en instalaciones públicas, museos y transporte.',
    network_it_title: 'Red Familias ReNU Italia',
    network_it_desc: 'Conéctate con otras familias italianas con un niño ReNU. Escríbenos a info@sindromerenu.it.',
    faq_title: 'FAQ & Derechos',
    faq_intro: 'Preguntas frecuentes e información sobre los derechos de las familias ReNU en Italia.',
    join_title: 'Hazte Socio',
    join_intro: 'Únete a Sindrome ReNU Italia APS y forma parte de nuestra comunidad.',
    events_title: 'Eventos',
    events_intro: 'Encuentros, conferencias y eventos de concienciación sobre el Síndrome ReNU.',
    projects_title: 'Proyectos',
    projects_intro: 'Iniciativas, campañas de concienciación y proyectos de la asociación.',
    donate_5x1000: '5x1000',
    donate_5x1000_title: '5x1000 – Donación sin coste',
    donate_5x1000_desc: 'En tu declaración de la renta, indica nuestro código fiscal en la casilla \'Asociaciones de promoción social\'. No te cuesta nada pero representa un apoyo valioso.',
    donate_bday_title: 'Cumpleaños Solidario',
    donate_bday_desc: 'Convierte tu cumpleaños o el de tu hijo en una oportunidad de apoyo a la investigación del Síndrome ReNU.',
    donate_company_title: 'Donaciones de Empresa',
    donate_company_desc: 'Tu empresa puede apoyar nuestra misión y beneficiarse de ventajas fiscales. Contáctenos para más información.',
    donate_recurring_title: 'Donación Recurrente',
    donate_recurring_desc: 'Con una donación recurrente mensual o anual, garantizas un apoyo continuo a las actividades de la asociación y a las familias ReNU.',
    donate_recurring_btn: 'Configurar Donación Recurrente',
    donate_intl_label: 'Para donaciones internacionales',
    contact_form_name: 'Nombre y Apellido',
    contact_form_email: 'Correo electrónico',
    contact_form_subject: 'Asunto',
    contact_form_message: 'Mensaje',
    contact_form_send: 'Enviar mensaje',
    contact_form_sending: 'Enviando...',
    contact_form_success: '¡Mensaje enviado con éxito!',
    contact_form_error: 'Error al enviar. Por favor, inténtelo de nuevo.',
    privacy_title: 'Política de Privacidad',
    cookie_notice: 'Aviso de Cookies',
    cookie_text: 'Solo utilizamos cookies técnicas necesarias para el funcionamiento del sitio. No se utilizan cookies de perfilado ni de seguimiento.',
    cookie_accept: 'Aceptar',
    cookie_necessary: 'Solo necesarias',
    cookie_more: 'Más información',
    gdpr_label: 'Sitio conforme RGPD (Regl. UE 2016/679)',
    contact_dpo: 'Contactar al DPO',
    coming_soon: 'Sección en preparación',
    search_placeholder: 'Buscar en el sitio...',
    search_label: 'Buscar en el sitio',
    pubmed_syn: 'Resumen:',
  },
  de: {
    lang: 'de', langName: 'Deutsch',
    title: 'ReNU-Syndrom Italien APS',
    subtitle: 'Gemeinsam machen wir den Unterschied',
    tagline: 'Eine neu identifizierte genetische Erkrankung. Eine global koordinierte Forschungsarbeit.',
    hero_text: 'RNU4-2 entwickelt sich zu einer führenden Ursache seltener neurologischer Entwicklungsstörungen – <strong>Neue Hoffnung für Familien</strong>',
    hero_desc: 'Das ReNU-Syndrom ist eine Spliceosom-Störung. Derzeit sind <strong>~250 Fälle weltweit bestätigt</strong> (16 in Italien), wobei die tatsächliche Zahl nicht diagnostizierter Fälle viel höher geschätzt wird: Pathogene Varianten konzentrieren sich auf nur <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 Positionen</a> des Genoms!',
    nav_home: 'Startseite', nav_about: 'Über ReNU', nav_research: 'Forschung',
    nav_therapies: 'Therapien', nav_diagnosis: 'Diagnose', nav_community: 'Gemeinschaft',
    nav_donations: 'Spenden', nav_contact: 'Kontakt', nav_brochure: 'Broschüren',
    nav_events: 'Veranstaltungen', nav_projects: 'Projekte', nav_members: 'Mitglied werden', nav_faq: 'FAQ & Rechte',
    btn_diagnosis: 'MÖCHTEN SIE MEHR INFORMATIONEN? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Kontaktieren Sie uns für Informationen zum ReNU-Syndrom',
    section_map_title: 'Hier registrieren',
    section_map_desc: 'Stärke in der Zahl! Fügen Sie Ihr ReNU-Familienmitglied zur Weltkarte hinzu.',
    section_awareness_title: 'Bewusstsein schaffen',
    section_awareness_desc: 'Verbreite das Wissen über das ReNU-Syndrom und hilf, noch nicht diagnostizierte Familien zu erreichen.',
    section_science_title: 'Wissenschaftlicher Ausschuss',
    section_science_desc: 'Der Wissenschaftliche Ausschuss gewährleistet wissenschaftliche Strenge und arbeitet mit Familien und Fachleuten zusammen.',
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
    brochure_title: 'Medien & Publikationen',
    brochure_intro: 'Wissenschaftliche Artikel, Informationsmaterialien, Leitfäden und Dokumente zum ReNU-Syndrom.',
    brochure_download: 'Öffnen / Herunterladen',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Alle Rechte vorbehalten.',
    footer_partnership: 'In Partnerschaft mit ReNU Syndrome United (USA)',
    footer_tagline: 'Gemeinsam machen wir den Unterschied',
    donate_now: 'Jetzt spenden', join_registry: 'Dem Register beitreten',
    learn_more: 'Mehr erfahren', contact_us: 'Kontaktieren Sie uns', read_more: 'Mehr lesen',
    btn_info: 'MÖCHTEN SIE MEHR INFORMATIONEN? KLICKEN SIE HIER',
    btn_info_sub: 'Kontaktieren Sie uns für Informationen zum ReNU-Syndrom',
    community_network_it: 'Netzwerk italienischer Eltern',
    community_network_desc: 'Das Netzwerk italienischer Eltern ist ein Anlaufpunkt für alle, die sich weniger allein fühlen und alltägliche Erfahrungen teilen möchten.',
    nav_science: 'Wissenschaftlicher Ausschuss',
    nav_glossary: 'Glossar',
    science_title: 'Wissenschaftlicher Ausschuss',
    science_intro: 'Der Wissenschaftliche Ausschuss von Sindrome ReNU Italia APS spielt eine grundlegende Rolle bei der Sicherstellung von Strenge und Kohärenz mit den besten verfügbaren wissenschaftlichen Erkenntnissen.',
    science_role1_title: 'Validierung von Inhalten',
    science_role1_desc: 'Überprüfung und Validierung der medizinisch-wissenschaftlichen Inhalte der Website und der Publikationen des Vereins.',
    science_role2_title: 'Diagnoseunterstützung',
    science_role2_desc: 'Zusammenarbeit mit italienischen Diagnosezentren zur Erleichterung des Zugangs zur Gesamtgenomsequenzierung (WGS).',
    science_role3_title: 'Forschung und Patientenregister',
    science_role3_desc: 'Förderung italienischer Forschungsprojekte, einschließlich des Nationalen ReNU-Patientenregisters.',
    science_role4_title: 'Aus- und Weiterbildung',
    science_role4_desc: 'Konzeption von Kampagnen für Kinderärzte und Allgemeinmediziner zur Reduzierung der Diagnosezeiten.',
    science_role5_title: 'Internationale Vernetzung',
    science_role5_desc: 'Teilnahme am internationalen wissenschaftlichen ReNU-Netzwerk in Zusammenarbeit mit ReNU Syndrome United (USA).',
    science_members_title: 'Die Mitglieder des Ausschusses',
    science_members_note: 'Die Mitgliederliste des Wissenschaftlichen Ausschusses wird veröffentlicht, sobald das Ernennungsverfahren abgeschlossen ist.',
    science_cta: 'Arbeiten Sie mit uns',
    coe_title: 'ReNU Exzellenzzentrum (COE)',
    coe_desc: 'ReNU Syndrome United baut ein globales Netzwerk von Exzellenzzentren auf.',
    world_title: 'ReNU weltweit',
    world_desc: 'RNU4-2-Familien in über 38 Ländern kartiert.',
    intl_network: 'Internationales Netzwerk',
    // Chiavi mancanti aggiunte
    section_explore: 'Vertiefungen',
    stat_cases_world: 'bestätigte Fälle weltweit',
    stat_cases_italy: 'Fälle in Italien',
    stat_dna: 'DNA-Positionen mutiert',
    stat_countries: 'Länder mit Familien',
    stat_year: 'Jahr der Entdeckung',
    news_title: 'Bewusstsein & Initiativen',
    section_awareness_badge: 'Bewusstsein & Initiativen',
    community_join_btn: 'Der Gemeinschaft beitreten',
    gallery_btn: 'Galerie ansehen',
    map_btn: 'Referenzzentren ansehen',
    stories_nodesc: 'Die Geschichte dieses Kindes wird bald von der Familie geteilt.',
    privacy_link: 'Datenschutzerklärung',
    mascot_title: 'Schildkröte Reny',
    mascot_desc: 'Reny ist das Maskottchen von ReNU Italia. Sie können die Grafikressourcen herunterladen, um in sozialen Medien Bewusstsein zu schaffen.',
    stories_it_title: 'Geschichten von ReNU-Familien',
    stories_it_desc: '',
    stories_read_full: 'Vollständige Geschichte lesen',
    stories_loading: 'Geschichten werden geladen...',
    stories_read: 'Lesen',
    stories_share_cta: 'Möchten Sie die Geschichte Ihres Kindes teilen? Schreiben Sie uns!',
    stories_share_btn: 'Teile deine Geschichte',
    stories_intl_title: 'Geschichten aus der internationalen Gemeinschaft',
    stories_all_btn: 'Alle ReNU-Familiengeschichten',
    network_title: 'Das Internationale ReNU-Netzwerk',
    network_desc: 'Nationale Partnerorganisationen weltweit',
    map_title: 'ReNU-Referenzzentren weltweit',
    map_desc: 'ReNU Syndrome United baut ein globales Netzwerk von Referenzzentren auf, um Familien mit multidisziplinären Ärzteteams zu verbinden. Entdecken Sie die aktiven Zentren weltweit.',
    children_title: 'Unsere Kinder und Familien',
    children_desc: 'Entdecken Sie die Geschichten der italienischen Familien mit ReNU-Syndrom.',
    research_coming: 'Forschungsbereich in Vorbereitung',
    research_coming_desc: 'Wir arbeiten mit unserem Wissenschaftlichen Ausschuss an genauen Inhalten zur Forschung über das ReNU-Syndrom. Dieser Bereich wird bald verfügbar sein.',
    pubmed_label: 'Wissenschaftliche Publikationen auf PubMed',
    pubmed_title: 'Wissenschaftliche Literatur über das ReNU-Syndrom (RNU4-2)',
    pubmed_loading: 'Publikationen werden geladen...',
    pubmed_search: 'Alle Publikationen auf PubMed suchen',
    science_collab_title: 'Möchten Sie mit unserem Wissenschaftlichen Ausschuss zusammenarbeiten?',
    science_collab_desc: 'Der Wissenschaftliche Ausschuss befindet sich im Aufbau. Für wissenschaftliche Zusammenarbeit kontaktieren Sie uns.',
    therapies_go: 'Zur Therapien-Seite',
    therapies_rsu: 'Mehr Infos auf ReNU Syndrome United',
    rights_title: 'Rechte und Schutzmaßnahmen – Netzwerk Familien Italien',
    rights_desc: 'Ein Kind mit ReNU-Syndrom berechtigt zu einer Reihe von Rechten und Schutzmaßnahmen nach italienischem Recht. Unser Familienzentrum hilft Ihnen.',
    law104_title: 'Gesetz 104/92 – Behindertenhilfe',
    law104_desc: 'Arbeitsurlaub für Eltern (3 Tage/Monat), außerordentlicher Urlaub, Steuervorteile und Schulunterstützung.',
    carpass_title: 'Behindertenausweis (Auto-Pass)',
    carpass_desc: 'Der Behindertenparkausweis wird beim Wohnsitz-Gemeindeamt über ärztliches Attest beantragt.',
    school_title: 'Schulische Unterstützung (Förderlehrer)',
    school_desc: 'Das Kind mit ReNU hat Anspruch auf einen Förderlehrer, einen Individuellen Bildungsplan (PEI) und spezifische Lehrmittel.',
    allowance_title: 'Beihilfe und Boni',
    allowance_desc: 'Die INPS-Begleitungsbeihilfe ist für vollständig behinderte Personen vorgesehen. Es gibt auch weitere Boni: Babybonus, Einheitliche Zulage, ISEE-Vorteile.',
    discard_title: 'Disability Card (Europäischer Behindertenausweis)',
    discard_desc: 'Die Disability Card ist ein europäischer Ausweis, der die Behinderung bescheinigt und Zugang zu Vorteilen in öffentlichen Einrichtungen, Museen und Verkehrsmitteln bietet.',
    network_it_title: 'ReNU-Familienzentrum Italien',
    network_it_desc: 'Vernetzen Sie sich mit anderen italienischen Familien mit einem ReNU-Kind. Schreiben Sie uns an info@sindromerenu.it.',
    faq_title: 'FAQ & Rechte',
    faq_intro: 'Häufig gestellte Fragen und Informationen zu den Rechten von ReNU-Familien in Italien.',
    join_title: 'Mitglied werden',
    join_intro: 'Treten Sie Sindrome ReNU Italia APS bei und werden Sie Teil unserer Gemeinschaft.',
    events_title: 'Veranstaltungen',
    events_intro: 'Begegnungen, Konferenzen und Sensibilisierungsveranstaltungen über das ReNU-Syndrom.',
    projects_title: 'Projekte',
    projects_intro: 'Initiativen, Sensibilisierungskampagnen und Projekte des Vereins.',
    donate_5x1000: '5x1000',
    donate_5x1000_title: '5x1000 – Kostenlose Spende',
    donate_5x1000_desc: 'Geben Sie bei Ihrer Steuererklärung unsere Steuernummer im Feld \'Vereinigungen zur Förderung sozialer Aktivitäten\' an. Es kostet Sie nichts, unterstützt uns aber sehr.',
    donate_bday_title: 'Solidarischer Geburtstag',
    donate_bday_desc: 'Verwandeln Sie Ihren Geburtstag oder den Ihres Kindes in eine Gelegenheit zur Unterstützung der ReNU-Syndrom-Forschung.',
    donate_company_title: 'Unternehmensspenden',
    donate_company_desc: 'Ihr Unternehmen kann unsere Mission unterstützen und steuerliche Vorteile genießen. Kontaktieren Sie uns für weitere Informationen.',
    donate_recurring_title: 'Wiederkehrende Spende',
    donate_recurring_desc: 'Mit einer monatlichen oder jährlichen wiederkehrenden Spende sichern Sie kontinuierliche Unterstützung für den Verein und die ReNU-Familien.',
    donate_recurring_btn: 'Wiederkehrende Spende einrichten',
    donate_intl_label: 'Für internationale Spenden',
    contact_form_name: 'Vor- und Nachname',
    contact_form_email: 'E-Mail-Adresse',
    contact_form_subject: 'Betreff',
    contact_form_message: 'Nachricht',
    contact_form_send: 'Nachricht senden',
    contact_form_sending: 'Wird gesendet...',
    contact_form_success: 'Nachricht erfolgreich gesendet!',
    contact_form_error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    privacy_title: 'Datenschutzerklärung',
    cookie_notice: 'Cookie-Hinweis',
    cookie_text: 'Wir verwenden nur technische Cookies, die für den Betrieb der Website notwendig sind. Es werden keine Profiling- oder Tracking-Cookies verwendet.',
    cookie_accept: 'Akzeptieren',
    cookie_necessary: 'Nur notwendige',
    cookie_more: 'Weitere Informationen',
    gdpr_label: 'DSGVO-konformes Angebot (EU-Verord. 2016/679)',
    contact_dpo: 'DPO kontaktieren',
    coming_soon: 'Bereich in Vorbereitung',
    search_placeholder: 'Website durchsuchen...',
    search_label: 'Website durchsuchen',
    pubmed_syn: 'Zusammenfassung:',
  }
}

// ─── TRANSLATION HELPER ───────────────────────────────────────────────────────
// tx(t, key, fallbacks?) — restituisce t[key] se presente, altrimenti cerca nel
// fallback esplicito per lingua, infine cade su EN o IT.
function tx(t: Record<string,string>, key: string, fb?: Record<string,string>): string {
  if (t[key]) return t[key];
  if (fb && fb[t.lang]) return fb[t.lang];
  if (fb && fb['en']) return fb['en'];
  return key; // chiave come ultimo fallback
}

// ─── LAYOUT SHELL ─────────────────────────────────────────────────────────────
function getHtml(t: Record<string, string>, page: string = 'home', content: string, extraHead: string = ''): string {
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
    { key: 'nav_glossary', page: 'glossary', icon: 'fa-book-medical', disabled: false },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope', disabled: false },
  ]
  const navLinks = navItems.filter(item => !item.hidden).map(item => item.disabled ? `
    <span class="flex items-center gap-0.5 px-1.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-40 cursor-not-allowed" title="${t.coming_soon}">
      <i class="fas ${item.icon} text-xs"></i>
      <span class="hidden 2xl:inline nav-label ml-0.5">${t[item.key]}</span>
    </span>` : `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-0.5 px-1.5 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-xs font-semibold whitespace-nowrap ${page === item.page ? 'bg-white bg-opacity-25 shadow-inner ring-1 ring-sky-300' : ''}" title="${t[item.key]}">
      <i class="fas ${item.icon} text-xs opacity-80"></i>
      <span class="hidden 2xl:inline nav-label ml-0.5">${t[item.key]}</span>
    </a>`).join('')

  // ── SEO: title e description per pagina ──────────────────────────────────
  const BASE_URL = 'https://www.sindromerenu.it'
  const SITE_NAME = 'Sindrome ReNU Italia APS'
  const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`

  // Title ottimizzato per ogni pagina e lingua
  const pageTitles: Record<string, Record<string, string>> = {
    home: {
      it: 'Sindrome ReNU Italia APS | Associazione per RNU4-2',
      en: 'ReNU Syndrome Italy APS | Association for RNU4-2',
      fr: 'Syndrome ReNU Italie APS | Association pour RNU4-2',
      es: 'Síndrome ReNU Italia APS | Asociación para RNU4-2',
      de: 'ReNU-Syndrom Italien APS | Verein für RNU4-2',
    },
    about: {
      it: 'Cos\'è la Sindrome ReNU (RNU4-2)? Sintomi, Diagnosi e Caratteristiche',
      en: 'What is ReNU Syndrome (RNU4-2)? Symptoms, Diagnosis and Features',
      fr: 'Qu\'est-ce que le Syndrome ReNU (RNU4-2)? Symptômes et Diagnostic',
      es: '¿Qué es el Síndrome ReNU (RNU4-2)? Síntomas, Diagnóstico y Características',
      de: 'Was ist das ReNU-Syndrom (RNU4-2)? Symptome, Diagnose und Merkmale',
    },
    diagnosis: {
      it: 'Diagnosi Sindrome ReNU: Test WGS in Italia | Centri Specializzati',
      en: 'ReNU Syndrome Diagnosis: WGS Testing in Italy | Specialised Centres',
      fr: 'Diagnostic Syndrome ReNU: Test WGS en Italie | Centres Spécialisés',
      es: 'Diagnóstico Síndrome ReNU: Test WGS en Italia | Centros Especializados',
      de: 'ReNU-Syndrom Diagnose: WGS-Test in Italien | Spezialisierte Zentren',
    },
    therapies: {
      it: 'Terapie per la Sindrome ReNU: Fisioterapia, Logopedia, ABA, Feuerstein',
      en: 'Therapies for ReNU Syndrome: Physiotherapy, Speech Therapy, ABA, Feuerstein',
      fr: 'Thérapies pour le Syndrome ReNU: Kinésithérapie, Orthophonie, ABA',
      es: 'Terapias para el Síndrome ReNU: Fisioterapia, Logopedia, ABA, Feuerstein',
      de: 'Therapien für das ReNU-Syndrom: Physiotherapie, Logopädie, ABA, Feuerstein',
    },
    research: {
      it: 'Ricerca Scientifica sulla Sindrome ReNU (RNU4-2) | Pubblicazioni PubMed',
      en: 'Scientific Research on ReNU Syndrome (RNU4-2) | PubMed Publications',
      fr: 'Recherche Scientifique sur le Syndrome ReNU (RNU4-2) | Publications PubMed',
      es: 'Investigación Científica sobre el Síndrome ReNU (RNU4-2) | Publicaciones PubMed',
      de: 'Wissenschaftliche Forschung zum ReNU-Syndrom (RNU4-2) | PubMed-Publikationen',
    },
    community: {
      it: 'Community Sindrome ReNU Italia | Famiglie, Storie e Rete di Supporto',
      en: 'ReNU Syndrome Italy Community | Families, Stories and Support Network',
      fr: 'Communauté Syndrome ReNU Italie | Familles, Histoires et Réseau de Soutien',
      es: 'Comunidad Síndrome ReNU Italia | Familias, Historias y Red de Apoyo',
      de: 'ReNU-Syndrom Italien Community | Familien, Geschichten und Unterstützungsnetzwerk',
    },
    donations: {
      it: 'Dona alla Sindrome ReNU Italia APS | 5x1000, Lascito Testamentario, Bonifico',
      en: 'Donate to ReNU Syndrome Italy APS | 5x1000, Legacy, Bank Transfer',
      fr: 'Faire un Don au Syndrome ReNU Italie APS | 5x1000, Legs Testamentaire',
      es: 'Donar al Síndrome ReNU Italia APS | 5x1000, Legado Testamentario, Transferencia',
      de: 'Spenden für ReNU-Syndrom Italien APS | 5x1000, Erbschaft, Banküberweisung',
    },
    faq: {
      it: 'FAQ & Diritti per Sindrome ReNU | Legge 104, Disability Card, Scuola',
      en: 'FAQ & Rights for ReNU Syndrome | Law 104, Disability Card, School Support',
      fr: 'FAQ & Droits pour Syndrome ReNU | Loi 104, Carte Européenne du Handicap',
      es: 'FAQ & Derechos para Síndrome ReNU | Ley 104, Disability Card, Escuela',
      de: 'FAQ & Rechte für ReNU-Syndrom | Gesetz 104, Disability Card, Schule',
    },
    science: {
      it: 'Comitato Scientifico Sindrome ReNU Italia | Dr. Claudia Gravaghi PhD',
      en: 'ReNU Syndrome Italy Scientific Committee | Dr. Claudia Gravaghi PhD',
      fr: 'Comité Scientifique Syndrome ReNU Italie | Dr. Claudia Gravaghi PhD',
      es: 'Comité Científico Síndrome ReNU Italia | Dr. Claudia Gravaghi PhD',
      de: 'Wissenschaftlicher Ausschuss ReNU-Syndrom Italien | Dr. Claudia Gravaghi PhD',
    },
    brochure: {
      it: 'Media & Pubblicazioni Sindrome ReNU | Articoli Scientifici e Brochure PDF',
      en: 'ReNU Syndrome Media & Publications | Scientific Articles and PDF Brochures',
      fr: 'Médias & Publications Syndrome ReNU | Articles Scientifiques et Brochures PDF',
      es: 'Medios & Publicaciones Síndrome ReNU | Artículos Científicos y Folletos PDF',
      de: 'Medien & Publikationen ReNU-Syndrom | Wissenschaftliche Artikel und PDF-Broschüren',
    },
    events: {
      it: 'Eventi e Incontri Sindrome ReNU Italia | Calendario 2026',
      en: 'ReNU Syndrome Italy Events & Meetings | 2026 Calendar',
      fr: 'Événements et Rencontres Syndrome ReNU Italie | Calendrier 2026',
      es: 'Eventos y Encuentros Síndrome ReNU Italia | Calendario 2026',
      de: 'Veranstaltungen und Treffen ReNU-Syndrom Italien | Kalender 2026',
    },
    projects: {
      it: 'Progetti e Iniziative Sindrome ReNU Italia | Campagne di Sensibilizzazione',
      en: 'ReNU Syndrome Italy Projects & Initiatives | Awareness Campaigns',
      fr: 'Projets et Initiatives Syndrome ReNU Italie | Campagnes de Sensibilisation',
      es: 'Proyectos e Iniciativas Síndrome ReNU Italia | Campañas de Sensibilización',
      de: 'Projekte und Initiativen ReNU-Syndrom Italien | Sensibilisierungskampagnen',
    },
    members: {
      it: 'Diventa Socio di Sindrome ReNU Italia APS | Iscrizione all\'Associazione',
      en: 'Become a Member of ReNU Syndrome Italy APS | Join the Association',
      fr: 'Devenir Membre de Syndrome ReNU Italie APS | Adhésion à l\'Association',
      es: 'Hazte Socio de Síndrome ReNU Italia APS | Inscripción en la Asociación',
      de: 'Mitglied werden bei ReNU-Syndrom Italien APS | Vereinsmitgliedschaft',
    },
    contact: {
      it: 'Contatta Sindrome ReNU Italia APS | Email, WhatsApp, Sede Legale',
      en: 'Contact ReNU Syndrome Italy APS | Email, WhatsApp, Legal Address',
      fr: 'Contacter Syndrome ReNU Italie APS | Email, WhatsApp, Siège Social',
      es: 'Contactar Síndrome ReNU Italia APS | Email, WhatsApp, Sede Legal',
      de: 'Kontakt ReNU-Syndrom Italien APS | E-Mail, WhatsApp, Satzungssitz',
    },
    privacy: {
      it: `Privacy Policy | ${SITE_NAME}`,
      en: `Privacy Policy | ${SITE_NAME}`,
      fr: `Politique de Confidentialité | ${SITE_NAME}`,
      es: `Política de Privacidad | ${SITE_NAME}`,
      de: `Datenschutzerklärung | ${SITE_NAME}`,
    },
  }

  // Meta description ottimizzata per ogni pagina (max 160 char)
  const pageDescs: Record<string, Record<string, string>> = {
    home: {
      it: 'Sindrome ReNU Italia APS: associazione no-profit per le famiglie con la sindrome RNU4-2. Sostieni la ricerca, ottieni supporto, dona il 5x1000. CF 98020680157.',
      en: 'ReNU Syndrome Italy APS: non-profit association for families with RNU4-2 syndrome. Support research, get help, donate your 5x1000. Tax code 98020680157.',
      fr: 'Syndrome ReNU Italie APS: association à but non lucratif pour les familles avec le syndrome RNU4-2. Soutenez la recherche, faites un don 5x1000.',
      es: 'Síndrome ReNU Italia APS: asociación sin ánimo de lucro para familias con síndrome RNU4-2. Apoya la investigación, dona tu 5x1000. NIF 98020680157.',
      de: 'ReNU-Syndrom Italien APS: gemeinnütziger Verein für Familien mit RNU4-2-Syndrom. Forschung unterstützen, Hilfe erhalten, 5x1000 spenden.',
    },
    about: {
      it: 'La Sindrome ReNU (RNU4-2) è una rara malattia genetica del neurosviluppo identificata nel 2024. Prevalenza 1:35.000. Scopri sintomi, caratteristiche e storia della scoperta.',
      en: 'ReNU Syndrome (RNU4-2) is a rare genetic neurodevelopmental disorder identified in 2024. Prevalence 1:35,000. Learn about symptoms, features and the story of discovery.',
      fr: 'Le Syndrome ReNU (RNU4-2) est une maladie génétique rare du neurodéveloppement identifiée en 2024. Prévalence 1:35 000. Découvrez les symptômes et caractéristiques.',
      es: 'El Síndrome ReNU (RNU4-2) es una enfermedad genética rara del neurodesarrollo identificada en 2024. Prevalencia 1:35.000. Síntomas, características y diagnóstico.',
      de: 'Das ReNU-Syndrom (RNU4-2) ist eine seltene genetische Neurodevelopment-Störung, die 2024 identifiziert wurde. Prävalenz 1:35.000. Symptome und Diagnose kennenlernen.',
    },
    diagnosis: {
      it: 'Per diagnosticare la Sindrome RNU4-2 serve il WGS (Whole Genome Sequencing). Il WES non rileva le varianti RNU4-2. Scopri i centri italiani abilitati al test.',
      en: 'RNU4-2 Syndrome diagnosis requires WGS (Whole Genome Sequencing). WES cannot detect RNU4-2 variants. Find Italian centres enabled for the test.',
      fr: 'Le diagnostic du Syndrome RNU4-2 nécessite un WGS (Séquençage du Génome Entier). Le WES ne détecte pas les variants RNU4-2. Centres italiens habilités.',
      es: 'El diagnóstico del Síndrome RNU4-2 requiere WGS (Secuenciación del Genoma Completo). El WES no detecta variantes RNU4-2. Centros italianos habilitados.',
      de: 'Die Diagnose des RNU4-2-Syndroms erfordert WGS (Whole Genome Sequencing). WES kann RNU4-2-Varianten nicht erkennen. Italianische Testzentren finden.',
    },
    therapies: {
      it: 'Terapie per la Sindrome ReNU: fisioterapia, logopedia, ABA, metodo Feuerstein, acquaticità, musicoterapia. Linee guida e risorse per le famiglie italiane.',
      en: 'Therapies for ReNU Syndrome: physiotherapy, speech therapy, ABA, Feuerstein method, aquatic therapy, music therapy. Guidelines and resources for families.',
      fr: 'Thérapies pour le Syndrome ReNU: kinésithérapie, orthophonie, ABA, méthode Feuerstein, balnéothérapie, musicothérapie. Ressources pour les familles.',
      es: 'Terapias para Síndrome ReNU: fisioterapia, logopedia, ABA, método Feuerstein, acuaterapia, musicoterapia. Guías y recursos para familias.',
      de: 'Therapien für ReNU-Syndrom: Physiotherapie, Logopädie, ABA, Feuerstein-Methode, Aquatherapie, Musiktherapie. Leitlinien und Ressourcen für Familien.',
    },
    research: {
      it: 'Pubblicazioni scientifiche sulla Sindrome ReNU (RNU4-2): studi su Nature, Nature Genetics, PubMed, American Journal of Medical Genetics. Aggiornamenti 2025-2026.',
      en: 'Scientific publications on ReNU Syndrome (RNU4-2): studies in Nature, Nature Genetics, PubMed, American Journal of Medical Genetics. Updates 2025-2026.',
      fr: 'Publications scientifiques sur le Syndrome ReNU (RNU4-2): études dans Nature, Nature Genetics, PubMed. Mises à jour 2025-2026.',
      es: 'Publicaciones científicas sobre Síndrome ReNU (RNU4-2): estudios en Nature, Nature Genetics, PubMed. Actualizaciones 2025-2026.',
      de: 'Wissenschaftliche Publikationen zum ReNU-Syndrom (RNU4-2): Studien in Nature, Nature Genetics, PubMed. Updates 2025-2026.',
    },
    community: {
      it: 'Comunità italiana della Sindrome ReNU: mappa delle famiglie, storie di vita, rete di supporto. Unisciti alla community su Instagram e Facebook.',
      en: 'Italian ReNU Syndrome community: family map, life stories, support network. Join the community on Instagram and Facebook.',
      fr: 'Communauté italienne du Syndrome ReNU: carte des familles, histoires, réseau de soutien. Rejoignez la communauté sur Instagram et Facebook.',
      es: 'Comunidad italiana del Síndrome ReNU: mapa de familias, historias de vida, red de apoyo. Únete a la comunidad en Instagram y Facebook.',
      de: 'Italienische ReNU-Syndrom-Community: Familienkarte, Lebensgeschichten, Unterstützungsnetzwerk. Treten Sie der Community auf Instagram und Facebook bei.',
    },
    donations: {
      it: 'Dona a Sindrome ReNU Italia APS: 5x1000 (CF 98020680157), bonifico IBAN, lascito testamentario, compleanno solidale. Ogni contributo fa la differenza.',
      en: 'Donate to ReNU Syndrome Italy APS: 5x1000 (tax code 98020680157), bank transfer, legacy donation, birthday fundraising. Every contribution matters.',
      fr: 'Faites un don au Syndrome ReNU Italie APS: 5x1000, virement bancaire, legs testamentaire. Code fiscal 98020680157. Chaque contribution compte.',
      es: 'Dona al Síndrome ReNU Italia APS: 5x1000 (NIF 98020680157), transferencia bancaria, legado testamentario. Cada contribución importa.',
      de: 'Spenden für ReNU-Syndrom Italien APS: 5x1000 (Steuernummer 98020680157), Banküberweisung, Erbschaft. Jeder Beitrag macht den Unterschied.',
    },
    faq: {
      it: 'Diritti e tutele per famiglie con Sindrome ReNU: Legge 104, Pass Auto Disabili, Disability Card, 5x1000, indennità accompagnamento, sostegno scolastico, GLO.',
      en: 'Rights and protections for ReNU Syndrome families: Law 104, Disability Car Badge, European Disability Card, school support, GLO. Italy guide.',
      fr: 'Droits et protections pour les familles avec Syndrome ReNU: Loi 104, Badge Handicap, Carte Européenne du Handicap, soutien scolaire. Guide Italie.',
      es: 'Derechos y protecciones para familias con Síndrome ReNU: Ley 104, Badge Discapacidad, Tarjeta Europea de Discapacidad, apoyo escolar. Guía Italia.',
      de: 'Rechte und Schutz für Familien mit ReNU-Syndrom: Gesetz 104, Behindertenparkausweis, Europäischer Behindertenausweis, Schulbegleitung. Italien-Leitfaden.',
    },
    science: {
      it: 'Comitato Scientifico di Sindrome ReNU Italia APS, guidato dalla Dr. Claudia Gravaghi PhD. Validazione contenuti, supporto alla diagnosi, ricerca e registro pazienti.',
      en: 'Scientific Committee of ReNU Syndrome Italy APS, led by Dr. Claudia Gravaghi PhD. Content validation, diagnostic support, research and patient registry.',
      fr: 'Comité Scientifique du Syndrome ReNU Italie APS, dirigé par le Dr Claudia Gravaghi PhD. Validation, soutien diagnostique, recherche et registre patients.',
      es: 'Comité Científico del Síndrome ReNU Italia APS, liderado por la Dra. Claudia Gravaghi PhD. Validación, soporte diagnóstico, investigación y registro.',
      de: 'Wissenschaftlicher Ausschuss des ReNU-Syndrom-Vereins Italien APS, geleitet von Dr. Claudia Gravaghi PhD. Inhaltsvalidierung, Diagnoseunterstützung, Forschung.',
    },
    brochure: {
      it: 'Scarica brochure, articoli scientifici e guide PDF sulla Sindrome ReNU: guida epilessia, Progetto Vita, pubblicazioni Nature e PubMed. Materiali per famiglie e medici.',
      en: 'Download brochures, scientific articles and PDF guides on ReNU Syndrome: epilepsy guide, Life Project, Nature and PubMed publications. Materials for families and doctors.',
      fr: 'Téléchargez brochures, articles scientifiques et guides PDF sur le Syndrome ReNU: guide épilepsie, Projet Vie, publications Nature et PubMed.',
      es: 'Descarga folletos, artículos científicos y guías PDF sobre Síndrome ReNU: guía epilepsia, Proyecto Vida, publicaciones Nature y PubMed.',
      de: 'Broschüren, wissenschaftliche Artikel und PDF-Leitfäden zum ReNU-Syndrom herunterladen: Epilepsie-Leitfaden, Lebensprojekt, Nature- und PubMed-Publikationen.',
    },
    events: {
      it: 'Calendario eventi Sindrome ReNU Italia 2026: convegni, incontri per famiglie, Dynamo Camp per bambini con malattie rare. Non perderti i prossimi appuntamenti.',
      en: 'ReNU Syndrome Italy 2026 events calendar: conferences, family meetings, Dynamo Camp for children with rare diseases. Don\'t miss upcoming events.',
      fr: 'Calendrier des événements Syndrome ReNU Italie 2026: conférences, rencontres familiales, Dynamo Camp pour enfants atteints de maladies rares.',
      es: 'Calendario de eventos Síndrome ReNU Italia 2026: conferencias, encuentros para familias, Dynamo Camp para niños con enfermedades raras.',
      de: 'Veranstaltungskalender ReNU-Syndrom Italien 2026: Konferenzen, Familientreffen, Dynamo Camp für Kinder mit seltenen Krankheiten.',
    },
    projects: {
      it: 'Progetti e campagne di Sindrome ReNU Italia APS: sensibilizzazione, consapevolezza sulla malattia, raccolta fondi e iniziative per le famiglie.',
      en: 'ReNU Syndrome Italy APS projects and campaigns: awareness, disease education, fundraising and family initiatives.',
      fr: 'Projets et campagnes de Syndrome ReNU Italie APS: sensibilisation, éducation sur la maladie, collecte de fonds et initiatives familiales.',
      es: 'Proyectos y campañas de Síndrome ReNU Italia APS: sensibilización, educación sobre la enfermedad, recaudación de fondos e iniciativas familiares.',
      de: 'Projekte und Kampagnen des ReNU-Syndrom-Vereins Italien APS: Sensibilisierung, Krankheitsaufklärung, Spendenaktionen und Familieninitiativen.',
    },
    members: {
      it: 'Diventa socio di Sindrome ReNU Italia APS. Unisciti alla rete di famiglie, medici e sostenitori che ogni giorno lavorano per i bambini con sindrome RNU4-2.',
      en: 'Become a member of ReNU Syndrome Italy APS. Join the network of families, doctors and supporters who work every day for children with RNU4-2 syndrome.',
      fr: 'Devenez membre du Syndrome ReNU Italie APS. Rejoignez le réseau de familles, médecins et supporters qui œuvrent chaque jour pour les enfants.',
      es: 'Hazte socio del Síndrome ReNU Italia APS. Únete a la red de familias, médicos y seguidores que trabajan cada día por los niños con síndrome RNU4-2.',
      de: 'Werden Sie Mitglied des ReNU-Syndrom-Vereins Italien APS. Treten Sie dem Netzwerk aus Familien, Ärzten und Unterstützern bei.',
    },
    contact: {
      it: 'Contatta Sindrome ReNU Italia APS: email info@sindromerenu.it, WhatsApp, modulo di contatto. Siamo qui per le famiglie, i medici e i sostenitori.',
      en: 'Contact ReNU Syndrome Italy APS: email info@sindromerenu.it, WhatsApp, contact form. We are here for families, doctors and supporters.',
      fr: 'Contactez Syndrome ReNU Italie APS: email info@sindromerenu.it, WhatsApp, formulaire de contact. Nous sommes là pour les familles et les médecins.',
      es: 'Contacta Síndrome ReNU Italia APS: email info@sindromerenu.it, WhatsApp, formulario. Estamos aquí para familias, médicos y seguidores.',
      de: 'Kontaktieren Sie ReNU-Syndrom Italien APS: E-Mail info@sindromerenu.it, WhatsApp, Kontaktformular. Wir sind für Familien und Ärzte da.',
    },
    privacy: {
      it: `Informativa sulla Privacy di ${SITE_NAME}. Scopri come trattiamo i tuoi dati personali in conformità al GDPR.`,
      en: `Privacy Policy of ${SITE_NAME}. Learn how we handle your personal data in compliance with GDPR.`,
      fr: `Politique de Confidentialité de ${SITE_NAME}. Découvrez comment nous traitons vos données personnelles conformément au RGPD.`,
      es: `Política de Privacidad de ${SITE_NAME}. Descubra cómo tratamos sus datos personales de conformidad con el RGPD.`,
      de: `Datenschutzerklärung von ${SITE_NAME}. Erfahren Sie, wie wir Ihre personenbezogenen Daten gemäß der DSGVO verarbeiten.`,
    },
  }

  // Risolvi il page slug (gestisce alias come 'progetti'→'projects', 'eventi'→'events' ecc.)
  const pageSlugNorm = (['progetti','projects'].includes(page) ? 'projects'
    : ['eventi','events'].includes(page) ? 'events'
    : ['membri','members','diventa-socio'].includes(page) ? 'members'
    : ['comitato-scientifico','science'].includes(page) ? 'science'
    : page) as string
  const lang = t.lang as string
  const canonicalUrl = `${BASE_URL}/${lang}/${pageSlugNorm}`
  const seoTitle   = (pageTitles[pageSlugNorm]?.[lang] ?? pageTitles[pageSlugNorm]?.['it']) || t.title
  const seoDesc    = (pageDescs[pageSlugNorm]?.[lang]  ?? pageDescs[pageSlugNorm]?.['it'])  || t.tagline

  // hreflang per tutte le lingue
  const hreflangs = ['it','en','fr','es','de'].map(l =>
    `  <link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}/${pageSlugNorm}">`
  ).join('\n')

  // JSON-LD: NGO (homepage) + MedicalCondition (about/home) + BreadcrumbList (tutte)
  const jsonLdNGO = page === 'home' || pageSlugNorm === 'home' ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Sindrome ReNU Italia APS",
    "alternateName": ["ReNU Italia", "ReNU Syndrome Italy"],
    "url": "${BASE_URL}",
    "logo": "${BASE_URL}/icons/icon-512x512.png",
    "image": "${OG_IMAGE}",
    "description": "Associazione italiana no-profit per le famiglie con la Sindrome ReNU (variante RNU4-2), rara malattia genetica del neurosviluppo identificata nel 2024.",
    "foundingDate": "2024",
    "areaServed": "Italy",
    "knowsAbout": ["RNU4-2 syndrome", "rare genetic disease", "neurodevelopmental disorder", "snRNA", "spliceosome"],
    "taxID": "98020680157",
    "nonprofitStatus": "Associazione di Promozione Sociale",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@sindromerenu.it",
      "contactType": "customer support",
      "availableLanguage": ["Italian", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/sindrome_renu_italia_aps_",
      "https://www.facebook.com/share/1JJ787h377/",
      "https://www.facebook.com/share/1K7eVNCXtM/",
      "https://www.youtube.com/@sindromerenu"
    ],
    "potentialAction": {
      "@type": "DonateAction",
      "name": "Dona a Sindrome ReNU Italia APS",
      "target": "${BASE_URL}/${lang}/donations",
      "recipient": {
        "@type": "NGO",
        "name": "Sindrome ReNU Italia APS",
        "url": "${BASE_URL}",
        "taxID": "98020680157"
      }
    }
  }
  </script>` : ''

  const jsonLdCondition = (pageSlugNorm === 'home' || pageSlugNorm === 'about') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Sindrome ReNU",
    "alternateName": ["RNU4-2 Syndrome", "ReNU Syndrome", "Sindrome RNU4-2", "RNU4-2 Neurodevelopmental Disorder"],
    "description": "La Sindrome ReNU è una rara malattia genetica del neurosviluppo causata da varianti del gene RNU4-2 (piccolo RNA nucleare U4). Identificata nell'ottobre 2024, ha una prevalenza stimata di circa 1 su 35.000 nati vivi. È caratterizzata da disabilità intellettiva, epilessia, anomalie cerebrali, ipotonia e caratteristiche dismorfiche.",
    "code": {
      "@type": "MedicalCode",
      "codeValue": "RNU4-2",
      "codingSystem": "HGNC"
    },
    "associatedGene": {
      "@type": "Gene",
      "name": "RNU4-2",
      "description": "Gene che codifica per lo snRNA U4, componente essenziale del complesso di splicing dell'mRNA (spliceosoma). Varianti patogenetiche in RNU4-2 causano la Sindrome ReNU."
    },
    "prevalence": "Circa 1 su 35.000 nati vivi",
    "typicalAgeRange": "Infanzia–adolescenza",
    "relevantSpecialty": [
      {"@type": "MedicalSpecialty", "name": "Genetics"},
      {"@type": "MedicalSpecialty", "name": "Neurology"},
      {"@type": "MedicalSpecialty", "name": "Pediatrics"}
    ],
    "signOrSymptom": [
      {"@type": "MedicalSymptom", "name": "Disabilità intellettiva da moderata a grave"},
      {"@type": "MedicalSymptom", "name": "Epilessia (spasmi infantili, crisi focali, tonico-cloniche)"},
      {"@type": "MedicalSymptom", "name": "Ritardo del neurosviluppo"},
      {"@type": "MedicalSymptom", "name": "Anomalie cerebrali alla RM (materia bianca ridotta, ventricolomegalia, ipoplasia del corpo calloso)"},
      {"@type": "MedicalSymptom", "name": "Ipotonia muscolare"},
      {"@type": "MedicalSymptom", "name": "Ipoplasia del nervo ottico e CVI"},
      {"@type": "MedicalSymptom", "name": "Difficoltà di linguaggio"},
      {"@type": "MedicalSymptom", "name": "Microcefalia e bassa statura"},
      {"@type": "MedicalSymptom", "name": "Difficoltà alimentari e reflusso"}
    ],
    "possibleTreatment": [
      {"@type": "MedicalTherapy", "name": "Fisioterapia"},
      {"@type": "MedicalTherapy", "name": "Logopedia"},
      {"@type": "MedicalTherapy", "name": "ABA – Applied Behavior Analysis"},
      {"@type": "MedicalTherapy", "name": "Metodo Feuerstein"},
      {"@type": "MedicalTherapy", "name": "Terapia acquatica e ippoterapia"},
      {"@type": "MedicalTherapy", "name": "Musicoterapia"},
      {"@type": "MedicalTherapy", "name": "Terapia occupazionale"}
    ],
    "typicalTest": [
      {"@type": "MedicalTest", "name": "WGS – Whole Genome Sequencing"},
      {"@type": "MedicalTest", "name": "Sequenziamento dell'Intero Genoma"}
    ],
    "diagnosisMethod": "Sequenziamento dell'Intero Genoma (WGS) obbligatorio; il WES non rileva varianti introniche profonde del gene RNU4-2.",
    "url": "${BASE_URL}/it/about",
    "sameAs": [
      "https://en.wikipedia.org/wiki/RNU4-2",
      "https://www.omim.org/entry/620849",
      "https://rarediseases.info.nih.gov/diseases/RNU4-2",
      "https://www.orpha.net/consor/cgi-bin/OC_Exp.php?lng=EN&Expert=RNU4-2"
    ]
  }
  </script>` : ''

  const jsonLdBreadcrumb = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "${BASE_URL}/${lang}/home"
      }${pageSlugNorm !== 'home' ? `,
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${seoTitle.split('|')[0].trim()}",
        "item": "${canonicalUrl}"
      }` : ''}
    ]
  }
  </script>`

  // ── JSON-LD: WebSite + Sitelinks SearchBox (solo home) ──────────────────
  const jsonLdWebSite = (pageSlugNorm === 'home') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sindrome ReNU Italia APS",
    "url": "${BASE_URL}",
    "description": "Associazione italiana per le famiglie con la Sindrome ReNU (RNU4-2), rara malattia genetica del neurosviluppo.",
    "inLanguage": ["it","en","fr","es","de"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "${BASE_URL}/it/faq"
      },
      "query-input": "required name=search_term_string"
    }
  }
  </script>` : ''

  // ── JSON-LD: Person — Claudia Gravaghi (solo pagina science) ────────────
  const jsonLdPerson = (pageSlugNorm === 'science') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Claudia Gravaghi",
    "honorificSuffix": "PhD",
    "jobTitle": "Responsabile Comitato Scientifico",
    "affiliation": {
      "@type": "NGO",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}"
    },
    "knowsAbout": ["RNU4-2 syndrome", "rare genetic disease", "neurodevelopmental disorder", "snRNA", "epigenetics"],
    "url": "${BASE_URL}/it/comitato-scientifico",
    "email": "presidenza@sindromerenu.it"
  }
  </script>` : ''

  // ── JSON-LD: MedicalWebPage per about / diagnosis / therapies ───────────────
  const jsonLdMedPage = (['about','diagnosis','therapies'].includes(pageSlugNorm)) ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "${seoTitle.replace(/"/g,"'")}",
    "description": "${seoDesc.replace(/"/g,"'")}",
    "url": "${canonicalUrl}",
    "datePublished": "2024-12-01",
    "dateModified": "2026-09-18",
    "inLanguage": "${lang}",
    "about": {
      "@type": "MedicalCondition",
      "name": "Sindrome ReNU",
      "alternateName": "RNU4-2 Syndrome"
    },
    "audience": {"@type": "Patient"},
    "publisher": {
      "@type": "NGO",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}"
    },
    "medicalAudience": [
      {"@type": "MedicalAudience", "audienceType": "Patient"},
      {"@type": "MedicalAudience", "audienceType": "Caregiver"}
    ]${pageSlugNorm === 'diagnosis' ? `,
    "specialty": "Genetics"` : pageSlugNorm === 'therapies' ? `,
    "specialty": "Pediatric neurology"` : ''}
  }
  </script>` : ''

  // ── JSON-LD: ScholarlyArticle per pagina /research ───────────────────────────
  const jsonLdResearch = (pageSlugNorm === 'research') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${seoTitle.replace(/"/g,"'")}",
    "description": "${seoDesc.replace(/"/g,"'")}",
    "url": "${canonicalUrl}",
    "inLanguage": "${lang}",
    "about": {"@type": "MedicalCondition", "name": "Sindrome ReNU", "alternateName": "RNU4-2 Syndrome"},
    "publisher": {"@type": "NGO", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
    "hasPart": [
      {
        "@type": "ScholarlyArticle",
        "name": "De novo variants in RNU4-2 cause a frequent neurodevelopmental syndrome",
        "author": "Hollingsworth et al.",
        "datePublished": "2024",
        "sameAs": "https://pubmed.ncbi.nlm.nih.gov/39169177/",
        "identifier": {"@type": "PropertyValue", "propertyID": "PMID", "value": "39169177"}
      },
      {
        "@type": "ScholarlyArticle",
        "name": "RNU4-2 as a major cause of neurodevelopmental disorders in exome-sequenced patients",
        "datePublished": "2025",
        "sameAs": "https://pubmed.ncbi.nlm.nih.gov/42419151/",
        "identifier": {"@type": "PropertyValue", "propertyID": "PMID", "value": "42419151"}
      },
      {
        "@type": "ScholarlyArticle",
        "name": "Longitudinal Behavior Phenotype Hallmarks in RNU4-2 Syndrome",
        "datePublished": "2026",
        "sameAs": "https://pubmed.ncbi.nlm.nih.gov/41681065/",
        "identifier": {"@type": "PropertyValue", "propertyID": "PMID", "value": "41681065"}
      },
      {
        "@type": "ScholarlyArticle",
        "name": "Biallelic variants in RNU4-2 cause a recessive neurodevelopmental syndrome",
        "datePublished": "2026",
        "sameAs": "https://pubmed.ncbi.nlm.nih.gov/41951959/",
        "identifier": {"@type": "PropertyValue", "propertyID": "PMID", "value": "41951959"}
      }
    ]
  }
  </script>` : ''

  // ── JSON-LD: DonateAction per pagina /donations ──────────────────────────────
  const jsonLdDonate = (pageSlugNorm === 'donations') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "name": "Dona alla Sindrome ReNU Italia APS",
    "description": "Sostieni la ricerca e le famiglie italiane con Sindrome ReNU (RNU4-2). Donazione tramite bonifico, 5x1000 (CF 98020680157) o lascito testamentario.",
    "url": "${canonicalUrl}",
    "recipient": {
      "@type": "NGO",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}",
      "taxID": "98020680157",
      "nonprofitStatus": "Associazione di Promozione Sociale",
      "email": "info@sindromerenu.it"
    },
    "object": {
      "@type": "MonetaryAmount",
      "currency": "EUR"
    }
  }
  </script>` : ''

  // ── JSON-LD: JoinAction / Organization per pagina /members ───────────────────
  const jsonLdJoin = (pageSlugNorm === 'members') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "JoinAction",
    "name": "Diventa Socio di Sindrome ReNU Italia APS",
    "description": "Iscriviti come socio dell'associazione italiana per la Sindrome ReNU (RNU4-2). Supporta le famiglie e la ricerca.",
    "url": "${canonicalUrl}",
    "agent": {"@type": "Person", "description": "Genitore, familiare o sostenitore di persone con Sindrome ReNU"},
    "object": {
      "@type": "Organization",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}",
      "email": "info@sindromerenu.it",
      "taxID": "98020680157"
    }
  }
  </script>` : ''

  // ── JSON-LD: Article per community / projects / brochure ────────────────────
  // ── JSON-LD: DefinedTermSet per il glossario medico ──────────────────────────
  const jsonLdGlossary = (['glossary','glossario'].includes(pageSlugNorm)) ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "${lang === 'it' ? 'Glossario Sindrome ReNU (RNU4-2)' : lang === 'en' ? 'Glossary ReNU Syndrome (RNU4-2)' : lang === 'fr' ? 'Glossaire Syndrome ReNU (RNU4-2)' : lang === 'es' ? 'Glosario Síndrome ReNU (RNU4-2)' : 'Glossar ReNU-Syndrom (RNU4-2)'}",
    "description": "${lang === 'it' ? 'Glossario di termini medici relativi alla Sindrome ReNU (RNU4-2), redatto dal Comitato Scientifico di Sindrome ReNU Italia APS' : lang === 'fr' ? 'Glossaire de termes médicaux relatifs au Syndrome ReNU (RNU4-2), rédigé par le Comité Scientifique de Sindrome ReNU Italia APS' : lang === 'es' ? 'Glosario de términos médicos relativos al Síndrome ReNU (RNU4-2), redactado por el Comité Científico de Sindrome ReNU Italia APS' : lang === 'de' ? 'Glossar medizinischer Begriffe zum ReNU-Syndrom (RNU4-2), erstellt vom Wissenschaftlichen Ausschuss von Sindrome ReNU Italia APS' : 'Glossary of medical terms related to ReNU Syndrome (RNU4-2), prepared by the Scientific Committee of Sindrome ReNU Italia APS'}",
    "url": "${canonicalUrl}",
    "inLanguage": "${lang}",
    "dateModified": "2026-09-18",
    "publisher": {
      "@type": "NGO",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}",
      "logo": {"@type": "ImageObject", "url": "${BASE_URL}/icons/icon-512x512.png"}
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Sindrome ReNU",
      "alternateName": "RNU4-2 Syndrome"
    }
  }
  </script>` : ''

  const jsonLdArticle = (['community','projects','brochure'].includes(pageSlugNorm)) ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${seoTitle.replace(/"/g,"'")}",
    "description": "${seoDesc.replace(/"/g,"'")}",
    "url": "${canonicalUrl}",
    "datePublished": "2024-12-01",
    "dateModified": "2026-09-18",
    "inLanguage": "${lang}",
    "image": "${OG_IMAGE}",
    "author": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
    "publisher": {
      "@type": "Organization",
      "name": "Sindrome ReNU Italia APS",
      "url": "${BASE_URL}",
      "logo": {"@type": "ImageObject", "url": "${BASE_URL}/icons/icon-512x512.png"}
    },
    "about": {"@type": "MedicalCondition", "name": "Sindrome ReNU", "alternateName": "RNU4-2 Syndrome"}
  }
  </script>` : ''

  // ── HowTo: Legge 104/92 — procedura richiesta (solo pagina FAQ, solo IT) ──
  const jsonLdHowTo = (pageSlugNorm === 'faq' && lang === 'it') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Come ottenere il riconoscimento ai sensi della Legge 104/92",
    "description": "Procedura per ottenere il riconoscimento della disabilità ai sensi della Legge 104/92 in Italia, utile per le famiglie con Sindrome ReNU (RNU4-2).",
    "url": "${BASE_URL}/it/faq",
    "totalTime": "P60D",
    "tool": [
      {"@type": "HowToTool", "name": "Certificato medico del medico di base"},
      {"@type": "HowToTool", "name": "Documentazione clinica specialistica"},
      {"@type": "HowToTool", "name": "Codice fiscale del richiedente"}
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Richiesta certificato medico introduttivo",
        "text": "Rivolgersi al medico di base per ottenere il certificato medico introduttivo da inviare all'INPS in via telematica. Il medico compila il certificato sul portale INPS con il codice fiscale del paziente.",
        "url": "${BASE_URL}/it/faq"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Presentazione domanda all'INPS",
        "text": "Presentare domanda di accertamento all'INPS tramite il portale online (www.inps.it), CAF, patronato o con PIN/SPID. Allegare il numero del certificato medico introduttivo già inviato dal medico.",
        "url": "${BASE_URL}/it/faq"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Visita della Commissione Medica INPS",
        "text": "Presentarsi alla visita medica presso la Commissione INPS (o ASL territoriale) nella data comunicata. Portare tutta la documentazione sanitaria disponibile, incluse relazioni di neuropsichiatria infantile, genetica e fisiatria.",
        "url": "${BASE_URL}/it/faq"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Ricevimento del verbale di invalidità",
        "text": "Ricevere il verbale di invalidità civile/disabilità per posta o tramite SPID sul portale INPS. Il verbale indica la percentuale di invalidità e il diritto alle prestazioni collegate.",
        "url": "${BASE_URL}/it/faq"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Richiesta agevolazioni collegate",
        "text": "Sulla base del verbale, richiedere le agevolazioni collegate: indennità di accompagnamento (se titolari), Pass Disabili per parcheggio, Disability Card europea, benefici fiscali (detrazione IRPEF), sostegno scolastico (insegnante di sostegno, Piano Educativo Individualizzato).",
        "url": "${BASE_URL}/it/faq"
      }
    ],
    "author": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
    "publisher": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}", "taxID": "98020680157"}
  }
  </script>` : ''

  // ── SpeakableSpecification — ottimizza risposte vocali assistenti AI (home + about + faq) ──
  const jsonLdSpeakable = (['home','about','faq'].includes(pageSlugNorm)) ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "${canonicalUrl}",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1","main p:first-of-type","[data-speakable]"]
    },
    "name": "${seoTitle.replace(/"/g, "'")}"
  }
  </script>` : ''

  // ── VideoObject — due video YouTube presenti sulla pagina community ──
  const jsonLdVideo = (pageSlugNorm === 'community') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": "Sindrome ReNU – Presentazione dell'associazione italiana",
        "description": "Video di presentazione di Sindrome ReNU Italia APS, associazione no-profit per le famiglie colpite dalla Sindrome ReNU (RNU4-2), malattia rara del neurosviluppo.",
        "thumbnailUrl": "https://img.youtube.com/vi/LqWlxU11UPM/maxresdefault.jpg",
        "uploadDate": "2024-12-01",
        "contentUrl": "https://www.youtube.com/watch?v=LqWlxU11UPM",
        "embedUrl": "https://www.youtube.com/embed/LqWlxU11UPM",
        "publisher": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
        "inLanguage": "it",
        "about": {"@type": "MedicalCondition", "name": "Sindrome ReNU", "alternateName": "RNU4-2 Syndrome"}
      },
      {
        "@type": "VideoObject",
        "name": "Sindrome ReNU – Sensibilizzazione e ricerca 2025",
        "description": "Video di sensibilizzazione sulla Sindrome ReNU (RNU4-2): diagnosi, sintomi, ricerca scientifica e il ruolo delle famiglie italiane.",
        "thumbnailUrl": "https://img.youtube.com/vi/Pe_5GQ7bei4/maxresdefault.jpg",
        "uploadDate": "2025-01-01",
        "contentUrl": "https://www.youtube.com/watch?v=Pe_5GQ7bei4",
        "embedUrl": "https://www.youtube.com/embed/Pe_5GQ7bei4",
        "publisher": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
        "inLanguage": "it",
        "about": {"@type": "MedicalCondition", "name": "Sindrome ReNU", "alternateName": "RNU4-2 Syndrome"}
      }
    ]
  }
  </script>` : ''

  // ── ItemList: 9 Schede Maya Gesti Comunicativi (pagina therapies) ──
  const jsonLdGestiItemList = (pageSlugNorm === 'therapies') ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Esempi di Gesti Comunicativi CAA – Schede Maya",
    "description": "Le 9 categorie di gesti comunicativi del sistema CAA Schede Maya per bambini con Sindrome ReNU (RNU4-2).",
    "url": "${BASE_URL}/${lang}/therapies",
    "numberOfItems": 9,
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Ambienti e Direzioni", "description": "Gesti per: su, giù, dentro, fuori, qui, là, vicino, lontano"},
      {"@type": "ListItem", "position": 2, "name": "Risposte e Indicazioni", "description": "Gesti per: sì, no, basta, aspetta, ancora, aiuto, stop"},
      {"@type": "ListItem", "position": 3, "name": "Richieste", "description": "Gesti per: dammi, vieni, guarda, apri, chiudi, porta"},
      {"@type": "ListItem", "position": 4, "name": "Persone e Relazioni", "description": "Gesti per: io, tu, abbraccio, bacio, mamma, papà, amico"},
      {"@type": "ListItem", "position": 5, "name": "Emozioni e Conferme", "description": "Gesti per: tenerezza, bravo, bene, ok, tristezza, paura, felice"},
      {"@type": "ListItem", "position": 6, "name": "Bisogni e Alimentazione", "description": "Gesti per: ho fame, mangiare, bere, buono, non voglio, ancora, finito"},
      {"@type": "ListItem", "position": 7, "name": "Azioni e Attività", "description": "Gesti per: giocare, dormire, camminare, correre, fare, andare, fermarsi"},
      {"@type": "ListItem", "position": 8, "name": "Scuola e Apprendimento", "description": "Gesti per: libro, penna, disegnare, leggere, scrivere, bravo, finito"},
      {"@type": "ListItem", "position": 9, "name": "Igiene e Cura di Sé", "description": "Gesti per: lavarsi, bagno, denti, vestirsi, pettinarsi, stanco, dolore"}
    ],
    "author": {"@type": "Organization", "name": "Sindrome ReNU Italia APS", "url": "${BASE_URL}"},
    "about": {"@type": "MedicalCondition", "name": "Sindrome ReNU", "alternateName": "RNU4-2 Syndrome"}
  }
  </script>` : ''

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="build" content="2026-09-18-settembre">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

  <!-- ── SEO: Title e Description per pagina ── -->
  <title>${seoTitle}</title>
  <meta name="description" content="${seoDesc}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="author" content="Sindrome ReNU Italia APS">
  <meta name="keywords" content="${
    pageSlugNorm === 'home'      ? 'sindrome ReNU, RNU4-2, malattia rara genetica, neurosviluppo, associazione famiglie, Italia, donazione, 5x1000' :
    pageSlugNorm === 'about'     ? 'cos è sindrome ReNU, RNU4-2 sintomi, gene RNU4-2, spliceosoma, malattia rara neurosviluppo, diagnosi genetica' :
    pageSlugNorm === 'diagnosis' ? 'diagnosi RNU4-2, WGS whole genome sequencing, test genetico malattia rara, centri specializzati Italia' :
    pageSlugNorm === 'therapies' ? 'terapie sindrome ReNU, fisioterapia, logopedia, ABA, Feuerstein, acquaticità, musicoterapia, disabilità bambini' :
    pageSlugNorm === 'research'  ? 'ricerca RNU4-2, pubblicazioni scientifiche sindrome ReNU, PubMed, Nature Genetics, aggiornamenti 2026' :
    pageSlugNorm === 'donations' ? 'donare associazione malattia rara, 5x1000 98020680157, lascito testamentario, bonifico sindrome ReNU' :
    pageSlugNorm === 'faq'       ? 'diritti disabilità Italia, legge 104, disability card, pass auto disabili, indennità accompagnamento, sostegno scolastico' :
    pageSlugNorm === 'science'   ? 'comitato scientifico sindrome ReNU, Claudia Gravaghi, ricerca genetica, validazione scientifica' :
    pageSlugNorm === 'community' ? 'community sindrome ReNU, famiglie italiane RNU4-2, rete supporto, storie bambini, associazione genitori' :
    'sindrome ReNU, RNU4-2, malattia rara, associazione famiglie Italia'
  }">

  <!-- ── Canonical e hreflang ── -->
  <link rel="canonical" href="${canonicalUrl}">
${hreflangs}
  <link rel="alternate" hreflang="x-default" href="${BASE_URL}/it/${pageSlugNorm}">

  <!-- ── Open Graph (Facebook, LinkedIn, WhatsApp) ── -->
  <meta property="og:type" content="${pageSlugNorm === 'home' ? 'website' : 'article'}">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:title" content="${seoTitle}">
  <meta property="og:description" content="${seoDesc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Sindrome ReNU Italia APS — ${t.lang === 'it' ? 'Associazione per la Sindrome RNU4-2' : 'Association for RNU4-2 Syndrome'}">
  <meta property="og:locale" content="${
    lang === 'it' ? 'it_IT' : lang === 'en' ? 'en_GB' : lang === 'fr' ? 'fr_FR' : lang === 'es' ? 'es_ES' : 'de_DE'
  }">

  <!-- ── Twitter / X Card ── -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@sindromerenu_it">
  <meta name="twitter:creator" content="@sindromerenu_it">
  <meta name="twitter:title" content="${seoTitle}">
  <meta name="twitter:description" content="${seoDesc}">
  <meta name="twitter:image" content="${OG_IMAGE}">
  <meta name="twitter:image:alt" content="Sindrome ReNU Italia APS">

  <!-- ── Geo / Location ── -->
  <meta name="geo.region" content="IT">
  <meta name="geo.placename" content="Italia">
  <meta name="geo.position" content="41.9028;12.4964">
  <meta name="ICBM" content="41.9028, 12.4964">
  <meta name="language" content="${t.lang}">

  <!-- ── Dublin Core / DCTERMS (motori accademici: BASE, CORE, OpenAIRE) ── -->
  <meta name="DC.title" content="${seoTitle}">
  <meta name="DC.description" content="${seoDesc}">
  <meta name="DC.language" content="${t.lang}">
  <meta name="DC.type" content="${pageSlugNorm === 'home' ? 'Text' : 'Text'}">
  <meta name="DC.publisher" content="Sindrome ReNU Italia APS">
  <meta name="DC.rights" content="https://www.sindromerenu.it/it/privacy">
  <meta name="DC.subject" content="Sindrome ReNU; RNU4-2; malattia rara; neurosviluppo; genetica">
  <meta name="DC.date" content="2026-09-18">
  <meta name="DCTERMS.modified" content="2026-09-18">
  <meta name="DCTERMS.language" content="${t.lang}">
  <meta name="DCTERMS.license" content="https://www.sindromerenu.it/it/privacy">

  <!-- ── Article metadata (pagine non-home) ── -->
  ${pageSlugNorm !== 'home' ? `<meta property="article:published_time" content="2024-12-01T00:00:00Z">
  <meta property="article:modified_time" content="2026-09-18T00:00:00Z">
  <meta property="article:author" content="Sindrome ReNU Italia APS">
  <meta property="article:section" content="${
    pageSlugNorm === 'about'     ? 'Malattia Rara' :
    pageSlugNorm === 'diagnosis' ? 'Diagnosi Genetica' :
    pageSlugNorm === 'therapies' ? 'Terapie' :
    pageSlugNorm === 'research'  ? 'Ricerca Scientifica' :
    pageSlugNorm === 'community' ? 'Community' :
    pageSlugNorm === 'donations' ? 'Donazioni' :
    pageSlugNorm === 'faq'       ? 'FAQ e Diritti' :
    pageSlugNorm === 'science'   ? 'Comitato Scientifico' :
    pageSlugNorm === 'brochure'  ? 'Pubblicazioni' :
    pageSlugNorm === 'events'    ? 'Eventi' :
    pageSlugNorm === 'projects'  ? 'Progetti' :
    pageSlugNorm === 'members'   ? 'Associazione' :
    pageSlugNorm === 'contact'   ? 'Contatti' :
    pageSlugNorm === 'privacy'   ? 'Privacy' : 'Informazioni'
  }">
  <meta property="article:tag" content="Sindrome ReNU">
  <meta property="article:tag" content="RNU4-2">
  <meta property="article:tag" content="malattia rara">
  <meta property="article:tag" content="neurosviluppo">` : ''}

  <!-- ── OG extra ── -->
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:secure_url" content="${OG_IMAGE}">
  ${['en','fr','es','de'].filter(l => l !== t.lang).map(l =>
    `<meta property="og:locale:alternate" content="${l === 'en' ? 'en_US' : l === 'fr' ? 'fr_FR' : l === 'es' ? 'es_ES' : 'de_DE'}">`
  ).join('\n  ')}

  <!-- ── Favicon: tutti i browser e dispositivi ── -->
  <!-- Chrome/Firefox/Edge: preferisce SVG (vettoriale, qualsiasi dimensione) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <!-- Safari < 12 / Android Chrome < 80: fallback PNG 32px -->
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-60x60.png">
  <!-- Favicon ICO classico (IE, vecchi browser) -->
  <link rel="shortcut icon" href="/icons/icon-57x57.png">
  <!-- ── PWA / App ── -->
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  <!-- iOS / Safari: apple-touch-icon (usato su home screen iPhone/iPad) -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="ReNU Italia">
  <!-- iOS usa la prima apple-touch-icon che matcha (o la più grande disponibile) -->
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png">
  <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png">
  <link rel="apple-touch-icon" sizes="76x76"   href="/icons/icon-76x76.png">
  <link rel="apple-touch-icon" sizes="72x72"   href="/icons/icon-72x72.png">
  <link rel="apple-touch-icon" sizes="60x60"   href="/icons/icon-60x60.png">
  <!-- Android / Chrome -->
  <meta name="theme-color" content="#082050">
  <meta name="mobile-web-app-capable" content="yes">
  <!-- Preconnect per ridurre la latenza CDN -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <!-- Tailwind: bloccante (indispensabile per il render corretto — evita FOUC e CLS) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <!-- FontAwesome: bloccante (le icone sono presenti inline nel DOM, caricarle async causa CLS) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <style>
    :root {
      --navy:   #082050;
      --blue:   #1078C0;
      --sky:    #45B8EC;
      --pale:   #C8E8F8;
      --bg:     #EEF6FB;
      --white:  #FFFFFF;
    }
    /* System font stack — nessuna richiesta a Google Fonts (GDPR Art. 5.1.c) */
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: var(--bg);
    }
    /* font-display: swap per Font Awesome — evita FOIT (Flash of Invisible Text) */
    @font-face { font-family: 'Font Awesome 6 Free'; font-display: swap; src: url('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/webfonts/fa-solid-900.woff2') format('woff2'); font-weight: 900; }
    @font-face { font-family: 'Font Awesome 6 Brands'; font-display: swap; src: url('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/webfonts/fa-brands-400.woff2') format('woff2'); font-weight: 400; }
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
    /* Usa transform+opacity (composite) invece di box-shadow (non-composite → CLS) */
    .btn-diagnosis {
      background: linear-gradient(135deg, #E74C3C, #C0392B);
      animation: pulse-red 2.2s infinite;
      will-change: transform, opacity;
    }
    @keyframes pulse-red {
      0%, 100% { transform: scale(1);   opacity: 1;    }
      50%       { transform: scale(1.04); opacity: 0.92; }
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

    /* ── Responsive fixes (legacy — esteso nel blocco RESPONSIVE GLOBALE sopra) ── */
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

    /* ═══════════════════════════════════════════════════════════════
       RESPONSIVE GLOBALE — MOBILE-FIRST
       Breakpoints: xs <480  sm 480-767  md 768-1023  lg 1024+
       ═══════════════════════════════════════════════════════════════ */

    /* Base: previene scroll orizzontale globale */
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      overflow-x: hidden;
      width: 100%;
      -webkit-text-size-adjust: 100%; /* Safari: no auto-scaling del testo */
    }

    /* ── Padding orizzontale pagina adattivo ── */
    section, .section-light, .section-white, .section-pale {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    @media (min-width: 640px) {
      section, .section-light, .section-white, .section-pale {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
      }
    }
    @media (min-width: 1024px) {
      section, .section-light, .section-white, .section-pale {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    /* ── Tipografia scalabile su mobile ── */
    @media (max-width: 479px) {
      h1 { font-size: 1.6rem !important; line-height: 2rem !important; }
      h2 { font-size: 1.3rem !important; line-height: 1.75rem !important; }
      h3 { font-size: 1.1rem !important; line-height: 1.5rem !important; }
      .text-3xl { font-size: 1.4rem !important; line-height: 1.85rem !important; }
      .text-4xl { font-size: 1.6rem !important; line-height: 2rem !important; }
      .text-5xl { font-size: 1.8rem !important; line-height: 2.2rem !important; }
      .text-6xl { font-size: 2rem !important; line-height: 2.5rem !important; }
      .text-2xl { font-size: 1.2rem !important; line-height: 1.65rem !important; }
    }
    @media (min-width: 480px) and (max-width: 767px) {
      h1 { font-size: 1.8rem !important; line-height: 2.2rem !important; }
      h2 { font-size: 1.5rem !important; line-height: 1.9rem !important; }
      .text-3xl { font-size: 1.5rem !important; }
      .text-4xl { font-size: 1.75rem !important; }
      .text-5xl { font-size: 2rem !important; }
    }

    /* ── Hero section mobile ── */
    @media (max-width: 767px) {
      .hero-gradient {
        padding-top: 2rem !important;
        padding-bottom: 2rem !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        text-align: center;
      }
      .hero-gradient .flex.flex-col.md\\:flex-row { flex-direction: column !important; align-items: center !important; }
      .hero-gradient .text-center.md\\:text-left { text-align: center !important; }
      .hero-gradient .flex-col.sm\\:flex-row { flex-direction: column !important; gap: 0.75rem !important; }
      .hero-gradient a, .hero-gradient button { width: 100% !important; justify-content: center !important; }
      /* Nascondi logo hero su mobile — già visibile come watermark */
      .hero-gradient .hidden.md\\:block { display: none !important; }
    }

    /* ── Navbar: logo e hamburger ── */
    @media (max-width: 767px) {
      header .h-14 { height: 2.75rem !important; }
      header .h-16 { height: 3rem !important; }
      /* Annuncio bar: testo più piccolo, no overflow */
      .stat-bar { font-size: 0.65rem !important; padding-left: 0.5rem !important; padding-right: 0.5rem !important; white-space: normal !important; text-align: center !important; }
    }

    /* ── Mobile menu: full-width, font leggibile ── */
    #mobileMenu a, #mobileMenu span {
      font-size: 0.95rem !important;
      padding: 0.65rem 1rem !important;
      display: flex !important;
      align-items: center !important;
      gap: 0.5rem !important;
    }

    /* ── Griglia cards: mai meno di 1 colonna su xs ── */
    @media (max-width: 479px) {
      .grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      .sm\\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      .sm\\:grid-cols-3 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      .sm\\:grid-cols-4 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }
    @media (min-width: 480px) and (max-width: 767px) {
      .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .lg\\:grid-cols-4 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .lg\\:grid-cols-6 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      .md\\:grid-cols-3 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }

    /* ── Padding interno card adattivo ── */
    @media (max-width: 639px) {
      .p-8 { padding: 1.25rem !important; }
      .p-10 { padding: 1.5rem !important; }
      .p-12 { padding: 1.75rem !important; }
      .px-8 { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
      .px-7 { padding-left: 1rem !important; padding-right: 1rem !important; }
      .px-6 { padding-left: 0.875rem !important; padding-right: 0.875rem !important; }
      .py-14 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
      .py-16 { padding-top: 3.5rem !important; padding-bottom: 3.5rem !important; }
      .py-20 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
      .gap-10 { gap: 1.5rem !important; }
      .gap-12 { gap: 1.75rem !important; }
      .gap-16 { gap: 2rem !important; }
    }

    /* ── Flex → column su mobile ── */
    @media (max-width: 767px) {
      .md\\:flex-row { flex-direction: column !important; }
      .md\\:col-span-1 { grid-column: span 1 !important; }
    }

    /* ── Bottoni: full-width su xs ── */
    @media (max-width: 479px) {
      .inline-flex.items-center.gap-2.px-6,
      .inline-flex.items-center.gap-2.px-8 {
        width: 100% !important;
        justify-content: center !important;
      }
    }

    /* ── Stat bar numeri: font più piccolo su mobile ── */
    @media (max-width: 639px) {
      .text-3xl.font-extrabold.text-sky-300 { font-size: 1.4rem !important; }
      .max-w-5xl.mx-auto.grid.grid-cols-2.md\\:grid-cols-5 {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 0.75rem !important;
      }
    }
    @media (max-width: 399px) {
      .max-w-5xl.mx-auto.grid.grid-cols-2.md\\:grid-cols-5 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }

    /* ── Modal storie: full-screen su mobile ── */
    @media (max-width: 639px) {
      #storia-modal-inner {
        max-width: 100vw !important;
        width: 100% !important;
        margin: 0 !important;
        border-radius: 1rem 1rem 0 0 !important;
        position: fixed !important;
        bottom: 0 !important;
        top: auto !important;
        left: 0 !important;
        right: 0 !important;
        transform: none !important;
        max-height: 90vh !important;
      }
    }

    /* ── Tabelle admin: scroll orizzontale ── */
    #content table {
      min-width: 600px;
    }
    #content .overflow-x-auto,
    #content > div:first-child {
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch;
    }

    /* ── Form responsive ── */
    @media (max-width: 639px) {
      .grid.grid-cols-1.sm\\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      form input, form textarea, form select {
        width: 100% !important;
      }
    }

    /* ── Footer: impilato su mobile ── */
    @media (max-width: 767px) {
      footer .grid.grid-cols-1.md\\:grid-cols-4 {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
    }

    /* ── Sezione media/pubblicazioni: card full width su xs ── */
    @media (max-width: 479px) {
      .grid.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-4 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      }
      .grid.grid-cols-2.md\\:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      }
    }

    /* ── Sezione Rete del Tempo: schede responsive ── */
    @media (max-width: 639px) {
      .px-7.py-5.flex.flex-col.md\\:flex-row {
        padding: 1rem !important;
      }
    }

    /* ── Immagini: mai più grandi del contenitore ── */
    img { max-width: 100% !important; height: auto; }
    picture { display: block; max-width: 100%; }
    picture img { max-width: 100% !important; width: auto; }

    /* ── Watermark logo: più piccolo su mobile ── */
    @media (max-width: 639px) {
      #page-logo-watermark img {
        width: 85vmin !important;
        height: 85vmin !important;
        max-width: 300px !important;
        max-height: 300px !important;
        opacity: 0.10 !important;
      }
    }

    /* ── Ricerca sito: dropdown full-width su mobile ── */
    @media (max-width: 767px) {
      #searchBox { width: 100% !important; }
      #searchResults { left: 0 !important; right: 0 !important; width: 100% !important; }
    }

    /* ── Collage/immagini evento: altezza max su mobile ── */
    @media (max-width: 639px) {
      .rounded-2xl.overflow-hidden.mb-10.shadow-lg picture img {
        max-height: 350px;
        width: 100%;
        object-fit: cover;
      }
    }

    /* ── Sezione donazioni: CTA impilate su mobile ── */
    @media (max-width: 639px) {
      .flex.flex-col.sm\\:flex-row.items-center.justify-between {
        flex-direction: column !important;
        gap: 1rem !important;
        text-align: center !important;
      }
    }

    /* ── Progetto Vita / Telethon card: layout colonna su mobile ── */
    @media (max-width: 767px) {
      .bg-white.px-6.py-8.flex.flex-col.md\\:flex-row {
        flex-direction: column !important;
        gap: 1.5rem !important;
        padding: 1.25rem !important;
      }
    }

    /* ── Icone grandi: ridimensionate su xs ── */
    @media (max-width: 479px) {
      .ic { width: 2.75rem !important; height: 2.75rem !important; }
      .ic i { font-size: 1rem !important; }
      .w-16.h-16 { width: 3rem !important; height: 3rem !important; }
    }

    /* ── Cookie banner: testo leggibile su tutti i dispositivi ── */
    @media (max-width: 479px) {
      #cookieBanner { font-size: 0.75rem !important; padding: 0.75rem 1rem !important; }
      #cookieBanner .flex { flex-wrap: wrap !important; gap: 0.5rem !important; }
      #cookieBanner button { font-size: 0.7rem !important; padding: 0.4rem 0.75rem !important; }
    }

    /* ── Annuncio bar top: wrap su mobile ── */
    @media (max-width: 639px) {
      .stat-bar.text-white.text-center { 
        white-space: normal !important; 
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        line-height: 1.4 !important;
        padding: 0.4rem 0.75rem !important;
      }
    }

    /* ═══════════════════════════════════════════════════════════════
       CROSS-BROWSER / CROSS-DEVICE COMPATIBILITY FIXES
       ═══════════════════════════════════════════════════════════════ */

    /* A — iOS Safari: previene zoom automatico su input con font-size < 16px
       Safari Mobile esegue zoom se font-size < 16px. font-size: 1rem = 16px */
    input, textarea, select {
      font-size: 1rem !important;        /* 16px — soglia anti-zoom iOS */
      -webkit-appearance: none;          /* rimuove stile nativo iOS su input */
      appearance: none;
    }
    /* Ripristina select nativo su Safari (appearance:none nasconde la freccia) */
    select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231078C0' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      padding-right: 2.5rem !important;
    }
    /* Checkbox: non toccare appearance */
    input[type="checkbox"], input[type="radio"] {
      -webkit-appearance: checkbox;
      appearance: checkbox;
      font-size: inherit !important;
    }

    /* B — Safari / WebKit: bottoni e link */
    button, [role="button"], a {
      -webkit-tap-highlight-color: transparent; /* rimuove flash grigio al tap su iOS */
    }
    button {
      -webkit-appearance: none;          /* rimuove stile nativo Safari su <button> */
      appearance: none;
    }

    /* C — Disabilita hover animato su touch device (evita "stuck hover" su mobile) */
    @media (hover: none) and (pointer: coarse) {
      .card:hover {
        transform: none !important;
        box-shadow: none !important;
      }
      .card { transition: none !important; }
    }

    /* D — Safe area iPhone con notch / Dynamic Island (iOS 11+)
       Impedisce che header e cookie banner finiscano sotto la tacca */
    header {
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }
    #cookieBanner {
      padding-bottom: calc(1rem + env(safe-area-inset-bottom));
      padding-left: calc(1.5rem + env(safe-area-inset-left));
      padding-right: calc(1.5rem + env(safe-area-inset-right));
    }

    /* E — focus-visible: outline accessibile solo da tastiera (non al click) */
    :focus-visible {
      outline: 3px solid #45B8EC;
      outline-offset: 2px;
      border-radius: 4px;
    }
    :focus:not(:focus-visible) { outline: none; }

    /* F — Smooth scroll: prefissato per Safari < 15.4 */
    @supports not (scroll-behavior: smooth) {
      html { scroll-behavior: auto; }  /* fallback sicuro */
    }

    /* G — Overflow scroll fluido su iOS (momentum scrolling) */
    .overflow-x-auto, .overflow-y-auto, .max-h-64 {
      -webkit-overflow-scrolling: touch;
    }

    /* H — Edge / IE fallback per gap in flex (Edge 79 non supporta gap in flexbox) */
    @supports not (gap: 1rem) {
      .flex > * + * { margin-left: 0.5rem; }
    }

    /* I — Immagini: prevenzione distorsione altezza in Safari (Flexbox + img) */
    img { display: block; max-width: 100%; height: auto; }
    /* eccezione: img inline dentro span/a */
    a > img, button > img { display: inline-block; }

    /* J — Prevenzione text overflow su mobile per titoli lunghi */
    h1, h2, h3 {
      overflow-wrap: break-word;
      word-break: break-word;        /* Safari non supporta overflow-wrap: anywhere */
      hyphens: auto;
    }

    /* K — <details>/<summary>: arrow nativa su Safari */
    details > summary { cursor: pointer; list-style: none; }
    details > summary::-webkit-details-marker { display: none; }

    /* L — Tailwind 2 non ha line-clamp nativo; polyfill via -webkit */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* ═══════════════════════════════════════════════════════════════ */
  </style>
  ${jsonLdNGO}
  ${jsonLdCondition}
  ${jsonLdBreadcrumb}
  ${jsonLdWebSite}
  ${jsonLdPerson}
  ${jsonLdMedPage}
  ${jsonLdResearch}
  ${jsonLdDonate}
  ${jsonLdJoin}
  ${jsonLdArticle}
  ${jsonLdGlossary}
  ${jsonLdHowTo}
  ${jsonLdSpeakable}
  ${jsonLdVideo}
  ${jsonLdGestiItemList}
  ${extraHead}
</head>
<body>

<!-- ── LOGO WATERMARK FISSO SU TUTTA LA PAGINA (PDF punto 5) ── -->
<div id="page-logo-watermark" aria-hidden="true">
  <picture>
    <source srcset="/images/logo_transparent2.webp" type="image/webp">
    <img src="/images/logo_transparent2.png" alt="" fetchpriority="high" decoding="async" width="600" height="600">
  </picture>
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
        <picture>
          <source srcset="/images/logo.webp" type="image/webp">
          <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-14 w-auto drop-shadow-lg" fetchpriority="high" decoding="async" width="200" height="200">
        </picture>
        <span class="hidden lg:block text-xs font-bold leading-tight text-sky-100" style="max-width:110px">Sindrome<br>ReNU Italia APS</span>
      </a>

      <!-- Desktop nav: visibile da 768px via CSS puro (no Tailwind) -->
      <nav id="desktopNav" style="align-items:center;gap:0;flex-wrap:wrap;justify-content:flex-start;flex:1;padding:0 2px;min-width:0;">
        ${navLinks}
      </nav>

      <!-- Lente ricerca + Lang + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">

        <!-- Lente di ricerca navbar -->
        <div class="relative nav-search-wrap">
          <button onclick="document.getElementById('navSearchBox').classList.toggle('hidden')" 
                  class="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors" 
                  aria-label="${t.search_label}" title="${t.search_label}">
            <i class="fas fa-search text-sm"></i>
          </button>
          <div id="navSearchBox" class="hidden absolute right-0 top-full mt-2 z-[9999]" style="width:280px">
            <div class="rounded-xl shadow-2xl border border-white border-opacity-20 overflow-hidden" style="background:linear-gradient(135deg,#082050,#1078C0)">
              <div class="flex items-center gap-2 px-3 py-2">
                <i class="fas fa-search text-sky-300 text-sm"></i>
                <input id="navSearchInput" type="text" placeholder="${t.search_placeholder}"
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
          <span class="text-xs ml-1">(${t.coming_soon})</span>
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
        <picture>
          <source srcset="/images/logo.webp" type="image/webp">
          <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-16 w-auto mb-4 drop-shadow" loading="lazy" decoding="async" width="200" height="200">
        </picture>
        <p class="text-sky-200 text-sm italic mb-2">"${t.footer_tagline}"</p>
        <p class="text-sky-300 text-sm">${t.footer_partnership}</p>
        <p class="text-sky-300 text-sm mt-1">www.sindromerenu.it</p>
        <p class="text-sky-400 text-xs mt-1"><i class="fas fa-map-marker-alt mr-1"></i>Via Marina 6, 20121 Milano (MI)</p>
        <p class="text-sky-400 text-xs mt-0.5"><i class="fas fa-receipt mr-1"></i>P.IVA / C.F.: 98020680157</p>
        <div class="flex gap-3 mt-4">
          <a href="https://youtube.com/@sindromerenu" target="_blank" rel="noopener" aria-label="YouTube: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-youtube text-xl" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/share/1JJ787h377/" target="_blank" rel="noopener" aria-label="Facebook profilo: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-xl" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/share/1K7eVNCXtM/" target="_blank" rel="noopener" aria-label="Facebook pagina: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook-square text-xl" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/sindrome_renu_italia_aps_" target="_blank" rel="noopener" aria-label="Instagram: @sindrome_renu_italia_aps_" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl" aria-hidden="true"></i></a>
          <a href="https://chat.whatsapp.com/H3gvFMLm9vz7ylEYT01LvU" target="_blank" rel="noopener" aria-label="WhatsApp community: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-whatsapp text-xl" aria-hidden="true"></i></a>
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
      <a href="/${t.lang}/privacy" class="hover:text-white underline">${t.privacy_link}</a>
      &nbsp;|&nbsp;
      <a href="mailto:dpo@sindromerenu.it" class="hover:text-white underline">${t.contact_dpo}</a>
      &nbsp;|&nbsp;
      <span>${t.gdpr_label}</span>
    </div>
  </div>
</footer>

<!-- ── COOKIE BANNER GDPR ── -->
<div id="cookieBanner" style="display:none;position:fixed;bottom:0;left:0;right:0;z-index:99999;background:linear-gradient(135deg,#082050,#1078C0);color:white;padding:1rem 1.5rem;box-shadow:0 -4px 20px rgba(0,0,0,0.3)">
  <div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:space-between">
    <div style="flex:1;min-width:200px;font-size:0.85rem">
      <i class="fas fa-cookie-bite" style="color:#45B8EC;margin-right:0.5rem"></i>
      <strong>${t.cookie_notice}</strong>
      <span style="color:#C8E8F8;margin-left:0.5rem">
        ${t.cookie_text}
      </span>
    </div>
    <div style="display:flex;gap:0.75rem;flex-shrink:0;flex-wrap:wrap;align-items:center">
      <button onclick="acceptCookies()" style="background:#45B8EC;color:#082050;border:none;padding:0.5rem 1.25rem;border-radius:999px;font-weight:700;cursor:pointer;font-size:0.85rem">
        ${t.cookie_accept}
      </button>
      <button onclick="acceptCookies()" style="background:transparent;color:#C8E8F8;border:1px solid #C8E8F8;padding:0.5rem 1.25rem;border-radius:999px;font-weight:600;cursor:pointer;font-size:0.8rem">
        ${t.cookie_necessary}
      </button>
      <a href="/${t.lang}/privacy" style="color:#C8E8F8;font-size:0.75rem;align-self:center;text-decoration:underline">
        ${t.cookie_more}
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
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni iban bonifico 5x1000 compleanno solidale matilde frontis' },
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

  // ── Cookie banner GDPR ──────────────────────────────────────────────────────
  var COOKIE_KEY = 'renu_cookie_consent';
  var COOKIE_VER = '1';

  function acceptCookies() {
    try {
      localStorage.setItem(COOKIE_KEY, COOKIE_VER);
    } catch(e) {
      // localStorage non disponibile (es. Safari privato): usa cookie di sessione
      document.cookie = COOKIE_KEY + '=' + COOKIE_VER + '; path=/; SameSite=Lax';
    }
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.style.display = 'none';
  }

  function _cookieAlreadyAccepted() {
    try {
      if (localStorage.getItem(COOKIE_KEY) === COOKIE_VER) return true;
    } catch(e) {}
    // fallback: controlla cookie di sessione
    return document.cookie.split(';').some(function(c){
      return c.trim().startsWith(COOKIE_KEY + '=');
    });
  }

  // Mostra il banner solo se il consenso non è ancora stato registrato
  document.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('cookieBanner');
    if (banner && !_cookieAlreadyAccepted()) {
      // Piccolo ritardo per evitare layout shift durante il caricamento
      setTimeout(function(){ banner.style.display = 'block'; }, 800);
    }
  });
</script>
</body>
</html>`
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function homePage(t: Record<string, string>): string {
  const cards = [
    { href: `/${t.lang}/community`,  icon: 'fa-users',       ic: 'ic-green',  title: t.section_parents_title,               desc: t.section_parents_desc,    accent: 'card-green',  img: '/images/it_rete_famiglie.jpg',      pos: 'center top', aspect: '1018/955' },
    { href: `/${t.lang}/research`,   icon: 'fa-microscope',  ic: 'ic-sky',    title: t.section_research_title,              desc: t.section_research_desc,   accent: 'card-sky',    img: '/images/renu_research.jpg',         pos: 'center' },
    { href: `/${t.lang}/science`,    icon: 'fa-flask',       ic: 'ic-navy',   title: t.section_science_title||t.nav_science, desc: t.section_science_desc||'', accent: 'card-navy',  img: '/images/renu_science_committee.jpg',pos: 'center' },
    { href: `/${t.lang}/donations`,  icon: 'fa-heart',       ic: 'ic-red',    title: t.section_donations_title,             desc: t.section_donations_desc,  accent: 'card-red',    img: '/images/renu_donations.jpg',        pos: 'center' },
    { href: `/${t.lang}/about`,      icon: 'fa-info-circle', ic: 'ic-navy',   title: t.section_info_title,                  desc: t.section_info_desc,       accent: 'card-blue',   img: '/images/renu_info.jpg',             pos: 'top', aspect: '4/3' },
    { href: `/${t.lang}/community`,  icon: 'fa-bullhorn',    ic: 'ic-purple', title: t.section_awareness_title,             desc: t.section_awareness_desc,  accent: 'card-purple', img: '/images/renu_awareness.jpg',        pos: 'center' },
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
          <h1 class="font-extrabold mb-4 leading-tight" style="font-size:clamp(1.7rem,4vw,3rem);">Sindrome <strong>ReNU</strong> Italia APS</h1>
          ${t.lang==='it'
            ? `<p class="text-sky-200 text-sm md:text-base mb-4 leading-relaxed italic">${t.hero_text}</p>`
            : ''
          }
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed">${t.hero_desc
            .replace('~250 i casi accertati nel mondo','<strong>~250 i casi accertati nel mondo</strong>')
            .replace('13 posizioni','<a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a>')
            .replace('supportare le famiglie italiane','<strong>supportare le famiglie italiane</strong>')}</p>
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
          <div class="flex flex-col items-center gap-4">
            <picture>
              <source srcset="/images/logo_transparent.webp" type="image/webp">
              <img src="/images/logo_transparent.png" alt="Sindrome ReNU Italia APS – Logo" class="w-64 xl:w-72 drop-shadow-xl" width="288" height="248" loading="lazy" decoding="async">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <section class="stat-bar text-white py-6 px-4">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      <div><div class="text-3xl font-extrabold text-sky-300">~250</div><div class="text-sky-200 text-sm mt-1">${t.stat_cases_world}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300" id="stat-cases-italy">${t.casi_italia||'16'}</div><div class="text-sky-200 text-sm mt-1">${t.stat_cases_italy}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">13</div><div class="text-sky-200 text-sm mt-1">${t.stat_dna}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">38+</div><div class="text-sky-200 text-sm mt-1">${t.stat_countries}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">2024</div><div class="text-sky-200 text-sm mt-1">${t.stat_year}</div></div>
    </div>
  </section>

  <!-- CARDS GRID -->
  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-extrabold text-center mb-10" style="color:#082050">
        ${t.section_explore}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards.map(c => `
        <a href="${c.href}" ${(c as any).ext ? 'target="_blank"' : ''} class="card ${c.accent} overflow-hidden block group">
          <div class="overflow-hidden bg-sky-50 relative" style="aspect-ratio:${(c as any).aspect||'16/9'}">
            <i class="fas ${c.icon} text-4xl text-sky-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
            <picture>
              <source srcset="${c.img.replace(/\.(jpg|png)$/, '.webp')}" type="image/webp">
              <img src="${c.img}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-10"
                   style="object-position:${(c as any).pos||'center'}"
                   loading="lazy" decoding="async"
                   onerror="this.style.display='none'">
            </picture>
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
        <div class="grid grid-cols-2 gap-4" style="align-items:start">
          <div class="img-frame rounded-xl overflow-hidden" style="aspect-ratio:1018/955"><picture><source srcset="/images/famiglie.webp" type="image/webp"><img src="/images/famiglie.jpg" alt="Famiglie Sindrome ReNU Italia" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1018" height="955"></picture></div>
          <div class="img-frame rounded-xl overflow-hidden" style="aspect-ratio:1080/1109"><picture><source srcset="/images/it_bambini_gruppo.webp" type="image/webp"><img src="/images/it_bambini_gruppo.jpg" alt="Bambini con Sindrome ReNU" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1080" height="1109"></picture></div>
          <div class="img-frame rounded-xl overflow-hidden" style="aspect-ratio:3/2"><picture><source srcset="/images/mani.webp" type="image/webp"><img src="/images/mani.jpg" alt="Comunità Sindrome ReNU Italia" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1000" height="663"></picture></div>
          <div class="img-frame rounded-xl overflow-hidden" style="aspect-ratio:1080/757"><picture><source srcset="/images/renu_natale_2026.webp" type="image/webp"><img src="/images/renu_natale_2026.jpg" alt="Insieme – Sindrome ReNU Italia" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1080" height="757"></picture></div>
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
          ${t.section_awareness_badge}
        </div>
        <h2 class="text-3xl font-extrabold" style="color:#082050">${t.section_awareness_title}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Awareness card - mascotte Reny -->
        <div class="card card-sky overflow-hidden">
          <div class="overflow-hidden h-52 flex items-center justify-center" style="background: linear-gradient(135deg, #E8F4FC 0%, #C8E8F8 100%);">
            <picture>
              <source srcset="/images/mascotte_reny_1.webp" type="image/webp">
              <img src="/images/mascotte_reny_1.png" alt="Reny – Mascotte Sindrome ReNU Italia"
                   class="h-full w-auto object-contain py-2"
                   style="max-height:200px; filter: drop-shadow(0 4px 16px rgba(8,32,80,0.13));" loading="lazy" decoding="async" width="400" height="385">
            </picture>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.mascot_title}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'
                ? '<em class="block text-sky-700 font-semibold mb-2" style="border-left:3px solid #45B8EC;padding-left:8px">"Lenta, forte e determinata: la tartaruga ReNU rappresenta il viaggio di chi non si arrende mai e raggiunge il proprio traguardo un passo alla volta."</em>Reny è la tartaruga simbolo di Sindrome ReNU Italia APS. Con la sua energia e il suo sorriso accompagna bambini, famiglie e amici nelle iniziative dell\'associazione.'
                : t.lang==='en'
                ? '<em class="block text-sky-700 font-semibold mb-2" style="border-left:3px solid #45B8EC;padding-left:8px">"Slow, strong and determined: the ReNU turtle represents the journey of those who never give up and reach their goal one step at a time."</em>Reny is the turtle mascot of Sindrome ReNU Italia APS. With energy and a smile, she accompanies children, families and friends in all association initiatives.'
                : '<em class="block text-sky-700 font-semibold mb-2" style="border-left:3px solid #45B8EC;padding-left:8px">"Lente, forte et déterminée: la tortue ReNU représente le voyage de ceux qui n\'abandonnent jamais."</em>Reny est la tortue symbole de Sindrome ReNU Italia APS. Elle accompagne les enfants et les familles avec énergie et sourire.'}
            </p>
            <a href="/${t.lang}/community"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#45B8EC">
              <i class="fas fa-users"></i>${t.community_join_btn}
            </a>
          </div>
        </div>
        <!-- Gallery card -->
        <div class="card card-blue overflow-hidden">
          <div class="overflow-hidden">
            <picture>
              <source srcset="/images/renu_gallery.webp" type="image/webp">
              <img src="/images/renu_gallery.jpg" alt="Galleria Sindrome ReNU Italia" class="w-full h-auto block" loading="lazy" decoding="async" width="1080" height="961">
            </picture>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.children_title}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.children_desc}
            </p>
            <a href="/${t.lang}/community"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.gallery_btn}
            </a>
          </div>
        </div>
        <!-- Map card -->
        <div class="card card-navy overflow-hidden">
          <div class="overflow-hidden">
            <picture>
              <source srcset="/images/renu_mappa_aggiornata.webp" type="image/webp">
              <img src="/images/renu_mappa_aggiornata.jpeg" alt="Mappa Italia e Mondiale Sindrome ReNU" class="w-full h-auto block" loading="lazy" decoding="async" width="1200" height="900">
            </picture>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.map_title}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.map_desc}
            </p>
            <a href="https://www.renusyndrome.org/coe-network" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#082050">
              <i class="fas fa-map-marked-alt"></i>${t.map_btn}
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
          ${t.stories_it_title}
        </h2>
        ${t.stories_it_desc ? `<p class="text-gray-500 mt-2 text-sm">${t.stories_it_desc}</p>` : ''}
      </div>
      <!-- Modale storia bambino -->
      <div id="storia-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(8,32,80,0.7);backdrop-filter:blur(4px)" onclick="if(event.target===this)chiudiStoria()">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:1.5rem;max-width:520px;width:92%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.35);display:flex;flex-direction:column">
          <button onclick="chiudiStoria()" style="position:absolute;top:12px;right:14px;z-index:10;background:rgba(255,255,255,0.9);border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.15)">✕</button>
          <div id="storia-modal-img-wrap" style="width:100%;aspect-ratio:4/5;overflow:hidden;background:#EEF6FB;flex-shrink:0">
            <img id="storia-modal-img" src="" alt="Foto famiglia Sindrome ReNU" style="width:100%;height:100%;object-fit:cover;object-position:top">
          </div>
          <div style="padding:1.5rem;flex:1">
            <div style="display:inline-flex;align-items:center;gap:6px;background:#f0f8fd;border-radius:9999px;padding:4px 12px;margin-bottom:12px">
              <i class="fas fa-flag" style="color:#009246;font-size:11px"></i>
              <span style="font-size:11px;font-weight:700;color:#1078C0">Italia</span>
            </div>
            <h3 id="storia-modal-nome" style="font-size:1.5rem;font-weight:800;color:#082050;margin:0 0 8px"></h3>
            <p id="storia-modal-desc" style="color:#4b5563;font-size:0.95rem;line-height:1.6;margin:0 0 16px;white-space:pre-line"></p>
            <p id="storia-modal-nodesc" style="display:none;color:#9ca3af;font-style:italic;font-size:0.9rem;margin:0 0 16px">${t.stories_nodesc}</p>
            <a id="storia-modal-link" href="#" target="_blank" style="display:none;align-items:center;gap:8px;background:#082050;color:white;font-weight:700;font-size:0.9rem;padding:10px 20px;border-radius:9999px;text-decoration:none;margin-top:4px">
              <i class="fas fa-book-open"></i>
              ${t.stories_read_full}
            </a>
          </div>
        </div>
      </div>
      <script>
      function apriStoria(nome, desc, imgUrl, urlStoria) {
        document.getElementById('storia-modal-nome').textContent = nome;
        document.getElementById('storia-modal-desc').textContent = desc || '';
        document.getElementById('storia-modal-nodesc').style.display = desc ? 'none' : 'block';
        document.getElementById('storia-modal-desc').style.display = desc ? 'block' : 'none';
        var imgWrap = document.getElementById('storia-modal-img-wrap');
        var img = document.getElementById('storia-modal-img');
        if (imgUrl) {
          imgWrap.style.display = 'block';
          img.src = imgUrl; img.alt = nome;
        } else {
          imgWrap.style.display = 'none';
        }
        var linkEl = document.getElementById('storia-modal-link');
        if (urlStoria) {
          linkEl.href = urlStoria;
          linkEl.style.display = 'inline-flex';
        } else {
          linkEl.style.display = 'none';
        }
        document.getElementById('storia-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
      function chiudiStoria() {
        document.getElementById('storia-modal').style.display = 'none';
        document.body.style.overflow = '';
      }
      document.addEventListener('keydown', function(e){ if(e.key==='Escape') chiudiStoria(); });
      </script>

      <!-- Card bambini italiani REALI – caricate dal DB -->
      <div id="storie-italiane-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        <div class="col-span-full text-center py-8 text-gray-400">
          <i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i>
          ${t.stories_loading}
        </div>
      </div>
      <script>
      (function(){
        var lang = '${t.lang}';
        var leggi = '${t.stories_read}';
        var storieData = [];
        fetch('/api/storie?lang=' + lang + '&tipo=italiana')
          .then(function(r){ return r.json(); })
          .then(function(data){
            var g = document.getElementById('storie-italiane-grid');
            if(!data || !data.length){ g.innerHTML='<div class="col-span-full text-center py-8 text-gray-400">Nessuna storia disponibile</div>'; return; }
            storieData = data;
            g.innerHTML = data.map(function(b, i){
              var imgHtml = b.img_url
                ? '<img src="' + b.img_url + '" alt="' + b.nome.replace(/"/g,'&quot;') + '" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async">'  
                : '<div class="w-full h-full bg-sky-100 flex items-center justify-center"><i class="fas fa-user-circle text-6xl text-sky-300"></i></div>';
              return '<div class="card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow" data-idx="' + i + '">' +
                '<div class="overflow-hidden" style="aspect-ratio:4/5">' + imgHtml + '</div>' +
                '<div class="p-3 text-center">' +
                  '<h3 class="font-extrabold text-base mb-1" style="color:#082050">' + b.nome + '</h3>' +
                  '<p class="text-gray-500 text-xs line-clamp-2">' + (b.desc||'') + '</p>' +
                  '<div class="mt-2 inline-flex items-center gap-1 text-xs font-bold" style="color:#1078C0">' +
                    '<i class="fas fa-book-open text-xs"></i> ' + leggi +
                  '</div>' +
                '</div>' +
              '</div>';
            }).join('');
            /* Event delegation: un solo listener sul grid */
            g.addEventListener('click', function(e){
              var card = e.target.closest('[data-idx]');
              if(!card) return;
              var idx = parseInt(card.getAttribute('data-idx'), 10);
              var b = storieData[idx];
              if(b) apriStoria(b.nome, b.desc||'', b.img_url||'', b.url_storia||'');
            });
          }).catch(function(){ document.getElementById('storie-italiane-grid').innerHTML=''; });
      })();
      </script>
      <div class="text-center mb-8">
        <p class="text-gray-500 text-sm max-w-lg mx-auto mb-3">
          ${t.stories_share_cta}
        </p>
        <a href="mailto:presidenza@sindromerenu.it"
           class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
          <i class="fas fa-envelope"></i>
          ${t.stories_share_btn}
        </a>
      </div>
      <h3 class="text-lg font-bold mb-4 text-center" style="color:#1078C0">
        <i class="fas fa-globe mr-2"></i>
        ${t.stories_intl_title}
      </h3>
      <!-- Storie internazionali caricate dal DB -->
      <div id="storie-intl-home-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="col-span-full text-center py-8 text-gray-400">
          <i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i>
          ${t.stories_loading}
        </div>
      </div>
      <script>
      (function(){
        const lang = '${t.lang}';
        const readMore = '${t.read_more}';
        fetch('/api/storie?lang=' + lang + '&tipo=internazionale')
          .then(r=>r.json())
          .then(data=>{
            const g = document.getElementById('storie-intl-home-grid');
            if(!data || !data.length){ g.innerHTML=''; return; }
            const shown = data.slice(0,6);
            g.innerHTML = shown.map(s=>{
              var tag = s.url_storia ? 'a' : 'div';
              var attrs = s.url_storia ? ' href="'+s.url_storia+'" target="_blank"' : '';
              return '<'+tag+attrs+' class="card card-sky overflow-hidden group block">'+
                '<div class="overflow-hidden flex items-center justify-center" style="aspect-ratio:16/9; background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">'+
                  '<div class="text-center">'+
                    '<div class="text-5xl mb-2">'+(s.flag||'🌍')+'</div>'+
                    '<div class="text-2xl font-extrabold" style="color:#082050">'+s.nome+'</div>'+
                  '</div>'+
                '</div>'+
                '<div class="p-5">'+
                  '<p class="text-gray-600 text-sm mb-3">'+(s.desc||'')+'</p>'+
                  (s.url_storia ? '<span class="inline-flex items-center gap-1 text-xs font-semibold" style="color:#1078C0">'+readMore+' <i class="fas fa-arrow-right text-xs"></i></span>' : '')+
                '</div>'+
              '</'+tag+'>';
            }).join('');
          }).catch(()=>{ document.getElementById('storie-intl-home-grid').innerHTML=''; });
      })();
      </script>
      <div class="text-center mt-8">
        <a href="https://www.renusyndrome.org/stories" target="_blank"
           class="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-colors" style="background:#1078C0">
          <i class="fas fa-heart"></i>
          ${t.stories_all_btn}
        </a>
      </div>
    </div>
  </section>

  <!-- RETE INTERNAZIONALE ReNU -->
  <section class="py-14 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-extrabold" style="color:#082050">
          ${t.network_title}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.network_desc}
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
          <picture>
            <source srcset="/images/nastro.webp" type="image/webp">
            <img src="/images/nastro.png" alt="Nastro azzurro simbolo Sindrome ReNU Italia APS" class="w-full object-contain" style="max-height:220px;background:#f0f8fd;" loading="lazy" decoding="async" width="600" height="400">
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">
      
      <!-- ── ANCHOR CONTENT: definizione 60 parole citabile da AI ── -->
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB; border-color:#1078C0;">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${t.lang==='it' ? 'La <strong>Sindrome ReNU (RNU4-2)</strong> è una malattia genetica rara del neurosviluppo con prevalenza stimata di <strong>1 su 35.000 nati vivi</strong>, identificata nell\'ottobre 2024 in studi internazionali pubblicati su <em>Nature</em> (Hollingsworth et al., 2024). È causata da varianti patogenetiche del gene <strong>RNU4-2</strong>, che compromettono lo splicing dell\'RNA. La diagnosi richiede il <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Sequenziamento dell\'Intero Genoma (WGS)</a>.' :
           t.lang==='en' ? '<strong>ReNU Syndrome (RNU4-2)</strong> is a rare neurodevelopmental genetic disorder with an estimated prevalence of <strong>1 in 35,000 live births</strong>, identified in October 2024 (Hollingsworth et al., <em>Nature</em>, 2024). It is caused by pathogenic variants of the <strong>RNU4-2</strong> gene, which impair RNA splicing. Diagnosis requires <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Whole Genome Sequencing (WGS)</a>.' :
           t.lang==='fr' ? 'Le <strong>Syndrome ReNU (RNU4-2)</strong> est une maladie génétique rare du neurodéveloppement, prévalence estimée à <strong>1 sur 35 000 naissances</strong>, identifiée en octobre 2024 (<em>Nature</em>, Hollingsworth et al., 2024). Causé par des variants pathogènes du gène <strong>RNU4-2</strong>. Diagnostic via <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Séquençage du Génome Entier (WGS)</a>.' :
           t.lang==='es' ? 'El <strong>Síndrome ReNU (RNU4-2)</strong> es una enfermedad genética rara del neurodesarrollo con prevalencia estimada de <strong>1 en 35.000 nacidos vivos</strong>, identificada en octubre de 2024 (<em>Nature</em>, Hollingsworth et al., 2024). Causada por variantes patogénicas del gen <strong>RNU4-2</strong>. Diagnóstico: <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Secuenciación del Genoma Completo (WGS)</a>.' :
           'Das <strong>ReNU-Syndrom (RNU4-2)</strong> ist eine seltene neurogenetische Entwicklungsstörung mit einer geschätzten Prävalenz von <strong>1 von 35.000 Lebendgeburten</strong>, identifiziert im Oktober 2024 (<em>Nature</em>, Hollingsworth et al., 2024). Verursacht durch pathogene Varianten des <strong>RNU4-2</strong>-Gens. Diagnose: <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Whole-Genome-Sequencing (WGS)</a>.'
          }
        </p>
      </div>

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

      <!-- Aaron photo -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-5 flex items-start gap-3">
            <i class="fas fa-exclamation-triangle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
            <p class="text-amber-800 font-semibold text-lg">${t.about_diagnosis_note}</p>
          </div>
          <div class="bg-sky-50 rounded-2xl p-5 border border-sky-200 flex gap-3 items-start">
            <i class="fas fa-smile-beam text-2xl mt-1 flex-shrink-0" style="color:#1078C0"></i>
            <p class="text-gray-700 italic text-base">${t.about_happy}</p>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <div class="overflow-hidden">
            <img src="/images/it_bambino_aaron.jpg" alt="Aaron, bambino con Sindrome ReNU"
                 class="w-full h-auto block"
                 loading="lazy" decoding="async">
          </div>
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
      <div class="card mb-8" style="overflow:visible">
        <div class="p-4 flex items-center gap-2" style="background:#EEF6FB; border-bottom:1px solid #C8E8F8">
          <i class="fas fa-chart-bar" style="color:#1078C0"></i>
          <span class="font-bold text-sm" style="color:#082050">
            ${t.lang==='it'?'Infografica: le caratteristiche cliniche della Sindrome ReNU':t.lang==='en'?'Infographic: clinical features of ReNU Syndrome':t.lang==='fr'?'Infographie : caractéristiques cliniques du Syndrome ReNU':t.lang==='es'?'Infografía: características clínicas del Síndrome ReNU':'Infografik: klinische Merkmale des ReNU-Syndroms'}
          </span>
        </div>
        <picture>
          <source srcset="/images/it_sintomi.webp" type="image/webp">
          <img src="/images/it_sintomi.jpg" alt="Infografica sintomi Sindrome ReNU" class="w-full h-auto block" style="border-radius:0 0 1rem 1rem" loading="lazy" decoding="async" width="900" height="600">
        </picture>
      </div>

      <!-- Strumento di Supporto per la Sindrome ReNU -->
      <div class="mt-8 card card-navy p-6 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%)">
              <i class="fas fa-file-medical-alt text-3xl text-white"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-xl mb-2" style="color:#082050">
              ${t.lang==='it'?'Strumento di Supporto per la Sindrome ReNU':t.lang==='en'?'ReNU Syndrome Support Tool':t.lang==='fr'?'Outil de Soutien pour le Syndrome ReNU':'ReNU Syndrome Support Tool'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Scarica il documento completo sulle specificità cliniche della Sindrome ReNU, elaborato dai principali ricercatori mondiali. Un supporto essenziale per i medici che seguono pazienti con ReNU.':t.lang==='en'?'Download the complete document on the clinical specifics of ReNU Syndrome, prepared by leading world researchers. An essential support for physicians treating ReNU patients.':'Téléchargez le document complet sur les spécificités cliniques du syndrome ReNU.'}
            </p>
            <a href="https://static1.squarespace.com/static/66cde7d2bedfe27eac771da1/t/692f8c2e4f8faf429c4b30e8/1764723758650/ReNU+Support+Tool.pdf" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-download"></i>
              ${t.lang==='it'?'Scarica PDF – Strumento di Supporto ReNU':t.lang==='en'?'Download ReNU Support Tool PDF':'Télécharger ReNU Support Tool PDF'}
            </a>
          </div>
        </div>
      </div>

      <!-- ── Associazioni in Rete – Fondazione Telethon ── -->
      <div class="mt-10 mb-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <!-- Header verde -->
        <div class="px-6 py-3 text-center font-bold text-sm uppercase tracking-widest" style="background:#1a7f3c; color:#fff;">
          ${t.lang==='it'?'La nostra associazione fa parte delle:':t.lang==='en'?'Our association is part of:':t.lang==='fr'?'Notre association fait partie des :':t.lang==='es'?'Nuestra asociación forma parte de:':'Unser Verband ist Teil von:'}
        </div>
        <!-- Body bianco: logo + testo -->
        <div class="bg-white px-6 py-8 flex flex-col md:flex-row items-center gap-8">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center justify-center" style="min-width:220px">
            <picture>
              <source srcset="/images/associazioni_in_rete_telethon.webp" type="image/webp">
              <img src="/images/associazioni_in_rete_telethon.png"
                   alt="Associazioni in Rete – Fondazione Telethon"
                   class="w-full h-auto"
                   style="max-width:240px"
                   loading="lazy" decoding="async" width="1024" height="461">
            </picture>
          </div>
          <!-- Testo -->
          <div class="flex-1 text-gray-700 text-sm leading-relaxed space-y-3">
            ${t.lang==='it' ? `
              <p>Il programma <strong>"Associazioni in Rete"</strong> di Fondazione Telethon riunisce le associazioni che rappresentano persone e famiglie con malattie genetiche rare, favorendo la collaborazione, lo scambio di esperienze e il dialogo con il mondo della ricerca.</p>
              <p>Per <strong>Sindrome ReNU Italia APS</strong> far parte di questa rete è un'importante opportunità: ci permette di ricevere informazioni e supporto, partecipare a incontri ed eventi, confrontarci con altre associazioni e dare maggiore visibilità alla Sindrome ReNU4-2.</p>
              <p>Per una realtà giovane come la nostra significa poter crescere, creare nuove collaborazioni e sentirsi parte di una rete autorevole, unita dall'obiettivo comune di sostenere le famiglie e promuovere la ricerca.</p>
            ` : t.lang==='en' ? `
              <p>The <strong>"Associazioni in Rete"</strong> programme by Fondazione Telethon brings together associations representing people and families affected by rare genetic diseases, fostering collaboration, the sharing of experiences and dialogue with the research community.</p>
              <p>For <strong>Sindrome ReNU Italia APS</strong>, being part of this network is an important opportunity: it allows us to receive information and support, participate in meetings and events, exchange views with other associations and raise greater awareness of ReNU4-2 Syndrome.</p>
              <p>For a young organisation like ours, it means growing, building new partnerships and feeling part of an authoritative network united by the shared goal of supporting families and promoting research.</p>
            ` : `
              <p>Le programme <strong>"Associazioni in Rete"</strong> de la Fondazione Telethon rassemble les associations représentant les personnes et familles atteintes de maladies génétiques rares, favorisant la collaboration, le partage d'expériences et le dialogue avec le monde de la recherche.</p>
              <p>Pour <strong>Sindrome ReNU Italia APS</strong>, faire partie de ce réseau est une opportunité importante : cela nous permet de recevoir informations et soutien, de participer à des rencontres et événements, et de donner plus de visibilité au Syndrome ReNU4-2.</p>
            `}
            <a href="https://www.telethon.it/come-aiutare/associazioni-in-rete/" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mt-2"
               style="background:#e8f5e9; color:#1a7f3c; border: 1px solid #a5d6a7">
              <i class="fas fa-external-link-alt text-xs"></i>
              ${t.lang==='it'?'Scopri il programma su Telethon.it':t.lang==='en'?'Learn more on Telethon.it':'En savoir plus sur Telethon.it'}
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

      <!-- Internal linking strutturato §2.2.7 -->
      <nav class="mt-10 border-t border-sky-100 pt-8" aria-label="${t.lang==='it'?'Approfondimenti correlati':t.lang==='en'?'Related pages':t.lang==='fr'?'Pages connexes':t.lang==='es'?'Páginas relacionadas':'Verwandte Seiten'}">
        <p class="text-sm font-semibold mb-3" style="color:#082050">${t.lang==='it'?'Approfondimenti correlati:':t.lang==='en'?'Related pages:':t.lang==='fr'?'Pages connexes :':t.lang==='es'?'Páginas relacionadas:':'Verwandte Seiten:'}</p>
        <ul class="flex flex-wrap gap-3">
          <li><a href="/${t.lang}/diagnosis" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-stethoscope text-xs"></i>${t.lang==='it'?'Scopri i centri diagnostici WGS per RNU4-2':t.lang==='en'?'Find WGS diagnostic centres for RNU4-2':t.lang==='fr'?'Centres de diagnostic WGS pour RNU4-2':t.lang==='es'?'Centros de diagnóstico WGS para RNU4-2':'WGS-Diagnosezentren für RNU4-2'}</a></li>
          <li><a href="/${t.lang}/therapies" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heartbeat text-xs"></i>${t.lang==='it'?'Terapie di supporto per bambini RNU4-2':t.lang==='en'?'Support therapies for RNU4-2 children':t.lang==='fr'?'Thérapies de soutien pour RNU4-2':t.lang==='es'?'Terapias de apoyo para niños RNU4-2':'Unterstützungstherapien für RNU4-2-Kinder'}</a></li>
          <li><a href="/${t.lang}/research" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-microscope text-xs"></i>${t.lang==='it'?'Pubblicazioni scientifiche su RNU4-2':t.lang==='en'?'Scientific publications on RNU4-2':t.lang==='fr'?'Publications scientifiques sur RNU4-2':t.lang==='es'?'Publicaciones científicas sobre RNU4-2':'Wissenschaftliche Publikationen zu RNU4-2'}</a></li>
          <li><a href="/${t.lang}/faq" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-question-circle text-xs"></i>${t.lang==='it'?'Diritti delle famiglie con bambini RNU4-2':t.lang==='en'?'Rights for families with RNU4-2 children':t.lang==='fr'?'Droits des familles avec enfants RNU4-2':t.lang==='es'?'Derechos de familias con niños RNU4-2':'Rechte für Familien mit RNU4-2-Kindern'}</a></li>
          <li><a href="/${t.lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${t.lang==='it'?'Aiuta la ricerca sulla Sindrome ReNU':t.lang==='en'?'Support ReNU Syndrome research':t.lang==='fr'?'Soutenir la recherche sur ReNU':t.lang==='es'?'Apoya la investigación ReNU':'ReNU-Forschung unterstützen'}</a></li>
        </ul>
      </nav>
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

      <!-- PUBBLICAZIONI PUBMED – dinamiche dal DB -->
      <div class="text-left mb-12">
        <div class="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold mb-6" style="color:#082050">
          <i class="fas fa-book-medical" style="color:#1078C0"></i>
          ${t.lang==='it'?'Pubblicazioni Scientifiche su PubMed':'Scientific Publications on PubMed'}
        </div>
        <h3 class="text-2xl font-extrabold mb-6" style="color:#082050">
          ${t.lang==='it'?'Letteratura Scientifica sulla Sindrome ReNU (RNU4-2)':'Scientific Literature on ReNU Syndrome (RNU4-2)'}
        </h3>
        <div id="pub-list" class="space-y-5">
          <div class="text-center py-10 text-gray-400">
            <i class="fas fa-spinner fa-spin text-3xl mb-3 block"></i>
            ${t.lang==='it'?'Caricamento pubblicazioni...':t.lang==='en'?'Loading publications...':'Chargement...'}
          </div>
        </div>
        <div class="text-center mt-6">
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=RNU4-2+syndrome+neurodevelopmental" target="_blank"
             class="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border:2px solid #45B8EC">
            <i class="fas fa-search"></i>
            ${t.lang==='it'?'Cerca tutte le pubblicazioni su PubMed':'Search all publications on PubMed'}
          </a>
        </div>
      </div>
      <script>
      (function(){
        const lang = '${t.lang}';
        const synLabel = lang==='it'?'Sintesi:':'Summary:';
        fetch('/api/pubblicazioni?lang=' + lang)
          .then(r=>r.json())
          .then(data=>{
            const el = document.getElementById('pub-list');
            if(!data.length){ el.innerHTML='<p class="text-gray-500 text-center py-8">Nessuna pubblicazione presente.</p>'; return; }
            el.innerHTML = data.map(pub=>\`
            <div class="card card-blue p-6 text-left">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#1078C0,#45B8EC)">
                    <i class="fas fa-file-alt text-white text-xl"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:#082050">\${pub.anno}</span>
                    \${pub.badge ? \`<span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:#F59E0B;color:#082050">\${pub.badge}</span>\` : ''}
                    <span class="text-xs text-gray-500 font-medium">\${pub.autori}</span>
                  </div>
                  <h4 class="font-bold text-base mb-1" style="color:#082050">\${pub.titolo}</h4>
                  <p class="text-xs text-gray-400 italic mb-3">\${pub.rivista}</p>
                  \${pub.sintesi ? \`<div class="rounded-xl p-4 mb-3 text-sm text-gray-700 leading-relaxed" style="background:#EEF6FB;border-left:3px solid #45B8EC"><strong style="color:#082050">\${synLabel}</strong> \${pub.sintesi}</div>\` : ''}
                  <a href="\${pub.doi}" target="_blank" class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-semibold" style="background:#1078C0">
                    <i class="fas fa-external-link-alt"></i>
                    PubMed\${pub.pmid ? ' · PMID '+pub.pmid : ''}
                  </a>
                </div>
              </div>
            </div>\`).join('');
          }).catch(()=>{
            document.getElementById('pub-list').innerHTML='<p class="text-gray-500 text-center py-8">Errore nel caricamento delle pubblicazioni.</p>';
          });
      })();
      </script>

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
<div class="img-frame w-56 overflow-hidden rounded-xl" style="aspect-ratio:16/9"><picture><source srcset="/images/renu_terapia_1.webp" type="image/webp"><img src="/images/renu_terapia_1.jpg" alt="Logopedista con bambino" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="450"></picture></div>
<div class="img-frame w-56 overflow-hidden rounded-xl" style="aspect-ratio:16/9"><picture><source srcset="/images/renu_terapia_2.webp" type="image/webp"><img src="/images/renu_terapia_2.jpg" alt="Fisioterapista con bambino" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="450"></picture></div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- ── ANCHOR CONTENT: definizione citabile per AI §3.2.3 ── -->
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB; border-color:#1078C0;">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${t.lang==='it' ? 'Non esiste ancora una terapia causale per la <strong>Sindrome ReNU (RNU4-2)</strong>. Le terapie di supporto raccomandate includono: <strong>fisioterapia, logopedia, ABA, metodo Feuerstein, terapia occupazionale, acquaticità e musicoterapia</strong>. Ogni percorso deve essere personalizzato. Molti bambini ReNU mostrano progressi significativi con interventi precoci e multidisciplinari. <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Come si diagnostica la Sindrome ReNU</a>.' :
           t.lang==='en' ? 'There is currently no causal therapy for <strong>ReNU Syndrome (RNU4-2)</strong>. Recommended support therapies include: <strong>physical therapy, speech therapy, ABA, Feuerstein method, occupational therapy, aquatics and music therapy</strong>. Each path must be personalised. Many ReNU children show significant progress with early, multidisciplinary interventions. <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">How ReNU Syndrome is diagnosed</a>.' :
           t.lang==='fr' ? 'Il n\'existe pas encore de thérapie causale pour le <strong>Syndrome ReNU (RNU4-2)</strong>. Les thérapies de soutien recommandées incluent : <strong>kinésithérapie, orthophonie, ABA, méthode Feuerstein, ergothérapie, aquaticité et musicothérapie</strong>. <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Diagnostic du Syndrome ReNU</a>.' :
           t.lang==='es' ? 'Actualmente no existe terapia causal para el <strong>Síndrome ReNU (RNU4-2)</strong>. Las terapias de apoyo recomendadas incluyen: <strong>fisioterapia, logopedia, ABA, método Feuerstein, terapia ocupacional, acuaticidad y musicoterapia</strong>. <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Diagnóstico del Síndrome ReNU</a>.' :
           'Es gibt noch keine kausale Therapie für das <strong>ReNU-Syndrom (RNU4-2)</strong>. Empfohlene Unterstützungstherapien: <strong>Physiotherapie, Logopädie, ABA, Feuerstein-Methode, Ergotherapie, Aquatik und Musiktherapie</strong>. <a href="/${t.lang}/diagnosis" class="text-blue-700 underline font-bold">Diagnose des ReNU-Syndroms</a>.'
          }
        </p>
      </div>

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

      <!-- Esempi di Gesti Comunicativi - 9 schede con immagini -->
      <div class="mt-14">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            ${t.lang==='it'?'Esempi di Gesti Comunicativi':'Examples of Communicative Gestures'}
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-sm">
            ${t.lang==='it'?'I gesti rappresentano un modo naturale, immediato e accessibile per aiutare i bambini non verbali a esprimere bisogni, emozioni e desideri. Attraverso gesti semplici e comprensibili a tutti la comunicazione diventa più facile e favorisce una maggiore partecipazione nella vita quotidiana. In queste schede proponiamo alcuni esempi.':'Gestures are a natural, immediate and accessible way to help non-verbal children express their needs, emotions and desires. Through simple gestures that everyone can understand, communication becomes easier and encourages greater participation in daily life. In these cards we offer some examples.'}
          </p>
        </div>

        <!-- Scheda 1: Ambienti e Direzioni -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-green w-10 h-10 flex-shrink-0"><i class="fas fa-compass"></i></div>
            <div>
              <span class="text-xs font-semibold text-green-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 1 di 9':'Card 1 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Ambienti e Direzioni':'Environments & Directions'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/ambienti_direzioni_1.webp" type="image/webp"><img src="/images/maya/ambienti_direzioni_1.png" alt="${t.lang==='it'?'Gesto: Casà':'Gesture: Home'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Casà':'Home'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/ambienti_direzioni_2.webp" type="image/webp"><img src="/images/maya/ambienti_direzioni_2.png" alt="${t.lang==='it'?'Gesto: Qui':'Gesture: Here'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="482"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Qui':'Here'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/ambienti_direzioni_3.webp" type="image/webp"><img src="/images/maya/ambienti_direzioni_3.png" alt="${t.lang==='it'?'Gesto: Su':'Gesture: Up'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="482"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Su':'Up'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/ambienti_direzioni_4.webp" type="image/webp"><img src="/images/maya/ambienti_direzioni_4.png" alt="${t.lang==='it'?'Gesto: Giù':'Gesture: Down'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Giù':'Down'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 2: Risposte e Indicazioni -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-blue w-10 h-10 flex-shrink-0"><i class="fas fa-check-circle"></i></div>
            <div>
              <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 2 di 9':'Card 2 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Risposte e Indicazioni':'Responses & Indications'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/risposte_indicazioni_1.webp" type="image/webp"><img src="/images/maya/risposte_indicazioni_1.png" alt="${t.lang==='it'?'Gesto: Sì':'Gesture: Yes'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="482"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Sì':'Yes'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/risposte_indicazioni_2.webp" type="image/webp"><img src="/images/maya/risposte_indicazioni_2.png" alt="${t.lang==='it'?'Gesto: No':'Gesture: No'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">No</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/risposte_indicazioni_3.webp" type="image/webp"><img src="/images/maya/risposte_indicazioni_3.png" alt="${t.lang==='it'?'Gesto: Aspetta':'Gesture: Wait'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Aspetta':'Wait'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/risposte_indicazioni_4.webp" type="image/webp"><img src="/images/maya/risposte_indicazioni_4.png" alt="${t.lang==='it'?'Gesto: Basta':'Gesture: Stop'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Basta':'Stop'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 3: Richieste -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-amber w-10 h-10 flex-shrink-0"><i class="fas fa-hand-holding"></i></div>
            <div>
              <span class="text-xs font-semibold text-amber-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 3 di 9':'Card 3 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Richieste':'Requests'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/richieste_1.webp" type="image/webp"><img src="/images/maya/richieste_1.png" alt="${t.lang==='it'?'Gesto: Dammi':'Gesture: Give me'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Dammi':'Give me'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/richieste_2.webp" type="image/webp"><img src="/images/maya/richieste_2.png" alt="${t.lang==='it'?'Gesto: Dammi il cinque':'Gesture: High five'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Dammi il cinque':'High five'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/richieste_3.webp" type="image/webp"><img src="/images/maya/richieste_3.png" alt="${t.lang==='it'?'Gesto: Vieni':'Gesture: Come'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Vieni':'Come'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 4: Persone e Relazioni -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-purple w-10 h-10 flex-shrink-0"><i class="fas fa-heart"></i></div>
            <div>
              <span class="text-xs font-semibold text-purple-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 4 di 9':'Card 4 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Persone e Relazioni':'People & Relationships'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/persone_relazioni_1.webp" type="image/webp"><img src="/images/maya/persone_relazioni_1.png" alt="${t.lang==='it'?'Gesto: Io':'Gesture: Me'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Io':'Me'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/persone_relazioni_2.webp" type="image/webp"><img src="/images/maya/persone_relazioni_2.png" alt="${t.lang==='it'?'Gesto: Tu':'Gesture: You'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Tu':'You'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/persone_relazioni_3.webp" type="image/webp"><img src="/images/maya/persone_relazioni_3.png" alt="${t.lang==='it'?'Gesto: Abbraccio':'Gesture: Hug'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Abbraccio':'Hug'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/persone_relazioni_4.webp" type="image/webp"><img src="/images/maya/persone_relazioni_4.png" alt="${t.lang==='it'?'Gesto: Bacio':'Gesture: Kiss'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="480"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Bacio':'Kiss'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 5: Emozioni e Conferme -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-purple w-10 h-10 flex-shrink-0"><i class="fas fa-smile"></i></div>
            <div>
              <span class="text-xs font-semibold text-purple-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 5 di 9':'Card 5 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Emozioni e Conferme':'Emotions & Confirmations'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/emozioni_conferme_1.webp" type="image/webp"><img src="/images/maya/emozioni_conferme_1.png" alt="${t.lang==='it'?'Gesto: Tenerezza':'Gesture: Tenderness'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Tenerezza':'Tenderness'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/emozioni_conferme_2.webp" type="image/webp"><img src="/images/maya/emozioni_conferme_2.png" alt="${t.lang==='it'?'Gesto: Bravo':'Gesture: Well done'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Bravo':'Well done'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/emozioni_conferme_3.webp" type="image/webp"><img src="/images/maya/emozioni_conferme_3.png" alt="${t.lang==='it'?'Gesto: Bene':'Gesture: Good'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Bene':'Good'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/emozioni_conferme_4.webp" type="image/webp"><img src="/images/maya/emozioni_conferme_4.png" alt="Gesto: Ok" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="482"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">Ok</p>
            </div>
          </div>
        </div>

        <!-- Scheda 6: Bisogni e Alimentazione -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-amber w-10 h-10 flex-shrink-0"><i class="fas fa-utensils"></i></div>
            <div>
              <span class="text-xs font-semibold text-amber-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 6 di 9':'Card 6 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Bisogni e Alimentazione':'Needs & Nutrition'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/bisogni_alimentazione_1.webp" type="image/webp"><img src="/images/maya/bisogni_alimentazione_1.png" alt="${t.lang==='it'?'Gesto: Ho fame':'Gesture: I am hungry'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Ho fame':'I am hungry'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/bisogni_alimentazione_2.webp" type="image/webp"><img src="/images/maya/bisogni_alimentazione_2.png" alt="${t.lang==='it'?'Gesto: Mangiare':'Gesture: Eat'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Mangiare':'Eat'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/bisogni_alimentazione_3.webp" type="image/webp"><img src="/images/maya/bisogni_alimentazione_3.png" alt="${t.lang==='it'?'Gesto: Bere':'Gesture: Drink'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Bere':'Drink'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/bisogni_alimentazione_4.webp" type="image/webp"><img src="/images/maya/bisogni_alimentazione_4.png" alt="${t.lang==='it'?'Gesto: Buono':'Gesture: Good (taste)'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Buono':'Yummy'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 7: Cura Personale e Riposo -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-green w-10 h-10 flex-shrink-0"><i class="fas fa-bed"></i></div>
            <div>
              <span class="text-xs font-semibold text-green-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 7 di 9':'Card 7 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Cura Personale e Riposo':'Personal Care & Rest'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/cura_riposo_1.webp" type="image/webp"><img src="/images/maya/cura_riposo_1.png" alt="${t.lang==='it'?'Gesto: Voglio dormire':'Gesture: I want to sleep'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Voglio dormire':'I want to sleep'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/cura_riposo_2.webp" type="image/webp"><img src="/images/maya/cura_riposo_2.png" alt="${t.lang==='it'?'Gesto: Fare la pipì':'Gesture: Toilet (pee)'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Fare la pipì':'Toilet'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/cura_riposo_3.webp" type="image/webp"><img src="/images/maya/cura_riposo_3.png" alt="${t.lang==='it'?'Gesto: Fare la cacca':'Gesture: Toilet (poo)'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Fare la cacca':'Potty'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/cura_riposo_4.webp" type="image/webp"><img src="/images/maya/cura_riposo_4.png" alt="${t.lang==='it'?'Gesto: Cambio':'Gesture: Change'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Cambio':'Change'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 8: Attenzione e Apprendimento -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-blue w-10 h-10 flex-shrink-0"><i class="fas fa-school"></i></div>
            <div>
              <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 8 di 9':'Card 8 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Attenzione e Apprendimento':'Attention & Learning'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/attenzione_apprendimento_1.webp" type="image/webp"><img src="/images/maya/attenzione_apprendimento_1.png" alt="${t.lang==='it'?'Gesto: Zitto':'Gesture: Quiet'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Zitto':'Quiet'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/attenzione_apprendimento_2.webp" type="image/webp"><img src="/images/maya/attenzione_apprendimento_2.png" alt="${t.lang==='it'?'Gesto: Ascoltare':'Gesture: Listen'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="482"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Ascoltare':'Listen'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/attenzione_apprendimento_3.webp" type="image/webp"><img src="/images/maya/attenzione_apprendimento_3.png" alt="${t.lang==='it'?'Gesto: Vedere':'Gesture: Look'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Vedere':'Look'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/attenzione_apprendimento_4.webp" type="image/webp"><img src="/images/maya/attenzione_apprendimento_4.png" alt="${t.lang==='it'?'Gesto: Libro':'Gesture: Book'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Libro':'Book'}</p>
            </div>
          </div>
        </div>

        <!-- Scheda 9: Comunicazione Sociale -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="ic ic-sky w-10 h-10 flex-shrink-0"><i class="fas fa-comments"></i></div>
            <div>
              <span class="text-xs font-semibold text-sky-600 uppercase tracking-wide">${t.lang==='it'?'Scheda 9 di 9':'Card 9 of 9'}</span>
              <h3 class="font-bold text-lg text-gray-800">${t.lang==='it'?'Comunicazione Sociale':'Social Communication'}</h3>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/comunicazione_sociale_1.webp" type="image/webp"><img src="/images/maya/comunicazione_sociale_1.png" alt="${t.lang==='it'?'Gesto: Ciao':'Gesture: Hello/Goodbye'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Ciao':'Hello'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/comunicazione_sociale_2.webp" type="image/webp"><img src="/images/maya/comunicazione_sociale_2.png" alt="${t.lang==='it'?'Gesto: Battere le mani':'Gesture: Clap hands'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Battere le mani':'Clap'}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <picture><source srcset="/images/maya/comunicazione_sociale_3.webp" type="image/webp"><img src="/images/maya/comunicazione_sociale_3.png" alt="${t.lang==='it'?'Gesto: Cellulare':'Gesture: Phone'}" class="w-full h-auto" loading="lazy" decoding="async" width="440" height="481"></picture>
              <p class="text-center text-xs font-semibold text-gray-600 py-2">${t.lang==='it'?'Cellulare':'Phone'}</p>
            </div>
          </div>
        </div>


      </div>

      <!-- CTA Diritti e Tutele -->
      <div class="mt-14 rounded-2xl p-7 text-white flex flex-col md:flex-row items-center gap-6" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex-shrink-0 ic ic-sky w-20 h-20">
          <i class="fas fa-shield-alt text-3xl"></i>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="font-bold text-xl mb-2">
            ${t.lang==='it'?'Diritti, Tutele e Progetto Vita':'Rights, Protections & Life Project'}
          </h3>
          <p class="text-sky-100 text-sm mb-4">
            ${t.lang==='it'?'Tutte le informazioni su Legge 104, agevolazioni, Progetto Vita e pianificazione del futuro sono raccolte nella sezione FAQ & Diritti, pensata per essere un\'area unica, ordinata e facilmente consultabile.':'All information on Law 104, benefits, Life Project and future planning is collected in the FAQ & Rights section, designed as a single, well-organised and easy-to-consult area.'}
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="/${t.lang}/faq" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2.5 rounded-full text-sm" style="color:#082050">
              <i class="fas fa-question-circle"></i>
              ${t.lang==='it'?'Vai a FAQ & Diritti':'Go to FAQ & Rights'}
            </a>
            <a href="/${t.lang}/faq#progetto-vita" class="inline-flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded-full text-sm" style="border:2px solid rgba(255,255,255,0.8);background:rgba(255,255,255,0.12)">
              <i class="fas fa-seedling"></i>
              ${t.lang==='it'?'Progetto Vita':'Progetto Vita'}
            </a>
          </div>
        </div>
      </div>

      <!-- Internal linking strutturato §2.2.7 -->
      <nav class="mt-8 border-t border-sky-100 pt-6" aria-label="${t.lang==='it'?'Approfondimenti':t.lang==='en'?'Related pages':'Pages connexes'}">
        <p class="text-sm font-semibold mb-3" style="color:#082050">${t.lang==='it'?'Approfondimenti correlati:':t.lang==='en'?'Related pages:':t.lang==='fr'?'Pages connexes :':t.lang==='es'?'Páginas relacionadas:':'Verwandte Seiten:'}</p>
        <ul class="flex flex-wrap gap-3">
          <li><a href="/${t.lang}/about" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-dna text-xs"></i>${t.lang==='it'?'Cos\'è la Sindrome ReNU (RNU4-2)':t.lang==='en'?'What is ReNU Syndrome (RNU4-2)':t.lang==='fr'?'Qu\'est-ce que le Syndrome ReNU':t.lang==='es'?'¿Qué es el Síndrome ReNU':'Was ist das ReNU-Syndrom'}</a></li>
          <li><a href="/${t.lang}/diagnosis" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-stethoscope text-xs"></i>${t.lang==='it'?'Centri diagnostici WGS per RNU4-2':t.lang==='en'?'WGS diagnostic centres for RNU4-2':t.lang==='fr'?'Centres de diagnostic WGS':t.lang==='es'?'Centros de diagnóstico WGS':'WGS-Diagnosezentren'}</a></li>
          <li><a href="/${t.lang}/research" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-microscope text-xs"></i>${t.lang==='it'?'Ricerche scientifiche sulla Sindrome ReNU':t.lang==='en'?'Scientific research on ReNU Syndrome':t.lang==='fr'?'Recherche sur le Syndrome ReNU':t.lang==='es'?'Investigación sobre el Síndrome ReNU':'Forschung zum ReNU-Syndrom'}</a></li>
          <li><a href="/${t.lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${t.lang==='it'?'Sostieni la ricerca':t.lang==='en'?'Support research':t.lang==='fr'?'Soutenir la recherche':t.lang==='es'?'Apoya la investigación':'Forschung unterstützen'}</a></li>
        </ul>
      </nav>
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

      <!-- ── ANCHOR CONTENT: definizione citabile per AI §3.2.3 ── -->
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB; border-color:#1078C0;">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${t.lang==='it' ? 'Per diagnosticare la <strong>Sindrome ReNU (RNU4-2)</strong> è obbligatorio il <strong>Sequenziamento dell\'Intero Genoma (WGS)</strong>. Il sequenziamento dell\'esoma (WES) non è sufficiente perché non rileva le varianti introniche profonde del gene RNU4-2. Il WGS analizza tutti i 3 miliardi di paia di basi del genoma umano, incluse le regioni introniche. Tempo medio di refertazione: 2–4 settimane. <a href="/${t.lang}/about" class="text-blue-700 underline font-bold">Scopri cos\'è la Sindrome ReNU</a>.' :
           t.lang==='en' ? 'Diagnosing <strong>ReNU Syndrome (RNU4-2)</strong> requires <strong>Whole Genome Sequencing (WGS)</strong>. Whole Exome Sequencing (WES) is insufficient because it does not detect deep intronic variants in the RNU4-2 gene. WGS analyses all 3 billion base pairs, including intronic regions. Average turnaround: 2–4 weeks. <a href="/${t.lang}/about" class="text-blue-700 underline font-bold">Learn about ReNU Syndrome</a>.' :
           t.lang==='fr' ? 'Le diagnostic du <strong>Syndrome ReNU (RNU4-2)</strong> nécessite le <strong>Séquençage du Génome Entier (WGS)</strong>. Le WES est insuffisant car il ne détecte pas les variants introniques profonds du gène RNU4-2. Délai moyen : 2–4 semaines. <a href="/${t.lang}/about" class="text-blue-700 underline font-bold">En savoir plus sur le Syndrome ReNU</a>.' :
           t.lang==='es' ? 'El diagnóstico del <strong>Síndrome ReNU (RNU4-2)</strong> requiere la <strong>Secuenciación del Genoma Completo (WGS)</strong>. El WES es insuficiente porque no detecta variantes intrónicas profundas del gen RNU4-2. Plazo medio: 2–4 semanas. <a href="/${t.lang}/about" class="text-blue-700 underline font-bold">Conoce el Síndrome ReNU</a>.' :
           'Die Diagnose des <strong>ReNU-Syndroms (RNU4-2)</strong> erfordert <strong>Whole-Genome-Sequencing (WGS)</strong>. WES ist unzureichend, da es tiefe intronische Varianten des RNU4-2-Gens nicht erkennt. Durchlaufzeit: 2–4 Wochen. <a href="/${t.lang}/about" class="text-blue-700 underline font-bold">Über das ReNU-Syndrom</a>.'
          }
        </p>
      </div>

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

      <!-- Internal linking strutturato §2.2.7 -->
      <nav class="mt-6 border-t border-sky-100 pt-6" aria-label="${t.lang==='it'?'Approfondimenti':t.lang==='en'?'Related pages':'Pages connexes'}">
        <p class="text-sm font-semibold mb-3" style="color:#082050">${t.lang==='it'?'Approfondimenti correlati:':t.lang==='en'?'Related pages:':t.lang==='fr'?'Pages connexes :':t.lang==='es'?'Páginas relacionadas:':'Verwandte Seiten:'}</p>
        <ul class="flex flex-wrap gap-3">
          <li><a href="/${t.lang}/about" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-dna text-xs"></i>${t.lang==='it'?'Cos\'è la Sindrome ReNU (RNU4-2)':t.lang==='en'?'What is ReNU Syndrome (RNU4-2)':t.lang==='fr'?'Qu\'est-ce que le Syndrome ReNU':t.lang==='es'?'¿Qué es el Síndrome ReNU':'Was ist das ReNU-Syndrom'}</a></li>
          <li><a href="/${t.lang}/therapies" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heartbeat text-xs"></i>${t.lang==='it'?'Terapie di supporto per bambini RNU4-2':t.lang==='en'?'Support therapies for RNU4-2 children':t.lang==='fr'?'Thérapies de soutien':t.lang==='es'?'Terapias de apoyo':'Unterstützungstherapien'}</a></li>
          <li><a href="/${t.lang}/faq" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-question-circle text-xs"></i>${t.lang==='it'?'FAQ e diritti delle famiglie':t.lang==='en'?'FAQ and family rights':t.lang==='fr'?'FAQ et droits des familles':t.lang==='es'?'FAQ y derechos familiares':'FAQ und Familienrechte'}</a></li>
          <li><a href="/${t.lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${t.lang==='it'?'Sostieni la ricerca sulla Sindrome ReNU':t.lang==='en'?'Support ReNU research':t.lang==='fr'?'Soutenir la recherche ReNU':t.lang==='es'?'Apoya la investigación ReNU':'ReNU-Forschung unterstützen'}</a></li>
        </ul>
      </nav>
    </div>
  </section>`
}
function communityPage(t: Record<string, string>): string {
  const intlAssoc = [
    { country: t.lang==='it'?'Italia':'Italy', flag: '🇮🇹',
      name: 'Associazione Sindrome RENU Italia APS',
      fb: 'https://www.facebook.com/share/1K7eVNCXtM/',
      ig: 'https://www.instagram.com/sindrome_renu_italia_aps_',
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
        <div class="rounded-2xl overflow-hidden shadow-lg" style="width:360px; flex-shrink:0; aspect-ratio:1080/709">
          <picture>
            <source srcset="/images/it_festa_natale.webp" type="image/webp">
            <img src="/images/it_festa_natale.jpg" alt="Comunità ReNU Italia – famiglie e bambini insieme"
                 class="w-full h-full object-cover"
                 loading="lazy" decoding="async" width="1080" height="709">
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- Map and Parent Network -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" style="align-items:start">
        <div class="card card-blue overflow-hidden">
          <div class="flex items-center justify-center p-3" style="background:#EEF6FB">
            <picture>
              <source srcset="/images/renu_mappa_aggiornata.webp" type="image/webp">
              <img src="/images/renu_mappa_aggiornata.jpeg" alt="Mappa Italia e Mondiale Sindrome ReNU" class="w-full h-auto" style="display:block;border-radius:0.5rem" loading="lazy" decoding="async" width="1200" height="900">
            </picture>
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-blue mx-auto mb-3"><i class="fas fa-map-marked-alt text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Mappa Italia e Mondiale RNU4-2':'Italy &amp; World Map RNU4-2'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Aggiungi il tuo familiare alla mappa Italia e mondiale di RNU4-2. Ultimo aggiornamento: 15 aprile 2026.':'Add your family member to the Italy and worldwide RNU4-2 map. Last updated: April 15, 2026.'}
            </p>
            <a href="https://form.jotform.com/250154538972159" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-map-pin"></i>${t.join_registry}
            </a>
          </div>
        </div>

        <div class="card card-sky overflow-hidden">
          <div class="overflow-hidden bg-white" style="aspect-ratio:1018/955">
            <picture>
              <source srcset="/images/it_rete_famiglie.webp" type="image/webp">
              <img src="/images/it_rete_famiglie.jpg" alt="Famiglia italiana ReNU – Stefania, Francesco e Massimiliano" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="750">
            </picture>
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
              <a href="https://www.instagram.com/sindrome_renu_italia_aps_" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-4 py-2.5 rounded-full font-semibold transition-colors" style="background:#E1306C">
                <i class="fab fa-instagram"></i>Instagram
              </a>
              <a href="https://www.facebook.com/share/1JJ787h377/" target="_blank"
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
        <div class="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div class="flex-shrink-0 flex items-center justify-center mx-auto md:mx-0" style="position:relative">
            <!-- Mappa Italia reale con badge famiglie -->
            <div style="position:relative;width:240px;display:flex;align-items:center;justify-content:center">
              <picture>
                <source srcset="/images/renu_mappa_aggiornata.webp" type="image/webp">
                <img src="/images/renu_mappa_aggiornata.jpeg"
                     alt="Mappa Italia Famiglie ReNU"
                     style="width:240px;height:auto;display:block;border-radius:16px;filter:drop-shadow(0 4px 16px rgba(8,32,80,0.22));object-fit:contain"
                     loading="lazy" decoding="async" width="240" height="180">
              </picture>
              <!-- Badge contatore sovrapposto -->
              <div style="position:absolute;top:10px;right:-14px;background:#F59E0B;color:white;border-radius:50%;width:66px;height:66px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Inter,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,0.2)">
                <span style="font-size:14px;font-weight:800;line-height:1.1">16</span>
                <span style="font-size:8px;line-height:1.2">casi</span>
                <span style="font-size:8px;line-height:1.2">in Italia</span>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              ${t.lang==='it'?`In Italia sono stati accertati <strong>${t.casi_italia||'16'} casi</strong> di Sindrome ReNU (RNU4-2). Le famiglie sono distribuite in diverse regioni italiane. La mappa è in continuo aggiornamento grazie al lavoro di rete dell'Associazione.`:`In Italy, <strong>${t.casi_italia||'16'} cases</strong> of ReNU Syndrome (RNU4-2) have been confirmed. Families are distributed across several Italian regions.`}
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
          <picture>
            <source srcset="/images/logo_renu_syndrome_united.webp" type="image/webp">
            <img src="/images/logo_renu_syndrome_united.jpg" alt="ReNU Syndrome United (USA)" class="w-28 h-auto drop-shadow-lg flex-shrink-0" loading="lazy" decoding="async">
          </picture>
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
          <!-- Gallery foto caricate dal DB -->
          <div id="gallery-community-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
            <div class="col-span-full text-center py-4 text-gray-400 text-xs">
              <i class="fas fa-spinner fa-spin mr-1"></i>Caricamento...
            </div>
          </div>
          <script>
          (function(){
            const lang = '${t.lang}';
            fetch('/api/gallery?pagina=community&lang=' + lang)
              .then(r=>r.json())
              .then(data=>{
                const g = document.getElementById('gallery-community-grid');
                if(!data || !data.length){ g.innerHTML=''; return; }
                g.innerHTML = data.map(img=>(
                  '<div class="rounded-xl overflow-hidden bg-white shadow-sm">'+
                    '<img src="'+img.img_url+'" alt="'+(img.didascalia_it||img.didascalia||'ReNU Italia')+'" class="w-full h-auto block" loading="lazy" decoding="async">'+
                  '</div>'
                )).join('');
              }).catch(()=>{ document.getElementById('gallery-community-grid').innerHTML=''; });
          })();
          </script>
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
        <!-- Storie internazionali caricate dal DB -->
        <div id="storie-intl-community-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="col-span-full text-center py-8 text-gray-400">
            <i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i>
            ${t.lang==='it'?'Caricamento storie...':t.lang==='en'?'Loading stories...':t.lang==='fr'?'Chargement...':t.lang==='es'?'Cargando...':'Laden...'}
          </div>
        </div>
        <script>
        (function(){
          const lang = '${t.lang}';
          const readMore = '${t.read_more}';
          fetch('/api/storie?lang=' + lang + '&tipo=internazionale')
            .then(r=>r.json())
            .then(data=>{
              const g = document.getElementById('storie-intl-community-grid');
              if(!data || !data.length){ g.innerHTML=''; return; }
              g.innerHTML = data.map(s=>{
                var tag = s.url_storia ? 'a' : 'div';
                var attrs = s.url_storia ? ' href="'+s.url_storia+'" target="_blank"' : '';
                return '<'+tag+attrs+' class="card p-4 flex items-center gap-4 group hover:shadow-lg">'+
                  '<div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-3xl" style="background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">'+
                    (s.flag||'🌍')+
                  '</div>'+
                  '<div>'+
                    '<div class="font-bold text-base" style="color:#082050">'+s.nome+'</div>'+
                    '<div class="text-xs text-gray-500 mt-0.5">'+(s.desc||'')+'</div>'+
                    (s.url_storia ? '<div class="text-xs font-semibold mt-1 flex items-center gap-1" style="color:#1078C0">'+readMore+' <i class="fas fa-arrow-right text-xs"></i></div>' : '')+
                  '</div>'+
                '</'+tag+'>';
              }).join('');
            }).catch(()=>{ document.getElementById('storie-intl-community-grid').innerHTML=''; });
        })();
        </script>
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
          <a href="#come-donare"
             class="inline-flex items-center gap-2 bg-white font-bold px-7 py-4 rounded-full shadow-xl text-base transition-colors hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-university"></i>
            ${t.lang==='it'?'Dona con Bonifico Bancario':'Donate via Bank Transfer'}
          </a>
          <a href="mailto:donazioni@sindromerenu.it"
             class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
            <i class="fas fa-envelope"></i>donazioni@sindromerenu.it
          </a>
        </div>
      </div>
      <div class="flex-shrink-0 hidden md:block" style="width:340px">
        <div class="rounded-2xl overflow-hidden shadow-2xl" style="aspect-ratio:9/4">
          <img src="/images/it_donazioni.jpg" alt="Sostienici – Sindrome ReNU Italia"
               class="w-full h-full object-cover" style="object-position:center center"
               loading="lazy" decoding="async">
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

      <!-- ── ANCHOR CONTENT: definizione citabile per AI §3.2.3 ── -->
      <div class="rounded-2xl p-6 border-l-4" style="background:#EEF6FB; border-color:#1078C0;">
        <p class="text-gray-800 font-semibold leading-relaxed">
          ${t.lang==='it' ? 'È possibile donare a <strong>Sindrome ReNU Italia APS</strong> (CF 98020680157) tramite: <strong>bonifico bancario</strong> (IBAN IT18H0306909606100000416360), <strong>5×1000</strong> nella dichiarazione dei redditi (codice fiscale 98020680157 – Associazioni di Promozione Sociale), <strong>lascito testamentario</strong>, donazione ricorrente mensile o <strong>compleanno solidale</strong>. Ogni contributo è deducibile fiscalmente. <a href="/${t.lang}/members" class="text-blue-700 underline font-bold">Diventa anche socio</a>.' :
           t.lang==='en' ? 'You can donate to <strong>Sindrome ReNU Italia APS</strong> (Tax ID 98020680157) via: <strong>bank transfer</strong> (IBAN IT18H0306909606100000416360), <strong>5×1000</strong> on your Italian tax return (code 98020680157), <strong>legacy donation</strong>, monthly recurring donation or <strong>birthday fundraiser</strong>. All contributions are tax-deductible. <a href="/${t.lang}/members" class="text-blue-700 underline font-bold">Become a member</a>.' :
           t.lang==='fr' ? 'Vous pouvez faire un don à <strong>Sindrome ReNU Italia APS</strong> (NIF 98020680157) par : <strong>virement bancaire</strong> (IBAN IT18H0306909606100000416360), <strong>5×1000</strong>, <strong>legs testamentaire</strong> ou don mensuel récurrent. <a href="/${t.lang}/members" class="text-blue-700 underline font-bold">Devenir membre</a>.' :
           t.lang==='es' ? 'Puede donar a <strong>Sindrome ReNU Italia APS</strong> (NIF 98020680157) mediante: <strong>transferencia bancaria</strong> (IBAN IT18H0306909606100000416360), <strong>5×1000</strong>, <strong>legado testamentario</strong> o donación mensual. <a href="/${t.lang}/members" class="text-blue-700 underline font-bold">Hazte socio</a>.' :
           'Sie können an <strong>Sindrome ReNU Italia APS</strong> (Steuer-ID 98020680157) spenden: <strong>Banküberweisung</strong> (IBAN IT18H0306909606100000416360), <strong>Erbschaft</strong> oder monatliche Dauerspende. <a href="/${t.lang}/members" class="text-blue-700 underline font-bold">Mitglied werden</a>.'
          }
        </p>
      </div>

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
      <div id="come-donare" class="scroll-mt-36">
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
            <p class="text-center text-sm text-gray-500 font-sans">${t.lang==='it'?'Causale: "Donazione Sindrome ReNU Italia APS - CF 98020680157"':'Reference: "Donazione Sindrome ReNU Italia APS - CF 98020680157"'}</p>

            <!-- Sezione donazioni dall'estero -->
            <div class="border-t mt-2 pt-4" style="border-color:#C7DFF0">
              <p class="text-xs font-sans font-semibold text-center mb-3" style="color:#1078C0">
                🌍 ${t.lang==='it'?'Per donazioni dall\'estero':'For international donations'}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="text-center">
                  <p class="text-xs text-gray-500 font-sans mb-1">BIC / SWIFT</p>
                  <p class="text-lg font-bold tracking-widest" style="color:#082050">BCITITMM</p>
                </div>
                <div class="text-center">
                  <p class="text-xs text-gray-500 font-sans mb-1">IBAN</p>
                  <p class="text-base font-bold tracking-wide" style="color:#082050">IT18H0306909606100000416360</p>
                </div>
              </div>
              <p class="text-xs text-gray-400 font-sans text-center mt-2">Banca Intesa Sanpaolo S.p.A. — ABI 03069 · CAB 09606</p>
            </div>
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
          <a href="#come-donare"
             class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#1078C0">
            <i class="fas fa-university"></i>
            ${t.lang==='it'?'Vedi dati Bonifico':'See Bank Transfer Details'}
          </a>
        </div>

      </div>

      <!-- 5X1000 -->
      <div id="cinque-per-mille" class="scroll-mt-36">
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
                  <span class="px-3 py-1 rounded-lg text-base font-bold text-white tracking-widest" style="background:#1078C0">
                    98020680157
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <i class="fas fa-check-circle" style="color:#22C55E"></i>
                  ${t.lang==='it'?'Dal 28 aprile 2025 Sindrome ReNU Italia APS è ufficialmente iscritta al RUNTS (Registro Unico Nazionale del Terzo Settore).':'Since 28 April 2025, Sindrome ReNU Italia APS is officially registered in RUNTS (National Register of the Third Sector).'}
                </p>
              </div>
              <!-- LOCANDINA RUNTS / 5x1000 (formato verticale 704x1024) -->
              <div class="mt-5 flex justify-center">
                <figure class="text-center">
                  <img src="/images/renu_runts_5x1000.jpg"
                       alt="${t.lang==='it'?'Sindrome ReNU Italia APS – Iscritta al RUNTS, destina il tuo 5×1000 – CF 98020680157':'Sindrome ReNU Italia APS – RUNTS registered, donate your 5×1000 – Tax Code 98020680157'}"
                       class="rounded-2xl shadow-lg mx-auto" style="width:100%;max-width:360px;height:auto;display:block;" loading="lazy" decoding="async">
                  <figcaption class="text-xs text-gray-500 mt-2">
                    ${t.lang==='it'?'Iscrizione RUNTS confermata dal 28/4/2025 · CF 98020680157':'RUNTS registration confirmed from 28/4/2025 · Tax Code 98020680157'}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPLEANNO SOLIDALE -->
      <div id="compleanno-solidale" class="scroll-mt-36">
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
              <a href="mailto:donazioni@sindromerenu.it"
                 class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#7C3AED">
                <i class="fas fa-envelope"></i>
                ${t.lang==='it'?'Scrivi per informazioni':'Write to us'}
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
                ${t.lang==='it'?'Le donazioni effettuate da persone fisiche a Sindrome ReNU Italia APS, iscritta al RUNTS, danno diritto a una detrazione IRPEF del <strong>30%</strong>, fino a un massimo di 30.000 euro all\'anno.':'Donations made by individuals to Sindrome ReNU Italia APS, registered in the RUNTS, entitle a <strong>30%</strong> income tax deduction, up to a maximum of €30,000 per year.'}
              </p>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color:#082050">
                <i class="fas fa-building" style="color:#16A085"></i>
                ${t.lang==='it'?'Deduzione (Persone fisiche e aziende)':'Tax Deduction (Individuals and Companies)'}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-3">
                ${t.lang==='it'?'Le donazioni effettuate da persone fisiche e aziende a Sindrome ReNU Italia APS possono essere dedotte dal reddito complessivo nel limite del <strong>10% del reddito dichiarato</strong>. I due benefici fiscali, detrazione e deduzione, non sono cumulabili.':'Donations made by individuals and companies to Sindrome ReNU Italia APS may be deducted from total income up to <strong>10% of declared income</strong>. The two tax benefits, deduction and tax credit, cannot be combined.'}
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
            <a href="#come-donare"
               class="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition-colors hover:bg-sky-50" style="color:#082050">
              <i class="fas fa-university"></i>
              ${t.lang==='it'?'Dona con Bonifico Bancario':'Donate via Bank Transfer'}
            </a>
            <a href="mailto:donazioni@sindromerenu.it"
               class="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-full text-base transition-colors"
               style="border:2px solid rgba(255,255,255,0.8);background:rgba(255,255,255,0.15)">
              <i class="fas fa-envelope"></i>
              ${t.lang==='it'?'Scrivi per informazioni':'Write for information'}
            </a>
          </div>
        </div>
      </div>

      <!-- Internal linking strutturato §2.2.7 -->
      <nav class="border-t border-sky-100 pt-6" aria-label="${t.lang==='it'?'Approfondimenti':t.lang==='en'?'Related pages':'Pages connexes'}">
        <p class="text-sm font-semibold mb-3" style="color:#082050">${t.lang==='it'?'Approfondimenti correlati:':t.lang==='en'?'Related pages:':t.lang==='fr'?'Pages connexes :':t.lang==='es'?'Páginas relacionadas:':'Verwandte Seiten:'}</p>
        <ul class="flex flex-wrap gap-3">
          <li><a href="/${t.lang}/about" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-dna text-xs"></i>${t.lang==='it'?'Cos\'è la Sindrome ReNU (RNU4-2)':t.lang==='en'?'What is ReNU Syndrome (RNU4-2)':t.lang==='fr'?'Qu\'est-ce que le Syndrome ReNU':t.lang==='es'?'¿Qué es el Síndrome ReNU':'Was ist das ReNU-Syndrom'}</a></li>
          <li><a href="/${t.lang}/members" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-user-plus text-xs"></i>${t.lang==='it'?'Diventa socio di Sindrome ReNU Italia APS':t.lang==='en'?'Become a member of ReNU Italia APS':t.lang==='fr'?'Devenir membre de ReNU Italia APS':t.lang==='es'?'Hazte socio de ReNU Italia APS':'Mitglied von ReNU Italia APS werden'}</a></li>
          <li><a href="/${t.lang}/projects" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-project-diagram text-xs"></i>${t.lang==='it'?'Progetti finanziati con le donazioni':t.lang==='en'?'Projects funded by donations':t.lang==='fr'?'Projets financés par les dons':t.lang==='es'?'Proyectos financiados con donaciones':'Mit Spenden finanzierte Projekte'}</a></li>
          <li><a href="/${t.lang}/research" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-microscope text-xs"></i>${t.lang==='it'?'Ricerca scientifica sulla Sindrome ReNU':t.lang==='en'?'Scientific research on ReNU Syndrome':t.lang==='fr'?'Recherche sur le Syndrome ReNU':t.lang==='es'?'Investigación sobre el Síndrome ReNU':'Forschung zum ReNU-Syndrom'}</a></li>
        </ul>
      </nav>

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
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni iban bonifico 5x1000 compleanno solidale matilde frontis' },
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

      <!-- Welcome Kit Nuove Famiglie -->
      <div class="card mb-8 overflow-hidden" style="background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%);border:2px solid #7dd3fc;">
        <div class="flex flex-col sm:flex-row">
          <!-- Immagine copertina -->
          <a href="/welcome-kit-renu.pdf" target="_blank" download class="sm:w-56 flex-shrink-0 block overflow-hidden">
            <picture>
              <source srcset="/images/welcome-kit-cover.webp" type="image/webp">
              <img src="/images/welcome-kit-cover.jpg"
                   alt="Kit di benvenuto – Insieme per conoscere"
                   class="w-full h-48 sm:h-full object-cover hover:scale-105 transition-transform duration-300"
                   loading="lazy" decoding="async">
            </picture>
          </a>
          <!-- Testo -->
          <div class="flex-1 p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="ic flex-shrink-0" style="background:#0ea5e9;color:white;width:36px;height:36px;font-size:1rem;">
                <i class="fas fa-gift"></i>
              </div>
              <h3 class="font-bold text-xl" style="color:#082050">
                ${t.lang==='it'?'Kit di benvenuto per le nuove famiglie':
                  t.lang==='en'?'Welcome Kit for New Families':
                  t.lang==='fr'?'Kit de bienvenue pour les nouvelles familles':
                  t.lang==='es'?'Kit de bienvenida para nuevas familias':
                  'Willkommenspaket für neue Familien'}
              </h3>
            </div>
            <p class="text-sky-700 text-sm mb-2 font-semibold">
              ${t.lang==='it'?'"Insieme per conoscere – Accoglienza nuove famiglie"':
                t.lang==='en'?'"Together to learn – Welcome for new families"':
                t.lang==='fr'?'"Ensemble pour apprendre – Accueil des nouvelles familles"':
                t.lang==='es'?'"Juntos para conocer – Bienvenida a nuevas familias"':
                '"Gemeinsam lernen – Willkommen für neue Familien"'}
            </p>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Il documento che inviamo alle famiglie che ci contattano per la prima volta: una guida pensata con cura per accompagnare chi inizia questo percorso, con informazioni sulla sindrome, la nostra comunità e i primi passi utili.':
                t.lang==='en'?'The document we send to families contacting us for the first time: a carefully crafted guide to accompany those starting this journey, with information on the syndrome, our community and the first useful steps.':
                t.lang==='fr'?'Le document que nous envoyons aux familles qui nous contactent pour la première fois: un guide soigneusement conçu pour accompagner ceux qui commencent ce parcours.':
                t.lang==='es'?'El documento que enviamos a las familias que nos contactan por primera vez: una guía cuidadosamente diseñada para acompañar a quienes comienzan este camino.':
                'Das Dokument, das wir Familien schicken, die uns zum ersten Mal kontaktieren: ein sorgfältig erstellter Leitfaden.'}
            </p>
            <a href="/welcome-kit-renu.pdf" target="_blank" download
               class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all hover:scale-105"
               style="background:linear-gradient(135deg,#0ea5e9,#0369a1)">
              <i class="fas fa-download text-base"></i>
              ${t.lang==='it'?'Scarica il Kit di Benvenuto (PDF)':
                t.lang==='en'?'Download Welcome Kit (PDF)':
                t.lang==='fr'?'Télécharger le Kit de bienvenue (PDF)':
                t.lang==='es'?'Descargar el Kit de bienvenida (PDF)':
                'Willkommenspaket herunterladen (PDF)'}
            </a>
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
          <!-- Campo familiare -->
          <div class="rounded-xl p-4" style="background:#EFF6FF; border:1px solid #BAE6FD">
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="sono_familiare" id="sonoFamiliare" class="mt-1 w-4 h-4 flex-shrink-0 accent-sky-600">
              <div>
                <span class="text-sm font-semibold" style="color:#082050">
                  ${t.lang==='it'?'👨‍👩‍👧 Sono un familiare di una persona con Sindrome ReNU':'👨‍👩‍👧 I am a family member of a person with ReNU Syndrome'}
                </span>
                <p class="text-xs text-sky-600 mt-0.5">
                  ${t.lang==='it'?'Se sei genitore o tutore di un bambino/a con Sindrome ReNU, riceverai automaticamente il nostro documento di accoglienza.':'If you are a parent or guardian of a child with ReNU Syndrome, you will automatically receive our welcome document.'}
                </p>
              </div>
            </label>
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
            sono_familiare: !!fd.get('sono_familiare'),
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
              // Banner accoglienza per familiari
              if (payload.sono_familiare) {
                const pdfBanner = document.createElement('div');
                pdfBanner.className = 'mt-4 rounded-xl p-5 flex items-start gap-4';
                pdfBanner.style.cssText = 'background:#D1FAE5; border:2px solid #6EE7B7';
                pdfBanner.innerHTML = '<i class="fas fa-file-pdf text-green-600 text-2xl mt-0.5 flex-shrink-0"></i><div><p class="font-bold text-green-800 mb-1">${t.lang==='it'?'📄 Documento di Benvenuto ReNU':'📄 ReNU Welcome Document'}</p><p class="text-green-700 text-sm mb-3">${t.lang==='it'?'Abbiamo preparato per te il documento di accoglienza con tutte le informazioni essenziali per le nuove famiglie che entrano nella nostra comunità. Benvenuto/a in Sindrome ReNU Italia APS!':'We have prepared the welcome document with all essential information for new families joining our community. Welcome to Sindrome ReNU Italia APS!'}</p><a href="/static/accoglienza-nuove-famiglie.pdf" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-sm text-white" style="background:linear-gradient(135deg,#059669,#10B981)"><i class="fas fa-download mr-1"></i>${t.lang==='it'?'Scarica il PDF di Accoglienza':'Download Welcome PDF'}</a></div>';
                msg.parentNode.insertBefore(pdfBanner, msg.nextSibling);
              }
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
          <picture>
            <source srcset="/images/logo.webp" type="image/webp">
            <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-16 w-auto drop-shadow" loading="lazy" decoding="async">
          </picture>
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
          <a href="https://youtube.com/@sindromerenu" target="_blank" rel="noopener" aria-label="YouTube: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-youtube text-2xl" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/share/1JJ787h377/" target="_blank" rel="noopener" aria-label="Facebook profilo: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-2xl" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/share/1K7eVNCXtM/" target="_blank" rel="noopener" aria-label="Facebook pagina: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook-square text-2xl" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/sindrome_renu_italia_aps_" target="_blank" rel="noopener" aria-label="Instagram: @sindrome_renu_italia_aps_" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-2xl" aria-hidden="true"></i></a>
          <a href="https://chat.whatsapp.com/H3gvFMLm9vz7ylEYT01LvU" target="_blank" rel="noopener" aria-label="WhatsApp community: Sindrome ReNU Italia APS" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-whatsapp text-2xl" aria-hidden="true"></i></a>
          <a href="https://www.renusyndrome.org" target="_blank" rel="noopener" aria-label="Sito internazionale ReNU Syndrome" class="text-sky-300 hover:text-white transition-colors"><i class="fas fa-globe text-2xl" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── BROCHURE PAGE ────────────────────────────────────────────────────────────
function brochurePage(t: Record<string, string>): string {
  const dlLabel = t.brochure_download || (t.lang==='it'?'Scarica PDF':t.lang==='en'?'Download PDF':t.lang==='fr'?'Télécharger':'Descargar PDF')
  const isIt = t.lang === 'it'
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-photo-video mr-3 text-sky-300"></i>${t.brochure_title}</h1>
      <p class="text-sky-100 text-lg">${t.brochure_intro}</p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto space-y-14">

      <!-- ═══ SEZIONE WELCOME KIT ═══ -->
      <div class="rounded-2xl overflow-hidden shadow-lg"
           style="background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%);border:2px solid #7dd3fc;">
        <div class="flex flex-col md:flex-row">
          <!-- Immagine copertina -->
          <a href="/welcome-kit-renu.pdf" target="_blank" download
             class="md:w-72 flex-shrink-0 block overflow-hidden">
            <picture>
              <source srcset="/images/welcome-kit-cover.webp" type="image/webp">
              <img src="/images/welcome-kit-cover.jpg"
                   alt="Kit di benvenuto – Insieme per conoscere – Sindrome ReNU Italia"
                   class="w-full h-56 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                   loading="lazy" decoding="async">
            </picture>
          </a>
          <!-- Testo -->
          <div class="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-3">
              <div class="flex-shrink-0 flex items-center justify-center rounded-xl w-12 h-12 text-white text-xl shadow"
                   style="background:linear-gradient(135deg,#0ea5e9,#0369a1)">
                <i class="fas fa-gift"></i>
              </div>
              <h2 class="text-2xl font-extrabold" style="color:#082050">
                ${isIt?'Kit di Benvenuto per le Nuove Famiglie':
                  t.lang==='en'?'Welcome Kit for New Families':
                  t.lang==='fr'?'Kit de bienvenue pour les nouvelles familles':
                  t.lang==='es'?'Kit de bienvenida para nuevas familias':
                  'Willkommenspaket für neue Familien'}
              </h2>
            </div>
            <p class="text-sky-700 font-semibold text-sm mb-3">
              ${isIt?'"Insieme per conoscere – Accoglienza nuove famiglie"':
                t.lang==='en'?'"Together to learn – Welcome for new families"':
                t.lang==='fr'?'"Ensemble pour apprendre – Accueil des nouvelles familles"':
                t.lang==='es'?'"Juntos para conocer – Bienvenida a nuevas familias"':
                '"Gemeinsam lernen – Willkommen für neue Familien"'}
            </p>
            <p class="text-gray-600 text-sm mb-6">
              ${isIt?'Il documento che inviamo alle famiglie che ci contattano per la prima volta. Una guida pensata con cura per accompagnare chi inizia questo percorso: informazioni sulla sindrome, la nostra comunità, i primi passi utili e le storie di chi ci è già passato.':
                t.lang==='en'?'The document we send to families contacting us for the first time. A carefully crafted guide with information on the syndrome, our community, the first useful steps, and stories from families who have been through it.':
                t.lang==='fr'?'Le document que nous envoyons aux familles qui nous contactent pour la première fois. Un guide soigneusement conçu pour accompagner ceux qui commencent ce parcours.':
                t.lang==='es'?'El documento que enviamos a las familias que nos contactan por primera vez. Una guía cuidadosamente diseñada con información sobre el síndrome y nuestra comunidad.':
                'Das Dokument, das wir Familien schicken, die uns zum ersten Mal kontaktieren. Ein sorgfältig erstellter Leitfaden mit Informationen über das Syndrom und unsere Gemeinschaft.'}
            </p>
            <div class="flex flex-wrap gap-3 items-center">
              <a href="/welcome-kit-renu.pdf" target="_blank" download
                 class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all hover:scale-105 hover:shadow-lg"
                 style="background:linear-gradient(135deg,#0ea5e9,#0369a1)">
                <i class="fas fa-download text-base"></i>
                ${isIt?'Scarica il Kit di Benvenuto (PDF)':
                  t.lang==='en'?'Download Welcome Kit (PDF)':
                  t.lang==='fr'?'Télécharger le Kit de bienvenue (PDF)':
                  t.lang==='es'?'Descargar el Kit de bienvenida (PDF)':
                  'Willkommenspaket herunterladen (PDF)'}
              </a>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style="background:#dbeafe;color:#1d4ed8;">
                <i class="fas fa-file-pdf"></i> PDF · 1,2 MB
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ SEZIONE CANZONI ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:linear-gradient(135deg,#7c3aed,#a855f7)">
            <i class="fas fa-music"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Le nostre Canzoni':t.lang==='en'?'Our Songs':t.lang==='fr'?'Nos Chansons':t.lang==='es'?'Nuestras Canciones':'Unsere Lieder'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Musica creata con il cuore per la comunità ReNU Italia':t.lang==='en'?'Music created with heart for the ReNU Italia community':t.lang==='fr'?'Musique créée avec le cœur pour la communauté ReNU':t.lang==='es'?'Música creada con el corazón para la comunidad ReNU':'Musik, die mit Herz für die ReNU-Gemeinschaft geschaffen wurde'}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Canzone 1: Sguardi di ReNU -->
          <div class="card overflow-hidden shadow-lg group">
            <!-- Copertina -->
            <div class="relative overflow-hidden" style="aspect-ratio:1/1;max-height:280px;">
              <picture>
                <source srcset="/images/sguardi-di-renu-cover.webp" type="image/webp">
                <img src="/images/sguardi-di-renu-cover.jpg"
                     alt="Sguardi di ReNU – copertina"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy" decoding="async">
              </picture>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style="background:rgba(124,58,237,0.35)">
                <i class="fas fa-play-circle text-white text-6xl drop-shadow-lg"></i>
              </div>
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold text-white shadow"
                      style="background:linear-gradient(135deg,#7c3aed,#a855f7)">
                  <i class="fas fa-music mr-1"></i>${isIt?'Canzone':'Song'}
                </span>
              </div>
            </div>
            <!-- Info + Player -->
            <div class="p-5">
              <h3 class="text-xl font-extrabold mb-0.5" style="color:#082050">Sguardi di ReNU</h3>
              <p class="text-purple-600 text-sm font-semibold mb-3">
                ${isIt?'Sindrome ReNU Italia APS':'ReNU Italia APS'}
              </p>
              <p class="text-gray-500 text-xs mb-4">
                ${isIt?'Una canzone che racconta la forza e la bellezza degli sguardi dei nostri bambini speciali.':
                  t.lang==='en'?'A song that tells the strength and beauty of our special children\'s gazes.':
                  t.lang==='fr'?'Une chanson qui raconte la force et la beauté des regards de nos enfants spéciaux.':
                  t.lang==='es'?'Una canción que cuenta la fuerza y la belleza de las miradas de nuestros niños especiales.':
                  'Ein Lied, das die Kraft und Schönheit der Blicke unserer besonderen Kinder erzählt.'}
              </p>
              <!-- Player HTML5 -->
              <audio id="player-sguardi" controls preload="none"
                     class="w-full mb-4 rounded-lg"
                     style="accent-color:#7c3aed;">
                <source src="/audio/sguardi-di-renu.mp3" type="audio/mpeg">
              </audio>
              <div class="flex flex-wrap gap-3">
                <a href="/audio/sguardi-di-renu.mp3" download="Sguardi di ReNU.mp3"
                   class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-bold shadow transition-all hover:scale-105"
                   style="background:linear-gradient(135deg,#7c3aed,#a855f7)">
                  <i class="fas fa-download"></i>
                  ${isIt?'Scarica MP3':'Download MP3'}
                </a>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style="background:#f3e8ff;color:#7c3aed;">
                  <i class="fas fa-file-audio"></i> MP3 · 3,1 MB
                </span>
              </div>
            </div>
          </div>

          <!-- Canzone 2: Parlano gli Occhi -->
          <div class="card overflow-hidden shadow-lg group">
            <!-- Copertina -->
            <div class="relative overflow-hidden" style="aspect-ratio:1/1;max-height:280px;">
              <picture>
                <source srcset="/images/parlano-gli-occhi-cover.webp" type="image/webp">
                <img src="/images/parlano-gli-occhi-cover.jpg"
                     alt="Parlano gli Occhi – copertina"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy" decoding="async">
              </picture>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style="background:rgba(14,165,233,0.35)">
                <i class="fas fa-play-circle text-white text-6xl drop-shadow-lg"></i>
              </div>
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold text-white shadow"
                      style="background:linear-gradient(135deg,#0369a1,#0ea5e9)">
                  <i class="fas fa-music mr-1"></i>${isIt?'Canzone':'Song'}
                </span>
              </div>
            </div>
            <!-- Info + Player -->
            <div class="p-5">
              <h3 class="text-xl font-extrabold mb-0.5" style="color:#082050">Parlano gli Occhi</h3>
              <p class="text-sky-600 text-sm font-semibold mb-3">
                ${isIt?'Sindrome ReNU Italia APS':'ReNU Italia APS'}
              </p>
              <p class="text-gray-500 text-xs mb-4">
                ${isIt?'Un brano dedicato agli occhi che parlano per chi non ha ancora trovato le parole.':
                  t.lang==='en'?'A track dedicated to the eyes that speak for those who have not yet found words.':
                  t.lang==='fr'?'Un morceau dédié aux yeux qui parlent pour ceux qui n\'ont pas encore trouvé les mots.':
                  t.lang==='es'?'Una canción dedicada a los ojos que hablan por quienes aún no han encontrado las palabras.':
                  'Ein Stück für die Augen, die für jene sprechen, die noch keine Worte gefunden haben.'}
              </p>
              <!-- Player HTML5 -->
              <audio id="player-parlano" controls preload="none"
                     class="w-full mb-4 rounded-lg"
                     style="accent-color:#0369a1;">
                <source src="/audio/parlano-gli-occhi.mp3" type="audio/mpeg">
              </audio>
              <div class="flex flex-wrap gap-3">
                <a href="/audio/parlano-gli-occhi.mp3" download="Parlano gli Occhi.mp3"
                   class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-bold shadow transition-all hover:scale-105"
                   style="background:linear-gradient(135deg,#0369a1,#0ea5e9)">
                  <i class="fas fa-download"></i>
                  ${isIt?'Scarica MP3':'Download MP3'}
                </a>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style="background:#e0f2fe;color:#0369a1;">
                  <i class="fas fa-file-audio"></i> MP3 · 4,9 MB
                </span>
              </div>
            </div>
          </div>

        </div><!-- fine grid -->
      </div><!-- fine sezione canzoni -->

      <!-- ═══ SEZIONE 0: VIDEO YOUTUBE ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:#DC2626">
            <i class="fab fa-youtube"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Video':'Videos'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Video informativi e di sensibilizzazione sulla Sindrome ReNU':'Informational and awareness videos about ReNU Syndrome'}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Video 1 -->
          <div class="card overflow-hidden">
            <div class="relative w-full" style="padding-bottom:56.25%">
              <iframe
                src="https://www.youtube.com/embed/LqWlxU11UPM"
                title="Sindrome ReNU – Video 1"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            <div class="p-4">
              <a href="https://youtu.be/LqWlxU11UPM" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 text-xs font-semibold" style="color:#DC2626">
                <i class="fab fa-youtube"></i>${isIt?'Guarda su YouTube':'Watch on YouTube'}
              </a>
            </div>
          </div>
          <!-- Video 2 -->
          <div class="card overflow-hidden">
            <div class="relative w-full" style="padding-bottom:56.25%">
              <iframe
                src="https://www.youtube.com/embed/Pe_5GQ7bei4"
                title="Sindrome ReNU – Video 2"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            <div class="p-4">
              <a href="https://youtube.com/watch?v=Pe_5GQ7bei4" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 text-xs font-semibold" style="color:#DC2626">
                <i class="fab fa-youtube"></i>${isIt?'Guarda su YouTube':'Watch on YouTube'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ SEZIONE 1: BROCHURE & MATERIALI ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:#1078C0">
            <i class="fas fa-file-pdf"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Brochure & Materiali Divulgativi':t.lang==='en'?'Brochures & Educational Materials':t.lang==='fr'?'Brochures & Matériaux':t.lang==='es'?'Folletos & Materiales':'Broschüren & Materialien'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Opuscoli, flyer e materiali da condividere sulle Sindrome ReNU':t.lang==='en'?'Booklets, flyers and materials to share about ReNU Syndrome':'Dépliants et matériaux sur le syndrome ReNU'}
            </p>
          </div>
        </div>
        <div id="brochure-grid-brochure" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="col-span-full text-center py-12 text-gray-400">
            <i class="fas fa-spinner fa-spin text-3xl mb-3 block"></i>
            ${t.lang==='it'?'Caricamento brochure...':t.lang==='en'?'Loading brochures...':'Chargement...'}
          </div>
        </div>
      </div>

      <!-- ═══ SEZIONE 2: PUBBLICAZIONI SCIENTIFICHE ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:#082050">
            <i class="fas fa-flask"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Pubblicazioni Scientifiche':t.lang==='en'?'Scientific Publications':t.lang==='fr'?'Publications Scientifiques':t.lang==='es'?'Publicaciones Científicas':'Wissenschaftliche Publikationen'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Articoli, studi e paper scientifici sulla Sindrome ReNU (RNU4-2)':t.lang==='en'?'Articles, studies and scientific papers on ReNU Syndrome (RNU4-2)':'Articles et études scientifiques sur le syndrome ReNU'}
            </p>
          </div>
        </div>
        <div id="brochure-grid-pubblicazione" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="col-span-full text-center py-12 text-gray-400">
            <i class="fas fa-spinner fa-spin text-3xl mb-3 block"></i>
            ${isIt?'Caricamento pubblicazioni...':'Loading publications...'}
          </div>
        </div>
      </div>

      <!-- ═══ SEZIONE 3: OPUSCOLI EDUCATIVI SCOLASTICI ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:#059669">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Opuscoli per la Scuola e la Famiglia':t.lang==='en'?'School & Family Brochures':t.lang==='fr'?'Brochures Scolaires & Familiales':t.lang==='es'?'Folletos Escolares y Familiares':'Schulbroschüren & Familienhefte'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Materiali educativi calibrati per età, da stampare e distribuire liberamente nelle scuole e nelle famiglie':t.lang==='en'?'Age-appropriate educational materials, free to print and distribute in schools and families':'Matériaux éducatifs adaptés à l\'âge, libres d\'impression et de distribution'}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Bambini elementari -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #38BDF8">
            <div class="w-full overflow-hidden flex items-center justify-center bg-white" style="aspect-ratio:4/3">
              <img src="/images/thumb_opuscolo_bambini.jpg" alt="${isIt?'Opuscolo scuola elementare – Sindrome ReNU':'Primary school brochure – ReNU Syndrome'}" class="w-full h-auto object-contain" loading="lazy">
            </div>
            <div class="p-4 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-sky-500 mb-1">${isIt?'Bambini':'Children'}</p>
              <h3 class="font-bold mb-2 text-sm leading-snug flex-1" style="color:#082050">
                ${isIt?'Parliamo della Sindrome di ReNU':'Let\'s Talk About ReNU Syndrome'}
              </h3>
              <p class="text-xs text-gray-500 mb-3">
                ${isIt?'Per i bimbi delle elementari. Linguaggio semplice, personaggi Aaron, Maya e Vittoria.':'For primary school children. Simple language, characters Aaron, Maya and Vittoria.'}
              </p>
              <a href="/static/opuscolo-bambini-elementari.pdf" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
                 style="background:#0284C7">
                <i class="fas fa-download"></i>
                ${isIt?'Scarica PDF':'Download PDF'}
              </a>
            </div>
          </div>

          <!-- Adolescenti scuola media -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #818CF8">
            <div class="w-full overflow-hidden flex items-center justify-center bg-white" style="aspect-ratio:4/3">
              <img src="/images/thumb_opuscolo_adolescenti.jpg" alt="${isIt?'Opuscolo scuola media – Sindrome ReNU':'Middle school brochure – ReNU Syndrome'}" class="w-full h-auto object-contain" loading="lazy">
            </div>
            <div class="p-4 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-indigo-500 mb-1">${isIt?'Adolescenti':'Teens'}</p>
              <h3 class="font-bold mb-2 text-sm leading-snug flex-1" style="color:#082050">
                ${isIt?'Crescere con la Sindrome di ReNU':'Growing Up with ReNU Syndrome'}
              </h3>
              <p class="text-xs text-gray-500 mb-3">
                ${isIt?'Per ragazze e ragazzi. Identità, autonomia, CAA, rispetto dell\'età.':'For teens. Identity, autonomy, AAC and age-appropriate respect.'}
              </p>
              <a href="/static/opuscolo-adolescenti-scuola-media.pdf" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
                 style="background:#4338CA">
                <i class="fas fa-download"></i>
                ${isIt?'Scarica PDF':'Download PDF'}
              </a>
            </div>
          </div>

          <!-- Adulti, genitori, educatori -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #34D399">
            <div class="w-full overflow-hidden flex items-center justify-center bg-white" style="aspect-ratio:4/3">
              <img src="/images/thumb_opuscolo_adulti.jpg" alt="${isIt?'Opuscolo adulti ed educatori – Sindrome ReNU':'Adults and educators brochure – ReNU Syndrome'}" class="w-full h-auto object-contain" loading="lazy">
            </div>
            <div class="p-4 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-emerald-600 mb-1">${isIt?'Adulti':'Adults'}</p>
              <h3 class="font-bold mb-2 text-sm leading-snug flex-1" style="color:#082050">
                ${isIt?'Comprendere la Disabilità e la Sindrome di ReNU':'Understanding Disability and ReNU Syndrome'}
              </h3>
              <p class="text-xs text-gray-500 mb-3">
                ${isIt?'Per genitori, parenti, insegnanti ed educatori. Modello biopsicosociale, Q&A.':'For parents, relatives, teachers and educators. Biopsychosocial model, Q&A.'}
              </p>
              <a href="/static/opuscolo-adulti-educatori.pdf" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
                 style="background:#059669">
                <i class="fas fa-download"></i>
                ${isIt?'Scarica PDF':'Download PDF'}
              </a>
            </div>
          </div>

        </div>
        <div class="mt-5 rounded-xl p-3 flex items-center gap-3" style="background:#F0FDF4;border:1px solid #BBF7D0">
          <i class="fas fa-print text-emerald-600 text-lg flex-shrink-0"></i>
          <p class="text-xs text-emerald-800">
            <strong>${isIt?'Stampa libera:':'Free to print:'}</strong>
            ${isIt?' tutti gli opuscoli sono scaricabili, stampabili e distribuibili liberamente. Nessuna autorizzazione richiesta.'
            :' all brochures are free to download, print and distribute. No permission required.'}
          </p>
        </div>
      </div>

      <!-- ═══ SEZIONE 5: LIBRI AMAZON ═══ -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background:#FF9900">
            <i class="fas fa-book"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold" style="color:#082050">
              ${isIt?'Libri su Amazon':'Books on Amazon'}
            </h2>
            <p class="text-gray-500 text-sm">
              ${isIt?'Libri scritti da famiglie e ricercatori sulla Sindrome ReNU, disponibili su Amazon.':'Books written by families and researchers about ReNU Syndrome, available on Amazon.'}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">

          <!-- Libro 1: The ReNU Syndrome (EN) -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #1078C0">
            <div class="w-full overflow-hidden bg-sky-50" style="aspect-ratio:3/4">
              <img src="/images/amazon_libro1.jpg" alt="The ReNU Syndrome – Science, Stories, Hope and Practical Guidance" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="p-3 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-sky-500 mb-1">EN · Yvonne Schimmel</p>
              <h3 class="font-bold text-xs leading-snug flex-1 mb-2" style="color:#082050">The ReNU Syndrome — Science, Stories, Hope</h3>
              <a href="https://amzn.eu/d/08f2ddnR" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-1.5 text-white px-3 py-2 rounded-lg text-xs font-semibold"
                 style="background:#FF9900">
                <i class="fas fa-external-link-alt"></i>Amazon
              </a>
            </div>
          </div>

          <!-- Libro 2: La Sindrome ReNU (IT) -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #082050">
            <div class="w-full overflow-hidden bg-sky-50" style="aspect-ratio:3/4">
              <img src="/images/amazon_libro2.jpg" alt="La Sindrome ReNU – Cienza, Storie, Speranza e Guida Pratica" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="p-3 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-blue-900 mb-1">IT · Yvonne Schimmel</p>
              <h3 class="font-bold text-xs leading-snug flex-1 mb-2" style="color:#082050">La Sindrome ReNU — Scienza, Storie, Speranza</h3>
              <a href="https://amzn.eu/d/04hHNDmR" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-1.5 text-white px-3 py-2 rounded-lg text-xs font-semibold"
                 style="background:#FF9900">
                <i class="fas fa-external-link-alt"></i>Amazon
              </a>
            </div>
          </div>

          <!-- Libro 3: For Your Own Good (EN) -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #6B7280">
            <div class="w-full overflow-hidden bg-gray-50" style="aspect-ratio:3/4">
              <img src="/images/amazon_libro3.jpg" alt="For Your Own Good – Imma Audino" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="p-3 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-gray-600 mb-1">EN · Imma Audino</p>
              <h3 class="font-bold text-xs leading-snug flex-1 mb-2" style="color:#082050">For Your Own Good — An Intimate Story</h3>
              <a href="https://amzn.eu/d/002VpJFN" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-1.5 text-white px-3 py-2 rounded-lg text-xs font-semibold"
                 style="background:#FF9900">
                <i class="fas fa-external-link-alt"></i>Amazon
              </a>
            </div>
          </div>

          <!-- Libro 4: Per il Tuo Bene (IT) -->
          <div class="card overflow-hidden flex flex-col" style="border-top:4px solid #4B5563">
            <div class="w-full overflow-hidden bg-gray-50" style="aspect-ratio:3/4">
              <img src="/images/amazon_libro4.jpg" alt="Per il Tuo Bene – Imma Audino" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="p-3 flex-1 flex flex-col">
              <p class="text-xs font-bold uppercase tracking-wide text-gray-600 mb-1">IT · Imma Audino</p>
              <h3 class="font-bold text-xs leading-snug flex-1 mb-2" style="color:#082050">Per il Tuo Bene — Un racconto intimo e coraggioso</h3>
              <a href="https://amzn.eu/d/02XKpG7z" target="_blank" rel="noopener"
                 class="mt-auto inline-flex items-center justify-center gap-1.5 text-white px-3 py-2 rounded-lg text-xs font-semibold"
                 style="background:#FF9900">
                <i class="fas fa-external-link-alt"></i>Amazon
              </a>
            </div>
          </div>

        </div>
        <div class="mt-5 rounded-xl p-3 flex items-center gap-3" style="background:#FFF8F0;border:1px solid #FFDCAB">
          <i class="fab fa-amazon text-amber-600 text-lg flex-shrink-0"></i>
          <p class="text-xs text-amber-800">
            <strong>${isIt?'Acquistando questi libri':'By purchasing these books'}</strong>
            ${isIt?' supporti le famiglie e la ricerca sulla Sindrome ReNU. I libri sono disponibili in versione cartacea e digitale su Amazon.it e Amazon.com.'
            :' you support families and ReNU Syndrome research. Books are available in print and digital format on Amazon.it and Amazon.com.'}
          </p>
        </div>
      </div>

      <!-- Download all -->
      <div id="brochure-download-all" class="rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%); display:none">
        <i class="fas fa-file-archive text-5xl text-sky-300 mb-4 block"></i>
        <h2 class="text-2xl font-bold mb-2">
          ${isIt?'Scarica tutti i materiali':t.lang==='en'?'Download all materials':'Télécharger tous les matériaux'}
        </h2>
        <p class="text-sky-200 mb-5">
          ${isIt?'Condividi brochure e pubblicazioni per diffondere la consapevolezza sulla Sindrome ReNU.':t.lang==='en'?'Share brochures and publications to spread awareness about ReNU Syndrome.':'Partagez brochures et publications pour sensibiliser à la maladie ReNU.'}
        </p>
        <div id="brochure-links-all" class="flex flex-wrap justify-center gap-3"></div>
      </div>

  <script>
  (function(){
    var lang = '${t.lang}';
    var dlLabel = "${dlLabel.replace(/"/g, '&quot;')}";
    var isIt = lang === 'it';

    function buildCard(b, isPub) {
      var isExt = b.file_name && (b.file_name.indexOf('http://') === 0 || b.file_name.indexOf('https://') === 0);
      var isDrive = isExt && b.file_name.indexOf('drive.google.com') !== -1;
      var isAbsPath = !isExt && b.file_name && b.file_name.indexOf('/') === 0;
      var href = isExt ? b.file_name : (isAbsPath ? b.file_name : '/brochure/' + b.file_name);
      var target = isExt ? '_blank' : '_self';
      var btnIcon = isExt ? 'fa-external-link-alt' : 'fa-download';
      var fileIcon = isDrive ? 'fa-file-alt' : (isPub ? 'fa-file-medical-alt' : 'fa-file-pdf');
      var btnStyle = isPub ? 'background:#082050' : 'background:#1078C0';
      var btnLabelPub = isIt ? 'Leggi Pubblicazione' : (lang==='en' ? 'Read Publication' : (lang==='fr' ? 'Lire la publication' : 'Leer publicación'));
      var finalLabel = isPub ? btnLabelPub : dlLabel;

      var thumbHtml;
      if (b.img_url) {
        thumbHtml = '<div class="w-full overflow-hidden bg-sky-50 flex items-center justify-center" style="aspect-ratio:3/4">'
          + '<img src="' + b.img_url + '" alt="' + (b.titolo||'').replace(/"/g,'&quot;') + '" class="w-full h-full object-contain" loading="lazy">'
          + '</div>';
      } else if (b.thumb_id) {
        thumbHtml = '<div class="w-full overflow-hidden bg-sky-50 flex items-center justify-center" style="aspect-ratio:3/4">'
          + '<img src="/brochure/thumbnails/' + b.thumb_id + '.png" alt="Copertina pubblicazione: ' + (b.titolo || b.title || 'Documento Sindrome ReNU') + '" class="w-full h-full object-contain" loading="lazy">'
          + '</div>';
      } else {
        thumbHtml = '<div class="w-full flex items-center justify-center" style="aspect-ratio:3/4;background:linear-gradient(135deg,#EEF6FB,#C8E8F8)">'
          + '<i class="fas ' + fileIcon + ' text-5xl" style="color:#1078C0"></i>'
          + '</div>';
      }

      return '<div class="card card-blue overflow-hidden flex flex-col">'
        + thumbHtml
        + '<div class="p-4 flex-1 flex flex-col">'
        + '<h3 class="font-bold mb-1 text-sm leading-snug flex-1" style="color:#082050">' + (b.titolo || '') + '</h3>'
        + '<a href="' + href + '" target="' + target + '" rel="noopener" class="mt-3 inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold" style="' + btnStyle + '">'
        + '<i class="fas ' + btnIcon + '"></i>' + finalLabel
        + '</a>'
        + '</div>'
        + '</div>';
    }

    fetch('/api/brochure?lang=' + lang)
      .then(function(r){ return r.json(); })
      .then(function(data){
        var gridBro = document.getElementById('brochure-grid-brochure');
        var gridPub = document.getElementById('brochure-grid-pubblicazione');
        var dlAll = document.getElementById('brochure-download-all');
        var linksAll = document.getElementById('brochure-links-all');

        var brochures = data.filter(function(b){ return !b.category || b.category === 'brochure'; });
        var pubblicazioni = data.filter(function(b){ return b.category === 'pubblicazione'; });

        if(gridBro) {
          if(!brochures.length) {
            gridBro.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400"><i class="fas fa-info-circle text-2xl mb-2 block"></i>'
              + (isIt ? 'Nessuna brochure disponibile al momento.' : 'No brochures available yet.') + '</div>';
          } else {
            gridBro.innerHTML = brochures.map(function(b){ return buildCard(b, false); }).join('');
          }
        }

        if(gridPub) {
          if(!pubblicazioni.length) {
            gridPub.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400"><i class="fas fa-info-circle text-2xl mb-2 block"></i>'
              + (isIt ? 'Nessuna pubblicazione scientifica disponibile al momento. Consulta la cartella Google Drive qui sotto.' : 'No scientific publications available yet. See the Google Drive folder below.') + '</div>';
          } else {
            gridPub.innerHTML = pubblicazioni.map(function(b){ return buildCard(b, true); }).join('');
          }
        }

        if(linksAll && data.length) {
          linksAll.innerHTML = data.map(function(b){
            var isExt = b.file_name && (b.file_name.indexOf('http://') === 0 || b.file_name.indexOf('https://') === 0);
            var isAbsPath2 = !isExt && b.file_name && b.file_name.indexOf('/') === 0;
            var href = isExt ? b.file_name : (isAbsPath2 ? b.file_name : '/brochure/' + b.file_name);
            var target = isExt ? '_blank' : '_self';
            var label = b.titolo ? b.titolo.substring(0, 32) + (b.titolo.length > 32 ? '…' : '') : b.file_name.replace('brochure-','').replace('.pdf','');
            return '<a href="' + href + '" target="' + target + '" rel="noopener" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg text-xs font-medium">'
              + '<i class="fas fa-external-link-alt text-xs"></i>' + label + '</a>';
          }).join('');
          if(dlAll) dlAll.style.display = 'block';
        }
      }).catch(function(){
        var g = document.getElementById('brochure-grid-brochure');
        if(g) g.innerHTML = '<div class="col-span-full text-center py-12 text-gray-400"><i class="fas fa-exclamation-circle text-3xl mb-3 block"></i>Errore nel caricamento.</div>';
      });
  })();
  </script>

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

      <!-- Prossimi eventi – caricati dal DB -->
      <h2 class="text-2xl font-extrabold mb-4 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-star" style="color:#F59E0B"></i>
        ${t.lang==='it'?'Calendario Appuntamenti':'Events Calendar'}
      </h2>
      <div id="eventi-list">
        <div class="text-center py-10 text-gray-400">
          <i class="fas fa-spinner fa-spin text-3xl mb-3 block"></i>
          ${t.lang==='it'?'Caricamento eventi...':t.lang==='en'?'Loading events...':'Chargement...'}
        </div>
      </div>

      <script>
      (function(){
        const lang = '${t.lang}';
        const statoMap = { 'in_definizione': '${t.lang==='it'?'In definizione':t.lang==='en'?'To be announced':'À définir'}', 'confermato': '${t.lang==='it'?'Confermato':t.lang==='en'?'Confirmed':'Confirmé'}', 'passato': '${t.lang==='it'?'Passato':t.lang==='en'?'Past':'Passé'}', 'annullato': '${t.lang==='it'?'Annullato':t.lang==='en'?'Cancelled':'Annulé'}' };
        fetch('/api/eventi?lang=' + lang)
          .then(r=>r.json())
          .then(data=>{
            const el = document.getElementById('eventi-list');
            if(!data.length){
              el.innerHTML = \`<div class="rounded-2xl p-8 text-center mb-6" style="background:#EEF6FB; border: 2px dashed #45B8EC">
                <i class="fas fa-calendar-plus text-5xl mb-4 block" style="color:#45B8EC"></i>
                <h3 class="font-bold text-xl mb-2" style="color:#082050">${t.lang==='it'?'Nuovi eventi in arrivo!':'New events coming soon!'}</h3>
                <p class="text-gray-600 mb-4">${t.lang==='it'?'Segui i nostri canali social per essere il primo a sapere.':'Follow our social channels to be the first to know.'}</p>
              </div>\`;
              return;
            }
            el.innerHTML = data.map(ev=>{
              const dataStr = ev.data_evento ? new Date(ev.data_evento).toLocaleDateString('${t.lang==='it'?'it-IT':'en-GB'}',{day:'numeric',month:'long',year:'numeric'}) : (statoMap[ev.stato]||ev.stato);
              const anno = ev.data_evento ? new Date(ev.data_evento).getFullYear() : '?';
              const mese = ev.data_evento ? new Date(ev.data_evento).toLocaleDateString('${t.lang==='it'?'it-IT':'en-GB'}',{month:'short'}).toUpperCase() : '';
              return \`<div class="card card-amber p-8 mb-6 flex flex-col md:flex-row items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white font-extrabold" style="background:linear-gradient(135deg,#F59E0B,#D97706)">
                    <span class="text-xl leading-none">\${mese||anno}</span>
                    \${mese ? \`<span class="text-xs mt-1">\${anno}</span>\` : ''}
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF3C7;color:#92400E">
                      <i class="fas fa-clock"></i> \${statoMap[ev.stato]||ev.stato}
                    </span>
                    \${ev.categoria ? \`<span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#EEF6FB;color:#1078C0">\${ev.categoria}</span>\` : ''}
                  </div>
                  <h3 class="font-bold text-xl mb-2" style="color:#082050">\${ev.titolo||''}</h3>
                  \${ev.luogo ? \`<p class="text-xs font-semibold text-sky-600 mb-2"><i class="fas fa-map-marker-alt mr-1"></i>\${ev.luogo}</p>\` : ''}
                  <p class="text-gray-600 mb-3 text-sm">\${ev.desc||''}</p>
                  \${ev.url_esterno ? \`<a href="\${ev.url_esterno}" target="_blank" class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0"><i class="fas fa-external-link-alt"></i>${t.lang==='it'?'Apri link':'Open link'}</a>\` : ''}
                </div>
              </div>\`;
            }).join('');
          }).catch(()=>{
            document.getElementById('eventi-list').innerHTML = '<div class="card p-6 text-gray-500 text-center">Errore nel caricamento degli eventi.</div>';
          });
      })();
      </script>

      <!-- COLLAGE INCONTRO FAMIGLIE 20 SETTEMBRE 2026 -->
      <div class="flex items-center gap-3 mb-4 mt-4">
        <img src="/images/logo_transparent.webp" alt="Sindrome ReNU Italia APS" class="w-10 h-10 object-contain flex-shrink-0" loading="lazy">
        <h2 class="text-2xl font-extrabold" style="color:#082050">
          ${t.lang==='it'?'Incontro delle Famiglie ReNU':'ReNU Families Meeting'}
        </h2>
      </div>
      <div class="rounded-2xl overflow-hidden mb-10 shadow-lg">
        <picture>
          <source srcset="/images/incontro_famiglie_renu_20set2026_collage.webp" type="image/webp">
          <img src="/images/incontro_famiglie_renu_20set2026_collage.jpg"
               alt="${t.lang==='it'?'Incontro delle Famiglie ReNU – 20 settembre 2026, Bosco Verticale Milano':'ReNU Families Meeting – 20 September 2026, Bosco Verticale Milan'}"
               class="w-full h-auto object-cover"
               loading="lazy" decoding="async" width="1200" height="1200">
        </picture>
      </div>

      <!-- MOVE4RENU INTERNAZIONALE -->
      <div class="mt-12 mb-6">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe" style="color:#45B8EC"></i>
          ${t.lang==='it'?'Move4ReNU – L\'Iniziativa Internazionale':'Move4ReNU – The International Initiative'}
        </h2>
        <div class="card overflow-hidden">
          <div class="px-8 py-6 text-white" style="background: linear-gradient(135deg, #0e7490 0%, #45B8EC 100%);">
            <div class="flex flex-col sm:flex-row items-center gap-6">
              <div class="flex-shrink-0">
                <img src="/images/move4renu.jpg"
                     alt="Move4ReNU International"
                     class="w-40 h-auto rounded-xl border-2 border-white border-opacity-30"
                     loading="lazy" decoding="async">
              </div>
              <div>
                <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:rgba(255,255,255,0.2); color:#BAE6FD">
                  <i class="fas fa-running"></i>${t.lang==='it'?'Evento Internazionale Annuale':'Annual International Event'}
                </div>
                <h3 class="text-2xl font-extrabold">Move4ReNU</h3>
                <p class="text-sky-100 text-sm mt-1">
                  ${t.lang==='it'?'Ogni aprile – In tutto il mondo':'Every April – Worldwide'}
                </p>
              </div>
            </div>
          </div>
          <div class="p-8">
            <p class="text-gray-600 leading-relaxed mb-5">
              ${t.lang==='it'?'Move4ReNU è l\'iniziativa sportiva e di sensibilizzazione lanciata dalla comunità ReNU internazionale. Ogni aprile, famiglie e sostenitori da tutto il mondo camminano, corrono, pedalano o ballano per far conoscere la Sindrome ReNU.':'Move4ReNU is the sports and awareness initiative launched by the international ReNU community. Every April, families and supporters from around the world walk, run, cycle or dance to raise awareness of ReNU Syndrome.'}
            </p>
            <!-- Versioni linguistiche grafiche -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-5">
              <div class="text-center">
                <img src="/images/move4renu_it.jpg" alt="Move4ReNU Italiano" class="w-full rounded-lg mb-1 block h-auto" loading="lazy" decoding="async">
                <span class="text-xs font-semibold text-gray-500">🇮🇹 Italiano</span>
              </div>
              <div class="text-center">
                <img src="/images/move4renu_en.jpg" alt="Move4ReNU English" class="w-full rounded-lg mb-1 block h-auto" loading="lazy" decoding="async">
                <span class="text-xs font-semibold text-gray-500">🇬🇧 English</span>
              </div>
              <div class="text-center">
                <img src="/images/move4renu_fr.jpg" alt="Move4ReNU Français" class="w-full rounded-lg mb-1 block h-auto" loading="lazy" decoding="async">
                <span class="text-xs font-semibold text-gray-500">🇫🇷 Français</span>
              </div>
              <div class="text-center">
                <img src="/images/move4renu_es.jpg" alt="Move4ReNU Español" class="w-full rounded-lg mb-1 block h-auto" loading="lazy" decoding="async">
                <span class="text-xs font-semibold text-gray-500">🇪🇸 Español</span>
              </div>
              <div class="text-center">
                <img src="/images/move4renu_de.jpg" alt="Move4ReNU Deutsch" class="w-full rounded-lg mb-1 block h-auto" loading="lazy" decoding="async">
                <span class="text-xs font-semibold text-gray-500">🇩🇪 Deutsch</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="https://www.renusyndrome.org/move4renu" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#0e7490">
                <i class="fas fa-external-link-alt"></i>${t.lang==='it'?'Scopri Move4ReNU Internazionale':'Learn about Move4ReNU International'}
              </a>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Partecipo Move4ReNU':'Join Move4ReNU')}"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#1078C0">
                <i class="fas fa-running"></i>${t.lang==='it'?'Voglio partecipare':'I want to participate'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- GIORNATA GLOBALE 4 FEBBRAIO 2027 -->
      <div class="mt-12 mb-6">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe" style="color:#1078C0"></i>
          ${t.lang==='it'?'Giornata Globale Sindrome ReNU':'ReNU Syndrome Global Day'}
        </h2>
        <div class="card overflow-hidden">
          <div class="px-8 py-6 text-white flex flex-col sm:flex-row items-center gap-6" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
            <div class="flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white font-extrabold" style="background:rgba(255,255,255,0.15); border:2px solid rgba(255,255,255,0.3)">
              <span class="text-3xl leading-none font-black">4</span>
              <span class="text-xs mt-1 tracking-wide">FEB 2027</span>
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
          <div class="p-8">
            <p class="text-gray-600 leading-relaxed mb-5">
              ${t.lang==='it'?'Il 4 febbraio 2027, in occasione della Giornata Mondiale delle Malattie Rare, Sindrome ReNU Italia APS promuove la prima Giornata Globale Sindrome ReNU in Italia, in coordinamento con le associazioni partner internazionali.':'On February 4, 2027, on the occasion of Rare Disease Day, Sindrome ReNU Italia APS promotes the first ReNU Syndrome Global Day in Italy, in coordination with international partner associations.'}
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Partecipo Giornata Globale ReNU':'Join ReNU Global Day')}"
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

      <!-- DYNAMO CAMP -->
      <div class="mt-12 mb-6">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-campground" style="color:#10B981"></i>
          ${t.lang==='it'?'Dynamo Camp – Terapia Ricreativa':'Dynamo Camp – Therapeutic Recreation'}
        </h2>
        <div class="card overflow-hidden">
          <!-- Immagine informativa Dynamo -->
          <div class="w-full overflow-hidden">
            <img src="/images/dynamo_informativa.jpg"
                 alt="Dynamo Camp informativa"
                 class="w-full h-auto object-contain bg-white"
                 loading="lazy" decoding="async">
          </div>
          <div class="p-8">
            <p class="text-gray-600 leading-relaxed mb-6">
              ${t.lang==='it'
                ? 'Dynamo Camp è un programma di Terapia Ricreativa che offre soggiorni gratuiti a bambini e ragazzi con patologie gravi o croniche, tra cui le malattie rare. Sindrome ReNU Italia APS collabora con Dynamo per garantire ai nostri bambini questa preziosa opportunità di gioco, socialità e benessere.'
                : 'Dynamo Camp is a Therapeutic Recreation programme offering free stays to children and young people with serious or chronic illnesses, including rare diseases. Sindrome ReNU Italia APS collaborates with Dynamo to ensure our children have this valuable opportunity for play, socialising and wellbeing.'}
            </p>
            <!-- Foto partecipanti ReNU -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div class="rounded-xl overflow-hidden">
                <img src="/images/dynamo_maya.jpg"
                     alt="Maya – Dynamo Camp"
                     class="w-full h-auto object-cover"
                     loading="lazy" decoding="async">
              </div>
              <div class="rounded-xl overflow-hidden">
                <img src="/images/dynamo_francesco.jpg"
                     alt="Francesco – Dynamo Camp"
                     class="w-full h-auto object-cover"
                     loading="lazy" decoding="async">
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="https://www.dynamocamp.org" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#10B981">
                <i class="fas fa-external-link-alt"></i>${t.lang==='it'?'Scopri Dynamo Camp':'Learn about Dynamo Camp'}
              </a>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Dynamo Camp – informazioni':'Dynamo Camp – information')}"
                 class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#EEF6FB;color:#082050;border:1px solid #45B8EC">
                <i class="fas fa-envelope"></i>${t.lang==='it'?'Chiedi informazioni':'Request info'}
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
      <div class="flex-shrink-0 hidden md:flex gap-4 items-center">
        <div class="img-frame overflow-hidden rounded-2xl shadow-xl" style="width:13rem;aspect-ratio:16/10">
          <img src="/images/renu_parents.jpg" alt="Volontari ReNU Italia" class="w-full h-full object-cover" style="object-position:center center" loading="lazy" decoding="async">
        </div>
        <div class="overflow-hidden rounded-2xl shadow-xl flex items-center justify-center" style="width:11rem;background:#F5F3FF">
          <img src="/images/renu_progetto_scuola.jpg" alt="Progetto scuola ReNU" class="w-full h-auto" loading="lazy" decoding="async">
        </div>
      </div>
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
                ${isIt?'La partecipazione alla Wizz Air Milano Marathon 2027 rappresenta un&#39;opportunità concreta per sensibilizzare, coinvolgere sostenitori e raccogliere fondi a favore delle famiglie ReNU. La Maratona di Milano ha un enorme programma solidale chiamato Charity Program, considerato il più grande progetto di raccolta fondi sportiva in Italia e uno dei più importanti in Europa.':'Participation in the Wizz Air Milano Marathon 2027 is a concrete opportunity to raise awareness, engage supporters and raise funds for ReNU families. The Milan Marathon has a huge solidarity programme called Charity Program, considered the largest sports fundraising project in Italy and one of the most important in Europe.'}
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
          <!-- Header card -->
          <div class="px-7 py-5 flex flex-col md:flex-row gap-5 items-start">
            <div class="flex-shrink-0">
              <div class="ic ic-green w-16 h-16">
                <i class="fas fa-hands-helping text-2xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="font-extrabold text-xl" style="color:#082050">
                  ${isIt?'Rete del Tempo – ReNU':'Time Network – ReNU'}
                </h3>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#D1FAE5;color:#059669">
                  <i class="fas fa-circle text-xs"></i>${isIt?'In sviluppo':'In development'}
                </span>
                <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#F0FDF4;color:#166534;border:1px solid #BBF7D0">
                  <i class="fas fa-tag text-xs"></i>${isIt?'progetto sollievo':'relief project'}
                </span>
              </div>
              <p class="text-gray-600 leading-relaxed mb-3">
                ${isIt
                  ? 'Con Rete del Tempo – ReNU vogliamo offrire ai ragazzi occasioni di socialità e alle loro famiglie un aiuto concreto. Il progetto si sviluppa in tre ambiti, grazie alla collaborazione con realtà già presenti sul territorio.'
                  : 'With Rete del Tempo – ReNU we aim to offer young people opportunities for socialisation and concrete support to their families. The project develops across three areas, thanks to collaboration with organisations already active in local communities.'}
              </p>
            </div>
          </div>

          <!-- 3 schede progetto -->
          <div class="px-7 pb-2">
            <p class="text-xs font-bold uppercase tracking-widest mb-4" style="color:#7350a4">
              <i class="fas fa-layer-group mr-1"></i>${isIt?'Il progetto in tre ambiti':'Three project areas'}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">

              <!-- 01 Tempo libero -->
              <div class="rounded-2xl p-5" style="background:#fff;border:1px solid #e7e5f3;box-shadow:0 4px 16px rgba(30,48,100,.06)">
                <div class="inline-grid place-items-center w-10 h-10 rounded-xl mb-3 text-sm font-black" style="background:#ece4fa;color:#7350a4">01</div>
                <h4 class="font-bold mb-2" style="color:#142f60;font-size:1.05rem">
                  ${isIt?'Tempo libero':'Free time'}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-2">
                  ${isIt
                    ? 'Uscite e attività di socializzazione pensate per offrire ai ragazzi nuove esperienze e occasioni di incontro.'
                    : 'Outings and socialisation activities designed to give young people new experiences and opportunities to connect.'}
                </p>
                <p class="text-sm text-gray-500 leading-relaxed">
                  ${isIt
                    ? 'Le attività sono organizzate da associazioni locali, anche con il contributo di volontari da loro coordinati.'
                    : 'Activities are organised by local associations, including with the contribution of volunteers they coordinate.'}
                </p>
              </div>

              <!-- 02 Sollievo alla famiglia -->
              <div class="rounded-2xl p-5" style="background:#fff;border:1px solid #e7e5f3;box-shadow:0 4px 16px rgba(30,48,100,.06)">
                <div class="inline-grid place-items-center w-10 h-10 rounded-xl mb-3 text-sm font-black" style="background:#ece4fa;color:#7350a4">02</div>
                <h4 class="font-bold mb-2" style="color:#142f60;font-size:1.05rem">
                  ${isIt?'Sollievo alla famiglia':'Family relief'}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-2">
                  ${isIt
                    ? 'Qualche ora di supporto a casa, con una persona di fiducia, per permettere ai genitori di riposare, occuparsi di un impegno o dedicare del tempo a sé.'
                    : 'A few hours of support at home, with a trusted person, to allow parents to rest, attend to other commitments, or take time for themselves.'}
                </p>
                <p class="text-sm text-gray-500 leading-relaxed">
                  ${isIt
                    ? 'Il servizio è svolto da cooperative e associazioni del territorio, anche su base volontaria sotto il loro coordinamento.'
                    : 'The service is carried out by local cooperatives and associations, including on a voluntary basis under their coordination.'}
                </p>
              </div>

              <!-- 03 Assistenza domiciliare -->
              <div class="rounded-2xl p-5" style="background:#fff;border:1px solid #e7e5f3;box-shadow:0 4px 16px rgba(30,48,100,.06)">
                <div class="inline-grid place-items-center w-10 h-10 rounded-xl mb-3 text-sm font-black" style="background:#ece4fa;color:#7350a4">03</div>
                <h4 class="font-bold mb-2" style="color:#142f60;font-size:1.05rem">
                  ${isIt?'Assistenza domiciliare':'Home care'}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-2">
                  ${isIt
                    ? 'Un aiuto a casa, definito in base alle esigenze della persona e della famiglia. Quando necessario, può comprendere anche assistenza sanitaria prestata da personale qualificato.'
                    : 'Support at home, defined according to the needs of the individual and the family. Where necessary, it may also include healthcare provided by qualified staff.'}
                </p>
                <p class="text-sm text-gray-500 leading-relaxed">
                  ${isIt
                    ? 'Il servizio è svolto da cooperative qualificate del territorio.'
                    : 'The service is carried out by qualified local cooperatives.'}
                </p>
              </div>
            </div>

            <!-- Box evidenza: servizi gratuiti -->
            <div class="rounded-r-2xl mb-5 px-5 py-4" style="background:#eae4f7;border-left:5px solid #7350a4">
              <p class="text-sm leading-relaxed" style="color:#25344e">
                <strong style="color:#142f60">${isIt?'Tutti i servizi sono gratuiti per le famiglie.':'All services are free of charge for families.'}</strong>
                ${isIt
                  ? ' Ci appoggiamo a cooperative e associazioni già attive sul territorio, che organizzano e svolgono le attività. La nostra associazione sostiene interamente i costi dei servizi.'
                  : ' We rely on cooperatives and associations already active locally, who organise and deliver the activities. Our association covers all service costs in full.'}
              </p>
            </div>

            <!-- Sezione finale: rete in crescita + invito -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 class="font-bold mb-2" style="color:#142f60;font-size:1.05rem">
                  <i class="fas fa-network-wired mr-2 text-green-600"></i>${isIt?'Una rete in crescita':'A growing network'}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  ${isIt
                    ? 'Stiamo costruendo la Rete nelle città in cui vivono i nostri ragazzi. La disponibilità dei singoli servizi dipenderà dalle collaborazioni attivate in ciascun territorio.'
                    : 'We are building the Network in the cities where our young people live. The availability of individual services will depend on the partnerships established in each area.'}
                </p>
              </div>
              <div class="rounded-2xl p-4" style="background:#fff;border:1px solid #dcd5ee">
                <h4 class="font-bold mb-2" style="color:#142f60;font-size:1.05rem">
                  <i class="fas fa-seedling mr-2 text-purple-600"></i>${isIt?'Aiutateci a far crescere la Rete':'Help us grow the Network'}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  ${isIt
                    ? 'Se conoscete un\'associazione o una cooperativa affidabile nella vostra zona che potrebbe collaborare al progetto, condividete con noi i suoi contatti.'
                    : 'If you know a reliable association or cooperative in your area that could collaborate on the project, share their contact details with us.'}
                </p>
              </div>
            </div>
          </div>

          <!-- CTA footer card -->
          <div class="px-7 pb-6 flex flex-wrap gap-3">
            <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Partecipo alla Rete del Tempo':'Join the Time Network')}"
               class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#EEF6FB;color:#082050;border:1px solid #45B8EC">
              <i class="fas fa-envelope"></i>${isIt?'Partecipa alla rete':'Join the network'}
            </a>
            <a href="/rete-del-tempo-renu.pdf" target="_blank" download
               class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#F0FDF4;color:#166534;border:1px solid #86EFAC">
              <i class="fas fa-file-pdf"></i>${isIt?'Scarica l\'opuscolo PDF':'Download PDF brochure'}
            </a>
          </div>
        </div>

        <!-- PERCORSO SCUOLA -->
        <div id="percorso-scuola" class="card p-0 overflow-hidden scroll-mt-24">
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
                ${isIt?'Il Percorso Scuola ReNU offre materiali pratici e linee guida per supportare insegnanti, educatori, assistenti all\'autonomia e scuole nell\'inclusione dei bambini con Sindrome ReNU. Disponibili opuscoli informativi, schede di presentazione per la classe e indicazioni per il PEI/PDP. Materiali scaricabili gratuitamente qui sotto.':'The ReNU School Pathway offers practical materials and guidelines to support teachers, educators, support assistants and schools in including children with ReNU Syndrome. Available are informational brochures, class presentation sheets and guidance for individual education plans. Materials available free to download below.'}
              </p>
              <!-- ANTEPRIMA OPUSCOLO SCUOLA -->
              <div class="mb-5">
                <figure class="text-center">
                  <img src="/images/renu_opuscolo_scuola.jpg"
                       alt="${isIt?'Opuscolo scuola ReNU – Ciao Mondo! – Brochure informativa per insegnanti sui bambini con Sindrome ReNU':'ReNU school brochure – Ciao Mondo! – Informational brochure for teachers about children with ReNU Syndrome'}"
                       style="width:100%;max-width:600px;height:auto;display:block;border-radius:0.75rem;box-shadow:0 4px 16px rgba(0,0,0,0.12);margin:0 auto" loading="lazy" decoding="async">
                </figure>
              </div>
              <!-- OPUSCOLI SCARICABILI -->
              <div class="mb-5 rounded-xl p-5" style="background:#F5F3FF; border:1px solid #DDD6FE">
                <p class="text-xs font-bold mb-3" style="color:#7C3AED">
                  <i class="fas fa-download mr-1"></i>${isIt?'Opuscoli scaricabili gratuitamente:':'Free downloadable brochures:'}
                </p>
                <div class="flex flex-col gap-2">
                  <a href="/static/opuscolo-bambini-elementari.pdf" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:opacity-90" style="background:#E0F2FE;color:#0369A1">
                    <i class="fas fa-child text-sm"></i>
                    <span>${isIt?'Bambini – Scuola Elementare':'Children – Primary School'}</span>
                    <i class="fas fa-download text-xs ml-auto opacity-60"></i>
                  </a>
                  <a href="/static/opuscolo-adolescenti-scuola-media.pdf" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:opacity-90" style="background:#EEF2FF;color:#4338CA">
                    <i class="fas fa-user-graduate text-sm"></i>
                    <span>${isIt?'Adolescenti – Scuola Media':'Teenagers – Middle School'}</span>
                    <i class="fas fa-download text-xs ml-auto opacity-60"></i>
                  </a>
                  <a href="/static/opuscolo-adulti-educatori.pdf" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:opacity-90" style="background:#D1FAE5;color:#059669">
                    <i class="fas fa-chalkboard-teacher text-sm"></i>
                    <span>${isIt?'Adulti, Insegnanti & Educatori':'Adults, Teachers & Educators'}</span>
                    <i class="fas fa-download text-xs ml-auto opacity-60"></i>
                  </a>
                </div>
              </div>
              <div class="flex flex-wrap gap-3">
                <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Percorso Scuola ReNU':'ReNU School Pathway')}"
                   class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#F5F3FF;color:#7C3AED;border:1px solid #7C3AED">
                  <i class="fas fa-envelope"></i>${isIt?'Richiedi supporto':'Request support'}
                </a>
              </div>
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

      <!-- Quota associativa approvata -->
      <div class="rounded-2xl p-6 mb-10 flex items-start gap-4" style="background:#D1FAE5; border: 2px solid #059669">
        <i class="fas fa-check-circle text-3xl mt-1 flex-shrink-0" style="color:#059669"></i>
        <div>
          <h3 class="font-bold text-xl mb-1" style="color:#065F46">
            ${t.lang==='it'?'Quota Associativa Annuale: 25 €':'Annual Membership Fee: €25'}
          </h3>
          <p class="text-green-800 text-sm leading-relaxed">
            ${t.lang==='it'?'Il Consiglio Direttivo ha approvato la quota associativa annuale di <strong>25 euro</strong>. La quota è valida per tutti i tipi di socio (familiare, sostenitore). Compila il modulo qui sotto per iscriverti o pre-iscriverti — ti contatteremo con le istruzioni di pagamento.':'The Board of Directors has approved the annual membership fee of <strong>€25</strong>. The fee applies to all member types (family, supporting). Fill in the form below to register or pre-register — we will contact you with payment instructions.'}
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
          ${t.lang==='it'?'Quote Associative':'Membership Fees'}
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
            <div class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#D1FAE5; color:#065F46">
              <i class="fas fa-euro-sign text-xs"></i>
              25 €/anno
            </div>
          </div>`).join('')}
        </div>
        <p class="text-gray-500 text-xs mt-4 flex items-center gap-1">
          <i class="fas fa-info-circle" style="color:#45B8EC"></i>
          ${t.lang==='it'?'La quota annuale di 25€ è valida per tutti i soci. Per informazioni scrivi a':'The annual fee of €25 applies to all members. For information write to'}
          <a href="mailto:segreteria@sindromerenu.it" class="underline" style="color:#1078C0">segreteria@sindromerenu.it</a>
        </p>
      </div>

      <!-- FORM PRE-ADESIONE -->
      <div class="mt-10 card card-navy p-8">
        <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-user-plus" style="color:#1078C0"></i>
          ${t.lang==='it'?'Iscriviti – Quota 25€/anno':'Registration – Fee €25/year'}
        </h3>
        <p class="text-gray-600 text-sm mb-6">
          ${t.lang==='it'?'Compila il form per iscriverti all\'associazione. La quota annuale è di <strong>25 euro</strong>. Ti contatteremo con le istruzioni per il pagamento e l\'invio della documentazione.':'Fill in the form to join the association. The annual fee is <strong>€25</strong>. We will contact you with payment instructions and documentation.'}
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
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Codice Fiscale *':'Tax Code (Codice Fiscale) *'}
            </label>
            <input type="text" name="codice_fiscale" required placeholder="${t.lang==='it'?'Es. RSSMRA80A01H501U':'e.g. RSSMRA80A01H501U'}"
                   maxlength="16" style="text-transform:uppercase;border-color:#C8E8F8"
                   class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 tracking-widest font-mono"
                   oninput="this.value=this.value.toUpperCase()">
            <p class="text-xs text-gray-400 mt-1">${t.lang==='it'?'Necessario per emettere la ricevuta del versamento della quota associativa.':'Required to issue the receipt for the membership fee payment.'}</p>
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
            <textarea name="come_hai_trovato" rows="2" placeholder="${t.lang==='it'?'Sito Web Istituzionale, Facebook, Instagram, medico, altra famiglia...':'Institutional Website, Facebook, Instagram, doctor, another family...'}"
                      class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 resize-none" style="border-color:#C8E8F8"></textarea>
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" name="privacy" required id="privacyCheck" class="mt-1 w-4 h-4 flex-shrink-0">
            <label for="privacyCheck" class="text-xs text-gray-600">
              ${t.lang==='it'?'Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) per la gestione della lista d\'attesa di Sindrome ReNU Italia APS. I dati non saranno ceduti a terzi. <a href="/it/privacy" class="underline text-sky-600">Leggi l\'informativa privacy</a>.':'I consent to the processing of personal data pursuant to GDPR (EU Reg. 2016/679) for the management of the Sindrome ReNU Italia APS waiting list. Data will not be shared with third parties. <a href="/'+t.lang+'/privacy" class="underline text-sky-600">Read the privacy policy</a>.'}
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
            codice_fiscale: (fd.get('codice_fiscale') || '').toString().toUpperCase().trim(),
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
              msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>${t.lang==='it'?'✅ Iscrizione completata! Ti contatteremo a breve con le istruzioni per il versamento della quota annuale di 25€.':'✅ Registration complete! We will contact you shortly with instructions for paying the annual fee of €25.'}';
              form.reset();
              btn.innerHTML = '<i class="fas fa-check mr-2"></i>${t.lang==='it'?'Inviato con successo':'Successfully sent'}';
              // Banner accoglienza per Socio Familiare
              if (payload.tipo === 'familiare') {
                const pdfBanner = document.createElement('div');
                pdfBanner.className = 'mt-4 rounded-xl p-5 flex items-start gap-4';
                pdfBanner.style.cssText = 'background:#D1FAE5; border:2px solid #6EE7B7';
                pdfBanner.innerHTML = '<i class="fas fa-file-pdf text-green-600 text-2xl mt-0.5 flex-shrink-0"></i><div><p class="font-bold text-green-800 mb-1">${t.lang==='it'?'📄 Documento di Benvenuto ReNU':'📄 ReNU Welcome Document'}</p><p class="text-green-700 text-sm mb-3">${t.lang==='it'?'Abbiamo preparato per te il documento di accoglienza con tutte le informazioni essenziali per le nuove famiglie che entrano nella nostra comunità.':'We have prepared the welcome document with all essential information for new families joining our community.'}</p><a href="/static/accoglienza-nuove-famiglie.pdf" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-sm text-white" style="background:linear-gradient(135deg,#059669,#10B981)"><i class="fas fa-download"></i>${t.lang==='it'?'Scarica il PDF di Accoglienza':'Download Welcome PDF'}</a></div>';
                msg.parentNode.insertBefore(pdfBanner, msg.nextSibling);
              }
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
        'La scuola convoca il GLO (Gruppo di Lavoro Operativo) per la definizione del PEI (Piano Educativo Individualizzato).',
        'L\'insegnante di sostegno viene assegnato dall\'USR (Ufficio Scolastico Regionale).',
        'In caso di diniego o ore insufficienti, si può fare ricorso tramite il Difensore Civico o un legale.',
      ] : [
        'Obtain the disability certificate (Law 104 art. 3 comma 1 or 3) and functional diagnosis.',
        'Submit documentation to the school before the start of the school year.',
        'The school convenes the GLO to define the PEI (Individual Educational Plan).',
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
      icon: 'fa-hand-holding-heart', ic: 'ic-orange', id: 'ape_sociale',
      title: t.lang==='it'?'APE Sociale per Caregiver':'APE Sociale for Caregivers',
      steps: t.lang==='it' ? [
        'Cos\'è: Indennità statale per anticipare l\'uscita dal lavoro prima della pensione ordinaria.',
        'Chi può richiederla: caregiver con familiare convivente con disabilità grave (Legge 104 art. 3 comma 3) da almeno 6 mesi, al cui accudimento abbia ridotto o cessato l\'attività lavorativa.',
        'Età minima: 63 anni e 5 mesi (requisito aggiornato al 2024).',
        'Contributi minimi richiesti: 30 anni. Le donne con 2 o più figli possono accedere con 28 anni di contributi.',
        'Importo: fino a 1.500 € lordi al mese, per 12 mensilità l\'anno (non è cumulabile con altri redditi da lavoro).',
        'Durata: dall\'anticipo fino al raggiungimento dell\'età pensionabile. Prorogata per chi matura i requisiti entro il 31 dicembre 2026.',
        'Come fare domanda: presentare istanza all\'INPS tramite sito inps.it o tramite un patronato (gratuito). Allegare certificazione Legge 104 art. 3 comma 3 del familiare assistito.',
        'Per assistenza su pratiche patronali: ANMIC – Associazione Nazionale Mutilati e Invalidi Civili (anmic.org).',
      ] : [
        'What it is: A state allowance to retire early before the standard pension age.',
        'Who can apply: caregivers with a cohabiting family member with severe disability (Law 104 art. 3 comma 3) for at least 6 months, for whose care they have reduced or ceased work.',
        'Minimum age: 63 years and 5 months.',
        'Minimum contributions: 30 years (28 for women with 2+ children).',
        'Amount: up to €1,500 gross/month, for 12 months per year.',
        'Duration: from early retirement until standard pension age. Extended for those meeting requirements by December 31, 2026.',
        'How to apply: submit application to INPS via inps.it or through a free patronato. Attach Law 104 art. 3 comma 3 certificate.',
        'For support with patronato paperwork: ANMIC – anmic.org.',
      ],
      note: t.lang==='it'?'💡 Il requisito di caregiver deve essere autocertificato e verificato dall\'INPS. Contatta un patronato (CAAF, ACLI, CGIL, CISL, UIL) o ANMIC (anmic.org) per assistenza gratuita nella compilazione della domanda.':'💡 Contact a patronato or ANMIC (anmic.org) for free assistance with the application.',
    },
    {
      icon: 'fa-umbrella', ic: 'ic-teal', id: 'congedo',
      title: t.lang==='it'?'Congedo Straordinario (2 anni – Legge 104)':'Extraordinary Leave (2 years – Law 104)',
      steps: t.lang==='it' ? [
        'Il genitore (o il familiare entro il 3° grado) di un figlio/a con disabilità grave (Legge 104 art. 3 comma 3) può usufruire di fino a 2 anni di congedo straordinario retribuito nell\'arco dell\'intera vita lavorativa.',
        'Il congedo straordinario è coperto da contribuzione figurativa ai fini pensionistici: i 2 anni contano come se si fosse lavorato.',
        'Importante per le malattie croniche e genetiche rare: per queste patologie NON è necessaria la revisione periodica da parte dell\'INPS (Legge 80/2006, art. 6, e DM 2 agosto 2007). La Sindrome ReNU rientra in questa categoria.',
        'Come fare domanda: presentare istanza all\'INPS tramite inps.it o patronato. Allegare verbale Legge 104 art. 3 comma 3. In caso di malattia rara, specificare il codice esenzione per evitare convocazioni di revisione.',
        'Il congedo può essere frazionato e usato in più periodi nel corso degli anni.',
        'I 3 giorni mensili di permesso Legge 104 sono separati e non scalano dai 2 anni di congedo.',
        'ANMIC (anmic.org) offre assistenza gratuita per la compilazione e il follow-up con l\'INPS.',
      ] : [
        'A parent (or relative within 3rd degree) of a child with severe disability (Law 104 art. 3 comma 3) can use up to 2 years of paid extraordinary leave throughout their working life.',
        'The extraordinary leave is covered by figurative contributions for pension purposes: the 2 years count as if you had worked.',
        'Important for rare genetic diseases: for these conditions, periodic INPS review is NOT required (Law 80/2006, art. 6, and Ministerial Decree of August 2, 2007). ReNU Syndrome falls in this category.',
        'How to apply: submit application to INPS via inps.it or patronato. Attach Law 104 art. 3 comma 3 certificate. Specify the rare disease exemption code to avoid revision calls.',
        'The leave can be split and used in multiple periods over the years.',
        'The 3 monthly Law 104 leave days are separate and do not reduce the 2-year leave entitlement.',
        'ANMIC (anmic.org) offers free assistance for application and INPS follow-up.',
      ],
      note: t.lang==='it'?'💡 Per le malattie rare cronico-degenerative come la Sindrome ReNU, la revisione INPS non è dovuta: conserva sempre copia del verbale con indicazione di "patologia stabilizzata" o codice esenzione malattia rara. Rivolgiti a ANMIC o a un patronato per la consulenza gratuita.':'💡 For chronic rare diseases like ReNU Syndrome, INPS revision is not required. Always keep a copy of the certificate. Contact ANMIC or a patronato for free advice.',
    },
    {
      icon: 'fa-building', ic: 'ic-navy', id: 'anmic',
      title: t.lang==='it'?'ANMIC – Sedi e Supporto Patronale':'ANMIC – Branches and Support',
      steps: t.lang==='it' ? [
        'ANMIC (Associazione Nazionale Mutilati e Invalidi Civili) offre assistenza gratuita per tutte le pratiche legate alla disabilità su tutto il territorio nazionale.',
        'Sito ufficiale: https://www.anmic.org/',
        'Rivalutazione INPS: come prevede la Legge 80/2006 art. 6 e il D.M. 2 agosto 2007, per le malattie croniche e le malattie genetiche rare NON va effettuata la revisione da parte dell\'INPS.',
        'Il congedo straordinario (Legge 104, 2 anni) è coperto da contribuzione figurativa, valida ai fini del diritto e del calcolo della pensione: i due anni di congedo sono considerati utili come anni di contribuzione pensionistica.',
        'Per assistenza: contatta la sede ANMIC più vicina (vedi elenco sotto) o scrivi a info@anmic.it.',
      ] : [
        'ANMIC (National Association of Disabled Civilians) offers free assistance for all disability-related procedures throughout Italy.',
        'Official website: https://www.anmic.org/',
        'INPS review: as per Law 80/2006 art. 6 and Ministerial Decree of August 2, 2007, for chronic diseases and rare genetic diseases, INPS review is NOT required.',
        'Extraordinary leave (Law 104, 2 years) is covered by figurative pension contributions: the two years of leave count towards pension rights and calculation.',
        'For assistance: contact the nearest ANMIC branch or write to info@anmic.it.',
      ],
      note: t.lang==='it'?'💡 Le sedi ANMIC offrono consulenza gratuita per: Legge 104, congedo straordinario, APE Sociale, indennità di accompagnamento, Disability Card e tutte le pratiche INPS. Prenota un appuntamento nella tua città.':'💡 ANMIC branches offer free advice on: Law 104, extraordinary leave, APE Sociale, attendance allowance, Disability Card and all INPS procedures.',
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
    {
      icon: 'fa-chalkboard-teacher', ic: 'ic-green', id: 'educatore_territoriale',
      title: t.lang==='it'?'Educatore Territoriale per persone con disabilità':'Territorial Educator for people with disabilities',
      steps: t.lang==='it' ? [
        'L\'educatore territoriale sostiene bambini, ragazzi e adulti con disabilità nello sviluppo delle autonomie, della comunicazione, delle relazioni sociali e della partecipazione alla vita della comunità.',
        'La richiesta deve essere presentata ai Servizi Sociali del Comune di residenza. Generalmente si può fare durante tutto l\'anno, ma l\'attivazione dipende dalla valutazione del bisogno e dalle risorse disponibili.',
        'Milano – Il servizio è rivolto a minorenni e maggiorenni residenti a Milano. Rivolgersi al Servizio Sociale Territoriale del Municipio di residenza. Tel. 02 02 02 | Email: PSS.serviziosociale1livelloM[numero Municipio]@comune.milano.it (es. Municipio 8: PSS.serviziosociale1livelloM8@comune.milano.it)',
        'Roma – Il servizio si chiama SAISH (Servizio per l\'autonomia e l\'integrazione della persona con disabilità) ed è rivolto a minorenni e adulti. Possono esserci graduatorie o liste d\'attesa. Tel. 06 06 06 | Email: 060606@comune.roma.it',
        'Torino – L\'educativa territoriale è rivolta a minorenni e adulti con disabilità, generalmente fino a 64 anni. La valutazione viene effettuata dall\'UMVD (Unità Multidisciplinare di Valutazione della Disabilità). Tel. 011 011 011',
        'Cagliari – Per gli adulti 18-64 anni: servizio domiciliare con interventi educativi. Per i minorenni: Servizio educativo territoriale distinto. Tel. 800 016 058',
        'Genova – Il sistema Do.Ge prevede interventi educativi domiciliari per persone con disabilità maggiorenni. Per i minorenni: Ambito Territoriale Sociale del Municipio. Tel. 010 557111',
        'Con bambini e ragazzi l\'educatore può lavorare su: comunicazione e CAA, autonomie personali, socializzazione, gioco e tempo libero, uscite inclusive, collaborazione con famiglia e scuola.',
        'Con gli adulti può lavorare su: autonomie personali e domestiche, uso del denaro e dei mezzi pubblici, partecipazione ad attività sociali, inclusione lavorativa, vita indipendente.',
        'ISEE: per minorenni si usa l\'ISEE minorenni (in caso di genitori non conviventi); per adulti con disabilità si usa l\'ISEE sociosanitario. Ogni Comune può applicare regole diverse.',
      ] : [
        'The territorial educator supports children, young people and adults with disabilities in developing autonomy, communication, social relationships and community participation.',
        'The request must be submitted to the Social Services of the municipality of residence. It can generally be submitted throughout the year, but activation depends on needs assessment and available resources.',
        'Milan – Service for minors and adults resident in Milan. Contact the Territorial Social Service of your Municipality. Tel. 02 02 02',
        'Rome – The service is called SAISH and is for minors and adults. Tel. 06 06 06 | Email: 060606@comune.roma.it',
        'The educator does NOT replace therapies or medical assistance: they implement a personalised educational project.',
        'ISEE: for minors, the ISEE minorenni is used; for adults with disabilities, the socio-sanitary ISEE. Each municipality may apply different rules.',
      ],
      note: t.lang==='it'?'💡 Per richiedere il servizio rivolgiti al Servizio Sociale del tuo Municipio/Comune di residenza. Il numero verde di Milano è 02 02 02. Il servizio è generalmente gratuito o a quota ISEE.':'💡 Contact your municipality\'s Social Services to request this service.',
    },
    {
      icon: 'fa-home', ic: 'ic-amber', id: 'mutuo_prima_casa',
      title: t.lang==='it'?'Mutuo Prima Casa: Nuova Garanzia Statale (Legge 116/2026)':'First Home Mortgage: New State Guarantee (Law 116/2026)',
      steps: t.lang==='it' ? [
        'La Legge 2 luglio 2026, n. 116 (Piano Casa) amplia l\'accesso al Fondo di Garanzia Consap per il mutuo prima casa. Operativa dal 3 agosto 2026.',
        'Chi può beneficiarne: persone con disabilità grave ai sensi dell\'art. 3, comma 3, della Legge 104/1992; nuclei familiari in cui convive da almeno 2 anni un figlio, una figlia, un fratello o una sorella con disabilità grave.',
        'Cosa prevede: garanzia statale sul mutuo prima casa fino all\'80% della quota capitale; per ISEE fino a 40.000 €; per mutui fino a 250.000 €.',
        'Importante: non è un contributo economico diretto. Lo Stato garantisce una parte rilevante del finanziamento, riducendo il rischio per la banca e facilitando l\'accesso al credito.',
        'Come si richiede: la domanda si presenta direttamente in banca, insieme alla richiesta di mutuo. La banca verifica i requisiti e attiva la garanzia Consap.',
        'Riferimento normativo: Legge 2 luglio 2026, n. 116 – art. specifico Piano Casa per persone con disabilità.',
      ] : [
        'Law 2 July 2026, no. 116 (Piano Casa) expands access to the Consap Guarantee Fund for first home mortgages. Effective from 3 August 2026.',
        'Who can benefit: people with severe disability under art. 3, comma 3, Law 104/1992; households where a child or sibling with severe disability has lived for at least 2 years.',
        'What it covers: state guarantee on first home mortgage up to 80% of the capital share; ISEE up to €40,000; mortgages up to €250,000.',
        'How to apply: the application is submitted directly to the bank, together with the mortgage request.',
      ],
      note: t.lang==='it'?'💡 La garanzia Consap riduce il rischio per la banca e facilita l\'accesso al mutuo anche per famiglie con reddito medio-basso. Consulta la tua banca per i dettagli e i requisiti specifici.':'💡 The Consap guarantee reduces the risk for the bank and facilitates mortgage access for low-to-middle income families. Consult your bank for specific requirements.',
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
        <a href="#diritti-tutele" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-shield-alt text-xs"></i>Diritti e Tutele</a>
        <a href="#progetto-vita" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-seedling text-xs"></i>Progetto Vita</a>
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
      <!-- ── TABELLA SEDI ANMIC ── -->
      <div id="anmic-sedi" class="card card-navy p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-navy flex-shrink-0 w-14 h-14"><i class="fas fa-building text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Principali Sedi ANMIC (Patronato)</h2>
            <p class="text-sm text-gray-500">Associazione Nazionale Invalidi e Mutilati Civili – assistenza gratuita su tutto il territorio nazionale</p>
          </div>
        </div>
        <div class="rounded-xl p-4 mb-5" style="background:#EEF6FB; border-left:3px solid #45B8EC">
          <p class="text-sky-800 text-sm"><strong>ANMIC</strong> è a disposizione per supportare in tutte le pratiche legate alla disabilità: Legge 104, indennità di accompagnamento, congedo straordinario, APE Sociale, Disability Card e molto altro. <a href="https://www.anmic.org/" target="_blank" rel="noopener" class="font-bold underline">www.anmic.org</a></p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background:#082050;color:white">
                <th class="text-left p-3 rounded-tl-lg">Città</th>
                <th class="text-left p-3">Indirizzo</th>
                <th class="text-left p-3">Telefono</th>
                <th class="text-left p-3">Email</th>
                <th class="text-left p-3 rounded-tr-lg">PEC</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['Roma',    'Piazza Bologna 10, 00162',         '06 44232997',  'anmicst@inwind.it',         'roma@pec.anmic.it'],
                ['Milano',  'Via G.A. Boltraffio 7, 20159',    '02 66809607',  'info@anmicmilano.org',      'milano@pec.anmic.it'],
                ['Torino',  'Via Campana 15, 10125',            '011 6689877',  'anmic@anmic-torino.it',     'torino@pec.anmic.it'],
                ['Napoli',  'Piazzetta Duca degli Abruzzi 96', '081 5537073',  'anmicnapoli@libero.it',     'napoli@pec.anmic.it'],
                ['Bologna', 'Via Riva di Reno 75/3-77',        '051 255235',   'anmicbo@libero.it',         'bologna@pec.anmic.it'],
                ['Firenze', 'Piazza Mascagni 20',               '055 4935647',  'anmic.firenze@libero.it',   'firenze@pec.anmic.it'],
                ['Genova',  'Corso Torino 8R',                  '010 5956760',  'anmicgenova@libero.it',     'genova@pec.anmic.it'],
                ['Venezia', 'Corso del Popolo 227/C, Mestre',  '041 5315295',  'anmicve@libero.it',         'venezia@pec.anmic.it'],
                ['Bari',    'Via Libia 10',                     '080 5217750',  'anmicbari@libero.it',       'bari@pec.anmic.it'],
                ['Palermo', 'Via Notarbartolo 38/G',            '091 6252211',  'anmicpalermo@libero.it',    'palermo@pec.anmic.it'],
                ['Catania', 'Via Sabato Martelli Castaldi 4',   '095 7151840',  'anmic.ct@virgilio.it',      'catania@pec.anmic.it'],
                ['Salerno', 'Corso Garibaldi 33',               '089 231134',   'anmic-salerno@libero.it',   'salerno@pec.anmic.it'],
                ['Ancona',  'Piazza Stamira 13',                '071 52297',    'anmic@anmic-ancona.it',     'ancona@pec.anmic.it'],
                ['Sassari', 'Via Don Giovanni Minzoni 17/A',    '079 210792',   'anmicss@tiscali.it',        'sassari@pec.anmic.it'],
                ['Trento',  'Via Benevoli 22',                  '0461 934555',  'info@anmic-tn.org',         'trento@pec.anmic.it'],
              ].map(([cit,ind,tel,email,pec],i) =>
                '<tr class="' + (i%2===0?'bg-white':'bg-sky-50') + '">' +
                '<td class="p-3 border-b border-gray-100 font-semibold" style="color:#082050;white-space:nowrap">' + cit + '</td>' +
                '<td class="p-3 border-b border-gray-100 text-xs">' + ind + '</td>' +
                '<td class="p-3 border-b border-gray-100 text-xs font-mono">' + tel + '</td>' +
                '<td class="p-3 border-b border-gray-100 text-xs"><a href="mailto:' + email + '" class="text-sky-600 hover:underline">' + email + '</a></td>' +
                '<td class="p-3 border-b border-gray-100 text-xs text-gray-500">' + pec + '</td>' +
                '</tr>'
              ).join('')}
            </tbody>
          </table>
        </div>
        <div class="mt-4 text-center">
          <a href="https://www.anmic.org/sedi" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#082050">
            <i class="fas fa-search-location"></i>Cerca tutte le sedi ANMIC
          </a>
        </div>
      </div>
      ` : ''}

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

      <!-- ── FAQ DINAMICHE DA DB ── -->
      <div id="faq-db-section" class="card card-blue p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-blue flex-shrink-0 w-14 h-14"><i class="fas fa-question-circle text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">
              ${t.lang==='it'?'Domande Frequenti':'Frequently Asked Questions'}
            </h2>
            <p class="text-sm text-gray-500">${t.lang==='it'?'Aggiornate dal nostro team':'Updated by our team'}</p>
          </div>
        </div>
        <div id="faq-accordion" class="space-y-2">
          <div class="text-gray-400 text-sm"><i class="fas fa-spinner fa-spin mr-2"></i>${t.lang==='it'?'Caricamento FAQ...':'Loading FAQ...'}</div>
        </div>
      </div>
      <script>
      function toggleFaq(btn) {
        var id = btn.getAttribute('data-target');
        var el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle('hidden');
        var icon = btn.querySelector('.fa-chevron-down');
        if (icon) icon.classList.toggle('rotate-180');
      }
      (function(){
        const lang = '${t.lang}';
        fetch('/api/faq?lang=' + lang)
          .then(r => r.json())
          .then(data => {
            const acc = document.getElementById('faq-accordion');
            if (!data || !data.length) {
              acc.innerHTML = '<p class="text-gray-400 text-sm">' + (lang==='it'?'Nessuna FAQ disponibile.':'No FAQ available.') + '</p>';
              return;
            }
            const catIcons = {
              diagnosi:'fa-microscope', terapie:'fa-stethoscope', comunita:'fa-users',
              ricerca:'fa-flask', medici:'fa-user-md', diritti:'fa-balance-scale',
              scuola:'fa-graduation-cap', bonus:'fa-money-bill-wave'
            };
            const catColors = {
              diagnosi:'#1078C0', terapie:'#059669', comunita:'#7C3AED',
              ricerca:'#D97706', medici:'#DC2626', diritti:'#082050',
              scuola:'#0891B2', bonus:'#065F46'
            };
            acc.innerHTML = data.map((faq, i) => {
              const icon = catIcons[faq.categoria] || 'fa-question';
              const color = catColors[faq.categoria] || '#1078C0';
              const id = 'faq-ans-' + i;
              // GEO-AI §3.3.2: badge categoria + fonte citabile + itemprop per AI crawlers
              const catLabel = {
                diagnosi: lang==='it'?'Diagnosi':'Diagnosis',
                terapie:  lang==='it'?'Terapie':'Therapies',
                comunita: lang==='it'?'Comunità':'Community',
                ricerca:  lang==='it'?'Ricerca':'Research',
                medici:   lang==='it'?'Per Medici':'For Doctors',
                diritti:  lang==='it'?'Diritti':'Rights',
                scuola:   lang==='it'?'Scuola':'School',
                bonus:    lang==='it'?'Bonus':'Benefits'
              }[faq.categoria] || faq.categoria;
              const fonte = '<p class="text-xs text-gray-400 mt-2 pt-2 border-t border-sky-100">' +
                '<i class="fas fa-info-circle mr-1"></i>' +
                (lang==='it' ? 'Fonte: Sindrome ReNU Italia APS — ' : 'Source: Sindrome ReNU Italia APS — ') +
                '<a href="https://www.sindromerenu.it/' + lang + '/faq" class="underline hover:text-sky-600" target="_blank">sindromerenu.it</a></p>';
              return '<div class="border border-gray-200 rounded-xl overflow-hidden" itemscope itemtype="https://schema.org/Question">' +
                '<button onclick="toggleFaq(this)" data-target="' + id + '" ' +
                'class="w-full text-left flex items-center gap-3 p-4 bg-white hover:bg-sky-50 transition-colors" aria-expanded="false">' +
                '<i class="fas ' + icon + ' text-sm flex-shrink-0" style="color:' + color + '" aria-hidden="true"></i>' +
                '<span class="flex-1 font-semibold text-sm" style="color:#082050" itemprop="name">' + faq.domanda + '</span>' +
                '<span class="text-xs font-medium px-2 py-0.5 rounded-full mr-1 flex-shrink-0" style="background:' + color + '20;color:' + color + '">' + catLabel + '</span>' +
                '<i class="fas fa-chevron-down text-gray-400 text-xs transition-transform duration-200 flex-shrink-0"></i>' +
                '</button>' +
                '<div id="' + id + '" class="hidden px-4 pb-4 pt-2 bg-sky-50 border-t border-gray-100" itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">' +
                '<p class="text-sm text-gray-700 leading-relaxed" itemprop="text">' + faq.risposta + '</p>' +
                fonte +
                '</div></div>';
            }).join('');
          })
          .catch(() => {
            const acc = document.getElementById('faq-accordion');
            if (acc) acc.innerHTML = '';
          });
      })();
      </script>

      <!-- ══════════════════════════════════════════════════════════ -->
      <!-- DIRITTI E TUTELE                                          -->
      <!-- ══════════════════════════════════════════════════════════ -->
      <div id="diritti-tutele" class="mt-16 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-shield-alt" style="color:#1078C0"></i>
          ${t.lang==='it'?'Diritti e Tutele – Rete Famiglie Italia':t.lang==='en'?'Rights & Protections – Italian Family Network':'Droits et Protections – Réseau Familles Italie'}
        </h2>
        <p class="text-gray-500 text-sm mb-6">
          ${t.lang==='it'?'Agevolazioni, permessi e tutele previsti dalla legislazione italiana per le famiglie con un bambino con Sindrome ReNU.':'Benefits, leave and protections under Italian law for families with a child with ReNU Syndrome.'}
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
      </div>

      <!-- ══════════════════════════════════════════════════════════ -->
      <!-- PROGETTO VITA – PIANIFICAZIONE DEL FUTURO                 -->
      <!-- ══════════════════════════════════════════════════════════ -->
      <div id="progetto-vita" class="mt-14 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-seedling" style="color:#059669"></i>
          ${t.lang==='it'?'Progetto Vita – Pianificazione del Futuro':'Progetto Vita – Future Planning'}
        </h2>
        <div class="card p-0 overflow-hidden mb-6">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <div class="ic ic-green w-14 h-14 flex-shrink-0">
                  <i class="fas fa-seedling text-2xl"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-lg" style="color:#082050">PROGETTO VITA</h3>
                  <span class="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full" style="background:#D1FAE5;color:#065F46">
                    <i class="fas fa-leaf text-xs"></i>${t.lang==='it'?'Pianificazione del futuro':'Future planning'}
                  </span>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-5 text-sm">
                ${t.lang==='it'
                  ? 'Il Progetto Vita è uno strumento di pianificazione che aiuta le famiglie a costruire un futuro sereno per i propri figli con Sindrome ReNU. Include la definizione degli obiettivi di vita, le tutele legali (amministratore di sostegno, trust), il testamento biologico e la pianificazione del "Dopo di Noi". Un percorso concreto per affrontare le sfide burocratiche, legali e finanziarie con serenità.'
                  : 'The Progetto Vita (Life Project) is a planning tool that helps families build a serene future for their children with ReNU Syndrome. It includes defining life goals, legal protections (support administrator, trust), living will and planning for the "After Us". A practical path to face bureaucratic, legal and financial challenges with peace of mind.'}
              </p>
              <div class="grid grid-cols-1 gap-2 mb-5">
                ${[
                  ['fa-gavel','ic-navy', t.lang==='it'?'Amministratore di Sostegno':'Support Administrator', t.lang==='it'?'Protezione legale per persone con disabilità cognitiva.':'Legal protection for people with cognitive disability.'],
                  ['fa-home','ic-green', t.lang==='it'?'Dopo di Noi (L. 112/2016)':'After Us (L. 112/2016)', t.lang==='it'?'Strumenti e fondi per garantire autonomia dopo la scomparsa dei genitori.':'Tools and funds to ensure autonomy after parents\'s passing.'],
                  ['fa-file-signature','ic-sky', t.lang==='it'?'Trust e Fondi Familiari':'Trust & Family Funds', t.lang==='it'?'Pianificazione patrimoniale per tutelare il futuro del figlio.':'Asset planning to protect the child\'s future.'],
                  ['fa-balance-scale','ic-purple', t.lang==='it'?'Testamento Biologico (DAT)':'Living Will (DAT)', t.lang==='it'?'Disposizioni anticipate di trattamento sanitario.':'Advance healthcare directives.'],
                ].map(([icon,ic,title,desc]) => `
                <div class="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                  <div class="ic ${ic} w-8 h-8 flex-shrink-0" style="width:2rem;height:2rem;min-width:2rem">
                    <i class="fas ${icon} text-sm"></i>
                  </div>
                  <div>
                    <span class="font-bold text-sm" style="color:#082050">${title}</span>
                    <span class="text-gray-500 text-xs ml-2">${desc}</span>
                  </div>
                </div>`).join('')}
              </div>
              <div class="flex flex-wrap gap-3">
                <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Informazioni Progetto Vita':'Progetto Vita information')}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#D1FAE5;color:#065F46;border:1px solid #6EE7B7">
                  <i class="fas fa-envelope"></i>${t.lang==='it'?'Contattaci':'Contact us'}
                </a>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-r-2xl" style="min-height:320px">
              <picture>
                <source srcset="/images/progetto-vita.webp" type="image/webp">
                <img src="/images/progetto-vita.png"
                     alt="${t.lang==='it'?'Progetto Vita – Sindrome ReNU':'Progetto Vita – ReNU Syndrome'}"
                     class="w-full h-full object-cover" style="min-height:320px" loading="lazy" decoding="async" width="800" height="1200">
              </picture>
              <div class="absolute inset-0" style="background:linear-gradient(to top, rgba(6,95,70,0.6) 0%, transparent 50%)"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full" style="background:rgba(5,150,105,0.85)">
                  <i class="fas fa-heart"></i>${t.lang==='it'?'Costruiamo insieme il futuro':'Building the future together'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <p class="text-gray-500 text-sm">${isIt?'Ultimo aggiornamento: Giugno 2026':'Last updated: June 2026'} · ${isIt?'Versione':'Version'} 2.1</p>
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
          <div class="mt-4 rounded-xl p-4 text-sm" style="background:#EEF6FB; border-left: 4px solid #1078C0">
            <p class="font-bold mb-2" style="color:#082050">
              <i class="fas fa-user-shield mr-2" style="color:#1078C0"></i>
              ${isIt?'Responsabile della Protezione dei Dati (DPO)':'Data Protection Officer (DPO)'}
            </p>
            <p class="text-gray-700">
              <strong>Avv. Francesco Conti</strong><br>
              ${isIt?'Nominato dal Consiglio Direttivo in data 9 giugno 2026 ai sensi dell\'Art. 37 GDPR (Reg. UE 2016/679).':'Appointed by the Board of Directors on 9 June 2026 pursuant to Art. 37 GDPR (EU Reg. 2016/679).'}<br><br>
              ${isIt?'Per esercitare i tuoi diritti o per qualsiasi questione relativa al trattamento dei dati personali, contatta direttamente il DPO:':'To exercise your rights or for any matter relating to the processing of personal data, contact the DPO directly:'}<br>
              <a href="mailto:dpo@sindromerenu.it" class="text-blue-600 hover:underline font-semibold">dpo@sindromerenu.it</a>
            </p>
          </div>
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
          <p class="text-sm mb-3">${isIt?'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizza cookie di profilazione o marketing. Non è integrato Google Analytics o altro strumento di analisi comportamentale.':'This site uses only technical cookies necessary for its operation. No profiling or marketing cookies are used. No Google Analytics or other behavioural analysis tool is integrated.'}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50"><th class="text-left p-3 border border-sky-100">Cookie</th><th class="text-left p-3 border border-sky-100">${isIt?'Tipo':'Type'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Durata':'Duration'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Finalità':'Purpose'}</th></tr></thead>
              <tbody>
                <tr><td class="p-3 border border-gray-100">session</td><td class="p-3 border border-gray-100">${isIt?'Tecnico':'Technical'}</td><td class="p-3 border border-gray-100">${isIt?'Sessione':'Session'}</td><td class="p-3 border border-gray-100">${isIt?'Navigazione':'Navigation'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">cf_clearance</td><td class="p-3 border border-gray-100">${isIt?'Tecnico (Cloudflare)':'Technical (Cloudflare)'}</td><td class="p-3 border border-gray-100">30 ${isIt?'giorni':'days'}</td><td class="p-3 border border-gray-100">${isIt?'Sicurezza CDN':'CDN Security'}</td></tr>
                <tr><td class="p-3 border border-gray-100">cookie_consent</td><td class="p-3 border border-gray-100">${isIt?'Tecnico (preferenze)':'Technical (preferences)'}</td><td class="p-3 border border-gray-100">365 ${isIt?'giorni':'days'}</td><td class="p-3 border border-gray-100">${isIt?'Memorizza scelta banner cookie':'Stores cookie banner choice'}</td></tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4 p-3 rounded-xl text-sm" style="background:#FFF7ED;border-left:3px solid #F59E0B">
            <p class="font-semibold mb-1" style="color:#92400E"><i class="fas fa-info-circle mr-1"></i>${isIt?'Risorse CSS/JS da CDN esterne':'External CDN CSS/JS resources'}</p>
            <p class="text-xs text-gray-600">${isIt?'Il sito carica fogli di stile CSS (Tailwind, FontAwesome) dal servizio CDN jsDelivr.net, gestito da ProspectOne (Polonia/UE). Questo può comportare la trasmissione dell\'indirizzo IP al server CDN al primo caricamento della pagina. Non vengono posizionati cookie di profilazione da tali servizi. Il font tipografico è servito dal sistema operativo (nessuna richiesta a Google Fonts).':'The site loads CSS stylesheets (Tailwind, FontAwesome) from the jsDelivr.net CDN service, operated by ProspectOne (Poland/EU). This may involve transmission of your IP address to the CDN server on first page load. No profiling cookies are set by these services. Typography fonts are served by the operating system (no Google Fonts request).'}</p>
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
          <p class="text-sm text-gray-600">${isIt?'I dati sono trattati con misure di sicurezza tecniche e organizzative adeguate: trasmissione HTTPS/TLS, hosting su Cloudflare Pages (infrastruttura certificata ISO 27001), accesso limitato al personale autorizzato, hash crittografico degli indirizzi IP (SHA-256, non reversibile). I trasferimenti verso Cloudflare Inc. (USA) sono leciti in base all\'adesione di Cloudflare all\'EU-US Data Privacy Framework (Decisione di adeguatezza della Commissione Europea 2023/1795 del 10 luglio 2023) — base giuridica autonoma e sufficiente ai sensi dell\'Art. 45 GDPR, che non richiede Clausole Contrattuali Standard.':'Data is processed with appropriate technical and organizational security measures: HTTPS/TLS transmission, hosting on Cloudflare Pages (ISO 27001 certified infrastructure), access limited to authorized personnel, cryptographic hashing of IP addresses (SHA-256, non-reversible). Transfers to Cloudflare Inc. (USA) are lawful based on Cloudflare\'s certification under the EU-US Data Privacy Framework (European Commission adequacy decision 2023/1795 of 10 July 2023) — a sufficient and autonomous legal basis pursuant to Art. 45 GDPR, requiring no Standard Contractual Clauses.'}</p>
        </div>

        <!-- Responsabili esterni -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-handshake mr-2" style="color:#1078C0"></i>${isIt?'8. Responsabili del Trattamento e Terze Parti (Art. 28 GDPR)':'8. Data Processors and Third Parties (Art. 28 GDPR)'}</h2>
          <p class="text-sm text-gray-600 mb-4">${isIt?'Per alcune attività tecnico-operative, Sindrome ReNU Italia APS si avvale di soggetti terzi. Alcuni sono nominati Responsabili del Trattamento ai sensi dell\'Art. 28 GDPR (trattano i dati per conto del Titolare); altri sono titolari autonomi del trattamento (trattano i dati per proprie finalità, indipendentemente dal Titolare).':'For certain technical and operational activities, Sindrome ReNU Italia APS uses third parties. Some are appointed Data Processors pursuant to Art. 28 GDPR (processing data on behalf of the Controller); others are independent data controllers (processing data for their own purposes, independently of the Controller).'}</p>

          <!-- Responsabili del Trattamento Art. 28 -->
          <h3 class="text-sm font-bold mb-2 mt-2" style="color:#082050">${isIt?'Responsabili del Trattamento (Art. 28 GDPR)':'Data Processors (Art. 28 GDPR)'}</h3>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50">
                <th class="text-left p-3 border border-sky-100">${isIt?'Soggetto':'Party'}</th>
                <th class="text-left p-3 border border-sky-100">${isIt?'Ruolo':'Role'}</th>
                <th class="text-left p-3 border border-sky-100">${isIt?'Dati trattati':'Data processed'}</th>
                <th class="text-left p-3 border border-sky-100">${isIt?'Sede':'Location'}</th>
                <th class="text-left p-3 border border-sky-100">${isIt?'Garanzie':'Safeguards'}</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td class="p-3 border border-gray-100 font-semibold">${isIt?'Responsabile Tecnico del Sito':'Website Technical Manager'}</td>
                  <td class="p-3 border border-gray-100">${isIt?'Sviluppo e gestione tecnica del sito, database e pannello admin':'Website development and technical management, database and admin panel'}</td>
                  <td class="p-3 border border-gray-100">${isIt?'Tutti i dati nel database (contatti, iscrizioni, storie, donazioni)':'All database data (contacts, memberships, stories, donations)'}</td>
                  <td class="p-3 border border-gray-100">🇮🇹 Italia</td>
                  <td class="p-3 border border-gray-100"><span class="text-green-700 font-semibold">${isIt?'Contratto DPA Art. 28 GDPR':'DPA Contract Art. 28 GDPR'}</span></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="p-3 border border-gray-100 font-semibold">Brevo SAS <span class="text-xs font-normal text-gray-400">(ex Sendinblue)</span></td>
                  <td class="p-3 border border-gray-100">${isIt?'Invio notifiche email transazionali (non ancora attivo)':'Transactional email notifications (not yet active)'}</td>
                  <td class="p-3 border border-gray-100">${isIt?'Nome, email, messaggio':'Name, email, message'}</td>
                  <td class="p-3 border border-gray-100">🇫🇷 <span class="font-semibold text-green-700">Francia — UE</span></td>
                  <td class="p-3 border border-gray-100"><a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" class="text-blue-600 hover:underline font-semibold">DPA (Art. 28 GDPR)</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Terze parti titolari autonomi -->
          <h3 class="text-sm font-bold mb-2 mt-4" style="color:#082050">${isIt?'Terze Parti — Titolari Autonomi del Trattamento':'Third Parties — Independent Data Controllers'}</h3>
          <p class="text-xs text-gray-500 mb-2">${isIt?'I seguenti soggetti trattano dati tecnici dei visitatori (es. indirizzi IP, dati di rete) nell\'ambito dei propri servizi, agendo come titolari autonomi del trattamento. L\'Associazione non impartisce istruzioni su tali trattamenti né è in grado di limitarli; si rinvia alle rispettive informative privacy.':'The following parties process technical visitor data (e.g. IP addresses, network data) as part of their own services, acting as independent data controllers. The Association does not instruct these parties on such processing and cannot restrict it; please refer to their respective privacy policies.'}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-amber-50">
                <th class="text-left p-3 border border-amber-100">${isIt?'Soggetto':'Party'}</th>
                <th class="text-left p-3 border border-amber-100">${isIt?'Servizio':'Service'}</th>
                <th class="text-left p-3 border border-amber-100">${isIt?'Dati elaborati autonomamente':'Data processed independently'}</th>
                <th class="text-left p-3 border border-amber-100">${isIt?'Sede':'Location'}</th>
                <th class="text-left p-3 border border-amber-100">${isIt?'Base trasferimento USA':'US transfer basis'}</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td class="p-3 border border-gray-100 font-semibold">Cloudflare, Inc.</td>
                  <td class="p-3 border border-gray-100">${isIt?'CDN, sicurezza rete, protezione DDoS, hosting Pages':'CDN, network security, DDoS protection, Pages hosting'}</td>
                  <td class="p-3 border border-gray-100">${isIt?'IP visitatori, header HTTP, dati di routing (per proprie finalità di sicurezza)':'Visitor IPs, HTTP headers, routing data (for own security purposes)'}</td>
                  <td class="p-3 border border-gray-100">🇺🇸 USA</td>
                  <td class="p-3 border border-gray-100"><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" class="text-blue-600 hover:underline font-semibold">EU-US DPF ✓</a></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="p-3 border border-gray-100 font-semibold">jsDelivr CDN <span class="text-xs font-normal text-gray-400">(ProspectOne)</span></td>
                  <td class="p-3 border border-gray-100">${isIt?'Distribuzione file CSS/JS (Tailwind, FontAwesome)':'CSS/JS file delivery (Tailwind, FontAwesome)'}</td>
                  <td class="p-3 border border-gray-100">${isIt?'IP visitatori al caricamento della pagina':'Visitor IP at page load'}</td>
                  <td class="p-3 border border-gray-100">🇵🇱 <span class="text-green-700 font-semibold">Polonia — UE</span></td>
                  <td class="p-3 border border-gray-100"><span class="text-green-700">${isIt?'Trattamento in UE':'EU processing'}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mt-3">${isIt?'DPF = EU-US Data Privacy Framework (Dec. adeguatezza Commissione Europea 2023/1795, 10 lug. 2023). Cloudflare è certificata DPF: il trasferimento dati verso USA è lecito senza necessità di Clausole Contrattuali Standard. Per i dati che Cloudflare elabora come titolare autonomo, si rinvia alla sua Privacy Policy: www.cloudflare.com/privacypolicy/':'DPF = EU-US Data Privacy Framework (European Commission adequacy decision 2023/1795, 10 Jul. 2023). Cloudflare is DPF certified: data transfers to the USA are lawful without Standard Contractual Clauses. For data that Cloudflare processes as independent controller, please refer to its Privacy Policy: www.cloudflare.com/privacypolicy/'}</p>
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
  const _v = '20260922-causale-cf-v17'
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

      <!-- Il Comitato Scientifico in Immagini -->
      <div class="mb-12">
        <figure class="rounded-2xl overflow-hidden border border-sky-200 shadow-sm bg-white">
          <img src="/images/renu_science_committee.jpg"
               alt="${isIt?'Il Comitato Scientifico di Sindrome ReNU Italia APS':'The Scientific Committee of Sindrome ReNU Italia APS'}"
               class="w-full h-auto block" loading="lazy" decoding="async"
               style="display:block;width:100%;height:auto;object-fit:contain;">
          <figcaption class="text-xs text-gray-500 text-center px-4 py-2 bg-sky-50">
            ${isIt?'Il Comitato Scientifico — Sindrome ReNU Italia APS · Fonte: Sindrome ReNU Italia APS':'Scientific Committee — Sindrome ReNU Italia APS · Source: Sindrome ReNU Italia APS'}
          </figcaption>
        </figure>
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
          <a href="/${t.lang}/research"
             class="card p-6 flex items-center gap-4 group hover:border-navy-400 transition-all">
            <div class="ic ic-navy w-12 h-12 flex-shrink-0">
              <i class="fas fa-microscope text-lg"></i>
            </div>
            <div>
              <h3 class="font-bold" style="color:#082050">${isIt?'Ricerca & Pubblicazioni':'Research & Publications'}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${isIt?'Articoli scientifici, studi su RNU4-2 e aggiornamenti dalla ricerca':'Scientific articles, RNU4-2 studies and research updates'}</p>
              <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#082050">
                ${isIt?'Vai alla sezione':'Go to section'} <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>
          <a href="/${t.lang}/brochure"
             class="card p-6 flex items-center gap-4 group hover:border-sky-400 transition-all">
            <div class="ic ic-sky w-12 h-12 flex-shrink-0">
              <i class="fas fa-photo-video text-lg"></i>
            </div>
            <div>
              <h3 class="font-bold" style="color:#082050">${isIt?'Media & Pubblicazioni':'Media & Publications'}</h3>
              <p class="text-xs text-gray-500 mt-0.5">${isIt?'Brochure, materiali stampa e risorse multimediali':'Brochures, press materials and multimedia resources'}</p>
              <span class="inline-flex items-center gap-1 text-xs font-semibold mt-2" style="color:#1078C0">
                ${isIt?'Vai alla sezione':'Go to section'} <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>

        </div>
      </div>

      <!-- CAMPAGNA CONSAPEVOLEZZA PEDIATRI -->
      <div class="mb-12">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <i class="fas fa-heartbeat" style="color:#DC2626"></i>
          ${isIt?'Campagna Consapevolezza Pediatri':'Pediatrician Awareness Campaign'}
        </h2>
        <div class="card p-6 flex flex-col md:flex-row gap-5 items-start">
          <div class="flex-shrink-0">
            <div class="ic ic-red w-14 h-14">
              <i class="fas fa-user-md text-xl"></i>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF2F2;color:#DC2626">
                <i class="fas fa-circle text-xs"></i>${isIt?'In pianificazione':'In planning'}
              </span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">
              ${isIt?'Campagna di sensibilizzazione rivolta ai pediatri e ai medici di base italiani sulla Sindrome ReNU: distribuzione di materiali informativi, contatti con societ\u00e0 scientifiche e ordini medici per ridurre i tempi di diagnosi e garantire un percorso diagnostico corretto (WGS).':'Awareness campaign targeting Italian pediatricians and general practitioners on ReNU Syndrome: distribution of informational materials, contacts with scientific societies and medical associations to reduce diagnostic times and ensure the correct diagnostic pathway (WGS).'}
            </p>
            <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Campagna pediatri ReNU':'ReNU pediatrician campaign')}"
               class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#FEF2F2;color:#DC2626;border:1px solid #DC2626">
              <i class="fas fa-envelope"></i>${isIt?'Ricevi aggiornamenti':'Get updates'}
            </a>
          </div>
        </div>
      </div>

      <!-- PATOLOGIE CORRELATE: EPILESSIA -->
      <div class="mb-12">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <i class="fas fa-bolt" style="color:#D97706"></i>
          ${isIt?'Patologie Correlate alla Sindrome ReNU':'Conditions Associated with ReNU Syndrome'}
        </h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          ${isIt
            ? 'La Sindrome ReNU può essere associata a condizioni neurologiche specifiche che richiedono attenzione clinica dedicata. La conoscenza di queste correlazioni è fondamentale per una presa in carico multidisciplinare efficace.'
            : 'ReNU Syndrome may be associated with specific neurological conditions requiring dedicated clinical attention. Knowledge of these correlations is essential for effective multidisciplinary care.'}
        </p>
        <div class="card p-6">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <h3 class="font-extrabold text-xl" style="color:#082050">
                ${isIt?'Epilessia / Crisi Epilettiche':'Epilepsy / Seizures'}
              </h3>
              <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF3C7;color:#92400E">
                <i class="fas fa-exclamation-triangle text-xs"></i>${isIt?'Monitoraggio raccomandato':'Monitoring recommended'}
              </span>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              ${isIt
                ? 'Le crisi epilettiche rappresentano una delle manifestazioni neurologiche più significative della Sindrome ReNU. Possono presentarsi in forme diverse: spasmi infantili, crisi focali, crisi tonico-cloniche, crisi febbrili complesse o stato epilettico. La loro presenza, frequenza e gravità variano da paziente a paziente e richiedono valutazione neurologica specialistica.'
                : 'Epileptic seizures represent one of the most significant neurological manifestations of ReNU Syndrome. They may present in different forms: infantile spasms, focal seizures, tonic-clonic seizures, complex febrile seizures or status epilepticus. Their presence, frequency and severity vary from patient to patient and require specialist neurological evaluation.'}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              ${[
                ['fa-stethoscope','ic-navy', isIt?'Spasmi infantili':'Infantile spasms', isIt?'Contrazioni muscolari brevi e ricorrenti, spesso associate a iperaritmia all\'EEG (sindrome di West).':'Brief, recurrent muscle contractions, often associated with hypsarrhythmia on EEG (West syndrome).'],
                ['fa-wave-square','ic-amber', isIt?'Crisi focali e tonico-cloniche':'Focal and tonic-clonic seizures', isIt?'Crisi originate da una zona localizzata del cervello (focali) o generalizzate con perdita di coscienza e irrigidimento muscolare (tonico-cloniche).':'Seizures originating from a localised brain area (focal) or generalised with loss of consciousness and muscle stiffening (tonic-clonic).'],
                ['fa-thermometer-half','ic-red', isIt?'Crisi febbrili complesse':'Complex febrile seizures', isIt?'Crisi scatenate da rialzo termico, più prolungate o ripetute rispetto alle crisi febbrili semplici; richiedono monitoraggio neurologico.':'Seizures triggered by fever, more prolonged or repeated than simple febrile seizures; require neurological monitoring.'],
                ['fa-exclamation-circle','ic-red', isIt?'Stato epilettico':'Status epilepticus', isIt?'Crisi prolungata (>5 minuti) o serie di crisi senza ripresa della coscienza. È un\'emergenza medica che richiede intervento immediato.':'Prolonged seizure (>5 minutes) or series of seizures without recovery of consciousness. It is a medical emergency requiring immediate intervention.'],
              ].map(([icon,ic,title,desc]) => `
              <div class="rounded-xl p-4 flex gap-3" style="background:#FFFBEB; border:1px solid #FDE68A">
                <div class="ic ${ic} w-8 h-8 flex-shrink-0" style="width:2rem;height:2rem;min-width:2rem">
                  <i class="fas ${icon} text-sm"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm mb-1" style="color:#92400E">${title}</h4>
                  <p class="text-xs text-gray-600 leading-relaxed">${desc}</p>
                </div>
              </div>`).join('')}
            </div>
            <div class="rounded-xl p-4 flex items-start gap-3 mb-4" style="background:#EEF6FB; border-left:4px solid #1078C0">
              <i class="fas fa-info-circle text-xl mt-0.5 flex-shrink-0" style="color:#1078C0"></i>
              <p class="text-gray-700 text-sm leading-relaxed">
                ${isIt
                  ? '<strong>Nota clinica:</strong> La gestione delle crisi nei pazienti ReNU richiede valutazione EEG, neuroimaging e un piano terapeutico individualizzato. Il trattamento farmacologico antiepilettico deve essere adattato al profilo clinico specifico del paziente. La ricerca internazionale ReNU sta raccogliendo dati sul profilo epilettico della sindrome per migliorare le linee guida di trattamento.'
                  : '<strong>Clinical note:</strong> Seizure management in ReNU patients requires EEG assessment, neuroimaging and an individualised therapeutic plan. Antiepileptic drug treatment must be adapted to the patient\'s specific clinical profile. International ReNU research is collecting data on the epileptic profile of the syndrome to improve treatment guidelines.'}
              </p>
            </div>

            <!-- Infografica epilessia ReNU -->
            <div class="my-6">
              <figure class="rounded-2xl overflow-hidden border border-amber-200 shadow-sm bg-white">
                <img src="/images/infografica_epilessia_renu.jpg"
                     alt="${isIt?'Infografica epilessia nella Sindrome ReNU: tipi di crisi, cause, prevalenza e gestione clinica':'ReNU Syndrome epilepsy infographic: seizure types, causes, prevalence and clinical management'}"
                     class="w-full h-auto block" loading="lazy" decoding="async"
                     style="display:block;width:100%;height:auto;object-fit:contain;max-width:100%;">
                <figcaption class="text-xs text-gray-500 text-center px-4 py-2 bg-amber-50">
                  ${isIt?'Epilessia nella Sindrome ReNU — dati clinici e tipi di crisi · Fonte: Sindrome ReNU Italia APS':'Epilepsy in ReNU Syndrome — clinical data and seizure types · Source: Sindrome ReNU Italia APS'}
                </figcaption>
              </figure>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="/${t.lang}/about" class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
                <i class="fas fa-dna"></i>${isIt?'Caratteristiche cliniche ReNU':'ReNU clinical features'}
              </a>
              <a href="/${t.lang}/research" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#EEF6FB;color:#082050;border:1px solid #45B8EC">
                <i class="fas fa-microscope"></i>${isIt?'Ricerca e pubblicazioni':'Research & publications'}
              </a>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(isIt?'Informazioni epilessia ReNU':'ReNU epilepsy information')}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#FEF3C7;color:#92400E;border:1px solid #FDE68A">
                <i class="fas fa-envelope"></i>${isIt?'Contattaci':'Contact us'}
              </a>
            </div>
          </div>
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

// ─── GLOSSARY PAGE ────────────────────────────────────────────────────────────
function glossaryPage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  const isEn = t.lang === 'en'
  const isFr = t.lang === 'fr'
  const isEs = t.lang === 'es'

  type GlossaryEntry = { term: string; def: string; source?: string }
  const terms: GlossaryEntry[] = [
    {
      term: isIt ? 'snRNA U4 (Small Nuclear RNA U4)' : isEn ? 'snRNA U4 (Small Nuclear RNA U4)' : isFr ? 'snRNA U4 (Petit ARN nucléaire U4)' : isEs ? 'snRNA U4 (ARN nuclear pequeño U4)' : 'snRNA U4 (Kleines nukleäres RNA U4)',
      def: isIt ? 'Piccolo RNA nucleare (small nuclear RNA) codificato dal gene RNU4-2, componente essenziale del complesso di splicing U4/U6.U5 tri-snRNP. Varianti patogenetiche in RNU4-2 compromettono la funzione dello spliceosoma e causano la Sindrome ReNU.' : isEn ? 'Small nuclear RNA encoded by the RNU4-2 gene, an essential component of the U4/U6.U5 tri-snRNP splicing complex. Pathogenic variants in RNU4-2 impair spliceosome function and cause ReNU Syndrome.' : isFr ? 'Petit ARN nucléaire codé par le gène RNU4-2, composant essentiel du complexe d\'épissage U4/U6.U5 tri-snRNP. Les variants pathogènes compromettent la fonction du spliceosome.' : isEs ? 'ARN nuclear pequeño codificado por el gen RNU4-2, componente esencial del complejo de splicing U4/U6.U5 tri-snRNP.' : 'Kleines nukleäres RNA, kodiert durch das RNU4-2-Gen, wesentlicher Bestandteil des U4/U6.U5 tri-snRNP-Spleißkomplexes.',
      source: 'Hollingsworth et al., Nature 2024 (PMID 39169177)'
    },
    {
      term: isIt ? 'Spliceosoma' : isEn ? 'Spliceosome' : isFr ? 'Splicéosome' : isEs ? 'Espliceosoma' : 'Spleißosom',
      def: isIt ? 'Complesso macromolecolare RNA-proteico che catalizza la rimozione degli introni dall\'pre-mRNA (processo detto splicing). È composto da 5 snRNA principali (U1, U2, U4, U5, U6) e centinaia di proteine. Una disfunzione dello spliceosoma, come quella causata da varianti RNU4-2, determina l\'accumulo di trascritti aberranti e patologia del neurosviluppo.' : isEn ? 'RNA-protein macromolecular complex that catalyses the removal of introns from pre-mRNA (splicing). Composed of 5 main snRNAs (U1, U2, U4, U5, U6) and hundreds of proteins. Spliceosome dysfunction causes aberrant transcripts and neurodevelopmental pathology.' : isFr ? 'Complexe macromoléculaire ARN-protéique qui catalyse l\'élimination des introns de l\'pré-ARNm. Composé de 5 snARN principaux (U1, U2, U4, U5, U6) et de centaines de protéines.' : isEs ? 'Complejo macromolecular ARN-proteico que cataliza la eliminación de intrones del pre-ARNm. Compuesto por 5 snARN principales (U1, U2, U4, U5, U6) y cientos de proteínas.' : 'RNA-Protein-Makromolekularkomplex, der die Entfernung von Introns aus der Prä-mRNA katalysiert. Besteht aus 5 snRNAs (U1, U2, U4, U5, U6) und Hunderten von Proteinen.',
      source: ''
    },
    {
      term: isIt ? 'Variante de novo' : isEn ? 'De novo variant' : isFr ? 'Variant de novo' : isEs ? 'Variante de novo' : 'De-novo-Variante',
      def: isIt ? 'Mutazione genetica presente nel paziente ma non ereditata dai genitori biologici: insorge per la prima volta nella linea germinale del paziente o in fase embrionale precoce. La quasi totalità delle varianti RNU4-2 patogenetiche note sono de novo: il rischio di ricorrenza nella stessa famiglia è molto basso (<1%).' : isEn ? 'A genetic mutation present in the patient but not inherited from biological parents: it arises for the first time in the patient\'s germline or in early embryonic development. Almost all known pathogenic RNU4-2 variants are de novo: recurrence risk in the same family is very low (<1%).' : isFr ? 'Mutation génétique présente chez le patient mais non héritée des parents biologiques. Presque tous les variants RNU4-2 pathogènes sont de novo: le risque de récurrence est très faible (<1%).' : isEs ? 'Mutación genética presente en el paciente pero no heredada de los padres biológicos. Casi todas las variantes RNU4-2 patogénicas conocidas son de novo: el riesgo de recurrencia es muy bajo (<1%).' : 'Genetische Mutation beim Patienten, die nicht von biologischen Eltern geerbt wurde. Fast alle bekannten pathogenen RNU4-2-Varianten sind de novo: Rezidivrisiko < 1%.',
      source: 'Hollingsworth et al., Nature 2024'
    },
    {
      term: 'WGS — Whole Genome Sequencing',
      def: isIt ? 'Sequenziamento dell\'intero genoma umano (≈ 3 miliardi di paia di basi). Rileva varianti in tutte le regioni genomiche, incluse le regioni introniche profonde dove risiedono le varianti patogenetiche di RNU4-2. È l\'unico test diagnostico affidabile per la Sindrome ReNU. Tempo di refertazione tipico: 2–4 settimane.' : isEn ? 'Sequencing of the entire human genome (≈ 3 billion base pairs). Detects variants in all genomic regions, including the deep intronic regions where RNU4-2 pathogenic variants reside. It is the only reliable diagnostic test for ReNU Syndrome. Typical turnaround: 2–4 weeks.' : isFr ? 'Séquençage de l\'ensemble du génome humain (≈ 3 milliards de paires de bases). Seul test diagnostique fiable pour le Syndrome ReNU, car il détecte les variants dans les régions introniques profondes.' : isEs ? 'Secuenciación del genoma humano completo (≈ 3.000 millones de pares de bases). Único test diagnóstico fiable para el Síndrome ReNU, ya que detecta variantes en regiones intrónicas profundas.' : 'Sequenzierung des gesamten menschlichen Genoms (≈ 3 Milliarden Basenpaare). Einziger zuverlässiger Diagnosetest für das ReNU-Syndrom, da er Varianten in tiefen intronischen Regionen erkennt.',
      source: ''
    },
    {
      term: 'WES — Whole Exome Sequencing',
      def: isIt ? 'Sequenziamento mirato solo dell\'esoma, cioè degli esoni che codificano proteine (≈ 2% del genoma). Non è adatto alla diagnosi della Sindrome ReNU, perché le varianti patogenetiche di RNU4-2 risiedono in una regione intronica profonda che WES non analizza. Molti pazienti ReNU hanno ricevuto inizialmente un WES negativo, con ritardo diagnostico di anni.' : isEn ? 'Targeted sequencing of only the exome, i.e. protein-coding exons (≈ 2% of the genome). Not suitable for diagnosing ReNU Syndrome, as RNU4-2 pathogenic variants reside in a deep intronic region that WES does not analyse. Many ReNU patients initially received a negative WES, resulting in years of diagnostic delay.' : isFr ? 'Séquençage ciblé du seul exome (≈ 2% du génome). Ne convient pas au diagnostic du Syndrome ReNU car les variants RNU4-2 résident dans une région intronique profonde que le WES n\'analyse pas.' : isEs ? 'Secuenciación específica del exoma (≈ 2% del genoma). No es adecuado para diagnosticar el Síndrome ReNU, ya que las variantes RNU4-2 residen en una región intrónica profunda no analizada por WES.' : 'Gezielte Sequenzierung nur des Exoms (≈ 2% des Genoms). Nicht geeignet für die Diagnose des ReNU-Syndroms, da RNU4-2-Varianten in tiefen intronischen Regionen liegen.',
      source: ''
    },
    {
      term: isIt ? 'Fenotipo comportamentale' : isEn ? 'Behavioural phenotype' : isFr ? 'Phénotype comportemental' : isEs ? 'Fenotipo conductual' : 'Verhaltensphänotyp',
      def: isIt ? 'Insieme delle caratteristiche cognitive, comportamentali e adattive osservabili in un paziente con una data variante genetica. Nella Sindrome ReNU il fenotipo comportamentale include: disabilità intellettiva da moderata a grave, tratti autistici (ASD), temperamento generalmente allegro e socievole, amore per musica, acqua e routine, ridotta soglia al dolore, comportamenti ripetitivi.' : isEn ? 'The set of cognitive, behavioural and adaptive characteristics observable in a patient with a given genetic variant. In ReNU Syndrome, the behavioural phenotype includes: moderate-to-severe intellectual disability, autistic traits (ASD), generally cheerful and sociable temperament, love of music, water and routines, reduced pain threshold, repetitive behaviours.' : isFr ? 'Ensemble des caractéristiques cognitives, comportementales et adaptatives observables. Dans le Syndrome ReNU: déficience intellectuelle modérée à sévère, traits autistiques, tempérament généralement joyeux, amour de la musique et de l\'eau.' : isEs ? 'Conjunto de características cognitivas, conductuales y adaptativas observables. En el Síndrome ReNU incluye: discapacidad intelectual moderada a grave, rasgos autistas, temperamento alegre, amor por la música y el agua.' : 'Gesamtheit der kognitiven, verhaltensmäßigen und adaptiven Merkmale. Beim ReNU-Syndrom: moderate bis schwere intellektuelle Beeinträchtigung, autistische Züge, fröhliches Temperament, Vorliebe für Musik und Wasser.',
      source: 'Ciaccio et al., AJMG B 2026 (PMID 41681065)'
    },
    {
      term: isIt ? 'Ventricolomegalia' : isEn ? 'Ventriculomegaly' : isFr ? 'Ventriculomégalie' : isEs ? 'Ventriculomegalia' : 'Ventrikulomegalie',
      def: isIt ? 'Dilatazione dei ventricoli cerebrali laterali, rilevabile con risonanza magnetica (RM) cerebrale. È uno dei marker neuroradiologici più frequenti nella Sindrome ReNU. Può essere associata ad ipoplasia del corpo calloso e a riduzione della sostanza bianca.' : isEn ? 'Dilation of the lateral cerebral ventricles, detectable by brain MRI. It is one of the most frequent neuroradiological markers in ReNU Syndrome, often associated with callosal hypoplasia and white matter reduction.' : isFr ? 'Dilatation des ventricules cérébraux latéraux, détectable par IRM. L\'un des marqueurs neuroradiologiques les plus fréquents dans le Syndrome ReNU.' : isEs ? 'Dilatación de los ventrículos cerebrales laterales, detectable por RM cerebral. Uno de los marcadores neuroradiológicos más frecuentes en el Síndrome ReNU.' : 'Erweiterung der lateralen Hirnventrikel, erkennbar im MRT. Einer der häufigsten neuroradiologischen Marker beim ReNU-Syndrom.',
      source: ''
    },
    {
      term: isIt ? 'Microcefalia' : isEn ? 'Microcephaly' : isFr ? 'Microcéphalie' : isEs ? 'Microcefalia' : 'Mikrozephalie',
      def: isIt ? 'Circonferenza cranica inferiore al 3° percentile per età e sesso. È un segno clinico ricorrente nei pazienti con Sindrome ReNU, in particolare nelle varianti con fenotipo grave. Può essere presente dalla nascita (microcefalia congenita) o svilupparsi nel tempo (microcefalia acquisita o postnatale).' : isEn ? 'Head circumference below the 3rd percentile for age and sex. A recurrent clinical sign in ReNU Syndrome patients, particularly in those with severe phenotype. May be congenital or develop postnatally.' : isFr ? 'Périmètre crânien inférieur au 3ème percentile pour l\'âge et le sexe. Signe clinique récurrent dans le Syndrome ReNU, particulièrement dans les phénotypes sévères.' : isEs ? 'Circunferencia craneal por debajo del percentil 3 para edad y sexo. Signo clínico recurrente en el Síndrome ReNU, especialmente en fenotipos graves.' : 'Kopfumfang unter der 3. Perzentile für Alter und Geschlecht. Wiederkehrendes klinisches Zeichen beim ReNU-Syndrom, besonders bei schwerem Phänotyp.',
      source: ''
    },
    {
      term: isIt ? 'Ipoplasia del corpo calloso' : isEn ? 'Callosal hypoplasia' : isFr ? 'Hypoplasie du corps calleux' : isEs ? 'Hipoplasia del cuerpo calloso' : 'Corpus-callosum-Hypoplasie',
      def: isIt ? 'Sottosviluppo parziale o completo del corpo calloso, la struttura cerebrale che connette i due emisferi e coordina lo scambio di informazioni tra le aree corticali. È un marker neuroradiologico frequente nella Sindrome ReNU, spesso associato a riduzione del volume della sostanza bianca e ritardo del neurosviluppo.' : isEn ? 'Partial or complete underdevelopment of the corpus callosum, the brain structure that connects the two hemispheres. A frequent neuroradiological marker in ReNU Syndrome, often associated with reduced white matter volume.' : isFr ? 'Sous-développement partiel ou complet du corps calleux, structure cérébrale connectant les deux hémisphères. Marqueur neuroradiologique fréquent dans le Syndrome ReNU.' : isEs ? 'Subdesarrollo parcial o completo del cuerpo calloso, estructura cerebral que conecta los dos hemisferios. Marcador neuroradiológico frecuente en el Síndrome ReNU.' : 'Teilweise oder vollständige Unterentwicklung des Corpus callosum, der Hirnstruktur, die beide Hemisphären verbindet. Häufiger neuroradiologischer Marker beim ReNU-Syndrom.',
      source: ''
    },
    {
      term: 'CVI — Cerebral Visual Impairment',
      def: isIt ? 'Compromissione visiva di origine cerebrale (non oculare): il problema non è nell\'occhio, ma nella capacità del cervello di interpretare le informazioni visive. Frequente nei pazienti con Sindrome ReNU, spesso associata a ipoplasia del nervo ottico, strabismo e nistagmo. Richiede una valutazione neuroftalmologica specifica.' : isEn ? 'Visual impairment of cerebral (not ocular) origin: the problem is not in the eye but in the brain\'s ability to interpret visual information. Frequent in ReNU Syndrome patients, often associated with optic nerve hypoplasia, strabismus and nystagmus.' : isFr ? 'Déficience visuelle d\'origine cérébrale (non oculaire). Fréquente dans le Syndrome ReNU, souvent associée à une hypoplasie du nerf optique.' : isEs ? 'Discapacidad visual de origen cerebral (no ocular). Frecuente en el Síndrome ReNU, a menudo asociada a hipoplasia del nervio óptico.' : 'Sehbeeinträchtigung zerebralen (nicht okulären) Ursprungs. Häufig beim ReNU-Syndrom, oft verbunden mit Sehnerv-Hypoplasie.',
      source: ''
    },
    {
      term: 'ABA — Applied Behavior Analysis',
      def: isIt ? 'Approccio educativo-comportamentale basato sui principi dell\'analisi del comportamento applicata. Aiuta il bambino ad apprendere nuove abilità (comunicazione, autonomia, apprendimento) e a ridurre comportamenti che ostacolano la vita quotidiana. Il percorso è altamente personalizzato, utilizza il rinforzo positivo e richiede un monitoraggio continuo dei progressi. È uno degli interventi con maggiori evidenze scientifiche per bambini con disabilità del neurosviluppo.' : isEn ? 'Educational-behavioural approach based on applied behaviour analysis principles. Helps children learn new skills (communication, independence, learning) and reduce behaviours that hinder daily life. Highly personalised, uses positive reinforcement and continuous progress monitoring. One of the most evidence-based interventions for children with neurodevelopmental disabilities.' : isFr ? 'Approche éducative-comportementale basée sur l\'analyse comportementale appliquée. Aide les enfants à acquérir de nouvelles compétences et à réduire les comportements problématiques. Hautement personnalisée avec renforcement positif.' : isEs ? 'Enfoque educativo-conductual basado en los principios del análisis del comportamiento aplicado. Ayuda a los niños a aprender nuevas habilidades y reducir comportamientos problemáticos. Altamente personalizado con refuerzo positivo.' : 'Pädagogisch-verhaltenstherapeutischer Ansatz auf Basis der angewandten Verhaltensanalyse. Hilft Kindern, neue Fähigkeiten zu erlernen und störende Verhaltensweisen zu reduzieren.',
      source: ''
    },
    {
      term: isIt ? 'Epilessia – Spasmi infantili' : isEn ? 'Epilepsy – Infantile spasms' : isFr ? 'Épilepsie – Spasmes infantiles' : isEs ? 'Epilepsia – Espasmos infantiles' : 'Epilepsie – Infantile Spasmen',
      def: isIt ? 'Tipo di crisi epilettica caratteristica dell\'infanzia (esordio tipicamente tra 3 e 12 mesi). Si manifesta con brevi contrazioni simmetriche degli arti. Nella Sindrome ReNU l\'epilessia è presente nel 65–70% dei pazienti e può includere spasmi infantili, crisi focali, tonico-cloniche e crisi febbrili. La gestione farmacologica richiede consulenza neurologica specialistica.' : isEn ? 'Type of seizure characteristic of infancy (typical onset 3–12 months). Manifests as brief symmetrical limb contractions. In ReNU Syndrome, epilepsy is present in 65–70% of patients and may include infantile spasms, focal seizures, tonic-clonic seizures and febrile convulsions.' : isFr ? 'Type de crise épileptique caractéristique de la petite enfance (début typique 3–12 mois). Dans le Syndrome ReNU, l\'épilepsie est présente chez 65–70% des patients.' : isEs ? 'Tipo de crisis epiléptica característica de la infancia. En el Síndrome ReNU, la epilepsia está presente en el 65–70% de los pacientes.' : 'Für das Säuglingsalter charakteristischer Epilepsietyp. Beim ReNU-Syndrom bei 65–70% der Patienten vorhanden.',
      source: 'Ciaccio et al., AJMG B 2026'
    },
    {
      term: isIt ? 'Ipotonia muscolare' : isEn ? 'Muscle hypotonia' : isFr ? 'Hypotonie musculaire' : isEs ? 'Hipotonía muscular' : 'Muskelhypotonie',
      def: isIt ? 'Riduzione del tono muscolare (resistenza passiva al movimento). Frequente nei neonati e bambini con Sindrome ReNU, si manifesta come "flaccidità" muscolare, ritardo nello sviluppo motorio, difficoltà a mantenere la postura eretta. Può interessare anche i muscoli oro-facciali, contribuendo alle difficoltà alimentari e di linguaggio.' : isEn ? 'Reduced muscle tone (passive resistance to movement). Frequent in ReNU Syndrome infants and children, manifesting as muscle "flaccidity", motor developmental delay, difficulty maintaining upright posture. May also affect oro-facial muscles, contributing to feeding and speech difficulties.' : isFr ? 'Réduction du tonus musculaire. Fréquente dans le Syndrome ReNU, se manifeste par une flaccidité musculaire et un retard du développement moteur.' : isEs ? 'Reducción del tono muscular. Frecuente en el Síndrome ReNU, se manifiesta como flacidez muscular y retraso en el desarrollo motor.' : 'Verminderte Muskelspannung. Häufig beim ReNU-Syndrom, manifestiert sich als Muskelflaccidität und motorische Entwicklungsverzögerung.',
      source: ''
    },
    {
      term: isIt ? 'Disabilità intellettiva (DI)' : isEn ? 'Intellectual disability (ID)' : isFr ? 'Déficience intellectuelle (DI)' : isEs ? 'Discapacidad intelectual (DI)' : 'Intellektuelle Behinderung (IB)',
      def: isIt ? 'Condizione caratterizzata da limitazioni significative nel funzionamento intellettivo (QI < 70) e nel comportamento adattivo (abilità concettuali, sociali e pratiche), con esordio in età evolutiva. Nella Sindrome ReNU è presente in quasi tutti i pazienti, con grado da moderato a grave nel 90%+ dei casi.' : isEn ? 'Condition characterised by significant limitations in intellectual functioning (IQ < 70) and adaptive behaviour (conceptual, social, practical skills), with onset in the developmental period. Present in almost all ReNU Syndrome patients, moderate-to-severe in 90%+ of cases.' : isFr ? 'Condition caractérisée par des limitations significatives du fonctionnement intellectuel (QI < 70) et du comportement adaptatif. Présente chez presque tous les patients ReNU.' : isEs ? 'Condición caracterizada por limitaciones significativas en el funcionamiento intelectual (CI < 70) y el comportamiento adaptativo. Presente en casi todos los pacientes ReNU.' : 'Zustand mit erheblichen Einschränkungen des intellektuellen Funktionierens (IQ < 70) und des adaptiven Verhaltens. Bei fast allen ReNU-Patienten vorhanden.',
      source: 'Hollingsworth et al., Nature 2024'
    },
    {
      term: isIt ? 'Prevalenza' : isEn ? 'Prevalence' : isFr ? 'Prévalence' : isEs ? 'Prevalencia' : 'Prävalenz',
      def: isIt ? 'Proporzione di individui in una popolazione che presentano una determinata condizione in un dato momento. La Sindrome ReNU ha una prevalenza stimata di circa 1 su 35.000 nati vivi, che la classifica come malattia ultra-rara (soglia europea: meno di 5 casi su 10.000). In Italia si stima siano presenti circa 16 casi diagnosticati, ma il numero reale è probabilmente molto superiore per via del deficit diagnostico.' : isEn ? 'Proportion of individuals in a population with a given condition at a given time. ReNU Syndrome has an estimated prevalence of approximately 1 in 35,000 live births, classifying it as ultra-rare (EU threshold: fewer than 5 per 10,000). In Italy, approximately 16 diagnosed cases are known, but the real number is likely much higher due to diagnostic deficit.' : isFr ? 'Proportion d\'individus présentant une condition donnée à un moment donné. Le Syndrome ReNU a une prévalence estimée d\'environ 1 sur 35 000 naissances vivantes.' : isEs ? 'Proporción de individuos con una condición dada en un momento dado. El Síndrome ReNU tiene una prevalencia estimada de aproximadamente 1 en 35.000 nacidos vivos.' : 'Anteil der Individuen mit einer bestimmten Erkrankung zu einem bestimmten Zeitpunkt. Das ReNU-Syndrom hat eine geschätzte Prävalenz von ca. 1 von 35.000 Lebendgeburten.',
      source: 'Hollingsworth et al., Nature 2024'
    },
    {
      term: isIt ? 'Gene RNU4-2' : isEn ? 'RNU4-2 gene' : isFr ? 'Gène RNU4-2' : isEs ? 'Gen RNU4-2' : 'RNU4-2-Gen',
      def: isIt ? 'Gene che codifica per lo snRNA U4, localizzato sul cromosoma 12 (12q24.31). È un gene non codificante (non produce una proteina, ma un RNA funzionale). Le varianti patogenetiche note si concentrano in soli 13 nucleotidi critici della sequenza genica. La malattia causata da varianti di questo gene è stata denominata "Sindrome ReNU" (o RNU4-2 Syndrome) dalla comunità scientifica internazionale nel 2024.' : isEn ? 'Gene encoding snRNA U4, located on chromosome 12 (12q24.31). It is a non-coding gene (produces a functional RNA, not a protein). Known pathogenic variants concentrate in only 13 critical nucleotides of the gene sequence. The disease caused by variants of this gene was named "ReNU Syndrome" (or RNU4-2 Syndrome) by the international scientific community in 2024.' : isFr ? 'Gène codant pour le snARN U4, localisé sur le chromosome 12. Gène non codant (produit un ARN fonctionnel, non une protéine). Les variants pathogènes se concentrent en seulement 13 nucléotides critiques.' : isEs ? 'Gen que codifica el snARN U4, ubicado en el cromosoma 12. Gen no codificante (produce ARN funcional, no proteína). Las variantes patogénicas se concentran en solo 13 nucleótidos críticos.' : 'Gen, das für snRNA U4 kodiert, auf Chromosom 12 gelegen. Nicht-kodierendes Gen (produziert funktionelle RNA, kein Protein). Pathogene Varianten konzentrieren sich auf nur 13 kritische Nukleotide.',
      source: 'Hollingsworth et al., Nature 2024 (PMID 39169177)'
    },
    {
      term: isIt ? 'Cromosoma 12 (12q24.31)' : isEn ? 'Chromosome 12 (12q24.31)' : isFr ? 'Chromosome 12 (12q24.31)' : isEs ? 'Cromosoma 12 (12q24.31)' : 'Chromosom 12 (12q24.31)',
      def: isIt ? 'Posizione cromosomica del gene RNU4-2 nel genoma umano: cromosoma 12, braccio lungo (q), regione 2, banda 4, sottobanda 31. La notazione "12q24.31" descrive la localizzazione fisica del gene sulla mappa cromosomica standard (UCSC Genome Browser, assembly GRCh38).' : isEn ? 'Chromosomal location of the RNU4-2 gene in the human genome: chromosome 12, long arm (q), region 2, band 4, sub-band 31. This notation describes the physical location on the standard chromosomal map (GRCh38).' : isFr ? 'Localisation chromosomique du gène RNU4-2: chromosome 12, bras long (q), région 2, bande 4, sous-bande 31.' : isEs ? 'Localización cromosómica del gen RNU4-2: cromosoma 12, brazo largo (q), región 2, banda 4, sub-banda 31.' : 'Chromosomale Lage des RNU4-2-Gens: Chromosom 12, langer Arm (q), Region 2, Bande 4, Subbande 31.',
      source: ''
    },
    {
      term: isIt ? 'Legge 104/1992 (IT)' : isEn ? 'Italian Law 104/1992' : isFr ? 'Loi italienne 104/1992' : isEs ? 'Ley italiana 104/1992' : 'Italienisches Gesetz 104/1992',
      def: isIt ? 'Legge italiana che garantisce tutele, agevolazioni e servizi alle persone con disabilità e alle loro famiglie. Per un bambino con Sindrome ReNU include: insegnante di sostegno, permessi lavorativi per il caregiver (3 giorni/mese o 2 ore/giorno), agevolazioni IVA sull\'acquisto di ausili, esenzioni ticket sanitario, contrassegno disabile per parcheggio. Il riconoscimento avviene tramite la commissione medica dell\'INPS.' : isEn ? 'Italian law guaranteeing protections, benefits and services to people with disabilities and their families. For a child with ReNU Syndrome it includes: support teacher, work leave for caregiver (3 days/month or 2 hours/day), VAT reductions on assistive devices, healthcare ticket exemptions, disabled parking permit. Recognition is through the INPS medical commission.' : isFr ? 'Loi italienne garantissant des protections et services aux personnes handicapées et à leurs familles. Inclut: enseignant de soutien, congés pour aidant, réductions TVA, exemptions de tickets.' : isEs ? 'Ley italiana que garantiza protecciones y servicios a las personas con discapacidad. Incluye: maestro de apoyo, permisos laborales para cuidadores, reducciones de IVA, exenciones de copago.' : 'Italienisches Gesetz mit Schutzmaßnahmen und Leistungen für Menschen mit Behinderungen. Beinhaltet: Förderlehrer, Pflegeurlaub, MwSt.-Ermäßigungen, Gesundheitsbefreiungen.',
      source: ''
    },
    {
      term: isIt ? 'CAA — Comunicazione Aumentativa Alternativa' : isEn ? 'AAC — Augmentative and Alternative Communication' : isFr ? 'CAA — Communication Augmentative et Alternative' : isEs ? 'CAA — Comunicación Aumentativa Alternativa' : 'CAA — Unterstützte Kommunikation (UK)',
      def: isIt ? 'Sistema di strumenti e strategie che integra o sostituisce il linguaggio verbale per persone con difficoltà comunicative gravi. Include: tabelle di comunicazione con immagini/simboli (PECS), comunicatori elettronici (VOCA), app su tablet, gesti codificati (es. KWS – Keyword Sign). Indicata per bambini non verbali o con comunicazione limitata, tra cui molti bambini con Sindrome ReNU.' : isEn ? 'System of tools and strategies that augments or replaces verbal language for people with severe communication difficulties. Includes: picture/symbol communication boards (PECS), electronic communicators (VOCA), tablet apps, coded gestures (e.g. KWS – Keyword Sign). Indicated for non-verbal or limited-communication children, including many with ReNU Syndrome.' : isFr ? 'Système d\'outils et stratégies complétant ou remplaçant le langage verbal. Inclut tableaux de communication avec images/symboles, communicateurs électroniques, applications sur tablette.' : isEs ? 'Sistema de herramientas y estrategias que complementa o reemplaza el lenguaje verbal. Incluye tableros de comunicación con imágenes/símbolos, comunicadores electrónicos, apps en tablet.' : 'System von Werkzeugen und Strategien, das die verbale Sprache ergänzt oder ersetzt. Beinhaltet Bild-/Symbolkommunikationstafeln, elektronische Kommunikatoren, Tablet-Apps.',
      source: ''
    },
    {
      term: isIt ? 'Splicing dell\'RNA' : isEn ? 'RNA splicing' : isFr ? 'Épissage de l\'ARN' : isEs ? 'Splicing del ARN' : 'RNA-Spleißen',
      def: isIt ? 'Processo biologico mediante il quale gli introni (sequenze non codificanti) vengono rimossi dall\'pre-mRNA e gli esoni (sequenze codificanti) vengono uniti per formare l\'mRNA maturo. È eseguito dallo spliceosoma. Varianti patogenetiche in RNU4-2 compromettono questo processo, portando a inclusione di introni aberranti o salto di esoni, con produzione di proteine anomale o riduzione dell\'espressione genica.' : isEn ? 'Biological process whereby introns (non-coding sequences) are removed from pre-mRNA and exons (coding sequences) are joined to form mature mRNA. Carried out by the spliceosome. Pathogenic RNU4-2 variants impair this process, leading to aberrant intron inclusion or exon skipping, producing abnormal proteins or reduced gene expression.' : isFr ? 'Processus biologique par lequel les introns sont retirés du pré-ARNm et les exons sont joints pour former l\'ARNm mature. Réalisé par le splicéosome. Les variants RNU4-2 perturbent ce processus.' : isEs ? 'Proceso biológico mediante el cual los intrones se eliminan del pre-ARNm y los exones se unen para formar ARNm maduro. Realizado por el espliceosoma. Las variantes RNU4-2 alteran este proceso.' : 'Biologischer Prozess, bei dem Introns aus der Prä-mRNA entfernt und Exons verbunden werden, um reife mRNA zu bilden. Wird vom Spleißosom durchgeführt.',
      source: ''
    },
    {
      term: isIt ? '5×1000 (Italia)' : isEn ? '5×1000 Italian tax donation' : isFr ? '5×1000 Don fiscal italien' : isEs ? '5×1000 Donación fiscal italiana' : '5×1000 Italienische Steuerdonation',
      def: isIt ? 'Meccanismo fiscale italiano che consente al contribuente di destinare il 5 per mille dell\'IRPEF a un\'organizzazione no-profit senza alcun costo aggiuntivo. Per destinare il 5×1000 a Sindrome ReNU Italia APS, inserire il codice fiscale 98020680157 nella casella "Associazioni di promozione sociale" della dichiarazione dei redditi (730 o UNICO). Non si tratta di una donazione aggiuntiva: il contribuente decide solo dove va una quota delle imposte già dovute allo Stato.' : isEn ? 'Italian fiscal mechanism allowing taxpayers to allocate 5 per thousand of their income tax to a non-profit organisation at no additional cost. To allocate your 5×1000 to Sindrome ReNU Italia APS, enter tax code 98020680157 in the "Social promotion associations" box of your Italian tax return. This is not an additional donation: you decide where a share of taxes already owed to the State goes.' : isFr ? 'Mécanisme fiscal italien permettant au contribuable d\'attribuer 5 pour mille de l\'IRPEF à une organisation à but non lucratif sans frais supplémentaires. Code fiscal: 98020680157.' : isEs ? 'Mecanismo fiscal italiano que permite destinar 5 por mil del IRPF a una organización sin ánimo de lucro sin coste adicional. Código fiscal: 98020680157.' : 'Italienischer Steuermechanismus, der es Steuerzahlern ermöglicht, 5 Promille ihrer Einkommensteuer einer gemeinnützigen Organisation zuzuweisen. Steuernummer: 98020680157.',
      source: ''
    },
    {
      term: isIt ? 'OMIM (Online Mendelian Inheritance in Man)' : isEn ? 'OMIM (Online Mendelian Inheritance in Man)' : isFr ? 'OMIM (Online Mendelian Inheritance in Man)' : isEs ? 'OMIM (Online Mendelian Inheritance in Man)' : 'OMIM (Online Mendelian Inheritance in Man)',
      def: isIt ? 'Database biomedico online gestito dalla Johns Hopkins University che cataloga le malattie genetiche umane e i geni associati. La Sindrome ReNU è catalogata in OMIM con il numero 620849. OMIM è una fonte primaria per i ricercatori e i medici che studiano le malattie genetiche rare.' : isEn ? 'Online biomedical database managed by Johns Hopkins University cataloguing human genetic diseases and associated genes. ReNU Syndrome is catalogued in OMIM under number 620849. OMIM is a primary source for researchers and physicians studying rare genetic diseases.' : isFr ? 'Base de données biomédicale en ligne gérant les maladies génétiques humaines. Le Syndrome ReNU est répertorié sous OMIM 620849.' : isEs ? 'Base de datos biomédica en línea que cataloga enfermedades genéticas humanas. El Síndrome ReNU está catalogado en OMIM con el número 620849.' : 'Online-Biomedizindatenbank von Johns Hopkins University. Das ReNU-Syndrom ist unter OMIM-Nr. 620849 katalogisiert.',
      source: 'https://www.omim.org/entry/620849'
    },
    {
      term: isIt ? 'Lascito testamentario a un\'APS' : isEn ? 'Legacy donation to an APS' : isFr ? 'Legs testamentaire à une APS' : isEs ? 'Legado testamentario a una APS' : 'Testamentarische Zuwendung an eine APS',
      def: isIt ? 'Disposizione testamentaria con cui il testatore lascia una parte del proprio patrimonio (somma di denaro, immobile, titoli) a un\'Associazione di Promozione Sociale (APS). In Italia i lasciti alle APS sono esenti da imposta di successione (art. 3, D.Lgs. 346/1990). Il lascito può essere: universale (tutta l\'eredità o una quota), particolare (un bene specifico). Per informazioni su come fare un lascito a Sindrome ReNU Italia APS: donazioni@sindromerenu.it.' : isEn ? 'Testamentary disposition by which the testator leaves part of their estate (money, property, securities) to a Social Promotion Association (APS). In Italy, legacies to APS organisations are exempt from inheritance tax. The legacy can be: universal (entire estate or a share) or particular (a specific asset). For information: donazioni@sindromerenu.it.' : isFr ? 'Disposition testamentaire par laquelle le testateur laisse une partie de son patrimoine à une organisation à but non lucratif. En Italie, les legs aux APS sont exonérés de droits de succession.' : isEs ? 'Disposición testamentaria por la que el testador deja parte de su patrimonio a una organización sin ánimo de lucro. En Italia, los legados a APS están exentos del impuesto de sucesiones.' : 'Testamentarische Verfügung, mit der der Erblasser einen Teil seines Vermögens einer gemeinnützigen Organisation hinterlässt. In Italien sind Vermächtnisse an APS von der Erbschaftsteuer befreit.',
      source: ''
    },
    {
      term: isIt ? 'Registro pazienti (Patient Registry)' : isEn ? 'Patient registry' : isFr ? 'Registre des patients' : isEs ? 'Registro de pacientes' : 'Patientenregister',
      def: isIt ? 'Database strutturato che raccoglie dati clinici, genetici e anamnestici di pazienti affetti da una specifica malattia. Per le malattie rare come la Sindrome ReNU, il registro pazienti è fondamentale per: raccogliere dati sufficienti per studi clinici, identificare pattern fenotipici comuni, facilitare il reclutamento per trial terapeutici. Sindrome ReNU Italia APS sta collaborando alla costruzione del Registro Nazionale Pazienti ReNU con UONPIA Policlinico di Milano.' : isEn ? 'Structured database collecting clinical, genetic and anamnestic data from patients with a specific disease. For rare diseases like ReNU Syndrome, the patient registry is essential for: collecting sufficient data for clinical studies, identifying common phenotypic patterns, facilitating trial recruitment. Sindrome ReNU Italia APS is collaborating on the National ReNU Patient Registry with UONPIA Policlinico di Milano.' : isFr ? 'Base de données structurée collectant des données cliniques et génétiques des patients. Fondamental pour les maladies rares comme le Syndrome ReNU pour les études cliniques.' : isEs ? 'Base de datos estructurada que recoge datos clínicos y genéticos de pacientes. Fundamental para enfermedades raras como el Síndrome ReNU para estudios clínicos.' : 'Strukturierte Datenbank mit klinischen und genetischen Patientendaten. Für seltene Erkrankungen wie das ReNU-Syndrom für klinische Studien unerlässlich.',
      source: ''
    },
    {
      term: isIt ? 'CRID — Clinical Research ID' : isEn ? 'CRID — Clinical Research ID' : isFr ? 'CRID — Identifiant de Recherche Clinique' : isEs ? 'CRID — ID de Investigación Clínica' : 'CRID — Klinische Forschungs-ID',
      def: isIt ? 'Identificativo unico assegnato a un paziente che partecipa a ricerche cliniche. Il CRID permette di collegare in modo sicuro i dati di uno stesso paziente attraverso diversi studi, senza rivelare l\'identità del paziente. Per i bambini con Sindrome ReNU si consiglia di creare il CRID su thecrid.org prima di partecipare a qualsiasi studio clinico, e di condividerlo con ogni ricercatore.' : isEn ? 'Unique identifier assigned to a patient participating in clinical research. The CRID allows safe linking of a patient\'s data across different studies without revealing patient identity. For children with ReNU Syndrome, creating a CRID at thecrid.org before participating in any clinical study is recommended.' : isFr ? 'Identifiant unique attribué à un patient participant à des recherches cliniques. Permet de relier les données d\'un patient entre différentes études sans révéler son identité.' : isEs ? 'Identificador único asignado a un paciente que participa en investigaciones clínicas. Permite vincular datos del paciente entre diferentes estudios sin revelar su identidad.' : 'Eindeutige Kennung für Patienten in klinischen Studien. Ermöglicht sichere Verknüpfung der Patientendaten über verschiedene Studien hinweg.',
      source: 'thecrid.org'
    },
    {
      term: isIt ? 'Diagnosi precoce' : isEn ? 'Early diagnosis' : isFr ? 'Diagnostic précoce' : isEs ? 'Diagnóstico precoz' : 'Frühdiagnose',
      def: isIt ? 'Identificazione di una malattia nelle fasi iniziali, prima che i sintomi diventino gravi o che si accumulino danni. Per la Sindrome ReNU, la diagnosi precoce (entro il primo anno di vita) è fondamentale perché permette di avviare tempestivamente le terapie di supporto (fisioterapia, logopedia, ABA) e di evitare anni di incertezza diagnostica per la famiglia. Il percorso standard richiede prima un WES (spesso negativo) e poi un WGS, con ritardi medi di 2–5 anni dalla prima comparsa dei sintomi.' : isEn ? 'Identification of a disease in its early stages, before symptoms become severe or damage accumulates. For ReNU Syndrome, early diagnosis (within the first year of life) is crucial because it allows timely initiation of support therapies and avoids years of diagnostic uncertainty. The standard pathway often requires first a WES (frequently negative) then WGS, with average delays of 2–5 years.' : isFr ? 'Identification d\'une maladie à ses stades initiaux. Pour le Syndrome ReNU, le diagnostic précoce est fondamental pour démarrer rapidement les thérapies de soutien.' : isEs ? 'Identificación de una enfermedad en sus etapas iniciales. Para el Síndrome ReNU, el diagnóstico precoz es fundamental para iniciar terapias de apoyo a tiempo.' : 'Identifizierung einer Erkrankung in frühen Stadien. Für das ReNU-Syndrom ist die Frühdiagnose entscheidend für den zeitnahen Start von Unterstützungstherapien.',
      source: ''
    },
    {
      term: isIt ? 'UONPIA — Neuropsichiatria Infantile' : isEn ? 'Child Neuropsychiatry Unit (UONPIA)' : isFr ? 'Unité de Neuropsychiatrie Infantile (UONPIA)' : isEs ? 'Unidad de Neuropsiquiatría Infantil (UONPIA)' : 'Kinder-Neuropsychiatrische Einheit (UONPIA)',
      def: isIt ? 'Unità Operativa Neuropsichiatria dell\'Infanzia e dell\'Adolescenza: reparto ospedaliero specializzato nella diagnosi e nella cura dei disturbi neurologici, psichiatrici e del neurosviluppo in età evolutiva. L\'UONPIA del Policlinico di Milano (Fondazione IRCCS) è uno dei centri di riferimento per la Sindrome ReNU in Italia, con cui Sindrome ReNU Italia APS collabora attivamente.' : isEn ? 'Child and Adolescent Neuropsychiatry Unit: hospital department specialising in the diagnosis and treatment of neurological, psychiatric and neurodevelopmental disorders in developmental age. UONPIA at Policlinico di Milano (Fondazione IRCCS) is one of the Italian reference centres for ReNU Syndrome.' : isFr ? 'Unité de Neuropsychiatrie de l\'Enfant et de l\'Adolescent. L\'UONPIA du Policlinico di Milano est l\'un des centres de référence italiens pour le Syndrome ReNU.' : isEs ? 'Unidad de Neuropsiquiatría del Niño y del Adolescente. La UONPIA del Policlinico di Milano es uno de los centros de referencia italianos para el Síndrome ReNU.' : 'Kinder- und Jugendneuropsychiatrie-Einheit. UONPIA am Policlinico di Milano ist eines der italienischen Referenzzentren für das ReNU-Syndrom.',
      source: ''
    },
    {
      term: isIt ? 'Associazione di Promozione Sociale (APS)' : isEn ? 'Social Promotion Association (APS)' : isFr ? 'Association de Promotion Sociale (APS)' : isEs ? 'Asociación de Promoción Social (APS)' : 'Sozialförderverein (APS)',
      def: isIt ? 'Forma giuridica italiana di ente del Terzo Settore (D.Lgs. 117/2017 – Codice del Terzo Settore). Caratterizzata da: prevalenza di attività di interesse generale, soci volontari che operano senza fine di lucro, statuto pubblico, iscrizione al RUNTS (Registro Unico Nazionale del Terzo Settore). Le APS godono di agevolazioni fiscali: esenzione IVA per molte attività, detraibilità delle donazioni ricevute (26% per i donatori privati, 10% per le imprese). Sindrome ReNU Italia APS è registrata con CF 98020680157.' : isEn ? 'Italian legal form of Third Sector entity (Legislative Decree 117/2017). Characterised by: prevalence of activities in the general interest, volunteer members operating non-profit, public statute, registration in the RUNTS (National Third Sector Register). APS organisations benefit from tax advantages. Sindrome ReNU Italia APS is registered with tax code 98020680157.' : isFr ? 'Forme juridique italienne d\'organisation à but non lucratif. Bénéficie d\'avantages fiscaux. Sindrome ReNU Italia APS est enregistrée avec le code fiscal 98020680157.' : isEs ? 'Forma jurídica italiana de organización sin ánimo de lucro. Goza de ventajas fiscales. Sindrome ReNU Italia APS está registrada con código fiscal 98020680157.' : 'Italienische Rechtsform einer gemeinnützigen Organisation. Sindrome ReNU Italia APS ist mit Steuernummer 98020680157 registriert.',
      source: ''
    },
    {
      term: 'PMID — PubMed Identifier',
      def: isIt ? 'Numero identificativo univoco assegnato dalla National Library of Medicine (NIH/NLM) a ogni articolo scientifico indicizzato nel database PubMed. Consente di rintracciare immediatamente la fonte scientifica. I PMID delle pubblicazioni chiave sulla Sindrome ReNU sono: 39169177 (Hollingsworth et al., Nature 2024), 42419151, 41681065 (Ciaccio et al., AJMG B 2026), 41951959.' : isEn ? 'Unique identifier assigned by the National Library of Medicine (NIH/NLM) to each scientific article indexed in PubMed. Key PMIDs for ReNU Syndrome publications: 39169177 (Hollingsworth et al., Nature 2024), 42419151, 41681065 (Ciaccio et al., AJMG B 2026), 41951959.' : isFr ? 'Identifiant unique attribué par la NLM (NIH) à chaque article scientifique indexé dans PubMed. PMIDs clés pour le Syndrome ReNU: 39169177, 42419151, 41681065, 41951959.' : isEs ? 'Identificador único asignado por la NLM (NIH) a cada artículo científico indexado en PubMed. PMIDs clave para el Síndrome ReNU: 39169177, 42419151, 41681065, 41951959.' : 'Eindeutige Kennung, die der NLM (NIH) jedem in PubMed indexierten wissenschaftlichen Artikel zuweist. Wichtige PMIDs für das ReNU-Syndrom: 39169177, 42419151, 41681065, 41951959.',
      source: ''
    },
    {
      term: isIt ? 'E-E-A-T (Esperienza, Competenza, Autorevolezza, Affidabilità)' : isEn ? 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)' : isFr ? 'E-E-A-T (Expérience, Expertise, Autorité, Fiabilité)' : isEs ? 'E-E-A-T (Experiencia, Experiencia técnica, Autoridad, Confiabilidad)' : 'E-E-A-T (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit)',
      def: isIt ? 'Framework di valutazione della qualità dei contenuti web usato da Google (e adottato indirettamente dai motori AI) per valutare i siti YMYL (Your Money or Your Life), categoria che include i siti di salute e medicina. Per Sindrome ReNU Italia APS: Experience = storie di 24 famiglie italiane; Expertise = Dr. Claudia Gravaghi PhD e Comitato Scientifico; Authoritativeness = citazioni su Nature, AJMG; Trustworthiness = statuto APS pubblico, contatti verificabili, codice fiscale 98020680157.' : isEn ? 'Quality evaluation framework used by Google (and indirectly by AI engines) to assess YMYL (Your Money or Your Life) sites, including health and medical sites. For Sindrome ReNU Italia APS: Experience = stories of 24 Italian families; Expertise = Dr. Claudia Gravaghi PhD and Scientific Committee; Authoritativeness = citations in Nature, AJMG; Trustworthiness = public APS statute, verifiable contacts.' : isFr ? 'Cadre d\'évaluation de la qualité des contenus web utilisé par Google pour les sites YMYL (santé, médecine). Pour ReNU Italia: Expérience = histoires de familles; Expertise = Dr Gravaghi PhD; Autorité = citations dans Nature; Fiabilité = statut APS public.' : isEs ? 'Marco de evaluación de calidad de contenidos web usado por Google para sitios YMYL (salud, medicina). Para ReNU Italia: Experiencia = historias de familias; Expertise = Dr. Gravaghi PhD; Autoridad = citas en Nature; Confiabilidad = estatuto APS público.' : 'Qualitätsbewertungsrahmen von Google für YMYL-Websites (Gesundheit, Medizin). Für ReNU Italia: Erfahrung = Familiengeschichten; Expertise = Dr. Gravaghi PhD; Autorität = Zitate in Nature; Vertrauenswürdigkeit = öffentliche APS-Satzung.',
      source: 'Google Search Quality Evaluator Guidelines 2024'
    },
  ]

  // Raggruppa per lettera iniziale
  const grouped: Record<string, GlossaryEntry[]> = {}
  for (const entry of terms) {
    const letter = entry.term[0].toUpperCase()
    if (!grouped[letter]) grouped[letter] = []
    grouped[letter].push(entry)
  }
  const letters = Object.keys(grouped).sort()

  const pageTitle = isIt ? 'Glossario — Sindrome ReNU (RNU4-2)' : isEn ? 'Glossary — ReNU Syndrome (RNU4-2)' : isFr ? 'Glossaire — Syndrome ReNU (RNU4-2)' : isEs ? 'Glosario — Síndrome ReNU (RNU4-2)' : 'Glossar — ReNU-Syndrom (RNU4-2)'
  const pageDesc = isIt ? 'Termini e definizioni relativi alla Sindrome ReNU (RNU4-2), alla genetica e alle terapie.' : isEn ? 'Terms and definitions related to ReNU Syndrome (RNU4-2), genetics and therapies.' : isFr ? 'Termes et définitions relatifs au Syndrome ReNU (RNU4-2), à la génétique et aux thérapies.' : isEs ? 'Términos y definiciones relativos al Síndrome ReNU (RNU4-2), genética y terapias.' : 'Begriffe und Definitionen zum ReNU-Syndrom (RNU4-2), Genetik und Therapien.'

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-book mr-3 text-sky-300"></i>${pageTitle}</h1>
      <p class="text-sky-100 text-lg">${pageDesc}</p>
    </div>
  </section>

  <section class="py-12 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- ── ANCHOR CONTENT: presentazione citabile AI ── -->
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB; border-color:#1078C0;">
        <p class="text-gray-800 font-semibold leading-relaxed">
          ${isIt ? 'Questo glossario raccoglie i termini più importanti per la comprensione della <strong>Sindrome ReNU (RNU4-2)</strong>. Ogni definizione è redatta dal Comitato Scientifico di Sindrome ReNU Italia APS (Dr. Claudia Gravaghi PhD) e include la fonte scientifica di riferimento.' :
           isEn ? 'This glossary contains the most important terms for understanding <strong>ReNU Syndrome (RNU4-2)</strong>. Each definition is prepared by the Scientific Committee of Sindrome ReNU Italia APS (Dr. Claudia Gravaghi PhD) and includes the scientific reference source.' :
           isFr ? 'Ce glossaire réunit les termes médicaux et scientifiques essentiels pour comprendre le <strong>Syndrome ReNU (RNU4-2)</strong>. Rédigé par le Comité Scientifique de Sindrome ReNU Italia APS (Dr. Claudia Gravaghi PhD) avec les sources scientifiques de référence.' :
           isEs ? 'Este glosario reúne los términos médicos y científicos esenciales para comprender el <strong>Síndrome ReNU (RNU4-2)</strong>. Redactado por el Comité Científico de Sindrome ReNU Italia APS (Dr. Claudia Gravaghi PhD) con las fuentes científicas de referencia.' :
           'Dieses Glossar versammelt die wichtigsten medizinischen und wissenschaftlichen Begriffe zum <strong>ReNU-Syndrom (RNU4-2)</strong>. Erstellt vom Wissenschaftlichen Ausschuss von Sindrome ReNU Italia APS (Dr. Claudia Gravaghi PhD) mit den wissenschaftlichen Referenzquellen.'
          }
        </p>
      </div>

      <!-- Index lettere -->
      <div class="flex flex-wrap gap-2 mb-8">
        ${letters.map(l => `<a href="#letter-${l}" class="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm hover:text-white transition-colors" style="background:#EEF6FB;color:#082050" onmouseover="this.style.background='#1078C0';this.style.color='#fff'" onmouseout="this.style.background='#EEF6FB';this.style.color='#082050'">${l}</a>`).join('')}
      </div>

      <!-- Voci per lettera -->
      <div class="space-y-10">
        ${letters.map(letter => `
        <div id="letter-${letter}">
          <h2 class="text-2xl font-extrabold mb-4 flex items-center gap-3" style="color:#082050">
            <span class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0" style="background:#1078C0">${letter}</span>
          </h2>
          <div class="space-y-4">
            ${grouped[letter].map(entry => `
            <article class="card p-6" itemscope itemtype="https://schema.org/DefinedTerm">
              <h3 class="font-extrabold text-lg mb-2" style="color:#082050" itemprop="name">${entry.term}</h3>
              <p class="text-gray-700 leading-relaxed text-sm" itemprop="description">${entry.def}</p>
              ${entry.source ? `<p class="text-xs mt-2 font-medium" style="color:#1078C0"><i class="fas fa-book-open mr-1"></i>${entry.source}</p>` : ''}
            </article>`).join('')}
          </div>
        </div>`).join('')}
      </div>

      <!-- Internal linking -->
      <nav class="mt-10 border-t border-sky-100 pt-6" aria-label="${isIt?'Approfondimenti':isEn?'Related pages':isFr?'Pages connexes':isEs?'Páginas relacionadas':'Verwandte Seiten'}">
        <p class="text-sm font-semibold mb-3" style="color:#082050">${isIt?'Approfondimenti correlati:':isEn?'Related pages:':isFr?'Pages connexes :':isEs?'Páginas relacionadas:':'Verwandte Seiten:'}</p>
        <ul class="flex flex-wrap gap-3">
          <li><a href="/${t.lang}/about" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-dna text-xs"></i>${isIt?'Cos\'è la Sindrome ReNU':isEn?'What is ReNU Syndrome':isFr?'Qu\'est-ce que le Syndrome ReNU':isEs?'¿Qué es el Síndrome ReNU':'Was ist das ReNU-Syndrom'}</a></li>
          <li><a href="/${t.lang}/diagnosis" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-stethoscope text-xs"></i>${isIt?'Diagnosi WGS per RNU4-2':isEn?'WGS diagnosis for RNU4-2':isFr?'Diagnostic WGS pour RNU4-2':isEs?'Diagnóstico WGS para RNU4-2':'WGS-Diagnose für RNU4-2'}</a></li>
          <li><a href="/${t.lang}/research" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-microscope text-xs"></i>${isIt?'Pubblicazioni scientifiche':isEn?'Scientific publications':isFr?'Publications scientifiques':isEs?'Publicaciones científicas':'Wissenschaftliche Publikationen'}</a></li>
          <li><a href="/${t.lang}/faq" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-question-circle text-xs"></i>${isIt?'FAQ e diritti delle famiglie':isEn?'FAQ and family rights':isFr?'FAQ et droits des familles':isEs?'FAQ y derechos familiares':'FAQ und Familienrechte'}</a></li>
        </ul>
      </nav>
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
  glossary:        glossaryPage,
  glossario:       glossaryPage,
}

// ─── HELPER: carica override testi_ui dal DB per una lingua ──────────────────
// Restituisce un oggetto {chiave: valore} con i record presenti nel DB.
// Solo lingua IT (opzione A): per le altre lingue ritorna {} immediatamente.
async function loadTesti(db: D1Database | undefined, lang: string): Promise<Record<string,string>> {
  if (!db || lang !== 'it') return {}
  try {
    const r = await db.prepare('SELECT chiave, valore FROM testi_ui WHERE lang=?').bind(lang).all()
    const out: Record<string,string> = {}
    for (const row of (r.results as any[])) {
      if (row.chiave && row.valore !== undefined && row.valore !== null && row.valore !== '') {
        // Testo puro dal DB: nessun tag HTML atteso, nessun escape necessario.
        // Le chiavi strutturate (hero_text, hero_desc) vengono formattate
        // nel template con .replace() hardcoded. Le altre sono plain text.
        out[row.chiave] = row.valore
      }
    }
    return out
  } catch { return {} }
}

// ─── HELPER: carica parametri config dal DB ───────────────────────────────────
async function loadConfig(db: D1Database | undefined): Promise<Record<string,string>> {
  if (!db) return {}
  try {
    const r = await db.prepare('SELECT chiave, valore FROM config').all()
    const out: Record<string,string> = {}
    for (const row of (r.results as any[])) {
      if (row.chiave) out[row.chiave] = row.valore ?? ''
    }
    return out
  } catch { return {} }
}

// ─── HELPER: escape JSON string per JSON-LD ──────────────────────────────────
function escJld(s: string): string {
  return (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, '').slice(0, 500)
}

// ─── ROUTE DEDICATE CON JSON-LD DINAMICI (prima del loop generico) ───────────

// FAQ — FAQPage JSON-LD generato dal DB
for (const lang of ['it','en','fr','es','de']) {
  for (const slug of ['faq']) {
    app.get(`/${lang}/${slug}`, async (c) => {
      const base = translations[lang]
      const overrides = await loadTesti(c.env?.DB, lang)
      const config = await loadConfig(c.env?.DB)
      const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
      const pageFn = (pages as Record<string, (t: Record<string,string>) => string>)[slug]
      // Carica FAQ dal DB per il JSON-LD
      let jsonLdFaq = ''
      try {
        const db = c.env?.DB
        if (db) {
          const dCol = lang === 'en' ? 'domanda_en' : 'domanda_it'
          const rCol = lang === 'en' ? 'risposta_en' : 'risposta_it'
          const r = await db.prepare(
            'SELECT COALESCE(NULLIF(' + dCol + ',\'\'), NULLIF(domanda_it,\'\')) as domanda, ' +
            'COALESCE(NULLIF(' + rCol + ',\'\'), NULLIF(risposta_it,\'\')) as risposta ' +
            'FROM faq WHERE attiva=1 ORDER BY ordine ASC, id ASC LIMIT 15'
          ).all()
          const items = (r.results as Array<{domanda:string,risposta:string}>)
            .filter(f => f.domanda && f.risposta)
            .map((f, i) => `{"@type":"Question","name":"${escJld(f.domanda)}","acceptedAnswer":{"@type":"Answer","text":"${escJld(f.risposta)}"}}`)
            .join(',\n      ')
          if (items) {
            jsonLdFaq = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${items}
    ]
  }
  </script>`
          }
        }
      } catch {}
      return c.html(getHtml(t, slug, pageFn ? pageFn(t) : '', jsonLdFaq))
    })
  }
}

// EVENTI — Event JSON-LD generato dal DB (route events + eventi)
for (const lang of ['it','en','fr','es','de']) {
  for (const slug of ['events','eventi']) {
    app.get(`/${lang}/${slug}`, async (c) => {
      const base = translations[lang]
      const overrides = await loadTesti(c.env?.DB, lang)
      const config = await loadConfig(c.env?.DB)
      const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
      // La pagina eventi è registrata nel loop come "events"
      const pageKey = 'events'
      const pageFn = (pages as Record<string, (t: Record<string,string>) => string>)[pageKey]
      // Carica eventi dal DB per il JSON-LD
      let jsonLdEvents = ''
      try {
        const db = c.env?.DB
        if (db) {
          const tCol = `titolo_${lang === 'en' ? 'en' : lang === 'fr' ? 'fr' : lang === 'es' ? 'es' : lang === 'de' ? 'de' : 'it'}`
          const dCol = `desc_${lang === 'en' ? 'en' : 'it'}`
          const r = await db.prepare(
            `SELECT id, data_evento, luogo, stato, categoria, img_url, url_esterno,
             COALESCE(NULLIF(${tCol},''), NULLIF(titolo_it,'')) as titolo,
             COALESCE(NULLIF(${dCol},''), NULLIF(desc_it,'')) as desc
             FROM eventi WHERE attivo=1 AND data_evento IS NOT NULL
             ORDER BY COALESCE(data_evento,'9999') ASC LIMIT 10`
          ).all()
          const BASE_URL_EV = 'https://www.sindromerenu.it'
          const evItems = (r.results as Array<{id:number,data_evento:string,luogo:string,stato:string,categoria:string,img_url:string|null,url_esterno:string|null,titolo:string,desc:string}>)
            .filter(ev => ev.titolo && ev.data_evento)
            .map(ev => {
              const eventStatus = ev.stato === 'passato' ? 'EventPast'
                : ev.stato === 'annullato' ? 'EventCancelled'
                : ev.stato === 'confermato' ? 'EventScheduled'
                : 'EventScheduled'
              const imgPart = ev.img_url ? `,"image":"${BASE_URL_EV}${escJld(ev.img_url)}"` : ''
              const urlPart = ev.url_esterno ? `,"url":"${escJld(ev.url_esterno)}"` : `,"url":"${BASE_URL_EV}/${lang}/events"`
              const descPart = ev.desc ? `,"description":"${escJld(ev.desc)}"` : ''
              return `{
        "@type": "Event",
        "name": "${escJld(ev.titolo)}",
        "startDate": "${ev.data_evento}",
        "eventStatus": "https://schema.org/${eventStatus}",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {"@type":"Place","name":"${escJld(ev.luogo || 'Italia')}","address":{"@type":"PostalAddress","addressCountry":"IT","addressLocality":"${escJld(ev.luogo || 'Italia')}"}}${descPart}${imgPart}${urlPart},
        "organizer": {"@type":"NGO","name":"Sindrome ReNU Italia APS","url":"${BASE_URL_EV}"}
      }`
            })
            .join(',\n      ')
          if (evItems) {
            jsonLdEvents = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Eventi Sindrome ReNU Italia",
    "itemListElement": [
      ${evItems}
    ]
  }
  </script>`
          }
        }
      } catch {}
      return c.html(getHtml(t, pageKey, pageFn ? pageFn(t) : '', jsonLdEvents))
    })
  }
}

// ─── DONAZIONI: sottopagine tematiche (/lasciti, /5x1000, /compleanno-solidale, /aziendale) ──
for (const lang of ['it','en','fr','es','de']) {
  const isIt = lang==='it', isEn=lang==='en', isFr=lang==='fr', isEs=lang==='es'

  // /lasciti — Lascito testamentario
  app.get(`/${lang}/donations/lasciti`, async (c) => {
    const base = translations[lang]
    const overrides = await loadTesti(c.env?.DB, lang)
    const config = await loadConfig(c.env?.DB)
    const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
    const BASE = 'https://www.sindromerenu.it'
    const jsonLdDonation = `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebPage",
  "name":"${isIt?'Lascito Testamentario a Sindrome ReNU Italia APS':isEn?'Legacy Donation to ReNU Syndrome Italy APS':isFr?'Legs Testamentaire au Syndrome ReNU Italie APS':isEs?'Legado Testamentario a Síndrome ReNU Italia APS':'Testamentarisches Vermächtnis an ReNU-Syndrom Italien APS'}",
  "description":"${isIt?'Come fare un lascito testamentario a Sindrome ReNU Italia APS, APS esente da imposta di successione (art.3 D.Lgs.346/1990). CF 98020680157':isEn?'How to leave a legacy donation to ReNU Syndrome Italy APS, exempt from inheritance tax. Tax code 98020680157':'Legs testamentaire à Sindrome ReNU Italia APS, exonéré de droits de succession. Code fiscal 98020680157'}",
  "url":"${BASE}/${lang}/donations/lasciti",
  "inLanguage":"${lang}",
  "publisher":{"@type":"NGO","name":"Sindrome ReNU Italia APS","url":"${BASE}","taxID":"98020680157"},
  "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"${BASE}/${lang}/home"},
    {"@type":"ListItem","position":2,"name":"${isIt?'Donazioni':'Donations'}","item":"${BASE}/${lang}/donations"},
    {"@type":"ListItem","position":3,"name":"${isIt?'Lascito Testamentario':isEn?'Legacy Donation':'Legs Testamentaire'}","item":"${BASE}/${lang}/donations/lasciti"}
  ]}
}
</script>`
    const html = `
      <!-- ANCHOR CONTENT GEO-AI §3.2.3 -->
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB;border-color:#1078C0">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${isIt ? 'Con un <strong>lascito testamentario</strong> a <strong>Sindrome ReNU Italia APS</strong> (CF 98020680157) puoi destinare parte del tuo patrimonio alla ricerca sulla Sindrome ReNU (RNU4-2). I lasciti alle APS italiane sono <strong>esenti da imposta di successione</strong> (art. 3, D.Lgs. 346/1990). Ogni euro supporta direttamente le famiglie e la ricerca genetica.' :
           isEn ? 'By leaving a <strong>legacy donation</strong> to <strong>Sindrome ReNU Italia APS</strong> (tax code 98020680157) you can direct part of your estate to ReNU Syndrome (RNU4-2) research. Legacies to Italian APS organisations are <strong>exempt from inheritance tax</strong> (art. 3, D.Lgs. 346/1990).' :
           isFr ? 'En laissant un <strong>legs testamentaire</strong> à <strong>Sindrome ReNU Italia APS</strong> (code fiscal 98020680157) vous pouvez soutenir la recherche sur le Syndrome ReNU (RNU4-2). Les legs aux APS italiennes sont <strong>exonérés de droits de succession</strong>.' :
           isEs ? 'Con un <strong>legado testamentario</strong> a <strong>Sindrome ReNU Italia APS</strong> (NIF 98020680157) puede destinar parte de su patrimonio a la investigación del Síndrome ReNU (RNU4-2). Los legados a APS italianas están <strong>exentos del impuesto de sucesiones</strong>.' :
           'Mit einem <strong>testamentarischen Vermächtnis</strong> an <strong>Sindrome ReNU Italia APS</strong> (Steuernr. 98020680157) können Sie einen Teil Ihres Vermögens der ReNU-Syndrom-Forschung widmen. Vermächtnisse an italienische APS sind <strong>erbschaftsteuerfrei</strong>.'}
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-8">
        <div class="card card-blue p-7">
          <h2 class="text-xl font-extrabold mb-4" style="color:#082050"><i class="fas fa-file-contract mr-2" style="color:#1078C0"></i>${isIt?'Che cos’è il lascito testamentario?':isEn?'What is a legacy donation?':isFr?'Qu’est-ce qu’un legs testamentaire?':isEs?'¿Qué es un legado testamentario?':'Was ist ein testamentarisches Vermächtnis?'}</h2>
          <p class="text-gray-700 mb-4">${isIt?'Il lascito testamentario è una disposizione con cui, nel proprio testamento, si destina una parte del patrimonio (denaro, immobile, titoli) a un’associazione. Può essere:':'A legacy donation is a testamentary disposition by which part of your estate (money, property, securities) is directed to an organisation. It can be:'}</p>
          <ul class="space-y-2 text-gray-700">
            <li><i class="fas fa-check-circle mr-2" style="color:#1078C0"></i><strong>${isIt?'Universale':'Universal'}</strong>: ${isIt?'l’intera eredità o una quota percentuale':'the entire estate or a percentage share'}</li>
            <li><i class="fas fa-check-circle mr-2" style="color:#1078C0"></i><strong>${isIt?'Particolare':'Particular'}</strong>: ${isIt?'un bene specifico (immobile, somma di denaro, investimenti)':'a specific asset (property, cash sum, investments)'}</li>
          </ul>
        </div>
        <div class="card p-7" style="border-left:4px solid #059669;background:#f0fdf4">
          <h2 class="text-xl font-extrabold mb-4" style="color:#064e3b"><i class="fas fa-percentage mr-2" style="color:#059669"></i>${isIt?'Vantaggi fiscali':'Tax benefits'}</h2>
          <p class="text-gray-700">${isIt?'I lasciti a favore delle Associazioni di Promozione Sociale (APS) come Sindrome ReNU Italia APS sono completamente <strong>esenti da imposta di successione</strong> ai sensi dell’art. 3 del D.Lgs. 346/1990. Non viene tassato né il beneficiario né il lascito stesso.':'Legacies to Social Promotion Associations (APS) like Sindrome ReNU Italia APS are completely <strong>exempt from inheritance tax</strong> under art. 3 of D.Lgs. 346/1990.'}</p>
        </div>
        <div class="card card-blue p-7 text-center">
          <p class="text-gray-600 mb-4">${isIt?'Per informazioni riservate su come fare un lascito:':'For confidential information on legacy donations:'}</p>
          <a href="mailto:donazioni@sindromerenu.it" class="btn btn-primary inline-flex items-center gap-2"><i class="fas fa-envelope"></i>donazioni@sindromerenu.it</a>
          <p class="text-xs text-gray-400 mt-3">${isIt?'Risposta entro 48 ore, massima riservatezza garantita.':'Reply within 48 hours, maximum confidentiality guaranteed.'}</p>
        </div>
        <nav class="mt-8 border-t border-sky-100 pt-6" aria-label="${isIt?'Altre forme di donazione':'Other donation options'}">
          <p class="text-sm font-semibold mb-3" style="color:#082050">${isIt?'Altre forme di donazione:':'Other ways to support us:'}</p>
          <ul class="flex flex-wrap gap-3">
            <li><a href="/${lang}/donations/5x1000" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-receipt text-xs"></i>5×1000</a></li>
            <li><a href="/${lang}/donations/compleanno-solidale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-birthday-cake text-xs"></i>${isIt?'Compleanno Solidale':isEn?'Birthday Fundraising':'Anniversaire Solidaire'}</a></li>
            <li><a href="/${lang}/donations/aziendale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-building text-xs"></i>${isIt?'Donazione Aziendale':isEn?'Corporate Donation':'Don d’Entreprise'}</a></li>
            <li><a href="/${lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${isIt?'Tutte le donazioni':isEn?'All donations':'Toutes les donations'}</a></li>
          </ul>
        </nav>
      </div>`
    return c.html(getHtml(t, 'donations', html, jsonLdDonation))
  })

  // /5x1000 — Destina il 5×1000
  app.get(`/${lang}/donations/5x1000`, async (c) => {
    const base = translations[lang]
    const overrides = await loadTesti(c.env?.DB, lang)
    const config = await loadConfig(c.env?.DB)
    const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
    const BASE = 'https://www.sindromerenu.it'
    const jsonLdDonation = `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebPage",
  "name":"5×1000 a Sindrome ReNU Italia APS — CF 98020680157",
  "description":"${isIt?'Destina il tuo 5×1000 a Sindrome ReNU Italia APS (CF 98020680157). Non ti costa nulla: basta indicare il codice fiscale nella dichiarazione dei redditi. Sostieni la ricerca RNU4-2.':'Donate your 5×1000 to Sindrome ReNU Italia APS (tax code 98020680157). It costs you nothing: just indicate the tax code in your tax return. Support RNU4-2 research.'}",
  "url":"${BASE}/${lang}/donations/5x1000",
  "inLanguage":"${lang}",
  "publisher":{"@type":"NGO","name":"Sindrome ReNU Italia APS","url":"${BASE}","taxID":"98020680157"},
  "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"${BASE}/${lang}/home"},
    {"@type":"ListItem","position":2,"name":"${isIt?'Donazioni':'Donations'}","item":"${BASE}/${lang}/donations"},
    {"@type":"ListItem","position":3,"name":"5×1000","item":"${BASE}/${lang}/donations/5x1000"}
  ]}
}
</script>`
    const html = `
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB;border-color:#1078C0">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${isIt ? 'Il <strong>5×1000</strong> è una quota dell’IRPEF che puoi destinare gratuitamente a <strong>Sindrome ReNU Italia APS</strong> (CF <strong>98020680157</strong>). Non è un costo aggiuntivo: è semplicemente la tua quota di imposta già dovuta, che scegli di indirizzare verso la ricerca sulla Sindrome ReNU (RNU4-2) invece che allo Stato.' :
           isEn ? 'The <strong>5×1000</strong> is a portion of Italian income tax you can direct for free to <strong>Sindrome ReNU Italia APS</strong> (tax code <strong>98020680157</strong>). It costs you nothing extra: it simply redirects your existing tax contribution towards RNU4-2 research.' :
           isFr ? 'Le <strong>5×1000</strong> est une portion de l’impôt sur le revenu que vous pouvez diriger gratuitement vers <strong>Sindrome ReNU Italia APS</strong> (code fiscal <strong>98020680157</strong>). Cela ne vous coûte rien de plus.' :
           isEs ? 'El <strong>5×1000</strong> es una parte del IRPEF italiano que puede destinar gratuitamente a <strong>Sindrome ReNU Italia APS</strong> (NIF <strong>98020680157</strong>). No supone ningún coste adicional.' :
           'Das <strong>5×1000</strong> ist ein Anteil der italienischen Einkommensteuer, den Sie kostenlos an <strong>Sindrome ReNU Italia APS</strong> (Steuernr. <strong>98020680157</strong>) weiterleiten können. Es kostet Sie nichts extra.'}
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-8">
        <div class="card card-blue p-7">
          <h2 class="text-xl font-extrabold mb-6" style="color:#082050"><i class="fas fa-clipboard-list mr-2" style="color:#1078C0"></i>${isIt?'Come fare in 3 passi':'How to do it in 3 steps'}</h2>
          <ol class="space-y-4">
            <li class="flex gap-4"><span class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background:#1078C0">1</span><div><strong>${isIt?'Compila la dichiarazione dei redditi':'File your tax return'}</strong><p class="text-gray-600 text-sm mt-1">${isIt?'730, Modello REDDITI PF, o Modello CU (se dipendente)':'730, REDDITI PF, or CU form (for employees)'}</p></div></li>
            <li class="flex gap-4"><span class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background:#1078C0">2</span><div><strong>${isIt?'Trova la sezione 5×1000':'Find the 5×1000 section'}</strong><p class="text-gray-600 text-sm mt-1">${isIt?'"Sostegno delle organizzazioni non lucrative di utilità sociale, delle associazioni di promozione sociale..."':'"Support for non-profit organisations, social promotion associations..."'}</p></div></li>
            <li class="flex gap-4"><span class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background:#1078C0">3</span><div><strong>${isIt?'Inserisci il codice fiscale':'Enter the tax code'}</strong><p class="text-gray-600 text-sm mt-1"><span class="font-mono text-2xl font-extrabold" style="color:#1078C0">98020680157</span></p></div></li>
          </ol>
        </div>
        <div class="card p-7 text-center" style="border-left:4px solid #059669;background:#f0fdf4">
          <div class="text-5xl font-black mb-2" style="color:#1078C0">98020680157</div>
          <p class="text-gray-500 text-sm">${isIt?'Codice Fiscale Sindrome ReNU Italia APS':'Tax code Sindrome ReNU Italia APS'}</p>
          <p class="text-gray-600 mt-3 text-sm">${isIt?'Puoi anche scannerizzare questo codice o annotarlo sul cellulare per averlo sempre a portata di mano quando compili la dichiarazione.':'You can also save this code on your phone to have it ready when filing your tax return.'}</p>
        </div>
        <nav class="mt-8 border-t border-sky-100 pt-6" aria-label="${isIt?'Altre forme di donazione':'Other donation options'}">
          <p class="text-sm font-semibold mb-3" style="color:#082050">${isIt?'Altre forme di donazione:':'Other ways to support us:'}</p>
          <ul class="flex flex-wrap gap-3">
            <li><a href="/${lang}/donations/lasciti" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-file-contract text-xs"></i>${isIt?'Lascito testamentario':isEn?'Legacy donation':'Legs testamentaire'}</a></li>
            <li><a href="/${lang}/donations/compleanno-solidale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-birthday-cake text-xs"></i>${isIt?'Compleanno Solidale':isEn?'Birthday Fundraising':'Anniversaire Solidaire'}</a></li>
            <li><a href="/${lang}/donations/aziendale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-building text-xs"></i>${isIt?'Donazione Aziendale':isEn?'Corporate Donation':'Don d’Entreprise'}</a></li>
            <li><a href="/${lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${isIt?'Tutte le donazioni':isEn?'All donations':'Toutes les donations'}</a></li>
          </ul>
        </nav>
      </div>`
    return c.html(getHtml(t, 'donations', html, jsonLdDonation))
  })

  // /compleanno-solidale — Compleanno solidale
  app.get(`/${lang}/donations/compleanno-solidale`, async (c) => {
    const base = translations[lang]
    const overrides = await loadTesti(c.env?.DB, lang)
    const config = await loadConfig(c.env?.DB)
    const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
    const BASE = 'https://www.sindromerenu.it'
    const jsonLdDonation = `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebPage",
  "name":"${isIt?'Compleanno Solidale per Sindrome ReNU Italia APS':isEn?'Birthday Fundraising for ReNU Syndrome Italy APS':'Anniversaire Solidaire pour Syndrome ReNU Italie APS'}",
  "description":"${isIt?'Trasforma il tuo compleanno in un atto d’amore per la ricerca sulla Sindrome ReNU. Chiedi ai tuoi amici di donare a Sindrome ReNU Italia APS al posto dei regali.':'Turn your birthday into an act of love for ReNU Syndrome research. Ask your friends to donate to Sindrome ReNU Italia APS instead of gifts.'}",
  "url":"${BASE}/${lang}/donations/compleanno-solidale",
  "inLanguage":"${lang}",
  "publisher":{"@type":"NGO","name":"Sindrome ReNU Italia APS","url":"${BASE}","taxID":"98020680157"}
}
</script>`
    const html = `
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB;border-color:#1078C0">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${isIt ? 'Il <strong>compleanno solidale</strong> è un modo bellissimo per trasformare una festa personale in un gesto concreto a favore della ricerca sulla <strong>Sindrome ReNU (RNU4-2)</strong>. Anziché ricevere regali, puoi chiedere ad amici e familiari di donare a <strong>Sindrome ReNU Italia APS</strong> — anche piccole cifre, moltiplicate per tanti, fanno la differenza.' :
           isEn ? 'A <strong>birthday fundraiser</strong> is a beautiful way to transform a personal celebration into a concrete act of support for <strong>ReNU Syndrome (RNU4-2)</strong> research. Instead of receiving gifts, ask friends and family to donate to <strong>Sindrome ReNU Italia APS</strong>.' :
           isFr ? 'Un <strong>anniversaire solidaire</strong> est une belle façon de transformer une fête personnelle en soutien concret à la recherche sur le <strong>Syndrome ReNU (RNU4-2)</strong>. Au lieu de cadeaux, demandez à vos proches de faire un don à <strong>Sindrome ReNU Italia APS</strong>.' :
           isEs ? 'El <strong>cumpleaños solidario</strong> es una forma preciosa de transformar una celebración personal en apoyo concreto a la investigación del <strong>Síndrome ReNU (RNU4-2)</strong>.' :
           'Ein <strong>solidarischer Geburtstag</strong> ist eine wunderschöne Möglichkeit, eine persönliche Feier in konkrete Unterstützung für die <strong>ReNU-Syndrom-Forschung</strong> zu verwandeln.'}
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-8">
        <div class="card card-blue p-7">
          <h2 class="text-xl font-extrabold mb-4" style="color:#082050"><i class="fas fa-birthday-cake mr-2" style="color:#1078C0"></i>${isIt?'Come organizzare il tuo compleanno solidale':'How to organise your solidarity birthday'}</h2>
          <div class="space-y-4">
            <div class="flex gap-3"><i class="fas fa-share-alt mt-1 flex-shrink-0" style="color:#1078C0"></i><p class="text-gray-700"><strong>${isIt?'Condividi sui social':'Share on social media'}</strong>: ${isIt?'crea un post su Instagram o Facebook con #CompeannoReNU e il link alla pagina donazioni':'create a post on Instagram or Facebook with #BirthdayReNU and a link to the donation page'}</p></div>
            <div class="flex gap-3"><i class="fas fa-link mt-1 flex-shrink-0" style="color:#1078C0"></i><p class="text-gray-700"><strong>${isIt?'Usa un link diretto':'Use a direct link'}</strong>: ${isIt?'condividi il link per il bonifico o la pagina GoFundMe con i tuoi contatti':'share the bank transfer link or a GoFundMe page with your contacts'}</p></div>
            <div class="flex gap-3"><i class="fas fa-envelope mt-1 flex-shrink-0" style="color:#1078C0"></i><p class="text-gray-700"><strong>${isIt?'Scrivici':'Contact us'}</strong>: ${isIt?'per ricevere materiali grafici personalizzati per il tuo compleanno solidale':'to receive customised graphic materials for your solidarity birthday'}</p></div>
          </div>
        </div>
        <div class="card p-7 text-center" style="background:#fef3c7;border-left:4px solid #d97706">
          <i class="fas fa-heart text-4xl mb-3" style="color:#d97706"></i>
          <p class="text-gray-700 font-semibold">${isIt?'Contattaci per organizzare il tuo compleanno solidale':'Contact us to organise your solidarity birthday'}</p>
          <a href="mailto:info@sindromerenu.it" class="btn btn-primary inline-flex items-center gap-2 mt-4"><i class="fas fa-envelope"></i>info@sindromerenu.it</a>
        </div>
        <nav class="mt-8 border-t border-sky-100 pt-6" aria-label="${isIt?'Altre forme di donazione':'Other donation options'}">
          <ul class="flex flex-wrap gap-3">
            <li><a href="/${lang}/donations/lasciti" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-file-contract text-xs"></i>${isIt?'Lascito testamentario':isEn?'Legacy donation':'Legs testamentaire'}</a></li>
            <li><a href="/${lang}/donations/5x1000" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-receipt text-xs"></i>5×1000</a></li>
            <li><a href="/${lang}/donations/aziendale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-building text-xs"></i>${isIt?'Donazione Aziendale':isEn?'Corporate':'Entreprise'}</a></li>
            <li><a href="/${lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${isIt?'Tutte le donazioni':'All donations'}</a></li>
          </ul>
        </nav>
      </div>`
    return c.html(getHtml(t, 'donations', html, jsonLdDonation))
  })

  // /aziendale — Donazione aziendale / Corporate
  app.get(`/${lang}/donations/aziendale`, async (c) => {
    const base = translations[lang]
    const overrides = await loadTesti(c.env?.DB, lang)
    const config = await loadConfig(c.env?.DB)
    const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
    const BASE = 'https://www.sindromerenu.it'
    const jsonLdDonation = `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebPage",
  "name":"${isIt?'Donazione Aziendale a Sindrome ReNU Italia APS':isEn?'Corporate Donation to ReNU Syndrome Italy APS':'Don d\'Entreprise à Syndrome ReNU Italie APS'}",
  "description":"${isIt?'Partnership aziendale e donazioni corporate a Sindrome ReNU Italia APS. Deducibilità fiscale, certificazione, visibilità CSR. CF 98020680157.':'Corporate partnership and donations to Sindrome ReNU Italia APS. Tax deductibility, certification, CSR visibility. Tax code 98020680157.'}",
  "url":"${BASE}/${lang}/donations/aziendale",
  "inLanguage":"${lang}",
  "publisher":{"@type":"NGO","name":"Sindrome ReNU Italia APS","url":"${BASE}","taxID":"98020680157"}
}
</script>`
    const html = `
      <div class="rounded-2xl p-6 mb-8 border-l-4" style="background:#EEF6FB;border-color:#1078C0">
        <p class="text-gray-800 font-semibold text-lg leading-relaxed">
          ${isIt ? 'La <strong>donazione aziendale</strong> a <strong>Sindrome ReNU Italia APS</strong> (CF 98020680157) è deducibile dal reddito imponibile nel limite del <strong>10% del reddito complessivo netto dichiarato</strong>, senza tetto massimo in euro (art. 83 D.Lgs. 117/2017 – Codice del Terzo Settore). L’azienda riceve certificazione formale e visibilità CSR nella comunicazione dell’associazione.' :
           isEn ? 'A <strong>corporate donation</strong> to <strong>Sindrome ReNU Italia APS</strong> (tax code 98020680157) is tax-deductible up to <strong>10% of net declared total income</strong>, with no fixed euro cap (art. 83 D.Lgs. 117/2017 – Third Sector Code). The company receives formal certification and CSR visibility.' :
           isFr ? 'Un <strong>don d’entreprise</strong> à <strong>Sindrome ReNU Italia APS</strong> (code fiscal 98020680157) est déductible fiscalement jusqu’à <strong>10% du revenu net total déclaré</strong>, sans plafond en euros (art. 83 D.Lgs. 117/2017 – Code du Tiers Secteur italien). L’entreprise reçoit une certification formelle et une visibilité RSE.' :
           isEs ? 'Una <strong>donación empresarial</strong> a <strong>Sindrome ReNU Italia APS</strong> (NIF 98020680157) es deducible hasta el <strong>10% de la renta neta total declarada</strong>, sin límite máximo en euros (art. 83 D.Lgs. 117/2017 – Código del Tercer Sector italiano). La empresa recibe certificación formal y visibilidad RSC.' :
           'Eine <strong>Unternehmensspende</strong> an <strong>Sindrome ReNU Italia APS</strong> (St.-Nr. 98020680157) ist steuerlich absetzbar bis zu <strong>10% des netto erklärten Gesamteinkommens</strong>, ohne festen Euro-Höchstbetrag (Art. 83 D.Lgs. 117/2017 – Italienisches Dritter-Sektor-Gesetz). Das Unternehmen erhält eine formelle Bescheinigung und CSR-Sichtbarkeit.'}
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="card p-6 text-center"><i class="fas fa-percent text-3xl mb-3" style="color:#1078C0"></i><h3 class="font-bold mb-2" style="color:#082050">${isIt?'Deducibilità fiscale':'Tax deductibility'}</h3><p class="text-sm text-gray-600">${isIt?'10% del reddito complessivo netto dichiarato, senza tetto massimo in euro (art. 83 D.Lgs. 117/2017)':'Up to 10% of net declared total income, no fixed euro cap (art. 83 D.Lgs. 117/2017)'}</p></div>
          <div class="card p-6 text-center"><i class="fas fa-certificate text-3xl mb-3" style="color:#7C3AED"></i><h3 class="font-bold mb-2" style="color:#082050">${isIt?'Certificazione':'Certification'}</h3><p class="text-sm text-gray-600">${isIt?'Ricevuta fiscale e lettera di ringraziamento formale per la contabilità aziendale':'Tax receipt and formal thank-you letter for corporate accounting'}</p></div>
          <div class="card p-6 text-center"><i class="fas fa-bullhorn text-3xl mb-3" style="color:#059669"></i><h3 class="font-bold mb-2" style="color:#082050">CSR & Visibility</h3><p class="text-sm text-gray-600">${isIt?'Logo aziendale sul sito, nelle pubblicazioni e negli eventi dell’associazione':'Company logo on website, publications and association events'}</p></div>
        </div>
        <div class="card card-blue p-7 text-center">
          <h2 class="text-xl font-extrabold mb-4" style="color:#082050">${isIt?'Contattaci per una partnership':'Contact us for a partnership'}</h2>
          <p class="text-gray-600 mb-4">${isIt?'Scrivici per ricevere il kit partnership completo con le modalità di donazione, la documentazione fiscale e le opportunità di visibilità CSR.':'Write to us to receive the complete partnership kit with donation modalities, tax documentation and CSR visibility opportunities.'}</p>
          <a href="mailto:donazioni@sindromerenu.it" class="btn btn-primary inline-flex items-center gap-2"><i class="fas fa-envelope"></i>donazioni@sindromerenu.it</a>
        </div>
        <nav class="mt-8 border-t border-sky-100 pt-6" aria-label="${isIt?'Altre forme di donazione':'Other donation options'}">
          <ul class="flex flex-wrap gap-3">
            <li><a href="/${lang}/donations/lasciti" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-file-contract text-xs"></i>${isIt?'Lascito testamentario':'Legacy donation'}</a></li>
            <li><a href="/${lang}/donations/5x1000" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-receipt text-xs"></i>5×1000</a></li>
            <li><a href="/${lang}/donations/compleanno-solidale" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-birthday-cake text-xs"></i>${isIt?'Compleanno Solidale':'Birthday Fundraising'}</a></li>
            <li><a href="/${lang}/donations" class="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full" style="background:#EEF6FB;color:#082050"><i class="fas fa-heart text-xs"></i>${isIt?'Tutte le donazioni':'All donations'}</a></li>
          </ul>
        </nav>
      </div>`
    return c.html(getHtml(t, 'donations', html, jsonLdDonation))
  })
}


for (const lang of ['it','en','fr','es','de']) {
  app.get(`/${lang}`, (c) => c.redirect(`/${lang}/home`))
  // Pagine con JSON-LD dinamici già registrate nelle route dedicate sopra
  const skipPages = new Set(['faq', 'events', 'eventi'])
  for (const [page, fn] of Object.entries(pages)) {
    if (skipPages.has(page)) continue
    app.get(`/${lang}/${page}`, async (c) => {
      const base = translations[lang]
      const overrides = await loadTesti(c.env?.DB, lang)
      const config = await loadConfig(c.env?.DB)
      // Inietta i parametri config in t (precedenza bassa, sovrascrivibili da overrides)
      const t = { ...base, ...config, ...(Object.keys(overrides).length > 0 ? overrides : {}) }
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
async function hashIPAsync(ip: string): Promise<string> {
  // SHA-256 crittografico tramite Web Crypto API (GDPR pseudonimizzazione)
  try {
    const encoder = new TextEncoder()
    // Salt fisso per prevenire rainbow table sull'IP
    const data = encoder.encode('renu-ip-salt-2026:' + ip)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    // Restituisce i primi 16 caratteri hex (64 bit) — sufficiente per pseudonimizzazione
    return 'sha2:' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16)
  } catch {
    // Fallback se crypto.subtle non disponibile (non dovrebbe accadere su Cloudflare Workers)
    return 'ip:unavailable'
  }
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
    const cfRaw = san(body.codice_fiscale, 16).toUpperCase().replace(/\s/g, '')
    if (!cfRaw || cfRaw.length < 11) errors.codice_fiscale = 'Codice Fiscale obbligatorio.'

    if (Object.keys(errors).length > 0) {
      return c.json({ success: false, errors }, 400)
    }

    const ipHash = await hashIPAsync(getClientIP(c))
    const db = c.env?.DB

    if (db) {
      // Save to Cloudflare D1
      await db.prepare(`
        INSERT OR IGNORE INTO lista_attesa
        (nome, cognome, email, codice_fiscale, citta, tipo, consenso_gdpr, data_consenso, testo_consenso_versione, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, 1, CURRENT_TIMESTAMP, '2.0', ?)
      `).bind(
        san(body.nome), san(body.cognome), san(body.email, 200),
        cfRaw,
        san(body.citta, 100), san(body.tipo || 'lista_attesa', 50),
        ipHash
      ).run()
    }

    return c.json({
      success: true,
      message: 'Iscrizione completata. Ti contatteremo a breve con le istruzioni per il versamento della quota annuale di 25€.',
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

    const ipHash = await hashIPAsync(getClientIP(c))
    const db = c.env?.DB

    if (db) {
      const oggettoFinal = body.sono_familiare
        ? '[FAMILIARE] ' + san(body.oggetto || 'Contatto familiare dal sito', 200)
        : san(body.oggetto || 'Contatto dal sito', 200)
      await db.prepare(`
        INSERT INTO contatti
        (nome, email, oggetto, messaggio, consenso_gdpr, data_consenso, testo_consenso_versione, ip_hash)
        VALUES (?, ?, ?, ?, 1, CURRENT_TIMESTAMP, '2.0', ?)
      `).bind(
        san(body.nome), san(body.email, 200),
        oggettoFinal,
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
<style>
body{font-family:system-ui,sans-serif}
.modal{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.5);overflow-y:auto}
.modal.open{display:flex;align-items:flex-start;justify-content:center;padding:2rem 1rem}
.modal-box{background:#fff;border-radius:1rem;padding:2rem;width:100%;max-width:680px;margin:auto}
textarea{min-height:80px}
.tab-btn.active{background:#1e40af!important;color:#fff!important}
</style>
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

<!-- MODAL FORM -->
<div id="modal" class="modal">
  <div class="modal-box">
    <div class="flex items-center justify-between mb-4">
      <h3 id="modalTitle" class="text-lg font-bold text-gray-800"></h3>
      <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
    </div>
    <form id="modalForm" onsubmit="return false">
      <div id="modalFields" class="space-y-3"></div>
      <div class="flex gap-3 mt-5 pt-4 border-t">
        <button id="modalSaveBtn" onclick="saveRecord()" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl">
          <i class="fas fa-save mr-2"></i>Salva
        </button>
        <button onclick="closeModal()" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl">
          Annulla
        </button>
      </div>
    </form>
  </div>
</div>

<!-- HEADER -->
<nav class="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-xl">
  <div class="flex items-center gap-3">
    <i class="fas fa-shield-alt text-2xl text-blue-300"></i>
    <div>
      <div class="font-bold text-lg">Pannello Admin GDPR</div>
      <div class="text-xs text-blue-200">Sindrome ReNU Italia APS – v3.0</div>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <span id="dbBadge" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-full">DB: –</span>
    <span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">GDPR v2.0</span>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-6">
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

  <!-- TABS GRUPPO 1: Iscrizioni/Contatti -->
  <div class="mb-1 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
    <i class="fas fa-users mr-1"></i>Iscrizioni &amp; Contatti
  </div>
  <div class="flex gap-2 flex-wrap mb-2">
    <button data-t="adesioni"  onclick="showTab('adesioni')"  class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-users mr-1"></i>Adesioni</button>
    <button data-t="contatti"  onclick="showTab('contatti')"  class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-envelope mr-1"></i>Contatti</button>
    <button data-t="lista"     onclick="showTab('lista')"     class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-clock mr-1"></i>Lista Attesa</button>
    <button data-t="donazioni" onclick="showTab('donazioni')" class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-heart mr-1"></i>Donazioni</button>
    <button data-t="audit"     onclick="showTab('audit')"     class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-history mr-1"></i>Audit Log</button>
    <button data-t="erasure"   onclick="showErasure()"        class="tab-btn bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-trash mr-1"></i>Cancella Dati</button>
  </div>

  <!-- TABS GRUPPO 2: Contenuti -->
  <div class="mb-1 text-xs font-bold text-gray-500 uppercase tracking-widest px-1 mt-4">
    <i class="fas fa-database mr-1"></i>Gestione Contenuti
  </div>
  <div class="flex gap-2 flex-wrap mb-6">
    <button data-t="faq"          onclick="showCrudTab('faq')"          class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-question-circle mr-1"></i>FAQ</button>
    <button data-t="news"         onclick="showCrudTab('news')"         class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-newspaper mr-1"></i>News</button>
    <button data-t="pubblicazioni" onclick="showCrudTab('pubblicazioni')" class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-flask mr-1"></i>Pubblicazioni</button>
    <button data-t="storie"       onclick="showCrudTab('storie')"       class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-book-open mr-1"></i>Storie</button>
    <button data-t="brochure"     onclick="showCrudTab('brochure')"     class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-file-pdf mr-1"></i>Brochure</button>
    <button data-t="gallery"      onclick="showCrudTab('gallery')"      class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-images mr-1"></i>Gallery</button>
    <button data-t="eventi"       onclick="showCrudTab('eventi')"       class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-calendar-alt mr-1"></i>Eventi</button>
    <button data-t="testi_ui"     onclick="showTestiUI()"               class="tab-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-language mr-1"></i>Testi Pagine</button>
    <button data-t="config"       onclick="showConfig()"                class="tab-btn bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-cog mr-1"></i>Impostazioni</button>
  </div>

  <!-- CONTENT AREA -->
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
let currentCrudTab = '';
let currentEditId = null;

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

function setActiveTab(name){
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active','bg-blue-600','text-white');
    if(!b.classList.contains('bg-red-100'))
      b.className = b.className.replace('bg-blue-600 text-white','').replace('active','').trim();
    b.classList.add('bg-gray-200','text-gray-700');
  });
  const btn = document.querySelector('[data-t="'+name+'"]');
  if(btn){
    btn.classList.remove('bg-gray-200','text-gray-700');
    btn.classList.add('bg-blue-600','text-white','active');
  }
}

async function showTab(name){
  setActiveTab(name);
  currentCrudTab = '';
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
      const short = v.length > 60 ? v.substring(0,60)+'…' : v;
      html += '<td class="px-3 py-2 text-gray-700 max-w-xs" title="'+v.replace(/"/g,'&quot;')+'">'+short+'</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div><div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t flex justify-between">'
    + '<span><i class="fas fa-lock mr-1 text-green-600"></i>'+data.length+' record · accesso registrato audit log GDPR</span>'
    + '<a href="'+cfg.url+'" target="_blank" class="text-blue-600 hover:underline">Esporta JSON</a>'
    + '</div>';
  document.getElementById('content').innerHTML = html;
}

// ─── CRUD CONTENUTI ────────────────────────────────────────────────────────────

const CRUD_CONFIG = {
  faq: {
    label: 'FAQ',
    icon: 'fa-question-circle',
    color: 'indigo',
    // Schema produzione: domanda_it/en, risposta_it/en, attiva
    cols: ['id','categoria','domanda_it','domanda_en','ordine','attiva'],
    fields: [
      {name:'categoria',   label:'Categoria',   type:'select', opts:['diagnosi','terapie','comunita','ricerca','medici','diritti','scuola','bonus']},
      {name:'domanda_it',  label:'Domanda IT',  type:'text',   req:true},
      {name:'domanda_en',  label:'Domanda EN',  type:'text'},
      {name:'risposta_it', label:'Risposta IT', type:'textarea', req:true},
      {name:'risposta_en', label:'Risposta EN', type:'textarea'},
      {name:'ordine',      label:'Ordine',      type:'number', def:0},
      {name:'attiva',      label:'Attiva',      type:'select', opts:['1','0']},
    ]
  },
  news: {
    label: 'News',
    icon: 'fa-newspaper',
    color: 'green',
    cols: ['id','created_at','categoria','titolo_it','pubblicata'],
    fields: [
      {name:'titolo_it',  label:'Titolo IT',  type:'text',     req:true},
      {name:'titolo_en',  label:'Titolo EN',  type:'text'},
      {name:'testo_it',   label:'Testo IT',   type:'textarea', req:true},
      {name:'testo_en',   label:'Testo EN',   type:'textarea'},
      {name:'categoria',  label:'Categoria',  type:'select', opts:['notizia','comunicato','ricerca','evento']},
      {name:'pubblicata', label:'Pubblicata', type:'select', opts:['1','0']},
    ]
  },
  pubblicazioni: {
    label: 'Pubblicazioni',
    icon: 'fa-flask',
    color: 'purple',
    cols: ['id','anno','autori','titolo','badge','ordine'],
    fields: [
      {name:'autori',    label:'Autori',       type:'text', req:true},
      {name:'anno',      label:'Anno',         type:'number', req:true},
      {name:'titolo',    label:'Titolo',       type:'text', req:true},
      {name:'rivista',   label:'Rivista',      type:'text'},
      {name:'pmid',      label:'PMID',         type:'text'},
      {name:'doi',       label:'DOI/URL',      type:'text'},
      {name:'sintesi_it',label:'Sintesi IT',   type:'textarea'},
      {name:'sintesi_en',label:'Sintesi EN',   type:'textarea'},
      {name:'badge',     label:'Badge',        type:'text'},
      {name:'ordine',    label:'Ordine',       type:'number', def:0},
    ]
  },
  storie: {
    label: 'Storie',
    icon: 'fa-book-open',
    color: 'orange',
    cols: ['id','nome','nazione','flag','tipo','attiva','ordine'],
    fields: [
      {name:'nome',      label:'Nome',       type:'text', req:true},
      {name:'img_url',   label:'URL Immagine', type:'text'},
      {name:'nazione',   label:'Nazione (2 lettere)', type:'text', def:'IT'},
      {name:'flag',      label:'Flag emoji', type:'text', def:'🇮🇹'},
      {name:'url_storia',label:'URL Storia', type:'text'},
      {name:'desc_it',   label:'Descrizione IT', type:'textarea'},
      {name:'desc_en',   label:'Descrizione EN', type:'textarea'},
      {name:'desc_fr',   label:'Descrizione FR', type:'textarea'},
      {name:'desc_es',   label:'Descrizione ES', type:'textarea'},
      {name:'desc_de',   label:'Descrizione DE', type:'textarea'},
      {name:'tipo',      label:'Tipo', type:'select', opts:['italiana','internazionale']},
      {name:'consenso_firmato', label:'Consenso firmato', type:'select', opts:['1','0']},
      {name:'ordine',    label:'Ordine', type:'number', def:0},
      {name:'attiva',    label:'Attiva', type:'select', opts:['1','0']},
    ]
  },
  brochure: {
    label: 'Brochure',
    icon: 'fa-file-pdf',
    color: 'red',
    cols: ['id','category','file_name','titolo_it','ordine','attiva'],
    fields: [
      {name:'category',  label:'Categoria', type:'select', opts:['brochure','pubblicazione']},
      {name:'file_name', label:'URL o Nome file PDF', type:'text', req:true},
      {name:'img_url',   label:'URL Immagine copertina', type:'text'},
      {name:'thumb_id',  label:'Thumb ID (Cloudflare Images)', type:'text'},
      {name:'titolo_it', label:'Titolo IT', type:'text', req:true},
      {name:'titolo_en', label:'Titolo EN', type:'text'},
      {name:'titolo_fr', label:'Titolo FR', type:'text'},
      {name:'titolo_es', label:'Titolo ES', type:'text'},
      {name:'titolo_de', label:'Titolo DE', type:'text'},
      {name:'desc_it',   label:'Descrizione IT', type:'text'},
      {name:'desc_en',   label:'Descrizione EN', type:'text'},
      {name:'ordine',    label:'Ordine', type:'number', def:0},
      {name:'attiva',    label:'Attiva', type:'select', opts:['1','0']},
    ]
  },
  gallery: {
    label: 'Gallery',
    icon: 'fa-images',
    color: 'pink',
    cols: ['id','img_url','pagina','didascalia_it','ordine','attiva'],
    fields: [
      {name:'img_url',       label:'URL Immagine', type:'text', req:true},
      {name:'didascalia_it', label:'Didascalia IT', type:'text'},
      {name:'didascalia_en', label:'Didascalia EN', type:'text'},
      {name:'pagina',        label:'Pagina', type:'select', opts:['community','home','about','ricerca']},
      {name:'ordine',        label:'Ordine', type:'number', def:0},
      {name:'attiva',        label:'Attiva', type:'select', opts:['1','0']},
      {name:'consenso',      label:'Consenso genitori', type:'select', opts:['1','0']},
    ]
  },
  eventi: {
    label: 'Eventi',
    icon: 'fa-calendar-alt',
    color: 'teal',
    cols: ['id','titolo_it','data_evento','luogo','stato','categoria','attivo'],
    fields: [
      {name:'titolo_it', label:'Titolo IT', type:'text', req:true},
      {name:'titolo_en', label:'Titolo EN', type:'text'},
      {name:'titolo_fr', label:'Titolo FR', type:'text'},
      {name:'titolo_es', label:'Titolo ES', type:'text'},
      {name:'titolo_de', label:'Titolo DE', type:'text'},
      {name:'data_evento', label:'Data (YYYY-MM-DD)', type:'text'},
      {name:'luogo',     label:'Luogo', type:'text'},
      {name:'desc_it',   label:'Descrizione IT', type:'textarea'},
      {name:'desc_en',   label:'Descrizione EN', type:'textarea'},
      {name:'img_url',   label:'URL Immagine', type:'text'},
      {name:'url_esterno', label:'URL Esterno', type:'text'},
      {name:'categoria', label:'Categoria', type:'select', opts:['incontro','maratona','webinar','conferenza','altro']},
      {name:'stato',     label:'Stato', type:'select', opts:['in_definizione','confermato','passato','annullato']},
      {name:'ordine',    label:'Ordine', type:'number', def:0},
      {name:'attivo',    label:'Attivo', type:'select', opts:['1','0']},
    ]
  }
};

async function showCrudTab(name){
  setActiveTab(name);
  currentCrudTab = name;
  const cfg = CRUD_CONFIG[name];
  if(!cfg) return;
  document.getElementById('content').innerHTML = '<div class="p-8 text-center"><i class="fas fa-spinner fa-spin text-3xl text-blue-400"></i></div>';
  const r = await fetch('/api/admin/'+name, {headers: H()});
  if(!r.ok){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-red-500">Errore: token non valido?</div>';
    return;
  }
  const data = await r.json();
  const cols = cfg.cols;
  let html = \`<div class="p-4 flex items-center justify-between border-b">
    <h2 class="font-bold text-lg text-gray-800"><i class="fas \${cfg.icon} mr-2 text-blue-500"></i>\${cfg.label} <span class="text-gray-400 text-sm font-normal">(\${data.length} record)</span></h2>
    <button onclick="openCreate()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
      <i class="fas fa-plus mr-1"></i>Nuovo
    </button>
  </div>
  <div class="overflow-x-auto">
  <table class="w-full text-xs">
  <thead class="bg-gray-50 border-b"><tr>
    <th class="px-3 py-3 text-left font-semibold text-gray-600">Azioni</th>\`;
  cols.forEach(k => { html += \`<th class="px-3 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">\${k}</th>\`; });
  html += '</tr></thead><tbody>';
  if(!data.length){
    html += '<tr><td colspan="'+(cols.length+1)+'" class="px-4 py-8 text-center text-gray-400">Nessun record</td></tr>';
  }
  data.forEach((row,i) => {
    html += '<tr class="'+(i%2?'bg-gray-50':'')+' border-b hover:bg-blue-50">';
    html += \`<td class="px-3 py-2 whitespace-nowrap">
      <button onclick='openEdit(\${row.id})' class="bg-amber-100 hover:bg-amber-200 text-amber-700 px-2 py-1 rounded text-xs mr-1"><i class="fas fa-edit"></i></button>
      <button onclick='deleteRecord(\${row.id})' class="bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded text-xs"><i class="fas fa-trash"></i></button>
    </td>\`;
    cols.forEach(k => {
      const v = row[k] !== null && row[k] !== undefined ? String(row[k]) : '–';
      const short = v.length > 50 ? v.substring(0,50)+'…' : v;
      html += '<td class="px-3 py-2 text-gray-700" title="'+v.replace(/"/g,'&quot;')+'">'+short+'</td>';
    });
    html += '</tr>';
  });
  html += \`</tbody></table></div>
  <div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t">
    <i class="fas fa-lock mr-1 text-green-600"></i>\${data.length} record · DB D1
  </div>\`;
  document.getElementById('content').innerHTML = html;
  // salva dati per edit
  window._crudData = data;
}

function openCreate(){
  if(!currentCrudTab) return;
  currentEditId = null;
  const cfg = CRUD_CONFIG[currentCrudTab];
  document.getElementById('modalTitle').textContent = 'Nuovo – '+cfg.label;
  renderFields(cfg.fields, null);
  document.getElementById('modal').classList.add('open');
}

function openEdit(id){
  if(!currentCrudTab) return;
  const cfg = CRUD_CONFIG[currentCrudTab];
  const row = (window._crudData||[]).find(r=>r.id===id);
  if(!row) return;
  currentEditId = id;
  document.getElementById('modalTitle').textContent = 'Modifica – '+cfg.label+' #'+id;
  renderFields(cfg.fields, row);
  document.getElementById('modal').classList.add('open');
}

function renderFields(fields, row){
  const container = document.getElementById('modalFields');
  container.innerHTML = fields.map(f => {
    const val = row ? (row[f.name] !== null && row[f.name] !== undefined ? String(row[f.name]) : '') : (f.def !== undefined ? String(f.def) : '');
    let input = '';
    if(f.type === 'textarea'){
      input = \`<textarea id="f_\${f.name}" name="\${f.name}" rows="3" class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400">\${val.replace(/</g,'&lt;')}</textarea>\`;
    } else if(f.type === 'select'){
      const opts = f.opts.map(o => \`<option value="\${o}" \${val===o?'selected':''}>\${o}</option>\`).join('');
      input = \`<select id="f_\${f.name}" name="\${f.name}" class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400">\${opts}</select>\`;
    } else {
      input = \`<input type="\${f.type||'text'}" id="f_\${f.name}" name="\${f.name}" value="\${val.replace(/"/g,'&quot;')}" class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400" \${f.req?'required':''}>\`;
    }
    return \`<div>
      <label class="block text-xs font-semibold text-gray-600 mb-1">\${f.label}\${f.req?' <span class=\\'text-red-500\\'>*</span>':''}</label>
      \${input}
    </div>\`;
  }).join('');
}

async function saveRecord(){
  if(!currentCrudTab) return;
  const cfg = CRUD_CONFIG[currentCrudTab];
  const body = {};
  cfg.fields.forEach(f => {
    const el = document.getElementById('f_'+f.name);
    if(el) body[f.name] = el.value;
  });
  let url = '/api/admin/'+currentCrudTab;
  let method = 'POST';
  if(currentEditId){
    url += '/'+currentEditId;
    method = 'PUT';
  }
  const r = await fetch(url, {method, headers: H(), body: JSON.stringify(body)});
  const d = await r.json();
  if(r.ok && d.success){
    closeModal();
    showCrudTab(currentCrudTab);
  } else {
    alert('Errore: '+(d.error||'unknown'));
  }
}

async function deleteRecord(id){
  if(!currentCrudTab) return;
  if(!confirm('Eliminare il record #'+id+'?')) return;
  const r = await fetch('/api/admin/'+currentCrudTab+'/'+id, {method:'DELETE', headers: H()});
  const d = await r.json();
  if(r.ok && d.success){
    showCrudTab(currentCrudTab);
  } else {
    alert('Errore eliminazione: '+(d.error||'unknown'));
  }
}

function closeModal(){
  document.getElementById('modal').classList.remove('open');
  currentEditId = null;
}
document.getElementById('modal').addEventListener('click', e => { if(e.target===e.currentTarget) closeModal(); });

function showErasure(){
  setActiveTab('erasure');
  currentCrudTab = '';
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

// ─── TESTI UI ────────────────────────────────────────────────────────────────
// Mappa chiave → etichetta leggibile per l'interfaccia admin
const TESTI_LABELS = {
  title:'Titolo sito', subtitle:'Sottotitolo', tagline:'Tagline header',
  hero_text:'Hero – testo principale', hero_desc:'Hero – descrizione casi',
  btn_diagnosis:'Pulsante CTA donazioni', btn_diagnosis_sub:'Pulsante CTA donazioni – sub',
  btn_info:'Pulsante CTA info', btn_info_sub:'Pulsante CTA info – sub',
  section_map_title:'Card Mappa – titolo', section_map_desc:'Card Mappa – desc',
  section_awareness_title:'Card Consapevolezza – titolo', section_awareness_desc:'Card Consapevolezza – desc',
  section_science_title:'Card Comitato – titolo', section_science_desc:'Card Comitato – desc',
  section_research_title:'Card Approfondimenti – titolo', section_research_desc:'Card Approfondimenti – desc',
  section_info_title:'Card Info ReNU \u2013 titolo', section_info_desc:'Card Info ReNU \u2013 desc',
  section_parents_title:'Card Genitori – titolo', section_parents_desc:'Card Genitori – desc',
  section_donations_title:'Card Donazioni – titolo', section_donations_desc:'Card Donazioni – desc',
  about_title:'About – titolo', about_gene:'About – paragrafo gene',
  about_discovery:'About – titolo scoperta', about_discovery_text:'About – testo scoperta',
  about_features_title:'About – titolo caratteristiche',
  about_brain:'About – anomalie cerebrali', about_brain_items:'About – anomalie cerebrali (lista)',
  about_development:'About – disabilità intellettiva', about_development_items:'About – disabilità (lista)',
  about_seizures:'About – epilessia', about_seizures_items:'About – epilessia (lista)',
  about_vision:'About – problemi visivi', about_vision_items:'About – visivi (lista)',
  about_face:'About – caratteristiche viso', about_face_items:'About – viso (lista)',
  about_muscle:'About – tono muscolare', about_muscle_items:'About – muscolare (lista)',
  about_mobility:'About – mobilità', about_mobility_items:'About – mobilità (lista)',
  about_growth:'About – crescita', about_growth_items:'About – crescita (lista)',
  about_feeding:'About – alimentazione', about_feeding_items:'About – alimentazione (lista)',
  about_communication:'About – comunicazione', about_communication_items:'About – comunicazione (lista)',
  about_bones:'About – problemi ossei', about_bones_items:'About – ossei (lista)',
  about_happy:'About – nota carattere felice', about_diagnosis_note:'About – nota diagnostica WGS',
  research_title:'Ricerca – titolo', research_intro:'Ricerca – intro',
  research_crid:'Ricerca – testo CRID', research_priorities_title:'Ricerca – priorità comunità',
  therapies_title:'Terapie – titolo', therapies_intro:'Terapie – intro', therapies_note:'Terapie – nota disclaimer',
  diagnosis_title:'Diagnosi – titolo', diagnosis_intro:'Diagnosi – intro', diagnosis_contact:'Diagnosi – contatto',
  community_title:'Comunità – titolo', community_intro:'Comunità – intro',
  community_network_it:'Comunità – rete genitori titolo', community_network_desc:'Comunità – rete genitori desc',
  donations_title:'Donazioni – titolo', donations_intro:'Donazioni – intro',
  donations_iban:'Donazioni – IBAN', donations_iban_label:'Donazioni – intestatario',
  contact_title:'Contatti – titolo', contact_intro:'Contatti – intro',
  brochure_title:'Media – titolo', brochure_intro:'Media – intro',
  science_title:'Comitato – titolo', science_intro:'Comitato – intro',
  science_role1_title:'Comitato – ruolo 1 titolo', science_role1_desc:'Comitato – ruolo 1 desc',
  science_role2_title:'Comitato – ruolo 2 titolo', science_role2_desc:'Comitato – ruolo 2 desc',
  science_role3_title:'Comitato – ruolo 3 titolo', science_role3_desc:'Comitato – ruolo 3 desc',
  science_role4_title:'Comitato – ruolo 4 titolo', science_role4_desc:'Comitato – ruolo 4 desc',
  science_role5_title:'Comitato – ruolo 5 titolo', science_role5_desc:'Comitato – ruolo 5 desc',
  science_members_title:'Comitato – titolo membri', science_members_note:'Comitato – nota membri',
  science_cta:'Comitato – CTA collabora',
  coe_title:'COE – titolo', coe_desc:'COE – descrizione',
  world_title:'Mondo – titolo', world_desc:'Mondo – desc paesi',
  footer_rights:'Footer – copyright', footer_partnership:'Footer – partnership', footer_tagline:'Footer – tagline',
  intl_network:'Rete Internazionale',
};

// Raggruppa le chiavi per area tematica
const TESTI_GROUPS = [
  { label:'🏠 Generali & Header',  keys:['title','subtitle','tagline','hero_text','hero_desc','btn_diagnosis','btn_diagnosis_sub','btn_info','btn_info_sub','footer_rights','footer_partnership','footer_tagline'] },
  { label:'🃏 Card Sezioni Home',   keys:['section_map_title','section_map_desc','section_awareness_title','section_awareness_desc','section_science_title','section_science_desc','section_research_title','section_research_desc','section_info_title','section_info_desc','section_parents_title','section_parents_desc','section_donations_title','section_donations_desc'] },
  { label:'ℹ️ Pagina About',        keys:['about_title','about_gene','about_discovery','about_discovery_text','about_features_title','about_brain','about_brain_items','about_development','about_development_items','about_seizures','about_seizures_items','about_vision','about_vision_items','about_face','about_face_items','about_muscle','about_muscle_items','about_mobility','about_mobility_items','about_growth','about_growth_items','about_feeding','about_feeding_items','about_communication','about_communication_items','about_bones','about_bones_items','about_happy','about_diagnosis_note'] },
  { label:'🔬 Ricerca & Terapie',   keys:['research_title','research_intro','research_priorities_title','therapies_title','therapies_intro','therapies_note','diagnosis_title','diagnosis_intro','diagnosis_contact'] },
  { label:'👨‍👩‍👧 Comunità & Donazioni', keys:['community_title','community_intro','community_network_it','community_network_desc','donations_title','donations_intro','donations_iban','donations_iban_label','contact_title','contact_intro','brochure_title','brochure_intro'] },
  { label:'🧪 Comitato Scientifico', keys:['science_title','science_intro','science_role1_title','science_role1_desc','science_role2_title','science_role2_desc','science_role3_title','science_role3_desc','science_role4_title','science_role4_desc','science_role5_title','science_role5_desc','science_members_title','science_members_note','science_cta'] },
  { label:'🌍 Rete & Footer',        keys:['coe_title','coe_desc','world_title','world_desc','intl_network'] },
];

let _testiData = [];     // cache locale dati caricati dal server
let _testiModified = {}; // {chiave: valore} modifiche non ancora salvate

async function showTestiUI(){
  setActiveTab('testi_ui');
  currentCrudTab = 'testi_ui';
  document.getElementById('content').innerHTML = '<div class="p-8 text-center"><i class="fas fa-spinner fa-spin text-3xl text-blue-400"></i></div>';
  const r = await fetch('/api/admin/testi_ui?lang=it', {headers: H()});
  if(!r.ok){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-red-500">Errore caricamento – token non valido?</div>';
    return;
  }
  _testiData = await r.json();
  _testiModified = {};
  renderTestiUI();
}

function renderTestiUI(){
  // Mappa chiave→valore corrente
  const dbMap = {};
  _testiData.forEach(row => { dbMap[row.chiave] = row.valore; });

  let html = \`
  <div class="p-4 flex items-center justify-between border-b sticky top-0 bg-white z-10">
    <h2 class="font-bold text-lg text-gray-800">
      <i class="fas fa-language mr-2 text-blue-500"></i>Testi Pagine IT
      <span class="text-gray-400 text-sm font-normal ml-1">(\${_testiData.length} voci)</span>
    </h2>
    <div class="flex items-center gap-3">
      <span id="testiSaveCounter" class="hidden text-xs bg-amber-100 text-amber-700 border border-amber-300 px-3 py-1 rounded-full font-semibold">
        <i class="fas fa-circle-dot mr-1"></i><span id="testiModCount">0</span> modifiche non salvate
      </span>
      <button onclick="saveAllTesti()" id="testiSaveBtn"
              class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold">
        <i class="fas fa-save mr-1"></i>Salva tutto
      </button>
    </div>
  </div>
  <div class="p-4 bg-amber-50 border-b border-amber-200 text-xs text-amber-800">
    <i class="fas fa-info-circle mr-1"></i>
    <b>Solo italiano (IT).</b> Le altre lingue (EN/FR/ES/DE) restano nel codice. Modifica il testo e clicca <b>Salva tutto</b>.
    Il sito si aggiorna <b>immediatamente</b> al prossimo caricamento pagina, senza necessità di deploy.
    Solo testo normale — la formattazione (grassetti, link) è gestita automaticamente dal codice.
  </div>
  <div class="divide-y">\`;

  TESTI_GROUPS.forEach(group => {
    html += \`<details open class="group">
      <summary class="px-4 py-3 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold text-sm text-gray-700 flex items-center gap-2 select-none">
        <i class="fas fa-chevron-down text-xs transition-transform group-open:rotate-0 -rotate-90 text-gray-400"></i>
        \${group.label}
        <span class="text-gray-400 font-normal text-xs ml-1">(\${group.keys.length} voci)</span>
      </summary>
      <div class="divide-y">\`;

    group.keys.forEach(chiave => {
      const label = TESTI_LABELS[chiave] || chiave;
      const val   = dbMap[chiave] !== undefined ? dbMap[chiave] : '';
      // Testo lungo → textarea, corto → input
      const isLong = val.length > 80 || chiave.endsWith('_desc') || chiave.endsWith('_intro')
        || chiave.endsWith('_text') || chiave.endsWith('_items') || chiave.endsWith('_note')
        || chiave.endsWith('_gene') || chiave.endsWith('_crid') || chiave === 'hero_text'
        || chiave === 'hero_desc' || chiave === 'about_happy' || chiave === 'world_desc';
      const escaped = val.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      const escapedAttr = val.replace(/"/g,'&quot;');
      const field = isLong
        ? \`<textarea id="testo_\${chiave}" rows="3"
              class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-300 font-mono resize-y"
              oninput="markTestiModified('\${chiave}')">\${escaped}</textarea>\`
        : \`<input type="text" id="testo_\${chiave}" value="\${escapedAttr}"
              class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-300 font-mono"
              oninput="markTestiModified('\${chiave}')">\`;
      html += \`<div class="px-4 py-3 hover:bg-blue-50 transition-colors" id="testo_row_\${chiave}">
        <label class="block text-xs font-semibold text-gray-500 mb-1">
          <code class="bg-gray-100 text-gray-600 px-1 rounded text-xs">\${chiave}</code>
          <span class="ml-2 text-gray-700">\${label}</span>
        </label>
        \${field}
      </div>\`;
    });

    html += '</div></details>';
  });

  html += \`</div>
  <div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t flex justify-between items-center">
    <span><i class="fas fa-lock mr-1 text-green-600"></i>Testi salvati su Cloudflare D1 · effetto immediato senza deploy</span>
    <span class="text-gray-400">Solo IT – per EN/FR/ES/DE modificare src/index.tsx</span>
  </div>\`;

  document.getElementById('content').innerHTML = html;
}

function markTestiModified(chiave){
  const el = document.getElementById('testo_' + chiave);
  if(!el) return;
  _testiModified[chiave] = el.tagName === 'TEXTAREA' ? el.value : el.value;
  // Colora la riga
  const row = document.getElementById('testo_row_' + chiave);
  if(row) row.classList.add('bg-amber-50');
  // Aggiorna contatore
  const count = Object.keys(_testiModified).length;
  document.getElementById('testiModCount').textContent = count;
  document.getElementById('testiSaveCounter').classList.toggle('hidden', count === 0);
}

async function saveAllTesti(){
  const btn = document.getElementById('testiSaveBtn');
  const keys = Object.keys(_testiModified);
  if(!keys.length){
    // Salva TUTTO anche se non modificato (utile per primo salvataggio)
    const allKeys = [];
    TESTI_GROUPS.forEach(g => g.keys.forEach(k => allKeys.push(k)));
    allKeys.forEach(k => {
      const el = document.getElementById('testo_' + k);
      if(el) _testiModified[k] = el.tagName === 'TEXTAREA' ? el.value : el.value;
    });
  }
  const items = Object.entries(_testiModified).map(([chiave, valore]) => ({chiave, lang:'it', valore}));
  if(!items.length){ alert('Nessuna modifica da salvare.'); return; }
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>Salvataggio...';
  const r = await fetch('/api/admin/testi_ui/bulk', {
    method:'POST', headers: H(), body: JSON.stringify(items)
  });
  const d = await r.json();
  btn.disabled = false;
  if(r.ok && d.success){
    btn.innerHTML = '<i class="fas fa-check mr-1"></i>Salvato!';
    btn.className = btn.className.replace('bg-blue-600 hover:bg-blue-700','bg-green-600');
    // Rimuovi highlight righe
    Object.keys(_testiModified).forEach(k => {
      const row = document.getElementById('testo_row_' + k);
      if(row) row.classList.remove('bg-amber-50');
    });
    _testiModified = {};
    document.getElementById('testiSaveCounter').classList.add('hidden');
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-save mr-1"></i>Salva tutto';
      btn.className = btn.className.replace('bg-green-600','bg-blue-600 hover:bg-blue-700');
    }, 2500);
  } else {
    alert('Errore: ' + (d.error || 'unknown'));
    btn.innerHTML = '<i class="fas fa-save mr-1"></i>Salva tutto';
  }
}

// ─── IMPOSTAZIONI (CONFIG) ────────────────────────────────────────────────────
async function showConfig(){
  setActiveTab('config');
  currentCrudTab = 'config';
  const cont = document.getElementById('content');
  cont.innerHTML = '<div class="p-8 text-center"><i class="fas fa-spinner fa-spin text-3xl text-amber-400"></i></div>';
  const r = await fetch('/api/admin/config', {headers: H()});
  if(!r.ok){ cont.innerHTML = '<div class="p-8 text-red-500">Errore caricamento – token non valido?</div>'; return; }
  const items = await r.json();
  let html = '<div class="p-6"><h2 class="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2"><i class="fas fa-cog text-amber-500"></i>Impostazioni Sito</h2>'
    + '<p class="text-sm text-gray-500 mb-5">Parametri dinamici aggiornabili senza toccare il codice. Il valore viene letto dal DB a ogni caricamento pagina.</p>'
    + '<div class="space-y-4">';
  for(const item of items){
    html += '<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col gap-2">'
      + '<div class="flex items-center justify-between">'
      + '<span class="font-mono text-sm font-bold text-amber-700">' + item.chiave + '</span>'
      + '<span class="text-xs text-gray-400">Aggiornato: ' + (item.updated_at||'–') + '</span>'
      + '</div>'
      + (item.descrizione ? '<p class="text-xs text-gray-600">' + item.descrizione + '</p>' : '')
      + '<div class="flex items-center gap-3 mt-1">'
      + '<input id="cfg_' + item.chiave + '" type="text" value="' + (item.valore||'') + '" class="flex-1 border border-amber-300 rounded-lg px-3 py-2 text-sm font-semibold" placeholder="Valore…">'
      + '<button onclick="saveConfig(&quot;' + item.chiave + '&quot;)" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">'
      + '<i class="fas fa-save mr-1"></i>Salva</button>'
      + '</div>'
      + '</div>';
  }
  html += '</div></div>';
  cont.innerHTML = html;
}

async function saveConfig(chiave){
  const inp = document.getElementById('cfg_' + chiave);
  if(!inp) return;
  const valore = inp.value.trim();
  const r = await fetch('/api/admin/config/' + chiave, {
    method:'PUT', headers: H(),
    body: JSON.stringify({valore})
  });
  const d = await r.json();
  if(r.ok && d.success){
    inp.style.background = '#d1fae5';
    setTimeout(() => { inp.style.background = ''; }, 2000);
  } else {
    alert('Errore: ' + (d.error||'unknown'));
  }
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
      const r = await db.prepare('SELECT id,created_at,nome,cognome,email,codice_fiscale,citta,tipo,come_conosciuto,consenso_gdpr,data_consenso FROM lista_attesa WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
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

// ─── API CONTENUTI PUBBLICHE ──────────────────────────────────────────────────

// GET /api/faq?lang=it
// Schema produzione: domanda_it/en, risposta_it/en, attiva, ordine
// GEO-AI: tutte le 5 lingue con fallback su IT; restituisce fonte per citabilità AI
app.get('/api/faq', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    // Per fr/es/de usa domanda_it/risposta_it come fallback (unico schema DB)
    const dCol = lang === 'en' ? 'domanda_en' : 'domanda_it'
    const rCol = lang === 'en' ? 'risposta_en' : 'risposta_it'
    // Fallback: se domanda/risposta nella lingua richiesta è vuota, usa it
    const r = await db.prepare(
      'SELECT id, categoria, ordine, ' +
      'COALESCE(NULLIF(' + dCol + ',\'\'), NULLIF(domanda_it,\'\')) as domanda, ' +
      'COALESCE(NULLIF(' + rCol + ',\'\'), NULLIF(risposta_it,\'\')) as risposta ' +
      'FROM faq WHERE attiva=1 ORDER BY ordine ASC, id ASC'
    ).all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})

// GET /api/news?lang=it&limit=20
app.get('/api/news', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const limit = parseInt(c.req.query('limit') || '20')
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare(`
      SELECT id, created_at, categoria,
             titolo_${lang==='en'?'en':'it'} as titolo,
             testo_${lang==='en'?'en':'it'} as testo
      FROM news WHERE pubblicata=1 ORDER BY created_at DESC LIMIT ?
    `).bind(limit).all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})

// GET /api/pubblicazioni?lang=it
app.get('/api/pubblicazioni', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare(`
      SELECT id, autori, anno, titolo, rivista, pmid, doi, badge, ordine,
             ${lang==='en'?'sintesi_en':'sintesi_it'} as sintesi
      FROM pubblicazioni ORDER BY ordine ASC, anno DESC, id DESC
    `).all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})


// GET /api/storie?lang=it&tipo=italiana
app.get('/api/storie', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const tipo = c.req.query('tipo') || ''
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const col = lang==='en'?'en':lang==='fr'?'fr':lang==='es'?'es':lang==='de'?'de':'it'
    // fallback a cascata: lingua richiesta → it → en → NULL (nessun hardcode)
    const descExpr = col==='it'
      ? `COALESCE(NULLIF(desc_it,''), NULLIF(desc_en,''))`
      : col==='en'
      ? `COALESCE(NULLIF(desc_en,''), NULLIF(desc_it,''))`
      : `COALESCE(NULLIF(desc_${col},''), NULLIF(desc_it,''), NULLIF(desc_en,''))`
    let sql = `SELECT id, nome, img_url, nazione, flag, url_storia, tipo, ordine,
                      ${descExpr} as desc FROM storie WHERE attiva=1`
    if (tipo) sql += ` AND tipo=?`
    sql += ` ORDER BY ordine ASC, id ASC`
    const stmt = tipo ? db.prepare(sql).bind(tipo) : db.prepare(sql)
    const r = await stmt.all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})

// GET /api/brochure?lang=it
app.get('/api/brochure', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const col = lang==='en'?'en':lang==='fr'?'fr':lang==='es'?'es':lang==='de'?'de':'it'
    const titoloExpr = col==='it'
      ? `COALESCE(NULLIF(titolo_it,''), NULLIF(titolo_en,''))`
      : col==='en'
      ? `COALESCE(NULLIF(titolo_en,''), NULLIF(titolo_it,''))`
      : `COALESCE(NULLIF(titolo_${col},''), NULLIF(titolo_it,''), NULLIF(titolo_en,''))`
    const descExpr2 = col==='it'
      ? `COALESCE(NULLIF(desc_it,''), NULLIF(desc_en,''))`
      : col==='en'
      ? `COALESCE(NULLIF(desc_en,''), NULLIF(desc_it,''))`
      : `COALESCE(NULLIF(desc_${col},''), NULLIF(desc_it,''), NULLIF(desc_en,''))`
    const r = await db.prepare(`
      SELECT id, file_name, thumb_id, ordine,
             COALESCE(NULLIF(category,''), 'brochure') as category,
             img_url,
             ${titoloExpr} as titolo,
             ${descExpr2} as desc
      FROM brochure WHERE attiva=1 ORDER BY category ASC, ordine ASC, id ASC
    `).all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})

// GET /api/gallery?pagina=community
app.get('/api/gallery', async (c) => {
  const pagina = c.req.query('pagina') || 'community'
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare(`
      SELECT id, img_url, ordine,
             ${lang==='en'?'didascalia_en':'didascalia_it'} as didascalia
      FROM gallery WHERE attiva=1 AND pagina=? ORDER BY ordine ASC, id ASC
    `).bind(pagina).all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})

// GET /api/eventi?lang=it&stato=confermato
app.get('/api/eventi', async (c) => {
  const lang = (c.req.query('lang') || 'it').toLowerCase()
  const stato = c.req.query('stato') || ''
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const col = lang==='en'?'en':lang==='fr'?'fr':lang==='es'?'es':lang==='de'?'de':'it'
    let sql = `SELECT id, data_evento, luogo, stato, categoria, img_url, url_esterno, ordine,
                      titolo_${col} as titolo,
                      desc_${col==='it'?'it':'en'} as desc
               FROM eventi WHERE attivo=1`
    if (stato) sql += ` AND stato=?`
    sql += ` ORDER BY COALESCE(data_evento,'9999') ASC, ordine ASC`
    const stmt = stato ? db.prepare(sql).bind(stato) : db.prepare(sql)
    const r = await stmt.all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})


// ─── API ADMIN CONTENUTI (CRUD) ───────────────────────────────────────────────

// ── FAQ ADMIN ──────────────────────────────────────────────────────────────────
app.get('/api/admin/faq', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM faq ORDER BY ordine ASC, id ASC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/faq', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    // Schema produzione: domanda_it/en, risposta_it/en, attiva
    const r = await db.prepare(
      'INSERT INTO faq (categoria, domanda_it, domanda_en, risposta_it, risposta_en, ordine, attiva) VALUES (?,?,?,?,?,?,?)'
    ).bind(b.categoria||'',b.domanda_it||'',b.domanda_en||'',b.risposta_it||'',b.risposta_en||'',b.ordine||0,b.attiva??1).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/faq/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    // Schema produzione: domanda_it/en, risposta_it/en, attiva
    await db.prepare(
      'UPDATE faq SET categoria=?, domanda_it=?, domanda_en=?, risposta_it=?, risposta_en=?, ordine=?, attiva=? WHERE id=?'
    ).bind(b.categoria||'',b.domanda_it||'',b.domanda_en||'',b.risposta_it||'',b.risposta_en||'',b.ordine||0,b.attiva??1,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/faq/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM faq WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── NEWS ADMIN ────────────────────────────────────────────────────────────────
app.get('/api/admin/news', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM news ORDER BY created_at DESC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/news', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO news (titolo_it,titolo_en,testo_it,testo_en,categoria,pubblicata)
       VALUES (?,?,?,?,?,?)`
    ).bind(b.titolo_it||'',b.titolo_en||'',b.testo_it||'',b.testo_en||'',b.categoria||'notizia',b.pubblicata??0).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/news/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE news SET titolo_it=?,titolo_en=?,testo_it=?,testo_en=?,categoria=?,pubblicata=? WHERE id=?`
    ).bind(b.titolo_it||'',b.titolo_en||'',b.testo_it||'',b.testo_en||'',b.categoria||'notizia',b.pubblicata??0,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/news/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM news WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── PUBBLICAZIONI ADMIN ───────────────────────────────────────────────────────
app.get('/api/admin/pubblicazioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM pubblicazioni ORDER BY ordine ASC, anno DESC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/pubblicazioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO pubblicazioni (autori,anno,titolo,rivista,pmid,doi,sintesi_it,sintesi_en,badge,ordine)
       VALUES (?,?,?,?,?,?,?,?,?,?)`
    ).bind(b.autori||'',b.anno||new Date().getFullYear(),b.titolo||'',b.rivista||'',b.pmid||'',b.doi||'',b.sintesi_it||'',b.sintesi_en||'',b.badge||'',b.ordine||0).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/pubblicazioni/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE pubblicazioni SET autori=?,anno=?,titolo=?,rivista=?,pmid=?,doi=?,sintesi_it=?,sintesi_en=?,badge=?,ordine=? WHERE id=?`
    ).bind(b.autori||'',b.anno||0,b.titolo||'',b.rivista||'',b.pmid||'',b.doi||'',b.sintesi_it||'',b.sintesi_en||'',b.badge||'',b.ordine||0,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/pubblicazioni/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM pubblicazioni WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── STORIE ADMIN ──────────────────────────────────────────────────────────────
app.get('/api/admin/storie', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM storie ORDER BY ordine ASC, id ASC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/storie', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO storie (nome,img_url,nazione,flag,url_storia,desc_it,desc_en,desc_fr,desc_es,desc_de,tipo,consenso_firmato,ordine,attiva)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    ).bind(b.nome||'',b.img_url||null,b.nazione||'IT',b.flag||'🇮🇹',b.url_storia||null,b.desc_it||'',b.desc_en||'',b.desc_fr||'',b.desc_es||'',b.desc_de||'',b.tipo||'italiana',b.consenso_firmato??0,b.ordine||0,b.attiva??1).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/storie/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE storie SET nome=?,img_url=?,nazione=?,flag=?,url_storia=?,desc_it=?,desc_en=?,desc_fr=?,desc_es=?,desc_de=?,tipo=?,consenso_firmato=?,ordine=?,attiva=? WHERE id=?`
    ).bind(b.nome||'',b.img_url||null,b.nazione||'IT',b.flag||'🇮🇹',b.url_storia||null,b.desc_it||'',b.desc_en||'',b.desc_fr||'',b.desc_es||'',b.desc_de||'',b.tipo||'italiana',b.consenso_firmato??0,b.ordine||0,b.attiva??1,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/storie/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM storie WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── BROCHURE ADMIN ────────────────────────────────────────────────────────────
app.get('/api/admin/brochure', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM brochure ORDER BY ordine ASC, id ASC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/brochure', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO brochure (file_name,thumb_id,img_url,category,titolo_it,titolo_en,titolo_fr,titolo_es,titolo_de,desc_it,desc_en,ordine,attiva)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`
    ).bind(b.file_name||'',b.thumb_id||'',b.img_url||'',b.category||'brochure',b.titolo_it||'',b.titolo_en||'',b.titolo_fr||'',b.titolo_es||'',b.titolo_de||'',b.desc_it||'',b.desc_en||'',b.ordine||0,b.attiva??1).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/brochure/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE brochure SET file_name=?,thumb_id=?,img_url=?,category=?,titolo_it=?,titolo_en=?,titolo_fr=?,titolo_es=?,titolo_de=?,desc_it=?,desc_en=?,ordine=?,attiva=? WHERE id=?`
    ).bind(b.file_name||'',b.thumb_id||'',b.img_url||'',b.category||'brochure',b.titolo_it||'',b.titolo_en||'',b.titolo_fr||'',b.titolo_es||'',b.titolo_de||'',b.desc_it||'',b.desc_en||'',b.ordine||0,b.attiva??1,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/brochure/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM brochure WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── GALLERY ADMIN ─────────────────────────────────────────────────────────────
app.get('/api/admin/gallery', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM gallery ORDER BY pagina ASC, ordine ASC, id ASC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/gallery', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO gallery (img_url,didascalia_it,didascalia_en,pagina,ordine,attiva,consenso)
       VALUES (?,?,?,?,?,?,?)`
    ).bind(b.img_url||'',b.didascalia_it||'',b.didascalia_en||'',b.pagina||'community',b.ordine||0,b.attiva??1,b.consenso??0).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/gallery/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE gallery SET img_url=?,didascalia_it=?,didascalia_en=?,pagina=?,ordine=?,attiva=?,consenso=? WHERE id=?`
    ).bind(b.img_url||'',b.didascalia_it||'',b.didascalia_en||'',b.pagina||'community',b.ordine||0,b.attiva??1,b.consenso??0,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/gallery/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM gallery WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ── EVENTI ADMIN ──────────────────────────────────────────────────────────────
app.get('/api/admin/eventi', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json([])
  try {
    const r = await db.prepare('SELECT * FROM eventi ORDER BY COALESCE(data_evento,"9999") ASC, ordine ASC').all()
    return c.json(r.results)
  } catch(e: any) { return c.json([]) }
})
app.post('/api/admin/eventi', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const b = await c.req.json() as any
    const r = await db.prepare(
      `INSERT INTO eventi (titolo_it,titolo_en,titolo_fr,titolo_es,titolo_de,data_evento,luogo,desc_it,desc_en,img_url,url_esterno,categoria,stato,ordine,attivo)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    ).bind(b.titolo_it||'',b.titolo_en||'',b.titolo_fr||'',b.titolo_es||'',b.titolo_de||'',b.data_evento||null,b.luogo||'',b.desc_it||'',b.desc_en||'',b.img_url||null,b.url_esterno||null,b.categoria||'incontro',b.stato||'in_definizione',b.ordine||0,b.attivo??1).run()
    return c.json({ success: true, id: r.meta.last_row_id })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.put('/api/admin/eventi/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const id = parseInt(c.req.param('id'))
    const b = await c.req.json() as any
    await db.prepare(
      `UPDATE eventi SET titolo_it=?,titolo_en=?,titolo_fr=?,titolo_es=?,titolo_de=?,data_evento=?,luogo=?,desc_it=?,desc_en=?,img_url=?,url_esterno=?,categoria=?,stato=?,ordine=?,attivo=? WHERE id=?`
    ).bind(b.titolo_it||'',b.titolo_en||'',b.titolo_fr||'',b.titolo_es||'',b.titolo_de||'',b.data_evento||null,b.luogo||'',b.desc_it||'',b.desc_en||'',b.img_url||null,b.url_esterno||null,b.categoria||'incontro',b.stato||'in_definizione',b.ordine||0,b.attivo??1,id).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})
app.delete('/api/admin/eventi/:id', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    await db.prepare('DELETE FROM eventi WHERE id=?').bind(parseInt(c.req.param('id'))).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ─── ADMIN: TESTI UI ────────────────────────────────────────────────────────
// GET  /api/admin/testi_ui?lang=it  → array [{chiave, lang, valore, updated_at}]
// PUT  /api/admin/testi_ui/:chiave  → {chiave, lang, valore}  upsert singola chiave
// POST /api/admin/testi_ui/bulk     → [{chiave, lang, valore}]  upsert massivo

app.get('/api/admin/testi_ui', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  const lang = c.req.query('lang') || 'it'
  try {
    const r = await db.prepare(
      'SELECT chiave, lang, valore, updated_at FROM testi_ui WHERE lang=? ORDER BY chiave'
    ).bind(lang).all()
    return c.json(r.results)
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

app.put('/api/admin/testi_ui/:chiave', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  const chiave = c.req.param('chiave')
  try {
    const body = await c.req.json() as { lang?: string; valore?: string }
    const lang   = body.lang  || 'it'
    const valore = body.valore ?? ''
    await db.prepare(
      `INSERT INTO testi_ui (chiave, lang, valore, updated_at)
       VALUES (?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(chiave, lang) DO UPDATE SET valore=excluded.valore, updated_at=excluded.updated_at`
    ).bind(chiave, lang, valore).run()
    return c.json({ success: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

app.post('/api/admin/testi_ui/bulk', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const items = await c.req.json() as { chiave: string; lang: string; valore: string }[]
    if (!Array.isArray(items)) return c.json({ error: 'Array atteso' }, 400)
    const stmts = items.map(i =>
      db.prepare(
        `INSERT INTO testi_ui (chiave, lang, valore, updated_at)
         VALUES (?, ?, ?, CURRENT_TIMESTAMP)
         ON CONFLICT(chiave, lang) DO UPDATE SET valore=excluded.valore, updated_at=excluded.updated_at`
      ).bind(i.chiave, i.lang || 'it', i.valore ?? '')
    )
    await db.batch(stmts)
    return c.json({ success: true, count: stmts.length })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// ─── CONFIG API ────────────────────────────────────────────────────────────────
// GET /api/config/:chiave — lettura pubblica di un parametro
app.get('/api/config/:chiave', async (c) => {
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  const chiave = c.req.param('chiave')
  try {
    const r = await db.prepare(`SELECT valore FROM config WHERE chiave=?`).bind(chiave).first()
    if (!r) return c.json({ error: 'Chiave non trovata' }, 404)
    return c.json({ chiave, valore: (r as any).valore })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// GET /api/admin/config — lista tutti i parametri (admin)
app.get('/api/admin/config', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  try {
    const r = await db.prepare(`SELECT chiave, valore, descrizione, updated_at FROM config ORDER BY chiave`).all()
    return c.json(r.results)
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// PUT /api/admin/config/:chiave — aggiorna un parametro (admin)
app.put('/api/admin/config/:chiave', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (!db) return c.json({ error: 'DB non disponibile' }, 500)
  const chiave = c.req.param('chiave')
  try {
    const body = await c.req.json() as { valore: string; descrizione?: string }
    await db.prepare(
      `INSERT INTO config (chiave, valore, descrizione, updated_at)
       VALUES (?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(chiave) DO UPDATE SET valore=excluded.valore,
         descrizione=COALESCE(excluded.descrizione, config.descrizione),
         updated_at=CURRENT_TIMESTAMP`
    ).bind(chiave, body.valore ?? '', body.descrizione ?? null).run()
    return c.json({ success: true, chiave, valore: body.valore })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

export default app
