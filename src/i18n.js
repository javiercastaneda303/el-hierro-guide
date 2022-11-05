import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// ésta parte creo que hay que eliminarla, no se está usando
const apiKey = "ycid7X3mfns4dCBqifu3MQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",

    ns: ["default"],
    defaultNS: "default",

    // faltaba el "cs" y no pasaba nada ¿eliminamos? 
    supportedLngs: ["es","en","de","pl","cs"],
    
    backend: {
      loadPath: loadPath
    }
  })