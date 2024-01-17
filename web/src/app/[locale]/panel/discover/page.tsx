import { useTranslations } from "next-intl";
import PanelSearch from "@/components/PanelSearch";   
import { HomeButton } from "../components/HomeButton";

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-lg sm:text-xl">{t("panel.panels_avail")}</h1>
      <h2 className="cta text-base sm:text-lg">{t("panel.searchHeading")}</h2>
      <PanelSearch filter={t("panel.search")} />
      <div className="mt-4">
        <HomeButton color={"action-primary"} />
      </div>
    </>
  );
}
