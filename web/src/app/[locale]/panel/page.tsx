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
      <h1 className="cta">{t("panel.panels_avail")}</h1>
      <ul className="max-w-md m-auto space-y-2 overflow-y-auto max-h-48">
        {panels.map((panel, key) => (
          <li key={key}>
            <Link href={`view/${panel.id}`} className="block action action-li">
              <PanelPreview panel={panel} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <HelpButton text={t("panel.help.select_panel")} />
        <Link href="./discover" className="cta action action-primary inline-block mx-4">
          {t("panel.discover")}
        </Link>
      </div>
    </>
  );
}
