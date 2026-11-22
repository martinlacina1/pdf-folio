// Norwegian Bokmål UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Norwegian Bokmål. See src/i18n.ts.
const nb: Record<string, string> = {
  // Tools
  "Select": "Velg",
  "Highlight": "Uthev",
  "Draw": "Tegn",
  "Text": "Tekst",
  "Tools": "Verktøy",
  "Automatically highlight selected text": "Uthev merket tekst automatisk",
  "Sign": "Signer",
  "Add a signature": "Legg til en signatur",
  "Edit mode": "Redigeringsmodus",
  "Exit edit mode": "Avslutt redigering",
  "Edit existing text and images": "Rediger eksisterende tekst og bilder",
  "Save": "Lagre",
  "Save changes to {name} (Ctrl+S)": "Lagre endringer i {name} (Ctrl+S)",
  "Save copy": "Lagre kopi",
  "Save edited copy (Ctrl+Shift+S)": "Lagre redigert kopi (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Gul",
  "Green": "Grønn",
  "Blue": "Blå",
  "Pink": "Rosa",
  "Red": "Rød",
  "Black": "Svart",
  "Purple": "Lilla",

  // Top bar and More menu
  "Back to library": "Tilbake til biblioteket",
  "Toggle sidebar (Ctrl+\\)": "Vis/skjul sidepanelet (Ctrl+\\)",
  "Unsaved changes": "Ulagrede endringer",
  "Ask AI": "Spør AI",
  "Search (Ctrl+F)": "Søk (Ctrl+F)",
  "New tab": "Ny fane",
  "Close document": "Lukk dokument",
  "Save a copy": "Lagre en kopi",
  "Version history": "Versjonslogg",
  "Print": "Skriv ut",
  "Document info": "Dokumentinformasjon",
  "PDF dark mode": "Mørk modus for PDF",
  "Focus mode": "Fokusmodus",
  "Settings": "Innstillinger",
  "Keyboard shortcuts": "Hurtigtaster",
  "About Folio": "Om Folio",

  // Annotation options
  "Annotation options": "Alternativer for merknader",
  "Drawing tool": "Tegneverktøy",
  "Pen": "Penn",
  "Rectangle": "Rektangel",
  "Oval": "Oval",
  "Arrow": "Pil",
  "Color": "Farge",
  "Undo (Ctrl+Z)": "Angre (Ctrl+Z)",
  "Done": "Ferdig",

  // Navigation
  "Navigation": "Navigering",
  "Previous page": "Forrige side",
  "Next page": "Neste side",
  "Page number": "Sidetall",
  "of {n}": "av {n}",
  "Zoom out (Ctrl −)": "Zoom ut (Ctrl −)",
  "Zoom in (Ctrl +)": "Zoom inn (Ctrl +)",
  "Rotate (R)": "Roter (R)",
  "Exit focus mode": "Avslutt fokusmodus",
  "to exit focus mode": "for å avslutte fokusmodus",

  // Opening
  "Incorrect password. Try again.": "Feil passord. Prøv igjen.",
  "Couldn't open “{name}”. {reason}": "Kunne ikke åpne «{name}». {reason}",
  "The file may be damaged.": "Filen kan være skadet.",
  "“{name}” isn't a PDF.": "«{name}» er ikke en PDF.",
  "Opening {host}…": "Åpner {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Kunne ikke laste ned fra {host}. Nettstedet tillater det kanskje ikke.",
  "Couldn't open that link. {reason}": "Kunne ikke åpne koblingen. {reason}",
  "Couldn't open the sample document.": "Kunne ikke åpne eksempeldokumentet.",
  "Converting {name} to PDF…": "Konverterer {name} til PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Kunne ikke konvertere «{name}» til PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Slipp en PDF-fil eller en kobling til en PDF.",
  "Drop a PDF or link to open": "Slipp en PDF eller kobling for å åpne",

  // Markup
  "Annotations aren’t supported for this document": "Merknader støttes ikke for dette dokumentet",
  "Couldn't add the shape": "Kunne ikke legge til figuren",
  "Couldn't highlight that selection": "Kunne ikke utheve det merkede området",
  "Highlight removed": "Utheving fjernet",
  "Markdown copied": "Markdown kopiert",
  "Copy failed": "Kopiering mislyktes",
  "Couldn't export notes": "Kunne ikke eksportere notatene",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (ny rekkefølge).pdf",
  "{name} (edited).pdf": "{name} (redigert).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kopien er eksportert. Kunne ikke lagre versjonsloggen på denne enheten.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kopien er eksportert. Logg er tilgjengelig for ukrypterte PDF-filer på opptil 50 MB.",
  "Downloading reordered copy": "Laster ned kopi med ny siderekkefølge",
  "Saved a copy with your highlights and notes": "Lagret en kopi med uthevingene og notatene dine",
  "Download started": "Nedlastingen har startet",
  "Couldn't save a copy of this document.": "Kunne ikke lagre en kopi av dokumentet.",
  "No changes to save": "Ingen endringer å lagre",
  "Saved. Couldn’t keep the previous version in version history.": "Lagret. Kunne ikke beholde forrige versjon i versjonsloggen.",
  "Saved {name}": "Lagret {name}",
  "Couldn't save “{name}”. {reason}": "Kunne ikke lagre «{name}». {reason}",
  "Couldn't print this document.": "Kunne ikke skrive ut dokumentet.",
  "Couldn't print — saved a copy instead": "Kunne ikke skrive ut – lagret en kopi i stedet",
  "Editing requires an unsigned, unencrypted PDF.": "Redigering krever en usignert, ukryptert PDF.",
  "The document changed. Try again.": "Dokumentet er endret. Prøv igjen.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Mørk modus for PDF ble endret, men innstillingen kunne ikke lagres.",
  "Page scrolling changed, but couldn't save the preference.": "Siderullingen ble endret, men innstillingen kunne ikke lagres.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Signaturen er lagt til. Angre med Ctrl+Z; eksporter med Lagre kopi.",
  "Signature field detected on page {page}": "Signaturfelt funnet på side {page}",
  "Possible signature area on page {page}": "Mulig signaturområde på side {page}",
  "Review signature": "Se gjennom signatur",
  "Dismiss signature suggestion": "Lukk signaturforslaget",

  // Updates
  "Folio {version} is ready": "Folio {version} er klar",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Start på nytt for å oppdatere. Installasjon ved lukking følger innstillingen for automatiske oppdateringer.",
  "Restart": "Start på nytt",
  "Later": "Senere",
};
export default nb;
