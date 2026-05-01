# MedAT Trainer

Persönlicher Übungstrainer für den österreichischen Medizin-Aufnahmetest (MedAT / BMS).
Läuft als Progressive Web App – im Browser, offline-fähig, ohne Installation.

---

## Inhalte

### 📝 Wortflüssigkeit — 184 Anagramme
Buchstaben werden gemischt angezeigt. Ziel: den Anfangsbuchstaben des versteckten deutschen Substantivs bestimmen.

| Kategorie | Wörter |
|---|---|
| Kurz (≤ 5 Buchstaben) | 40 |
| Mittel (6–8 Buchstaben) | 42 |
| Lang (9+ Buchstaben) | 102 |

**Quellen:** Offizielles IB_WF_26.pdf · ÖH Med Wien Skript 2014 · ÖH Med Wien Skript 2021 · eigene Ergänzungen

**Qualitätssicherung:** Alle Anagramme wurden gegen 118.000+ deutsche Substantive (ngerman) geprüft. Wörter mit mehr als einer gültigen Lösung wurden entfernt. Letters-Arrays werden direkt aus dem Lösungswort abgeleitet — keine manuellen Tippfehler möglich.

---

### 🔢 Zahlenfolgen — 60 Aufgaben
Zwei fehlende Zahlen in einer Folge bestimmen (5 Antwortmöglichkeiten A–E, E = „Keine der Antwortmöglichkeiten").

**Quellen:** Offizielles IB_ZF_26.pdf · ÖH Med Wien Skript 2014

---

### 🧬 Wissen — 564 Fragen

| Fach | Fragen | Quelle |
|---|---|---|
| Biologie | 222 | ÖH Bio-Skript 2022 (191 Original + 31 eigene) |
| Chemie | 121 | ÖH Chemie-Skript 2020 (101 Original + 20 eigene) |
| Physik | 148 | ÖH Physik-Skript 2021 (127 Original + 21 eigene) |
| Mathematik | 73 | Stichwortliste 2026 (eigene) |

Originalfragen aus den ÖH-Skripten sind mit Schwierigkeitsgrad markiert (🟢 Leicht · 🟡 Mittel · 🔴 Schwer). Eigene Ergänzungsfragen erscheinen mit ✏️.

Fragen haben 4 oder 5 Antwortoptionen (bei 5 Optionen: E = „Keine der Antwortmöglichkeiten"). Optionen werden bei jeder Anzeige neu gemischt (Fisher-Yates).

**Spaced Repetition (SM-2):** Nach jeder Antwort Selbstbewertung 0–5. Intervalle wachsen bei korrekter Antwort (1 → 6 → ×Ease-Faktor Tage). Fortschritt wird in `localStorage` gespeichert. Separater SRS-Modus für fällige Karten.

---

### 🔷 Figuren zusammensetzen — 21 Aufgaben
Einzelteile (Canvas-Zeichnungen) müssen zur richtigen Gesamtfigur (A–D) zugeordnet werden. Option E = „Keine der Lösungsmöglichkeiten". Figuren sind vollständig in JavaScript als Canvas-Zeichnungen implementiert.

---

### 🃏 Flashcards — 120 Karten

| Fach | Topics | Karten |
|---|---|---|
| Chemie | Periodensystem, Bindungen, Formeln, Reaktionen, Gleichgewicht, Besondere Elemente | 35 |
| Biologie | Zellbiologie, Embryologie, Mikro-/Makroanatomie, Nerven, Sinnesorgane, Haut, Hormone, Immunsystem, Niere, Geschlechtsorgane, Genetik, Meiose, Mutationen, Mol. Genetik, Evolution, Ökologie, Immunbiologie | 85 |

**Quelle:** Handschriftliche Mitschriften (Chemie + Biologie)

Karten können nach Topic gefiltert werden. **Spaced Repetition (SM-2)** identisch zum Wissen-Modul, eigener Speicher-Key (`medat_fc_srs_v1`).

Bedienung: Tippen → umdrehen · 1–6 → bewerten · Leertaste/Enter → umdrehen · Escape → nächste Karte

---

## Deployment

### GitHub Pages (empfohlen — überall erreichbar, iPhone-tauglich)

1. [github.com](https://github.com) → **New repository** → Name z.B. `medat-trainer` → Public → Create
2. **Add file → Upload files** → alle Dateien aus diesem Ordner hochladen (inkl. `.github/workflows/deploy.yml`)
3. **Settings → Pages → Source: GitHub Actions** → Save
4. App läuft unter `https://DEIN-USERNAME.github.io/medat-trainer/`

**iPhone:** URL in Safari öffnen → Teilen → Zum Home-Bildschirm → die App funktioniert danach **vollständig offline** (Service Worker cached alle Dateien).

### Lokal (ohne Internet)

```bash
# Mac/Linux
python3 start.py

# Windows
start.bat
```

Dann im Browser: [http://localhost:8080](http://localhost:8080)

---

## Dateien

```
medat-trainer/
├── index.html                  ← App (HTML + CSS + gesamte Logik)
├── data_wortfluessigkeit.js    ← 184 Anagramme
├── data_zahlenfolgen.js        ← 60 Zahlenfolgen-Aufgaben
├── data_wissen.js              ← 564 Wissensfragen
├── data_figuren.js             ← 21 Figuren-Aufgaben (Canvas)
├── data_flashcards.js          ← 120 Flashcards
├── sw.js                       ← Service Worker (Offline-Cache)
├── manifest.json               ← PWA-Manifest
├── icon-192.png / icon-512.png ← App-Icons
├── start.py                    ← Lokaler Server (Mac/Linux)
├── start.bat                   ← Lokaler Server (Windows)
├── .github/workflows/
│   └── deploy.yml              ← GitHub Actions (Auto-Deploy)
├── README.md                   ← Diese Datei
└── ERWEITERUNG.md              ← Anleitung zum Erweitern
```

---

## Tastaturkürzel

| Modul | Taste | Aktion |
|---|---|---|
| Alle | A / B / C / D / E | Antwort auswählen |
| Alle | Enter | Antwort prüfen |
| Alle | Escape | Neue Aufgabe |
| Wortflüssigkeit | F1 | Wort anzeigen |
| Flashcards | Leertaste | Karte umdrehen |
| Flashcards | 1–6 | SRS-Bewertung |

---

## Daten erweitern

Alle Datendateien sind plain JavaScript — einfach am Ende des jeweiligen Arrays neue Einträge anhängen und auf GitHub pushen. Das Schema ist in `ERWEITERUNG.md` dokumentiert.

**Neue Flashcard-Mitschrift hinzufügen:**
1. `data_flashcards.js` öffnen
2. Neuen Eintrag ans Array anhängen: `{ id: 121, topic: "Neues Thema", q: "Frage?", a: "Antwort." }`
3. In `index.html` den Topic-Filter-Button ergänzen (Suche nach `fc-topic-btn`)
4. Commit + Push → automatisch live
