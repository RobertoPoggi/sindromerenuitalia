-- ─── MIGRAZIONE 0006: Traduzioni storie italiane (placeholder) ───────────────
-- Data: 2026-06-21
-- Aggiorna desc_en/fr/es/de per Aaron, Diego, Francesco, Manuel, Gabriele
-- Le storie IT sono frasi brevi (placeholder in attesa del testo completo dalle famiglie)
-- Le traduzioni sono fedeli all'italiano, senza aggiunte

-- AARON
UPDATE storie SET
  desc_en = 'A story of joy and determination.',
  desc_fr = 'Une histoire de joie et de détermination.',
  desc_es = 'Una historia de alegría y determinación.',
  desc_de = 'Eine Geschichte der Freude und Entschlossenheit.'
WHERE nome = 'Aaron' AND nazione = 'IT';

-- DIEGO
UPDATE storie SET
  desc_en = 'Smiles that light up every day.',
  desc_fr = 'Des sourires qui illuminent chaque journée.',
  desc_es = 'Sonrisas que iluminan cada día.',
  desc_de = 'Lächeln, das jeden Tag erhellt.'
WHERE nome = 'Diego' AND nazione = 'IT';

-- FRANCESCO
UPDATE storie SET
  desc_en = 'The strength of a united family.',
  desc_fr = 'La force d''une famille unie.',
  desc_es = 'La fuerza de una familia unida.',
  desc_de = 'Die Stärke einer vereinten Familie.'
WHERE nome = 'Francesco' AND nazione = 'IT';

-- MANUEL
UPDATE storie SET
  desc_en = 'A smile that spreads to everyone.',
  desc_fr = 'Un sourire qui se propage à tous.',
  desc_es = 'Una sonrisa que contagia a todos.',
  desc_de = 'Ein Lächeln, das alle ansteckt.'
WHERE nome = 'Manuel' AND nazione = 'IT';

-- GABRIELE
UPDATE storie SET
  desc_en = 'Every step is a success to celebrate.',
  desc_fr = 'Chaque pas est un succès à célébrer.',
  desc_es = 'Cada paso es un éxito que celebrar.',
  desc_de = 'Jeder Schritt ist ein Erfolg zum Feiern.'
WHERE nome = 'Gabriele' AND nazione = 'IT';
