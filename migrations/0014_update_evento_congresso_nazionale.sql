-- ─── MIGRAZIONE 0014: Aggiornamento evento id=3 ───────────────────────────────
-- Data: 2026-09-19
-- Contenuto: "Primo Incontro Famiglie ReNU Italia" → "Congresso Nazionale
--            Associazione Sindrome ReNU Italia" con data dicembre 2027

UPDATE eventi SET
  titolo_it  = 'Congresso Nazionale Associazione Sindrome ReNU Italia',
  titolo_en  = 'National Congress – Sindrome ReNU Italia Association',
  data_evento = '2027-12-01',
  luogo      = 'Italia',
  stato      = 'in_definizione',
  ordine     = 20
WHERE id = 3;
