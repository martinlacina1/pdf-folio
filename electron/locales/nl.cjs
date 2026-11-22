// Dutch text for electron/i18n.cjs: English → Dutch.
module.exports = {
  "Save": "Opslaan",
  "Save as": "Opslaan als",
  "Do you want to save your changes before closing Folio?": "Wilt u uw wijzigingen opslaan voordat u Folio sluit?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Dit bestand kan niet op de oorspronkelijke locatie worden opgeslagen.",
  "Nothing to save.": "Er is niets om op te slaan.",
  "Couldn't open file": "Kan bestand niet openen",
  "Couldn't convert “{name}” to PDF. {reason}": "Kan “{name}” niet converteren naar PDF. {reason}",
  "Couldn't convert “{name}” to PDF.": "Kan “{name}” niet converteren naar PDF.",

  // main.cjs: camera permission
  "Use camera for signature?": "Camera gebruiken voor handtekening?",
  "Allow Folio to use your camera to capture a signature?": "Folio toestaan uw camera te gebruiken om een handtekening vast te leggen?",
  "Camera images are processed on this device. No microphone is requested.": "Camerabeelden worden op dit apparaat verwerkt. Er wordt geen toegang tot de microfoon gevraagd.",
  "Allow camera": "Camera toestaan",
  "Cancel": "Annuleren",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Sluiten zonder opslaan",
  "Unsaved changes": "Niet-opgeslagen wijzigingen",
  "One or more tabs have unsaved changes.": "Een of meer tabbladen bevatten niet-opgeslagen wijzigingen.",

  // main.cjs: links
  "Open link?": "Koppeling openen?",
  "Open this email link in your mail app?": "Deze e-mailkoppeling openen in uw e-mailapp?",
  "Open {host} in your browser?": "{host} openen in uw browser?",
  "Open mail app": "E-mailapp openen",
  "Open link": "Koppeling openen",
  "Open a local address?": "Een lokaal adres openen?",
  "Open {host}?": "{host} openen?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "{origin} toestaan verbinding te maken met de volgende gevonden adressen?\n\n{addresses}\n\n{url}",
  "Open": "Openen",

  // main.cjs: opening a link (download)
  "The download timed out.": "Er is een time-out opgetreden bij het downloaden.",
  "That link redirects too many times.": "Die koppeling wordt te vaak omgeleid.",
  "That link redirects somewhere Folio can't open.": "Die koppeling leidt om naar een locatie die Folio niet kan openen.",
  "That link leads to a local network address, so Folio didn't follow it.": "Die koppeling leidt naar een adres in het lokale netwerk, dus Folio heeft deze niet gevolgd.",
  "Couldn't reach {host}.": "Kan {host} niet bereiken.",
  "The server responded with {status}.": "De server antwoordde met {status}.",
  "That PDF is larger than 300 MB.": "Die PDF is groter dan 300 MB.",
  "The download was interrupted.": "De download is onderbroken.",
  "That link isn't a PDF or a webpage.": "Die koppeling verwijst niet naar een PDF of webpagina.",
  "That isn't a valid web address.": "Dat is geen geldig webadres.",
  "Only http:// and https:// links can be opened.": "Alleen http://- en https://-koppelingen kunnen worden geopend.",
  "Another link is still opening.": "Er wordt nog een andere koppeling geopend.",
  "Couldn't open a verified connection to {host}.": "Kan geen geverifieerde verbinding met {host} maken.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "De geconverteerde webpagina is groter dan 300 MB.",
  "The webpage took too long to load.": "Het laden van de webpagina duurde te lang.",
  "Couldn't load that webpage ({code}).": "Kan die webpagina niet laden ({code}).",
  "Couldn't load that webpage.": "Kan die webpagina niet laden.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} opgeslagen naast {original}.",
  "It's larger than 300 MB.": "Het bestand is groter dan 300 MB.",
  "It's too large to convert.": "Het bestand is te groot om te converteren.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "Voor het converteren van .doc-bestanden is Microsoft Word of LibreOffice nodig. Installeer een van beide of sla het document op als .docx.",
  "The document may be damaged or protected with a password.": "Het document is mogelijk beschadigd of met een wachtwoord beveiligd.",
  "Choose a regular file.": "Kies een gewoon bestand.",
  "The file changed while it was being opened.": "Het bestand is gewijzigd tijdens het openen.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "Kan de aanmeldservice van OpenAI niet bereiken.",
  "Unexpected sign-in token.": "Onverwacht aanmeldtoken.",
  "The sign-in response couldn't be verified. Please try again.": "Het aanmeldantwoord kan niet worden geverifieerd. Probeer het opnieuw.",
  "You can close this tab and return to Folio.": "U kunt dit tabblad sluiten en terugkeren naar Folio.",
  "Sign-in was cancelled.": "Aanmelden is geannuleerd.",
  "ChatGPT sign-in failed.": "Aanmelden bij ChatGPT is mislukt.",
  "Couldn't start sign-in.": "Kan aanmelden niet starten.",
  "Sign-in timed out. Please try again.": "Er is een time-out opgetreden bij het aanmelden. Probeer het opnieuw.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT heeft de registratie van Folio niet voltooid. Probeer het opnieuw.",
  "ChatGPT sign-in failed. Please try again.": "Aanmelden bij ChatGPT is mislukt. Probeer het opnieuw.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "Gebruik van uw ChatGPT-abonnement is niet toegestaan. Meld u opnieuw aan en sta Folio toe uw abonnement te gebruiken.",
  "Continue with ChatGPT to use your plan in Folio.": "Ga door met ChatGPT om uw abonnement in Folio te gebruiken.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "Uw aanmelding bij ChatGPT is verlopen. Ga door met ChatGPT om opnieuw verbinding te maken.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "Kan uw aanmelding bij ChatGPT niet vernieuwen. Controleer uw verbinding en probeer het opnieuw.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "Kan ChatGPT-modellen niet laden ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Het antwoord is afgebroken. Probeer een kortere vraag of een kleinere selectie.",
  "The connection to ChatGPT ended early. Please try again.": "De verbinding met ChatGPT is voortijdig verbroken. Probeer het opnieuw.",
  "You've reached a ChatGPT usage limit.": "U hebt een gebruikslimiet van ChatGPT bereikt.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT is tijdelijk niet beschikbaar. Probeer het zo meteen opnieuw.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT kan uw abonnement niet bevestigen. Ga door met ChatGPT om opnieuw verbinding te maken.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT kan niet antwoorden ({status}). Probeer het opnieuw.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT kan niet antwoorden. Probeer het opnieuw.",
  "Claude Code isn't installed.": "Claude Code is niet geïnstalleerd.",
  "Claude took too long to answer. Please try again.": "Claude deed er te lang over om te antwoorden. Probeer het opnieuw.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code is niet aangemeld. Open een terminal, voer `claude` uit en meld u aan met uw Claude-account.",
  "You've reached your Claude usage limit. {details}": "U hebt uw gebruikslimiet van Claude bereikt. {details}",
  "Claude Code couldn't answer.": "Claude Code kan niet antwoorden.",
  "Another answer is still in progress.": "Er wordt nog een ander antwoord gegenereerd.",
  "Something went wrong.": "Er is iets misgegaan.",
};
