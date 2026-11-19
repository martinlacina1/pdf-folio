// French UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → French. See src/i18n.ts.
const fr: Record<string, string> = {
  // Tools
  "Select": "Sélectionner",
  "Highlight": "Surligner",
  "Draw": "Dessiner",
  "Text": "Texte",
  "Tools": "Outils",
  "Automatically highlight selected text": "Surligner automatiquement le texte sélectionné",
  "Sign": "Signer",
  "Add a signature": "Ajouter une signature",
  "Edit mode": "Mode édition",
  "Exit edit mode": "Quitter le mode édition",
  "Edit existing text and images": "Modifier le texte et les images existants",
  "Save": "Enregistrer",
  "Save changes to {name} (Ctrl+S)": "Enregistrer les modifications dans {name} (Ctrl+S)",
  "Save copy": "Enregistrer une copie",
  "Save edited copy (Ctrl+Shift+S)": "Enregistrer une copie modifiée (Ctrl+Shift+S)",

  // Colors
  "Yellow": "Jaune",
  "Green": "Vert",
  "Blue": "Bleu",
  "Pink": "Rose",
  "Red": "Rouge",
  "Black": "Noir",
  "Purple": "Violet",

  // Top bar and More menu
  "Back to library": "Retour à la bibliothèque",
  "Toggle sidebar (Ctrl+\\)": "Afficher/masquer la barre latérale (Ctrl+\\)",
  "Unsaved changes": "Modifications non enregistrées",
  "Ask AI": "Demander à l’IA",
  "Search (Ctrl+F)": "Rechercher (Ctrl+F)",
  "New tab": "Nouvel onglet",
  "Close document": "Fermer le document",
  "Save a copy": "Enregistrer une copie",
  "Version history": "Historique des versions",
  "Print": "Imprimer",
  "Document info": "Informations sur le document",
  "PDF dark mode": "Mode sombre pour les PDF",
  "Focus mode": "Mode concentration",
  "Settings": "Paramètres",
  "Keyboard shortcuts": "Raccourcis clavier",
  "About Folio": "À propos de Folio",

  // Annotation options
  "Annotation options": "Options d’annotation",
  "Drawing tool": "Outil de dessin",
  "Pen": "Stylo",
  "Rectangle": "Rectangle",
  "Oval": "Ellipse",
  "Arrow": "Flèche",
  "Color": "Couleur",
  "Undo (Ctrl+Z)": "Annuler (Ctrl+Z)",
  "Done": "Terminé",

  // Navigation
  "Navigation": "Navigation",
  "Previous page": "Page précédente",
  "Next page": "Page suivante",
  "Page number": "Numéro de page",
  "of {n}": "sur {n}",
  "Zoom out (Ctrl −)": "Zoom arrière (Ctrl −)",
  "Zoom in (Ctrl +)": "Zoom avant (Ctrl +)",
  "Rotate (R)": "Faire pivoter (R)",
  "Exit focus mode": "Quitter le mode concentration",
  "to exit focus mode": "pour quitter le mode concentration",

  // Opening
  "Incorrect password. Try again.": "Mot de passe incorrect. Réessayez.",
  "Couldn't open “{name}”. {reason}": "Impossible d’ouvrir « {name} ». {reason}",
  "The file may be damaged.": "Le fichier est peut-être endommagé.",
  "“{name}” isn't a PDF.": "« {name} » n’est pas un PDF.",
  "Opening {host}…": "Ouverture de {host}…",
  "Couldn't download from {host}. The site may not allow it.": "Impossible de télécharger depuis {host}. Le site ne l’autorise peut-être pas.",
  "Couldn't open that link. {reason}": "Impossible d’ouvrir ce lien. {reason}",
  "Couldn't open the sample document.": "Impossible d’ouvrir le document d’exemple.",
  "Converting {name} to PDF…": "Conversion de {name} en PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "Impossible de convertir « {name} » en PDF. {reason}",
  "Drop a PDF file or a link to a PDF.": "Déposez un fichier PDF ou un lien vers un PDF.",
  "Drop a PDF or link to open": "Déposez un PDF ou un lien pour l’ouvrir",

  // Markup
  "Annotations aren’t supported for this document": "Ce document ne prend pas en charge les annotations",
  "Couldn't add the shape": "Impossible d’ajouter la forme",
  "Couldn't highlight that selection": "Impossible de surligner cette sélection",
  "Highlight removed": "Surlignage supprimé",
  "Markdown copied": "Markdown copié",
  "Copy failed": "Échec de la copie",
  "Couldn't export notes": "Impossible d’exporter les notes",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (réorganisé).pdf",
  "{name} (edited).pdf": "{name} (modifié).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "Copie exportée. Impossible d’enregistrer son historique des versions sur cet appareil.",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "Copie exportée. L’historique est disponible pour les PDF non chiffrés jusqu’à 50 Mo.",
  "Downloading reordered copy": "Téléchargement de la copie réorganisée",
  "Saved a copy with your highlights and notes": "Copie enregistrée avec vos surlignages et vos notes",
  "Download started": "Téléchargement lancé",
  "Couldn't save a copy of this document.": "Impossible d’enregistrer une copie de ce document.",
  "No changes to save": "Aucune modification à enregistrer",
  "Saved. Couldn’t keep the previous version in version history.": "Enregistré. Impossible de conserver la version précédente dans l’historique des versions.",
  "Saved {name}": "{name} enregistré",
  "Couldn't save “{name}”. {reason}": "Impossible d’enregistrer « {name} ». {reason}",
  "Couldn't print this document.": "Impossible d’imprimer ce document.",
  "Couldn't print — saved a copy instead": "Impression impossible — une copie a été enregistrée à la place",
  "Editing requires an unsigned, unencrypted PDF.": "La modification nécessite un PDF non signé et non chiffré.",
  "The document changed. Try again.": "Le document a été modifié. Réessayez.",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "Le mode sombre pour les PDF a été modifié, mais la préférence n’a pas pu être enregistrée.",
  "Page scrolling changed, but couldn't save the preference.": "Le défilement des pages a été modifié, mais la préférence n’a pas pu être enregistrée.",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "Signature ajoutée. Ctrl+Z pour annuler ; « Enregistrer une copie » pour exporter.",
  "Signature field detected on page {page}": "Champ de signature détecté à la page {page}",
  "Possible signature area on page {page}": "Zone de signature possible à la page {page}",
  "Review signature": "Vérifier la signature",
  "Dismiss signature suggestion": "Ignorer la suggestion de signature",

  // Updates
  "Folio {version} is ready": "Folio {version} est prêt",
  "Restart to update. Installation on close follows your auto-update setting.":
    "Redémarrez pour mettre à jour. L’installation à la fermeture suit votre réglage de mise à jour automatique.",
  "Restart": "Redémarrer",
  "Later": "Plus tard",
};
export default fr;
