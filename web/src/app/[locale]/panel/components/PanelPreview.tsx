import { getDisabilityMeta } from "@/lib/modules/disability";
import { Panel } from "@/lib/types/models/panel";
import IconWeb from "~icons/mdi/web";

export default function PanelPreview({ panel }: { panel: Panel }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold">{panel.name}</p>
        <div className="flex gap-2">
          {panel.disabilities
            .map((d) => getDisabilityMeta(d)!)
            .map((d, index) => (
              <div key={index} aria-label={d.description} title={d.description}>
                <d.Icon />
              </div>
            ))}
        </div>
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
