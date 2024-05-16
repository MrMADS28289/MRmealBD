import "react-native-get-random-values";
import "@formatjs/intl-getcanonicallocales/polyfill";
import "@formatjs/intl-locale/polyfill";
import "@formatjs/intl-pluralrules/polyfill";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./locales/en.json";
import bn from "./locales/bn.json";

const LANG_KEY = "selectedLanguage";

const getLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANG_KEY);
    if (savedLanguage) {
      return savedLanguage;
    } else {
      return Localization.locale.split("-")[0];
    }
  } catch (error) {
    console.error("Failed to load language from storage", error);
    return Localization.locale.split("-")[0];
  }
};

const setupI18n = async () => {
  const language = await getLanguage();
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

setupI18n();

export default i18n;
