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

    // ── Biologie Teil 1: Zellbiologie ────────────────────────────
    { id: 36, topic: "Zellbiologie",
      q: "Welche Hauptaufgaben hat der Zellkern (Nucleus)?",
      a: "DNA-Transkription → mRNA. Umgeben von Doppellipidmembran. Enthält Nucleolus (→ rRNA-Herstellung). Euchromatin = aktive DNA, Heterochromatin = inaktive DNA → Chromosomen." },

    { id: 37, topic: "Zellbiologie",
      q: "Was ist der Unterschied zwischen rauem und glattem Endoplasmatischen Retikulum?",
      a: "Raues ER: hat Ribosomen → Proteinsynthese (Sekretion, Faltung). Glattes ER (ohne Ribosomen): Lipidsynthese, Calciumspeicher und Entgiftung." },

    { id: 38, topic: "Zellbiologie",
      q: "Was sind Ribosomen und wo befinden sie sich?",
      a: "Vorkommen: raues ER, Zytoplasma und Mitochondrien. Bestehen aus kleiner und großer Untereinheit (rRNA). Funktion: Translation von mRNA → Protein." },

    { id: 39, topic: "Zellbiologie",
      q: "Was ist der Golgi-Apparat und was macht er?",
      a: "Hat cis- (ER-zugewandte) und trans-Seite. Glykosylierungszentrum der Zelle. Modifiziert, sortiert und verpackt Proteine vom ER für den Weitertransport." },

    { id: 40, topic: "Zellbiologie",
      q: "Was sind Mitochondrien und woher stammen sie evolutionär?",
      a: "Kraftwerk der Zelle (ATP-Synthese), Doppellipidmembran. Entstammen laut Endosymbiontentheorie ursprünglich Prokaryoten. Nur maternale Mitochondrien werden vererbt." },

    { id: 41, topic: "Zellbiologie",
      q: "Was sind die Unterschiede zwischen Lysosomen, Peroxisomen und Proteasomen?",
      a: "Alle sind Abbauorganellen ('MAD der Zelle'). Lysosomen (primär/sekundär/tertiär): bauen Fremdstoffe ab (Membran vorhanden). Proteasomen (keine Membran): bauen Proteine ab. Peroxisomen: bauen Lipide/Fettsäuren ab, enthalten H₂O₂." },

    { id: 42, topic: "Zellbiologie",
      q: "Wie ist die Zellmembran aufgebaut und wie funktioniert Transport?",
      a: "Doppellipidmembran → Fluid Mosaic Modell. Hydrophob innen / hydrophil außen. Transport via Proteine (Ligand, Kanal, elektrisch), ATP oder Konzentrationsgradient. Uniport / Antiport / Symport. Exo-/Endozytose für große Moleküle." },

    { id: 43, topic: "Zellbiologie",
      q: "Aus welchen drei Komponenten besteht das Zytoskelett?",
      a: "Mikrotubuli (→ Transport), Intermediäre Filamente (→ Stabilität), Aktinfilamente (→ Mobilität)." },

    { id: 44, topic: "Zellbiologie",
      q: "Was sind Kinozilien, Geißeln und Mikrovilli?",
      a: "Spezialformen des Zytoskeletts. Kinozilien: Staubbewegung. Geißeln: Fortbewegung (Spermien). Mikrovilli: Oberflächen-/Nahrungsaufnahme (z.B. Darm). Aufbau: 9×2+2 Mikrotubuli (Kinozilien/Geißeln) bzw. 1 Mikrotubulusreihe (Mikrovilli)." },

    { id: 45, topic: "Zellbiologie",
      q: "Welche Arten von Zell-Zell-Kontakten gibt es?",
      a: "Haftverbindungen (Desmosomen), Verschlusskontakte (Tight Junctions), Gap Junctions (direkter Stoffaustausch). Zell-ECM-Kontakte über Intermediärfilamente (Hemidesmosomen)." },

    // ── Biologie Teil 1: Embryologie ─────────────────────────────
    { id: 46, topic: "Embryologie",
      q: "Was ist die Blastogenese und welche Schritte umfasst sie?",
      a: "Oozyte wird befruchtet → Zygote. Schritte: 1. Kapazitation, 2. Befruchtung, 3. Akrosomenreaktion, 4. Kortikale Reaktion → Befruchtungsmembran → Einnistung in Uterushöhle. Eizelle nur ~24h befruchtbar." },

    { id: 47, topic: "Embryologie",
      q: "Wie entwickelt sich die Zygote in den ersten 5 Tagen nach der Befruchtung?",
      a: "1.–3. Tag: Zygote (totipotent). 3.–4. Tag: Morula (pluripotent). Ab 5. Tag: Blastozyste → Embryoblast + Trophoblast + Keimhöhle → Gastrulation (ab ~16. Tag)." },

    { id: 48, topic: "Embryologie",
      q: "Was ist die Embryogenese und welche drei Keimblätter entstehen?",
      a: "Bis Ende 2. Woche zelluläre Phase. 3 Keimblätter aus der Gastrula: Ektoderm (→ Haut, Nervensystem), Mesoderm (→ Herz, Knochen, Muskeln), Endoderm (→ GI-Trakt, Lunge, Harnwege)." },

    { id: 49, topic: "Embryologie",
      q: "Was ist die Fetogenese und wann ist der Fötus lebensfähig?",
      a: "17.–60. Tag: Embryo, dann Fötus. Reihenfolge der Entwicklung: Herz → Finger/Zehen → Magen/Darm → Geschlecht. 10. Woche: Bewegungen. 23. Woche: lebensfähig. 36. Woche: Kopf im Becken. 38. Woche: reif." },

    { id: 50, topic: "Embryologie",
      q: "Was sind die Funktionen der Plazenta?",
      a: "Gasaustausch + Ernährung für den Fötus (~500g). Entsteht aus dem Trophoblasten. 1× Nabelvene (sauerstoffreich), 2× Nabelarterien (sauerstoffarm). Übernimmt Hormonproduktion ab Woche 10 (hCG, Östrogen, Progesteron). Bindet auch Bilirubin." },

    { id: 51, topic: "Embryologie",
      q: "Welche physiologischen Veränderungen treten in der Schwangerschaft auf?",
      a: "Atem- und Herzfrequenz ↑, Lungenvolumen ↓, Gewicht ↑ (~12 kg). Blutvolumen ↑, Ödeme ↑, Brüste ↑. Nebenwirkungen: Übelkeit, Heißhunger, Müdigkeit, Stimmungsschwankungen." },

    // ── Biologie Teil 1: Mikroskopische Anatomie ─────────────────
    { id: 52, topic: "Mikroskopische Anatomie",
      q: "Was ist der Unterschied zwischen Apoptose und Nekrose?",
      a: "Apoptose = programmierter, physiologischer Zelltod (kontrolliert, keine Entzündung). Nekrose = pathologischer Zelltod durch äußere Einwirkung (unkontrolliert, mit Entzündung)." },

    { id: 53, topic: "Mikroskopische Anatomie",
      q: "Was sind die Eigenschaften von Epithelgewebe?",
      a: "Keine eigenen Blutgefäße → Versorgung durch Diffusion. Barrierefunktion. Untertypen: Oberflächenepithel (kleidet Hohlräume aus), Drüsenepithel (endokrin/exokrin), Sinnesepithel." },

    { id: 54, topic: "Mikroskopische Anatomie",
      q: "Was ist der Unterschied zwischen endokrinem und exokrinem Drüsenepithel?",
      a: "Endokrin = Sekretion direkt ins Blut (z.B. Hormone). Exokrin = Sekretion über Ausführungsgang nach außen (z.B. Schweiß, Verdauungsenzyme). Serös = wässrig, mukös = schleimig." },

    { id: 55, topic: "Mikroskopische Anatomie",
      q: "Welche drei Typen von Muskelgewebe gibt es?",
      a: "1. Glatte Muskulatur (Verdauung, Gefäße – unwillkürlich). 2. Herzmuskulatur (gestreift, unwillkürlich). 3. Skelettmuskulatur (gestreift, willkürlich). Kontraktion durch Aktin/Myosin-Interaktion." },

    { id: 56, topic: "Mikroskopische Anatomie",
      q: "Was sind die Bestandteile des Nervengewebes?",
      a: "Neuronen (nicht teilungsfähig): Dendriten (Eingang), Soma/Zellkörper (Kern), Axon (Ausgang). Gliazellen: Stütz- und Versorgungszellen (Astrozyten, Oligodendrozyten, Schwann-Zellen, Mikroglia)." },

    // ── Biologie Teil 1: Makroskopische Anatomie ─────────────────
    { id: 57, topic: "Makroskopische Anatomie",
      q: "Was passiert im Magen? Welche Zellen produzieren was?",
      a: "Belegzellen → Magensäure (HCl): tötet Bakterien, aktiviert Pepsin, denaturiert Proteine. Hauptzellen → Pepsinogen (→ Pepsin): Proteinverdauung. Nebenzellen → Muzin: schützt Magenwand vor HCl." },

    { id: 58, topic: "Makroskopische Anatomie",
      q: "Was passiert im Dünndarm?",
      a: "Größter Teil der Verdauung. Setzt Sekretin frei → stimuliert Pankreas exokrin. Im Duodenum münden Bauchspeicheldrüse und Gallenblase. Oberfläche vergrößert durch: Kerckringfalten → Zotten → Mikrovilli." },

    { id: 59, topic: "Makroskopische Anatomie",
      q: "Was produziert die Leber und welche Funktionen hat sie?",
      a: "Leber produziert Galle (nicht die Gallenblase!), ~1,5 kg schwer. Funktionen: Glykogen-Speicher, Eiweiß- und Fettstoffwechsel, Vitamindepot, Entgiftung. Blut aus Magen/Darm über Pfortader → Leber." },

    { id: 60, topic: "Makroskopische Anatomie",
      q: "Was sind die Funktionen von Pankreas und Gallenflüssigkeit?",
      a: "Pankreas: produziert Bicarbonat (→ HCl-Neutralisation) und Verdauungsenzyme (Proteine, Kohlenhydrate, Fette), ~1,5 L/Tag. Gallenflüssigkeit: enthält keine Enzyme, emulgiert Fette, stimuliert Pankreaslipase, wird im Ileum recycelt." },

    { id: 61, topic: "Makroskopische Anatomie",
      q: "Was sind die grundlegenden Fakten über das Herz?",
      a: "300–350 g, 4% Eigenbedarf (über Herzkranzgefäße). Systole = Kontraktion, Diastole = Entspannung. 4–6 L Blut im Körper, 50–100 Schläge/min, Normaldruck 120/80 mmHg." },

    { id: 62, topic: "Makroskopische Anatomie",
      q: "Wie verläuft die Erregungsleitung im Herz?",
      a: "Sinusknoten → AV-Knoten (Verzögerung!) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern → Muskelzellen. AV-Knoten trennt Vorhof- und Kammeraktivität." },

    { id: 63, topic: "Makroskopische Anatomie",
      q: "ACHTUNG: Was ist der Unterschied zwischen Arterie und arteriellem Blut?",
      a: "Arterie = Gefäß vom Herz weg (führt NICHT automatisch O₂-reiches Blut – z.B. Lungenarterie führt O₂-armes Blut!). Arterielles Blut = O₂-reiches Blut. Lungenvenen führen O₂-reiches Blut trotz 'Vene' im Namen." },

    { id: 64, topic: "Makroskopische Anatomie",
      q: "Was sind primäre vs. sekundäre lymphatische Organe?",
      a: "Primär (Reifung): Thymus (T-Zellen) + Knochenmark (B-Zellen). Sekundär (Aktivierung): Milz, MALT (Schleimhäute), Lymphknoten. Milz kann entfernt werden → andere Organe übernehmen." },

    { id: 65, topic: "Makroskopische Anatomie",
      q: "Wie ist die Zusammensetzung von Luft und was ändert sich beim Ausatmen?",
      a: "Einatmen: ~78% N₂, ~21% O₂, <1% CO₂. Ausatmen: O₂ ↓ auf ~16%, CO₂ ↑ auf ~4%." },

    { id: 66, topic: "Makroskopische Anatomie",
      q: "Was sind die drei Schritte der Atemphysiologie?",
      a: "1. Ventilation (Atembewegung). 2. Perfusion (Durchblutung der Lunge). 3. Diffusion (Gasaustausch in Alveolen). ~500 mL pro Atemzug, ~10–15 Atemzüge/min. Lungen-/Rippenfell = Pleura." },

    // ── Biologie Teil 2: Nerven & Gehirn ─────────────────────────
    { id: 67, topic: "Nerven & Gehirn",
      q: "Wie entsteht das Ruhepotential einer Nervenzelle?",
      a: "3× Na⁺ raus, 2× K⁺ rein (Na⁺/K⁺-ATPase) + K⁺-Leckagestrom über offene Kanäle → −70 bis −90 mV. Zelle ist im Ruhezustand innen negativ geladen." },

    { id: 68, topic: "Nerven & Gehirn",
      q: "Was ist der Schwellenwert des Aktionspotentials?",
      a: "−50 mV. Wird dieser Wert überschritten, löst die Zelle ein Aktionspotential aus (Alles-oder-nichts-Prinzip). Na⁺-Kanäle öffnen → schnelle Depolarisation → Repolarisation durch K⁺-Ausstrom." },

    { id: 69, topic: "Nerven & Gehirn",
      q: "Was ist die Blut-Hirn-Schranke und woraus besteht sie?",
      a: "Selektive Barriere zwischen Blutkreislauf und ZNS. Aufbau: Endothelzellen (mit Tight Junctions) – Basalmembran – Astrozytenendfüße." },

    { id: 70, topic: "Nerven & Gehirn",
      q: "Was bedeutet afferent vs. efferent im Nervensystem?",
      a: "Afferent = sensorisch: Reize vom Körper zum Gehirn. Efferent = motorisch: Signale vom Gehirn zum Körper. Gehirn wiegt ~1,5 kg." },

    // ── Biologie Teil 2: Sinnesorgane ─────────────────────────────
    { id: 71, topic: "Sinnesorgane",
      q: "Wie ist das Auge in drei Schichten gegliedert?",
      a: "Äußere Augenhaut: Binde-, Horn- und Lederhaut. Mittlere Augenhaut (Uvea): Iris, Ziliarkörper, Aderhaut. Innere Augenhaut: Retina (Netzhaut) mit Stäbchen (Helligkeit) und Zapfen (Farbe)." },

    { id: 72, topic: "Sinnesorgane",
      q: "Was bewirkt die Kontraktion des Ziliarmuskels?",
      a: "Kontraktion → Erschlaffung der Zonulafasern → Linse wird dicker (stärkere Brechung) → Nahsicht (Akkommodation). Entspannung des Ziliarmuskels → Linse flacher → Fernsicht." },

    { id: 73, topic: "Sinnesorgane",
      q: "Wie ist das Ohr aufgebaut (Außen-, Mittel-, Innenohr)?",
      a: "Außenohr: Ohrmuschel, Gehörgang. Mittelohr: Trommelfell, 3 Gehörknöchelchen (Hammer–Amboss–Steigbügel), Eustachische Röhre. Innenohr: Cochlea (Hören), Vestibularorgan (3 Bogengänge + Makulaorgan = Gleichgewicht)." },

    { id: 74, topic: "Sinnesorgane",
      q: "Welche vier Hautrezeptoren gibt es und was nehmen sie wahr?",
      a: "Meissner-Körperchen: Berührung/Bewegung. Pacini-Körperchen: Vibration/Druck. Ruffini-Körperchen: Dehnung/Wärme. Merkel-Scheiben: Druck/Intensität (statisch)." },

    // ── Biologie Teil 2: Haut ────────────────────────────────────
    { id: 75, topic: "Haut",
      q: "Was sind die Grundfakten zur Haut?",
      a: "pH 5,5. Fläche 1,5–2 m². Gewicht 3–5 kg → schwertstes Organ des Körpers. Funktionen: Schutz, Vitamin-D-Synthese, Temperaturregulation, Sinneswahrnehmung." },

    { id: 76, topic: "Haut",
      q: "Wie ist die Haut in drei Schichten aufgebaut?",
      a: "Epidermis (Oberhaut): Photoprotektionssystem (Melanin). Dermis (Lederhaut): Thermoregulation (Talg- und Schweißdrüsen). Subkutis (Unterhaut): Fettspeicher, Stoßdämpfer." },

    { id: 77, topic: "Haut",
      q: "Aus welchen Schichten besteht die Epidermis von innen nach außen?",
      a: "Basalzellschicht → Stachelzellschicht → Körnerzellschicht → Glanzschicht (nur Leishaut) → Hornschicht. 90% der Zellen sind Keratinozyten." },

    // ── Biologie Teil 2: Hormone ─────────────────────────────────
    { id: 78, topic: "Hormone",
      q: "Wie unterscheiden sich lipophile von hydrophilen Hormonen?",
      a: "Lipophile (Steroide): brauchen Carrier-Protein im Blut, diffundieren durch Zell- und Kernmembran, wirken auf DNA. Hydrophile (Peptide, Aminosäurederivate): wasserlöslich, Rezeptor in Zellmembran → Second-Messenger (cAMP, IP3)." },

    { id: 79, topic: "Hormone",
      q: "Was macht Insulin und was unterscheidet Diabetes Typ I von Typ II?",
      a: "Insulin: senkt Blutzucker durch Förderung der Glukoseaufnahme in Zellen. Typ I: autoimmune Zerstörung der β-Zellen → keine Insulinproduktion. Typ II: Insulinresistenz der Zellen → keine ausreichende Aufnahme." },

    { id: 80, topic: "Hormone",
      q: "Was sind die Wirkungen von Cortisol und Katecholaminen?",
      a: "Cortisol (Nebennierenrinde): Blutzucker ↑, Entzündung ↓, Immunsystem ↓, unterliegt zirkadianem Rhythmus. Katecholamine (Adrenalin/Noradrenalin): Fight-or-Flight, Blutzucker ↑, Herzfrequenz ↑." },

    { id: 81, topic: "Hormone",
      q: "Was sind die Funktionen von Prolactin, GH, Oxytocin und ADH?",
      a: "Prolactin: Milchproduktion ↑, gehemmt durch Dopamin. Growth Hormone (Somatotropin): Wachstum ↑, anabole Wirkung. Oxytocin: Uteruskontraktion (Geburt), Milchausschuss. ADH/Vasopressin: Wasserrückresorption in Niere → reguliert Osmolarität." },

    { id: 82, topic: "Hormone",
      q: "Wie wird der Calcium-Haushalt hormonal reguliert?",
      a: "Parathormon (PTH, Nebenschilddrüse): Ca²⁺ ↑ (Knochenabbau, Nierenrückresorption). Calcitonin (Schilddrüse): Ca²⁺ ↓. Calcitriol (Vitamin D aktiv): Ca²⁺-Resorption im Darm ↑." },

    // ── Biologie Teil 2: Immunsystem ─────────────────────────────
    { id: 83, topic: "Immunsystem",
      q: "Was ist der Unterschied zwischen humoralem und zellulärem Immunsystem?",
      a: "Humoral = wasserlöslich: Antikörper im Blut (B-Zellen/Plasmazellen). Zellulär = zellbasiert: T-Zellen, NK-Zellen (direkte Zellkontakte). Beide können spezifisch oder unspezifisch sein." },

    { id: 84, topic: "Immunsystem",
      q: "Was sind die Zellen des unspezifischen Immunsystems?",
      a: "Neutrophile, Eosinophile, Basophile Granulozyten. Monozyten/Makrophagen (→ Phagozytose). Mastzellen (→ Allergie/Histamin). Natürliche Killerzellen (NK). Komplementsystem (Proteine)." },

    { id: 85, topic: "Immunsystem",
      q: "Was sind die Zellen des spezifischen Immunsystems?",
      a: "B-Lymphozyten → Plasmazellen (Antikörper) + Gedächtniszellen. T-Lymphozyten → T-Helferzellen (CD4) / Zytotoxische T-Zellen (CD8). T-Zellen reifen im Thymus (positive + negative Selektion: körpereigen vs. körperfremd)." },

    // ── Biologie Teil 2: Niere & Harnwege ───────────────────────
    { id: 86, topic: "Niere & Harnwege",
      q: "Was sind die Hauptfunktionen der Niere?",
      a: "H₂O-, Elektrolyt- und Säure-Basen-Regulation. Ausscheidung von Stoffwechselendprodukten (Harnstoff, Kreatinin). Produktion von Erythropoetin (EPO) und Renin." },

    { id: 87, topic: "Niere & Harnwege",
      q: "Wie ist die Niere anatomisch aufgebaut und was ist die GFR?",
      a: "Rinde → Mark → Kelche → Becken → Harnleiter (3 Engstellen!). 1 Mio. Nephrone pro Niere: Glomerulus + Bowman-Kapsel → Tubulussystem. GFR (glomeruläre Filtrationsrate): ~120 mL/min Primärharn. Niere ist bestdurchblutetes Organ: 1200 mL/min bei 200 g." },

    { id: 88, topic: "Niere & Harnwege",
      q: "Wie regulieren Herz und Niere den Blutdruck?",
      a: "Vasodilatation: ANP (Atriales Natriuretisches Peptid). Vasokonstriktion: RAAS (Renin-Angiotensin-Aldosteron-System). EPO (Erythropoetin) → stimuliert Blutbildung im Knochenmark." },

    // ── Biologie Teil 2: Geschlechtsorgane ──────────────────────
    { id: 89, topic: "Geschlechtsorgane",
      q: "Wie werden Spermien produziert und wo reifen sie?",
      a: "Produktion in Hoden (Samenkanälchen). Reifung und Lagerung im Nebenhoden (Kopf–Körper–Schwanz). Testosteron wird in Leydig-Zellen produziert. Spermium: Kopf (mit Akrosom) – Mittelstück (Mitochondrien) – Schwanzgeißel." },

    { id: 90, topic: "Geschlechtsorgane",
      q: "Was ist der Unterschied zwischen Spermatogenese und Spermiogenese?",
      a: "Spermatogenese (~80 Tage): Spermatogonien → Spermatozyte 1. Ordnung (diploid) → Meiose I → Spermatozyte 2. Ordnung → Meiose II → Spermatiden. Spermiogenese: Differenzierung/Reifung der Spermatiden zu funktionsfähigen Spermien." },

    { id: 91, topic: "Geschlechtsorgane",
      q: "Wie ist der weibliche Zyklus aufgebaut?",
      a: "Menstruationsphase (1–4) → Proliferationsphase (5–14, Östrogen↑, FSH stimuliert Follikelwachstum) → Ovulation (LH-Peak, Tag 14) → Sekretionsphase/Lutealphase (15–28, Progesteron↑, Gelbkörper) → Ischämiephase (28)." },

    { id: 92, topic: "Geschlechtsorgane",
      q: "Was ist die Oogenese?",
      a: "Oogonien → Oozyten 1. Ordnung (Meiose I beginnt, Arrest in Prophase I = Diktyotän). Ab Pubertät: monatlich ein Follikel reift → Ovulation (Meiose II beginnt). Nach Befruchtung: Meiose II abgeschlossen → reife Eizelle + Polkörperchen." },

    // ── Biologie Teil 2: Genetik & Vererbungslehre ───────────────
    { id: 93, topic: "Genetik & Vererbungslehre",
      q: "Wie ist die DNA hierarchisch organisiert?",
      a: "Nukleotide → Basenpaare (A-T, C-G) → Gene → Gencluster → Chromosom (p- und q-Arm, Zentromer) → Genom. Beim Menschen: ~23 Chromosomenpaare, ~46 Chromosomen, ~20.000–25.000 Gene." },

    { id: 94, topic: "Genetik & Vererbungslehre",
      q: "Was sind Gonosomen, Autosomen und Telomere?",
      a: "Gonosomen: Geschlechtschromosomen (X, Y). Autosomen: restliche 22 Chromosomenpaare. Telomere: Schutzkappen an den Enden der Chromosomen, verkürzen sich bei jeder Zellteilung → begrenzen maximale Zellteilungsanzahl." },

    { id: 95, topic: "Genetik & Vererbungslehre",
      q: "Was sind die Phasen des Zellzyklus?",
      a: "Interphase: G₁ (Wachstum) → S (DNA-Replikation) → G₂ (Vorbereitung). M-Phase: Mitose (Kernteilung) + Zytokinese (Zellteilung). G₀ = Ruhephase (ausdifferenzierte Zellen)." },

    { id: 96, topic: "Genetik & Vererbungslehre",
      q: "Beschreibe die 5 Phasen der Mitose.",
      a: "Pro-: Kondensierung, Zentriolen zu Polen, Nucleolus löst sich auf. Prometa-: Spindelapparat bildet sich, Kernhülle löst sich auf. Meta-: Chromosomen in Metaphasenplatte. Ana-: Trennung der Chromatiden, Bewegung zu Polen. Telo-: Kernhülle/Nucleolus neu, Dekondensierung → Zytokinese." },

    // ── Biologie Teil 3: Meiose & Vererbung ──────────────────────
    { id: 97, topic: "Meiose & Vererbung",
      q: "Was passiert in Meiose I vs. Meiose II?",
      a: "Meiose I (Reduktionsteilung): Crossing Over in Prophase I (Lepto-/Zygo-/Pachy-/Diploten), dann Trennung homologer Chromosomen → 2 haploide Tochterzellen. Meiose II (analog Mitose): Trennung der Schwesterchromatiden → 4 haploide Zellen (Gameten)." },

    { id: 98, topic: "Meiose & Vererbung",
      q: "Was sind Allele, Genotyp und Phänotyp?",
      a: "Allel = alternative Variante eines Gens. Genotyp = Gesamtheit aller Allele eines Organismus. Phänotyp = sichtbare Ausprägung (bestimmt durch Genotyp + Umwelt). Homozygot = identische Allele (AA/aa), Heterozygot = verschiedene (Aa)." },

    { id: 99, topic: "Meiose & Vererbung",
      q: "Was besagen die Mendel'schen Regeln?",
      a: "1. Regel (Uniformität): F1-Nachkommen zweier reinerbiger Eltern sind einheitlich (Aa). 2. Regel (Spaltung): F2-Generation spaltet im Verhältnis 1:2:1 (AA:Aa:aa) → Phänotyp 3:1 bei Dominanz." },

    { id: 100, topic: "Meiose & Vererbung",
      q: "Was ist der Unterschied zwischen autosomal-dominant, autosomal-rezessiv und X-chromosomal rezessiv?",
      a: "Autosomal-dominant: ein krankes Allel reicht → häufig krank. Autosomal-rezessiv: beide Allele müssen krank sein → oft Träger. X-chromosomal rezessiv: Mutter als Trägerin, Söhne zu 50% krank (z.B. Farbenblindheit, Hämophilie). Y-chromosomal: kaum bekannte Erbkrankheiten." },

    // ── Biologie Teil 3: Mutationen ──────────────────────────────
    { id: 101, topic: "Mutationen",
      q: "Was ist der Unterschied zwischen Keimbahn- und somatischer Mutation?",
      a: "Keimbahnmutation (an Gameten): wird an Nachkommen vererbt. Somatische Mutation (an Körperzellen): nicht vererbbar, kann zu Krebs führen." },

    { id: 102, topic: "Mutationen",
      q: "Welche Arten von Genmutationen gibt es?",
      a: "Substitution (ein Nukleotid ersetzt): Transition (Purin↔Purin oder Pyrimidin↔Pyrimidin) oder Transversion (Purin↔Pyrimidin). Deletion (Verlust) oder Insertion (Einfügung) → Frameshift-Mutation verändert gesamten Leserahmen." },

    { id: 103, topic: "Mutationen",
      q: "Was sind Chromosommutationen und Genommutationen?",
      a: "Chromosommutationen: strukturelle Veränderungen (Deletion, Inversion, Duplikation, Translokation). Genommutationen: Veränderung der Chromosomenzahl (Monosomie = −1, Trisomie = +1, z.B. Down-Syndrom = Trisomie 21). Häufiger bei älteren Müttern." },

    // ── Biologie Teil 3: Molekulare Genetik ──────────────────────
    { id: 104, topic: "Molekulare Genetik",
      q: "Wie ist die DNA strukturell aufgebaut?",
      a: "Doppelhelix (rechtsdrehend). Basenpaare + Desoxyribose + Phosphatgruppe. C-G: 3 Wasserstoffbrücken (stabiler). A-T: 2 Wasserstoffbrücken. Stränge antiparallel (5'→3' / 3'→5'). 10 Basenpaare pro Windung." },

    { id: 105, topic: "Molekulare Genetik",
      q: "Wie läuft die DNA-Replikation ab?",
      a: "Semikonservativ, in der S-Phase. Topoisomerase → entspiralisiert. Helicase → trennt Stränge. SSB-Proteine → halten offen. Primase → RNA-Primer. DNA-Pol III → synthetisiert 5'→3'. Folgestrang: diskontinuierlich (Okazaki-Fragmente). DNA-Pol I → entfernt Primer. Ligase → verbindet. Telomere verkürzen sich → Hayflick-Limit." },

    { id: 106, topic: "Molekulare Genetik",
      q: "Was bedeutet es, dass Eukaryoten-Chromosomen zu ~95% nicht aus Genen bestehen?",
      a: "Nur ~5% ist proteinkodierend (Exons). Introns = nicht-kodierende Abschnitte innerhalb von Genen (werden herausgespleißt). Intergene DNA = Regulation, Struktur, nicht-kodierende RNAs." },

    // ── Biologie Teil 3: Evolution & Entstehung des Lebens ───────
    { id: 107, topic: "Evolution & Entstehung des Lebens",
      q: "Was zeigt das Miller-Urey-Experiment?",
      a: "Aus anorganischen Molekülen (Ursuppe: H₂O, CH₄, NH₃, H₂ – kein O₂) entstehen organische Stoffe (Aminosäuren) → experimenteller Beleg für die chemische Evolution." },

    { id: 108, topic: "Evolution & Entstehung des Lebens",
      q: "Wie verlief die Evolution vom Molekül zur Zelle?",
      a: "RNA-Welt → Lipidmembran um Moleküle → Protocellen → Phagozytose primitiver Bakterien → Prokaryoten → Endosymbiontentheorie → Eukaryoten. Chemotrophe (chemische Energie) und Phototrophe (Lichtenergie)." },

    { id: 109, topic: "Evolution & Entstehung des Lebens",
      q: "Was besagt die Evolutionstheorie (Darwin, 1859)?",
      a: "Natürliche Selektion: Überleben und Reproduktion der am besten Angepassten. Neue Arten durch: a) Allopatrische Artbildung (geographische Isolation), b) Sympatrische Artbildung (Fortpflanzungsschranken ohne Isolation)." },

    { id: 110, topic: "Evolution & Entstehung des Lebens",
      q: "Was besagt das Hardy-Weinberg-Gesetz?",
      a: "Allelfrequenzen einer Population sind konstant wenn: große Population, keine Mutationen, zufällige Paarung, keine Selektion, kein Genfluss. Formel: p² + 2pq + q² = 1." },

    // ── Biologie Teil 3: Ökologie ────────────────────────────────
    { id: 111, topic: "Ökologie",
      q: "Was ist der Unterschied zwischen Symbiose, Parasitismus und Kommensalismus?",
      a: "Symbiose (+/+): beide profitieren (z.B. Wurzelbakterien/Pflanze). Parasitismus (+/−): einer profitiert, einer wird geschädigt (z.B. Bandwurm). Kommensalismus (+/0): einer profitiert, dem anderen egal (z.B. Schakale beim Löwen)." },

    { id: 112, topic: "Ökologie",
      q: "Was sind biotische vs. abiotische Einflussfaktoren in einem Ökosystem?",
      a: "Biotisch = durch Lebewesen (Konkurrenz, Prädation, Symbiose, Parasitismus). Abiotisch = durch Umwelt (Temperatur, Licht, Wasser, pH, Bodenbeschaffenheit)." },

    { id: 113, topic: "Ökologie",
      q: "Wie funktioniert die Nahrungskette?",
      a: "Sonne → Primärproduzenten (Pflanzen/Algen) → Primärkonsumenten (Herbivore) → Sekundärkonsumenten (Carnivore) → Detritus (tote Biomasse) → Destruenten (Pilze, Bakterien). Energieverlust ~90% pro Stufe." },

    // ── Biologie Teil 3: Immunbiologie ───────────────────────────
    { id: 114, topic: "Immunbiologie",
      q: "Was sind Antikörper und wie sind sie aufgebaut?",
      a: "Immunglobuline (Ig) – Y-förmige Glykoproteine aus 2 schweren + 2 leichten Ketten. Variable Region (Fab): Antigenbindung. Konstante Region (Fc): Effektorfunktion. Produziert von Plasmazellen (ausdifferenzierte B-Lymphozyten)." },

    { id: 115, topic: "Immunbiologie",
      q: "Welche 5 Immunglobulin-Klassen gibt es? (Merkspruch: GAMED)",
      a: "IgG: häufigster AK, plazentagängig, Langzeitschutz. IgA: Schleimhäute (Sekret-AK). IgM: erster AK bei Primärantwort, Pentamer. IgE: Allergie/Parasitenabwehr. IgD: Reifung von B-Zellen." },

    { id: 116, topic: "Immunbiologie",
      q: "Was ist der Unterschied zwischen aktiver und passiver Impfung?",
      a: "Aktiv: Antigen wird verabreicht → Körper bildet eigene Antikörper + Gedächtniszellen → langanhaltend (Wochen bis Monate). Passiv: fertige Antikörper werden verabreicht → sofortige Wirkung, aber kurzlebig (Wochen)." },

    { id: 117, topic: "Immunbiologie",
      q: "Wie funktioniert das ABO-Blutgruppensystem?",
      a: "Glykoproteine auf Erythrozyten. Blutgruppe A: Antigen A + Anti-B-AK (~40%). B: Antigen B + Anti-A-AK (~15%). AB: Antigen A+B, keine AK (~5%) → Universalempfänger. 0: kein Antigen, Anti-A+B-AK (~40%) → Universalspender (Erythrozyten)." },

    { id: 118, topic: "Immunbiologie",
      q: "Was ist der Rhesusfaktor und welche klinische Bedeutung hat er?",
      a: "D-Antigen auf Erythrozyten. Rh⁺ (85%): D-Antigen vorhanden. Rh⁻ (15%): nicht vorhanden. Rh⁻ Mutter + Rh⁺ Kind: nach erster Geburt Sensibilisierung → 2. Schwangerschaft: Anti-D-AK schädigen Fötus → Anti-D-Prophylaxe!" },

    { id: 119, topic: "Crossing Over",
      q: "Was ist Crossing Over und warum ist es wichtig?",
      a: "Austausch von Gensegmenten zwischen homologen Chromosomen während Prophase I der Meiose (Pachytän-Stadium). Erhöht genetische Vielfalt. Erzeugt neue Allel-Kombinationen → wichtig für Evolution." },


    // ── Chemie Teil 2: Säuren, Basen, Redox, Organik, Naturstoffe ──────
    { id: 120, topic: "Säuren und Basen",
      q: 'Was ist die Autoprotoloyse des Wassers und was folgt daraus für pH + pOH?',
      a: 'H₂O + H₂O → H₃O⁺ + OH⁻. Da H₂O in großer Menge konstant: K = [H₃O⁺] × [OH⁻]. Je 10⁻⁷ mol/L H₃O⁺ und OH⁻ → pK = pH + pOH = 14.' },

    { id: 121, topic: "Säuren und Basen",
      q: 'Was ist der Unterschied zwischen Brønsted- und Lewis-Definition von Säure/Base?',
      a: 'Brønsted: Säure = Protonendonator, Base = Protonenakzeptor. Lewis: Säure = e⁻-Paar-Akzeptor, Base = e⁻-Paar-Donator.' },

    { id: 122, topic: "Säuren und Basen",
      q: 'Was bestimmt die Stärke einer Säure strukturell?',
      a: 'Je höher die Elektronegativität des Atoms in der Mitte und mehr O → desto stärker die Säure. z.B. Phosphorsäure H₃PO₄, Salzsäure HCl. Stoffe, bei denen Wasser sowohl H₃O⁺ als auch OH⁻ bildet = Ampholyte.' },

    { id: 123, topic: "Säuren und Basen",
      q: 'Wie berechnet man den pH starker vs. schwacher Säuren?',
      a: 'Starke Säure: pH = −log₁₀[Säure]. Schwache Säure: pH = ½(pKs − log₁₀[Säure]). pKs = Säurekonstante: <4 = stark, >4 = schwach. pKb analog für Basen.' },

    { id: 124, topic: "Säuren und Basen",
      q: 'Was ist Neutralisation und was sind Mineralsäuren?',
      a: 'Neutralisation: Säure + Base → H₂O + Salz (z.B. HCl + NaOH → NaCl + H₂O). Mineralsäuren: Salz-, Schwefel- und Salpetersäure (→ Magenp>sauer/Regen, Löslichkeit).' },

    { id: 125, topic: "Säuren und Basen",
      q: 'Was sind Salze und wie werden sie benannt?',
      a: 'Salze = Ionenbindung zwischen Kationen und Anionen (L = Kationen·Anionen). Nitrate/Nitrite (NO₃⁻/NO₂⁻) → Basis N → Salpetersäure. Sulfate/Sulfite/Sulfid (SO₄²⁻/SO₃²⁻/S²⁻) → Basis S → Schwefelsäure.' },

    { id: 126, topic: "Redox-Reaktionen",
      q: 'Was bedeutet Oxidation und Reduktion?',
      a: 'Reduktion = e⁻-Aufnahme. Oxidation = e⁻-Abgabe (Oxidationszahl ↑). Achtung bei Molekülen: bei e⁻-Sharing wird e⁻ dem elektronegativeren zugeordnet. ΣOxidationszahlen = Ladung Molekül.' },

    { id: 127, topic: "Redox-Reaktionen",
      q: 'Was ist die elektrochemische Spannungsreihe?',
      a: 'Sortierung nach Reduktionsfreudigkeit. (Edle) Alkalimetalle = gute Reduktionsmittel (werden leicht oxidiert). Halogene = gute Oxidationsmittel (werden leicht reduziert). Vice versa.' },

    { id: 128, topic: "Redox-Reaktionen",
      q: 'Was ist eine galvanische Zelle und wo ist Anode/Kathode?',
      a: 'Redox-Reaktion + Salzbrücke = galvanische Zelle (Stromzelle). Ort der Oxidation = Anode = −Pol. (Bei Elektrolyse ist es umgekehrt!)' },

    { id: 129, topic: "Organische Chemie",
      q: 'Was sind Alkane, Alkene und Alkine und ihre Formeln?',
      a: 'Kohlenwasserstoffe bestehen nur aus C und H → geringe e⁻-Negativität. Alkane: 1-fach Bindung, CₙH₂ₙ₊₂ (Methan, Ethan, Propan, Butan…), Siedepunkt ↑ mit Kettenlänge. Cycloalkane: CₙHₙ. Alkene: 2-fach Bindung, CₙH₂ₙ₋₂ (C=C), kumuliert/konjugiert/isoliert. Alkine: 3-fach Bindung (C≡C), CₙH₂ₙ₋₂, ungesättigt.' },

    { id: 130, topic: "Organische Chemie",
      q: 'Was sind funktionelle Gruppen mit O und was machen sie?',
      a: '−OH: Alkohole (primär/sekundär/tertiär; ein-/zwei-/dreiwertig; amphoter). C−O−C: Ether (aus −OH + −OH → H₂O + Ether). C=O: Carbonylgruppe (Aldehyd −al, Keton −on). COOH: Carboxylgruppe (Säuren → Alkanname + -säure, enthält Hydroxy-).' },

    { id: 131, topic: "Organische Chemie",
      q: 'Was sind Thiol-Gruppen und Disulfidbrücken?',
      a: 'Gruppen mit S: wie O, aber weniger e⁻-negativ → Siedepunkt ↓, viel Energie gespeichert. Thiole analog Alkohole; Thioether, Thioester. 2× Thiol → Disulfidbrücke (kovalent, sehr stark, wichtig für Mensch z.B. Proteinstruktur).' },

    { id: 132, topic: "Organische Chemie",
      q: 'Was sind Amine und wie unterscheiden sie sich von Alkoholen?',
      a: 'Gruppen mit N leiten sich von Ammoniak ab → Amine. Primär = N + 1×C, Sekundär = N + 2×C. Achtung: anders als bei −OH! (Primär/Sekundär bezieht sich auf die Anzahl der C-Substituenten am N, nicht am Kohlenstoff.)' },

    { id: 133, topic: "Substanzen der Natur",
      q: 'Wie sind Kohlenhydrate aufgebaut und welche Disaccharide sind wichtig?',
      a: 'Formel: Cₙ(H₂O)ₙ. Als Mono-, Di- und Polysaccharide (Zucker). Unterscheidung durch Kettenlänge → wichtig: Ribose (5C) und Glucose (6C). Wichtige Disaccharide: Lactose (Gala+Gluc), Maltose (Gluc+Gluc), Saccharose (Gluc+Fruct).' },

    { id: 134, topic: "Substanzen der Natur",
      q: 'Wie sind Aminosäuren und Proteine aufgebaut?',
      a: 'Aminosäuren bestehen aus Carboxylgruppe (COOH) und Aminogruppe (NH₂). 8 essentielle AS → Aufnahme durch Nahrung nötig. Bindung über Amid-/Peptidbindung → Peptide → Proteine. Proteine haben Primär- (Sequenz), Sekundär- (α-Helix, β-Faltblatt), Tertiär- (3D-Struktur) und Quartärstruktur (Domänen).' },

    { id: 135, topic: "Substanzen der Natur",
      q: 'Was sind Lipide und Fettsäuren?',
      a: 'Lipide sind hydrophob, vom Organismus hergestellt, 7 Gruppen u.a. Fettsäuren. Fettsäuren sind amphiphil → COOH polar, CH-Kette unpolar. Gesättigt = keine Doppelbindung, sonst ungesättigt. ω3-Fettsäure = Doppelbindung am 3. und 4. C vom Kettenende. Fettsäuren nicht frei im Körper → in Glycerin gespeichert.' },

    { id: 136, topic: "Substanzen der Natur",
      q: 'Wie sind Nukleinsäuren aufgebaut (Nukleotid → DNA)?',
      a: 'Nukleinbase → Nukleosin → Nukleotid → Nukleinsäure. Pyrimidin-Basen: C, T, U. Purin-Basen: A, G. Base + Zucker (Ribose) = Nukleosin. RNA vs. DNA → 2-Desoxyribose. Nukleosin + Phosphorsäure = Nukleotid (Esterbindung mit Zucker). Mehrere Nukleotide = Strang; mittels H-Brücken zum Doppelstrang (→ 2 A-T, 3 C-G).' },

    { id: 137, topic: "Substanzen der Natur",
      q: 'Welche fettlöslichen Vitamine gibt es und was machen sie?',
      a: 'Fettlöslich: A, D, E, K. A = Retinol → Sehen. D = Cholecalciferol → Knochen, aktiv als D₃, Knochenbildung über Haut. E = Tocopherol → gegen freie Radikale, Antioxidans. K = Phyllochinon → Blutgerinnung.' },

    { id: 138, topic: "Substanzen der Natur",
      q: 'Welche wasserlöslichen Vitamine gibt es und was machen sie?',
      a: 'C = Ascorbinsäure → Skorbut, Antioxidans. B₁ = Thiamin → Enzym. B₂ = Riboflavin → Stoffwechsel. B₃ = Niacin → Cofaktor. B₅ = Pantothensäure → Coenzym. B₆ = Pyridoxalphosphat (PALP) → wichtiger Cofaktor. B₇/H = Biotin → Stoffwechsel, Epigenetik. B₉ = Folsäure → Methylierung (Nukleinsäuren!). B₁₂ = Cobalamin → Blut, Nerven; in tierischen Produkten.' },
];