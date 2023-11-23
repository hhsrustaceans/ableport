import { writable } from "svelte/store";
import {
  init,
  addMessages,
  getLocaleFromNavigator,
  locale as i18nLocale,
} from "svelte-i18n";

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

export const defaultLocale: Locale = locales.nl;

export let navigatorLocale = writable<string | undefined>();

export function initI18n() {
  for (const locale of Object.values(locales)) {
    addMessages(locale.code, locale.messages);
  }

  init({
    fallbackLocale: defaultLocale.code,
    initialLocale: defaultLocale.code,
  });
}

export function hydrateLocale() {
  const _navigatorLocale = getLocaleFromNavigator()?.split("-")[0];
  navigatorLocale.set(_navigatorLocale);

  const preferredLocale = localStorage.getItem("locale");
  const locale = preferredLocale ?? _navigatorLocale;

  if (locale && Object.keys(locales).includes(locale)) {
    i18nLocale.set(locale);
  }
}
