import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '~/locales/en/home.json';
import HOME_VI from '~/locales/vi/home.json';
import CATEGORY_EN from '~/locales/en/category.json';
import CATEGORY_VI from '~/locales/vi/category.json';
import AUTH_EN from '~/locales/en/auth.json';
import AUTH_VI from '~/locales/vi/auth.json';
import MESSAGE_EN from '~/locales/en/message.json';
import MESSAGE_VI from '~/locales/vi/message.json';
import COMMON_EN from '~/locales/en/common.json';
import COMMON_VI from '~/locales/vi/common.json';
import CART_EN from '~/locales/en/cart.json';
import CART_VI from '~/locales/vi/cart.json';
const resources = {
  en: {
    // namespace
    home: HOME_EN,
    category: CATEGORY_EN,
    auth: AUTH_EN,
    message: MESSAGE_EN,
    common: COMMON_EN,
    cart: CART_EN,
  },
  vi: {
    home: HOME_VI,
    category: CATEGORY_VI,
    auth: AUTH_VI,
    message: MESSAGE_VI,
    common: COMMON_VI,
    cart: CART_VI,
  },
};
const defaultNS = 'home';
i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'vi',
  ns: ['home', 'category', 'auth', 'message', '', 'cart'],
  fallbackLng: 'vi',
  defaultNS: defaultNS,
  fallbackNS: 'common',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
export default i18n;
