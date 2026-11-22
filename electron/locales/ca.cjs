// Catalan text for electron/i18n.cjs: English → Catalan.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Aquest fitxer no es pot desar a la ubicació original.",
  "Nothing to save.": "No hi ha res per desar.",
  "Couldn't open file": "No s'ha pogut obrir el fitxer",
  "Couldn't convert “{name}” to PDF. {reason}": "No s'ha pogut convertir «{name}» a PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "No s'ha pogut convertir «{name}» a PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Vols utilitzar la càmera per a la signatura?",
  "Allow Folio to use your camera to capture a signature?": "Vols permetre que Folio utilitzi la càmera per capturar una signatura?",
  "Camera images are processed on this device. No microphone is requested.": "Les imatges de la càmera es processen en aquest dispositiu. No es demana accés al micròfon.",
  "Allow camera": "Permetre la càmera",
  "Cancel": "Cancel·lar",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Tancar sense desar",
  "Unsaved changes": "Canvis no desats",
  "One or more tabs have unsaved changes.": "Una o més pestanyes tenen canvis no desats.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Prem {shortcut} a cada pestanya marcada per desar-la abans de tancar Folio.",

  // main.cjs: links
  "Open link?": "Vols obrir l'enllaç?",
  "Open this email link in your mail app?": "Vols obrir aquest enllaç de correu a l'aplicació de correu?",
  "Open {host} in your browser?": "Vols obrir {host} al navegador?",
  "Open mail app": "Obrir l'aplicació de correu",
  "Open link": "Obrir l'enllaç",
  "Open a local address?": "Vols obrir una adreça local?",
  "Open {host}?": "Vols obrir {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Vols permetre que {origin} es connecti a les adreces resoltes següents?\n\n{addresses}\n\n{url}",
  "Open": "Obrir",

  // main.cjs: opening a link (download)
  "The download timed out.": "S'ha esgotat el temps d'espera de la baixada.",
  "That link redirects too many times.": "Aquest enllaç redirigeix massa vegades.",
  "That link redirects somewhere Folio can't open.": "Aquest enllaç redirigeix a un lloc que Folio no pot obrir.",
  "That link leads to a local network address, so Folio didn't follow it.": "Aquest enllaç porta a una adreça de la xarxa local, per això Folio no l'ha seguit.",
  "Couldn't reach {host}.": "No s'ha pogut connectar amb {host}.",
  "The server responded with {status}.": "El servidor ha respost amb l'estat {status}.",
  "That PDF is larger than 300 MB.": "Aquest PDF ocupa més de 300 MB.",
  "The download was interrupted.": "S'ha interromput la baixada.",
  "That link isn't a PDF or a webpage.": "Aquest enllaç no és ni un PDF ni una pàgina web.",
  "That isn't a valid web address.": "Aquesta no és una adreça web vàlida.",
  "Only http:// and https:// links can be opened.": "Només es poden obrir enllaços http:// i https://.",
  "Another link is still opening.": "Encara s'està obrint un altre enllaç.",
  "Couldn't open a verified connection to {host}.": "No s'ha pogut establir una connexió verificada amb {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "La pàgina web convertida ocupa més de 300 MB.",
  "The webpage took too long to load.": "La pàgina web ha trigat massa a carregar-se.",
  "Couldn't load that webpage ({code}).": "No s'ha pogut carregar la pàgina web ({code}).",
  "Couldn't load that webpage.": "No s'ha pogut carregar la pàgina web.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "S'ha desat {name} al costat de {original}.",
  "It's larger than 300 MB.": "Ocupa més de 300 MB.",
  "It's too large to convert.": "És massa gran per convertir-lo.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Per convertir fitxers .doc cal Microsoft Word o LibreOffice. Instal·la'n un o desa el document com a .docx.",
  "The document may be damaged or protected with a password.": "És possible que el document estigui malmès o protegit amb contrasenya.",
  "Choose a regular file.": "Tria un fitxer normal.",
  "The file changed while it was being opened.": "El fitxer ha canviat mentre s'obria.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "No s'ha pogut connectar amb el servei d'inici de sessió d'OpenAI.",
  "Unexpected sign-in token.": "Testimoni d'inici de sessió inesperat.",
  "The sign-in response couldn't be verified. Please try again.": "No s'ha pogut verificar la resposta d'inici de sessió. Torna-ho a provar.",
  "You can close this tab and return to Folio.": "Pots tancar aquesta pestanya i tornar a Folio.",
  "Sign-in was cancelled.": "S'ha cancel·lat l'inici de sessió.",
  "ChatGPT sign-in failed.": "No s'ha pogut iniciar la sessió a ChatGPT.",
  "Couldn't start sign-in.": "No s'ha pogut començar l'inici de sessió.",
  "Sign-in timed out. Please try again.": "S'ha esgotat el temps d'espera de l'inici de sessió. Torna-ho a provar.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT no ha acabat de registrar Folio. Torna-ho a provar.",
  "ChatGPT sign-in failed. Please try again.": "No s'ha pogut iniciar la sessió a ChatGPT. Torna-ho a provar.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "No s'ha concedit l'ús del pla de ChatGPT. Torna a iniciar la sessió i permet que Folio utilitzi el teu pla.",
  "Continue with ChatGPT to use your plan in Folio.": "Continua amb ChatGPT per utilitzar el teu pla a Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "La sessió de ChatGPT ha finalitzat. Continua amb ChatGPT per tornar-te a connectar.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "No s'ha pogut actualitzar la sessió de ChatGPT. Comprova la connexió i torna-ho a provar.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "No s'han pogut carregar els models de ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "La resposta s'ha tallat. Prova una pregunta més curta o una selecció més petita.",
  "The connection to ChatGPT ended early. Please try again.": "La connexió amb ChatGPT s'ha tancat abans d'hora. Torna-ho a provar.",
  "You've reached a ChatGPT usage limit.": "Has arribat a un límit d'ús de ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT no està disponible temporalment. Torna-ho a provar d'aquí a una estona.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT no ha pogut confirmar el teu pla. Continua amb ChatGPT per tornar-te a connectar.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT no ha pogut respondre ({status}). Torna-ho a provar.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT no ha pogut respondre. Torna-ho a provar.",
  "Claude Code isn't installed.": "Claude Code no està instal·lat.",
  "Claude took too long to answer. Please try again.": "Claude ha trigat massa a respondre. Torna-ho a provar.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "No s'ha iniciat la sessió a Claude Code. Obre un terminal, executa `claude` i inicia la sessió amb el teu compte de Claude.",
  "You've reached your Claude usage limit. {details}": "Has arribat al límit d'ús de Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code no ha pogut respondre.",
  "Another answer is still in progress.": "Encara s'està generant una altra resposta.",
  "Something went wrong.": "Alguna cosa ha anat malament.",
};
