import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '~/locales/en/home.json';
import HOME_VI from '~/locales/vi/home.json';
import CATEGORY_EN from '~/locales/en/category.json';
import CATEGORY_VI from '~/locales/vi/category.json';

const resources = {
  en: {
    // namespace
    home: HOME_EN,
    category: CATEGORY_EN,
  },
  vi: {
    home: HOME_VI,
    category: CATEGORY_VI,
  },
};
const defaultNS = 'home';
i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'vi',
  ns: ['home', 'category'],
  fallbackLng: 'vi',
  defaultNS: defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
export default i18n;
