import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n
  // .use(LanguageDetector) //comment out for fixed startup language
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: 'fr',  // comment out for systen default lamguage start
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  });


export default i18n;
