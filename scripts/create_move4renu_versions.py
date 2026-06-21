#!/usr/bin/env python3
"""
Crea le versioni EN, FR, ES, DE di move4renu_it.jpg
Strategia PIXEL-PERFECT:
1. Copia 1:1 l'immagine IT (tutto: tartaruga, icone, sfondo, banner)
2. Copre con bianco SOLO le zone testo:
   - Testo principale (MUOVITI / PER RENU): rettangolo (42,90)→(590,330)
   - Etichette attività (Cammina/Corri/Pedala/Balla): rettangolo (40,515)→(580,575)
   - Testo banner (APRILE - ...): zona centrale del banner
3. Ridisegna il testo nuovo nelle stesse posizioni
"""
from PIL import Image, ImageDraw, ImageFont
import os

IMG_DIR   = '/home/user/webapp-renu/public/images'
FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'

COLOR_DARK_BLUE   = (13, 27, 77)
COLOR_RED_ORANGE  = (220, 75, 50)
COLOR_WHITE       = (255, 255, 255)
COLOR_BLUE_BANNER = (14, 116, 144)

# Zone testo IT misurate con numpy:
# - Testo principale: y=96..320, x=59..574
# - Etichette: y=520..566, x=51..565
# - Banner inizia a y=605
TEXT_BOX   = (42, 88,  592, 372)   # (x0,y0,x1,y1) rettangolo bianco su testo principale
LABEL_BOX  = (38, 512, 582, 572)   # rettangolo bianco su etichette attività
BANNER_Y   = 605                    # y dove inizia il banner cyan

LANGS = {
    'en': {
        'line1':      'MOVE',
        'line2_blue': '4',
        'line2_red':  'ReNU',
        'activities': ['Walk', 'Run', 'Bike', 'Dance'],
        'banner':     'THIS APRIL \u2014 Move to Raise Awareness for ReNU Syndrome',
    },
    'fr': {
        'line1':      'BOUGEZ',
        'line2_blue': 'POUR',
        'line2_red':  'ReNU',
        'activities': ['Marchez', 'Courez', 'P\u00e9dalez', 'Dansez'],
        'banner':     'CET AVRIL \u2014 Bougez pour le Syndrome ReNU',
    },
    'es': {
        'line1':      'MU\u00c9VETE',
        'line2_blue': 'POR',
        'line2_red':  'ReNU',
        'activities': ['Camina', 'Corre', 'Pedalea', 'Baila'],
        'banner':     'ESTE ABRIL \u2014 Mu\u00e9vete por el S\u00edndrome ReNU',
    },
    'de': {
        'line1':      'BEWEGT',
        'line2_blue': 'F\u00dcR',
        'line2_red':  'ReNU',
        'activities': ['Gehen', 'Laufen', 'Radfahren', 'Tanzen'],
        'banner':     'DIESER APRIL \u2014 Bewegt Euch f\u00fcr das ReNU-Syndrom',
    },
}

def load_font(size):
    try:
        return ImageFont.truetype(FONT_BOLD, size)
    except:
        return ImageFont.load_default()

def best_size(draw, text, max_w, sizes):
    for sz in sizes:
        f = load_font(sz)
        bb = draw.textbbox((0, 0), text, font=f)
        if (bb[2] - bb[0]) <= max_w:
            return sz, f
    return sizes[-1], load_font(sizes[-1])


