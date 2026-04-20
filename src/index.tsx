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
    hero_desc: 'La Sindrome ReNU è un disturbo spliceosomale con un hotspot mutazionale definito e un dataset globale crescente, creando un\'opportunità terapeutica straordinariamente accessibile. Circa 100.000 individui nel mondo presentano variazioni del DNA in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a> degli oltre 3 miliardi di paia di basi!',
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
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, crea un <a href="https://thecrid.org/" target="_blank" class="text-amber-700 hover:underline font-semibold">ID di Ricerca Clinica (CRID)</a>!',
    research_priorities_title: 'Cosa è importante per la comunità RNU4-2?',
    therapies_title: 'Terapie per la Sindrome ReNU',
    therapies_intro: 'Molti servizi terapeutici sono utilizzati per aiutare le persone con Sindrome ReNU',
    therapies_note: 'Questo sito non approva né raccomanda terapie specifiche. Consultare sempre un medico.',
    diagnosis_title: 'Dove fare il Test Diagnostico in Italia',
    diagnosis_intro: 'Per ricevere informazioni sui centri diagnostici disponibili in Italia, contattaci.',
    diagnosis_contact: 'Per informazioni sui centri WGS in Italia, scrivici a:',
    community_title: 'Comunità – Connessione tra Famiglie',
    community_intro: 'Non sei solo! Trova speranza e comunità con altre famiglie.',
    donations_title: 'Sostienici con una Donazione',
    donations_intro: 'Le tue donazioni ci permettono di promuovere la ricerca e costruire la comunità italiana.',
    donations_iban: 'IBAN: IT18H030690960610000000 4416360',
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
  },
  en: {
    lang: 'en', langName: 'English',
    title: 'ReNU Syndrome Italy APS',
    subtitle: 'Together, we make a difference',
    tagline: 'A newly identified genetic condition. A globally coordinated research effort.',
    hero_text: 'RNU4-2 Emerges as a Leading Cause of Rare Neurodevelopmental Disorders – <strong>Renewing Hope for Families</strong>',
    hero_desc: 'ReNU syndrome is a spliceosomal disorder with a defined mutational hotspot and growing global dataset. Around 100,000 individuals globally have DNA changes in just <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> of our 3 billion base-pair genome!',
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
    research_crid: 'Before enrolling in any research, create a <a href="https://thecrid.org/" target="_blank" class="text-amber-700 hover:underline font-semibold">Clinical Research ID (CRID)</a>!',
    research_priorities_title: 'What\'s important to the RNU4-2 Community?',
    therapies_title: 'Therapies for ReNU Syndrome',
    therapies_intro: 'Many therapeutic services are currently used to aid people with ReNU Syndrome',
    therapies_note: 'This site does not endorse specific therapies. Always consult a physician.',
    diagnosis_title: 'Where to get Diagnosed in Italy',
    diagnosis_intro: 'For information about diagnostic centers in Italy, contact us.',
    diagnosis_contact: 'For information on WGS centers in Italy, contact us at:',
    community_title: 'Community – Family Connection',
    community_intro: 'You\'re not alone! Find hope and community with other families.',
    donations_title: 'Support Us with a Donation',
    donations_intro: 'Your donations allow us to promote research and build the Italian community.',
    donations_iban: 'IBAN: IT18H030690960610000000 4416360',
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
  },
  fr: {
    lang: 'fr', langName: 'Français',
    title: 'Syndrome ReNU Italie APS',
    subtitle: 'Ensemble, nous faisons la différence',
    tagline: 'Une condition génétique nouvellement identifiée. Un effort de recherche coordonné mondialement.',
    hero_text: 'RNU4-2 émerge comme une cause majeure de troubles rares du neurodéveloppement – <strong>Renouvelant l\'espoir pour les familles</strong>',
    hero_desc: 'Le syndrome ReNU est un trouble splicéosomal avec un hotspot mutationnel défini. Environ 100 000 personnes dans le monde présentent des modifications ADN en seulement <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a>!',
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
    research_crid: 'Avant de participer à une recherche, créez un <a href="https://thecrid.org/" target="_blank" class="text-amber-700 hover:underline font-semibold">ID de Recherche Clinique (CRID)</a>!',
    research_priorities_title: 'Qu\'est-ce qui est important pour la communauté RNU4-2?',
    therapies_title: 'Thérapies pour le Syndrome ReNU',
    therapies_intro: 'Nombreux services thérapeutiques pour les personnes atteintes du Syndrome ReNU',
    therapies_note: 'Ce site n\'approuve pas de thérapies spécifiques. Consultez toujours un médecin.',
    diagnosis_title: 'Où se faire diagnostiquer en Italie',
    diagnosis_intro: 'Pour des informations sur les centres diagnostiques en Italie, contactez-nous.',
    diagnosis_contact: 'Pour des informations sur les centres WGS en Italie:',
    community_title: 'Communauté – Connexion des familles',
    community_intro: 'Vous n\'êtes pas seul! Trouvez espoir et communauté.',
    donations_title: 'Soutenez-nous avec un don',
    donations_intro: 'Vos dons nous permettent de promouvoir la recherche.',
    donations_iban: 'IBAN: IT18H030690960610000000 4416360',
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
  },
  es: {
    lang: 'es', langName: 'Español',
    title: 'Síndrome ReNU Italia APS',
    subtitle: 'Juntos, hacemos la diferencia',
    tagline: 'Una condición genética recién identificada. Un esfuerzo de investigación coordinado a nivel mundial.',
    hero_text: 'RNU4-2 emerge como una causa principal de trastornos raros del neurodesarrollo – <strong>Renovando la Esperanza para las Familias</strong>',
    hero_desc: 'El Síndrome ReNU es un trastorno spliceosomal. Alrededor de 100.000 personas en todo el mundo tienen cambios en solo <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posiciones</a> del genoma!',
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
    research_crid: 'Antes de participar, crea un <a href="https://thecrid.org/" target="_blank" class="text-amber-700 hover:underline font-semibold">ID de Investigación Clínica (CRID)</a>!',
    research_priorities_title: '¿Qué es importante para la comunidad RNU4-2?',
    therapies_title: 'Terapias para el Síndrome ReNU',
    therapies_intro: 'Muchos servicios terapéuticos para personas con Síndrome ReNU',
    therapies_note: 'Este sitio no recomienda terapias específicas. Consulte siempre a un médico.',
    diagnosis_title: 'Dónde hacerse el diagnóstico en Italia',
    diagnosis_intro: 'Para información sobre centros diagnósticos en Italia, contáctenos.',
    diagnosis_contact: 'Para información sobre centros WGS en Italia:',
    community_title: 'Comunidad – Conexión de familias',
    community_intro: 'No estás solo. Encuentra comunidad con otras familias.',
    donations_title: 'Apóyanos con una donación',
    donations_intro: 'Tus donaciones nos permiten promover la investigación.',
    donations_iban: 'IBAN: IT18H030690960610000000 4416360',
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
  },
  de: {
    lang: 'de', langName: 'Deutsch',
    title: 'ReNU-Syndrom Italien APS',
    subtitle: 'Gemeinsam machen wir den Unterschied',
    tagline: 'Eine neu identifizierte genetische Erkrankung. Eine global koordinierte Forschungsarbeit.',
    hero_text: 'RNU4-2 entwickelt sich zu einer führenden Ursache seltener neurologischer Entwicklungsstörungen – <strong>Neue Hoffnung für Familien</strong>',
    hero_desc: 'Das ReNU-Syndrom ist eine Spliceosom-Störung. Etwa 100.000 Menschen weltweit haben DNA-Veränderungen in nur <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 Positionen</a>!',
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
    research_crid: 'Erstellen Sie vor der Teilnahme eine <a href="https://thecrid.org/" target="_blank" class="text-amber-700 hover:underline font-semibold">Klinische Forschungs-ID (CRID)</a>!',
    research_priorities_title: 'Was ist der RNU4-2-Gemeinschaft wichtig?',
    therapies_title: 'Therapien für das ReNU-Syndrom',
    therapies_intro: 'Viele Therapieangebote für Menschen mit ReNU-Syndrom',
    therapies_note: 'Diese Website empfiehlt keine spezifischen Therapien. Konsultieren Sie immer einen Arzt.',
    diagnosis_title: 'Wo können Sie sich in Italien diagnostizieren lassen?',
    diagnosis_intro: 'Für Informationen über diagnostische Zentren in Italien kontaktieren Sie uns.',
    diagnosis_contact: 'Für Informationen über WGS-Zentren in Italien:',
    community_title: 'Gemeinschaft – Familienverbindung',
    community_intro: 'Sie sind nicht allein! Finden Sie Gemeinschaft mit anderen Familien.',
    donations_title: 'Unterstützen Sie uns mit einer Spende',
    donations_intro: 'Ihre Spenden ermöglichen uns die Forschungsförderung.',
    donations_iban: 'IBAN: IT18H030690960610000000 4416360',
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
  }
}

