import Link from "next/link";
import { useTranslations } from "next-intl";
import HelpButton from "@/components/HelpButton";

export default function Root() {
  const t = useTranslations();

  return (
    <>

      <h1 className="cta">{t("common.settings.settings")}</h1>

      <div className="mt-4">
        <HelpButton text={t("common.settings.help", {button: t("common.settings.save")})} />
      </div>
    </>
  );
}
