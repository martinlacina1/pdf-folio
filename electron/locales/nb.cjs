// Norwegian Bokmål text for electron/i18n.cjs: English → Norwegian Bokmål.
module.exports = {
  "Save": "Lagre",
  "Save as": "Lagre som",
  "Do you want to save your changes before closing Folio?": "Vil du lagre endringene før du lukker Folio?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Denne filen kan ikke lagres på den opprinnelige plasseringen.",
  "Nothing to save.": "Ingenting å lagre.",
  "Couldn't open file": "Kunne ikke åpne filen",
  "Couldn't convert “{name}” to PDF. {reason}": "Kunne ikke konvertere «{name}» til PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Kunne ikke konvertere «{name}» til PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Vil du bruke kameraet til signaturen?",
  "Allow Folio to use your camera to capture a signature?": "Vil du gi Folio tillatelse til å bruke kameraet for å ta bilde av en signatur?",
  "Camera images are processed on this device. No microphone is requested.": "Kamerabildene behandles på denne enheten. Det bes ikke om tilgang til mikrofonen.",
  "Allow camera": "Tillat kamera",
  "Cancel": "Avbryt",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Lukk uten å lagre",
  "Unsaved changes": "Ulagrede endringer",
  "One or more tabs have unsaved changes.": "Én eller flere faner har ulagrede endringer.",

  // main.cjs: links
  "Open link?": "Vil du åpne koblingen?",
  "Open this email link in your mail app?": "Vil du åpne denne e-postkoblingen i e-postappen?",
  "Open {host} in your browser?": "Vil du åpne {host} i nettleseren?",
  "Open mail app": "Åpne e-postapp",
  "Open link": "Åpne kobling",
  "Open a local address?": "Vil du åpne en lokal adresse?",
  "Open {host}?": "Vil du åpne {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Vil du tillate {origin} å koble til følgende oppslåtte adresser?\n\n{addresses}\n\n{url}",
  "Open": "Åpne",

  // main.cjs: opening a link (download)
  "The download timed out.": "Tidsavbrudd for nedlastingen.",
  "That link redirects too many times.": "Koblingen omdirigerer for mange ganger.",
  "That link redirects somewhere Folio can't open.": "Koblingen omdirigerer til et sted Folio ikke kan åpne.",
  "That link leads to a local network address, so Folio didn't follow it.": "Koblingen fører til en adresse i det lokale nettverket, så Folio fulgte den ikke.",
  "Couldn't reach {host}.": "Kunne ikke nå {host}.",
  "The server responded with {status}.": "Serveren svarte med {status}.",
  "That PDF is larger than 300 MB.": "PDF-filen er større enn 300 MB.",
  "The download was interrupted.": "Nedlastingen ble avbrutt.",
  "That link isn't a PDF or a webpage.": "Koblingen fører ikke til en PDF eller en nettside.",
  "That isn't a valid web address.": "Dette er ikke en gyldig nettadresse.",
  "Only http:// and https:// links can be opened.": "Bare http://- og https://-koblinger kan åpnes.",
  "Another link is still opening.": "En annen kobling holder fortsatt på å åpnes.",
  "Couldn't open a verified connection to {host}.": "Kunne ikke åpne en bekreftet tilkobling til {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Den konverterte nettsiden er større enn 300 MB.",
  "The webpage took too long to load.": "Det tok for lang tid å laste inn nettsiden.",
  "Couldn't load that webpage ({code}).": "Kunne ikke laste inn nettsiden ({code}).",
  "Couldn't load that webpage.": "Kunne ikke laste inn nettsiden.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Lagret {name} ved siden av {original}.",
  "It's larger than 300 MB.": "Filen er større enn 300 MB.",
  "It's too large to convert.": "Filen er for stor til å konverteres.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Konvertering av .doc-filer krever Microsoft Word eller LibreOffice. Installer ett av dem, eller lagre dokumentet som .docx.",
  "The document may be damaged or protected with a password.": "Dokumentet kan være skadet eller passordbeskyttet.",
  "Choose a regular file.": "Velg en vanlig fil.",
  "The file changed while it was being opened.": "Filen ble endret mens den ble åpnet.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Kunne ikke nå påloggingstjenesten til OpenAI.",
  "Unexpected sign-in token.": "Uventet påloggingstoken.",
  "The sign-in response couldn't be verified. Please try again.": "Påloggingssvaret kunne ikke bekreftes. Prøv igjen.",
  "You can close this tab and return to Folio.": "Du kan lukke denne fanen og gå tilbake til Folio.",
  "Sign-in was cancelled.": "Påloggingen ble avbrutt.",
  "ChatGPT sign-in failed.": "Pålogging med ChatGPT mislyktes.",
  "Couldn't start sign-in.": "Kunne ikke starte påloggingen.",
  "Sign-in timed out. Please try again.": "Tidsavbrudd for påloggingen. Prøv igjen.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT fullførte ikke registreringen av Folio. Prøv igjen.",
  "ChatGPT sign-in failed. Please try again.": "Pålogging med ChatGPT mislyktes. Prøv igjen.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Bruk av ChatGPT-abonnementet ble ikke tillatt. Logg på igjen og la Folio bruke abonnementet ditt.",
  "Continue with ChatGPT to use your plan in Folio.": "Fortsett med ChatGPT for å bruke abonnementet ditt i Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Påloggingen med ChatGPT er avsluttet. Fortsett med ChatGPT for å koble til igjen.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Kunne ikke fornye påloggingen med ChatGPT. Kontroller tilkoblingen og prøv igjen.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Kunne ikke laste inn ChatGPT-modeller ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Svaret ble avbrutt. Prøv et kortere spørsmål eller et mindre utvalg.",
  "The connection to ChatGPT ended early. Please try again.": "Tilkoblingen til ChatGPT ble avsluttet for tidlig. Prøv igjen.",
  "You've reached a ChatGPT usage limit.": "Du har nådd en bruksgrense for ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT er midlertidig utilgjengelig. Prøv igjen om litt.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT kunne ikke bekrefte abonnementet ditt. Fortsett med ChatGPT for å koble til igjen.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT kunne ikke svare ({status}). Prøv igjen.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT kunne ikke svare. Prøv igjen.",
  "Claude Code isn't installed.": "Claude Code er ikke installert.",
  "Claude took too long to answer. Please try again.": "Claude brukte for lang tid på å svare. Prøv igjen.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code er ikke pålogget. Åpne en terminal, kjør `claude`, og logg på med Claude-kontoen din.",
  "You've reached your Claude usage limit. {details}": "Du har nådd bruksgrensen din for Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code kunne ikke svare.",
  "Another answer is still in progress.": "Et annet svar holder fortsatt på å genereres.",
  "Something went wrong.": "Noe gikk galt.",
};
