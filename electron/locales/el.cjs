// Greek text for electron/i18n.cjs: English → Greek.
module.exports = {
  "Save": "Αποθήκευση",
  "Save as": "Αποθήκευση ως",
  "Do you want to save your changes before closing Folio?": "Θέλετε να αποθηκεύσετε τις αλλαγές πριν κλείσετε το Folio;",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Αυτό το αρχείο δεν μπορεί να αποθηκευτεί στην αρχική του θέση.",
  "Nothing to save.": "Δεν υπάρχει τίποτα για αποθήκευση.",
  "Couldn't open file": "Δεν ήταν δυνατό το άνοιγμα του αρχείου",
  "Couldn't convert “{name}” to PDF. {reason}": "Δεν ήταν δυνατή η μετατροπή του «{name}» σε PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Δεν ήταν δυνατή η μετατροπή του «{name}» σε PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Χρήση της κάμερας για την υπογραφή;",
  "Allow Folio to use your camera to capture a signature?": "Να επιτρέπεται στο Folio να χρησιμοποιεί την κάμερά σας για τη λήψη υπογραφής;",
  "Camera images are processed on this device. No microphone is requested.": "Οι εικόνες της κάμερας υφίστανται επεξεργασία σε αυτήν τη συσκευή. Δεν ζητείται πρόσβαση στο μικρόφωνο.",
  "Allow camera": "Να επιτρέπεται η κάμερα",
  "Cancel": "Άκυρο",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Κλείσιμο χωρίς αποθήκευση",
  "Unsaved changes": "Μη αποθηκευμένες αλλαγές",
  "One or more tabs have unsaved changes.": "Μία ή περισσότερες καρτέλες έχουν μη αποθηκευμένες αλλαγές.",

  // main.cjs: links
  "Open link?": "Άνοιγμα σύνδεσης;",
  "Open this email link in your mail app?": "Άνοιγμα αυτής της σύνδεσης email στην εφαρμογή αλληλογραφίας;",
  "Open {host} in your browser?": "Άνοιγμα του {host} στο πρόγραμμα περιήγησης;",
  "Open mail app": "Άνοιγμα εφαρμογής αλληλογραφίας",
  "Open link": "Άνοιγμα σύνδεσης",
  "Open a local address?": "Άνοιγμα τοπικής διεύθυνσης;",
  "Open {host}?": "Άνοιγμα του {host};",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Να επιτρέπεται στο {origin} να συνδεθεί στις παρακάτω διευθύνσεις;\n\n{addresses}\n\n{url}",
  "Open": "Άνοιγμα",

  // main.cjs: opening a link (download)
  "The download timed out.": "Το χρονικό όριο της λήψης έληξε.",
  "That link redirects too many times.": "Η σύνδεση ανακατευθύνει υπερβολικά πολλές φορές.",
  "That link redirects somewhere Folio can't open.": "Η σύνδεση ανακατευθύνει σε θέση που το Folio δεν μπορεί να ανοίξει.",
  "That link leads to a local network address, so Folio didn't follow it.": "Η σύνδεση οδηγεί σε διεύθυνση τοπικού δικτύου, οπότε το Folio δεν την ακολούθησε.",
  "Couldn't reach {host}.": "Δεν ήταν δυνατή η πρόσβαση στο {host}.",
  "The server responded with {status}.": "Ο διακομιστής απάντησε με κατάσταση {status}.",
  "That PDF is larger than 300 MB.": "Αυτό το PDF είναι μεγαλύτερο από 300 MB.",
  "The download was interrupted.": "Η λήψη διακόπηκε.",
  "That link isn't a PDF or a webpage.": "Η σύνδεση δεν οδηγεί σε PDF ή ιστοσελίδα.",
  "That isn't a valid web address.": "Αυτή δεν είναι έγκυρη διεύθυνση web.",
  "Only http:// and https:// links can be opened.": "Μπορούν να ανοίξουν μόνο συνδέσεις http:// και https://.",
  "Another link is still opening.": "Μια άλλη σύνδεση ανοίγει ακόμα.",
  "Couldn't open a verified connection to {host}.": "Δεν ήταν δυνατή η δημιουργία επαληθευμένης σύνδεσης με το {host}.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Η ιστοσελίδα που μετατράπηκε είναι μεγαλύτερη από 300 MB.",
  "The webpage took too long to load.": "Η φόρτωση της ιστοσελίδας διήρκεσε υπερβολικά πολύ.",
  "Couldn't load that webpage ({code}).": "Δεν ήταν δυνατή η φόρτωση της ιστοσελίδας ({code}).",
  "Couldn't load that webpage.": "Δεν ήταν δυνατή η φόρτωση της ιστοσελίδας.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Το {name} αποθηκεύτηκε δίπλα στο {original}.",
  "It's larger than 300 MB.": "Είναι μεγαλύτερο από 300 MB.",
  "It's too large to convert.": "Είναι υπερβολικά μεγάλο για μετατροπή.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Η μετατροπή αρχείων .doc απαιτεί Microsoft Word ή LibreOffice. Εγκαταστήστε ένα από τα δύο ή αποθηκεύστε το έγγραφο ως .docx.",
  "The document may be damaged or protected with a password.": "Το έγγραφο ενδέχεται να είναι κατεστραμμένο ή να προστατεύεται με κωδικό πρόσβασης.",
  "Choose a regular file.": "Επιλέξτε ένα κανονικό αρχείο.",
  "The file changed while it was being opened.": "Το αρχείο άλλαξε ενώ άνοιγε.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Δεν ήταν δυνατή η πρόσβαση στην υπηρεσία σύνδεσης της OpenAI.",
  "Unexpected sign-in token.": "Μη αναμενόμενο διακριτικό σύνδεσης.",
  "The sign-in response couldn't be verified. Please try again.": "Δεν ήταν δυνατή η επαλήθευση της απόκρισης σύνδεσης. Δοκιμάστε ξανά.",
  "You can close this tab and return to Folio.": "Μπορείτε να κλείσετε αυτήν την καρτέλα και να επιστρέψετε στο Folio.",
  "Sign-in was cancelled.": "Η σύνδεση ακυρώθηκε.",
  "ChatGPT sign-in failed.": "Η σύνδεση στο ChatGPT απέτυχε.",
  "Couldn't start sign-in.": "Δεν ήταν δυνατή η έναρξη της σύνδεσης.",
  "Sign-in timed out. Please try again.": "Το χρονικό όριο σύνδεσης έληξε. Δοκιμάστε ξανά.",
  "ChatGPT didn't finish registering Folio. Please try again.": "Το ChatGPT δεν ολοκλήρωσε την εγγραφή του Folio. Δοκιμάστε ξανά.",
  "ChatGPT sign-in failed. Please try again.": "Η σύνδεση στο ChatGPT απέτυχε. Δοκιμάστε ξανά.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Δεν δόθηκε άδεια χρήσης του προγράμματος ChatGPT. Συνδεθείτε ξανά και επιτρέψτε στο Folio να χρησιμοποιεί το πρόγραμμά σας.",
  "Continue with ChatGPT to use your plan in Folio.": "Συνεχίστε με το ChatGPT για να χρησιμοποιήσετε το πρόγραμμά σας στο Folio.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Η σύνδεσή σας στο ChatGPT έληξε. Συνεχίστε με το ChatGPT για να συνδεθείτε ξανά.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Δεν ήταν δυνατή η ανανέωση της σύνδεσής σας στο ChatGPT. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Δεν ήταν δυνατή η φόρτωση των μοντέλων ChatGPT ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Η απάντηση διακόπηκε. Δοκιμάστε μια συντομότερη ερώτηση ή μικρότερη επιλογή.",
  "The connection to ChatGPT ended early. Please try again.": "Η σύνδεση με το ChatGPT τερματίστηκε πρόωρα. Δοκιμάστε ξανά.",
  "You've reached a ChatGPT usage limit.": "Φτάσατε σε ένα όριο χρήσης του ChatGPT.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "Το ChatGPT δεν είναι προσωρινά διαθέσιμο. Δοκιμάστε ξανά σε λίγο.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "Το ChatGPT δεν μπόρεσε να επιβεβαιώσει το πρόγραμμά σας. Συνεχίστε με το ChatGPT για να συνδεθείτε ξανά.",
  "ChatGPT couldn't answer ({status}). Please try again.": "Το ChatGPT δεν μπόρεσε να απαντήσει ({status}). Δοκιμάστε ξανά.",
  "ChatGPT couldn't answer. Please try again.": "Το ChatGPT δεν μπόρεσε να απαντήσει. Δοκιμάστε ξανά.",
  "Claude Code isn't installed.": "Το Claude Code δεν είναι εγκατεστημένο.",
  "Claude took too long to answer. Please try again.": "Το Claude άργησε υπερβολικά να απαντήσει. Δοκιμάστε ξανά.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Δεν έχει γίνει σύνδεση στο Claude Code. Ανοίξτε ένα τερματικό, εκτελέστε την εντολή `claude` και συνδεθείτε με τον λογαριασμό Claude σας.",
  "You've reached your Claude usage limit. {details}": "Φτάσατε στο όριο χρήσης του Claude. {details}",
  "Claude Code couldn't answer.": "Το Claude Code δεν μπόρεσε να απαντήσει.",
  "Another answer is still in progress.": "Μια άλλη απάντηση βρίσκεται ακόμα σε εξέλιξη.",
  "Something went wrong.": "Παρουσιάστηκε πρόβλημα.",
};
