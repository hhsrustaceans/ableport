import IconLabel from "@/components/IconLabel";
import { productName } from "@/lib/modules/config";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations();

  return (
    <section className="flex justify-center">
      <article className="w-2/3 text-center">
        <h1 className="text-2xl mt-10">{t("common.portal.recruit", { product: productName })}</h1>
        <p className="mb-5">{t("recruit.start")}</p>
        <Link href={"./overview"} className="action action-primary inline-block">
          <IconLabel caption={t("recruit.button")} />
        </Link>
      </article>
    </section>  
  );
}
