// Czech text for electron/i18n.cjs: English → Czech.
module.exports = {
  "Save": "Uložit",
  "Save as": "Uložit jako",
  "Do you want to save your changes before closing Folio?": "Chcete před zavřením aplikace Folio uložit změny?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Tento soubor nelze uložit na původní místo.",
  "Nothing to save.": "Není co uložit.",
  "Couldn't open file": "Soubor nelze otevřít",
  "Couldn't convert “{name}” to PDF. {reason}": "Soubor „{name}“ nelze převést do PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Soubor „{name}“ nelze převést do PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Použít kameru pro podpis?",
  "Allow Folio to use your camera to capture a signature?": "Povolit aplikaci Folio použít kameru k zachycení podpisu?",
  "Camera images are processed on this device. No microphone is requested.": "Snímky z kamery se zpracovávají v tomto zařízení. Přístup k mikrofonu se nevyžaduje.",
  "Allow camera": "Povolit kameru",
  "Cancel": "Zrušit",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Zavřít bez uložení",
  "Unsaved changes": "Neuložené změny",
  "One or more tabs have unsaved changes.": "Některé karty obsahují neuložené změny.",

  // main.cjs: links
  "Open link?": "Otevřít odkaz?",
  "Open this email link in your mail app?": "Otevřít tento e-mailový odkaz v poštovní aplikaci?",
  "Open {host} in your browser?": "Otevřít {host} v prohlížeči?",
  "Open mail app": "Otevřít poštovní aplikaci",
  "Open link": "Otevřít odkaz",
  "Open a local address?": "Otevřít místní adresu?",
  "Open {host}?": "Otevřít {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Povolit {origin} připojení k těmto zjištěným adresám?\n\n{addresses}\n\n{url}",
  "Open": "Otevřít",

  // main.cjs: opening a link (download)
  "The download timed out.": "Časový limit stahování vypršel.",
  "That link redirects too many times.": "Odkaz přesměrovává příliš mnohokrát.",
  "That link redirects somewhere Folio can't open.": "Odkaz přesměrovává na místo, které Folio nedokáže otevřít.",
  "That link leads to a local network address, so Folio didn't follow it.": "Odkaz vede na adresu v místní síti, proto ho Folio nenásledovalo.",
  "Couldn't reach {host}.": "Server {host} není dostupný.",
  "The server responded with {status}.": "Server odpověděl stavem {status}.",
  "That PDF is larger than 300 MB.": "Tento PDF soubor je větší než 300 MB.",
  "The download was interrupted.": "Stahování bylo přerušeno.",
  "That link isn't a PDF or a webpage.": "Odkaz nevede na PDF ani na webovou stránku.",
  "That isn't a valid web address.": "Toto není platná webová adresa.",
  "Only http:// and https:// links can be opened.": "Otevřít lze jen odkazy http:// a https://.",
  "Another link is still opening.": "Ještě se otevírá jiný odkaz.",
  "Couldn't open a verified connection to {host}.": "K serveru {host} nelze navázat ověřené připojení.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Převedená webová stránka je větší než 300 MB.",
  "The webpage took too long to load.": "Načítání webové stránky trvalo příliš dlouho.",
  "Couldn't load that webpage ({code}).": "Webovou stránku nelze načíst ({code}).",
  "Couldn't load that webpage.": "Webovou stránku nelze načíst.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Soubor {name} byl uložen vedle souboru {original}.",
  "It's larger than 300 MB.": "Soubor je větší než 300 MB.",
  "It's too large to convert.": "Soubor je příliš velký na převod.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Převod souborů .doc vyžaduje Microsoft Word nebo LibreOffice. Nainstalujte jeden z nich, nebo dokument uložte jako .docx.",
  "The document may be damaged or protected with a password.": "Dokument je možná poškozený nebo chráněný heslem.",
  "Choose a regular file.": "Vyberte běžný soubor.",
  "The file changed while it was being opened.": "Soubor se během otevírání změnil.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Přihlašovací službu OpenAI nelze kontaktovat.",
  "Unexpected sign-in token.": "Neočekávaný přihlašovací token.",
  "The sign-in response couldn't be verified. Please try again.": "Odpověď na přihlášení nelze ověřit. Zkuste to prosím znovu.",
  "You can close this tab and return to Folio.": "Tuto kartu můžete zavřít a vrátit se do aplikace Folio.",
  "Sign-in was cancelled.": "Přihlášení bylo zrušeno.",
  "ChatGPT sign-in failed.": "Přihlášení do ChatGPT se nezdařilo.",
  "Couldn't start sign-in.": "Přihlášení nelze zahájit.",
  "Sign-in timed out. Please try again.": "Časový limit přihlášení vypršel. Zkuste to prosím znovu.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT nedokončil registraci aplikace Folio. Zkuste to prosím znovu.",
  "ChatGPT sign-in failed. Please try again.": "Přihlášení do ChatGPT se nezdařilo. Zkuste to prosím znovu.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Použití vašeho plánu ChatGPT nebylo povoleno. Přihlaste se znovu a povolte aplikaci Folio váš plán používat.",
  "Continue with ChatGPT to use your plan in Folio.": "Chcete-li v aplikaci Folio používat svůj plán, pokračujte přes ChatGPT.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Vaše přihlášení do ChatGPT skončilo. Pro opětovné připojení pokračujte přes ChatGPT.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Přihlášení do ChatGPT nelze obnovit. Zkontrolujte připojení a zkuste to znovu.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Modely ChatGPT nelze načíst ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Odpověď byla zkrácena. Zkuste kratší otázku nebo menší výběr.",
  "The connection to ChatGPT ended early. Please try again.": "Připojení k ChatGPT bylo předčasně ukončeno. Zkuste to prosím znovu.",
  "You've reached a ChatGPT usage limit.": "Dosáhli jste limitu využití ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT je dočasně nedostupný. Zkuste to prosím za chvíli znovu.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT nemohl ověřit váš plán. Pro opětovné připojení pokračujte přes ChatGPT.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT nemohl odpovědět ({status}). Zkuste to prosím znovu.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT nemohl odpovědět. Zkuste to prosím znovu.",
  "Claude Code isn't installed.": "Claude Code není nainstalován.",
  "Claude took too long to answer. Please try again.": "Odpověď od Claude trvala příliš dlouho. Zkuste to prosím znovu.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code není přihlášen. Otevřete terminál, spusťte `claude` a přihlaste se účtem Claude.",
  "You've reached your Claude usage limit. {details}": "Dosáhli jste limitu využití Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code nemohl odpovědět.",
  "Another answer is still in progress.": "Ještě se generuje jiná odpověď.",
  "Something went wrong.": "Něco se pokazilo.",
};
