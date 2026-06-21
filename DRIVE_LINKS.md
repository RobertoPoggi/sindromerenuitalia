# DRIVE_LINKS.md — Link e ID Google Drive catalogati
> Aggiornato: 2026-06-21
> Fonte: https://drive.google.com/drive/folders/1b2SDQ1sJSUjny6IXAg2ZbRvjmWWZ_vEN

---

## 📁 Cartella root Drive
| Risorsa | ID / Link |
|---------|-----------|
| Cartella root "immagini sito" | `1b2SDQ1sJSUjny6IXAg2ZbRvjmWWZ_vEN` |

---

## 📖 Storie (cartella "immagini sito")

| Nome | File Drive | ID File | Stato DB |
|------|-----------|---------|----------|
| Vittoria | `Ciao a tutti amici.docx` | `1cBNpQo7RmYsXdH5VkwJOaFTiUe6lN3vg` | ✅ desc 5 lingue |
| Meilda | `presentazione Meilda.docx` | `1aGILw_zGTWIoUlBd2pMuKBXvPEpf5DRg` | ✅ desc 5 lingue |
| Maya Sofia | `Mi chiamo Maya Sofia (1).docx` | `1gHv8_mZr4TXkqn9VpzJLbKCfW3uNsR2e` | ✅ desc 5 lingue, nome aggiornato |

---

## 📚 Progetti (cartella "progetti")

| Nome | File Drive | ID File | Tabella DB | Stato |
|------|-----------|---------|-----------|-------|
| Patologie ReNU – Progetto Vita | `patologie Renu - Progetto vita.docx` (solo immagini) | `1WpwAG_WlMYm3nlb2ZZ_KsRUipf2SISLN` | `brochure` | ✅ inserito, ordine=1 |

---

## 📰 Media & Pubblicazioni (cartella "Media & Pubblicazioni")

| Titolo | File Drive | ID File | Tabella DB | ordine |
|--------|-----------|---------|-----------|--------|
| Ricercatori svedesi riprogrammano cellule cerebrali | `notizia ricercatori svedesi.docx` | `12wfdI7tEqMO-QGlPiat0tAbaKRfpF4dD` | `brochure` | 2 |
| Caratteristiche Longitudinali Fenotipo Comportamentale RNU4-2 | `Caratteristiche longitudinali del fenotipo.docx` | `1oyFL7hoxnco9uBN9jqwvbjUM0cul00LF` | `brochure` | 3 |
| Aggiornamenti Scientifici – Febbraio 2026 | `aggiornamenti scientifici mensili febbraio 2026.docx` | `1Sg24rDxNYdEeBy_IzeGLltT8hTC2m_ZA` | `brochure` | 4 |
| Nuove Pubblicazioni Scientifiche – Aprile 2026 | `aggiornamenti aprile 2026.docx` | `1R-wk8-U5DkCIpxE1jo1N_TsuXvKXB8tJ` | `brochure` | 5 |
| Pubblicazioni Scientifiche RNU – Aggiornamento Completo | `file piu recente per sito pubblicazioni.docx` | `12GZcBCWsCbQxdjier9URlugOtNKVKvg8` | `brochure` | 6 |
| Guida all'Epilessia – Traduzione Italiana | `Epilepsy guide_traduzione italiana.pdf` | `1k6Kbw6a8FNRgYs-PFlYVcCIiruFl9hQr` | `brochure` | 7 |
| Documento Scientifico – Febbraio 2026 | `doc feb 2026.pdf` | `1E8uMZCUkBv9chgFf3kaYJSu7G-Q2WVMb` | `brochure` | 8 |

---

## 🔗 URL costruzione

Per aprire un file Drive direttamente:
```
https://drive.google.com/file/d/{FILE_ID}/view
```

Per download diretto:
```
https://drive.google.com/uc?export=download&id={FILE_ID}
```

---

## ℹ️ Note tecniche

- I file `.docx` delle storie sono stati estratti con `python-docx` e il testo è stato inserito nel DB in 5 lingue (it/en/fr/es/de)
- `patologie_progetto_vita.docx` contiene solo immagini (nessun testo estraibile con python-docx) — inserito nel DB con descrizione generata
- Tutti gli URL Drive nella tabella `brochure.file_name` sono URL completi https:// e vengono rilevati automaticamente dal frontend (apertura in nuova tab invece di download locale)
- La tabella `brochure` è stata estesa con colonne `desc_fr`, `desc_es`, `desc_de` tramite migrazione 0004 (2026-06-21)
