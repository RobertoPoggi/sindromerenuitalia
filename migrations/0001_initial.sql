-- Adesioni all'associazione
CREATE TABLE IF NOT EXISTS adesioni (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  cognome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  citta TEXT,
  provincia TEXT,
  ruolo TEXT DEFAULT 'familiare',
  nome_bambino TEXT,
  anno_nascita_bambino TEXT,
  diagnosi_confermata TEXT DEFAULT 'no',
  come_hai_saputo TEXT,
  consenso_gdpr INTEGER DEFAULT 0,
  consenso_newsletter INTEGER DEFAULT 0,
  note TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- FAQ
CREATE TABLE IF NOT EXISTS faq (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  categoria TEXT NOT NULL,
  domanda TEXT NOT NULL,
  risposta TEXT NOT NULL,
  lingua TEXT DEFAULT 'it',
  ordine INTEGER DEFAULT 0,
  pubblicata INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Contatti/messaggi
CREATE TABLE IF NOT EXISTS messaggi (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  oggetto TEXT,
  messaggio TEXT NOT NULL,
  consenso_gdpr INTEGER DEFAULT 0,
  letto INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter
CREATE TABLE IF NOT EXISTS newsletter (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  nome TEXT,
  lingua TEXT DEFAULT 'it',
  attivo INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
