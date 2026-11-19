// Polish text for electron/i18n.cjs: English → Polish.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Nie można zapisać tego pliku w jego pierwotnej lokalizacji.",
  "Nothing to save.": "Brak zmian do zapisania.",
  "Couldn't open file": "Nie można otworzyć pliku",
  "Couldn't convert “{name}” to PDF. {reason}": "Nie można przekonwertować pliku „{name}” do PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Nie można przekonwertować pliku „{name}” do PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Użyć aparatu do podpisu?",
  "Allow Folio to use your camera to capture a signature?": "Zezwolić aplikacji Folio na użycie aparatu do przechwycenia podpisu?",
  "Camera images are processed on this device. No microphone is requested.": "Obrazy z aparatu są przetwarzane na tym urządzeniu. Dostęp do mikrofonu nie jest wymagany.",
  "Allow camera": "Zezwól na aparat",
  "Cancel": "Anuluj",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Zamknij bez zapisywania",
  "Unsaved changes": "Niezapisane zmiany",
  "One or more tabs have unsaved changes.": "Co najmniej jedna karta zawiera niezapisane zmiany.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Przed zamknięciem aplikacji Folio zapisz każdą oznaczoną kartę skrótem {shortcut}.",

  // main.cjs: links
  "Open link?": "Otworzyć link?",
  "Open this email link in your mail app?": "Otworzyć ten link e-mail w aplikacji poczty?",
  "Open {host} in your browser?": "Otworzyć {host} w przeglądarce?",
  "Open mail app": "Otwórz aplikację poczty",
  "Open link": "Otwórz link",
  "Open a local address?": "Otworzyć adres lokalny?",
  "Open {host}?": "Otworzyć {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Zezwolić {origin} na połączenie z następującymi rozpoznanymi adresami?\n\n{addresses}\n\n{url}",
  "Open": "Otwórz",

  // main.cjs: opening a link (download)
  "The download timed out.": "Upłynął limit czasu pobierania.",
  "That link redirects too many times.": "Ten link przekierowuje zbyt wiele razy.",
  "That link redirects somewhere Folio can't open.": "Ten link przekierowuje do miejsca, którego Folio nie może otworzyć.",
  "That link leads to a local network address, so Folio didn't follow it.": "Ten link prowadzi do adresu w sieci lokalnej, więc Folio go nie otworzyło.",
  "Couldn't reach {host}.": "Nie można połączyć się z {host}.",
  "The server responded with {status}.": "Serwer zwrócił kod {status}.",
  "That PDF is larger than 300 MB.": "Ten plik PDF jest większy niż 300 MB.",
  "The download was interrupted.": "Pobieranie zostało przerwane.",
  "That link isn't a PDF or a webpage.": "Ten link nie prowadzi do pliku PDF ani strony internetowej.",
  "That isn't a valid web address.": "To nie jest prawidłowy adres internetowy.",
  "Only http:// and https:// links can be opened.": "Można otwierać tylko linki http:// i https://.",
  "Another link is still opening.": "Inny link jest wciąż otwierany.",
  "Couldn't open a verified connection to {host}.": "Nie można nawiązać zweryfikowanego połączenia z {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Przekonwertowana strona internetowa jest większa niż 300 MB.",
  "The webpage took too long to load.": "Ładowanie strony internetowej trwało zbyt długo.",
  "Couldn't load that webpage ({code}).": "Nie można załadować strony internetowej ({code}).",
  "Couldn't load that webpage.": "Nie można załadować strony internetowej.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Zapisano plik {name} obok pliku {original}.",
  "It's larger than 300 MB.": "Plik jest większy niż 300 MB.",
  "It's too large to convert.": "Plik jest zbyt duży, aby go przekonwertować.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Konwersja plików .doc wymaga programu Microsoft Word lub LibreOffice. Zainstaluj jeden z nich lub zapisz dokument jako .docx.",
  "The document may be damaged or protected with a password.": "Dokument może być uszkodzony lub chroniony hasłem.",
  "Choose a regular file.": "Wybierz zwykły plik.",
  "The file changed while it was being opened.": "Plik zmienił się podczas otwierania.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Nie można połączyć się z usługą logowania OpenAI.",
  "Unexpected sign-in token.": "Nieoczekiwany token logowania.",
  "The sign-in response couldn't be verified. Please try again.": "Nie można zweryfikować odpowiedzi logowania. Spróbuj ponownie.",
  "You can close this tab and return to Folio.": "Możesz zamknąć tę kartę i wrócić do aplikacji Folio.",
  "Sign-in was cancelled.": "Logowanie zostało anulowane.",
  "ChatGPT sign-in failed.": "Logowanie do ChatGPT nie powiodło się.",
  "Couldn't start sign-in.": "Nie można rozpocząć logowania.",
  "Sign-in timed out. Please try again.": "Upłynął limit czasu logowania. Spróbuj ponownie.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nie dokończył rejestracji aplikacji Folio. Spróbuj ponownie.",
  "ChatGPT sign-in failed. Please try again.": "Logowanie do ChatGPT nie powiodło się. Spróbuj ponownie.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Nie udzielono zgody na korzystanie z planu ChatGPT. Zaloguj się ponownie i zezwól aplikacji Folio na korzystanie z planu.",
  "Continue with ChatGPT to use your plan in Folio.": "Kontynuuj z ChatGPT, aby korzystać ze swojego planu w aplikacji Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Sesja logowania do ChatGPT wygasła. Kontynuuj z ChatGPT, aby połączyć ponownie.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Nie można odświeżyć logowania do ChatGPT. Sprawdź połączenie i spróbuj ponownie.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Nie można załadować modeli ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Odpowiedź została obcięta. Spróbuj krótszego pytania lub mniejszego zaznaczenia.",
  "The connection to ChatGPT ended early. Please try again.": "Połączenie z ChatGPT zostało przedwcześnie przerwane. Spróbuj ponownie.",
  "You've reached a ChatGPT usage limit.": "Osiągnięto limit użycia ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT jest tymczasowo niedostępny. Spróbuj ponownie za chwilę.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nie może potwierdzić planu. Kontynuuj z ChatGPT, aby połączyć ponownie.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nie może odpowiedzieć ({status}). Spróbuj ponownie.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nie może odpowiedzieć. Spróbuj ponownie.",
  "Claude Code isn't installed.": "Claude Code nie jest zainstalowany.",
  "Claude took too long to answer. Please try again.": "Odpowiedź Claude trwała zbyt długo. Spróbuj ponownie.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code nie jest zalogowany. Otwórz terminal, uruchom `claude` i zaloguj się na konto Claude.",
  "You've reached your Claude usage limit. {details}": "Osiągnięto limit użycia Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code nie może odpowiedzieć.",
  "Another answer is still in progress.": "Inna odpowiedź jest wciąż generowana.",
  "Something went wrong.": "Coś poszło nie tak.",
};
