import type { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import "../style.css";
import { getTranslations } from "next-intl/server";

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
      <main id="app">
        {children}
      </main>
    </NextIntlClientProvider>
  );
}
