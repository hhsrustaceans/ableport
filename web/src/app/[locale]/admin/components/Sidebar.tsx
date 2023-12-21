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
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/experts")}`}>
          <li className="aside-items rounded-tr-2xl">{t("admin.dropdown.items.experts")}</li>
        </Link>
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/research")}`}>
          <li className="aside-items">{t("admin.dropdown.items.research")}</li>
        </Link>
        <Link href={`/${navigatorLocale.current ?? currentLocale.concat("/admin/companies")}`}>
          <li className="aside-items rounded-br-2xl">{t("admin.dropdown.items.companies")}</li>
        </Link>
      </ul>
    </aside>
  );
}
