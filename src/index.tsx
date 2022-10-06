
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initReactI18next, I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from './App';
import reportWebVitals from './reportWebVitals';

import global_cs from './translations/cs/global.json';
import global_de from './translations/de/global.json';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_pl from './translations/pl/global.json';

import './index.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyClients from './pages/MyClients';
import Offer from './pages/Offer';
import Contact from './pages/Contact';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      cs: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        },
        global: global_cs
      },
      de: {
        translation: {
          "Welcome to React": "%%_de_%% alemán Welcome to React and react-i18next"
        },
        global: global_de
      },
      en: {
        translation: {
          "Welcome to React": "%%_en_%% Welcome to React and react-i18next"
        },
        global: global_en
      },
      es: {
        translation: {
          "Welcome to React": "%%_es_%% Bienvenido a React y react-i18next"
        },
        global: global_es
      },
      pl: {
        translation: {
          "Welcome to React": "%%_pl_%% Welcome to React and react-i18next"
        },
        global: global_pl
      }
    },
    lng: "en", // %% PENDIENTE ELIMINAR!!!!  if you're using a language detector, do not define the lng option
    fallbackLng: "en", // %% PENDIENTE C OMPRENDER ¿QUÉ HACE?

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/home/:lang" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/aboutMe/:lang" element={<AboutMe />} />
            <Route path="/aboutMe/" element={<AboutMe />} />
            <Route path="/myClients/:lang" element={<MyClients />} />
            <Route path="/myClients/" element={<MyClients />} />
            <Route path="/offer/:lang" element={<Offer />} />
            <Route path="/offer/" element={<Offer />} />
            <Route path="/contact/:lang" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>                 
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
