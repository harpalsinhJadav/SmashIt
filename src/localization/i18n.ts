import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';

const resources = {
    en: { translation: en },
};

const languages = RNLocalize.getLocales().map(locale => locale.languageCode);

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: languages[0] || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
