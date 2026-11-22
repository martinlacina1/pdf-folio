// Slovak UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Slovak. See src/i18n.ts.
const sk: Record<string, string> = {
  "Save as…": "Uložiť ako…",
  // Tools
  "Select": "Vybrať",
  "Highlight": "Zvýrazniť",
  "Draw": "Kresliť",
  "Text": "Text",
  "Tools": "Nástroje",
  "Automatically highlight selected text": "Automaticky zvýrazniť vybraný text",
  "Sign": "Podpísať",
  "Add a signature": "Pridať podpis",
  "Edit mode": "Režim úprav",
  "Exit edit mode": "Ukončiť úpravy",
  "Edit existing text and images": "Upraviť existujúci text a obrázky",
  "Save": "Uložiť",
  "Save changes to {name} (Ctrl+S)": "Uložiť zmeny do {name} (Ctrl+S)",
  "Save copy": "Uložiť kópiu",
  "Save edited copy (Ctrl+Shift+S)": "Uložiť upravenú kópiu (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Žltá",
  "Green": "Zelená",
  "Blue": "Modrá",
  "Pink": "Ružová",
  "Red": "Červená",
  "Black": "Čierna",
  "Purple": "Fialová",

  // Top bar and More menu
  "Back to library": "Späť do knižnice",
  "Toggle sidebar (Ctrl+\\)": "Zobraziť/skryť bočný panel (Ctrl+\\)",
  "Unsaved changes": "Neuložené zmeny",
  "Ask AI": "Opýtať sa AI",
  "Search (Ctrl+F)": "Hľadať (Ctrl+F)",
  "New tab": "Nová karta",
  "Close document": "Zavrieť dokument",
  "Save a copy": "Uložiť kópiu",
  "Version history": "História verzií",
  "Print": "Tlačiť",
  "Document info": "Informácie o dokumente",
  "PDF dark mode": "Tmavý režim PDF",
  "Focus mode": "Režim sústredenia",
  "Settings": "Nastavenia",
  "Keyboard shortcuts": "Klávesové skratky",
  "About Folio": "O aplikácii Folio",

  // Annotation options
  "Annotation options": "Možnosti anotácií",
  "Drawing tool": "Nástroj na kreslenie",
  "Pen": "Pero",
  "Rectangle": "Obdĺžnik",
  "Oval": "Elipsa",
  "Arrow": "Šípka",
  "Color": "Farba",
  "Undo (Ctrl+Z)": "Späť (Ctrl+Z)",
  "Done": "Hotovo",

  // Navigation
  "Navigation": "Navigácia",
  "Previous page": "Predchádzajúca strana",
  "Next page": "Ďalšia strana",
  "Page number": "Číslo strany",
  "of {n}": "z {n}",
  "Zoom out (Ctrl −)": "Oddialiť (Ctrl −)",
  "Zoom in (Ctrl +)": "Priblížiť (Ctrl +)",
  "Rotate (R)": "Otočiť (R)",
  "Exit focus mode": "Ukončiť režim sústredenia",
  "to exit focus mode": "ukončí režim sústredenia",

  // Opening
  "Incorrect password. Try again.": "Nesprávne heslo. Skúste to znova.",
  "Couldn't open “{name}”. {reason}": "Súbor „{name}“ sa nepodarilo otvoriť. {reason}",
  "The file may be damaged.": "Súbor je možno poškodený.",
  "“{name}” isn't a PDF.": "„{name}“ nie je PDF.",
  "Opening {host}…": "Otvára sa {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Z {host} sa nepodarilo sťahovať. Stránka to možno nepovoľuje.",
  "Couldn't open that link. {reason}": "Odkaz sa nepodarilo otvoriť. {reason}",
  "Couldn't open the sample document.": "Ukážkový dokument sa nepodarilo otvoriť.",
  "Converting {name} to PDF…": "Konvertuje sa {name} do PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Súbor „{name}“ sa nepodarilo konvertovať do PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Presuňte sem súbor PDF alebo odkaz na PDF.",
  "Drop a PDF or link to open": "Presuňte sem PDF alebo odkaz na otvorenie",

  // Markup
  "Annotations aren’t supported for this document": "Tento dokument nepodporuje anotácie",
  "Couldn't add the shape": "Tvar sa nepodarilo pridať",
  "Couldn't highlight that selection": "Výber sa nepodarilo zvýrazniť",
  "Highlight removed": "Zvýraznenie odstránené",
  "Markdown copied": "Markdown skopírovaný",
  "Copy failed": "Kopírovanie zlyhalo",
  "Couldn't export notes": "Poznámky sa nepodarilo exportovať",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (zmenené poradie).pdf",
  "{name} (edited).pdf": "{name} (upravené).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Kópia exportovaná. Históriu verzií sa v tomto zariadení nepodarilo uložiť.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Kópia exportovaná. História je k dispozícii pre nešifrované PDF do 50 MB.",
  "Downloading reordered copy": "Sťahuje sa kópia so zmeneným poradím strán",
  "Saved a copy with your highlights and notes": "Kópia so zvýrazneniami a poznámkami bola uložená",
  "Download started": "Sťahovanie sa začalo",
  "Couldn't save a copy of this document.": "Kópiu dokumentu sa nepodarilo uložiť.",
  "No changes to save": "Žiadne zmeny na uloženie",
  "Saved. Couldn’t keep the previous version in version history.": "Uložené. Predchádzajúcu verziu sa nepodarilo zachovať v histórii verzií.",
  "Saved {name}": "Uložené: {name}",
  "Couldn't save “{name}”. {reason}": "Súbor „{name}“ sa nepodarilo uložiť. {reason}",
  "Couldn't print this document.": "Dokument sa nepodarilo vytlačiť.",
  "Couldn't print — saved a copy instead": "Tlač zlyhala – namiesto toho sa uložila kópia",
  "Editing requires an unsigned, unencrypted PDF.": "Úpravy vyžadujú nepodpísané a nešifrované PDF.",
  "The document changed. Try again.": "Dokument sa zmenil. Skúste to znova.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Tmavý režim PDF sa zmenil, ale nastavenie sa nepodarilo uložiť.",
  "Page scrolling changed, but couldn't save the preference.": "Posúvanie strán sa zmenilo, ale nastavenie sa nepodarilo uložiť.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Podpis pridaný. Ctrl+Z vráti späť; exportujte pomocou Uložiť kópiu.",
  "Signature field detected on page {page}": "Na strane {page} je pole na podpis",
  "Possible signature area on page {page}": "Na strane {page} môže byť miesto na podpis",
  "Review signature": "Skontrolovať podpis",
  "Dismiss signature suggestion": "Zavrieť návrh podpisu",

  // Updates
  "Folio {version} is ready": "Folio {version} je pripravené",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Aktualizujte reštartom. Inštalácia pri zatvorení sa riadi nastavením automatických aktualizácií.",
  "Restart": "Reštartovať",
  "Later": "Neskôr",
};
export default sk;
