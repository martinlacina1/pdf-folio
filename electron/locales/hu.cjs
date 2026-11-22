// Hungarian text for electron/i18n.cjs: English → Hungarian.
module.exports = {
  "Save": "Mentés",
  "Save as": "Mentés másként",
  "Do you want to save your changes before closing Folio?": "Menti a módosításokat a Folio bezárása előtt?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Ez a fájl nem menthető az eredeti helyére.",
  "Nothing to save.": "Nincs mit menteni.",
  "Couldn't open file": "Nem sikerült megnyitni a fájlt",
  "Couldn't convert “{name}” to PDF. {reason}": "Nem sikerült PDF-be konvertálni: „{name}”. {reason}",
  "Couldn't convert “{name}” to PDF.": "Nem sikerült PDF-be konvertálni: „{name}”.",

  // main.cjs: camera permission
  "Use camera for signature?": "Használja a kamerát az aláíráshoz?",
  "Allow Folio to use your camera to capture a signature?": "Engedélyezi, hogy a Folio a kamerával rögzítsen egy aláírást?",
  "Camera images are processed on this device. No microphone is requested.": "A kameraképek feldolgozása ezen az eszközön történik. A mikrofonhoz nem kér hozzáférést.",
  "Allow camera": "Kamera engedélyezése",
  "Cancel": "Mégse",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Bezárás mentés nélkül",
  "Unsaved changes": "Nem mentett módosítások",
  "One or more tabs have unsaved changes.": "Egy vagy több lapon nem mentett módosítások vannak.",

  // main.cjs: links
  "Open link?": "Megnyitja a hivatkozást?",
  "Open this email link in your mail app?": "Megnyitja ezt az e-mail-hivatkozást a levelezőalkalmazásban?",
  "Open {host} in your browser?": "Megnyitja a(z) {host} címet a böngészőben?",
  "Open mail app": "Levelezőalkalmazás megnyitása",
  "Open link": "Hivatkozás megnyitása",
  "Open a local address?": "Megnyit egy helyi címet?",
  "Open {host}?": "Megnyitja a(z) {host} címet?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Engedélyezi, hogy a(z) {origin} csatlakozzon a következő feloldott címekhez?\n\n{addresses}\n\n{url}",
  "Open": "Megnyitás",

  // main.cjs: opening a link (download)
  "The download timed out.": "A letöltés túllépte az időkorlátot.",
  "That link redirects too many times.": "A hivatkozás túl sokszor irányít át.",
  "That link redirects somewhere Folio can't open.": "A hivatkozás olyan helyre irányít át, amelyet a Folio nem tud megnyitni.",
  "That link leads to a local network address, so Folio didn't follow it.": "A hivatkozás helyi hálózati címre mutat, ezért a Folio nem követte.",
  "Couldn't reach {host}.": "A(z) {host} nem érhető el.",
  "The server responded with {status}.": "A kiszolgáló válasza: {status}.",
  "That PDF is larger than 300 MB.": "A PDF nagyobb 300 MB-nál.",
  "The download was interrupted.": "A letöltés megszakadt.",
  "That link isn't a PDF or a webpage.": "A hivatkozás nem PDF-re és nem weboldalra mutat.",
  "That isn't a valid web address.": "Ez nem érvényes webcím.",
  "Only http:// and https:// links can be opened.": "Csak http:// és https:// hivatkozások nyithatók meg.",
  "Another link is still opening.": "Egy másik hivatkozás megnyitása még folyamatban van.",
  "Couldn't open a verified connection to {host}.": "Nem sikerült ellenőrzött kapcsolatot létesíteni ezzel: {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "A konvertált weboldal nagyobb 300 MB-nál.",
  "The webpage took too long to load.": "A weboldal betöltése túl sokáig tartott.",
  "Couldn't load that webpage ({code}).": "Nem sikerült betölteni a weboldalt ({code}).",
  "Couldn't load that webpage.": "Nem sikerült betölteni a weboldalt.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} mentve a következő mellé: {original}.",
  "It's larger than 300 MB.": "A fájl nagyobb 300 MB-nál.",
  "It's too large to convert.": "A fájl túl nagy a konvertáláshoz.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "A .doc fájlok konvertálásához Microsoft Word vagy LibreOffice szükséges. Telepítse valamelyiket, vagy mentse a dokumentumot .docx formátumban.",
  "The document may be damaged or protected with a password.": "Lehet, hogy a dokumentum sérült vagy jelszóval védett.",
  "Choose a regular file.": "Válasszon egy normál fájlt.",
  "The file changed while it was being opened.": "A fájl megváltozott a megnyitás közben.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Az OpenAI bejelentkezési szolgáltatása nem érhető el.",
  "Unexpected sign-in token.": "Váratlan bejelentkezési token.",
  "The sign-in response couldn't be verified. Please try again.": "A bejelentkezési válasz nem ellenőrizhető. Próbálja újra.",
  "You can close this tab and return to Folio.": "Bezárhatja ezt a lapot, és visszatérhet a Folióba.",
  "Sign-in was cancelled.": "A bejelentkezés megszakadt.",
  "ChatGPT sign-in failed.": "A ChatGPT-bejelentkezés nem sikerült.",
  "Couldn't start sign-in.": "Nem sikerült elindítani a bejelentkezést.",
  "Sign-in timed out. Please try again.": "A bejelentkezés túllépte az időkorlátot. Próbálja újra.",
  "ChatGPT didn't finish registering Folio. Please try again.": "A ChatGPT nem fejezte be a Folio regisztrálását. Próbálja újra.",
  "ChatGPT sign-in failed. Please try again.": "A ChatGPT-bejelentkezés nem sikerült. Próbálja újra.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "A ChatGPT-előfizetés használata nem lett engedélyezve. Jelentkezzen be újra, és engedélyezze, hogy a Folio használja az előfizetését.",
  "Continue with ChatGPT to use your plan in Folio.": "Az előfizetés Folióban való használatához folytassa a ChatGPT-vel.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "A ChatGPT-bejelentkezése lejárt. Az újracsatlakozáshoz folytassa a ChatGPT-vel.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Nem sikerült frissíteni a ChatGPT-bejelentkezést. Ellenőrizze a kapcsolatot, és próbálja újra.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Nem sikerült betölteni a ChatGPT-modelleket ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "A válasz félbeszakadt. Próbáljon rövidebb kérdést vagy kisebb kijelölést.",
  "The connection to ChatGPT ended early. Please try again.": "A ChatGPT-kapcsolat idő előtt megszakadt. Próbálja újra.",
  "You've reached a ChatGPT usage limit.": "Elérte a ChatGPT egyik használati korlátját.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "A ChatGPT átmenetileg nem érhető el. Próbálja újra egy kis idő múlva.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "A ChatGPT nem tudta megerősíteni az előfizetését. Az újracsatlakozáshoz folytassa a ChatGPT-vel.",
  "ChatGPT couldn't answer ({status}). Please try again.": "A ChatGPT nem tudott válaszolni ({status}). Próbálja újra.",
  "ChatGPT couldn't answer. Please try again.": "A ChatGPT nem tudott válaszolni. Próbálja újra.",
  "Claude Code isn't installed.": "A Claude Code nincs telepítve.",
  "Claude took too long to answer. Please try again.": "Claude túl sokáig válaszolt. Próbálja újra.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "A Claude Code nincs bejelentkezve. Nyisson meg egy terminált, futtassa a `claude` parancsot, és jelentkezzen be Claude-fiókjával.",
  "You've reached your Claude usage limit. {details}": "Elérte a Claude használati korlátját. {details}",
  "Claude Code couldn't answer.": "A Claude Code nem tudott válaszolni.",
  "Another answer is still in progress.": "Egy másik válasz még folyamatban van.",
  "Something went wrong.": "Hiba történt.",
};
