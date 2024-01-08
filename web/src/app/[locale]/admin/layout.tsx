import type { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.admin", { product: productName }),
    description: t("common.meta.description", { product: productName }),
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  const { admin: adminMessages, common: commonMessages } = useMessages();

  return (
    <NextIntlClientProvider
      messages={{ common: commonMessages, admin: adminMessages }}
    >
      <main id="app" className={roboto.className}>
        <Navbar />
        <div>{children}</div>
      </main>
    </NextIntlClientProvider>
  );
}
