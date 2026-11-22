// Catalan UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Catalan. See src/i18n.ts.
const ca: Record<string, string> = {
  "Save as…": "Desa com a…",
  // Tools
  "Select": "Seleccionar",
  "Highlight": "Ressaltar",
  "Draw": "Dibuixar",
  "Text": "Text",
  "Tools": "Eines",
  "Automatically highlight selected text": "Ressaltar automàticament el text seleccionat",
  "Sign": "Signar",
  "Add a signature": "Afegir una signatura",
  "Edit mode": "Mode d'edició",
  "Exit edit mode": "Sortir del mode d'edició",
  "Edit existing text and images": "Editar el text i les imatges existents",
  "Save": "Desar",
  "Save changes to {name} (Ctrl+S)": "Desar els canvis a {name} (Ctrl+S)",
  "Save copy": "Desar una còpia",
  "Save edited copy (Ctrl+Shift+S)": "Desar una còpia editada (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Groc",
  "Green": "Verd",
  "Blue": "Blau",
  "Pink": "Rosa",
  "Red": "Vermell",
  "Black": "Negre",
  "Purple": "Lila",

  // Top bar and More menu
  "Back to library": "Tornar a la biblioteca",
  "Toggle sidebar (Ctrl+\\)": "Mostrar o amagar la barra lateral (Ctrl+\\)",
  "Unsaved changes": "Canvis no desats",
  "Ask AI": "Preguntar a la IA",
  "Search (Ctrl+F)": "Cercar (Ctrl+F)",
  "New tab": "Pestanya nova",
  "Close document": "Tancar el document",
  "Save a copy": "Desar una còpia",
  "Version history": "Historial de versions",
  "Print": "Imprimir",
  "Document info": "Informació del document",
  "PDF dark mode": "Mode fosc del PDF",
  "Focus mode": "Mode de concentració",
  "Settings": "Configuració",
  "Keyboard shortcuts": "Dreceres de teclat",
  "About Folio": "Quant a Folio",

  // Annotation options
  "Annotation options": "Opcions d'anotació",
  "Drawing tool": "Eina de dibuix",
  "Pen": "Llapis",
  "Rectangle": "Rectangle",
  "Oval": "Oval",
  "Arrow": "Fletxa",
  "Color": "Color",
  "Undo (Ctrl+Z)": "Desfer (Ctrl+Z)",
  "Done": "Fet",

  // Navigation
  "Navigation": "Navegació",
  "Previous page": "Pàgina anterior",
  "Next page": "Pàgina següent",
  "Page number": "Número de pàgina",
  "of {n}": "de {n}",
  "Zoom out (Ctrl −)": "Allunyar (Ctrl −)",
  "Zoom in (Ctrl +)": "Apropar (Ctrl +)",
  "Rotate (R)": "Girar (R)",
  "Exit focus mode": "Sortir del mode de concentració",
  "to exit focus mode": "per sortir del mode de concentració",

  // Opening
  "Incorrect password. Try again.": "La contrasenya no és correcta. Torna-ho a provar.",
  "Couldn't open “{name}”. {reason}": "No s'ha pogut obrir «{name}». {reason}",
  "The file may be damaged.": "És possible que el fitxer estigui malmès.",
  "“{name}” isn't a PDF.": "«{name}» no és un PDF.",
  "Opening {host}…": "S'està obrint {host}…",
  "Couldn't download from {host}. The site may not allow it.": "No s'ha pogut baixar de {host}. És possible que el lloc web no ho permeti.",
  "Couldn't open that link. {reason}": "No s'ha pogut obrir l'enllaç. {reason}",
  "Couldn't open the sample document.": "No s'ha pogut obrir el document de mostra.",
  "Converting {name} to PDF…": "S'està convertint {name} a PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "No s'ha pogut convertir «{name}» a PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Deixa anar aquí un fitxer PDF o un enllaç a un PDF.",
  "Drop a PDF or link to open": "Deixa anar un PDF o un enllaç per obrir-lo",

  // Markup
  "Annotations aren’t supported for this document": "Aquest document no admet anotacions",
  "Couldn't add the shape": "No s'ha pogut afegir la forma",
  "Couldn't highlight that selection": "No s'ha pogut ressaltar la selecció",
  "Highlight removed": "S'ha suprimit el ressaltat",
  "Markdown copied": "S'ha copiat el Markdown",
  "Copy failed": "No s'ha pogut copiar",
  "Couldn't export notes": "No s'han pogut exportar les notes",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (reordenat).pdf",
  "{name} (edited).pdf": "{name} (editat).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "S'ha exportat la còpia. No s'ha pogut desar el seu historial de versions en aquest dispositiu.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "S'ha exportat la còpia. L'historial està disponible per a PDF sense xifrar de fins a 50 MB.",
  "Downloading reordered copy": "S'està baixant la còpia reordenada",
  "Saved a copy with your highlights and notes": "S'ha desat una còpia amb els ressaltats i les notes",
  "Download started": "S'ha iniciat la baixada",
  "Couldn't save a copy of this document.": "No s'ha pogut desar una còpia d'aquest document.",
  "No changes to save": "No hi ha canvis per desar",
  "Saved. Couldn’t keep the previous version in version history.": "S'ha desat. No s'ha pogut conservar la versió anterior a l'historial de versions.",
  "Saved {name}": "S'ha desat {name}",
  "Couldn't save “{name}”. {reason}": "No s'ha pogut desar «{name}». {reason}",
  "Couldn't print this document.": "No s'ha pogut imprimir aquest document.",
  "Couldn't print — saved a copy instead": "No s'ha pogut imprimir; s'ha desat una còpia",
  "Editing requires an unsigned, unencrypted PDF.": "Per editar cal un PDF sense signar i sense xifrar.",
  "The document changed. Try again.": "El document ha canviat. Torna-ho a provar.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "S'ha canviat el mode fosc del PDF, però no s'ha pogut desar la preferència.",
  "Page scrolling changed, but couldn't save the preference.": "S'ha canviat el desplaçament de pàgines, però no s'ha pogut desar la preferència.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "S'ha afegit la signatura. Prem Ctrl+Z per desfer-ho; exporta-la amb Desar una còpia.",
  "Signature field detected on page {page}": "S'ha detectat un camp de signatura a la pàgina {page}",
  "Possible signature area on page {page}": "Possible zona de signatura a la pàgina {page}",
  "Review signature": "Revisar la signatura",
  "Dismiss signature suggestion": "Descartar el suggeriment de signatura",

  // Updates
  "Folio {version} is ready": "Folio {version} està a punt",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Reinicia per actualitzar. La instal·lació en tancar segueix la configuració d'actualització automàtica.",
  "Restart": "Reiniciar",
  "Later": "Més tard",
};
export default ca;
