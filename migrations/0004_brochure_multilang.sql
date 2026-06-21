-- ─── MIGRAZIONE 0004: Aggiunta colonne multilingue a tabella brochure ────────
-- Data: 2026-06-21
-- Motivo: Lo schema 0003 definiva brochure con solo desc_it e desc_en.
--         Questa migrazione aggiunge desc_fr, desc_es, desc_de per supporto
--         completo 5 lingue (prerequisito per migrazione 0005).

ALTER TABLE brochure ADD COLUMN desc_fr TEXT;
ALTER TABLE brochure ADD COLUMN desc_es TEXT;
ALTER TABLE brochure ADD COLUMN desc_de TEXT;
