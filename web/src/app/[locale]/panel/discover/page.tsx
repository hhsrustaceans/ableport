import { useTranslations } from "next-intl";
import PanelSearch from "@/components/PanelSearch";
import { HomeButton } from "../components/HomeButton";
import HelpButton from "@/components/HelpButton";

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-lg sm:text-xl cta">{t("panel.panels_avail")}</h1>
      <div className="max-w-md m-auto">
        <PanelSearch filter={t("panel.search")} />
      </div>
      <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-5">
        <HelpButton text={t("panel.help.select_panel")} />
        <HomeButton />
      </div>
    </>
  );
}
