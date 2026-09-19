-- Fix bug: Leonardo (id=18) aveva img_url errata ('/images/renu_bambino_francesco.jpg')
-- introdotta per errore nella migration 0011.
-- Aggiornamento con la foto corretta di Leonardo.
UPDATE storie
SET img_url = '/images/renu_bambino_leonardo.jpg'
WHERE id = 18 AND nome = 'Leonardo';
