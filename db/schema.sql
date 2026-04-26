-- ═══════════════════════════════════════════════════════════════════════════
-- SCHEMA DATABASE – Sindrome ReNU Italia APS
-- GDPR-COMPLIANT (Reg. UE 2016/679) – versione 2.0 – Aprile 2026
-- Titolare: Sindrome ReNU Italia APS  |  DPO: in nomina
-- ═══════════════════════════════════════════════════════════════════════════
-- NOTA: tutti i dati personali sono trattati con base giuridica esplicita.
--       Il consenso è SEMPRE obbligatorio e non può avere default TRUE.
--       I dati di minori (bambino_*) sono considerati dati sanitari (Art. 9)
--       e richiedono consenso esplicito del genitore/tutore.
-- ═══════════════════════════════════════════════════════════════════════════

PRAGMA journal_mode=WAL;        -- migliore concorrenza
PRAGMA foreign_keys=ON;         -- integrità referenziale

-- ─── TABELLA AUDIT LOG ───────────────────────────────────────────────────────
-- Registra ogni accesso/modifica ai dati personali (Art. 5 GDPR - accountability)
CREATE TABLE IF NOT EXISTS audit_log (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp     DATETIME DEFAULT CURRENT_TIMESTAMP,
  tabella       TEXT NOT NULL,           -- es. 'adesioni', 'contatti'
  record_id     INTEGER,                 -- id del record coinvolto
  azione        TEXT NOT NULL,           -- INSERT / UPDATE / DELETE / VIEW / EXPORT / ERASURE
  operatore     TEXT DEFAULT 'sistema',  -- chi ha eseguito l'azione
  ip_hash       TEXT,                    -- SHA-256 dell'IP (non IP in chiaro - anonimizzato)
  note          TEXT
);

-- ─── ADESIONI ALL'ASSOCIAZIONE ───────────────────────────────────────────────
-- Base giuridica: Art. 6.1.b (contratto) + Art. 9.2.a (consenso esplicito per dati minore)
CREATE TABLE IF NOT EXISTS adesioni (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,

  -- Dati anagrafici socio (adulto)
  nome                  TEXT NOT NULL,
  cognome               TEXT NOT NULL,
  email                 TEXT NOT NULL,
  citta                 TEXT,
  tipo_membro           TEXT DEFAULT 'famiglia'
                        CHECK(tipo_membro IN ('famiglia','professionista','sostenitore','istituzione')),

  -- Dati del bambino/ragazzo ReNU (dati sanitari Art. 9 - solo con consenso esplicito)
  bambino_nome          TEXT,            -- nome in chiaro SOLO se consenso_dati_minore=1
  bambino_eta           TEXT,
  bambino_diagnosi      INTEGER DEFAULT 0, -- 0=no, 1=sì - confermata diagnosi WGS

  -- Come ci ha trovato (non obbligatorio)
  come_conosciuto       TEXT,

  -- CONSENSI GDPR OBBLIGATORI (tutti default NULL = non ancora raccolto)
  consenso_gdpr         INTEGER NOT NULL CHECK(consenso_gdpr = 1),  -- privacy policy letta e accettata
  consenso_dati_minore  INTEGER DEFAULT 0, -- consenso specifico per dati del bambino (Art. 9)
  consenso_comunicazioni INTEGER DEFAULT 0, -- email di aggiornamento associazione
  data_consenso         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione TEXT DEFAULT '1.0', -- versione della privacy policy accettata
  ip_hash               TEXT,            -- SHA-256 dell'IP del richiedente (anonimizzato)

  -- Gestione
  status                TEXT DEFAULT 'in_attesa'
                        CHECK(status IN ('in_attesa','approvato','rifiutato','cancellato')),
  note_interne          TEXT,            -- NON visibili all'utente

  -- Diritto all'oblio (Art. 17)
  cancellato            INTEGER DEFAULT 0,
  data_cancellazione    DATETIME,
  richiesta_cancellazione_at DATETIME
);

