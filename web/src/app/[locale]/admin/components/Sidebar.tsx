import { useTranslations } from "next-intl";
import Link from "next/link";

export function Sidebar() {
  const t = useTranslations();
  
  return (
    <aside className="bg-green-600 rounded-r-2xl col-span-3 hidden sm:inline-block">
      <ul className="text-center">
        <Link href={"/admin/experts"}>
          <li className="aside-items rounded-tr-2xl">{t("admin.dropdown.items.experts")}</li>
        </Link>
        <Link href={"/admin/research"}>
          <li className="aside-items">{t("admin.dropdown.items.research")}</li>
        </Link>
        <Link href={"/admin/companies"}>
          <li className="aside-items rounded-br-2xl">{t("admin.dropdown.items.companies")}</li>
        </Link>
      </ul>
    </aside>
  );
}
