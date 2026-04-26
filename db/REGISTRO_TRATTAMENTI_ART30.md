# REGISTRO DEI TRATTAMENTI – Art. 30 GDPR
## Sindrome ReNU Italia APS

**Documento:** Registro delle Attività di Trattamento  
**Normativa:** Art. 30 Reg. UE 2016/679 (GDPR) + D.Lgs. 196/2003 (come modificato dal D.Lgs. 101/2018)  
**Versione:** 2.0 – Aprile 2026  
**Titolare del Trattamento:** Sindrome ReNU Italia APS  
**DPO:** In fase di nomina (contatto interim: info@sindromerenu.it)  
**Classificazione:** Documento interno – riservato – da esibire al Garante su richiesta

---

## ⚠️ NOTE PRELIMINARI OBBLIGATORIE

L'associazione tratta **dati sanitari di minori** (Sindrome ReNU è una malattia genetica rara che colpisce bambini). Questo impone:

1. **Art. 9 GDPR** – I dati sanitari sono "categoria speciale" → consenso **esplicito e separato** obbligatorio
2. **Art. 8 GDPR** – Per i minori di 16 anni il consenso lo deve dare il genitore/tutore
3. **Art. 35 GDPR** – Valutazione d'Impatto (DPIA) raccomandata prima di trattare dati sanitari di minori a larga scala
4. **Garante italiano** – Provvedimento 8 maggio 2003 e Linee guida 2021 su dati sanitari

---

## TRATTAMENTO 1 – Gestione adesioni soci

| Campo | Valore |
|-------|--------|
| **Denominazione** | Gestione adesioni all'associazione |
| **Finalità** | Raccolta e gestione iscrizioni, comunicazioni associative, rendicontazione |
| **Base giuridica** | Art. 6.1.b (esecuzione rapporto associativo) + Art. 9.2.a (consenso esplicito per dati minore) |
| **Categorie di interessati** | Adulti maggiorenni (genitori/tutori di minori con Sindrome ReNU) |
| **Categorie di dati** | Nome, cognome, email, città; nome e età del bambino, diagnosi confermata (dati Art. 9) |
| **Destinatari** | Board associativo (presidente, vicepresidente, segretario). Nessuna cessione a terzi. |
| **Trasferimenti extra-UE** | Nessuno. Server Cloudflare Frankfurt/Amsterdam (UE) |
| **Periodo conservazione** | Per tutta la durata del rapporto associativo + 5 anni |
| **Misure di sicurezza** | HTTPS/TLS 1.3, database con vincoli CHECK, audit log, accesso limitato a token admin, IP anonimizzato |
| **Sub-processor** | Cloudflare Inc. (DPA firmato, Standard Contractual Clauses) |

---

## TRATTAMENTO 2 – Gestione richieste informazioni (Contatti)

