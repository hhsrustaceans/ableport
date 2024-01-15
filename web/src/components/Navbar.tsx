import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";
import LanguageButton from "@/components/LanguageButton";
import Link from "next/link";
import Exit from "~icons/lucide/log-out";

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
          <LanguageButton />
        </li>
        <li>
          <Link href={`/logout`}>
            <Exit className="icon-highlight-stroke" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}