-- ─── DONAZIONI ───────────────────────────────────────────────────────────────
-- Base giuridica: Art. 6.1.c (obbligo legale per tracciabilità fiscale)
-- Conservazione: 10 anni per obbligo fiscale (D.Lgs. 127/2015)
CREATE TABLE IF NOT EXISTS donazioni (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,

  -- Dati donatore (possono essere anonimi)
  nome                  TEXT,
  email                 TEXT,
  anonimo               INTEGER DEFAULT 0,

  -- Dati donazione
  importo               REAL,
  tipo                  TEXT DEFAULT 'singola'
                        CHECK(tipo IN ('singola','ricorrente','5x1000','lascito','altro')),
  metodo                TEXT DEFAULT 'bonifico'
                        CHECK(metodo IN ('bonifico','paypal','buonacausa','altro')),
  messaggio             TEXT,
  riferimento           TEXT,  -- es. numero bonifico per riconciliazione

  -- CONSENSI GDPR (obbligatori anche per donazioni - base Art. 6.1.c)
  consenso_gdpr         INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  consenso_comunicazioni INTEGER DEFAULT 0,
  data_consenso         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione TEXT DEFAULT '1.0',
  ip_hash               TEXT,

  -- Diritto all'oblio (limitato per donazioni - 10 anni obbligo fiscale)
  cancellato            INTEGER DEFAULT 0,
  data_cancellazione    DATETIME
);

-- ─── RICHIESTE INFORMAZIONI / CONTATTI ───────────────────────────────────────
-- Base giuridica: Art. 6.1.a (consenso)
-- Conservazione: 2 anni
CREATE TABLE IF NOT EXISTS contatti (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,

  nome                  TEXT NOT NULL,
  email                 TEXT NOT NULL,
  oggetto               TEXT,
  messaggio             TEXT NOT NULL,

  -- CONSENSI
  consenso_gdpr         INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  data_consenso         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione TEXT DEFAULT '1.0',
  ip_hash               TEXT,

  -- Gestione
  status                TEXT DEFAULT 'nuovo'
                        CHECK(status IN ('nuovo','in_gestione','risposto','chiuso')),
  data_risposta         DATETIME,

  -- Diritto all'oblio
  cancellato            INTEGER DEFAULT 0,
  data_cancellazione    DATETIME
);

-- ─── FAQ ─────────────────────────────────────────────────────────────────────
-- Nessun dato personale – contenuto editoriale
CREATE TABLE IF NOT EXISTS faq (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  aggiornato_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  categoria     TEXT NOT NULL,
  domanda_it    TEXT NOT NULL,
  domanda_en    TEXT,
  risposta_it   TEXT NOT NULL,
  risposta_en   TEXT,
  ordine        INTEGER DEFAULT 0,
  attiva        INTEGER DEFAULT 1
);

-- ─── NEWS / AGGIORNAMENTI ────────────────────────────────────────────────────
-- Nessun dato personale – contenuto editoriale
CREATE TABLE IF NOT EXISTS news (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  aggiornato_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  titolo_it     TEXT NOT NULL,
  titolo_en     TEXT,
  testo_it      TEXT NOT NULL,
  testo_en      TEXT,
  categoria     TEXT DEFAULT 'notizia'
                CHECK(categoria IN ('notizia','ricerca','evento','associazione')),
  immagine      TEXT,
  pubblicata    INTEGER DEFAULT 0
);

-- ─── PUBBLICAZIONI SCIENTIFICHE ──────────────────────────────────────────────
-- Nessun dato personale (autori sono ricercatori pubblici)
CREATE TABLE IF NOT EXISTS pubblicazioni (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  autori        TEXT NOT NULL,
  anno          INTEGER,
  titolo        TEXT NOT NULL,
  rivista       TEXT,
  pmid          TEXT,
  doi           TEXT,
  sintesi_it    TEXT,
  sintesi_en    TEXT,
  badge         TEXT,
  ordine        INTEGER DEFAULT 0
);

