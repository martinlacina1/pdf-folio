import { t } from "./i18n";

/** One line about the updater's state, shared by the start screen and Settings. */
export function updateSummary(status: UpdateStatus): string {
  switch (status.state) {
    case "checking": return t("Checking for updates…");
    case "downloading": return t("Downloading {version} ({percent}%)", { version: status.version ?? "", percent: status.percent ?? 0 });
    case "ready": return t("Version {version} is ready to install.", { version: status.version ?? "" });
    case "available": return t("Folio {version} is available to download.", { version: status.version ?? "" });
    case "latest": return t("You're up to date.");
    case "error": return t("Couldn't check for updates. {message}", { message: t(status.message ?? "Try again.") });
    case "unsupported":
      return status.message === "system" ? t("Updates arrive with your system's software updates (apt).") : t("This copy doesn't update itself.");
    default: return "";
  }
}
