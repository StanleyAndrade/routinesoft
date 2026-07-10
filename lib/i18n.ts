export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

const dictionaries = {
  pt: {
    home: {
      title: "RoutineSoft",
      description:
        "Desenvolvimento de software, sites e aplicativos.",
    },
  },

  en: {
    home: {
      title: "RoutineSoft",
      description:
        "Software, websites and mobile app development.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}