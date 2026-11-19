// Builds the Windows installer with your own icons from local/ (icon.ico for the app and PDF files, icon.png for
// the window), without committing them: the tracked icons are put back afterwards. local/ is git-ignored.
// Run: npm run dist:win:local   (output: release/Folio-Setup.exe)
import { copyFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const swaps = [["local/icon.ico", "build/icon.ico"], ["local/icon.png", "electron/icon.png"]]
  .filter(([from]) => existsSync(path.join(root, from)));
if (!swaps.length) throw new Error("Put icon.ico (and optionally icon.png) into the local/ folder first.");

const run = (cmd) => execSync(cmd, { cwd: root, stdio: "inherit", env: { ...process.env, ELECTRON_RUN_AS_NODE: "" } });
try {
  for (const [from, to] of swaps) copyFileSync(path.join(root, from), path.join(root, to));
  run("npm run build");
  run("npx electron-builder --win nsis --publish never");
} finally {
  run(`git checkout -- ${swaps.map(([, to]) => to).join(" ")}`);
}
