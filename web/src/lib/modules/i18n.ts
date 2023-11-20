import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import nl from "../../i18n/nl.json";

export type Locale = {
  code: string;
  flag: string;
  messages: any;
};

export const locales: Record<string, Locale> = {
  nl: {
    code: "nl",
    flag: "🇳🇱",
    messages: nl,
  },
};

export function initI18n() {
  for (const locale of Object.values(locales)) {
    addMessages(locale.code, locale.messages);
  }

  let navigatorLocale = getLocaleFromNavigator()?.split("-")[0];

  init({
    fallbackLocale: locales.nl.code,
    initialLocale:
      navigatorLocale && Object.keys(locales).includes(navigatorLocale)
        ? navigatorLocale
        : null,
  });
}
