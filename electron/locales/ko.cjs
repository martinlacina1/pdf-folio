// Korean text for electron/i18n.cjs: English → Korean.
module.exports = {
  "Save": "저장",
  "Save as": "다른 이름으로 저장",
  "Do you want to save your changes before closing Folio?": "Folio를 닫기 전에 변경 내용을 저장하시겠습니까?",
  // main.cjs: opening and saving files
  "This file can't be saved in place.": "이 파일은 원래 위치에 저장할 수 없습니다.",
  "Nothing to save.": "저장할 내용이 없습니다.",
  "Couldn't open file": "파일을 열 수 없음",
  "Couldn't convert “{name}” to PDF. {reason}": "“{name}”을(를) PDF로 변환할 수 없습니다. {reason}",
  "Couldn't convert “{name}” to PDF.": "“{name}”을(를) PDF로 변환할 수 없습니다.",

  // main.cjs: camera permission
  "Use camera for signature?": "서명에 카메라를 사용하시겠습니까?",
  "Allow Folio to use your camera to capture a signature?": "Folio가 서명을 촬영하기 위해 카메라를 사용하도록 허용하시겠습니까?",
  "Camera images are processed on this device. No microphone is requested.": "카메라 이미지는 이 기기에서 처리됩니다. 마이크 권한은 요청하지 않습니다.",
  "Allow camera": "카메라 허용",
  "Cancel": "취소",

  // main.cjs: closing with unsaved changes
  "Close without saving": "저장하지 않고 닫기",
  "Unsaved changes": "저장되지 않은 변경 내용",
  "One or more tabs have unsaved changes.": "하나 이상의 탭에 저장되지 않은 변경 내용이 있습니다.",

  // main.cjs: links
  "Open link?": "링크를 여시겠습니까?",
  "Open this email link in your mail app?": "이 이메일 링크를 메일 앱에서 여시겠습니까?",
  "Open {host} in your browser?": "브라우저에서 {host}을(를) 여시겠습니까?",
  "Open mail app": "메일 앱 열기",
  "Open link": "링크 열기",
  "Open a local address?": "로컬 주소를 여시겠습니까?",
  "Open {host}?": "{host}을(를) 여시겠습니까?",
  "Allow {origin} to connect to the following resolved addresses?\n\n{addresses}\n\n{url}": "{origin}이(가) 다음 확인된 주소에 연결하도록 허용하시겠습니까?\n\n{addresses}\n\n{url}",
  "Open": "열기",

  // main.cjs: opening a link (download)
  "The download timed out.": "다운로드 시간이 초과되었습니다.",
  "That link redirects too many times.": "링크의 리디렉션 횟수가 너무 많습니다.",
  "That link redirects somewhere Folio can't open.": "링크가 Folio에서 열 수 없는 위치로 리디렉션됩니다.",
  "That link leads to a local network address, so Folio didn't follow it.": "링크가 로컬 네트워크 주소로 연결되므로 Folio가 열지 않았습니다.",
  "Couldn't reach {host}.": "{host}에 연결할 수 없습니다.",
  "The server responded with {status}.": "서버가 {status} 상태로 응답했습니다.",
  "That PDF is larger than 300 MB.": "PDF가 300MB보다 큽니다.",
  "The download was interrupted.": "다운로드가 중단되었습니다.",
  "That link isn't a PDF or a webpage.": "링크가 PDF나 웹 페이지가 아닙니다.",
  "That isn't a valid web address.": "올바른 웹 주소가 아닙니다.",
  "Only http:// and https:// links can be opened.": "http:// 및 https:// 링크만 열 수 있습니다.",
  "Another link is still opening.": "다른 링크를 아직 여는 중입니다.",
  "Couldn't open a verified connection to {host}.": "{host}에 대한 확인된 연결을 열 수 없습니다.",

  // webpage.cjs
  "The converted webpage is larger than 300 MB.": "변환된 웹 페이지가 300MB보다 큽니다.",
  "The webpage took too long to load.": "웹 페이지를 로드하는 데 시간이 너무 오래 걸렸습니다.",
  "Couldn't load that webpage ({code}).": "웹 페이지를 로드할 수 없습니다({code}).",
  "Couldn't load that webpage.": "웹 페이지를 로드할 수 없습니다.",

  // convert.cjs, document-files.cjs, docx-parts.cjs (userMessage texts, translated where main.cjs shows them)
  "Saved {name} next to {original}.": "{name}을(를) {original}과(와) 같은 위치에 저장했습니다.",
  "It's larger than 300 MB.": "파일이 300MB보다 큽니다.",
  "It's too large to convert.": "파일이 너무 커서 변환할 수 없습니다.",
  "Converting .doc files needs Microsoft Word or LibreOffice. Install either one, or save the document as .docx.": ".doc 파일을 변환하려면 Microsoft Word 또는 LibreOffice가 필요합니다. 둘 중 하나를 설치하거나 문서를 .docx로 저장하세요.",
  "The document may be damaged or protected with a password.": "문서가 손상되었거나 암호로 보호되어 있을 수 있습니다.",
  "Choose a regular file.": "일반 파일을 선택하세요.",
  "The file changed while it was being opened.": "파일을 여는 동안 파일이 변경되었습니다.",

  // ai.cjs: ChatGPT sign-in
  "Couldn't reach OpenAI's sign-in service.": "OpenAI 로그인 서비스에 연결할 수 없습니다.",
  "Unexpected sign-in token.": "예기치 않은 로그인 토큰입니다.",
  "The sign-in response couldn't be verified. Please try again.": "로그인 응답을 확인할 수 없습니다. 다시 시도하세요.",
  "You can close this tab and return to Folio.": "이 탭을 닫고 Folio로 돌아가도 됩니다.",
  "Sign-in was cancelled.": "로그인이 취소되었습니다.",
  "ChatGPT sign-in failed.": "ChatGPT 로그인에 실패했습니다.",
  "Couldn't start sign-in.": "로그인을 시작할 수 없습니다.",
  "Sign-in timed out. Please try again.": "로그인 시간이 초과되었습니다. 다시 시도하세요.",
  "ChatGPT didn't finish registering Folio. Please try again.": "ChatGPT에서 Folio 등록을 완료하지 못했습니다. 다시 시도하세요.",
  "ChatGPT sign-in failed. Please try again.": "ChatGPT 로그인에 실패했습니다. 다시 시도하세요.",
  "ChatGPT plan usage wasn't granted. Sign in again and allow Folio to use your plan.": "ChatGPT 플랜 사용 권한이 부여되지 않았습니다. 다시 로그인하여 Folio가 플랜을 사용하도록 허용하세요.",
  "Continue with ChatGPT to use your plan in Folio.": "Folio에서 플랜을 사용하려면 ChatGPT로 계속하세요.",
  "Your ChatGPT sign-in has ended. Continue with ChatGPT to reconnect.": "ChatGPT 로그인이 만료되었습니다. 다시 연결하려면 ChatGPT로 계속하세요.",
  "Couldn't refresh your ChatGPT sign-in. Check your connection and try again.": "ChatGPT 로그인을 갱신할 수 없습니다. 연결을 확인하고 다시 시도하세요.",

  // ai.cjs: answers
  "Couldn't load ChatGPT models ({status}).": "ChatGPT 모델을 불러올 수 없습니다({status}).",
  "The answer was cut short. Try a shorter question or a smaller selection.": "답변이 중간에 끊겼습니다. 더 짧은 질문이나 더 작은 선택 영역으로 시도하세요.",
  "The connection to ChatGPT ended early. Please try again.": "ChatGPT 연결이 일찍 종료되었습니다. 다시 시도하세요.",
  "You've reached a ChatGPT usage limit.": "ChatGPT 사용 한도에 도달했습니다.",
  "ChatGPT is temporarily unavailable. Please try again in a moment.": "ChatGPT를 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도하세요.",
  "ChatGPT couldn't confirm your plan. Continue with ChatGPT to reconnect.": "ChatGPT에서 플랜을 확인할 수 없습니다. 다시 연결하려면 ChatGPT로 계속하세요.",
  "ChatGPT couldn't answer ({status}). Please try again.": "ChatGPT가 답변하지 못했습니다({status}). 다시 시도하세요.",
  "ChatGPT couldn't answer. Please try again.": "ChatGPT가 답변하지 못했습니다. 다시 시도하세요.",
  "Claude Code isn't installed.": "Claude Code가 설치되어 있지 않습니다.",
  "Claude took too long to answer. Please try again.": "Claude의 답변이 너무 오래 걸렸습니다. 다시 시도하세요.",
  "Claude Code isn't signed in. Open a terminal, run `claude`, and sign in with your Claude account.": "Claude Code에 로그인되어 있지 않습니다. 터미널을 열고 `claude`를 실행한 다음 Claude 계정으로 로그인하세요.",
  "You've reached your Claude usage limit. {details}": "Claude 사용 한도에 도달했습니다. {details}",
  "Claude Code couldn't answer.": "Claude Code가 답변하지 못했습니다.",
  "Another answer is still in progress.": "다른 답변을 아직 생성하는 중입니다.",
  "Something went wrong.": "문제가 발생했습니다.",
};
