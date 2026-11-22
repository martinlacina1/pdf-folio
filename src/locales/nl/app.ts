// Dutch UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Dutch. See src/i18n.ts.
const nl: Record<string, string> = {
  "Save as…": "Opslaan als…",
  // Tools
  "Select": "Selecteren",
  "Highlight": "Markeren",
  "Draw": "Tekenen",
  "Text": "Tekst",
  "Tools": "Hulpmiddelen",
  "Automatically highlight selected text": "Geselecteerde tekst automatisch markeren",
  "Sign": "Ondertekenen",
  "Add a signature": "Handtekening toevoegen",
  "Edit mode": "Bewerkingsmodus",
  "Exit edit mode": "Bewerkingsmodus sluiten",
  "Edit existing text and images": "Bestaande tekst en afbeeldingen bewerken",
  "Save": "Opslaan",
  "Save changes to {name} (Ctrl+S)": "Wijzigingen in {name} opslaan (Ctrl+S)",
  "Save copy": "Kopie opslaan",
  "Save edited copy (Ctrl+Shift+S)": "Bewerkte kopie opslaan (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Geel",
  "Green": "Groen",
  "Blue": "Blauw",
  "Pink": "Roze",
  "Red": "Rood",
  "Black": "Zwart",
  "Purple": "Paars",

  // Top bar and More menu
  "Back to library": "Terug naar bibliotheek",
  "Toggle sidebar (Ctrl+\\)": "Zijbalk weergeven/verbergen (Ctrl+\\)",
  "Unsaved changes": "Niet-opgeslagen wijzigingen",
  "Ask AI": "Vraag AI",
  "Search (Ctrl+F)": "Zoeken (Ctrl+F)",
  "New tab": "Nieuw tabblad",
  "Close document": "Document sluiten",
  "Save a copy": "Kopie opslaan",
  "Version history": "Versiegeschiedenis",
  "Print": "Afdrukken",
  "Document info": "Documentgegevens",
  "PDF dark mode": "Donkere modus voor PDF",
  "Focus mode": "Focusmodus",
  "Settings": "Instellingen",
  "Keyboard shortcuts": "Sneltoetsen",
  "About Folio": "Over Folio",

  // Annotation options
  "Annotation options": "Aantekeningsopties",
  "Drawing tool": "Tekengereedschap",
  "Pen": "Pen",
  "Rectangle": "Rechthoek",
  "Oval": "Ovaal",
  "Arrow": "Pijl",
  "Color": "Kleur",
  "Undo (Ctrl+Z)": "Ongedaan maken (Ctrl+Z)",
  "Done": "Gereed",

  // Navigation
  "Navigation": "Navigatie",
  "Previous page": "Vorige pagina",
  "Next page": "Volgende pagina",
  "Page number": "Paginanummer",
  "of {n}": "van {n}",
  "Zoom out (Ctrl −)": "Uitzoomen (Ctrl −)",
  "Zoom in (Ctrl +)": "Inzoomen (Ctrl +)",
  "Rotate (R)": "Draaien (R)",
  "Exit focus mode": "Focusmodus sluiten",
  "to exit focus mode": "om de focusmodus te sluiten",

  // Opening
  "Incorrect password. Try again.": "Onjuist wachtwoord. Probeer het opnieuw.",
  "Couldn't open “{name}”. {reason}": "Kan “{name}” niet openen. {reason}",
  "The file may be damaged.": "Het bestand is mogelijk beschadigd.",
  "“{name}” isn't a PDF.": "“{name}” is geen PDF.",
  "Opening {host}…": "{host} openen…",
  "Couldn't download from {host}. The site may not allow it.": "Kan niet downloaden van {host}. De site staat dit mogelijk niet toe.",
  "Couldn't open that link. {reason}": "Kan die koppeling niet openen. {reason}",
  "Couldn't open the sample document.": "Kan het voorbeelddocument niet openen.",
  "Converting {name} to PDF…": "{name} converteren naar PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Kan “{name}” niet converteren naar PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Sleep een PDF-bestand of een koppeling naar een PDF hierheen.",
  "Drop a PDF or link to open": "Sleep een PDF of koppeling hierheen om te openen",

  // Markup
  "Annotations aren’t supported for this document": "Aantekeningen worden niet ondersteund voor dit document",
  "Couldn't add the shape": "Kan de vorm niet toevoegen",
  "Couldn't highlight that selection": "Kan die selectie niet markeren",
  "Highlight removed": "Markering verwijderd",
  "Markdown copied": "Markdown gekopieerd",
  "Copy failed": "Kopiëren mislukt",
  "Couldn't export notes": "Kan notities niet exporteren",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (andere volgorde).pdf",
  "{name} (edited).pdf": "{name} (bewerkt).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kopie geëxporteerd. Kan de versiegeschiedenis niet opslaan op dit apparaat.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kopie geëxporteerd. Geschiedenis is beschikbaar voor niet-versleutelde PDF’s tot 50 MB.",
  "Downloading reordered copy": "Kopie met andere paginavolgorde downloaden",
  "Saved a copy with your highlights and notes": "Kopie met uw markeringen en notities opgeslagen",
  "Download started": "Download gestart",
  "Couldn't save a copy of this document.": "Kan geen kopie van dit document opslaan.",
  "No changes to save": "Geen wijzigingen om op te slaan",
  "Saved. Couldn’t keep the previous version in version history.": "Opgeslagen. Kan de vorige versie niet bewaren in de versiegeschiedenis.",
  "Saved {name}": "{name} opgeslagen",
  "Couldn't save “{name}”. {reason}": "Kan “{name}” niet opslaan. {reason}",
  "Couldn't print this document.": "Kan dit document niet afdrukken.",
  "Couldn't print — saved a copy instead": "Kan niet afdrukken — in plaats daarvan is een kopie opgeslagen",
  "Editing requires an unsigned, unencrypted PDF.": "Voor bewerken is een niet-ondertekende, niet-versleutelde PDF vereist.",
  "The document changed. Try again.": "Het document is gewijzigd. Probeer het opnieuw.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Donkere modus voor PDF is gewijzigd, maar de voorkeur kan niet worden opgeslagen.",
  "Page scrolling changed, but couldn't save the preference.": "Paginaschuiven is gewijzigd, maar de voorkeur kan niet worden opgeslagen.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Handtekening toegevoegd. Ctrl+Z maakt ongedaan; exporteer met Kopie opslaan.",
  "Signature field detected on page {page}": "Handtekeningveld gevonden op pagina {page}",
  "Possible signature area on page {page}": "Mogelijke plek voor handtekening op pagina {page}",
  "Review signature": "Handtekening controleren",
  "Dismiss signature suggestion": "Handtekeningsuggestie negeren",

  // Updates
  "Folio {version} is ready": "Folio {version} is gereed",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Start opnieuw op om bij te werken. Installatie bij afsluiten volgt uw instelling voor automatisch bijwerken.",
  "Restart": "Opnieuw starten",
  "Later": "Later",
};
export default nl;
