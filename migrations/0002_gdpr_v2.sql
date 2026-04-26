-- ═══════════════════════════════════════════════════════════════════════════
-- MIGRAZIONE D1 – Sindrome ReNU Italia APS
-- GDPR-COMPLIANT (Reg. UE 2016/679) – v2.0 – Aprile 2026
-- Compatibile con Cloudflare D1 (SQLite)
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── AUDIT LOG ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_log (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp     DATETIME DEFAULT CURRENT_TIMESTAMP,
  tabella       TEXT NOT NULL,
  record_id     INTEGER,
  azione        TEXT NOT NULL,
  operatore     TEXT DEFAULT 'sistema',
  ip_hash       TEXT,
  note          TEXT
);

-- ─── LISTA ATTESA / PRE-ISCRIZIONE ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lista_attesa (
  id                          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at                  DATETIME DEFAULT CURRENT_TIMESTAMP,
  nome                        TEXT NOT NULL,
  cognome                     TEXT NOT NULL,
  email                       TEXT NOT NULL UNIQUE,
  citta                       TEXT,
  tipo                        TEXT DEFAULT 'lista_attesa',
  come_conosciuto             TEXT,
  consenso_gdpr               INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  data_consenso               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione     TEXT DEFAULT '2.0',
  ip_hash                     TEXT,
  -- Diritto all'oblio (Art. 17)
  cancellato                  INTEGER DEFAULT 0,
  data_cancellazione          DATETIME
);

-- ─── CONTATTI ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contatti (
  id                          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at                  DATETIME DEFAULT CURRENT_TIMESTAMP,
  nome                        TEXT NOT NULL,
  email                       TEXT NOT NULL,
  oggetto                     TEXT,
  messaggio                   TEXT NOT NULL,
  consenso_gdpr               INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  data_consenso               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione     TEXT DEFAULT '2.0',
  ip_hash                     TEXT,
  status                      TEXT DEFAULT 'nuovo',
  -- Diritto all'oblio (Art. 17)
  cancellato                  INTEGER DEFAULT 0,
  data_cancellazione          DATETIME
);

-- ─── ADESIONI ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS adesioni (
  id                          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at                  DATETIME DEFAULT CURRENT_TIMESTAMP,
  nome                        TEXT NOT NULL,
  cognome                     TEXT NOT NULL,
  email                       TEXT NOT NULL,
  citta                       TEXT,
  tipo_membro                 TEXT DEFAULT 'famiglia',
  bambino_nome                TEXT,
  bambino_eta                 TEXT,
  bambino_diagnosi            INTEGER DEFAULT 0,
  come_conosciuto             TEXT,
  consenso_gdpr               INTEGER NOT NULL CHECK(consenso_gdpr = 1),
  consenso_dati_minore        INTEGER DEFAULT 0,
  consenso_comunicazioni      INTEGER DEFAULT 0,
  data_consenso               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testo_consenso_versione     TEXT DEFAULT '2.0',
  ip_hash                     TEXT,
  status                      TEXT DEFAULT 'in_attesa',
  cancellato                  INTEGER DEFAULT 0,
  data_cancellazione          DATETIME
);

-- ─── FAQ ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS faq (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  categoria     TEXT,
  domanda_it    TEXT,
  domanda_en    TEXT,
  risposta_it   TEXT,
  risposta_en   TEXT,
  ordine        INTEGER DEFAULT 0,
  attiva        INTEGER DEFAULT 1
);

-- ─── NEWS ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS news (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  titolo_it     TEXT,
  titolo_en     TEXT,
  testo_it      TEXT,
  testo_en      TEXT,
  categoria     TEXT DEFAULT 'notizia',
  pubblicata    INTEGER DEFAULT 0
);

-- ─── PUBBLICAZIONI ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS pubblicazioni (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  autori        TEXT,
  anno          INTEGER,
  titolo        TEXT,
  rivista       TEXT,
  pmid          TEXT,
  doi           TEXT,
  sintesi_it    TEXT,
  sintesi_en    TEXT,
  badge         TEXT,
  ordine        INTEGER DEFAULT 0
);
