// Spanish text for electron/i18n.cjs: English → Spanish.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Este archivo no se puede guardar en su ubicación original.",
  "Nothing to save.": "No hay nada que guardar.",
  "Couldn't open file": "No se pudo abrir el archivo",
  "Couldn't convert “{name}” to PDF. {reason}": "No se pudo convertir “{name}” a PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "No se pudo convertir “{name}” a PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "¿Usar la cámara para la firma?",
  "Allow Folio to use your camera to capture a signature?": "¿Permitir que Folio use la cámara para capturar una firma?",
  "Camera images are processed on this device. No microphone is requested.": "Las imágenes de la cámara se procesan en este dispositivo. No se solicita acceso al micrófono.",
  "Allow camera": "Permitir cámara",
  "Cancel": "Cancelar",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Cerrar sin guardar",
  "Unsaved changes": "Cambios sin guardar",
  "One or more tabs have unsaved changes.": "Una o varias pestañas tienen cambios sin guardar.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Pulsa {shortcut} en cada pestaña marcada para guardarla antes de cerrar Folio.",

  // main.cjs: links
  "Open link?": "¿Abrir el enlace?",
  "Open this email link in your mail app?": "¿Abrir este enlace de correo en tu app de correo?",
  "Open {host} in your browser?": "¿Abrir {host} en tu navegador?",
  "Open mail app": "Abrir app de correo",
  "Open link": "Abrir enlace",
  "Open a local address?": "¿Abrir una dirección local?",
  "Open {host}?": "¿Abrir {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "¿Permitir que {origin} se conecte a las siguientes direcciones resueltas?\n\n{addresses}\n\n{url}",
  "Open": "Abrir",

  // main.cjs: opening a link (download)
  "The download timed out.": "Se agotó el tiempo de espera de la descarga.",
  "That link redirects too many times.": "Ese enlace redirige demasiadas veces.",
  "That link redirects somewhere Folio can't open.": "Ese enlace redirige a un lugar que Folio no puede abrir.",
  "That link leads to a local network address, so Folio didn't follow it.": "Ese enlace lleva a una dirección de la red local, así que Folio no lo siguió.",
  "Couldn't reach {host}.": "No se pudo conectar con {host}.",
  "The server responded with {status}.": "El servidor respondió con el estado {status}.",
  "That PDF is larger than 300 MB.": "Ese PDF ocupa más de 300 MB.",
  "The download was interrupted.": "La descarga se interrumpió.",
  "That link isn't a PDF or a webpage.": "Ese enlace no es un PDF ni una página web.",
  "That isn't a valid web address.": "Esa no es una dirección web válida.",
  "Only http:// and https:// links can be opened.": "Solo se pueden abrir enlaces http:// y https://.",
  "Another link is still opening.": "Todavía se está abriendo otro enlace.",
  "Couldn't open a verified connection to {host}.": "No se pudo abrir una conexión verificada con {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "La página web convertida ocupa más de 300 MB.",
  "The webpage took too long to load.": "La página web tardó demasiado en cargarse.",
  "Couldn't load that webpage ({code}).": "No se pudo cargar esa página web ({code}).",
  "Couldn't load that webpage.": "No se pudo cargar esa página web.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Se guardó {name} junto a {original}.",
  "It's larger than 300 MB.": "Ocupa más de 300 MB.",
  "It's too large to convert.": "Es demasiado grande para convertirlo.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Para convertir archivos .doc se necesita Microsoft Word o LibreOffice. Instala cualquiera de los dos o guarda el documento como .docx.",
  "The document may be damaged or protected with a password.": "Es posible que el documento esté dañado o protegido con contraseña.",
  "Choose a regular file.": "Elige un archivo normal.",
  "The file changed while it was being opened.": "El archivo cambió mientras se abría.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "No se pudo conectar con el servicio de inicio de sesión de OpenAI.",
  "Unexpected sign-in token.": "Token de inicio de sesión inesperado.",
  "The sign-in response couldn't be verified. Please try again.": "No se pudo verificar la respuesta de inicio de sesión. Inténtalo de nuevo.",
  "You can close this tab and return to Folio.": "Puedes cerrar esta pestaña y volver a Folio.",
  "Sign-in was cancelled.": "Se canceló el inicio de sesión.",
  "ChatGPT sign-in failed.": "No se pudo iniciar sesión en ChatGPT.",
  "Couldn't start sign-in.": "No se pudo iniciar el inicio de sesión.",
  "Sign-in timed out. Please try again.": "Se agotó el tiempo para iniciar sesión. Inténtalo de nuevo.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT no terminó de registrar Folio. Inténtalo de nuevo.",
  "ChatGPT sign-in failed. Please try again.": "No se pudo iniciar sesión en ChatGPT. Inténtalo de nuevo.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "No se concedió el uso del plan de ChatGPT. Vuelve a iniciar sesión y permite que Folio use tu plan.",
  "Continue with ChatGPT to use your plan in Folio.": "Continúa con ChatGPT para usar tu plan en Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Tu sesión de ChatGPT ha finalizado. Continúa con ChatGPT para volver a conectarte.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "No se pudo renovar tu sesión de ChatGPT. Comprueba tu conexión e inténtalo de nuevo.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "No se pudieron cargar los modelos de ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "La respuesta quedó incompleta. Prueba con una pregunta más corta o una selección más pequeña.",
  "The connection to ChatGPT ended early. Please try again.": "La conexión con ChatGPT terminó antes de tiempo. Inténtalo de nuevo.",
  "You've reached a ChatGPT usage limit.": "Has alcanzado un límite de uso de ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT no está disponible temporalmente. Inténtalo de nuevo en un momento.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT no pudo confirmar tu plan. Continúa con ChatGPT para volver a conectarte.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT no pudo responder ({status}). Inténtalo de nuevo.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT no pudo responder. Inténtalo de nuevo.",
  "Claude Code isn't installed.": "Claude Code no está instalado.",
  "Claude took too long to answer. Please try again.": "Claude tardó demasiado en responder. Inténtalo de nuevo.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code no tiene la sesión iniciada. Abre un terminal, ejecuta `claude` e inicia sesión con tu cuenta de Claude.",
  "You've reached your Claude usage limit. {details}": "Has alcanzado tu límite de uso de Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code no pudo responder.",
  "Another answer is still in progress.": "Todavía se está generando otra respuesta.",
  "Something went wrong.": "Algo salió mal.",
};
