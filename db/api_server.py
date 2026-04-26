#!/usr/bin/env python3
"""
API Server GDPR-Compliant v2.0 – Sindrome ReNU Italia APS
Normativa: Reg. UE 2016/679 (GDPR) + D.Lgs. 196/2003
"""
from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS
import sqlite3, os, hashlib, secrets, re
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)
CORS(app, origins=[
    'https://sindromerenu.it','https://www.sindromerenu.it',
    'https://sindromerenu-italia.pages.dev','http://localhost:3000'
])

DB_PATH = os.path.join(os.path.dirname(__file__), 'sindromerenu.db')
VERSION_PRIVACY = '2.0'

ADMIN_TOKEN = os.environ.get('ADMIN_TOKEN', '')
if not ADMIN_TOKEN:
    ADMIN_TOKEN = secrets.token_hex(32)
    print(f"\n{'='*60}")
    print(f"ADMIN TOKEN (header X-Admin-Token):\n   {ADMIN_TOKEN}")
    print(f"{'='*60}\n")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn

def hash_ip(ip):
    if not ip: return ''
    return hashlib.sha256(f"renu26:{ip}".encode()).hexdigest()[:16]

def get_ip():
    return (request.headers.get('CF-Connecting-IP') or
            request.headers.get('X-Forwarded-For','').split(',')[0].strip() or
            request.remote_addr or '')

def audit(db, tabella, record_id, azione, operatore='sistema', note=''):
    db.execute(
        "INSERT INTO audit_log(tabella,record_id,azione,operatore,ip_hash,note) VALUES(?,?,?,?,?,?)",
        (tabella, record_id, azione, operatore, hash_ip(get_ip()), note)
    )

