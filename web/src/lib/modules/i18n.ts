import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import nl from "../../i18n/nl.json";
import { writable } from "svelte/store";

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

export let navigatorLocale = writable<string | undefined>();

export function initI18n() {
  for (const locale of Object.values(locales)) {
    addMessages(locale.code, locale.messages);
  }

  const _navigatorLocale = getLocaleFromNavigator()?.split("-")[0];
  navigatorLocale.set(_navigatorLocale);

  init({
    fallbackLocale: locales.nl.code,
    initialLocale:
      _navigatorLocale && Object.keys(locales).includes(_navigatorLocale)
        ? _navigatorLocale
        : null,
  });
}