-- ─── STORIE FAMIGLIE ─────────────────────────────────────────────────────────
-- Base giuridica: Art. 9.2.a (consenso ESPLICITO per dati sanitari di minori)
-- ATTENZIONE: questi dati richiedono consenso scritto separato (modulo cartaceo/PEC)
CREATE TABLE IF NOT EXISTS storie (
  id                          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at                  DATETIME DEFAULT CURRENT_TIMESTAMP,

  -- Dati bambino (solo nome, mai cognome)
  nome_bambino                TEXT NOT NULL,
  paese                       TEXT DEFAULT 'Italia',
  flag                        TEXT DEFAULT '🇮🇹',

  -- Contenuto (revisionato dalla redazione prima di pubblicare)
  testo_it                    TEXT,
  testo_en                    TEXT,
  immagine                    TEXT,        -- percorso file, MAI URL esterno non controllato
  url_esterno                 TEXT,        -- link a RSU se storia già pubblica altrove

  -- CONSENSO ESPLICITO (Art. 9.2.a GDPR) – OBBLIGATORIO
  consenso_gdpr               INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  consenso_immagine           INTEGER DEFAULT 0,  -- consenso specifico alla pubblicazione foto
  consenso_nome               INTEGER DEFAULT 0,  -- consenso nome del bambino
  data_consenso               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  tipo_consenso               TEXT DEFAULT 'email'
                              CHECK(tipo_consenso IN ('email','pec','modulo_cartaceo')),
  rif_consenso                TEXT,   -- es. email del genitore, protocollo PEC

  -- Stato
  pubblicata                  INTEGER DEFAULT 0,
  data_pubblicazione          DATETIME,
  revisionata_da              TEXT,

  -- Diritto all'oblio (genitori possono revocare in qualsiasi momento)
  cancellato                  INTEGER DEFAULT 0,
  data_cancellazione          DATETIME
);

-- ─── ISCRITTI NEWSLETTER / LISTA ATTESA ─────────────────────────────────────
-- Base giuridica: Art. 6.1.a (consenso)
-- Conservazione: fino a revoca consenso
CREATE TABLE IF NOT EXISTS lista_attesa (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,

  nome                  TEXT NOT NULL,
  cognome               TEXT NOT NULL,
  email                 TEXT NOT NULL UNIQUE,
  citta                 TEXT,
  tipo                  TEXT DEFAULT 'lista_attesa'
                        CHECK(tipo IN ('lista_attesa','newsletter','entrambi')),

  -- CONSENSI
  consenso_gdpr         INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  consenso_newsletter   INTEGER DEFAULT 0,
  data_consenso         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione TEXT DEFAULT '1.0',
  ip_hash               TEXT,

  -- Diritto all'oblio / cancellazione iscrizione
  cancellato            INTEGER DEFAULT 0,
  data_cancellazione    DATETIME,
  token_cancellazione   TEXT  -- token unico per link unsubscribe via email
);

-- ─── REGISTRO DEI TRATTAMENTI (Art. 30 GDPR) ─────────────────────────────────
-- Obbligatorio per organizzazioni che trattano dati a larga scala o dati sensibili
-- Per le APS che trattano dati sanitari di minori è fortemente raccomandato
CREATE TABLE IF NOT EXISTS registro_trattamenti (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,
  aggiornato_at         DATETIME DEFAULT CURRENT_TIMESTAMP,

  -- Identificazione trattamento
  nome_trattamento      TEXT NOT NULL,   -- es. "Gestione adesioni soci"
  finalita              TEXT NOT NULL,   -- scopo del trattamento
  base_giuridica        TEXT NOT NULL,   -- Art. GDPR applicabile
  categorie_dati        TEXT,            -- tipi di dati trattati
  categorie_interessati TEXT,            -- es. "genitori di minori malati rari"

  -- Sicurezza e conservazione
  periodo_conservazione TEXT,            -- es. "5 anni dalla fine associazione"
  misure_sicurezza      TEXT,            -- misure tecniche e organizzative
  trasferimenti_extra_ue TEXT DEFAULT 'Nessuno',  -- paesi terzi

  -- Responsabili
  titolare              TEXT DEFAULT 'Sindrome ReNU Italia APS',
  responsabili_esterni  TEXT,            -- eventuali DPA/sub-processors

  -- Stato
  attivo                INTEGER DEFAULT 1,
  note                  TEXT
);

-- ─── RICHIESTE DIRITTI INTERESSATI (Artt. 15-22 GDPR) ───────────────────────
-- Traccia le richieste di accesso, rettifica, cancellazione, ecc.
CREATE TABLE IF NOT EXISTS richieste_diritti (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at            DATETIME DEFAULT CURRENT_TIMESTAMP,
  scadenza              DATETIME,        -- 30 giorni dalla richiesta (Art. 12.3)

  email_richiedente     TEXT NOT NULL,
  tipo_diritto          TEXT NOT NULL
                        CHECK(tipo_diritto IN ('accesso','rettifica','cancellazione',
                                               'limitazione','portabilita','opposizione','revoca_consenso')),
  descrizione           TEXT,
  documenti_identita    TEXT DEFAULT 'richiesti',  -- stato verifica identità

  -- Gestione
  status                TEXT DEFAULT 'ricevuta'
                        CHECK(status IN ('ricevuta','in_gestione','completata','rifiutata_motivata')),
  risposta              TEXT,            -- sintesi risposta inviata
  data_completamento    DATETIME,
  gestita_da            TEXT
);