| Campo | Valore |
|-------|--------|
| **Denominazione** | Risposta a richieste di informazioni |
| **Finalità** | Rispondere a domande di famiglie, caregiver, professionisti sanitari sulla Sindrome ReNU |
| **Base giuridica** | Art. 6.1.a (consenso dell'interessato) |
| **Categorie di interessati** | Famiglie, caregiver, medici, giornalisti, ricercatori |
| **Categorie di dati** | Nome, email, contenuto del messaggio (potenzialmente include informazioni sanitarie volontarie) |
| **Destinatari** | Segreteria e presidenza associativa. Nessuna cessione a terzi. |
| **Trasferimenti extra-UE** | Nessuno |
| **Periodo conservazione** | 2 anni dalla data di ricezione, poi cancellazione automatica |
| **Misure di sicurezza** | HTTPS/TLS, audit log, accesso limitato |
| **Sub-processor** | Cloudflare Inc. (DPA firmato) |

---

## TRATTAMENTO 3 – Gestione donazioni

| Campo | Valore |
|-------|--------|
| **Denominazione** | Tracciabilità donazioni e rendicontazione fiscale |
| **Finalità** | Registrazione donazioni, adempimenti fiscali obbligatori, rilascio ricevute |
| **Base giuridica** | Art. 6.1.c (obbligo legale: D.Lgs. 127/2015 sulla tracciabilità, Codice Terzo Settore D.Lgs. 117/2017) |
| **Categorie di interessati** | Donatori (persone fisiche e giuridiche) |
| **Categorie di dati** | Nome, email, importo, metodo di pagamento, riferimento transazione |
| **Destinatari** | Tesoriere e presidente. Commercialista esterno (se nominato responsabile). |
| **Trasferimenti extra-UE** | Nessuno |
| **Periodo conservazione** | **10 anni** (obbligo fiscale inderogabile – Art. 22 D.P.R. 600/1973) |
| **Misure di sicurezza** | HTTPS/TLS, audit log, accesso limitato a tesoriere e presidente |
| **Sub-processor** | Cloudflare Inc. (DPA firmato) |
| **⚠️ Nota** | Per obbligo legale i dati delle donazioni NON possono essere cancellati prima di 10 anni. Su richiesta di diritto all'oblio vengono pseudonimizzati (nome→"ANONIMO") ma conservati per importo e data. |

---

## TRATTAMENTO 4 – Pubblicazione storie famiglie

| Campo | Valore |
|-------|--------|
| **Denominazione** | Raccolta e pubblicazione storie di famiglie con bambini con Sindrome ReNU |
| **Finalità** | Sensibilizzazione pubblica, sostegno emotivo alle famiglie, advocacy |
| **Base giuridica** | **Art. 9.2.a GDPR** – consenso esplicito per dati sanitari di minori |
| **Categorie di interessati** | Minori con Sindrome ReNU (tramite consenso genitori/tutori) |
| **Categorie di dati** | Nome del bambino, storia di vita, eventuale fotografia, paese di residenza |
| **Destinatari** | Pubblico generale (sito web). Nessuna altra cessione. |
| **Trasferimenti extra-UE** | Potenzialmente sì (sito pubblico accessibile globalmente). I dati pubblicati sono minimi (solo nome, no cognome né dati identificativi completi) |
| **Periodo conservazione** | Fino a revoca del consenso da parte del genitore/tutore |
| **Misure di sicurezza** | Consenso scritto separato, revisione editoriale manuale, nessun dato sanitario dettagliato pubblicato |
| **⚠️ Nota DPIA** | Questo trattamento coinvolge dati sanitari di minori su piattaforma pubblica. **Si raccomanda una Valutazione d'Impatto (DPIA) ai sensi dell'Art. 35 GDPR** prima di ampliare la pubblicazione. |

---

## TRATTAMENTO 5 – Newsletter e lista attesa soci

| Campo | Valore |
|-------|--------|
| **Denominazione** | Comunicazioni informative via email |
| **Finalità** | Invio aggiornamenti su associazione, ricerca, eventi; notifica apertura iscrizioni |
| **Base giuridica** | Art. 6.1.a (consenso) |
| **Categorie di interessati** | Iscritti alla newsletter, interessati all'associazione |
| **Categorie di dati** | Nome, email |
| **Destinatari** | Segreteria. Nessuna cessione a terzi o uso a fini commerciali. |
| **Trasferimenti extra-UE** | Nessuno (se si usa un ESP europeo; verificare prima di adottare Mailchimp/US) |
| **Periodo conservazione** | Fino a revoca consenso. Link "Cancella iscrizione" in ogni email. |
| **Misure di sicurezza** | Token di cancellazione unico per ogni iscritto |

---

## TRATTAMENTO 6 – Log di navigazione (tecnico)

| Campo | Valore |
|-------|--------|
| **Denominazione** | Log tecnici del server web |
| **Finalità** | Sicurezza informatica, rilevazione attacchi, debug tecnico |
| **Base giuridica** | Art. 6.1.f (legittimo interesse alla sicurezza del sistema) |
| **Categorie di dati** | Indirizzo IP (anonimizzato SHA-256), browser, pagine visitate, timestamp |
| **Periodo conservazione** | 12 mesi |
| **Note** | Gli IP sono anonimizzati con hash SHA-256 prima della conservazione. Non è possibile risalire all'IP originale. Nessun cookie di profilazione. |

---

## CHECKLIST GDPR – Stato di Conformità

| Requisito | Stato | Note |
|-----------|-------|------|
| Informativa Privacy pubblicata | ✅ | Su /privacy – aggiornata aprile 2026 |
| Cookie banner | ✅ | Solo cookie tecnici, nessuna profilazione |
| Consenso esplicito prima del trattamento | ✅ | Vincolo DB CHECK(consenso_gdpr=1) |
| Consenso separato per dati minori (Art. 9) | ✅ | Campo consenso_dati_minore separato |
| Data e versione consenso tracciata | ✅ | Campi data_consenso, testo_consenso_versione |
| IP anonimizzato | ✅ | SHA-256 hash, non reversibile |
| Audit log accessi ai dati | ✅ | Tabella audit_log |
| Diritto di accesso (Art. 15) | ✅ | Via email info@sindromerenu.it |
| Diritto di rettifica (Art. 16) | ✅ | Via email info@sindromerenu.it |
| Diritto all'oblio (Art. 17) | ✅ | Endpoint /api/admin/erasure/<email> |
| Diritto alla portabilità (Art. 20) | ✅ | Export JSON via admin panel |
| Diritto di opposizione (Art. 21) | ✅ | Via email info@sindromerenu.it |
| Admin panel protetto da password | ✅ | Token segreto (X-Admin-Token) |
| GET dati personali protette | ✅ | Richiedono autenticazione admin |
| Registro trattamenti Art. 30 | ✅ | Questo documento + tabella DB |
| DPO nominato | ⚠️ | In fase di nomina. Consigliato per APS con dati sanitari. |
| DPIA per dati minori (Art. 35) | ⚠️ | Da effettuare prima di ampliare gallery/storie |
| Contratti DPA con sub-processor | ✅ | Cloudflare ha DPA firmato + SCCs |
| Formazione personale GDPR | ⚠️ | Da documentare (board + volontari con accesso dati) |

---

## CONTATTI PER ESERCIZIO DIRITTI

**Titolare del trattamento:**  
Sindrome ReNU Italia APS  
Email: info@sindromerenu.it  
PEC: sindromerenuitalia@legalmail.it  
Tel: +39 335 730 1206  

**Per esercitare i tuoi diritti (Art. 15-22 GDPR):**  
Scrivi a info@sindromerenu.it con oggetto "GDPR – [tipo richiesta]"  
Risposta entro 30 giorni (Art. 12.3 GDPR)  

**Autorità di controllo:**  
Garante per la Protezione dei Dati Personali  
www.garanteprivacy.it  
Piazza Venezia 11, 00187 Roma  

---

*Documento aggiornato: Aprile 2026 – Da aggiornare ogni volta che si modifica un trattamento*
