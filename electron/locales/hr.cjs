// Croatian text for electron/i18n.cjs: English → Croatian.
module.exports = {
  "Save": "Spremi",
  "Save as": "Spremi kao",
  "Do you want to save your changes before closing Folio?": "Želite li spremiti promjene prije zatvaranja aplikacije Folio?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Ova se datoteka ne može spremiti na izvorno mjesto.",
  "Nothing to save.": "Nema ničega za spremanje.",
  "Couldn't open file": "Nije moguće otvoriti datoteku",
  "Couldn't convert “{name}” to PDF. {reason}": "Nije moguće pretvoriti „{name}“ u PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Nije moguće pretvoriti „{name}“ u PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Upotrijebiti kameru za potpis?",
  "Allow Folio to use your camera to capture a signature?": "Dopustiti aplikaciji Folio da upotrebljava kameru za snimanje potpisa?",
  "Camera images are processed on this device. No microphone is requested.": "Snimke kamere obrađuju se na ovom uređaju. Pristup mikrofonu ne traži se.",
  "Allow camera": "Dopusti kameru",
  "Cancel": "Odustani",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Zatvori bez spremanja",
  "Unsaved changes": "Nespremljene promjene",
  "One or more tabs have unsaved changes.": "Jedna ili više kartica sadrži nespremljene promjene.",

  // main.cjs: links
  "Open link?": "Otvoriti poveznicu?",
  "Open this email link in your mail app?": "Otvoriti ovu poveznicu e-pošte u aplikaciji za poštu?",
  "Open {host} in your browser?": "Otvoriti {host} u pregledniku?",
  "Open mail app": "Otvori aplikaciju za poštu",
  "Open link": "Otvori poveznicu",
  "Open a local address?": "Otvoriti lokalnu adresu?",
  "Open {host}?": "Otvoriti {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Dopustiti da se {origin} poveže sa sljedećim razriješenim adresama?\n\n{addresses}\n\n{url}",
  "Open": "Otvori",

  // main.cjs: opening a link (download)
  "The download timed out.": "Isteklo je vrijeme za preuzimanje.",
  "That link redirects too many times.": "Ta poveznica preusmjerava previše puta.",
  "That link redirects somewhere Folio can't open.": "Ta poveznica preusmjerava na mjesto koje Folio ne može otvoriti.",
  "That link leads to a local network address, so Folio didn't follow it.": "Ta poveznica vodi na adresu u lokalnoj mreži pa je Folio nije slijedio.",
  "Couldn't reach {host}.": "Nije moguće pristupiti poslužitelju {host}.",
  "The server responded with {status}.": "Poslužitelj je odgovorio statusom {status}.",
  "That PDF is larger than 300 MB.": "Taj PDF veći je od 300 MB.",
  "The download was interrupted.": "Preuzimanje je prekinuto.",
  "That link isn't a PDF or a webpage.": "Ta poveznica ne vodi na PDF ni na web-stranicu.",
  "That isn't a valid web address.": "To nije valjana web-adresa.",
  "Only http:// and https:// links can be opened.": "Mogu se otvarati samo poveznice http:// i https://.",
  "Another link is still opening.": "Još se otvara druga poveznica.",
  "Couldn't open a verified connection to {host}.": "Nije moguće uspostaviti provjerenu vezu s poslužiteljem {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Pretvorena web-stranica veća je od 300 MB.",
  "The webpage took too long to load.": "Učitavanje web-stranice trajalo je predugo.",
  "Couldn't load that webpage ({code}).": "Nije moguće učitati web-stranicu ({code}).",
  "Couldn't load that webpage.": "Nije moguće učitati web-stranicu.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Datoteka {name} spremljena je pokraj datoteke {original}.",
  "It's larger than 300 MB.": "Datoteka je veća od 300 MB.",
  "It's too large to convert.": "Datoteka je prevelika za pretvaranje.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Za pretvaranje datoteka .doc potreban je Microsoft Word ili LibreOffice. Instalirajte jedan od njih ili spremite dokument kao .docx.",
  "The document may be damaged or protected with a password.": "Dokument je možda oštećen ili zaštićen lozinkom.",
  "Choose a regular file.": "Odaberite običnu datoteku.",
  "The file changed while it was being opened.": "Datoteka se promijenila tijekom otvaranja.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Nije moguće pristupiti OpenAI-jevoj usluzi za prijavu.",
  "Unexpected sign-in token.": "Neočekivani token za prijavu.",
  "The sign-in response couldn't be verified. Please try again.": "Nije moguće provjeriti odgovor na prijavu. Pokušajte ponovno.",
  "You can close this tab and return to Folio.": "Možete zatvoriti ovu karticu i vratiti se u Folio.",
  "Sign-in was cancelled.": "Prijava je otkazana.",
  "ChatGPT sign-in failed.": "Prijava na ChatGPT nije uspjela.",
  "Couldn't start sign-in.": "Nije moguće započeti prijavu.",
  "Sign-in timed out. Please try again.": "Isteklo je vrijeme za prijavu. Pokušajte ponovno.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nije dovršio registraciju aplikacije Folio. Pokušajte ponovno.",
  "ChatGPT sign-in failed. Please try again.": "Prijava na ChatGPT nije uspjela. Pokušajte ponovno.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Upotreba ChatGPT plana nije odobrena. Ponovno se prijavite i dopustite aplikaciji Folio da upotrebljava vaš plan.",
  "Continue with ChatGPT to use your plan in Folio.": "Nastavite putem ChatGPT-a da biste upotrebljavali svoj plan u aplikaciji Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Vaša prijava na ChatGPT je istekla. Nastavite putem ChatGPT-a za ponovno povezivanje.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Nije moguće osvježiti prijavu na ChatGPT. Provjerite vezu i pokušajte ponovno.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Nije moguće učitati ChatGPT modele ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Odgovor je skraćen. Pokušajte s kraćim pitanjem ili manjim odabirom.",
  "The connection to ChatGPT ended early. Please try again.": "Veza s ChatGPT-om prijevremeno je prekinuta. Pokušajte ponovno.",
  "You've reached a ChatGPT usage limit.": "Dosegnuli ste ograničenje upotrebe ChatGPT-a.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT je privremeno nedostupan. Pokušajte ponovno za trenutak.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nije mogao potvrditi vaš plan. Nastavite putem ChatGPT-a za ponovno povezivanje.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nije mogao odgovoriti ({status}). Pokušajte ponovno.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nije mogao odgovoriti. Pokušajte ponovno.",
  "Claude Code isn't installed.": "Claude Code nije instaliran.",
  "Claude took too long to answer. Please try again.": "Claude je predugo odgovarao. Pokušajte ponovno.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Niste prijavljeni u Claude Code. Otvorite terminal, pokrenite `claude` i prijavite se svojim Claude računom.",
  "You've reached your Claude usage limit. {details}": "Dosegnuli ste ograničenje upotrebe Claudea. {details}",
  "Claude Code couldn't answer.": "Claude Code nije mogao odgovoriti.",
  "Another answer is still in progress.": "Drugi je odgovor još u tijeku.",
  "Something went wrong.": "Došlo je do pogreške.",
};
