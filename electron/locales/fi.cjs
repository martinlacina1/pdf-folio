// Finnish text for electron/i18n.cjs: English → Finnish.
module.exports = {
  "Save": "Tallenna",
  "Save as": "Tallenna nimellä",
  "Do you want to save your changes before closing Folio?": "Haluatko tallentaa muutokset ennen kuin suljet Folion?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "Tätä tiedostoa ei voi tallentaa alkuperäiseen sijaintiinsa.",
  "Nothing to save.": "Ei tallennettavaa.",
  "Couldn't open file": "Tiedostoa ei voitu avata",
  "Couldn't convert “{name}” to PDF. {reason}": "Tiedostoa ”{name}” ei voitu muuntaa PDF-muotoon. {reason}",
  "Couldn't convert “{name}” to PDF.": "Tiedostoa ”{name}” ei voitu muuntaa PDF-muotoon.",

  // main.cjs: camera permission
  "Use camera for signature?": "Käytetäänkö kameraa allekirjoitukseen?",
  "Allow Folio to use your camera to capture a signature?": "Sallitaanko Folion käyttää kameraa allekirjoituksen kuvaamiseen?",
  "Camera images are processed on this device. No microphone is requested.": "Kameran kuvat käsitellään tällä laitteella. Mikrofonia ei pyydetä.",
  "Allow camera": "Salli kamera",
  "Cancel": "Peruuta",

  // main.cjs: closing with unsaved changes
  "Close without saving": "Sulje tallentamatta",
  "Unsaved changes": "Tallentamattomia muutoksia",
  "One or more tabs have unsaved changes.": "Yhdessä tai useammassa välilehdessä on tallentamattomia muutoksia.",

  // main.cjs: links
  "Open link?": "Avataanko linkki?",
  "Open this email link in your mail app?": "Avataanko tämä sähköpostilinkki sähköpostisovelluksessa?",
  "Open {host} in your browser?": "Avataanko {host} selaimessa?",
  "Open mail app": "Avaa sähköpostisovellus",
  "Open link": "Avaa linkki",
  "Open a local address?": "Avataanko paikallinen osoite?",
  "Open {host}?": "Avataanko {host}?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "Sallitaanko, että {origin} muodostaa yhteyden seuraaviin selvitettyihin osoitteisiin?\n\n{addresses}\n\n{url}",
  "Open": "Avaa",

  // main.cjs: opening a link (download)
  "The download timed out.": "Lataus aikakatkaistiin.",
  "That link redirects too many times.": "Linkki uudelleenohjaa liian monta kertaa.",
  "That link redirects somewhere Folio can't open.": "Linkki ohjaa kohteeseen, jota Folio ei voi avata.",
  "That link leads to a local network address, so Folio didn't follow it.": "Linkki johtaa paikallisverkon osoitteeseen, joten Folio ei avannut sitä.",
  "Couldn't reach {host}.": "Palvelimeen {host} ei saatu yhteyttä.",
  "The server responded with {status}.": "Palvelin vastasi tilakoodilla {status}.",
  "That PDF is larger than 300 MB.": "PDF-tiedosto on yli 300 Mt.",
  "The download was interrupted.": "Lataus keskeytyi.",
  "That link isn't a PDF or a webpage.": "Linkki ei johda PDF-tiedostoon eikä verkkosivulle.",
  "That isn't a valid web address.": "Tämä ei ole kelvollinen verkko-osoite.",
  "Only http:// and https:// links can be opened.": "Vain http://- ja https://-linkkejä voi avata.",
  "Another link is still opening.": "Toista linkkiä avataan vielä.",
  "Couldn't open a verified connection to {host}.": "Vahvistettua yhteyttä palvelimeen {host} ei voitu muodostaa.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "Muunnettu verkkosivu on yli 300 Mt.",
  "The webpage took too long to load.": "Verkkosivun lataaminen kesti liian kauan.",
  "Couldn't load that webpage ({code}).": "Verkkosivua ei voitu ladata ({code}).",
  "Couldn't load that webpage.": "Verkkosivua ei voitu ladata.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "Tiedosto {name} tallennettiin tiedoston {original} viereen.",
  "It's larger than 300 MB.": "Tiedosto on yli 300 Mt.",
  "It's too large to convert.": "Tiedosto on liian suuri muunnettavaksi.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": ".doc-tiedostojen muuntaminen edellyttää Microsoft Wordia tai LibreOfficea. Asenna jompikumpi tai tallenna asiakirja .docx-muodossa.",
  "The document may be damaged or protected with a password.": "Asiakirja saattaa olla vioittunut tai salasanalla suojattu.",
  "Choose a regular file.": "Valitse tavallinen tiedosto.",
  "The file changed while it was being opened.": "Tiedosto muuttui avaamisen aikana.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "OpenAI:n kirjautumispalveluun ei saatu yhteyttä.",
  "Unexpected sign-in token.": "Odottamaton kirjautumistunnus.",
  "The sign-in response couldn't be verified. Please try again.": "Kirjautumisvastausta ei voitu vahvistaa. Yritä uudelleen.",
  "You can close this tab and return to Folio.": "Voit sulkea tämän välilehden ja palata Folioon.",
  "Sign-in was cancelled.": "Kirjautuminen peruutettiin.",
  "ChatGPT sign-in failed.": "ChatGPT-kirjautuminen epäonnistui.",
  "Couldn't start sign-in.": "Kirjautumista ei voitu aloittaa.",
  "Sign-in timed out. Please try again.": "Kirjautuminen aikakatkaistiin. Yritä uudelleen.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT ei saanut Folion rekisteröintiä valmiiksi. Yritä uudelleen.",
  "ChatGPT sign-in failed. Please try again.": "ChatGPT-kirjautuminen epäonnistui. Yritä uudelleen.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "ChatGPT-tilauksen käyttöä ei sallittu. Kirjaudu sisään uudelleen ja salli Folion käyttää tilaustasi.",
  "Continue with ChatGPT to use your plan in Folio.": "Jatka ChatGPT:llä, jotta voit käyttää tilaustasi Foliossa.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "ChatGPT-kirjautumisesi on päättynyt. Yhdistä uudelleen jatkamalla ChatGPT:llä.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "ChatGPT-kirjautumista ei voitu päivittää. Tarkista yhteys ja yritä uudelleen.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "ChatGPT-malleja ei voitu ladata ({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "Vastaus katkesi. Kokeile lyhyempää kysymystä tai pienempää valintaa.",
  "The connection to ChatGPT ended early. Please try again.": "Yhteys ChatGPT:hen katkesi ennenaikaisesti. Yritä uudelleen.",
  "You've reached a ChatGPT usage limit.": "Olet saavuttanut ChatGPT:n käyttörajan.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT ei ole tilapäisesti käytettävissä. Yritä hetken kuluttua uudelleen.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT ei voinut vahvistaa tilaustasi. Yhdistä uudelleen jatkamalla ChatGPT:llä.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT ei voinut vastata ({status}). Yritä uudelleen.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT ei voinut vastata. Yritä uudelleen.",
  "Claude Code isn't installed.": "Claude Codea ei ole asennettu.",
  "Claude took too long to answer. Please try again.": "Clauden vastaaminen kesti liian kauan. Yritä uudelleen.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Et ole kirjautunut Claude Codeen. Avaa pääte, suorita komento `claude` ja kirjaudu sisään Claude-tililläsi.",
  "You've reached your Claude usage limit. {details}": "Olet saavuttanut Clauden käyttörajan. {details}",
  "Claude Code couldn't answer.": "Claude Code ei voinut vastata.",
  "Another answer is still in progress.": "Toista vastausta luodaan vielä.",
  "Something went wrong.": "Jokin meni vikaan.",
};
