export type Locale = {
  code: string;
  flag: string;
};

export const locales: Record<string, Locale> = {
  nl: {
    code: "nl",
    flag: "🇳🇱",
  },
  en: {
    code: "en",
    flag: "🇬🇧",
  },
};

export const localeCodes = Object.values(locales).map((locale) => locale.code);
