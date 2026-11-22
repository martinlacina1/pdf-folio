// Greek UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Greek. See src/i18n.ts.
const el: Record<string, string> = {
  "Save as…": "Αποθήκευση ως…",
  // Tools
  "Select": "Επιλογή",
  "Highlight": "Επισήμανση",
  "Draw": "Σχεδίαση",
  "Text": "Κείμενο",
  "Tools": "Εργαλεία",
  "Automatically highlight selected text": "Αυτόματη επισήμανση επιλεγμένου κειμένου",
  "Sign": "Υπογραφή",
  "Add a signature": "Προσθήκη υπογραφής",
  "Edit mode": "Λειτουργία επεξεργασίας",
  "Exit edit mode": "Έξοδος από την επεξεργασία",
  "Edit existing text and images": "Επεξεργασία υπάρχοντος κειμένου και εικόνων",
  "Save": "Αποθήκευση",
  "Save changes to {name} (Ctrl+S)": "Αποθήκευση αλλαγών στο {name} (Ctrl+S)",
  "Save copy": "Αποθήκευση αντιγράφου",
  "Save edited copy (Ctrl+Shift+S)": "Αποθήκευση επεξεργασμένου αντιγράφου (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Κίτρινο",
  "Green": "Πράσινο",
  "Blue": "Μπλε",
  "Pink": "Ροζ",
  "Red": "Κόκκινο",
  "Black": "Μαύρο",
  "Purple": "Μωβ",

  // Top bar and More menu
  "Back to library": "Επιστροφή στη βιβλιοθήκη",
  "Toggle sidebar (Ctrl+\\)": "Εμφάνιση/απόκρυψη πλαϊνής γραμμής (Ctrl+\\)",
  "Unsaved changes": "Μη αποθηκευμένες αλλαγές",
  "Ask AI": "Ρωτήστε το AI",
  "Search (Ctrl+F)": "Αναζήτηση (Ctrl+F)",
  "New tab": "Νέα καρτέλα",
  "Close document": "Κλείσιμο εγγράφου",
  "Save a copy": "Αποθήκευση αντιγράφου",
  "Version history": "Ιστορικό εκδόσεων",
  "Print": "Εκτύπωση",
  "Document info": "Πληροφορίες εγγράφου",
  "PDF dark mode": "Σκοτεινή λειτουργία PDF",
  "Focus mode": "Λειτουργία εστίασης",
  "Settings": "Ρυθμίσεις",
  "Keyboard shortcuts": "Συντομεύσεις πληκτρολογίου",
  "About Folio": "Πληροφορίες για το Folio",

  // Annotation options
  "Annotation options": "Επιλογές σχολιασμού",
  "Drawing tool": "Εργαλείο σχεδίασης",
  "Pen": "Πένα",
  "Rectangle": "Ορθογώνιο",
  "Oval": "Έλλειψη",
  "Arrow": "Βέλος",
  "Color": "Χρώμα",
  "Undo (Ctrl+Z)": "Αναίρεση (Ctrl+Z)",
  "Done": "Τέλος",

  // Navigation
  "Navigation": "Πλοήγηση",
  "Previous page": "Προηγούμενη σελίδα",
  "Next page": "Επόμενη σελίδα",
  "Page number": "Αριθμός σελίδας",
  "of {n}": "από {n}",
  "Zoom out (Ctrl −)": "Σμίκρυνση (Ctrl −)",
  "Zoom in (Ctrl +)": "Μεγέθυνση (Ctrl +)",
  "Rotate (R)": "Περιστροφή (R)",
  "Exit focus mode": "Έξοδος από τη λειτουργία εστίασης",
  "to exit focus mode": "για έξοδο από τη λειτουργία εστίασης",

  // Opening
  "Incorrect password. Try again.": "Λανθασμένος κωδικός πρόσβασης. Δοκιμάστε ξανά.",
  "Couldn't open “{name}”. {reason}": "Δεν ήταν δυνατό το άνοιγμα του «{name}». {reason}",
  "The file may be damaged.": "Το αρχείο ενδέχεται να είναι κατεστραμμένο.",
  "“{name}” isn't a PDF.": "Το «{name}» δεν είναι PDF.",
  "Opening {host}…": "Άνοιγμα {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Δεν ήταν δυνατή η λήψη από το {host}. Ο ιστότοπος ενδέχεται να μην το επιτρέπει.",
  "Couldn't open that link. {reason}": "Δεν ήταν δυνατό το άνοιγμα της σύνδεσης. {reason}",
  "Couldn't open the sample document.": "Δεν ήταν δυνατό το άνοιγμα του δείγματος εγγράφου.",
  "Converting {name} to PDF…": "Μετατροπή του {name} σε PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Δεν ήταν δυνατή η μετατροπή του «{name}» σε PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Αποθέστε ένα αρχείο PDF ή μια σύνδεση προς PDF.",
  "Drop a PDF or link to open": "Αποθέστε ένα PDF ή μια σύνδεση για άνοιγμα",

  // Markup
  "Annotations aren’t supported for this document": "Αυτό το έγγραφο δεν υποστηρίζει σχόλια",
  "Couldn't add the shape": "Δεν ήταν δυνατή η προσθήκη του σχήματος",
  "Couldn't highlight that selection": "Δεν ήταν δυνατή η επισήμανση της επιλογής",
  "Highlight removed": "Η επισήμανση καταργήθηκε",
  "Markdown copied": "Το Markdown αντιγράφηκε",
  "Copy failed": "Η αντιγραφή απέτυχε",
  "Couldn't export notes": "Δεν ήταν δυνατή η εξαγωγή των σημειώσεων",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (αναδιάταξη).pdf",
  "{name} (edited).pdf": "{name} (επεξεργασμένο).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Το αντίγραφο εξήχθη. Δεν ήταν δυνατή η αποθήκευση του ιστορικού εκδόσεων σε αυτήν τη συσκευή.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Το αντίγραφο εξήχθη. Το ιστορικό είναι διαθέσιμο για μη κρυπτογραφημένα PDF έως 50 MB.",
  "Downloading reordered copy": "Λήψη αντιγράφου με νέα σειρά σελίδων",
  "Saved a copy with your highlights and notes": "Αποθηκεύτηκε αντίγραφο με τις επισημάνσεις και τις σημειώσεις σας",
  "Download started": "Η λήψη ξεκίνησε",
  "Couldn't save a copy of this document.": "Δεν ήταν δυνατή η αποθήκευση αντιγράφου αυτού του εγγράφου.",
  "No changes to save": "Δεν υπάρχουν αλλαγές για αποθήκευση",
  "Saved. Couldn’t keep the previous version in version history.": "Αποθηκεύτηκε. Δεν ήταν δυνατή η διατήρηση της προηγούμενης έκδοσης στο ιστορικό εκδόσεων.",
  "Saved {name}": "Αποθηκεύτηκε: {name}",
  "Couldn't save “{name}”. {reason}": "Δεν ήταν δυνατή η αποθήκευση του «{name}». {reason}",
  "Couldn't print this document.": "Δεν ήταν δυνατή η εκτύπωση αυτού του εγγράφου.",
  "Couldn't print — saved a copy instead": "Η εκτύπωση απέτυχε — αποθηκεύτηκε αντίγραφο",
  "Editing requires an unsigned, unencrypted PDF.": "Η επεξεργασία απαιτεί PDF χωρίς υπογραφή και κρυπτογράφηση.",
  "The document changed. Try again.": "Το έγγραφο άλλαξε. Δοκιμάστε ξανά.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Η σκοτεινή λειτουργία PDF άλλαξε, αλλά δεν ήταν δυνατή η αποθήκευση της προτίμησης.",
  "Page scrolling changed, but couldn't save the preference.": "Η κύλιση σελίδων άλλαξε, αλλά δεν ήταν δυνατή η αποθήκευση της προτίμησης.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Η υπογραφή προστέθηκε. Ctrl+Z για αναίρεση· Αποθήκευση αντιγράφου για εξαγωγή.",
  "Signature field detected on page {page}": "Εντοπίστηκε πεδίο υπογραφής στη σελίδα {page}",
  "Possible signature area on page {page}": "Πιθανή περιοχή υπογραφής στη σελίδα {page}",
  "Review signature": "Έλεγχος υπογραφής",
  "Dismiss signature suggestion": "Απόρριψη πρότασης υπογραφής",

  // Updates
  "Folio {version} is ready": "Το Folio {version} είναι έτοιμο",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Κάντε επανεκκίνηση για ενημέρωση. Η εγκατάσταση κατά το κλείσιμο ακολουθεί τη ρύθμιση αυτόματων ενημερώσεων.",
  "Restart": "Επανεκκίνηση",
  "Later": "Αργότερα",
};
export default el;
