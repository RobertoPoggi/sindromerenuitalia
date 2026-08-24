# Sindrome ReNU Italia

## Panoramica del Progetto
- **Nome**: Sindrome ReNU Italia
- **Obiettivo**: Sito web ufficiale dell'associazione Sindrome ReNU Italia APS
- **Sito**: www.sindromerenu.it
- **Partnership**: ReNU Syndrome United (USA) — www.renusyndrome.org

## Funzionalità Completate
- ✅ Sito multilingue: **Italiano, Inglese, Francese, Spagnolo, Tedesco**
- ✅ Cambio lingua tramite bandierine nella navbar
- ✅ 8 pagine complete: Home, Cos'è ReNU, Ricerca, Terapie, Diagnosi, Comunità, Donazioni, Contatti
- ✅ Design responsive (mobile + desktop)
- ✅ Bottone "VUOI UNA DIAGNOSI?" in evidenza (animato) su ogni pagina Home
- ✅ Sezione Ricerca con tutti gli studi internazionali (Citizen Health, INDEED, Rare-X, GestaltMatcher, ecc.)
- ✅ Top 10 Priorità della Comunità RNU4-2
- ✅ Pagina Terapie con 8 tipologie
- ✅ Pagina Diagnosi con spiegazione WGS vs WES
- ✅ Footer con tutte le email dell'associazione
- ✅ Navigazione mobile con menu hamburger
- ✅ Accoglienza famiglie: invio automatico PDF di benvenuto quando ci si iscrive come "Socio Familiare" o ci si dichiara familiare nel form contatti
- ✅ Pagina Opuscoli/Brochure (`/it/brochure`): brochure generali, pubblicazioni scientifiche e opuscoli educativi scolastici (bambini/adolescenti/adulti), tutti ospitati localmente come PDF — nessun link a Google Drive
- ✅ Pubblicazioni Scientifiche ospitate localmente: 5 documenti PDF (ricercatori svedesi, fenotipo comportamentale RNU4-2, pubblicazioni RNU4-2 aprile 2026, pubblicazioni RNU2-2, guida epilessia) generati/caricati e collegati al database `brochure` con `category='pubblicazione'`

## URL del Sito
- **Home IT**: `/it/home`
- **Home EN**: `/en/home`
- **Home FR**: `/fr/home`
- **Home ES**: `/es/home`
- **Home DE**: `/de/home`

## Struttura URL
```
/{lingua}/{pagina}
lingue: it, en, fr, es, de
pagine: home, about, research, therapies, diagnosis, community, donations, contact
```

## Email dell'Associazione
- info@sindromerenu.it
- donazioni@sindromerenu.it
- segreteria@sindromerenu.it
- presidenza@sindromerenu.it (alias Stefania.rocca@sindromerenu.it)

## Stack Tecnologico
- **Backend**: Hono (TypeScript)
- **Deployment**: Cloudflare Pages
- **CSS**: Tailwind CSS (CDN)
- **Icone**: Font Awesome 6.4.0

## Deployment
- **Platform**: Cloudflare Pages
- **Build**: `npm run build` → dist/
- **Dev**: `pm2 start ecosystem.config.cjs`

## Sezione Brochure & Pubblicazioni Scientifiche (`/it/brochure`)
- **Database**: tabella D1 `brochure` (colonne: titolo/desc multilingue, `file_name`, `category`, `img_url`, `ordine`, `attiva`)
- **Categorie**: `category='brochure'` → brochure generali/materiali divulgativi; `category='pubblicazione'` → articoli e studi scientifici sulla Sindrome ReNU
- **API pubblica**: `GET /api/brochure?lang=it` (filtra per lingua, solo record `attiva=1`)
- **API admin (CRUD)**: `GET/POST/PUT/DELETE /api/admin/brochure[/:id]` — richiede header `X-Admin-Token`
- **File PDF pubblicazioni scientifiche** (in `public/static/`, generati con reportlab dai documenti forniti dall'associazione):
  - `pubblicazione-ricercatori-svedesi.pdf`
  - `pubblicazione-fenotipo-comportamentale-rnu4-2.pdf`
  - `pubblicazioni-rnu4-2-aprile-2026.pdf`
  - `pubblicazioni-rnu2-2-aggiornamento-completo.pdf`
  - `guida-epilessia-traduzione-italiana.pdf`
- **Nota**: 3 record storici (id 9, 12, 16) puntavano a documenti Google Drive senza un file sorgente fornito — sono stati disattivati (`attiva=0`) invece di restare visibili con link Drive esterni. Se in futuro verranno forniti i relativi documenti, si possono riattivare aggiornando `file_name` e `category` via API admin.

## Prossimi Sviluppi Raccomandati
1. Aggiungere immagini reali dell'associazione e dei bambini (con consenso)
2. Implementare una mappa interattiva italiana dei centri diagnostici
3. Form di contatto con invio email via Cloudflare Email Workers
4. Aggiungere video di sensibilizzazione
5. Blog/News per aggiornamenti sulla ricerca
6. Integrazione con Zeffy per donazioni online italiane
7. Registrazione dominio su Cloudflare e collegamento a www.sindromerenu.it
8. Fornire i documenti sorgente mancanti per i record pubblicazioni disattivati (id 9: Patologie ReNU/Progetto Vita, id 12: Aggiornamenti Scientifici Febbraio 2026, id 16: Documento Scientifico Febbraio 2026)
