// Finnish UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Finnish. See src/i18n.ts.
const fi: Record<string, string> = {
  "Save as…": "Tallenna nimellä…",
  // Tools
  "Select": "Valitse",
  "Highlight": "Korosta",
  "Draw": "Piirrä",
  "Text": "Teksti",
  "Tools": "Työkalut",
  "Automatically highlight selected text": "Korosta valittu teksti automaattisesti",
  "Sign": "Allekirjoita",
  "Add a signature": "Lisää allekirjoitus",
  "Edit mode": "Muokkaustila",
  "Exit edit mode": "Lopeta muokkaus",
  "Edit existing text and images": "Muokkaa olemassa olevaa tekstiä ja kuvia",
  "Save": "Tallenna",
  "Save changes to {name} (Ctrl+S)": "Tallenna muutokset tiedostoon {name} (Ctrl+S)",
  "Save copy": "Tallenna kopio",
  "Save edited copy (Ctrl+Shift+S)": "Tallenna muokattu kopio (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Keltainen",
  "Green": "Vihreä",
  "Blue": "Sininen",
  "Pink": "Vaaleanpunainen",
  "Red": "Punainen",
  "Black": "Musta",
  "Purple": "Violetti",

  // Top bar and More menu
  "Back to library": "Takaisin kirjastoon",
  "Toggle sidebar (Ctrl+\\)": "Näytä tai piilota sivupalkki (Ctrl+\\)",
  "Unsaved changes": "Tallentamattomia muutoksia",
  "Ask AI": "Kysy tekoälyltä",
  "Search (Ctrl+F)": "Hae (Ctrl+F)",
  "New tab": "Uusi välilehti",
  "Close document": "Sulje asiakirja",
  "Save a copy": "Tallenna kopio",
  "Version history": "Versiohistoria",
  "Print": "Tulosta",
  "Document info": "Asiakirjan tiedot",
  "PDF dark mode": "PDF:n tumma tila",
  "Focus mode": "Keskittymistila",
  "Settings": "Asetukset",
  "Keyboard shortcuts": "Pikanäppäimet",
  "About Folio": "Tietoja Foliosta",

  // Annotation options
  "Annotation options": "Merkintöjen asetukset",
  "Drawing tool": "Piirtotyökalu",
  "Pen": "Kynä",
  "Rectangle": "Suorakulmio",
  "Oval": "Soikio",
  "Arrow": "Nuoli",
  "Color": "Väri",
  "Undo (Ctrl+Z)": "Kumoa (Ctrl+Z)",
  "Done": "Valmis",

  // Navigation
  "Navigation": "Siirtyminen",
  "Previous page": "Edellinen sivu",
  "Next page": "Seuraava sivu",
  "Page number": "Sivunumero",
  "of {n}": "/ {n}",
  "Zoom out (Ctrl −)": "Loitonna (Ctrl −)",
  "Zoom in (Ctrl +)": "Lähennä (Ctrl +)",
  "Rotate (R)": "Kierrä (R)",
  "Exit focus mode": "Poistu keskittymistilasta",
  "to exit focus mode": "lopettaa keskittymistilan",

  // Opening
  "Incorrect password. Try again.": "Väärä salasana. Yritä uudelleen.",
  "Couldn't open “{name}”. {reason}": "Tiedostoa ”{name}” ei voitu avata. {reason}",
  "The file may be damaged.": "Tiedosto saattaa olla vioittunut.",
  "“{name}” isn't a PDF.": "”{name}” ei ole PDF-tiedosto.",
  "Opening {host}…": "Avataan: {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Lataus sivustosta {host} ei onnistunut. Sivusto ei ehkä salli sitä.",
  "Couldn't open that link. {reason}": "Linkkiä ei voitu avata. {reason}",
  "Couldn't open the sample document.": "Esimerkkiasiakirjaa ei voitu avata.",
  "Converting {name} to PDF…": "Muunnetaan PDF-muotoon: {name}…",
  "Couldn't convert “{name}” to PDF. {reason}": "Tiedostoa ”{name}” ei voitu muuntaa PDF-muotoon. {reason}",
  "Drop a PDF file or a link to a PDF.": "Pudota tähän PDF-tiedosto tai linkki PDF-tiedostoon.",
  "Drop a PDF or link to open": "Avaa pudottamalla tähän PDF tai linkki",

  // Markup
  "Annotations aren’t supported for this document": "Tämä asiakirja ei tue merkintöjä",
  "Couldn't add the shape": "Muotoa ei voitu lisätä",
  "Couldn't highlight that selection": "Valintaa ei voitu korostaa",
  "Highlight removed": "Korostus poistettu",
  "Markdown copied": "Markdown kopioitu",
  "Copy failed": "Kopiointi epäonnistui",
  "Couldn't export notes": "Muistiinpanoja ei voitu viedä",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (järjestetty uudelleen).pdf",
  "{name} (edited).pdf": "{name} (muokattu).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kopio viety. Sen versiohistoriaa ei voitu tallentaa tähän laitteeseen.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kopio viety. Historia on käytettävissä salaamattomille, enintään 50 Mt:n PDF-tiedostoille.",
  "Downloading reordered copy": "Ladataan uudelleenjärjestettyä kopiota",
  "Saved a copy with your highlights and notes": "Kopio tallennettu korostusten ja muistiinpanojen kanssa",
  "Download started": "Lataus aloitettu",
  "Couldn't save a copy of this document.": "Asiakirjasta ei voitu tallentaa kopiota.",
  "No changes to save": "Ei tallennettavia muutoksia",
  "Saved. Couldn’t keep the previous version in version history.": "Tallennettu. Edellistä versiota ei voitu säilyttää versiohistoriassa.",
  "Saved {name}": "Tallennettu: {name}",
  "Couldn't save “{name}”. {reason}": "Tiedostoa ”{name}” ei voitu tallentaa. {reason}",
  "Couldn't print this document.": "Asiakirjaa ei voitu tulostaa.",
  "Couldn't print — saved a copy instead": "Tulostus ei onnistunut – sen sijaan tallennettiin kopio",
  "Editing requires an unsigned, unencrypted PDF.": "Muokkaaminen edellyttää allekirjoittamatonta ja salaamatonta PDF-tiedostoa.",
  "The document changed. Try again.": "Asiakirja on muuttunut. Yritä uudelleen.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "PDF:n tumma tila vaihdettiin, mutta asetusta ei voitu tallentaa.",
  "Page scrolling changed, but couldn't save the preference.": "Sivujen vieritys vaihdettiin, mutta asetusta ei voitu tallentaa.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Allekirjoitus lisätty. Kumoa painamalla Ctrl+Z; vie valitsemalla Tallenna kopio.",
  "Signature field detected on page {page}": "Sivulla {page} on allekirjoituskenttä",
  "Possible signature area on page {page}": "Sivulla {page} voi olla allekirjoituskohta",
  "Review signature": "Tarkista allekirjoitus",
  "Dismiss signature suggestion": "Hylkää allekirjoitusehdotus",

  // Updates
  "Folio {version} is ready": "Folio {version} on valmis",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Päivitä käynnistämällä uudelleen. Asennus sulkemisen yhteydessä noudattaa automaattisten päivitysten asetusta.",
  "Restart": "Käynnistä uudelleen",
  "Later": "Myöhemmin",
};
export default fi;
