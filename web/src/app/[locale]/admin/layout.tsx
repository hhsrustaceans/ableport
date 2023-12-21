import type { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "./components/Navbar";
import React, { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.admin", { product: productName }),
    description: t("common.meta.description", { product: productName })
  };
}

export default function Layout({ children } : { children: ReactNode }) {
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}
