import { Aid } from "../types/models/panel";

import IconScreenreader from "~icons/mdi/page-next-outline";
import IconTTS from "~icons/mdi/speaker-message";
import IconSTT from "~icons/mdi/microphone-message";

export function getAidMeta() {
  return {
    SCR: { Icon: IconScreenreader, i18nKey: "common.aid.screenreader" },
    STT: { Icon: IconSTT, i18nKey: "common.aid.speechToText" },
    TTS: { Icon: IconTTS, i18nKey: "common.aid.textToSpeech" },
  };
}
