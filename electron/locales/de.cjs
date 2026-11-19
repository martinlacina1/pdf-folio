// German text for electron/i18n.cjs: English → German.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Diese Datei kann nicht am ursprünglichen Ort gespeichert werden.",
  "Nothing to save.": "Nichts zu speichern.",
  "Couldn't open file": "Datei konnte nicht geöffnet werden",
  "Couldn't convert “{name}” to PDF. {reason}": "„{name}“ konnte nicht in PDF konvertiert werden. {reason}",
  "Couldn't convert “{name}” to PDF.": "„{name}“ konnte nicht in PDF konvertiert werden.",

  // main.cjs: camera permission
  "Use camera for signature?": "Kamera für die Unterschrift verwenden?",
  "Allow Folio to use your camera to capture a signature?": "Folio erlauben, Ihre Kamera zum Erfassen einer Unterschrift zu verwenden?",
  "Camera images are processed on this device. No microphone is requested.": "Kamerabilder werden auf diesem Gerät verarbeitet. Es wird kein Zugriff auf das Mikrofon angefordert.",
  "Allow camera": "Kamera erlauben",
  "Cancel": "Abbrechen",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Ohne Speichern schließen",
  "Unsaved changes": "Nicht gespeicherte Änderungen",
  "One or more tabs have unsaved changes.": "Ein oder mehrere Tabs enthalten nicht gespeicherte Änderungen.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Drücken Sie in jedem markierten Tab {shortcut}, um ihn vor dem Schließen von Folio zu speichern.",

  // main.cjs: links
  "Open link?": "Link öffnen?",
  "Open this email link in your mail app?": "Diesen E-Mail-Link in Ihrer Mail-App öffnen?",
  "Open {host} in your browser?": "{host} in Ihrem Browser öffnen?",
  "Open mail app": "Mail-App öffnen",
  "Open link": "Link öffnen",
  "Open a local address?": "Lokale Adresse öffnen?",
  "Open {host}?": "{host} öffnen?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "{origin} erlauben, eine Verbindung zu den folgenden aufgelösten Adressen herzustellen?\n\n{addresses}\n\n{url}",
  "Open": "Öffnen",

  // main.cjs: opening a link (download)
  "The download timed out.": "Zeitüberschreitung beim Download.",
  "That link redirects too many times.": "Dieser Link leitet zu oft weiter.",
  "That link redirects somewhere Folio can't open.": "Dieser Link leitet zu einem Ziel weiter, das Folio nicht öffnen kann.",
  "That link leads to a local network address, so Folio didn't follow it.": "Dieser Link führt zu einer Adresse im lokalen Netzwerk, daher ist Folio ihm nicht gefolgt.",
  "Couldn't reach {host}.": "{host} ist nicht erreichbar.",
  "The server responded with {status}.": "Der Server hat mit {status} geantwortet.",
  "That PDF is larger than 300 MB.": "Diese PDF-Datei ist größer als 300 MB.",
  "The download was interrupted.": "Der Download wurde unterbrochen.",
  "That link isn't a PDF or a webpage.": "Dieser Link führt weder zu einer PDF-Datei noch zu einer Webseite.",
  "That isn't a valid web address.": "Das ist keine gültige Webadresse.",
  "Only http:// and https:// links can be opened.": "Nur http://- und https://-Links können geöffnet werden.",
  "Another link is still opening.": "Ein anderer Link wird noch geöffnet.",
  "Couldn't open a verified connection to {host}.": "Es konnte keine verifizierte Verbindung zu {host} hergestellt werden.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Die konvertierte Webseite ist größer als 300 MB.",
  "The webpage took too long to load.": "Das Laden der Webseite hat zu lange gedauert.",
  "Couldn't load that webpage ({code}).": "Die Webseite konnte nicht geladen werden ({code}).",
  "Couldn't load that webpage.": "Die Webseite konnte nicht geladen werden.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} wurde neben {original} gespeichert.",
  "It's larger than 300 MB.": "Die Datei ist größer als 300 MB.",
  "It's too large to convert.": "Die Datei ist zu groß für die Konvertierung.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Zum Konvertieren von .doc-Dateien wird Microsoft Word oder LibreOffice benötigt. Installieren Sie eines davon oder speichern Sie das Dokument als .docx.",
  "The document may be damaged or protected with a password.": "Das Dokument ist möglicherweise beschädigt oder kennwortgeschützt.",
  "Choose a regular file.": "Wählen Sie eine normale Datei.",
  "The file changed while it was being opened.": "Die Datei wurde während des Öffnens geändert.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Der Anmeldedienst von OpenAI ist nicht erreichbar.",
  "Unexpected sign-in token.": "Unerwartetes Anmeldetoken.",
  "The sign-in response couldn't be verified. Please try again.": "Die Anmeldeantwort konnte nicht überprüft werden. Bitte versuchen Sie es erneut.",
  "You can close this tab and return to Folio.": "Sie können diesen Tab schließen und zu Folio zurückkehren.",
  "Sign-in was cancelled.": "Die Anmeldung wurde abgebrochen.",
  "ChatGPT sign-in failed.": "Anmeldung bei ChatGPT fehlgeschlagen.",
  "Couldn't start sign-in.": "Die Anmeldung konnte nicht gestartet werden.",
  "Sign-in timed out. Please try again.": "Zeitüberschreitung bei der Anmeldung. Bitte versuchen Sie es erneut.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT hat die Registrierung von Folio nicht abgeschlossen. Bitte versuchen Sie es erneut.",
  "ChatGPT sign-in failed. Please try again.": "Anmeldung bei ChatGPT fehlgeschlagen. Bitte versuchen Sie es erneut.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Die Nutzung Ihres ChatGPT-Abos wurde nicht gewährt. Melden Sie sich erneut an und erlauben Sie Folio, Ihr Abo zu nutzen.",
  "Continue with ChatGPT to use your plan in Folio.": "Fahren Sie mit ChatGPT fort, um Ihr Abo in Folio zu nutzen.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Ihre Anmeldung bei ChatGPT ist abgelaufen. Fahren Sie mit ChatGPT fort, um sich erneut zu verbinden.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Ihre Anmeldung bei ChatGPT konnte nicht erneuert werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "ChatGPT-Modelle konnten nicht geladen werden ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Die Antwort wurde abgeschnitten. Versuchen Sie es mit einer kürzeren Frage oder einer kleineren Auswahl.",
  "The connection to ChatGPT ended early. Please try again.": "Die Verbindung zu ChatGPT wurde vorzeitig beendet. Bitte versuchen Sie es erneut.",
  "You've reached a ChatGPT usage limit.": "Sie haben ein Nutzungslimit von ChatGPT erreicht.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT ist vorübergehend nicht verfügbar. Bitte versuchen Sie es gleich noch einmal.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT konnte Ihr Abo nicht bestätigen. Fahren Sie mit ChatGPT fort, um sich erneut zu verbinden.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT konnte nicht antworten ({status}). Bitte versuchen Sie es erneut.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT konnte nicht antworten. Bitte versuchen Sie es erneut.",
  "Claude Code isn't installed.": "Claude Code ist nicht installiert.",
  "Claude took too long to answer. Please try again.": "Claude hat zu lange für die Antwort gebraucht. Bitte versuchen Sie es erneut.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code ist nicht angemeldet. Öffnen Sie ein Terminal, führen Sie `claude` aus und melden Sie sich mit Ihrem Claude-Konto an.",
  "You've reached your Claude usage limit. {details}": "Sie haben Ihr Nutzungslimit für Claude erreicht. {details}",
  "Claude Code couldn't answer.": "Claude Code konnte nicht antworten.",
  "Another answer is still in progress.": "Eine andere Antwort wird noch erstellt.",
  "Something went wrong.": "Ein Fehler ist aufgetreten.",
};
