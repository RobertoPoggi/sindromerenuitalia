import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

type Env = {
  DB?: D1Database
}

const app = new Hono<{ Bindings: Env }>()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))
app.use('/brochure/*', serveStatic({ root: './public' }))
app.use('/favicon.svg', serveStatic({ root: './public' }))
// ─── MANUALE UTENTE ──────────────────────────────────────────────────────────
const MANUALE_HTML = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Manuale d'Uso — Sindrome ReNU Italia APS</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
/* ════════════════════════════════════════════════
   RESET & VARIABILI
════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:   #082050;
  --blue:   #1078C0;
  --sky:    #45B8EC;
  --pale:   #EFF9FF;
  --green:  #16A085;
  --amber:  #D97706;
  --red:    #E74C3C;
  --purple: #7C3AED;
  --text:   #1e293b;
  --muted:  #64748b;
  --border: #e2e8f0;
  --bg:     #f8fafc;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
}

/* ════════════════════════════════════════════════
   TOPBAR (solo schermo)
════════════════════════════════════════════════ */
.topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 56px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 14px;
  z-index: 999;
  box-shadow: 0 2px 16px rgba(8,32,80,.4);
}
.topbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
}
.topbar-icon {
  width: 36px; height: 36px;
  border-radius: 9px;
  background: rgba(255,255,255,.18);
  display: flex; align-items: center; justify-content: center;
  font-size: 17px; color: #BAE6FD;
  flex-shrink: 0;
}
.topbar-sub { font-size: 11px; font-weight: 400; opacity: .75; }
.topbar-print-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,.18);
  border: 1px solid rgba(255,255,255,.3);
  color: #fff;
  border-radius: 8px;
  padding: 6px 16px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s;
  white-space: nowrap;
}
.topbar-print-btn:hover { background: rgba(255,255,255,.28); }

/* ════════════════════════════════════════════════
   WRAPPER DOCUMENTO
════════════════════════════════════════════════ */
.doc-wrap {
  margin-top: 56px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 48px 48px 80px;
}

/* ════════════════════════════════════════════════
   COPERTINA
════════════════════════════════════════════════ */
.cover {
  background: linear-gradient(135deg, var(--navy) 0%, #0e3a7a 50%, var(--blue) 100%);
  border-radius: 20px;
  padding: 60px 56px 52px;
  color: #fff;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
  page-break-after: always;
}
.cover::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 360px; height: 360px;
  background: radial-gradient(circle, rgba(69,184,236,.22) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.cover-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #BAE6FD;
  margin-bottom: 22px;
}
.cover h1 {
  font-size: 38px;
  font-weight: 900;
  line-height: 1.13;
  letter-spacing: -.02em;
  margin-bottom: 14px;
}
.cover h1 span { color: var(--sky); }
.cover-desc {
  font-size: 15px;
  color: rgba(255,255,255,.8);
  max-width: 560px;
  margin-bottom: 36px;
  line-height: 1.65;
}
.cover-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.cover-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 8px;
  padding: 5px 13px;
  font-size: 12px;
  font-weight: 500;
}
.cover-pill i { color: var(--sky); font-size: 11px; }

/* ════════════════════════════════════════════════
   TOC — Indice
════════════════════════════════════════════════ */
.toc-box {
  background: #fff;
  border: 1px solid var(--border);
  border-left: 5px solid var(--blue);
  border-radius: 14px;
  padding: 28px 32px;
  margin-bottom: 48px;
  page-break-after: always;
}
.toc-box h2 {
  font-size: 17px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.toc-box h2 i { color: var(--blue); font-size: 15px; }
.toc-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
}
.toc-entry {
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 5px 0;
  border-bottom: 1px dashed #e2e8f0;
  color: var(--text);
  text-decoration: none;
  font-size: 12.5px;
  font-weight: 500;
  transition: color .15s;
}
.toc-entry:hover { color: var(--blue); }
.toc-entry .toc-num {
  flex-shrink: 0;
  width: 26px;
  font-weight: 700;
  color: var(--blue);
  font-size: 11px;
}
.toc-entry .toc-label { flex: 1; }
.toc-entry .toc-dots {
  flex: 1;
  border-bottom: 1px dotted #cbd5e1;
  margin: 0 6px 3px;
  min-width: 20px;
}

/* ════════════════════════════════════════════════
   SECTION
════════════════════════════════════════════════ */
.section {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px 40px;
  margin-bottom: 32px;
  page-break-inside: avoid;
}

.sec-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--border);
}
.sec-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  color: #fff;
  flex-shrink: 0;
}
.ic-blue   { background: var(--blue); }
.ic-navy   { background: var(--navy); }
.ic-green  { background: var(--green); }
.ic-amber  { background: var(--amber); }
.ic-red    { background: var(--red); }
.ic-purple { background: var(--purple); }
.ic-sky    { background: var(--sky); }

.sec-title { font-size: 20px; font-weight: 800; color: var(--navy); line-height: 1.2; }
.sec-sub   { font-size: 12px; color: var(--muted); margin-top: 4px; }

.sec-body p { color: var(--muted); margin-bottom: 14px; font-size: 13.5px; }

