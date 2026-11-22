// Hungarian UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Hungarian. See src/i18n.ts.
const hu: Record<string, string> = {
  // Tools
  "Select": "Kijelölés",
  "Highlight": "Kiemelés",
  "Draw": "Rajzolás",
  "Text": "Szöveg",
  "Tools": "Eszközök",
  "Automatically highlight selected text": "A kijelölt szöveg automatikus kiemelése",
  "Sign": "Aláírás",
  "Add a signature": "Aláírás hozzáadása",
  "Edit mode": "Szerkesztési mód",
  "Exit edit mode": "Kilépés a szerkesztési módból",
  "Edit existing text and images": "Meglévő szöveg és képek szerkesztése",
  "Save": "Mentés",
  "Save changes to {name} (Ctrl+S)": "Módosítások mentése ide: {name} (Ctrl+S)",
  "Save copy": "Másolat mentése",
  "Save edited copy (Ctrl+Shift+S)": "Szerkesztett másolat mentése (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Sárga",
  "Green": "Zöld",
  "Blue": "Kék",
  "Pink": "Rózsaszín",
  "Red": "Piros",
  "Black": "Fekete",
  "Purple": "Lila",

  // Top bar and More menu
  "Back to library": "Vissza a könyvtárba",
  "Toggle sidebar (Ctrl+\\)": "Oldalsáv megjelenítése/elrejtése (Ctrl+\\)",
  "Unsaved changes": "Nem mentett módosítások",
  "Ask AI": "AI kérdezése",
  "Search (Ctrl+F)": "Keresés (Ctrl+F)",
  "New tab": "Új lap",
  "Close document": "Dokumentum bezárása",
  "Save a copy": "Másolat mentése",
  "Version history": "Verzióelőzmények",
  "Print": "Nyomtatás",
  "Document info": "Dokumentum adatai",
  "PDF dark mode": "Sötét mód PDF-hez",
  "Focus mode": "Fókusz mód",
  "Settings": "Beállítások",
  "Keyboard shortcuts": "Billentyűparancsok",
  "About Folio": "A Folio névjegye",

  // Annotation options
  "Annotation options": "Jegyzetelési beállítások",
  "Drawing tool": "Rajzeszköz",
  "Pen": "Toll",
  "Rectangle": "Téglalap",
  "Oval": "Ellipszis",
  "Arrow": "Nyíl",
  "Color": "Szín",
  "Undo (Ctrl+Z)": "Visszavonás (Ctrl+Z)",
  "Done": "Kész",

  // Navigation
  "Navigation": "Navigáció",
  "Previous page": "Előző oldal",
  "Next page": "Következő oldal",
  "Page number": "Oldalszám",
  "of {n}": "/ {n}",
  "Zoom out (Ctrl −)": "Kicsinyítés (Ctrl −)",
  "Zoom in (Ctrl +)": "Nagyítás (Ctrl +)",
  "Rotate (R)": "Forgatás (R)",
  "Exit focus mode": "Kilépés a fókusz módból",
  "to exit focus mode": "– kilépés a fókusz módból",

  // Opening
  "Incorrect password. Try again.": "Helytelen jelszó. Próbálja újra.",
  "Couldn't open “{name}”. {reason}": "Nem sikerült megnyitni: „{name}”. {reason}",
  "The file may be damaged.": "Lehet, hogy a fájl sérült.",
  "“{name}” isn't a PDF.": "„{name}” nem PDF-fájl.",
  "Opening {host}…": "{host} megnyitása…",
  "Couldn't download from {host}. The site may not allow it.": "Nem sikerült letölteni innen: {host}. Lehet, hogy a webhely nem engedélyezi.",
  "Couldn't open that link. {reason}": "Nem sikerült megnyitni a hivatkozást. {reason}",
  "Couldn't open the sample document.": "Nem sikerült megnyitni a mintadokumentumot.",
  "Converting {name} to PDF…": "{name} konvertálása PDF-be…",
  "Couldn't convert “{name}” to PDF. {reason}": "Nem sikerült PDF-be konvertálni: „{name}”. {reason}",
  "Drop a PDF file or a link to a PDF.": "Húzzon ide egy PDF-fájlt vagy egy PDF-re mutató hivatkozást.",
  "Drop a PDF or link to open": "Húzzon ide egy PDF-et vagy hivatkozást a megnyitáshoz",

  // Markup
  "Annotations aren’t supported for this document": "Ez a dokumentum nem támogatja a jegyzeteket",
  "Couldn't add the shape": "Nem sikerült hozzáadni az alakzatot",
  "Couldn't highlight that selection": "Nem sikerült kiemelni a kijelölést",
  "Highlight removed": "Kiemelés eltávolítva",
  "Markdown copied": "Markdown vágólapra másolva",
  "Copy failed": "A másolás nem sikerült",
  "Couldn't export notes": "Nem sikerült exportálni a jegyzeteket",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (átrendezett).pdf",
  "{name} (edited).pdf": "{name} (szerkesztett).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Másolat exportálva. A verzióelőzményeit nem sikerült menteni ezen az eszközön.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Másolat exportálva. Az előzmények legfeljebb 50 MB-os, nem titkosított PDF-ekhez érhetők el.",
  "Downloading reordered copy": "Átrendezett másolat letöltése",
  "Saved a copy with your highlights and notes": "Másolat mentve a kiemelésekkel és jegyzetekkel",
  "Download started": "A letöltés elindult",
  "Couldn't save a copy of this document.": "Nem sikerült menteni a dokumentum másolatát.",
  "No changes to save": "Nincs mentendő módosítás",
  "Saved. Couldn’t keep the previous version in version history.": "Mentve. Az előző verziót nem sikerült megőrizni a verzióelőzményekben.",
  "Saved {name}": "Mentve: {name}",
  "Couldn't save “{name}”. {reason}": "Nem sikerült menteni: „{name}”. {reason}",
  "Couldn't print this document.": "Nem sikerült kinyomtatni a dokumentumot.",
  "Couldn't print — saved a copy instead": "A nyomtatás nem sikerült – helyette másolat mentve",
  "Editing requires an unsigned, unencrypted PDF.": "A szerkesztéshez aláírás nélküli, nem titkosított PDF szükséges.",
  "The document changed. Try again.": "A dokumentum megváltozott. Próbálja újra.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "A PDF sötét módja megváltozott, de a beállítást nem sikerült menteni.",
  "Page scrolling changed, but couldn't save the preference.": "Az oldalgörgetés megváltozott, de a beállítást nem sikerült menteni.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Aláírás hozzáadva. Visszavonás: Ctrl+Z; exportálás: Másolat mentése.",
  "Signature field detected on page {page}": "Aláírásmező található a(z) {page}. oldalon",
  "Possible signature area on page {page}": "Lehetséges aláírási terület a(z) {page}. oldalon",
  "Review signature": "Aláírás ellenőrzése",
  "Dismiss signature suggestion": "Aláírási javaslat elvetése",

  // Updates
  "Folio {version} is ready": "A Folio {version} készen áll",
  "Restart to update. Installation on close follows your auto-update setting.":
    "A frissítéshez indítsa újra. A bezáráskori telepítés az automatikus frissítési beállítást követi.",
  "Restart": "Újraindítás",
  "Later": "Később",
};
export default hu;
