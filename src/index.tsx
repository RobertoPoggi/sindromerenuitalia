import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/favicon.svg', serveStatic({ root: './public' }))

// Language translations
const translations: Record<string, Record<string, string>> = {
  it: {
    lang: 'it',
    langName: 'Italiano',
    title: 'Sindrome ReNU Italia',
    subtitle: 'Una condizione genetica di nuova identificazione. Uno sforzo di ricerca coordinato a livello globale.',
    hero_text: 'RNU4-2 emerge come una delle principali cause di disturbi del neurosviluppo rari – <strong>Rinnovando la Speranza per le Famiglie</strong>',
    hero_desc: 'La Sindrome ReNU è un disturbo spliceosomale con un hotspot mutazionale definito e un dataset globale crescente, creando un\'opportunità terapeutica straordinariamente accessibile. È notevole che circa 100.000 individui a livello globale che si prevede abbiano la Sindrome ReNU presentino variazioni del DNA in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-teal-400 hover:underline">13 posizioni</a> degli oltre 3 miliardi di paia di basi del nostro codice genetico!',
    nav_home: 'Home',
    nav_about: 'Cos\'è ReNU',
    nav_research: 'Ricerca',
    nav_therapies: 'Terapie',
    nav_diagnosis: 'Diagnosi',
    nav_community: 'Comunità',
    nav_donations: 'Donazioni',
    nav_contact: 'Contatti',
    btn_diagnosis: 'VUOI UNA DIAGNOSI? CLICCA QUI',
    btn_diagnosis_sub: 'Elenco degli indirizzi in Italia dove puoi fare il testing',
    section_map_title: 'Registrati qui',
    section_map_desc: 'La forza è nei numeri! Condividi la tua rarità: aggiungi un tuo caro con ReNU alla mappa o alla galleria per aumentare la consapevolezza.',
    section_awareness_title: 'Aumenta la Consapevolezza',
    section_awareness_desc: 'Partecipa o sostieni gli eventi ReNU Speranza per aiutarci a diffondere la consapevolezza!',
    section_research_title: 'Ricerca',
    section_research_desc: 'Partecipa ora per accelerare la ricerca e lo sviluppo di nuovi farmaci, dispositivi o altre terapie!',
    section_info_title: 'Maggiori Informazioni',
    section_info_desc: 'Scopri come si manifesta la ReNU, le caratteristiche tipiche, come viene influenzato lo sviluppo e perché è stata scoperta solo di recente!',
    section_parents_title: 'Connessione tra Genitori',
    section_parents_desc: 'Non sei solo! Trova speranza e comunità con i genitori di bambini con Sindrome ReNU in tutto il mondo, che capiscono e si immedesimano nella tua esperienza.',
    section_donations_title: 'Donazioni',
    section_donations_desc: 'Promuovere la ricerca, costruire comunità e diffondere la consapevolezza... c\'è ancora tanto da imparare e il cielo è il limite!',
    about_title: 'Cos\'è la Sindrome ReNU?',
    about_what: 'Come si manifesta la ReNU?',
    about_gene: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2, un gene dell\'RNA non codificante che è componente critico del macchinario di splicing dell\'RNA. Questo gene è altamente conservato evolutivamente, il che significa che si trova quasi identico in tutti gli organismi multicellulari.',
    about_discovery: 'Scoperta di RNU4-2',
    about_discovery_text: 'RNU4-2 è stata identificata nell\'ottobre 2024 come una delle principali cause genetiche di disturbi rari del neurosviluppo, colpendo circa 1 su 35.000 nati vivi. Complessivamente, si stima che la condizione abbia una prevalenza di circa 1 su 35.000 nascite.',
    about_features_title: 'Esempi di alcune caratteristiche nelle persone con Sindrome ReNU',
    about_brain: 'Anomalie cerebrali',
    about_brain_items: 'Volume ridotto della materia bianca, anomalie non specifiche della materia bianca, ipoplasia del corpo calloso, ventricomegalia, mielinizzazione ritardata',
    about_development: 'Disabilità intellettiva e del neurosviluppo',
    about_development_items: 'Ritardi nel raggiungimento delle tappe di sviluppo, limitazioni significative nel funzionamento intellettivo e nel comportamento adattivo',
    about_seizures: 'Epilessia',
    about_seizures_items: 'Alcuni partecipanti alla ricerca hanno sperimentato spasmi infantili, crisi focali e tonico-cloniche generalizzate, crisi febbrili o stato epilettico',
    about_vision: 'Problemi visivi',
    about_vision_items: 'Ipoplasia del nervo ottico, compromissione visiva corticale (CVI), strabismo, nistagmo',
    about_face: 'Caratteristiche del viso',
    about_face_items: 'Viso miopatico con occhi profondi, epicanto, radice nasale larga, narici anteverse, grandi orecchie a coppa, guance piene, bocca distintiva con labbra piene agli angoli rivolti verso il basso, palato arcuato alto, lingua grande o protrudente',
    about_muscle: 'Tono muscolare',
    about_muscle_items: 'Ipotonia (basso tono muscolare) o debolezza muscolare',
    about_mobility: 'Mobilità',
    about_mobility_items: 'Ritardo nel cammino, incapacità di camminare o compromissione della mobilità',
    about_growth: 'Crescita',
    about_growth_items: 'Microcefalia, bassa statura, ipotiroidismo o deficit dell\'ormone della crescita',
    about_feeding: 'Alimentazione',
    about_feeding_items: 'Difficoltà di alimentazione e scialorrea eccessiva, stipsi, reflusso gastroesofageo, sondino G',
    about_communication: 'Comunicazione',
    about_communication_items: 'Difficoltà nell\'acquisizione del linguaggio (ma possono sviluppare metodi di comunicazione alternativi)',
    about_bones: 'Problemi ossei',
    about_bones_items: 'Bassa densità ossea, displasia dell\'anca e/o fratture ricorrenti',
    about_happy: 'Aneddoticamente, molte persone colpite dalla Sindrome ReNU mostrano anche un temperamento felice, possono utilizzare mezzi alternativi di comunicazione, sono affettuose e tendono ad apprezzare le altalene, battere le mani, le routine, giocare con l\'acqua, bere acqua, cantare e la musica.',
    about_diagnosis_note: 'In Italia, per diagnosticare RNU4-2, è necessario il sequenziamento dell\'intero genoma (WGS); il sequenziamento dell\'intero esoma (WES) non è in grado di rilevarlo!',
    research_title: 'Ricerca sulla Sindrome ReNU',
    research_intro: 'TU puoi far avanzare la ricerca verso opzioni di trattamento per ReNU!',
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, da qualsiasi paese, <a href="https://thecrid.org/" target="_blank" class="text-teal-400 hover:underline">crea un ID di Ricerca Clinica (CRID)</a>! Questo è fondamentale per utilizzare i dati di ricerca raccolti su più piattaforme.',
    research_priorities_title: 'Cosa è importante per la comunità RNU4-2?',
    research_priorities_intro: 'Top 10 priorità in ordine di classifica:',
    therapies_title: 'Terapie per la Sindrome ReNU',
    therapies_intro: 'Molti servizi terapeutici sono attualmente utilizzati per aiutare le persone con Sindrome ReNU',
    therapies_note: 'Questo sito non approva né raccomanda terapie specifiche. Consultare sempre un medico per consigli medici.',
    diagnosis_title: 'Dove fare il Test Diagnostico in Italia',
    diagnosis_intro: 'Se sospetti che un familiare possa avere la Sindrome ReNU, contattaci per ricevere informazioni sui centri diagnostici disponibili in Italia.',
    diagnosis_contact: 'Per informazioni sui centri dove effettuare il sequenziamento del genoma completo (WGS) in Italia, contattaci a:',
    community_title: 'Comunità – Connessione tra Famiglie',
    community_intro: 'Non sei solo! Trova speranza e comunità con altre famiglie in Italia e nel mondo.',
    donations_title: 'Sostienici con una Donazione',
    donations_intro: 'Le donazioni ci permettono di promuovere la ricerca, costruire la comunità italiana e diffondere la consapevolezza sulla Sindrome ReNU.',
    donations_iban: 'Per donare tramite bonifico bancario:',
    contact_title: 'Contatti',
    contact_intro: 'Siamo a tua disposizione per qualsiasi informazione sulla Sindrome ReNU Italia.',
    footer_rights: '© 2025 Sindrome ReNU Italia. Tutti i diritti riservati.',
    footer_partnership: 'In partnership con ReNU Syndrome United (USA)',
    read_more: 'Leggi di più',
    donate_now: 'Dona Ora',
    join_registry: 'Unisciti al Registro',
    learn_more: 'Scopri di più',
    contact_us: 'Contattaci',
  },
  en: {
    lang: 'en',
    langName: 'English',
    title: 'ReNU Syndrome Italy',
    subtitle: 'A newly identified genetic condition. A globally coordinated research effort.',
    hero_text: 'RNU4-2 Emerges as a Leading Cause of Rare Neurodevelopmental Disorders – <strong>Renewing Hope for Families</strong>',
    hero_desc: 'ReNU syndrome is a spliceosomal disorder with a defined mutational hotspot and growing global dataset creating a uniquely actionable opportunity for therapeutic development. It is remarkable that around 100,000 individuals globally who are predicted to have ReNU syndrome have DNA changes in just <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-teal-400 hover:underline">13</a> of the over 3 billion base-pairs of our genetic code!',
    nav_home: 'Home',
    nav_about: 'About ReNU',
    nav_research: 'Research',
    nav_therapies: 'Therapies',
    nav_diagnosis: 'Diagnosis',
    nav_community: 'Community',
    nav_donations: 'Donations',
    nav_contact: 'Contact',
    btn_diagnosis: 'WANT A DIAGNOSIS? CLICK HERE',
    btn_diagnosis_sub: 'List of addresses in Italy where you can get tested',
    section_map_title: 'Register Here',
    section_map_desc: 'There\'s strength in numbers! Share your rare: add a ReNU loved one to the map or gallery to raise awareness.',
    section_awareness_title: 'Raise Awareness',
    section_awareness_desc: 'Attend or support ReNU Hope events to help raise awareness with us!',
    section_research_title: 'Research',
    section_research_desc: 'Participate now to accelerate research and the development of new drugs, devices, or other therapies!',
    section_info_title: 'More Information',
    section_info_desc: 'Learn about how ReNU occurs, typical features and characteristics, how development is affected, and why this was only recently discovered!',
    section_parents_title: 'Parent Connection',
    section_parents_desc: 'You\'re not alone! Find hope and community with ReNU Syndrome parents worldwide who understand and relate to your experience.',
    section_donations_title: 'Donations',
    section_donations_desc: 'Promoting research, building community, and spreading awareness...there\'s still lots to learn and the sky is the limit!',
    about_title: 'What is ReNU Syndrome?',
    about_what: 'How does ReNU manifest?',
    about_gene: 'ReNU Syndrome is caused by pathogenic variants in the RNU4-2 gene, a non-coding RNA gene that is a critical component of the RNA splicing machinery. This gene is evolutionarily highly conserved, meaning it is found almost identically in all multicellular organisms.',
    about_discovery: 'Discovery of RNU4-2',
    about_discovery_text: 'RNU4-2 was identified in October 2024 as one of the leading genetic causes of rare neurodevelopmental disorders, affecting approximately 1 in 35,000 live births. Overall, the condition is estimated to have a prevalence of approximately 1 in 35,000 births.',
    about_features_title: 'Examples of Some Traits in Individuals with ReNU Syndrome',
    about_brain: 'Brain Abnormalities',
    about_brain_items: 'Reduced white matter volume, non-specific white matter abnormalities, corpus callosum hypoplasia, ventriculomegaly, delayed myelination',
    about_development: 'Intellectual & Neurodevelopmental Disability',
    about_development_items: 'Delayed developmental milestones, significant limitations in intellectual functioning and adaptive behavior',
    about_seizures: 'Epilepsy',
    about_seizures_items: 'Some research participants experienced infantile spasms, focal and generalized tonic-clonic seizures, febrile seizures, or status epilepticus',
    about_vision: 'Visual Problems',
    about_vision_items: 'Optic nerve hypoplasia, cortical vision impairment (CVI), strabismus, nystagmus',
    about_face: 'Facial Features',
    about_face_items: 'Myopathic face with deep-set eyes, epicanthus, wide nasal bridge, anteverted nares, large cupped ears, full cheeks, distinctive mouth with full lips with downturned corners, high arched palate, large or protruding tongue',
    about_muscle: 'Muscle Tone',
    about_muscle_items: 'Hypotonia (low muscle tone) or muscle weakness',
    about_mobility: 'Mobility',
    about_mobility_items: 'Delayed walking, inability to walk, or mobility impairment',
    about_growth: 'Growth',
    about_growth_items: 'Microcephaly, short stature, hypothyroidism or growth hormone deficiency',
    about_feeding: 'Feeding',
    about_feeding_items: 'Feeding difficulties and excessive drooling, constipation, gastroesophageal reflux disease, G-tube',
    about_communication: 'Communication',
    about_communication_items: 'Difficulty acquiring language (but may develop alternative communication skills)',
    about_bones: 'Bone Issues',
    about_bones_items: 'Low bone density, hip dysplasia, and/or recurrent fractures',
    about_happy: 'Anecdotally, many people affected by ReNU Syndrome also exhibit a happy demeanor, may use alternative means of communication, are affectionate, and tend to enjoy swings, clapping, routines, playing with water, drinking water, humming, and music.',
    about_diagnosis_note: 'In Italy, whole genome sequencing (WGS) is needed to diagnose RNU4-2, and whole exome sequencing (WES) will not find it!',
    research_title: 'ReNU Syndrome Research',
    research_intro: 'YOU can advance research towards ReNU treatment options!',
    research_crid: 'Before enrolling in research, from ANY country, <a href="https://thecrid.org/" target="_blank" class="text-teal-400 hover:underline">Create a Clinical Research ID (CRID)</a>! This is crucial to using the research data collected across platforms and research programs.',
    research_priorities_title: 'What\'s important to the RNU4-2 Community?',
    research_priorities_intro: 'Top 10 priorities in rank order:',
    therapies_title: 'Therapies for ReNU Syndrome',
    therapies_intro: 'Many therapeutic services are currently being used to aid people with ReNU Syndrome',
    therapies_note: 'This site does not endorse or recommend any specific therapies. Always consult a physician for medical advice.',
    diagnosis_title: 'Where to get Diagnosed in Italy',
    diagnosis_intro: 'If you suspect a family member may have ReNU Syndrome, contact us to receive information about diagnostic centers available in Italy.',
    diagnosis_contact: 'For information on centers where you can get whole genome sequencing (WGS) in Italy, contact us at:',
    community_title: 'Community – Family Connection',
    community_intro: 'You\'re not alone! Find hope and community with other families in Italy and worldwide.',
    donations_title: 'Support Us with a Donation',
    donations_intro: 'Donations allow us to promote research, build the Italian community and spread awareness about ReNU Syndrome.',
    donations_iban: 'To donate via bank transfer:',
    contact_title: 'Contact Us',
    contact_intro: 'We are available for any information about ReNU Syndrome Italy.',
    footer_rights: '© 2025 ReNU Syndrome Italy. All rights reserved.',
    footer_partnership: 'In partnership with ReNU Syndrome United (USA)',
    read_more: 'Read More',
    donate_now: 'Donate Now',
    join_registry: 'Join Registry',
    learn_more: 'Learn More',
    contact_us: 'Contact Us',
  },
  fr: {
    lang: 'fr',
    langName: 'Français',
    title: 'Syndrome ReNU Italie',
    subtitle: 'Une condition génétique nouvellement identifiée. Un effort de recherche coordonné au niveau mondial.',
    hero_text: 'RNU4-2 émerge comme une cause majeure de troubles rares du développement neurologique – <strong>Renouvelant l\'espoir pour les familles</strong>',
    hero_desc: 'Le syndrome ReNU est un trouble splicéosomal avec un hotspot mutationnel défini et un ensemble de données mondial croissant, créant une opportunité thérapeutique unique. Il est remarquable qu\'environ 100 000 personnes dans le monde aient des modifications ADN dans seulement <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-teal-400 hover:underline">13 positions</a> sur plus de 3 milliards de paires de bases!',
    nav_home: 'Accueil',
    nav_about: 'À propos de ReNU',
    nav_research: 'Recherche',
    nav_therapies: 'Thérapies',
    nav_diagnosis: 'Diagnostic',
    nav_community: 'Communauté',
    nav_donations: 'Dons',
    nav_contact: 'Contact',
    btn_diagnosis: 'VOUS VOULEZ UN DIAGNOSTIC? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Liste des adresses en Italie où vous pouvez faire le test',
    section_map_title: 'Inscrivez-vous ici',
    section_map_desc: 'La force est dans le nombre! Partagez votre rareté: ajoutez un proche atteint de ReNU à la carte ou à la galerie.',
    section_awareness_title: 'Sensibiliser',
    section_awareness_desc: 'Participez ou soutenez les événements ReNU Espoir pour aider à sensibiliser!',
    section_research_title: 'Recherche',
    section_research_desc: 'Participez maintenant pour accélérer la recherche et le développement de nouveaux médicaments!',
    section_info_title: 'Plus d\'informations',
    section_info_desc: 'Découvrez comment ReNU se manifeste, les caractéristiques typiques et comment le développement est affecté!',
    section_parents_title: 'Connexion des parents',
    section_parents_desc: 'Vous n\'êtes pas seul! Trouvez espoir et communauté avec des parents du monde entier.',
    section_donations_title: 'Dons',
    section_donations_desc: 'Promouvoir la recherche, construire la communauté et répandre la sensibilisation!',
    about_title: 'Qu\'est-ce que le Syndrome ReNU?',
    about_what: 'Comment ReNU se manifeste-t-il?',
    about_gene: 'Le Syndrome ReNU est causé par des variants pathogènes du gène RNU4-2, un gène ARN non codant qui est un composant critique de la machinerie d\'épissage de l\'ARN.',
    about_discovery: 'Découverte de RNU4-2',
    about_discovery_text: 'RNU4-2 a été identifié en octobre 2024 comme l\'une des principales causes génétiques de troubles rares du développement neurologique.',
    about_features_title: 'Exemples de traits chez les individus atteints du Syndrome ReNU',
    about_brain: 'Anomalies cérébrales',
    about_brain_items: 'Volume réduit de la substance blanche, anomalies de la substance blanche, hypoplasie du corps calleux, ventriculomégalie',
    about_development: 'Déficience intellectuelle et du développement',
    about_development_items: 'Retards dans les étapes de développement, limitations significatives du fonctionnement intellectuel',
    about_seizures: 'Épilepsie',
    about_seizures_items: 'Spasmes infantiles, crises focales et tonico-cloniques généralisées, crises fébriles',
    about_vision: 'Problèmes visuels',
    about_vision_items: 'Hypoplasie du nerf optique, déficience visuelle corticale, strabisme, nystagmus',
    about_face: 'Caractéristiques du visage',
    about_face_items: 'Visage myopathique avec yeux enfoncés, épicanthus, pont nasal large, narines antéversées, grandes oreilles, joues pleines',
    about_muscle: 'Tonus musculaire',
    about_muscle_items: 'Hypotonie (faible tonus musculaire) ou faiblesse musculaire',
    about_mobility: 'Mobilité',
    about_mobility_items: 'Marche retardée, incapacité à marcher ou déficience de la mobilité',
    about_growth: 'Croissance',
    about_growth_items: 'Microcéphalie, petite taille, hypothyroïdie ou déficit en hormone de croissance',
    about_feeding: 'Alimentation',
    about_feeding_items: 'Difficultés alimentaires et salivation excessive, constipation, reflux gastro-oesophagien',
    about_communication: 'Communication',
    about_communication_items: 'Difficultés d\'acquisition du langage (mais peuvent développer des compétences de communication alternatives)',
    about_bones: 'Problèmes osseux',
    about_bones_items: 'Faible densité osseuse, dysplasie de la hanche et/ou fractures récurrentes',
    about_happy: 'Anecdotiquement, beaucoup de personnes atteintes du Syndrome ReNU présentent également un tempérament heureux, peuvent utiliser des moyens alternatifs de communication, sont affectueuses.',
    about_diagnosis_note: 'En Italie, le séquençage du génome entier (WGS) est nécessaire pour diagnostiquer RNU4-2!',
    research_title: 'Recherche sur le Syndrome ReNU',
    research_intro: 'VOUS pouvez faire avancer la recherche vers des options de traitement pour ReNU!',
    research_crid: 'Avant de s\'inscrire à une recherche, depuis n\'importe quel pays, <a href="https://thecrid.org/" target="_blank" class="text-teal-400 hover:underline">créez un ID de recherche clinique (CRID)</a>!',
    research_priorities_title: 'Qu\'est-ce qui est important pour la communauté RNU4-2?',
    research_priorities_intro: 'Top 10 des priorités par ordre de classement:',
    therapies_title: 'Thérapies pour le Syndrome ReNU',
    therapies_intro: 'De nombreux services thérapeutiques sont actuellement utilisés pour aider les personnes atteintes du Syndrome ReNU',
    therapies_note: 'Ce site n\'approuve ni ne recommande de thérapies spécifiques. Consultez toujours un médecin.',
    diagnosis_title: 'Où se faire diagnostiquer en Italie',
    diagnosis_intro: 'Si vous suspectez qu\'un membre de votre famille pourrait avoir le Syndrome ReNU, contactez-nous.',
    diagnosis_contact: 'Pour des informations sur les centres en Italie:',
    community_title: 'Communauté – Connexion des familles',
    community_intro: 'Vous n\'êtes pas seul! Trouvez espoir et communauté avec d\'autres familles.',
    donations_title: 'Soutenez-nous avec un don',
    donations_intro: 'Les dons nous permettent de promouvoir la recherche et de diffuser la sensibilisation.',
    donations_iban: 'Pour faire un don par virement bancaire:',
    contact_title: 'Contactez-nous',
    contact_intro: 'Nous sommes disponibles pour toute information sur le Syndrome ReNU Italie.',
    footer_rights: '© 2025 Syndrome ReNU Italie. Tous droits réservés.',
    footer_partnership: 'En partenariat avec ReNU Syndrome United (USA)',
    read_more: 'Lire la suite',
    donate_now: 'Faire un don',
    join_registry: 'Rejoindre le registre',
    learn_more: 'En savoir plus',
    contact_us: 'Contactez-nous',
  },
  es: {
    lang: 'es',
    langName: 'Español',
    title: 'Síndrome ReNU Italia',
    subtitle: 'Una condición genética recién identificada. Un esfuerzo de investigación coordinado a nivel mundial.',
    hero_text: 'RNU4-2 emerge como una causa principal de trastornos raros del neurodesarrollo – <strong>Renovando la Esperanza para las Familias</strong>',
    hero_desc: 'El Síndrome ReNU es un trastorno spliceosomal con un hotspot mutacional definido y un conjunto de datos global en crecimiento. Es notable que alrededor de 100.000 personas en todo el mundo tengan cambios en el ADN en solo <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-teal-400 hover:underline">13 posiciones</a> de más de 3.000 millones de pares de bases!',
    nav_home: 'Inicio',
    nav_about: 'Sobre ReNU',
    nav_research: 'Investigación',
    nav_therapies: 'Terapias',
    nav_diagnosis: 'Diagnóstico',
    nav_community: 'Comunidad',
    nav_donations: 'Donaciones',
    nav_contact: 'Contacto',
    btn_diagnosis: '¿QUIERES UN DIAGNÓSTICO? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Lista de direcciones en Italia donde puedes hacerte la prueba',
    section_map_title: 'Regístrate aquí',
    section_map_desc: '¡La fuerza está en los números! Comparte tu rareza: añade a un ser querido con ReNU al mapa o galería.',
    section_awareness_title: 'Aumentar la conciencia',
    section_awareness_desc: '¡Asiste o apoya eventos ReNU Esperanza para ayudar a aumentar la conciencia!',
    section_research_title: 'Investigación',
    section_research_desc: '¡Participa ahora para acelerar la investigación y el desarrollo de nuevos medicamentos!',
    section_info_title: 'Más información',
    section_info_desc: '¡Aprende sobre cómo ocurre ReNU, las características típicas y cómo se ve afectado el desarrollo!',
    section_parents_title: 'Conexión de padres',
    section_parents_desc: '¡No estás solo! Encuentra esperanza y comunidad con padres de todo el mundo.',
    section_donations_title: 'Donaciones',
    section_donations_desc: '¡Promover la investigación, construir comunidad y difundir conciencia!',
    about_title: '¿Qué es el Síndrome ReNU?',
    about_what: '¿Cómo se manifiesta ReNU?',
    about_gene: 'El Síndrome ReNU es causado por variantes patogénicas en el gen RNU4-2, un gen de ARN no codificante que es un componente crítico de la maquinaria de splicing del ARN.',
    about_discovery: 'Descubrimiento de RNU4-2',
    about_discovery_text: 'RNU4-2 fue identificado en octubre de 2024 como una de las principales causas genéticas de trastornos raros del neurodesarrollo.',
    about_features_title: 'Ejemplos de algunos rasgos en individuos con Síndrome ReNU',
    about_brain: 'Anomalías cerebrales',
    about_brain_items: 'Volumen reducido de materia blanca, anomalías de materia blanca, hipoplasia del cuerpo calloso, ventriculomegalia',
    about_development: 'Discapacidad intelectual y del neurodesarrollo',
    about_development_items: 'Retrasos en hitos del desarrollo, limitaciones significativas en el funcionamiento intelectual',
    about_seizures: 'Epilepsia',
    about_seizures_items: 'Espasmos infantiles, convulsiones focales y tónico-clónicas generalizadas, convulsiones febriles',
    about_vision: 'Problemas visuales',
    about_vision_items: 'Hipoplasia del nervio óptico, deterioro visual cortical, estrabismo, nistagmo',
    about_face: 'Características faciales',
    about_face_items: 'Cara miopática con ojos hundidos, epicanto, puente nasal ancho, narinas antevertidas, orejas grandes',
    about_muscle: 'Tono muscular',
    about_muscle_items: 'Hipotonía (bajo tono muscular) o debilidad muscular',
    about_mobility: 'Movilidad',
    about_mobility_items: 'Retraso en caminar, incapacidad de caminar o deterioro de la movilidad',
    about_growth: 'Crecimiento',
    about_growth_items: 'Microcefalia, baja estatura, hipotiroidismo o deficiencia de hormona de crecimiento',
    about_feeding: 'Alimentación',
    about_feeding_items: 'Dificultades de alimentación y babeo excesivo, estreñimiento, reflujo gastroesofágico',
    about_communication: 'Comunicación',
    about_communication_items: 'Dificultad para adquirir lenguaje (pero pueden desarrollar habilidades de comunicación alternativas)',
    about_bones: 'Problemas óseos',
    about_bones_items: 'Baja densidad ósea, displasia de cadera y/o fracturas recurrentes',
    about_happy: 'Anecdóticamente, muchas personas afectadas por el Síndrome ReNU también muestran un temperamento feliz, pueden usar medios alternativos de comunicación y son cariñosas.',
    about_diagnosis_note: '¡En Italia, se necesita secuenciación del genoma completo (WGS) para diagnosticar RNU4-2!',
    research_title: 'Investigación sobre el Síndrome ReNU',
    research_intro: '¡TÚ puedes hacer avanzar la investigación hacia opciones de tratamiento para ReNU!',
    research_crid: 'Antes de inscribirse en investigación, desde CUALQUIER país, <a href="https://thecrid.org/" target="_blank" class="text-teal-400 hover:underline">crea un ID de Investigación Clínica (CRID)</a>!',
    research_priorities_title: '¿Qué es importante para la comunidad RNU4-2?',
    research_priorities_intro: 'Top 10 de prioridades en orden de clasificación:',
    therapies_title: 'Terapias para el Síndrome ReNU',
    therapies_intro: 'Muchos servicios terapéuticos se utilizan actualmente para ayudar a las personas con Síndrome ReNU',
    therapies_note: 'Este sitio no aprueba ni recomienda terapias específicas. Siempre consulte a un médico.',
    diagnosis_title: 'Dónde hacerse el diagnóstico en Italia',
    diagnosis_intro: 'Si sospecha que un familiar puede tener el Síndrome ReNU, contáctenos.',
    diagnosis_contact: 'Para información sobre centros en Italia:',
    community_title: 'Comunidad – Conexión de familias',
    community_intro: 'No estás solo. Encuentra esperanza y comunidad con otras familias.',
    donations_title: 'Apóyanos con una donación',
    donations_intro: 'Las donaciones nos permiten promover la investigación y difundir la conciencia.',
    donations_iban: 'Para donar mediante transferencia bancaria:',
    contact_title: 'Contáctenos',
    contact_intro: 'Estamos disponibles para cualquier información sobre el Síndrome ReNU Italia.',
    footer_rights: '© 2025 Síndrome ReNU Italia. Todos los derechos reservados.',
    footer_partnership: 'En asociación con ReNU Syndrome United (EE.UU.)',
    read_more: 'Leer más',
    donate_now: 'Donar ahora',
    join_registry: 'Unirse al registro',
    learn_more: 'Más información',
    contact_us: 'Contáctenos',
  },
  de: {
    lang: 'de',
    langName: 'Deutsch',
    title: 'ReNU-Syndrom Italien',
    subtitle: 'Eine neu identifizierte genetische Erkrankung. Eine global koordinierte Forschungsarbeit.',
    hero_text: 'RNU4-2 entwickelt sich zu einer führenden Ursache seltener neurologischer Entwicklungsstörungen – <strong>Neue Hoffnung für Familien</strong>',
    hero_desc: 'Das ReNU-Syndrom ist eine Spliceosom-Störung mit einem definierten Mutationsschwerpunkt und einem wachsenden globalen Datensatz. Es ist bemerkenswert, dass etwa 100.000 Menschen weltweit DNA-Veränderungen in nur <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-teal-400 hover:underline">13 Positionen</a> von über 3 Milliarden Basenpaaren haben!',
    nav_home: 'Startseite',
    nav_about: 'Über ReNU',
    nav_research: 'Forschung',
    nav_therapies: 'Therapien',
    nav_diagnosis: 'Diagnose',
    nav_community: 'Gemeinschaft',
    nav_donations: 'Spenden',
    nav_contact: 'Kontakt',
    btn_diagnosis: 'MÖCHTEN SIE EINE DIAGNOSE? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Liste der Adressen in Italien, wo Sie sich testen lassen können',
    section_map_title: 'Hier registrieren',
    section_map_desc: 'Stärke in der Zahl! Teilen Sie Ihre Seltenheit: Fügen Sie einen geliebten Menschen mit ReNU zur Karte oder Galerie hinzu.',
    section_awareness_title: 'Bewusstsein schaffen',
    section_awareness_desc: 'Nehmen Sie an ReNU-Hoffnungsveranstaltungen teil oder unterstützen Sie sie!',
    section_research_title: 'Forschung',
    section_research_desc: 'Nehmen Sie jetzt teil, um die Forschung zu beschleunigen!',
    section_info_title: 'Weitere Informationen',
    section_info_desc: 'Erfahren Sie, wie ReNU auftritt, typische Merkmale und wie die Entwicklung beeinflusst wird!',
    section_parents_title: 'Elternverbindung',
    section_parents_desc: 'Sie sind nicht allein! Finden Sie Hoffnung und Gemeinschaft mit Eltern weltweit.',
    section_donations_title: 'Spenden',
    section_donations_desc: 'Forschung fördern, Gemeinschaft aufbauen und Bewusstsein schaffen!',
    about_title: 'Was ist das ReNU-Syndrom?',
    about_what: 'Wie manifestiert sich ReNU?',
    about_gene: 'Das ReNU-Syndrom wird durch pathogene Varianten im RNU4-2-Gen verursacht, einem nicht-kodierenden RNA-Gen, das ein kritischer Bestandteil der RNA-Spleißmaschinerie ist.',
    about_discovery: 'Entdeckung von RNU4-2',
    about_discovery_text: 'RNU4-2 wurde im Oktober 2024 als eine der führenden genetischen Ursachen seltener neurologischer Entwicklungsstörungen identifiziert.',
    about_features_title: 'Beispiele für Merkmale bei Personen mit ReNU-Syndrom',
    about_brain: 'Hirnanomalien',
    about_brain_items: 'Reduziertes Marklagervolumen, unspezifische Marklageranomalien, Hypoplasie des Corpus callosum, Ventrikulomegalie',
    about_development: 'Intellektuelle und neurologische Entwicklungsstörungen',
    about_development_items: 'Verzögerungen bei Entwicklungsmeilensteinen, erhebliche Einschränkungen der intellektuellen Funktionsfähigkeit',
    about_seizures: 'Epilepsie',
    about_seizures_items: 'Infantile Spasmen, fokale und generalisierte tonisch-klonische Anfälle, Fieberkrämpfe',
    about_vision: 'Sehprobleme',
    about_vision_items: 'Hypoplasie des Sehnervs, kortikale Sehbeeinträchtigung, Strabismus, Nystagmus',
    about_face: 'Gesichtsmerkmale',
    about_face_items: 'Myopathisches Gesicht mit tief liegenden Augen, Epikanthus, breite Nasenwurzel, antevertierte Nasenlöcher, große Ohren',
    about_muscle: 'Muskeltonus',
    about_muscle_items: 'Hypotonie (niedriger Muskeltonus) oder Muskelschwäche',
    about_mobility: 'Mobilität',
    about_mobility_items: 'Verzögertes Gehen, Unfähigkeit zu gehen oder Mobilitätsbeeinträchtigung',
    about_growth: 'Wachstum',
    about_growth_items: 'Mikrozephalie, Kleinwuchs, Hypothyreose oder Wachstumshormonmangel',
    about_feeding: 'Ernährung',
    about_feeding_items: 'Fütterungsschwierigkeiten und übermäßiges Speicheln, Verstopfung, gastroösophagealer Reflux',
    about_communication: 'Kommunikation',
    about_communication_items: 'Schwierigkeiten beim Spracherwerb (können aber alternative Kommunikationsfähigkeiten entwickeln)',
    about_bones: 'Knochenprobleme',
    about_bones_items: 'Niedrige Knochendichte, Hüftdysplasie und/oder wiederkehrende Frakturen',
    about_happy: 'Anekdotisch zeigen viele Menschen mit ReNU-Syndrom auch ein fröhliches Temperament, können alternative Kommunikationsmittel verwenden und sind liebevoll.',
    about_diagnosis_note: 'In Italien ist die Gesamtgenomsequenzierung (WGS) erforderlich, um RNU4-2 zu diagnostizieren!',
    research_title: 'Forschung zum ReNU-Syndrom',
    research_intro: 'SIE können die Forschung nach Behandlungsmöglichkeiten für ReNU voranbringen!',
    research_crid: 'Vor der Teilnahme an Forschungsstudien aus JEDEM Land, <a href="https://thecrid.org/" target="_blank" class="text-teal-400 hover:underline">erstellen Sie eine Klinische Forschungs-ID (CRID)</a>!',
    research_priorities_title: 'Was ist der RNU4-2-Gemeinschaft wichtig?',
    research_priorities_intro: 'Top 10 Prioritäten in Rangordnung:',
    therapies_title: 'Therapien für das ReNU-Syndrom',
    therapies_intro: 'Viele Therapieangebote werden derzeit zur Unterstützung von Menschen mit ReNU-Syndrom eingesetzt',
    therapies_note: 'Diese Website befürwortet oder empfiehlt keine spezifischen Therapien. Konsultieren Sie immer einen Arzt.',
    diagnosis_title: 'Wo können Sie sich in Italien diagnostizieren lassen?',
    diagnosis_intro: 'Wenn Sie vermuten, dass ein Familienmitglied das ReNU-Syndrom haben könnte, kontaktieren Sie uns.',
    diagnosis_contact: 'Für Informationen über Zentren in Italien:',
    community_title: 'Gemeinschaft – Familienverbindung',
    community_intro: 'Sie sind nicht allein! Finden Sie Hoffnung und Gemeinschaft mit anderen Familien.',
    donations_title: 'Unterstützen Sie uns mit einer Spende',
    donations_intro: 'Spenden ermöglichen es uns, Forschung zu fördern und Bewusstsein zu schaffen.',
    donations_iban: 'Für eine Spende per Banküberweisung:',
    contact_title: 'Kontaktieren Sie uns',
    contact_intro: 'Wir stehen für alle Informationen über das ReNU-Syndrom Italien zur Verfügung.',
    footer_rights: '© 2025 ReNU-Syndrom Italien. Alle Rechte vorbehalten.',
    footer_partnership: 'In Partnerschaft mit ReNU Syndrome United (USA)',
    read_more: 'Mehr lesen',
    donate_now: 'Jetzt spenden',
    join_registry: 'Dem Register beitreten',
    learn_more: 'Mehr erfahren',
    contact_us: 'Kontaktieren Sie uns',
  }
}

