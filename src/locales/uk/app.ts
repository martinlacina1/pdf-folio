// Ukrainian UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Ukrainian. See src/i18n.ts.
const uk: Record<string, string> = {
  // Tools
  "Select": "Вибрати",
  "Highlight": "Виділити",
  "Draw": "Малювати",
  "Text": "Текст",
  "Tools": "Інструменти",
  "Automatically highlight selected text": "Автоматично виділяти вибраний текст",
  "Sign": "Підписати",
  "Add a signature": "Додати підпис",
  "Edit mode": "Режим редагування",
  "Exit edit mode": "Вийти з режиму редагування",
  "Edit existing text and images": "Редагувати наявний текст і зображення",
  "Save": "Зберегти",
  "Save changes to {name} (Ctrl+S)": "Зберегти зміни у {name} (Ctrl+S)",
  "Save copy": "Зберегти копію",
  "Save edited copy (Ctrl+Shift+S)": "Зберегти відредаговану копію (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Жовтий",
  "Green": "Зелений",
  "Blue": "Синій",
  "Pink": "Рожевий",
  "Red": "Червоний",
  "Black": "Чорний",
  "Purple": "Фіолетовий",

  // Top bar and More menu
  "Back to library": "Назад до бібліотеки",
  "Toggle sidebar (Ctrl+\\)": "Показати або сховати бічну панель (Ctrl+\\)",
  "Unsaved changes": "Незбережені зміни",
  "Ask AI": "Запитати ШІ",
  "Search (Ctrl+F)": "Пошук (Ctrl+F)",
  "New tab": "Нова вкладка",
  "Close document": "Закрити документ",
  "Save a copy": "Зберегти копію",
  "Version history": "Історія версій",
  "Print": "Друк",
  "Document info": "Відомості про документ",
  "PDF dark mode": "Темний режим PDF",
  "Focus mode": "Режим фокусування",
  "Settings": "Настройки",
  "Keyboard shortcuts": "Сполучення клавіш",
  "About Folio": "Про Folio",

  // Annotation options
  "Annotation options": "Параметри анотацій",
  "Drawing tool": "Інструмент малювання",
  "Pen": "Перо",
  "Rectangle": "Прямокутник",
  "Oval": "Овал",
  "Arrow": "Стрілка",
  "Color": "Колір",
  "Undo (Ctrl+Z)": "Скасувати (Ctrl+Z)",
  "Done": "Готово",

  // Navigation
  "Navigation": "Навігація",
  "Previous page": "Попередня сторінка",
  "Next page": "Наступна сторінка",
  "Page number": "Номер сторінки",
  "of {n}": "з {n}",
  "Zoom out (Ctrl −)": "Зменшити (Ctrl −)",
  "Zoom in (Ctrl +)": "Збільшити (Ctrl +)",
  "Rotate (R)": "Повернути (R)",
  "Exit focus mode": "Вийти з режиму фокусування",
  "to exit focus mode": "щоб вийти з режиму фокусування",

  // Opening
  "Incorrect password. Try again.": "Неправильний пароль. Спробуйте ще раз.",
  "Couldn't open “{name}”. {reason}": "Не вдалося відкрити «{name}». {reason}",
  "The file may be damaged.": "Можливо, файл пошкоджено.",
  "“{name}” isn't a PDF.": "«{name}» не є файлом PDF.",
  "Opening {host}…": "Відкриття {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Не вдалося завантажити з {host}. Можливо, сайт цього не дозволяє.",
  "Couldn't open that link. {reason}": "Не вдалося відкрити посилання. {reason}",
  "Couldn't open the sample document.": "Не вдалося відкрити зразок документа.",
  "Converting {name} to PDF…": "Перетворення {name} на PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Не вдалося перетворити «{name}» на PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Перетягніть сюди файл PDF або посилання на PDF.",
  "Drop a PDF or link to open": "Перетягніть сюди PDF або посилання, щоб відкрити",

  // Markup
  "Annotations aren’t supported for this document": "Цей документ не підтримує анотації",
  "Couldn't add the shape": "Не вдалося додати фігуру",
  "Couldn't highlight that selection": "Не вдалося виділити вибраний фрагмент",
  "Highlight removed": "Виділення видалено",
  "Markdown copied": "Markdown скопійовано",
  "Copy failed": "Не вдалося скопіювати",
  "Couldn't export notes": "Не вдалося експортувати нотатки",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (змінений порядок).pdf",
  "{name} (edited).pdf": "{name} (відредаговано).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Копію експортовано. Не вдалося зберегти її історію версій на цьому пристрої.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Копію експортовано. Історія доступна для незашифрованих PDF розміром до 50 МБ.",
  "Downloading reordered copy": "Завантаження копії зі зміненим порядком сторінок",
  "Saved a copy with your highlights and notes": "Копію з виділеннями й нотатками збережено",
  "Download started": "Завантаження розпочато",
  "Couldn't save a copy of this document.": "Не вдалося зберегти копію документа.",
  "No changes to save": "Немає змін для збереження",
  "Saved. Couldn’t keep the previous version in version history.": "Збережено. Не вдалося зберегти попередню версію в історії версій.",
  "Saved {name}": "Збережено: {name}",
  "Couldn't save “{name}”. {reason}": "Не вдалося зберегти «{name}». {reason}",
  "Couldn't print this document.": "Не вдалося надрукувати документ.",
  "Couldn't print — saved a copy instead": "Не вдалося надрукувати – натомість збережено копію",
  "Editing requires an unsigned, unencrypted PDF.": "Для редагування потрібен непідписаний і незашифрований PDF.",
  "The document changed. Try again.": "Документ змінився. Спробуйте ще раз.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Темний режим PDF змінено, але не вдалося зберегти настройку.",
  "Page scrolling changed, but couldn't save the preference.": "Прокручування сторінок змінено, але не вдалося зберегти настройку.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Підпис додано. Ctrl+Z – скасувати; «Зберегти копію» – експортувати.",
  "Signature field detected on page {page}": "На сторінці {page} знайдено поле для підпису",
  "Possible signature area on page {page}": "На сторінці {page} може бути місце для підпису",
  "Review signature": "Перевірити підпис",
  "Dismiss signature suggestion": "Закрити пропозицію підпису",

  // Updates
  "Folio {version} is ready": "Folio {version} готовий",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Перезапустіть, щоб оновити. Інсталяція під час закриття відбувається відповідно до настройки автоматичних оновлень.",
  "Restart": "Перезапустити",
  "Later": "Пізніше",
};
export default uk;
