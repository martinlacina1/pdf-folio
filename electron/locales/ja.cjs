// Japanese text for electron/i18n.cjs: English → Japanese.
module.exports = {
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "このファイルは元の場所に保存できません。",
  "Nothing to save.": "保存する内容がありません。",
  "Couldn't open file": "ファイルを開けませんでした",
  "Couldn't convert “{name}” to PDF. {reason}": "「{name}」を PDF に変換できませんでした。{reason}",
  "Couldn't convert “{name}” to PDF.": "「{name}」を PDF に変換できませんでした。",

  // main.cjs: camera permission
  "Use camera for signature?": "署名にカメラを使用しますか？",
  "Allow Folio to use your camera to capture a signature?": "署名を取り込むために Folio にカメラの使用を許可しますか？",
  "Camera images are processed on this device. No microphone is requested.": "カメラの画像はこのデバイス上で処理されます。マイクへのアクセスは要求しません。",
  "Allow camera": "カメラを許可",
  "Cancel": "キャンセル",

  // main.cjs: closing with unsaved changes
  "Close without saving": "保存せずに閉じる",
  "Unsaved changes": "未保存の変更",
  "One or more tabs have unsaved changes.": "未保存の変更があるタブがあります。",
  "Press {shortcut} in each marked tab to save it before closing Folio.": "Folio を閉じる前に、マークの付いた各タブで {shortcut} を押して保存してください。",

  // main.cjs: links
  "Open link?": "リンクを開きますか？",
  "Open this email link in your mail app?": "このメールリンクをメールアプリで開きますか？",
  "Open {host} in your browser?": "{host} をブラウザーで開きますか？",
  "Open mail app": "メールアプリを開く",
  "Open link": "リンクを開く",
  "Open a local address?": "ローカルアドレスを開きますか？",
  "Open {host}?": "{host} を開きますか？",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "{origin} に次の解決済みアドレスへの接続を許可しますか？\n\n{addresses}\n\n{url}",
  "Open": "開く",

  // main.cjs: opening a link (download)
  "The download timed out.": "ダウンロードがタイムアウトしました。",
  "That link redirects too many times.": "そのリンクはリダイレクトの回数が多すぎます。",
  "That link redirects somewhere Folio can't open.": "そのリンクは Folio で開けない場所にリダイレクトされます。",
  "That link leads to a local network address, so Folio didn't follow it.": "そのリンクはローカルネットワークのアドレスを指しているため、Folio は開きませんでした。",
  "Couldn't reach {host}.": "{host} に接続できませんでした。",
  "The server responded with {status}.": "サーバーから {status} が返されました。",
  "That PDF is larger than 300 MB.": "その PDF は 300 MB を超えています。",
  "The download was interrupted.": "ダウンロードが中断されました。",
  "That link isn't a PDF or a webpage.": "そのリンクは PDF でも Web ページでもありません。",
  "That isn't a valid web address.": "有効な Web アドレスではありません。",
  "Only http:// and https:// links can be opened.": "開けるのは http:// と https:// のリンクのみです。",
  "Another link is still opening.": "別のリンクをまだ開いています。",
  "Couldn't open a verified connection to {host}.": "{host} との検証済みの接続を確立できませんでした。",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "変換した Web ページが 300 MB を超えています。",
  "The webpage took too long to load.": "Web ページの読み込みに時間がかかりすぎました。",
  "Couldn't load that webpage ({code}).": "その Web ページを読み込めませんでした ({code})。",
  "Couldn't load that webpage.": "その Web ページを読み込めませんでした。",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name} を {original} と同じ場所に保存しました。",
  "It's larger than 300 MB.": "ファイルが 300 MB を超えています。",
  "It's too large to convert.": "ファイルが大きすぎるため変換できません。",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": ".doc ファイルの変換には Microsoft Word または LibreOffice が必要です。いずれかをインストールするか、文書を .docx として保存してください。",
  "The document may be damaged or protected with a password.": "文書が破損しているか、パスワードで保護されている可能性があります。",
  "Choose a regular file.": "通常のファイルを選択してください。",
  "The file changed while it was being opened.": "ファイルを開いている間にファイルが変更されました。",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "OpenAI のサインインサービスに接続できませんでした。",
  "Unexpected sign-in token.": "予期しないサインイントークンです。",
  "The sign-in response couldn't be verified. Please try again.": "サインインの応答を検証できませんでした。もう一度お試しください。",
  "You can close this tab and return to Folio.": "このタブを閉じて Folio に戻ってください。",
  "Sign-in was cancelled.": "サインインがキャンセルされました。",
  "ChatGPT sign-in failed.": "ChatGPT にサインインできませんでした。",
  "Couldn't start sign-in.": "サインインを開始できませんでした。",
  "Sign-in timed out. Please try again.": "サインインがタイムアウトしました。もう一度お試しください。",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT で Folio の登録が完了しませんでした。もう一度お試しください。",
  "ChatGPT sign-in failed. Please try again.": "ChatGPT にサインインできませんでした。もう一度お試しください。",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "ChatGPT のプランの使用が許可されませんでした。もう一度サインインして、Folio によるプランの使用を許可してください。",
  "Continue with ChatGPT to use your plan in Folio.": "Folio でプランを使用するには、ChatGPT で続行してください。",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "ChatGPT のサインインが終了しました。再接続するには ChatGPT で続行してください。",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "ChatGPT のサインインを更新できませんでした。接続を確認して、もう一度お試しください。",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "ChatGPT のモデルを読み込めませんでした ({status})。",
  "The answer was cut short. Try a shorter question or a smaller selection.": "回答が途中で切れました。質問を短くするか、選択範囲を小さくしてください。",
  "The connection to ChatGPT ended early. Please try again.": "ChatGPT との接続が途中で切断されました。もう一度お試しください。",
  "You've reached a ChatGPT usage limit.": "ChatGPT の使用量の上限に達しました。",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT は一時的に利用できません。しばらくしてからもう一度お試しください。",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT でプランを確認できませんでした。再接続するには ChatGPT で続行してください。",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT が回答できませんでした ({status})。もう一度お試しください。",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT が回答できませんでした。もう一度お試しください。",
  "Claude Code isn't installed.": "Claude Code がインストールされていません。",
  "Claude took too long to answer. Please try again.": "Claude の回答に時間がかかりすぎました。もう一度お試しください。",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code にサインインしていません。ターミナルを開いて `claude` を実行し、Claude アカウントでサインインしてください。",
  "You've reached your Claude usage limit. {details}": "Claude の使用量の上限に達しました。{details}",
  "Claude Code couldn't answer.": "Claude Code が回答できませんでした。",
  "Another answer is still in progress.": "別の回答をまだ生成しています。",
  "Something went wrong.": "問題が発生しました。",
};
