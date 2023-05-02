import i18n from 'i18next';
import 'intl-pluralrules'
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en.json';
import es from '../../assets/locales/es.json';
import pt_BR from '../../assets/locales/pt_BR.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    pt_BR: { translation: pt_BR },
  },
  lng: 'pt_BR', // Localization.locale,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});



export default i18n;