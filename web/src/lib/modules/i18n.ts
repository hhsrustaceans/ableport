import { writable } from "svelte/store";
import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import nl from "../../i18n/nl.json";
import en from "../../i18n/en.json";

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
  en: {
    code: "en",
    flag: "🇬🇧",
    messages: en,
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
