import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { productName } from "@/lib/modules/config";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.admin", { product: productName }),
  };
}

export default function Layout() {
  return <></>;
}
