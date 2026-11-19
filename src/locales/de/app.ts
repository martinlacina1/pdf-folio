// German UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → German. See src/i18n.ts.
const de: Record<string, string> = {
  // Tools
  "Select": "Auswählen",
  "Highlight": "Hervorheben",
  "Draw": "Zeichnen",
  "Text": "Text",
  "Tools": "Werkzeuge",
  "Automatically highlight selected text": "Ausgewählten Text automatisch hervorheben",
  "Sign": "Unterschreiben",
  "Add a signature": "Unterschrift hinzufügen",
  "Edit mode": "Bearbeitungsmodus",
  "Exit edit mode": "Bearbeitung beenden",
  "Edit existing text and images": "Vorhandenen Text und Bilder bearbeiten",
  "Save": "Speichern",
  "Save changes to {name} (Ctrl+S)": "Änderungen in {name} speichern (Ctrl+S)",
  "Save copy": "Kopie speichern",
  "Save edited copy (Ctrl+Shift+S)": "Bearbeitete Kopie speichern (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Gelb",
  "Green": "Grün",
  "Blue": "Blau",
  "Pink": "Rosa",
  "Red": "Rot",
  "Black": "Schwarz",
  "Purple": "Lila",

  // Top bar and More menu
  "Back to library": "Zurück zur Bibliothek",
  "Toggle sidebar (Ctrl+\\)": "Seitenleiste ein-/ausblenden (Ctrl+\\)",
  "Unsaved changes": "Nicht gespeicherte Änderungen",
  "Ask AI": "KI fragen",
  "Search (Ctrl+F)": "Suchen (Ctrl+F)",
  "New tab": "Neuer Tab",
  "Close document": "Dokument schließen",
  "Save a copy": "Kopie speichern",
  "Version history": "Versionsverlauf",
  "Print": "Drucken",
  "Document info": "Dokumentinformationen",
  "PDF dark mode": "Dunkelmodus für PDF",
  "Focus mode": "Fokusmodus",
  "Settings": "Einstellungen",
  "Keyboard shortcuts": "Tastenkombinationen",
  "About Folio": "Über Folio",

  // Annotation options
  "Annotation options": "Anmerkungsoptionen",
  "Drawing tool": "Zeichenwerkzeug",
  "Pen": "Stift",
  "Rectangle": "Rechteck",
  "Oval": "Ellipse",
  "Arrow": "Pfeil",
  "Color": "Farbe",
  "Undo (Ctrl+Z)": "Rückgängig (Ctrl+Z)",
  "Done": "Fertig",

  // Navigation
  "Navigation": "Navigation",
  "Previous page": "Vorherige Seite",
  "Next page": "Nächste Seite",
  "Page number": "Seitenzahl",
  "of {n}": "von {n}",
  "Zoom out (Ctrl −)": "Verkleinern (Ctrl −)",
  "Zoom in (Ctrl +)": "Vergrößern (Ctrl +)",
  "Rotate (R)": "Drehen (R)",
  "Exit focus mode": "Fokusmodus beenden",
  "to exit focus mode": "beendet den Fokusmodus",

  // Opening
  "Incorrect password. Try again.": "Falsches Kennwort. Versuchen Sie es erneut.",
  "Couldn't open “{name}”. {reason}": "„{name}“ konnte nicht geöffnet werden. {reason}",
  "The file may be damaged.": "Die Datei ist möglicherweise beschädigt.",
  "“{name}” isn't a PDF.": "„{name}“ ist keine PDF-Datei.",
  "Opening {host}…": "{host} wird geöffnet…",
  "Couldn't download from {host}. The site may not allow it.": "Download von {host} nicht möglich. Die Website lässt dies möglicherweise nicht zu.",
  "Couldn't open that link. {reason}": "Der Link konnte nicht geöffnet werden. {reason}",
  "Couldn't open the sample document.": "Das Beispieldokument konnte nicht geöffnet werden.",
  "Converting {name} to PDF…": "{name} wird in PDF konvertiert…",
  "Couldn't convert “{name}” to PDF. {reason}": "„{name}“ konnte nicht in PDF konvertiert werden. {reason}",
  "Drop a PDF file or a link to a PDF.": "Legen Sie eine PDF-Datei oder einen Link zu einer PDF-Datei hier ab.",
  "Drop a PDF or link to open": "PDF oder Link zum Öffnen hier ablegen",

  // Markup
  "Annotations aren’t supported for this document": "Dieses Dokument unterstützt keine Anmerkungen",
  "Couldn't add the shape": "Die Form konnte nicht hinzugefügt werden",
  "Couldn't highlight that selection": "Die Auswahl konnte nicht hervorgehoben werden",
  "Highlight removed": "Hervorhebung entfernt",
  "Markdown copied": "Markdown kopiert",
  "Copy failed": "Kopieren fehlgeschlagen",
  "Couldn't export notes": "Notizen konnten nicht exportiert werden",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (neu angeordnet).pdf",
  "{name} (edited).pdf": "{name} (bearbeitet).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kopie exportiert. Der Versionsverlauf konnte auf diesem Gerät nicht gespeichert werden.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kopie exportiert. Der Verlauf ist für unverschlüsselte PDFs bis 50 MB verfügbar.",
  "Downloading reordered copy": "Neu angeordnete Kopie wird heruntergeladen",
  "Saved a copy with your highlights and notes": "Kopie mit Ihren Hervorhebungen und Notizen gespeichert",
  "Download started": "Download gestartet",
  "Couldn't save a copy of this document.": "Eine Kopie dieses Dokuments konnte nicht gespeichert werden.",
  "No changes to save": "Keine Änderungen zum Speichern",
  "Saved. Couldn’t keep the previous version in version history.": "Gespeichert. Die vorherige Version konnte nicht im Versionsverlauf behalten werden.",
  "Saved {name}": "{name} gespeichert",
  "Couldn't save “{name}”. {reason}": "„{name}“ konnte nicht gespeichert werden. {reason}",
  "Couldn't print this document.": "Dieses Dokument konnte nicht gedruckt werden.",
  "Couldn't print — saved a copy instead": "Drucken nicht möglich – stattdessen wurde eine Kopie gespeichert",
  "Editing requires an unsigned, unencrypted PDF.": "Zum Bearbeiten ist eine nicht signierte, unverschlüsselte PDF-Datei erforderlich.",
  "The document changed. Try again.": "Das Dokument wurde geändert. Versuchen Sie es erneut.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Der Dunkelmodus für PDF wurde geändert, die Einstellung konnte aber nicht gespeichert werden.",
  "Page scrolling changed, but couldn't save the preference.": "Das Seitenblättern wurde geändert, die Einstellung konnte aber nicht gespeichert werden.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Unterschrift hinzugefügt. Mit Ctrl+Z rückgängig machen; mit „Kopie speichern“ exportieren.",
  "Signature field detected on page {page}": "Unterschriftsfeld auf Seite {page} erkannt",
  "Possible signature area on page {page}": "Möglicher Unterschriftsbereich auf Seite {page}",
  "Review signature": "Unterschrift prüfen",
  "Dismiss signature suggestion": "Unterschriftsvorschlag schließen",

  // Updates
  "Folio {version} is ready": "Folio {version} ist bereit",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Zum Aktualisieren neu starten. Die Installation beim Schließen richtet sich nach Ihrer Einstellung für automatische Updates.",
  "Restart": "Neu starten",
  "Later": "Später",
};
export default de;
