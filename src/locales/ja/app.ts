// Japanese UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Japanese. See src/i18n.ts.
const ja: Record<string, string> = {
  // Tools
  "Select": "選択",
  "Highlight": "ハイライト",
  "Draw": "描画",
  "Text": "テキスト",
  "Tools": "ツール",
  "Automatically highlight selected text": "選択したテキストを自動でハイライト",
  "Sign": "署名",
  "Add a signature": "署名を追加",
  "Edit mode": "編集モード",
  "Exit edit mode": "編集モードを終了",
  "Edit existing text and images": "既存のテキストと画像を編集",
  "Save": "保存",
  "Save changes to {name} (Ctrl+S)": "{name} に変更を保存 (Ctrl+S)",
  "Save copy": "コピーを保存",
  "Save edited copy (Ctrl+Shift+S)": "編集したコピーを保存 (Ctrl+Shift+S)",

  // Colors
  "Yellow": "黄",
  "Green": "緑",
  "Blue": "青",
  "Pink": "ピンク",
  "Red": "赤",
  "Black": "黒",
  "Purple": "紫",

  // Top bar and More menu
  "Back to library": "ライブラリに戻る",
  "Toggle sidebar (Ctrl+\\)": "サイドバーの表示/非表示 (Ctrl+\\)",
  "Unsaved changes": "未保存の変更",
  "Ask AI": "AI に質問",
  "Search (Ctrl+F)": "検索 (Ctrl+F)",
  "New tab": "新しいタブ",
  "Close document": "文書を閉じる",
  "Save a copy": "コピーを保存",
  "Version history": "バージョン履歴",
  "Print": "印刷",
  "Document info": "文書情報",
  "PDF dark mode": "PDF ダークモード",
  "Focus mode": "集中モード",
  "Settings": "設定",
  "Keyboard shortcuts": "キーボードショートカット",
  "About Folio": "Folio について",

  // Annotation options
  "Annotation options": "注釈のオプション",
  "Drawing tool": "描画ツール",
  "Pen": "ペン",
  "Rectangle": "四角形",
  "Oval": "楕円",
  "Arrow": "矢印",
  "Color": "色",
  "Undo (Ctrl+Z)": "元に戻す (Ctrl+Z)",
  "Done": "完了",

  // Navigation
  "Navigation": "ナビゲーション",
  "Previous page": "前のページ",
  "Next page": "次のページ",
  "Page number": "ページ番号",
  "of {n}": "/ {n}",
  "Zoom out (Ctrl −)": "縮小 (Ctrl −)",
  "Zoom in (Ctrl +)": "拡大 (Ctrl +)",
  "Rotate (R)": "回転 (R)",
  "Exit focus mode": "集中モードを終了",
  "to exit focus mode": "で集中モードを終了",

  // Opening
  "Incorrect password. Try again.": "パスワードが正しくありません。もう一度お試しください。",
  "Couldn't open “{name}”. {reason}": "「{name}」を開けませんでした。{reason}",
  "The file may be damaged.": "ファイルが破損している可能性があります。",
  "“{name}” isn't a PDF.": "「{name}」は PDF ではありません。",
  "Opening {host}…": "{host} を開いています…",
  "Couldn't download from {host}. The site may not allow it.": "{host} からダウンロードできませんでした。サイトでダウンロードが許可されていない可能性があります。",
  "Couldn't open that link. {reason}": "そのリンクを開けませんでした。{reason}",
  "Couldn't open the sample document.": "サンプル文書を開けませんでした。",
  "Converting {name} to PDF…": "{name} を PDF に変換しています…",
  "Couldn't convert “{name}” to PDF. {reason}": "「{name}」を PDF に変換できませんでした。{reason}",
  "Drop a PDF file or a link to a PDF.": "PDF ファイルまたは PDF へのリンクをドロップしてください。",
  "Drop a PDF or link to open": "PDF またはリンクをドロップして開く",

  // Markup
  "Annotations aren’t supported for this document": "この文書では注釈を使用できません",
  "Couldn't add the shape": "図形を追加できませんでした",
  "Couldn't highlight that selection": "選択範囲をハイライトできませんでした",
  "Highlight removed": "ハイライトを削除しました",
  "Markdown copied": "Markdown をコピーしました",
  "Copy failed": "コピーできませんでした",
  "Couldn't export notes": "メモをエクスポートできませんでした",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (並べ替え済み).pdf",
  "{name} (edited).pdf": "{name} (編集済み).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "コピーをエクスポートしました。このデバイスにバージョン履歴を保存できませんでした。",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "コピーをエクスポートしました。履歴は 50 MB 以下の暗号化されていない PDF でのみ利用できます。",
  "Downloading reordered copy": "並べ替えたコピーをダウンロードしています",
  "Saved a copy with your highlights and notes": "ハイライトとメモを含むコピーを保存しました",
  "Download started": "ダウンロードを開始しました",
  "Couldn't save a copy of this document.": "この文書のコピーを保存できませんでした。",
  "No changes to save": "保存する変更はありません",
  "Saved. Couldn’t keep the previous version in version history.": "保存しました。以前のバージョンをバージョン履歴に残せませんでした。",
  "Saved {name}": "{name} を保存しました",
  "Couldn't save “{name}”. {reason}": "「{name}」を保存できませんでした。{reason}",
  "Couldn't print this document.": "この文書を印刷できませんでした。",
  "Couldn't print — saved a copy instead": "印刷できなかったため、代わりにコピーを保存しました",
  "Editing requires an unsigned, unencrypted PDF.": "編集できるのは、署名も暗号化もされていない PDF のみです。",
  "The document changed. Try again.": "文書が変更されました。もう一度お試しください。",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "PDF ダークモードを変更しましたが、設定を保存できませんでした。",
  "Page scrolling changed, but couldn't save the preference.": "ページのスクロール方法を変更しましたが、設定を保存できませんでした。",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "署名を追加しました。Ctrl+Z で元に戻せます。エクスポートするには「コピーを保存」を使用してください。",
  "Signature field detected on page {page}": "{page} ページに署名欄が見つかりました",
  "Possible signature area on page {page}": "{page} ページに署名欄と思われる箇所があります",
  "Review signature": "署名を確認",
  "Dismiss signature suggestion": "署名の提案を閉じる",

  // Updates
  "Folio {version} is ready": "Folio {version} の準備ができました",
  "Restart to update. Installation on close follows your auto-update setting.":
    "再起動すると更新されます。終了時のインストールは自動更新の設定に従います。",
  "Restart": "再起動",
  "Later": "後で",
};
export default ja;
