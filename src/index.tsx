import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

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


// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const translations: Record<string, Record<string, string>> = {
  it: {
    lang: 'it', langName: 'Italiano',
    title: 'Sindrome ReNU Italia APS',
    subtitle: 'Insieme, facciamo la differenza',
    tagline: 'Una condizione genetica di nuova identificazione. Uno sforzo di ricerca coordinato a livello globale.',
    hero_text: 'RNU4-2 emerge come una delle principali cause di disturbi rari del neurosviluppo – <strong>Rinnovando la Speranza per le Famiglie</strong>',
    hero_desc: 'La Sindrome ReNU è un disturbo spliceosomale con un hotspot mutazionale definito e un dataset globale crescente. Attualmente sono <strong>~250 i casi accertati nel mondo</strong> (12-14 in Italia), ma la stima del potenziale non diagnosticato è molto più alta: le varianti patogene si concentrano in soli <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank" class="text-sky-200 hover:underline font-semibold">13 posizioni</a> degli oltre 3 miliardi di paia di basi del genoma!',
    nav_home: 'Home', nav_about: 'Cos\'è ReNU', nav_research: 'Ricerca',
    nav_therapies: 'Terapie', nav_diagnosis: 'Diagnosi', nav_community: 'Comunità',
    nav_donations: 'Donazioni', nav_contact: 'Contatti', nav_brochure: 'Brochure',
    btn_diagnosis: 'VUOI UNA DIAGNOSI? CLICCA QUI',
    btn_diagnosis_sub: 'Elenco indirizzi in Italia dove puoi fare il testing',
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
    donations_title: 'Sostienici con una Donazione',
    donations_intro: 'Le tue donazioni ci permettono di promuovere la ricerca e costruire la comunità italiana.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Intestato a: Sindrome ReNU Italia APS',
    contact_title: 'Contattaci',
    contact_intro: 'Siamo a tua disposizione per qualsiasi informazione sulla Sindrome ReNU Italia.',
    brochure_title: 'Scarica le nostre Brochure',
    brochure_intro: 'Scarica e condividi le brochure informative di Sindrome ReNU Italia APS',
    brochure_download: 'Scarica PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Tutti i diritti riservati.',
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
    btn_diagnosis: 'WANT A DIAGNOSIS? CLICK HERE',
    btn_diagnosis_sub: 'List of addresses in Italy where you can get tested',
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
    donations_title: 'Support Us with a Donation',
    donations_intro: 'Your donations allow us to promote research and build the Italian community.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Account holder: Sindrome ReNU Italia APS',
    contact_title: 'Contact Us',
    contact_intro: 'We are available for any information about ReNU Syndrome Italy.',
    brochure_title: 'Download our Brochures',
    brochure_intro: 'Download and share the informational brochures of Sindrome ReNU Italia APS',
    brochure_download: 'Download PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. All rights reserved.',
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
    btn_diagnosis: 'VOUS VOULEZ UN DIAGNOSTIC? CLIQUEZ ICI',
    btn_diagnosis_sub: 'Liste des adresses en Italie où vous pouvez faire le test',
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
    donations_title: 'Soutenez-nous avec un don',
    donations_intro: 'Vos dons nous permettent de promouvoir la recherche.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titulaire: Sindrome ReNU Italia APS',
    contact_title: 'Contactez-nous',
    contact_intro: 'Nous sommes disponibles pour toute information.',
    brochure_title: 'Télécharger nos brochures',
    brochure_intro: 'Téléchargez et partagez les brochures de Sindrome ReNU Italia APS',
    brochure_download: 'Télécharger PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Tous droits réservés.',
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
    btn_diagnosis: '¿QUIERES UN DIAGNÓSTICO? HAZ CLIC AQUÍ',
    btn_diagnosis_sub: 'Lista de direcciones en Italia donde puedes hacerte la prueba',
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
    donations_title: 'Apóyanos con una donación',
    donations_intro: 'Tus donaciones nos permiten promover la investigación.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Titular: Sindrome ReNU Italia APS',
    contact_title: 'Contáctenos',
    contact_intro: 'Estamos disponibles para cualquier información.',
    brochure_title: 'Descarga nuestros folletos',
    brochure_intro: 'Descarga y comparte los folletos de Sindrome ReNU Italia APS',
    brochure_download: 'Descargar PDF',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Todos los derechos reservados.',
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
    btn_diagnosis: 'MÖCHTEN SIE EINE DIAGNOSE? KLICKEN SIE HIER',
    btn_diagnosis_sub: 'Adressen in Italien, wo Sie den Test machen können',
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
    donations_title: 'Unterstützen Sie uns mit einer Spende',
    donations_intro: 'Ihre Spenden ermöglichen uns die Forschungsförderung.',
    donations_iban: 'IT18H0306909606100000416360',
    donations_iban_label: 'Kontoinhaber: Sindrome ReNU Italia APS',
    contact_title: 'Kontaktieren Sie uns',
    contact_intro: 'Wir stehen für alle Informationen zur Verfügung.',
    brochure_title: 'Broschüren herunterladen',
    brochure_intro: 'Laden Sie die Informationsbroschüren von Sindrome ReNU Italia APS herunter',
    brochure_download: 'PDF herunterladen',
    footer_rights: '© 2025 Sindrome ReNU Italia APS. Alle Rechte vorbehalten.',
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
  const langSwitcher = langs.map(l => `
    <a href="/${l}/${page}" class="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors ${t.lang === l ? 'bg-white bg-opacity-25 ring-2 ring-sky-300' : ''}" title="${translations[l].langName}">
      <span class="text-lg leading-none">${flags[l]}</span>
    </a>`).join('')

  const navItems = [
    { key: 'nav_home', page: 'home', icon: 'fa-home' },
    { key: 'nav_about', page: 'about', icon: 'fa-dna' },
    { key: 'nav_research', page: 'research', icon: 'fa-microscope' },
    { key: 'nav_therapies', page: 'therapies', icon: 'fa-heartbeat' },
    { key: 'nav_diagnosis', page: 'diagnosis', icon: 'fa-stethoscope' },
    { key: 'nav_community', page: 'community', icon: 'fa-users' },
    { key: 'nav_donations', page: 'donations', icon: 'fa-heart' },
    { key: 'nav_brochure', page: 'brochure', icon: 'fa-file-pdf' },
    { key: 'nav_contact', page: 'contact', icon: 'fa-envelope' },
  ]
  const navLinks = navItems.map(item => `
    <a href="/${t.lang}/${item.page}" class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-sm font-medium whitespace-nowrap ${page === item.page ? 'bg-white bg-opacity-25 shadow-inner' : ''}">
      <i class="fas ${item.icon} text-xs opacity-80"></i>
      <span class="hidden xl:inline">${t[item.key]}</span>
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
    body { font-family: 'Inter', sans-serif; background-color: var(--bg); }

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
    #mobileBtn { cursor: pointer; min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }

    html { scroll-behavior: smooth; }
    img  { max-width:100%; height:auto; }

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

<!-- ── TOP ANNOUNCEMENT BAR ── -->
<div class="stat-bar text-white text-center text-xs py-2 px-4 font-medium">
  <i class="fas fa-dna mr-2 text-sky-300"></i>
  ${t.lang==='it' ? '🔬 Interesse farmaceutico attivo per ReNU Syndrome — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Iscriviti su Citizen Health in 5 minuti</a>' : 
    t.lang==='en' ? '🔬 Active pharmaceutical research interest in ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Sign up on Citizen Health in 5 minutes</a>' :
    t.lang==='fr' ? '🔬 Intérêt pharmaceutique actif pour ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Inscrivez-vous sur Citizen Health</a>' :
    t.lang==='es' ? '🔬 Interés farmacéutico activo en ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Regístrate en Citizen Health</a>' :
    '🔬 Aktives pharmazeutisches Forschungsinteresse an ReNU — <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" class="underline hover:text-sky-200">Bei Citizen Health anmelden</a>'}
</div>

<!-- ── NAVBAR ── -->
<header class="text-white shadow-xl sticky top-0 z-50" style="background: linear-gradient(90deg, #082050 0%, #1078C0 60%, #45B8EC 100%);">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="/${t.lang}/home" class="flex items-center gap-3 flex-shrink-0">
        <img src="/images/logo.png" alt="Sindrome ReNU Italia APS" class="h-12 w-auto drop-shadow-lg">
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-0.5 overflow-x-auto">
        ${navLinks}
      </nav>

      <!-- Lang + Hamburger -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <div class="flex items-center gap-1">${langSwitcher}</div>
        <button id="mobileBtn" class="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileMenu" class="mobile-menu pb-3 md:hidden">
      <nav class="flex flex-col gap-1">
        ${navItems.map(i => `
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
        <p class="text-sky-400 text-xs mt-1"><i class="fas fa-map-marker-alt mr-1"></i>Via Marina 6, 20121 Milano (MI)</p>
        <p class="text-sky-400 text-xs mt-0.5"><i class="fas fa-receipt mr-1"></i>P.IVA / C.F.: 98020680157</p>
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com/groups/1268033701594892/?ref=share" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
          <a href="https://www.instagram.com/immaaudino1975?igsh=dTd0amh2b203bnFu" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl"></i></a>
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
      ${t.footer_rights} &nbsp;|&nbsp; P.IVA / C.F.: 98020680157 &nbsp;|&nbsp; Via Marina 6, 20121 Milano (MI)
    </div>
  </div>
</footer>

<script>
(function() {
  function initMobileMenu() {
    var btn = document.getElementById('mobileBtn');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    }
    btn.addEventListener('click', toggleMenu, false);
    btn.addEventListener('touchend', toggleMenu, {passive: false});
    document.addEventListener('click', function(e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    }, false);
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'mobileMenu');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
      }
    }, false);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
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
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 bg-white bg-opacity-15 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 text-sky-100">
            <i class="fas fa-dna text-sky-300"></i> ${t.tagline}
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">${t.hero_text}</h1>
          <p class="text-base md:text-lg text-sky-100 mb-8 leading-relaxed max-w-2xl">${t.hero_desc}</p>
          <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <a href="/${t.lang}/diagnosis" class="btn-diagnosis inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl">
              <i class="fas fa-stethoscope"></i>${t.btn_diagnosis}
            </a>
            <a href="/${t.lang}/research" class="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-4 rounded-full text-base transition-colors border border-white border-opacity-30">
              <i class="fas fa-microscope"></i>${t.section_research_title}
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
        ${t.lang==='it'?'Come puoi partecipare':t.lang==='en'?'How you can get involved':t.lang==='fr'?'Comment vous impliquer':t.lang==='es'?'Cómo puedes participar':'So können Sie mitmachen'}
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

  <!-- CITIZEN HEALTH BANNER -->
  <section class="py-16 px-4 section-pale">
    <div class="max-w-5xl mx-auto">
      <div class="rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, #1078C0 0%, #45B8EC 100%);">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="p-10 text-white">
            <div class="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <i class="fas fa-flask text-yellow-300"></i>
              ${t.lang==='it'?'Ricerca Farmaceutica Attiva!':t.lang==='en'?'Active Pharmaceutical Research!':t.lang==='fr'?'Recherche Pharmaceutique Active!':t.lang==='es'?'¡Investigación Farmacéutica Activa!':'Aktive pharmazeutische Forschung!'}
            </div>
            <h2 class="text-2xl font-extrabold mb-4">Citizen Health × ReNU</h2>
            <p class="text-sky-100 mb-6 leading-relaxed">
              ${t.lang==='it'?'Abbiamo interesse farmaceutico attivo per la Sindrome ReNU! Collaboriamo con Citizen Health per rendere la partecipazione semplice per le famiglie – solo 5 minuti! I tuoi dati reali contribuiscono a studi critici di storia naturale.':
                t.lang==='en'?'We have active pharmaceutical research interest in ReNU Syndrome! We\'ve partnered with Citizen Health to make participation as easy as possible – just 5 minutes! Your real-world data contributes to critical natural history studies.':
                t.lang==='fr'?'Nous avons un intérêt pharmaceutique actif pour le syndrome ReNU! Nous collaborons avec Citizen Health – seulement 5 minutes!':
                t.lang==='es'?'¡Tenemos interés farmacéutico activo en el Síndrome ReNU! ¡Solo 5 minutos con Citizen Health!':
                'Wir haben aktives pharmazeutisches Forschungsinteresse am ReNU-Syndrom! Nur 5 Minuten mit Citizen Health!'}
            </p>
            <a href="https://www.citizen.health/ai-advocate/renu-syndrome" target="_blank" 
               class="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full hover:bg-sky-50 transition-colors shadow-lg text-base" style="color:#082050">
              <i class="fas fa-external-link-alt"></i>
              ${t.lang==='it'?'Iscriviti su Citizen Health':t.lang==='en'?'Sign up on Citizen Health':t.lang==='fr'?'Inscrivez-vous sur Citizen Health':t.lang==='es'?'Regístrate en Citizen Health':'Bei Citizen Health anmelden'}
            </a>
          </div>
          <div class="hidden md:block">
            <img src="/images/citizen_health.jpg" alt="Citizen Health ReNU" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
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
        <p class="text-sky-100 text-lg">${t.research_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-72">
          <img src="/images/renu_zebrafish.jpg" alt="Ricerca ReNU – Zebrafish" class="w-full h-40 object-cover">
        </div>
        <p class="text-sky-200 text-xs mt-2 text-center">
          ${t.lang==='it'?'Zebrafish usati per studiare la Sindrome ReNU':t.lang==='en'?'Zebrafish used to study ReNU Syndrome':'Poissons zèbres utilisés pour étudier ReNU'}
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-5xl mx-auto">

      <!-- CRID banner -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-10 flex gap-3 items-start">
        <i class="fas fa-id-card text-amber-500 text-2xl mt-0.5 flex-shrink-0"></i>
        <div>
          <p class="text-amber-800 font-semibold">${t.research_crid}</p>
          <p class="text-amber-700 text-sm mt-2">
            ${t.lang==='it'?'Esempio per la registrazione CRID – <strong>Nome malattia:</strong> ReNU Syndrome | <strong>Gene:</strong> RNU4-2 | <strong>Variante:</strong> n.64_65insT (o la tua variante)':
              'Example for CRID registration – <strong>Disease Name:</strong> ReNU Syndrome | <strong>Gene:</strong> RNU4-2 | <strong>Variant:</strong> n.64_65insT (or your variant)'}
          </p>
        </div>
      </div>

      <!-- Citizen Health snapshot -->
      <div class="mb-10 rounded-2xl overflow-hidden shadow-lg border border-sky-200">
        <div class="p-4 text-center text-sm font-semibold" style="background:#EEF6FB; color:#082050">
          ${t.lang==='it'?'Iscritti a Citizen Health – snapshot 26 gennaio 2026':'Citizen Health Registrants – Snapshot January 26, 2026'}
        </div>
        <img src="/images/citizen_registrants.jpg" alt="Citizen Health Registrants" class="w-full object-contain max-h-48 bg-white p-4">
      </div>

      <!-- Studies -->
      <h2 class="text-2xl font-extrabold mb-6" style="color:#082050">
        ${t.lang==='it'?'Opportunità di Ricerca per le Famiglie':t.lang==='en'?'Research Opportunities for Families':t.lang==='fr'?'Opportunités de Recherche':'Oportunidades de Investigación'}
      </h2>
      <div class="space-y-5 mb-12">
        ${studies.map(s => `
        <div class="card border-l-4 ${s.color} overflow-hidden">
          <div class="flex flex-col md:flex-row">
            ${s.img ? `<div class="md:w-48 flex-shrink-0 bg-sky-50 overflow-hidden"><img src="${s.img}" alt="${s.name}" class="w-full h-36 md:h-full object-cover"></div>` : ''}
            <div class="p-6 flex-1">
              <div class="flex items-center gap-3 mb-3">
                <div class="ic ${s.ic}"><i class="fas ${s.icon} text-xl"></i></div>
                <h3 class="text-xl font-bold" style="color:#082050">${s.name}</h3>
              </div>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">${s.desc}</p>
              <a href="${s.link}" target="_blank" class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors" style="background:#1078C0">
                <i class="fas fa-external-link-alt"></i>${s.lbl}
              </a>
            </div>
          </div>
        </div>`).join('')}
      </div>

      <!-- Priority poll -->
      <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <h2 class="text-2xl font-extrabold mb-2 text-center">${t.research_priorities_title}</h2>
        <p class="text-sky-200 text-center mb-6 text-sm">
          ${t.lang==='it'?'Top 10 priorità della comunità RNU4-2 – Sondaggio aprile 2026 (analisi aggiornata)':'Top 10 priorities of the RNU4-2 community – Poll April 2026 (updated analysis)'}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
          ${priorities.map(([icon,label],i) => `
          <div class="flex items-center gap-3 bg-white bg-opacity-10 rounded-xl px-4 py-3">
            <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-white" style="background:#45B8EC">${i+1}</span>
            <i class="fas ${icon} text-sky-300 text-sm flex-shrink-0"></i>
            <span class="text-sm">${label}</span>
          </div>`).join('')}
        </div>
        <div class="text-center">
          <a href="https://form.jotform.com/251425893633159" target="_blank" 
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors text-sm" style="background:white; color:#082050">
            <i class="fas fa-vote-yea"></i>${t.lang==='it'?'Partecipa al Sondaggio':t.lang==='en'?'Take the Poll':'Participer au sondage'}
          </a>
        </div>
      </div>

      <!-- COE Network -->
      <div class="mt-10 card card-sky p-8 mb-8">
        <h2 class="text-xl font-extrabold mb-3 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-hospital" style="color:#1078C0"></i>${t.coe_title}
        </h2>
        <p class="text-gray-600 mb-4">${t.coe_desc}</p>
        <div class="flex flex-wrap gap-3">
          <a href="https://www.renusyndrome.org/coe-network" target="_blank" 
             class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold" style="background:#1078C0">
            <i class="fas fa-external-link-alt"></i>
            ${t.lang==='it'?'Rete COE Internazionale':t.lang==='en'?'International COE Network':'Réseau COE International'}
          </a>
          <a href="https://form.jotform.com/rnu42family/renu-center-of-excellence-app" target="_blank"
             class="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm" style="background:#EEF6FB; color:#082050; border:1px solid #45B8EC">
            <i class="fas fa-hospital-user"></i>
            ${t.lang==='it'?'Candidatura Centro':t.lang==='en'?'Center Application':'Candidature Centre'}
          </a>
        </div>
      </div>

      <!-- Ricerca genetica blog -->
      <div class="card card-amber p-6">
        <div class="flex flex-col md:flex-row items-center gap-5">
          <div class="flex-shrink-0">
            <div class="ic ic-amber w-16 h-16">
              <i class="fas fa-dna text-2xl"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-2" style="color:#082050">
              ${t.lang==='it'?'Saturation Genome Editing di RNU4-2':t.lang==='en'?'Saturation Genome Editing of RNU4-2':'Edition du Génome par Saturation de RNU4-2'}
            </h3>
            <p class="text-gray-600 text-sm mb-3">
              ${t.lang==='it'?'Ricerca avanzata sulla modifica sistematica del genoma per studiare le varianti patogene di RNU4-2 e identificare bersagli terapeutici. Una svolta fondamentale nella comprensione della Sindrome ReNU.':t.lang==='en'?'Advanced research on systematic genome editing to study pathogenic variants of RNU4-2 and identify therapeutic targets. A fundamental breakthrough in understanding ReNU Syndrome.':'Recherche avancée sur l\'edition systématique du génome pour étudier les variants pathogènes de RNU4-2.'}
            </p>
            <a href="https://rarediseasegenomics.org/blog/saturation-genome-editing-of-rnu4-2" target="_blank"
               class="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm" style="background:#FEF3C7; color:#92400E; border: 1px solid #D97706">
              <i class="fas fa-external-link-alt"></i>
              ${t.lang==='it'?'Leggi la ricerca':'Read the research'}
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
    { icon:'fa-horse',         ic:'ic-navy',   name:t.lang==='it'?'Terapia Equestre (EAAT)':'Equine Assisted Activities (EAAT)', desc:t.lang==='it'?'Terapia con i cavalli per coordinazione, forza, stabilità posturale e integrazione sensoriale.':'Horse therapy for coordination, strength, core stability, and sensory integration.' },
    { icon:'fa-swimming-pool', ic:'ic-cyan',   name:t.lang==='it'?'Idroterapia / Acquaterapia':'Hydrotherapy / Aquatic Therapy', desc:t.lang==='it'?'Uso dell\'acqua per trattare vari sintomi; anche terapia acquatica o balneoterapia.':'Using water to treat various symptoms; aquatic therapy or balneotherapy.' },
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
    { country: 'Australia', flag: '🇦🇺', fb: 'https://www.facebook.com/groups/1671427560388792', ig: '', web: '' },
    { country: 'France', flag: '🇫🇷', fb: '', ig: 'https://www.instagram.com/renu_association_france/', web: 'https://www.syndrome-renu.fr/' },
    { country: 'España', flag: '🇪🇸', fb: '', ig: 'https://www.instagram.com/asociacion_sindrome_renu/', web: 'https://www.sindromerenu.es/' },
    { country: 'UK', flag: '🇬🇧', fb: 'https://www.facebook.com/groups/1603406977204374', ig: 'https://www.instagram.com/rnu4_2_family/', web: '' },
    { country: 'USA (HQ)', flag: '🇺🇸', fb: 'https://www.facebook.com/groups/rnu42', ig: 'https://www.instagram.com/renusyndromeunited/', web: 'https://www.renusyndrome.org' },
    { country: 'Italia', flag: '🇮🇹', fb: 'https://www.facebook.com/groups/1268033701594892/?ref=share', ig: 'https://www.instagram.com/immaaudino1975?igsh=dTd0amh2b203bnFu', web: 'https://www.sindromerenu.it' },
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
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">${a.flag}</span>
              <h3 class="font-bold" style="color:#082050">${a.country}</h3>
            </div>
            <div class="flex gap-2 flex-wrap">
              ${a.web ? `<a href="${a.web}" target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#1078C0"><i class="fas fa-globe"></i>Web</a>` : ''}
              ${a.fb  ? `<a href="${a.fb}"  target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#1877F2"><i class="fab fa-facebook"></i>Facebook</a>` : ''}
              ${a.ig  ? `<a href="${a.ig}"  target="_blank" class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white" style="background:#E1306C"><i class="fab fa-instagram"></i>Instagram</a>` : ''}
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

      <!-- Gallery -->
      <div class="card card-sky overflow-hidden mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="overflow-hidden">
            <img src="/images/renu_gallery.jpg" alt="Gallery ReNU" class="w-full h-56 object-cover">
          </div>
          <div class="p-6 flex flex-col justify-center">
            <h3 class="font-bold text-xl mb-3 flex items-center gap-2" style="color:#082050">
              <i class="fas fa-images" style="color:#1078C0"></i>Gallery Internazionale
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
  <section class="hero-gradient text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-heart mr-3 text-sky-300"></i>${t.donations_title}</h1>
        <p class="text-sky-100 text-lg">${t.donations_intro}</p>
      </div>
      <div class="flex-shrink-0 hidden md:block">
        <div class="img-frame w-56">
          <img src="/images/festa.png" alt="Donazioni" class="w-full h-48 object-cover">
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 section-light">
    <div class="max-w-4xl mx-auto">

      <!-- Why donate -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        ${[
          ['fa-microscope','ic-blue',t.lang==='it'?'Finanzia la Ricerca':'Fund Research',t.lang==='it'?'Supporta la ricerca per trovare terapie per la Sindrome ReNU.':'Support research to find therapies for ReNU Syndrome.'],
          ['fa-users','ic-green',t.lang==='it'?'Costruisci Comunità':'Build Community',t.lang==='it'?'Aiuta a costruire la rete di supporto per le famiglie italiane.':'Help build the Italian family support network.'],
          ['fa-bullhorn','ic-purple',t.lang==='it'?'Diffondi Consapevolezza':'Spread Awareness',t.lang==='it'?'Aumenta la visibilità della Sindrome ReNU in Italia e nel mondo.':'Increase visibility of ReNU Syndrome in Italy and worldwide.'],
        ].map(([icon,ic,title,desc]) => `
        <div class="card p-6 text-center">
          <div class="ic ${ic} mx-auto mb-3"><i class="fas ${icon} text-xl"></i></div>
          <h3 class="font-bold mb-2" style="color:#082050">${title}</h3>
          <p class="text-gray-600 text-sm">${desc}</p>
        </div>`).join('')}
      </div>

      <!-- IBAN -->
      <div class="card card-blue p-8 mb-8">
        <h2 class="text-2xl font-extrabold mb-5 flex items-center gap-2" style="color:#082050">
          <i class="fas fa-university" style="color:#1078C0"></i>${t.lang==='it'?'Bonifico Bancario':'Bank Transfer'}
        </h2>
        <div class="rounded-2xl p-6 font-mono space-y-4" style="background:#EEF6FB">
          <div class="text-center mb-2">
            <p class="text-sm text-gray-500 font-sans mb-1">${t.donations_iban_label}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 font-sans mb-1">IBAN</p>
            <p class="text-xl font-bold tracking-wide" style="color:#082050">${t.donations_iban}</p>
          </div>
          <div class="text-center text-sm font-sans space-y-1">
            <p class="text-gray-500">${t.lang==='it'?'Per informazioni sulle donazioni:':'For donation information:'}</p>
            <a href="mailto:donazioni@sindromerenu.it" class="font-semibold hover:underline" style="color:#1078C0">donazioni@sindromerenu.it</a>
          </div>
        </div>
        <div class="mt-4 bg-sky-50 rounded-xl p-4 border border-sky-200 text-center text-sm text-gray-600">
          <i class="fas fa-info-circle mr-2" style="color:#1078C0"></i>
          ${t.lang==='it'?'Inserisci nella causale: "Donazione Sindrome ReNU Italia APS". Grazie!':'In the payment reference write: "Donazione Sindrome ReNU Italia APS". Thank you!'}
        </div>
      </div>

      <!-- Online Donation via Zeffy -->
      <div class="card card-sky p-8 mb-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0 text-center">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(135deg, #45B8EC, #1078C0)">
              <i class="fas fa-credit-card text-3xl text-white"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-extrabold mb-2" style="color:#082050">
              ${t.lang==='it'?'Donazione Online con Zeffy':t.lang==='en'?'Online Donation via Zeffy':t.lang==='fr'?'Don en ligne via Zeffy':t.lang==='es'?'Donación Online vía Zeffy':'Online-Spende über Zeffy'}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              ${t.lang==='it'?'Puoi anche donare direttamente online tramite la piattaforma Zeffy (100% delle donazioni va alla causa – zero commissioni per il donatore!).':t.lang==='en'?'You can also donate directly online via the Zeffy platform (100% of donations go to the cause – zero fees for donors!).':t.lang==='fr'?'Vous pouvez aussi faire un don en ligne via Zeffy (100% des dons vont à la cause).':'También puedes donar en línea a través de Zeffy (0% comisiones).'}
            </p>
            <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-1780" target="_blank"
               class="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-colors" style="background:#1078C0">
              <i class="fas fa-hand-holding-heart"></i>
              ${t.lang==='it'?'Dona Online Ora':t.lang==='en'?'Donate Online Now':t.lang==='fr'?'Donner en ligne':'Donar Ahora'}
            </a>
          </div>
        </div>
      </div>

      <!-- Move 4 ReNU -->
      <div class="rounded-3xl overflow-hidden shadow-xl">
        <img src="/images/move4renu.jpg" alt="Move 4 ReNU" class="w-full h-40 object-cover">
        <div class="p-8 text-center text-white" style="background: linear-gradient(135deg, #1078C0 0%, #45B8EC 100%)">
          <h2 class="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
            <i class="fas fa-running"></i>Move 4 ReNU
          </h2>
          <p class="text-sky-100 mb-5">
            ${t.lang==='it'?'Muoviti per raccogliere fondi e diffondere la consapevolezza sulla Sindrome ReNU! Partecipa alla campagna internazionale Move 4 ReNU.':'Move to raise funds and spread awareness about ReNU Syndrome! Join the international Move 4 ReNU campaign.'}
          </p>
          <a href="https://www.zeffy.com/en-US/peer-to-peer/move-4-renu" target="_blank"
             class="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors" style="background:white; color:#082050">
            <i class="fas fa-external-link-alt"></i>Move 4 ReNU
          </a>
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
    </div>
  </section>
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
          <a href="https://www.facebook.com/groups/1268033701594892/?ref=share" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-facebook text-2xl"></i></a>
          <a href="https://www.instagram.com/immaaudino1975?igsh=dTd0amh2b203bnFu" target="_blank" class="text-sky-300 hover:text-white transition-colors"><i class="fab fa-instagram text-2xl"></i></a>
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
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-3"><i class="fas fa-file-pdf mr-3 text-sky-300"></i>${t.brochure_title}</h1>
      <p class="text-sky-100 text-lg">${t.brochure_intro}</p>
    </div>
  </section>

  <section class="py-16 px-4 section-light">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${brochures.map(b => `
        <div class="card card-blue overflow-hidden flex flex-col">
          <div class="overflow-hidden bg-sky-50" style="min-height:200px">
            <img src="/brochure/thumbnails/${b.thumb}.png" alt="${b.title}"
                 class="w-full h-48 object-contain p-2"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div style="display:none" class="w-full h-48 bg-sky-100 flex items-center justify-center">
              <i class="fas fa-file-pdf text-5xl" style="color:#1078C0"></i>
            </div>
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <h3 class="font-bold mb-1 text-sm leading-snug" style="color:#082050">${b.title}</h3>
            <p class="text-gray-500 text-xs mb-4 flex-1">${b.desc}</p>
            <a href="/brochure/${b.file}" download
               class="inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors" style="background:#1078C0">
              <i class="fas fa-download"></i>${t.brochure_download}
            </a>
          </div>
        </div>`).join('')}
      </div>

      <!-- Download all -->
      <div class="mt-10 rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #082050 0%, #1078C0 100%);">
        <i class="fas fa-file-archive text-5xl text-sky-300 mb-4 block"></i>
        <h2 class="text-2xl font-bold mb-2">
          ${t.lang==='it'?'Scarica tutte le brochure':t.lang==='en'?'Download all brochures':t.lang==='fr'?'Télécharger toutes les brochures':t.lang==='es'?'Descargar todos los folletos':'Alle Broschüren herunterladen'}
        </h2>
        <p class="text-sky-200 mb-5">
          ${t.lang==='it'?'Condividi le nostre brochure per diffondere la consapevolezza sulla Sindrome ReNU in Italia.':t.lang==='en'?'Share our brochures to spread awareness about ReNU Syndrome in Italy.':'Partagez nos brochures pour sensibiliser à la maladie ReNU.'}
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          ${brochures.map(b => `
          <a href="/brochure/${b.file}" download
             class="inline-flex items-center gap-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
            <i class="fas fa-download text-xs"></i>${b.file.replace('brochure-','').replace('.pdf','')}
          </a>`).join('')}
        </div>
      </div>
    </div>
  </section>`
}

// ─── ROUTES ───────────────────────────────────────────────────────────────────

// ─── MANUALE ROUTES ───────────────────────────────────────────────────────────
app.get('/manuale-utente', (c) => c.html(MANUALE_HTML))
app.get('/manuale-utente.html', (c) => c.html(MANUALE_HTML))
app.get('/manuale', (c) => c.redirect('/manuale-utente', 301))
app.get('/manual', (c) => c.redirect('/manuale-utente', 301))

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

export default app
