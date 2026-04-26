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
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Manuale d'Uso — Sindrome ReNU Italia APS</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#082050;--blue:#1078C0;--sky:#45B8EC;--pale:#EFF9FF;--green:#16A085;--amber:#D97706;--red:#E74C3C;--purple:#7C3AED;--text:#1e293b;--muted:#64748b;--border:#e2e8f0;--bg:#f8fafc}
html{scroll-behavior:smooth}
body{font-family:'Inter',Arial,sans-serif;font-size:13.5px;line-height:1.75;color:var(--text);background:var(--bg)}
/* TOPBAR */
.topbar{position:fixed;top:0;left:0;right:0;height:54px;background:linear-gradient(135deg,var(--navy),var(--blue));display:flex;align-items:center;padding:0 28px;gap:14px;z-index:999;box-shadow:0 2px 16px rgba(8,32,80,.4)}
.tb-brand{display:flex;align-items:center;gap:10px;color:#fff;font-weight:700;font-size:14px;text-decoration:none}
.tb-icon{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font-size:16px;color:#BAE6FD;flex-shrink:0}
.tb-sub{font-size:10.5px;font-weight:400;opacity:.75}
.tb-btn{margin-left:auto;display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:8px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:background .2s;white-space:nowrap;font-family:inherit}
.tb-btn:hover{background:rgba(255,255,255,.3)}
/* WRAP */
.wrap{margin-top:54px;max-width:940px;margin-left:auto;margin-right:auto;padding:44px 44px 80px}
/* COVER */
.cover{background:linear-gradient(135deg,var(--navy) 0%,#0e3a7a 45%,var(--blue) 100%);border-radius:18px;padding:56px 52px 48px;color:#fff;margin-bottom:44px;position:relative;overflow:hidden}
.cover::before{content:'';position:absolute;top:-70px;right:-70px;width:320px;height:320px;background:radial-gradient(circle,rgba(69,184,236,.22) 0%,transparent 70%);border-radius:50%}
.cover-eye{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:4px 14px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#BAE6FD;margin-bottom:20px}
.cover h1{font-size:36px;font-weight:900;line-height:1.13;letter-spacing:-.02em;margin-bottom:12px}
.cover h1 span{color:var(--sky)}
.cover-desc{font-size:14.5px;color:rgba(255,255,255,.8);max-width:540px;margin-bottom:32px;line-height:1.65}
.cover-meta{display:flex;flex-wrap:wrap;gap:9px}
.pill{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:5px 12px;font-size:11.5px;font-weight:500}
.pill i{color:var(--sky);font-size:10px}
/* TOC */
.toc{background:#fff;border:1px solid var(--border);border-left:5px solid var(--blue);border-radius:14px;padding:28px 30px;margin-bottom:40px}
.toc h2{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:18px;display:flex;align-items:center;gap:10px}
.toc h2 i{color:var(--blue)}
.toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 36px}
.toc a{display:flex;align-items:baseline;padding:5px 0;border-bottom:1px dashed #e2e8f0;color:var(--text);text-decoration:none;font-size:12px;font-weight:500;gap:6px;transition:color .15s}
.toc a:hover{color:var(--blue)}
.toc a .n{flex-shrink:0;width:22px;font-weight:700;color:var(--blue);font-size:10.5px}
.toc a .dots{flex:1;border-bottom:1px dotted #cbd5e1;margin-bottom:3px}
/* SECTION */
.sec{background:#fff;border:1px solid var(--border);border-radius:14px;padding:32px 36px;margin-bottom:28px}
.sec-hdr{display:flex;align-items:flex-start;gap:14px;margin-bottom:22px;padding-bottom:16px;border-bottom:2px solid var(--border)}
.si{width:46px;height:46px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:19px;color:#fff;flex-shrink:0}
.si.blue{background:var(--blue)}.si.navy{background:var(--navy)}.si.green{background:var(--green)}.si.amber{background:var(--amber)}.si.red{background:var(--red)}.si.purple{background:var(--purple)}.si.sky{background:var(--sky)}
.sec-ttl{font-size:19px;font-weight:800;color:var(--navy);line-height:1.2}
.sec-sub{font-size:11.5px;color:var(--muted);margin-top:4px}
p.body{color:var(--muted);margin-bottom:12px;font-size:13.5px}
/* CARDS */
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-top:14px}
.card{background:var(--bg);border:1px solid var(--border);border-radius:11px;padding:16px}
.ci{width:34px;height:34px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;margin-bottom:10px}
.card h4{font-size:12.5px;font-weight:700;color:var(--navy);margin-bottom:5px}
.card p{font-size:11.5px;color:var(--muted);line-height:1.62}
/* INFO BOX */
.ib{border-radius:9px;padding:12px 16px;display:flex;gap:11px;align-items:flex-start;font-size:12px;line-height:1.7;margin:12px 0}
.ib>i{flex-shrink:0;margin-top:2px;font-size:13px}
.ib.blue{background:#EFF9FF;border-left:4px solid var(--blue);color:#0c4a82}
.ib.green{background:#f0fdf4;border-left:4px solid var(--green);color:#14532d}
.ib.amber{background:#fffbeb;border-left:4px solid var(--amber);color:#92400e}
.ib.red{background:#fef2f2;border-left:4px solid var(--red);color:#991b1b}
/* TABLE */
.tbl{width:100%;border-collapse:collapse;font-size:11.5px;margin:12px 0}
.tbl th{background:var(--navy);color:#fff;padding:7px 11px;text-align:left;font-size:10.5px;font-weight:600;letter-spacing:.04em}
.tbl th:first-child{border-radius:5px 0 0 0}.tbl th:last-child{border-radius:0 5px 0 0}
.tbl td{padding:7px 11px;border-bottom:1px solid var(--border);color:var(--text);vertical-align:top}
.tbl tr:last-child td{border-bottom:none}
.tbl tr:hover td{background:#f8fafc}
.tbl code{background:#f1f5f9;border:1px solid #e2e8f0;padding:1px 5px;border-radius:4px;font-size:10.5px;font-family:monospace;color:var(--navy);white-space:nowrap}
/* STEPS */
.steps{list-style:none;counter-reset:s;margin:12px 0}
.steps li{counter-increment:s;display:flex;gap:11px;align-items:flex-start;margin-bottom:9px;font-size:12.5px}
.steps li::before{content:counter(s);flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;font-size:11px;display:flex;align-items:center;justify-content:center;margin-top:2px}
.steps li div{line-height:1.65;color:var(--text)}
.steps li strong{color:var(--navy)}
/* BADGE */
.b{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:10px;font-weight:700;white-space:nowrap}
.b.red{background:#fee2e2;color:#b91c1c}.b.green{background:#dcfce7;color:#15803d}.b.amber{background:#fef3c7;color:#b45309}.b.blue{background:#dbeafe;color:#1d4ed8}.b.navy{background:#e0e7ff;color:#3730a3}
/* PAGE MAP */
.pmap{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:11px;margin-top:14px}
.pt{background:var(--bg);border:1px solid var(--border);border-left:4px solid var(--blue);border-radius:9px;padding:11px 13px}
.pt.admin{border-left-color:var(--red)}.pt.health{border-left-color:var(--green)}
.pt-icon{font-size:12px;color:var(--blue);margin-bottom:3px}.pt.admin .pt-icon{color:var(--red)}.pt.health .pt-icon{color:var(--green)}
.pt-name{font-weight:700;font-size:12.5px;color:var(--navy)}
.pt-url{font-family:monospace;font-size:10px;color:var(--muted);margin-top:1px}
/* LANGS */
.langs{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
.lc{background:var(--bg);border:1px solid var(--border);border-radius:9px;padding:9px 14px;display:flex;align-items:center;gap:9px}
.lf{font-size:20px}.ln{font-weight:700;font-size:12.5px;color:var(--navy)}.lu{font-family:monospace;font-size:10.5px;color:var(--muted)}
/* CODE */
.code{background:#0f172a;border-radius:9px;padding:18px 20px;margin:12px 0;overflow-x:auto}
.code pre{font-family:monospace;font-size:11.5px;line-height:1.75;color:#e2e8f0;margin:0;white-space:pre}
.code .cm{color:#94a3b8}.code .kw{color:#7dd3fc}.code .st{color:#86efac}
hr.d{border:none;border-top:1px solid var(--border);margin:20px 0}
/* FOOTER */
.foot{background:var(--navy);border-radius:14px;padding:28px 36px;color:rgba(255,255,255,.75);font-size:11.5px;display:flex;gap:20px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:36px}
.foot a{color:var(--sky);text-decoration:none}.foot .fb{font-weight:800;font-size:13px;color:#fff}
/* PRINT */
@media print{
  @page{size:A4;margin:16mm 14mm 16mm 14mm}
  *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
  .topbar{display:none!important}
  body{background:#fff!important;font-size:11.5px}
  .wrap{margin-top:0!important;padding:0!important;max-width:100%!important}
  .cover{border-radius:0!important;page-break-after:always;margin-bottom:0!important}
  .toc{page-break-after:always;border-radius:0!important;margin-bottom:0!important}
  .sec{border-radius:0!important;border:none!important;border-top:1px solid #e2e8f0!important;margin-bottom:0!important;padding:18px 0!important;page-break-inside:avoid}
  .card,.ib,.steps li,.pt,.lc,.code{page-break-inside:avoid}
  .foot{border-radius:0!important;margin-top:18px!important}
  a::after{content:none!important}
  .pb{page-break-before:always}
}
@media(max-width:680px){
  .wrap{padding:22px 16px 60px}
  .cover{padding:32px 22px 28px;border-radius:12px}
  .cover h1{font-size:26px}
  .sec{padding:22px 18px}
  .toc-grid{grid-template-columns:1fr}
  .cards{grid-template-columns:1fr 1fr}
  .pmap{grid-template-columns:1fr 1fr}
  .foot{padding:22px 18px}
}
@media(max-width:440px){.cards{grid-template-columns:1fr}.pmap{grid-template-columns:1fr}}
</style>
</head>
<body>

<div class="topbar">
  <a href="https://sindromerenu-italia.pages.dev/it/home" target="_blank" class="tb-brand">
    <div class="tb-icon"><i class="fas fa-dna"></i></div>
    <div><div>Sindrome ReNU Italia APS</div><div class="tb-sub">Manuale d'Uso — v2.0 · Aprile 2026</div></div>
  </a>
  <button class="tb-btn" onclick="window.print()"><i class="fas fa-file-pdf"></i>Salva / Stampa PDF</button>
</div>

<div class="wrap">

<!-- COVER -->
<div class="cover">
  <div class="cover-eye"><i class="fas fa-book-open"></i>Manuale d'Uso Completo · v2.0</div>
  <h1>Sito Web<br><span>Sindrome ReNU Italia</span> APS</h1>
  <p class="cover-desc">Guida completa a tutte le pagine, i moduli di contatto, il pannello amministrativo, la gestione GDPR e le procedure tecniche del sito ufficiale dell'associazione.</p>
  <div class="cover-meta">
    <div class="pill"><i class="fas fa-calendar"></i>Aprile 2026</div>
    <div class="pill"><i class="fas fa-code-branch"></i>Versione 2.0</div>
    <div class="pill"><i class="fas fa-globe"></i>5 lingue</div>
    <div class="pill"><i class="fas fa-file-alt"></i>20 sezioni</div>
    <div class="pill"><i class="fas fa-shield-halved"></i>GDPR Compliant</div>
    <div class="pill"><i class="fas fa-server"></i>Cloudflare Pages</div>
  </div>
</div>

<!-- INDICE -->
<div class="toc">
  <h2><i class="fas fa-list-ul"></i>Indice dei Contenuti</h2>
  <div class="toc-grid">
    <div>
      <a href="#s1"><span class="n">1</span><span>Struttura del sito</span><span class="dots"></span></a>
      <a href="#s2"><span class="n">2</span><span>Home</span><span class="dots"></span></a>
      <a href="#s3"><span class="n">3</span><span>Cos'è ReNU</span><span class="dots"></span></a>
      <a href="#s4"><span class="n">4</span><span>Ricerca scientifica</span><span class="dots"></span></a>
      <a href="#s5"><span class="n">5</span><span>Terapie</span><span class="dots"></span></a>
      <a href="#s6"><span class="n">6</span><span>Diagnosi</span><span class="dots"></span></a>
      <a href="#s7"><span class="n">7</span><span>Comunità</span><span class="dots"></span></a>
      <a href="#s8"><span class="n">8</span><span>Donazioni</span><span class="dots"></span></a>
      <a href="#s9"><span class="n">9</span><span>Brochure &amp; PDF</span><span class="dots"></span></a>
      <a href="#s10"><span class="n">10</span><span>Eventi</span><span class="dots"></span></a>
    </div>
    <div>
      <a href="#s11"><span class="n">11</span><span>Form Contatti</span><span class="dots"></span></a>
      <a href="#s12"><span class="n">12</span><span>Diventa Socio</span><span class="dots"></span></a>
      <a href="#s13"><span class="n">13</span><span>FAQ</span><span class="dots"></span></a>
      <a href="#s14"><span class="n">14</span><span>Privacy &amp; GDPR</span><span class="dots"></span></a>
      <a href="#s15"><span class="n">15</span><span>Multilingua</span><span class="dots"></span></a>
      <a href="#s16"><span class="n">16</span><span>Email automatiche</span><span class="dots"></span></a>
      <a href="#s17"><span class="n">17</span><span>Pannello Admin</span><span class="dots"></span></a>
      <a href="#s18"><span class="n">18</span><span>Gestione GDPR</span><span class="dots"></span></a>
      <a href="#s19"><span class="n">19</span><span>Database D1</span><span class="dots"></span></a>
      <a href="#s20"><span class="n">20</span><span>Deploy &amp; Tecnica</span><span class="dots"></span></a>
    </div>
  </div>
</div>

<!-- 1. STRUTTURA -->
<div class="sec" id="s1">
  <div class="sec-hdr">
    <div class="si navy"><i class="fas fa-sitemap"></i></div>
    <div><div class="sec-ttl">1. Struttura del Sito</div><div class="sec-sub">Architettura, URL e tecnologie utilizzate</div></div>
  </div>
  <div class="ib blue"><i class="fas fa-info-circle"></i><div>Realizzato con <strong>Hono + Vite</strong>, distribuito su <strong>Cloudflare Pages</strong>. Ogni pagina è disponibile con prefisso lingua (<code>/it/</code>, <code>/en/</code>…). URL produzione: <strong>sindromerenu-italia.pages.dev</strong></div></div>
  <div class="pmap">
    <div class="pt"><div class="pt-icon"><i class="fas fa-house-chimney"></i></div><div class="pt-name">Home</div><div class="pt-url">/it/home</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-dna"></i></div><div class="pt-name">Cos'è ReNU</div><div class="pt-url">/it/about</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-microscope"></i></div><div class="pt-name">Ricerca</div><div class="pt-url">/it/research</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-pills"></i></div><div class="pt-name">Terapie</div><div class="pt-url">/it/therapies</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-stethoscope"></i></div><div class="pt-name">Diagnosi</div><div class="pt-url">/it/diagnosis</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-users"></i></div><div class="pt-name">Comunità</div><div class="pt-url">/it/community</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-hand-holding-heart"></i></div><div class="pt-name">Donazioni</div><div class="pt-url">/it/donations</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-envelope"></i></div><div class="pt-name">Contatti</div><div class="pt-url">/it/contact</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-file-pdf"></i></div><div class="pt-name">Brochure</div><div class="pt-url">/it/brochure</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-calendar-alt"></i></div><div class="pt-name">Eventi</div><div class="pt-url">/it/events</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-id-card"></i></div><div class="pt-name">Diventa Socio</div><div class="pt-url">/it/members</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-circle-question"></i></div><div class="pt-name">FAQ</div><div class="pt-url">/it/faq</div></div>
    <div class="pt"><div class="pt-icon"><i class="fas fa-shield-halved"></i></div><div class="pt-name">Privacy</div><div class="pt-url">/it/privacy</div></div>
    <div class="pt admin"><div class="pt-icon"><i class="fas fa-lock"></i></div><div class="pt-name">Admin Panel</div><div class="pt-url">/admin</div></div>
    <div class="pt health"><div class="pt-icon"><i class="fas fa-heart-pulse"></i></div><div class="pt-name">Health Check</div><div class="pt-url">/api/health</div></div>
    <div class="pt health"><div class="pt-icon"><i class="fas fa-book-open"></i></div><div class="pt-name">Manuale</div><div class="pt-url">/manuale-utente</div></div>
  </div>
  <hr class="d">
  <table class="tbl">
    <thead><tr><th>Tecnologia</th><th>Ruolo</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td><strong>Hono</strong></td><td>Framework SSR</td><td>v4.12.x</td></tr>
      <tr><td><strong>Vite</strong></td><td>Build tool e bundler</td><td>v6.3.x</td></tr>
      <tr><td><strong>Cloudflare Pages</strong></td><td>Hosting, CDN globale, Workers</td><td>—</td></tr>
      <tr><td><strong>Cloudflare D1</strong></td><td>Database SQLite serverless</td><td>sindromerenu-db</td></tr>
      <tr><td><strong>MailChannels</strong></td><td>Email transazionali (nativo CF Workers)</td><td>—</td></tr>
      <tr><td><strong>Resend</strong></td><td>Email transazionali (fallback)</td><td>RESEND_API_KEY</td></tr>
      <tr><td><strong>Tailwind CSS</strong></td><td>Utility CSS (CDN)</td><td>v3.x</td></tr>
      <tr><td><strong>Font Awesome</strong></td><td>Icone vettoriali</td><td>v6.5</td></tr>
    </tbody>
  </table>
</div>

<!-- 2. HOME -->
<div class="sec" id="s2">
  <div class="sec-hdr">
    <div class="si blue"><i class="fas fa-house-chimney"></i></div>
    <div><div class="sec-ttl">2. Home — Pagina Principale</div><div class="sec-sub">URL: /it/home</div></div>
  </div>
  <p class="body">Pagina di atterraggio del sito. Presenta l'associazione e guida il visitatore verso le sezioni chiave.</p>
  <div class="cards">
    <div class="card"><div class="ci blue"><i class="fas fa-star"></i></div><h4>Hero Section</h4><p>Banner con titolo, tagline e pulsanti verso Cos'è ReNU e Unisciti a noi.</p></div>
    <div class="card"><div class="ci sky"><i class="fas fa-chart-bar"></i></div><h4>Statistiche</h4><p>~250 casi nel mondo, 12–14 in Italia, 13 posizioni genomiche, prevalenza 1:35.000 nati.</p></div>
    <div class="card"><div class="ci navy"><i class="fas fa-newspaper"></i></div><h4>Notizie</h4><p>Ultimi aggiornamenti, ricerche in corso ed eventi imminenti.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-hand-holding-heart"></i></div><h4>CTA Donazioni</h4><p>Blocco con IBAN e link diretto alla pagina Donazioni.</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-file-pdf"></i></div><h4>Anteprima Brochure</h4><p>Striscia con le brochure scaricabili e link alla galleria PDF completa.</p></div>
    <div class="card"><div class="ci purple"><i class="fas fa-globe"></i></div><h4>Mappa Mondiale</h4><p>Distribuzione geografica dei casi ReNU nel mondo.</p></div>
  </div>
</div>

<!-- 3. COS'E' -->
<div class="sec" id="s3">
  <div class="sec-hdr">
    <div class="si navy"><i class="fas fa-dna"></i></div>
    <div><div class="sec-ttl">3. Cos'è ReNU — Informazioni Mediche</div><div class="sec-sub">URL: /it/about</div></div>
  </div>
  <p class="body">Pagina informativa sulla sindrome RNU4-2, con contenuti scientifici organizzati in sottosezioni.</p>
  <div class="cards">
    <div class="card"><div class="ci navy"><i class="fas fa-dna"></i></div><h4>Gene RNU4-2</h4><p>Varianti patogeniche e modalità di insorgenza de novo (non ereditaria).</p></div>
    <div class="card"><div class="ci blue"><i class="fas fa-brain"></i></div><h4>Anomalie Cerebrali</h4><p>Anomalie strutturali del cervello con riferimenti bibliografici scientifici.</p></div>
    <div class="card"><div class="ci red"><i class="fas fa-bolt"></i></div><h4>Epilessia &amp; Crisi</h4><p>Tipologie di crisi, frequenza e opzioni terapeutiche in studio.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-eye"></i></div><h4>Problemi Visivi</h4><p>Manifestazioni oculari e raccomandazioni per il monitoraggio.</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-child"></i></div><h4>Sviluppo &amp; Crescita</h4><p>Ritardo dello sviluppo, tono muscolare, alimentazione, comunicazione.</p></div>
    <div class="card"><div class="ci purple"><i class="fas fa-smile"></i></div><h4>Carattere</h4><p>Profilo comportamentale caratteristico dei bambini con sindrome ReNU.</p></div>
  </div>
</div>

<!-- 4. RICERCA -->
<div class="sec" id="s4">
  <div class="sec-hdr">
    <div class="si blue"><i class="fas fa-microscope"></i></div>
    <div><div class="sec-ttl">4. Ricerca Scientifica</div><div class="sec-sub">URL: /it/research</div></div>
  </div>
  <p class="body">Panoramica sullo stato della ricerca: pubblicazioni, trial clinici internazionali e link al <em>ReNU Support Tool</em> (PDF esterno prodotto dalla comunità internazionale).</p>
  <div class="ib blue"><i class="fas fa-info-circle"></i><div>I contenuti vengono aggiornati dalla redazione al pubblicarsi di nuovi studi. Per segnalare nuove ricerche scrivere a <strong>info@sindromerenu.it</strong>.</div></div>
</div>

<!-- 5. TERAPIE -->
<div class="sec" id="s5">
  <div class="sec-hdr">
    <div class="si red"><i class="fas fa-pills"></i></div>
    <div><div class="sec-ttl">5. Terapie</div><div class="sec-sub">URL: /it/therapies</div></div>
  </div>
  <p class="body">Panoramica sulle terapie disponibili e di supporto per la gestione clinica della sindrome.</p>
  <div class="ib amber"><i class="fas fa-triangle-exclamation"></i><div><strong>Disclaimer medico:</strong> Contenuti puramente informativi. Per qualsiasi decisione terapeutica consultare sempre un medico specialista. L'associazione non fornisce consulenza medica.</div></div>
</div>

<!-- 6. DIAGNOSI -->
<div class="sec" id="s6">
  <div class="sec-hdr">
    <div class="si purple"><i class="fas fa-stethoscope"></i></div>
    <div><div class="sec-ttl">6. Diagnosi</div><div class="sec-sub">URL: /it/diagnosis</div></div>
  </div>
  <p class="body">Informazioni sul percorso diagnostico: test genetici, centri di riferimento e come contattare l'associazione per supporto.</p>
  <div class="ib green"><i class="fas fa-phone"></i><div>Per informazioni: <strong>info@sindromerenu.it</strong> — WhatsApp <strong>+39 335 730 1206</strong></div></div>
</div>

<!-- 7. COMUNITA' -->
<div class="sec" id="s7">
  <div class="sec-hdr">
    <div class="si sky"><i class="fas fa-users"></i></div>
    <div><div class="sec-ttl">7. Comunità</div><div class="sec-sub">URL: /it/community</div></div>
  </div>
  <p class="body">Presentazione della comunità italiana e internazionale: storie di famiglie, testimonials, rete di supporto, contatti con associazioni gemelle in altri Paesi e link ai gruppi WhatsApp e social media.</p>
</div>

<!-- 8. DONAZIONI -->
<div class="sec" id="s8">
  <div class="sec-hdr">
    <div class="si amber"><i class="fas fa-hand-holding-heart"></i></div>
    <div><div class="sec-ttl">8. Donazioni</div><div class="sec-sub">URL: /it/donations</div></div>
  </div>
  <div class="cards">
    <div class="card"><div class="ci amber"><i class="fas fa-building-columns"></i></div><h4>Bonifico Bancario</h4><p><strong>IBAN:</strong> IT18H0306909606100000416360<br><strong>Intestato:</strong> Sindrome ReNU Italia APS<br>donazioni@sindromerenu.it</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-percent"></i></div><h4>5 per Mille</h4><p>Destina il 5‰ dell'IRPEF all'associazione nella dichiarazione dei redditi, senza costi aggiuntivi.</p></div>
    <div class="card"><div class="ci blue"><i class="fas fa-receipt"></i></div><h4>Detraibilità Fiscale</h4><p>Le donazioni alle APS sono detraibili/deducibili. Richiedere ricevuta a donazioni@sindromerenu.it.</p></div>
  </div>
</div>

<!-- 9. BROCHURE -->
<div class="sec" id="s9">
  <div class="sec-hdr">
    <div class="si red"><i class="fas fa-file-pdf"></i></div>
    <div><div class="sec-ttl">9. Brochure &amp; Materiali PDF</div><div class="sec-sub">URL: /it/brochure</div></div>
  </div>
  <p class="body">Galleria di brochure scaricabili in PDF con anteprima visiva (thumbnail 301×474 px) e download diretto.</p>
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
  <div class="ib green"><i class="fas fa-download"></i><div>I PDF sono in <code>/brochure/</code>. Il download avviene tramite attributo HTML <code>download</code> direttamente nel browser.</div></div>
</div>

<!-- 10. EVENTI -->
<div class="sec" id="s10">
  <div class="sec-hdr">
    <div class="si sky"><i class="fas fa-calendar-alt"></i></div>
    <div><div class="sec-ttl">10. Incontri ed Eventi</div><div class="sec-sub">URL: /it/events</div></div>
  </div>
  <p class="body">Calendario degli eventi organizzati dall'associazione: incontri tra famiglie, convegni scientifici, raccolte fondi. I contenuti vengono aggiornati direttamente nel codice sorgente dalla redazione.</p>
</div>

<!-- 11. CONTATTI -->
<div class="sec pb" id="s11">
  <div class="sec-hdr">
    <div class="si green"><i class="fas fa-envelope"></i></div>
    <div><div class="sec-ttl">11. Form Contatti</div><div class="sec-sub">URL: /it/contact &nbsp;·&nbsp; API: POST /api/contatti</div></div>
  </div>
  <p class="body">Form per inviare messaggi all'associazione. I dati vengono salvati nel database e generano email automatiche.</p>
  <table class="tbl">
    <thead><tr><th>Campo</th><th>Tipo</th><th>Obbligatorio</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td><code>nome</code></td><td>Testo</td><td><span class="b red">Sì</span></td><td>Nome e cognome</td></tr>
      <tr><td><code>email</code></td><td>Email</td><td><span class="b red">Sì</span></td><td>Indirizzo di risposta</td></tr>
      <tr><td><code>messaggio</code></td><td>Textarea</td><td><span class="b red">Sì</span></td><td>Testo del messaggio</td></tr>
      <tr><td><code>consenso_gdpr</code></td><td>Checkbox</td><td><span class="b red">Sì</span></td><td>Consenso GDPR v2.0 obbligatorio</td></tr>
    </tbody>
  </table>
  <p style="font-weight:700;color:var(--navy);margin-top:16px;margin-bottom:6px;font-size:13px;">Flusso dopo l'invio</p>
  <ol class="steps">
    <li><div>Dati <strong>sanitizzati e validati</strong> server-side.</div></li>
    <li><div>Record salvato nella tabella <code>contatti</code> del database D1 (IP hashato SHA-256).</div></li>
    <li><div><strong>Notifica interna</strong> inviata a info@sindromerenu.it.</div></li>
    <li><div><strong>Email di conferma</strong> inviata all'utente (risposta in 48–72 ore lavorative).</div></li>
    <li><div>Operazione <strong>registrata nell'audit log</strong> con timestamp (GDPR Art. 5).</div></li>
  </ol>
  <div class="ib blue"><i class="fas fa-clock"></i><div>Risposta entro <strong>48–72 ore lavorative</strong>. Urgenze: <strong>+39 335 730 1206</strong> (WhatsApp).</div></div>
</div>

<!-- 12. SOCI -->
<div class="sec" id="s12">
  <div class="sec-hdr">
    <div class="si navy"><i class="fas fa-id-card"></i></div>
    <div><div class="sec-ttl">12. Diventa Socio — Pre-iscrizione</div><div class="sec-sub">URL: /it/members &nbsp;·&nbsp; API: POST /api/lista-attesa</div></div>
  </div>
  <p class="body">Form per iscriversi alla lista d'attesa dei soci. Quota e dettagli comunicati dal direttivo via email.</p>
  <table class="tbl">
    <thead><tr><th>Campo</th><th>Tipo</th><th>Obbligatorio</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td><code>nome</code></td><td>Testo</td><td><span class="b red">Sì</span></td><td>Nome completo</td></tr>
      <tr><td><code>email</code></td><td>Email</td><td><span class="b red">Sì</span></td><td>Email di contatto</td></tr>
      <tr><td><code>telefono</code></td><td>Testo</td><td><span class="b amber">Opz.</span></td><td>Numero di telefono</td></tr>
      <tr><td><code>relazione</code></td><td>Testo</td><td><span class="b amber">Opz.</span></td><td>Relazione con la sindrome (genitore, specialista…)</td></tr>
      <tr><td><code>consenso_gdpr</code></td><td>Checkbox</td><td><span class="b red">Sì</span></td><td>Consenso GDPR obbligatorio</td></tr>
    </tbody>
  </table>
  <div class="ib blue"><i class="fas fa-shield-halved"></i><div>Il sistema usa <code>INSERT OR IGNORE</code>: email duplicate vengono ignorate. Tabella: <code>lista_attesa</code> in Cloudflare D1.</div></div>
</div>

<!-- 13. FAQ -->
<div class="sec" id="s13">
  <div class="sec-hdr">
    <div class="si blue"><i class="fas fa-circle-question"></i></div>
    <div><div class="sec-ttl">13. FAQ — Domande Frequenti</div><div class="sec-sub">URL: /it/faq</div></div>
  </div>
  <p class="body">Raccolta delle domande più frequenti sulla sindrome, sull'associazione e sui servizi. Le risposte sono in accordion espandibili al clic. I contenuti vengono aggiornati periodicamente dalla redazione.</p>
</div>

<!-- 14. PRIVACY -->
<div class="sec" id="s14">
  <div class="sec-hdr">
    <div class="si purple"><i class="fas fa-shield-halved"></i></div>
    <div><div class="sec-ttl">14. Privacy &amp; GDPR</div><div class="sec-sub">URL: /it/privacy</div></div>
  </div>
  <p class="body">Informativa completa sul trattamento dei dati personali, conforme al GDPR (Reg. UE 2016/679) e alle linee guida del Garante italiano.</p>
  <div class="cards">
    <div class="card"><div class="ci purple"><i class="fas fa-gavel"></i></div><h4>Basi Giuridiche</h4><p>Consenso (Art. 6.1.a), contratto (6.1.b), obbligo legale (6.1.c). Dati sanitari ex Art. 9.2.a.</p></div>
    <div class="card"><div class="ci blue"><i class="fas fa-user-shield"></i></div><h4>Diritti Interessato</h4><p>Accesso, rettifica, cancellazione (Art. 17), portabilità, opposizione. Scrivere a info@sindromerenu.it.</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-cookie-bite"></i></div><h4>Cookie Policy</h4><p>Solo cookie tecnici necessari. Nessun cookie di profilazione o marketing.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-building-shield"></i></div><h4>Garante Privacy</h4><p>Autorità di controllo: <strong>garanteprivacy.it</strong></p></div>
  </div>
</div>

<!-- 15. MULTILINGUA -->
<div class="sec" id="s15">
  <div class="sec-hdr">
    <div class="si sky"><i class="fas fa-language"></i></div>
    <div><div class="sec-ttl">15. Supporto Multilingua</div><div class="sec-sub">5 lingue — cambio tramite menu o prefisso URL</div></div>
  </div>
  <div class="langs">
    <div class="lc"><div class="lf">🇮🇹</div><div><div class="ln">Italiano</div><div class="lu">/it/…</div></div></div>
    <div class="lc"><div class="lf">🇬🇧</div><div><div class="ln">English</div><div class="lu">/en/…</div></div></div>
    <div class="lc"><div class="lf">🇫🇷</div><div><div class="ln">Français</div><div class="lu">/fr/…</div></div></div>
    <div class="lc"><div class="lf">🇪🇸</div><div><div class="ln">Español</div><div class="lu">/es/…</div></div></div>
    <div class="lc"><div class="lf">🇩🇪</div><div><div class="ln">Deutsch</div><div class="lu">/de/…</div></div></div>
  </div>
  <div class="ib blue" style="margin-top:12px"><i class="fas fa-info-circle"></i><div>Il cambio lingua avviene lato server: Hono legge il prefisso URL e carica il dizionario corrispondente. I PDF delle brochure sono condivisi tra tutte le lingue.</div></div>
</div>

<!-- 16. EMAIL -->
<div class="sec" id="s16">
  <div class="sec-hdr">
    <div class="si blue"><i class="fas fa-paper-plane"></i></div>
    <div><div class="sec-ttl">16. Email Automatiche</div><div class="sec-sub">MailChannels (primario) + Resend (fallback)</div></div>
  </div>
  <table class="tbl">
    <thead><tr><th>Evento</th><th>Notifica interna</th><th>Conferma utente</th></tr></thead>
    <tbody>
      <tr><td>Nuovo messaggio — form Contatti</td><td>info@sindromerenu.it</td><td><span class="b green">Sì</span></td></tr>
      <tr><td>Nuova pre-iscrizione — form Soci</td><td>info@sindromerenu.it</td><td><span class="b green">Sì</span></td></tr>
      <tr><td>Cancellazione dati GDPR Art. 17</td><td>info@sindromerenu.it</td><td><span class="b amber">Opzionale</span></td></tr>
    </tbody>
  </table>
  <div class="ib amber" style="margin-top:12px"><i class="fas fa-triangle-exclamation"></i><div><strong>Fallback Resend:</strong> In caso di errore MailChannels si usa Resend. Richiede la variabile d'ambiente <code>RESEND_API_KEY</code> in Cloudflare Pages → Settings.</div></div>
</div>

<!-- 17. ADMIN -->
<div class="sec pb" id="s17">
  <div class="sec-hdr">
    <div class="si red"><i class="fas fa-lock"></i></div>
    <div><div class="sec-ttl">17. Pannello Amministrativo</div><div class="sec-sub">URL: /admin — Accesso riservato al personale autorizzato</div></div>
  </div>
  <div class="ib red"><i class="fas fa-triangle-exclamation"></i><div><strong>Accesso riservato.</strong> Il pannello è protetto da token segreto (variabile d'ambiente <code>ADMIN_SECRET</code>). Non condividere il token e cambiarlo regolarmente.</div></div>
  <p style="font-weight:700;color:var(--navy);margin-top:14px;margin-bottom:6px;font-size:13px;">Come accedere</p>
  <ol class="steps">
    <li><div>Aprire il browser su <strong>/admin</strong></div></li>
    <li><div>Inserire il <strong>token di accesso</strong></div></li>
    <li><div>Fare clic su <strong>"Accedi"</strong></div></li>
    <li><div>Il pannello carica statistiche e dati automaticamente</div></li>
  </ol>
  <p style="font-weight:700;color:var(--navy);margin-top:14px;margin-bottom:10px;font-size:13px;">Schede disponibili</p>
  <div class="cards">
    <div class="card"><div class="ci blue"><i class="fas fa-user-group"></i></div><h4>Adesioni</h4><p>Lista soci con dettagli e date di iscrizione.</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-envelope"></i></div><h4>Contatti</h4><p>Messaggi ricevuti dal form con nome, email e testo.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-clock"></i></div><h4>Lista Attesa</h4><p>Pre-iscrizioni in attesa di conferma dal direttivo.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-hand-holding-heart"></i></div><h4>Donazioni</h4><p>Registro delle donazioni con importo e data.</p></div>
    <div class="card"><div class="ci navy"><i class="fas fa-scroll"></i></div><h4>Audit Log</h4><p>Log completo di tutte le operazioni con timestamp.</p></div>
    <div class="card"><div class="ci red"><i class="fas fa-user-slash"></i></div><h4>Cancella Dati</h4><p>Esercizio diritto all'oblio Art. 17 GDPR.</p></div>
  </div>
  <hr class="d">
  <p style="font-weight:700;color:var(--navy);margin-bottom:8px;font-size:13px;">Endpoint API Admin <span style="font-weight:400;color:var(--muted);font-size:11px;">(header richiesto: X-Admin-Token)</span></p>
  <table class="tbl">
    <thead><tr><th>Metodo</th><th>Endpoint</th><th>Descrizione</th></tr></thead>
    <tbody>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/stats</code></td><td>Statistiche aggregate per tabella</td></tr>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/adesioni</code></td><td>Lista adesioni</td></tr>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/contatti</code></td><td>Lista messaggi di contatto</td></tr>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/lista-attesa</code></td><td>Pre-iscrizioni in lista d'attesa</td></tr>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/donazioni</code></td><td>Registro donazioni</td></tr>
      <tr><td><span class="b blue">GET</span></td><td><code>/api/admin/audit</code></td><td>Log operazioni GDPR</td></tr>
      <tr><td><span class="b red">DELETE</span></td><td><code>/api/admin/erasure/:email</code></td><td>Cancellazione dati Art. 17 GDPR</td></tr>
    </tbody>
  </table>
</div>

<!-- 18. GDPR -->
<div class="sec" id="s18">
  <div class="sec-hdr">
    <div class="si purple"><i class="fas fa-user-shield"></i></div>
    <div><div class="sec-ttl">18. Gestione GDPR — Operazioni</div><div class="sec-sub">Diritto all'oblio e misure tecniche implementate</div></div>
  </div>
  <p style="font-weight:700;color:var(--navy);margin-bottom:6px;font-size:13px;">Procedura cancellazione dati (Art. 17 GDPR)</p>
  <ol class="steps">
    <li><div>Accedere al pannello <strong>/admin</strong></div></li>
    <li><div>Selezionare la scheda <strong>"Cancella Dati"</strong></div></li>
    <li><div>Inserire l'<strong>email</strong> dell'interessato</div></li>
    <li><div>Digitare <strong>CANCELLA</strong> nel campo di conferma</div></li>
    <li><div>Fare clic su <strong>"Esegui Cancellazione"</strong></div></li>
    <li><div>Il sistema <strong>anonimizza i record</strong> e registra tutto in audit log</div></li>
  </ol>
  <div class="ib red"><i class="fas fa-triangle-exclamation"></i><div><strong>Irreversibile.</strong> I dati vengono sovrascritti con valori anonimi. L'operazione è registrata per conformità normativa (soft-delete).</div></div>
  <hr class="d">
  <div class="cards">
    <div class="card"><div class="ci purple"><i class="fas fa-mask"></i></div><h4>IP Hashato</h4><p>L'indirizzo IP non viene mai salvato in chiaro. Hashato SHA-256 prima della persistenza.</p></div>
    <div class="card"><div class="ci blue"><i class="fas fa-scroll"></i></div><h4>Audit Log</h4><p>Ogni operazione viene registrata con timestamp e tipo di azione.</p></div>
    <div class="card"><div class="ci green"><i class="fas fa-trash-arrow-up"></i></div><h4>Soft Delete</h4><p>Record cancellati anonimizzati, non eliminati fisicamente.</p></div>
    <div class="card"><div class="ci amber"><i class="fas fa-lock"></i></div><h4>HTTPS</h4><p>Tutte le comunicazioni su HTTPS. Certificati TLS gestiti da Cloudflare.</p></div>
  </div>
</div>

<!-- 19. DATABASE -->
<div class="sec" id="s19">
  <div class="sec-hdr">
    <div class="si blue"><i class="fas fa-database"></i></div>
    <div><div class="sec-ttl">19. Database Cloudflare D1</div><div class="sec-sub">SQLite serverless — sindromerenu-db</div></div>
  </div>
  <table class="tbl">
    <thead><tr><th>Tabella</th><th>Contenuto</th><th>Classificazione</th></tr></thead>
    <tbody>
      <tr><td><code>contatti</code></td><td>Messaggi ricevuti dal form contatti</td><td><span class="b red">Dati personali</span></td></tr>
      <tr><td><code>lista_attesa</code></td><td>Pre-iscrizioni soci in attesa</td><td><span class="b red">Dati personali</span></td></tr>
      <tr><td><code>adesioni</code></td><td>Soci confermati</td><td><span class="b red">Dati personali</span></td></tr>
      <tr><td><code>donazioni</code></td><td>Registro donazioni</td><td><span class="b amber">Dati finanziari</span></td></tr>
      <tr><td><code>audit_log</code></td><td>Log di tutte le operazioni</td><td><span class="b navy">Log tecnico</span></td></tr>
    </tbody>
  </table>
  <div class="ib blue"><i class="fas fa-server"></i><div>Fallback <strong>in-memory</strong> attivo in caso D1 non sia disponibile (sviluppo locale). Dati in-memory non persistenti tra i riavvii.</div></div>
</div>

<!-- 20. DEPLOY -->
<div class="sec" id="s20">
  <div class="sec-hdr">
    <div class="si green"><i class="fas fa-rocket"></i></div>
    <div><div class="sec-ttl">20. Deploy &amp; Informazioni Tecniche</div><div class="sec-sub">Procedura di rilascio e variabili d'ambiente</div></div>
  </div>
  <div class="code"><pre><span class="cm"># 1. Build del progetto</span>
<span class="kw">npm</span> run build

<span class="cm"># 2. Deploy su Cloudflare Pages</span>
<span class="kw">npx</span> wrangler pages deploy dist <span class="st">--project-name</span> sindromerenu-italia

<span class="cm"># 3. Verifica health check</span>
<span class="kw">curl</span> https://sindromerenu-italia.pages.dev/api/health
<span class="cm"># Output atteso: {"status":"ok","gdpr":"v2.0","version":"2.0","d1":true,"email":true}</span></pre></div>
  <table class="tbl" style="margin-top:16px">
    <thead><tr><th>Variabile d'ambiente</th><th>Descrizione</th><th>Obbligatoria</th></tr></thead>
    <tbody>
      <tr><td><code>ADMIN_SECRET</code></td><td>Token segreto per il pannello admin</td><td><span class="b red">Sì</span></td></tr>
      <tr><td><code>RESEND_API_KEY</code></td><td>Chiave API Resend per email fallback</td><td><span class="b amber">Raccomandato</span></td></tr>
    </tbody>
  </table>
  <div class="ib green" style="margin-top:12px"><i class="fas fa-heart-pulse"></i><div><strong>Health Check:</strong> <code>GET /api/health</code> — risposta: <code>{"status":"ok","gdpr":"v2.0","version":"2.0","d1":true,"email":true}</code></div></div>
</div>

<!-- FOOTER -->
<div class="foot">
  <div>
    <div class="fb"><i class="fas fa-dna" style="margin-right:6px;color:var(--sky)"></i>Sindrome ReNU Italia APS</div>
    <div style="margin-top:4px">Manuale d'Uso v2.0 — Aprile 2026 · GDPR Compliant</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:5px">
    <div><i class="fas fa-globe" style="color:var(--sky);margin-right:5px"></i><a href="https://sindromerenu-italia.pages.dev" target="_blank">sindromerenu-italia.pages.dev</a></div>
    <div><i class="fas fa-envelope" style="color:var(--sky);margin-right:5px"></i><a href="mailto:info@sindromerenu.it">info@sindromerenu.it</a></div>
    <div><i class="fab fa-whatsapp" style="color:var(--sky);margin-right:5px"></i>+39 335 730 1206</div>
  </div>
  <div style="font-size:10.5px;opacity:.55;max-width:200px;text-align:right">Documento riservato ad uso interno.<br>Dati trattati nel rispetto del GDPR Reg. UE 2016/679.</div>
</div>

</div>
<script>
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
</script>
</body>
</html>
`


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
