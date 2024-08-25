import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./locales/en.json";
import es from "./locales/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

// Fallback language can be set via environment variables or configuration
const FALLBACK_LANGUAGE = process.env.REACT_APP_FALLBACK_LANGUAGE || "en";

const getSavedLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem("language");
    return savedLanguage || Localization.locale.split("-")[0];
  } catch (error) {
    console.error("Failed to fetch saved language:", error);
    return Localization.locale.split("-")[0];
  }
};

const initI18n = async () => {
  const language = await getSavedLanguage();

  await i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: language,
    fallbackLng: FALLBACK_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development", // Enable debug mode in development
  });
};

initI18n().catch((error) => {
  console.error("Error initializing i18n:", error);
});

export default i18n;
