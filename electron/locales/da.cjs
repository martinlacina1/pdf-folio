// Danish text for electron/i18n.cjs: English → Danish.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Denne fil kan ikke gemmes på den oprindelige placering.",
  "Nothing to save.": "Der er intet at gemme.",
  "Couldn't open file": "Filen kunne ikke åbnes",
  "Couldn't convert “{name}” to PDF. {reason}": "»{name}« kunne ikke konverteres til PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "»{name}« kunne ikke konverteres til PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Vil du bruge kameraet til underskrift?",
  "Allow Folio to use your camera to capture a signature?": "Vil du tillade, at Folio bruger dit kamera til at optage en underskrift?",
  "Camera images are processed on this device. No microphone is requested.": "Kamerabilleder behandles på denne enhed. Der anmodes ikke om adgang til mikrofonen.",
  "Allow camera": "Tillad kamera",
  "Cancel": "Annuller",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Luk uden at gemme",
  "Unsaved changes": "Ikke-gemte ændringer",
  "One or more tabs have unsaved changes.": "En eller flere faner har ikke-gemte ændringer.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Tryk på {shortcut} i hver markeret fane for at gemme den, før du lukker Folio.",

  // main.cjs: links
  "Open link?": "Vil du åbne linket?",
  "Open this email link in your mail app?": "Vil du åbne dette maillink i din mailapp?",
  "Open {host} in your browser?": "Vil du åbne {host} i din browser?",
  "Open mail app": "Åbn mailapp",
  "Open link": "Åbn link",
  "Open a local address?": "Vil du åbne en lokal adresse?",
  "Open {host}?": "Vil du åbne {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Vil du tillade, at {origin} opretter forbindelse til følgende fundne adresser?\n\n{addresses}\n\n{url}",
  "Open": "Åbn",

  // main.cjs: opening a link (download)
  "The download timed out.": "Der opstod timeout under download.",
  "That link redirects too many times.": "Linket omdirigerer for mange gange.",
  "That link redirects somewhere Folio can't open.": "Linket omdirigerer til et sted, som Folio ikke kan åbne.",
  "That link leads to a local network address, so Folio didn't follow it.": "Linket fører til en adresse på det lokale netværk, så Folio fulgte det ikke.",
  "Couldn't reach {host}.": "{host} kunne ikke nås.",
  "The server responded with {status}.": "Serveren svarede med {status}.",
  "That PDF is larger than 300 MB.": "Den PDF er større end 300 MB.",
  "The download was interrupted.": "Download blev afbrudt.",
  "That link isn't a PDF or a webpage.": "Linket fører hverken til en PDF eller en webside.",
  "That isn't a valid web address.": "Det er ikke en gyldig webadresse.",
  "Only http:// and https:// links can be opened.": "Kun http://- og https://-links kan åbnes.",
  "Another link is still opening.": "Et andet link er stadig ved at blive åbnet.",
  "Couldn't open a verified connection to {host}.": "Der kunne ikke oprettes en bekræftet forbindelse til {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Den konverterede webside er større end 300 MB.",
  "The webpage took too long to load.": "Det tog for lang tid at indlæse websiden.",
  "Couldn't load that webpage ({code}).": "Websiden kunne ikke indlæses ({code}).",
  "Couldn't load that webpage.": "Websiden kunne ikke indlæses.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} er gemt ved siden af {original}.",
  "It's larger than 300 MB.": "Filen er større end 300 MB.",
  "It's too large to convert.": "Filen er for stor til at blive konverteret.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Konvertering af .doc-filer kræver Microsoft Word eller LibreOffice. Installer et af dem, eller gem dokumentet som .docx.",
  "The document may be damaged or protected with a password.": "Dokumentet er muligvis beskadiget eller beskyttet med en adgangskode.",
  "Choose a regular file.": "Vælg en almindelig fil.",
  "The file changed while it was being opened.": "Filen blev ændret, mens den blev åbnet.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "OpenAIs logintjeneste kunne ikke nås.",
  "Unexpected sign-in token.": "Uventet logintoken.",
  "The sign-in response couldn't be verified. Please try again.": "Svaret på login kunne ikke bekræftes. Prøv igen.",
  "You can close this tab and return to Folio.": "Du kan lukke denne fane og vende tilbage til Folio.",
  "Sign-in was cancelled.": "Login blev annulleret.",
  "ChatGPT sign-in failed.": "Login med ChatGPT mislykkedes.",
  "Couldn't start sign-in.": "Login kunne ikke startes.",
  "Sign-in timed out. Please try again.": "Der opstod timeout under login. Prøv igen.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT fuldførte ikke registreringen af Folio. Prøv igen.",
  "ChatGPT sign-in failed. Please try again.": "Login med ChatGPT mislykkedes. Prøv igen.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Brug af dit ChatGPT-abonnement blev ikke tilladt. Log ind igen, og tillad, at Folio bruger dit abonnement.",
  "Continue with ChatGPT to use your plan in Folio.": "Fortsæt med ChatGPT for at bruge dit abonnement i Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Dit login med ChatGPT er udløbet. Fortsæt med ChatGPT for at oprette forbindelse igen.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Dit login med ChatGPT kunne ikke fornyes. Kontrollér din forbindelse, og prøv igen.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "ChatGPT-modeller kunne ikke indlæses ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Svaret blev afbrudt. Prøv et kortere spørgsmål eller en mindre markering.",
  "The connection to ChatGPT ended early. Please try again.": "Forbindelsen til ChatGPT blev afbrudt for tidligt. Prøv igen.",
  "You've reached a ChatGPT usage limit.": "Du har nået en forbrugsgrænse for ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT er midlertidigt utilgængelig. Prøv igen om lidt.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT kunne ikke bekræfte dit abonnement. Fortsæt med ChatGPT for at oprette forbindelse igen.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT kunne ikke svare ({status}). Prøv igen.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT kunne ikke svare. Prøv igen.",
  "Claude Code isn't installed.": "Claude Code er ikke installeret.",
  "Claude took too long to answer. Please try again.": "Claude var for længe om at svare. Prøv igen.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code er ikke logget ind. Åbn en terminal, kør `claude`, og log ind med din Claude-konto.",
  "You've reached your Claude usage limit. {details}": "Du har nået din forbrugsgrænse for Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code kunne ikke svare.",
  "Another answer is still in progress.": "Et andet svar er stadig undervejs.",
  "Something went wrong.": "Noget gik galt.",
};
