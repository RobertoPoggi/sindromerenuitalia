-- ─────────────────────────────────────────────────────────────────────────────
-- Migrazione 0003 – Tabelle contenuti dinamici
-- Sindrome ReNU Italia APS
-- Data: 2026-06-20
-- ─────────────────────────────────────────────────────────────────────────────

-- ─── STORIE FAMIGLIE ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS storie (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  nome TEXT NOT NULL,
  img_url TEXT,
  nazione TEXT DEFAULT 'IT',
  flag TEXT DEFAULT '🇮🇹',
  url_storia TEXT,
  desc_it TEXT,
  desc_en TEXT,
  desc_fr TEXT,
  desc_es TEXT,
  desc_de TEXT,
  tipo TEXT DEFAULT 'italiana',  -- 'italiana' | 'internazionale'
  consenso_firmato INTEGER DEFAULT 0,
  ordine INTEGER DEFAULT 0,
  attiva INTEGER DEFAULT 1
);

-- ─── BROCHURE / MEDIA & PUBBLICAZIONI ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS brochure (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  file_name TEXT NOT NULL,
  thumb_id TEXT,
  titolo_it TEXT,
  titolo_en TEXT,
  titolo_fr TEXT,
  titolo_es TEXT,
  titolo_de TEXT,
  desc_it TEXT,
  desc_en TEXT,
  ordine INTEGER DEFAULT 0,
  attiva INTEGER DEFAULT 1
);

-- ─── GALLERY FOTO ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gallery (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  img_url TEXT NOT NULL,
  didascalia_it TEXT,
  didascalia_en TEXT,
  pagina TEXT DEFAULT 'community',  -- 'community' | 'home' | 'about'
  ordine INTEGER DEFAULT 0,
  attiva INTEGER DEFAULT 1,
  consenso INTEGER DEFAULT 0
);

-- ─── EVENTI ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS eventi (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  titolo_it TEXT NOT NULL,
  titolo_en TEXT,
  titolo_fr TEXT,
  titolo_es TEXT,
  titolo_de TEXT,
  data_evento TEXT,
  luogo TEXT,
  desc_it TEXT,
  desc_en TEXT,
  img_url TEXT,
  url_esterno TEXT,
  categoria TEXT DEFAULT 'incontro',  -- 'incontro' | 'maratona' | 'webinar' | 'conferenza' | 'altro'
  stato TEXT DEFAULT 'in_definizione',  -- 'in_definizione' | 'confermato' | 'passato' | 'annullato'
  ordine INTEGER DEFAULT 0,
  attivo INTEGER DEFAULT 1
);

-- ─── INDICI ──────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_storie_tipo ON storie(tipo, attiva);
CREATE INDEX IF NOT EXISTS idx_brochure_ordine ON brochure(ordine, attiva);
CREATE INDEX IF NOT EXISTS idx_gallery_pagina ON gallery(pagina, attiva);
CREATE INDEX IF NOT EXISTS idx_eventi_data ON eventi(data_evento, attivo);
