import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import { useTranslation } from "react-i18next";

import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('es'); // %% ¿quizás no haga falta ahora el use effect?
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> el logo tengo que eliminarlo pero lno puedo insertar las banderas de la misma forma */}
        <p>
          <ChangeLanguage />
          <Header />
          <ChangeLanguage />
        </p>
      </header>
    </div>
  );
}

export default App;
