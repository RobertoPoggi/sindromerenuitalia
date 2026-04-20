import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

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
    hero_text: 'RNU4-2 emerge come una delle principali cause di disturbi rari del neurosviluppo – <strong>Rinnovando la Speranza per le Famiglie</strong>',
    hero_desc: 'La Sindrome ReNU è un disturbo spliceosomale con un hotspot mutazionale definito e un dataset globale crescente. Attualmente sono <strong>~250 i casi accertati nel mondo</strong> (12-14 in Italia), ma la stima del potenziale non diagnosticato è molto più alta: le varianti patogene si concentrano in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a> degli oltre 3 miliardi di paia di basi del genoma!',
    nav_home: 'Home', nav_about: 'Cos\'è ReNU', nav_research: 'Ricerca',
    nav_therapies: 'Terapie', nav_diagnosis: 'Diagnosi', nav_community: 'Comunità',
    nav_donations: 'Donazioni', nav_contact: 'Contatti', nav_brochure: 'Brochure',
    btn_diagnosis: 'VUOI UNA DIAGNOSI? CLICCA QUI',
    btn_diagnosis_sub: 'Elenco indirizzi in Italia dove puoi fare il testing',
    section_map_title: 'Registrati qui',
    section_map_desc: 'La forza è nei numeri! Aggiungi un tuo caro con ReNU alla mappa mondiale per aumentare la consapevolezza.',
    section_awareness_title: 'Aumenta la Consapevolezza',
    section_awareness_desc: 'Partecipa o sostieni gli eventi ReNU Speranza per diffondere la consapevolezza!',
    section_research_title: 'Ricerca',
    section_research_desc: 'Partecipa ora per accelerare la ricerca e lo sviluppo di nuovi farmaci o terapie!',
    section_info_title: 'Maggiori Informazioni',
    section_info_desc: 'Scopri come si manifesta la ReNU, le caratteristiche tipiche e come viene influenzato lo sviluppo.',
    section_parents_title: 'Connessione tra Genitori',
    section_parents_desc: 'Non sei solo! Trova speranza e comunità con genitori di tutto il mondo.',
    section_donations_title: 'Donazioni',
    section_donations_desc: 'Promuovere la ricerca, costruire comunità e diffondere la consapevolezza. Ogni contributo fa la differenza!',
    about_title: 'Cos\'è la Sindrome ReNU?',
    about_gene: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2, un gene dell\'RNA non codificante componente critico del macchinario di splicing dell\'RNA. È altamente conservato evolutivamente.',
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
    research_title: 'Ricerca sulla Sindrome ReNU',
    research_intro: 'TU puoi far avanzare la ricerca verso opzioni di trattamento per ReNU!',
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, crea un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID di Ricerca Clinica (CRID)</a>! Condividi il tuo CRID con ogni studio clinico a cui partecipi.',
    research_priorities_title: 'Cosa è importante per la comunità RNU4-2?',
    therapies_title: 'Terapie per la Sindrome ReNU',
    therapies_intro: 'Molti servizi terapeutici sono utilizzati per aiutare le persone con Sindrome ReNU',
    therapies_note: 'Questo sito non approva né raccomanda terapie specifiche. Consultare sempre un medico.',
    diagnosis_title: 'Dove fare il Test Diagnostico in Italia',
    diagnosis_intro: 'Per ricevere informazioni sui centri diagnostici disponibili in Italia, contattaci.',
    diagnosis_contact: 'Per informazioni sui centri WGS in Italia, scrivici a:',
    community_title: 'Comunità – Connessione tra Famiglie',
    community_intro: 'Non sei solo! Trova speranza e comunità con altre famiglie. Famiglie RNU4-2 mappate in oltre 38 paesi del mondo.',
    donations_title: 'Sostienici con una Donazione',
    donations_intro: 'Le tue donazioni ci permettono di promuovere la ricerca e costruire la comunità italiana.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Intestato a: Sindrome ReNU Italia APS',
    contact_title: 'Contattaci',
    contact_intro: 'Siamo a tua disposizione per qualsiasi informazione sulla Sindrome ReNU Italia.',
    brochure_title: 'Scarica le nostre Brochure',
    brochure_intro: 'Scarica e condividi le brochure informative di Sindrome ReNU Italia APS',
    brochure_download: 'Scarica PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Tutti i diritti riservati.',
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
    nav_donations: 'Donations', nav_contact: 'Contact', nav_brochure: 'Brochures',
    btn_diagnosis: 'WANT A DIAGNOSIS? CLICK HERE',
    btn_diagnosis_sub: 'List of addresses in Italy where you can get tested',
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
    donations_title: 'Support Us with a Donation',
    donations_intro: 'Your donations allow us to promote research and build the Italian community.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Account holder: Sindrome ReNU Italia APS',
    contact_title: 'Contact Us',
    contact_intro: 'We are available for any information about ReNU Syndrome Italy.',
    brochure_title: 'Download our Brochures',
    brochure_intro: 'Download and share the informational brochures of Sindrome ReNU Italia APS',
    brochure_download: 'Download PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. All rights reserved.',
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
    btn_diagnosis: 'VOUS VOULEZ UN DIAGNOSTIC? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Liste des adresses en Italie où vous pouvez faire le test',
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
    donations_title: 'Soutenez-nous avec un don',
    donations_intro: 'Vos dons nous permettent de promouvoir la recherche.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titulaire: Sindrome ReNU Italia APS',
    contact_title: 'Contactez-nous',
    contact_intro: 'Nous sommes disponibles pour toute information.',
    brochure_title: 'Télécharger nos brochures',
    brochure_intro: 'Téléchargez et partagez les brochures de Sindrome ReNU Italia APS',
    brochure_download: 'Télécharger PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Tous droits réservés.',
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
    btn_diagnosis: '¿QUIERES UN DIAGNÓSTICO? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Lista de direcciones en Italia donde puedes hacerte la prueba',
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
    donations_title: 'Apóyanos con una donación',
    donations_intro: 'Tus donaciones nos permiten promover la investigación.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titular: Sindrome ReNU Italia APS',
    contact_title: 'Contáctenos',
    contact_intro: 'Estamos disponibles para cualquier información.',
    brochure_title: 'Descarga nuestros folletos',
    brochure_intro: 'Descarga y comparte los folletos de Sindrome ReNU Italia APS',
    brochure_download: 'Descargar PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Todos los derechos reservados.',
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
    btn_diagnosis: 'MÖCHTEN SIE EINE DIAGNOSE? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Adressen in Italien, wo Sie den Test machen können',
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
    donations_title: 'Unterstützen Sie uns mit einer Spende',
    donations_intro: 'Ihre Spenden ermöglichen uns die Forschungsförderung.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Kontoinhaber: Sindrome ReNU Italia APS',
    contact_title: 'Kontaktieren Sie uns',
    contact_intro: 'Wir stehen für alle Informationen zur Verfügung.',
    brochure_title: 'Broschüren herunterladen',
    brochure_intro: 'Laden Sie die Informationsbroschüren von Sindrome ReNU Italia APS herunter',
    brochure_download: 'PDF herunterladen',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Alle Rechte vorbehalten.',
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
  const langSwitcher = langs.map(l => `
    <a href="/${l}/${page}" class="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors ${t.lang === l ? 'bg-white bg-opacity-25 ring-2 ring-sky-300' : ''}" title="${translations[l].langName}">
      <span class="text-lg leading-none">${flags[l]}</span>
    </a>`).join('')

  const navItems = [
    { key: 'nav_home', page: 'home', icon: 'fa-home' },
    { key: 'nav_about', page: 'about', icon: 'fa-dna' },
    { key: 'nav_research', page: 'research', icon: 'fa-microscope' },
    { key: 'nav_therapies', page: 'therapies', icon: 'fa-heartbeat' },
    { key: 'nav_diagnosis', page: 'diagnosis', icon: 'fa-stethoscope' },
    { key: 'nav_community', page: 'community', icon: 'fa-users' },
    { key: 'nav_donations', page: 'donations', icon: 'fa-heart' },
    { key: 'nav_brochure', page: 'brochure', icon: 'fa-file-pdf' },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope' },
  ]
  const navLinks = navItems.map(item => `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-sm font-medium whitespace-nowrap ${page === item.page ? 'bg-white bg-opacity-25 shadow-inner' : ''}">
      <i class="fas ${item.icon} text-xs opacity-80"></i>
      <span class="hidden xl:inline">${t[item.key]}</span>
    </a>`).join('')

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.tagline}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
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
    body { font-family: 'Inter', sans-serif; background-color: var(--bg); }

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

    /* ── Mobile menu ── */
    .mobile-menu { display: none; }
    .mobile-menu.open { display: block; }

    html { scroll-behavior: smooth; }
    img  { max-width:100%; height:auto; }

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

