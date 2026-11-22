// Albanian text for electron/i18n.cjs: English → Albanian.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Ky skedar nuk mund të ruhet në vendndodhjen origjinale.",
  "Nothing to save.": "Nuk ka asgjë për t'u ruajtur.",
  "Couldn't open file": "Skedari nuk u hap dot",
  "Couldn't convert “{name}” to PDF. {reason}": "„{name}“ nuk u konvertua dot në PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "„{name}“ nuk u konvertua dot në PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Të përdoret kamera për nënshkrimin?",
  "Allow Folio to use your camera to capture a signature?": "Të lejohet Folio të përdorë kamerën për të marrë një nënshkrim?",
  "Camera images are processed on this device. No microphone is requested.": "Imazhet e kamerës përpunohen në këtë pajisje. Nuk kërkohet mikrofoni.",
  "Allow camera": "Lejo kamerën",
  "Cancel": "Anulo",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Mbyll pa ruajtur",
  "Unsaved changes": "Ndryshime të paruajtura",
  "One or more tabs have unsaved changes.": "Një ose më shumë skeda kanë ndryshime të paruajtura.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Shtypni {shortcut} në çdo skedë të shënuar për ta ruajtur para se të mbyllni Folio.",

  // main.cjs: links
  "Open link?": "Të hapet lidhja?",
  "Open this email link in your mail app?": "Të hapet kjo lidhje email-i në aplikacionin e postës?",
  "Open {host} in your browser?": "Të hapet {host} në shfletues?",
  "Open mail app": "Hap aplikacionin e postës",
  "Open link": "Hap lidhjen",
  "Open a local address?": "Të hapet një adresë lokale?",
  "Open {host}?": "Të hapet {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Të lejohet {origin} të lidhet me adresat e mëposhtme?\n\n{addresses}\n\n{url}",
  "Open": "Hap",

  // main.cjs: opening a link (download)
  "The download timed out.": "Koha e shkarkimit skadoi.",
  "That link redirects too many times.": "Lidhja ridrejton shumë herë.",
  "That link redirects somewhere Folio can't open.": "Lidhja ridrejton diku që Folio nuk mund ta hapë.",
  "That link leads to a local network address, so Folio didn't follow it.": "Lidhja çon te një adresë e rrjetit lokal, prandaj Folio nuk e ndoqi.",
  "Couldn't reach {host}.": "{host} nuk u arrit dot.",
  "The server responded with {status}.": "Serveri u përgjigj me {status}.",
  "That PDF is larger than 300 MB.": "Ky PDF është më i madh se 300 MB.",
  "The download was interrupted.": "Shkarkimi u ndërpre.",
  "That link isn't a PDF or a webpage.": "Lidhja nuk çon te një PDF ose faqe interneti.",
  "That isn't a valid web address.": "Kjo nuk është adresë e vlefshme interneti.",
  "Only http:// and https:// links can be opened.": "Mund të hapen vetëm lidhjet http:// dhe https://.",
  "Another link is still opening.": "Një lidhje tjetër po hapet ende.",
  "Couldn't open a verified connection to {host}.": "Nuk u hap dot një lidhje e verifikuar me {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Faqja e konvertuar e internetit është më e madhe se 300 MB.",
  "The webpage took too long to load.": "Ngarkimi i faqes së internetit zgjati shumë.",
  "Couldn't load that webpage ({code}).": "Faqja e internetit nuk u ngarkua dot ({code}).",
  "Couldn't load that webpage.": "Faqja e internetit nuk u ngarkua dot.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} u ruajt pranë {original}.",
  "It's larger than 300 MB.": "Është më i madh se 300 MB.",
  "It's too large to convert.": "Është shumë i madh për t'u konvertuar.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Konvertimi i skedarëve .doc kërkon Microsoft Word ose LibreOffice. Instaloni njërin prej tyre ose ruajeni dokumentin si .docx.",
  "The document may be damaged or protected with a password.": "Dokumenti mund të jetë i dëmtuar ose i mbrojtur me fjalëkalim.",
  "Choose a regular file.": "Zgjidhni një skedar të zakonshëm.",
  "The file changed while it was being opened.": "Skedari ndryshoi ndërsa po hapej.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Shërbimi i hyrjes i OpenAI nuk u arrit dot.",
  "Unexpected sign-in token.": "Token hyrjeje i papritur.",
  "The sign-in response couldn't be verified. Please try again.": "Përgjigjja e hyrjes nuk u verifikua dot. Provoni përsëri.",
  "You can close this tab and return to Folio.": "Mund ta mbyllni këtë skedë dhe të ktheheni te Folio.",
  "Sign-in was cancelled.": "Hyrja u anulua.",
  "ChatGPT sign-in failed.": "Hyrja në ChatGPT dështoi.",
  "Couldn't start sign-in.": "Hyrja nuk u nis dot.",
  "Sign-in timed out. Please try again.": "Koha e hyrjes skadoi. Provoni përsëri.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nuk e përfundoi regjistrimin e Folio. Provoni përsëri.",
  "ChatGPT sign-in failed. Please try again.": "Hyrja në ChatGPT dështoi. Provoni përsëri.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Përdorimi i planit ChatGPT nuk u lejua. Hyni përsëri dhe lejojeni Folio të përdorë planin tuaj.",
  "Continue with ChatGPT to use your plan in Folio.": "Vazhdoni me ChatGPT për të përdorur planin tuaj në Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Seanca juaj në ChatGPT përfundoi. Vazhdoni me ChatGPT për t'u rilidhur.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Hyrja juaj në ChatGPT nuk u rifreskua dot. Kontrolloni lidhjen dhe provoni përsëri.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Modelet e ChatGPT nuk u ngarkuan dot ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Përgjigjja u ndërpre. Provoni një pyetje më të shkurtër ose një përzgjedhje më të vogël.",
  "The connection to ChatGPT ended early. Please try again.": "Lidhja me ChatGPT përfundoi para kohe. Provoni përsëri.",
  "You've reached a ChatGPT usage limit.": "Keni arritur një kufi përdorimi të ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT nuk është përkohësisht i disponueshëm. Provoni përsëri pas pak.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nuk e konfirmoi dot planin tuaj. Vazhdoni me ChatGPT për t'u rilidhur.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nuk u përgjigj dot ({status}). Provoni përsëri.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nuk u përgjigj dot. Provoni përsëri.",
  "Claude Code isn't installed.": "Claude Code nuk është i instaluar.",
  "Claude took too long to answer. Please try again.": "Claude e vonoi shumë përgjigjen. Provoni përsëri.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Nuk keni hyrë në Claude Code. Hapni një terminal, ekzekutoni `claude` dhe hyni me llogarinë tuaj Claude.",
  "You've reached your Claude usage limit. {details}": "Keni arritur kufirin e përdorimit të Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code nuk u përgjigj dot.",
  "Another answer is still in progress.": "Një përgjigje tjetër është ende në proces.",
  "Something went wrong.": "Diçka shkoi keq.",
};
