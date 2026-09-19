-- ─── MIGRAZIONE 0013: Pulizia duplicati eventi settembre 2026 ─────────────────
-- Data: 2026-09-19
-- Contenuto: Rimozione eventi duplicati (id 7 e 8) — versioni precedenti
--            dell'evento del 20 settembre già inserito correttamente come id 9
-- Nota: Già applicata direttamente al DB produzione il 2026-09-19

DELETE FROM eventi WHERE id IN (7, 8);
