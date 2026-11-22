// Croatian UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Croatian. See src/i18n.ts.
const hr: Record<string, string> = {
  "Save as…": "Spremi kao…",
  // Tools
  "Select": "Odaberi",
  "Highlight": "Istakni",
  "Draw": "Crtaj",
  "Text": "Tekst",
  "Tools": "Alati",
  "Automatically highlight selected text": "Automatski istakni odabrani tekst",
  "Sign": "Potpiši",
  "Add a signature": "Dodaj potpis",
  "Edit mode": "Način uređivanja",
  "Exit edit mode": "Izađi iz uređivanja",
  "Edit existing text and images": "Uredi postojeći tekst i slike",
  "Save": "Spremi",
  "Save changes to {name} (Ctrl+S)": "Spremi promjene u {name} (Ctrl+S)",
  "Save copy": "Spremi kopiju",
  "Save edited copy (Ctrl+Shift+S)": "Spremi uređenu kopiju (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Žuta",
  "Green": "Zelena",
  "Blue": "Plava",
  "Pink": "Ružičasta",
  "Red": "Crvena",
  "Black": "Crna",
  "Purple": "Ljubičasta",

  // Top bar and More menu
  "Back to library": "Natrag u knjižnicu",
  "Toggle sidebar (Ctrl+\\)": "Prikaži/sakrij bočnu traku (Ctrl+\\)",
  "Unsaved changes": "Nespremljene promjene",
  "Ask AI": "Pitaj AI",
  "Search (Ctrl+F)": "Pretraživanje (Ctrl+F)",
  "New tab": "Nova kartica",
  "Close document": "Zatvori dokument",
  "Save a copy": "Spremi kopiju",
  "Version history": "Povijest verzija",
  "Print": "Ispis",
  "Document info": "Podaci o dokumentu",
  "PDF dark mode": "Tamni način za PDF",
  "Focus mode": "Način fokusa",
  "Settings": "Postavke",
  "Keyboard shortcuts": "Tipkovnički prečaci",
  "About Folio": "O aplikaciji Folio",

  // Annotation options
  "Annotation options": "Mogućnosti bilješki",
  "Drawing tool": "Alat za crtanje",
  "Pen": "Olovka",
  "Rectangle": "Pravokutnik",
  "Oval": "Elipsa",
  "Arrow": "Strelica",
  "Color": "Boja",
  "Undo (Ctrl+Z)": "Poništi (Ctrl+Z)",
  "Done": "Gotovo",

  // Navigation
  "Navigation": "Navigacija",
  "Previous page": "Prethodna stranica",
  "Next page": "Sljedeća stranica",
  "Page number": "Broj stranice",
  "of {n}": "od {n}",
  "Zoom out (Ctrl −)": "Smanji (Ctrl −)",
  "Zoom in (Ctrl +)": "Povećaj (Ctrl +)",
  "Rotate (R)": "Zakreni (R)",
  "Exit focus mode": "Izađi iz načina fokusa",
  "to exit focus mode": "za izlaz iz načina fokusa",

  // Opening
  "Incorrect password. Try again.": "Pogrešna lozinka. Pokušajte ponovno.",
  "Couldn't open “{name}”. {reason}": "Nije moguće otvoriti „{name}“. {reason}",
  "The file may be damaged.": "Datoteka je možda oštećena.",
  "“{name}” isn't a PDF.": "„{name}“ nije PDF.",
  "Opening {host}…": "Otvaranje: {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Preuzimanje s {host} nije uspjelo. Web-mjesto to možda ne dopušta.",
  "Couldn't open that link. {reason}": "Nije moguće otvoriti poveznicu. {reason}",
  "Couldn't open the sample document.": "Nije moguće otvoriti ogledni dokument.",
  "Converting {name} to PDF…": "Pretvaranje {name} u PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Nije moguće pretvoriti „{name}“ u PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Ispustite PDF datoteku ili poveznicu na PDF.",
  "Drop a PDF or link to open": "Ispustite PDF ili poveznicu za otvaranje",

  // Markup
  "Annotations aren’t supported for this document": "Ovaj dokument ne podržava bilješke",
  "Couldn't add the shape": "Nije moguće dodati oblik",
  "Couldn't highlight that selection": "Nije moguće istaknuti odabrani tekst",
  "Highlight removed": "Isticanje je uklonjeno",
  "Markdown copied": "Markdown je kopiran",
  "Copy failed": "Kopiranje nije uspjelo",
  "Couldn't export notes": "Nije moguće izvesti bilješke",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (promijenjen redoslijed).pdf",
  "{name} (edited).pdf": "{name} (uređeno).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kopija je izvezena. Povijest verzija nije moguće spremiti na ovom uređaju.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kopija je izvezena. Povijest je dostupna za nešifrirane PDF datoteke do 50 MB.",
  "Downloading reordered copy": "Preuzimanje kopije s promijenjenim redoslijedom",
  "Saved a copy with your highlights and notes": "Spremljena je kopija s isticanjima i bilješkama",
  "Download started": "Preuzimanje je započelo",
  "Couldn't save a copy of this document.": "Nije moguće spremiti kopiju ovog dokumenta.",
  "No changes to save": "Nema promjena za spremanje",
  "Saved. Couldn’t keep the previous version in version history.": "Spremljeno. Prethodnu verziju nije moguće zadržati u povijesti verzija.",
  "Saved {name}": "Spremljeno: {name}",
  "Couldn't save “{name}”. {reason}": "Nije moguće spremiti „{name}“. {reason}",
  "Couldn't print this document.": "Nije moguće ispisati ovaj dokument.",
  "Couldn't print — saved a copy instead": "Ispis nije uspio – umjesto toga spremljena je kopija",
  "Editing requires an unsigned, unencrypted PDF.": "Za uređivanje je potreban nepotpisan i nešifriran PDF.",
  "The document changed. Try again.": "Dokument se promijenio. Pokušajte ponovno.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Tamni način za PDF je promijenjen, ali postavku nije moguće spremiti.",
  "Page scrolling changed, but couldn't save the preference.": "Pomicanje stranica je promijenjeno, ali postavku nije moguće spremiti.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Potpis je dodan. Ctrl+Z ga poništava; izvezite pomoću naredbe Spremi kopiju.",
  "Signature field detected on page {page}": "Na stranici {page} pronađeno je polje za potpis",
  "Possible signature area on page {page}": "Moguće mjesto za potpis na stranici {page}",
  "Review signature": "Pregledaj potpis",
  "Dismiss signature suggestion": "Odbaci prijedlog potpisa",

  // Updates
  "Folio {version} is ready": "Folio {version} je spreman",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Ponovno pokrenite za ažuriranje. Instalacija pri zatvaranju slijedi postavku automatskog ažuriranja.",
  "Restart": "Ponovno pokreni",
  "Later": "Kasnije",
};
export default hr;
