import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "@/components/Navbar";
import { getTranslations } from "next-intl/server";
import { productName } from "@/lib/modules/config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.recruit", { product: productName }),
    description: t("common.meta.description", { product: productName }),
  };
}

export default function Layout({ children } : { children: ReactNode }) {
  const { recruit: recruitMessages, common: commonMessages } = useMessages();

  return (
    <NextIntlClientProvider messages={{recruit: recruitMessages, common: commonMessages}}>
      <main id="app">
        <Navbar />
        {children}
      </main>
    </NextIntlClientProvider>
  );
}
