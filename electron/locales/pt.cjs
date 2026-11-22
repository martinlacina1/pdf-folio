// Brazilian Portuguese text for electron/i18n.cjs: English → Portuguese.
module.exports = {
  "Save": "Salvar",
  "Save as": "Salvar como",
  "Do you want to save your changes before closing Folio?": "Deseja salvar suas alterações antes de fechar o Folio?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Este arquivo não pode ser salvo no local original.",
  "Nothing to save.": "Nada para salvar.",
  "Couldn't open file": "Não foi possível abrir o arquivo",
  "Couldn't convert “{name}” to PDF. {reason}": "Não foi possível converter “{name}” em PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Não foi possível converter “{name}” em PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Usar a câmera para a assinatura?",
  "Allow Folio to use your camera to capture a signature?": "Permitir que o Folio use sua câmera para capturar uma assinatura?",
  "Camera images are processed on this device. No microphone is requested.": "As imagens da câmera são processadas neste dispositivo. Nenhum acesso ao microfone é solicitado.",
  "Allow camera": "Permitir câmera",
  "Cancel": "Cancelar",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Fechar sem salvar",
  "Unsaved changes": "Alterações não salvas",
  "One or more tabs have unsaved changes.": "Uma ou mais guias têm alterações não salvas.",

  // main.cjs: links
  "Open link?": "Abrir link?",
  "Open this email link in your mail app?": "Abrir este link de email no seu aplicativo de email?",
  "Open {host} in your browser?": "Abrir {host} no navegador?",
  "Open mail app": "Abrir aplicativo de email",
  "Open link": "Abrir link",
  "Open a local address?": "Abrir um endereço local?",
  "Open {host}?": "Abrir {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Permitir que {origin} se conecte aos seguintes endereços resolvidos?\n\n{addresses}\n\n{url}",
  "Open": "Abrir",

  // main.cjs: opening a link (download)
  "The download timed out.": "O tempo limite do download expirou.",
  "That link redirects too many times.": "Esse link redireciona vezes demais.",
  "That link redirects somewhere Folio can't open.": "Esse link redireciona para um local que o Folio não consegue abrir.",
  "That link leads to a local network address, so Folio didn't follow it.": "Esse link leva a um endereço da rede local, por isso o Folio não o seguiu.",
  "Couldn't reach {host}.": "Não foi possível acessar {host}.",
  "The server responded with {status}.": "O servidor respondeu com {status}.",
  "That PDF is larger than 300 MB.": "Esse PDF tem mais de 300 MB.",
  "The download was interrupted.": "O download foi interrompido.",
  "That link isn't a PDF or a webpage.": "Esse link não é um PDF nem uma página da Web.",
  "That isn't a valid web address.": "Esse não é um endereço da Web válido.",
  "Only http:// and https:// links can be opened.": "Somente links http:// e https:// podem ser abertos.",
  "Another link is still opening.": "Outro link ainda está sendo aberto.",
  "Couldn't open a verified connection to {host}.": "Não foi possível abrir uma conexão verificada com {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "A página da Web convertida tem mais de 300 MB.",
  "The webpage took too long to load.": "A página da Web demorou demais para carregar.",
  "Couldn't load that webpage ({code}).": "Não foi possível carregar essa página da Web ({code}).",
  "Couldn't load that webpage.": "Não foi possível carregar essa página da Web.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} foi salvo ao lado de {original}.",
  "It's larger than 300 MB.": "O arquivo tem mais de 300 MB.",
  "It's too large to convert.": "O arquivo é grande demais para converter.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "A conversão de arquivos .doc requer o Microsoft Word ou o LibreOffice. Instale um deles ou salve o documento como .docx.",
  "The document may be damaged or protected with a password.": "O documento pode estar danificado ou protegido por senha.",
  "Choose a regular file.": "Escolha um arquivo comum.",
  "The file changed while it was being opened.": "O arquivo foi alterado enquanto era aberto.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Não foi possível acessar o serviço de login da OpenAI.",
  "Unexpected sign-in token.": "Token de login inesperado.",
  "The sign-in response couldn't be verified. Please try again.": "Não foi possível verificar a resposta de login. Tente novamente.",
  "You can close this tab and return to Folio.": "Você pode fechar esta guia e voltar ao Folio.",
  "Sign-in was cancelled.": "O login foi cancelado.",
  "ChatGPT sign-in failed.": "Falha ao entrar com o ChatGPT.",
  "Couldn't start sign-in.": "Não foi possível iniciar o login.",
  "Sign-in timed out. Please try again.": "O tempo limite do login expirou. Tente novamente.",
  "ChatGPT didn't finish registering Folio. Please try again.": "O ChatGPT não concluiu o registro do Folio. Tente novamente.",
  "ChatGPT sign-in failed. Please try again.": "Falha ao entrar com o ChatGPT. Tente novamente.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "O uso do plano do ChatGPT não foi autorizado. Entre novamente e permita que o Folio use seu plano.",
  "Continue with ChatGPT to use your plan in Folio.": "Continue com o ChatGPT para usar seu plano no Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Sua sessão do ChatGPT terminou. Continue com o ChatGPT para se reconectar.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Não foi possível renovar sua sessão do ChatGPT. Verifique sua conexão e tente novamente.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Não foi possível carregar os modelos do ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "A resposta foi interrompida. Tente uma pergunta mais curta ou uma seleção menor.",
  "The connection to ChatGPT ended early. Please try again.": "A conexão com o ChatGPT terminou antes do tempo. Tente novamente.",
  "You've reached a ChatGPT usage limit.": "Você atingiu um limite de uso do ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "O ChatGPT está temporariamente indisponível. Tente novamente em instantes.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "O ChatGPT não conseguiu confirmar seu plano. Continue com o ChatGPT para se reconectar.",
  "ChatGPT couldn't answer ({status}). Please try again.": "O ChatGPT não conseguiu responder ({status}). Tente novamente.",
  "ChatGPT couldn't answer. Please try again.": "O ChatGPT não conseguiu responder. Tente novamente.",
  "Claude Code isn't installed.": "O Claude Code não está instalado.",
  "Claude took too long to answer. Please try again.": "O Claude demorou demais para responder. Tente novamente.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "O Claude Code não está conectado. Abra um terminal, execute `claude` e entre com sua conta Claude.",
  "You've reached your Claude usage limit. {details}": "Você atingiu seu limite de uso do Claude. {details}",
  "Claude Code couldn't answer.": "O Claude Code não conseguiu responder.",
  "Another answer is still in progress.": "Outra resposta ainda está em andamento.",
  "Something went wrong.": "Algo deu errado.",
};