def valida_email(e):
    return bool(re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', str(e).strip()))

def san(v, n=500):
    return '' if v is None else str(v).strip()[:n]

def require_admin(f):
    @wraps(f)
    def dec(*a, **kw):
        tok = request.headers.get('X-Admin-Token','')
        if not tok or not secrets.compare_digest(tok, ADMIN_TOKEN):
            return jsonify({'error':'Non autorizzato','code':'UNAUTHORIZED'}), 401
        return f(*a, **kw)
    return dec

# ── HEALTH ────────────────────────────────────────────────────────────────────
@app.route('/api/health')
def health():
    try:
        get_db().execute('SELECT 1').fetchone()
        return jsonify({'status':'ok','gdpr':'v2.0','version':'2.0'})
    except Exception as e:
        return jsonify({'status':'error','detail':str(e)}), 500

# ── ADESIONI ──────────────────────────────────────────────────────────────────
@app.route('/api/adesioni', methods=['POST'])
def submit_adesione():
    data = request.get_json(silent=True) or request.form.to_dict()
    err = {}
    if not data.get('consenso_gdpr'):
        err['consenso_gdpr'] = 'Consenso obbligatorio (Art. 6.1.b GDPR).'
    if not san(data.get('nome','')) or len(san(data.get('nome',''))) < 2:
        err['nome'] = 'Nome obbligatorio.'
    if not san(data.get('cognome','')) or len(san(data.get('cognome',''))) < 2:
        err['cognome'] = 'Cognome obbligatorio.'
    if not valida_email(data.get('email','')):
        err['email'] = 'Email valida obbligatoria.'
    if err:
        return jsonify({'success':False,'errors':err}), 400
    ha_minore = bool(san(data.get('bambino_nome','')))
    if ha_minore and not data.get('consenso_dati_minore'):
        return jsonify({'success':False,'errors':{'consenso_dati_minore':
            'Consenso esplicito obbligatorio per dati del bambino (Art. 9 GDPR).'}}), 400
    db = get_db()
    cur = db.execute(
        '''INSERT INTO adesioni
           (nome,cognome,email,citta,tipo_membro,bambino_nome,bambino_eta,
            bambino_diagnosi,come_conosciuto,
            consenso_gdpr,consenso_dati_minore,consenso_comunicazioni,
            data_consenso,testo_consenso_versione,ip_hash)
           VALUES(?,?,?,?,?,?,?,?,?,1,?,?,CURRENT_TIMESTAMP,?,?)''',
        (san(data.get('nome')), san(data.get('cognome')),
         san(data.get('email'),200), san(data.get('citta')),
         san(data.get('tipo_membro','famiglia')),
         san(data.get('bambino_nome')) if ha_minore else '',
         san(data.get('bambino_eta')),
         1 if data.get('bambino_diagnosi') else 0,
         san(data.get('come_conosciuto')),
         1 if data.get('consenso_dati_minore') else 0,
         1 if data.get('consenso_comunicazioni') else 0,
         VERSION_PRIVACY, hash_ip(get_ip()))
    )
    audit(db,'adesioni',cur.lastrowid,'INSERT','form_web',
          f"tipo={san(data.get('tipo_membro','famiglia'))}")
    db.commit()
    return jsonify({'success':True,
        'message':'Adesione ricevuta! Ti contatteremo entro 5 giorni lavorativi.',
        'privacy':'Dati trattati ai sensi della Privacy Policy v'+VERSION_PRIVACY}), 201

# ── CONTATTI ──────────────────────────────────────────────────────────────────
@app.route('/api/contatti', methods=['POST'])
def submit_contatto():
    data = request.get_json(silent=True) or request.form.to_dict()
    err = {}
    if not data.get('consenso_gdpr'): err['consenso_gdpr'] = 'Consenso obbligatorio.'
    if len(san(data.get('nome',''))) < 2: err['nome'] = 'Nome obbligatorio.'
    if not valida_email(data.get('email','')): err['email'] = 'Email valida obbligatoria.'
    if len(san(data.get('messaggio',''),2000)) < 10: err['messaggio'] = 'Messaggio troppo breve.'
    if err: return jsonify({'success':False,'errors':err}), 400
    db = get_db()
    cur = db.execute(
        '''INSERT INTO contatti(nome,email,oggetto,messaggio,
           consenso_gdpr,data_consenso,testo_consenso_versione,ip_hash)
           VALUES(?,?,?,?,1,CURRENT_TIMESTAMP,?,?)''',
        (san(data.get('nome')), san(data.get('email'),200),
         san(data.get('oggetto')), san(data.get('messaggio'),2000),
         VERSION_PRIVACY, hash_ip(get_ip()))
    )
    audit(db,'contatti',cur.lastrowid,'INSERT','form_web')
    db.commit()
    return jsonify({'success':True,'message':'Messaggio ricevuto! Risposta entro 48-72h.'}), 201

# ── DONAZIONI ─────────────────────────────────────────────────────────────────
@app.route('/api/donazioni', methods=['POST'])
def submit_donazione():
    data = request.get_json(silent=True) or request.form.to_dict()
    # CRITICO: consenso obbligatorio anche per donazioni
    if not data.get('consenso_gdpr'):
        return jsonify({'success':False,'errors':{'consenso_gdpr':
            'Consenso obbligatorio. Dati donazione conservati 10 anni (Art.6.1.c GDPR).'}}), 400
    db = get_db()
    importo = None
    try: importo = float(data.get('importo',0)) if data.get('importo') else None
    except: pass
    cur = db.execute(
        '''INSERT INTO donazioni
           (nome,email,anonimo,importo,tipo,metodo,messaggio,
            consenso_gdpr,data_consenso,testo_consenso_versione,ip_hash)
           VALUES(?,?,?,?,?,?,?,1,CURRENT_TIMESTAMP,?,?)''',
        (san(data.get('nome')), san(data.get('email'),200),
         1 if data.get('anonimo') else 0, importo,
         san(data.get('tipo','singola')), san(data.get('metodo','bonifico')),
         san(data.get('messaggio'),500),
         VERSION_PRIVACY, hash_ip(get_ip()))
    )
    audit(db,'donazioni',cur.lastrowid,'INSERT','form_web',
          f"importo={importo} metodo={san(data.get('metodo','?'))}")
    db.commit()
    return jsonify({'success':True,'message':'Grazie! Conferma via email.'}), 201

# ── LISTA ATTESA ──────────────────────────────────────────────────────────────
@app.route('/api/lista-attesa', methods=['POST'])
def submit_lista_attesa():
    data = request.get_json(silent=True) or request.form.to_dict()
    err = {}
    if not data.get('consenso_gdpr'): err['consenso_gdpr'] = 'Consenso obbligatorio.'
    if not san(data.get('nome','')): err['nome'] = 'Nome obbligatorio.'
    if not san(data.get('cognome','')): err['cognome'] = 'Cognome obbligatorio.'
    if not valida_email(data.get('email','')): err['email'] = 'Email valida obbligatoria.'
    if err: return jsonify({'success':False,'errors':err}), 400
    db = get_db()
    try:
        cur = db.execute(
            '''INSERT INTO lista_attesa
               (nome,cognome,email,citta,tipo,
                consenso_gdpr,consenso_newsletter,
                data_consenso,testo_consenso_versione,ip_hash,token_cancellazione)
               VALUES(?,?,?,?,?,1,?,CURRENT_TIMESTAMP,?,?,?)''',
            (san(data.get('nome')), san(data.get('cognome')),
             san(data.get('email'),200), san(data.get('citta')),
             san(data.get('tipo','lista_attesa')),
             1 if data.get('consenso_newsletter') else 0,
             VERSION_PRIVACY, hash_ip(get_ip()), secrets.token_urlsafe(32))
        )
        audit(db,'lista_attesa',cur.lastrowid,'INSERT','form_web')
        db.commit()
        return jsonify({'success':True,'message':'Iscrizione confermata!'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'success':False,'message':'Email già presente.'}), 409

# ── STORIE ────────────────────────────────────────────────────────────────────
@app.route('/api/storie/submit', methods=['POST'])
def submit_storia():
    data = request.get_json(silent=True) or request.form.to_dict()
    err = {}
    if not data.get('consenso_gdpr'): err['consenso_gdpr'] = 'Consenso obbligatorio.'
    if not data.get('consenso_nome'): err['consenso_nome'] = 'Consenso nome bambino obbligatorio.'
    if not san(data.get('nome_bambino','')): err['nome_bambino'] = 'Nome bambino obbligatorio.'
    if len(san(data.get('testo',''),5000)) < 30: err['testo'] = 'Storia troppo breve (min 30 car.).'
    if err: return jsonify({'success':False,'errors':err}), 400
    db = get_db()
    cur = db.execute(
        '''INSERT INTO storie
           (nome_bambino,paese,testo_it,
            consenso_gdpr,consenso_immagine,consenso_nome,
            data_consenso,tipo_consenso,rif_consenso,pubblicata)
           VALUES(?,?,?,1,?,1,CURRENT_TIMESTAMP,?,?,0)''',
        (san(data.get('nome_bambino')), san(data.get('paese','Italia')),
         san(data.get('testo'),5000),
         1 if data.get('consenso_immagine') else 0,
         san(data.get('tipo_consenso','email')),
         san(data.get('email_genitore','')))
    )
    audit(db,'storie',cur.lastrowid,'INSERT','form_web','In moderazione')
    db.commit()
    return jsonify({'success':True,
        'message':'Storia ricevuta! Pubblicazione dopo revisione (max 7 giorni).'}), 201

# ── CONTENUTI PUBBLICI ────────────────────────────────────────────────────────
@app.route('/api/faq')
def get_faq():
    rows = get_db().execute('SELECT * FROM faq WHERE attiva=1 ORDER BY categoria,ordine').fetchall()
    return jsonify([dict(r) for r in rows])

@app.route('/api/news')
def get_news():
    rows = get_db().execute('SELECT * FROM news WHERE pubblicata=1 ORDER BY created_at DESC LIMIT 50').fetchall()
    return jsonify([dict(r) for r in rows])

@app.route('/api/pubblicazioni')
def get_pubblicazioni():
    rows = get_db().execute('SELECT * FROM pubblicazioni ORDER BY anno DESC,ordine').fetchall()
    return jsonify([dict(r) for r in rows])

@app.route('/api/storie')
def get_storie():
    rows = get_db().execute(
        '''SELECT id,nome_bambino,paese,flag,testo_it,testo_en,
                  immagine,url_esterno,data_pubblicazione
           FROM storie WHERE pubblicata=1 AND cancellato=0 ORDER BY data_pubblicazione DESC'''
    ).fetchall()
    return jsonify([dict(r) for r in rows])

# ── DIRITTI INTERESSATI ───────────────────────────────────────────────────────
@app.route('/api/diritti/richiesta', methods=['POST'])
def richiesta_diritti():
    data = request.get_json(silent=True) or request.form.to_dict()
    valid = ['accesso','rettifica','cancellazione','limitazione',
             'portabilita','opposizione','revoca_consenso']
    if not valida_email(data.get('email','')): return jsonify({'error':'Email obbligatoria.'}), 400
    if data.get('tipo_diritto') not in valid:
        return jsonify({'error':f'tipo_diritto deve essere: {", ".join(valid)}'}), 400
    scad = datetime.now() + timedelta(days=30)
    db = get_db()
    cur = db.execute(
        'INSERT INTO richieste_diritti(email_richiedente,tipo_diritto,descrizione,scadenza,status) VALUES(?,?,?,?,?)',
        (san(data.get('email'),200), data['tipo_diritto'],
         san(data.get('descrizione'),1000), scad.strftime('%Y-%m-%d %H:%M:%S'), 'ricevuta')
    )
    art_map = {'accesso':'15','rettifica':'16','cancellazione':'17','limitazione':'18','portabilita':'20','opposizione':'21','revoca_consenso':'7'}
    art_num = art_map.get(data['tipo_diritto'],'?')
    audit(db,'richieste_diritti',cur.lastrowid,'INSERT','interessato',
          f"Art.{art_num} GDPR")
    db.commit()
    return jsonify({'success':True,
        'message':'Richiesta ricevuta. Risposta entro 30 giorni (Art.12.3 GDPR).',
        'scadenza':scad.strftime('%d/%m/%Y')}), 201

# ── ADMIN: STATISTICHE ────────────────────────────────────────────────────────
@app.route('/api/admin/statistiche')
@require_admin
def admin_stats():
    db = get_db()
    s = {}
    for t in ['adesioni','contatti','donazioni','lista_attesa']:
        try:
            s[t] = db.execute(f"SELECT COUNT(*) FROM {t} WHERE cancellato=0").fetchone()[0]
        except: s[t] = 0
    s['storie_in_moderazione'] = db.execute("SELECT COUNT(*) FROM storie WHERE pubblicata=0").fetchone()[0]
    s['richieste_diritti'] = db.execute("SELECT COUNT(*) FROM richieste_diritti").fetchone()[0]
    tipo = db.execute("SELECT tipo_membro,COUNT(*) n FROM adesioni WHERE cancellato=0 GROUP BY tipo_membro").fetchall()
    s['adesioni_per_tipo'] = {r['tipo_membro']:r['n'] for r in tipo}
    audit(db,'statistiche',None,'VIEW','admin','Stats aggregate')
    db.commit()
    return jsonify(s)

@app.route('/api/admin/adesioni')
@require_admin
def admin_adesioni():
    db = get_db()
    rows = db.execute(
        '''SELECT id,created_at,nome,cognome,email,citta,tipo_membro,
                  bambino_eta,come_conosciuto,status,
                  consenso_gdpr,consenso_dati_minore,consenso_comunicazioni,
                  data_consenso,testo_consenso_versione
           FROM adesioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 500'''
    ).fetchall()
    audit(db,'adesioni',None,'VIEW','admin',f"{len(rows)} record")
    db.commit()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/contatti')
@require_admin
def admin_contatti():
    db = get_db()
    rows = db.execute(
        '''SELECT id,created_at,nome,email,oggetto,
                  substr(messaggio,1,200) messaggio_preview,status,data_risposta
           FROM contatti WHERE cancellato=0 ORDER BY created_at DESC LIMIT 500'''
    ).fetchall()
    audit(db,'contatti',None,'VIEW','admin',f"{len(rows)} record")
    db.commit()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/donazioni')
@require_admin
def admin_donazioni():
    db = get_db()
    rows = db.execute(
        '''SELECT id,created_at,nome,email,importo,tipo,metodo,data_consenso
           FROM donazioni WHERE cancellato=0 ORDER BY created_at DESC LIMIT 500'''
    ).fetchall()
    audit(db,'donazioni',None,'VIEW','admin',f"{len(rows)} record")
    db.commit()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/lista-attesa')
@require_admin
def admin_lista():
    db = get_db()
    rows = db.execute(
        '''SELECT id,created_at,nome,cognome,email,citta,tipo,
                  consenso_newsletter,data_consenso
           FROM lista_attesa WHERE cancellato=0 ORDER BY created_at DESC LIMIT 500'''
    ).fetchall()
    audit(db,'lista_attesa',None,'VIEW','admin',f"{len(rows)} record")
    db.commit()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/audit-log')
@require_admin
def admin_audit():
    rows = get_db().execute('SELECT * FROM audit_log ORDER BY timestamp DESC LIMIT 1000').fetchall()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/registro-trattamenti')
@require_admin
def admin_registro():
    db = get_db()
    rows = db.execute('SELECT * FROM registro_trattamenti ORDER BY id').fetchall()
    audit(db,'registro_trattamenti',None,'VIEW','admin')
    db.commit()
    return jsonify([dict(r) for r in rows])

@app.route('/api/admin/richieste-diritti')
@require_admin
def admin_richieste():
    rows = get_db().execute('SELECT * FROM richieste_diritti ORDER BY created_at DESC').fetchall()
    return jsonify([dict(r) for r in rows])

# ── DIRITTO ALL'OBLIO Art.17 ─────────────────────────────────────────────────
@app.route('/api/admin/erasure/<path:email>', methods=['DELETE'])
@require_admin
def erasure(email):
    if not valida_email(email): return jsonify({'error':'Email non valida'}), 400
    db = get_db()
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    res = {}
    for t in ['adesioni','contatti','lista_attesa']:
        ids = [r['id'] for r in db.execute(f"SELECT id FROM {t} WHERE email=? AND cancellato=0",(email,)).fetchall()]
        if ids:
            db.execute(f"UPDATE {t} SET nome='[CANCELLATO]',cognome='[CANCELLATO]',email='[CANCELLATO]',cancellato=1,data_cancellazione=? WHERE email=? AND cancellato=0",(now,email))
            if t=='adesioni':
                db.execute(f"UPDATE adesioni SET bambino_nome='[CANCELLATO]' WHERE id IN ({','.join('?'*len(ids))})",ids)
            for rid in ids: audit(db,t,rid,'ERASURE','admin',f"Art.17 GDPR email={email[:3]}***")
            res[t]=len(ids)
        else: res[t]=0
    # Donazioni: pseudonimizza solo (obbligo fiscale 10 anni)
    d = db.execute("SELECT id FROM donazioni WHERE email=? AND cancellato=0",(email,)).fetchall()
    if d:
        db.execute("UPDATE donazioni SET nome='[ANONIMO]',email='[CANCELLATO]' WHERE email=? AND cancellato=0",(email,))
        for r in d: audit(db,'donazioni',r['id'],'ERASURE','admin','Pseudonimizzazione fiscale 10y')
        res['donazioni_pseudonimizzate']=len(d)
    else: res['donazioni_pseudonimizzate']=0
    db.commit()
    return jsonify({'success':True,'risultati':res,
        'nota':'Donazioni pseudonimizzate (obbligo fiscale D.Lgs.127/2015 – 10 anni)'})

@app.route('/api/admin/storie/<int:sid>/approva', methods=['POST'])
@require_admin
def approva_storia(sid):
    db = get_db()
    db.execute("UPDATE storie SET pubblicata=1,data_pubblicazione=CURRENT_TIMESTAMP WHERE id=?",(sid,))
    audit(db,'storie',sid,'UPDATE','admin','Pubblicazione approvata')
    db.commit()
    return jsonify({'success':True})

# ── ADMIN WEB PANEL ───────────────────────────────────────────────────────────
ADMIN_HTML = r"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin GDPR – Sindrome ReNU Italia</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
</head>
<body class="bg-gray-100 min-h-screen">

<div id="loginOverlay" class="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
    <div class="text-center mb-6">
      <i class="fas fa-shield-alt text-5xl text-blue-600 mb-3 block"></i>
      <h1 class="text-2xl font-bold">Admin Panel</h1>
      <p class="text-gray-500 text-sm">Sindrome ReNU Italia APS</p>
      <span class="inline-block mt-2 text-xs bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded-full font-semibold">
        <i class="fas fa-check-circle mr-1"></i>GDPR Compliant v2.0
      </span>
    </div>
    <input id="ti" type="password" placeholder="Token di accesso..."
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

<nav class="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-xl">
  <div class="flex items-center gap-3">
    <i class="fas fa-shield-alt text-2xl text-blue-300"></i>
    <div>
      <div class="font-bold text-lg">Pannello Admin GDPR</div>
      <div class="text-xs text-blue-200">Sindrome ReNU Italia APS</div>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">GDPR v2.0</span>
    <button onclick="location.reload()" class="text-xs text-blue-200 hover:text-white">
      <i class="fas fa-sign-out-alt mr-1"></i>Esci
    </button>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-8">
  <div id="stats" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"></div>
  <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 text-sm text-blue-800 flex gap-3">
    <i class="fas fa-info-circle text-blue-500 text-xl mt-0.5 flex-shrink-0"></i>
    <div><b>Protezione dati attiva:</b> ogni visualizzazione è registrata nell'audit log.
    I dati dei minori sono minimizzati (Art. 5.1.c GDPR). Il diritto all'oblio è disponibile nella sezione "Cancella Dati".</div>
  </div>
  <div class="flex gap-2 flex-wrap mb-6">
    <button data-t="adesioni" onclick="showTab('adesioni')" class="tb bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-users mr-1"></i>Adesioni</button>
    <button data-t="contatti" onclick="showTab('contatti')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-envelope mr-1"></i>Contatti</button>
    <button data-t="lista" onclick="showTab('lista')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-clock mr-1"></i>Lista Attesa</button>
    <button data-t="donazioni" onclick="showTab('donazioni')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-heart mr-1"></i>Donazioni</button>
    <button data-t="audit" onclick="showTab('audit')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-history mr-1"></i>Audit Log</button>
    <button data-t="registro" onclick="showTab('registro')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-book mr-1"></i>Reg. Art.30</button>
    <button data-t="diritti" onclick="showTab('diritti')" class="tb bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-user-shield mr-1"></i>Diritti</button>
    <button data-t="erasure" onclick="showTab('erasure')" class="tb bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold"><i class="fas fa-trash mr-1"></i>Cancella Dati</button>
  </div>
  <div id="content" class="bg-white rounded-2xl shadow-lg overflow-hidden min-h-64">
    <div class="p-8 text-center text-gray-400">Seleziona una sezione sopra</div>
  </div>
</div>

<script>
let TOK = '';
async function doLogin(){
  const t=document.getElementById('ti').value.trim();
  if(!t)return;
  const r=await fetch('/api/admin/statistiche',{headers:{'X-Admin-Token':t}});
  if(r.ok){TOK=t;document.getElementById('loginOverlay').style.display='none';loadStats();showTab('adesioni');}
  else{document.getElementById('le').classList.remove('hidden');document.getElementById('ti').value='';}
}
function H(){return{'X-Admin-Token':TOK,'Content-Type':'application/json'};}
async function loadStats(){
  const r=await fetch('/api/admin/statistiche',{headers:H()});
  if(!r.ok)return;const s=await r.json();
  const cards=[
    {k:'adesioni',l:'Adesioni',i:'fa-users',c:'blue'},
    {k:'contatti',l:'Contatti',i:'fa-envelope',c:'green'},
    {k:'lista_attesa',l:'Lista Attesa',i:'fa-clock',c:'amber'},
    {k:'donazioni',l:'Donazioni',i:'fa-heart',c:'red'},
  ];
  document.getElementById('stats').innerHTML=cards.map(c=>`
    <div class="bg-white rounded-2xl shadow p-5 border-l-4 border-${c.c}-500">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full bg-${c.c}-100 flex items-center justify-center">
          <i class="fas ${c.i} text-${c.c}-600 text-lg"></i>
        </div>
        <div><div class="text-2xl font-bold text-gray-800">${s[c.k]||0}</div>
        <div class="text-xs text-gray-500">${c.l}</div></div>
      </div>
    </div>`).join('');
}
const TABS={
  adesioni:{url:'/api/admin/adesioni'},
  contatti:{url:'/api/admin/contatti'},
  lista:{url:'/api/admin/lista-attesa'},
  donazioni:{url:'/api/admin/donazioni'},
  audit:{url:'/api/admin/audit-log'},
  diritti:{url:'/api/admin/richieste-diritti'},
};
async function showTab(name){
  document.querySelectorAll('.tb').forEach(b=>b.className=b.className.replace('bg-blue-600 text-white','bg-gray-200 text-gray-700'));
  document.querySelector(`[data-t="${name}"]`).className=document.querySelector(`[data-t="${name}"]`).className.replace('bg-gray-200 text-gray-700','bg-blue-600 text-white');
  if(name==='erasure'){showErasure();return;}
  if(name==='registro'){await showRegistro();return;}
  const cfg=TABS[name];if(!cfg)return;
  const r=await fetch(cfg.url,{headers:H()});
  if(!r.ok){document.getElementById('content').innerHTML='<div class="p-8 text-center text-red-500">Errore caricamento</div>';return;}
  const data=await r.json();
  if(!data.length){document.getElementById('content').innerHTML='<div class="p-8 text-center text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block opacity-30"></i>Nessun dato</div>';return;}
  const keys=Object.keys(data[0]);
  let html=`<div class="overflow-x-auto"><table class="w-full text-xs">
    <thead class="bg-gray-50 border-b"><tr>${keys.map(k=>`<th class="px-3 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">${k}</th>`).join('')}</tr></thead>
    <tbody>`;
  data.forEach((row,i)=>{
    html+=`<tr class="${i%2?'bg-gray-50':''} border-b hover:bg-blue-50">`;
    keys.forEach(k=>{const v=row[k]!==null?String(row[k]):'-';html+=`<td class="px-3 py-2 text-gray-700 max-w-xs truncate" title="${v.replace(/"/g,'&quot;')}">${v}</td>`;});
    html+='</tr>';
  });
  html+=`</tbody></table></div>
    <div class="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t flex justify-between">
      <span><i class="fas fa-lock mr-1 text-green-600"></i>${data.length} record · accesso registrato audit log</span>
      <a href="${cfg.url}" target="_blank" class="text-blue-600 hover:underline">Esporta JSON</a>
    </div>`;
  document.getElementById('content').innerHTML=html;
}
async function showRegistro(){
  const r=await fetch('/api/admin/registro-trattamenti',{headers:H()});
  const data=await r.json();
  let html='<div class="p-6 space-y-4"><h2 class="text-xl font-bold text-gray-800 mb-4"><i class="fas fa-book mr-2 text-blue-600"></i>Registro Trattamenti Art. 30 GDPR</h2>';
  data.forEach(t=>{
    html+=`<div class="border border-gray-200 rounded-xl p-4">
      <h3 class="font-bold text-blue-800 mb-2">${t.id}. ${t.nome_trattamento}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
        <div><b>Finalità:</b> ${t.finalita||'-'}</div>
        <div><b>Base giuridica:</b> ${t.base_giuridica||'-'}</div>
        <div><b>Dati trattati:</b> ${t.categorie_dati||'-'}</div>
        <div><b>Conservazione:</b> ${t.periodo_conservazione||'-'}</div>
        <div><b>Extra-UE:</b> ${t.trasferimenti_extra_ue||'Nessuno'}</div>
        <div><b>Sub-processor:</b> ${t.responsabili_esterni||'-'}</div>
      </div>
    </div>`;
  });
  html+='</div>';
  document.getElementById('content').innerHTML=html;
}
function showErasure(){
  document.getElementById('content').innerHTML=`
    <div class="p-8 max-w-lg mx-auto">
      <div class="text-center mb-6">
        <i class="fas fa-user-slash text-5xl text-red-400 mb-3 block"></i>
        <h2 class="text-xl font-bold">Diritto all'Oblio – Art. 17 GDPR</h2>
        <p class="text-sm text-gray-500 mt-1">Cancella tutti i dati personali di un interessato</p>
      </div>
      <div class="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-5 text-sm text-amber-800">
        <i class="fas fa-exclamation-triangle mr-1"></i>
        <b>Attenzione – operazione irreversibile.</b><br>
        Verificare sempre l'identità del richiedente prima di procedere.<br>
        Le donazioni vengono pseudonimizzate (obbligo fiscale 10 anni).
      </div>
      <input id="ee" type="email" placeholder="email@esempio.it" class="w-full border rounded-xl px-4 py-3 text-sm mb-3">
      <input id="ec" type="text" placeholder="Digita CANCELLA per confermare" class="w-full border rounded-xl px-4 py-3 text-sm mb-4">
      <button onclick="doErasure()" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors">
        <i class="fas fa-trash mr-2"></i>Esegui Cancellazione
      </button>
      <div id="er" class="mt-4 hidden"></div>
    </div>`;
}
async function doErasure(){
  const email=document.getElementById('ee').value.trim();
  const conf=document.getElementById('ec').value.trim();
  const res=document.getElementById('er');
  if(conf!=='CANCELLA'){res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Digita esattamente CANCELLA.</div>';res.classList.remove('hidden');return;}
  if(!email){res.innerHTML='<div class="p-3 bg-red-50 text-red-700 rounded-xl text-sm">Email obbligatoria.</div>';res.classList.remove('hidden');return;}
  const r=await fetch(`/api/admin/erasure/${encodeURIComponent(email)}`,{method:'DELETE',headers:H()});
  const d=await r.json();
  if(r.ok){
    res.innerHTML=`<div class="p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
      <i class="fas fa-check-circle mr-1"></i><b>Cancellazione completata</b><br>
      <pre class="mt-2 text-xs">${JSON.stringify(d.risultati,null,2)}</pre>
      <p class="text-xs mt-2 text-gray-500">${d.nota}</p></div>`;
  }else{
    res.innerHTML=`<div class="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">Errore: ${d.error}</div>`;
  }
  res.classList.remove('hidden');
}
</script>
</body></html>"""

@app.route('/admin')
@app.route('/admin/')
def admin():
    return render_template_string(ADMIN_HTML)

if __name__ == '__main__':
    if not os.path.exists(DB_PATH):
        schema = os.path.join(os.path.dirname(__file__),'schema.sql')
        if os.path.exists(schema):
            conn = sqlite3.connect(DB_PATH)
            conn.executescript(open(schema).read())
            conn.commit(); conn.close()
            print(f"DB inizializzato: {DB_PATH}")
    print("\nReNU API Server GDPR v2.0 – http://localhost:5000")
    print("Admin panel: http://localhost:5000/admin (richiede token)")
    app.run(host='0.0.0.0', port=5000, debug=False)
