import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import EN from './locales/en/translation.json';
import UA from './locales/ua/translation.json';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'ns1',
    resources: {
        en: {
            ns1: EN
        },
        ua: {
            ns1: UA
        }
    }
})

export default i18n;
