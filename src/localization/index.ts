import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Locale } from 'src/types/localization';

import fr from './fr';

export const defaultNS: keyof typeof fr = 'global';
export const resources = {
  fr,
} as const;

export const getLocale = (): Locale => i18n.language as Locale;

export const setLocale = (lng: Locale) => i18n.changeLanguage(lng);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: Object.keys(fr),
    defaultNS,
    resources,
    fallbackLng: ['fr'],
    supportedLngs: ['fr'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