def create_version(lang_code, cfg):
    it_path  = os.path.join(IMG_DIR, 'move4renu_it.jpg')
    out_path = os.path.join(IMG_DIR, f'move4renu_{lang_code}.jpg')

    # ── 1. Copia 1:1 l'immagine IT ───────────────────────────────────────────
    img = Image.open(it_path).convert('RGB').copy()
    W, H = img.size
    draw = ImageDraw.Draw(img)

    # ── 2a. Copre testo principale con bianco ─────────────────────────────────
    draw.rectangle(TEXT_BOX, fill=COLOR_WHITE)

    # ── 2b. Copre etichette attività con bianco ───────────────────────────────
    draw.rectangle(LABEL_BOX, fill=COLOR_WHITE)

    # ── 2c. Copre testo banner (lascia lo sfondo cyan, ridisegna solo testo) ──
    # Usiamo un rettangolo un po' più stretto del banner per non toccare i bordi
    draw.rectangle([(10, BANNER_Y + 5), (W - 10, H - 5)], fill=COLOR_BLUE_BANNER)

    # ── 3. Ridisegna testo principale ────────────────────────────────────────
    line1    = cfg['line1']
    line2_bl = cfg['line2_blue']
    line2_rd = cfg['line2_red']
    full2    = (line2_bl + ' ' + line2_rd).strip() if line2_bl else line2_rd

    # Larghezza disponibile: dalla margin fino al bordo del box testo
    margin   = 59   # allineato al margine sinistro dell'IT
    avail_w  = TEXT_BOX[2] - margin - 10

    SIZES = [140, 130, 120, 110, 100, 90, 80, 70, 60]
    fs1, _ = best_size(draw, line1, avail_w, SIZES)
    fs2, _ = best_size(draw, full2, avail_w, SIZES)
    fs     = min(fs1, fs2)
    f_main = load_font(fs)

    # Posizione y1: stessa dell'IT (testo inizia a y≈96)
    y1 = 96
    draw.text((margin, y1), line1, font=f_main, fill=COLOR_DARK_BLUE)

    bb1 = draw.textbbox((0, 0), line1, font=f_main)
    h1  = bb1[3] - bb1[1]
    y2  = y1 + h1 + 8

    # line2: parte blu + "ReNU" rosso
    x_cur = margin
    if line2_bl:
        bl_text = line2_bl + ' '
        draw.text((x_cur, y2), bl_text, font=f_main, fill=COLOR_DARK_BLUE)
        bb_bl = draw.textbbox((0, 0), bl_text, font=f_main)
        x_cur += bb_bl[2] - bb_bl[0]
    draw.text((x_cur, y2), line2_rd, font=f_main, fill=COLOR_RED_ORANGE)

    # ── 4. Ridisegna etichette attività ──────────────────────────────────────
    # Nell'IT le 4 etichette sono a y≈546..566, x da 51 a 564
    # Le icone occupano x=80..575 divise in 4 slot da ~124px ciascuna
    # Slot centri (misurati): ~140, ~265, ~390, ~510
    activities = cfg['activities']
    f_act  = load_font(19)

    # Usiamo gli stessi centri x delle icone IT
    # Le icone nell'IT sono in 4 colonne uguali su x=80..575 → slot_w=123.75
    icon_x0   = 80
    icon_x1   = 576
    slot_w    = (icon_x1 - icon_x0) / 4
    label_y   = 546   # y di partenza delle etichette nell'IT

    for i, act in enumerate(activities):
        cx  = int(icon_x0 + i * slot_w + slot_w / 2)
        abb = draw.textbbox((0, 0), act, font=f_act)
        tw  = abb[2] - abb[0]
        draw.text((cx - tw // 2, label_y), act, font=f_act, fill=COLOR_DARK_BLUE)

    # ── 5. Ridisegna testo banner ─────────────────────────────────────────────
    banner_text = cfg['banner']
    for sz in [22, 19, 17, 15, 13, 11]:
        f = load_font(sz)
        bb = draw.textbbox((0, 0), banner_text, font=f)
        tw = bb[2] - bb[0]
        if tw <= W - 60:
            f_banner = f
            bh = bb[3] - bb[1]
            break

    x_b = (W - tw) // 2
    y_b = BANNER_Y + ((H - BANNER_Y) - bh) // 2
    draw.text((x_b, y_b), banner_text, font=f_banner, fill=COLOR_WHITE)

    # ── 6. Salva ──────────────────────────────────────────────────────────────
    img.save(out_path, 'JPEG', quality=95)
    v = Image.open(out_path)
    print(f'  -> {os.path.basename(out_path)} {v.size}')


for lang, cfg in LANGS.items():
    print(f'Creo {lang}...')
    create_version(lang, cfg)

print('\nDone!')
