-- ─── MIGRAZIONE 0009: Aggiunge category e img_url a tabella brochure ─────────
-- Data: 2026-06-21
-- Motivo: Separare brochure in due categorie:
--   'brochure'       → materiali divulgativi, flyer, opuscoli
--   'pubblicazione'  → articoli scientifici, paper, studi
-- img_url: URL immagine di anteprima (es. copertina pubblicazione)

ALTER TABLE brochure ADD COLUMN category TEXT DEFAULT 'brochure';
ALTER TABLE brochure ADD COLUMN img_url TEXT;

-- Aggiorna tutti i record esistenti come brochure (default)
UPDATE brochure SET category = 'brochure' WHERE category IS NULL;
