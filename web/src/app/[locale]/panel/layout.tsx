import { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "./components/Navbar";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.panel", { product: productName }),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  const { panel: panelMessages, common: commonMessages } = useMessages();

  return (
    <NextIntlClientProvider
      messages={{ common: commonMessages, panel: panelMessages }}
    >
      <main>
        <header className="mb-12">
          <a
            className="absolute -top-10 focus:top-0 text-sm py-1 px-2"
            tabIndex={0}
            href="#main"
          >
            {t("common.a11y.skip_link")}
          </a>
          <Navbar />
        </header>
        <div className="text-center m-12" id="main">
          {children}
        </div>
      </main>
    </NextIntlClientProvider>
  );
}
