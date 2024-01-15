import { Disability } from "../types/models/panel";

import IconAutism from "~icons/mdi/infinity";
import IconBlind from "~icons/mdi/eye-remove";

export { IconAutism, IconBlind };

export type DisabilityMeta = {
  Icon: React.FC;
  description?: string; // TODO: i18n
};

export function getDisabilityMeta(
  disability: Disability
): DisabilityMeta | undefined {
  return {
    AUT: { Icon: IconAutism, description: "Autism" },
    BLI: { Icon: IconBlind, description: "Blind" },
  }[disability.code];
}
