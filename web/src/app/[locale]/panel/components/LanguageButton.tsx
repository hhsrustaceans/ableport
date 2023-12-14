"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import IconLanguage from "~icons/tabler/language";
import LanguageModal from "./LanguageModal";

export default function LanguageButton() {
  const t = useTranslations();
  const [isModalShown, showModal] = useState(false);

  return (
    <>
      <button
        className="setting"
        aria-label={t("panel.nav.controls.settings_lang")}
        onClick={() => showModal(true)}
      >
        <IconLanguage className="text-xl icon-highlight-stroke" />
      </button>
      <LanguageModal isShown={isModalShown} onClose={() => showModal(false)} />
    </>
  );
}
