// Ukrainian text for electron/i18n.cjs: English → Ukrainian.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Цей файл не можна зберегти в початковому розташуванні.",
  "Nothing to save.": "Немає що зберігати.",
  "Couldn't open file": "Не вдалося відкрити файл",
  "Couldn't convert “{name}” to PDF. {reason}": "Не вдалося перетворити «{name}» на PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Не вдалося перетворити «{name}» на PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Використати камеру для підпису?",
  "Allow Folio to use your camera to capture a signature?": "Дозволити Folio використовувати камеру, щоб сфотографувати підпис?",
  "Camera images are processed on this device. No microphone is requested.": "Зображення з камери обробляються на цьому пристрої. Доступ до мікрофона не запитується.",
  "Allow camera": "Дозволити камеру",
  "Cancel": "Скасувати",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Закрити без збереження",
  "Unsaved changes": "Незбережені зміни",
  "One or more tabs have unsaved changes.": "Одна або кілька вкладок містять незбережені зміни.",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Перед закриттям Folio натисніть {shortcut} у кожній позначеній вкладці, щоб зберегти її.",

  // main.cjs: links
  "Open link?": "Відкрити посилання?",
  "Open this email link in your mail app?": "Відкрити це посилання електронної пошти в поштовій програмі?",
  "Open {host} in your browser?": "Відкрити {host} у браузері?",
  "Open mail app": "Відкрити поштову програму",
  "Open link": "Відкрити посилання",
  "Open a local address?": "Відкрити локальну адресу?",
  "Open {host}?": "Відкрити {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Дозволити {origin} підключитися до таких визначених адрес?\n\n{addresses}\n\n{url}",
  "Open": "Відкрити",

  // main.cjs: opening a link (download)
  "The download timed out.": "Час очікування завантаження минув.",
  "That link redirects too many times.": "Посилання переспрямовує забагато разів.",
  "That link redirects somewhere Folio can't open.": "Посилання переспрямовує туди, що Folio не може відкрити.",
  "That link leads to a local network address, so Folio didn't follow it.": "Посилання веде на адресу в локальній мережі, тому Folio не перейшов за ним.",
  "Couldn't reach {host}.": "Не вдалося зв’язатися з {host}.",
  "The server responded with {status}.": "Сервер відповів зі статусом {status}.",
  "That PDF is larger than 300 MB.": "Цей PDF більший за 300 МБ.",
  "The download was interrupted.": "Завантаження перервано.",
  "That link isn't a PDF or a webpage.": "Посилання не веде ні на PDF, ні на веб-сторінку.",
  "That isn't a valid web address.": "Це неприпустима веб-адреса.",
  "Only http:// and https:// links can be opened.": "Можна відкривати лише посилання http:// і https://.",
  "Another link is still opening.": "Ще відкривається інше посилання.",
  "Couldn't open a verified connection to {host}.": "Не вдалося встановити перевірене підключення до {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Перетворена веб-сторінка більша за 300 МБ.",
  "The webpage took too long to load.": "Веб-сторінка завантажувалася надто довго.",
  "Couldn't load that webpage ({code}).": "Не вдалося завантажити веб-сторінку ({code}).",
  "Couldn't load that webpage.": "Не вдалося завантажити веб-сторінку.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Файл {name} збережено поруч із файлом {original}.",
  "It's larger than 300 MB.": "Файл більший за 300 МБ.",
  "It's too large to convert.": "Файл завеликий для перетворення.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Для перетворення файлів .doc потрібен Microsoft Word або LibreOffice. Інсталюйте одну з цих програм або збережіть документ у форматі .docx.",
  "The document may be damaged or protected with a password.": "Можливо, документ пошкоджено або захищено паролем.",
  "Choose a regular file.": "Виберіть звичайний файл.",
  "The file changed while it was being opened.": "Файл змінився під час відкриття.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Не вдалося зв’язатися зі службою входу OpenAI.",
  "Unexpected sign-in token.": "Неочікуваний маркер входу.",
  "The sign-in response couldn't be verified. Please try again.": "Не вдалося перевірити відповідь на вхід. Спробуйте ще раз.",
  "You can close this tab and return to Folio.": "Можете закрити цю вкладку й повернутися до Folio.",
  "Sign-in was cancelled.": "Вхід скасовано.",
  "ChatGPT sign-in failed.": "Не вдалося ввійти в ChatGPT.",
  "Couldn't start sign-in.": "Не вдалося розпочати вхід.",
  "Sign-in timed out. Please try again.": "Час очікування входу минув. Спробуйте ще раз.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT не завершив реєстрацію Folio. Спробуйте ще раз.",
  "ChatGPT sign-in failed. Please try again.": "Не вдалося ввійти в ChatGPT. Спробуйте ще раз.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Дозвіл на використання плану ChatGPT не надано. Увійдіть знову й дозвольте Folio використовувати ваш план.",
  "Continue with ChatGPT to use your plan in Folio.": "Щоб використовувати свій план у Folio, продовжте через ChatGPT.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Сеанс входу в ChatGPT завершився. Щоб підключитися знову, продовжте через ChatGPT.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Не вдалося оновити вхід у ChatGPT. Перевірте підключення та спробуйте ще раз.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Не вдалося завантажити моделі ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Відповідь обірвано. Спробуйте коротше запитання або менший фрагмент.",
  "The connection to ChatGPT ended early. Please try again.": "Підключення до ChatGPT завершилося передчасно. Спробуйте ще раз.",
  "You've reached a ChatGPT usage limit.": "Ви досягли ліміту використання ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT тимчасово недоступний. Спробуйте ще раз за мить.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT не вдалося підтвердити ваш план. Щоб підключитися знову, продовжте через ChatGPT.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT не вдалося відповісти ({status}). Спробуйте ще раз.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT не вдалося відповісти. Спробуйте ще раз.",
  "Claude Code isn't installed.": "Claude Code не інстальовано.",
  "Claude took too long to answer. Please try again.": "Claude відповідав надто довго. Спробуйте ще раз.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "У Claude Code не виконано вхід. Відкрийте термінал, виконайте `claude` і ввійдіть зі своїм обліковим записом Claude.",
  "You've reached your Claude usage limit. {details}": "Ви досягли ліміту використання Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code не вдалося відповісти.",
  "Another answer is still in progress.": "Ще генерується інша відповідь.",
  "Something went wrong.": "Щось пішло не так.",
};
