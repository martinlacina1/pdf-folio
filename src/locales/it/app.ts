// Italian UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Italian. See src/i18n.ts.
const it: Record<string, string> = {
  // Tools
  "Select": "Seleziona",
  "Highlight": "Evidenzia",
  "Draw": "Disegna",
  "Text": "Testo",
  "Tools": "Strumenti",
  "Automatically highlight selected text": "Evidenzia automaticamente il testo selezionato",
  "Sign": "Firma",
  "Add a signature": "Aggiungi una firma",
  "Edit mode": "Modalità modifica",
  "Exit edit mode": "Esci dalla modalità modifica",
  "Edit existing text and images": "Modifica il testo e le immagini esistenti",
  "Save": "Salva",
  "Save changes to {name} (Ctrl+S)": "Salva le modifiche in {name} (Ctrl+S)",
  "Save copy": "Salva copia",
  "Save edited copy (Ctrl+Shift+S)": "Salva copia modificata (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Giallo",
  "Green": "Verde",
  "Blue": "Blu",
  "Pink": "Rosa",
  "Red": "Rosso",
  "Black": "Nero",
  "Purple": "Viola",

  // Top bar and More menu
  "Back to library": "Torna alla libreria",
  "Toggle sidebar (Ctrl+\\)": "Mostra/nascondi barra laterale (Ctrl+\\)",
  "Unsaved changes": "Modifiche non salvate",
  "Ask AI": "Chiedi all'IA",
  "Search (Ctrl+F)": "Cerca (Ctrl+F)",
  "New tab": "Nuova scheda",
  "Close document": "Chiudi documento",
  "Save a copy": "Salva una copia",
  "Version history": "Cronologia versioni",
  "Print": "Stampa",
  "Document info": "Informazioni documento",
  "PDF dark mode": "Modalità scura PDF",
  "Focus mode": "Modalità concentrazione",
  "Settings": "Impostazioni",
  "Keyboard shortcuts": "Scorciatoie da tastiera",
  "About Folio": "Informazioni su Folio",

  // Annotation options
  "Annotation options": "Opzioni annotazione",
  "Drawing tool": "Strumento di disegno",
  "Pen": "Penna",
  "Rectangle": "Rettangolo",
  "Oval": "Ovale",
  "Arrow": "Freccia",
  "Color": "Colore",
  "Undo (Ctrl+Z)": "Annulla (Ctrl+Z)",
  "Done": "Fine",

  // Navigation
  "Navigation": "Navigazione",
  "Previous page": "Pagina precedente",
  "Next page": "Pagina successiva",
  "Page number": "Numero di pagina",
  "of {n}": "di {n}",
  "Zoom out (Ctrl −)": "Riduci (Ctrl −)",
  "Zoom in (Ctrl +)": "Ingrandisci (Ctrl +)",
  "Rotate (R)": "Ruota (R)",
  "Exit focus mode": "Esci dalla modalità concentrazione",
  "to exit focus mode": "per uscire dalla modalità concentrazione",

  // Opening
  "Incorrect password. Try again.": "Password errata. Riprova.",
  "Couldn't open “{name}”. {reason}": "Impossibile aprire “{name}”. {reason}",
  "The file may be damaged.": "Il file potrebbe essere danneggiato.",
  "“{name}” isn't a PDF.": "“{name}” non è un PDF.",
  "Opening {host}…": "Apertura di {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Impossibile scaricare da {host}. Il sito potrebbe non consentirlo.",
  "Couldn't open that link. {reason}": "Impossibile aprire il link. {reason}",
  "Couldn't open the sample document.": "Impossibile aprire il documento di esempio.",
  "Converting {name} to PDF…": "Conversione di {name} in PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Impossibile convertire “{name}” in PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Trascina qui un file PDF o un link a un PDF.",
  "Drop a PDF or link to open": "Trascina qui un PDF o un link da aprire",

  // Markup
  "Annotations aren’t supported for this document": "Questo documento non supporta le annotazioni",
  "Couldn't add the shape": "Impossibile aggiungere la forma",
  "Couldn't highlight that selection": "Impossibile evidenziare la selezione",
  "Highlight removed": "Evidenziazione rimossa",
  "Markdown copied": "Markdown copiato",
  "Copy failed": "Copia non riuscita",
  "Couldn't export notes": "Impossibile esportare le note",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (riordinato).pdf",
  "{name} (edited).pdf": "{name} (modificato).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Copia esportata. Impossibile salvare la cronologia versioni su questo dispositivo.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Copia esportata. La cronologia è disponibile per i PDF non crittografati fino a 50 MB.",
  "Downloading reordered copy": "Download della copia riordinata",
  "Saved a copy with your highlights and notes": "Copia salvata con evidenziazioni e note",
  "Download started": "Download avviato",
  "Couldn't save a copy of this document.": "Impossibile salvare una copia del documento.",
  "No changes to save": "Nessuna modifica da salvare",
  "Saved. Couldn’t keep the previous version in version history.": "Salvato. Impossibile conservare la versione precedente nella cronologia versioni.",
  "Saved {name}": "{name} salvato",
  "Couldn't save “{name}”. {reason}": "Impossibile salvare “{name}”. {reason}",
  "Couldn't print this document.": "Impossibile stampare il documento.",
  "Couldn't print — saved a copy instead": "Impossibile stampare: è stata salvata una copia",
  "Editing requires an unsigned, unencrypted PDF.": "Per modificare serve un PDF non firmato e non crittografato.",
  "The document changed. Try again.": "Il documento è cambiato. Riprova.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Modalità scura PDF modificata, ma impossibile salvare la preferenza.",
  "Page scrolling changed, but couldn't save the preference.": "Scorrimento pagine modificato, ma impossibile salvare la preferenza.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Firma aggiunta. Premi Ctrl+Z per annullare; usa Salva copia per esportare.",
  "Signature field detected on page {page}": "Campo firma rilevato a pagina {page}",
  "Possible signature area on page {page}": "Possibile area per la firma a pagina {page}",
  "Review signature": "Controlla firma",
  "Dismiss signature suggestion": "Ignora suggerimento firma",

  // Updates
  "Folio {version} is ready": "Folio {version} è pronto",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Riavvia per aggiornare. L'installazione alla chiusura segue l'impostazione degli aggiornamenti automatici.",
  "Restart": "Riavvia",
  "Later": "Più tardi",
};
export default it;