/* ════════════════════════════════════════════════
   CARD GRID
════════════════════════════════════════════════ */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}
.card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 18px 16px;
  page-break-inside: avoid;
}
.card-icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px;
  color: #fff;
  margin-bottom: 12px;
}
.card h4 { font-size: 13px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
.card p  { font-size: 12px; color: var(--muted); line-height: 1.65; }

/* ════════════════════════════════════════════════
   INFO BOX
════════════════════════════════════════════════ */
.info-box {
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 12.5px;
  line-height: 1.7;
  margin: 14px 0;
  page-break-inside: avoid;
}
.info-box > i { flex-shrink: 0; margin-top: 2px; font-size: 14px; }
.box-blue   { background: #EFF9FF; border-left: 4px solid var(--blue); color: #0c4a82; }
.box-green  { background: #f0fdf4; border-left: 4px solid var(--green); color: #14532d; }
.box-amber  { background: #fffbeb; border-left: 4px solid var(--amber); color: #92400e; }
.box-red    { background: #fef2f2; border-left: 4px solid var(--red); color: #991b1b; }
.box-purple { background: #f5f3ff; border-left: 4px solid var(--purple); color: #4c1d95; }

/* ════════════════════════════════════════════════
   TABLE
════════════════════════════════════════════════ */
.tbl { width: 100%; border-collapse: collapse; font-size: 12px; margin: 14px 0; page-break-inside: avoid; }
.tbl th {
  background: var(--navy);
  color: #fff;
  padding: 8px 12px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .04em;
}
.tbl th:first-child { border-radius: 6px 0 0 0; }
.tbl th:last-child  { border-radius: 0 6px 0 0; }
.tbl td { padding: 8px 12px; border-bottom: 1px solid var(--border); color: var(--text); vertical-align: top; }
.tbl tr:last-child td { border-bottom: none; }
.tbl tr:hover td { background: #f8fafc; }
.tbl code {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-family: 'Courier New', monospace;
  color: var(--navy);
  white-space: nowrap;
}

/* ════════════════════════════════════════════════
   STEPS
════════════════════════════════════════════════ */
.steps { list-style: none; counter-reset: s; margin: 14px 0; }
.steps li {
  counter-increment: s;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 13px;
}
.steps li::before {
  content: counter(s);
  flex-shrink: 0;
  width: 26px; height: 26px;
  border-radius: 50%;
  background: var(--blue);
  color: #fff;
  font-weight: 700;
  font-size: 11.5px;
  display: flex; align-items: center; justify-content: center;
  margin-top: 2px;
}
.steps li div { line-height: 1.65; color: var(--text); }
.steps li strong { color: var(--navy); }

/* ════════════════════════════════════════════════
   BADGE
════════════════════════════════════════════════ */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
  white-space: nowrap;
}
.b-red    { background: #fee2e2; color: #b91c1c; }
.b-green  { background: #dcfce7; color: #15803d; }
.b-amber  { background: #fef3c7; color: #b45309; }
.b-blue   { background: #dbeafe; color: #1d4ed8; }
.b-navy   { background: #e0e7ff; color: #3730a3; }
.b-purple { background: #ede9fe; color: #6d28d9; }

/* ════════════════════════════════════════════════
   PAGE MAP
════════════════════════════════════════════════ */
.page-map {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 16px;
}
.page-tile {
  background: var(--bg);
  border: 1px solid var(--border);
  border-left: 4px solid var(--blue);
  border-radius: 10px;
  padding: 12px 14px;
  page-break-inside: avoid;
}
.page-tile.admin-tile  { border-left-color: var(--red); }
.page-tile.health-tile { border-left-color: var(--green); }
.pt-icon { font-size: 13px; color: var(--blue); margin-bottom: 4px; }
.admin-tile .pt-icon  { color: var(--red); }
.health-tile .pt-icon { color: var(--green); }
.pt-name { font-weight: 700; font-size: 13px; color: var(--navy); }
.pt-url  { font-family: 'Courier New', monospace; font-size: 10.5px; color: var(--muted); margin-top: 2px; }

/* ════════════════════════════════════════════════
   LANG GRID
════════════════════════════════════════════════ */
.lang-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
}
.lang-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}
.lang-flag { font-size: 22px; }
.lang-name { font-weight: 700; color: var(--navy); }
.lang-url  { font-family: monospace; font-size: 11px; color: var(--muted); }

/* ════════════════════════════════════════════════
   CODE BLOCK
════════════════════════════════════════════════ */
.code-block {
  background: #0f172a;
  border-radius: 10px;
  padding: 20px 22px;
  margin: 14px 0;
  overflow-x: auto;
  page-break-inside: avoid;
}
.code-block pre {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.75;
  color: #e2e8f0;
  margin: 0;
  white-space: pre;
}
.code-block .cmt  { color: #94a3b8; }
.code-block .kw   { color: #7dd3fc; }
.code-block .str  { color: #86efac; }

/* ════════════════════════════════════════════════
   DIVIDER
════════════════════════════════════════════════ */
hr.div { border: none; border-top: 1px solid var(--border); margin: 22px 0; }

/* ════════════════════════════════════════════════
   FOOTER PAGINA
════════════════════════════════════════════════ */
.doc-footer {
  background: var(--navy);
  border-radius: 16px;
  padding: 32px 40px;
  color: rgba(255,255,255,.75);
  font-size: 12px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.doc-footer a { color: var(--sky); text-decoration: none; }
.doc-footer .f-brand { font-weight: 800; font-size: 14px; color: #fff; }

/* ════════════════════════════════════════════════
   @MEDIA PRINT — ottimizzato per PDF/stampa
════════════════════════════════════════════════ */
@media print {
  @page {
    size: A4;
    margin: 18mm 16mm 18mm 16mm;
  }

  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

  .topbar { display: none !important; }

  body { background: #fff !important; font-size: 12px; }

  .doc-wrap {
    margin-top: 0 !important;
    padding: 0 !important;
    max-width: 100% !important;
  }

  .cover {
    border-radius: 0 !important;
    page-break-after: always;
    margin-bottom: 0 !important;
  }

  .toc-box {
    page-break-after: always;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
  }

  .section {
    border-radius: 0 !important;
    border: none !important;
    border-top: 1px solid #e2e8f0 !important;
    margin-bottom: 0 !important;
    padding: 20px 0 !important;
    page-break-inside: avoid;
  }

  .card, .info-box, .toc-entry, .steps li,
  .page-tile, .lang-card, .code-block { page-break-inside: avoid; }

  .code-block { background: #1e293b !important; }

  .doc-footer {
    border-radius: 0 !important;
    margin-top: 20px !important;
  }

  /* stampa link in chiaro */
  a::after { content: none !important; }

  /* numeri pagina */
  .page-break { page-break-before: always; }
}

/* ════════════════════════════════════════════════
   RESPONSIVE MOBILE
════════════════════════════════════════════════ */
@media (max-width: 700px) {
  .doc-wrap { padding: 24px 16px 60px; }
  .cover { padding: 36px 24px 32px; border-radius: 14px; }
  .cover h1 { font-size: 26px; }
  .section { padding: 24px 20px; }
  .toc-cols { grid-template-columns: 1fr; }
  .card-grid { grid-template-columns: 1fr 1fr; }
  .page-map  { grid-template-columns: 1fr 1fr; }
  .doc-footer { padding: 24px 20px; }
}
@media (max-width: 480px) {
  .card-grid { grid-template-columns: 1fr; }
  .page-map  { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<!-- ══════════════════════════ TOPBAR (solo schermo) ══════════════════════════ -->
<div class="topbar">
  <a href="https://sindromerenu-italia.pages.dev/it/home" target="_blank" class="topbar-brand">
    <div class="topbar-icon"><i class="fas fa-dna"></i></div>
    <div>
      <div>Sindrome ReNU Italia APS</div>
      <div class="topbar-sub">Manuale d'Uso — v2.0 · Aprile 2026</div>
    </div>
  </a>
  <button class="topbar-print-btn" onclick="window.print()">
    <i class="fas fa-file-pdf"></i> Salva / Stampa PDF
  </button>
</div>

<!-- ══════════════════════════ DOCUMENTO ══════════════════════════ -->
<div class="doc-wrap">

<!-- ════ COPERTINA ════ -->
<div class="cover">
  <div class="cover-eyebrow"><i class="fas fa-book-open"></i>Manuale d'Uso Completo · Versione 2.0</div>
  <h1>Sito Web<br><span>Sindrome ReNU Italia</span> APS</h1>
  <p class="cover-desc">
    Guida completa a tutte le pagine, i moduli di contatto, il pannello amministrativo,
    la gestione GDPR e le procedure tecniche del sito ufficiale dell'associazione.
  </p>
  <div class="cover-meta">
    <div class="cover-pill"><i class="fas fa-calendar"></i>Aprile 2026</div>
    <div class="cover-pill"><i class="fas fa-code-branch"></i>Versione 2.0</div>
    <div class="cover-pill"><i class="fas fa-globe"></i>5 lingue</div>
    <div class="cover-pill"><i class="fas fa-file-alt"></i>13 sezioni</div>
    <div class="cover-pill"><i class="fas fa-shield-halved"></i>GDPR Compliant</div>
    <div class="cover-pill"><i class="fas fa-server"></i>Cloudflare Pages</div>
  </div>
</div>

<!-- ════ INDICE ════ -->
<div class="toc-box">
  <h2><i class="fas fa-list-ul"></i>Indice dei Contenuti</h2>
  <div class="toc-cols">
    <div>
      <a href="#s-struttura" class="toc-entry"><span class="toc-num">1</span><span class="toc-label">Struttura del sito</span><span class="toc-dots"></span></a>
      <a href="#s-home"      class="toc-entry"><span class="toc-num">2</span><span class="toc-label">Home — Pagina principale</span><span class="toc-dots"></span></a>
      <a href="#s-about"     class="toc-entry"><span class="toc-num">3</span><span class="toc-label">Cos'è ReNU</span><span class="toc-dots"></span></a>
      <a href="#s-research"  class="toc-entry"><span class="toc-num">4</span><span class="toc-label">Ricerca scientifica</span><span class="toc-dots"></span></a>
      <a href="#s-therapies" class="toc-entry"><span class="toc-num">5</span><span class="toc-label">Terapie</span><span class="toc-dots"></span></a>
      <a href="#s-diagnosis" class="toc-entry"><span class="toc-num">6</span><span class="toc-label">Diagnosi</span><span class="toc-dots"></span></a>
      <a href="#s-community" class="toc-entry"><span class="toc-num">7</span><span class="toc-label">Comunità</span><span class="toc-dots"></span></a>
    </div>
    <div>
      <a href="#s-donations" class="toc-entry"><span class="toc-num">8</span><span class="toc-label">Donazioni</span><span class="toc-dots"></span></a>
      <a href="#s-contact"   class="toc-entry"><span class="toc-num">9</span><span class="toc-label">Form Contatti</span><span class="toc-dots"></span></a>
      <a href="#s-brochure"  class="toc-entry"><span class="toc-num">10</span><span class="toc-label">Brochure & PDF</span><span class="toc-dots"></span></a>
      <a href="#s-members"   class="toc-entry"><span class="toc-num">11</span><span class="toc-label">Diventa Socio</span><span class="toc-dots"></span></a>
      <a href="#s-faq"       class="toc-entry"><span class="toc-num">12</span><span class="toc-label">FAQ</span><span class="toc-dots"></span></a>
      <a href="#s-privacy"   class="toc-entry"><span class="toc-num">13</span><span class="toc-label">Privacy & GDPR</span><span class="toc-dots"></span></a>
      <a href="#s-multilingua" class="toc-entry"><span class="toc-num">14</span><span class="toc-label">Multilingua</span><span class="toc-dots"></span></a>
      <a href="#s-email"     class="toc-entry"><span class="toc-num">15</span><span class="toc-label">Email automatiche</span><span class="toc-dots"></span></a>
      <a href="#s-admin"     class="toc-entry"><span class="toc-num">16</span><span class="toc-label">Pannello Admin</span><span class="toc-dots"></span></a>
      <a href="#s-gdpr-ops"  class="toc-entry"><span class="toc-num">17</span><span class="toc-label">Gestione GDPR</span><span class="toc-dots"></span></a>
      <a href="#s-database"  class="toc-entry"><span class="toc-num">18</span><span class="toc-label">Database D1</span><span class="toc-dots"></span></a>
      <a href="#s-deploy"    class="toc-entry"><span class="toc-num">19</span><span class="toc-label">Deploy & Tecnica</span><span class="toc-dots"></span></a>
      <a href="#s-contacts"  class="toc-entry"><span class="toc-num">20</span><span class="toc-label">Contatti utili</span><span class="toc-dots"></span></a>
    </div>
  </div>
</div>

<!-- ════════════════════════════════════
     1. STRUTTURA DEL SITO
════════════════════════════════════ -->
<div class="section" id="s-struttura">
  <div class="sec-header">
    <div class="sec-icon ic-navy"><i class="fas fa-sitemap"></i></div>
    <div>
      <div class="sec-title">1. Struttura del Sito</div>
      <div class="sec-sub">Architettura, URL e tecnologie utilizzate</div>
    </div>
  </div>
  <div class="sec-body">
    <div class="info-box box-blue">
      <i class="fas fa-info-circle"></i>
      <div>Il sito è realizzato con <strong>Hono + Vite</strong> e distribuito su <strong>Cloudflare Pages</strong>. Ogni pagina è accessibile con prefisso lingua (es. <code>/it/</code>, <code>/en/</code>…). URL di produzione: <strong>sindromerenu-italia.pages.dev</strong></div>
    </div>

    <div class="page-map">
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-house-chimney"></i></div><div class="pt-name">Home</div><div class="pt-url">/it/home</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-dna"></i></div><div class="pt-name">Cos'è ReNU</div><div class="pt-url">/it/about</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-microscope"></i></div><div class="pt-name">Ricerca</div><div class="pt-url">/it/research</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-pills"></i></div><div class="pt-name">Terapie</div><div class="pt-url">/it/therapies</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-stethoscope"></i></div><div class="pt-name">Diagnosi</div><div class="pt-url">/it/diagnosis</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-users"></i></div><div class="pt-name">Comunità</div><div class="pt-url">/it/community</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-hand-holding-heart"></i></div><div class="pt-name">Donazioni</div><div class="pt-url">/it/donations</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-envelope"></i></div><div class="pt-name">Contatti</div><div class="pt-url">/it/contact</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-file-pdf"></i></div><div class="pt-name">Brochure</div><div class="pt-url">/it/brochure</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-calendar-alt"></i></div><div class="pt-name">Eventi</div><div class="pt-url">/it/events</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-id-card"></i></div><div class="pt-name">Diventa Socio</div><div class="pt-url">/it/members</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-circle-question"></i></div><div class="pt-name">FAQ</div><div class="pt-url">/it/faq</div></div>
      <div class="page-tile"><div class="pt-icon"><i class="fas fa-shield-halved"></i></div><div class="pt-name">Privacy</div><div class="pt-url">/it/privacy</div></div>
      <div class="page-tile admin-tile"><div class="pt-icon"><i class="fas fa-lock"></i></div><div class="pt-name">Admin Panel</div><div class="pt-url">/admin</div></div>
      <div class="page-tile health-tile"><div class="pt-icon"><i class="fas fa-heart-pulse"></i></div><div class="pt-name">Health Check</div><div class="pt-url">/api/health</div></div>
      <div class="page-tile health-tile"><div class="pt-icon"><i class="fas fa-book-open"></i></div><div class="pt-name">Manuale</div><div class="pt-url">/manuale-utente</div></div>
    </div>

    <hr class="div">

    <table class="tbl">
      <thead><tr><th>Tecnologia</th><th>Ruolo</th><th>Versione</th></tr></thead>
      <tbody>
        <tr><td><strong>Hono</strong></td><td>Framework SSR (Server Side Rendering)</td><td>4.12.x</td></tr>
        <tr><td><strong>Vite</strong></td><td>Build tool e bundler</td><td>6.3.x</td></tr>
        <tr><td><strong>Cloudflare Pages</strong></td><td>Hosting, CDN globale, Workers</td><td>—</td></tr>
        <tr><td><strong>Cloudflare D1</strong></td><td>Database SQLite serverless</td><td>sindromerenu-db</td></tr>
        <tr><td><strong>MailChannels</strong></td><td>Email transazionali (nativo CF Workers)</td><td>—</td></tr>
        <tr><td><strong>Resend</strong></td><td>Email transazionali (fallback)</td><td>—</td></tr>
        <tr><td><strong>Tailwind CSS</strong></td><td>Utility CSS (via CDN)</td><td>3.x</td></tr>
        <tr><td><strong>Font Awesome</strong></td><td>Icone vettoriali</td><td>6.5</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ════ 2. HOME ════ -->
<div class="section" id="s-home">
  <div class="sec-header">
    <div class="sec-icon ic-blue"><i class="fas fa-house-chimney"></i></div>
    <div>
      <div class="sec-title">2. Home — Pagina Principale</div>
      <div class="sec-sub">URL: /it/home</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Pagina di atterraggio del sito. Presenta l'associazione e guida il visitatore verso le sezioni più importanti.</p>
    <div class="card-grid">
      <div class="card"><div class="card-icon ic-blue"><i class="fas fa-star"></i></div><h4>Hero Section</h4><p>Banner principale con titolo, tagline e pulsanti verso <em>Cos'è ReNU</em> e <em>Unisciti a noi</em>.</p></div>
      <div class="card"><div class="card-icon ic-sky"><i class="fas fa-chart-bar"></i></div><h4>Statistiche</h4><p>~250 casi nel mondo, 12–14 in Italia, 13 posizioni genomiche, prevalenza 1:35.000 nati.</p></div>
      <div class="card"><div class="card-icon ic-navy"><i class="fas fa-newspaper"></i></div><h4>Notizie</h4><p>Ultimi aggiornamenti dell'associazione, ricerche in corso ed eventi imminenti.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-hand-holding-heart"></i></div><h4>CTA Donazioni</h4><p>Blocco richiamo con IBAN e link diretto alla pagina Donazioni, visibile in tutte le lingue.</p></div>
      <div class="card"><div class="card-icon ic-green"><i class="fas fa-file-pdf"></i></div><h4>Anteprima Brochure</h4><p>Striscia con le brochure scaricabili e link alla galleria PDF completa.</p></div>
      <div class="card"><div class="card-icon ic-purple"><i class="fas fa-globe"></i></div><h4>Mappa Mondiale</h4><p>Distribuzione geografica dei casi di sindrome ReNU nel mondo.</p></div>
    </div>
  </div>
</div>

<!-- ════ 3. COS'È RENU ════ -->
<div class="section" id="s-about">
  <div class="sec-header">
    <div class="sec-icon ic-navy"><i class="fas fa-dna"></i></div>
    <div>
      <div class="sec-title">3. Cos'è ReNU — Informazioni Mediche</div>
      <div class="sec-sub">URL: /it/about</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Pagina informativa sulla sindrome RNU4-2, con contenuti scientifici organizzati in sottosezioni.</p>
    <div class="card-grid">
      <div class="card"><div class="card-icon ic-navy"><i class="fas fa-dna"></i></div><h4>Gene RNU4-2</h4><p>Gene coinvolto, varianti patogeniche e modalità di insorgenza (de novo, non ereditaria).</p></div>
      <div class="card"><div class="card-icon ic-blue"><i class="fas fa-brain"></i></div><h4>Anomalie Cerebrali</h4><p>Anomalie strutturali del cervello associate alla sindrome con riferimenti bibliografici.</p></div>
      <div class="card"><div class="card-icon ic-red"><i class="fas fa-bolt"></i></div><h4>Epilessia & Crisi</h4><p>Tipologie di crisi, frequenza e opzioni terapeutiche attualmente in studio.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-eye"></i></div><h4>Problemi Visivi</h4><p>Manifestazioni oculari e raccomandazioni per il monitoraggio specialistico.</p></div>
      <div class="card"><div class="card-icon ic-green"><i class="fas fa-child"></i></div><h4>Sviluppo & Crescita</h4><p>Ritardo dello sviluppo, tono muscolare, mobilità, alimentazione e comunicazione.</p></div>
      <div class="card"><div class="card-icon ic-purple"><i class="fas fa-smile"></i></div><h4>Carattere</h4><p>Tratti comportamentali caratteristici dei bambini con sindrome ReNU.</p></div>
    </div>
  </div>
</div>

<!-- ════ 4. RICERCA ════ -->
<div class="section" id="s-research">
  <div class="sec-header">
    <div class="sec-icon ic-blue"><i class="fas fa-microscope"></i></div>
    <div>
      <div class="sec-title">4. Ricerca Scientifica</div>
      <div class="sec-sub">URL: /it/research</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Panoramica sullo stato della ricerca sulla sindrome: pubblicazioni, trial clinici internazionali e link al <em>ReNU Support Tool</em> (PDF esterno prodotto dalla comunità internazionale).</p>
    <div class="info-box box-blue">
      <i class="fas fa-info-circle"></i>
      <div>I contenuti vengono aggiornati dalla redazione al pubblicarsi di nuovi studi. Per segnalare nuove ricerche scrivere a <strong>info@sindromerenu.it</strong>.</div>
    </div>
  </div>
</div>

<!-- ════ 5. TERAPIE ════ -->
<div class="section" id="s-therapies">
  <div class="sec-header">
    <div class="sec-icon ic-red"><i class="fas fa-pills"></i></div>
    <div>
      <div class="sec-title">5. Terapie</div>
      <div class="sec-sub">URL: /it/therapies</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Panoramica sulle terapie disponibili e di supporto per la gestione clinica della sindrome.</p>
    <div class="info-box box-amber">
      <i class="fas fa-triangle-exclamation"></i>
      <div><strong>Disclaimer medico:</strong> I contenuti sono puramente informativi. Per qualsiasi decisione terapeutica consultare sempre un medico specialista. L'associazione non fornisce consulenza medica.</div>
    </div>
  </div>
</div>

<!-- ════ 6. DIAGNOSI ════ -->
<div class="section" id="s-diagnosis">
  <div class="sec-header">
    <div class="sec-icon ic-purple"><i class="fas fa-stethoscope"></i></div>
    <div>
      <div class="sec-title">6. Diagnosi</div>
      <div class="sec-sub">URL: /it/diagnosis</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Informazioni sul percorso diagnostico: test genetici disponibili, centri di riferimento e come mettersi in contatto con l'associazione per supporto.</p>
    <div class="info-box box-green">
      <i class="fas fa-phone"></i>
      <div>Per informazioni sul percorso diagnostico: <strong>info@sindromerenu.it</strong> oppure WhatsApp <strong>+39 335 730 1206</strong></div>
    </div>
  </div>
</div>

<!-- ════ 7. COMUNITÀ ════ -->
<div class="section" id="s-community">
  <div class="sec-header">
    <div class="sec-icon ic-sky"><i class="fas fa-users"></i></div>
    <div>
      <div class="sec-title">7. Comunità</div>
      <div class="sec-sub">URL: /it/community</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Presentazione della comunità italiana e internazionale delle famiglie. Include storie, testimonials, rete di supporto, contatti con associazioni gemelle in altri Paesi e link ai gruppi WhatsApp e social.</p>
  </div>
</div>

<!-- ════ 8. DONAZIONI ════ -->
<div class="section" id="s-donations">
  <div class="sec-header">
    <div class="sec-icon ic-amber"><i class="fas fa-hand-holding-heart"></i></div>
    <div>
      <div class="sec-title">8. Donazioni</div>
      <div class="sec-sub">URL: /it/donations</div>
    </div>
  </div>
  <div class="sec-body">
    <div class="card-grid">
      <div class="card">
        <div class="card-icon ic-amber"><i class="fas fa-building-columns"></i></div>
        <h4>Bonifico Bancario</h4>
        <p><strong>IBAN:</strong> IT18H0306909606100000416360<br><strong>Intestato a:</strong> Sindrome ReNU Italia APS<br><strong>Email:</strong> donazioni@sindromerenu.it</p>
      </div>
      <div class="card">
        <div class="card-icon ic-green"><i class="fas fa-percent"></i></div>
        <h4>5 per Mille</h4>
        <p>Destinare il 5‰ dell'IRPEF all'associazione nella dichiarazione dei redditi, senza costi aggiuntivi.</p>
      </div>
      <div class="card">
        <div class="card-icon ic-blue"><i class="fas fa-receipt"></i></div>
        <h4>Detraibilità Fiscale</h4>
        <p>Le donazioni alle APS sono detraibili/deducibili ai sensi del Codice del Terzo Settore. Richiedere ricevuta a donazioni@sindromerenu.it.</p>
      </div>
    </div>
  </div>
</div>

<!-- ════ 9. CONTATTI ════ -->
<div class="section" id="s-contact">
  <div class="sec-header">
    <div class="sec-icon ic-green"><i class="fas fa-envelope"></i></div>
    <div>
      <div class="sec-title">9. Form Contatti</div>
      <div class="sec-sub">URL: /it/contact · API: POST /api/contatti</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Form per inviare messaggi all'associazione. I dati vengono salvati nel database e generano email automatiche.</p>

    <table class="tbl">
      <thead><tr><th>Campo</th><th>Tipo</th><th>Obbligatorio</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td><code>nome</code></td><td>Testo</td><td><span class="badge b-red">Sì</span></td><td>Nome e cognome</td></tr>
        <tr><td><code>email</code></td><td>Email</td><td><span class="badge b-red">Sì</span></td><td>Indirizzo di risposta</td></tr>
        <tr><td><code>messaggio</code></td><td>Textarea</td><td><span class="badge b-red">Sì</span></td><td>Testo del messaggio</td></tr>
        <tr><td><code>consenso_gdpr</code></td><td>Checkbox</td><td><span class="badge b-red">Sì</span></td><td>Consenso trattamento dati — GDPR v2.0</td></tr>
      </tbody>
    </table>

    <p style="font-weight:700;color:var(--navy);margin-top:18px;margin-bottom:6px;">Flusso dopo l'invio</p>
    <ol class="steps">
      <li><div>I dati vengono <strong>sanitizzati e validati</strong> server-side.</div></li>
      <li><div>Il record viene <strong>salvato nella tabella <code>contatti</code></strong> del database D1 (IP hashato SHA-256).</div></li>
      <li><div>Una <strong>notifica interna</strong> viene inviata a <em>info@sindromerenu.it</em>.</div></li>
      <li><div>Una <strong>email di conferma</strong> viene inviata all'utente con tempi di risposta indicativi (48–72 h lavorative).</div></li>
      <li><div>L'operazione viene <strong>registrata nell'audit log</strong> con timestamp (GDPR Art. 5).</div></li>
    </ol>

    <div class="info-box box-blue">
      <i class="fas fa-clock"></i>
      <div>Tempi di risposta: <strong>48–72 ore lavorative</strong>. Per urgenze: <strong>+39 335 730 1206</strong> (WhatsApp).</div>
    </div>
  </div>
</div>

<!-- ════ 10. BROCHURE ════ -->
<div class="section" id="s-brochure">
  <div class="sec-header">
    <div class="sec-icon ic-red"><i class="fas fa-file-pdf"></i></div>
    <div>
      <div class="sec-title">10. Brochure &amp; Materiali PDF</div>
      <div class="sec-sub">URL: /it/brochure</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Galleria di tutte le brochure scaricabili in PDF. Ogni brochure mostra un'anteprima visiva (thumbnail 301×474 px) e un pulsante di download diretto.</p>
    <table class="tbl">
      <thead><tr><th>#</th><th>Titolo</th><th>File PDF</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Insieme, facciamo la differenza</td><td><code>brochure-insieme-facciamo-differenza.pdf</code></td></tr>
        <tr><td>2</td><td>È nata Sindrome ReNU Italia APS!</td><td><code>brochure-nata-renu-italia.pdf</code></td></tr>
        <tr><td>3</td><td>Finalmente Realtà</td><td><code>brochure-finalmente-realta.pdf</code></td></tr>
        <tr><td>4</td><td>Una donazione dal cuore</td><td><code>brochure-donazione-cuore.pdf</code></td></tr>
        <tr><td>5</td><td>Un gesto, una speranza</td><td><code>brochure-un-gesto-speranza.pdf</code></td></tr>
        <tr><td>6</td><td>Potete contare sul nostro sostegno</td><td><code>brochure-potete-contare.pdf</code></td></tr>
        <tr><td>7</td><td>Fai la differenza oggi</td><td><code>brochure-fai-differenza.pdf</code></td></tr>
        <tr><td>8</td><td>Vuole fare la differenza</td><td><code>brochure-vuole-differenza.pdf</code></td></tr>
      </tbody>
    </table>
    <div class="info-box box-green">
      <i class="fas fa-download"></i>
      <div>I PDF sono serviti dalla cartella statica <code>/brochure/</code>. Il download avviene direttamente nel browser tramite attributo HTML <code>download</code>.</div>
    </div>
  </div>
</div>

<!-- ════ 11. SOCI ════ -->
<div class="section" id="s-members">
  <div class="sec-header">
    <div class="sec-icon ic-navy"><i class="fas fa-id-card"></i></div>
    <div>
      <div class="sec-title">11. Diventa Socio — Pre-iscrizione</div>
      <div class="sec-sub">URL: /it/members · API: POST /api/lista-attesa</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Form per iscriversi alla lista d'attesa dei soci. La quota e i dettagli vengono comunicati via email dal direttivo.</p>
    <table class="tbl">
      <thead><tr><th>Campo</th><th>Tipo</th><th>Obbl.</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td><code>nome</code></td><td>Testo</td><td><span class="badge b-red">Sì</span></td><td>Nome completo</td></tr>
        <tr><td><code>email</code></td><td>Email</td><td><span class="badge b-red">Sì</span></td><td>Email di contatto</td></tr>
        <tr><td><code>telefono</code></td><td>Testo</td><td><span class="badge b-amber">Opz.</span></td><td>Numero di telefono</td></tr>
        <tr><td><code>relazione</code></td><td>Testo</td><td><span class="badge b-amber">Opz.</span></td><td>Relazione con la sindrome</td></tr>
        <tr><td><code>consenso_gdpr</code></td><td>Checkbox</td><td><span class="badge b-red">Sì</span></td><td>Consenso GDPR obbligatorio</td></tr>
      </tbody>
    </table>
    <div class="info-box box-blue">
      <i class="fas fa-shield-halved"></i>
      <div>Il sistema usa <code>INSERT OR IGNORE</code>: email duplicate vengono ignorate automaticamente. Tabella di destinazione: <code>lista_attesa</code> in Cloudflare D1.</div>
    </div>
  </div>
</div>

<!-- ════ 12. FAQ ════ -->
<div class="section" id="s-faq">
  <div class="sec-header">
    <div class="sec-icon ic-blue"><i class="fas fa-circle-question"></i></div>
    <div>
      <div class="sec-title">12. FAQ — Domande Frequenti</div>
      <div class="sec-sub">URL: /it/faq</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Raccolta delle domande più frequenti sulla sindrome, sull'associazione e sui servizi offerti. Le risposte sono organizzate in accordion espandibili al clic. I contenuti vengono aggiornati periodicamente dalla redazione.</p>
  </div>
</div>

<!-- ════ 13. PRIVACY ════ -->
<div class="section" id="s-privacy">
  <div class="sec-header">
    <div class="sec-icon ic-purple"><i class="fas fa-shield-halved"></i></div>
    <div>
      <div class="sec-title">13. Privacy &amp; GDPR</div>
      <div class="sec-sub">URL: /it/privacy</div>
    </div>
  </div>
  <div class="sec-body">
    <p>Informativa completa sul trattamento dei dati personali, conforme al GDPR (Reg. UE 2016/679) e alle linee guida del Garante Privacy italiano.</p>
    <div class="card-grid">
      <div class="card"><div class="card-icon ic-purple"><i class="fas fa-gavel"></i></div><h4>Basi Giuridiche</h4><p>Consenso (Art. 6.1.a), contratto (Art. 6.1.b), obbligo legale (Art. 6.1.c). Dati sanitari ex Art. 9.2.a.</p></div>
      <div class="card"><div class="card-icon ic-blue"><i class="fas fa-user-shield"></i></div><h4>Diritti dell'Interessato</h4><p>Accesso, rettifica, cancellazione (Art. 17), portabilità, opposizione. Scrivere a info@sindromerenu.it.</p></div>
      <div class="card"><div class="card-icon ic-green"><i class="fas fa-cookie-bite"></i></div><h4>Cookie Policy</h4><p>Solo cookie tecnici necessari. Nessun cookie di profilazione o marketing. Nessun consenso obbligatorio.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-building-shield"></i></div><h4>Garante Privacy</h4><p>Autorità di controllo italiana: <strong>garanteprivacy.it</strong></p></div>
    </div>
  </div>
</div>

<!-- ════ 14. MULTILINGUA ════ -->
<div class="section" id="s-multilingua">
  <div class="sec-header">
    <div class="sec-icon ic-sky"><i class="fas fa-language"></i></div>
    <div>
      <div class="sec-title">14. Supporto Multilingua</div>
      <div class="sec-sub">5 lingue disponibili — cambio tramite menu o prefisso URL</div>
    </div>
  </div>
  <div class="sec-body">
    <div class="lang-grid">
      <div class="lang-card"><div class="lang-flag">🇮🇹</div><div><div class="lang-name">Italiano</div><div class="lang-url">/it/…</div></div></div>
      <div class="lang-card"><div class="lang-flag">🇬🇧</div><div><div class="lang-name">English</div><div class="lang-url">/en/…</div></div></div>
      <div class="lang-card"><div class="lang-flag">🇫🇷</div><div><div class="lang-name">Français</div><div class="lang-url">/fr/…</div></div></div>
      <div class="lang-card"><div class="lang-flag">🇪🇸</div><div><div class="lang-name">Español</div><div class="lang-url">/es/…</div></div></div>
      <div class="lang-card"><div class="lang-flag">🇩🇪</div><div><div class="lang-name">Deutsch</div><div class="lang-url">/de/…</div></div></div>
    </div>
    <div class="info-box box-blue" style="margin-top:14px;">
      <i class="fas fa-info-circle"></i>
      <div>Il cambio lingua avviene lato server: Hono legge il prefisso URL e carica il dizionario corrispondente. Tutti i testi dell'interfaccia sono tradotti. I PDF delle brochure sono condivisi tra tutte le lingue.</div>
    </div>
  </div>
</div>

<!-- ════ 15. EMAIL ════ -->
<div class="section" id="s-email">
  <div class="sec-header">
    <div class="sec-icon ic-blue"><i class="fas fa-paper-plane"></i></div>
    <div>
      <div class="sec-title">15. Email Automatiche</div>
      <div class="sec-sub">MailChannels (primario) + Resend (fallback)</div>
    </div>
  </div>
  <div class="sec-body">
    <table class="tbl">
      <thead><tr><th>Evento scatenante</th><th>Notifica interna</th><th>Conferma utente</th></tr></thead>
      <tbody>
        <tr><td>Nuovo messaggio (form Contatti)</td><td>info@sindromerenu.it</td><td><span class="badge b-green">Sì</span></td></tr>
        <tr><td>Nuova pre-iscrizione (form Soci)</td><td>info@sindromerenu.it</td><td><span class="badge b-green">Sì</span></td></tr>
        <tr><td>Cancellazione dati GDPR (Art. 17)</td><td>info@sindromerenu.it</td><td><span class="badge b-amber">Opzionale</span></td></tr>
      </tbody>
    </table>
    <div class="info-box box-amber" style="margin-top:14px;">
      <i class="fas fa-triangle-exclamation"></i>
      <div><strong>Fallback Resend:</strong> In caso di errore MailChannels, il sistema usa Resend. Richiede la variabile d'ambiente <code>RESEND_API_KEY</code> in Cloudflare Pages → Settings → Environment Variables.</div>
    </div>
  </div>
</div>

<!-- ════ 16. ADMIN ════ -->
<div class="section page-break" id="s-admin">
  <div class="sec-header">
    <div class="sec-icon ic-red"><i class="fas fa-lock"></i></div>
    <div>
      <div class="sec-title">16. Pannello Amministrativo</div>
      <div class="sec-sub">URL: /admin — Accesso riservato al personale autorizzato</div>
    </div>
  </div>
  <div class="sec-body">
    <div class="info-box box-red">
      <i class="fas fa-triangle-exclamation"></i>
      <div><strong>Accesso riservato.</strong> Il pannello è protetto da token segreto. Non condividere il token. Cambiarlo regolarmente tramite la variabile d'ambiente <code>ADMIN_SECRET</code> in Cloudflare Pages.</div>
    </div>

    <p style="font-weight:700;color:var(--navy);margin-top:16px;margin-bottom:6px;">Come accedere</p>
    <ol class="steps">
      <li><div>Aprire il browser e navigare su <strong>/admin</strong></div></li>
      <li><div>Inserire il <strong>token di accesso</strong> nel campo di login</div></li>
      <li><div>Fare clic su <strong>"Accedi"</strong></div></li>
      <li><div>Il pannello carica automaticamente le statistiche e i dati</div></li>
    </ol>

    <p style="font-weight:700;color:var(--navy);margin-top:16px;margin-bottom:10px;">Schede del pannello</p>
    <div class="card-grid">
      <div class="card"><div class="card-icon ic-blue"><i class="fas fa-user-group"></i></div><h4>Adesioni</h4><p>Lista dei soci aderenti con dettagli e date di iscrizione.</p></div>
      <div class="card"><div class="card-icon ic-green"><i class="fas fa-envelope"></i></div><h4>Contatti</h4><p>Messaggi ricevuti tramite il form contatti con nome, email e testo.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-clock"></i></div><h4>Lista Attesa</h4><p>Pre-iscrizioni soci in attesa di conferma dal direttivo.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-hand-holding-heart"></i></div><h4>Donazioni</h4><p>Registro delle donazioni ricevute con importo e data.</p></div>
      <div class="card"><div class="card-icon ic-navy"><i class="fas fa-scroll"></i></div><h4>Audit Log</h4><p>Log completo di tutte le operazioni (form, accessi, cancellazioni GDPR) con timestamp.</p></div>
      <div class="card"><div class="card-icon ic-red"><i class="fas fa-user-slash"></i></div><h4>Cancella Dati</h4><p>Form per esercitare il diritto all'oblio (Art. 17 GDPR) su richiesta dell'interessato.</p></div>
    </div>

    <hr class="div">

    <p style="font-weight:700;color:var(--navy);margin-bottom:8px;">Endpoint API Admin</p>
    <table class="tbl">
      <thead><tr><th>Metodo</th><th>Endpoint</th><th>Descrizione</th></tr></thead>
      <tbody>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/stats</code></td><td>Statistiche aggregate per tabella</td></tr>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/adesioni</code></td><td>Lista adesioni</td></tr>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/contatti</code></td><td>Lista messaggi di contatto</td></tr>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/lista-attesa</code></td><td>Pre-iscrizioni in lista d'attesa</td></tr>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/donazioni</code></td><td>Registro donazioni</td></tr>
        <tr><td><span class="badge b-blue">GET</span></td><td><code>/api/admin/audit</code></td><td>Log operazioni GDPR</td></tr>
        <tr><td><span class="badge b-red">DELETE</span></td><td><code>/api/admin/erasure/:email</code></td><td>Cancellazione dati Art. 17 GDPR</td></tr>
      </tbody>
    </table>
    <div class="info-box box-blue">
      <i class="fas fa-code"></i>
      <div>Tutte le chiamate API admin richiedono l'header HTTP: <code>X-Admin-Token: &lt;token&gt;</code></div>
    </div>
  </div>
</div>

<!-- ════ 17. GDPR OPS ════ -->
<div class="section" id="s-gdpr-ops">
  <div class="sec-header">
    <div class="sec-icon ic-purple"><i class="fas fa-user-shield"></i></div>
    <div>
      <div class="sec-title">17. Gestione GDPR — Operazioni</div>
      <div class="sec-sub">Diritto all'oblio e misure tecniche</div>
    </div>
  </div>
  <div class="sec-body">
    <p style="font-weight:700;color:var(--navy);margin-bottom:6px;">Procedura cancellazione dati (Art. 17 GDPR)</p>
    <ol class="steps">
      <li><div>Accedere al pannello <strong>/admin</strong></div></li>
      <li><div>Selezionare la scheda <strong>"Cancella Dati"</strong></div></li>
      <li><div>Inserire l'<strong>email</strong> dell'interessato</div></li>
      <li><div>Digitare <strong>CANCELLA</strong> nel campo di conferma</div></li>
      <li><div>Fare clic su <strong>"Esegui Cancellazione"</strong></div></li>
      <li><div>Il sistema <strong>anonimizza i record</strong> e registra l'operazione in audit log</div></li>
    </ol>
    <div class="info-box box-red">
      <i class="fas fa-triangle-exclamation"></i>
      <div><strong>Irreversibile.</strong> I dati personali vengono sovrascritti con valori anonimi. L'operazione è registrata nell'audit log per conformità normativa (soft-delete).</div>
    </div>

    <hr class="div">

    <p style="font-weight:700;color:var(--navy);margin-bottom:10px;">Misure tecniche implementate</p>
    <div class="card-grid">
      <div class="card"><div class="card-icon ic-purple"><i class="fas fa-mask"></i></div><h4>IP Hashato</h4><p>L'indirizzo IP non viene mai salvato in chiaro. Viene hashato (SHA-256) prima della persistenza nel database.</p></div>
      <div class="card"><div class="card-icon ic-blue"><i class="fas fa-scroll"></i></div><h4>Audit Log</h4><p>Ogni operazione (invio form, accesso admin, cancellazione) viene registrata con timestamp e tipo di azione.</p></div>
      <div class="card"><div class="card-icon ic-green"><i class="fas fa-trash-arrow-up"></i></div><h4>Soft Delete</h4><p>I record cancellati non vengono eliminati fisicamente ma anonimizzati, preservando l'integrità referenziale.</p></div>
      <div class="card"><div class="card-icon ic-amber"><i class="fas fa-lock"></i></div><h4>HTTPS</h4><p>Tutte le comunicazioni avvengono su HTTPS. I certificati TLS sono gestiti automaticamente da Cloudflare.</p></div>
    </div>
  </div>
</div>

<!-- ════ 18. DATABASE ════ -->
<div class="section" id="s-database">
  <div class="sec-header">
    <div class="sec-icon ic-blue"><i class="fas fa-database"></i></div>
    <div>
      <div class="sec-title">18. Database Cloudflare D1</div>
      <div class="sec-sub">SQLite serverless — sindromerenu-db</div>
    </div>
  </div>
  <div class="sec-body">
    <table class="tbl">
      <thead><tr><th>Tabella</th><th>Contenuto</th><th>Classificazione</th></tr></thead>
      <tbody>
        <tr><td><code>contatti</code></td><td>Messaggi ricevuti dal form contatti</td><td><span class="badge b-red">Dati personali</span></td></tr>
        <tr><td><code>lista_attesa</code></td><td>Pre-iscrizioni soci in attesa</td><td><span class="badge b-red">Dati personali</span></td></tr>
        <tr><td><code>adesioni</code></td><td>Soci confermati</td><td><span class="badge b-red">Dati personali</span></td></tr>
        <tr><td><code>donazioni</code></td><td>Registro donazioni</td><td><span class="badge b-amber">Dati finanziari</span></td></tr>
        <tr><td><code>audit_log</code></td><td>Log di tutte le operazioni</td><td><span class="badge b-navy">Log tecnico</span></td></tr>
      </tbody>
    </table>
    <div class="info-box box-blue">
      <i class="fas fa-server"></i>
      <div>Il sistema prevede un <strong>fallback in-memory</strong> in caso D1 non sia disponibile (es. sviluppo locale). I dati in-memory non sono persistenti tra i riavvii.</div>
    </div>
  </div>
</div>

<!-- ════ 19. DEPLOY ════ -->
<div class="section" id="s-deploy">
  <div class="sec-header">
    <div class="sec-icon ic-green"><i class="fas fa-rocket"></i></div>
    <div>
      <div class="sec-title">19. Deploy &amp; Informazioni Tecniche</div>
      <div class="sec-sub">Procedura di rilascio, variabili d'ambiente e health check</div>
    </div>
  </div>
  <div class="sec-body">
    <div class="code-block"><pre><span class="cmt"># 1. Build del progetto</span>
<span class="kw">npm</span> run build

<span class="cmt"># 2. Deploy su Cloudflare Pages</span>
<span class="kw">npx</span> wrangler pages deploy dist <span class="str">--project-name</span> sindromerenu-italia

<span class="cmt"># 3. Verifica health check</span>
<span class="kw">curl</span> https://sindromerenu-italia.pages.dev/api/health
<span class="cmt"># → {"status":"ok","gdpr":"v2.0","version":"2.0","d1":true,"email":true}</span></pre></div>

    <p style="font-weight:700;color:var(--navy);margin-top:16px;margin-bottom:8px;">Variabili d'ambiente (Cloudflare Pages → Settings → Environment Variables)</p>
    <table class="tbl">
      <thead><tr><th>Variabile</th><th>Descrizione</th><th>Obbligatoria</th></tr></thead>
      <tbody>
        <tr><td><code>ADMIN_SECRET</code></td><td>Token segreto per l'accesso al pannello admin</td><td><span class="badge b-red">Sì</span></td></tr>
        <tr><td><code>RESEND_API_KEY</code></td><td>Chiave API Resend per email di fallback</td><td><span class="badge b-amber">Raccomandato</span></td></tr>
      </tbody>
    </table>

    <div class="info-box box-green" style="margin-top:14px;">
      <i class="fas fa-heart-pulse"></i>
      <div><strong>Health Check:</strong> GET <code>/api/health</code> — risposta attesa: <code>{"status":"ok","gdpr":"v2.0","version":"2.0","d1":true,"email":true}</code></div>
    </div>
  </div>
</div>

<!-- ════ 20. CONTATTI UTILI ════ -->
<div class="section" id="s-contacts">
  <div class="sec-header">
    <div class="sec-icon ic-navy"><i class="fas fa-address-book"></i></div>
    <div>
      <div class="sec-title">20. Contatti Utili</div>
      <div class="sec-sub">Riferimenti dell'associazione</div>
    </div>
  </div>
  <div class="sec-body">
    <table class="tbl">
      <thead><tr><th>Contatto</th><th>Indirizzo / Numero</th><th>Uso</th></tr></thead>
      <tbody>
        <tr><td><i class="fas fa-envelope" style="color:var(--blue);margin-right:6px;"></i>Email generale</td><td>info@sindromerenu.it</td><td>Informazioni, contatti, richieste GDPR</td></tr>
        <tr><td><i class="fas fa-envelope" style="color:var(--amber);margin-right:6px;"></i>Email donazioni</td><td>donazioni@sindromerenu.it</td><td>Donazioni, ricevute fiscali</td></tr>
        <tr><td><i class="fas fa-envelope" style="color:var(--navy);margin-right:6px;"></i>Segreteria</td><td>segreteria@sindromerenu.it</td><td>Gestione soci, comunicazioni ufficiali</td></tr>
        <tr><td><i class="fas fa-envelope" style="color:var(--purple);margin-right:6px;"></i>Presidenza</td><td>presidencia@sindromerenu.it</td><td>Contatto diretto con il presidente</td></tr>
        <tr><td><i class="fab fa-whatsapp" style="color:var(--green);margin-right:6px;"></i>WhatsApp</td><td>+39 335 730 1206</td><td>Supporto diretto, urgenze</td></tr>
        <tr><td><i class="fas fa-globe" style="color:var(--blue);margin-right:6px;"></i>Sito web</td><td>sindromerenu-italia.pages.dev</td><td>Sito ufficiale</td></tr>
        <tr><td><i class="fas fa-lock" style="color:var(--red);margin-right:6px;"></i>Admin panel</td><td>sindromerenu-italia.pages.dev/admin</td><td>Pannello amministrativo (riservato)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ════ FOOTER ════ -->
<div class="doc-footer">
  <div>
    <div class="f-brand"><i class="fas fa-dna" style="margin-right:6px;color:var(--sky);"></i>Sindrome ReNU Italia APS</div>
    <div style="margin-top:5px;">Manuale d'Uso v2.0 — Aprile 2026 · GDPR Compliant</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:5px;font-size:12px;">
    <div><i class="fas fa-globe" style="color:var(--sky);margin-right:5px;"></i><a href="https://sindromerenu-italia.pages.dev" target="_blank">sindromerenu-italia.pages.dev</a></div>
    <div><i class="fas fa-envelope" style="color:var(--sky);margin-right:5px;"></i><a href="mailto:info@sindromerenu.it">info@sindromerenu.it</a></div>
    <div><i class="fab fa-whatsapp" style="color:var(--sky);margin-right:5px;"></i>+39 335 730 1206</div>
  </div>
  <div style="font-size:11px;opacity:.55;max-width:220px;text-align:right;">
    Documento riservato ad uso interno.<br>
    Dati trattati nel rispetto del GDPR (Reg. UE 2016/679).
  </div>
</div>

</div><!-- /doc-wrap -->

<script>
/* Smooth scroll per i link dell'indice */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
</script>
</body>
</html>
`

app.get('/manuale-utente', (c) => c.html(MANUALE_HTML))
app.get('/manuale-utente.html', (c) => c.html(MANUALE_HTML))
app.get('/manuale', (c) => c.html(MANUALE_HTML))
app.get('/manual', (c) => c.html(MANUALE_HTML))

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const translations: Record<string, Record<string, string>> = {
  it: {
    lang: 'it', langName: 'Italiano',
    title: 'Sindrome ReNU Italia APS',
    subtitle: 'Insieme, facciamo la differenza',
    tagline: 'Una condizione genetica di nuova identificazione. Uno sforzo di ricerca coordinato a livello globale.',
    hero_text: 'Nasce la prima Associazione ReNU in Italia con lo scopo di <strong>supportare le famiglie</strong> e offrire un aiuto concreto ai bambini ReNU',
    hero_desc: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2. Attualmente sono <strong>~250 i casi accertati nel mondo</strong> (12-14 in Italia). Le varianti patogene si concentrano in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a> degli oltre 3 miliardi di paia di basi del genoma! Siamo qui per <strong>supportare le famiglie italiane</strong> e offrire un aiuto concreto ai bambini ReNU.',
    nav_home: 'Home', nav_about: 'Cos\'è ReNU', nav_research: 'Ricerca',
    nav_therapies: 'Terapie', nav_diagnosis: 'Diagnosi', nav_community: 'Comunità',
    nav_donations: 'Sostienici', nav_contact: 'Contatti', nav_brochure: 'Brochure',
    nav_events: 'Eventi', nav_projects: 'Progetti', nav_members: 'Diventa Socio', nav_faq: 'FAQ & Diritti',
    btn_diagnosis: 'VUOI MAGGIORI INFORMAZIONI? CLICCA QUI',
    btn_diagnosis_sub: 'Contattaci per informazioni sulla Sindrome ReNU',
    section_map_title: 'Registrati qui',
    section_map_desc: 'La forza è nei numeri! Aggiungi un tuo caro con ReNU alla mappa mondiale per aumentare la consapevolezza.',
    section_awareness_title: 'Aumenta la Consapevolezza',
    section_awareness_desc: 'Partecipa o sostieni gli eventi ReNU Speranza per diffondere la consapevolezza!',
    section_research_title: 'Ricerca',
    section_research_desc: 'Partecipa ora per accelerare la ricerca e lo sviluppo di nuovi farmaci o terapie!',
    section_info_title: 'Maggiori Informazioni',
    section_info_desc: 'Scopri come si manifesta la ReNU, le caratteristiche tipiche e come viene influenzato lo sviluppo.',
    section_parents_title: 'Connessione tra Genitori',
    section_parents_desc: 'Non sei solo! Trova speranza e comunità con genitori di tutto il mondo.',
    section_donations_title: 'Donazioni',
    section_donations_desc: 'Promuovere la ricerca, costruire comunità e diffondere la consapevolezza. Ogni contributo fa la differenza!',
    about_title: 'Cos\'è la Sindrome ReNU?',
    about_gene: 'La Sindrome ReNU è causata da varianti patogene del gene RNU4-2, un gene dell\'RNA non codificante componente critico del macchinario di splicing dell\'RNA. È altamente conservato evolutivamente.',
    about_discovery: 'Scoperta di RNU4-2',
    about_discovery_text: 'RNU4-2 è stata identificata nell\'ottobre 2024 come una delle principali cause genetiche di disturbi rari del neurosviluppo, con una prevalenza stimata di circa 1 su 35.000 nati vivi.',
    about_features_title: 'Caratteristiche della Sindrome ReNU',
    about_brain: 'Anomalie cerebrali', about_brain_items: 'Volume ridotto della materia bianca, ipoplasia del corpo calloso, ventricomegalia, mielinizzazione ritardata',
    about_development: 'Disabilità intellettiva', about_development_items: 'Ritardi nello sviluppo, limitazioni nel funzionamento intellettivo e nel comportamento adattivo',
    about_seizures: 'Epilessia', about_seizures_items: 'Spasmi infantili, crisi focali e tonico-cloniche, crisi febbrili o stato epilettico',
    about_vision: 'Problemi visivi', about_vision_items: 'Ipoplasia del nervo ottico, CVI (compromissione visiva corticale), strabismo, nistagmo',
    about_face: 'Caratteristiche del viso', about_face_items: 'Viso miopatico, epicanto, radice nasale larga, narici anteverse, grandi orecchie, guance piene',
    about_muscle: 'Tono muscolare', about_muscle_items: 'Ipotonia (basso tono muscolare) o debolezza muscolare',
    about_mobility: 'Mobilità', about_mobility_items: 'Ritardo nel cammino o incapacità di camminare',
    about_growth: 'Crescita', about_growth_items: 'Microcefalia, bassa statura, ipotiroidismo o deficit dell\'ormone della crescita',
    about_feeding: 'Alimentazione', about_feeding_items: 'Difficoltà alimentari, scialorrea, stipsi, reflusso gastroesofageo',
    about_communication: 'Comunicazione', about_communication_items: 'Difficoltà di linguaggio (possono sviluppare comunicazione alternativa)',
    about_bones: 'Problemi ossei', about_bones_items: 'Bassa densità ossea, displasia dell\'anca, fratture ricorrenti',
    about_happy: 'Molte persone con Sindrome ReNU mostrano un temperamento felice, sono affettuose e amano le altalene, l\'acqua, la musica e le routine.',
    about_diagnosis_note: 'In Italia, per diagnosticare RNU4-2 è necessario il Sequenziamento dell\'Intero Genoma (WGS). Il WES non è in grado di rilevarlo!',
    research_title: 'Ricerca sulla Sindrome ReNU',
    research_intro: 'TU puoi far avanzare la ricerca verso opzioni di trattamento per ReNU!',
    research_crid: 'Prima di iscriversi a qualsiasi ricerca, crea un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID di Ricerca Clinica (CRID)</a>! Condividi il tuo CRID con ogni studio clinico a cui partecipi.',
    research_priorities_title: 'Cosa è importante per la comunità RNU4-2?',
    therapies_title: 'Terapie per la Sindrome ReNU',
    therapies_intro: 'Molti servizi terapeutici sono utilizzati per aiutare le persone con Sindrome ReNU',
    therapies_note: 'Questo sito non approva né raccomanda terapie specifiche. Consultare sempre un medico.',
    diagnosis_title: 'Dove fare il Test Diagnostico in Italia',
    diagnosis_intro: 'Per ricevere informazioni sui centri diagnostici disponibili in Italia, contattaci.',
    diagnosis_contact: 'Per informazioni sui centri WGS in Italia, scrivici a:',
    community_title: 'Comunità – Connessione tra Famiglie',
    community_intro: 'Non sei solo! Trova speranza e comunità con altre famiglie. Famiglie RNU4-2 mappate in oltre 38 paesi del mondo.',
    donations_title: 'Sostienici',
    donations_intro: 'Il tuo supporto ci permette di promuovere la ricerca, costruire la comunità e offrire un aiuto concreto alle famiglie ReNU in Italia.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Intestato a: Sindrome ReNU Italia APS',
    contact_title: 'Contattaci',
    contact_intro: 'Siamo a tua disposizione per qualsiasi informazione sulla Sindrome ReNU Italia.',
    brochure_title: 'Scarica le nostre Brochure',
    brochure_intro: 'Scarica e condividi le brochure informative di Sindrome ReNU Italia APS',
    brochure_download: 'Scarica PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Tutti i diritti riservati.',
    footer_partnership: 'In partnership con ReNU Syndrome United (USA)',
    footer_tagline: 'Insieme, facciamo la differenza',
    donate_now: 'Dona Ora', join_registry: 'Unisciti al Registro',
    learn_more: 'Scopri di più', contact_us: 'Contattaci', read_more: 'Leggi di più',
    coe_title: 'Centro di Eccellenza ReNU (COE)',
    coe_desc: 'ReNU Syndrome United sta costruendo una rete globale di Centri di Eccellenza per collegare le famiglie di pazienti con team medici multidisciplinari di altissimo livello, dedicati alla ricerca e al trattamento della Sindrome ReNU.',
    world_title: 'ReNU nel Mondo',
    world_desc: 'Famiglie RNU4-2 sono state mappate in: Australia, Belgio, Brasile, Canada, Cina, Colombia, Repubblica Ceca, Danimarca, Inghilterra, Francia, Germania, Grecia, Hong Kong, Islanda, Irlanda, Israele, Italia, Giappone, Messico, Paesi Bassi, Nuova Zelanda, Irlanda del Nord, Norvegia, Palestina, Polonia, Romania, Russia, Arabia Saudita, Scozia, Corea del Sud, Spagna, Svezia, Svizzera, Turchia, Ucraina, Stati Uniti, Galles.',
    intl_network: 'Rete Internazionale',
  },
  en: {
    lang: 'en', langName: 'English',
    title: 'ReNU Syndrome Italy APS',
    subtitle: 'Together, we make a difference',
    tagline: 'A newly identified genetic condition. A globally coordinated research effort.',
    hero_text: 'RNU4-2 Emerges as a Leading Cause of Rare Neurodevelopmental Disorders – <strong>Renewing Hope for Families</strong>',
    hero_desc: 'ReNU syndrome is a spliceosomal disorder with a defined mutational hotspot and growing global dataset. Currently <strong>~250 confirmed cases worldwide</strong> (12-14 in Italy), though the true number of undiagnosed cases is estimated to be much higher: pathogenic variants are concentrated in just <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> of our 3 billion base-pair genome!',
    nav_home: 'Home', nav_about: 'About ReNU', nav_research: 'Research',
    nav_therapies: 'Therapies', nav_diagnosis: 'Diagnosis', nav_community: 'Community',
    nav_donations: 'Donations', nav_contact: 'Contact', nav_brochure: 'Brochures',
    nav_events: 'Events', nav_projects: 'Projects', nav_members: 'Become a Member', nav_faq: 'FAQ & Rights',
    btn_diagnosis: 'WANT MORE INFORMATION? CLICK HERE',
    btn_diagnosis_sub: 'Contact us for information about ReNU Syndrome',
    section_map_title: 'Register Here',
    section_map_desc: 'Strength in numbers! Add a ReNU loved one to the worldwide map to raise awareness.',
    section_awareness_title: 'Raise Awareness',
    section_awareness_desc: 'Attend or support ReNU Hope events to raise awareness!',
    section_research_title: 'Research',
    section_research_desc: 'Participate now to accelerate research and the development of new therapies!',
    section_info_title: 'More Information',
    section_info_desc: 'Learn about how ReNU occurs, typical features and how development is affected.',
    section_parents_title: 'Parent Connection',
    section_parents_desc: 'You\'re not alone! Find hope and community with parents worldwide.',
    section_donations_title: 'Donations',
    section_donations_desc: 'Promoting research, building community, and spreading awareness. Every contribution matters!',
    about_title: 'What is ReNU Syndrome?',
    about_gene: 'ReNU Syndrome is caused by pathogenic variants in the RNU4-2 gene, a non-coding RNA gene that is a critical component of the RNA splicing machinery.',
    about_discovery: 'Discovery of RNU4-2',
    about_discovery_text: 'RNU4-2 was identified in October 2024 as one of the leading genetic causes of rare neurodevelopmental disorders, affecting approximately 1 in 35,000 live births.',
    about_features_title: 'ReNU Syndrome Features',
    about_brain: 'Brain Abnormalities', about_brain_items: 'Reduced white matter volume, corpus callosum hypoplasia, ventriculomegaly, delayed myelination',
    about_development: 'Intellectual Disability', about_development_items: 'Developmental delays, significant limitations in intellectual functioning and adaptive behavior',
    about_seizures: 'Epilepsy', about_seizures_items: 'Infantile spasms, focal and tonic-clonic seizures, febrile seizures or status epilepticus',
    about_vision: 'Visual Problems', about_vision_items: 'Optic nerve hypoplasia, cortical vision impairment (CVI), strabismus, nystagmus',
    about_face: 'Facial Features', about_face_items: 'Myopathic face, epicanthus, wide nasal bridge, anteverted nares, large cupped ears, full cheeks',
    about_muscle: 'Muscle Tone', about_muscle_items: 'Hypotonia (low muscle tone) or muscle weakness',
    about_mobility: 'Mobility', about_mobility_items: 'Delayed walking or inability to walk',
    about_growth: 'Growth', about_growth_items: 'Microcephaly, short stature, hypothyroidism or growth hormone deficiency',
    about_feeding: 'Feeding', about_feeding_items: 'Feeding difficulties, excessive drooling, constipation, gastroesophageal reflux',
    about_communication: 'Communication', about_communication_items: 'Language acquisition difficulties (may develop alternative communication)',
    about_bones: 'Bone Issues', about_bones_items: 'Low bone density, hip dysplasia, recurrent fractures',
    about_happy: 'Many people with ReNU Syndrome exhibit a happy demeanor, are affectionate, and enjoy swings, water, music, and routines.',
    about_diagnosis_note: 'In Italy, Whole Genome Sequencing (WGS) is needed to diagnose RNU4-2. WES cannot detect it!',
    research_title: 'ReNU Syndrome Research',
    research_intro: 'YOU can advance research towards ReNU treatment options!',
    research_crid: 'Before enrolling in any research, create a <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">Clinical Research ID (CRID)</a>! Share your CRID with each clinical study you enroll in.',
    research_priorities_title: 'What\'s important to the RNU4-2 Community?',
    therapies_title: 'Therapies for ReNU Syndrome',
    therapies_intro: 'Many therapeutic services are currently used to aid people with ReNU Syndrome',
    therapies_note: 'This site does not endorse specific therapies. Always consult a physician.',
    diagnosis_title: 'Where to get Diagnosed in Italy',
    diagnosis_intro: 'For information about diagnostic centers in Italy, contact us.',
    diagnosis_contact: 'For information on WGS centers in Italy, contact us at:',
    community_title: 'Community – Family Connection',
    community_intro: 'You\'re not alone! Find hope and community with other families. RNU4-2 families have been mapped in over 38 countries worldwide.',
    donations_title: 'Support Us',
    donations_intro: 'Your support allows us to promote research, build community and provide concrete help to ReNU families in Italy.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Account holder: Sindrome ReNU Italia APS',
    contact_title: 'Contact Us',
    contact_intro: 'We are available for any information about ReNU Syndrome Italy.',
    brochure_title: 'Download our Brochures',
    brochure_intro: 'Download and share the informational brochures of Sindrome ReNU Italia APS',
    brochure_download: 'Download PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. All rights reserved.',
    footer_partnership: 'In partnership with ReNU Syndrome United (USA)',
    footer_tagline: 'Together, we make a difference',
    donate_now: 'Donate Now', join_registry: 'Join Registry',
    learn_more: 'Learn More', contact_us: 'Contact Us', read_more: 'Read More',
    coe_title: 'ReNU Center of Excellence (COE)',
    coe_desc: 'ReNU Syndrome United is building a global Center of Excellence Network to connect patient families with multidisciplinary clinical care teams dedicated to advancing research and treatment of ReNU Syndrome.',
    world_title: 'ReNU Worldwide',
    world_desc: 'RNU4-2 families have been mapped in: Australia, Belgium, Brazil, Canada, China, Colombia, Czech Republic, Denmark, England, France, Germany, Greece, Hong Kong, Iceland, Ireland, Israel, Italy, Japan, Mexico, Netherlands, New Zealand, Northern Ireland, Norway, Palestine, Poland, Romania, Russia, Saudi Arabia, Scotland, South Korea, Spain, Sweden, Switzerland, Turkey, Ukraine, United States, Wales.',
    intl_network: 'International Network',
  },
  fr: {
    lang: 'fr', langName: 'Français',
    title: 'Syndrome ReNU Italie APS',
    subtitle: 'Ensemble, nous faisons la différence',
    tagline: 'Une condition génétique nouvellement identifiée. Un effort de recherche coordonné mondialement.',
    hero_text: 'RNU4-2 émerge comme une cause majeure de troubles rares du neurodéveloppement – <strong>Renouvelant l\'espoir pour les familles</strong>',
    hero_desc: 'Le syndrome ReNU est un trouble splicéosomal avec un hotspot mutationnel défini. Actuellement <strong>~250 cas confirmés dans le monde</strong> (12-14 en Italie), mais le nombre de cas non diagnostiqués est estimé bien plus élevé : les variants pathogènes se concentrent en seulement <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 positions</a> du génome!',
    nav_home: 'Accueil', nav_about: 'À propos de ReNU', nav_research: 'Recherche',
    nav_therapies: 'Thérapies', nav_diagnosis: 'Diagnostic', nav_community: 'Communauté',
    nav_donations: 'Dons', nav_contact: 'Contact', nav_brochure: 'Brochures',
    nav_events: 'Événements', nav_projects: 'Projets', nav_members: 'Devenir Membre', nav_faq: 'FAQ & Droits',
    btn_diagnosis: 'VOULEZ-VOUS PLUS D\'INFORMATIONS? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Contactez-nous pour des informations sur le Syndrome ReNU',
    section_map_title: 'Inscrivez-vous ici',
    section_map_desc: 'La force est dans le nombre! Ajoutez un proche atteint de ReNU à la carte mondiale.',
    section_awareness_title: 'Sensibiliser',
    section_awareness_desc: 'Participez ou soutenez les événements ReNU Espoir!',
    section_research_title: 'Recherche',
    section_research_desc: 'Participez pour accélérer la recherche!',
    section_info_title: 'Plus d\'informations',
    section_info_desc: 'Découvrez comment ReNU se manifeste et comment le développement est affecté.',
    section_parents_title: 'Connexion des parents',
    section_parents_desc: 'Vous n\'êtes pas seul! Trouvez espoir et communauté avec des parents du monde entier.',
    section_donations_title: 'Dons',
    section_donations_desc: 'Promouvoir la recherche, construire la communauté. Chaque contribution compte!',
    about_title: 'Qu\'est-ce que le Syndrome ReNU?',
    about_gene: 'Le Syndrome ReNU est causé par des variants pathogènes du gène RNU4-2, un gène ARN non codant composant critique de la machinerie d\'épissage.',
    about_discovery: 'Découverte de RNU4-2',
    about_discovery_text: 'RNU4-2 a été identifié en octobre 2024 comme une des principales causes génétiques de troubles rares du neurodéveloppement.',
    about_features_title: 'Caractéristiques du Syndrome ReNU',
    about_brain: 'Anomalies cérébrales', about_brain_items: 'Volume réduit de la substance blanche, hypoplasie du corps calleux, ventriculomégalie',
    about_development: 'Déficience intellectuelle', about_development_items: 'Retards de développement, limitations du fonctionnement intellectuel',
    about_seizures: 'Épilepsie', about_seizures_items: 'Spasmes infantiles, crises focales et tonico-cloniques',
    about_vision: 'Problèmes visuels', about_vision_items: 'Hypoplasie du nerf optique, déficience visuelle corticale',
    about_face: 'Caractéristiques faciales', about_face_items: 'Visage myopathique, épicanthus, pont nasal large',
    about_muscle: 'Tonus musculaire', about_muscle_items: 'Hypotonie ou faiblesse musculaire',
    about_mobility: 'Mobilité', about_mobility_items: 'Retard de la marche ou incapacité à marcher',
    about_growth: 'Croissance', about_growth_items: 'Microcéphalie, petite taille, hypothyroïdie',
    about_feeding: 'Alimentation', about_feeding_items: 'Difficultés alimentaires, salivation excessive',
    about_communication: 'Communication', about_communication_items: 'Difficultés d\'acquisition du langage',
    about_bones: 'Problèmes osseux', about_bones_items: 'Faible densité osseuse, dysplasie de la hanche',
    about_happy: 'Beaucoup de personnes atteintes du Syndrome ReNU montrent un tempérament heureux et sont affectueuses.',
    about_diagnosis_note: 'En Italie, le séquençage du génome entier (WGS) est nécessaire pour diagnostiquer RNU4-2!',
    research_title: 'Recherche sur le Syndrome ReNU',
    research_intro: 'VOUS pouvez faire avancer la recherche!',
    research_crid: 'Avant de participer à une recherche, créez un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID de Recherche Clinique (CRID)</a>!',
    research_priorities_title: 'Qu\'est-ce qui est important pour la communauté RNU4-2?',
    therapies_title: 'Thérapies pour le Syndrome ReNU',
    therapies_intro: 'Nombreux services thérapeutiques pour les personnes atteintes du Syndrome ReNU',
    therapies_note: 'Ce site n\'approuve pas de thérapies spécifiques. Consultez toujours un médecin.',
    diagnosis_title: 'Où se faire diagnostiquer en Italie',
    diagnosis_intro: 'Pour des informations sur les centres diagnostiques en Italie, contactez-nous.',
    diagnosis_contact: 'Pour des informations sur les centres WGS en Italie:',
    community_title: 'Communauté – Connexion des familles',
    community_intro: 'Vous n\'êtes pas seul! Trouvez espoir et communauté. Familles RNU4-2 cartographiées dans plus de 38 pays.',
    donations_title: 'Soutenez-nous',
    donations_intro: 'Votre soutien nous permet de promouvoir la recherche et d\'aider les familles ReNU.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titulaire: Sindrome ReNU Italia APS',
    contact_title: 'Contactez-nous',
    contact_intro: 'Nous sommes disponibles pour toute information.',
    brochure_title: 'Télécharger nos brochures',
    brochure_intro: 'Téléchargez et partagez les brochures de Sindrome ReNU Italia APS',
    brochure_download: 'Télécharger PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Tous droits réservés.',
    footer_partnership: 'En partenariat avec ReNU Syndrome United (USA)',
    footer_tagline: 'Ensemble, nous faisons la différence',
    donate_now: 'Faire un don', join_registry: 'Rejoindre le registre',
    learn_more: 'En savoir plus', contact_us: 'Contactez-nous', read_more: 'Lire la suite',
    coe_title: 'Centre d\'Excellence ReNU (COE)',
    coe_desc: 'ReNU Syndrome United construit un réseau mondial de Centres d\'Excellence pour connecter les familles avec des équipes médicales multidisciplinaires.',
    world_title: 'ReNU dans le Monde',
    world_desc: 'Les familles RNU4-2 ont été cartographiées dans plus de 38 pays.',
    intl_network: 'Réseau International',
  },
  es: {
    lang: 'es', langName: 'Español',
    title: 'Síndrome ReNU Italia APS',
    subtitle: 'Juntos, hacemos la diferencia',
    tagline: 'Una condición genética recién identificada. Un esfuerzo de investigación coordinado a nivel mundial.',
    hero_text: 'RNU4-2 emerge como una causa principal de trastornos raros del neurodesarrollo – <strong>Renovando la Esperanza para las Familias</strong>',
    hero_desc: 'El Síndrome ReNU es un trastorno spliceosomal. Actualmente hay <strong>~250 casos confirmados en el mundo</strong> (12-14 en Italia), aunque el número real de casos no diagnosticados se estima mucho mayor: las variantes patogénicas se concentran en solo <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posiciones</a> del genoma!',
    nav_home: 'Inicio', nav_about: 'Sobre ReNU', nav_research: 'Investigación',
    nav_therapies: 'Terapias', nav_diagnosis: 'Diagnóstico', nav_community: 'Comunidad',
    nav_donations: 'Donaciones', nav_contact: 'Contacto', nav_brochure: 'Folletos',
    nav_events: 'Eventos', nav_projects: 'Proyectos', nav_members: 'Hazte Socio', nav_faq: 'FAQ & Derechos',
    btn_diagnosis: '¿QUIERES MÁS INFORMACIÓN? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Contáctanos para información sobre el Síndrome ReNU',
    section_map_title: 'Regístrate aquí',
    section_map_desc: '¡La fuerza está en los números! Añade a tu familiar al mapa mundial.',
    section_awareness_title: 'Aumentar la conciencia',
    section_awareness_desc: '¡Participa o apoya eventos ReNU Esperanza!',
    section_research_title: 'Investigación',
    section_research_desc: '¡Participa para acelerar la investigación!',
    section_info_title: 'Más información',
    section_info_desc: 'Aprende sobre cómo ocurre ReNU y sus características típicas.',
    section_parents_title: 'Conexión de padres',
    section_parents_desc: '¡No estás solo! Encuentra comunidad con padres de todo el mundo.',
    section_donations_title: 'Donaciones',
    section_donations_desc: '¡Promover la investigación y construir comunidad. Cada contribución importa!',
    about_title: '¿Qué es el Síndrome ReNU?',
    about_gene: 'El Síndrome ReNU es causado por variantes patogénicas en el gen RNU4-2, un gen de ARN no codificante.',
    about_discovery: 'Descubrimiento de RNU4-2',
    about_discovery_text: 'RNU4-2 fue identificado en octubre de 2024 como causa principal de trastornos raros del neurodesarrollo.',
    about_features_title: 'Características del Síndrome ReNU',
    about_brain: 'Anomalías cerebrales', about_brain_items: 'Volumen reducido de materia blanca, hipoplasia del cuerpo calloso',
    about_development: 'Discapacidad intelectual', about_development_items: 'Retrasos en el desarrollo',
    about_seizures: 'Epilepsia', about_seizures_items: 'Espasmos infantiles, convulsiones focales',
    about_vision: 'Problemas visuales', about_vision_items: 'Hipoplasia del nervio óptico, CVI',
    about_face: 'Características faciales', about_face_items: 'Cara miopática, epicanto, puente nasal ancho',
    about_muscle: 'Tono muscular', about_muscle_items: 'Hipotonía o debilidad muscular',
    about_mobility: 'Movilidad', about_mobility_items: 'Retraso en caminar',
    about_growth: 'Crecimiento', about_growth_items: 'Microcefalia, baja estatura',
    about_feeding: 'Alimentación', about_feeding_items: 'Dificultades de alimentación, babeo excesivo',
    about_communication: 'Comunicación', about_communication_items: 'Dificultad para adquirir lenguaje',
    about_bones: 'Problemas óseos', about_bones_items: 'Baja densidad ósea, displasia de cadera',
    about_happy: 'Muchas personas con Síndrome ReNU muestran un temperamento feliz y son cariñosas.',
    about_diagnosis_note: '¡En Italia, se necesita WGS para diagnosticar RNU4-2!',
    research_title: 'Investigación sobre el Síndrome ReNU',
    research_intro: '¡TÚ puedes hacer avanzar la investigación!',
    research_crid: 'Antes de participar, crea un <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">ID de Investigación Clínica (CRID)</a>!',
    research_priorities_title: '¿Qué es importante para la comunidad RNU4-2?',
    therapies_title: 'Terapias para el Síndrome ReNU',
    therapies_intro: 'Muchos servicios terapéuticos para personas con Síndrome ReNU',
    therapies_note: 'Este sitio no recomienda terapias específicas. Consulte siempre a un médico.',
    diagnosis_title: 'Dónde hacerse el diagnóstico en Italia',
    diagnosis_intro: 'Para información sobre centros diagnósticos en Italia, contáctenos.',
    diagnosis_contact: 'Para información sobre centros WGS en Italia:',
    community_title: 'Comunidad – Conexión de familias',
    community_intro: 'No estás solo. Familias RNU4-2 en más de 38 países del mundo.',
    donations_title: 'Apóyanos',
    donations_intro: 'Tu apoyo nos permite promover la investigación y ayudar a familias ReNU.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titular: Sindrome ReNU Italia APS',
    contact_title: 'Contáctenos',
    contact_intro: 'Estamos disponibles para cualquier información.',
    brochure_title: 'Descarga nuestros folletos',
    brochure_intro: 'Descarga y comparte los folletos de Sindrome ReNU Italia APS',
    brochure_download: 'Descargar PDF',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Todos los derechos reservados.',
    footer_partnership: 'En asociación con ReNU Syndrome United (USA)',
    footer_tagline: 'Juntos, hacemos la diferencia',
    donate_now: 'Donar', join_registry: 'Unirse al registro',
    learn_more: 'Más información', contact_us: 'Contáctenos', read_more: 'Leer más',
    coe_title: 'Centro de Excelencia ReNU (COE)',
    coe_desc: 'ReNU Syndrome United está construyendo una red global de Centros de Excelencia.',
    world_title: 'ReNU en el Mundo',
    world_desc: 'Familias RNU4-2 en más de 38 países.',
    intl_network: 'Red Internacional',
  },
  de: {
    lang: 'de', langName: 'Deutsch',
    title: 'ReNU-Syndrom Italien APS',
    subtitle: 'Gemeinsam machen wir den Unterschied',
    tagline: 'Eine neu identifizierte genetische Erkrankung. Eine global koordinierte Forschungsarbeit.',
    hero_text: 'RNU4-2 entwickelt sich zu einer führenden Ursache seltener neurologischer Entwicklungsstörungen – <strong>Neue Hoffnung für Familien</strong>',
    hero_desc: 'Das ReNU-Syndrom ist eine Spliceosom-Störung. Derzeit sind <strong>~250 Fälle weltweit bestätigt</strong> (12-14 in Italien), wobei die tatsächliche Zahl nicht diagnostizierter Fälle viel höher geschätzt wird: Pathogene Varianten konzentrieren sich auf nur <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 Positionen</a> des Genoms!',
    nav_home: 'Startseite', nav_about: 'Über ReNU', nav_research: 'Forschung',
    nav_therapies: 'Therapien', nav_diagnosis: 'Diagnose', nav_community: 'Gemeinschaft',
    nav_donations: 'Spenden', nav_contact: 'Kontakt', nav_brochure: 'Broschüren',
    nav_events: 'Veranstaltungen', nav_projects: 'Projekte', nav_members: 'Mitglied werden', nav_faq: 'FAQ & Rechte',
    btn_diagnosis: 'MÖCHTEN SIE MEHR INFORMATIONEN? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Kontaktieren Sie uns für Informationen zum ReNU-Syndrom',
    section_map_title: 'Hier registrieren',
    section_map_desc: 'Stärke in der Zahl! Fügen Sie Ihr ReNU-Familienmitglied zur Weltkarte hinzu.',
    section_awareness_title: 'Bewusstsein schaffen',
    section_awareness_desc: 'Nehmen Sie an ReNU-Hoffnungsveranstaltungen teil!',
    section_research_title: 'Forschung',
    section_research_desc: 'Nehmen Sie teil, um die Forschung zu beschleunigen!',
    section_info_title: 'Weitere Informationen',
    section_info_desc: 'Erfahren Sie, wie ReNU auftritt und wie die Entwicklung beeinflusst wird.',
    section_parents_title: 'Elternverbindung',
    section_parents_desc: 'Sie sind nicht allein! Finden Sie Gemeinschaft mit Familien weltweit.',
    section_donations_title: 'Spenden',
    section_donations_desc: 'Forschung fördern und Gemeinschaft aufbauen. Jeder Beitrag zählt!',
    about_title: 'Was ist das ReNU-Syndrom?',
    about_gene: 'Das ReNU-Syndrom wird durch pathogene Varianten im RNU4-2-Gen verursacht.',
    about_discovery: 'Entdeckung von RNU4-2',
    about_discovery_text: 'RNU4-2 wurde im Oktober 2024 als führende Ursache seltener neurologischer Entwicklungsstörungen identifiziert.',
    about_features_title: 'Merkmale des ReNU-Syndroms',
    about_brain: 'Hirnanomalien', about_brain_items: 'Reduziertes Marklagervolumen, Hypoplasie des Corpus callosum',
    about_development: 'Intellektuelle Behinderung', about_development_items: 'Entwicklungsverzögerungen',
    about_seizures: 'Epilepsie', about_seizures_items: 'Infantile Spasmen, fokale Anfälle',
    about_vision: 'Sehprobleme', about_vision_items: 'Hypoplasie des Sehnervs, kortikale Sehbeeinträchtigung',
    about_face: 'Gesichtsmerkmale', about_face_items: 'Myopathisches Gesicht, Epikanthus',
    about_muscle: 'Muskeltonus', about_muscle_items: 'Hypotonie oder Muskelschwäche',
    about_mobility: 'Mobilität', about_mobility_items: 'Verzögertes Gehen',
    about_growth: 'Wachstum', about_growth_items: 'Mikrozephalie, Kleinwuchs',
    about_feeding: 'Ernährung', about_feeding_items: 'Fütterungsschwierigkeiten, übermäßiges Speicheln',
    about_communication: 'Kommunikation', about_communication_items: 'Spracherwerbsschwierigkeiten',
    about_bones: 'Knochenprobleme', about_bones_items: 'Niedrige Knochendichte, Hüftdysplasie',
    about_happy: 'Viele Menschen mit ReNU-Syndrom zeigen ein fröhliches Temperament und sind liebevoll.',
    about_diagnosis_note: 'In Italien ist WGS erforderlich, um RNU4-2 zu diagnostizieren!',
    research_title: 'Forschung zum ReNU-Syndrom',
    research_intro: 'SIE können die Forschung voranbringen!',
    research_crid: 'Erstellen Sie vor der Teilnahme eine <a href="https://thecrid.org/" target="_blank" class="text-yellow-300 hover:underline font-semibold">Klinische Forschungs-ID (CRID)</a>!',
    research_priorities_title: 'Was ist der RNU4-2-Gemeinschaft wichtig?',
    therapies_title: 'Therapien für das ReNU-Syndrom',
    therapies_intro: 'Viele Therapieangebote für Menschen mit ReNU-Syndrom',
    therapies_note: 'Diese Website empfiehlt keine spezifischen Therapien. Konsultieren Sie immer einen Arzt.',
    diagnosis_title: 'Wo können Sie sich in Italien diagnostizieren lassen?',
    diagnosis_intro: 'Für Informationen über diagnostische Zentren in Italien kontaktieren Sie uns.',
    diagnosis_contact: 'Für Informationen über WGS-Zentren in Italien:',
    community_title: 'Gemeinschaft – Familienverbindung',
    community_intro: 'Sie sind nicht allein! RNU4-2-Familien in über 38 Ländern weltweit.',
    donations_title: 'Unterstützen Sie uns',
    donations_intro: 'Ihre Unterstützung ermöglicht uns die Forschungsförderung und Hilfe für ReNU-Familien.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Kontoinhaber: Sindrome ReNU Italia APS',
    contact_title: 'Kontaktieren Sie uns',
    contact_intro: 'Wir stehen für alle Informationen zur Verfügung.',
    brochure_title: 'Broschüren herunterladen',
    brochure_intro: 'Laden Sie die Informationsbroschüren von Sindrome ReNU Italia APS herunter',
    brochure_download: 'PDF herunterladen',
    footer_rights: '© 2026 Sindrome ReNU Italia APS. Alle Rechte vorbehalten.',
    footer_partnership: 'In Partnerschaft mit ReNU Syndrome United (USA)',
    footer_tagline: 'Gemeinsam machen wir den Unterschied',
    donate_now: 'Jetzt spenden', join_registry: 'Dem Register beitreten',
    learn_more: 'Mehr erfahren', contact_us: 'Kontaktieren Sie uns', read_more: 'Mehr lesen',
    coe_title: 'ReNU Exzellenzzentrum (COE)',
    coe_desc: 'ReNU Syndrome United baut ein globales Netzwerk von Exzellenzzentren auf.',
    world_title: 'ReNU weltweit',
    world_desc: 'RNU4-2-Familien in über 38 Ländern kartiert.',
    intl_network: 'Internationales Netzwerk',
  }
}

// ─── LAYOUT SHELL ─────────────────────────────────────────────────────────────
function getHtml(t: Record<string, string>, page: string = 'home', content: string): string {
  const langs = ['it', 'en', 'fr', 'es', 'de']
  const flags: Record<string, string> = { it: '🇮🇹', en: '🇬🇧', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪' }
  const langNames: Record<string, string> = { it: 'Italiano', en: 'English', fr: 'Français', es: 'Español', de: 'Deutsch' }
  // Dropdown bandierina compatto: mostra solo lingua attiva, espande su click
  const langSwitcher = `
    <div class="relative lang-dropdown" style="position:relative">
      <button onclick="this.parentElement.classList.toggle('open')"
              class="flex items-center gap-1 px-1.5 py-1.5 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors bg-white bg-opacity-15 border border-white border-opacity-30"
              aria-label="Cambia lingua" style="white-space:nowrap" title="${langNames[t.lang]}">
        <span class="text-lg leading-none">${flags[t.lang]}</span>
        <i class="fas fa-chevron-down text-xs opacity-70"></i>
      </button>
      <div class="lang-dropdown-menu absolute right-0 mt-1 py-1 rounded-xl shadow-2xl border border-white border-opacity-20 z-[9999]"
           style="background:linear-gradient(135deg,#082050,#1078C0);min-width:130px;display:none">
        ${langs.map(l => `
        <a href="/${l}/${page}" class="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-20 transition-colors ${t.lang===l?'bg-white bg-opacity-25':''}" style="text-decoration:none;color:white">
          <span class="text-base leading-none">${flags[l]}</span>
          <span class="text-xs font-semibold">${langNames[l]}</span>
          ${t.lang===l?'<i class="fas fa-check text-xs ml-auto text-sky-300"></i>':''}
        </a>`).join('')}
      </div>
    </div>
    <script>
      (function(){
        document.addEventListener('click', function(e){
          document.querySelectorAll('.lang-dropdown').forEach(function(d){
            if(!d.contains(e.target)) d.classList.remove('open');
          });
        });
        document.querySelectorAll('.lang-dropdown').forEach(function(d){
          d.addEventListener('open-change', function(){
            var menu = d.querySelector('.lang-dropdown-menu');
            if(menu) menu.style.display = d.classList.contains('open') ? 'block' : 'none';
          });
        });
        var observer = new MutationObserver(function(muts){
          muts.forEach(function(m){
            if(m.target.classList && m.attributeName === 'class'){
              var menu = m.target.querySelector('.lang-dropdown-menu');
              if(menu) menu.style.display = m.target.classList.contains('open') ? 'block' : 'none';
            }
          });
        });
        document.querySelectorAll('.lang-dropdown').forEach(function(d){
          observer.observe(d, {attributes:true});
        });
      })();
    </script>`

  const navItems = [
    { key: 'nav_home', page: 'home', icon: 'fa-home', disabled: false },
    { key: 'nav_about', page: 'about', icon: 'fa-dna', disabled: false },
    { key: 'nav_research', page: 'research', icon: 'fa-microscope', disabled: true, hidden: true },
    { key: 'nav_therapies', page: 'therapies', icon: 'fa-heartbeat', disabled: false },
    { key: 'nav_diagnosis', page: 'diagnosis', icon: 'fa-stethoscope', disabled: false },
    { key: 'nav_community', page: 'community', icon: 'fa-users', disabled: false },
    { key: 'nav_donations', page: 'donations', icon: 'fa-heart', disabled: false },
    { key: 'nav_events', page: 'events', icon: 'fa-calendar-alt', disabled: false },
    { key: 'nav_projects', page: 'projects', icon: 'fa-rocket', disabled: false },
    { key: 'nav_members', page: 'members', icon: 'fa-id-card', disabled: false },
    { key: 'nav_faq', page: 'faq', icon: 'fa-question-circle', disabled: false },
    { key: 'nav_brochure', page: 'brochure', icon: 'fa-file-pdf', disabled: false },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope', disabled: false },
  ]
  const navLinks = navItems.filter(item => !item.hidden).map(item => item.disabled ? `
    <span class="flex items-center gap-1 px-1.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-40 cursor-not-allowed" title="${t.lang==='it'?'Sezione in preparazione':'Section coming soon'}">
      <i class="fas ${item.icon} text-xs"></i>
      <span class="hidden lg:inline nav-label">${t[item.key]}</span>
    </span>` : `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1 px-1.5 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-xs font-semibold whitespace-nowrap ${page === item.page ? 'bg-white bg-opacity-25 shadow-inner ring-1 ring-sky-300' : ''}" title="${t[item.key]}">
      <i class="fas ${item.icon} text-xs opacity-80"></i>
      <span class="hidden lg:inline nav-label">${t[item.key]}</span>
    </a>`).join('')

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.tagline}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy:   #082050;
      --blue:   #1078C0;
      --sky:    #45B8EC;
      --pale:   #C8E8F8;
      --bg:     #EEF6FB;
      --white:  #FFFFFF;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg);
    }
    /* ── Logo sfondo intera pagina (come da specifiche PDF punto 5) ── */
    /* Il logo appare come watermark fisso sopra tutto il contenuto, visibile su ogni sezione */
    #page-logo-watermark {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 9998;
    }
    #page-logo-watermark img {
      width: 70vmin;
      height: 70vmin;
      object-fit: contain;
      opacity: 0.20;
      mix-blend-mode: multiply;
    }

    /* ── Hero gradient – brochure palette ── */
    .hero-gradient {
      background: linear-gradient(150deg, #082050 0%, #1078C0 55%, #45B8EC 100%);
      position: relative; overflow: hidden;
    }
    .hero-gradient::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 75% 40%, rgba(69,184,236,0.22) 0%, transparent 55%);
      pointer-events: none;
    }

    /* ── Cards ── */
    .card {
      background: white;
      border: 1px solid var(--pale);
      border-radius: 1rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(8,32,80,0.12); }
    .card-navy  { border-top: 4px solid #082050; }
    .card-blue  { border-top: 4px solid #1078C0; }
    .card-sky   { border-top: 4px solid #45B8EC; }
    .card-red   { border-top: 4px solid #E74C3C; }
    .card-green { border-top: 4px solid #16A085; }
    .card-purple{ border-top: 4px solid #7C3AED; }
    .card-amber { border-top: 4px solid #D97706; }

    /* ── Diagnosis pulse button ── */
    .btn-diagnosis {
      background: linear-gradient(135deg, #E74C3C, #C0392B);
      animation: pulse-red 2.2s infinite;
    }
    @keyframes pulse-red {
      0%, 100% { box-shadow: 0 0 0 0 rgba(231,76,60,0.6); }
      50%       { box-shadow: 0 0 0 14px rgba(231,76,60,0); }
    }

    /* ── Icon circles ── */
    .ic { width:3.5rem; height:3.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .ic-navy   { background:#C8DCF0; color:#082050; }
    .ic-blue   { background:#BFDFFA; color:#1078C0; }
    .ic-sky    { background:#C8F0FA; color:#0369A1; }
    .ic-red    { background:#FEE2E2; color:#DC2626; }
    .ic-green  { background:#D1FAE5; color:#059669; }
    .ic-purple { background:#EDE9FE; color:#7C3AED; }
    .ic-amber  { background:#FEF3C7; color:#D97706; }
    .ic-cyan   { background:#CFFAFE; color:#0E7490; }

    /* ── Mobile menu ── */
    .mobile-menu { display: none; }
    .mobile-menu.open { display: block; }

    html { scroll-behavior: smooth; }
    img  { max-width:100%; height:auto; }

    /* ── Responsive fixes ── */
    @media (max-width: 767px) {
      .hero-gradient { padding-top: 2rem; padding-bottom: 2rem; }
      h1 { font-size: 1.75rem !important; line-height: 2.2rem !important; }
      .stat-bar { font-size: 0.7rem; }
    }
    /* ── Nav label visible from lg (1024px) – icone pure su md ── */
    @media (min-width: 1024px) {
      .nav-label { display: inline !important; }
    }

    /* ── Section backgrounds ── */
    .section-light { background: linear-gradient(180deg, #EEF6FB 0%, #FFFFFF 100%); }
    .section-white { background: #FFFFFF; }
    .section-pale  { background: #F0F8FD; }

    /* ── Stats bar ── */
    .stat-bar { background: linear-gradient(135deg, #082050 0%, #1078C0 100%); }

    /* Image frame */
    .img-frame { border-radius: 1.25rem; overflow: hidden; box-shadow: 0 12px 40px rgba(8,32,80,0.18); }
  </style>
</head>
<body>

<!-- ── LOGO WATERMARK FISSO SU TUTTA LA PAGINA (PDF punto 5) ── -->
<div id="page-logo-watermark" aria-hidden="true">
  <img src="/images/logo_transparent.png" alt="">
</div>

<!-- ── TOP ANNOUNCEMENT BAR ── -->
<div class="stat-bar text-white text-center text-xs py-2 px-4 font-medium">
  <i class="fas fa-dna mr-2 text-sky-300"></i>
  ${t.lang==='it' ? '💙 Prima Associazione ReNU in Italia — <a href="/it/about" class="underline hover:text-sky-200">Scopri la nostra missione</a>' : 
    t.lang==='en' ? '💙 First ReNU Association in Italy — <a href="/en/about" class="underline hover:text-sky-200">Discover our mission</a>' :
    t.lang==='fr' ? '💙 Première Association ReNU en Italie — <a href="/fr/about" class="underline hover:text-sky-200">Découvrez notre mission</a>' :
    t.lang==='es' ? '💙 Primera Asociación ReNU en Italia — <a href="/es/about" class="underline hover:text-sky-200">Descubre nuestra misión</a>' :
    '💙 Erste ReNU-Vereinigung in Italien — <a href="/de/about" class="underline hover:text-sky-200">Entdecken Sie unsere Mission</a>'}
</div>

<!-- ── NAVBAR ── -->
<header class="text-white shadow-xl sticky top-0 z-50" style="background: linear-gradient(90deg, #082050 0%, #1078C0 60%, #45B8EC 100%);">
  <div class="max-w-screen-2xl mx-auto px-3">
    <div class="flex items-center justify-between" style="min-height:4.5rem">

      <!-- Logo + nome -->
      <a href="/${t.lang}/home" class="flex items-center gap-2 flex-shrink-0">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-14 w-auto drop-shadow-lg">
        <span class="hidden lg:block text-xs font-bold leading-tight text-sky-100" style="max-width:110px">Sindrome<br>ReNU Italia APS</span>
      </a>

      <!-- Desktop nav: visibile da md, testo da lg, solo icone su md -->
      <nav class="hidden md:flex items-center gap-0.5 flex-nowrap justify-center flex-1 px-2 overflow-x-auto">
        ${navLinks}
      </nav>

      <!-- Lente ricerca + Lang + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">

        <!-- Lente di ricerca navbar -->
        <div class="relative nav-search-wrap">
          <button onclick="document.getElementById('navSearchBox').classList.toggle('hidden')" 
                  class="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors" 
                  aria-label="${t.lang==='it'?'Cerca nel sito':'Search site'}" title="${t.lang==='it'?'Cerca nel sito':'Search site'}">
            <i class="fas fa-search text-sm"></i>
          </button>
          <div id="navSearchBox" class="hidden absolute right-0 top-full mt-2 z-[9999]" style="width:280px">
            <div class="rounded-xl shadow-2xl border border-white border-opacity-20 overflow-hidden" style="background:linear-gradient(135deg,#082050,#1078C0)">
              <div class="flex items-center gap-2 px-3 py-2">
                <i class="fas fa-search text-sky-300 text-sm"></i>
                <input id="navSearchInput" type="text" placeholder="${t.lang==='it'?'Cerca nel sito...':'Search site...'}"
                       class="flex-1 bg-transparent text-white placeholder-sky-300 text-sm outline-none"
                       oninput="navDoSearch(this.value,'${t.lang}')">
                <button onclick="document.getElementById('navSearchBox').classList.add('hidden')" class="text-sky-300 hover:text-white">
                  <i class="fas fa-times text-xs"></i>
                </button>
              </div>
              <div id="navSearchResults" class="max-h-64 overflow-y-auto"></div>
            </div>
          </div>
        </div>

        <!-- Dropdown lingua -->
        <div class="flex items-center gap-1">${langSwitcher}</div>

        <button id="mobileBtn" class="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors" aria-label="Menu">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileMenu" class="mobile-menu pb-3 md:hidden">
      <nav class="flex flex-col gap-1">
        ${navItems.filter(i => !i.hidden).map(i => i.disabled ? `
        <span class="flex items-center gap-2 px-3 py-2.5 rounded-lg opacity-40 cursor-not-allowed">
          <i class="fas ${i.icon} w-5 text-center text-sm"></i>
          <span class="font-medium">${t[i.key]}</span>
          <span class="text-xs ml-1">(${t.lang==='it'?'in preparazione':'coming soon'})</span>
        </span>` : `
        <a href="/${t.lang}/${i.page}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors ${page === i.page ? 'bg-white bg-opacity-25' : ''}">
          <i class="fas ${i.icon} w-5 text-center text-sm opacity-80"></i>
          <span class="font-medium">${t[i.key]}</span>
        </a>`).join('')}
      </nav>
    </div>
  </div>
</header>

<!-- ── CONTENT ── -->
<main>${content}</main>

<!-- ── FOOTER ── -->
<footer style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);" class="text-white mt-16">
  <div class="max-w-screen-xl mx-auto px-4 py-14">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand -->
      <div class="md:col-span-1">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-16 w-auto mb-4 drop-shadow">
        <p class="text-sky-200 text-sm italic mb-2">"${t.footer_tagline}"</p>
        <p class="text-sky-300 text-sm">${t.footer_partnership}</p>
        <p class="text-sky-300 text-sm mt-1">www.sindromerenu.it</p>
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
          <a href="https://www.instagram.com/sindrome_renu_italia/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
      <!-- Contacts -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Email & Tel.</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[['info','Info Generali'],['donazioni','Donazioni'],['segreteria','Segreteria'],['presidenza','Presidenza']].map(([e,l]) => `
          <li><a href="mailto:${e}@sindromerenu.it" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-envelope text-xs"></i>${e}@sindromerenu.it</a></li>`).join('')}
          <li class="pt-1"><a href="tel:+393357301206" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-phone text-xs"></i>+39 335 730 1206</a></li>
        </ul>
      </div>
      <!-- Links -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">Link Utili</h3>
        <ul class="space-y-2 text-sm text-sky-300">
          ${[
            ['https://www.renusyndrome.org','ReNU Syndrome United (USA)'],
            ['https://thecrid.org/','Clinical Research ID (CRID)'],
            ['https://rare-x.org/rnu4-2/','Rare-X Registry'],
            ['https://citizen.health/renu','Citizen Health'],
            ['https://www.syndrome-renu.fr/','Assoc. Française ReNU'],
            ['https://www.sindromerenu.es/','Asociación ReNU España'],
          ].map(([href,lbl]) => `
          <li><a href="${href}" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><i class="fas fa-external-link-alt text-xs"></i>${lbl}</a></li>`).join('')}
        </ul>
      </div>
      <!-- Brochure & Pages -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-sky-100">${t.nav_brochure}</h3>
        <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors mb-4 block w-fit">
          <i class="fas fa-file-pdf"></i>${t.brochure_download}
        </a>
        <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors block w-fit">
          <i class="fas fa-th-large"></i>${t.nav_brochure}
        </a>
      </div>
    </div>
    <div class="border-t border-sky-700 mt-10 pt-6 text-center text-sm text-sky-400">
      ${t.footer_rights} &nbsp;|&nbsp; CF/P.IVA: [in registrazione RUNTS]
      <br class="md:hidden">
      <span class="hidden md:inline">&nbsp;|&nbsp;</span>
      <a href="/${t.lang}/privacy" class="hover:text-white underline">${t.lang==='it'?'Privacy Policy':'Privacy Policy'}</a>
      &nbsp;|&nbsp;
      <a href="mailto:info@sindromerenu.it" class="hover:text-white underline">${t.lang==='it'?'Contatta il DPO':'Contact DPO'}</a>
      &nbsp;|&nbsp;
      <span>${t.lang==='it'?'Sito conforme GDPR (Reg. UE 2016/679)':'GDPR Compliant (EU Reg. 2016/679)'}</span>
    </div>
  </div>
</footer>

<!-- ── COOKIE BANNER GDPR ── -->
<div id="cookieBanner" style="display:none;position:fixed;bottom:0;left:0;right:0;z-index:99999;background:linear-gradient(135deg,#082050,#1078C0);color:white;padding:1rem 1.5rem;box-shadow:0 -4px 20px rgba(0,0,0,0.3)">
  <div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:space-between">
    <div style="flex:1;min-width:200px;font-size:0.85rem">
      <i class="fas fa-cookie-bite" style="color:#45B8EC;margin-right:0.5rem"></i>
      <strong>${t.lang==='it'?'Informativa Cookie':'Cookie Notice'}</strong>
      <span style="color:#C8E8F8;margin-left:0.5rem">
        ${t.lang==='it'?
          'Utilizziamo solo cookie tecnici necessari. Nessuna profilazione o tracciamento pubblicitario. <a href="/'+t.lang+'/privacy" style="color:#45B8EC;text-decoration:underline">Leggi la Privacy Policy</a>':
          'We only use technical cookies. No profiling or advertising tracking. <a href="/'+t.lang+'/privacy" style="color:#45B8EC;text-decoration:underline">Read Privacy Policy</a>'}
      </span>
    </div>
    <div style="display:flex;gap:0.75rem;flex-shrink:0">
      <button onclick="acceptCookies()" style="background:#45B8EC;color:#082050;border:none;padding:0.5rem 1.25rem;border-radius:999px;font-weight:700;cursor:pointer;font-size:0.85rem">
        ${t.lang==='it'?'Accetto':'Accept'}
      </button>
      <a href="/${t.lang}/privacy" style="color:#C8E8F8;font-size:0.75rem;align-self:center;text-decoration:underline">
        ${t.lang==='it'?'Maggiori info':'More info'}
      </a>
    </div>
  </div>
</div>

<script>
  document.getElementById('mobileBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('open')
  })

  // Chiudi navSearchBox cliccando fuori
  document.addEventListener('click', function(e) {
    var box = document.getElementById('navSearchBox');
    var wrap = document.querySelector('.nav-search-wrap');
    if (box && wrap && !wrap.contains(e.target)) box.classList.add('hidden');
  });

  // Ricerca navbar globale
  const _navIndex = [
    { title:'${t.lang==='it'?'Home':'Home'}', url:'/${t.lang}/home', keywords:'home benvenuto renu sindrome associazione' },
    { title:'${t.lang==='it'?'Cos\'è ReNU':'What is ReNU'}', url:'/${t.lang}/about', keywords:'about renu sindrome gene rnu4-2 diagnosi sintomi' },
    { title:'${t.lang==='it'?'Terapie':'Therapies'}', url:'/${t.lang}/therapies', keywords:'terapie fisioterapia logopedia feuerstein acquaticità nuoto musicoterapia aba' },
    { title:'${t.lang==='it'?'Diagnosi':'Diagnosis'}', url:'/${t.lang}/diagnosis', keywords:'diagnosi wgs wes sequenziamento genetico esoma genoma' },
    { title:'${t.lang==='it'?'Community':'Community'}', url:'/${t.lang}/community', keywords:'community famiglia genitori rete mappa instagram facebook' },
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni 5x1000 buonacausa compleanno solidale matilde frontis' },
    { title:'${t.lang==='it'?'Contatti':'Contact'}', url:'/${t.lang}/contact', keywords:'contatti email telefono whatsapp info presidenza segreteria' },
    { title:'${t.lang==='it'?'Brochure':'Brochures'}', url:'/${t.lang}/brochure', keywords:'brochure pdf scarica download materiali' },
    { title:'${t.lang==='it'?'Diventa Socio':'Become a Member'}', url:'/${t.lang}/members', keywords:'socio iscrizione quota associazione membro' },
    { title:'${t.lang==='it'?'Incontri ed Eventi':'Events'}', url:'/${t.lang}/events', keywords:'eventi incontri calendario manifestazioni' },
    { title:'${t.lang==='it'?'Progetti':'Projects'}', url:'/${t.lang}/projects', keywords:'progetti iniziative campagne awareness consapevolezza' },
    { title:'${t.lang==='it'?'FAQ & Diritti':'FAQ & Rights'}', url:'/${t.lang}/faq', keywords:'faq diritti tutele legge 104 pass auto disabilità card bonus scuola burocrazia inps' },
  ];
  function navDoSearch(q, lang) {
    var res = document.getElementById('navSearchResults');
    if (!q || q.length < 2) { res.innerHTML = ''; return; }
    var lq = q.toLowerCase();
    var hits = _navIndex.filter(function(s){ return s.title.toLowerCase().includes(lq) || s.keywords.toLowerCase().includes(lq); });
    if (hits.length === 0) {
      res.innerHTML = '<div class="px-4 py-3 text-sky-200 text-xs">' + (lang==='it'?'Nessun risultato.':'No results.') + '</div>';
    } else {
      res.innerHTML = hits.map(function(h){
        return '<a href="'+h.url+'" class="flex items-center gap-2 px-4 py-2.5 hover:bg-white hover:bg-opacity-20 transition-colors border-t border-white border-opacity-10" style="color:white;text-decoration:none">'
          + '<i class="fas fa-arrow-right text-sky-300 text-xs"></i>'
          + '<span class="text-sm font-semibold">'+h.title+'</span>'
          + '</a>';
      }).join('');
    }
  }
</script>
</body>
</html>`
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function homePage(t: Record<string, string>): string {
  const cards = [
    { href: 'https://form.jotform.com/250154538972159', ext: true,   icon: 'fa-map-marker-alt', ic: 'ic-blue',   title: t.section_map_title,       desc: t.section_map_desc,       accent: 'card-blue',   img: '/images/renu_map.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-bullhorn',       ic: 'ic-purple', title: t.section_awareness_title,  desc: t.section_awareness_desc,  accent: 'card-purple', img: '/images/renu_awareness.jpg' },
    { href: `/${t.lang}/research`,                                    icon: 'fa-microscope',     ic: 'ic-sky',    title: t.section_research_title,   desc: t.section_research_desc,   accent: 'card-sky',    img: '/images/renu_research.jpg' },
    { href: `/${t.lang}/about`,                                       icon: 'fa-info-circle',    ic: 'ic-navy',   title: t.section_info_title,       desc: t.section_info_desc,       accent: 'card-navy',   img: '/images/renu_info.jpg' },
    { href: `/${t.lang}/community`,                                   icon: 'fa-users',          ic: 'ic-green',  title: t.section_parents_title,    desc: t.section_parents_desc,    accent: 'card-green',  img: '/images/renu_parents.jpg' },
    { href: `/${t.lang}/donations`,                                   icon: 'fa-heart',          ic: 'ic-red',    title: t.section_donations_title,  desc: t.section_donations_desc,  accent: 'card-red',    img: '/images/renu_donations.jpg' },
  ]
  return `
  <!-- HERO -->
  <section class="hero-gradient text-white py-20 px-4 relative">
    <div class="max-w-6xl mx-auto relative">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 text-sky-100">
            <i class="fas fa-dna text-sky-300"></i> ${t.tagline}
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">${t.hero_text}</h1>
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed max-w-2xl">${t.hero_desc}</p>
          <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start flex-wrap">
            <a href="/${t.lang}/contact" class="btn-diagnosis inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
              <i class="fas fa-info-circle"></i>${t.btn_diagnosis}
            </a>
            <a href="/${t.lang}/members" class="inline-flex items-center gap-2 font-bold px-6 py-4 rounded-full text-base transition-colors shadow-lg" style="background:#F59E0B; color:#082050">
              <i class="fas fa-id-card"></i>${t.lang==='it'?'Diventa Socio':t.lang==='en'?'Become a Member':t.lang==='fr'?'Devenir Membre':t.lang==='es'?'Hazte Socio':'Mitglied werden'}
            </a>
            <a href="/${t.lang}/about" class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-dna"></i>${t.learn_more}
            </a>
          </div>
          <p class="text-sky-200 text-sm mt-3">${t.btn_diagnosis_sub}</p>
        </div>
        <div class="flex-shrink-0 hidden md:block">
          <div class="img-frame w-80 xl:w-96">
            <img src="/images/renu_hero.jpg" alt="ReNU Syndrome" class="w-full h-56 object-cover">
          </div>
          <div class="mt-4 img-frame w-80 xl:w-96">
            <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="w-full h-28 object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <section class="stat-bar text-white py-6 px-4">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      <div><div class="text-3xl font-extrabold text-sky-300">~250</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'casi accertati nel mondo':t.lang==='en'?'confirmed cases worldwide':t.lang==='fr'?'cas confirmés dans le monde':t.lang==='es'?'casos confirmados en el mundo':'bestätigte Fälle weltweit'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">12-14</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'casi in Italia':t.lang==='en'?'cases in Italy':t.lang==='fr'?'cas en Italie':t.lang==='es'?'casos en Italia':'Fälle in Italien'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">13</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'posizioni nel DNA mutate':t.lang==='en'?'DNA positions mutated':t.lang==='fr'?'positions ADN mutées':t.lang==='es'?'posiciones ADN mutadas':'DNA-Positionen mutiert'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">38+</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'paesi con famiglie mappate':t.lang==='en'?'countries with mapped families':t.lang==='fr'?'pays avec familles':t.lang==='es'?'países con familias':'Länder mit Familien'}</div></div>
      <div><div class="text-3xl font-extrabold text-sky-300">2024</div><div class="text-sky-200 text-sm mt-1">${t.lang==='it'?'anno della scoperta':t.lang==='en'?'year of discovery':t.lang==='fr'?'année de la découverte':t.lang==='es'?'año del descubrimiento':'Jahr der Entdeckung'}</div></div>
    </div>
  </section>

  <!-- CARDS GRID -->
  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-extrabold text-center mb-10" style="color:#082050">
        ${t.lang==='it'?'Approfondimenti':t.lang==='en'?'Explore':t.lang==='fr'?'Approfondissements':t.lang==='es'?'Profundización':'Vertiefungen'}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards.map(c => `
        <a href="${c.href}" ${(c as any).ext ? 'target="_blank"' : ''} class="card ${c.accent} overflow-hidden block group">
          <div class="h-36 overflow-hidden bg-sky-50">
            <img src="${c.img}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                 onerror="this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full\'><i class=\'fas ${c.icon} text-4xl text-sky-300\'></i></div>'">
          </div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-2">
              <div class="ic ${c.ic}"><i class="fas ${c.icon} text-lg"></i></div>
              <h3 class="font-bold text-base text-gray-800 group-hover:text-blue-700 transition-colors" style="color:#082050">${c.title}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">${c.desc}</p>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION with brochure images -->
  <section class="py-16 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style="background:#C8E8F8; color:#082050">
            <i class="fas fa-dna"></i> Sindrome ReNU Italia APS
          </div>
          <h2 class="text-3xl font-extrabold mb-4 leading-tight" style="color:#082050">
            ${t.lang==='it'?'"Insieme, facciamo la differenza"':t.lang==='en'?'"Together, we make a difference"':t.lang==='fr'?'"Ensemble, nous faisons la différence"':t.lang==='es'?'"Juntos, hacemos la diferencia"':'"Gemeinsam machen wir den Unterschied"'}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-5">
            ${t.lang==='it'?'La nostra associazione è finalmente realtà e può contare sul sostegno di chi, come voi, vuole fare la differenza. Da oggi potete contribuire con un gesto concreto per aiutare i bambini e le famiglie colpite dalla Sindrome ReNU in Italia.':
              t.lang==='en'?'Our association is finally a reality and can count on the support of those who, like you, want to make a difference. You can now contribute with a concrete gesture to help children and families affected by ReNU Syndrome in Italy.':
              t.lang==='fr'?'Notre association est enfin réalité. Vous pouvez maintenant contribuer avec un geste concret pour aider les enfants et les familles touchées par le Syndrome ReNU en Italie.':
              t.lang==='es'?'Nuestra asociación es finalmente una realidad. Ahora puedes contribuir con un gesto concreto para ayudar a los niños y familias afectados por el Síndrome ReNU en Italia.':
              'Unser Verein ist endlich Wirklichkeit. Sie können jetzt mit einer konkreten Geste helfen, Kinder und Familien zu unterstützen, die vom ReNU-Syndrom betroffen sind.'}
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="/${t.lang}/about" class="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full transition-colors" style="background:#1078C0">
              <i class="fas fa-dna"></i>${t.learn_more}
            </a>
            <a href="/${t.lang}/donations" class="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full transition-colors bg-red-500 hover:bg-red-600">
              <i class="fas fa-heart"></i>${t.donate_now}
            </a>
            <a href="/${t.lang}/brochure" class="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full transition-colors" style="background:#C8E8F8; color:#082050">
              <i class="fas fa-file-pdf"></i>${t.nav_brochure}
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="img-frame"><img src="/images/famiglie.png" alt="Famiglie ReNU" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/bambini.png" alt="Bambini ReNU" class="w-full h-48 object-cover"></div>
          <div class="img-frame"><img src="/images/mani.png" alt="Mani Unite" class="w-full h-36 object-cover"></div>
          <div class="img-frame"><img src="/images/festa.png" alt="Insieme" class="w-full h-36 object-cover"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- AWARENESS SECTION -->
  <section class="py-16 px-4" style="background: linear-gradient(180deg, #F0F8FD 0%, #E8F4FC 100%)">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background:#082050; color:white">
          <i class="fas fa-ribbon"></i>
          ${t.lang==='it'?'Consapevolezza & Iniziative':t.lang==='en'?'Awareness & Initiatives':t.lang==='fr'?'Sensibilisation & Initiatives':t.lang==='es'?'Conciencia & Iniciativas':'Bewusstsein & Initiativen'}
        </div>
        <h2 class="text-3xl font-extrabold" style="color:#082050">${t.section_awareness_title}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Awareness card -->
        <div class="card card-sky overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_awareness.jpg" alt="ReNU Awareness" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Iniziative di Sensibilizzazione':t.lang==='en'?'Awareness Initiatives':t.lang==='fr'?'Initiatives de sensibilisation':t.lang==='es'?'Iniciativas de Sensibilización':'Bewusstseinsinitiativen'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Unisciti alle iniziative globali per diffondere la consapevolezza sulla Sindrome ReNU e mostrare supporto alle famiglie.':t.lang==='en'?'Join global initiatives to spread awareness about ReNU Syndrome and show support for families.':'Rejoignez les initiatives mondiales pour sensibiliser au syndrome ReNU.'}
            </p>
            <a href="https://www.renusyndrome.org/awareness-initiatives" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#45B8EC">
              <i class="fas fa-external-link-alt"></i>${t.learn_more}
            </a>
          </div>
        </div>
        <!-- Gallery card -->
        <div class="card card-blue overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_gallery.jpg" alt="ReNU Gallery" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Galleria Internazionale':t.lang==='en'?'International Gallery':t.lang==='fr'?'Galerie Internationale':t.lang==='es'?'Galería Internacional':'Internationale Galerie'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Scopri le storie straordinarie dei bambini e delle famiglie che vivono con la Sindrome ReNU in tutto il mondo.':t.lang==='en'?'Discover the extraordinary stories of children and families living with ReNU Syndrome around the world.':'Découvrez les histoires de familles vivant avec le syndrome ReNU.'}
            </p>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.lang==='it'?'Visita Galleria':t.lang==='en'?'Visit Gallery':'Galerie'}
            </a>
          </div>
        </div>
        <!-- Map card -->
        <div class="card card-navy overflow-hidden">
          <div class="overflow-hidden h-52">
            <img src="/images/renu_map.jpg" alt="Mappa ReNU" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Mappa Mondiale RNU4-2':t.lang==='en'?'RNU4-2 World Map':t.lang==='fr'?'Carte Mondiale RNU4-2':t.lang==='es'?'Mapa Mundial RNU4-2':'RNU4-2 Weltkarte'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Famiglie RNU4-2 mappate in 38+ paesi. Aggiungiti alla mappa e aiuta ad aumentare la forza dei numeri nella ricerca.':t.lang==='en'?'RNU4-2 families mapped in 38+ countries. Add yourself to the map and help strengthen research.':'Familles RNU4-2 cartographiées dans 38+ pays. Ajoutez-vous à la carte!'}
            </p>
            <a href="https://www.renusyndrome.org/map" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold" style="background:#082050">
              <i class="fas fa-map-marked-alt"></i>${t.lang==='it'?'Vedi Mappa':t.lang==='en'?'See Map':'Carte'}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STORIE DI FAMIGLIE SLIDER -->
  <section class="py-16 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold" style="color:#082050">
          ${t.lang==='it'?'Storie di Famiglie con ReNU':t.lang==='en'?'Stories from ReNU Families':t.lang==='fr'?'Histoires de familles ReNU':t.lang==='es'?'Historias de Familias ReNU':'Geschichten von ReNU-Familien'}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.lang==='it'?'Storie reali da tutto il mondo, dalla community di ReNU Syndrome United':t.lang==='en'?'Real stories from around the world, from the ReNU Syndrome United community':t.lang==='fr'?'Histoires réelles du monde entier':'Historias reales de todo el mundo'}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Story cards - from renusyndrome.org/stories -->
        ${[
          { name: 'James', country: '🇬🇧', url: 'https://www.renusyndrome.org/james-2', desc: t.lang==='it'?'Una storia di forza e gioia dalla Gran Bretagna.':t.lang==='en'?'A story of strength and joy from Great Britain.':'Une histoire de force et joie de Grande-Bretagne.' },
          { name: 'Ashley', country: '🇺🇸', url: 'https://www.renusyndrome.org/ashley', desc: t.lang==='it'?'Ashley, 8 anni, ama l\'acqua, la musica e i momenti di gioia.':t.lang==='en'?'Ashley, age 8, loves water, music, and joyful moments.':'Ashley, 8 ans, adore l\'eau et la musique.' },
          { name: 'Eliot', country: '🇫🇷', url: 'https://www.renusyndrome.org/eliot', desc: t.lang==='it'?'La famiglia di Eliot dalla Francia, unita nella speranza.':t.lang==='en'?'Eliot\'s family from France, united in hope.':'La famille d\'Eliot de France.' },
          { name: 'Isla', country: '🇦🇺', url: 'https://www.renusyndrome.org/isla', desc: t.lang==='it'?'Isla dall\'Australia, la gioia di ogni giorno.':t.lang==='en'?'Isla from Australia, the joy of every day.':'Isla d\'Australie, la joie quotidienne.' },
          { name: 'Noah', country: '🇨🇦', url: 'https://www.renusyndrome.org/noah', desc: t.lang==='it'?'Noah dal Canada, una storia che ispira.':t.lang==='en'?'Noah from Canada, an inspiring story.':'Noah du Canada, une histoire inspirante.' },
          { name: 'Antonin', country: '🇫🇷', url: 'https://www.renusyndrome.org/antonin', desc: t.lang==='it'?'Antonin dalla Francia, la forza di una famiglia unita.':t.lang==='en'?'Antonin from France, the strength of a united family.':'Antonin de France, la force d\'une famille.' },
        ].map(s => `
        <a href="${s.url}" target="_blank" class="card card-sky overflow-hidden group block">
          <div class="h-40 overflow-hidden bg-sky-50 flex items-center justify-center" style="background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">
            <div class="text-center">
              <div class="text-5xl mb-2">${s.country}</div>
              <div class="text-2xl font-extrabold" style="color:#082050">${s.name}</div>
            </div>
          </div>
          <div class="p-5">
            <p class="text-gray-600 text-sm mb-3">${s.desc}</p>
            <span class="inline-flex items-center gap-1 text-xs font-semibold" style="color:#1078C0">
              ${t.read_more} <i class="fas fa-arrow-right text-xs"></i>
            </span>
          </div>
        </a>`).join('')}
      </div>
      <div class="text-center mt-8">
        <a href="https://www.renusyndrome.org/stories" target="_blank"
           class="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-colors" style="background:#1078C0">
          <i class="fas fa-heart"></i>
          ${t.lang==='it'?'Tutte le Storie di Famiglie ReNU':t.lang==='en'?'All ReNU Family Stories':t.lang==='fr'?'Toutes les histoires':'Todas las Historias'}
        </a>
      </div>
    </div>
  </section>

  <!-- MOVE 4 ReNU BANNER -->
  <section class="py-5 px-4" style="background:#082050">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6">
      <div class="flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
        <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="h-24 w-auto object-cover">
      </div>
      <div class="flex-1 text-white text-center sm:text-left">
        <h3 class="text-xl font-extrabold mb-1">Move 4 ReNU</h3>
        <p class="text-sky-200 text-sm">${t.lang==='it'?'Muoviti per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU!':t.lang==='en'?'Move to raise funds and spread awareness about ReNU Syndrome!':'Bewegt euch, um Spenden und Bewusstsein zu wecken!'}</p>
      </div>
      <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank" 
         class="flex-shrink-0 inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-white font-bold px-6 py-3 rounded-full transition-colors">
        <i class="fas fa-running"></i>Move 4 ReNU
      </a>
    </div>
  </section>



  <!-- RETE INTERNAZIONALE ReNU -->
  <section class="py-14 px-4 section-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-extrabold" style="color:#082050">
          ${t.lang==='it'?'La Rete Internazionale ReNU':t.lang==='en'?'The International ReNU Network':t.lang==='fr'?'Le Réseau International ReNU':t.lang==='es'?'La Red Internacional ReNU':'Das Internationale ReNU-Netzwerk'}
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          ${t.lang==='it'?'Associazioni nazionali partner in tutto il mondo':t.lang==='en'?'National partner associations worldwide':'Associations nationales partenaires dans le monde entier'}
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        ${[
          { flag: '🇺🇸', name: 'USA (HQ)', url: 'https://www.renusyndrome.org', color: '#082050' },
          { flag: '🇮🇹', name: 'Italia', url: 'https://www.sindromerenu.it', color: '#1078C0' },
          { flag: '🇫🇷', name: 'France', url: 'https://www.syndrome-renu.fr/', color: '#002395' },
          { flag: '🇪🇸', name: 'España', url: 'https://www.sindromerenu.es/', color: '#c60b1e' },
          { flag: '🇦🇺', name: 'Australia', url: 'https://www.facebook.com/groups/1671427560388792', color: '#00008B' },
          { flag: '🇬🇧', name: 'UK', url: 'https://www.facebook.com/groups/1603406977204374', color: '#012169' },
        ].map(n => `
        <a href="${n.url}" target="_blank" class="card p-4 text-center hover:shadow-lg group">
          <div class="text-4xl mb-2">${n.flag}</div>
          <div class="font-bold text-sm" style="color:#082050">${n.name}</div>
          <div class="mt-2">
            <span class="inline-flex items-center gap-1 text-xs" style="color:#1078C0">
              <i class="fas fa-external-link-alt"></i>${t.learn_more}
            </span>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- BROCHURE QUICK DOWNLOAD -->
  <section class="py-8 px-4" style="background:#EEF6FB; border-top: 3px solid #45B8EC;">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <i class="fas fa-file-pdf text-4xl" style="color:#1078C0"></i>
        <div>
          <div class="font-bold text-lg" style="color:#082050">${t.brochure_title}</div>
          <div class="text-sm text-gray-500">${t.brochure_intro}</div>
        </div>
      </div>
      <a href="/${t.lang}/brochure" class="flex-shrink-0 inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full shadow transition-colors text-white" style="background:#1078C0">
        <i class="fas fa-download"></i>${t.brochure_download}
      </a>
    </div>
  </section>
  `
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function aboutPage(t: Record<string, string>): string {
  const features = [
    { icon: 'fa-brain',       ic: 'ic-purple', title: t.about_brain,         items: t.about_brain_items },
    { icon: 'fa-child',       ic: 'ic-blue',   title: t.about_development,   items: t.about_development_items },
    { icon: 'fa-bolt',        ic: 'ic-amber',  title: t.about_seizures,      items: t.about_seizures_items },
    { icon: 'fa-eye',         ic: 'ic-sky',    title: t.about_vision,        items: t.about_vision_items },
    { icon: 'fa-smile',       ic: 'ic-cyan',   title: t.about_face,          items: t.about_face_items },
    { icon: 'fa-dumbbell',    ic: 'ic-green',  title: t.about_muscle,        items: t.about_muscle_items },
    { icon: 'fa-walking',     ic: 'ic-blue',   title: t.about_mobility,      items: t.about_mobility_items },
    { icon: 'fa-ruler-vertical', ic: 'ic-navy', title: t.about_growth,       items: t.about_growth_items },
    { icon: 'fa-utensils',    ic: 'ic-red',    title: t.about_feeding,       items: t.about_feeding_items },
    { icon: 'fa-comments',    ic: 'ic-sky',    title: t.about_communication, items: t.about_communication_items },
    { icon: 'fa-bone',        ic: 'ic-amber',  title: t.about_bones,         items: t.about_bones_items },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-dna mr-3 text-sky-300"></i>${t.about_title}</h1>
        <p class="text-sky-100 text-lg">${t.tagline}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-64">
          <img src="/images/nastro.png" alt="Nastro ReNU" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">
      
      <!-- Gene info card -->
      <div class="card card-blue p-8 mb-8">
        <p class="text-gray-700 leading-relaxed mb-5 text-lg">${t.about_gene}</p>
        <div class="rounded-xl p-5" style="background:#EEF6FB; border-left: 4px solid #1078C0;">
          <h3 class="font-bold mb-2 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-microscope" style="color:#1078C0"></i>${t.about_discovery}
          </h3>
          <p class="text-gray-700">${t.about_discovery_text}</p>
        </div>
      </div>

      <!-- Ashley photo -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="md:col-span-2">
          <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-5 flex items-start gap-3">
            <i class="fas fa-exclamation-triangle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
            <p class="text-amber-800 font-semibold text-lg">${t.about_diagnosis_note}</p>
          </div>
          <div class="bg-sky-50 rounded-2xl p-5 border border-sky-200 flex gap-3 items-start">
            <i class="fas fa-smile-beam text-2xl mt-1 flex-shrink-0" style="color:#1078C0"></i>
            <p class="text-gray-700 italic text-base">${t.about_happy}</p>
          </div>
        </div>
        <div class="img-frame">
          <img src="/images/ashley_water.jpg" alt="Ashley, 8 anni, gioca nell'acqua" class="w-full h-64 object-cover">
          <div class="p-3 text-center text-xs text-gray-500 bg-sky-50">
            ${t.lang==='it'?'Ashley, 8 anni, gioca nell\'acqua':t.lang==='en'?'Ashley, age 8, playing in the water':t.lang==='fr'?'Ashley, 8 ans, joue dans l\'eau':t.lang==='es'?'Ashley, 8 años, jugando en el agua':'Ashley, 8 Jahre, spielt im Wasser'}
          </div>
        </div>
      </div>

      <!-- Features grid -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-list-check" style="color:#1078C0"></i>${t.about_features_title}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        ${features.map(f => `
        <div class="card p-5 flex gap-4">
          <div class="ic ${f.ic}"><i class="fas ${f.icon} text-lg"></i></div>
          <div>
            <h3 class="font-bold mb-1" style="color:#082050">${f.title}</h3>
            <p class="text-gray-600 text-sm">${f.items}</p>
          </div>
        </div>`).join('')}
      </div>

      <!-- ReNU Syndrome Support Tool -->
      <div class="mt-8 card card-navy p-6 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%)">
              <i class="fas fa-file-medical-alt text-3xl text-white"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-xl mb-2" style="color:#082050">
              ${t.lang==='it'?'ReNU Syndrome Support Tool':'ReNU Syndrome Support Tool'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Scarica il documento completo sulle specificità cliniche della Sindrome ReNU, elaborato dai principali ricercatori mondiali. Un supporto essenziale per i medici che seguono pazienti con ReNU.':t.lang==='en'?'Download the complete document on the clinical specifics of ReNU Syndrome, prepared by leading world researchers. An essential support for physicians treating ReNU patients.':'Téléchargez le document complet sur les spécificités cliniques du syndrome ReNU.'}
            </p>
            <a href="https://static1.squarespace.com/static/66cde7d2bedfe27eac771da1/t/692f8c2e4f8faf429c4b30e8/1764723758650/ReNU+Support+Tool.pdf" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold" style="background:#1078C0">
              <i class="fas fa-download"></i>
              ${t.lang==='it'?'Scarica ReNU Support Tool PDF':t.lang==='en'?'Download ReNU Support Tool PDF':'Télécharger ReNU Support Tool PDF'}
            </a>
          </div>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
          <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
        </a>
        <a href="/${t.lang}/research" class="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full text-lg transition-colors" style="background:#1078C0">
          <i class="fas fa-microscope"></i>${t.section_research_title}
        </a>
        <a href="https://www.renusyndrome.org/aboutrenu" target="_blank" class="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full text-lg" style="background:#EEF6FB; color:#082050; border: 2px solid #45B8EC">
          <i class="fas fa-external-link-alt"></i>
          ${t.lang==='it'?'Approfondisci su RSU':t.lang==='en'?'Learn more on RSU':'Plus d\'infos sur RSU'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── RESEARCH PAGE ────────────────────────────────────────────────────────────
function researchPage(t: Record<string, string>): string {
  const priorities = [
    ['fa-comment-slash', t.lang==='it'?'Comunicazione / Linguaggio':t.lang==='en'?'Communication / Language':'Communication / Langage'],
    ['fa-bolt',          t.lang==='it'?'Epilessia / Crisi':t.lang==='en'?'Epilepsy / Seizures':'Épilepsie / Crises'],
    ['fa-brain',         t.lang==='it'?'Anomalie cerebrali':t.lang==='en'?'Brain Abnormalities':'Anomalies cérébrales'],
    ['fa-walking',       t.lang==='it'?'Mobilità':t.lang==='en'?'Mobility':'Mobilité'],
    ['fa-dumbbell',      t.lang==='it'?'Ipotonia':t.lang==='en'?'Hypotonia':'Hypotonie'],
    ['fa-utensils',      t.lang==='it'?'Alimentazione':t.lang==='en'?'Feeding':'Alimentation'],
    ['fa-bone',          t.lang==='it'?'Fragilità ossea':t.lang==='en'?'Bone Fragility':'Fragilité osseuse'],
    ['fa-tint',          t.lang==='it'?'Scialorrea':t.lang==='en'?'Drooling':'Hypersalivation'],
    ['fa-toilet',        t.lang==='it'?'Problemi GI':t.lang==='en'?'GI Issues':'Problèmes GI'],
    ['fa-ruler-vertical',t.lang==='it'?'Crescita':t.lang==='en'?'Growth':'Croissance'],
  ]

  const studies = [
    {
      color: 'border-sky-500', ic: 'ic-sky', icon: 'fa-heartbeat',
      name: 'Citizen Health',
      img: '/images/citizen_health.jpg',
      desc: t.lang==='it'?'Organizza i tuoi dati medici in un profilo digitale privato – nessuna visita richiesta – e contribuisci alla ricerca farmaceutica per ReNU. I tuoi dati reali contribuiscono a studi critici di storia naturale che accelerano la ricerca di trattamenti.':
            'Securely organize medical records into a private digital profile — no site visits required — and help power pharmaceutical research for ReNU. Your real-world experiences contribute to critical natural history studies.',
      link: 'https://www.citizen.health/ai-advocate/renu-syndrome',
      lbl: t.lang==='it'?'Iscriviti ora':'Sign up now'
    },
    {
      color: 'border-blue-700', ic: 'ic-blue', icon: 'fa-flask',
      name: 'Studio INDEED (Mount Sinai)',
      img: '/images/indeed_study.jpg',
      desc: t.lang==='it'?'I Dottori Ernest Turro e Mafalda Barbosa alla Icahn School of Medicine at Mount Sinai hanno fondato lo studio INDEED per investigare ReNU. Offre sequenziamento gratuito (uso ricerca) dei geni RNU4-2 e RNU2-2. Se sospetti che il tuo familiare possa avere ReNU, potresti essere idoneo per il test GRATUITO.':
            'Drs. Ernest Turro and Mafalda Barbosa at Icahn School of Medicine at Mount Sinai. The INDEED study offers free research-use DNA sequencing of RNU4-2 and RNU2-2 genes. If you suspect ReNU, you may be eligible for FREE testing.',
      link: 'mailto:zafiirah.baurhoo@mssm.edu',
      lbl: 'Email'
    },
    {
      color: 'border-purple-500', ic: 'ic-purple', icon: 'fa-database',
      name: 'Rare-X Registry',
      img: '/images/rare_x.jpg',
      desc: t.lang==='it'?'Registro globale critico aperto a tutti. Lo sviluppo di opzioni terapeutiche richiede dati robusti continuamente aggiornati. Tutti sono benvenuti a partecipare – il tuo contributo è essenziale.':
            'Critical global registry open to ALL. Developing treatment options requires robust, continually updated data. Your contribution is essential.',
      link: 'https://rare-x.org/rnu4-2/',
      lbl: t.join_registry
    },
    {
      color: 'border-green-500', ic: 'ic-green', icon: 'fa-face-smile',
      name: 'GestaltMatcher',
      img: '',
      desc: t.lang==='it'?'Utilizza AI 2D avanzata per analizzare immagini mediche e identificare caratteristiche facciali che possono indicare e accelerare la diagnosi di malattie genetiche rare. Contatto: Dr. Annabelle Arlt.':
            'Uses advanced 2D AI to analyze medical images and identify facial features that may indicate rare genetic disorders. Contact: Dr. Annabelle Arlt.',
      link: 'mailto:annaarlt@uni-bonn.de',
      lbl: 'Email'
    },
    {
      color: 'border-orange-500', ic: 'ic-amber', icon: 'fa-clipboard-list',
      name: 'Clinical Health Survey (Northwell)',
      img: '',
      desc: t.lang==='it'?'Studio trasversale per raccogliere e analizzare le caratteristiche degli individui con Sindrome ReNU (~45 minuti). Diretto da Dr. Ian Krantz, Kelsey Crocker e Asbaa Khan. Disponibile lun-ven 9-17 ET.':
            'Cross-sectional study to collect and analyze features of individuals with ReNU Syndrome (~45 minutes). Led by Dr. Ian Krantz, Kelsey Crocker, and Asbaa Khan.',
      link: 'mailto:NGHI@northwell.edu',
      lbl: 'Email'
    },
    {
      color: 'border-teal-500', ic: 'ic-cyan', icon: 'fa-camera',
      name: 'FaceBase (Univ. Calgary)',
      img: '',
      desc: t.lang==='it'?'Studio internazionale di riconoscimento facciale 3D. La partecipazione richiede meno di 20 minuti. Mira a caratterizzare meglio le sindromi genetiche che includono effetti facciali tramite strumento computerizzato.':
            '3D International Facial Recognition Study. Participation requires less than 20 minutes. Aims to better characterize genetic syndromes including facial effects via computer-based tool.',
      link: 'mailto:facebase@ucalgary.ca',
      lbl: 'Email'
    },
    {
      color: 'border-red-500', ic: 'ic-red', icon: 'fa-dollar-sign',
      name: t.lang==='it'?'Studio REN – Epilessia Rara (PAGATO)':t.lang==='en'?'REN Study – Rare Epilepsy (PAID)':'Étude REN – Épilepsie rare (PAYÉE)',
      img: '',
      desc: t.lang==='it'?'Studio sulla Rare Epilepsy Network (REN). Chi può partecipare: pazienti 18+, caregiver, rappresentanti di organizzazioni, operatori sanitari. Survey: 40-60 min + follow-up ogni 4-6 mesi. COMPENSO: $100 gift card Amazon per ogni survey completata.':
            'Rare Epilepsy Network (REN) study. Who can participate: patients 18+, caregivers, advocacy org representatives, healthcare providers. Survey: 40-60 min. COMPENSATION: $100 Amazon gift card per completed survey.',
      link: 'https://rareepilepsynetwork-org.pmailroute.net/x/d?c=50514241&l=dd14c5a7-52a6-4ad6-900f-bafce4bc0eb6&r=d87533fc-694d-4757-a917-5a496b45c591',
      lbl: t.lang==='it'?'Partecipa ora':t.lang==='en'?'Participate now':'Participer'
    },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-microscope mr-3 text-sky-300"></i>${t.research_title}</h1>
        <p class="text-sky-100 text-lg">${t.lang==='it'?'Sezione in fase di preparazione con il nostro Comitato Scientifico.':t.lang==='en'?'Section being prepared with our Scientific Committee.':'Section en cours de préparation.'}</p>
      </div>
    </div>
  </section>

  <!-- SEZIONE IN PREPARAZIONE -->
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6" style="background: linear-gradient(135deg, #C8E8F8, #EEF6FB)">
        <i class="fas fa-flask text-4xl" style="color:#1078C0"></i>
      </div>
      <h2 class="text-3xl font-extrabold mb-4" style="color:#082050">
        ${t.lang==='it'?'Sezione Ricerca in Preparazione':t.lang==='en'?'Research Section Coming Soon':'Section Recherche en Préparation'}
      </h2>
      <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        ${t.lang==='it'?'Stiamo lavorando con il nostro Comitato Scientifico per preparare contenuti accurati e aggiornati sulla ricerca scientifica relativa alla Sindrome ReNU. Questa sezione sarà disponibile presto.':
          t.lang==='en'?'We are working with our Scientific Committee to prepare accurate and up-to-date content on scientific research related to ReNU Syndrome. This section will be available soon.':
          'Nous travaillons avec notre Comité Scientifique pour préparer des contenus précis sur la recherche du Syndrome ReNU.'}
      </p>

      <!-- PUBBLICAZIONI PUBMED -->
      <div class="text-left mb-12">
        <div class="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold mb-6" style="color:#082050">
          <i class="fas fa-book-medical" style="color:#1078C0"></i>
          ${t.lang==='it'?'Pubblicazioni Scientifiche su PubMed':'Scientific Publications on PubMed'}
        </div>
        <h3 class="text-2xl font-extrabold mb-6" style="color:#082050">
          ${t.lang==='it'?'Letteratura Scientifica sulla Sindrome ReNU (RNU4-2)':'Scientific Literature on ReNU Syndrome (RNU4-2)'}
        </h3>
        <div class="space-y-5">
          ${[
            // ── 2026 ──────────────────────────────────────────────────────────
            {
              authors: 'Rius R, Blakes AJM, Chen Y, et al.',
              year: '2026',
              title: 'Biallelic variants in the noncoding RNA gene RNU4-2 cause a recessive neurodevelopmental syndrome with distinct white matter changes',
              journal: 'Nature Genetics. 2026 Apr;58(4):761-773.',
              pmid: '41951959',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41951959/',
              badge: t.lang==='it'?'NUOVO 2026':'NEW 2026',
              summary: t.lang==='it'?'Scoperta rivoluzionaria: le varianti bialleliche (recessive) in RNU4-2 causano una seconda sindrome del neurosviluppo, distinta da ReNU dominante, con caratteristiche cambiamenti della sostanza bianca cerebrale. Lo studio identifica 38 individui con varianti omozigoti o eterozigoti composte in RNU4-2, ampliando enormemente lo spettro delle malattie legate a questo gene.':
                        'Groundbreaking discovery: biallelic (recessive) variants in RNU4-2 cause a second neurodevelopmental syndrome, distinct from dominant ReNU, with distinct white matter changes. The study identifies 38 individuals with homozygous or compound heterozygous variants in RNU4-2, greatly expanding the disease spectrum linked to this gene.'
            },
            {
              authors: 'De Jonghe J, Kim HC, Adedeji A, et al.',
              year: '2026',
              title: 'Saturation editing of RNU4-2 reveals distinct dominant and recessive disorders',
              journal: 'Nature. 2026 Apr (Online ahead of print).',
              pmid: '41951737',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41951737/',
              badge: t.lang==='it'?'NUOVO 2026':'NEW 2026',
              summary: t.lang==='it'?'Studio di "saturation editing" su RNU4-2 che rivela due distinte malattie: una dominante (ReNU) e una recessiva. Mappa sistematicamente le conseguenze funzionali di ogni variante possibile nello snRNA spliceosomal, identificando le posizioni critiche e fornendo la base molecolare per distinguere e comprendere entrambe le sindromi.':
                        'Saturation editing study of RNU4-2 revealing two distinct disorders: one dominant (ReNU) and one recessive. Systematically maps functional consequences of every possible variant in the spliceosomal snRNA, identifying critical positions and providing molecular basis to distinguish and understand both syndromes.'
            },
            {
              authors: 'Leitão E, Santini A, Cogne B, et al.',
              year: '2026',
              title: 'Systematic analysis of snRNA genes reveals frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies',
              journal: 'Nature Genetics. 2026 Apr;58(4):782-797.',
              pmid: '41912934',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41912934/',
              badge: '',
              summary: t.lang==='it'?'Analisi sistematica dei geni snRNA che rivela varianti frequenti in RNU2-2, gene correlato a RNU4-2, in encefalopatie dello sviluppo ed epilettiche sia dominanti che recessive. Lo studio amplia la comprensione del ruolo degli snRNA nelle malattie neurologiche rare e apre nuove prospettive diagnostiche per pazienti non diagnosticati.':
                        'Systematic analysis of snRNA genes revealing frequent RNU2-2 variants in dominant and recessive developmental and epileptic encephalopathies. The study broadens understanding of snRNA roles in rare neurological diseases and opens new diagnostic perspectives for undiagnosed patients.'
            },
            {
              authors: 'Ajmone PF, Rigamonti C, Brasca F, Milani D, et al.',
              year: '2026',
              title: 'Longitudinal Behavior Phenotype Hallmarks in RNU4-2 Syndrome: Implications for Clinical Management',
              journal: 'Am J Med Genet B Neuropsychiatr Genet. 2026 Apr;201(3):205-211.',
              pmid: '41681065',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41681065/',
              badge: t.lang==='it'?'🇮🇹 ITALIANO':'🇮🇹 ITALIAN',
              summary: t.lang==='it'?'Studio italiano — con la partecipazione della Dr.ssa Donatella Milani, presidente del Comitato Scientifico di Sindrome ReNU Italia — che descrive i tratti comportamentali longitudinali della Sindrome RNU4-2. Vengono identificati comportamenti caratteristici con implicazioni per la gestione clinica: umore felice, ricerca di contatto fisico, brevi episodi di agitazione. Uno dei primi studi longitudinali sul fenotipo comportamentale.':
                        'Italian study — with participation of Dr. Donatella Milani, President of the Scientific Committee of Sindrome ReNU Italia — describing longitudinal behavioral traits of RNU4-2 Syndrome. Characteristic behaviors are identified with implications for clinical management: happy mood, seeking physical contact, brief agitation episodes. One of the first longitudinal studies on the behavioral phenotype.'
            },
            {
              authors: 'Crocker K, O\'Toole J, Pearse L, Milani D, et al.',
              year: '2026',
              title: 'Summary of the Inaugural ReNU Hope Conference and Scientific Symposium, July 23-25, 2025, Long Island, New York',
              journal: 'Am J Med Genet A. 2026 Feb.',
              pmid: '41714173',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41714173/',
              badge: '',
              summary: t.lang==='it'?'Sintesi della prima Conferenza Scientifica ReNU Hope (luglio 2025, New York), che ha riunito ricercatori, famiglie, medici e sviluppatori di terapie da tutto il mondo. I temi principali: progressi nella ricerca su RNU4-2, nuovi approcci diagnostici, sviluppo di terapie, supporto alle famiglie e creazione di registri internazionali di pazienti.':
                        'Summary of the inaugural ReNU Hope Conference (July 2025, New York), bringing together researchers, families, clinicians and therapy developers worldwide. Key themes: advances in RNU4-2 research, new diagnostic approaches, therapy development, family support and international patient registry creation.'
            },
            // ── 2025 ──────────────────────────────────────────────────────────
            {
              authors: 'Hayashi Y, Kajiwara K, Mizuno S, et al.',
              year: '2025',
              title: 'Monoallelic and biallelic RNU4-2 variants in neurodevelopmental disorders',
              journal: 'J Hum Genet. 2025 Dec.',
              pmid: '41408479',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41408479/',
              badge: '',
              summary: t.lang==='it'?'Studio giapponese che analizza le varianti monoalleliche e bialleliche in RNU4-2 in una coorte di casi non diagnosticati con disturbi del neurosviluppo. Conferma la prevalenza delle varianti de novo nella regione critica T-loop, caratterizza lo spettro mutazionale e fornisce dati epidemiologici su popolazioni asiatiche, contribuendo alla comprensione globale della sindrome.':
                        'Japanese study analyzing monoallelic and biallelic RNU4-2 variants in a cohort of unresolved neurodevelopmental disorder cases. Confirms prevalence of de novo variants in the critical T-loop region, characterizes the mutational spectrum and provides epidemiological data on Asian populations, contributing to global understanding of the syndrome.'
            },
            {
              authors: 'Chen Y, Gao L, Han X, et al.',
              year: '2025',
              title: 'Prenatal Evaluation of RNU4-2 Variants in Fetuses With Central Nervous System Anomalies',
              journal: 'Am J Med Genet C Semin Med Genet. 2025 Dec.',
              pmid: '41449851',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/41449851/',
              badge: '',
              summary: t.lang==='it'?'Primo studio sulla valutazione prenatale delle varianti RNU4-2 in feti con anomalie del sistema nervoso centrale. Le anomalie cerebrali congenite sono tra le malformazioni più comuni, ma il rendimento diagnostico genetico prenatale rimane basso (<40%). Questo studio dimostra il valore del sequenziamento di RNU4-2 nella diagnostica prenatale di anomalie cerebrali, aprendo la strada a diagnosi più precoci.':
                        'First study on prenatal evaluation of RNU4-2 variants in fetuses with central nervous system anomalies. Congenital brain anomalies are among the most common malformations but prenatal genetic diagnostic yield remains below 40%. This study demonstrates the value of RNU4-2 sequencing in prenatal diagnosis of brain anomalies, paving the way for earlier diagnoses.'
            },
            // ── 2024 ──────────────────────────────────────────────────────────
            {
              authors: 'Delmaghani S, Chen Y, Dawes R, et al.',
              year: '2024',
              title: 'De novo variants in RNU4-2 cause a frequent neurodevelopmental syndrome',
              journal: 'Nature. 2024;632:832-840.',
              pmid: '39169177',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/39169177/',
              badge: t.lang==='it'?'STUDIO FONDAMENTALE':'LANDMARK STUDY',
              summary: t.lang==='it'?'Lo studio fondamentale che ha scoperto la Sindrome ReNU. Analizzando 47.606 individui in 34 coorti internazionali, gli autori hanno identificato varianti de novo in RNU4-2 come causa di una frequente sindrome del neurosviluppo. Prevalenza stimata ~1:35.000 nati vivi. La sindrome — ribattezzata ReNU — include ritardo psicomotorio grave, ipotonia, epilessia, microcefalia, dismorfismi facciali e anomalie cerebrali strutturali.':
                        'The landmark study that discovered ReNU Syndrome. Analyzing 47,606 individuals across 34 international cohorts, authors identified de novo variants in RNU4-2 as the cause of a frequent neurodevelopmental syndrome. Estimated prevalence ~1:35,000 live births. The syndrome — named ReNU — includes severe psychomotor delay, hypotonia, epilepsy, microcephaly, facial dysmorphisms and structural brain anomalies.'
            },
            {
              authors: 'Greene D, Mendez R, Lees J, Turro E, et al.',
              year: '2024',
              title: 'RNU4-2-Related Neurodevelopmental Disorder Is Associated With Severe Intellectual Disability',
              journal: 'Neurol Genet. 2024.',
              pmid: '39434505',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/39434505/',
              badge: '',
              summary: t.lang==='it'?'Studio che caratterizza nel dettaglio il disturbo del neurosviluppo correlato a RNU4-2, con focus sulla disabilità intellettiva grave. Include analisi del ritardo dello sviluppo globale, epilessia, microcefalia, bassa statura e ipotonia. Contribuisce a definire i criteri diagnostici clinici e a stratificare i pazienti per gravità del fenotipo, con implicazioni per la gestione e il supporto.':
                        'Study characterizing in detail the RNU4-2-related neurodevelopmental disorder with focus on severe intellectual disability. Includes analysis of global developmental delay, epilepsy, microcephaly, short stature and hypotonia. Contributes to defining clinical diagnostic criteria and stratifying patients by phenotype severity, with implications for management and support.'
            },
          ].map(pub => `
          <div class="card card-blue p-6 text-left">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                  <i class="fas fa-file-alt text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:#082050">${pub.year}</span>
                  ${pub.badge ? `<span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:#F59E0B;color:#082050">${pub.badge}</span>` : ''}
                  <span class="text-xs text-gray-500 font-medium">${pub.authors}</span>
                </div>
                <h4 class="font-bold text-base mb-1" style="color:#082050">${pub.title}</h4>
                <p class="text-xs text-gray-400 italic mb-3">${pub.journal}</p>
                <div class="rounded-xl p-4 mb-3 text-sm text-gray-700 leading-relaxed" style="background:#EEF6FB; border-left:3px solid #45B8EC">
                  <strong style="color:#082050">${t.lang==='it'?'Sintesi:':'Summary:'}</strong> ${pub.summary}
                </div>
                <a href="${pub.doi}" target="_blank"
                   class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-semibold" style="background:#1078C0">
                  <i class="fas fa-external-link-alt"></i>
                  PubMed${pub.pmid ? ' · PMID '+pub.pmid : ''}
                </a>
              </div>
            </div>
          </div>`).join('')}
        </div>
        <div class="text-center mt-6">
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=RNU4-2+syndrome+neurodevelopmental" target="_blank"
             class="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border:2px solid #45B8EC">
            <i class="fas fa-search"></i>
            ${t.lang==='it'?'Cerca tutte le pubblicazioni su PubMed':'Search all publications on PubMed'}
          </a>
        </div>
      </div>

      <div class="rounded-2xl p-8 text-white mt-4" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-16 h-16 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.2)">
              <i class="fas fa-envelope text-2xl text-white"></i>
            </div>
          </div>
          <div class="flex-1 text-left">
            <h3 class="font-bold text-xl mb-2">${t.lang==='it'?'Vuoi collaborare con il nostro Comitato Scientifico?':t.lang==='en'?'Want to collaborate with our Scientific Committee?':'Vous souhaitez collaborer?'}</h3>
            <p class="text-sky-200 text-sm mb-4">
              ${t.lang==='it'?'Il Comitato Scientifico di Sindrome ReNU Italia è in fase di costituzione. Per collaborazioni scientifiche o per segnalare nuove pubblicazioni, contattaci.':'The Scientific Committee of Sindrome ReNU Italia is being established. For scientific collaborations or to report new publications, contact us.'}
            </p>
            <a href="mailto:info@sindromerenu.it" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors text-sm" style="color:#082050">
              <i class="fas fa-envelope"></i>info@sindromerenu.it
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── THERAPIES PAGE ───────────────────────────────────────────────────────────
function therapiesPage(t: Record<string, string>): string {
  const th = [
    { icon:'fa-running',       ic:'ic-blue',   name:t.lang==='it'?'Fisioterapia (FT)':t.lang==='en'?'Physical Therapy (PT)':t.lang==='fr'?'Kinésithérapie':t.lang==='es'?'Fisioterapia':'Physiotherapie',         desc:t.lang==='it'?'Esercizio, potenziamento muscolare e miglioramento dell\'equilibrio, coordinazione e movimento.':'Exercise, strength training, balance, coordination and motion improvement.' },
    { icon:'fa-hands-helping', ic:'ic-green',  name:t.lang==='it'?'Terapia Occupazionale (TO)':t.lang==='en'?'Occupational Therapy (OT)':t.lang==='fr'?'Ergothérapie':t.lang==='es'?'Terapia Ocupacional':'Ergotherapie', desc:t.lang==='it'?'Trattamento dei ritardi nelle abilità motorie, elaborazione sensoriale e coordinazione.':'Motor skills, sensory processing and coordination treatment.' },
    { icon:'fa-comments',      ic:'ic-purple', name:t.lang==='it'?'Logopedia':'Speech-Language Pathology',           desc:t.lang==='it'?'Miglioramento della comunicazione e risoluzione dei problemi di deglutizione.':'Improving communication and addressing swallowing issues.' },
    { icon:'fa-music',         ic:'ic-amber',  name:t.lang==='it'?'Musicoterapia':'Music Therapy',                   desc:t.lang==='it'?'Usata per le abilità motorie percettive, comunicazione e regolazione dell\'umore.':'Used for perceptual motor skills, communication, and mood regulation.' },
    { icon:'fa-apple-alt',     ic:'ic-red',    name:t.lang==='it'?'Nutrizione e Terapie Alimentari':'Nutrition & Feeding Therapies', desc:t.lang==='it'?'Garantire nutrizione adeguata, sviluppare abilità sensoriali e orali/motorie.':'Ensuring proper nutrition, developing sensory and oral/motor skills.' },
    { icon:'fa-puzzle-piece',  ic:'ic-sky',    name:'ABA Therapy',                                                    desc:t.lang==='it'?'Rinforzo positivo per comportamenti appropriati, sviluppo sociale e competenze accademiche.':'Positive reinforcement for appropriate behaviors and social/academic skills.' },
    { icon:'fa-brain',          ic:'ic-navy',   name:t.lang==='it'?'Terapia Feuerstein – Allenamento Cognitivo con Mediazione':t.lang==='en'?'Feuerstein Therapy – Cognitive Training with Mediation':t.lang==='fr'?'Thérapie Feuerstein – Formation cognitive':t.lang==='es'?'Terapia Feuerstein – Entrenamiento Cognitivo':'Feuerstein-Therapie – Kognitives Training', desc:t.lang==='it'?'Metodo basato sulla mediazione per stimolare le funzioni cognitive, migliorare la capacità di apprendimento e sviluppare il potenziale di ogni bambino ReNU.':t.lang==='en'?'Mediation-based method to stimulate cognitive functions, improve learning capacity and develop the potential of each ReNU child.':t.lang==='fr'?'Méthode basée sur la médiation pour stimuler les fonctions cognitives.':'Método de mediación para estimular funciones cognitivas.' },
    { icon:'fa-swimmer',        ic:'ic-cyan',   name:t.lang==='it'?'Acquaticità e Nuoto':t.lang==='en'?'Aquatics and Swimming':t.lang==='fr'?'Aquaticité et Natation':t.lang==='es'?'Acuaticidad y Natación':'Aquatik und Schwimmen', desc:t.lang==='it'?'L\'ambiente acquatico favorisce la libertà di movimento, il tono muscolare, la coordinazione e la sensorialità. Il nuoto è un\'attività amata da molti bambini ReNU.':t.lang==='en'?'The aquatic environment promotes freedom of movement, muscle tone, coordination and sensory integration. Swimming is loved by many ReNU children.':'L\'environnement aquatique favorise le mouvement, le tonus musculaire et la coordination.' },
    { icon:'fa-mountain',       ic:'ic-green',  name:t.lang==='it'?'Attività Ludico-Sportive Inclusive':t.lang==='en'?'Inclusive Sports Activities':t.lang==='fr'?'Activités Sportives Inclusives':t.lang==='es'?'Actividades Deportivas Inclusivas':'Inklusive Sportaktivitäten', desc:t.lang==='it'?'Attività come l\'arrampicata sportiva adattata (Rockspot) e altre discipline inclusive favoriscono la fiducia in sé stessi, la forza, la coordinazione e l\'integrazione sociale dei bambini ReNU.':t.lang==='en'?'Activities like adapted sport climbing (Rockspot) and other inclusive disciplines foster self-confidence, strength, coordination and social inclusion for ReNU children.':'Des activités comme l\'escalade adaptée et d\'autres disciplines inclusives favorisent la confiance et l\'intégration sociale.' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heartbeat mr-3 text-sky-300"></i>${t.therapies_title}</h1>
      <p class="text-sky-100 text-lg">${t.therapies_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        ${th.map(x => `
        <div class="card p-6 flex gap-4">
          <div class="ic ${x.ic} flex-shrink-0"><i class="fas ${x.icon} text-xl"></i></div>
          <div>
            <h3 class="font-bold text-lg mb-1" style="color:#082050">${x.name}</h3>
            <p class="text-gray-600 text-sm">${x.desc}</p>
          </div>
        </div>`).join('')}
      </div>
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex gap-3 items-start">
        <i class="fas fa-exclamation-circle text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
        <p class="text-amber-800 italic">${t.therapies_note}</p>
      </div>
      <div class="mt-8 text-center">
        <a href="https://www.renusyndrome.org/therapies" target="_blank"
           class="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full" style="background:#1078C0">
          <i class="fas fa-external-link-alt"></i>
          ${t.lang==='it'?'Approfondisci su ReNU Syndrome United':t.lang==='en'?'Learn more on ReNU Syndrome United':'Plus d\'infos sur ReNU Syndrome United'}
        </a>
      </div>

      <!-- DIRITTI E TUTELE -->
      <div class="mt-14">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-shield-alt" style="color:#1078C0"></i>
          ${t.lang==='it'?'Diritti e Tutele – Rete Famiglie Italia':t.lang==='en'?'Rights & Protections – Italian Family Network':'Droits et Protections – Réseau Familles Italie'}
        </h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          ${t.lang==='it'?'Avere un figlio con Sindrome ReNU comporta l\'accesso a una serie di diritti, tutele e agevolazioni previsti dalla legislazione italiana. La nostra rete famiglie è qui per aiutarti a navigare il sistema.':'Having a child with ReNU Syndrome entitles you to a range of rights, protections and benefits under Italian law. Our family network is here to help you navigate the system.'}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${[
            ['fa-id-card','ic-blue',
              t.lang==='it'?'Legge 104/92 – Assistenza Disabili':'Law 104/92 – Disability Assistance',
              t.lang==='it'?'Permessi lavorativi per genitori (3 giorni/mese), congedi straordinari, agevolazioni fiscali e supporto scolastico. La Sindrome ReNU può dare diritto alla 104 in situazione di gravità (art. 3 comma 3).':'Work leave for parents (3 days/month), extraordinary leave, tax benefits and school support. ReNU Syndrome may qualify for law 104 in serious condition (art. 3 comma 3).'],
            ['fa-car','ic-purple',
              t.lang==='it'?'Contrassegno Disabile (Pass Auto)':'Disabled Badge (Car Pass)',
              t.lang==='it'?'Il contrassegno per parcheggio disabili si richiede al Comune di residenza tramite certificazione medica. Permette la sosta in zone riservate e agevolazioni per la circolazione.':'The disabled parking badge is requested at the municipality of residence via medical certification. It allows parking in reserved areas and circulation benefits.'],
            ['fa-graduation-cap','ic-green',
              t.lang==='it'?'Supporto Scolastico (Insegnante di Sostegno)':'School Support (Support Teacher)',
              t.lang==='it'?'Il bambino con ReNU ha diritto all\'insegnante di sostegno, al Piano Educativo Individualizzato (PEI) e ad ausili didattici specifici. Richiede certificazione della disabilità e valutazione UMVD.':'A ReNU child has the right to a support teacher, an Individual Educational Plan (PEI) and specific teaching aids. Requires disability certification and UMVD assessment.'],
            ['fa-money-bill-wave','ic-amber',
              t.lang==='it'?'Indennità di Accompagnamento e Bonus':'Attendance Allowance & Bonuses',
              t.lang==='it'?'L\'indennità di accompagnamento INPS è riservata ai disabili totali che non possono deambulare autonomamente. Esistono anche altri bonus: Bonus Bebè, Assegno Unico, agevolazioni ISEE per disabili.':'INPS attendance allowance is reserved for total disabled people who cannot walk independently. Other bonuses also exist: Baby Bonus, Unique Allowance, ISEE benefits for disabled.'],
            ['fa-id-badge','ic-navy',
              t.lang==='it'?'Disability Card (Carta Europea della Disabilità)':'Disability Card (European Disability Card)',
              t.lang==='it'?'La Disability Card è una tessera europea che certifica la disabilità e dà accesso a agevolazioni in strutture pubbliche, musei, trasporti e servizi. Si richiede tramite INPS.':'The Disability Card is a European card certifying disability and provides access to benefits in public facilities, museums, transport and services. Applied for via INPS.'],
            ['fa-hand-holding-heart','ic-red',
              t.lang==='it'?'Rete Famiglie ReNU Italia':'ReNU Italy Family Network',
              t.lang==='it'?'Connettiti con le altre famiglie italiane con un bambino ReNU. Condividiamo esperienze, suggerimenti pratici e supporto emotivo. Scrivici a info@sindromerenu.it per essere inserito nella rete!':'Connect with other Italian families with a ReNU child. We share experiences, practical tips and emotional support. Write to us at info@sindromerenu.it to join the network!'],
          ].map(([icon,ic,title,desc]) => `
          <div class="card p-5 flex gap-4">
            <div class="ic ${ic} flex-shrink-0"><i class="fas ${icon} text-lg"></i></div>
            <div>
              <h3 class="font-bold mb-1" style="color:#082050">${title}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">${desc}</p>
            </div>
          </div>`).join('')}
        </div>

        <!-- CTA Guida -->
        <div class="rounded-2xl p-7 text-white flex flex-col md:flex-row items-center gap-6" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
          <div class="flex-shrink-0 ic ic-sky w-20 h-20">
            <i class="fas fa-book-open text-3xl"></i>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h3 class="font-bold text-xl mb-2">
              ${t.lang==='it'?'Hai bisogno di orientamento?':'Need guidance?'}
            </h3>
            <p class="text-sky-100 text-sm mb-4">
              ${t.lang==='it'?'Consulta la nostra guida anti-burocrazia con tutti i passi pratici, oppure contattaci direttamente: siamo qui per aiutarti.':'Check our anti-bureaucracy guide with all practical steps, or contact us directly: we are here to help you.'}
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/${t.lang}/faq" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2.5 rounded-full text-sm" style="color:#082050">
                <i class="fas fa-question-circle"></i>
                ${t.lang==='it'?'Guida Anti-Burocrazia':'Anti-Bureaucracy Guide'}
              </a>
              <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Richiesta supporto diritti e tutele':'Rights and protections support request')}"
                 class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold px-5 py-2.5 rounded-full text-sm">
                <i class="fas fa-envelope"></i>
                ${t.lang==='it'?'Contattaci':'Contact us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── DIAGNOSIS PAGE ───────────────────────────────────────────────────────────
function diagnosisPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-stethoscope mr-3 text-sky-300"></i>${t.diagnosis_title}</h1>
      <p class="text-sky-100 text-lg">${t.diagnosis_intro}</p>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">
      <div class="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8 flex gap-4 items-start">
        <i class="fas fa-exclamation-triangle text-amber-500 text-3xl flex-shrink-0"></i>
        <div>
          <h3 class="font-bold text-amber-800 text-xl mb-2">⚠️ ${t.lang==='it'?'Nota Importante':t.lang==='en'?'Important Note':t.lang==='fr'?'Note importante':t.lang==='es'?'Nota importante':'Wichtiger Hinweis'}</h3>
          <p class="text-amber-800 text-lg">${t.about_diagnosis_note}</p>
        </div>
      </div>

      <div class="card card-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-envelope" style="color:#1078C0"></i>${t.diagnosis_contact}
        </h2>
        <div class="space-y-4">
          ${[
            ['info@sindromerenu.it','ic-blue','fa-envelope',t.lang==='it'?'Info generali':'General info'],
            ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',t.lang==='it'?'Segreteria':'Secretariat'],
          ].map(([email,ic,icon,label]) => `
          <a href="mailto:${email}" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ${ic}"><i class="fas ${icon}"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">${email}</div>
              <div class="text-sm text-gray-500">${label}</div>
            </div>
          </a>`).join('')}
          <a href="tel:+393357301206" class="flex items-center gap-4 rounded-xl p-4 hover:bg-sky-50 transition-colors group" style="background:#EEF6FB">
            <div class="ic ic-sky"><i class="fas fa-phone"></i></div>
            <div>
              <div class="font-semibold group-hover:underline" style="color:#1078C0">+39 335 730 1206</div>
              <div class="text-sm text-gray-500">${t.lang==='it'?'Telefono / WhatsApp':'Phone / WhatsApp'}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- WGS vs WES -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <i class="fas fa-dna"></i>WGS vs WES
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="bg-white bg-opacity-10 rounded-xl p-5">
            <h3 class="font-bold text-sky-200 mb-2 flex items-center gap-2"><i class="fas fa-check-circle text-green-400"></i>WGS – Whole Genome Sequencing</h3>
            <p class="text-sky-100 text-sm">${t.lang==='it'?'Analizza tutta la sequenza del DNA, compresi i geni non codificanti come RNU4-2. <strong>NECESSARIO per diagnosticare la Sindrome ReNU.</strong>':'Analyzes the entire DNA sequence, including non-coding genes like RNU4-2. <strong>REQUIRED to diagnose ReNU Syndrome.</strong>'}</p>
          </div>
          <div class="bg-white bg-opacity-10 rounded-xl p-5">
            <h3 class="font-bold text-sky-200 mb-2 flex items-center gap-2"><i class="fas fa-times-circle text-red-400"></i>WES – Whole Exome Sequencing</h3>
            <p class="text-sky-100 text-sm">${t.lang==='it'?'Analizza solo le regioni codificanti. <strong>NON può rilevare le varianti in RNU4-2!</strong>':'Only analyzes coding regions. <strong>CANNOT detect variants in RNU4-2!</strong>'}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

// ─── COMMUNITY PAGE ───────────────────────────────────────────────────────────
function communityPage(t: Record<string, string>): string {
  const intlAssoc = [
    { country: t.lang==='it'?'Italia':'Italy', flag: '🇮🇹',
      name: 'Associazione Sindrome RENU Italia APS',
      fb: 'https://www.facebook.com/groups/1268033701594892',
      ig: 'https://www.instagram.com/sindrome_renu_italia/',
      web: 'https://www.sindromerenu.it',
      email: 'info@sindromerenu.it', phone: '+39 335 730 1206',
      ref: 'Imma Audino, Stefania Rocca' },
    { country: t.lang==='it'?'Francia':'France', flag: '🇫🇷',
      name: 'Association Française du Syndrome ReNU',
      fb: '',
      ig: 'https://www.instagram.com/chaque_progres_une_victoire',
      web: 'https://www.syndrome-renu.fr/',
      email: 'syndrome.renu.france@gmail.com', phone: '',
      ref: 'Carole Hervé, Hervé Guérin' },
    { country: t.lang==='it'?'Spagna':'Spain', flag: '🇪🇸',
      name: 'Asociación Síndrome de ReNU',
      fb: '',
      ig: 'https://www.instagram.com/asociacion_sindrome_renu',
      web: 'https://www.sindromerenu.es/',
      email: 'asociacionsindromerenu@gmail.com', phone: '',
      ref: 'Clara Udaondo, Carol Rodriguez' },
    { country: t.lang==='it'?'Germania':'Germany', flag: '🇩🇪',
      name: 'ReNU Syndrom United',
      fb: 'https://www.facebook.com/groups/1425904855195400',
      ig: '',
      web: 'https://renu-syndrom.de/',
      email: 'viktoria@hassenmeier.eu', phone: '',
      ref: 'Vicky Hassenmeier' },
    { country: 'UK', flag: '🇬🇧',
      name: 'ReNU Syndrome United UK',
      fb: 'https://www.facebook.com/groups/1603406977204374',
      ig: 'https://www.instagram.com/renusyndromeuk',
      web: 'https://renusyndromeuk.org/',
      email: 'michaelah_86@hotmail.com', phone: '',
      ref: 'Michaela Kerr, Christina Cox' },
    { country: t.lang==='it'?'Australia':'Australia', flag: '🇦🇺',
      name: 'ReNU Syndrome United Australia',
      fb: 'https://www.facebook.com/groups/1671427560388792',
      ig: 'https://www.instagram.com/renusyndromeaustralia',
      web: '',
      email: 'renusyndromeaustralia@gmail.com', phone: '',
      ref: 'Sarah Warwick' },
    { country: 'USA', flag: '🇺🇸',
      name: 'ReNU Syndrome United',
      fb: '',
      ig: 'https://www.instagram.com/renusyndromeunited',
      web: 'https://www.renusyndrome.org',
      email: 'united@renusyndrome.org', phone: '',
      ref: 'Jessica Margrill, Heather Margrill, Lindsay Pearse' },
    { country: t.lang==='it'?'Polonia':'Poland', flag: '🇵🇱',
      name: 'RNU4-2 Syndome ReNU',
      fb: 'https://www.facebook.com/share/g/1A3Enzm7AH/',
      ig: '',
      web: '',
      email: '', phone: '',
      ref: 'Anna Gintowt' },
    { country: t.lang==='it'?'Paesi Bassi':'Netherlands', flag: '🇳🇱',
      name: '',
      fb: '',
      ig: '',
      web: '',
      email: 'eric.riet@live.nl', phone: '',
      ref: '' },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-users mr-3 text-sky-300"></i>${t.community_title}</h1>
        <p class="text-sky-100 text-lg">${t.community_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-64">
          <img src="/images/famiglia2.png" alt="Famiglie" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- Map and Parent Network -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="card card-blue overflow-hidden">
          <div class="h-40 overflow-hidden">
            <img src="/images/renu_map.jpg" alt="Mappa Mondiale RNU4-2" class="w-full h-full object-cover">
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-blue mx-auto mb-3"><i class="fas fa-map-marked-alt text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Mappa Mondiale RNU4-2':'World Map RNU4-2'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Aggiungi il tuo familiare alla mappa mondiale di RNU4-2. Ultimi aggiornati: 15 aprile 2026.':'Add your family member to the worldwide RNU4-2 map. Last updated: April 15, 2026.'}
            </p>
            <a href="https://form.jotform.com/250154538972159" target="_blank"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-map-pin"></i>${t.join_registry}
            </a>
          </div>
        </div>

        <div class="card card-sky overflow-hidden">
          <div class="h-40 overflow-hidden">
            <img src="/images/renu_parents.jpg" alt="Rete Genitori" class="w-full h-full object-cover bg-sky-100">
          </div>
          <div class="p-6 text-center">
            <div class="ic ic-sky mx-auto mb-3"><i class="fas fa-heart text-xl"></i></div>
            <h3 class="font-bold text-xl mb-3" style="color:#082050">
              ${t.lang==='it'?'Rete Genitori Italia':'Parent Network Italy'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Connettiti con famiglie in Italia e nel mondo. Non sei solo in questo percorso.':'Connect with families in Italy and worldwide. You are not alone in this journey.'}
            </p>
            <a href="mailto:info@sindromerenu.it"
               class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-colors" style="background:#45B8EC">
              <i class="fas fa-envelope"></i>${t.contact_us}
            </a>
          </div>
        </div>
      </div>

      <!-- Mappa mondiale countries -->
      <div class="card card-navy p-6 mb-10">
        <h2 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe" style="color:#1078C0"></i>${t.world_title}
        </h2>
        <p class="text-gray-600 text-sm leading-relaxed">${t.world_desc}</p>
        <p class="text-xs mt-3 text-gray-400">
          <i class="fas fa-calendar-alt mr-1"></i>
          ${t.lang==='it'?'Ultimo aggiornamento: 15 aprile 2026':'Last updated: April 15, 2026'}
        </p>
      </div>

      <!-- International Network -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-globe-europe" style="color:#1078C0"></i>${t.intl_network}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${intlAssoc.map(a => `
          <div class="card p-5">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-3xl">${a.flag}</span>
              <div>
                <h3 class="font-bold leading-tight" style="color:#082050">${a.country}</h3>
                ${a.name ? `<p class="text-xs text-gray-500 leading-tight">${a.name}</p>` : ''}
              </div>
            </div>
            ${a.ref ? `<p class="text-xs text-gray-400 mb-2"><i class="fas fa-user mr-1"></i>${a.ref}</p>` : ''}
            <div class="flex gap-2 flex-wrap mt-2">
              ${a.web   ? `<a href="${a.web}"   target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#1078C0"><i class="fas fa-globe"></i>Web</a>` : ''}
              ${a.fb    ? `<a href="${a.fb}"    target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#1877F2"><i class="fab fa-facebook"></i>FB</a>` : ''}
              ${a.ig    ? `<a href="${a.ig}"    target="_blank" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#E1306C"><i class="fab fa-instagram"></i>IG</a>` : ''}
              ${a.email ? `<a href="mailto:${a.email}" class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full text-white" style="background:#45B8EC"><i class="fas fa-envelope"></i>Email</a>` : ''}
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- RSU Partnership -->
      <div class="rounded-2xl p-8 text-white mb-10" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img src="/images/logo.png" alt="Logo" class="w-28 h-auto drop-shadow-lg flex-shrink-0">
          <div>
            <h3 class="text-2xl font-bold mb-2">ReNU Syndrome United (USA)</h3>
            <p class="text-sky-200 mb-4">
              ${t.lang==='it'?'Sindrome ReNU Italia opera in stretta collaborazione con ReNU Syndrome United degli USA, l\'associazione fondatrice che ci ha concesso il permesso di replicare il loro modello e utilizza la stessa struttura organizzativa.':'Sindrome ReNU Italia works in close collaboration with ReNU Syndrome United from the USA, who granted us permission to replicate their model and uses the same organizational structure.'}
            </p>
            <a href="https://www.renusyndrome.org" target="_blank"
               class="inline-flex items-center gap-2 font-bold px-5 py-2 rounded-full hover:bg-sky-50 transition-colors text-sm" style="background:white; color:#082050">
              <i class="fas fa-external-link-alt"></i>www.renusyndrome.org
            </a>
          </div>
        </div>
      </div>

      <!-- Gallery Italia (placeholder GDPR) -->
      ${t.lang==='it' || t.lang==='en' ? `
      <div class="mb-8">
        <h2 class="text-2xl font-extrabold mb-4 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-images" style="color:#1078C0"></i>
          ${t.lang==='it'?'Gallery Italiana':'Italian Gallery'}
        </h2>
        <div class="rounded-2xl overflow-hidden border-2 border-dashed" style="border-color:#45B8EC; background:#EEF6FB">
          <div class="p-8 text-center">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
              <i class="fas fa-camera text-white text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2" style="color:#082050">
              ${t.lang==='it'?'Foto delle famiglie italiane ReNU':'Photos of Italian ReNU families'}
            </h3>
            <p class="text-gray-600 mb-3 max-w-lg mx-auto text-sm leading-relaxed">
              ${t.lang==='it'?'Questa sezione raccoglierà le foto e le storie delle famiglie italiane con un bambino o giovane adulto con Sindrome ReNU. Le fotografie saranno pubblicate solo previo esplicito consenso scritto dei genitori/tutori, nel rispetto del GDPR.':'This section will collect photos and stories of Italian families with a child or young adult with ReNU Syndrome. Photos will be published only with explicit written parental/guardian consent, in compliance with GDPR.'}
            </p>
            <div class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-5" style="background:#FEF3C7; color:#92400E">
              <i class="fas fa-shield-alt"></i>
              ${t.lang==='it'?'In raccolta consensi GDPR – Pubblicazione imminente':'Collecting GDPR consents – Publication coming soon'}
            </div>
            <br>
            <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Voglio condividere la mia storia nella Gallery Italia':'I want to share my story in the Italian Gallery')}"
               class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm" style="background:#1078C0">
              <i class="fas fa-paper-plane"></i>
              ${t.lang==='it'?'Condividi la tua storia':'Share your story'}
            </a>
          </div>
        </div>
      </div>` : ''}

      <!-- Gallery Internazionale -->
      <div class="card card-sky overflow-hidden mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="overflow-hidden">
            <img src="/images/renu_gallery.jpg" alt="Gallery ReNU" class="w-full h-56 object-cover">
          </div>
          <div class="p-6 flex flex-col justify-center">
            <h3 class="font-bold text-xl mb-3 flex items-center gap-2" style="color:#082050">
              <i class="fas fa-images" style="color:#1078C0"></i>
              ${t.lang==='it'?'Gallery Internazionale':'International Gallery'}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              ${t.lang==='it'?'Guarda le foto dei coraggiosi bambini e famiglie di tutto il mondo sulla galleria internazionale di ReNU Syndrome United.':'See photos of brave children and families from around the world on the international ReNU Syndrome United gallery.'}
            </p>
            <a href="https://www.renusyndrome.org/gallery" target="_blank"
               class="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit" style="background:#1078C0">
              <i class="fas fa-images"></i>${t.lang==='it'?'Visita la Galleria':'Visit Gallery'}
            </a>
          </div>
        </div>
      </div>

      <!-- Storie delle famiglie -->
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-heart" style="color:#E74C3C"></i>
          ${t.lang==='it'?'Storie di Famiglie da Tutto il Mondo':t.lang==='en'?'Stories from Families Around the World':t.lang==='fr'?'Histoires de Familles du Monde Entier':t.lang==='es'?'Historias de Familias de Todo el Mundo':'Familiengeschichten aus aller Welt'}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${[
            { name: 'James', flag: '🇬🇧', url: 'https://www.renusyndrome.org/james-2', desc: t.lang==='it'?'Gran Bretagna – Una storia di forza':t.lang==='en'?'Great Britain – A story of strength':'Grande-Bretagne – Une histoire de force' },
            { name: 'Mia Joy', flag: '🇺🇸', url: 'https://www.renusyndrome.org/mia-joy', desc: t.lang==='it'?'USA – Gioia in ogni momento':t.lang==='en'?'USA – Joy in every moment':'USA – La joie à chaque instant' },
            { name: 'Max', flag: '🇺🇸', url: 'https://www.renusyndrome.org/max-us', desc: t.lang==='it'?'USA – Coraggio e determinazione':t.lang==='en'?'USA – Courage and determination':'USA – Courage et détermination' },
            { name: 'Eliot', flag: '🇫🇷', url: 'https://www.renusyndrome.org/eliot', desc: t.lang==='it'?'Francia – Una famiglia unita':t.lang==='en'?'France – A united family':'France – Une famille unie' },
            { name: 'Isla', flag: '🇦🇺', url: 'https://www.renusyndrome.org/isla', desc: t.lang==='it'?'Australia – La gioia di ogni giorno':t.lang==='en'?'Australia – Joy every day':'Australie – La joie quotidienne' },
            { name: 'Cooper', flag: '🇦🇺', url: 'https://www.renusyndrome.org/cooper', desc: t.lang==='it'?'Australia – Forza e amore':t.lang==='en'?'Australia – Strength and love':'Australie – Force et amour' },
            { name: 'Thibault', flag: '🇫🇷', url: 'https://www.renusyndrome.org/thibault', desc: t.lang==='it'?'Francia – Speranza e progresso':t.lang==='en'?'France – Hope and progress':'France – Espoir et progrès' },
            { name: 'Noah', flag: '🇨🇦', url: 'https://www.renusyndrome.org/noah', desc: t.lang==='it'?'Canada – Un\'avventura speciale':t.lang==='en'?'Canada – A special adventure':'Canada – Une aventure spéciale' },
            { name: 'Antonin', flag: '🇫🇷', url: 'https://www.renusyndrome.org/antonin', desc: t.lang==='it'?'Francia – Amore senza confini':t.lang==='en'?'France – Love without borders':'France – Amour sans frontières' },
            { name: 'Poppy', flag: '🇬🇧', url: 'https://www.renusyndrome.org/poppy', desc: t.lang==='it'?'Gran Bretagna – La dolcezza di Poppy':t.lang==='en'?'Great Britain – The sweetness of Poppy':'Grande-Bretagne – La douceur de Poppy' },
            { name: 'Vivaan', flag: '🇮🇳', url: 'https://www.renusyndrome.org/vivaan', desc: t.lang==='it'?'India – Famiglia che lotta insieme':t.lang==='en'?'India – Family fighting together':'Inde – Famille qui se bat ensemble' },
            { name: 'Chase', flag: '🇺🇸', url: 'https://www.renusyndrome.org/chase', desc: t.lang==='it'?'USA – Perseveranza e gioia':t.lang==='en'?'USA – Perseverance and joy':'USA – Persévérance et joie' },
          ].map(s => `
          <a href="${s.url}" target="_blank" class="card p-4 flex items-center gap-4 group hover:shadow-lg">
            <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-3xl" style="background: linear-gradient(135deg, #C8E8F8 0%, #EEF6FB 100%)">
              ${s.flag}
            </div>
            <div>
              <div class="font-bold text-base" style="color:#082050">${s.name}</div>
              <div class="text-xs text-gray-500 mt-0.5">${s.desc}</div>
              <div class="text-xs font-semibold mt-1 flex items-center gap-1" style="color:#1078C0">
                ${t.read_more} <i class="fas fa-arrow-right text-xs"></i>
              </div>
            </div>
          </a>`).join('')}
        </div>
        <div class="mt-6 text-center">
          <a href="https://www.renusyndrome.org/stories" target="_blank"
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border: 2px solid #45B8EC">
            <i class="fas fa-users"></i>
            ${t.lang==='it'?'Tutte le Storie – renusyndrome.org':t.lang==='en'?'All Stories – renusyndrome.org':'Toutes les Histoires – renusyndrome.org'}
          </a>
        </div>
      </div>

    </div>
  </section>`
}

// ─── DONATIONS PAGE ───────────────────────────────────────────────────────────
function donationsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-20 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 text-sky-100">
          <i class="fas fa-heart text-red-300"></i>
          ${t.lang==='it'?'Ogni gesto conta':'Every gesture counts'}
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <i class="fas fa-hand-holding-heart mr-3 text-sky-300"></i>${t.donations_title}
        </h1>
        <p class="text-sky-100 text-lg mb-8 max-w-xl leading-relaxed">${t.donations_intro}</p>
        <div class="flex flex-wrap gap-3">
          <a href="https://buonacausa.org" target="_blank"
             class="inline-flex items-center gap-2 bg-white font-bold px-7 py-4 rounded-full shadow-xl text-base transition-colors hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-hand-holding-heart"></i>
            ${t.lang==='it'?'Dona ora su BuonaCausa.org':'Donate on BuonaCausa.org'}
          </a>
          <a href="mailto:donazioni@sindromerenu.it"
             class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
            <i class="fas fa-envelope"></i>donazioni@sindromerenu.it
          </a>
        </div>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-72">
          <img src="/images/festa.png" alt="Sostienici" class="w-full h-56 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- TABS NAVIGATION -->
  <div class="sticky top-16 z-40 bg-white shadow-sm border-b border-sky-100">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex overflow-x-auto gap-0">
        ${[
          ['#come-donare', t.lang==='it'?'Come Donare':'How to Donate', 'fa-hand-holding-heart'],
          ['#cinque-per-mille', '5×1000', 'fa-percentage'],
          ['#compleanno-solidale', t.lang==='it'?'Compleanno Solidale':'Birthday Fundraiser', 'fa-birthday-cake'],
          ['#chi-ci-sostiene', t.lang==='it'?'Chi ci Sostiene':'Our Supporters', 'fa-star'],
          ['#deduzioni', t.lang==='it'?'Deduzioni Fiscali':'Tax Deductions', 'fa-file-invoice'],
        ].map(([href,label,icon]) => `
        <a href="${href}" class="flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 border-transparent hover:border-sky-500 hover:text-sky-600 transition-colors" style="color:#082050">
          <i class="fas ${icon} text-xs" style="color:#1078C0"></i>${label}
        </a>`).join('')}
      </div>
    </div>
  </div>

  <section class="py-12 px-4 section-light">
    <div class="max-w-4xl mx-auto space-y-12">

      <!-- WHY SUPPORT -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${[
          ['fa-microscope','ic-blue',t.lang==='it'?'Finanzia la Ricerca':'Fund Research',t.lang==='it'?'Supporta la ricerca per trovare terapie per la Sindrome ReNU.':'Support research to find therapies for ReNU Syndrome.'],
          ['fa-users','ic-green',t.lang==='it'?'Costruisci Comunità':'Build Community',t.lang==='it'?'Aiuta a costruire la rete di supporto per le famiglie italiane.':'Help build the Italian family support network.'],
          ['fa-bullhorn','ic-purple',t.lang==='it'?'Diffondi Consapevolezza':'Spread Awareness',t.lang==='it'?'Aumenta la visibilità della Sindrome ReNU in Italia.':'Increase visibility of ReNU Syndrome in Italy.'],
        ].map(([icon,ic,title,desc]) => `
        <div class="card p-6 text-center">
          <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon} text-xl"></i></div>
          <h3 class="font-bold mb-2" style="color:#082050">${title}</h3>
          <p class="text-gray-600 text-sm">${desc}</p>
        </div>`).join('')}
      </div>

      <!-- COME DONARE -->
      <div id="come-donare">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">1</span>
          ${t.lang==='it'?'Come Donare':t.lang==='en'?'How to Donate':'Comment Donner'}
        </h2>

        <!-- Donazione individuale – Bonifico -->
        <div class="card card-blue p-8 mb-6">
          <h3 class="text-xl font-extrabold mb-4 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-university" style="color:#1078C0"></i>
            ${t.lang==='it'?'Donazione Individuale – Bonifico Bancario':t.lang==='en'?'Individual Donation – Bank Transfer':'Don Individuel – Virement Bancaire'}
          </h3>
          <div class="rounded-2xl p-6 font-mono space-y-3" style="background:#EEF6FB">
            <p class="text-sm text-gray-500 font-sans text-center">${t.donations_iban_label}</p>
            <div class="text-center">
              <p class="text-xs text-gray-500 font-sans mb-1">IBAN</p>
              <p class="text-xl font-bold tracking-wide" style="color:#082050">${t.donations_iban}</p>
            </div>
            <p class="text-center text-sm text-gray-500 font-sans">${t.lang==='it'?'Causale: "Donazione Sindrome ReNU Italia APS"':'Reference: "Donazione Sindrome ReNU Italia APS"'}</p>
          </div>
          <p class="mt-3 text-sm text-gray-500 text-center">
            <i class="fas fa-envelope mr-1" style="color:#1078C0"></i>
            <a href="mailto:donazioni@sindromerenu.it" class="hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </p>
        </div>

        <!-- Donazione ricorrente -->
        <div class="card card-sky p-8 mb-6">
          <h3 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
            <i class="fas fa-sync-alt" style="color:#45B8EC"></i>
            ${t.lang==='it'?'Donazione Ricorrente':t.lang==='en'?'Recurring Donation':'Don Récurrent'}
          </h3>
          <p class="text-gray-600 text-sm mb-4">
            ${t.lang==='it'?'Con una donazione ricorrente mensile o annuale, garantisci un supporto continuo alle attività dell\'associazione e alle famiglie ReNU in Italia. Ogni contributo, anche piccolo, fa la differenza ogni giorno.':'With a monthly or annual recurring donation, you provide continuous support to the association\'s activities and ReNU families in Italy.'}
          </p>
          <a href="https://buonacausa.org" target="_blank"
             class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#1078C0">
            <i class="fas fa-hand-holding-heart"></i>
            ${t.lang==='it'?'Imposta Donazione Ricorrente':'Set Up Recurring Donation'}
          </a>
        </div>

        <!-- Donazione online BuonaCausa -->
        <div class="card p-8 mb-6" style="border-top:4px solid #16A085">
          <div class="flex items-start gap-5">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center shadow" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                <i class="fas fa-hand-holding-heart text-2xl text-white"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-bold mb-3" style="color:#16A085">
                <i class="fas fa-star text-yellow-400"></i>
                ${t.lang==='it'?'Piattaforma Italiana Consigliata':'Recommended Italian Platform'}
              </div>
              <h3 class="text-xl font-extrabold mb-2" style="color:#082050">
                ${t.lang==='it'?'Donazione Online – BuonaCausa.org':'Online Donation – BuonaCausa.org'}
              </h3>
              <p class="text-gray-600 text-sm mb-1 leading-relaxed">
                ${t.lang==='it'?'Dona online in modo semplice e sicuro su <strong>BuonaCausa.org</strong>, la piattaforma italiana gratuita di crowdfunding per associazioni del Terzo Settore. Accetta bonifico, PayPal e carta di credito/debito.':'Donate online easily and securely on <strong>BuonaCausa.org</strong>, the free Italian crowdfunding platform for non-profit organizations. Accepts bank transfer, PayPal and credit/debit card.'}
              </p>
              <ul class="text-sm text-gray-500 mb-4 space-y-1 list-none">
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Trasparente e sicura':'Transparent and secure'}</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Donazione individuale o ricorrente':'Individual or recurring donation'}</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500 text-xs"></i>${t.lang==='it'?'Ricevuta fiscale disponibile':'Tax receipt available'}</li>
              </ul>
              <a href="https://buonacausa.org" target="_blank"
                 class="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-full shadow-lg transition-colors hover:opacity-90" style="background: linear-gradient(135deg, #1078C0, #45B8EC)">
                <i class="fas fa-hand-holding-heart"></i>
                ${t.lang==='it'?'Vai a BuonaCausa.org':'Go to BuonaCausa.org'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 5X1000 -->
      <div id="cinque-per-mille">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">2</span>
          5×1000
        </h2>
        <div class="card card-navy p-8">
          <div class="flex flex-col md:flex-row items-start gap-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white" style="background: linear-gradient(135deg, #082050, #1078C0)">
                5‰
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-3" style="color:#082050">
                ${t.lang==='it'?'Destina il 5×1000 a Sindrome ReNU Italia APS':'Donate your 5×1000 to Sindrome ReNU Italia APS'}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                ${t.lang==='it'?'Il 5×1000 è una quota dell\'IRPEF che puoi destinare gratuitamente a un\'associazione del Terzo Settore iscritta al RUNTS. Non costa nulla in più: è una scelta su come distribuire le tasse che già paghi. Sindrome ReNU Italia APS è iscritta al RUNTS (Registro Unico Nazionale del Terzo Settore).':'The 5×1000 is a portion of income tax you can freely allocate to a non-profit organization. It costs you nothing extra. Sindrome ReNU Italia APS is registered in the RUNTS.'}
              </p>
              <div class="rounded-xl p-5 mb-4" style="background:#EEF6FB; border-left: 4px solid #1078C0">
                <p class="font-bold text-sm mb-2" style="color:#082050">
                  <i class="fas fa-info-circle mr-2" style="color:#1078C0"></i>
                  ${t.lang==='it'?'Come fare:':'How to do it:'}
                </p>
                <ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>${t.lang==='it'?'Nella dichiarazione dei redditi (730 o REDDITI PF) cerca la sezione "5×1000"':'In your tax declaration (730 or REDDITI PF) find the "5×1000" section'}</li>
                  <li>${t.lang==='it'?'Firma nella casella "Sostegno delle organizzazioni di volontariato..."':'Sign in the "Support for volunteer organizations..." box'}</li>
                  <li>${t.lang==='it'?'Scrivi il Codice Fiscale dell\'associazione':'Write the association\'s Tax Code'}</li>
                </ol>
              </div>
              <div class="rounded-xl px-5 py-4 border-2 mb-3" style="background:#EEF6FB; border-color:#1078C0;">
                <div class="flex items-center gap-3 font-mono text-lg font-bold" style="color:#082050">
                  <i class="fas fa-hashtag text-sm" style="color:#1078C0"></i>
                  ${t.lang==='it'?'Codice Fiscale:':'Tax Code:'}
                  <span class="px-3 py-1 rounded-lg text-sm font-bold text-white" style="background:#1078C0">
                    ${t.lang==='it'?'in aggiornamento – comunicazione imminente':'pending registration – coming soon'}
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <i class="fas fa-info-circle" style="color:#45B8EC"></i>
                  ${t.lang==='it'?'Il codice fiscale sarà pubblicato non appena completata l\'iscrizione al RUNTS (Registro Unico Nazionale del Terzo Settore). Seguici sui social per non perdere l\'aggiornamento!':'The tax code will be published as soon as RUNTS registration is complete. Follow us on social media!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPLEANNO SOLIDALE -->
      <div id="compleanno-solidale">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">3</span>
          ${t.lang==='it'?'Compleanno Solidale':'Birthday Fundraiser'}
        </h2>
        <div class="card card-purple p-8">
          <div class="flex flex-col md:flex-row items-start gap-6">
            <div class="flex-shrink-0">
              <div class="ic ic-purple w-20 h-20">
                <i class="fas fa-birthday-cake text-3xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-3" style="color:#082050">
                ${t.lang==='it'?'Trasforma il tuo compleanno in un gesto d\'amore':'Turn your birthday into an act of love'}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                ${t.lang==='it'?'In occasione del tuo compleanno, puoi chiedere ai tuoi amici e familiari di fare una piccola donazione a Sindrome ReNU Italia APS al posto dei regali. Un modo semplice e bellissimo per fare la differenza!':'On your birthday, you can ask your friends and family to make a small donation to Sindrome ReNU Italia APS instead of gifts. A simple and beautiful way to make a difference!'}
              </p>
              <a href="https://buonacausa.org" target="_blank"
                 class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#7C3AED">
                <i class="fas fa-gift"></i>
                ${t.lang==='it'?'Crea la tua raccolta fondi':'Create your fundraiser'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CHI CI SOSTIENE -->
      <div id="chi-ci-sostiene">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">4</span>
          ${t.lang==='it'?'Chi ci Sostiene':'Our Supporters'}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card card-amber p-8 text-center">
            <div class="ic ic-amber mx-auto mb-4 w-20 h-20">
              <i class="fas fa-heart text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2" style="color:#082050">Il Sorriso di Matilde ETS</h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Associazione partner che sostiene le famiglie con bambini affetti da malattie rare. Un ringraziamento speciale per il loro prezioso supporto a Sindrome ReNU Italia APS.':'Partner association supporting families with children affected by rare diseases. A special thanks for their precious support to Sindrome ReNU Italia APS.'}
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:#FEF3C7; color:#92400E">
              <i class="fas fa-star"></i>${t.lang==='it'?'Sostenitore Ufficiale':'Official Supporter'}
            </div>
          </div>
          <div class="card card-blue p-8 text-center">
            <div class="ic ic-blue mx-auto mb-4 w-20 h-20">
              <i class="fas fa-building text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2" style="color:#082050">Frontis SPA</h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Azienda partner che supporta la nostra missione. Il loro contributo ci permette di continuare a operare e supportare le famiglie ReNU in Italia.':'Partner company supporting our mission. Their contribution allows us to continue operating and supporting ReNU families in Italy.'}
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:#C8E8F8; color:#082050">
              <i class="fas fa-handshake"></i>${t.lang==='it'?'Partner Aziendale':'Corporate Partner'}
            </div>
          </div>
        </div>
        <div class="mt-6 text-center text-sm text-gray-500">
          <i class="fas fa-info-circle mr-1" style="color:#1078C0"></i>
          ${t.lang==='it'?'Vuoi diventare partner? Contattaci a':'Want to become a partner? Contact us at'} 
          <a href="mailto:info@sindromerenu.it" class="font-semibold hover:underline" style="color:#1078C0">info@sindromerenu.it</a>
        </div>
      </div>

      <!-- DEDUZIONI FISCALI -->
      <div id="deduzioni">
        <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3" style="color:#082050">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:#1078C0">5</span>
          ${t.lang==='it'?'Deduzioni e Detrazioni Fiscali':'Tax Deductions'}
        </h2>
        <div class="card card-green p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color:#082050">
                <i class="fas fa-percentage" style="color:#16A085"></i>
                ${t.lang==='it'?'Detrazione (Persone Fisiche)':'Tax Deduction (Individuals)'}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-3">
                ${t.lang==='it'?'Le donazioni effettuate da persone fisiche a Sindrome ReNU Italia APS (iscritta al RUNTS) danno diritto a una detrazione IRPEF del 30% (35% per i soci), fino a un massimo di 30.000€ all\'anno.':'Donations from individuals to Sindrome ReNU Italia APS (registered in RUNTS) entitle a 30% income tax deduction (35% for members), up to €30,000 per year.'}
              </p>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color:#082050">
                <i class="fas fa-building" style="color:#16A085"></i>
                ${t.lang==='it'?'Deduzione (Aziende)':'Tax Deduction (Companies)'}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-3">
                ${t.lang==='it'?'Le aziende che fanno donazioni a Sindrome ReNU Italia APS possono dedurre il 10% del reddito imponibile, con un limite di 70.000€ annui. Contattaci per ricevere la documentazione necessaria.':'Companies making donations to Sindrome ReNU Italia APS can deduct 10% of taxable income, up to €70,000 annually. Contact us for the necessary documentation.'}
              </p>
            </div>
          </div>
          <div class="mt-4 rounded-xl p-4 border text-sm text-gray-600" style="background:#EEF6FB; border-color:#C8E8F8">
            <i class="fas fa-exclamation-circle mr-2" style="color:#1078C0"></i>
            ${t.lang==='it'?'Per informazioni fiscali personalizzate, si consiglia di consultare un commercialista. Per ricevere la ricevuta fiscale della tua donazione, scrivi a:':'For personalized tax advice, consult a tax advisor. To receive a fiscal receipt for your donation, write to:'}
            <a href="mailto:donazioni@sindromerenu.it" class="font-semibold ml-1 hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </div>
        </div>
      </div>

      <!-- CTA FINALE -->
      <div class="rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%)">
        <div class="p-10 text-center text-white">
          <i class="fas fa-hand-holding-heart text-5xl text-sky-300 mb-4"></i>
          <h2 class="text-3xl font-extrabold mb-3">
            ${t.lang==='it'?'Insieme possiamo fare la differenza':t.lang==='en'?'Together we can make a difference':'Ensemble nous pouvons faire la différence'}
          </h2>
          <p class="text-sky-200 text-base mb-8 max-w-xl mx-auto">
            ${t.lang==='it'?'Ogni donazione, grande o piccola, va direttamente a supportare le famiglie ReNU in Italia e la ricerca scientifica. Grazie dal profondo del cuore per ogni contributo.':'Every donation, big or small, goes directly to supporting ReNU families in Italy and scientific research. Thank you from the bottom of our hearts.'}
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://buonacausa.org" target="_blank"
               class="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition-colors hover:bg-sky-50" style="color:#082050">
              <i class="fas fa-hand-holding-heart"></i>
              ${t.lang==='it'?'Dona ora su BuonaCausa.org':'Donate on BuonaCausa.org'}
            </a>
            <a href="mailto:donazioni@sindromerenu.it"
               class="inline-flex items-center gap-2 bg-white bg-opacity-15 hover:bg-opacity-25 text-white font-semibold px-7 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-envelope"></i>
              ${t.lang==='it'?'Scrivi per informazioni':'Write for information'}
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>`
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function contactPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-envelope mr-3 text-sky-300"></i>${t.contact_title}</h1>
      <p class="text-sky-100 text-lg">${t.contact_intro}</p>

      <!-- BARRA DI RICERCA -->
      <div class="mt-6 relative max-w-xl">
        <input type="text" id="contactSearch"
               placeholder="${t.lang==='it'?'Cerca nel sito… (es. diagnosi, donazioni, terapie)':t.lang==='en'?'Search the site… (e.g. diagnosis, donations, therapies)':t.lang==='fr'?'Rechercher sur le site…':t.lang==='es'?'Buscar en el sitio…':'Suche auf der Website…'}"
               class="w-full px-5 py-3.5 pr-12 rounded-xl text-gray-800 text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
               oninput="doSearch(this.value)">
        <i class="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
      </div>
      <div id="searchResults" class="mt-3 rounded-xl overflow-hidden shadow-xl hidden"></div>
    </div>
  </section>
  <script>
  const siteIndex = [
    { title:'${t.lang==='it'?'Home':'Home'}', url:'/${t.lang}/home', keywords:'home benvenuto renu sindrome associazione' },
    { title:'${t.lang==='it'?'Cos\'è ReNU':'What is ReNU'}', url:'/${t.lang}/about', keywords:'about cos è renu sindrome gene rnu4-2 diagnosi caratteristiche sintomi' },
    { title:'${t.lang==='it'?'Ricerca':'Research'}', url:'/${t.lang}/research', keywords:'ricerca research studio indeed pubmed pubblicazioni scientifiche' },
    { title:'${t.lang==='it'?'Terapie':'Therapies'}', url:'/${t.lang}/therapies', keywords:'terapie fisioterapia logopedia feuerstein acquaticità nuoto musicoterapia aba' },
    { title:'${t.lang==='it'?'Diagnosi':'Diagnosis'}', url:'/${t.lang}/diagnosis', keywords:'diagnosi wgs wes sequenziamento genetico esoma genoma' },
    { title:'${t.lang==='it'?'Community':'Community'}', url:'/${t.lang}/community', keywords:'community famiglia genitori rete mappa instagram facebook' },
    { title:'${t.lang==='it'?'Sostienici':'Support Us'}', url:'/${t.lang}/donations', keywords:'donazioni sostieni iban buonacausa 5x1000 compleanno solidale matilde frontis' },
    { title:'${t.lang==='it'?'Contatti':'Contact'}', url:'/${t.lang}/contact', keywords:'contatti email telefono whatsapp info presidenza segreteria statuto' },
    { title:'${t.lang==='it'?'Brochure':'Brochures'}', url:'/${t.lang}/brochure', keywords:'brochure pdf scarica download materiali' },
    { title:'${t.lang==='it'?'Diventa Socio':'Become a Member'}', url:'/${t.lang}/members', keywords:'socio iscrizione quota associazione membro' },
    { title:'${t.lang==='it'?'Incontri ed Eventi':'Events'}', url:'/${t.lang}/events', keywords:'eventi incontri calendario manifestazioni' },
    { title:'${t.lang==='it'?'Progetti':'Projects'}', url:'/${t.lang}/projects', keywords:'progetti iniziative campagne awareness consapevolezza' },
    { title:'${t.lang==='it'?'FAQ & Diritti':'FAQ & Rights'}', url:'/${t.lang}/faq', keywords:'faq diritti tutele legge 104 pass auto disabilità card bonus scuola sostegno burocrazia inps' },
    { title:'${t.lang==='it'?'Terapie – Diritti e Tutele':'Therapies – Rights'}', url:'/${t.lang}/therapies#diritti', keywords:'diritti tutele rete famiglie 104 pass auto disabilità card bonus scuola' },
  ];
  function doSearch(q) {
    const res = document.getElementById('searchResults');
    if (!q || q.length < 2) { res.classList.add('hidden'); res.innerHTML=''; return; }
    const lq = q.toLowerCase();
    const hits = siteIndex.filter(s => s.title.toLowerCase().includes(lq) || s.keywords.toLowerCase().includes(lq));
    if (hits.length === 0) {
      res.innerHTML = '<div class="bg-white px-5 py-4 text-gray-500 text-sm">${t.lang==='it'?'Nessun risultato trovato.':'No results found.'}</div>';
    } else {
      res.innerHTML = hits.map(h =>
        '<a href="'+h.url+'" class="flex items-center gap-3 px-5 py-3.5 bg-white hover:bg-sky-50 border-b border-gray-100 transition-colors">'
        + '<i class="fas fa-arrow-right text-sky-500 text-xs"></i>'
        + '<span class="font-semibold text-gray-800">'+h.title+'</span>'
        + '<span class="text-gray-400 text-xs ml-auto">'+h.url+'</span>'
        + '</a>'
      ).join('');
    }
    res.classList.remove('hidden');
  }
  document.addEventListener('click', function(e) {
    if (!document.getElementById('contactSearch').contains(e.target) && !document.getElementById('searchResults').contains(e.target)) {
      document.getElementById('searchResults').classList.add('hidden');
    }
  });
  </script>
  <section class="py-16 px-4 section-light">
    <div class="max-w-3xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        ${[
          ['info@sindromerenu.it','ic-blue','fa-envelope',t.lang==='it'?'Info Generali':'General Info'],
          ['donazioni@sindromerenu.it','ic-red','fa-heart',t.lang==='it'?'Donazioni':'Donations'],
          ['segreteria@sindromerenu.it','ic-sky','fa-clipboard',t.lang==='it'?'Segreteria':'Secretariat'],
          ['presidenza@sindromerenu.it','ic-purple','fa-user-tie',t.lang==='it'?'Presidenza':'Presidency'],
        ].map(([email,ic,icon,label]) => `
        <a href="mailto:${email}" class="card p-5 flex items-center gap-4 group">
          <div class="ic ${ic}"><i class="fas ${icon}"></i></div>
          <div>
            <div class="font-bold group-hover:underline" style="color:#082050">${label}</div>
            <div class="text-sm group-hover:underline" style="color:#1078C0">${email}</div>
          </div>
        </a>`).join('')}
      </div>

      <!-- Phone & WhatsApp -->
      <div class="card card-sky p-6 mb-8 flex items-center gap-4">
        <div class="ic ic-sky flex-shrink-0"><i class="fas fa-phone text-xl"></i></div>
        <div>
          <div class="font-bold text-lg" style="color:#082050">
            ${t.lang==='it'?'Telefono / WhatsApp':'Phone / WhatsApp'}
          </div>
          <a href="tel:+393357301206" class="text-2xl font-extrabold hover:underline" style="color:#1078C0">+39 335 730 1206</a>
        </div>
      </div>

      <!-- Statuto dell'associazione -->
      <div class="card card-blue p-6 mb-8">
        <div class="flex items-start gap-4">
          <div class="ic ic-navy flex-shrink-0">
            <i class="fas fa-file-contract text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-1" style="color:#082050">
              ${t.lang==='it'?'Statuto Associativo':'Association Statute'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Consulta lo Statuto di Sindrome ReNU Italia APS – documento pubblico obbligatorio per le associazioni del Terzo Settore iscritte al RUNTS.':'Read the Statute of Sindrome ReNU Italia APS – mandatory public document for Third Sector organizations registered in RUNTS.'}
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/static/statuto-sindrome-renu-italia-aps.pdf" target="_blank"
                 class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors" style="background:#082050"
                 onclick="if(!this.href.includes('static/statuto')) { alert('${t.lang==='it'?'Documento in fase di caricamento. Contattaci a info@sindromerenu.it':'Document being uploaded. Contact us at info@sindromerenu.it'}'); return false; }">
                <i class="fas fa-download"></i>
                ${t.lang==='it'?'Scarica Statuto (PDF)':'Download Statute (PDF)'}
              </a>
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border-2" style="border-color:#1078C0; color:#1078C0; background:#EEF6FB">
                <i class="fas fa-clock"></i>
                ${t.lang==='it'?'Documento in pubblicazione':'Document being published'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- FORM CONTATTO GDPR-COMPLIANT -->
      <div class="card card-blue p-8 mb-8">
        <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-paper-plane" style="color:#1078C0"></i>
          ${t.lang==='it'?'Scrivici un messaggio':'Send us a message'}
        </h3>
        <p class="text-gray-500 text-sm mb-6">
          ${t.lang==='it'?'Ti risponderemo entro 48 ore lavorative.':'We will reply within 48 business hours.'}
        </p>
        <form id="contactForm" onsubmit="submitContactForm(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Nome *':'Name *'}
              </label>
              <input type="text" name="nome" required placeholder="${t.lang==='it'?'Il tuo nome':'Your name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Email *':'Email *'}
              </label>
              <input type="email" name="email" required placeholder="${t.lang==='it'?'La tua email':'Your email'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Oggetto':'Subject'}
            </label>
            <input type="text" name="oggetto" placeholder="${t.lang==='it'?'Es. Informazioni diagnosi ReNU…':'E.g. ReNU diagnosis info…'}"
                   class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Messaggio *':'Message *'}
            </label>
            <textarea name="messaggio" rows="4" required
                      placeholder="${t.lang==='it'?'Scrivi qui il tuo messaggio…':'Write your message here…'}"
                      class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 resize-none" style="border-color:#C8E8F8"></textarea>
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" name="consenso_gdpr" required id="contactPrivacy" class="mt-1 w-4 h-4 flex-shrink-0">
            <label for="contactPrivacy" class="text-xs text-gray-600">
              ${t.lang==='it'
                ? 'Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) per ricevere una risposta alla mia richiesta. I dati non saranno ceduti a terzi. <a href="/it/privacy" class="underline text-sky-600">Leggi l\'informativa privacy</a>.'
                : 'I consent to the processing of personal data pursuant to GDPR (EU Reg. 2016/679) to receive a reply to my request. Data will not be shared with third parties. <a href="/en/privacy" class="underline text-sky-600">Read the privacy policy</a>.'}
            </label>
          </div>
          <button type="submit" id="contactSubmitBtn"
                  class="w-full text-white font-bold py-3.5 rounded-xl text-base transition-colors" style="background: linear-gradient(135deg, #082050, #1078C0)">
            <i class="fas fa-paper-plane mr-2"></i>
            ${t.lang==='it'?'Invia messaggio':'Send message'}
          </button>
          <div id="contactFormMsg" class="hidden rounded-xl p-4 text-center font-semibold text-sm"></div>
        </form>
        <script>
        async function submitContactForm(e) {
          e.preventDefault();
          const form = e.target;
          const fd = new FormData(form);
          const msg = document.getElementById('contactFormMsg');
          const btn = document.getElementById('contactSubmitBtn');

          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${t.lang==='it'?'Invio in corso…':'Sending…'}';
          msg.className = 'rounded-xl p-4 text-center text-sm';
          msg.style.background = '#EFF6FF'; msg.style.color = '#1D4ED8';
          msg.textContent = '${t.lang==='it'?'Elaborazione…':'Processing…'}';
          msg.classList.remove('hidden');

          const payload = {
            nome: fd.get('nome'),
            email: fd.get('email'),
            oggetto: fd.get('oggetto') || '${t.lang==='it'?'Contatto dal sito':'Contact from website'}',
            messaggio: fd.get('messaggio'),
            consenso_gdpr: !!fd.get('consenso_gdpr'),
          };

          try {
            const res = await fetch('/api/contatti', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok && data.success) {
              msg.style.background = '#D1FAE5'; msg.style.color = '#065F46';
              msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>${t.lang==='it'?'✅ Messaggio inviato! Ti risponderemo entro 48 ore.':'✅ Message sent! We will reply within 48 hours.'}';
              form.reset();
              btn.innerHTML = '<i class="fas fa-check mr-2"></i>${t.lang==='it'?'Inviato!':'Sent!'}';
            } else {
              throw new Error(data.error || '${t.lang==='it'?'Errore invio':'Send error'}');
            }
          } catch (err) {
            msg.style.background = '#FEE2E2'; msg.style.color = '#991B1B';
            msg.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>${t.lang==='it'?'Errore. Scrivi direttamente a':'Error. Write directly to'} <a href="mailto:info@sindromerenu.it" class="underline font-bold">info@sindromerenu.it</a>';
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>${t.lang==='it'?'Invia messaggio':'Send message'}';
          }
        }
        </script>
      </div>

      <!-- Card info associazione -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <div class="flex items-center gap-4 mb-5">
          <img src="/images/logo.png" alt="Logo" class="h-16 w-auto drop-shadow">
          <div>
            <h2 class="text-xl font-bold">Sindrome ReNU Italia APS</h2>
            <p class="text-sky-200 text-sm">${t.footer_partnership}</p>
          </div>
        </div>
        <div class="space-y-2 text-sky-200 text-sm">
          <div class="flex items-center gap-2"><i class="fas fa-globe w-5 text-sky-400"></i><a href="https://www.sindromerenu.it" class="hover:text-white">www.sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:info@sindromerenu.it" class="hover:text-white">info@sindromerenu.it</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-phone w-5 text-sky-400"></i><a href="tel:+393357301206" class="hover:text-white">+39 335 730 1206</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope w-5 text-sky-400"></i><a href="mailto:Stefania.rocca@sindromerenu.it" class="hover:text-white">Stefania.rocca@sindromerenu.it</a></div>
        </div>
        <div class="flex gap-4 mt-5">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-2xl"></i></a>
          <a href="https://www.instagram.com/sindrome_renu_italia/" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-2xl"></i></a>
          <a href="https://www.renusyndrome.org" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fas fa-globe text-2xl"></i></a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── BROCHURE PAGE ────────────────────────────────────────────────────────────
function brochurePage(t: Record<string, string>): string {
  const brochures = [
    { file: 'brochure-insieme-facciamo-differenza.pdf', thumb: 'CTEp6mH2',
      title: t.lang==='it'?'Insieme, facciamo la differenza':t.lang==='en'?'Together we make a difference':t.lang==='fr'?'Ensemble nous faisons la différence':t.lang==='es'?'Juntos hacemos la diferencia':'Gemeinsam machen wir den Unterschied',
      desc:  t.lang==='it'?'SINDROME ReNU ITALIA APS – Sostieni la nostra missione':'SINDROME ReNU ITALIA APS – Support our mission' },
    { file: 'brochure-nata-renu-italia.pdf', thumb: 'GbPysspb',
      title: t.lang==='it'?'È nata Sindrome ReNU Italia APS!':t.lang==='en'?'ReNU Syndrome Italy APS is born!':t.lang==='fr'?'Le syndrome ReNU Italie APS est né!':t.lang==='es'?'¡Ha nacido Síndrome ReNU Italia APS!':'ReNU-Syndrom Italien APS ist gegründet!',
      desc:  t.lang==='it'?'La nostra associazione è finalmente realtà':'Our association is finally a reality' },
    { file: 'brochure-finalmente-realta.pdf', thumb: 'HE4kWb3R',
      title: t.lang==='it'?'Finalmente Realtà':'Finally Reality',
      desc:  t.lang==='it'?'Contribuisci con un gesto concreto':'Contribute with a concrete gesture' },
    { file: 'brochure-donazione-cuore.pdf', thumb: 'Haieyn55',
      title: t.lang==='it'?'Una donazione dal cuore':'A donation from the heart',
      desc:  t.lang==='it'?'Un piccolo gesto può fare la differenza':'A small gesture can make a difference' },
    { file: 'brochure-un-gesto-speranza.pdf', thumb: 'nBeYaQkm',
      title: t.lang==='it'?'Un gesto, una speranza':'A gesture, a hope',
      desc:  t.lang==='it'?'Un piccolo aiuto può cambiare una vita':'A small help can change a life' },
    { file: 'brochure-potete-contare.pdf', thumb: 'oi3JFkgN',
      title: t.lang==='it'?'Potete contare sul nostro sostegno':'You can count on our support',
      desc:  t.lang==='it'?'Insieme facciamo la differenza':'Together we make a difference' },
    { file: 'brochure-fai-differenza.pdf', thumb: 'tezKurU2',
      title: t.lang==='it'?'Fai la differenza oggi':'Make the difference today',
      desc:  t.lang==='it'?'Ogni contributo conta':'Every contribution counts' },
    { file: 'brochure-vuole-differenza.pdf', thumb: 'wrScJxVD',
      title: t.lang==='it'?'Vuole fare la differenza':'Wants to make a difference',
      desc:  t.lang==='it'?'Un gesto semplice può fare una grande differenza':'A simple gesture can make a big difference' },
  ]
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <div style="display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,0.15);margin-bottom:1.25rem;">
        <i class="fas fa-file-pdf" style="font-size:2rem;color:#BAE6FD;"></i>
      </div>
      <h1 class="text-4xl font-extrabold mb-3">${t.brochure_title}</h1>
      <p class="text-sky-100 text-lg max-w-2xl mx-auto">${t.brochure_intro}</p>
    </div>
  </section>

  <style>
    .brochure-card {
      background:#fff;
      border-radius:1.25rem;
      box-shadow:0 2px 12px rgba(8,32,80,0.08);
      overflow:hidden;
      display:flex;
      flex-direction:column;
      transition:transform .25s,box-shadow .25s;
    }
    .brochure-card:hover {
      transform:translateY(-6px);
      box-shadow:0 16px 40px rgba(8,32,80,0.16);
    }
    .brochure-thumb-wrap {
      width:100%;
      background:#f0f7ff;
      padding:14px 14px 10px;
      position:relative;
    }
    .brochure-thumb-wrap img {
      display:block;
      width:100%;
      height:auto;
      border-radius:6px;
      box-shadow:0 4px 16px rgba(8,32,80,0.15);
    }
    .brochure-body {
      padding:1.25rem;
      display:flex;
      flex-direction:column;
      flex:1;
      border-top:3px solid #1078C0;
    }
    .brochure-btn {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:.5rem;
      background:#1078C0;
      color:#fff;
      border:none;
      border-radius:.6rem;
      padding:.65rem 1rem;
      font-size:.875rem;
      font-weight:600;
      text-decoration:none;
      cursor:pointer;
      transition:background .2s;
      margin-top:auto;
    }
    .brochure-btn:hover { background:#082050; }
    .brochure-grid {
      display:grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap:1.75rem;
    }
    @media(max-width:640px){
      .brochure-grid { grid-template-columns:1fr 1fr; gap:1rem; }
    }
  </style>

  <section style="padding:3.5rem 1.5rem;background:#EEF6FB;">
    <div style="max-width:1100px;margin:0 auto;">

      <div class="brochure-grid">
        ${brochures.map((b,i) => `
        <div class="brochure-card">
          <div class="brochure-thumb-wrap">
            <img src="/brochure/thumbnails/${b.thumb}.png" alt="${b.title}"
                 onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:200px;\\'><i class=\\'fas fa-file-pdf\\' style=\\'font-size:4rem;color:#1078C0;\\'></i></div>'">
          </div>
          <div class="brochure-body">
            <div style="font-size:.65rem;font-weight:700;color:#1078C0;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.35rem;">
              <i class="fas fa-file-pdf" style="margin-right:.25rem;"></i>Brochure ${i+1}
            </div>
            <h3 style="font-size:.95rem;font-weight:700;color:#082050;margin-bottom:.4rem;line-height:1.35;">${b.title}</h3>
            <p style="font-size:.8rem;color:#64748b;margin-bottom:1rem;flex:1;">${b.desc}</p>
            <a href="/brochure/${b.file}" download class="brochure-btn">
              <i class="fas fa-download"></i>${t.brochure_download}
            </a>
          </div>
        </div>`).join('')}
      </div>

      <!-- Download all banner -->
      <div style="margin-top:3rem;border-radius:1.5rem;padding:2.5rem 2rem;text-align:center;color:#fff;background:linear-gradient(135deg,#082050 0%,#1078C0 100%);box-shadow:0 8px 32px rgba(8,32,80,0.25);">
        <i class="fas fa-file-archive" style="font-size:3rem;color:#BAE6FD;display:block;margin-bottom:1rem;"></i>
        <h2 style="font-size:1.6rem;font-weight:800;margin-bottom:.5rem;">
          ${t.lang==='it'?'Scarica tutte le brochure':t.lang==='en'?'Download all brochures':t.lang==='fr'?'Télécharger toutes les brochures':t.lang==='es'?'Descargar todos los folletos':'Alle Broschüren herunterladen'}
        </h2>
        <p style="color:#BAE6FD;margin-bottom:1.75rem;max-width:540px;margin-left:auto;margin-right:auto;">
          ${t.lang==='it'?'Condividi le nostre brochure per diffondere la consapevolezza sulla Sindrome ReNU in Italia.':t.lang==='en'?'Share our brochures to spread awareness about ReNU Syndrome in Italy.':'Partagez nos brochures pour sensibiliser à la maladie ReNU.'}
        </p>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem;">
          ${brochures.map(b => `
          <a href="/brochure/${b.file}" download
             style="display:inline-flex;align-items:center;gap:.4rem;background:rgba(255,255,255,0.18);color:#fff;padding:.5rem 1rem;border-radius:.5rem;font-size:.8rem;font-weight:600;text-decoration:none;transition:background .2s;"
             onmouseover="this.style.background='rgba(255,255,255,0.30)'" onmouseout="this.style.background='rgba(255,255,255,0.18)'">
            <i class="fas fa-download" style="font-size:.7rem;"></i>${b.title}
          </a>`).join('')}
        </div>
      </div>

    </div>
  </section>`
}

// ─── EVENTS PAGE ──────────────────────────────────────────────────────────────
function eventsPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-calendar-alt mr-3 text-sky-300"></i>
        ${t.lang==='it'?'Incontri ed Eventi':'Events & Meetings'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Tutti gli appuntamenti, gli incontri tra famiglie e le iniziative di Sindrome ReNU Italia APS.':'All appointments, family meetings and initiatives of Sindrome ReNU Italia APS.'}
      </p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Prossimi eventi -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-star" style="color:#F59E0B"></i>
        ${t.lang==='it'?'Prossimi Appuntamenti':'Upcoming Events'}
      </h2>

      <!-- Placeholder evento in arrivo -->
      <div class="card card-amber p-8 mb-6 flex flex-col md:flex-row items-start gap-6">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white font-extrabold" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <span class="text-2xl leading-none">2026</span>
            <span class="text-xs mt-1">2026</span>
          </div>
        </div>
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-3" style="background:#FEF3C7; color:#92400E">
            <i class="fas fa-clock"></i>
            ${t.lang==='it'?'In definizione':'To be announced'}
          </div>
          <h3 class="font-bold text-xl mb-2" style="color:#082050">
            ${t.lang==='it'?'Primo Incontro Famiglie ReNU Italia':'First ReNU Italia Family Meeting'}
          </h3>
          <p class="text-gray-600 mb-3">
            ${t.lang==='it'?'Il primo incontro ufficiale tra le famiglie italiane con un bambino o giovane adulto con Sindrome ReNU. Data, luogo e programma in fase di definizione da parte del Consiglio Direttivo.':'The first official meeting between Italian families with a child or young adult with ReNU Syndrome. Date, location and agenda being defined by the Board of Directors.'}
          </p>
          <p class="text-sm font-semibold" style="color:#1078C0">
            <i class="fas fa-envelope mr-1"></i>
            ${t.lang==='it'?'Per informazioni:':'For info:'} <a href="mailto:info@sindromerenu.it" class="underline">info@sindromerenu.it</a>
          </p>
        </div>
      </div>

      <!-- Nessun altro evento -->
      <div class="rounded-2xl p-8 text-center mb-10" style="background:#EEF6FB; border: 2px dashed #45B8EC">
        <i class="fas fa-calendar-plus text-5xl mb-4 block" style="color:#45B8EC"></i>
        <h3 class="font-bold text-xl mb-2" style="color:#082050">
          ${t.lang==='it'?'Nuovi eventi in arrivo!':'New events coming soon!'}
        </h3>
        <p class="text-gray-600 mb-4">
          ${t.lang==='it'?'Segui i nostri canali social per essere il primo a sapere di incontri, webinar e iniziative di sensibilizzazione.':'Follow our social channels to be the first to know about meetings, webinars and awareness initiatives.'}
        </p>
        <div class="flex justify-center gap-3 flex-wrap">
          <a href="https://www.facebook.com/groups/1268033701594892" target="_blank"
             class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#1877F2">
            <i class="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com/sindrome_renu_italia/" target="_blank"
             class="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm" style="background:#E1306C">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <!-- Sezione eventi passati (placeholder) -->
      <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-2" style="color:#082050">
        <i class="fas fa-history" style="color:#1078C0"></i>
        ${t.lang==='it'?'Eventi Passati':'Past Events'}
      </h2>
      <div class="card p-6 text-center" style="background:#F8FAFC; border: 1px solid #E2E8F0">
        <i class="fas fa-archive text-3xl mb-3 block text-gray-300"></i>
        <p class="text-gray-500 text-sm">
          ${t.lang==='it'?'L\'associazione è nata nel 2024. Gli eventi passati saranno documentati qui.':'The association was founded in 2024. Past events will be documented here.'}
        </p>
      </div>

      <!-- Proponi un evento -->
      <div class="mt-10 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-lightbulb text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${t.lang==='it'?'Hai un\'idea per un evento?':'Have an event idea?'}
        </h3>
        <p class="text-sky-100 mb-5">
          ${t.lang==='it'?'Scrivici! Accogliamo proposte di incontri, webinar, eventi sportivi, iniziative di sensibilizzazione e molto altro.':'Write to us! We welcome proposals for meetings, webinars, sports events, awareness initiatives and more.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Proposta evento':'Event proposal')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base transition-colors hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${t.lang==='it'?'Proponi un evento':'Propose an event'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function projectsPage(t: Record<string, string>): string {
  const projects = [
    {
      icon: 'fa-map-marked-alt', ic: 'ic-sky',
      title: t.lang==='it'?'Mappa Famiglie Italiane':'Italian Families Map',
      status: t.lang==='it'?'In sviluppo':'In development',
      statusColor: '#F59E0B', statusBg: '#FEF3C7',
      desc: t.lang==='it'?'Una mappa interattiva delle famiglie italiane con un bambino o adulto con Sindrome ReNU, per connettersi, condividere esperienze e costruire una rete di supporto. La pubblicazione è subordinata alla raccolta dei consensi GDPR.':'An interactive map of Italian families with a child or adult with ReNU Syndrome, to connect, share experiences and build a support network. Publication is subject to GDPR consent collection.',
    },
    {
      icon: 'fa-book-medical', ic: 'ic-navy',
      title: t.lang==='it'?'Registro Nazionale Pazienti ReNU':'National ReNU Patient Registry',
      status: t.lang==='it'?'In definizione':'Being defined',
      statusColor: '#1078C0', statusBg: '#EEF6FB',
      desc: t.lang==='it'?'Progetto di raccolta dati anonimizzata dei pazienti italiani con Sindrome ReNU, in collaborazione con il Comitato Scientifico presieduto dalla Dr.ssa Donatella Milani. Sarà coordinato con i centri diagnostici italiani.':'Anonymous data collection project for Italian patients with ReNU Syndrome, in collaboration with the Scientific Committee chaired by Dr. Donatella Milani. Will be coordinated with Italian diagnostic centers.',
    },
    {
      icon: 'fa-graduation-cap', ic: 'ic-purple',
      title: t.lang==='it'?'Percorso Scuola ReNU':'ReNU School Pathway',
      status: t.lang==='it'?'In pianificazione':'In planning',
      statusColor: '#7C3AED', statusBg: '#F5F3FF',
      desc: t.lang==='it'?'Materiali e linee guida per supportare insegnanti, educatori e scuole nell\'inclusione dei bambini con Sindrome ReNU. Opuscoli, schede informative e contatti con esperti.':'Materials and guidelines to support teachers, educators and schools in including children with ReNU Syndrome. Brochures, information sheets and expert contacts.',
    },
    {
      icon: 'fa-heartbeat', ic: 'ic-red',
      title: t.lang==='it'?'Campagna Consapevolezza Pediatri':'Pediatrician Awareness Campaign',
      status: t.lang==='it'?'In pianificazione':'In planning',
      statusColor: '#DC2626', statusBg: '#FEF2F2',
      desc: t.lang==='it'?'Campagna di sensibilizzazione rivolta ai pediatri italiani sulla Sindrome ReNU: distribuzione di materiali informativi, contatti con società scientifiche e ordini medici per ridurre i tempi di diagnosi.':'Awareness campaign targeting Italian pediatricians on ReNU Syndrome: distribution of informational materials, contacts with scientific societies and medical associations to reduce diagnostic times.',
    },
    {
      icon: 'fa-trophy', ic: 'ic-amber',
      title: 'Move 4 ReNU Italia',
      status: t.lang==='it'?'Attivo – internazionale':'Active – international',
      statusColor: '#059669', statusBg: '#D1FAE5',
      desc: t.lang==='it'?'Partecipa alla campagna sportiva internazionale Move 4 ReNU per raccogliere fondi per la ricerca sulla Sindrome ReNU. Ogni chilometro percorso conta!':'Participate in the international sports campaign Move 4 ReNU to raise funds for ReNU Syndrome research. Every kilometre counts!',
      link: 'https://www.zeffy.com/en-US/peer-to-peer/move-4-renu',
    },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-rocket mr-3 text-sky-300"></i>
        ${t.lang==='it'?'Progetti':'Projects'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Le iniziative e i progetti di Sindrome ReNU Italia APS per supportare famiglie, ricerca e consapevolezza.':'The initiatives and projects of Sindrome ReNU Italia APS to support families, research and awareness.'}
      </p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">
      <div class="space-y-6">
        ${projects.map(p => `
        <div class="card p-7 flex flex-col md:flex-row gap-5">
          <div class="flex-shrink-0">
            <div class="ic ${p.ic} w-16 h-16">
              <i class="fas ${p.icon} text-2xl"></i>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="font-extrabold text-xl" style="color:#082050">${p.title}</h3>
              <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full"
                    style="background:${p.statusBg}; color:${p.statusColor}">
                <i class="fas fa-circle text-xs"></i>${p.status}
              </span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-3">${p.desc}</p>
            ${p.link ? `
            <a href="${p.link}" target="_blank"
               class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-external-link-alt text-xs"></i>${t.lang==='it'?'Partecipa ora':'Join now'}
            </a>` : `
            <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Info progetto '+p.title:'Project info '+p.title)}"
               class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors" style="background:#EEF6FB; color:#082050; border:1px solid #45B8EC">
              <i class="fas fa-envelope text-xs"></i>${t.lang==='it'?'Ricevi aggiornamenti':'Get updates'}
            </a>`}
          </div>
        </div>`).join('')}
      </div>

      <!-- Proponi un progetto -->
      <div class="mt-10 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-plus-circle text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${t.lang==='it'?'Hai un\'idea per un progetto?':'Have a project idea?'}
        </h3>
        <p class="text-sky-100 mb-5">
          ${t.lang==='it'?'Siamo un\'associazione di famiglie: ogni idea è preziosa. Scrivici a info@sindromerenu.it per proporre collaborazioni, iniziative e campagne.':'We are a family association: every idea is valuable. Write to us at info@sindromerenu.it to propose collaborations, initiatives and campaigns.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Proposta progetto':'Project proposal')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${t.lang==='it'?'Proponi un progetto':'Propose a project'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── MEMBERS PAGE (DIVENTA SOCIO) ─────────────────────────────────────────────
function membersPage(t: Record<string, string>): string {
  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-id-card mr-3 text-sky-300"></i>
        ${t.lang==='it'?'Diventa Socio':'Become a Member'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Entra a far parte di Sindrome ReNU Italia APS: insieme siamo più forti.':'Join Sindrome ReNU Italia APS: together we are stronger.'}
      </p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Banner approvazione CDA -->
      <div class="rounded-2xl p-6 mb-10 flex items-start gap-4" style="background:#FEF3C7; border: 2px solid #F59E0B">
        <i class="fas fa-clock text-3xl mt-1 flex-shrink-0" style="color:#D97706"></i>
        <div>
          <h3 class="font-bold text-xl mb-1" style="color:#92400E">
            ${t.lang==='it'?'In attesa di delibera del Consiglio Direttivo':'Pending Board of Directors resolution'}
          </h3>
          <p class="text-amber-800 text-sm leading-relaxed">
            ${t.lang==='it'?'La quota associativa e le modalità di iscrizione sono in fase di definizione da parte del Consiglio Direttivo. Questa pagina sarà aggiornata non appena il CDA avrà approvato il regolamento. Per essere informato/a in anticipo, iscriviti alla nostra newsletter o scrivici a info@sindromerenu.it.':'The membership fee and registration procedures are being defined by the Board of Directors. This page will be updated as soon as the Board has approved the regulations. To be informed in advance, subscribe to our newsletter or write to us at info@sindromerenu.it.'}
          </p>
        </div>
      </div>

      <!-- Perché diventare socio -->
      <h2 class="text-2xl font-extrabold mb-6" style="color:#082050">
        ${t.lang==='it'?'Perché diventare socio?':'Why become a member?'}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        ${[
          ['fa-users','ic-blue', t.lang==='it'?'Comunità':'Community', t.lang==='it'?'Entra a far parte della rete italiana di famiglie ReNU. Incontra chi vive la tua stessa esperienza.':'Join the Italian ReNU family network. Meet those who share your experience.'],
          ['fa-vote-yea','ic-navy', t.lang==='it'?'Voce in capitolo':'Decision power', t.lang==='it'?'I soci hanno diritto di voto nelle assemblee e possono candidarsi negli organi associativi.':'Members have voting rights in assemblies and can stand for election in association bodies.'],
          ['fa-newspaper','ic-sky', t.lang==='it'?'Aggiornamenti esclusivi':'Exclusive updates', t.lang==='it'?'Ricevi notizie in anteprima su ricerche, terapie, eventi e iniziative di Sindrome ReNU Italia APS.':'Receive advance news on research, therapies, events and initiatives from Sindrome ReNU Italia APS.'],
          ['fa-handshake','ic-green', t.lang==='it'?'Supporto concreto':'Concrete support', t.lang==='it'?'Accedi ai servizi dell\'associazione: orientamento diagnostico, supporto burocratico, rete di professionisti.':'Access the association\'s services: diagnostic guidance, bureaucratic support, professional network.'],
          ['fa-heart','ic-red', t.lang==='it'?'Sostieni la causa':'Support the cause', t.lang==='it'?'La quota associativa contribuisce direttamente alle attività dell\'associazione: eventi, materiali, ricerca.':'The membership fee contributes directly to the association\'s activities: events, materials, research.'],
          ['fa-shield-alt','ic-purple', t.lang==='it'?'Diritti e tutela':'Rights & protection', t.lang==='it'?'Accedi alle informazioni su diritti, tutele legali, detrazioni fiscali e agevolazioni per le famiglie ReNU.':'Access information on rights, legal protections, tax deductions and benefits for ReNU families.'],
        ].map(([icon, ic, title, desc]) => `
        <div class="card p-6 flex gap-4">
          <div class="ic ${ic} flex-shrink-0"><i class="fas ${icon} text-lg"></i></div>
          <div>
            <h3 class="font-bold mb-1" style="color:#082050">${title}</h3>
            <p class="text-gray-600 text-sm">${desc}</p>
          </div>
        </div>`).join('')}
      </div>

      <!-- Quote previsionali (placeholder) -->
      <div class="card card-navy p-8 mb-10">
        <h3 class="font-bold text-xl mb-4 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-tag" style="color:#1078C0"></i>
          ${t.lang==='it'?'Quote Associative (in definizione)':'Membership Fees (being defined)'}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${[
            ['fa-child','ic-sky', t.lang==='it'?'Socio Familiare':'Family Member', t.lang==='it'?'Famiglie con un bambino/adulto con Sindrome ReNU':'Families with a child/adult with ReNU Syndrome'],
            ['fa-user','ic-blue', t.lang==='it'?'Socio Sostenitore':'Supporting Member', t.lang==='it'?'Chiunque voglia sostenere la causa ReNU':'Anyone who wants to support the ReNU cause'],
            ['fa-building','ic-navy', t.lang==='it'?'Socio Onorario':'Honorary Member', t.lang==='it'?'Su nomina del Consiglio Direttivo':'By appointment of the Board of Directors'],
          ].map(([icon, ic, title, desc]) => `
          <div class="rounded-xl p-5 text-center" style="background:#EEF6FB; border: 1px solid #45B8EC">
            <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon}"></i></div>
            <h4 class="font-bold mb-1" style="color:#082050">${title}</h4>
            <p class="text-gray-500 text-xs mb-3">${desc}</p>
            <div class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style="background:#FEF3C7; color:#92400E">
              <i class="fas fa-clock text-xs"></i>
              ${t.lang==='it'?'Quota in definizione':'Fee being defined'}
            </div>
          </div>`).join('')}
        </div>
        <p class="text-gray-500 text-xs mt-4 flex items-center gap-1">
          <i class="fas fa-info-circle" style="color:#45B8EC"></i>
          ${t.lang==='it'?'Le quote definitive saranno comunicate dopo l\'approvazione del CDA. Per informazioni scrivi a':'Final fees will be communicated after Board approval. For information write to'}
          <a href="mailto:segreteria@sindromerenu.it" class="underline" style="color:#1078C0">segreteria@sindromerenu.it</a>
        </p>
      </div>

      <!-- FORM PRE-ADESIONE -->
      <div class="mt-10 card card-navy p-8">
        <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-user-plus" style="color:#1078C0"></i>
          ${t.lang==='it'?'Pre-Iscrizione – Lista d\'Attesa':'Pre-Registration – Waiting List'}
        </h3>
        <p class="text-gray-600 text-sm mb-6">
          ${t.lang==='it'?'Compila il form per essere inserito/a nella lista di attesa. Riceverai tutte le comunicazioni sull\'iscrizione appena il Consiglio Direttivo avrà approvato le modalità (quota, metodo di pagamento, statuto).':'Fill in the form to be added to the waiting list. You will receive all communications about registration as soon as the Board of Directors approves the procedures.'}
        </p>
        <form id="preIscrForm" onsubmit="submitPreIscr(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Nome *':'First Name *'}
              </label>
              <input type="text" name="nome" required placeholder="${t.lang==='it'?'Il tuo nome':'Your first name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Cognome *':'Last Name *'}
              </label>
              <input type="text" name="cognome" required placeholder="${t.lang==='it'?'Il tuo cognome':'Your last name'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Email *':'Email *'}
            </label>
            <input type="email" name="email" required placeholder="${t.lang==='it'?'La tua email':'Your email'}"
                   class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Città':'City'}
              </label>
              <input type="text" name="citta" placeholder="${t.lang==='it'?'La tua città':'Your city'}"
                     class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" style="border-color:#C8E8F8">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1" style="color:#082050">
                ${t.lang==='it'?'Tipo di socio':'Member type'}
              </label>
              <select name="tipo" class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" style="border-color:#C8E8F8">
                <option value="familiare">${t.lang==='it'?'Socio Familiare (genitore/tutore di bambino ReNU)':'Family Member (parent/guardian of ReNU child)'}</option>
                <option value="sostenitore">${t.lang==='it'?'Socio Sostenitore (simpatizzo/donatore)':'Supporting Member (supporter/donor)'}</option>
                <option value="professionista">${t.lang==='it'?'Professionista (medico, terapista, educatore)':'Professional (doctor, therapist, educator)'}</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1" style="color:#082050">
              ${t.lang==='it'?'Come hai conosciuto Sindrome ReNU Italia APS?':'How did you hear about Sindrome ReNU Italia APS?'}
            </label>
            <textarea name="come_hai_trovato" rows="2" placeholder="${t.lang==='it'?'Facebook, Instagram, medico, altra famiglia...':'Facebook, Instagram, doctor, another family...'}"
                      class="w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 resize-none" style="border-color:#C8E8F8"></textarea>
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" name="privacy" required id="privacyCheck" class="mt-1 w-4 h-4 flex-shrink-0">
            <label for="privacyCheck" class="text-xs text-gray-600">
              ${t.lang==='it'?'Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) per la gestione della lista d\'attesa di Sindrome ReNU Italia APS. I dati non saranno ceduti a terzi.':'I consent to the processing of personal data pursuant to GDPR (EU Reg. 2016/679) for the management of the Sindrome ReNU Italia APS waiting list. Data will not be shared with third parties.'}
            </label>
          </div>
          <button type="submit"
                  class="w-full text-white font-bold py-3.5 rounded-xl text-base transition-colors" style="background: linear-gradient(135deg, #082050, #1078C0)">
            <i class="fas fa-paper-plane mr-2"></i>
            ${t.lang==='it'?'Invia la mia pre-iscrizione':'Send my pre-registration'}
          </button>
          <div id="preIscrMsg" class="hidden rounded-xl p-4 text-center font-semibold text-sm"></div>
        </form>
        <script>
        async function submitPreIscr(e) {
          e.preventDefault();
          const form = e.target;
          const fd = new FormData(form);
          const msg = document.getElementById('preIscrMsg');
          const btn = form.querySelector('button[type=submit]');

          // Show loading state
          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${t.lang==='it'?'Invio in corso…':'Sending…'}';
          msg.className = 'rounded-xl p-4 text-center text-sm';
          msg.style.background = '#EFF6FF'; msg.style.color = '#1D4ED8';
          msg.textContent = '${t.lang==='it'?'Elaborazione in corso…':'Processing…'}';
          msg.classList.remove('hidden');

          const payload = {
            nome: fd.get('nome'),
            cognome: fd.get('cognome'),
            email: fd.get('email'),
            citta: fd.get('citta') || '',
            tipo: fd.get('tipo') || 'lista_attesa',
            come_conosciuto: fd.get('come_hai_trovato') || '',
            consenso_gdpr: fd.get('privacy') === 'on' || !!fd.get('privacy'),
          };

          try {
            const res = await fetch('/api/lista-attesa', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok && data.success) {
              msg.style.background = '#D1FAE5'; msg.style.color = '#065F46';
              msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>${t.lang==='it'?'✅ Iscrizione completata! Ti contatteremo appena sarà definita la quota associativa.':'✅ Registration complete! We will contact you as soon as the membership fee is set.'}';
              form.reset();
              btn.innerHTML = '<i class="fas fa-check mr-2"></i>${t.lang==='it'?'Inviato con successo':'Successfully sent'}';
            } else {
              throw new Error(data.error || JSON.stringify(data.errors || {}));
            }
          } catch (err) {
            msg.style.background = '#FEE2E2'; msg.style.color = '#991B1B';
            msg.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>${t.lang==='it'?'Errore. Riprova o scrivi a':'Error. Retry or write to'} <a href="mailto:segreteria@sindromerenu.it" class="underline font-bold">segreteria@sindromerenu.it</a>';
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>${t.lang==='it'?'Invia la mia pre-iscrizione':'Send my pre-registration'}';
          }
        }
        </script>
      </div>

      <!-- CTA alternativa -->
      <div class="mt-6 rounded-2xl p-6 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <p class="text-sky-100 text-sm mb-3">
          ${t.lang==='it'?'Preferisci scrivere direttamente?':'Prefer to write directly?'}
        </p>
        <a href="mailto:segreteria@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Voglio diventare socio/a':'I want to become a member')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-envelope"></i> segreteria@sindromerenu.it
        </a>
      </div>
    </div>
  </section>`
}

// ─── FAQ / GUIDA ANTI-BUROCRAZIA ─────────────────────────────────────────────
function faqPage(t: Record<string, string>): string {
  const topics = [
    {
      icon: 'fa-id-card', ic: 'ic-blue', id: 'legge104',
      title: t.lang==='it'?'Come richiedere la Legge 104':'How to apply for Law 104',
      steps: t.lang==='it' ? [
        'Rivolgersi al proprio medico di base per ottenere il verbale di valutazione dell\'handicap.',
        'Presentare domanda all\'INPS tramite il sito inps.it o tramite un patronato (gratuito).',
        'Attendere la convocazione della Commissione Medica ASL (può richiedere alcuni mesi).',
        'In caso di urgenza documentata, è possibile richiedere la visita d\'urgenza.',
        'Ottenuto il verbale di handicap grave (art. 3 comma 3), si può procedere con le agevolazioni lavorative e scolastiche.',
      ] : [
        'Ask your family doctor for a disability assessment report.',
        'Submit an application to INPS via inps.it or through a free patronato.',
        'Wait for the Medical Commission (ASL) appointment (may take several months).',
        'In documented urgent cases, you can request an urgent visit.',
        'Once the severe disability certificate (art. 3 comma 3) is obtained, you can proceed with work and school benefits.',
      ],
      note: t.lang==='it'?'💡 Puoi usare l\'app "Sindrome ReNU Italia" o scrivere a info@sindromerenu.it per ricevere supporto nella procedura.':'💡 Contact info@sindromerenu.it for support during the procedure.',
    },
    {
      icon: 'fa-car', ic: 'ic-purple', id: 'passauto',
      title: t.lang==='it'?'Come richiedere il Pass Auto (Contrassegno Disabile)':'How to get the Disabled Car Badge',
      steps: t.lang==='it' ? [
        'Il bambino con Sindrome ReNU può avere diritto al contrassegno se ha difficoltà deambulatorie.',
        'Rivolgersi al proprio medico di base per ottenere una certificazione medica specifica.',
        'Presentare la domanda all\'Ufficio Anagrafe del Comune di residenza.',
        'Il Comune rilascia il contrassegno dopo visita della commissione medica locale.',
        'Il contrassegno ha validità 5 anni (o permanente) e si rinnova con nuova certificazione.',
      ] : [
        'A ReNU child may qualify for the badge if they have walking difficulties.',
        'Ask your family doctor for a specific medical certificate.',
        'Submit the application to the Registry Office of your municipality.',
        'The municipality issues the badge after a local medical commission visit.',
        'The badge is valid for 5 years (or permanently) and renewed with new certification.',
      ],
      note: t.lang==='it'?'💡 Il contrassegno permette la sosta in zone riservate, nelle ZTL e agevolazioni sui parcheggi.':'💡 The badge allows parking in reserved areas, ZTL zones and parking discounts.',
    },
    {
      icon: 'fa-id-badge', ic: 'ic-sky', id: 'disabilitycard',
      title: t.lang==='it'?'Come ottenere la Disability Card (Carta Europea della Disabilità)':'How to get the Disability Card',
      steps: t.lang==='it' ? [
        'La Disability Card si richiede tramite il sito INPS (myINPS) dopo aver ottenuto il riconoscimento di invalidità.',
        'È necessario avere il verbale di invalidità civile, cecità, sordità o handicap (Legge 104).',
        'Accedere a inps.it con SPID o CIE, cercare "Carta Europea della Disabilità".',
        'La card è gratuita e viene spedita a casa.',
        'Dà accesso ad agevolazioni in musei, trasporti, strutture pubbliche e private convenzionate.',
      ] : [
        'The Disability Card is requested via the INPS website (myINPS) after obtaining disability recognition.',
        'You need the civil disability, blindness, deafness or handicap certificate (Law 104).',
        'Log in to inps.it with SPID or CIE, search for "European Disability Card".',
        'The card is free and sent home.',
        'Provides benefits at museums, transport, public and private facilities.',
      ],
      note: t.lang==='it'?'💡 La Disability Card è valida in tutta Europa ed è diversa dal contrassegno auto.':'💡 The Disability Card is valid throughout Europe and is different from the car badge.',
    },
    {
      icon: 'fa-graduation-cap', ic: 'ic-green', id: 'scuola',
      title: t.lang==='it'?'Come richiedere il sostegno scolastico':'How to request school support',
      steps: t.lang==='it' ? [
        'Ottenere la certificazione di disabilità (Legge 104 art. 3 comma 1 o 3) e la diagnosi funzionale.',
        'Presentare la documentazione alla scuola prima dell\'inizio dell\'anno scolastico.',
        'La scuola convoca il GLHO (Gruppo di Lavoro Operativo) per la definizione del PEI (Piano Educativo Individualizzato).',
        'L\'insegnante di sostegno viene assegnato dall\'USR (Ufficio Scolastico Regionale).',
        'In caso di diniego o ore insufficienti, si può fare ricorso tramite il Difensore Civico o un legale.',
      ] : [
        'Obtain the disability certificate (Law 104 art. 3 comma 1 or 3) and functional diagnosis.',
        'Submit documentation to the school before the start of the school year.',
        'The school convenes the GLHO to define the PEI (Individual Educational Plan).',
        'The support teacher is assigned by the Regional School Office (USR).',
        'If denied or hours are insufficient, you can appeal via the Civil Ombudsman or a lawyer.',
      ],
      note: t.lang==='it'?'💡 Hai diritto al PEI anche alla scuola dell\'infanzia. Non aspettare le elementari!':'💡 You have the right to a PEI even in nursery school. Don\'t wait for primary school!',
    },
    {
      icon: 'fa-money-bill-wave', ic: 'ic-amber', id: 'bonus',
      title: t.lang==='it'?'Quali bonus e agevolazioni sono accessibili':'Which bonuses and benefits are available',
      steps: t.lang==='it' ? [
        'Indennità di Accompagnamento INPS: per chi non è in grado di deambulare o compiere gli atti quotidiani. Importo attuale circa 530 €/mese.',
        'Assegno Unico INPS: spettante a tutti i figli fino a 21 anni, con maggiorazione per figli disabili.',
        'Detrazione IRPEF del 19% per spese mediche, riabilitative e di assistenza specifica.',
        'IVA agevolata (4%) su ausili e dispositivi medici per disabili.',
        'Esenzione ticket sanitario per reddito o per patologia (codice esenzione specifico).',
        'Agevolazioni per acquisto di veicoli adattati (IVA al 4%, detrazione IRPEF).',
        'Fondo per le Persone con Disabilità (FNPS) – tramite i Comuni.',
      ] : [
        'INPS Attendance Allowance: for those unable to walk or perform daily activities. Current amount about €530/month.',
        'INPS Unique Allowance: for all children up to 21, with supplement for disabled children.',
        '19% IRPEF deduction for medical, rehabilitation and specific assistance expenses.',
        'Reduced VAT (4%) on aids and medical devices for disabled people.',
        'Healthcare ticket exemption by income or pathology.',
        'Benefits for purchase of adapted vehicles (4% VAT, IRPEF deduction).',
        'Fund for Persons with Disabilities (FNPS) – via municipalities.',
      ],
      note: t.lang==='it'?'💡 Rivolgiti a un patronato (CAAF, ACLI, CGIL, CISL, UIL) per la consulenza gratuita su bonus e agevolazioni.':'💡 Contact a patronato (CAAF, ACLI, CGIL, CISL, UIL) for free advice on bonuses and benefits.',
    },
    {
      icon: 'fa-question-circle', ic: 'ic-red', id: 'faq',
      title: t.lang==='it'?'Domande Frequenti (FAQ)':'Frequently Asked Questions (FAQ)',
      steps: t.lang==='it' ? [
        'Quando va fatta la diagnosi? – Prima possibile. Contattare centri di genetica clinica con esperienza nelle malattie rare.',
        'La Sindrome ReNU è ereditaria? – Nella maggior parte dei casi è sporadica (de novo). Il rischio di ricorrenza è basso ma va valutato con un genetista.',
        'Esistono terapie specifiche per ReNU? – Al momento non esiste una terapia causale. Le terapie sono di supporto (fisioterapia, logopedia, Feuerstein, ecc.).',
        'Come posso connettermi con altre famiglie italiane? – Scrivici a info@sindromerenu.it o unisciti al gruppo Facebook "Sindrome ReNU Italia".',
        'Come accedo ai contributi per la ricerca? – La ricerca avanza tramite studi internazionali (INDEED, RARE-X, GestaltMatcher). Contattaci per informazioni su come partecipare.',
        'Dove posso trovare medici esperti in Italia? – Il comitato scientifico di Sindrome ReNU Italia è coordinato dalla Dr.ssa Donatella Milani. Contattaci a info@sindromerenu.it.',
      ] : [
        'When should diagnosis be made? – As soon as possible. Contact clinical genetics centers experienced in rare diseases.',
        'Is ReNU Syndrome hereditary? – In most cases it is sporadic (de novo). Recurrence risk is low but should be assessed with a geneticist.',
        'Are there specific therapies for ReNU? – Currently no causal therapy exists. Therapies are supportive (physiotherapy, speech therapy, Feuerstein, etc.).',
        'How can I connect with other Italian families? – Write to info@sindromerenu.it or join the Facebook group "Sindrome ReNU Italia".',
        'How do I access research contributions? – Research advances through international studies (INDEED, RARE-X, GestaltMatcher). Contact us for information on how to participate.',
        'Where can I find expert doctors in Italy? – The scientific committee is coordinated by Dr. Donatella Milani. Contact us at info@sindromerenu.it.',
      ],
      note: t.lang==='it'?'💡 Non trovi risposta alla tua domanda? Scrivici a info@sindromerenu.it: aggiungiamo continuamente nuove FAQ!':'💡 Can\'t find the answer? Write to info@sindromerenu.it: we continuously add new FAQs!',
    },
  ]

  // Dati regionali da Excel REGIONI.xlsx
  const regioniData = [
    { reg: 'Lombardia', misura: 'Mis. B1 (gravissima disabilità) / Mis. B2 (grave disabilità)', come: 'Domanda annuale con ISEE sociosanitario', dove: 'Comune/ambito territoriale – Ufficio Fragilità' },
    { reg: 'Piemonte', misura: 'Fondo non autosufficienza FNA / Progetto vita indipendente / Buono domiciliarità', come: 'Bando annuale + progetto personalizzato', dove: 'ASL/Consorzio socio-assistenziale' },
    { reg: "Valle d'Aosta", misura: 'Sostegno domiciliarità / Contributo caregiver', come: 'Domanda con certificazione 104', dove: 'Ufficio regionale politiche sociali' },
    { reg: 'Liguria', misura: 'Assegno di cura / Progetti personalizzati disabilità', come: 'Domanda + ISEE', dove: 'Comune/Distretti sociosanitari ASL' },
    { reg: 'Veneto', misura: 'Impegnative di cura domiciliare (ICD)', come: 'Domanda annuale', dove: 'ULSS (ASL)' },
    { reg: 'Trentino A.A.', misura: 'Assegno di cura provinciale', come: 'Domanda + valutazione UVM', dove: 'Azienda sanitaria provinciale' },
    { reg: 'Friuli V.G.', misura: 'Contributi per caregiver / Progetti di autonomia', come: 'Domanda + ISEE', dove: 'Comune/ambito territoriale' },
    { reg: 'Emilia-Romagna', misura: 'Assegno di cura regionale / Contributo caregiver', come: 'Domanda + valutazione UVM', dove: 'AUSL/Comune' },
    { reg: 'Toscana', misura: 'Progetto vita indipendente PVI (18+) + Assegno di cura', come: 'Domanda annuale', dove: 'Zona distretto/Società della salute' },
    { reg: 'Umbria', misura: 'Assegno di cura FNA', come: 'Domanda + ISEE', dove: 'Azienda sanitaria provinciale' },
    { reg: 'Marche', misura: 'Assegno di cura (18+) + Progetti personalizzati', come: 'Domanda + valutazione UVM', dove: 'Comune/ATS' },
    { reg: 'Lazio', misura: 'Contributo vita indipendente / Assegno di cura', come: 'Domanda annuale', dove: 'Municipio/ASL' },
    { reg: 'Molise', misura: 'Contributi assistenza domiciliare / Assegno di cura', come: 'Domanda + certificazione', dove: 'Comune' },
    { reg: 'Campania', misura: 'Progetti individuali disabilità grave FNA / Assegno di cura', come: 'Domanda + ISEE', dove: 'Comune/Ambito territoriale' },
    { reg: 'Puglia', misura: 'Progetti vita indipendente (Puglia V.I.) / Buoni servizio', come: 'Domanda on line piattaforma regionale', dove: 'Regione/Ambito territoriale' },
    { reg: 'Basilicata', misura: 'Assegno di cura', come: 'Domanda + valutazione', dove: 'Comune/Distretto sanitario' },
    { reg: 'Calabria', misura: 'Progetti personalizzati FNA', come: 'Domanda + ISEE', dove: 'Comune' },
    { reg: 'Sicilia', misura: 'Assegno di cura / Progetti individualizzati', come: 'Domanda + certificazione', dove: 'Comune/ASP' },
    { reg: 'Sardegna', misura: 'Legge 162/98 Piani personalizzati / Ritornare a casa plus', come: 'Domanda annuale', dove: 'Comune/ATS' },
  ]

  // Dati 730 da Excel 730.xlsx
  const spese730 = [
    { tipo: 'Spese sanitarie (visite, esami, farmaci, dispositivi CE)', chi: 'Tutti', doc: 'Fatture, scontrini parlanti, CF' },
    { tipo: 'Terapie riabilitative (logopedia, fisioterapia, TNPEE, psicomotricità)', chi: 'Tutti / Disabili', doc: 'Prescrizione medica + fattura' },
    { tipo: 'Terapie per disabilità (logopedia, psicoterapia, riabilitazione certificata)', chi: 'Solo disabili', doc: "Verbale 104/Invalidità + fatture" },
    { tipo: 'Assistenza specifica (OSS, infermieri, educatori)', chi: 'Disabili', doc: "Verbale disabilità + fatture" },
    { tipo: 'Badanti per non autosufficienza', chi: 'Non autosufficienti', doc: 'Contratto + ricevute contributi' },
    { tipo: 'Ausili e protesi (carrozzine, sollevatori, comunicatori, ortesi)', chi: 'Disabili', doc: 'Fattura + marcatura CE + verbale' },
    { tipo: 'Trasporto in ambulanza', chi: 'Disabili', doc: 'Fattura + verbale' },
    { tipo: 'Strumenti informatici o per autonomia', chi: 'Disabili', doc: 'Certificazione medica + fattura' },
  ]

  // Articoli costituzione
  const articoliCost = [
    { art: 'Art. 2', titolo: 'Diritti inviolabili', desc: 'La Repubblica riconosce e garantisce i diritti inviolabili dell\'uomo, sia come singolo, sia nelle formazioni sociali.' },
    { art: 'Art. 3', titolo: 'Principio di uguaglianza', desc: 'Tutti i cittadini hanno pari dignità sociale e sono uguali davanti alla legge. La Repubblica rimuove gli ostacoli che impediscono il pieno sviluppo della persona umana.' },
    { art: 'Art. 32', titolo: 'Diritto alla salute', desc: 'La Repubblica tutela la salute come fondamentale diritto dell\'individuo e interesse della collettività e garantisce cure gratuite agli indigenti.' },
    { art: 'Art. 34', titolo: 'Diritto allo studio', desc: 'La scuola è aperta a tutti. I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi.' },
    { art: 'Art. 38', titolo: 'Assistenza e previdenza', desc: 'I cittadini inabili al lavoro e sprovvisti dei mezzi necessari per vivere hanno diritto al mantenimento e all\'assistenza sociale.' },
  ]

  return `
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3">
        <i class="fas fa-question-circle mr-3 text-sky-300"></i>
        ${t.lang==='it'?'FAQ & Guida Anti-Burocrazia':t.lang==='en'?'FAQ & Anti-Bureaucracy Guide':'FAQ & Guide Anti-Bureaucratie'}
      </h1>
      <p class="text-sky-100 text-lg">
        ${t.lang==='it'?'Tutto quello che devi sapere su diritti, agevolazioni e procedure pratiche per le famiglie con un bambino con Sindrome ReNU in Italia.':t.lang==='en'?'Everything you need to know about rights, benefits and practical procedures for families with a ReNU Syndrome child in Italy.':'Tout ce que vous devez savoir sur les droits et procédures pratiques pour les familles avec un enfant atteint du Syndrome ReNU en Italie.'}
      </p>
      <!-- Quicklinks -->
      <div class="flex flex-wrap gap-2 mt-5">
        ${topics.map(tp => `<a href="#${tp.id}" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas ${tp.icon} text-xs"></i>${tp.title.split('(')[0].trim()}</a>`).join('')}
        ${t.lang==='it'?`
        <a href="#regioni" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-map-italy text-xs"></i>Misure Regionali</a>
        <a href="#730" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-file-invoice text-xs"></i>Detrazioni 730</a>
        <a href="#costituzione" class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"><i class="fas fa-balance-scale text-xs"></i>Articoli Costituzione</a>
        `:''}
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Disclaimer -->
      <div class="rounded-2xl p-5 mb-10 flex gap-4 items-start" style="background:#FEF3C7; border-left:4px solid #F59E0B">
        <i class="fas fa-balance-scale text-amber-500 text-2xl mt-1 flex-shrink-0"></i>
        <div>
          <p class="font-bold text-amber-800 mb-1">${t.lang==='it'?'Nota legale':'Legal disclaimer'}</p>
          <p class="text-amber-700 text-sm">
            ${t.lang==='it'?'Le informazioni contenute in questa guida hanno scopo puramente informativo e non sostituiscono la consulenza legale professionale. Per casi specifici, rivolgersi a un patronato (CAAF, ACLI, CGIL, CISL, UIL) o consulente legale specializzato in diritto della disabilità. Aggiornato ad aprile 2026.':'The information in this guide is for informational purposes only and does not replace professional legal advice. For specific cases, contact a patronato or legal consultant specializing in disability law. Updated April 2026.'}
          </p>
        </div>
      </div>

      <!-- Argomenti procedurali -->
      <div class="space-y-8 mb-12">
        ${topics.map(tp => `
        <div id="${tp.id}" class="card card-blue p-7 scroll-mt-24">
          <div class="flex items-center gap-4 mb-5">
            <div class="ic ${tp.ic} flex-shrink-0 w-14 h-14">
              <i class="fas ${tp.icon} text-2xl"></i>
            </div>
            <h2 class="text-xl font-extrabold" style="color:#082050">${tp.title}</h2>
          </div>
          <ol class="space-y-2 mb-4">
            ${tp.steps.map((s,i) => `
            <li class="flex gap-3 text-sm text-gray-700">
              <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background:#1078C0">${i+1}</span>
              <span>${s}</span>
            </li>`).join('')}
          </ol>
          <div class="rounded-xl px-4 py-3 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
            ${tp.note}
          </div>
        </div>`).join('')}
      </div>

      ${t.lang==='it' ? `
      <!-- ── MISURE REGIONALI ── -->
      <div id="regioni" class="card card-purple p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-purple flex-shrink-0 w-14 h-14"><i class="fas fa-map text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Misure Regionali per la Disabilità</h2>
            <p class="text-sm text-gray-500">Aggiornato Aprile 2026 – Fonte: elaborazione dati regionali</p>
          </div>
        </div>
        <div class="rounded-xl p-4 mb-5" style="background:#FEF3C7; border-left:3px solid #F59E0B">
          <p class="text-amber-800 text-sm"><strong>Importante:</strong> Le misure e i requisiti cambiano frequentemente. Verificare sempre le informazioni aggiornate sul sito della propria Regione o ASL. Rivolgersi al patronato di fiducia per assistenza.</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background:#082050;color:white">
                <th class="text-left p-3 rounded-tl-lg">Regione</th>
                <th class="text-left p-3">Misure disponibili</th>
                <th class="text-left p-3">Come richiedere</th>
                <th class="text-left p-3 rounded-tr-lg">Dove presentare</th>
              </tr>
            </thead>
            <tbody>
              ${regioniData.map((r,i) => `
              <tr class="${i%2===0?'bg-white':'bg-sky-50'}">
                <td class="p-3 border-b border-gray-100 font-semibold" style="color:#082050;white-space:nowrap">${r.reg}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.misura}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.come}</td>
                <td class="p-3 border-b border-gray-100 text-xs">${r.dove}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="rounded-xl px-4 py-3 mt-4 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 Si consiglia di rivolgersi al CAF o al patronato di fiducia per l'assistenza necessaria. Scrivici a <a href="mailto:info@sindromerenu.it" style="color:#1078C0;text-decoration:underline">info@sindromerenu.it</a> per supporto.
        </div>
      </div>

      <!-- ── DETRAZIONI 730 ── -->
      <div id="730" class="card card-green p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-green flex-shrink-0 w-14 h-14"><i class="fas fa-file-invoice-dollar text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Detrazioni e Deduzioni 730 per Disabilità</h2>
            <p class="text-sm text-gray-500">Prospetto agevolazioni fiscali per famiglie con figli disabili</p>
          </div>
        </div>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background:#082050;color:white">
                <th class="text-left p-3 rounded-tl-lg">Tipo di spesa</th>
                <th class="text-left p-3">Chi può detrarre</th>
                <th class="text-left p-3 rounded-tr-lg">Documenti necessari</th>
              </tr>
            </thead>
            <tbody>
              ${spese730.map((s,i) => `
              <tr class="${i%2===0?'bg-white':'bg-sky-50'}">
                <td class="p-3 border-b border-gray-100 font-medium text-xs">${s.tipo}</td>
                <td class="p-3 border-b border-gray-100 text-xs"><span class="px-2 py-0.5 rounded-full text-white text-xs" style="background:${s.chi==='Tutti'?'#059669':s.chi==='Solo disabili'?'#7C3AED':'#1078C0'}">${s.chi}</span></td>
                <td class="p-3 border-b border-gray-100 text-xs">${s.doc}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="rounded-xl px-4 py-3 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 Si consiglia di rivolgersi al CAF o a un patronato di fiducia per l'assistenza nella compilazione della dichiarazione dei redditi. La detrazione è del 19% per le spese mediche superiori a €129,11.
        </div>
      </div>

      <!-- ── ARTICOLI COSTITUZIONE ── -->
      <div id="costituzione" class="card card-navy p-7 scroll-mt-24 mb-8">
        <div class="flex items-center gap-4 mb-5">
          <div class="ic ic-navy flex-shrink-0 w-14 h-14"><i class="fas fa-balance-scale text-2xl"></i></div>
          <div>
            <h2 class="text-xl font-extrabold" style="color:#082050">Diritti Costituzionali per le Persone con Disabilità</h2>
            <p class="text-sm text-gray-500">Articoli della Costituzione italiana a tutela dei bambini e delle persone con disabilità</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${articoliCost.map(a => `
          <div class="rounded-xl p-4" style="background:#EEF6FB; border-left:3px solid #1078C0">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:#082050">${a.art}</span>
              <span class="font-bold text-sm" style="color:#082050">${a.titolo}</span>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed">${a.desc}</p>
          </div>`).join('')}
        </div>
        <div class="rounded-xl px-4 py-3 mt-4 text-sm font-medium" style="background:#EEF6FB; color:#082050; border-left:3px solid #45B8EC">
          💡 La Convenzione ONU sui Diritti delle Persone con Disabilità (CRPD), ratificata dall'Italia con Legge 18/2009, è ulteriore garanzia internazionale dei diritti dei bambini ReNU.
        </div>
      </div>
      ` : ''}

      <!-- Contattaci -->
      <div class="mt-12 rounded-2xl p-8 text-white text-center" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-hands-helping text-4xl text-sky-300 mb-4 block"></i>
        <h3 class="text-2xl font-bold mb-3">
          ${t.lang==='it'?'Hai ancora dubbi o domande?':'Still have questions?'}
        </h3>
        <p class="text-sky-100 mb-5 max-w-lg mx-auto">
          ${t.lang==='it'?'Il team di Sindrome ReNU Italia APS è a tua disposizione. Scriviamo insieme alle istituzioni competenti e ti supportiamo in ogni passo del percorso.':'The Sindrome ReNU Italia APS team is at your disposal. We will write together to the competent institutions and support you every step of the way.'}
        </p>
        <a href="mailto:info@sindromerenu.it?subject=${encodeURIComponent(t.lang==='it'?'Richiesta supporto burocrazia/diritti':'Bureaucracy/rights support request')}"
           class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-base hover:bg-sky-50" style="color:#082050">
          <i class="fas fa-paper-plane"></i>
          ${t.lang==='it'?'Scrivici a info@sindromerenu.it':'Write to info@sindromerenu.it'}
        </a>
      </div>
    </div>
  </section>`
}

// ─── PRIVACY POLICY PAGE ──────────────────────────────────────────────────────
function privacyPage(t: Record<string, string>): string {
  const isIt = t.lang === 'it'
  return `
  <section class="section-light py-16 px-4 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="mb-10">
        <span class="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold mb-4" style="color:#082050">
          <i class="fas fa-shield-alt" style="color:#1078C0"></i>
          ${isIt?'Privacy & GDPR':'Privacy & GDPR'}
        </span>
        <h1 class="text-3xl md:text-4xl font-extrabold mb-4" style="color:#082050">
          ${isIt?'Informativa sulla Privacy':'Privacy Policy'}
        </h1>
        <p class="text-gray-500 text-sm">${isIt?'Ultimo aggiornamento: Aprile 2026':'Last updated: April 2026'} · ${isIt?'Versione':'Version'} 1.0</p>
      </div>

      <div class="space-y-8 text-gray-700 leading-relaxed">

        <!-- Titolare -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-building mr-2" style="color:#1078C0"></i>${isIt?'1. Titolare del Trattamento':'1. Data Controller'}</h2>
          <div class="bg-sky-50 rounded-xl p-4 text-sm">
            <strong>Sindrome ReNU Italia APS</strong><br>
            ${isIt?'Associazione di Promozione Sociale':'Social Promotion Association'}<br>
            Email: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a><br>
            PEC: <a href="mailto:sindromerenuitalia@legalmail.it" class="text-blue-600 hover:underline">sindromerenuitalia@legalmail.it</a><br>
            Tel: +39 335 730 1206<br>
            ${isIt?'Sito web':'Website'}: <a href="https://www.sindromerenu.it" class="text-blue-600 hover:underline">www.sindromerenu.it</a>
          </div>
          <p class="mt-3 text-sm text-gray-600">
            ${isIt?'Il Responsabile della Protezione dei Dati (DPO) è in fase di nomina. Per qualsiasi richiesta relativa ai tuoi dati personali, scrivi a: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>':'The Data Protection Officer (DPO) is being appointed. For any request regarding your personal data, write to: <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>'}
          </p>
        </div>

        <!-- Dati raccolti -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-database mr-2" style="color:#1078C0"></i>${isIt?'2. Dati Personali Raccolti':'2. Personal Data Collected'}</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50"><th class="text-left p-3 border border-sky-100">${isIt?'Finalità':'Purpose'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Dati':'Data'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Base giuridica':'Legal basis'}</th></tr></thead>
              <tbody>
                <tr><td class="p-3 border border-gray-100">${isIt?'Richieste informazioni':'Information requests'}</td><td class="p-3 border border-gray-100">Nome, email, messaggio</td><td class="p-3 border border-gray-100">${isIt?'Consenso (Art. 6.1.a GDPR)':'Consent (Art. 6.1.a GDPR)'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">${isIt?'Iscrizione associazione':'Association membership'}</td><td class="p-3 border border-gray-100">Nome, cognome, email, città, dati bambino</td><td class="p-3 border border-gray-100">${isIt?'Contratto (Art. 6.1.b GDPR)':'Contract (Art. 6.1.b GDPR)'}</td></tr>
                <tr><td class="p-3 border border-gray-100">${isIt?'Donazioni':'Donations'}</td><td class="p-3 border border-gray-100">Nome, email, importo</td><td class="p-3 border border-gray-100">${isIt?'Obbligo legale (Art. 6.1.c GDPR)':'Legal obligation (Art. 6.1.c GDPR)'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">${isIt?'Storie famiglie (dati sanitari)':'Family stories (health data)'}</td><td class="p-3 border border-gray-100">${isIt?'Nome bambino, storia, foto':'Child name, story, photos'}</td><td class="p-3 border border-gray-100">${isIt?'Consenso esplicito (Art. 9.2.a GDPR)':'Explicit consent (Art. 9.2.a GDPR)'}</td></tr>
                <tr><td class="p-3 border border-gray-100">${isIt?'Navigazione sito (log)':'Site navigation (logs)'}</td><td class="p-3 border border-gray-100">IP, browser, pagine visitate</td><td class="p-3 border border-gray-100">${isIt?'Legittimo interesse (Art. 6.1.f GDPR)':'Legitimate interest (Art. 6.1.f GDPR)'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Dati sensibili -->
        <div class="card p-6 border-l-4 border-amber-400">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-exclamation-triangle mr-2 text-amber-500"></i>${isIt?'3. Dati Sanitari (Categoria Speciale)':'3. Health Data (Special Category)'}</h2>
          <p class="text-sm mb-3">${isIt?'Il sito tratta dati sanitari relativi a bambini affetti da Sindrome ReNU. Questi dati rientrano nelle categorie particolari di cui all\'Art. 9 GDPR e sono trattati esclusivamente con:':'The site processes health data relating to children with ReNU Syndrome. This data falls under the special categories of Art. 9 GDPR and is processed exclusively with:'}</p>
          <ul class="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>${isIt?'Consenso esplicito e informato dell\'interessato o del genitore/tutore':'Explicit and informed consent of the data subject or parent/guardian'}</li>
            <li>${isIt?'Finalità di tutela della salute e supporto alle famiglie':'Health protection and family support purposes'}</li>
            <li>${isIt?'Misure di sicurezza rafforzate (cifratura, accesso limitato)':'Enhanced security measures (encryption, limited access)'}</li>
            <li>${isIt?'Conservazione limitata e cancellazione su richiesta':'Limited retention and deletion on request'}</li>
          </ul>
        </div>

        <!-- Diritti -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-user-shield mr-2" style="color:#1078C0"></i>${isIt?'4. I Tuoi Diritti (Artt. 15-22 GDPR)':'4. Your Rights (Arts. 15-22 GDPR)'}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${[
              ['fa-eye','Accesso','Access','Puoi richiedere una copia dei tuoi dati (Art. 15)','You can request a copy of your data (Art. 15)'],
              ['fa-edit','Rettifica','Rectification','Puoi correggere dati inesatti (Art. 16)','You can correct inaccurate data (Art. 16)'],
              ['fa-trash','Cancellazione','Erasure','Diritto all\'oblio (Art. 17)','Right to be forgotten (Art. 17)'],
              ['fa-pause','Limitazione','Restriction','Puoi limitare il trattamento (Art. 18)','You can restrict processing (Art. 18)'],
              ['fa-download','Portabilità','Portability','Puoi ricevere i tuoi dati in formato strutturato (Art. 20)','You can receive your data in structured format (Art. 20)'],
              ['fa-times','Opposizione','Objection','Puoi opporti al trattamento (Art. 21)','You can object to processing (Art. 21)'],
            ].map(([icon,it,en,descIt,descEn])=>`
            <div class="flex items-start gap-3 bg-sky-50 rounded-xl p-3">
              <i class="fas ${icon} text-sky-600 mt-0.5"></i>
              <div>
                <div class="font-semibold text-sm" style="color:#082050">${isIt?'Diritto di '+it:'Right of '+en}</div>
                <div class="text-xs text-gray-500 mt-0.5">${isIt?descIt:descEn}</div>
              </div>
            </div>`).join('')}
          </div>
          <div class="mt-4 p-4 bg-amber-50 rounded-xl text-sm">
            <strong>${isIt?'Come esercitare i tuoi diritti:':'How to exercise your rights:'}</strong>
            ${isIt?'Scrivi a <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>. Risponderemo entro 30 giorni. Puoi anche presentare reclamo al <a href="https://www.garanteprivacy.it" target="_blank" class="text-blue-600 hover:underline">Garante per la protezione dei dati personali</a>.':
            'Write to <a href="mailto:info@sindromerenu.it" class="text-blue-600 hover:underline">info@sindromerenu.it</a>. We will respond within 30 days. You may also lodge a complaint with the <a href="https://www.garanteprivacy.it" target="_blank" class="text-blue-600 hover:underline">Italian Data Protection Authority (Garante)</a>.'}
          </div>
        </div>

        <!-- Cookie -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-cookie-bite mr-2" style="color:#1078C0"></i>${isIt?'5. Cookie e Tecnologie di Tracciamento':'5. Cookies and Tracking Technologies'}</h2>
          <p class="text-sm mb-3">${isIt?'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizza cookie di profilazione o marketing di terze parti.':'This site uses only technical cookies necessary for its operation. It does not use third-party profiling or marketing cookies.'}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-sky-50"><th class="text-left p-3 border border-sky-100">Cookie</th><th class="text-left p-3 border border-sky-100">${isIt?'Tipo':'Type'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Durata':'Duration'}</th><th class="text-left p-3 border border-sky-100">${isIt?'Finalità':'Purpose'}</th></tr></thead>
              <tbody>
                <tr><td class="p-3 border border-gray-100">session</td><td class="p-3 border border-gray-100">${isIt?'Tecnico':'Technical'}</td><td class="p-3 border border-gray-100">Sessione</td><td class="p-3 border border-gray-100">${isIt?'Navigazione':'Navigation'}</td></tr>
                <tr class="bg-gray-50"><td class="p-3 border border-gray-100">cf_clearance</td><td class="p-3 border border-gray-100">${isIt?'Tecnico (Cloudflare)':'Technical (Cloudflare)'}</td><td class="p-3 border border-gray-100">30 giorni</td><td class="p-3 border border-gray-100">${isIt?'Sicurezza CDN':'CDN Security'}</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mt-3">${isIt?'Puoi gestire i cookie nelle impostazioni del tuo browser.':'You can manage cookies in your browser settings.'}</p>
        </div>

        <!-- Conservazione -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-clock mr-2" style="color:#1078C0"></i>${isIt?'6. Tempi di Conservazione':'6. Retention Periods'}</h2>
          <ul class="text-sm space-y-2 text-gray-600">
            <li>• ${isIt?'Dati di contatto/richieste informazioni: 2 anni dal ricevimento':'Contact data/information requests: 2 years from receipt'}</li>
            <li>• ${isIt?'Dati di iscrizione associazione: per tutta la durata dell\'associazione + 5 anni':'Association membership data: for the duration of membership + 5 years'}</li>
            <li>• ${isIt?'Dati donazioni: 10 anni (obbligo fiscale)':'Donation data: 10 years (tax obligation)'}</li>
            <li>• ${isIt?'Storie famiglie: fino a revoca del consenso':'Family stories: until consent is withdrawn'}</li>
            <li>• ${isIt?'Log di navigazione: 12 mesi':'Navigation logs: 12 months'}</li>
          </ul>
        </div>

        <!-- Sicurezza -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-3" style="color:#082050"><i class="fas fa-lock mr-2" style="color:#1078C0"></i>${isIt?'7. Sicurezza dei Dati':'7. Data Security'}</h2>
          <p class="text-sm text-gray-600">${isIt?'I dati sono trattati con misure di sicurezza tecniche e organizzative adeguate: trasmissione HTTPS/TLS, hosting su Cloudflare Pages (infrastruttura certificata ISO 27001), accesso limitato al personale autorizzato, nessun trasferimento verso paesi terzi extra-UE senza adeguate garanzie.':'Data is processed with appropriate technical and organizational security measures: HTTPS/TLS transmission, hosting on Cloudflare Pages (ISO 27001 certified infrastructure), access limited to authorized personnel, no transfers to non-EU third countries without adequate guarantees.'}</p>
        </div>

        <!-- Contatti Garante -->
        <div class="rounded-2xl p-6 text-white" style="background:linear-gradient(135deg,#082050,#1078C0)">
          <i class="fas fa-balance-scale text-3xl text-sky-300 mb-3 block"></i>
          <h3 class="font-bold text-lg mb-2">${isIt?'Autorità di Controllo':'Supervisory Authority'}</h3>
          <p class="text-sky-100 text-sm mb-3">${isIt?'Hai il diritto di presentare un reclamo al Garante per la Protezione dei Dati Personali:':'You have the right to lodge a complaint with the Italian Data Protection Authority:'}</p>
          <a href="https://www.garanteprivacy.it" target="_blank" class="inline-flex items-center gap-2 bg-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-sky-50" style="color:#082050">
            <i class="fas fa-external-link-alt"></i>www.garanteprivacy.it
          </a>
        </div>
      </div>
    </div>
  </section>`
}

// ─── ROUTES ───────────────────────────────────────────────────────────────────
app.get('/', (c) => c.redirect('/it/home'))

const pages: Record<string, (t: Record<string, string>) => string> = {
  home:      homePage,
  about:     aboutPage,
  research:  researchPage,
  therapies: therapiesPage,
  diagnosis: diagnosisPage,
  community: communityPage,
  donations: donationsPage,
  contact:   contactPage,
  brochure:  brochurePage,
  events:    eventsPage,
  projects:  projectsPage,
  members:   membersPage,
  faq:       faqPage,
  privacy:   privacyPage,
}

for (const lang of ['it','en','fr','es','de']) {
  app.get(`/${lang}`, (c) => c.redirect(`/${lang}/home`))
  for (const [page, fn] of Object.entries(pages)) {
    app.get(`/${lang}/${page}`, (c) => {
      const t = translations[lang]
      return c.html(getHtml(t, page, fn(t)))
    })
  }
}

// ─── HELPER: sanitize / validate / hash ──────────────────────────────────────
function san(v: unknown, n = 500): string {
  return v == null ? '' : String(v).trim().slice(0, n)
}
function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}
function hashIP(ip: string): string {
  let h = 0
  for (let i = 0; i < ip.length; i++) { h = (Math.imul(31, h) + ip.charCodeAt(i)) | 0 }
  return 'ip' + Math.abs(h).toString(16).padStart(8, '0')
}
function getClientIP(c: any): string {
  return c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || ''
}
function now(): string {
  return new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })
}

// ─── EMAIL – doppia strategia: MailChannels (nativo CF, gratis) + Resend fallback ──
// MailChannels è gratuito e nativo su Cloudflare Workers senza alcuna API key.
// Resend è il fallback opzionale (imposta RESEND_API_KEY nelle env vars CF Pages).
async function sendEmail(env: any, opts: {
  to?: string, subject: string, html: string
}): Promise<void> {
  const toAddr   = opts.to || 'info@sindromerenu.it'
  const fromAddr = 'noreply@sindromerenu.it'
  const fromName = 'Sindrome ReNU Italia APS'

  // 1️⃣  Tentativo MailChannels (nativo Cloudflare Workers – zero config)
  try {
    const mcRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toAddr }] }],
        from: { email: fromAddr, name: fromName },
        subject: opts.subject,
        content: [{ type: 'text/html', value: opts.html }]
      })
    })
    if (mcRes.ok || mcRes.status === 202) {
      console.log('[email] MailChannels OK →', toAddr)
      return
    }
    console.warn('[email] MailChannels status', mcRes.status, await mcRes.text().catch(()=>''))
  } catch(e) { console.warn('[email] MailChannels fetch error:', e) }

  // 2️⃣  Fallback Resend (richiede RESEND_API_KEY in env vars CF Pages)
  const key = env?.RESEND_API_KEY
  if (key && key.length > 10 && !key.startsWith('INSERIRE')) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${fromName} <${fromAddr}>`,
          to: [toAddr],
          subject: opts.subject,
          html: opts.html
        })
      })
      if (res.ok) { console.log('[email] Resend OK →', toAddr); return }
      console.error('[email] Resend error:', await res.text())
    } catch(e) { console.error('[email] Resend fetch error:', e) }
  }

  console.warn('[email] Nessun provider disponibile – email non inviata a', toAddr)
}

// ─── ADMIN PANEL (integrato in Hono) ─────────────────────────────────────────
const ADMIN_HTML = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin – Sindrome ReNU Italia APS</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<script src="https://cdn.tailwindcss.com"></script>
<style>body{font-family:system-ui,sans-serif}</style>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- LOGIN OVERLAY -->
<div id="loginOverlay" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
  <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4">
    <div class="text-center mb-6">
      <i class="fas fa-shield-alt text-5xl text-blue-600 mb-3 block"></i>
      <h1 class="text-2xl font-bold text-gray-800">Pannello Admin</h1>
      <p class="text-gray-500 text-sm">Sindrome ReNU Italia APS</p>
      <span class="inline-block mt-2 text-xs bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded-full font-semibold">
        <i class="fas fa-check-circle mr-1"></i>GDPR Compliant v2.0
      </span>
    </div>
    <input id="ti" type="password" placeholder="Token di accesso admin..."
           class="w-full border rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onkeydown="if(event.key==='Enter')doLogin()">
    <button onclick="doLogin()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
      <i class="fas fa-sign-in-alt mr-2"></i>Accedi
    </button>
    <p id="le" class="text-red-600 text-sm text-center mt-3 hidden">Token non valido.</p>
    <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
      <i class="fas fa-exclamation-triangle mr-1"></i>
      <b>Accesso riservato.</b> Ogni operazione è registrata nell'audit log GDPR.
    </div>
  </div>
</div>

<!-- HEADER -->
<nav class="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-xl">
  <div class="flex items-center gap-3">
    <i class="fas fa-shield-alt text-2xl text-blue-300"></i>
    <div>
      <div class="font-bold text-lg">Pannello Admin GDPR</div>
      <div class="text-xs text-blue-200">Sindrome ReNU Italia APS – v2.0</div>
    </div>
  </div>
  <div class="flex items-center gap-3 flex-wrap">
    <span id="dbBadge" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-full">DB: –</span>
    <span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">GDPR v2.0</span>
    <a href="/manuale-utente" target="_blank" class="text-xs bg-white text-blue-900 font-bold px-3 py-1 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-1">
      <i class="fas fa-book-open"></i> Manuale
    </a>
    <a href="/it/home" class="text-xs bg-blue-800 text-blue-100 px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
      ← Sito
    </a>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-8">
  <!-- STATS -->
  <div id="stats" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-gray-200 animate-pulse h-24"></div>
  </div>

  <!-- GDPR INFO -->
  <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 text-sm text-blue-800 flex gap-3">
    <i class="fas fa-info-circle text-blue-500 text-xl mt-0.5 flex-shrink-0"></i>
    <div><b>Protezione dati attiva:</b> ogni visualizzazione è registrata nell'audit log (Art.5 GDPR).
    I dati dei minori sono protetti (Art.9). Il diritto all'oblio è disponibile nella sezione Cancella Dati.</div>
  </div>

  <!-- TABS -->
  <div class="flex gap-2 flex-wrap mb-6">
    <button data-t="adesioni"  onclick="showTab('adesioni')"  class="tb bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-users mr-1"></i>Adesioni</button>
    <button data-t="contatti"  onclick="showTab('contatti')"  class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-envelope mr-1"></i>Contatti</button>
    <button data-t="lista"     onclick="showTab('lista')"     class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-clock mr-1"></i>Lista Attesa</button>
    <button data-t="donazioni" onclick="showTab('donazioni')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-heart mr-1"></i>Donazioni</button>
    <button data-t="audit"     onclick="showTab('audit')"     class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-history mr-1"></i>Audit Log</button>
    <button data-t="erasure"   onclick="showErasure()"        class="tb bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-trash mr-1"></i>Cancella Dati</button>
  </div>

  <!-- CONTENT -->
  <div id="content" class="bg-white rounded-2xl shadow-lg overflow-hidden min-h-64">
    <div class="p-8 text-center text-gray-400">
      <i class="fas fa-database text-5xl mb-3 block opacity-20"></i>
      Seleziona una sezione per visualizzare i dati
    </div>
  </div>
</div>

<script>
let TOK = '';
function H(){ return {'X-Admin-Token': TOK, 'Content-Type': 'application/json'}; }

async function doLogin(){
  const t = document.getElementById('ti').value.trim();
  if(!t) return;
  const r = await fetch('/api/admin/stats', {headers: {'X-Admin-Token': t}});
  if(r.ok){
    TOK = t;
    document.getElementById('loginOverlay').style.display = 'none';
    loadStats();
    showTab('adesioni');
  } else {
    document.getElementById('le').classList.remove('hidden');
    document.getElementById('ti').value = '';
  }
}

async function loadStats(){
  const r = await fetch('/api/admin/stats', {headers: H()});
  if(!r.ok) return;
  const s = await r.json();
  document.getElementById('dbBadge').textContent = s.db ? 'D1: ✓' : 'D1: memoria';
  document.getElementById('dbBadge').className = s.db
    ? 'text-xs bg-green-600 text-white px-2 py-1 rounded-full'
    : 'text-xs bg-amber-500 text-white px-2 py-1 rounded-full';
  const cards = [
    {k:'lista_attesa', l:'Lista Attesa', i:'fa-clock',    c:'blue'},
    {k:'contatti',     l:'Contatti',     i:'fa-envelope', c:'green'},
    {k:'adesioni',     l:'Adesioni',     i:'fa-users',    c:'purple'},
    {k:'donazioni',    l:'Donazioni',    i:'fa-heart',    c:'red'},
  ];
  document.getElementById('stats').innerHTML = cards.map(c => \`
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-\${c.c}-500">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full bg-\${c.c}-100 flex items-center justify-center">
          <i class="fas \${c.i} text-\${c.c}-600 text-lg"></i>
        </div>
        <div>
          <div class="text-2xl font-bold text-gray-800">\${s[c.k] ?? 0}</div>
          <div class="text-xs text-gray-500">\${c.l}</div>
        </div>
      </div>
    </div>\`).join('');
}

const TABS = {
  adesioni:  {url:'/api/admin/adesioni'},
  contatti:  {url:'/api/admin/contatti'},
  lista:     {url:'/api/admin/lista-attesa'},
  donazioni: {url:'/api/admin/donazioni'},
  audit:     {url:'/api/admin/audit'},
};

async function showTab(name){
  document.querySelectorAll('.tb').forEach(b => {
    b.className = b.className.replace('bg-blue-600 text-white','bg-gray-200 text-gray-700');
  });
  const btn = document.querySelector('[data-t="'+name+'"]');
  if(btn) btn.className = btn.className.replace('bg-gray-200 text-gray-700','bg-blue-600 text-white');
  if(name === 'erasure'){ showErasure(); return; }
  const cfg = TABS[name]; if(!cfg) return;
  document.getElementById('content').innerHTML = '<div class="p-8 text-center"><i class="fas fa-spinner fa-spin text-3xl text-blue-400"></i></div>';
  const r = await fetch(cfg.url, {headers: H()});
  if(!r.ok){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Errore caricamento dati – token non valido?</div>';
    return;
  }
  const data = await r.json();
  if(!data.length){
    document.getElementById('content').innerHTML = '<div class="p-8 text-center text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block opacity-30"></i>Nessun dato presente</div>';
    return;
  }
  const keys = Object.keys(data[0]);
  let html = '<div class="overflow-x-auto"><table class="w-full text-xs"><thead class="bg-gray-50 border-b"><tr>'
    + keys.map(k => '<th class="px-3 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">'+k+'</th>').join('')
    + '</tr></thead><tbody>';
  data.forEach((row,i) => {
    html += '<tr class="'+(i%2?'bg-gray-50':'')+' border-b hover:bg-blue-50">';
    keys.forEach(k => {
      const v = row[k] !== null ? String(row[k]) : '–';
      html += '<td class="px-3 py-2 text-gray-700 max-w-xs truncate" title="'+v.replace(/"/g,'&quot;')+'">'+v+'</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div><div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t flex justify-between">'
    + '<span><i class="fas fa-lock mr-1 text-green-600"></i>'+data.length+' record · accesso registrato audit log GDPR</span>'
    + '<a href="'+cfg.url+'" target="_blank" class="text-blue-600 hover:underline">Esporta JSON</a>'
    + '</div>';
  document.getElementById('content').innerHTML = html;
}

function showErasure(){
  document.querySelectorAll('.tb').forEach(b => {
    b.className = b.className.replace('bg-blue-600 text-white','bg-gray-200 text-gray-700');
  });
  const btn = document.querySelector('[data-t="erasure"]');
  if(btn) btn.className = btn.className.replace('bg-gray-200 text-gray-700','bg-blue-600 text-white');
  document.getElementById('content').innerHTML = \`
    <div class="p-8 max-w-lg mx-auto">
      <div class="text-center mb-6">
        <i class="fas fa-user-slash text-5xl text-red-400 mb-3 block"></i>
        <h2 class="text-xl font-bold">Diritto all'Oblio – Art. 17 GDPR</h2>
        <p class="text-sm text-gray-500 mt-1">Cancella tutti i dati personali di un interessato</p>
      </div>
      <div class="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-5 text-sm text-amber-800">
        <i class="fas fa-exclamation-triangle mr-1"></i>
        <b>Attenzione – operazione irreversibile.</b><br>
        Verificare sempre l'identità del richiedente prima di procedere.
      </div>
      <input id="ee" type="email" placeholder="email@esempio.it" class="w-full border rounded-xl px-4 py-3 text-sm mb-3">
      <input id="ec" type="text" placeholder="Digita CANCELLA per confermare" class="w-full border rounded-xl px-4 py-3 text-sm mb-4">
      <button onclick="doErasure()" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl">
        <i class="fas fa-trash mr-2"></i>Esegui Cancellazione
      </button>
      <div id="er" class="mt-4 hidden"></div>
    </div>\`;
}

async function doErasure(){
  const email = document.getElementById('ee').value.trim();
  const conf  = document.getElementById('ec').value.trim();
  const res   = document.getElementById('er');
  if(conf !== 'CANCELLA'){ res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Digita esattamente CANCELLA.</div>'; res.classList.remove('hidden'); return; }
  if(!email){ res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Email obbligatoria.</div>'; res.classList.remove('hidden'); return; }
  const r = await fetch('/api/admin/erasure/'+encodeURIComponent(email), {method:'DELETE', headers:H()});
  const d = await r.json();
  if(r.ok){
    res.innerHTML='<div class="p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800"><i class="fas fa-check-circle mr-1"></i><b>Cancellazione completata</b><br><pre class="mt-2 text-xs">'+JSON.stringify(d,null,2)+'</pre></div>';
  } else {
    res.innerHTML='<div class="p-4 bg-red-50 text-red-800 rounded-xl text-sm">Errore: '+d.error+'</div>';
  }
  res.classList.remove('hidden');
}
</script>
</body></html>`

// In-memory store (fallback quando D1 non è configurato)
const memStore: { la: any[], ct: any[], ad: any[], dn: any[], au: any[] } = { la:[], ct:[], ad:[], dn:[], au:[] }

function memAudit(tabella: string, id: number, azione: string, note = '') {
  memStore.au.push({ id: memStore.au.length+1, timestamp: new Date().toISOString(), tabella, record_id: id, azione, note })
}

// ─── ADMIN: token check ───────────────────────────────────────────────────────
function requireAdmin(c: any): boolean {
  const tok = c.req.header('X-Admin-Token') || ''
  const secret = c.env?.ADMIN_SECRET || 'renu-admin-2026'
  return tok === secret
}

// ─── ADMIN ROUTES ─────────────────────────────────────────────────────────────
app.get('/admin', (c) => c.html(ADMIN_HTML))
app.get('/admin/', (c) => c.html(ADMIN_HTML))

app.get('/api/admin/stats', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const [la, ct, ad, dn] = await Promise.all([
        db.prepare('SELECT COUNT(*) as n FROM lista_attesa WHERE cancellato IS NULL OR cancellato=0').first(),
        db.prepare('SELECT COUNT(*) as n FROM contatti WHERE cancellato IS NULL OR cancellato=0').first(),
        db.prepare('SELECT COUNT(*) as n FROM adesioni WHERE cancellato IS NULL OR cancellato=0').first(),
        db.prepare("SELECT COUNT(*) as n FROM sqlite_master WHERE type='table' AND name='donazioni'").first(),
      ])
      return c.json({ lista_attesa:(la as any)?.n??0, contatti:(ct as any)?.n??0, adesioni:(ad as any)?.n??0, donazioni:0, db:true })
    } catch(e) { /* fallback */ }
  }
  return c.json({ lista_attesa:memStore.la.length, contatti:memStore.ct.length, adesioni:memStore.ad.length, donazioni:memStore.dn.length, db:false })
})

app.get('/api/admin/adesioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,cognome,email,citta,tipo_membro,come_conosciuto,consenso_gdpr,data_consenso,status FROM adesioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.ad)
})

app.get('/api/admin/contatti', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,email,oggetto,messaggio,consenso_gdpr,data_consenso,status FROM contatti ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.ct)
})

app.get('/api/admin/lista-attesa', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,cognome,email,citta,tipo,consenso_gdpr,data_consenso FROM lista_attesa WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.la)
})

app.get('/api/admin/donazioni', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,created_at,nome,email,importo,tipo,metodo,consenso_gdpr,data_consenso FROM donazioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 200').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.dn)
})

app.get('/api/admin/audit', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const db = c.env?.DB
  if (db) {
    try {
      const r = await db.prepare('SELECT id,timestamp,tabella,record_id,azione,operatore,note FROM audit_log ORDER BY timestamp DESC LIMIT 500').all()
      return c.json(r.results)
    } catch(e) {}
  }
  return c.json(memStore.au.slice(-200).reverse())
})

app.delete('/api/admin/erasure/:email', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'Non autorizzato' }, 401)
  const email = decodeURIComponent(c.req.param('email'))
  if (!validEmail(email)) return c.json({ error: 'Email non valida' }, 400)
  const db = c.env?.DB
  const ts = new Date().toISOString()
  if (db) {
    try {
      await db.prepare("UPDATE lista_attesa SET cancellato=1, data_cancellazione=?, nome='[CANCELLATO]', cognome='[CANCELLATO]', email='[CANCELLATO]', citta='' WHERE email=?").bind(ts, email).run()
      await db.prepare("UPDATE contatti SET nome='[CANCELLATO]', email='[CANCELLATO]', messaggio='[CANCELLATO GDPR Art.17]' WHERE email=?").bind(email).run()
      await db.prepare("UPDATE adesioni SET cancellato=1, data_cancellazione=?, nome='[CANCELLATO]', cognome='[CANCELLATO]', email='[CANCELLATO]' WHERE email=?").bind(ts, email).run()
      await db.prepare("INSERT INTO audit_log(tabella,azione,operatore,note) VALUES('*','ERASURE','admin',?)").bind(`Art.17 GDPR email=${email.slice(0,3)}***`).run()
      return c.json({ success: true, email: email.slice(0,3)+'***', nota: 'Cancellazione Art.17 GDPR completata e registrata in audit log.', timestamp: ts })
    } catch(e: any) { return c.json({ error: e.message }, 500) }
  }
  // fallback memory
  memStore.la = memStore.la.map(r => r.email===email ? {...r, cancellato:1, nome:'[CANCELLATO]', email:'[CANCELLATO]'} : r)
  memStore.ct = memStore.ct.map(r => r.email===email ? {...r, nome:'[CANCELLATO]', email:'[CANCELLATO]', messaggio:'[CANCELLATO]'} : r)
  memAudit('*', 0, 'ERASURE', `Art.17 GDPR email=${email.slice(0,3)}***`)
  return c.json({ success: true, nota: 'Cancellazione completata (memoria – configura D1 per persistenza).', timestamp: ts })
})

// ─── API: LISTA ATTESA ────────────────────────────────────────────────────────
app.post('/api/lista-attesa', async (c) => {
  try {
    const body = await c.req.json().catch(() => ({})) as Record<string, unknown>
    const errors: Record<string, string> = {}

    if (!body.consenso_gdpr) errors.consenso_gdpr = 'Consenso obbligatorio (Art. 6 GDPR).'
    if (!san(body.nome) || san(body.nome).length < 2) errors.nome = 'Nome obbligatorio.'
    if (!san(body.cognome) || san(body.cognome).length < 2) errors.cognome = 'Cognome obbligatorio.'
    if (!validEmail(san(body.email))) errors.email = 'Email valida obbligatoria.'

    if (Object.keys(errors).length > 0) return c.json({ success: false, errors }, 400)

    const nome    = san(body.nome)
    const cognome = san(body.cognome)
    const email   = san(body.email, 200)
    const citta   = san(body.citta, 100)
    const tipo    = san(body.tipo || 'familiare', 50)
    const come    = san(body.come_conosciuto, 300)
    const ipHash  = hashIP(getClientIP(c))
    const ts      = now()
    const db      = c.env?.DB

    // Salva in D1 se disponibile
    if (db) {
      try {
        await db.prepare(`INSERT OR IGNORE INTO lista_attesa
          (nome,cognome,email,citta,tipo,come_conosciuto,consenso_gdpr,data_consenso,testo_consenso_versione,ip_hash)
          VALUES(?,?,?,?,?,?,1,CURRENT_TIMESTAMP,'2.0',?)`)
          .bind(nome, cognome, email, citta, tipo, come, ipHash).run()
        await db.prepare("INSERT INTO audit_log(tabella,azione,operatore,note) VALUES('lista_attesa','INSERT','utente',?)")
          .bind(`Pre-iscrizione da ${citta||'–'}`).run()
      } catch(e) { console.error('[D1 lista-attesa]', e) }
    } else {
      // Fallback in-memory
      const id = memStore.la.length + 1
      memStore.la.push({ id, created_at: new Date().toISOString(), nome, cognome, email, citta, tipo, come_conosciuto: come, consenso_gdpr: 1, data_consenso: new Date().toISOString(), cancellato: 0 })
      memAudit('lista_attesa', id, 'INSERT', `Pre-iscrizione da ${citta||'–'}`)
    }

    // ✉️ Email notifica a info@sindromerenu.it
    await sendEmail(c.env, {
      to: 'info@sindromerenu.it',
      subject: `🔔 Nuova pre-iscrizione – ${nome} ${cognome}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#082050,#1078C0);padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">🔔 Nuova pre-iscrizione lista attesa</h1>
            <p style="color:#93C5FD;margin:4px 0 0">Sindrome ReNU Italia APS – ${ts}</p>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr style="background:#f0f9ff"><td style="padding:10px;font-weight:700;color:#082050;width:140px">Nome</td><td style="padding:10px">${nome} ${cognome}</td></tr>
              <tr><td style="padding:10px;font-weight:700;color:#082050">Email</td><td style="padding:10px"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background:#f0f9ff"><td style="padding:10px;font-weight:700;color:#082050">Città</td><td style="padding:10px">${citta||'–'}</td></tr>
              <tr><td style="padding:10px;font-weight:700;color:#082050">Tipo socio</td><td style="padding:10px">${tipo}</td></tr>
              <tr style="background:#f0f9ff"><td style="padding:10px;font-weight:700;color:#082050">Come ci ha trovato</td><td style="padding:10px">${come||'–'}</td></tr>
              <tr><td style="padding:10px;font-weight:700;color:#082050">Consenso GDPR</td><td style="padding:10px;color:#16a34a">✅ Sì (Art.6 GDPR) – v2.0</td></tr>
            </table>
            <div style="margin-top:16px;padding:12px;background:#f0fdf4;border-radius:8px;font-size:13px;color:#166534">
              <b>➡️ Rispondi a:</b> <a href="mailto:${email}">${email}</a>
            </div>
            <p style="font-size:11px;color:#9ca3af;margin-top:16px">Vedi tutti i dati nel pannello admin: <a href="https://sindromerenu-italia.pages.dev/admin">sindromerenu-italia.pages.dev/admin</a></p>
          </div>
        </div>`
    })

    // ✉️ Email conferma all'utente
    await sendEmail(c.env, {
      to: email,
      subject: '✅ Conferma pre-iscrizione – Sindrome ReNU Italia APS',
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#082050,#1078C0);padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">✅ Pre-iscrizione ricevuta!</h1>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
            <p>Ciao <b>${nome}</b>,</p>
            <p>Abbiamo ricevuto la tua richiesta di pre-iscrizione alla lista d'attesa di <b>Sindrome ReNU Italia APS</b>.</p>
            <p>Ti contatteremo non appena il Consiglio Direttivo avrà approvato le modalità di iscrizione (quota, statuto, metodo di pagamento).</p>
            <p>Per qualsiasi informazione scrivici a <a href="mailto:info@sindromerenu.it">info@sindromerenu.it</a> o chiama <a href="tel:+393357301206">+39 335 730 1206</a>.</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="font-size:11px;color:#9ca3af">I tuoi dati sono trattati ai sensi del GDPR (Reg. UE 2016/679). Hai il diritto di accedere, rettificare o cancellare i tuoi dati scrivendo a info@sindromerenu.it.</p>
          </div>
        </div>`
    })

    return c.json({ success: true, message: 'Pre-iscrizione ricevuta! Ti contatteremo presto. Controlla la tua email per la conferma.', gdpr: 'Consenso GDPR registrato – v2.0' }, 201)
  } catch (err: any) {
    console.error('lista-attesa error:', err)
    return c.json({ success: false, error: 'Errore interno. Scrivi a info@sindromerenu.it.' }, 500)
  }
})

// ─── API: CONTATTI ────────────────────────────────────────────────────────────
app.post('/api/contatti', async (c) => {
  try {
    const body = await c.req.json().catch(() => ({})) as Record<string, unknown>
    const errors: Record<string, string> = {}

    if (!body.consenso_gdpr) errors.consenso_gdpr = 'Consenso obbligatorio (Art. 6 GDPR).'
    if (!san(body.nome) || san(body.nome).length < 2) errors.nome = 'Nome obbligatorio.'
    if (!validEmail(san(body.email))) errors.email = 'Email valida obbligatoria.'
    if (!san(body.messaggio) || san(body.messaggio).length < 10) errors.messaggio = 'Messaggio troppo breve (min 10 caratteri).'

    if (Object.keys(errors).length > 0) return c.json({ success: false, errors }, 400)

    const nome     = san(body.nome)
    const email    = san(body.email, 200)
    const oggetto  = san(body.oggetto || 'Contatto dal sito', 200)
    const messaggio = san(body.messaggio, 2000)
    const ipHash   = hashIP(getClientIP(c))
    const ts       = now()
    const db       = c.env?.DB

    if (db) {
      try {
        await db.prepare(`INSERT INTO contatti
          (nome,email,oggetto,messaggio,consenso_gdpr,data_consenso,testo_consenso_versione,ip_hash)
          VALUES(?,?,?,?,1,CURRENT_TIMESTAMP,'2.0',?)`)
          .bind(nome, email, oggetto, messaggio, ipHash).run()
        await db.prepare("INSERT INTO audit_log(tabella,azione,operatore,note) VALUES('contatti','INSERT','utente',?)")
          .bind(`Oggetto: ${oggetto.slice(0,50)}`).run()
      } catch(e) { console.error('[D1 contatti]', e) }
    } else {
      const id = memStore.ct.length + 1
      memStore.ct.push({ id, created_at: new Date().toISOString(), nome, email, oggetto, messaggio, consenso_gdpr: 1, data_consenso: new Date().toISOString(), status: 'nuovo' })
      memAudit('contatti', id, 'INSERT', `Oggetto: ${oggetto.slice(0,50)}`)
    }

    // ✉️ Email notifica a info@sindromerenu.it
    await sendEmail(c.env, {
      to: 'info@sindromerenu.it',
      subject: `📩 Nuovo contatto dal sito – ${nome}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#082050,#1078C0);padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">📩 Nuovo messaggio dal sito</h1>
            <p style="color:#93C5FD;margin:4px 0 0">Sindrome ReNU Italia APS – ${ts}</p>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr style="background:#f0f9ff"><td style="padding:10px;font-weight:700;color:#082050;width:120px">Nome</td><td style="padding:10px">${nome}</td></tr>
              <tr><td style="padding:10px;font-weight:700;color:#082050">Email</td><td style="padding:10px"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background:#f0f9ff"><td style="padding:10px;font-weight:700;color:#082050">Oggetto</td><td style="padding:10px">${oggetto}</td></tr>
            </table>
            <div style="margin:16px 0;padding:16px;background:#f8fafc;border-left:4px solid #1078C0;border-radius:0 8px 8px 0;font-size:14px;white-space:pre-wrap">${messaggio}</div>
            <div style="padding:12px;background:#f0fdf4;border-radius:8px;font-size:13px;color:#166534">
              <b>➡️ Rispondi a:</b> <a href="mailto:${email}?subject=Re: ${encodeURIComponent(oggetto)}">${email}</a>
            </div>
            <p style="font-size:11px;color:#9ca3af;margin-top:16px">Admin: <a href="https://sindromerenu-italia.pages.dev/admin">sindromerenu-italia.pages.dev/admin</a></p>
          </div>
        </div>`
    })

    // ✉️ Email conferma all'utente
    await sendEmail(c.env, {
      to: email,
      subject: '✅ Messaggio ricevuto – Sindrome ReNU Italia APS',
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#082050,#1078C0);padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">✅ Messaggio ricevuto!</h1>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
            <p>Ciao <b>${nome}</b>,</p>
            <p>Abbiamo ricevuto il tuo messaggio riguardo a: <b>${oggetto}</b></p>
            <p>Ti risponderemo entro <b>48-72 ore lavorative</b>. Per urgenze chiama <a href="tel:+393357301206">+39 335 730 1206</a>.</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="font-size:11px;color:#9ca3af">I tuoi dati sono trattati ai sensi del GDPR (Reg. UE 2016/679). <a href="https://sindromerenu-italia.pages.dev/it/privacy">Informativa Privacy</a></p>
          </div>
        </div>`
    })

    return c.json({ success: true, message: 'Messaggio ricevuto! Ti risponderemo entro 48-72 ore. Controlla la tua email per la conferma.', gdpr: 'Dati trattati ai sensi del GDPR.' }, 201)
  } catch (err: any) {
    console.error('contatti error:', err)
    return c.json({ success: false, error: 'Errore interno. Scrivi direttamente a info@sindromerenu.it.' }, 500)
  }
})

// ─── API: HEALTH ──────────────────────────────────────────────────────────────
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', gdpr: 'v2.0', version: '2.0', d1: !!c.env?.DB, email: !!(c.env?.RESEND_API_KEY) })
})

// Legacy redirect
app.post('/api/contact', async (c) => c.redirect('/api/contatti', 307))

export default app
