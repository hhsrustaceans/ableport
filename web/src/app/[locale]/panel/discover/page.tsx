import { useTranslations } from "next-intl";
import PanelSearch from "@/components/PanelSearch";   

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <h1 className="cta">{t("panel.panels_avail")}</h1>
      <PanelSearch filter={t("panel.search")} />
    </>
  );
}
