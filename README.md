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

## Prossimi Sviluppi Raccomandati
1. Aggiungere immagini reali dell'associazione e dei bambini (con consenso)
2. Implementare una mappa interattiva italiana dei centri diagnostici
3. Form di contatto con invio email via Cloudflare Email Workers
4. Aggiungere video di sensibilizzazione
5. Blog/News per aggiornamenti sulla ricerca
6. Integrazione con Zeffy per donazioni online italiane
7. Registrazione dominio su Cloudflare e collegamento a www.sindromerenu.it
