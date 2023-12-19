"use client";

import Modal from "@/components/Modal";
import { type Locale, locales } from "@/lib/modules/i18n";
import { usePathname, useRouter } from "@/lib/modules/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function LanguageModal({
  isShown,
  onClose,
}: {
  isShown: boolean;
  onClose: () => void;
}) {
  const t = useTranslations();
  const currentLocale = useLocale();
  const navigatorLocale = useRef<string>();
  const selection = useRef(currentLocale);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    navigatorLocale.current = navigator.language?.split("-")[0];
  });

  function setLocale(locale: Locale) {
    selection.current = locale.code;
    router.push(pathname, { locale: locale.code });
  }

  return (
    <Modal
      title={t("panel.nav.controls.settings_lang")}
      isOpen={isShown}
      onClose={onClose}
    >
      <div role="radiogroup" className="flex flex-col gap-1">
        {Object.values(locales)
          .sort((_, b) =>
            b.code === (navigatorLocale.current ?? currentLocale) ? 1 : 0
          )
          .map((locale, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="radio"
                id={locale.code}
                value={locale.code}
                checked={locale.code === selection.current}
                onChange={() => setLocale(locale)}
              />
              <label
                className="action action-li block w-full cursor-pointer"
                htmlFor={locale.code}
              >
                <span aria-hidden="true" className="mr-2">
                  {locale.flag}
                </span>
                <span>
                  {/* Locale is determined by browser */}
                  {locale.code === navigatorLocale.current
                    ? t("common.i18n.auto", {
                        locale: t(`common.i18n.locales.${locale.code}`),
                      })
                    : t(`common.i18n.locales.${locale.code}`)}
                </span>
              </label>
            </div>
          ))}
      </div>
    </Modal>
  );
}
