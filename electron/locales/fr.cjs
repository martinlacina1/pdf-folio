// French text for electron/i18n.cjs: English → French.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Ce fichier ne peut pas être enregistré à son emplacement d’origine.",
  "Nothing to save.": "Rien à enregistrer.",
  "Couldn't open file": "Impossible d’ouvrir le fichier",
  "Couldn't convert “{name}” to PDF. {reason}": "Impossible de convertir « {name} » en PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Impossible de convertir « {name} » en PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Utiliser la caméra pour la signature ?",
  "Allow Folio to use your camera to capture a signature?": "Autoriser Folio à utiliser votre caméra pour capturer une signature ?",
  "Camera images are processed on this device. No microphone is requested.": "Les images de la caméra sont traitées sur cet appareil. Aucun accès au micro n’est demandé.",
  "Allow camera": "Autoriser la caméra",
  "Cancel": "Annuler",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Fermer sans enregistrer",
  "Unsaved changes": "Modifications non enregistrées",
  "One or more tabs have unsaved changes.": "Un ou plusieurs onglets contiennent des modifications non enregistrées.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Appuyez sur {shortcut} dans chaque onglet signalé pour l’enregistrer avant de fermer Folio.",

  // main.cjs: links
  "Open link?": "Ouvrir le lien ?",
  "Open this email link in your mail app?": "Ouvrir ce lien e-mail dans votre application de messagerie ?",
  "Open {host} in your browser?": "Ouvrir {host} dans votre navigateur ?",
  "Open mail app": "Ouvrir la messagerie",
  "Open link": "Ouvrir le lien",
  "Open a local address?": "Ouvrir une adresse locale ?",
  "Open {host}?": "Ouvrir {host} ?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Autoriser {origin} à se connecter aux adresses résolues suivantes ?\n\n{addresses}\n\n{url}",
  "Open": "Ouvrir",

  // main.cjs: opening a link (download)
  "The download timed out.": "Le délai de téléchargement a expiré.",
  "That link redirects too many times.": "Ce lien effectue trop de redirections.",
  "That link redirects somewhere Folio can't open.": "Ce lien redirige vers une destination que Folio ne peut pas ouvrir.",
  "That link leads to a local network address, so Folio didn't follow it.": "Ce lien mène à une adresse du réseau local, Folio ne l’a donc pas suivi.",
  "Couldn't reach {host}.": "Impossible de joindre {host}.",
  "The server responded with {status}.": "Le serveur a répondu avec le code {status}.",
  "That PDF is larger than 300 MB.": "Ce PDF dépasse 300 Mo.",
  "The download was interrupted.": "Le téléchargement a été interrompu.",
  "That link isn't a PDF or a webpage.": "Ce lien ne mène ni à un PDF ni à une page web.",
  "That isn't a valid web address.": "Ce n’est pas une adresse web valide.",
  "Only http:// and https:// links can be opened.": "Seuls les liens http:// et https:// peuvent être ouverts.",
  "Another link is still opening.": "Un autre lien est en cours d’ouverture.",
  "Couldn't open a verified connection to {host}.": "Impossible d’établir une connexion vérifiée avec {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "La page web convertie dépasse 300 Mo.",
  "The webpage took too long to load.": "Le chargement de la page web a pris trop de temps.",
  "Couldn't load that webpage ({code}).": "Impossible de charger cette page web ({code}).",
  "Couldn't load that webpage.": "Impossible de charger cette page web.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} a été enregistré à côté de {original}.",
  "It's larger than 300 MB.": "Le fichier dépasse 300 Mo.",
  "It's too large to convert.": "Le fichier est trop volumineux pour être converti.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "La conversion des fichiers .doc nécessite Microsoft Word ou LibreOffice. Installez l’un des deux ou enregistrez le document au format .docx.",
  "The document may be damaged or protected with a password.": "Le document est peut-être endommagé ou protégé par un mot de passe.",
  "Choose a regular file.": "Choisissez un fichier ordinaire.",
  "The file changed while it was being opened.": "Le fichier a été modifié pendant son ouverture.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Impossible de joindre le service de connexion d’OpenAI.",
  "Unexpected sign-in token.": "Jeton de connexion inattendu.",
  "The sign-in response couldn't be verified. Please try again.": "La réponse de connexion n’a pas pu être vérifiée. Veuillez réessayer.",
  "You can close this tab and return to Folio.": "Vous pouvez fermer cet onglet et revenir à Folio.",
  "Sign-in was cancelled.": "La connexion a été annulée.",
  "ChatGPT sign-in failed.": "Échec de la connexion à ChatGPT.",
  "Couldn't start sign-in.": "Impossible de lancer la connexion.",
  "Sign-in timed out. Please try again.": "Le délai de connexion a expiré. Veuillez réessayer.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT n’a pas terminé l’enregistrement de Folio. Veuillez réessayer.",
  "ChatGPT sign-in failed. Please try again.": "Échec de la connexion à ChatGPT. Veuillez réessayer.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "L’utilisation de votre forfait ChatGPT n’a pas été autorisée. Reconnectez-vous et autorisez Folio à utiliser votre forfait.",
  "Continue with ChatGPT to use your plan in Folio.": "Continuez avec ChatGPT pour utiliser votre forfait dans Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Votre connexion à ChatGPT a expiré. Continuez avec ChatGPT pour vous reconnecter.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Impossible d’actualiser votre connexion à ChatGPT. Vérifiez votre connexion et réessayez.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Impossible de charger les modèles ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "La réponse a été tronquée. Essayez une question plus courte ou une sélection plus petite.",
  "The connection to ChatGPT ended early. Please try again.": "La connexion à ChatGPT s’est interrompue prématurément. Veuillez réessayer.",
  "You've reached a ChatGPT usage limit.": "Vous avez atteint une limite d’utilisation de ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT est temporairement indisponible. Veuillez réessayer dans un instant.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT n’a pas pu confirmer votre forfait. Continuez avec ChatGPT pour vous reconnecter.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT n’a pas pu répondre ({status}). Veuillez réessayer.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT n’a pas pu répondre. Veuillez réessayer.",
  "Claude Code isn't installed.": "Claude Code n’est pas installé.",
  "Claude took too long to answer. Please try again.": "Claude a mis trop de temps à répondre. Veuillez réessayer.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code n’est pas connecté. Ouvrez un terminal, exécutez `claude`, puis connectez-vous avec votre compte Claude.",
  "You've reached your Claude usage limit. {details}": "Vous avez atteint votre limite d’utilisation de Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code n’a pas pu répondre.",
  "Another answer is still in progress.": "Une autre réponse est encore en cours.",
  "Something went wrong.": "Une erreur s’est produite.",
};