-- ─── INDICI PER PERFORMANCE ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_adesioni_email     ON adesioni(email)     WHERE cancellato=0;
CREATE INDEX IF NOT EXISTS idx_adesioni_status    ON adesioni(status)    WHERE cancellato=0;
CREATE INDEX IF NOT EXISTS idx_contatti_email     ON contatti(email)     WHERE cancellato=0;
CREATE INDEX IF NOT EXISTS idx_contatti_status    ON contatti(status)    WHERE cancellato=0;
CREATE INDEX IF NOT EXISTS idx_lista_email        ON lista_attesa(email) WHERE cancellato=0;
CREATE INDEX IF NOT EXISTS idx_audit_tabella      ON audit_log(tabella, timestamp);
CREATE INDEX IF NOT EXISTS idx_audit_record       ON audit_log(tabella, record_id);
CREATE INDEX IF NOT EXISTS idx_richieste_email    ON richieste_diritti(email_richiedente);

-- ─── DATI INIZIALI: REGISTRO TRATTAMENTI ────────────────────────────────────
INSERT OR IGNORE INTO registro_trattamenti
  (id, nome_trattamento, finalita, base_giuridica, categorie_dati, categorie_interessati,
   periodo_conservazione, misure_sicurezza, trasferimenti_extra_ue, responsabili_esterni)
VALUES
  (1,
   'Gestione adesioni soci',
   'Raccolta e gestione delle iscrizioni all associazione, comunicazioni associative',
   'Art. 6.1.b (esecuzione contratto associativo) + Art. 9.2.a (consenso per dati minore)',
   'Nome, cognome, email, città, dati bambino (nome, età, diagnosi)',
   'Adulti - genitori/tutori di minori con Sindrome ReNU',
   'Per tutta la durata dell associazione + 5 anni',
   'HTTPS/TLS, database cifrato, accesso limitato a board associativo, audit log',
   'Nessuno (dati in UE - Cloudflare Frankfurt/Amsterdam)',
   'Cloudflare Inc. (DPA firmato) - hosting'
  ),
  (2,
   'Gestione richieste informazioni',
   'Rispondere alle richieste di famiglie e professionisti sulla Sindrome ReNU',
   'Art. 6.1.a (consenso)',
   'Nome, email, contenuto messaggio',
   'Famiglie, caregiver, professionisti sanitari',
   '2 anni dalla data di ricezione',
   'HTTPS/TLS, accesso limitato a segreteria associativa, audit log',
   'Nessuno',
   'Cloudflare Inc. (DPA firmato)'
  ),
  (3,
   'Gestione donazioni',
   'Tracciabilità delle donazioni per obblighi fiscali e rendicontazione associativa',
   'Art. 6.1.c (obbligo legale fiscale)',
   'Nome donatore, email, importo, metodo di pagamento',
   'Donatori (persone fisiche e giuridiche)',
   '10 anni (obbligo fiscale D.Lgs. 127/2015)',
   'HTTPS/TLS, database cifrato, accesso limitato a tesoriere e presidente',
   'Nessuno',
   'Cloudflare Inc. (DPA firmato)'
  ),
  (4,
   'Pubblicazione storie famiglie',
   'Sensibilizzazione pubblica sulla Sindrome ReNU attraverso storie di famiglie',
   'Art. 9.2.a (consenso esplicito per dati sanitari di minori)',
   'Nome bambino, storia, eventuale foto',
   'Minori con Sindrome ReNU (tramite consenso genitori/tutori)',
   'Fino a revoca consenso da parte del genitore/tutore',
   'Consenso scritto separato, revisione editoriale, nessun dato sensibile aggiuntivo pubblicato',
   'Nessuno',
   'Cloudflare Inc. (DPA firmato)'
  ),
  (5,
   'Newsletter e lista attesa soci',
   'Invio comunicazioni informative sulla Sindrome ReNU e attività associative',
   'Art. 6.1.a (consenso)',
   'Nome, email',
   'Iscritti alla newsletter / interessati all associazione',
   'Fino a revoca consenso (link unsubscribe in ogni email)',
   'HTTPS/TLS, link unsubscribe in ogni comunicazione',
   'Nessuno',
   'Cloudflare Inc. (DPA firmato)'
  );
