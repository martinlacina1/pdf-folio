// Simplified Chinese text for electron/i18n.cjs: English → Simplified Chinese.
module.exports = {
  "Save": "保存",
  "Save as": "另存为",
  "Do you want to save your changes before closing Folio?": "是否在关闭 Folio 之前保存更改？",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "无法将此文件保存到原位置。",
  "Nothing to save.": "没有要保存的内容。",
  "Couldn't open file": "无法打开文件",
  "Couldn't convert “{name}” to PDF. {reason}": "无法将“{name}”转换为 PDF。{reason}",
  "Couldn't convert “{name}” to PDF.": "无法将“{name}”转换为 PDF。",

  // main.cjs: camera permission
  "Use camera for signature?": "要使用相机拍摄签名吗？",
  "Allow Folio to use your camera to capture a signature?": "允许 Folio 使用相机拍摄签名吗？",
  "Camera images are processed on this device. No microphone is requested.": "相机图像在此设备上处理。不会请求使用麦克风。",
  "Allow camera": "允许使用相机",
  "Cancel": "取消",

  // main.cjs: closing with unsaved changes
  "Close without saving": "关闭但不保存",
  "Unsaved changes": "未保存的更改",
  "One or more tabs have unsaved changes.": "一个或多个标签页有未保存的更改。",

  // main.cjs: links
  "Open link?": "要打开链接吗？",
  "Open this email link in your mail app?": "要在邮件应用中打开此电子邮件链接吗？",
  "Open {host} in your browser?": "要在浏览器中打开 {host} 吗？",
  "Open mail app": "打开邮件应用",
  "Open link": "打开链接",
  "Open a local address?": "要打开本地地址吗？",
  "Open {host}?": "要打开 {host} 吗？",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "允许 {origin} 连接到以下解析出的地址吗？\n\n{addresses}\n\n{url}",
  "Open": "打开",

  // main.cjs: opening a link (download)
  "The download timed out.": "下载超时。",
  "That link redirects too many times.": "该链接重定向次数过多。",
  "That link redirects somewhere Folio can't open.": "该链接重定向到了 Folio 无法打开的位置。",
  "That link leads to a local network address, so Folio didn't follow it.": "该链接指向本地网络地址，因此 Folio 未打开它。",
  "Couldn't reach {host}.": "无法访问 {host}。",
  "The server responded with {status}.": "服务器返回了 {status}。",
  "That PDF is larger than 300 MB.": "该 PDF 超过 300 MB。",
  "The download was interrupted.": "下载已中断。",
  "That link isn't a PDF or a webpage.": "该链接既不是 PDF，也不是网页。",
  "That isn't a valid web address.": "这不是有效的网址。",
  "Only http:// and https:// links can be opened.": "只能打开 http:// 和 https:// 链接。",
  "Another link is still opening.": "另一个链接仍在打开中。",
  "Couldn't open a verified connection to {host}.": "无法与 {host} 建立经过验证的连接。",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "转换后的网页超过 300 MB。",
  "The webpage took too long to load.": "网页加载时间过长。",
  "Couldn't load that webpage ({code}).": "无法加载该网页 ({code})。",
  "Couldn't load that webpage.": "无法加载该网页。",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "已将 {name} 保存在 {original} 旁边。",
  "It's larger than 300 MB.": "文件超过 300 MB。",
  "It's too large to convert.": "文件过大，无法转换。",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": "转换 .doc 文件需要 Microsoft Word 或 LibreOffice。请安装其中之一，或将文档另存为 .docx。",
  "The document may be damaged or protected with a password.": "文档可能已损坏或受密码保护。",
  "Choose a regular file.": "请选择普通文件。",
  "The file changed while it was being opened.": "文件在打开过程中发生了更改。",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "无法连接到 OpenAI 的登录服务。",
  "Unexpected sign-in token.": "意外的登录令牌。",
  "The sign-in response couldn't be verified. Please try again.": "无法验证登录响应。请重试。",
  "You can close this tab and return to Folio.": "你可以关闭此标签页并返回 Folio。",
  "Sign-in was cancelled.": "登录已取消。",
  "ChatGPT sign-in failed.": "ChatGPT 登录失败。",
  "Couldn't start sign-in.": "无法开始登录。",
  "Sign-in timed out. Please try again.": "登录超时。请重试。",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT 未完成 Folio 的注册。请重试。",
  "ChatGPT sign-in failed. Please try again.": "ChatGPT 登录失败。请重试。",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "未获得 ChatGPT 套餐的使用授权。请重新登录并允许 Folio 使用你的套餐。",
  "Continue with ChatGPT to use your plan in Folio.": "使用 ChatGPT 继续，即可在 Folio 中使用你的套餐。",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "你的 ChatGPT 登录已过期。请使用 ChatGPT 继续以重新连接。",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "无法刷新 ChatGPT 登录状态。请检查网络连接后重试。",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "无法加载 ChatGPT 模型 ({status})。",
  "The answer was cut short. Try a shorter question or a smaller selection.": "回答被截断。请尝试更短的问题或更小的选择范围。",
  "The connection to ChatGPT ended early. Please try again.": "与 ChatGPT 的连接提前断开。请重试。",
  "You've reached a ChatGPT usage limit.": "你已达到 ChatGPT 的使用限额。",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT 暂时不可用。请稍后重试。",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT 无法确认你的套餐。请使用 ChatGPT 继续以重新连接。",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT 无法回答 ({status})。请重试。",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT 无法回答。请重试。",
  "Claude Code isn't installed.": "未安装 Claude Code。",
  "Claude took too long to answer. Please try again.": "Claude 回答时间过长。请重试。",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code 尚未登录。请打开终端，运行 `claude`，然后使用你的 Claude 账户登录。",
  "You've reached your Claude usage limit. {details}": "你已达到 Claude 的使用限额。{details}",
  "Claude Code couldn't answer.": "Claude Code 无法回答。",
  "Another answer is still in progress.": "另一个回答仍在生成中。",
  "Something went wrong.": "出了点问题。",
};
