import Link from "next/link";
import { useTranslations } from "next-intl";
import PanelPreview from "../components/PanelPreview";
import HelpButton from "@/components/HelpButton";
import { panels } from "@/lib/modules/panel";

export default function Root() {
  const t = useTranslations();

  return (
    <>
      <h1 className="cta">{t("panel.panels_avail")}</h1>
      <ul className="max-w-md m-auto space-y-2 overflow-y-auto max-h-48">
        {panels.map((panel, key) => (
          <li key={key}>
            <Link
              href={`../view/${panel.id}`}
              className="block action action-li"
            >
              <PanelPreview panel={panel} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <HelpButton text={t("panel.help.select_panel")} />
      </div>
    </>
  );
}
