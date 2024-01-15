import Link from "next/link";
import { getDisabilityMeta } from "@/lib/modules/disability";
import { useTranslations } from "next-intl";
import { Panel } from "@/lib/types/models/panel";
import PanelPreview from "../../components/PanelPreview";
import HelpButton from "@/components/HelpButton";

export default function Root({ params }: { params: { id: string } }) {
  const t = useTranslations();

  const panel: Panel = 
    {
      id: "test",
      name: "Test",
      description: "This is a test panel.",
      websiteUrl: "https://example.com",
      imageUrl: "test",
      disabilities: [{ code: "AUT" }, { code: "BLI" }],
    };

  return (
    <>
     <div className="p-1">
      <h1 className="cta">{panel.name}</h1>
      <ul className="max-w-md m-auto space-y-2">
        {panel.disabilities
          .map((d) => getDisabilityMeta(d)!)
          .map((d, index) => (
            <div key={index} aria-label={d.description} title={d.description}>
              <d.Icon />
            </div>
          ))}

        <li>
          <Link
            href={`../panel/${panel.id}`}
            className="block action action-li"
          >
            <PanelPreview panel={panel} />
          </Link>
        </li>

      </ul>
      <div className="mt-4">
        <HelpButton text={t("panel.help.select_panel")} />
      </div>
      </div>
    </>
  );
}
