// Swedish text for electron/i18n.cjs: English → Swedish.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Den här filen kan inte sparas på sin ursprungliga plats.",
  "Nothing to save.": "Inget att spara.",
  "Couldn't open file": "Det gick inte att öppna filen",
  "Couldn't convert “{name}” to PDF. {reason}": "Det gick inte att konvertera ”{name}” till PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Det gick inte att konvertera ”{name}” till PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Vill du använda kameran för signaturen?",
  "Allow Folio to use your camera to capture a signature?": "Vill du tillåta Folio att använda kameran för att fånga en signatur?",
  "Camera images are processed on this device. No microphone is requested.": "Kamerabilderna bearbetas på den här enheten. Ingen åtkomst till mikrofonen begärs.",
  "Allow camera": "Tillåt kamera",
  "Cancel": "Avbryt",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Stäng utan att spara",
  "Unsaved changes": "Osparade ändringar",
  "One or more tabs have unsaved changes.": "En eller flera flikar har osparade ändringar.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Tryck på {shortcut} i varje markerad flik för att spara den innan du stänger Folio.",

  // main.cjs: links
  "Open link?": "Vill du öppna länken?",
  "Open this email link in your mail app?": "Vill du öppna den här e-postlänken i e-postappen?",
  "Open {host} in your browser?": "Vill du öppna {host} i webbläsaren?",
  "Open mail app": "Öppna e-postapp",
  "Open link": "Öppna länk",
  "Open a local address?": "Vill du öppna en lokal adress?",
  "Open {host}?": "Vill du öppna {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Vill du tillåta {origin} att ansluta till följande matchade adresser?\n\n{addresses}\n\n{url}",
  "Open": "Öppna",

  // main.cjs: opening a link (download)
  "The download timed out.": "Tidsgränsen för nedladdningen överskreds.",
  "That link redirects too many times.": "Länken omdirigerar för många gånger.",
  "That link redirects somewhere Folio can't open.": "Länken omdirigerar till en plats som Folio inte kan öppna.",
  "That link leads to a local network address, so Folio didn't follow it.": "Länken leder till en adress i det lokala nätverket, så Folio följde den inte.",
  "Couldn't reach {host}.": "Det gick inte att nå {host}.",
  "The server responded with {status}.": "Servern svarade med {status}.",
  "That PDF is larger than 300 MB.": "PDF-filen är större än 300 MB.",
  "The download was interrupted.": "Nedladdningen avbröts.",
  "That link isn't a PDF or a webpage.": "Länken leder inte till en PDF eller en webbsida.",
  "That isn't a valid web address.": "Det är inte en giltig webbadress.",
  "Only http:// and https:// links can be opened.": "Endast http://- och https://-länkar kan öppnas.",
  "Another link is still opening.": "En annan länk håller fortfarande på att öppnas.",
  "Couldn't open a verified connection to {host}.": "Det gick inte att öppna en verifierad anslutning till {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Den konverterade webbsidan är större än 300 MB.",
  "The webpage took too long to load.": "Det tog för lång tid att läsa in webbsidan.",
  "Couldn't load that webpage ({code}).": "Det gick inte att läsa in webbsidan ({code}).",
  "Couldn't load that webpage.": "Det gick inte att läsa in webbsidan.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} sparades bredvid {original}.",
  "It's larger than 300 MB.": "Filen är större än 300 MB.",
  "It's too large to convert.": "Filen är för stor för att konverteras.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "För att konvertera .doc-filer krävs Microsoft Word eller LibreOffice. Installera något av dem, eller spara dokumentet som .docx.",
  "The document may be damaged or protected with a password.": "Dokumentet kan vara skadat eller lösenordsskyddat.",
  "Choose a regular file.": "Välj en vanlig fil.",
  "The file changed while it was being opened.": "Filen ändrades medan den öppnades.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Det gick inte att nå OpenAI:s inloggningstjänst.",
  "Unexpected sign-in token.": "Oväntad inloggningstoken.",
  "The sign-in response couldn't be verified. Please try again.": "Inloggningssvaret kunde inte verifieras. Försök igen.",
  "You can close this tab and return to Folio.": "Du kan stänga den här fliken och återgå till Folio.",
  "Sign-in was cancelled.": "Inloggningen avbröts.",
  "ChatGPT sign-in failed.": "Inloggningen med ChatGPT misslyckades.",
  "Couldn't start sign-in.": "Det gick inte att starta inloggningen.",
  "Sign-in timed out. Please try again.": "Tidsgränsen för inloggningen överskreds. Försök igen.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT slutförde inte registreringen av Folio. Försök igen.",
  "ChatGPT sign-in failed. Please try again.": "Inloggningen med ChatGPT misslyckades. Försök igen.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Användning av ChatGPT-abonnemanget beviljades inte. Logga in igen och tillåt Folio att använda ditt abonnemang.",
  "Continue with ChatGPT to use your plan in Folio.": "Fortsätt med ChatGPT för att använda ditt abonnemang i Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Din inloggning med ChatGPT har upphört. Fortsätt med ChatGPT för att ansluta igen.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Det gick inte att förnya inloggningen med ChatGPT. Kontrollera anslutningen och försök igen.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Det gick inte att läsa in ChatGPT-modeller ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Svaret avbröts. Prova en kortare fråga eller en mindre markering.",
  "The connection to ChatGPT ended early. Please try again.": "Anslutningen till ChatGPT avslutades i förtid. Försök igen.",
  "You've reached a ChatGPT usage limit.": "Du har nått en användningsgräns för ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT är tillfälligt otillgängligt. Försök igen om en stund.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT kunde inte bekräfta ditt abonnemang. Fortsätt med ChatGPT för att ansluta igen.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT kunde inte svara ({status}). Försök igen.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT kunde inte svara. Försök igen.",
  "Claude Code isn't installed.": "Claude Code är inte installerat.",
  "Claude took too long to answer. Please try again.": "Det tog för lång tid för Claude att svara. Försök igen.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code är inte inloggat. Öppna en terminal, kör `claude` och logga in med ditt Claude-konto.",
  "You've reached your Claude usage limit. {details}": "Du har nått din användningsgräns för Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code kunde inte svara.",
  "Another answer is still in progress.": "Ett annat svar håller fortfarande på att skapas.",
  "Something went wrong.": "Något gick fel.",
};
