// Polish UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Polish. See src/i18n.ts.
const pl: Record<string, string> = {
  // Tools
  "Select": "Zaznacz",
  "Highlight": "Wyróżnij",
  "Draw": "Rysuj",
  "Text": "Tekst",
  "Tools": "Narzędzia",
  "Automatically highlight selected text": "Automatycznie wyróżniaj zaznaczony tekst",
  "Sign": "Podpisz",
  "Add a signature": "Dodaj podpis",
  "Edit mode": "Tryb edycji",
  "Exit edit mode": "Zakończ edycję",
  "Edit existing text and images": "Edytuj istniejący tekst i obrazy",
  "Save": "Zapisz",
  "Save changes to {name} (Ctrl+S)": "Zapisz zmiany w {name} (Ctrl+S)",
  "Save copy": "Zapisz kopię",
  "Save edited copy (Ctrl+Shift+S)": "Zapisz edytowaną kopię (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Żółty",
  "Green": "Zielony",
  "Blue": "Niebieski",
  "Pink": "Różowy",
  "Red": "Czerwony",
  "Black": "Czarny",
  "Purple": "Fioletowy",

  // Top bar and More menu
  "Back to library": "Powrót do biblioteki",
  "Toggle sidebar (Ctrl+\\)": "Pokaż/ukryj panel boczny (Ctrl+\\)",
  "Unsaved changes": "Niezapisane zmiany",
  "Ask AI": "Zapytaj AI",
  "Search (Ctrl+F)": "Szukaj (Ctrl+F)",
  "New tab": "Nowa karta",
  "Close document": "Zamknij dokument",
  "Save a copy": "Zapisz kopię",
  "Version history": "Historia wersji",
  "Print": "Drukuj",
  "Document info": "Informacje o dokumencie",
  "PDF dark mode": "Tryb ciemny PDF",
  "Focus mode": "Tryb skupienia",
  "Settings": "Ustawienia",
  "Keyboard shortcuts": "Skróty klawiaturowe",
  "About Folio": "O aplikacji Folio",

  // Annotation options
  "Annotation options": "Opcje adnotacji",
  "Drawing tool": "Narzędzie rysowania",
  "Pen": "Pióro",
  "Rectangle": "Prostokąt",
  "Oval": "Elipsa",
  "Arrow": "Strzałka",
  "Color": "Kolor",
  "Undo (Ctrl+Z)": "Cofnij (Ctrl+Z)",
  "Done": "Gotowe",

  // Navigation
  "Navigation": "Nawigacja",
  "Previous page": "Poprzednia strona",
  "Next page": "Następna strona",
  "Page number": "Numer strony",
  "of {n}": "z {n}",
  "Zoom out (Ctrl −)": "Pomniejsz (Ctrl −)",
  "Zoom in (Ctrl +)": "Powiększ (Ctrl +)",
  "Rotate (R)": "Obróć (R)",
  "Exit focus mode": "Zakończ tryb skupienia",
  "to exit focus mode": "kończy tryb skupienia",

  // Opening
  "Incorrect password. Try again.": "Nieprawidłowe hasło. Spróbuj ponownie.",
  "Couldn't open “{name}”. {reason}": "Nie można otworzyć pliku „{name}”. {reason}",
  "The file may be damaged.": "Plik może być uszkodzony.",
  "“{name}” isn't a PDF.": "„{name}” nie jest plikiem PDF.",
  "Opening {host}…": "Otwieranie {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Nie można pobrać z {host}. Witryna może na to nie zezwalać.",
  "Couldn't open that link. {reason}": "Nie można otworzyć linku. {reason}",
  "Couldn't open the sample document.": "Nie można otworzyć przykładowego dokumentu.",
  "Converting {name} to PDF…": "Konwertowanie {name} do PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Nie można przekonwertować pliku „{name}” do PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Upuść plik PDF lub link do pliku PDF.",
  "Drop a PDF or link to open": "Upuść plik PDF lub link, aby otworzyć",

  // Markup
  "Annotations aren’t supported for this document": "Ten dokument nie obsługuje adnotacji",
  "Couldn't add the shape": "Nie można dodać kształtu",
  "Couldn't highlight that selection": "Nie można wyróżnić zaznaczenia",
  "Highlight removed": "Usunięto wyróżnienie",
  "Markdown copied": "Skopiowano Markdown",
  "Copy failed": "Kopiowanie nie powiodło się",
  "Couldn't export notes": "Nie można wyeksportować notatek",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (zmieniona kolejność).pdf",
  "{name} (edited).pdf": "{name} (edytowany).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Wyeksportowano kopię. Nie można zapisać historii wersji na tym urządzeniu.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Wyeksportowano kopię. Historia jest dostępna dla niezaszyfrowanych plików PDF do 50 MB.",
  "Downloading reordered copy": "Pobieranie kopii ze zmienioną kolejnością stron",
  "Saved a copy with your highlights and notes": "Zapisano kopię z wyróżnieniami i notatkami",
  "Download started": "Rozpoczęto pobieranie",
  "Couldn't save a copy of this document.": "Nie można zapisać kopii dokumentu.",
  "No changes to save": "Brak zmian do zapisania",
  "Saved. Couldn’t keep the previous version in version history.": "Zapisano. Nie można zachować poprzedniej wersji w historii wersji.",
  "Saved {name}": "Zapisano: {name}",
  "Couldn't save “{name}”. {reason}": "Nie można zapisać pliku „{name}”. {reason}",
  "Couldn't print this document.": "Nie można wydrukować dokumentu.",
  "Couldn't print — saved a copy instead": "Drukowanie nie powiodło się – zamiast tego zapisano kopię",
  "Editing requires an unsigned, unencrypted PDF.": "Edycja wymaga niepodpisanego i niezaszyfrowanego pliku PDF.",
  "The document changed. Try again.": "Dokument się zmienił. Spróbuj ponownie.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Zmieniono tryb ciemny PDF, ale nie można zapisać ustawienia.",
  "Page scrolling changed, but couldn't save the preference.": "Zmieniono przewijanie stron, ale nie można zapisać ustawienia.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Dodano podpis. Ctrl+Z cofa; aby wyeksportować, użyj Zapisz kopię.",
  "Signature field detected on page {page}": "Na stronie {page} wykryto pole podpisu",
  "Possible signature area on page {page}": "Na stronie {page} może być miejsce na podpis",
  "Review signature": "Sprawdź podpis",
  "Dismiss signature suggestion": "Odrzuć sugestię podpisu",

  // Updates
  "Folio {version} is ready": "Folio {version} jest gotowe",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Uruchom ponownie, aby zaktualizować. Instalacja przy zamykaniu zależy od ustawienia automatycznych aktualizacji.",
  "Restart": "Uruchom ponownie",
  "Later": "Później",
};
export default pl;
