import { Disability } from "../types/models/panel";

import IconAutism from "~icons/mdi/infinity";
import IconBlind from "~icons/mdi/eye-remove";
import IconDeaf from "~icons/mdi/ear-hearing-off";
import IconWheelChair from "~icons/mdi/wheelchair-accessibility";
import IconDyslexia from "~icons/mdi/format-clear";
import IconComprehension from "~icons/mdi/alphabetical-off";

export {
  IconAutism,
  IconBlind,
  IconDeaf,
  IconWheelChair,
  IconDyslexia,
  IconComprehension,
};

export type DisabilityMeta = {
  Icon: React.FC;
  i18nKey: string;
};

export function getDisabilityMeta(
  disability: Disability
): DisabilityMeta | undefined {
  return {
    AUT: { Icon: IconAutism, i18nKey: "common.disabilities.autism" },
    BLI: { Icon: IconBlind, i18nKey: "common.disabilities.blindness" },
    DEF: { Icon: IconDeaf, i18nKey: "common.disabilities.deaf" },
    MOT: { Icon: IconWheelChair, i18nKey: "common.disabilities.motor" },
    DYS: { Icon: IconDyslexia, i18nKey: "common.disabilities.dyslexia" },
    COM: {
      Icon: IconComprehension,
      i18nKey: "common.disabilities.comprehension",
    },
  }[disability.code];
}
