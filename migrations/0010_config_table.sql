-- Tabella configurazione parametri sito (es. numero famiglie/casi)
CREATE TABLE IF NOT EXISTS config (
  chiave TEXT PRIMARY KEY,
  valore TEXT NOT NULL,
  descrizione TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Valore iniziale: numero casi in Italia
INSERT OR IGNORE INTO config (chiave, valore, descrizione)
VALUES ('casi_italia', '16', 'Numero di casi/famiglie ReNU in Italia (aggiornabile da admin)');
