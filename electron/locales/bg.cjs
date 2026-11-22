// Bulgarian text for electron/i18n.cjs: English → Bulgarian.
module.exports = {
  "Save": "Запиши",
  "Save as": "Запиши като",
  "Do you want to save your changes before closing Folio?": "Искате ли да запишете промените, преди да затворите Folio?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Този файл не може да се запише на първоначалното си място.",
  "Nothing to save.": "Няма нищо за записване.",
  "Couldn't open file": "Файлът не може да се отвори",
  "Couldn't convert “{name}” to PDF. {reason}": "„{name}“ не може да се преобразува в PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "„{name}“ не може да се преобразува в PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Да се използва ли камерата за подписа?",
  "Allow Folio to use your camera to capture a signature?": "Да се разреши ли на Folio да използва камерата, за да заснеме подпис?",
  "Camera images are processed on this device. No microphone is requested.": "Изображенията от камерата се обработват на това устройство. Не се изисква достъп до микрофона.",
  "Allow camera": "Разреши камерата",
  "Cancel": "Отказ",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Затвори без записване",
  "Unsaved changes": "Незаписани промени",
  "One or more tabs have unsaved changes.": "Един или повече раздела съдържат незаписани промени.",

  // main.cjs: links
  "Open link?": "Да се отвори ли връзката?",
  "Open this email link in your mail app?": "Да се отвори ли тази имейл връзка в пощенското приложение?",
  "Open {host} in your browser?": "Да се отвори ли {host} в браузъра?",
  "Open mail app": "Отвори пощенското приложение",
  "Open link": "Отвори връзката",
  "Open a local address?": "Да се отвори ли локален адрес?",
  "Open {host}?": "Да се отвори ли {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Да се разреши ли на {origin} да се свърже със следните разрешени адреси?\n\n{addresses}\n\n{url}",
  "Open": "Отвори",

  // main.cjs: opening a link (download)
  "The download timed out.": "Времето за изтегляне изтече.",
  "That link redirects too many times.": "Връзката пренасочва твърде много пъти.",
  "That link redirects somewhere Folio can't open.": "Връзката пренасочва към място, което Folio не може да отвори.",
  "That link leads to a local network address, so Folio didn't follow it.": "Връзката води към адрес в локалната мрежа, затова Folio не я последва.",
  "Couldn't reach {host}.": "Няма връзка с {host}.",
  "The server responded with {status}.": "Сървърът отговори със състояние {status}.",
  "That PDF is larger than 300 MB.": "Този PDF е по-голям от 300 MB.",
  "The download was interrupted.": "Изтеглянето беше прекъснато.",
  "That link isn't a PDF or a webpage.": "Връзката не води нито към PDF, нито към уеб страница.",
  "That isn't a valid web address.": "Това не е валиден уеб адрес.",
  "Only http:// and https:// links can be opened.": "Могат да се отварят само връзки http:// и https://.",
  "Another link is still opening.": "Все още се отваря друга връзка.",
  "Couldn't open a verified connection to {host}.": "Не може да се установи проверена връзка с {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Преобразуваната уеб страница е по-голяма от 300 MB.",
  "The webpage took too long to load.": "Уеб страницата се зарежда твърде дълго.",
  "Couldn't load that webpage ({code}).": "Уеб страницата не може да се зареди ({code}).",
  "Couldn't load that webpage.": "Уеб страницата не може да се зареди.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Файлът {name} е записан до {original}.",
  "It's larger than 300 MB.": "Файлът е по-голям от 300 MB.",
  "It's too large to convert.": "Файлът е твърде голям за преобразуване.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "За преобразуване на файлове .doc е необходим Microsoft Word или LibreOffice. Инсталирайте едно от двете или запишете документа като .docx.",
  "The document may be damaged or protected with a password.": "Документът може да е повреден или защитен с парола.",
  "Choose a regular file.": "Изберете обикновен файл.",
  "The file changed while it was being opened.": "Файлът се промени по време на отварянето.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Няма връзка с услугата за влизане на OpenAI.",
  "Unexpected sign-in token.": "Неочакван токен за влизане.",
  "The sign-in response couldn't be verified. Please try again.": "Отговорът при влизане не може да се провери. Опитайте отново.",
  "You can close this tab and return to Folio.": "Можете да затворите този раздел и да се върнете във Folio.",
  "Sign-in was cancelled.": "Влизането беше отменено.",
  "ChatGPT sign-in failed.": "Влизането в ChatGPT не успя.",
  "Couldn't start sign-in.": "Влизането не може да започне.",
  "Sign-in timed out. Please try again.": "Времето за влизане изтече. Опитайте отново.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT не завърши регистрирането на Folio. Опитайте отново.",
  "ChatGPT sign-in failed. Please try again.": "Влизането в ChatGPT не успя. Опитайте отново.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Не беше дадено разрешение за използване на плана за ChatGPT. Влезте отново и разрешете на Folio да използва плана ви.",
  "Continue with ChatGPT to use your plan in Folio.": "Продължете с ChatGPT, за да използвате плана си във Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Сесията ви в ChatGPT приключи. Продължете с ChatGPT, за да се свържете отново.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Влизането в ChatGPT не може да се поднови. Проверете връзката си и опитайте отново.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Моделите на ChatGPT не могат да се заредят ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Отговорът беше прекъснат. Опитайте с по-кратък въпрос или по-малък откъс.",
  "The connection to ChatGPT ended early. Please try again.": "Връзката с ChatGPT прекъсна преждевременно. Опитайте отново.",
  "You've reached a ChatGPT usage limit.": "Достигнахте ограничение за използване на ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT временно не е наличен. Опитайте отново след малко.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT не успя да потвърди плана ви. Продължете с ChatGPT, за да се свържете отново.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT не успя да отговори ({status}). Опитайте отново.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT не успя да отговори. Опитайте отново.",
  "Claude Code isn't installed.": "Claude Code не е инсталиран.",
  "Claude took too long to answer. Please try again.": "Claude отговаряше твърде дълго. Опитайте отново.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Не сте влезли в Claude Code. Отворете терминал, изпълнете `claude` и влезте със своя акаунт за Claude.",
  "You've reached your Claude usage limit. {details}": "Достигнахте ограничението си за използване на Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code не успя да отговори.",
  "Another answer is still in progress.": "Все още се генерира друг отговор.",
  "Something went wrong.": "Нещо се обърка.",
};
