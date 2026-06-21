-- Migration 0008: rimozione duplicati tabella gallery
-- Mantiene solo i record con id <= 23 (set originale corretto)
-- I record 24-46 sono duplicati inseriti per errore
DELETE FROM gallery WHERE id >= 24;
