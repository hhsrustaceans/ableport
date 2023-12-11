"use client";

import Modal from "@/components/Modal";
import { locales } from "@/lib/modules/i18n";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageModal({
  isShown,
  onClose,
}: {
  isShown: boolean;
  onClose: () => void;
}) {
  const t = useTranslations();
  const currentLocale = useLocale();

  function setLocale() {}

  return (
    <Modal
      title={t("panel.nav.controls.settings_lang")}
      isOpen={isShown}
      onClose={onClose}
    >
      <div
        role="radiogroup"
        className="flex flex-col gap-1"
        onChange={setLocale}
      >
        {Object.values(locales)
          .sort((_, b) => (b.code === currentLocale ? 1 : 0))
          .map((locale, index) => (
            <div key={index} className="flex gap-2">
              {/* <input
                type="radio"
                id={locale.code}
                value={locale.code}
                radioGroup={selection}
              /> */}
            </div>
          ))}
      </div>
    </Modal>
  );
}
