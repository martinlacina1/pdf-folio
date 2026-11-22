// Romanian text for electron/i18n.cjs: English → Romanian.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Acest fișier nu poate fi salvat în locația originală.",
  "Nothing to save.": "Nu există nimic de salvat.",
  "Couldn't open file": "Fișierul nu s-a putut deschide",
  "Couldn't convert “{name}” to PDF. {reason}": "Nu s-a putut converti „{name}” în PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Nu s-a putut converti „{name}” în PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Utilizați camera pentru semnătură?",
  "Allow Folio to use your camera to capture a signature?": "Permiteți ca Folio să utilizeze camera pentru a captura o semnătură?",
  "Camera images are processed on this device. No microphone is requested.": "Imaginile camerei sunt procesate pe acest dispozitiv. Nu se solicită acces la microfon.",
  "Allow camera": "Permitere cameră",
  "Cancel": "Anulare",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Închidere fără salvare",
  "Unsaved changes": "Modificări nesalvate",
  "One or more tabs have unsaved changes.": "Una sau mai multe file au modificări nesalvate.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Apăsați {shortcut} în fiecare filă marcată pentru a o salva înainte de a închide Folio.",

  // main.cjs: links
  "Open link?": "Deschideți linkul?",
  "Open this email link in your mail app?": "Deschideți acest link de e-mail în aplicația de e-mail?",
  "Open {host} in your browser?": "Deschideți {host} în browser?",
  "Open mail app": "Deschidere aplicație de e-mail",
  "Open link": "Deschidere link",
  "Open a local address?": "Deschideți o adresă locală?",
  "Open {host}?": "Deschideți {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Permiteți ca {origin} să se conecteze la următoarele adrese rezolvate?\n\n{addresses}\n\n{url}",
  "Open": "Deschidere",

  // main.cjs: opening a link (download)
  "The download timed out.": "Descărcarea a expirat.",
  "That link redirects too many times.": "Linkul redirecționează de prea multe ori.",
  "That link redirects somewhere Folio can't open.": "Linkul redirecționează către o locație pe care Folio nu o poate deschide.",
  "That link leads to a local network address, so Folio didn't follow it.": "Linkul duce la o adresă din rețeaua locală, așa că Folio nu l-a urmat.",
  "Couldn't reach {host}.": "Nu s-a putut contacta {host}.",
  "The server responded with {status}.": "Serverul a răspuns cu {status}.",
  "That PDF is larger than 300 MB.": "Acest PDF depășește 300 MB.",
  "The download was interrupted.": "Descărcarea a fost întreruptă.",
  "That link isn't a PDF or a webpage.": "Linkul nu duce la un PDF sau la o pagină web.",
  "That isn't a valid web address.": "Aceasta nu este o adresă web validă.",
  "Only http:// and https:// links can be opened.": "Se pot deschide doar linkuri http:// și https://.",
  "Another link is still opening.": "Un alt link este încă în curs de deschidere.",
  "Couldn't open a verified connection to {host}.": "Nu s-a putut deschide o conexiune verificată la {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Pagina web convertită depășește 300 MB.",
  "The webpage took too long to load.": "Încărcarea paginii web a durat prea mult.",
  "Couldn't load that webpage ({code}).": "Pagina web nu s-a putut încărca ({code}).",
  "Couldn't load that webpage.": "Pagina web nu s-a putut încărca.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "S-a salvat {name} lângă {original}.",
  "It's larger than 300 MB.": "Fișierul depășește 300 MB.",
  "It's too large to convert.": "Fișierul este prea mare pentru a fi convertit.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Conversia fișierelor .doc necesită Microsoft Word sau LibreOffice. Instalați unul dintre ele sau salvați documentul ca .docx.",
  "The document may be damaged or protected with a password.": "Este posibil ca documentul să fie deteriorat sau protejat prin parolă.",
  "Choose a regular file.": "Alegeți un fișier obișnuit.",
  "The file changed while it was being opened.": "Fișierul s-a modificat în timp ce era deschis.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Nu s-a putut contacta serviciul de conectare OpenAI.",
  "Unexpected sign-in token.": "Token de conectare neașteptat.",
  "The sign-in response couldn't be verified. Please try again.": "Răspunsul de conectare nu a putut fi verificat. Încercați din nou.",
  "You can close this tab and return to Folio.": "Puteți închide această filă și reveni la Folio.",
  "Sign-in was cancelled.": "Conectarea a fost anulată.",
  "ChatGPT sign-in failed.": "Conectarea la ChatGPT nu a reușit.",
  "Couldn't start sign-in.": "Conectarea nu a putut începe.",
  "Sign-in timed out. Please try again.": "Conectarea a expirat. Încercați din nou.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nu a finalizat înregistrarea Folio. Încercați din nou.",
  "ChatGPT sign-in failed. Please try again.": "Conectarea la ChatGPT nu a reușit. Încercați din nou.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Utilizarea abonamentului ChatGPT nu a fost permisă. Conectați-vă din nou și permiteți ca Folio să utilizeze abonamentul.",
  "Continue with ChatGPT to use your plan in Folio.": "Continuați cu ChatGPT pentru a utiliza abonamentul în Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Conectarea la ChatGPT s-a încheiat. Continuați cu ChatGPT pentru a vă reconecta.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Conectarea la ChatGPT nu s-a putut reîmprospăta. Verificați conexiunea și încercați din nou.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Modelele ChatGPT nu s-au putut încărca ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Răspunsul a fost întrerupt. Încercați o întrebare mai scurtă sau o selecție mai mică.",
  "The connection to ChatGPT ended early. Please try again.": "Conexiunea la ChatGPT s-a încheiat prematur. Încercați din nou.",
  "You've reached a ChatGPT usage limit.": "Ați atins o limită de utilizare ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT este temporar indisponibil. Încercați din nou peste câteva momente.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nu a putut confirma abonamentul. Continuați cu ChatGPT pentru a vă reconecta.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nu a putut răspunde ({status}). Încercați din nou.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nu a putut răspunde. Încercați din nou.",
  "Claude Code isn't installed.": "Claude Code nu este instalat.",
  "Claude took too long to answer. Please try again.": "Claude a avut nevoie de prea mult timp pentru a răspunde. Încercați din nou.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code nu este conectat. Deschideți un terminal, rulați `claude` și conectați-vă cu contul Claude.",
  "You've reached your Claude usage limit. {details}": "Ați atins limita de utilizare Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code nu a putut răspunde.",
  "Another answer is still in progress.": "Un alt răspuns este încă în curs.",
  "Something went wrong.": "A apărut o problemă.",
};
