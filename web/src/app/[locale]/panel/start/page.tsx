import Link from "next/link";
import { useTranslations } from "next-intl";
import { Panel } from "@/lib/types/models/panel";
import PanelPreview from "../components/PanelPreview";
import HelpButton from "../components/HelpButton";

export default function Root() {
  const t = useTranslations();

  const panels: Panel[] = [
    {
      id: "test",
      name: "Test",
      description: "This is a test panel.",
      websiteUrl: "https://example.com",
      imageUrl: "test",
    },
  ];

  return (
    <>
      <h1 className="cta">{t("panel.panels_avail")}</h1>
      <ul className="max-w-md m-auto space-y-2">
        {panels.map((panel, key) => (
          <li key={key}>
            <Link
              href={`../panel/${panel.id}`}
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
