import { Panel } from "@/lib/types/models/panel";
import IconWeb from "~icons/mdi/web";

export default function PanelPreview({ panel }: { panel: Panel }) {
  return (
    <div>
      <p className="font-semibold">{panel.name}</p>
      <p>{panel.description}</p>
      <div className="flex items-center gap-1 py-0.5 mt-1 detail">
        <IconWeb />
        <span>{new URL(panel.websiteUrl).host}</span>
        {/* <IconLink /> */}
      </div>
    </div>
  );
}
