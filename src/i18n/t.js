import en from "@/i18n/en.json";
import sr from "@/i18n/sr.json";

const dictionaries = { en, sr };

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}

export function localeHref(locale, path) {
  const suffix = path ? `/${path}` : "";
  return `/${locale}${suffix}`;
}
