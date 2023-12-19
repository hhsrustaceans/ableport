import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";
import LanguageButton from "./LanguageButton";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className="p-5 flex items-center justify-between">
      <ul className="flex items-center">
        <li>
          <Link
            href="/"
            aria-label={t("common.nav.home")}
            className="p-1 block"
          >
            <Logo />
          </Link>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
        <li>
          <Link href="" className="p-1 block">
            {t("common.nav.admin")}
          </Link>
        </li>
        <li>
          <LanguageButton />
        </li>
      </ul>
    </nav>
  );
}
