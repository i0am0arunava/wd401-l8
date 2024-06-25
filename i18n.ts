import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJSON from "./en.json";
import esJSON from "./es.json";
import deJSON from "./de.json"
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { ...enJSON },
      es: { ...esJSON },
      de: {...deJSON}
    },
    fallbackLng: "en",
  });