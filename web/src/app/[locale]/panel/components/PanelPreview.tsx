import { getDisabilityMeta } from "@/lib/modules/disability";
import { Panel } from "@/lib/types/models/panel";
import { useTranslations } from "next-intl";
import IconWeb from "~icons/mdi/web";

export default function PanelPreview({ panel }: { panel: Panel }) {
  const t = useTranslations();

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold">{panel.name}</p>
        <ul className="flex gap-2">
          {panel.disabilities
            .map((d) => getDisabilityMeta(d)!)
            .map((d, index) => (
              <li key={index} aria-label={t(d.i18nKey)} title={t(d.i18nKey)}>
                <d.Icon />
              </li>
            ))}
        </ul>
      </div>
      <p>{panel.description}</p>
      <div className="flex items-center gap-1 py-0.5 mt-1 detail">
        <IconWeb />
        <span>{new URL(panel.websiteUrl).host}</span>
        {/* <IconLink /> */}
      </div>
    </div>
  );
}
