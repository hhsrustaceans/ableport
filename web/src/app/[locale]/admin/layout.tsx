import type { Metadata } from "next";
import { productName } from "@/lib/modules/config";
import {
  useTranslations,
} from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "./components/Navbar";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.admin", { product: productName }),
    description: t("common.meta.description", { product: productName })
  };
}

export default function layout() {
  const t = useTranslations();

  return (
    <Navbar />
  );
}
