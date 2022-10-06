import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import { useTranslation } from "react-i18next";

import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

function App() {

  const { t, i18n } = useTranslation();
  const langURL = useParams().lang || undefined // hay qeu tiparlo que que únicamente tenga unos valoes válidos es y en
  const navigate = useNavigate()
  let location = useLocation().pathname.split('/')[1]

  useEffect(() => {
    const langBrouser = navigator.language
    console.log(`langBrouser: ${langBrouser}`)
    
    const lang = localStorage.getItem('lang')
    
    //  %% ésto hay que mejorarlo
    if (langURL === 'cs' || langURL === 'de' || langURL === 'en' || langURL === 'es' || langURL === 'pl' ) {
      // %% ¿quizás no haga falta ahora el use effect?  coger el idioma por defecto del navegador || local Storage
      i18n.changeLanguage(langURL) // %% OJO  que como useParams().lang no lo pueda usar el instante, falla el sistema
      localStorage.setItem('lang', langURL)
      // localStorage.setItem('component', window.location.pathname.split('/')[1])
      localStorage.setItem('component', location)
    } else if (lang === 'cs' || lang === 'de' || lang === 'en' || lang === 'es' || lang === 'pl' ) {
      i18n.changeLanguage(lang)
    } else if (false){
      // aquí jugaré con el lenguage del navegador
      // si no tiene idioma en el local storage, cambia automático al idioma del navegador
      console.log(langBrouser)
    } else {
      i18n.changeLanguage('en') // ésto no hace falta, ya lo hace el i18n, ponle ruso para testear
    }
    // %% ¿con un find de un array con todas las rutas?
    if (!(location === 'home' || location === 'aboutMe' || location === 'myClients' || location === 'offer' || location === 'contact')) {
        navigate(`home/${i18n.language}`)
    }
    document.title = 'El Hierro guide'
    // if (!window.location.pathname.split('/')[1]) {
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> el logo tengo que eliminarlo pero lno puedo insertar las banderas de la misma forma */}
          {/* <ResponsiveDrawer /> */}
          <PersistentDrawerLeft />
          <Outlet />
          <Header />
          <ChangeLanguage />
      </header>
    </div>
  );
}

export default App;
