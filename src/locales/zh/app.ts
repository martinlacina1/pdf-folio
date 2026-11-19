// Simplified Chinese UI text for the reader window (App.tsx): toolbar, More menu, navigation, messages. English → Simplified Chinese. See src/i18n.ts.
const zh: Record<string, string> = {
  // Tools
  "Select": "选择",
  "Highlight": "高亮",
  "Draw": "绘图",
  "Text": "文本",
  "Tools": "工具",
  "Automatically highlight selected text": "自动高亮所选文本",
  "Sign": "签名",
  "Add a signature": "添加签名",
  "Edit mode": "编辑模式",
  "Exit edit mode": "退出编辑模式",
  "Edit existing text and images": "编辑现有文本和图像",
  "Save": "保存",
  "Save changes to {name} (Ctrl+S)": "将更改保存到 {name} (Ctrl+S)",
  "Save copy": "保存副本",
  "Save edited copy (Ctrl+Shift+S)": "保存编辑后的副本 (Ctrl+Shift+S)",

  // Colors
  "Yellow": "黄色",
  "Green": "绿色",
  "Blue": "蓝色",
  "Pink": "粉色",
  "Red": "红色",
  "Black": "黑色",
  "Purple": "紫色",

  // Top bar and More menu
  "Back to library": "返回资料库",
  "Toggle sidebar (Ctrl+\\)": "显示/隐藏侧边栏 (Ctrl+\\)",
  "Unsaved changes": "未保存的更改",
  "Ask AI": "询问 AI",
  "Search (Ctrl+F)": "搜索 (Ctrl+F)",
  "New tab": "新建标签页",
  "Close document": "关闭文档",
  "Save a copy": "保存副本",
  "Version history": "版本历史记录",
  "Print": "打印",
  "Document info": "文档信息",
  "PDF dark mode": "PDF 深色模式",
  "Focus mode": "专注模式",
  "Settings": "设置",
  "Keyboard shortcuts": "键盘快捷键",
  "About Folio": "关于 Folio",

  // Annotation options
  "Annotation options": "注释选项",
  "Drawing tool": "绘图工具",
  "Pen": "笔",
  "Rectangle": "矩形",
  "Oval": "椭圆",
  "Arrow": "箭头",
  "Color": "颜色",
  "Undo (Ctrl+Z)": "撤销 (Ctrl+Z)",
  "Done": "完成",

  // Navigation
  "Navigation": "导航",
  "Previous page": "上一页",
  "Next page": "下一页",
  "Page number": "页码",
  "of {n}": "/ {n}",
  "Zoom out (Ctrl −)": "缩小 (Ctrl −)",
  "Zoom in (Ctrl +)": "放大 (Ctrl +)",
  "Rotate (R)": "旋转 (R)",
  "Exit focus mode": "退出专注模式",
  "to exit focus mode": "退出专注模式",

  // Opening
  "Incorrect password. Try again.": "密码错误。请重试。",
  "Couldn't open “{name}”. {reason}": "无法打开“{name}”。{reason}",
  "The file may be damaged.": "文件可能已损坏。",
  "“{name}” isn't a PDF.": "“{name}”不是 PDF。",
  "Opening {host}…": "正在打开 {host}…",
  "Couldn't download from {host}. The site may not allow it.": "无法从 {host} 下载。该网站可能不允许下载。",
  "Couldn't open that link. {reason}": "无法打开该链接。{reason}",
  "Couldn't open the sample document.": "无法打开示例文档。",
  "Converting {name} to PDF…": "正在将 {name} 转换为 PDF…",
  "Couldn't convert “{name}” to PDF. {reason}": "无法将“{name}”转换为 PDF。{reason}",
  "Drop a PDF file or a link to a PDF.": "请拖放 PDF 文件或 PDF 链接。",
  "Drop a PDF or link to open": "拖放 PDF 或链接以打开",

  // Markup
  "Annotations aren’t supported for this document": "此文档不支持注释",
  "Couldn't add the shape": "无法添加形状",
  "Couldn't highlight that selection": "无法高亮所选内容",
  "Highlight removed": "已删除高亮",
  "Markdown copied": "已复制 Markdown",
  "Copy failed": "复制失败",
  "Couldn't export notes": "无法导出笔记",

  // Saving and printing
  "{name} (reordered).pdf": "{name} (已重新排序).pdf",
  "{name} (edited).pdf": "{name} (已编辑).pdf",
  "Copy exported. Couldn’t save its version history on this device.": "副本已导出。无法在此设备上保存其版本历史记录。",
  "Copy exported. History is available for unencrypted PDFs up to 50 MB.": "副本已导出。版本历史记录仅适用于 50 MB 以内的未加密 PDF。",
  "Downloading reordered copy": "正在下载重新排序的副本",
  "Saved a copy with your highlights and notes": "已保存包含高亮和笔记的副本",
  "Download started": "已开始下载",
  "Couldn't save a copy of this document.": "无法保存此文档的副本。",
  "No changes to save": "没有要保存的更改",
  "Saved. Couldn’t keep the previous version in version history.": "已保存。无法在版本历史记录中保留上一版本。",
  "Saved {name}": "已保存 {name}",
  "Couldn't save “{name}”. {reason}": "无法保存“{name}”。{reason}",
  "Couldn't print this document.": "无法打印此文档。",
  "Couldn't print — saved a copy instead": "无法打印，已改为保存副本",
  "Editing requires an unsigned, unencrypted PDF.": "只能编辑未签名、未加密的 PDF。",
  "The document changed. Try again.": "文档已更改。请重试。",

  // Preferences
  "PDF dark mode changed, but couldn't save the preference.": "已更改 PDF 深色模式，但无法保存此偏好设置。",
  "Page scrolling changed, but couldn't save the preference.": "已更改页面滚动方式，但无法保存此偏好设置。",

  // Signatures
  "Signature added. Ctrl+Z to undo; Save copy to export.": "已添加签名。按 Ctrl+Z 撤销；使用“保存副本”导出。",
  "Signature field detected on page {page}": "在第 {page} 页检测到签名域",
  "Possible signature area on page {page}": "第 {page} 页可能有签名区域",
  "Review signature": "查看签名",
  "Dismiss signature suggestion": "关闭签名建议",

  // Updates
  "Folio {version} is ready": "Folio {version} 已准备就绪",
  "Restart to update. Installation on close follows your auto-update setting.":
    "重启以完成更新。关闭时是否安装取决于你的自动更新设置。",
  "Restart": "重启",
  "Later": "稍后",
};
export default zh;
