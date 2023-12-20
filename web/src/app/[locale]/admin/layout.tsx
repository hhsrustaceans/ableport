import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { productName } from "@/lib/modules/config";
import {appDataSource} from "../../api/auth/[...nextauth]/ORMserver"
import User from "@/lib/types/models/user";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("common.portal.admin", { product: productName }),
    description: t("common.meta.description", { product: productName })
  };
}

async function test() {
  return await appDataSource.manager.findOneBy(User, {
      name: "Vertcol",
  })
}

export default function Layout() {
  return <p>{JSON.stringify(test())}</p>;
}
