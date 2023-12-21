import Logo from "@/components/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Languages from "~icons/lucide/languages";
import Exit from "~icons/lucide/log-out";

export default function Navbar() {
  const t = useTranslations();

  return (
    <header className="w-full shadow-lg fixed">
      <nav className="mx-5 my-5">
        <ul className="items-center grid grid-cols-3">
          <li className="flex justify-start">
            <Link href="#" target="_self">
              <Logo width={180} />
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="#" target="_self" className="hidden sm:inline-block">
              <p>{t("common.nav.admin")}</p>
            </Link>
          </li>
          <li className="flex justify-end gap-3">
            <button>
              <Languages />
            </button>
            <button>
              <Exit />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
