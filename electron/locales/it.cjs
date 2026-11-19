// Italian text for electron/i18n.cjs: English → Italian.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Impossibile salvare questo file nella posizione originale.",
  "Nothing to save.": "Niente da salvare.",
  "Couldn't open file": "Impossibile aprire il file",
  "Couldn't convert “{name}” to PDF. {reason}": "Impossibile convertire “{name}” in PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Impossibile convertire “{name}” in PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Usare la fotocamera per la firma?",
  "Allow Folio to use your camera to capture a signature?": "Consentire a Folio di usare la fotocamera per acquisire una firma?",
  "Camera images are processed on this device. No microphone is requested.": "Le immagini della fotocamera vengono elaborate su questo dispositivo. Non viene richiesto l'accesso al microfono.",
  "Allow camera": "Consenti fotocamera",
  "Cancel": "Annulla",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Chiudi senza salvare",
  "Unsaved changes": "Modifiche non salvate",
  "One or more tabs have unsaved changes.": "Una o più schede contengono modifiche non salvate.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Premi {shortcut} in ogni scheda contrassegnata per salvarla prima di chiudere Folio.",

  // main.cjs: links
  "Open link?": "Aprire il link?",
  "Open this email link in your mail app?": "Aprire questo link email nell'app di posta?",
  "Open {host} in your browser?": "Aprire {host} nel browser?",
  "Open mail app": "Apri app di posta",
  "Open link": "Apri link",
  "Open a local address?": "Aprire un indirizzo locale?",
  "Open {host}?": "Aprire {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Consentire a {origin} di connettersi ai seguenti indirizzi risolti?\n\n{addresses}\n\n{url}",
  "Open": "Apri",

  // main.cjs: opening a link (download)
  "The download timed out.": "Il download ha superato il tempo massimo.",
  "That link redirects too many times.": "Il link esegue troppi reindirizzamenti.",
  "That link redirects somewhere Folio can't open.": "Il link reindirizza a una destinazione che Folio non può aprire.",
  "That link leads to a local network address, so Folio didn't follow it.": "Il link porta a un indirizzo della rete locale, quindi Folio non lo ha seguito.",
  "Couldn't reach {host}.": "Impossibile raggiungere {host}.",
  "The server responded with {status}.": "Il server ha risposto con lo stato {status}.",
  "That PDF is larger than 300 MB.": "Il PDF supera i 300 MB.",
  "The download was interrupted.": "Il download è stato interrotto.",
  "That link isn't a PDF or a webpage.": "Il link non porta né a un PDF né a una pagina web.",
  "That isn't a valid web address.": "Non è un indirizzo web valido.",
  "Only http:// and https:// links can be opened.": "Si possono aprire solo link http:// e https://.",
  "Another link is still opening.": "È ancora in corso l'apertura di un altro link.",
  "Couldn't open a verified connection to {host}.": "Impossibile aprire una connessione verificata con {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "La pagina web convertita supera i 300 MB.",
  "The webpage took too long to load.": "Il caricamento della pagina web ha richiesto troppo tempo.",
  "Couldn't load that webpage ({code}).": "Impossibile caricare la pagina web ({code}).",
  "Couldn't load that webpage.": "Impossibile caricare la pagina web.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} salvato accanto a {original}.",
  "It's larger than 300 MB.": "Il file supera i 300 MB.",
  "It's too large to convert.": "Il file è troppo grande per essere convertito.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Per convertire i file .doc serve Microsoft Word o LibreOffice. Installa uno dei due oppure salva il documento in formato .docx.",
  "The document may be damaged or protected with a password.": "Il documento potrebbe essere danneggiato o protetto da password.",
  "Choose a regular file.": "Scegli un file normale.",
  "The file changed while it was being opened.": "Il file è cambiato durante l'apertura.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Impossibile raggiungere il servizio di accesso di OpenAI.",
  "Unexpected sign-in token.": "Token di accesso imprevisto.",
  "The sign-in response couldn't be verified. Please try again.": "Impossibile verificare la risposta di accesso. Riprova.",
  "You can close this tab and return to Folio.": "Puoi chiudere questa scheda e tornare a Folio.",
  "Sign-in was cancelled.": "L'accesso è stato annullato.",
  "ChatGPT sign-in failed.": "Accesso a ChatGPT non riuscito.",
  "Couldn't start sign-in.": "Impossibile avviare l'accesso.",
  "Sign-in timed out. Please try again.": "Tempo per l'accesso scaduto. Riprova.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT non ha completato la registrazione di Folio. Riprova.",
  "ChatGPT sign-in failed. Please try again.": "Accesso a ChatGPT non riuscito. Riprova.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "L'uso del piano ChatGPT non è stato autorizzato. Accedi di nuovo e consenti a Folio di usare il tuo piano.",
  "Continue with ChatGPT to use your plan in Folio.": "Continua con ChatGPT per usare il tuo piano in Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "La sessione di ChatGPT è terminata. Continua con ChatGPT per riconnetterti.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Impossibile rinnovare l'accesso a ChatGPT. Controlla la connessione e riprova.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Impossibile caricare i modelli ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "La risposta è stata troncata. Prova con una domanda più breve o una selezione più piccola.",
  "The connection to ChatGPT ended early. Please try again.": "La connessione a ChatGPT si è interrotta prima del previsto. Riprova.",
  "You've reached a ChatGPT usage limit.": "Hai raggiunto un limite di utilizzo di ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT non è temporaneamente disponibile. Riprova tra poco.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT non è riuscito a confermare il tuo piano. Continua con ChatGPT per riconnetterti.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT non è riuscito a rispondere ({status}). Riprova.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT non è riuscito a rispondere. Riprova.",
  "Claude Code isn't installed.": "Claude Code non è installato.",
  "Claude took too long to answer. Please try again.": "Claude ha impiegato troppo tempo a rispondere. Riprova.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code non ha effettuato l'accesso. Apri un terminale, esegui `claude` e accedi con il tuo account Claude.",
  "You've reached your Claude usage limit. {details}": "Hai raggiunto il limite di utilizzo di Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code non è riuscito a rispondere.",
  "Another answer is still in progress.": "È ancora in corso un'altra risposta.",
  "Something went wrong.": "Si è verificato un problema.",
};