// ─── LAYOUT SHELL ─────────────────────────────────────────────────────────────
function getHtml(t: Record<string, string>, page: string = 'home', content: string): string {
  const langs = ['it', 'en', 'fr', 'es', 'de']
  const flags: Record<string, string> = { it: '🇮🇹', en: '🇬🇧', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪' }
  const langSwitcher = langs.map(l => `
    <a href="/${l}/${page}" class="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-sky-700 transition-colors ${t.lang === l ? 'bg-sky-600 ring-2 ring-sky-300' : ''}" title="${translations[l].langName}">
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
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium whitespace-nowrap ${page === item.page ? 'bg-sky-600 shadow-inner' : ''}">
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
    /* ── PALETTE BROCHURE UFFICIALE ──────────────────────────────────────────
       Colori estratti dalle brochure di Sindrome ReNU Italia APS:
       Blu scuro (navbar/hero):    #082050  (navy profondo)
       Blu medio (accenti):        #1078C0  (blu corporate)
       Azzurro cielo (highlights): #45B8EC  (sky blue)
       Azzurro chiaro (bg cards):  #C8E8F8  (alice blue)
       Bianco (sfondo principale): #FFFFFF
       ──────────────────────────────────────────────────────────────────── */
    :root {
      --renu-navy:   #082050;
      --renu-blue:   #1078C0;
      --renu-sky:    #45B8EC;
      --renu-light:  #C8E8F8;
      --renu-pale:   #EBF7FD;
      --renu-white:  #FFFFFF;
      --renu-red:    #E74C3C;
    }
    body { font-family: 'Inter', sans-serif; background-color: var(--renu-pale); }

    /* ── HERO GRADIENT (colori brochure) */
    .hero-gradient {
      background: linear-gradient(155deg, #082050 0%, #1078C0 55%, #45B8EC 100%);
      position: relative; overflow: hidden;
    }
    .hero-gradient::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 75% 40%, rgba(69,184,236,0.22) 0%, transparent 65%);
      pointer-events: none;
    }

    /* ── CARD STYLES */
    .card-renu {
      background: white;
      border: 1px solid var(--renu-light);
      border-radius: 1rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .card-renu:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(8,32,80,0.13); }

    .card-accent-navy  { border-top: 4px solid #082050; }
    .card-accent-blue  { border-top: 4px solid #1078C0; }
    .card-accent-sky   { border-top: 4px solid #45B8EC; }
    .card-accent-red   { border-top: 4px solid #E74C3C; }
    .card-accent-green { border-top: 4px solid #22C55E; }
    .card-accent-amber { border-top: 4px solid #F59E0B; }

    /* ── DIAGNOSIS BUTTON (animato) */
    .btn-diagnosis {
      background: linear-gradient(135deg, #E74C3C, #C0392B);
      animation: pulse-red 2.2s infinite;
    }
    @keyframes pulse-red {
      0%, 100% { box-shadow: 0 0 0 0 rgba(231,76,60,0.6); }
      50%       { box-shadow: 0 0 0 14px rgba(231,76,60,0); }
    }

    /* ── ICON CIRCLES */
    .icon-circle { width:3.5rem; height:3.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .ic-navy   { background:#DCE8F5; color:#082050; }
    .ic-blue   { background:#D0EAFB; color:#1078C0; }
    .ic-sky    { background:#C8E8F8; color:#0D8EC4; }
    .ic-red    { background:#FEE2E2; color:#DC2626; }
    .ic-green  { background:#D1FAE5; color:#059669; }
    .ic-amber  { background:#FEF3C7; color:#D97706; }
    .ic-purple { background:#EDE9FE; color:#7C3AED; }
    .ic-cyan   { background:#CFFAFE; color:#0E7490; }

    /* ── NAVBAR LINK ACTIVE */
    .nav-active { background: #1078C0 !important; }

    /* ── MOBILE MENU */
    .mobile-menu { display: none; }
    .mobile-menu.open { display: block; }

    /* ── STAT BADGE */
    .stat-badge {
      background: linear-gradient(135deg, #082050, #1078C0);
      color: white; border-radius: 1.5rem;
      padding: 1.5rem 2rem; text-align: center;
    }

    /* ── BROCHURE CARD HOVER */
    .brochure-card:hover .brochure-overlay { opacity: 1; }
    .brochure-overlay { opacity: 0; transition: opacity 0.3s; }

    html { scroll-behavior: smooth; }
    img { max-width:100%; height:auto; }

    /* ── SECTION DIVIDER */
    .wave-sep {
      background: linear-gradient(90deg, #082050, #1078C0, #45B8EC);
      height: 4px; width: 80px; border-radius: 2px; margin: 0 auto 1.5rem;
    }
  </style>
</head>
<body>

<!-- ── TOP BAR (contatti veloci) -->
<div class="bg-[#082050] text-white text-xs py-1.5 px-4 hidden md:block">
  <div class="max-w-screen-xl mx-auto flex justify-between items-center">
    <span><i class="fas fa-envelope mr-1 text-sky-400"></i>info@sindromerenu.it</span>
    <span class="text-sky-300 font-semibold italic">"${t.footer_tagline}"</span>
    <span><i class="fas fa-globe mr-1 text-sky-400"></i>www.sindromerenu.it</span>
  </div>
</div>

<!-- ── NAVBAR PRINCIPALE -->
<header style="background: linear-gradient(90deg, #082050 0%, #1078C0 60%, #2090D0 100%);" class="text-white shadow-2xl sticky top-0 z-50">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="/${t.lang}/home" class="flex items-center gap-3 flex-shrink-0">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-12 w-auto drop-shadow-lg"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div style="display:none" class="h-12 w-12 rounded-full bg-sky-400 flex items-center justify-center font-bold text-navy text-lg">SR</div>
        <div class="hidden sm:block">
          <div class="font-extrabold text-base leading-tight">Sindrome ReNU</div>
          <div class="text-sky-300 text-xs font-medium">Italia APS</div>
        </div>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-0.5 overflow-x-auto">
        ${navLinks}
      </nav>

      <!-- Lang switcher + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <div class="flex items-center gap-0.5 bg-black bg-opacity-20 rounded-xl p-1">${langSwitcher}</div>
        <button id="mobileBtn" class="md:hidden p-2 rounded-lg hover:bg-sky-700 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileMenu" class="mobile-menu pb-3 md:hidden">
      <nav class="flex flex-col gap-1">
        ${navItems.map(i => `
        <a href="/${t.lang}/${i.page}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-sky-700 transition-colors ${page === i.page ? 'bg-sky-600' : ''}">
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
<footer style="background: linear-gradient(135deg, #082050 0%, #0D3580 50%, #1078C0 100%);" class="text-white mt-16">
  <div class="max-w-screen-xl mx-auto px-4 py-14">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Brand -->
      <div>
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-16 w-auto mb-4 drop-shadow"
             onerror="this.style.display='none'">
        <p class="text-sky-200 text-sm italic mb-2">"${t.footer_tagline}"</p>
        <p class="text-sky-300 text-sm">${t.footer_partnership}</p>
        <p class="text-sky-300 text-sm mt-1">www.sindromerenu.it</p>
        <div class="mt-4 flex gap-3">
          <a href="https://www.facebook.com" target="_blank" class="w-9 h-9 rounded-full bg-sky-700 hover:bg-sky-600 flex items-center justify-center transition-colors"><i class="fab fa-facebook-f text-sm"></i></a>
          <a href="https://www.instagram.com" target="_blank" class="w-9 h-9 rounded-full bg-sky-700 hover:bg-sky-600 flex items-center justify-center transition-colors"><i class="fab fa-instagram text-sm"></i></a>
        </div>
      </div>
      <!-- Contacts -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Email</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[['info','Info Generali'],['donazioni','Donazioni'],['segreteria','Segreteria'],['presidenza','Presidenza']].map(([e,l]) => `
          <li><a href="mailto:${e}@sindromerenu.it" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-envelope text-xs text-sky-400"></i>${e}@sindromerenu.it</a></li>`).join('')}
        </ul>
      </div>
      <!-- Links -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Link Utili</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[['https://www.renusyndrome.org','ReNU Syndrome United (USA)'],['https://thecrid.org/','Clinical Research ID (CRID)'],['https://rare-x.org/rnu4-2/','Rare-X Registry'],['https://citizen.health/renu','Citizen Health']].map(([href,lbl]) => `
          <li><a href="${href}" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-external-link-alt text-xs text-sky-400"></i>${lbl}</a></li>`).join('')}
        </ul>
        <div class="mt-5">
          <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow">
            <i class="fas fa-file-pdf"></i>${t.nav_brochure}
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-sky-800 mt-10 pt-6 text-center text-sm text-sky-400">
      ${t.footer_rights}
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
    { href: 'https://form.jotform.com/250154538972159', ext: true, icon: 'fa-map-marker-alt', ic: 'ic-blue', title: t.section_map_title, desc: t.section_map_desc, accent: 'card-accent-blue' },
    { href: `/${t.lang}/community`, icon: 'fa-bullhorn', ic: 'ic-purple', title: t.section_awareness_title, desc: t.section_awareness_desc, accent: 'card-accent-sky' },
    { href: `/${t.lang}/research`, icon: 'fa-microscope', ic: 'ic-sky', title: t.section_research_title, desc: t.section_research_desc, accent: 'card-accent-sky' },
    { href: `/${t.lang}/about`, icon: 'fa-info-circle', ic: 'ic-navy', title: t.section_info_title, desc: t.section_info_desc, accent: 'card-accent-navy' },
    { href: `/${t.lang}/community`, icon: 'fa-users', ic: 'ic-cyan', title: t.section_parents_title, desc: t.section_parents_desc, accent: 'card-accent-blue' },
    { href: `/${t.lang}/donations`, icon: 'fa-heart', ic: 'ic-red', title: t.section_donations_title, desc: t.section_donations_desc, accent: 'card-accent-red' },
  ]
  return `
  <!-- ── HERO CON IMMAGINE ── -->
  <section class="hero-gradient text-white py-16 md:py-24 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <!-- Testo hero -->
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-5 text-sky-100 border border-white border-opacity-20">
            <i class="fas fa-dna text-sky-300"></i>
            <span>${t.tagline}</span>
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">${t.hero_text}</h1>
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed max-w-2xl">${t.hero_desc}</p>

          <!-- Statistica chiave -->
          <div class="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
            <div class="bg-white bg-opacity-15 backdrop-blur rounded-2xl px-5 py-3 text-center border border-white border-opacity-20">
              <div class="text-3xl font-black text-white">~100K</div>
              <div class="text-sky-200 text-xs">${t.lang==='it'?'persone nel mondo':t.lang==='en'?'people worldwide':t.lang==='fr'?'personnes dans le monde':t.lang==='es'?'personas en el mundo':'Personen weltweit'}</div>
            </div>
            <div class="bg-white bg-opacity-15 backdrop-blur rounded-2xl px-5 py-3 text-center border border-white border-opacity-20">
              <div class="text-3xl font-black text-white">13</div>
              <div class="text-sky-200 text-xs">${t.lang==='it'?'posizioni nel DNA':t.lang==='en'?'DNA positions':t.lang==='fr'?'positions ADN':t.lang==='es'?'posiciones ADN':'DNA-Positionen'}</div>
            </div>
            <div class="bg-white bg-opacity-15 backdrop-blur rounded-2xl px-5 py-3 text-center border border-white border-opacity-20">
              <div class="text-3xl font-black text-white">1:35K</div>
              <div class="text-sky-200 text-xs">${t.lang==='it'?'nati vivi':t.lang==='en'?'live births':t.lang==='fr'?'naissances vivantes':t.lang==='es'?'nacimientos vivos':'Lebendgeburten'}</div>
            </div>
          </div>

          <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
            <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
          </a>
          <p class="text-sky-200 text-sm mt-3">${t.btn_diagnosis_sub}</p>
        </div>

        <!-- Immagine hero -->
        <div class="flex-shrink-0 hidden md:block">
          <div class="relative">
            <img src="/images/famiglie.png" alt="Famiglie ReNU" class="w-80 xl:w-96 rounded-3xl shadow-2xl opacity-95 border-4 border-white border-opacity-20"
                 onerror="this.style.display='none'">
            <div class="absolute -bottom-4 -right-4 bg-sky-400 text-white rounded-2xl p-4 shadow-xl text-sm font-bold">
              <i class="fas fa-heart mr-2"></i>${t.footer_tagline}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── BANNER BROCHURE (sopra le card) ── -->
  <section style="background: linear-gradient(90deg, #082050, #1078C0);" class="text-white py-4 px-4">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <i class="fas fa-file-pdf text-3xl text-sky-300"></i>
        <div>
          <div class="font-bold">${t.brochure_title}</div>
          <div class="text-sky-200 text-sm">${t.brochure_intro}</div>
        </div>
      </div>
      <a href="/${t.lang}/brochure" class="flex-shrink-0 inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-navy font-bold px-6 py-2.5 rounded-full transition-colors shadow" style="color:#082050">
        <i class="fas fa-download"></i>${t.brochure_download}
      </a>
    </div>
  </section>

  <!-- ── 6 CARD GRID ── -->
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-extrabold text-center mb-2" style="color:#082050">${t.lang==='it'?'Come puoi aiutare':t.lang==='en'?'How you can help':t.lang==='fr'?'Comment vous pouvez aider':t.lang==='es'?'Cómo puedes ayudar':'Wie können Sie helfen'}</h2>
      <div class="wave-sep"></div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        ${cards.map(c => `
        <a href="${c.href}" ${(c as any).ext ? 'target="_blank"' : ''} class="card-renu ${c.accent} p-6 block group">
          <div class="flex items-center gap-4 mb-3">
            <div class="icon-circle ${c.ic}"><i class="fas ${c.icon} text-xl"></i></div>
            <h3 class="font-bold text-lg group-hover:text-sky-700 transition-colors" style="color:#082050">${c.title}</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">${c.desc}</p>
          <div class="mt-4 text-sky-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            ${t.learn_more} <i class="fas fa-arrow-right text-xs"></i>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── VISUAL BANNER + IMMAGINI BROCHURE ── -->
  <section class="py-16 px-4 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Testo -->
        <div>
          <span class="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Sindrome ReNU Italia APS</span>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4" style="color:#082050">
            ${t.lang==='it'?'La nostra associazione è finalmente realtà!':t.lang==='en'?'Our association is finally a reality!':t.lang==='fr'?'Notre association est enfin réalité!':t.lang==='es'?'¡Nuestra asociación es finalmente una realidad!':'Unser Verein ist endlich Wirklichkeit!'}
          </h2>
          <p class="text-sky-600 text-lg font-semibold italic mb-4">"${t.subtitle}"</p>
          <p class="text-gray-600 leading-relaxed mb-6">
            ${t.lang==='it'?'Da oggi potete contribuire con un gesto concreto a sostenere le famiglie italiane affette dalla Sindrome ReNU, a promuovere la ricerca scientifica e a costruire una comunità di supporto.':t.lang==='en'?'You can now contribute with a concrete gesture to support Italian families affected by ReNU Syndrome, to promote scientific research and to build a support community.':t.lang==='fr'?'Vous pouvez maintenant contribuer avec un geste concret pour soutenir les familles italiennes touchées par le syndrome ReNU.':t.lang==='es'?'Ahora puede contribuir con un gesto concreto para apoyar a las familias italianas afectadas por el Síndrome ReNU.':'Sie können jetzt mit einer konkreten Geste dazu beitragen, italienische Familien mit ReNU-Syndrom zu unterstützen.'}
          </p>
          <!-- Statistiche -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            ${[
              ['fa-map-marked-alt','ic-blue',t.lang==='it'?'Famiglie in Italia':'Families in Italy','Sindrome ReNU'],
              ['fa-flask','ic-sky',t.lang==='it'?'Partner Ricerca':'Research Partners','Citizen Health, Rare-X...'],
              ['fa-dna','ic-navy',t.lang==='it'?'Gene Identificato':'Gene Identified','RNU4-2 (2024)'],
              ['fa-globe','ic-purple',t.lang==='it'?'Rete Globale':'Global Network',t.lang==='it'?'Autorizzazione USA':'USA Authorization'],
            ].map(([icon,ic,label,sub]) => `
            <div class="flex items-center gap-3 bg-sky-50 rounded-xl p-3 border border-sky-100">
              <div class="icon-circle ${ic} w-10 h-10"><i class="fas ${icon} text-sm"></i></div>
              <div>
                <div class="font-bold text-sm" style="color:#082050">${label}</div>
                <div class="text-gray-500 text-xs">${sub}</div>
              </div>
            </div>`).join('')}
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="/${t.lang}/about" class="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full transition-colors" style="background:#1078C0" onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
              <i class="fas fa-dna"></i>${t.learn_more}
            </a>
            <a href="/${t.lang}/donations" class="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-full transition-colors">
              <i class="fas fa-heart"></i>${t.donate_now}
            </a>
            <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold px-5 py-3 rounded-full transition-colors">
              <i class="fas fa-download"></i>${t.brochure_download}
            </a>
          </div>
        </div>

        <!-- Immagini in griglia -->
        <div class="grid grid-cols-2 gap-4">
          <div class="relative rounded-2xl overflow-hidden shadow-xl group">
            <img src="/images/bambini.png" alt="Bambini ReNU" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                 onerror="this.parentElement.style.background='#C8E8F8'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#082050] to-transparent opacity-50"></div>
            <span class="absolute bottom-2 left-3 text-white text-xs font-bold drop-shadow">${t.lang==='it'?'I nostri bambini':t.lang==='en'?'Our children':'Nos enfants'}</span>
          </div>
          <div class="relative rounded-2xl overflow-hidden shadow-xl group mt-6">
            <img src="/images/mani.png" alt="Mani di speranza" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                 onerror="this.parentElement.style.background='#C8E8F8'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#082050] to-transparent opacity-50"></div>
            <span class="absolute bottom-2 left-3 text-white text-xs font-bold drop-shadow">${t.lang==='it'?'Insieme':'Together'}</span>
          </div>
          <div class="relative rounded-2xl overflow-hidden shadow-xl group">
            <img src="/images/famiglia2.png" alt="Famiglie" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                 onerror="this.parentElement.style.background='#C8E8F8'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#082050] to-transparent opacity-50"></div>
            <span class="absolute bottom-2 left-3 text-white text-xs font-bold drop-shadow">${t.lang==='it'?'Comunità':'Community'}</span>
          </div>
          <div class="relative rounded-2xl overflow-hidden shadow-xl group mt-6">
            <img src="/images/festa.png" alt="Evento" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                 onerror="this.parentElement.style.background='#C8E8F8'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#082050] to-transparent opacity-50"></div>
            <span class="absolute bottom-2 left-3 text-white text-xs font-bold drop-shadow">${t.lang==='it'?'Speranza':'Hope'}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CITIZEN HEALTH BANNER ── -->
  <section style="background: linear-gradient(135deg, #082050 0%, #1078C0 60%, #45B8EC 100%);" class="text-white py-14 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 rounded-full px-4 py-2 text-sm mb-4 text-sky-100">
        <i class="fas fa-flask text-sky-300"></i>
        <span>${t.lang==='it'?'Partnership Attiva':'Active Partnership'}</span>
      </div>
      <h2 class="text-2xl md:text-3xl font-extrabold mb-4">
        ${t.lang==='it'?'🔬 Ricerca Farmaceutica Attiva!':t.lang==='en'?'🔬 Active Pharmaceutical Research!':t.lang==='fr'?'🔬 Recherche Pharmaceutique Active!':t.lang==='es'?'🔬 ¡Investigación Farmacéutica Activa!':'🔬 Aktive pharmazeutische Forschung!'}
      </h2>
      <p class="text-sky-100 mb-6 text-lg max-w-2xl mx-auto">
        ${t.lang==='it'?'Abbiamo interesse farmaceutico attivo per la Sindrome ReNU! Abbiamo collaborato con Citizen Health per rendere la partecipazione il più semplice possibile per le famiglie – solo 5 minuti!':t.lang==='en'?'We have active pharmaceutical research interest in ReNU Syndrome! We\'ve partnered with Citizen Health to make participation as easy as possible – just 5 minutes!':t.lang==='fr'?'Nous avons un intérêt pharmaceutique actif pour le syndrome ReNU! Nous avons collaboré avec Citizen Health – seulement 5 minutes!':t.lang==='es'?'¡Tenemos interés farmacéutico activo en el Síndrome ReNU! ¡Solo 5 minutos con Citizen Health!':'Wir haben aktives pharmazeutisches Forschungsinteresse am ReNU-Syndrom! Nur 5 Minuten mit Citizen Health!'}
      </p>
      <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank"
         class="inline-flex items-center gap-2 bg-white font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-colors shadow-xl text-lg"
         style="color:#082050">
        <i class="fas fa-external-link-alt text-sky-600"></i>
        ${t.lang==='it'?'Iscriviti su Citizen Health':t.lang==='en'?'Sign up on Citizen Health':t.lang==='fr'?'Inscrivez-vous sur Citizen Health':t.lang==='es'?'Regístrate en Citizen Health':'Bei Citizen Health anmelden'}
      </a>
    </div>
  </section>
  `
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function aboutPage(t: Record<string, string>): string {
  const features = [
    { icon: 'fa-brain', ic: 'ic-purple', title: t.about_brain, items: t.about_brain_items },
    { icon: 'fa-child', ic: 'ic-blue', title: t.about_development, items: t.about_development_items },
    { icon: 'fa-bolt', ic: 'ic-amber', title: t.about_seizures, items: t.about_seizures_items },
    { icon: 'fa-eye', ic: 'ic-sky', title: t.about_vision, items: t.about_vision_items },
    { icon: 'fa-smile', ic: 'ic-cyan', title: t.about_face, items: t.about_face_items },
    { icon: 'fa-dumbbell', ic: 'ic-green', title: t.about_muscle, items: t.about_muscle_items },
    { icon: 'fa-walking', ic: 'ic-blue', title: t.about_mobility, items: t.about_mobility_items },
    { icon: 'fa-ruler-vertical', ic: 'ic-navy', title: t.about_growth, items: t.about_growth_items },
    { icon: 'fa-utensils', ic: 'ic-red', title: t.about_feeding, items: t.about_feeding_items },
    { icon: 'fa-comments', ic: 'ic-sky', title: t.about_communication, items: t.about_communication_items },
    { icon: 'fa-bone', ic: 'ic-amber', title: t.about_bones, items: t.about_bones_items },
  ]
  return `
  <!-- HERO -->
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-dna mr-3 text-sky-300"></i>${t.about_title}</h1>
        <p class="text-sky-100 text-lg">${t.tagline}</p>
      </div>
      <div class="flex-shrink-0">
        <img src="/images/nastro.png" alt="Nastro ReNU" class="w-48 md:w-56 drop-shadow-xl rounded-xl"
             onerror="this.style.display='none'">
      </div>
    </div>
  </section>

  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-5xl mx-auto">
      <!-- Intro gene -->
      <div class="card-renu card-accent-blue p-8 mb-8">
        <div class="flex flex-col md:flex-row gap-6 items-start">
          <div class="flex-1">
            <p class="text-gray-700 leading-relaxed mb-5 text-lg">${t.about_gene}</p>
            <div class="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-xl">
              <h3 class="font-bold mb-2 flex items-center gap-2" style="color:#082050"><i class="fas fa-microscope text-sky-500"></i>${t.about_discovery}</h3>
              <p class="text-gray-700">${t.about_discovery_text}</p>
            </div>
          </div>
          <div class="flex-shrink-0 hidden md:block">
            <img src="/images/nastro.png" alt="ReNU" class="w-32 h-auto opacity-70 rounded-xl"
                 onerror="this.style.display='none'">
          </div>
        </div>
      </div>

      <!-- Warning diagnosi -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8 flex items-start gap-3">
        <i class="fas fa-exclamation-triangle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
        <p class="text-amber-800 font-semibold text-lg">${t.about_diagnosis_note}</p>
      </div>

      <!-- Features grid -->
      <h2 class="text-2xl font-extrabold mb-2" style="color:#082050"><i class="fas fa-list-check mr-2 text-sky-500"></i>${t.about_features_title}</h2>
      <div class="wave-sep" style="margin:0 0 1.5rem 0; width:60px;"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        ${features.map(f => `
        <div class="card-renu p-5 flex gap-4">
          <div class="icon-circle ${f.ic} flex-shrink-0"><i class="fas ${f.icon} text-lg"></i></div>
          <div>
            <h3 class="font-bold mb-1" style="color:#082050">${f.title}</h3>
            <p class="text-gray-600 text-sm">${f.items}</p>
          </div>
        </div>`).join('')}
      </div>

      <!-- Happy note -->
      <div class="bg-sky-50 rounded-2xl p-6 flex gap-4 items-start border border-sky-200 mb-8">
        <i class="fas fa-smile-beam text-sky-500 text-2xl mt-1 flex-shrink-0"></i>
        <p class="text-gray-700 italic text-lg">${t.about_happy}</p>
      </div>

      <!-- Immagine bambini full -->
      <div class="relative rounded-3xl overflow-hidden mb-8 shadow-2xl">
        <img src="/images/bambini.png" alt="Bambini con Sindrome ReNU" class="w-full h-64 md:h-80 object-cover"
             onerror="this.style.display='none'">
        <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(8,32,80,0.7) 0%, transparent 60%)"></div>
        <div class="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-xs">
          <div class="text-2xl font-extrabold mb-2">${t.lang==='it'?'I nostri bambini':t.lang==='en'?'Our children':t.lang==='fr'?'Nos enfants':t.lang==='es'?'Nuestros niños':'Unsere Kinder'}</div>
          <p class="text-sky-200 text-sm">${t.lang==='it'?'Coraggiosi, sorridenti, unici':t.lang==='en'?'Brave, smiling, unique':t.lang==='fr'?'Courageux, souriants, uniques':t.lang==='es'?'Valientes, sonrientes, únicos':'Mutig, lächelnd, einzigartig'}</p>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
          <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
        </a>
        <a href="/${t.lang}/research" class="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg transition-colors" style="background:#1078C0" onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
          <i class="fas fa-microscope"></i>${t.section_research_title}
        </a>
      </div>
    </div>
  </section>`
}

// ─── RESEARCH PAGE ────────────────────────────────────────────────────────────
function researchPage(t: Record<string, string>): string {
  const priorities = [
    ['fa-comment-slash','Comunicazione / Linguaggio'],['fa-bolt','Epilessia / Crisi'],['fa-brain','Anomalie cerebrali'],
    ['fa-walking','Mobilità'],['fa-dumbbell','Ipotonia'],['fa-utensils','Alimentazione'],
    ['fa-bone','Fragilità ossea'],['fa-tint','Scialorrea'],['fa-toilet','Problemi GI'],['fa-ruler-vertical','Crescita']
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-microscope mr-3 text-sky-300"></i>${t.research_title}</h1>
        <p class="text-sky-100 text-lg">${t.research_intro}</p>
      </div>
      <div class="flex-shrink-0">
        <img src="/images/mani.png" alt="Mani ReNU" class="w-56 rounded-2xl shadow-xl opacity-90"
             onerror="this.style.display='none'">
      </div>
    </div>
  </section>
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-5xl mx-auto">
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-10 flex gap-3 items-start">
        <i class="fas fa-id-card text-amber-500 text-2xl mt-0.5 flex-shrink-0"></i>
        <p class="text-amber-800">${t.research_crid}</p>
      </div>
      <div class="space-y-6 mb-12">
        ${[
          {color:'border-sky-500',ic:'ic-sky',icon:'fa-heartbeat',name:'Citizen Health',desc:t.lang==='it'?'Organizza i tuoi dati medici in un profilo digitale privato e contribuisci alla ricerca farmaceutica per ReNU.':'Organize medical records and help power pharmaceutical research for ReNU.',link:'https://www.citizen.health/ai-advocate/renu-syndrome',lbl:t.lang==='it'?'Iscriviti ora':'Sign up now'},
          {color:'border-blue-700',ic:'ic-blue',icon:'fa-flask',name:'Studio INDEED (Mount Sinai)',desc:t.lang==='it'?'Offre sequenziamento gratuito dei geni RNU4-2 e RNU2-2 per la ricerca.':'Offers free research-use DNA sequencing of the RNU4-2 and RNU2-2 genes.',link:'mailto:zafiirah.baurhoo@mssm.edu',lbl:'Email'},
          {color:'border-purple-500',ic:'ic-purple',icon:'fa-database',name:'Rare-X Registry',desc:t.lang==='it'?'Registro globale critico aperto a tutti per raccogliere dati sulla progressione di RNU4-2.':'Critical global registry open to all. Robust, continually updated data.',link:'https://rare-x.org/rnu4-2/',lbl:t.join_registry},
          {color:'border-green-500',ic:'ic-green',icon:'fa-face-smile',name:'GestaltMatcher',desc:t.lang==='it'?'Usa AI avanzata per analizzare caratteristiche facciali che indicano malattie genetiche rare.':'Uses advanced 2D AI to analyze facial features that may indicate rare genetic disorders.',link:'mailto:annaarlt@uni-bonn.de',lbl:'Email'},
          {color:'border-orange-500',ic:'ic-amber',icon:'fa-clipboard-list',name:'Clinical Health Survey (Northwell)',desc:t.lang==='it'?'Studio trasversale sullo spettro della Sindrome ReNU (~45 minuti).':'Cross-sectional study on the spectrum of ReNU Syndrome features (~45 minutes).',link:'mailto:NGHI@northwell.edu',lbl:'Email'},
        ].map(s => `
        <div class="card-renu border-l-4 ${s.color} p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="icon-circle ${s.ic}"><i class="fas ${s.icon} text-xl"></i></div>
            <h3 class="text-xl font-bold" style="color:#082050">${s.name}</h3>
          </div>
          <p class="text-gray-600 mb-4">${s.desc}</p>
          <a href="${s.link}" target="_blank" class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors" style="background:#1078C0" onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
            <i class="fas fa-external-link-alt"></i>${s.lbl}
          </a>
        </div>`).join('')}
      </div>

      <!-- Priorities -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050, #1078C0);">
        <h2 class="text-2xl font-extrabold mb-2 text-center">${t.research_priorities_title}</h2>
        <p class="text-sky-200 text-center mb-6 text-sm">${t.lang==='it'?'Top 10 priorità terapeutiche della comunità RNU4-2 (Sondaggio aprile 2026)':t.lang==='en'?'Top 10 therapeutic priorities of the RNU4-2 community (Poll April 2026)':'Top 10 priorités thérapeutiques (Sondage avril 2026)'}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
          ${priorities.map(([icon,label],i) => `
          <div class="flex items-center gap-3 bg-white bg-opacity-10 rounded-xl px-4 py-3">
            <span class="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">${i+1}</span>
            <i class="fas ${icon} text-sky-300 text-sm flex-shrink-0"></i>
            <span class="text-sm">${label}</span>
          </div>`).join('')}
        </div>
        <div class="text-center">
          <a href="https://form.jotform.com/251425893633159" target="_blank" class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors" style="color:#082050">
            <i class="fas fa-vote-yea text-sky-600"></i>${t.lang==='it'?'Partecipa al Sondaggio':t.lang==='en'?'Take the Poll':'Participer au sondage'}
          </a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── THERAPIES PAGE ───────────────────────────────────────────────────────────
function therapiesPage(t: Record<string, string>): string {
  const th = [
    {icon:'fa-running',ic:'ic-blue',name:t.lang==='it'?'Fisioterapia (FT)':t.lang==='en'?'Physical Therapy (PT)':t.lang==='fr'?'Kinésithérapie':t.lang==='es'?'Fisioterapia':'Physiotherapie',desc:t.lang==='it'?'Esercizio, potenziamento muscolare e miglioramento dell\'equilibrio, coordinazione e movimento.':'Exercise, strength training, balance, coordination and motion improvement.'},
    {icon:'fa-hands-helping',ic:'ic-green',name:t.lang==='it'?'Terapia Occupazionale (TO)':t.lang==='en'?'Occupational Therapy (OT)':t.lang==='fr'?'Ergothérapie':t.lang==='es'?'Terapia Ocupacional':'Ergotherapie',desc:t.lang==='it'?'Trattamento dei ritardi nelle abilità motorie, elaborazione sensoriale e coordinazione.':'Motor skills, sensory processing and coordination treatment.'},
    {icon:'fa-comments',ic:'ic-purple',name:t.lang==='it'?'Logopedia':'Speech-Language Pathology',desc:t.lang==='it'?'Miglioramento della comunicazione e risoluzione dei problemi di deglutizione.':'Improving communication and addressing swallowing issues.'},
    {icon:'fa-music',ic:'ic-amber',name:t.lang==='it'?'Musicoterapia':'Music Therapy',desc:t.lang==='it'?'Usata per le abilità motorie percettive, comunicazione e regolazione dell\'umore.':'Used for perceptual motor skills, communication, and mood regulation.'},
    {icon:'fa-apple-alt',ic:'ic-red',name:t.lang==='it'?'Nutrizione e Terapie Alimentari':'Nutrition & Feeding Therapies',desc:t.lang==='it'?'Garantire nutrizione adeguata, sviluppare abilità sensoriali e orali/motorie.':'Ensuring proper nutrition, developing sensory and oral/motor skills.'},
    {icon:'fa-puzzle-piece',ic:'ic-sky',name:'ABA Therapy',desc:t.lang==='it'?'Rinforzo positivo per comportamenti appropriati, sviluppo sociale e competenze accademiche.':'Positive reinforcement for appropriate behaviors and social/academic skills.'},
    {icon:'fa-horse',ic:'ic-navy',name:t.lang==='it'?'Terapia Equestre (EAAT)':'Equine Assisted Activities (EAAT)',desc:t.lang==='it'?'Terapia con i cavalli per coordinazione, forza, stabilità posturale e integrazione sensoriale.':'Horse therapy for coordination, strength, core stability, and sensory integration.'},
    {icon:'fa-swimming-pool',ic:'ic-cyan',name:t.lang==='it'?'Idroterapia / Acquaterapia':'Hydrotherapy / Aquatic Therapy',desc:t.lang==='it'?'Uso dell\'acqua per trattare vari sintomi; anche terapia acquatica o balneoterapia.':'Using water to treat various symptoms; aquatic therapy or balneotherapy.'},
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heartbeat mr-3 text-sky-300"></i>${t.therapies_title}</h1>
      <p class="text-sky-100 text-lg">${t.therapies_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        ${th.map(x => `
        <div class="card-renu p-6 flex gap-4">
          <div class="icon-circle ${x.ic} flex-shrink-0"><i class="fas ${x.icon} text-xl"></i></div>
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
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-4xl mx-auto">
      <div class="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8 flex gap-4 items-start">
        <i class="fas fa-exclamation-triangle text-amber-500 text-3xl flex-shrink-0"></i>
        <div>
          <h3 class="font-bold text-amber-800 text-xl mb-2">⚠️ ${t.lang==='it'?'Nota Importante':t.lang==='en'?'Important Note':t.lang==='fr'?'Note importante':t.lang==='es'?'Nota importante':'Wichtiger Hinweis'}</h3>
          <p class="text-amber-800 text-lg">${t.about_diagnosis_note}</p>
        </div>
      </div>
      <div class="card-renu card-accent-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-envelope text-sky-500"></i>${t.diagnosis_contact}
        </h2>
        <div class="space-y-4">
          ${[['info@sindromerenu.it','ic-blue','fa-envelope','Info generali'],['segreteria@sindromerenu.it','ic-sky','fa-clipboard','Segreteria']].map(([email,ic,icon,label]) => `
          <a href="mailto:${email}" class="flex items-center gap-4 bg-sky-50 rounded-xl p-4 hover:bg-sky-100 transition-colors group">
            <div class="icon-circle ${ic}"><i class="fas ${icon}"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#082050">${email}</div>
              <div class="text-sm text-gray-500">${label}</div>
            </div>
          </a>`).join('')}
        </div>
      </div>
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050, #1078C0);">
        <h2 class="text-2xl font-bold mb-4"><i class="fas fa-dna mr-2"></i>WGS vs WES</h2>
        <p class="text-sky-100 mb-4">${t.lang==='it'?'Il Sequenziamento dell\'Intero Genoma (WGS) analizza tutta la sequenza del DNA, compresi i geni non codificanti come RNU4-2.':'Whole Genome Sequencing (WGS) analyzes the entire DNA sequence, including non-coding genes like RNU4-2.'}</p>
        <div class="bg-white bg-opacity-10 rounded-xl p-4">
          <p class="font-semibold flex items-center gap-2">
            <i class="fas fa-times-circle text-red-400"></i>
            ${t.lang==='it'?'Il WES NON può rilevare le varianti in RNU4-2!':t.lang==='en'?'WES CANNOT detect variants in RNU4-2!':'WES kann KEINE Varianten in RNU4-2 nachweisen!'}
          </p>
        </div>
      </div>
    </div>
  </section>`
}

// ─── COMMUNITY PAGE ───────────────────────────────────────────────────────────
function communityPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-users mr-3 text-sky-300"></i>${t.community_title}</h1>
        <p class="text-sky-100 text-lg">${t.community_intro}</p>
      </div>
      <div class="flex-shrink-0">
        <img src="/images/famiglia2.png" alt="Famiglie" class="w-64 rounded-2xl shadow-xl opacity-90"
             onerror="this.style.display='none'">
      </div>
    </div>
  </section>
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="card-renu card-accent-blue p-6 text-center">
          <div class="icon-circle ic-blue mx-auto mb-4"><i class="fas fa-map-marked-alt text-xl"></i></div>
          <h3 class="font-bold text-xl mb-3" style="color:#082050">${t.lang==='it'?'Mappa Mondiale':'World Map'}</h3>
          <p class="text-gray-600 mb-4">${t.lang==='it'?'Aggiungi il tuo familiare alla mappa mondiale di RNU4-2.':'Add your family member to the worldwide RNU4-2 map.'}</p>
          <a href="https://form.jotform.com/250154538972159" target="_blank" class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#1078C0" onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
            <i class="fas fa-map-pin"></i>${t.join_registry}
          </a>
        </div>
        <div class="card-renu card-accent-sky p-6 text-center">
          <div class="icon-circle ic-sky mx-auto mb-4"><i class="fas fa-heart text-xl"></i></div>
          <h3 class="font-bold text-xl mb-3" style="color:#082050">${t.lang==='it'?'Rete Genitori':'Parent Network'}</h3>
          <p class="text-gray-600 mb-4">${t.lang==='it'?'Connettiti con famiglie in Italia e nel mondo.':'Connect with families in Italy and worldwide.'}</p>
          <a href="mailto:info@sindromerenu.it" class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#45B8EC" onmouseover="this.style.background='#1078C0'" onmouseout="this.style.background='#45B8EC'">
            <i class="fas fa-envelope"></i>${t.contact_us}
          </a>
        </div>
      </div>

      <!-- Galleria immagini famiglie -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-2 text-center" style="color:#082050">${t.lang==='it'?'La Nostra Comunità':'Our Community'}</h2>
        <div class="wave-sep"></div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          ${[
            ['/images/famiglie.png',t.lang==='it'?'Famiglie':'Families'],
            ['/images/bambini.png',t.lang==='it'?'Bambini':'Children'],
            ['/images/mani.png',t.lang==='it'?'Solidarietà':'Solidarity'],
            ['/images/famiglia2.png',t.lang==='it'?'Unità':'Unity'],
            ['/images/festa.png',t.lang==='it'?'Celebrazione':'Celebration'],
            ['/images/nastro.png',t.lang==='it'?'Consapevolezza':'Awareness'],
          ].map(([src,label]) => `
          <div class="relative rounded-xl overflow-hidden shadow-md group aspect-square">
            <img src="${src}" alt="${label}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 onerror="this.parentElement.style.background='#C8E8F8'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#082050] to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
            <span class="absolute bottom-2 left-2 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">${label}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- Partnership USA -->
      <div class="rounded-2xl p-8 mb-8 text-white" style="background: linear-gradient(135deg, #082050, #1078C0);">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img src="/images/logo.png" alt="Logo" class="w-32 h-auto drop-shadow-lg flex-shrink-0 rounded-xl"
               onerror="this.style.display='none'">
          <div>
            <h3 class="text-2xl font-bold mb-2">ReNU Syndrome United (USA)</h3>
            <p class="text-sky-200 mb-4">${t.lang==='it'?'Sindrome ReNU Italia opera in stretta collaborazione con ReNU Syndrome United degli USA, l\'associazione fondatrice che ci ha concesso il permesso di replicare il loro modello.':'Sindrome ReNU Italia works in close collaboration with ReNU Syndrome United from the USA, who granted us permission to replicate their model.'}</p>
            <a href="https://www.renusyndrome.org" target="_blank" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors" style="color:#082050">
              <i class="fas fa-external-link-alt text-sky-600"></i>www.renusyndrome.org
            </a>
          </div>
        </div>
      </div>

      <!-- Gallery link -->
      <div class="card-renu p-6 text-center">
        <h3 class="font-bold text-xl mb-3" style="color:#082050"><i class="fas fa-images mr-2 text-sky-500"></i>Gallery</h3>
        <p class="text-gray-600 mb-4">${t.lang==='it'?'Guarda le foto dei coraggiosi bambini e famiglie sulla galleria internazionale.':'See photos of our brave children and families on the international gallery.'}</p>
        <a href="https://www.renusyndrome.org/gallery" target="_blank" class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-colors" style="background:#1078C0" onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
          <i class="fas fa-images"></i>${t.lang==='it'?'Visita la Galleria':'Visit Gallery'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── DONATIONS PAGE ───────────────────────────────────────────────────────────
function donationsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heart mr-3 text-sky-300"></i>${t.donations_title}</h1>
        <p class="text-sky-100 text-lg">${t.donations_intro}</p>
      </div>
      <div class="flex-shrink-0">
        <img src="/images/festa.png" alt="Donazioni" class="w-56 rounded-2xl shadow-xl opacity-90"
             onerror="this.style.display='none'">
      </div>
    </div>
  </section>
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-4xl mx-auto">
      <!-- Perché donare -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        ${[
          ['fa-microscope','ic-blue',t.lang==='it'?'Finanzia la Ricerca':'Fund Research',t.lang==='it'?'Supporta la ricerca per trovare terapie.':'Support research to find therapies.'],
          ['fa-users','ic-green',t.lang==='it'?'Costruisci Comunità':'Build Community',t.lang==='it'?'Aiuta a costruire la rete di supporto.':'Help build the support network.'],
          ['fa-bullhorn','ic-purple',t.lang==='it'?'Diffondi Consapevolezza':'Spread Awareness',t.lang==='it'?'Aumenta la visibilità della Sindrome ReNU.':'Increase visibility of ReNU Syndrome.']
        ].map(([icon,ic,title,desc]) => `
        <div class="card-renu p-6 text-center">
          <div class="icon-circle ${ic} mx-auto mb-3"><i class="fas ${icon} text-xl"></i></div>
          <h3 class="font-bold mb-2" style="color:#082050">${title}</h3>
          <p class="text-gray-600 text-sm">${desc}</p>
        </div>`).join('')}
      </div>

      <!-- IBAN -->
      <div class="card-renu card-accent-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-university text-sky-500"></i>${t.lang==='it'?'Bonifico Bancario':'Bank Transfer'}
        </h2>
        <div class="bg-sky-50 rounded-2xl p-6 font-mono space-y-4">
          <div class="border-b border-sky-200 pb-4">
            <span class="text-gray-500 font-sans text-sm">${t.donations_iban_label}</span>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 font-sans mb-1">IBAN</p>
            <p class="text-xl font-bold tracking-wide" style="color:#082050">IT18H0306909606100000004416360</p>
          </div>
          <div class="text-center text-sm font-sans">
            <a href="mailto:donazioni@sindromerenu.it" class="hover:underline font-semibold" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </div>
        </div>
      </div>

      <!-- Move4ReNU -->
      <div class="rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #082050, #1078C0, #45B8EC);">
        <h2 class="text-2xl font-bold mb-3"><i class="fas fa-running mr-2"></i>Move 4 ReNU</h2>
        <p class="text-sky-100 mb-5">${t.lang==='it'?'Muoviti per raccogliere fondi e diffondere la consapevolezza!':'Move to raise funds and spread awareness about ReNU Syndrome!'}</p>
        <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors"
           style="color:#082050">
          <i class="fas fa-external-link-alt text-sky-600"></i>Move 4 ReNU
        </a>
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
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-3xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        ${[
          ['info@sindromerenu.it','ic-blue','fa-envelope',t.lang==='it'?'Info Generali':'General Info'],
          ['donazioni@sindromerenu.it','ic-red','fa-heart',t.lang==='it'?'Donazioni':'Donations'],
          ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',t.lang==='it'?'Segreteria':'Secretariat'],
          ['presidenza@sindromerenu.it','ic-purple','fa-user-tie',t.lang==='it'?'Presidenza':'Presidency']
        ].map(([email,ic,icon,label]) => `
        <a href="mailto:${email}" class="card-renu p-5 flex items-center gap-4 group">
          <div class="icon-circle ${ic}"><i class="fas ${icon}"></i></div>
          <div>
            <div class="font-bold group-hover:underline transition-colors" style="color:#082050">${label}</div>
            <div class="text-sm group-hover:underline" style="color:#1078C0">${email}</div>
          </div>
        </a>`).join('')}
      </div>
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050, #1078C0);">
        <div class="flex items-center gap-4 mb-5">
          <img src="/images/logo.png" alt="Logo" class="h-16 w-auto drop-shadow rounded-xl"
               onerror="this.style.display='none'">
          <div>
            <h2 class="text-xl font-bold">Sindrome ReNU Italia APS</h2>
            <p class="text-sky-200 text-sm">${t.footer_partnership}</p>
          </div>
        </div>
        <div class="space-y-2 text-sky-200 text-sm">
          <div class="flex items-center gap-2"><i class="fas fa-globe w-5 text-sky-400"></i><a href="https://www.sindromerenu.it" class="hover:text-white">www.sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:info@sindromerenu.it" class="hover:text-white">info@sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:Stefania.rocca@sindromerenu.it" class="hover:text-white">Stefania.rocca@sindromerenu.it</a></div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── BROCHURE PAGE ────────────────────────────────────────────────────────────
function brochurePage(t: Record<string, string>): string {
  const brochures = [
    { file: 'brochure-insieme-facciamo-differenza.pdf', thumb: 'CTEp6mH2', title: t.lang==='it'?'Insieme, facciamo la differenza':t.lang==='en'?'Together we make a difference':t.lang==='fr'?'Ensemble nous faisons la différence':t.lang==='es'?'Juntos hacemos la diferencia':'Gemeinsam machen wir den Unterschied', desc: t.lang==='it'?'Sostieni la nostra missione':'Support our mission' },
    { file: 'brochure-nata-renu-italia.pdf', thumb: 'GbPysspb', title: t.lang==='it'?'È nata Sindrome ReNU Italia APS!':t.lang==='en'?'ReNU Syndrome Italy APS is born!':t.lang==='fr'?'Le syndrome ReNU Italie APS est né!':t.lang==='es'?'¡Ha nacido Síndrome ReNU Italia APS!':'ReNU-Syndrom Italien APS ist gegründet!', desc: t.lang==='it'?'La nostra associazione è finalmente realtà':'Our association is finally a reality' },
    { file: 'brochure-finalmente-realta.pdf', thumb: 'HE4kWb3R', title: t.lang==='it'?'Finalmente Realtà':'Finally Reality', desc: t.lang==='it'?'Contribuisci con un gesto concreto':'Contribute with a concrete gesture' },
    { file: 'brochure-donazione-cuore.pdf', thumb: 'Haieyn55', title: t.lang==='it'?'Una donazione dal cuore':'A donation from the heart', desc: t.lang==='it'?'Un piccolo gesto può fare la differenza':'A small gesture can make a difference' },
    { file: 'brochure-un-gesto-speranza.pdf', thumb: 'nBeYaQkm', title: t.lang==='it'?'Un gesto, una speranza':'A gesture, a hope', desc: t.lang==='it'?'Un piccolo aiuto può cambiare una vita':'A small help can change a life' },
    { file: 'brochure-potete-contare.pdf', thumb: 'oi3JFkgN', title: t.lang==='it'?'Potete contare sul nostro sostegno':'You can count on our support', desc: t.lang==='it'?'Insieme facciamo la differenza':'Together we make a difference' },
    { file: 'brochure-fai-differenza.pdf', thumb: 'tezKurU2', title: t.lang==='it'?'Fai la differenza oggi':'Make the difference today', desc: t.lang==='it'?'Ogni contributo conta':'Every contribution counts' },
    { file: 'brochure-vuole-differenza.pdf', thumb: 'wrScJxVD', title: t.lang==='it'?'Vuole fare la differenza':'Wants to make a difference', desc: t.lang==='it'?'Un gesto semplice può fare una grande differenza':'A simple gesture can make a big difference' },
    { file: 'brochure-9.pdf', thumb: 'Yq3JGoqG', title: t.lang==='it'?'Informazioni Sindrome ReNU':'ReNU Syndrome Information', desc: t.lang==='it'?'Brochure informativa':'Information brochure' },
    { file: 'brochure-10.pdf', thumb: 'Z8ZpGIJf', title: t.lang==='it'?'Ricerca e Speranza':'Research and Hope', desc: t.lang==='it'?'La nostra missione':'Our mission' },
    { file: 'brochure-11.pdf', thumb: 'cIu2S5WN', title: t.lang==='it'?'Supporto alle Famiglie':'Family Support', desc: t.lang==='it'?'Per le famiglie italiane':'For Italian families' },
    { file: 'brochure-12.pdf', thumb: 'cfUJm9DR', title: t.lang==='it'?'Consapevolezza ReNU':'ReNU Awareness', desc: t.lang==='it'?'Diffondi la consapevolezza':'Spread awareness' },
    { file: 'brochure-13.pdf', thumb: 'dMUbSZ4i', title: t.lang==='it'?'Donazione e Impatto':'Donation and Impact', desc: t.lang==='it'?'Il tuo contributo conta':'Your contribution matters' },
    { file: 'brochure-14.pdf', thumb: 'uuuGU5Eo', title: t.lang==='it'?'Genetica e Diagnosi':'Genetics and Diagnosis', desc: t.lang==='it'?'Informazioni diagnostiche':'Diagnostic information' },
  ]
  return `
  <!-- HERO -->
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-file-pdf mr-3 text-sky-300"></i>${t.brochure_title}</h1>
      <p class="text-sky-100 text-lg">${t.brochure_intro}</p>
    </div>
  </section>

  <section class="py-16 px-4" style="background: linear-gradient(180deg, #EBF7FD 0%, #FFFFFF 100%);">
    <div class="max-w-6xl mx-auto">

      <!-- Istruzione download -->
      <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-10 flex gap-3 items-center">
        <i class="fas fa-info-circle text-sky-500 text-2xl flex-shrink-0"></i>
        <p class="text-sky-800">${t.lang==='it'?'Clicca su "Scarica PDF" per scaricare e condividere le brochure. Puoi stamparle e distribuirle per diffondere la consapevolezza sulla Sindrome ReNU in Italia.':t.lang==='en'?'Click "Download PDF" to download and share the brochures. You can print and distribute them to spread awareness about ReNU Syndrome in Italy.':'Cliquez sur "Télécharger PDF" pour télécharger et partager les brochures.'}</p>
      </div>

      <!-- Griglia brochure con thumbnail reale -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-12">
        ${brochures.map(b => `
        <div class="card-renu card-accent-blue overflow-hidden flex flex-col group">
          <!-- Thumbnail preview reale -->
          <div class="relative overflow-hidden bg-sky-50" style="height:200px">
            <img src="/brochure/thumbnails/${b.thumb}.png" alt="${b.title}"
                 class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div style="display:none;height:200px" class="w-full bg-gradient-to-br from-sky-200 to-blue-300 items-center justify-center flex-col gap-2">
              <i class="fas fa-file-pdf text-white text-5xl"></i>
              <span class="text-white text-xs font-bold text-center px-2">PDF</span>
            </div>
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-[#082050] bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
              <i class="fas fa-download text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
          <!-- Info -->
          <div class="p-4 flex-1 flex flex-col bg-white">
            <h3 class="font-bold text-sm leading-snug mb-1" style="color:#082050">${b.title}</h3>
            <p class="text-gray-500 text-xs mb-4 flex-1">${b.desc}</p>
            <a href="/brochure/${b.file}" download
               class="inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
               style="background:#1078C0"
               onmouseover="this.style.background='#082050'" onmouseout="this.style.background='#1078C0'">
              <i class="fas fa-download"></i>${t.brochure_download}
            </a>
          </div>
        </div>`).join('')}
      </div>

      <!-- Banner scarica tutto -->
      <div class="rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 60%, #45B8EC 100%);">
        <i class="fas fa-file-archive text-5xl text-sky-300 mb-4 block"></i>
        <h2 class="text-2xl font-bold mb-2">${t.lang==='it'?'Scarica tutte le brochure':t.lang==='en'?'Download all brochures':t.lang==='fr'?'Télécharger toutes les brochures':t.lang==='es'?'Descargar todos los folletos':'Alle Broschüren herunterladen'}</h2>
        <p class="text-sky-200 mb-6">${t.lang==='it'?'Condividi le nostre brochure per diffondere la consapevolezza sulla Sindrome ReNU in Italia.':t.lang==='en'?'Share our brochures to spread awareness about ReNU Syndrome in Italy.':'Compartilhe nossas brochuras para difundir o conhecimento.'}</p>
        <div class="flex flex-wrap justify-center gap-2">
          ${brochures.map(b => `
          <a href="/brochure/${b.file}" download
             class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
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
  home: homePage,
  about: aboutPage,
  research: researchPage,
  therapies: therapiesPage,
  diagnosis: diagnosisPage,
  community: communityPage,
  donations: donationsPage,
  contact: contactPage,
  brochure: brochurePage,
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
