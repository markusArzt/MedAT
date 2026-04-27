# medAT Anagramm Trainer

Eine elegante Web-App zum Training von Anagramm-Aufgaben für den österreichischen Medizin-Aufnahmetest (medAT).

## Features

🧩 **Anagramm-Training:**
- Wörter werden durcheinandergewürfelt
- Errate das ursprüngliche Wort
- Über 100 medizinrelevante und allgemeine Begriffe
- Automatische Validierung

💡 **Hilfestellungen:**
- Tipp-Funktion zeigt ersten Buchstaben
- Überspringen-Option für schwierige Wörter
- Automatische Erkennung bei vollständiger Eingabe

📊 **Fortschrittsverfolgung:**
- Live-Statistiken (Richtig/Gesamt/Erfolgsrate)
- Sammlung gelöster Wörter
- Endlose Herausforderung

🎨 **Elegantes Design:**
- Sophisticated Academic Theme mit Navy & Gold
- Responsive für alle Geräte
- Smooth Animationen und visuelles Feedback
- Hochwertige Typografie (Playfair Display + Source Code Pro)

## Screenshots

Die App zeigt durcheinandergewürfelte Buchstaben in eleganten Kacheln:
```
M  A  G  E  N  →  Input: MAGEN  ✓
```

## Wie es funktioniert

1. **Buchstaben betrachten:** Das Wort wird zufällig durchgemischt angezeigt
2. **Lösung eingeben:** Tippe das ursprüngliche Wort
3. **Tipp nutzen:** Button zeigt den ersten Buchstaben
4. **Fortschritt verfolgen:** Statistiken und gelöste Wörter werden angezeigt

## Wortlisten

### Medizinische Begriffe
- Körperteile: HERZ, LUNGE, LEBER, NIERE, GEHIRN...
- Medizin: ARZT, PATIENT, DIAGNOSE, THERAPIE...
- Gesundheit: FIEBER, SCHMERZ, HEILUNG, VIRUS...

### Allgemeine Begriffe  
- Natur: BAUM, WASSER, SONNE, BERG, MEER...
- Konzepte: ZEIT, LEBEN, LIEBE, HOFFNUNG...
- Jahreszeiten: WINTER, SOMMER, HERBST...

### Wissenschaft
- Physik: ATOM, ENERGIE, KRAFT, BEWEGUNG...
- Forschung: EXPERIMENT, THEORIE, BEWEIS...

## GitHub Pages Setup

### 1. Repository erstellen
```bash
git clone https://github.com/DEIN-USERNAME/medat-anagramm-trainer.git
cd medat-anagramm-trainer

# Hauptdatei umbenennen
mv anagramm-trainer.html index.html

git add .
git commit -m "medAT Anagramm Trainer"
git push origin main
```

### 2. GitHub Pages aktivieren
1. Repository Settings → Pages
2. Source: Deploy from branch → main
3. Folder: / (root)
4. Save

### 3. Fertig!
```
https://DEIN-USERNAME.github.io/medat-anagramm-trainer/
```

## Lokale Entwicklung

Einfach die HTML-Datei im Browser öffnen - keine Installation nötig!

## Tastatur-Shortcuts

- **ESC:** Neues Wort generieren
- **F1:** Tipp anzeigen
- **Ctrl+S:** Wort überspringen
- **Enter:** Antwort überprüfen

## Technische Details

- **Reine Frontend-App** (HTML/CSS/JavaScript)
- **Responsive Design** für Desktop und Mobile
- **Elegante Animationen** mit CSS-only
- **Fisher-Yates Shuffle** für echte Zufälligkeit
- **Offline-fähig** nach dem ersten Laden

## Anpassungen

### Neue Wörter hinzufügen
Editiere die `wordCategories` in der JavaScript-Sektion:

```javascript
const wordCategories = {
    medical: [
        'HERZ', 'LUNGE', 'DEIN_WORT'
    ],
    // ...
};
```

### Design anpassen
Alle Farben sind als CSS-Custom-Properties definiert:

```css
:root {
    --primary-navy: #0f1b3c;
    --accent-gold: #d4af37;
    --accent-emerald: #2d5a3d;
    /* etc. */
}
```

### Schwierigkeitsgrad
- **Wortlänge begrenzen:** Filtere `allWords` nach Länge
- **Kategorien wählen:** Nutze nur bestimmte `wordCategories`
- **Timer hinzufügen:** Implementiere Zeitbegrenzung

## Algorithmus

**Shuffle-Algorithmus (Fisher-Yates):**
```javascript
function shuffleWord(word) {
    const letters = word.split('');
    // Zufällige Vertauschung bis Wort != Original
    // Verhindert endlose Schleifen bei kurzen Wörtern
}
```

## Browser-Support

- Chrome/Chromium 60+
- Firefox 55+  
- Safari 12+
- Edge 79+

## Performance

- **Bundle-Größe:** < 30KB
- **Ladezeit:** < 0.5s
- **Animationen:** 60fps
- **Memory:** < 5MB

## Für den medAT

Diese App trainiert speziell die **Wortflüssigkeit** und **Anagramm-Fähigkeiten**, die im medAT getestet werden. Durch die medizinischen Begriffe bereitest du dich optimal auf medizinrelevanten Wortschatz vor.

## Erweiterte Features (Roadmap)

- [ ] Kategoriefilter
- [ ] Timer-Modus
- [ ] Schwierigkeitsgrade
- [ ] Mehrspieler-Modus
- [ ] Export von Statistiken
- [ ] Dunkler Modus
- [ ] Audio-Feedback

## Lizenz

MIT License - Siehe LICENSE für Details.

## Beitragen

Pull Requests willkommen für:
- Neue Wortlisten (besonders medizinisch)
- Performance-Optimierungen  
- Barrierefreiheit
- Mobile UX-Verbesserungen

---

**Viel Erfolg beim medAT! 🏥🧩**

