import HelpButton from "@/components/HelpButton";
import { useTranslations } from "next-intl";

export default function OverviewPage() {
  const t = useTranslations();

  return (
    <section className="w-full flex justify-center">
      <article className="w-7/12">
        <h1 className="text-3xl">{t("admin.overview.title")}</h1>
        <p className="mt-5">{t("admin.overview.description")}</p>
        <HelpButton text="s" />
      </article>
    </section>
  );
}
