import { useTranslations } from "next-intl";
import IconLabel from "@/components/IconLabel";
import Link from "next/link";

export default function Root() {
  const t = useTranslations();
  return <>
  <h1 className="cta">
        {t("panel.welcome.message", { action: t("panel.welcome.button") })}
      </h1>
      <Link href="start" className="action action-primary inline-block">
        <IconLabel caption={t("panel.welcome.button")} />
      </Link>
  </>;
}
