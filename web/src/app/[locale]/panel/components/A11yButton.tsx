"use client";

import { useTranslations } from "next-intl";
import IconAccessibility from "~icons/radix-icons/accessibility";

export default function A11yButton() {
  const t = useTranslations();

  return (
    <button
      className="setting"
      aria-label={t("panel.nav.controls.settings_a11y")}
    >
      <IconAccessibility className="text-xl icon-highlight-fill" />
    </button>
  );
}
