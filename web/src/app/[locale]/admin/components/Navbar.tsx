import Logo from "@/components/Logo";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import { ReactElement, useRef } from "react";

export default function Navbar() {
  const t = useTranslations();
  //const width = useRef(window.innerWidth);
  const messages = useMessages();

  return (
    <header className="w-full h-[5.3em] shadow-lg fixed">
      <nav className="h-full mx-5 my-0">
        <ol className="h-full items-center grid grid-cols-3">
          <li className="flex justify-start">
            <a href="#" target="_self">
              <Logo width={180} />
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#" target="_self" className="hidden sm:inline-block">
              <p>{t("common.nav.admin")}</p>
            </a>
          </li>
          <li className="flex justify-end">
            {/* Icons will be placed here */}
          </li>
        </ol>
      </nav>
    </header>
  );
}
