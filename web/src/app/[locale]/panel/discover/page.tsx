import { useTranslations } from "next-intl";
import PanelSearch from "@/components/PanelSearch";   
import { HomeButton } from "../components/HomeButton";
import HelpButton from "@/components/HelpButton";

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-lg sm:text-xl cta">{t("panel.panels_avail")}</h1>
      <PanelSearch filter={t("panel.search")} />
      <div className="mt-3 flex justify-center sm:gap-5">
        <div className="pb-0 sm:pb-2">
          <HelpButton text={t("panel.help.select_panel")} />
        </div>
        <HomeButton color={"action-primary"} />
      </div>
    </>
  );
}
