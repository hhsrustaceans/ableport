import Link from "next/link";
import { useTranslations } from "next-intl";
import PanelPreview from "./components/PanelPreview";
import HelpButton from "@/components/HelpButton";
import { panels } from "@/lib/modules/panel";
import WelcomeModal from "./components/WelcomeModal";

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <WelcomeModal />
      <h1 className="cta text-lg sm:text-xl">{t("panel.panels_avail")}</h1>
      <ul className="max-w-md m-auto space-y-2 overflow-y-auto max-h-48">
        {panels.map((panel, key) => (
          <li key={key}>
            <Link href={`view/${panel.id}`} className="block action action-li">
              <PanelPreview panel={panel} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 block sm:flex justify-center sm:gap-5">
        <div className="pb-2 sm:pb-0">
          <HelpButton text={t("panel.help.select_panel")} />
        </div>
        <Link href="./discover" className="cta action action-primary">
          {t("panel.discover")}
        </Link>
      </div>
    </>
  );
}
