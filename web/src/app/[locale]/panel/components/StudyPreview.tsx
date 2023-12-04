import { Study } from "@/lib/types/models/study";
import IconWeb from "~icons/mdi/web";

export default function StudyPreview({ study }: { study: Study }) {
  return (
    <div>
      <p className="font-semibold">{study.name}</p>
      <p>{study.description}</p>
      <div className="flex items-center gap-1 py-0.5 mt-1 detail">
        <IconWeb />
        <span>{new URL(study.websiteUrl).host}</span>
        {/* <IconLink /> */}
      </div>
    </div>
  );
}
