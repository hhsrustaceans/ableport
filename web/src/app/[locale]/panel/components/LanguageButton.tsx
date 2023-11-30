"use client";

import { useTranslations } from "next-intl";
import IconLanguage from "~icons/tabler/language";

export default function LanguageButton() {
  const t = useTranslations();

  return (
    <button
      className="setting"
      aria-label={t("panel.nav.controls.settings_lang")}
      //   on:click={() => (showDialog = true)}
    >
      <IconLanguage className="text-xl" />
    </button>
  );
}