function getHtml(t: Record<string, string>, page: string = 'home'): string {
  const langs = ['it', 'fr', 'es', 'de', 'en']
  const flags: Record<string, string> = { it: '🇮🇹', en: '🇬🇧', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪' }
  const langSwitcher = langs.map(l => `
    <a href="/${l}/${page}" class="flex items-center gap-1 px-2 py-1 rounded hover:bg-teal-700 transition-colors ${t.lang === l ? 'bg-teal-600 font-bold' : ''}" title="${translations[l].langName}">
      <span class="text-lg">${flags[l]}</span>
    </a>
  `).join('')

  const navItems = [
    { key: 'nav_home', page: 'home', icon: 'fa-home' },
    { key: 'nav_about', page: 'about', icon: 'fa-dna' },
    { key: 'nav_research', page: 'research', icon: 'fa-microscope' },
    { key: 'nav_therapies', page: 'therapies', icon: 'fa-heartbeat' },
    { key: 'nav_diagnosis', page: 'diagnosis', icon: 'fa-stethoscope' },
    { key: 'nav_community', page: 'community', icon: 'fa-users' },
    { key: 'nav_donations', page: 'donations', icon: 'fa-heart' },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope' },
  ]
  const navLinks = navItems.map(item => `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1 px-3 py-2 rounded hover:bg-teal-700 transition-colors text-sm ${page === item.page ? 'bg-teal-600 font-semibold' : ''}" title="${t[item.key]}">
      <i class="fas ${item.icon} text-xs"></i>
      <span class="hidden lg:inline">${t[item.key]}</span>
    </a>
  `).join('')

  let content = ''
  
  if (page === 'home') {
    content = getHomePage(t)
  } else if (page === 'about') {
    content = getAboutPage(t)
  } else if (page === 'research') {
    content = getResearchPage(t)
  } else if (page === 'therapies') {
    content = getTherapiesPage(t)
  } else if (page === 'diagnosis') {
    content = getDiagnosisPage(t)
  } else if (page === 'community') {
    content = getCommunityPage(t)
  } else if (page === 'donations') {
    content = getDonationsPage(t)
  } else if (page === 'contact') {
    content = getContactPage(t)
  }

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.subtitle}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    .hero-gradient { background: linear-gradient(135deg, #0f4c5c 0%, #1a7a8a 40%, #0d9488 100%); }
    .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
    .diagnosis-btn { animation: pulse-btn 2s infinite; }
    @keyframes pulse-btn { 0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 50% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } }
    .nav-mobile { display: none; }
    @media (max-width: 768px) { .nav-desktop { display: none; } .nav-mobile { display: block; } }
    .mobile-menu { display: none; }
    .mobile-menu.open { display: block; }
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Header / Navigation -->
  <header class="bg-teal-800 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/${t.lang}/home" class="flex items-center gap-3 text-white hover:text-teal-200 transition-colors">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span class="text-teal-800 font-bold text-sm">SR</span>
          </div>
          <div class="hidden sm:block">
            <div class="font-bold text-lg leading-tight">Sindrome ReNU</div>
            <div class="text-teal-300 text-xs">Italia</div>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-desktop hidden md:flex items-center gap-1">
          ${navLinks}
        </nav>

        <!-- Lang Switcher + Mobile Menu -->
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
            ${langSwitcher}
          </div>
          <button id="mobileMenuBtn" class="nav-mobile md:hidden p-2 rounded hover:bg-teal-700 transition-colors">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div id="mobileMenu" class="mobile-menu pb-4 md:hidden">
        <nav class="flex flex-col gap-1">
          ${navItems.map(item => `
            <a href="/${t.lang}/${item.page}" class="flex items-center gap-2 px-3 py-2 rounded hover:bg-teal-700 transition-colors ${page === item.page ? 'bg-teal-600 font-semibold' : ''}">
              <i class="fas ${item.icon} w-5 text-center"></i>
              <span>${t[item.key]}</span>
            </a>
          `).join('')}
        </nav>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    ${content}
  </main>

  <!-- Footer -->
  <footer class="bg-teal-900 text-white mt-16">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span class="text-teal-800 font-bold">SR</span>
            </div>
            <div>
              <div class="font-bold text-lg">Sindrome ReNU Italia</div>
              <div class="text-teal-300 text-sm">${t.footer_partnership}</div>
            </div>
          </div>
          <p class="text-teal-300 text-sm">www.sindromerenu.it</p>
        </div>
        <div>
          <h3 class="font-bold mb-4 text-teal-200">Email</h3>
          <ul class="space-y-2 text-sm text-teal-300">
            <li><a href="mailto:info@sindromerenu.it" class="hover:text-white transition-colors">info@sindromerenu.it</a></li>
            <li><a href="mailto:donazioni@sindromerenu.it" class="hover:text-white transition-colors">donazioni@sindromerenu.it</a></li>
            <li><a href="mailto:segreteria@sindromerenu.it" class="hover:text-white transition-colors">segreteria@sindromerenu.it</a></li>
            <li><a href="mailto:presidenza@sindromerenu.it" class="hover:text-white transition-colors">presidenza@sindromerenu.it</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4 text-teal-200">Link Utili</h3>
          <ul class="space-y-2 text-sm text-teal-300">
            <li><a href="https://www.renusyndrome.org" target="_blank" class="hover:text-white transition-colors">ReNU Syndrome United (USA)</a></li>
            <li><a href="https://thecrid.org/" target="_blank" class="hover:text-white transition-colors">Clinical Research ID (CRID)</a></li>
            <li><a href="https://rare-x.org/rnu4-2/" target="_blank" class="hover:text-white transition-colors">Rare-X Registry</a></li>
            <li><a href="https://citizen.health/renu" target="_blank" class="hover:text-white transition-colors">Citizen Health</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-teal-700 mt-8 pt-8 text-center text-sm text-teal-400">
        <p>${t.footer_rights}</p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    document.getElementById('mobileMenuBtn')?.addEventListener('click', function() {
      const menu = document.getElementById('mobileMenu')
      menu?.classList.toggle('open')
    })
  </script>
</body>
</html>`
}

function getHomePage(t: Record<string, string>): string {
  return `
  <!-- Hero Section -->
  <section class="hero-gradient text-white py-20 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <div class="inline-block bg-teal-600 bg-opacity-50 rounded-full px-4 py-2 text-sm mb-6 text-teal-100">
        <i class="fas fa-dna mr-2"></i>${t.subtitle}
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight" innerHTML="${t.hero_text}">
        ${t.hero_text}
      </h1>
      <p class="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 leading-relaxed">
        ${t.hero_desc}
      </p>
      
      <!-- DIAGNOSIS BUTTON - prominent CTA -->
      <a href="/${t.lang}/diagnosis" class="diagnosis-btn inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors mb-3">
        <i class="fas fa-stethoscope mr-2"></i>
        ${t.btn_diagnosis}
      </a>
      <p class="text-teal-200 text-sm">${t.btn_diagnosis_sub}</p>
    </div>
  </section>

  <!-- Quick Actions Grid -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Register / Map -->
        <a href="https://form.jotform.com/250154538972159" target="_blank" class="card-hover bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center border border-teal-200 block">
          <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-map-marker-alt text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-teal-800 mb-2">${t.section_map_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_map_desc}</p>
        </a>

        <!-- Awareness -->
        <a href="/${t.lang}/community" class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 block">
          <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-bullhorn text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-purple-800 mb-2">${t.section_awareness_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_awareness_desc}</p>
        </a>

        <!-- Research -->
        <a href="/${t.lang}/research" class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 block">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-microscope text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-blue-800 mb-2">${t.section_research_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_research_desc}</p>
        </a>

        <!-- About -->
        <a href="/${t.lang}/about" class="card-hover bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200 block">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-info-circle text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-green-800 mb-2">${t.section_info_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_info_desc}</p>
        </a>

        <!-- Parents -->
        <a href="/${t.lang}/community" class="card-hover bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200 block">
          <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-users text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-orange-800 mb-2">${t.section_parents_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_parents_desc}</p>
        </a>

        <!-- Donations -->
        <a href="/${t.lang}/donations" class="card-hover bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center border border-red-200 block">
          <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-heart text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-red-800 mb-2">${t.section_donations_title}</h3>
          <p class="text-gray-600 text-sm">${t.section_donations_desc}</p>
        </a>
      </div>
    </div>
  </section>

  <!-- Citizen Health Banner -->
  <section class="bg-teal-700 text-white py-12 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl font-bold mb-4">
        <i class="fas fa-flask mr-2"></i>
        ${t.lang === 'it' ? 'Ricerca Farmaceutica Attiva!' : t.lang === 'en' ? 'Active Pharmaceutical Research!' : t.lang === 'fr' ? 'Recherche Pharmaceutique Active!' : t.lang === 'es' ? '¡Investigación Farmacéutica Activa!' : 'Aktive pharmazeutische Forschung!'}
      </h2>
      <p class="text-teal-100 mb-6 text-lg">
        ${t.lang === 'it' ? 'Abbiamo un interesse farmaceutico attivo per la Sindrome ReNU! Abbiamo collaborato con Citizen Health per rendere questo il più semplice possibile per le famiglie.' : t.lang === 'en' ? 'We have active pharmaceutical research interest in ReNU syndrome! We\'ve partnered with Citizen Health to make this as easy as possible for families.' : t.lang === 'fr' ? 'Nous avons un intérêt pharmaceutique actif pour le syndrome ReNU! Nous avons collaboré avec Citizen Health.' : t.lang === 'es' ? '¡Tenemos interés activo en la investigación farmacéutica sobre el Síndrome ReNU! Nos hemos asociado con Citizen Health.' : 'Wir haben aktives pharmazeutisches Forschungsinteresse am ReNU-Syndrom! Wir haben mit Citizen Health zusammengearbeitet.'}
      </p>
      <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors">
        <i class="fas fa-external-link-alt mr-2"></i>
        ${t.lang === 'it' ? 'Iscriviti in 5 minuti su Citizen Health' : t.lang === 'en' ? 'Sign up in 5 minutes on Citizen Health' : t.lang === 'fr' ? 'Inscrivez-vous en 5 minutes sur Citizen Health' : t.lang === 'es' ? 'Regístrate en 5 minutos en Citizen Health' : 'Melden Sie sich in 5 Minuten bei Citizen Health an'}
      </a>
    </div>
  </section>
  `
}

function getAboutPage(t: Record<string, string>): string {
  const features = [
    { icon: 'fa-brain', color: 'bg-purple-500', title: t.about_brain, items: t.about_brain_items },
    { icon: 'fa-child', color: 'bg-blue-500', title: t.about_development, items: t.about_development_items },
    { icon: 'fa-bolt', color: 'bg-yellow-500', title: t.about_seizures, items: t.about_seizures_items },
    { icon: 'fa-eye', color: 'bg-green-500', title: t.about_vision, items: t.about_vision_items },
    { icon: 'fa-smile', color: 'bg-pink-500', title: t.about_face, items: t.about_face_items },
    { icon: 'fa-dumbbell', color: 'bg-orange-500', title: t.about_muscle, items: t.about_muscle_items },
    { icon: 'fa-walking', color: 'bg-teal-500', title: t.about_mobility, items: t.about_mobility_items },
    { icon: 'fa-ruler-vertical', color: 'bg-indigo-500', title: t.about_growth, items: t.about_growth_items },
    { icon: 'fa-utensils', color: 'bg-red-500', title: t.about_feeding, items: t.about_feeding_items },
    { icon: 'fa-comments', color: 'bg-cyan-500', title: t.about_communication, items: t.about_communication_items },
    { icon: 'fa-bone', color: 'bg-gray-500', title: t.about_bones, items: t.about_bones_items },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-dna mr-3"></i>${t.about_title}</h1>
      <p class="text-teal-100 text-lg">${t.subtitle}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- What is ReNU -->
      <div class="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold text-teal-800 mb-4"><i class="fas fa-dna mr-2 text-teal-500"></i>${t.about_what}</h2>
        <p class="text-gray-700 leading-relaxed mb-6">${t.about_gene}</p>
        <div class="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <h3 class="font-bold text-teal-800 mb-2">${t.about_discovery}</h3>
          <p class="text-gray-700">${t.about_discovery_text}</p>
        </div>
      </div>

      <!-- Diagnosis Note -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <i class="fas fa-exclamation-triangle text-amber-500 text-2xl mt-1"></i>
          <p class="text-amber-800 font-semibold">${t.about_diagnosis_note}</p>
        </div>
      </div>

      <!-- Features -->
      <h2 class="text-2xl font-bold text-teal-800 mb-6"><i class="fas fa-list-check mr-2"></i>${t.about_features_title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        ${features.map(f => `
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 ${f.color} rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas ${f.icon} text-white text-sm"></i>
            </div>
            <h3 class="font-semibold text-gray-800">${f.title}</h3>
          </div>
          <p class="text-gray-600 text-sm pl-13">${f.items}</p>
        </div>
        `).join('')}
      </div>

      <!-- Happy note -->
      <div class="bg-teal-50 rounded-2xl p-6 mb-8 border border-teal-200">
        <div class="flex items-start gap-3">
          <i class="fas fa-smile-beam text-teal-500 text-2xl mt-1"></i>
          <p class="text-gray-700 italic">${t.about_happy}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a href="/${t.lang}/diagnosis" class="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors mr-4 mb-4">
          <i class="fas fa-stethoscope mr-2"></i>${t.btn_diagnosis}
        </a>
        <a href="/${t.lang}/research" class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors mb-4">
          <i class="fas fa-microscope mr-2"></i>${t.section_research_title}
        </a>
      </div>
    </div>
  </section>
  `
}

function getResearchPage(t: Record<string, string>): string {
  const priorities = [
    { n: 1, icon: 'fa-comment-slash', item: t.lang === 'it' ? 'Assenza / ritardo del linguaggio e della comunicazione' : t.lang === 'en' ? 'Absent / delayed speech & communication' : t.lang === 'fr' ? 'Absence / retard de la parole et communication' : t.lang === 'es' ? 'Ausencia / retraso del habla y comunicación' : 'Fehlende / verzögerte Sprache & Kommunikation' },
    { n: 2, icon: 'fa-bolt', item: t.lang === 'it' ? 'Epilessia / crisi' : t.lang === 'en' ? 'Epilepsy / seizures' : t.lang === 'fr' ? 'Épilepsie / crises' : t.lang === 'es' ? 'Epilepsia / convulsiones' : 'Epilepsie / Anfälle' },
    { n: 3, icon: 'fa-brain', item: t.lang === 'it' ? 'Anomalie cerebrali' : t.lang === 'en' ? 'Brain abnormalities' : t.lang === 'fr' ? 'Anomalies cérébrales' : t.lang === 'es' ? 'Anomalías cerebrales' : 'Hirnanomalien' },
    { n: 4, icon: 'fa-walking', item: t.lang === 'it' ? 'Mobilità' : t.lang === 'en' ? 'Mobility' : t.lang === 'fr' ? 'Mobilité' : t.lang === 'es' ? 'Movilidad' : 'Mobilität' },
    { n: 5, icon: 'fa-dumbbell', item: t.lang === 'it' ? 'Ipotonia (basso tono muscolare)' : t.lang === 'en' ? 'Low muscle tone (hypotonia)' : t.lang === 'fr' ? 'Faible tonus musculaire (hypotonie)' : t.lang === 'es' ? 'Bajo tono muscular (hipotonía)' : 'Niedriger Muskeltonus (Hypotonie)' },
    { n: 6, icon: 'fa-utensils', item: t.lang === 'it' ? 'Alimentazione' : t.lang === 'en' ? 'Feeding' : t.lang === 'fr' ? 'Alimentation' : t.lang === 'es' ? 'Alimentación' : 'Ernährung' },
    { n: 7, icon: 'fa-bone', item: t.lang === 'it' ? 'Fragilità ossea' : t.lang === 'en' ? 'Bone fragility' : t.lang === 'fr' ? 'Fragilité osseuse' : t.lang === 'es' ? 'Fragilidad ósea' : 'Knochenbrüchigkeit' },
    { n: 8, icon: 'fa-tint', item: t.lang === 'it' ? 'Scialorrea (salivazione eccessiva)' : t.lang === 'en' ? 'Drooling' : t.lang === 'fr' ? 'Salivation excessive' : t.lang === 'es' ? 'Babeo excesivo' : 'Übermäßiges Speicheln' },
    { n: 9, icon: 'fa-toilet', item: t.lang === 'it' ? 'Problemi gastrointestinali (es. stipsi)' : t.lang === 'en' ? 'Lower gastrointestinal issues (e.g., constipation)' : t.lang === 'fr' ? 'Problèmes gastro-intestinaux (ex. constipation)' : t.lang === 'es' ? 'Problemas gastrointestinales (ej. estreñimiento)' : 'Untere Magen-Darm-Probleme (z.B. Verstopfung)' },
    { n: 10, icon: 'fa-ruler-vertical', item: t.lang === 'it' ? 'Bassa statura / scarsa crescita' : t.lang === 'en' ? 'Short stature / poor growth' : t.lang === 'fr' ? 'Petite taille / croissance insuffisante' : t.lang === 'es' ? 'Baja estatura / crecimiento deficiente' : 'Kleinwuchs / schlechtes Wachstum' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-microscope mr-3"></i>${t.research_title}</h1>
      <p class="text-teal-100 text-lg">${t.research_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- CRID -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <i class="fas fa-id-card text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
          <p class="text-amber-800">${t.research_crid}</p>
        </div>
      </div>

      <!-- Research Studies -->
      <h2 class="text-2xl font-bold text-teal-800 mb-6">
        ${t.lang === 'it' ? 'Opportunità di Ricerca per le Famiglie' : t.lang === 'en' ? 'Research Opportunities for Families' : t.lang === 'fr' ? 'Opportunités de recherche pour les familles' : t.lang === 'es' ? 'Oportunidades de investigación para familias' : 'Forschungsmöglichkeiten für Familien'}
      </h2>
      <div class="space-y-6 mb-12">
        <!-- Citizen Health -->
        <div class="bg-white rounded-2xl shadow-md p-6 border-l-4 border-teal-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <i class="fas fa-heartbeat text-teal-600 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Citizen Health</h3>
          </div>
          <p class="text-gray-600 mb-4">
            ${t.lang === 'it' ? 'Organizza i tuoi documenti medici in un profilo digitale privato, ottieni risposte immediate basate sulla tua esperienza personale e contribuisci alla ricerca che potrebbe portare a nuovi trattamenti.' : t.lang === 'en' ? 'Securely organize medical records into a private digital profile, get instant answers based on YOUR personal journey, and help power research that could lead to new treatments.' : t.lang === 'fr' ? 'Organisez les dossiers médicaux dans un profil numérique privé et contribuez à la recherche qui pourrait mener à de nouveaux traitements.' : t.lang === 'es' ? 'Organiza los registros médicos en un perfil digital privado y contribuye a la investigación que podría llevar a nuevos tratamientos.' : 'Organisieren Sie Krankenakten in einem privaten digitalen Profil und tragen Sie zur Forschung bei, die zu neuen Behandlungen führen könnte.'}
          </p>
          <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors font-semibold">
            <i class="fas fa-external-link-alt mr-2"></i>${t.lang === 'it' ? 'Iscriviti ora' : t.lang === 'en' ? 'Sign up now' : t.lang === 'fr' ? 'Inscrivez-vous maintenant' : t.lang === 'es' ? 'Regístrate ahora' : 'Jetzt anmelden'}
          </a>
        </div>

        <!-- INDEED Study -->
        <div class="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <i class="fas fa-flask text-blue-600 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Studio INDEED (Mount Sinai)</h3>
          </div>
          <p class="text-gray-600 mb-3">
            ${t.lang === 'it' ? 'Studio di ricerca per investigare la Sindrome ReNU e altre condizioni genetiche di nuova scoperta. Offre sequenziamento gratuito dei geni RNU4-2 e RNU2-2.' : t.lang === 'en' ? 'Research study to investigate ReNU Syndrome and other newly discovered genetic conditions. Offers free research-use DNA sequencing of the RNU4-2 and RNU2-2 genes.' : t.lang === 'fr' ? 'Étude de recherche pour investiguer le syndrome ReNU. Offre un séquençage ADN gratuit des gènes RNU4-2 et RNU2-2.' : t.lang === 'es' ? 'Estudio de investigación para investigar el Síndrome ReNU. Ofrece secuenciación gratuita de los genes RNU4-2 y RNU2-2.' : 'Forschungsstudie zur Untersuchung des ReNU-Syndroms. Bietet kostenlose DNA-Sequenzierung der Gene RNU4-2 und RNU2-2.'}
          </p>
          <div class="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
            <i class="fas fa-envelope mr-2"></i>
            <strong>${t.lang === 'it' ? 'Iscrizioni' : 'Enroll'}:</strong> <a href="mailto:zafiirah.baurhoo@mssm.edu" class="underline">zafiirah.baurhoo@mssm.edu</a> | <a href="mailto:MSSMClinicalGenetics@mssm.edu" class="underline">MSSMClinicalGenetics@mssm.edu</a>
          </div>
        </div>

        <!-- Rare-X Registry -->
        <div class="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <i class="fas fa-database text-purple-600 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Rare-X Registry</h3>
          </div>
          <p class="text-gray-600 mb-4">
            ${t.lang === 'it' ? 'Registro globale critico aperto a tutti. Lo sviluppo di opzioni di trattamento richiede dati robusti e continuamente aggiornati.' : t.lang === 'en' ? 'Rare-X is a critical global registry and ALL are welcome to participate. Developing treatment options requires robust, continually updated data.' : t.lang === 'fr' ? 'Rare-X est un registre mondial critique et TOUS sont invités à participer.' : t.lang === 'es' ? 'Rare-X es un registro global crítico y TODOS son bienvenidos a participar.' : 'Rare-X ist eine kritische globale Registrierung und ALLE sind willkommen teilzunehmen.'}
          </p>
          <a href="https://rare-x.org/rnu4-2/" target="_blank" class="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold">
            <i class="fas fa-external-link-alt mr-2"></i>${t.join_registry}
          </a>
        </div>

        <!-- GestaltMatcher -->
        <div class="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <i class="fas fa-face-smile text-green-600 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">GestaltMatcher</h3>
          </div>
          <p class="text-gray-600 mb-3">
            ${t.lang === 'it' ? 'GestaltMatcher usa tecnologia AI avanzata per analizzare immagini mediche e identificare caratteristiche facciali che possono indicare malattie genetiche rare.' : t.lang === 'en' ? 'GestaltMatcher uses advanced 2D AI technology to analyze medical images and identify facial features that may indicate rare genetic disorders.' : t.lang === 'fr' ? 'GestaltMatcher utilise l\'IA avancée pour analyser des images médicales et identifier des caractéristiques faciales indiquant des maladies génétiques rares.' : t.lang === 'es' ? 'GestaltMatcher usa tecnología AI avanzada para analizar imágenes médicas e identificar características faciales.' : 'GestaltMatcher verwendet KI-Technologie zur Analyse medizinischer Bilder.'}
          </p>
          <div class="bg-green-50 rounded-lg p-3 text-sm text-green-800">
            <i class="fas fa-envelope mr-2"></i><a href="mailto:annaarlt@uni-bonn.de" class="underline">annaarlt@uni-bonn.de</a>
          </div>
        </div>

        <!-- Clinical Health Survey -->
        <div class="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <i class="fas fa-clipboard-list text-orange-600 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Clinical Health Survey (Northwell)</h3>
          </div>
          <p class="text-gray-600 mb-3">
            ${t.lang === 'it' ? 'Studio trasversale che raccoglie e analizza informazioni sullo spettro delle caratteristiche della Sindrome ReNU. Il sondaggio richiede circa 45 minuti.' : t.lang === 'en' ? 'Cross-sectional study collecting and analyzing information on the spectrum of ReNU Syndrome features. Survey takes ~45 minutes.' : t.lang === 'fr' ? 'Étude transversale collectant des informations sur le spectre des caractéristiques du syndrome ReNU. ~45 minutes.' : t.lang === 'es' ? 'Estudio transversal que recopila información sobre el espectro del Síndrome ReNU. ~45 minutos.' : 'Querschnittsstudie zur Sammlung von Informationen über das ReNU-Syndrom. ~45 Minuten.'}
          </p>
          <div class="bg-orange-50 rounded-lg p-3 text-sm text-orange-800">
            <i class="fas fa-envelope mr-2"></i><a href="mailto:NGHI@northwell.edu" class="underline">NGHI@northwell.edu</a>
          </div>
        </div>
      </div>

      <!-- Treatment Priority Poll -->
      <div class="bg-teal-800 text-white rounded-2xl p-8 mb-8 text-center">
        <h2 class="text-2xl font-bold mb-3"><i class="fas fa-poll mr-2"></i>${t.research_priorities_title}</h2>
        <p class="text-teal-200 mb-6">${t.research_priorities_intro}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-6">
          ${priorities.map(p => `
          <div class="flex items-center gap-3 bg-teal-700 rounded-lg p-3">
            <span class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">${p.n}</span>
            <div class="flex items-center gap-2">
              <i class="fas ${p.icon} text-teal-300 text-sm"></i>
              <span class="text-sm">${p.item}</span>
            </div>
          </div>
          `).join('')}
        </div>
        <a href="https://form.jotform.com/251425893633159" target="_blank" class="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors">
          <i class="fas fa-vote-yea mr-2"></i>
          ${t.lang === 'it' ? 'Partecipa al Sondaggio sulle Priorità' : t.lang === 'en' ? 'Take the Treatment Priority Poll' : t.lang === 'fr' ? 'Participez au sondage sur les priorités' : t.lang === 'es' ? 'Participa en la encuesta de prioridades' : 'Nehmen Sie an der Prioritätsumfrage teil'}
        </a>
      </div>
    </div>
  </section>
  `
}

function getTherapiesPage(t: Record<string, string>): string {
  const therapies = [
    { icon: 'fa-running', color: 'bg-blue-500', title: t.lang === 'it' ? 'Fisioterapia (FT)' : t.lang === 'en' ? 'Physical Therapy (PT)' : t.lang === 'fr' ? 'Kinésithérapie (KT)' : t.lang === 'es' ? 'Fisioterapia (FT)' : 'Physiotherapie (PT)', desc: t.lang === 'it' ? 'Esercizio, potenziamento muscolare e miglioramento dell\'equilibrio, coordinazione e movimento' : t.lang === 'en' ? 'Exercise, strength training, and improvement in balance, coordination, and motion' : t.lang === 'fr' ? 'Exercice, renforcement musculaire et amélioration de l\'équilibre et de la coordination' : t.lang === 'es' ? 'Ejercicio, fortalecimiento y mejora del equilibrio, coordinación y movimiento' : 'Übung, Krafttraining und Verbesserung von Gleichgewicht, Koordination und Bewegung' },
    { icon: 'fa-hands-helping', color: 'bg-green-500', title: t.lang === 'it' ? 'Terapia Occupazionale (TO)' : t.lang === 'en' ? 'Occupational Therapy (OT)' : t.lang === 'fr' ? 'Ergothérapie (ET)' : t.lang === 'es' ? 'Terapia Ocupacional (TO)' : 'Ergotherapie (ET)', desc: t.lang === 'it' ? 'Trattamento dei ritardi nelle abilità motorie, elaborazione sensoriale o problemi di coordinazione' : t.lang === 'en' ? 'Treating motor skills delays, sensory processing, or coordination issues' : t.lang === 'fr' ? 'Traitement des retards de motricité, traitement sensoriel ou problèmes de coordination' : t.lang === 'es' ? 'Tratar retrasos en habilidades motoras, procesamiento sensorial o problemas de coordinación' : 'Behandlung von motorischen Verzögerungen, sensorischer Verarbeitung oder Koordinationsproblemen' },
    { icon: 'fa-comments', color: 'bg-purple-500', title: t.lang === 'it' ? 'Logopedia (LP)' : t.lang === 'en' ? 'Speech-Language Pathology (SLP)' : t.lang === 'fr' ? 'Orthophonie' : t.lang === 'es' ? 'Logopedia' : 'Sprach-Heil-Pädagogik', desc: t.lang === 'it' ? 'Miglioramento della comunicazione e risoluzione dei problemi di deglutizione' : t.lang === 'en' ? 'Improving communication and addressing swallowing issues' : t.lang === 'fr' ? 'Amélioration de la communication et traitement des problèmes de déglutition' : t.lang === 'es' ? 'Mejora de la comunicación y tratamiento de problemas de deglución' : 'Verbesserung der Kommunikation und Behandlung von Schluckproblemen' },
    { icon: 'fa-music', color: 'bg-yellow-500', title: t.lang === 'it' ? 'Musicoterapia' : t.lang === 'en' ? 'Music Therapy' : t.lang === 'fr' ? 'Musicothérapie' : t.lang === 'es' ? 'Musicoterapia' : 'Musiktherapie', desc: t.lang === 'it' ? 'Usata per le abilità motorie percettive, la comunicazione e la regolazione dell\'umore' : t.lang === 'en' ? 'Used for perceptual motor skills, communication, and mood regulation' : t.lang === 'fr' ? 'Utilisée pour les compétences motrices perceptuelles, la communication et la régulation de l\'humeur' : t.lang === 'es' ? 'Usada para habilidades motoras perceptivas, comunicación y regulación del estado de ánimo' : 'Für Wahrnehmungs-Motorik, Kommunikation und Stimmungsregulation' },
    { icon: 'fa-apple-alt', color: 'bg-red-500', title: t.lang === 'it' ? 'Nutrizione e Terapie Alimentari' : t.lang === 'en' ? 'Nutrition & Feeding Therapies' : t.lang === 'fr' ? 'Nutrition & Thérapies alimentaires' : t.lang === 'es' ? 'Nutrición y Terapias de Alimentación' : 'Ernährung & Fütterungstherapien', desc: t.lang === 'it' ? 'Garantire una nutrizione adeguata, sviluppare abilità sensoriali e orali/motorie e favorire la deglutizione' : t.lang === 'en' ? 'Ensuring proper nutrition, developing sensory and oral/motor skills, and aiding in swallowing' : t.lang === 'fr' ? 'Assurer une nutrition adéquate, développer les compétences sensorielles et orales/motrices' : t.lang === 'es' ? 'Asegurar nutrición adecuada, desarrollar habilidades sensoriales y orales/motoras' : 'Sicherstellung ausreichender Ernährung und Entwicklung sensorischer und oromotorischer Fähigkeiten' },
    { icon: 'fa-puzzle-piece', color: 'bg-indigo-500', title: 'ABA Therapy', desc: t.lang === 'it' ? 'Rinforzo positivo per incoraggiare comportamenti appropriati attraverso il gioco, sviluppo delle abilità sociali, autoconsapevolezza e competenze accademiche' : t.lang === 'en' ? 'Positive reinforcement to encourage appropriate behaviors via play, social skills development, self-awareness, cognition, and academic skills' : t.lang === 'fr' ? 'Renforcement positif pour encourager des comportements appropriés via le jeu et le développement social' : t.lang === 'es' ? 'Refuerzo positivo para fomentar comportamientos apropiados mediante el juego y el desarrollo social' : 'Positive Verstärkung zur Förderung angemessener Verhaltensweisen durch Spiel und soziale Entwicklung' },
    { icon: 'fa-horse', color: 'bg-amber-600', title: t.lang === 'it' ? 'Terapia Equestre (EAAT)' : t.lang === 'en' ? 'Equine Assisted Activities (EAAT)' : t.lang === 'fr' ? 'Équithérapie (EAAT)' : t.lang === 'es' ? 'Terapia Ecuestre (EAAT)' : 'Pferdetherapie (EAAT)', desc: t.lang === 'it' ? 'Terapia con i cavalli per la coordinazione, la forza, la stabilità del tronco, il controllo posturale e l\'integrazione sensoriale' : t.lang === 'en' ? 'Horse therapy for coordination, strength, core stability, postural control, and sensory integration' : t.lang === 'fr' ? 'Thérapie équine pour la coordination, la force, la stabilité du tronc et l\'intégration sensorielle' : t.lang === 'es' ? 'Terapia con caballos para coordinación, fuerza, estabilidad central e integración sensorial' : 'Pferdegestützte Therapie für Koordination, Kraft, Kernstabilität und sensorische Integration' },
    { icon: 'fa-swimming-pool', color: 'bg-cyan-500', title: t.lang === 'it' ? 'Idroterapia / Acquaterapia' : t.lang === 'en' ? 'Hydrotherapy / Aquatic Therapy' : t.lang === 'fr' ? 'Hydrothérapie / Aquathérapie' : t.lang === 'es' ? 'Hidroterapia / Terapia Acuática' : 'Hydrotherapie / Aquatherapie', desc: t.lang === 'it' ? 'Uso dell\'acqua per trattare vari sintomi; può essere conosciuta anche come terapia acquatica, piscina terapeutica o balneoterapia' : t.lang === 'en' ? 'Using water to treat various symptoms; may also be known as aquatic therapy, pool therapy or balneotherapy' : t.lang === 'fr' ? 'Utilisation de l\'eau pour traiter divers symptômes; également connue sous le nom d\'aquathérapie ou balnéothérapie' : t.lang === 'es' ? 'Uso del agua para tratar varios síntomas; también conocida como terapia acuática o balneoterapia' : 'Wasserbehandlung verschiedener Symptome; auch als Aquatherapie oder Balneotherapie bekannt' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-heartbeat mr-3"></i>${t.therapies_title}</h1>
      <p class="text-teal-100 text-lg">${t.therapies_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        ${therapies.map(therapy => `
        <div class="bg-white rounded-2xl shadow-md p-6 card-hover border border-gray-100">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-14 h-14 ${therapy.color} rounded-2xl flex items-center justify-center flex-shrink-0">
              <i class="fas ${therapy.icon} text-white text-xl"></i>
            </div>
            <h3 class="font-bold text-lg text-gray-800">${therapy.title}</h3>
          </div>
          <p class="text-gray-600">${therapy.desc}</p>
        </div>
        `).join('')}
      </div>

      <!-- Disclaimer -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-6">
        <div class="flex items-start gap-3">
          <i class="fas fa-exclamation-circle text-amber-500 text-2xl mt-1"></i>
          <p class="text-amber-800 italic">${t.therapies_note}</p>
        </div>
      </div>
    </div>
  </section>
  `
}

function getDiagnosisPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-stethoscope mr-3"></i>${t.diagnosis_title}</h1>
      <p class="text-teal-100 text-lg">${t.diagnosis_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Important notice -->
      <div class="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <i class="fas fa-exclamation-triangle text-amber-500 text-3xl mt-1 flex-shrink-0"></i>
          <div>
            <h3 class="font-bold text-amber-800 text-lg mb-2">
              ${t.lang === 'it' ? '⚠️ Nota Importante sulla Diagnosi' : t.lang === 'en' ? '⚠️ Important Diagnostic Note' : t.lang === 'fr' ? '⚠️ Note diagnostique importante' : t.lang === 'es' ? '⚠️ Nota diagnóstica importante' : '⚠️ Wichtiger Diagnosehinweis'}
            </h3>
            <p class="text-amber-800">${t.about_diagnosis_note}</p>
          </div>
        </div>
      </div>

      <!-- Contact info box -->
      <div class="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold text-teal-800 mb-4">
          <i class="fas fa-envelope mr-2 text-teal-500"></i>${t.diagnosis_contact}
        </h2>
        <div class="space-y-4">
          <a href="mailto:info@sindromerenu.it" class="flex items-center gap-3 bg-teal-50 rounded-xl p-4 hover:bg-teal-100 transition-colors group">
            <div class="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
              <i class="fas fa-envelope text-white text-lg"></i>
            </div>
            <div>
              <div class="font-semibold text-teal-800 group-hover:underline">info@sindromerenu.it</div>
              <div class="text-sm text-gray-500">${t.lang === 'it' ? 'Informazioni generali' : t.lang === 'en' ? 'General information' : t.lang === 'fr' ? 'Informations générales' : t.lang === 'es' ? 'Información general' : 'Allgemeine Informationen'}</div>
            </div>
          </a>
          <a href="mailto:segreteria@sindromerenu.it" class="flex items-center gap-3 bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors group">
            <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <i class="fas fa-envelope text-white text-lg"></i>
            </div>
            <div>
              <div class="font-semibold text-blue-800 group-hover:underline">segreteria@sindromerenu.it</div>
              <div class="text-sm text-gray-500">${t.lang === 'it' ? 'Segreteria' : 'Secretariat'}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- WGS Info -->
      <div class="bg-teal-800 text-white rounded-2xl p-8">
        <h2 class="text-2xl font-bold mb-4">
          <i class="fas fa-dna mr-2"></i>
          ${t.lang === 'it' ? 'Cos\'è il Sequenziamento del Genoma Intero (WGS)?' : t.lang === 'en' ? 'What is Whole Genome Sequencing (WGS)?' : t.lang === 'fr' ? 'Qu\'est-ce que le séquençage du génome entier (WGS)?' : t.lang === 'es' ? '¿Qué es la secuenciación del genoma completo (WGS)?' : 'Was ist die Gesamtgenomsequenzierung (WGS)?'}
        </h2>
        <p class="text-teal-100 mb-4">
          ${t.lang === 'it' ? 'Il WGS analizza l\'intera sequenza del DNA di un individuo, compresi geni, regioni non codificanti e RNA. È l\'unico metodo in grado di rilevare le varianti in RNU4-2 che causano la Sindrome ReNU.' : t.lang === 'en' ? 'WGS analyzes the entire DNA sequence of an individual, including genes, non-coding regions and RNA. It is the only method capable of detecting variants in RNU4-2 that cause ReNU Syndrome.' : t.lang === 'fr' ? 'Le WGS analyse la séquence ADN complète d\'un individu, y compris les gènes et les régions non codantes. C\'est la seule méthode capable de détecter les variants dans RNU4-2.' : t.lang === 'es' ? 'El WGS analiza toda la secuencia de ADN de un individuo, incluidos genes y regiones no codificantes. Es el único método capaz de detectar variantes en RNU4-2.' : 'WGS analysiert die gesamte DNA-Sequenz einer Person, einschließlich Gene und nicht-kodierende Regionen. Es ist die einzige Methode, die Varianten in RNU4-2 nachweisen kann.'}
        </p>
        <div class="bg-teal-700 rounded-xl p-4">
          <p class="font-semibold">
            <i class="fas fa-times-circle text-red-400 mr-2"></i>
            ${t.lang === 'it' ? 'Il WES (Whole Exome Sequencing) NON è in grado di rilevare varianti in RNU4-2!' : t.lang === 'en' ? 'WES (Whole Exome Sequencing) CANNOT detect variants in RNU4-2!' : t.lang === 'fr' ? 'Le WES (séquençage de l\'exome entier) NE PEUT PAS détecter les variants dans RNU4-2!' : t.lang === 'es' ? '¡El WES (secuenciación del exoma completo) NO PUEDE detectar variantes en RNU4-2!' : 'WES (Gesamtexomsequenzierung) kann KEINE Varianten in RNU4-2 nachweisen!'}
          </p>
        </div>
      </div>
    </div>
  </section>
  `
}

function getCommunityPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-users mr-3"></i>${t.community_title}</h1>
      <p class="text-teal-100 text-lg">${t.community_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Register on map -->
        <div class="bg-white rounded-2xl shadow-md p-6 card-hover">
          <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-map-marked-alt text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-teal-800 text-center mb-3">
            ${t.lang === 'it' ? 'Unisciti alla Mappa Mondiale' : t.lang === 'en' ? 'Join the World Map' : t.lang === 'fr' ? 'Rejoignez la carte mondiale' : t.lang === 'es' ? 'Únete al mapa mundial' : 'Treten Sie der Weltkarte bei'}
          </h3>
          <p class="text-gray-600 text-center mb-4">
            ${t.lang === 'it' ? 'Aggiungi il tuo familiare con ReNU alla mappa mondiale per aumentare la visibilità e connetterti con altre famiglie.' : t.lang === 'en' ? 'Add your ReNU family member to the worldwide map to increase visibility and connect with other families.' : t.lang === 'fr' ? 'Ajoutez votre proche atteint de ReNU à la carte mondiale pour augmenter la visibilité.' : t.lang === 'es' ? 'Añade a tu familiar con ReNU al mapa mundial para aumentar la visibilidad.' : 'Fügen Sie Ihr ReNU-Familienmitglied zur Weltkarte hinzu.'}
          </p>
          <div class="text-center">
            <a href="https://form.jotform.com/250154538972159" target="_blank" class="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold">
              <i class="fas fa-map-pin mr-2"></i>${t.join_registry}
            </a>
          </div>
        </div>

        <!-- Parent connection -->
        <div class="bg-white rounded-2xl shadow-md p-6 card-hover">
          <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-heart text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-xl text-orange-800 text-center mb-3">
            ${t.lang === 'it' ? 'Rete di Supporto Genitori' : t.lang === 'en' ? 'Parent Support Network' : t.lang === 'fr' ? 'Réseau de soutien parental' : t.lang === 'es' ? 'Red de apoyo para padres' : 'Eltern-Unterstützungsnetzwerk'}
          </h3>
          <p class="text-gray-600 text-center mb-4">
            ${t.lang === 'it' ? 'Connettiti con altre famiglie in Italia e nel mondo che capiscono il percorso con la Sindrome ReNU.' : t.lang === 'en' ? 'Connect with other families in Italy and worldwide who understand the journey with ReNU Syndrome.' : t.lang === 'fr' ? 'Connectez-vous avec d\'autres familles en Italie et dans le monde qui comprennent le parcours.' : t.lang === 'es' ? 'Conéctate con otras familias en Italia y en todo el mundo.' : 'Verbinden Sie sich mit anderen Familien in Italien und weltweit.'}
          </p>
          <div class="text-center">
            <a href="mailto:info@sindromerenu.it" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold">
              <i class="fas fa-envelope mr-2"></i>${t.contact_us}
            </a>
          </div>
        </div>
      </div>

      <!-- Partner: ReNU Syndrome United -->
      <div class="bg-teal-800 text-white rounded-2xl p-8 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span class="text-teal-800 font-bold text-lg">RSU</span>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2">ReNU Syndrome United (USA)</h3>
            <p class="text-teal-200 mb-4">
              ${t.lang === 'it' ? 'Sindrome ReNU Italia opera in stretta collaborazione con ReNU Syndrome United degli Stati Uniti, l\'associazione fondatrice che ci ha concesso il permesso di replicare il loro modello in Italia.' : t.lang === 'en' ? 'Sindrome ReNU Italia works in close collaboration with ReNU Syndrome United from the United States, the founding association that granted us permission to replicate their model in Italy.' : t.lang === 'fr' ? 'Sindrome ReNU Italia travaille en étroite collaboration avec ReNU Syndrome United des États-Unis.' : t.lang === 'es' ? 'Sindrome ReNU Italia trabaja en estrecha colaboración con ReNU Syndrome United de Estados Unidos.' : 'Sindrome ReNU Italia arbeitet in enger Zusammenarbeit mit ReNU Syndrome United aus den USA.'}
            </p>
            <a href="https://www.renusyndrome.org" target="_blank" class="inline-block bg-white text-teal-800 font-bold px-6 py-2 rounded-full hover:bg-teal-50 transition-colors">
              <i class="fas fa-external-link-alt mr-2"></i>www.renusyndrome.org
            </a>
          </div>
        </div>
      </div>

      <!-- Gallery link -->
      <div class="bg-white rounded-2xl shadow-md p-6 text-center">
        <h3 class="font-bold text-xl text-gray-800 mb-3">
          <i class="fas fa-images mr-2 text-teal-500"></i>
          ${t.lang === 'it' ? 'Galleria ReNU' : t.lang === 'en' ? 'ReNU Gallery' : t.lang === 'fr' ? 'Galerie ReNU' : t.lang === 'es' ? 'Galería ReNU' : 'ReNU-Galerie'}
        </h3>
        <p class="text-gray-600 mb-4">
          ${t.lang === 'it' ? 'Guarda le foto dei nostri coraggiosi bambini e famiglie sulla galleria internazionale.' : t.lang === 'en' ? 'See photos of our brave children and families on the international gallery.' : t.lang === 'fr' ? 'Voyez les photos de nos courageux enfants et familles sur la galerie internationale.' : t.lang === 'es' ? 'Ve las fotos de nuestros valientes niños y familias en la galería internacional.' : 'Sehen Sie Fotos unserer tapferen Kinder und Familien in der internationalen Galerie.'}
        </p>
        <a href="https://www.renusyndrome.org/gallery" target="_blank" class="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold">
          <i class="fas fa-images mr-2"></i>
          ${t.lang === 'it' ? 'Visita la Galleria' : t.lang === 'en' ? 'Visit Gallery' : t.lang === 'fr' ? 'Visiter la galerie' : t.lang === 'es' ? 'Visitar la galería' : 'Galerie besuchen'}
        </a>
      </div>
    </div>
  </section>
  `
}

function getDonationsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-heart mr-3"></i>${t.donations_title}</h1>
      <p class="text-teal-100 text-lg">${t.donations_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Why donate -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-microscope text-blue-600 text-2xl"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800 mb-2">
            ${t.lang === 'it' ? 'Finanzia la Ricerca' : t.lang === 'en' ? 'Fund Research' : t.lang === 'fr' ? 'Financer la Recherche' : t.lang === 'es' ? 'Financiar Investigación' : 'Forschung finanzieren'}
          </h3>
          <p class="text-gray-600 text-sm">
            ${t.lang === 'it' ? 'Supporta la ricerca scientifica per trovare terapie per la Sindrome ReNU' : t.lang === 'en' ? 'Support scientific research to find therapies for ReNU Syndrome' : t.lang === 'fr' ? 'Soutenir la recherche scientifique pour trouver des thérapies' : t.lang === 'es' ? 'Apoya la investigación científica para encontrar terapias' : 'Unterstützen Sie die wissenschaftliche Forschung nach Therapien'}
          </p>
        </div>
        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-users text-green-600 text-2xl"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800 mb-2">
            ${t.lang === 'it' ? 'Costruisci la Comunità' : t.lang === 'en' ? 'Build Community' : t.lang === 'fr' ? 'Construire la Communauté' : t.lang === 'es' ? 'Construir Comunidad' : 'Gemeinschaft aufbauen'}
          </h3>
          <p class="text-gray-600 text-sm">
            ${t.lang === 'it' ? 'Aiuta a costruire una rete di supporto per le famiglie italiane con Sindrome ReNU' : t.lang === 'en' ? 'Help build a support network for Italian families with ReNU Syndrome' : t.lang === 'fr' ? 'Aider à construire un réseau de soutien pour les familles' : t.lang === 'es' ? 'Ayuda a construir una red de apoyo para familias' : 'Helfen Sie, ein Unterstützungsnetzwerk für Familien aufzubauen'}
          </p>
        </div>
        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-bullhorn text-purple-600 text-2xl"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800 mb-2">
            ${t.lang === 'it' ? 'Diffondi la Consapevolezza' : t.lang === 'en' ? 'Spread Awareness' : t.lang === 'fr' ? 'Sensibiliser' : t.lang === 'es' ? 'Difundir Conciencia' : 'Bewusstsein schaffen'}
          </h3>
          <p class="text-gray-600 text-sm">
            ${t.lang === 'it' ? 'Aumenta la visibilità della Sindrome ReNU in Italia per accelerare le diagnosi' : t.lang === 'en' ? 'Increase visibility of ReNU Syndrome in Italy to accelerate diagnoses' : t.lang === 'fr' ? 'Augmenter la visibilité du syndrome ReNU pour accélérer les diagnostics' : t.lang === 'es' ? 'Aumenta la visibilidad del Síndrome ReNU para acelerar diagnósticos' : 'Erhöhen Sie die Sichtbarkeit des ReNU-Syndroms, um Diagnosen zu beschleunigen'}
          </p>
        </div>
      </div>

      <!-- Bank Transfer -->
      <div class="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold text-teal-800 mb-6">
          <i class="fas fa-university mr-2 text-teal-500"></i>${t.donations_iban}
        </h2>
        <div class="bg-gray-50 rounded-xl p-6 font-mono text-sm space-y-3">
          <div class="flex justify-between items-center border-b pb-3">
            <span class="text-gray-500 font-sans">${t.lang === 'it' ? 'Intestatario' : t.lang === 'en' ? 'Account holder' : t.lang === 'fr' ? 'Titulaire' : t.lang === 'es' ? 'Titular' : 'Kontoinhaber'}:</span>
            <span class="font-bold text-gray-800">Sindrome ReNU Italia APS</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span class="text-gray-500 font-sans">Email donazioni:</span>
            <a href="mailto:donazioni@sindromerenu.it" class="font-bold text-teal-600 hover:underline">donazioni@sindromerenu.it</a>
          </div>
          <div class="pt-2 text-center text-gray-500 font-sans text-xs">
            ${t.lang === 'it' ? 'Per informazioni sulle modalità di donazione contatta:' : t.lang === 'en' ? 'For donation methods information contact:' : t.lang === 'fr' ? 'Pour informations sur les modes de dons contactez:' : t.lang === 'es' ? 'Para información sobre métodos de donación contacta:' : 'Für Informationen zu Spendemethoden kontaktieren Sie:'}
            <a href="mailto:donazioni@sindromerenu.it" class="text-teal-600 hover:underline">donazioni@sindromerenu.it</a>
          </div>
        </div>
      </div>

      <!-- Move4ReNU -->
      <div class="bg-teal-700 text-white rounded-2xl p-8 text-center">
        <h2 class="text-2xl font-bold mb-3">
          <i class="fas fa-running mr-2"></i>Move 4 ReNU
        </h2>
        <p class="text-teal-100 mb-6">
          ${t.lang === 'it' ? 'Partecipa all\'iniziativa internazionale Move 4 ReNU: muoviti per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU!' : t.lang === 'en' ? 'Participate in the international Move 4 ReNU initiative: move to raise funds and spread awareness about ReNU Syndrome!' : t.lang === 'fr' ? 'Participez à l\'initiative Move 4 ReNU: bougez pour collecter des fonds!' : t.lang === 'es' ? '¡Participa en la iniciativa Move 4 ReNU: muévete para recaudar fondos!' : 'Nehmen Sie an der internationalen Move 4 ReNU Initiative teil!'}
        </p>
        <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank" class="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors">
          <i class="fas fa-external-link-alt mr-2"></i>Move 4 ReNU
        </a>
      </div>
    </div>
  </section>
  `
}

function getContactPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4"><i class="fas fa-envelope mr-3"></i>${t.contact_title}</h1>
      <p class="text-teal-100 text-lg">${t.contact_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Contact cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <a href="mailto:info@sindromerenu.it" class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow card-hover block">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-envelope text-teal-600 text-xl"></i>
            </div>
            <div>
              <div class="font-bold text-gray-800">${t.lang === 'it' ? 'Info Generali' : t.lang === 'en' ? 'General Info' : t.lang === 'fr' ? 'Info générales' : t.lang === 'es' ? 'Info General' : 'Allgemeine Info'}</div>
              <div class="text-teal-600 text-sm">info@sindromerenu.it</div>
            </div>
          </div>
        </a>
        <a href="mailto:donazioni@sindromerenu.it" class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow card-hover block">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-heart text-red-600 text-xl"></i>
            </div>
            <div>
              <div class="font-bold text-gray-800">${t.lang === 'it' ? 'Donazioni' : t.lang === 'en' ? 'Donations' : t.lang === 'fr' ? 'Dons' : t.lang === 'es' ? 'Donaciones' : 'Spenden'}</div>
              <div class="text-red-600 text-sm">donazioni@sindromerenu.it</div>
            </div>
          </div>
        </a>
        <a href="mailto:segreteria@sindromerenu.it" class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow card-hover block">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-clipboard text-blue-600 text-xl"></i>
            </div>
            <div>
              <div class="font-bold text-gray-800">${t.lang === 'it' ? 'Segreteria' : 'Secretariat'}</div>
              <div class="text-blue-600 text-sm">segreteria@sindromerenu.it</div>
            </div>
          </div>
        </a>
        <a href="mailto:presidenza@sindromerenu.it" class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow card-hover block">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-user-tie text-purple-600 text-xl"></i>
            </div>
            <div>
              <div class="font-bold text-gray-800">${t.lang === 'it' ? 'Presidenza' : 'Presidency'}</div>
              <div class="text-purple-600 text-sm">presidenza@sindromerenu.it</div>
            </div>
          </div>
        </a>
      </div>

      <!-- Association info -->
      <div class="bg-teal-800 text-white rounded-2xl p-8">
        <h2 class="text-2xl font-bold mb-6"><i class="fas fa-info-circle mr-2"></i>Sindrome ReNU Italia APS</h2>
        <div class="space-y-3 text-teal-100">
          <div class="flex items-center gap-3">
            <i class="fas fa-globe w-5 text-teal-400"></i>
            <a href="https://www.sindromerenu.it" class="hover:text-white transition-colors">www.sindromerenu.it</a>
          </div>
          <div class="flex items-center gap-3">
            <i class="fas fa-envelope w-5 text-teal-400"></i>
            <a href="mailto:info@sindromerenu.it" class="hover:text-white transition-colors">info@sindromerenu.it</a>
          </div>
          <div class="flex items-center gap-3">
            <i class="fas fa-envelope w-5 text-teal-400"></i>
            <a href="mailto:Stefania.rocca@sindromerenu.it" class="hover:text-white transition-colors">Stefania.rocca@sindromerenu.it</a>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-teal-700">
          <p class="text-teal-300 text-sm">${t.footer_partnership}</p>
          <a href="https://www.renusyndrome.org" target="_blank" class="inline-block mt-3 text-white hover:text-teal-200 transition-colors">
            <i class="fas fa-external-link-alt mr-1"></i> www.renusyndrome.org
          </a>
        </div>
      </div>
    </div>
  </section>
  `
}

// Routes
app.get('/', (c) => {
  return c.redirect('/it/home')
})

// Language + page routes
const pages = ['home', 'about', 'research', 'therapies', 'diagnosis', 'community', 'donations', 'contact']
const langs = ['it', 'en', 'fr', 'es', 'de']

for (const lang of langs) {
  app.get(`/${lang}`, (c) => {
    return c.redirect(`/${lang}/home`)
  })
  for (const page of pages) {
    app.get(`/${lang}/${page}`, (c) => {
      const t = translations[lang]
      return c.html(getHtml(t, page))
    })
  }
}

export default app
