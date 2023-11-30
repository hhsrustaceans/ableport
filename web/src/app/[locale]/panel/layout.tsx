import { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "./components/Navbar";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("portal.panel", { product: productName }),
  };
}

export default function Layout() {
  const t = useTranslations();

  return (
    <main>
      <header className="mb-12">
        <a
          className="absolute -top-10 focus:top-0 text-sm py-1 px-2"
          tabIndex={0}
          href="#main"
        >
          {t("a11y.skip_link")}
        </a>
        <Navbar />
      </header>
      <div className="text-center m-12" id="main">
        <slot />
      </div>
    </main>
  );
}