<!-- ── TOP ANNOUNCEMENT BAR ── -->
<div class="stat-bar text-white text-center text-xs py-2 px-4 font-medium">
  <i class="fas fa-dna mr-2 text-sky-300"></i>
  ${t.lang==='it' ? '🔬 Interesse farmaceutico attivo per ReNU Syndrome — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Iscriviti su Citizen Health in 5 minuti</a>' : 
    t.lang==='en' ? '🔬 Active pharmaceutical research interest in ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Sign up on Citizen Health in 5 minutes</a>' :
    t.lang==='fr' ? '🔬 Intérêt pharmaceutique actif pour ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Inscrivez-vous sur Citizen Health</a>' :
    t.lang==='es' ? '🔬 Interés farmacéutico activo en ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Regístrate en Citizen Health</a>' :
    '🔬 Aktives pharmazeutisches Forschungsinteresse an ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Bei Citizen Health anmelden</a>'}
</div>

<!-- ── NAVBAR ── -->
<header class="text-white shadow-xl sticky top-0 z-50" style="background: linear-gradient(90deg, #082050 0%, #1078C0 60%, #45B8EC 100%);">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="/${t.lang}/home" class="flex items-center gap-3 flex-shrink-0">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-12 w-auto drop-shadow-lg">
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-0.5 overflow-x-auto">
        ${navLinks}
      </nav>

      <!-- Lang + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <div class="flex items-center gap-1">${langSwitcher}</div>
        <button id="mobileBtn" class="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileMenu" class="mobile-menu pb-3 md:hidden">
      <nav class="flex flex-col gap-1">
        ${navItems.map(i => `
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
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
          <a href="https://www.instagram.com/rnu4_2_family/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
      <!-- Contacts -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Email & Tel.</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[['info','Info Generali'],['donazioni','Donazioni'],['segreteria','Segreteria'],['presidenza','Presidenza']].map(([e,l]) => `
          <li><a href="mailto:${e}@sindromerenu.it" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-envelope text-xs"></i>${e}@sindromerenu.it</a></li>`).join('')}
          <li class="pt-1"><a href="tel:+393357301206" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-phone text-xs"></i>+39 335 730 1206</a></li>
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
      ${t.footer_rights} &nbsp;|&nbsp; Codice Fiscale / P.IVA: [in fase di registrazione]
    </div>
  </div>
</footer>

<script>
  document.getElementById('mobileBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('open')
  })
</script>
</body>
</html>`
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function homePage(t: Record<string, string>): string {
  const cards = [
    { href: 'https://form.jotform.com/250154538972159', ext: true,   icon: 'fa-map-marker-alt', ic: 'ic-blue',   title: t.section_map_title,       desc: t.section_map_desc,       accent: 'card-blue',   img: '/images/renu_map.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-bullhorn',       ic: 'ic-purple', title: t.section_awareness_title,  desc: t.section_awareness_desc,  accent: 'card-purple', img: '/images/renu_awareness.jpg' },
    { href: `/${t.lang}/research`,                                    icon: 'fa-microscope',     ic: 'ic-sky',    title: t.section_research_title,   desc: t.section_research_desc,   accent: 'card-sky',    img: '/images/renu_research.jpg' },
    { href: `/${t.lang}/about`,                                       icon: 'fa-info-circle',    ic: 'ic-navy',   title: t.section_info_title,       desc: t.section_info_desc,       accent: 'card-navy',   img: '/images/renu_info.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-users',          ic: 'ic-green',  title: t.section_parents_title,    desc: t.section_parents_desc,    accent: 'card-green',  img: '/images/renu_parents.jpg' },
    { href: `/${t.lang}/donations`,                                   icon: 'fa-heart',          ic: 'ic-red',    title: t.section_donations_title,  desc: t.section_donations_desc,  accent: 'card-red',    img: '/images/renu_donations.jpg' },
  ]
  return `
  <!-- HERO -->
  <section class="hero-gradient text-white py-20 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 text-sky-100">
            <i class="fas fa-dna text-sky-300"></i> ${t.tagline}
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">${t.hero_text}</h1>
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed max-w-2xl">${t.hero_desc}</p>
          <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
              <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
            </a>
            <a href="/${t.lang}/research" class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-microscope"></i>${t.section_research_title}
            </a>
          </div>
          <p class="text-sky-200 text-sm mt-3">${t.btn_diagnosis_sub}</p>
        </div>
        <div class="flex-shrink-0 hidden md:block">
          <div class="img-frame w-80 xl:w-96">
            <img src="/images/renu_hero.jpg" alt="ReNU Syndrome" class="w-full h-56 object-cover">
          </div>
          <div class="mt-4 img-frame w-80 xl:w-96">
            <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="w-full h-28 object-cover">
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
        ${t.lang==='it'?'Come puoi partecipare':t.lang==='en'?'How you can get involved':t.lang==='fr'?'Comment vous impliquer':t.lang==='es'?'Cómo puedes participar':'So können Sie mitmachen'}
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
          <div class="img-frame"><img src="/images/famiglie.png" alt="Famiglie ReNU" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/bambini.png" alt="Bambini ReNU" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/mani.png" alt="Mani Unite" class="w-full h-36 object-cover"></div>
          <div class="img-frame"><img src="/images/festa.png" alt="Insieme" class="w-full h-36 object-cover"></div>
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
        <!-- Awareness card -->
        <div class="card card-sky overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_awareness.jpg" alt="ReNU Awareness" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Iniziative di Sensibilizzazione':t.lang==='en'?'Awareness Initiatives':t.lang==='fr'?'Initiatives de sensibilisation':t.lang==='es'?'Iniciativas de Sensibilización':'Bewusstseinsinitiativen'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Unisciti alle iniziative globali per diffondere la consapevolezza sulla Sindrome ReNU e mostrare supporto alle famiglie.':t.lang==='en'?'Join global initiatives to spread awareness about ReNU Syndrome and show support for families.':'Rejoignez les initiatives mondiales pour sensibiliser au syndrome ReNU.'}
            </p>
            <a href="https://www.renusyndrome.org/awareness-initiatives" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#45B8EC">
              <i class="fas fa-external-link-alt"></i>${t.learn_more}
            </a>
          </div>
        </div>
        <!-- Gallery card -->
        <div class="card card-blue overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_gallery.jpg" alt="ReNU Gallery" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Galleria Internazionale':t.lang==='en'?'International Gallery':t.lang==='fr'?'Galerie Internationale':t.lang==='es'?'Galería Internacional':'Internationale Galerie'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Scopri le storie straordinarie dei bambini e delle famiglie che vivono con la Sindrome ReNU in tutto il mondo.':t.lang==='en'?'Discover the extraordinary stories of children and families living with ReNU Syndrome around the world.':'Découvrez les histoires de familles vivant avec le syndrome ReNU.'}
            </p>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.lang==='it'?'Visita Galleria':t.lang==='en'?'Visit Gallery':'Galerie'}
            </a>
          </div>
        </div>
        <!-- Map card -->
        <div class="card card-navy overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_map.jpg" alt="Mappa ReNU" class="w-full h-full object-cover">
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
          ${t.lang==='it'?'Storie di Famiglie con ReNU':t.lang==='en'?'Stories from ReNU Families':t.lang==='fr'?'Histoires de familles ReNU':t.lang==='es'?'Historias de Familias ReNU':'Geschichten von ReNU-Familien'}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.lang==='it'?'Storie reali da tutto il mondo, dalla community di ReNU Syndrome United':t.lang==='en'?'Real stories from around the world, from the ReNU Syndrome United community':t.lang==='fr'?'Histoires réelles du monde entier':'Historias reales de todo el mundo'}
        </p>
      </div>
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
        <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="h-24 w-auto object-cover">
      </div>
      <div class="flex-1 text-white text-center sm:text-left">
        <h3 class="text-xl font-extrabold mb-1">Move 4 ReNU</h3>
        <p class="text-sky-200 text-sm">${t.lang==='it'?'Muoviti per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU!':t.lang==='en'?'Move to raise funds and spread awareness about ReNU Syndrome!':'Bewegt euch, um Spenden und Bewusstsein zu wecken!'}</p>
      </div>
      <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank" 
         class="flex-shrink-0 inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-white font-bold px-6 py-3 rounded-full transition-colors">
        <i class="fas fa-running"></i>Move 4 ReNU
      </a>
    </div>
  </section>

  <!-- CITIZEN HEALTH BANNER -->
  <section class="py-16 px-4 section-pale">
    <div class="max-w-5xl mx-auto">
      <div class="rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, #1078C0 0%, #45B8EC 100%);">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="p-10 text-white">
            <div class="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <i class="fas fa-flask text-yellow-300"></i>
              ${t.lang==='it'?'Ricerca Farmaceutica Attiva!':t.lang==='en'?'Active Pharmaceutical Research!':t.lang==='fr'?'Recherche Pharmaceutique Active!':t.lang==='es'?'¡Investigación Farmacéutica Activa!':'Aktive pharmazeutische Forschung!'}
            </div>
            <h2 class="text-2xl font-extrabold mb-4">Citizen Health × ReNU</h2>
            <p class="text-sky-100 mb-6 leading-relaxed">
              ${t.lang==='it'?'Abbiamo interesse farmaceutico attivo per la Sindrome ReNU! Collaboriamo con Citizen Health per rendere la partecipazione semplice per le famiglie – solo 5 minuti! I tuoi dati reali contribuiscono a studi critici di storia naturale.':
                t.lang==='en'?'We have active pharmaceutical research interest in ReNU Syndrome! We\'ve partnered with Citizen Health to make participation as easy as possible – just 5 minutes! Your real-world data contributes to critical natural history studies.':
                t.lang==='fr'?'Nous avons un intérêt pharmaceutique actif pour le syndrome ReNU! Nous collaborons avec Citizen Health – seulement 5 minutes!':
                t.lang==='es'?'¡Tenemos interés farmacéutico activo en el Síndrome ReNU! ¡Solo 5 minutos con Citizen Health!':
                'Wir haben aktives pharmazeutisches Forschungsinteresse am ReNU-Syndrom! Nur 5 Minuten mit Citizen Health!'}
            </p>
            <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" 
               class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full hover:bg-sky-50 transition-colors shadow-lg text-base" style="color:#082050">
              <i class="fas fa-external-link-alt"></i>
              ${t.lang==='it'?'Iscriviti su Citizen Health':t.lang==='en'?'Sign up on Citizen Health':t.lang==='fr'?'Inscrivez-vous sur Citizen Health':t.lang==='es'?'Regístrate en Citizen Health':'Bei Citizen Health anmelden'}
            </a>
          </div>
          <div class="hidden md:block">
            <img src="/images/citizen_health.jpg" alt="Citizen Health ReNU" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
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
          <img src="/images/ashley_water.jpg" alt="Ashley, 8 anni, gioca nell'acqua" class="w-full h-64 object-cover">
          <div class="p-3 text-center text-xs text-gray-500 bg-sky-50">
            ${t.lang==='it'?'Ashley, 8 anni, gioca nell\'acqua':t.lang==='en'?'Ashley, age 8, playing in the water':t.lang==='fr'?'Ashley, 8 ans, joue dans l\'eau':t.lang==='es'?'Ashley, 8 años, jugando en el agua':'Ashley, 8 Jahre, spielt im Wasser'}
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
        <p class="text-sky-100 text-lg">${t.research_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-72">
          <img src="/images/renu_zebrafish.jpg" alt="Ricerca ReNU – Zebrafish" class="w-full h-40 object-cover">
        </div>
        <p class="text-sky-200 text-xs mt-2 text-center">
          ${t.lang==='it'?'Zebrafish usati per studiare la Sindrome ReNU':t.lang==='en'?'Zebrafish used to study ReNU Syndrome':'Poissons zèbres utilisés pour étudier ReNU'}
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- CRID banner -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-10 flex gap-3 items-start">
        <i class="fas fa-id-card text-amber-500 text-2xl mt-0.5 flex-shrink-0"></i>
        <div>
          <p class="text-amber-800 font-semibold">${t.research_crid}</p>
          <p class="text-amber-700 text-sm mt-2">
            ${t.lang==='it'?'Esempio per la registrazione CRID – <strong>Nome malattia:</strong> ReNU Syndrome | <strong>Gene:</strong> RNU4-2 | <strong>Variante:</strong> n.64_65insT (o la tua variante)':
              'Example for CRID registration – <strong>Disease Name:</strong> ReNU Syndrome | <strong>Gene:</strong> RNU4-2 | <strong>Variant:</strong> n.64_65insT (or your variant)'}
          </p>
        </div>
      </div>

      <!-- Citizen Health snapshot -->
      <div class="mb-10 rounded-2xl overflow-hidden shadow-lg border border-sky-200">
        <div class="p-4 text-center text-sm font-semibold" style="background:#EEF6FB; color:#082050">
          ${t.lang==='it'?'Iscritti a Citizen Health – snapshot 26 gennaio 2026':'Citizen Health Registrants – Snapshot January 26, 2026'}
        </div>
        <img src="/images/citizen_registrants.jpg" alt="Citizen Health Registrants" class="w-full object-contain max-h-48 bg-white p-4">
      </div>

      <!-- Studies -->
      <h2 class="text-2xl font-extrabold mb-6" style="color:#082050">
        ${t.lang==='it'?'Opportunità di Ricerca per le Famiglie':t.lang==='en'?'Research Opportunities for Families':t.lang==='fr'?'Opportunités de Recherche':'Oportunidades de Investigación'}
      </h2>
      <div class="space-y-5 mb-12">
        ${studies.map(s => `
        <div class="card border-l-4 ${s.color} overflow-hidden">
          <div class="flex flex-col md:flex-row">
            ${s.img ? `<div class="md:w-48 flex-shrink-0 bg-sky-50 overflow-hidden"><img src="${s.img}" alt="${s.name}" class="w-full h-36 md:h-full object-cover"></div>` : ''}
            <div class="p-6 flex-1">
              <div class="flex items-center gap-3 mb-3">
                <div class="ic ${s.ic}"><i class="fas ${s.icon} text-xl"></i></div>
                <h3 class="text-xl font-bold" style="color:#082050">${s.name}</h3>
              </div>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">${s.desc}</p>
              <a href="${s.link}" target="_blank" class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors" style="background:#1078C0">
                <i class="fas fa-external-link-alt"></i>${s.lbl}
              </a>
            </div>
          </div>
        </div>`).join('')}
      </div>

      <!-- Priority poll -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <h2 class="text-2xl font-extrabold mb-2 text-center">${t.research_priorities_title}</h2>
        <p class="text-sky-200 text-center mb-6 text-sm">
          ${t.lang==='it'?'Top 10 priorità della comunità RNU4-2 – Sondaggio aprile 2026 (analisi aggiornata)':'Top 10 priorities of the RNU4-2 community – Poll April 2026 (updated analysis)'}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
          ${priorities.map(([icon,label],i) => `
          <div class="flex items-center gap-3 bg-white bg-opacity-10 rounded-xl px-4 py-3">
            <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-white" style="background:#45B8EC">${i+1}</span>
            <i class="fas ${icon} text-sky-300 text-sm flex-shrink-0"></i>
            <span class="text-sm">${label}</span>
          </div>`).join('')}
        </div>
        <div class="text-center">
          <a href="https://form.jotform.com/251425893633159" target="_blank" 
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors text-sm" style="background:white; color:#082050">
            <i class="fas fa-vote-yea"></i>${t.lang==='it'?'Partecipa al Sondaggio':t.lang==='en'?'Take the Poll':'Participer au sondage'}
          </a>
        </div>
      </div>

      <!-- COE Network -->
      <div class="mt-10 card card-sky p-8 mb-8">
        <h2 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-hospital" style="color:#1078C0"></i>${t.coe_title}
        </h2>
        <p class="text-gray-600 mb-4">${t.coe_desc}</p>
        <div class="flex flex-wrap gap-3">
          <a href="https://www.renusyndrome.org/coe-network" target="_blank" 
             class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
            <i class="fas fa-external-link-alt"></i>
            ${t.lang==='it'?'Rete COE Internazionale':t.lang==='en'?'International COE Network':'Réseau COE International'}
          </a>
          <a href="https://form.jotform.com/rnu42family/renu-center-of-excellence-app" target="_blank"
             class="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border:1px solid #45B8EC">
            <i class="fas fa-hospital-user"></i>
            ${t.lang==='it'?'Candidatura Centro':t.lang==='en'?'Center Application':'Candidature Centre'}
          </a>
        </div>
      </div>

      <!-- Ricerca genetica blog -->
      <div class="card card-amber p-6">
        <div class="flex flex-col md:flex-row items-center gap-5">
          <div class="flex-shrink-0">
            <div class="ic ic-amber w-16 h-16">
              <i class="fas fa-dna text-2xl"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Saturation Genome Editing di RNU4-2':t.lang==='en'?'Saturation Genome Editing of RNU4-2':'Edition du Génome par Saturation de RNU4-2'}
            </h3>
            <p class="text-gray-600 text-sm mb-3">
              ${t.lang==='it'?'Ricerca avanzata sulla modifica sistematica del genoma per studiare le varianti patogene di RNU4-2 e identificare bersagli terapeutici. Una svolta fondamentale nella comprensione della Sindrome ReNU.':t.lang==='en'?'Advanced research on systematic genome editing to study pathogenic variants of RNU4-2 and identify therapeutic targets. A fundamental breakthrough in understanding ReNU Syndrome.':'Recherche avancée sur l\'edition systématique du génome pour étudier les variants pathogènes de RNU4-2.'}
            </p>
            <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank"
               class="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm" style="background:#FEF3C7; color:#92400E; border: 1px solid #D97706">
              <i class="fas fa-external-link-alt"></i>
              ${t.lang==='it'?'Leggi la ricerca':'Read the research'}
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
    { icon:'fa-running',       ic:'ic-blue',   name:t.lang==='it'?'Fisioterapia (FT)':t.lang==='en'?'Physical Therapy (PT)':t.lang==='fr'?'Kinésithérapie':t.lang==='es'?'Fisioterapia':'Physiotherapie',         desc:t.lang==='it'?'Esercizio, potenziamento muscolare e miglioramento dell\'equilibrio, coordinazione e movimento.':'Exercise, strength training, balance, coordination and motion improvement.' },
    { icon:'fa-hands-helping', ic:'ic-green',  name:t.lang==='it'?'Terapia Occupazionale (TO)':t.lang==='en'?'Occupational Therapy (OT)':t.lang==='fr'?'Ergothérapie':t.lang==='es'?'Terapia Ocupacional':'Ergotherapie', desc:t.lang==='it'?'Trattamento dei ritardi nelle abilità motorie, elaborazione sensoriale e coordinazione.':'Motor skills, sensory processing and coordination treatment.' },
    { icon:'fa-comments',      ic:'ic-purple', name:t.lang==='it'?'Logopedia':'Speech-Language Pathology',           desc:t.lang==='it'?'Miglioramento della comunicazione e risoluzione dei problemi di deglutizione.':'Improving communication and addressing swallowing issues.' },
    { icon:'fa-music',         ic:'ic-amber',  name:t.lang==='it'?'Musicoterapia':'Music Therapy',                   desc:t.lang==='it'?'Usata per le abilità motorie percettive, comunicazione e regolazione dell\'umore.':'Used for perceptual motor skills, communication, and mood regulation.' },
    { icon:'fa-apple-alt',     ic:'ic-red',    name:t.lang==='it'?'Nutrizione e Terapie Alimentari':'Nutrition & Feeding Therapies', desc:t.lang==='it'?'Garantire nutrizione adeguata, sviluppare abilità sensoriali e orali/motorie.':'Ensuring proper nutrition, developing sensory and oral/motor skills.' },
    { icon:'fa-puzzle-piece',  ic:'ic-sky',    name:'ABA Therapy',                                                    desc:t.lang==='it'?'Rinforzo positivo per comportamenti appropriati, sviluppo sociale e competenze accademiche.':'Positive reinforcement for appropriate behaviors and social/academic skills.' },
    { icon:'fa-horse',         ic:'ic-navy',   name:t.lang==='it'?'Terapia Equestre (EAAT)':'Equine Assisted Activities (EAAT)', desc:t.lang==='it'?'Terapia con i cavalli per coordinazione, forza, stabilità posturale e integrazione sensoriale.':'Horse therapy for coordination, strength, core stability, and sensory integration.' },
    { icon:'fa-swimming-pool', ic:'ic-cyan',   name:t.lang==='it'?'Idroterapia / Acquaterapia':'Hydrotherapy / Aquatic Therapy', desc:t.lang==='it'?'Uso dell\'acqua per trattare vari sintomi; anche terapia acquatica o balneoterapia.':'Using water to treat various symptoms; aquatic therapy or balneotherapy.' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heartbeat mr-3 text-sky-300"></i>${t.therapies_title}</h1>
      <p class="text-sky-100 text-lg">${t.therapies_intro}</p>
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
      <div class="mt-8 text-center">
        <a href="https://www.renusyndrome.org/therapies" target="_blank"
           class="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full" style="background:#1078C0">
          <i class="fas fa-external-link-alt"></i>
          ${t.lang==='it'?'Approfondisci su ReNU Syndrome United':t.lang==='en'?'Learn more on ReNU Syndrome United':'Plus d\'infos sur ReNU Syndrome United'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── DIAGNOSIS PAGE ───────────────────────────────────────────────────────────
function diagnosisPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-stethoscope mr-3 text-sky-300"></i>${t.diagnosis_title}</h1>
      <p class="text-sky-100 text-lg">${t.diagnosis_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">
      <div class="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8 flex gap-4 items-start">
        <i class="fas fa-exclamation-triangle text-amber-500 text-3xl flex-shrink-0"></i>
        <div>
          <h3 class="font-bold text-amber-800 text-xl mb-2">⚠️ ${t.lang==='it'?'Nota Importante':t.lang==='en'?'Important Note':t.lang==='fr'?'Note importante':t.lang==='es'?'Nota importante':'Wichtiger Hinweis'}</h3>
          <p class="text-amber-800 text-lg">${t.about_diagnosis_note}</p>
        </div>
      </div>

      <div class="card card-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-envelope" style="color:#1078C0"></i>${t.diagnosis_contact}
        </h2>
        <div class="space-y-4">
          ${[
            ['info@sindromerenu.it','ic-blue','fa-envelope',t.lang==='it'?'Info generali':'General info'],
            ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',t.lang==='it'?'Segreteria':'Secretariat'],
          ].map(([email,ic,icon,label]) => `
          <a href="mailto:${email}" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ${ic}"><i class="fas ${icon}"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">${email}</div>
              <div class="text-sm text-gray-500">${label}</div>
            </div>
          </a>`).join('')}
          <a href="tel:+393357301206" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ic-sky"><i class="fas fa-phone"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">+39 335 730 1206</div>
              <div class="text-sm text-gray-500">${t.lang==='it'?'Telefono / WhatsApp':'Phone / WhatsApp'}</div>
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
            <p class="text-sky-100 text-sm">${t.lang==='it'?'Analizza tutta la sequenza del DNA, compresi i geni non codificanti come RNU4-2. <strong>NECESSARIO per diagnosticare la Sindrome ReNU.</strong>':'Analyzes the entire DNA sequence, including non-coding genes like RNU4-2. <strong>REQUIRED to diagnose ReNU Syndrome.</strong>'}</p>
          </div>
          <div class="bg-white bg-opacity-10 rounded-xl p-5">
            <h3 class="font-bold text-sky-200 mb-2 flex items-center gap-2"><i class="fas fa-times-circle text-red-400"></i>WES – Whole Exome Sequencing</h3>
            <p class="text-sky-100 text-sm">${t.lang==='it'?'Analizza solo le regioni codificanti. <strong>NON può rilevare le varianti in RNU4-2!</strong>':'Only analyzes coding regions. <strong>CANNOT detect variants in RNU4-2!</strong>'}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── COMMUNITY PAGE ───────────────────────────────────────────────────────────
function communityPage(t: Record<string, string>): string {
  const intlAssoc = [
    { country: 'Australia', flag: '🇦🇺', fb: 'https://www.facebook.com/groups/1671427560388792', ig: '', web: '' },
    { country: 'France', flag: '🇫🇷', fb: '', ig: 'https://www.instagram.com/renu_association_france/', web: 'https://www.syndrome-renu.fr/' },
    { country: 'España', flag: '🇪🇸', fb: '', ig: 'https://www.instagram.com/asociacion_sindrome_renu/', web: 'https://www.sindromerenu.es/' },
    { country: 'UK', flag: '🇬🇧', fb: 'https://www.facebook.com/groups/1603406977204374', ig: 'https://www.instagram.com/rnu4_2_family/', web: '' },
    { country: 'USA (HQ)', flag: '🇺🇸', fb: 'https://www.facebook.com/groups/rnu42', ig: 'https://www.instagram.com/renusyndromeunited/', web: 'https://www.renusyndrome.org' },
    { country: 'Italia', flag: '🇮🇹', fb: 'https://www.facebook.com/groups/1268033701594892', ig: 'https://www.instagram.com/rnu4_2_family/', web: 'https://www.sindromerenu.it' },
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
          <img src="/images/famiglia2.png" alt="Famiglie" class="w-full h-48 object-cover">
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
            <img src="/images/renu_map.jpg" alt="Mappa Mondiale RNU4-2" class="w-full h-full object-cover">
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
          <div class="h-40 overflow-hidden">
            <img src="/images/renu_parents.jpg" alt="Rete Genitori" class="w-full h-full object-cover bg-sky-100">
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-sky mx-auto mb-3"><i class="fas fa-heart text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Rete Genitori Italia':'Parent Network Italy'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Connettiti con famiglie in Italia e nel mondo. Non sei solo in questo percorso.':'Connect with families in Italy and worldwide. You are not alone in this journey.'}
            </p>
            <a href="mailto:info@sindromerenu.it"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#45B8EC">
              <i class="fas fa-envelope"></i>${t.contact_us}
            </a>
          </div>
        </div>
      </div>

      <!-- Mappa mondiale countries -->
      <div class="card card-navy p-6 mb-10">
        <h2 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe" style="color:#1078C0"></i>${t.world_title}
        </h2>
        <p class="text-gray-600 text-sm leading-relaxed">${t.world_desc}</p>
        <p class="text-xs mt-3 text-gray-400">
          <i class="fas fa-calendar-alt mr-1"></i>
          ${t.lang==='it'?'Ultimo aggiornamento: 15 aprile 2026':'Last updated: April 15, 2026'}
        </p>
      </div>

      <!-- International Network -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe-europe" style="color:#1078C0"></i>${t.intl_network}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${intlAssoc.map(a => `
          <div class="card p-5">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">${a.flag}</span>
              <h3 class="font-bold" style="color:#082050">${a.country}</h3>
            </div>
            <div class="flex gap-2 flex-wrap">
              ${a.web ? `<a href="${a.web}" target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#1078C0"><i class="fas fa-globe"></i>Web</a>` : ''}
              ${a.fb  ? `<a href="${a.fb}"  target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#1877F2"><i class="fab fa-facebook"></i>Facebook</a>` : ''}
              ${a.ig  ? `<a href="${a.ig}"  target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#E1306C"><i class="fab fa-instagram"></i>Instagram</a>` : ''}
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

      <!-- Gallery -->
      <div class="card card-sky overflow-hidden mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="overflow-hidden">
            <img src="/images/renu_gallery.jpg" alt="Gallery ReNU" class="w-full h-56 object-cover">
          </div>
          <div class="p-6 flex flex-col justify-center">
            <h3 class="font-bold text-xl mb-3 flex items-center gap-2" style="color:#082050">
              <i class="fas fa-images" style="color:#1078C0"></i>Gallery Internazionale
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Guarda le foto dei coraggiosi bambini e famiglie di tutto il mondo sulla galleria internazionale di ReNU Syndrome United.':'See photos of brave children and families from around the world on the international ReNU Syndrome United gallery.'}
            </p>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.lang==='it'?'Visita la Galleria':'Visit Gallery'}
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
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heart mr-3 text-sky-300"></i>${t.donations_title}</h1>
        <p class="text-sky-100 text-lg">${t.donations_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-56">
          <img src="/images/festa.png" alt="Donazioni" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Why donate -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        ${[
          ['fa-microscope','ic-blue',t.lang==='it'?'Finanzia la Ricerca':'Fund Research',t.lang==='it'?'Supporta la ricerca per trovare terapie per la Sindrome ReNU.':'Support research to find therapies for ReNU Syndrome.'],
          ['fa-users','ic-green',t.lang==='it'?'Costruisci Comunità':'Build Community',t.lang==='it'?'Aiuta a costruire la rete di supporto per le famiglie italiane.':'Help build the Italian family support network.'],
          ['fa-bullhorn','ic-purple',t.lang==='it'?'Diffondi Consapevolezza':'Spread Awareness',t.lang==='it'?'Aumenta la visibilità della Sindrome ReNU in Italia e nel mondo.':'Increase visibility of ReNU Syndrome in Italy and worldwide.'],
        ].map(([icon,ic,title,desc]) => `
        <div class="card p-6 text-center">
          <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon} text-xl"></i></div>
          <h3 class="font-bold mb-2" style="color:#082050">${title}</h3>
          <p class="text-gray-600 text-sm">${desc}</p>
        </div>`).join('')}
      </div>

      <!-- IBAN -->
      <div class="card card-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-university" style="color:#1078C0"></i>${t.lang==='it'?'Bonifico Bancario':'Bank Transfer'}
        </h2>
        <div class="rounded-2xl p-6 font-mono space-y-4" style="background:#EEF6FB">
          <div class="text-center mb-2">
            <p class="text-sm text-gray-500 font-sans mb-1">${t.donations_iban_label}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 font-sans mb-1">IBAN</p>
            <p class="text-xl font-bold tracking-wide" style="color:#082050">${t.donations_iban}</p>
          </div>
          <div class="text-center text-sm font-sans space-y-1">
            <p class="text-gray-500">${t.lang==='it'?'Per informazioni sulle donazioni:':'For donation information:'}</p>
            <a href="mailto:donazioni@sindromerenu.it" class="font-semibold hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </div>
        </div>
        <div class="mt-4 bg-sky-50 rounded-xl p-4 border border-sky-200 text-center text-sm text-gray-600">
          <i class="fas fa-info-circle mr-2" style="color:#1078C0"></i>
          ${t.lang==='it'?'Inserisci nella causale: "Donazione Sindrome ReNU Italia APS". Grazie!':'In the payment reference write: "Donazione Sindrome ReNU Italia APS". Thank you!'}
        </div>
      </div>

      <!-- Online Donation via Zeffy -->
      <div class="card card-sky p-8 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0 text-center">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(135deg, #45B8EC, #1078C0)">
              <i class="fas fa-credit-card text-3xl text-white"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-extrabold mb-2" style="color:#082050">
              ${t.lang==='it'?'Donazione Online con Zeffy':t.lang==='en'?'Online Donation via Zeffy':t.lang==='fr'?'Don en ligne via Zeffy':t.lang==='es'?'Donación Online vía Zeffy':'Online-Spende über Zeffy'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Puoi anche donare direttamente online tramite la piattaforma Zeffy (100% delle donazioni va alla causa – zero commissioni per il donatore!).':t.lang==='en'?'You can also donate directly online via the Zeffy platform (100% of donations go to the cause – zero fees for donors!).':t.lang==='fr'?'Vous pouvez aussi faire un don en ligne via Zeffy (100% des dons vont à la cause).':'También puedes donar en línea a través de Zeffy (0% comisiones).'}
            </p>
            <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-1780" target="_blank"
               class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#1078C0">
              <i class="fas fa-hand-holding-heart"></i>
              ${t.lang==='it'?'Dona Online Ora':t.lang==='en'?'Donate Online Now':t.lang==='fr'?'Donner en ligne':'Donar Ahora'}
            </a>
          </div>
        </div>
      </div>

      <!-- Move 4 ReNU -->
      <div class="rounded-3xl overflow-hidden shadow-xl">
        <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="w-full h-40 object-cover">
        <div class="p-8 text-center text-white" style="background: linear-gradient(135deg, #1078C0 0%, #45B8EC 100%)">
          <h2 class="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
            <i class="fas fa-running"></i>Move 4 ReNU
          </h2>
          <p class="text-sky-100 mb-5">
            ${t.lang==='it'?'Muoviti per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU! Partecipa alla campagna internazionale Move 4 ReNU.':'Move to raise funds and spread awareness about ReNU Syndrome! Join the international Move 4 ReNU campaign.'}
          </p>
          <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank"
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors" style="background:white; color:#082050">
            <i class="fas fa-external-link-alt"></i>Move 4 ReNU
          </a>
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
    </div>
  </section>
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
          <div class="font-bold text-lg" style="color:#082050">
            ${t.lang==='it'?'Telefono / WhatsApp':'Phone / WhatsApp'}
          </div>
          <a href="tel:+393357301206" class="text-2xl font-extrabold hover:underline" style="color:#1078C0">+39 335 730 1206</a>
        </div>
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
          <div class="flex items-center gap-2"><i class="fas fa-phone w-5 text-sky-400"></i><a href="tel:+393357301206" class="hover:text-white">+39 335 730 1206</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:Stefania.rocca@sindromerenu.it" class="hover:text-white">Stefania.rocca@sindromerenu.it</a></div>
        </div>
        <div class="flex gap-4 mt-5">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-2xl"></i></a>
          <a href="https://www.instagram.com/rnu4_2_family/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-2xl"></i></a>
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

export default app
