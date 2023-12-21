"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

export function Sidebar() {
  const t = useTranslations();
  const navigatorLocale = useRef<string>();
  const currentLocale = useLocale();
  
  return (
    <aside className="bg-green-600 rounded-r-2xl col-span-3 hidden sm:inline-block">
      <ul className="text-center">
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/panelmembers")}`}>
          <li className="aside-items rounded-tr-2xl">{t("admin.dropdown.items.panelmembers")}</li>
        </Link>
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/panels")}`}>
          <li className="aside-items">{t("admin.dropdown.items.panels")}</li>
        </Link>
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/organisations")}`}>
          <li className="aside-items rounded-br-2xl">{t("admin.dropdown.items.organisations")}</li>
        </Link>
      </ul>
    </aside>
  );
}
