// Russian text for electron/i18n.cjs: English → Russian.
module.exports = {
  "Save": "Сохранить",
  "Save as": "Сохранить как",
  "Do you want to save your changes before closing Folio?": "Сохранить изменения перед закрытием Folio?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Этот файл нельзя сохранить в исходном расположении.",
  "Nothing to save.": "Нечего сохранять.",
  "Couldn't open file": "Не удалось открыть файл",
  "Couldn't convert “{name}” to PDF. {reason}": "Не удалось преобразовать «{name}» в PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Не удалось преобразовать «{name}» в PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Использовать камеру для подписи?",
  "Allow Folio to use your camera to capture a signature?": "Разрешить Folio использовать камеру для съемки подписи?",
  "Camera images are processed on this device. No microphone is requested.": "Изображения с камеры обрабатываются на этом устройстве. Доступ к микрофону не запрашивается.",
  "Allow camera": "Разрешить камеру",
  "Cancel": "Отмена",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Закрыть без сохранения",
  "Unsaved changes": "Несохраненные изменения",
  "One or more tabs have unsaved changes.": "В одной или нескольких вкладках есть несохраненные изменения.",

  // main.cjs: links
  "Open link?": "Открыть ссылку?",
  "Open this email link in your mail app?": "Открыть эту ссылку на адрес электронной почты в почтовом приложении?",
  "Open {host} in your browser?": "Открыть {host} в браузере?",
  "Open mail app": "Открыть почтовое приложение",
  "Open link": "Открыть ссылку",
  "Open a local address?": "Открыть локальный адрес?",
  "Open {host}?": "Открыть {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Разрешить {origin} подключаться к следующим разрешенным адресам?\n\n{addresses}\n\n{url}",
  "Open": "Открыть",

  // main.cjs: opening a link (download)
  "The download timed out.": "Время ожидания скачивания истекло.",
  "That link redirects too many times.": "Эта ссылка перенаправляет слишком много раз.",
  "That link redirects somewhere Folio can't open.": "Эта ссылка перенаправляет туда, что Folio не может открыть.",
  "That link leads to a local network address, so Folio didn't follow it.": "Эта ссылка ведет на адрес в локальной сети, поэтому Folio не стал по ней переходить.",
  "Couldn't reach {host}.": "Не удалось связаться с {host}.",
  "The server responded with {status}.": "Сервер вернул код {status}.",
  "That PDF is larger than 300 MB.": "Этот PDF больше 300 МБ.",
  "The download was interrupted.": "Скачивание прервано.",
  "That link isn't a PDF or a webpage.": "Эта ссылка не ведет ни на PDF, ни на веб-страницу.",
  "That isn't a valid web address.": "Это недопустимый веб-адрес.",
  "Only http:// and https:// links can be opened.": "Можно открывать только ссылки http:// и https://.",
  "Another link is still opening.": "Другая ссылка еще открывается.",
  "Couldn't open a verified connection to {host}.": "Не удалось установить проверенное подключение к {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Преобразованная веб-страница больше 300 МБ.",
  "The webpage took too long to load.": "Веб-страница загружалась слишком долго.",
  "Couldn't load that webpage ({code}).": "Не удалось загрузить веб-страницу ({code}).",
  "Couldn't load that webpage.": "Не удалось загрузить веб-страницу.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Файл {name} сохранен рядом с файлом {original}.",
  "It's larger than 300 MB.": "Файл больше 300 МБ.",
  "It's too large to convert.": "Файл слишком велик для преобразования.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Для преобразования файлов .doc нужен Microsoft Word или LibreOffice. Установите одну из этих программ или сохраните документ в формате .docx.",
  "The document may be damaged or protected with a password.": "Возможно, документ поврежден или защищен паролем.",
  "Choose a regular file.": "Выберите обычный файл.",
  "The file changed while it was being opened.": "Файл изменился во время открытия.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Не удалось связаться со службой входа OpenAI.",
  "Unexpected sign-in token.": "Непредвиденный токен входа.",
  "The sign-in response couldn't be verified. Please try again.": "Не удалось проверить ответ на вход. Повторите попытку.",
  "You can close this tab and return to Folio.": "Можно закрыть эту вкладку и вернуться в Folio.",
  "Sign-in was cancelled.": "Вход отменен.",
  "ChatGPT sign-in failed.": "Не удалось войти через ChatGPT.",
  "Couldn't start sign-in.": "Не удалось начать вход.",
  "Sign-in timed out. Please try again.": "Время ожидания входа истекло. Повторите попытку.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT не завершил регистрацию Folio. Повторите попытку.",
  "ChatGPT sign-in failed. Please try again.": "Не удалось войти через ChatGPT. Повторите попытку.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Разрешение на использование тарифа ChatGPT не предоставлено. Войдите снова и разрешите Folio использовать ваш тариф.",
  "Continue with ChatGPT to use your plan in Folio.": "Чтобы использовать свой тариф в Folio, продолжите через ChatGPT.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Сеанс ChatGPT завершен. Чтобы подключиться снова, продолжите через ChatGPT.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Не удалось обновить сеанс ChatGPT. Проверьте подключение и повторите попытку.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Не удалось загрузить модели ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Ответ был обрезан. Попробуйте задать вопрос короче или выделить меньший фрагмент.",
  "The connection to ChatGPT ended early. Please try again.": "Подключение к ChatGPT прервалось раньше времени. Повторите попытку.",
  "You've reached a ChatGPT usage limit.": "Вы достигли лимита использования ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT временно недоступен. Повторите попытку чуть позже.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT не удалось подтвердить ваш тариф. Чтобы подключиться снова, продолжите через ChatGPT.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT не удалось ответить ({status}). Повторите попытку.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT не удалось ответить. Повторите попытку.",
  "Claude Code isn't installed.": "Claude Code не установлен.",
  "Claude took too long to answer. Please try again.": "Claude отвечал слишком долго. Повторите попытку.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "В Claude Code не выполнен вход. Откройте терминал, выполните `claude` и войдите с учетной записью Claude.",
  "You've reached your Claude usage limit. {details}": "Вы достигли лимита использования Claude. {details}",
  "Claude Code couldn't answer.": "Claude Code не удалось ответить.",
  "Another answer is still in progress.": "Еще формируется другой ответ.",
  "Something went wrong.": "Что-то пошло не так.",
};
