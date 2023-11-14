import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import nl from "../../i18n/nl.json";

export function initI18n() {
  addMessages("nl", nl);
  init({ fallbackLocale: "nl", initialLocale: getLocaleFromNavigator() });
}
