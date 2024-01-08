import { productName } from "@/lib/modules/config";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations();

  return (
    <section className="flex justify-center">
      <article className="w-2/3 text-center">
        <h1 className="text-2xl mb-5">{t("common.portal.recruit", { product: productName })}</h1>
        <Link href={"/overview"}>
          <button className="action action-primary">{t("recruit.button")}</button>
        </Link>
      </article>
    </section>  
  );
}
