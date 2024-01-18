import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";
import LanguageButton from "@/components/LanguageButton";
import { Link } from "@/lib/modules/navigation";
import Exit from "~icons/lucide/log-out";

export default function Navbar() {
  const t = useTranslations();
  return (
    <nav className="p-5 flex items-center justify-between">
      <ul className="flex items-center">
        <li>
          <Link
            href="/panel"
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
          <Link className="setting block" href="/logout">
            <Exit className="text-xl icon-highlight-stroke" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
