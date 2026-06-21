#!/usr/bin/env python3
"""
Crea le versioni EN, FR, ES, DE di move4renu.jpg
Strategia FINALE PULITA:
- Incolla la zona tartaruga (x >= 610) dall'immagine IT
- Costruisce il pannello sinistro bianco da zero
- Non tocca la diagonale: la lascia provenire dall'IT (zona 610+)
- Il testo IT finisce a x=575, quindi x=610 è GARANTITO pulito
"""
from PIL import Image, ImageDraw, ImageFont
import os

IMG_DIR   = '/home/user/webapp-renu/public/images'
FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'

COLOR_DARK_BLUE   = (13, 27, 77)
COLOR_RED_ORANGE  = (220, 75, 50)
COLOR_WHITE       = (255, 255, 255)
COLOR_BLUE_BANNER = (14, 116, 144)

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

def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()


def create_version(lang_code, cfg):
    it_path  = os.path.join(IMG_DIR, 'move4renu_it.jpg')
    out_path = os.path.join(IMG_DIR, f'move4renu_{lang_code}.jpg')

    it = Image.open(it_path).convert('RGB')
    W, H = it.size   # 1200, 670

    # ── 1. Canvas bianco puro ──────────────────────────────────────────────
    img = Image.new('RGB', (W, H), COLOR_WHITE)

    # ── 2. Incolla zona tartaruga/verde dall'IT ────────────────────────────
    # Il testo IT finisce a x=575, MA il testo si estende nella zona verde
    # a partire da x=630 (il testo IT è sovrapposto alla tartaruga).
    # Usiamo x_cut=625 e poi copriamo con bianco fino a x=660 per
    # eliminare il testo residuo che si vede nella transizione.
    x_cut = 625
    right_zone = it.crop((x_cut, 0, W, H - 55))
    img.paste(right_zone, (x_cut, 0))

    # ── 2b. Ridisegna pannello sinistro bianco SOLIDO ─────────────────────
    # Copre la zona sinistra ESTESA fino a 660 per eliminare il testo IT
    # che sconfina nella zona verde (verificato: pixel scuri a x=630..640+)
    draw_temp = ImageDraw.Draw(img)
    draw_temp.rectangle([(0, 0), (660, H - 56)], fill=COLOR_WHITE)

    # ── 3. Banner ─────────────────────────────────────────────────────────
    draw = ImageDraw.Draw(img)
    banner_h = 55
    banner_y = H - banner_h
    draw.rectangle([(0, banner_y), (W, H)], fill=COLOR_BLUE_BANNER)

    banner_text = cfg['banner']
    for sz in [22, 19, 17, 15, 13]:
        f = load_font(FONT_BOLD, sz)
        bb = draw.textbbox((0,0), banner_text, font=f)
        if (bb[2]-bb[0]) <= W - 40:
            f_banner, bb_b = f, bb
            break

    tw_b = bb_b[2] - bb_b[0]
    x_b  = (W - tw_b) // 2
    y_b  = banner_y + (banner_h - (bb_b[3] - bb_b[1])) // 2
    draw.text((x_b, y_b), banner_text, font=f_banner, fill=COLOR_WHITE)

    # ── 4. Testo principale ───────────────────────────────────────────────
    line1    = cfg['line1']
    line2_bl = cfg['line2_blue']
    line2_rd = cfg['line2_red']
    full2    = (line2_bl + ' ' + line2_rd).strip()

    # Larghezza disponibile per il testo: da margin fino a x_cut con un po' di margine
    margin  = 42
    avail_w = x_cut - margin - 30   # ~538px

    # Trova font size ottimale per line1
    def best_size(text, max_w, sizes):
        for sz in sizes:
            f = load_font(FONT_BOLD, sz)
            bb = draw.textbbox((0,0), text, font=f)
            if (bb[2]-bb[0]) <= max_w:
                return sz
        return sizes[-1]

    SIZES = [120, 110, 100, 90, 80, 70, 60, 50]
    fs1 = best_size(line1, avail_w, SIZES)
    fs2 = best_size(full2, avail_w, SIZES)
    # Usa la stessa dimensione per entrambe le righe (il minore dei due)
    fs  = min(fs1, fs2)
    f1 = load_font(FONT_BOLD, fs)
    f2 = load_font(FONT_BOLD, fs)

    y1 = 52
    draw.text((margin, y1), line1, font=f1, fill=COLOR_DARK_BLUE)

    bb1 = draw.textbbox((0,0), line1, font=f1)
    h1  = bb1[3] - bb1[1]
    y2  = y1 + h1 + 10

    # line2: parte blu + "ReNU" rosso
    x_cur = margin
    if line2_bl:
        bl_text = line2_bl + ' '
        draw.text((x_cur, y2), bl_text, font=f2, fill=COLOR_DARK_BLUE)
        bb_bl = draw.textbbox((0,0), bl_text, font=f2)
        x_cur += bb_bl[2] - bb_bl[0]
    draw.text((x_cur, y2), line2_rd, font=f2, fill=COLOR_RED_ORANGE)

    bb2 = draw.textbbox((0,0), full2, font=f2)
    h2  = bb2[3] - bb2[1]

    # ── 5. Icone (dall'IT, zona garantita x<575) ──────────────────────────
    # Nell'IT le 4 icone occupano y≈322..488, x=22..560 (verificato: arrivano a x=550)
    # Tutte stanno prima di x=575 (fine testo) quindi sicure
    icons_src = it.crop((22, 322, 560, 490))
    icon_h    = 490 - 322  # 168
    icon_w    = 560 - 22   # 538

    icons_y = y2 + h2 + 32
    if icons_y + icon_h < banner_y - 5:
        img.paste(icons_src, (22, icons_y))

        # Etichette sotto le icone
        activities = cfg['activities']
        f_act  = load_font(FONT_BOLD, 19)
        slot_w = icon_w // 4   # ~121px
        act_y  = icons_y + icon_h + 3
        for i, act in enumerate(activities):
            x_c  = 22 + i * slot_w + slot_w // 2
            abb  = draw.textbbox((0,0), act, font=f_act)
            tw_a = abb[2] - abb[0]
            draw.text((x_c - tw_a // 2, act_y), act, font=f_act, fill=COLOR_DARK_BLUE)

    # ── 6. Salva ──────────────────────────────────────────────────────────
    img.save(out_path, 'JPEG', quality=93)
    v = Image.open(out_path)
    print(f'  -> {os.path.basename(out_path)} {v.size}')


for lang, cfg in LANGS.items():
    print(f'Creo {lang}...')
    create_version(lang, cfg)

print('\nDone!')
