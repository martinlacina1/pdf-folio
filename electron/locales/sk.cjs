// Slovak text for electron/i18n.cjs: English → Slovak.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Tento súbor nie je možné uložiť na pôvodné miesto.",
  "Nothing to save.": "Nie je čo uložiť.",
  "Couldn't open file": "Súbor nie je možné otvoriť",
  "Couldn't convert “{name}” to PDF. {reason}": "Súbor „{name}“ nie je možné konvertovať do PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Súbor „{name}“ nie je možné konvertovať do PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Použiť fotoaparát na podpis?",
  "Allow Folio to use your camera to capture a signature?": "Povoliť aplikácii Folio používať fotoaparát na zachytenie podpisu?",
  "Camera images are processed on this device. No microphone is requested.": "Snímky z fotoaparátu sa spracúvajú v tomto zariadení. Prístup k mikrofónu sa nevyžaduje.",
  "Allow camera": "Povoliť fotoaparát",
  "Cancel": "Zrušiť",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Zavrieť bez uloženia",
  "Unsaved changes": "Neuložené zmeny",
  "One or more tabs have unsaved changes.": "Niektoré karty obsahujú neuložené zmeny.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Pred zatvorením aplikácie Folio uložte každú označenú kartu klávesovou skratkou {shortcut}.",

  // main.cjs: links
  "Open link?": "Otvoriť odkaz?",
  "Open this email link in your mail app?": "Otvoriť tento e-mailový odkaz v poštovej aplikácii?",
  "Open {host} in your browser?": "Otvoriť {host} v prehliadači?",
  "Open mail app": "Otvoriť poštovú aplikáciu",
  "Open link": "Otvoriť odkaz",
  "Open a local address?": "Otvoriť lokálnu adresu?",
  "Open {host}?": "Otvoriť {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Povoliť {origin} pripojenie k týmto zisteným adresám?\n\n{addresses}\n\n{url}",
  "Open": "Otvoriť",

  // main.cjs: opening a link (download)
  "The download timed out.": "Časový limit sťahovania vypršal.",
  "That link redirects too many times.": "Odkaz presmerúva príliš veľakrát.",
  "That link redirects somewhere Folio can't open.": "Odkaz presmerúva na miesto, ktoré Folio nedokáže otvoriť.",
  "That link leads to a local network address, so Folio didn't follow it.": "Odkaz vedie na adresu v lokálnej sieti, preto ho Folio neotvorilo.",
  "Couldn't reach {host}.": "Server {host} nie je dostupný.",
  "The server responded with {status}.": "Server odpovedal stavom {status}.",
  "That PDF is larger than 300 MB.": "Tento súbor PDF je väčší ako 300 MB.",
  "The download was interrupted.": "Sťahovanie bolo prerušené.",
  "That link isn't a PDF or a webpage.": "Odkaz nevedie na PDF ani na webovú stránku.",
  "That isn't a valid web address.": "Toto nie je platná webová adresa.",
  "Only http:// and https:// links can be opened.": "Otvoriť je možné len odkazy http:// a https://.",
  "Another link is still opening.": "Ešte sa otvára iný odkaz.",
  "Couldn't open a verified connection to {host}.": "So serverom {host} nie je možné nadviazať overené pripojenie.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Konvertovaná webová stránka je väčšia ako 300 MB.",
  "The webpage took too long to load.": "Načítanie webovej stránky trvalo príliš dlho.",
  "Couldn't load that webpage ({code}).": "Webovú stránku nie je možné načítať ({code}).",
  "Couldn't load that webpage.": "Webovú stránku nie je možné načítať.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Súbor {name} bol uložený vedľa súboru {original}.",
  "It's larger than 300 MB.": "Súbor je väčší ako 300 MB.",
  "It's too large to convert.": "Súbor je príliš veľký na konverziu.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Konverzia súborov .doc vyžaduje Microsoft Word alebo LibreOffice. Nainštalujte jeden z nich alebo dokument uložte ako .docx.",
  "The document may be damaged or protected with a password.": "Dokument je možno poškodený alebo chránený heslom.",
  "Choose a regular file.": "Vyberte bežný súbor.",
  "The file changed while it was being opened.": "Súbor sa počas otvárania zmenil.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Prihlasovacia služba OpenAI nie je dostupná.",
  "Unexpected sign-in token.": "Neočakávaný prihlasovací token.",
  "The sign-in response couldn't be verified. Please try again.": "Odpoveď na prihlásenie nie je možné overiť. Skúste to znova.",
  "You can close this tab and return to Folio.": "Túto kartu môžete zavrieť a vrátiť sa do aplikácie Folio.",
  "Sign-in was cancelled.": "Prihlásenie bolo zrušené.",
  "ChatGPT sign-in failed.": "Prihlásenie do ChatGPT zlyhalo.",
  "Couldn't start sign-in.": "Prihlásenie nie je možné spustiť.",
  "Sign-in timed out. Please try again.": "Časový limit prihlásenia vypršal. Skúste to znova.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nedokončil registráciu aplikácie Folio. Skúste to znova.",
  "ChatGPT sign-in failed. Please try again.": "Prihlásenie do ChatGPT zlyhalo. Skúste to znova.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Používanie plánu ChatGPT nebolo povolené. Prihláste sa znova a povoľte aplikácii Folio používať váš plán.",
  "Continue with ChatGPT to use your plan in Folio.": "Ak chcete v aplikácii Folio používať svoj plán, pokračujte cez ChatGPT.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Vaše prihlásenie do ChatGPT skončilo. Na opätovné pripojenie pokračujte cez ChatGPT.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Prihlásenie do ChatGPT nie je možné obnoviť. Skontrolujte pripojenie a skúste to znova.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Modely ChatGPT nie je možné načítať ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Odpoveď bola skrátená. Skúste kratšiu otázku alebo menší výber.",
  "The connection to ChatGPT ended early. Please try again.": "Pripojenie k ChatGPT bolo predčasne ukončené. Skúste to znova.",
  "You've reached a ChatGPT usage limit.": "Dosiahli ste limit využitia ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT je dočasne nedostupný. Skúste to znova o chvíľu.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nemohol overiť váš plán. Na opätovné pripojenie pokračujte cez ChatGPT.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nemohol odpovedať ({status}). Skúste to znova.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nemohol odpovedať. Skúste to znova.",
  "Claude Code isn't installed.": "Claude Code nie je nainštalovaný.",
  "Claude took too long to answer. Please try again.": "Odpoveď od Claude trvala príliš dlho. Skúste to znova.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code nie je prihlásený. Otvorte terminál, spustite `claude` a prihláste sa účtom Claude.",
  "You've reached your Claude usage limit. {details}": "Dosiahli ste limit využitia Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code nemohol odpovedať.",
  "Another answer is still in progress.": "Ešte sa generuje iná odpoveď.",
  "Something went wrong.": "Niečo sa pokazilo.",
};
