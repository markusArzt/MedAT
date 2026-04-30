// MedAT Trainer – Flashcards
// Quelle: Handschriftliche Mitschrift (Chemie)
//
// Schema:
//   { id: 1,
//     topic: "Periodensystem",   ← Themenfilter
//     q: "Frage?",
//     a: "Antwort."  }
//
// Neue Karten einfach ans Array anhängen.

const flashcardsData = [
    // ── Periodensystem ────────────────────────────────────────────
    { id: 1,  topic: "Periodensystem",
      q: "Was passiert mit dem Atomradius innerhalb einer Periode (→) und innerhalb einer Gruppe (↓)?",
      a: "Innerhalb einer Periode (→) nimmt der Atomradius ab. Innerhalb einer Gruppe (↓) nimmt er zu." },

    { id: 2,  topic: "Periodensystem",
      q: "Was passiert mit der Elektronegativität innerhalb einer Periode (→) und innerhalb einer Gruppe (↓)?",
      a: "Innerhalb einer Periode (→) nimmt die Elektronegativität zu. Innerhalb einer Gruppe (↓) nimmt sie ab. Maximum: Fluor." },

    { id: 3,  topic: "Periodensystem",
      q: "Welche Elemente gehören zu den Alkalimetallen (Gruppe I)?",
      a: "H, Li, Na, K (und Rb, Cs, Fr)." },

    { id: 4,  topic: "Periodensystem",
      q: "Welche Elemente gehören zu den Erdalkalimetallen (Gruppe II)?",
      a: "Be, Mg, Ca (und Sr, Ba, Ra)." },

    { id: 5,  topic: "Periodensystem",
      q: "Was unterscheidet Kationen von Anionen?",
      a: "Kationen sind positiv geladen (Elektronenverlust), Anionen sind negativ geladen (Elektronengewinn)." },

    { id: 6,  topic: "Periodensystem",
      q: "Ab welchem Elektronegativitätsunterschied spricht man von ionischer Bindung?",
      a: "ΔEN > 1,7 → ionische Bindung (~400 kJ/mol)." },

    { id: 7,  topic: "Periodensystem",
      q: "Nenne die 8 Hauptgruppen mit je einem Beispielelement.",
      a: "I Alkalimetalle (Na) · II Erdalkalimetalle (Ca) · III Borgruppe (Al) · IV Kohlenstoff-Gruppe (C) · V Stickstoff-Gruppe (N) · VI Chalkogene (O) · VII Halogene (F) · VIII Edelgase (Ne)" },

    // ── Bindungen ─────────────────────────────────────────────────
    { id: 8,  topic: "Bindungen",
      q: "Wie stark sind Van-der-Waals-Kräfte und welche Art von Wechselwirkung sind sie?",
      a: "Ca. 10 kJ/mol – die schwächste intermolekulare Wechselwirkung; entsteht durch temporäre Dipolmomente." },

    { id: 9,  topic: "Bindungen",
      q: "Wie stark sind Wasserstoffbrückenbindungen und wie entstehen sie?",
      a: "Ca. 40 kJ/mol. H ist an stark elektronegatives Atom (O, N, F) gebunden → e⁻-Entzug → δ⁺ am H → Anziehung zu freiem Elektronenpaar." },

    { id: 10, topic: "Bindungen",
      q: "Nenne die drei Bindungstypen mit ihrem ΔEN-Bereich.",
      a: "ΔEN < 0,4 → apolare kovalente Bindung · 0,4–1,7 → polare kovalente Bindung · > 1,7 → ionische Bindung." },

    { id: 11, topic: "Bindungen",
      q: "Warum leiten feste Salze keinen Strom, gelöste aber schon?",
      a: "Im Festkörper sind Ionen fixiert. Im gelösten Zustand werden sie frei beweglich → Elektrolyt → elektrische Leitfähigkeit." },

    { id: 12, topic: "Bindungen",
      q: "Was ist das Prinzip der metallischen Bindung?",
      a: "Atomrümpfe sind in einem delokalisierten Elektronensee eingebettet → hohe Duktilität, gute elektrische Leitfähigkeit." },

    { id: 13, topic: "Bindungen",
      q: "Warum sind Halbmetalle Halbleiter?",
      a: "Bei Raumtemperatur sind Elektronen kaum beweglich. Bei höherer Temperatur werden sie frei → Leitfähigkeit steigt mit T." },

    { id: 14, topic: "Bindungen",
      q: "Was kennzeichnet die kovalente Bindung? Was ist ein Homodimer?",
      a: "Stoffe teilen Elektronen, Bindung ist gerichtet. Homodimer = Molekül aus 2 gleichen Atomen (z.B. H₂, N₂, O₂, Cl₂)." },

    // ── Chemische Formeln ─────────────────────────────────────────
    { id: 15, topic: "Chemische Formeln",
      q: "Was ist der Unterschied zwischen Summenformel und Valenzstrichformel?",
      a: "Summenformel: zeigt nur Atomanzahl (z.B. H₂). Valenzstrichformel: zeigt alle Bindungen (z.B. H–H)." },

    { id: 16, topic: "Chemische Formeln",
      q: "Was sind die vier Ebenen der Stereochemie?",
      a: "Konstitution (Atome & Bindungen) · Konformation (Drehung um Einfachbindungen, z.B. cis/trans) · Konfiguration (räumliche Anordnung, kein Bindungsbruch möglich) · Chiralität (dreht Licht links/rechts, CIP-System)." },

    { id: 17, topic: "Chemische Formeln",
      q: "Was ist der Unterschied zwischen Konformation und Konfiguration?",
      a: "Konformation: Drehung um Einfachbindungen möglich (z.B. cis/trans bei Alkenen). Konfiguration: räumliche Anordnung nur durch Bindungsbruch änderbar." },

    // ── Reaktionen ────────────────────────────────────────────────
    { id: 18, topic: "Reaktionen",
      q: "Was sind Edukte und Produkte?",
      a: "Edukte = Ausgangsstoffe einer Reaktion. Produkte = entstehende Stoffe." },

    { id: 19, topic: "Reaktionen",
      q: "Welche Erhaltungssätze gelten bei chemischen Reaktionen?",
      a: "Massenerhaltung und Ladungserhaltung." },

    { id: 20, topic: "Reaktionen",
      q: "Was bedeutet Stöchiometrie?",
      a: "Berechnung von Stoffmengen für chemische Reaktionen anhand der molaren Verhältnisse in der Reaktionsgleichung." },

    { id: 21, topic: "Reaktionen",
      q: "Berechne: Wie viele Liter H₂ braucht man für 360 g H₂O? (2H₂ + O₂ → 2H₂O, Vm = 22,4 L/mol)",
      a: "M(H₂O) = 18 g/mol → 360 g ÷ 18 = 20 mol H₂O → stöchiometrisch 20 mol H₂ → 20 × 22,4 L = 448 L H₂." },

    // ── Gleichgewicht ─────────────────────────────────────────────
    { id: 22, topic: "Gleichgewicht",
      q: "Was ist der Unterschied zwischen Geschwindigkeitskonstante k und Reaktionsgeschwindigkeit v?",
      a: "k ist eine temperaturabhängige Konstante. v = −dc/dt ist die tatsächliche Reaktionsgeschwindigkeit, die sich mit der Konzentration ändert." },

    { id: 23, topic: "Gleichgewicht",
      q: "Was bedeutet ΔH < 0 und ΔH > 0?",
      a: "ΔH < 0 → exotherm (Wärme wird abgegeben). ΔH > 0 → endotherm (Wärme wird aufgenommen)." },

    { id: 24, topic: "Gleichgewicht",
      q: "Was ist die Gibbs-Helmholtz-Gleichung? Was bedeuten die Vorzeichen von ΔG?",
      a: "ΔG = ΔH − T·ΔS. ΔG < 0 → exergon (spontan). ΔG > 0 → endergon (benötigt Energie). ΔG = 0 → Gleichgewicht." },

    { id: 25, topic: "Gleichgewicht",
      q: "Was bewirken Katalysatoren thermodynamisch?",
      a: "Sie senken die Aktivierungsenergie Gᴬ, verändern aber ΔG nicht. Enzyme sind biologische Katalysatoren." },

    { id: 26, topic: "Gleichgewicht",
      q: "Wie lautet die Gleichgewichtskonstante K für: A + B ⇌ 2C + D?",
      a: "K = [C]² · [D] / ([A] · [B]). Katalysatoren und reine Feststoffe/Lösungsmittel werden nicht einbezogen." },

    { id: 27, topic: "Gleichgewicht",
      q: "Was bedeutet K >> 1 für eine Reaktion?",
      a: "Das Gleichgewicht liegt stark auf der Produktseite – die Reaktion ist nahezu irreversibel." },

    // ── Besondere Elemente und Moleküle ───────────────────────────
    { id: 28, topic: "Besondere Elemente und Moleküle",
      q: "Aus welchen Elementen besteht der menschliche Körper hauptsächlich?",
      a: "Ca. 65% O, 18% C, 10% H. ~60% des Körpers ist H₂O. Elemente < 0,01% = Spurenelemente (z.B. Fe, I, Zn)." },

    { id: 29, topic: "Besondere Elemente und Moleküle",
      q: "Was sind die wichtigsten Eigenschaften von H₂?",
      a: "Farb- und geruchlos, geschmacksneutral, leichter als Luft, explosiv bei Kontakt mit O₂ (Hindenburg-Katastrophe)." },

    { id: 30, topic: "Besondere Elemente und Moleküle",
      q: "Was sind die Eigenschaften von O₂? Was ist O₃?",
      a: "O₂: farb- und geruchlos, Oxidationsmittel, 21% der Atmosphäre. O₃ = Ozon (Schutzschicht). Autotrophe produzieren O₂, Aerobe verbrauchen es." },

    { id: 31, topic: "Besondere Elemente und Moleküle",
      q: "Warum ist H₂O amphiphoter?",
      a: "H₂O kann als Säure (gibt H⁺ ab → OH⁻) und als Base (nimmt H⁺ auf → H₃O⁺) wirken." },

    { id: 32, topic: "Besondere Elemente und Moleküle",
      q: "Warum löst Wasser polare Stoffe?",
      a: "H₂O ist durch Wasserstoffbrückenbindungen stark polar → löst polare Stoffe nach dem Prinzip 'similia similibus solvuntur' (z.B. Alkohole mit OH-Gruppe)." },

    { id: 33, topic: "Besondere Elemente und Moleküle",
      q: "Was ist die Rolle von Kohlenstoff in der Biologie?",
      a: "C ist Grundbaustein des Lebens, bildet bis zu 4 kovalente Bindungen, Basis der ¹⁴C-Datierung. Kohlensäure (H₂CO₃) ist eine schwache Säure und reguliert den Blut-pH." },

    { id: 34, topic: "Besondere Elemente und Moleküle",
      q: "Welche Rolle spielt N₂ in der Biologie und Atmosphäre?",
      a: "~78% der Atmosphäre, eigener Stickstoffkreislauf. Wichtig für Aminosäuren, DNA, RNA, ATP und Medikamente." },

    { id: 35, topic: "Besondere Elemente und Moleküle",
      q: "Nenne alle Halogene und ihre typischen Reaktionsprodukte.",
      a: "F, Cl, Br, I, At. Halogen + H → Halogenwasserstoffsäure (z.B. HCl). Halogen + Metall → Salz (z.B. NaCl)." },
];
