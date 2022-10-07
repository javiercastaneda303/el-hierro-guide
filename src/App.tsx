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
  const langURL = useParams().lang || 'en' // hay qeu tiparlo que que únicamente tenga unos valoes válidos es y en
  const navigate = useNavigate()
  let location = useLocation().pathname.split('/')[1]

  useEffect(() => {
    const langBrouser = navigator.language.split("-")['0']
    console.log(`langBrouser: ${langBrouser}`)
    
    let langStorage = localStorage.getItem('lang')
    let lang = "en"
    // si la ruta es erronea, que la corrija
    if (!(location === 'home' || location === 'aboutMe' || location === 'myClients' || location === 'offer' || location === 'contact')) {
      // locationArray[0]
      location = 'home'
      localStorage.setItem('component', location)
      //navigate(`${location}/${langURL}}`)
      console.log("_")
      console.log("~~~~~~~~~~~~~~~~")
      console.log("location: ")
      console.log(location)
      console.log("~~~~~~~~~~~~~~~~")
      console.log("_")
    }

    
    if (langURL === 'cs' || langURL === 'de' || langURL === 'en' || langURL === 'es' || langURL === 'pl' ) {
      // %% ¿quizás no haga falta ahora el use effect?  coger el idioma por defecto del navegador || local Storage
      i18n.changeLanguage(langURL) // %% OJO  que como useParams().lang no lo pueda usar el instante, falla el sistema
      /// localStorage.setItem('lang', langURL)
      // localStorage.setItem('component', window.location.pathname.split('/')[1])
      localStorage.setItem('component', location)
    } else if (langStorage === 'cs' || langStorage === 'de' || langStorage === 'en' || langStorage === 'es' || langStorage === 'pl' ) {
      lang = langStorage
      i18n.changeLanguage(langStorage)
      // navigate(`${location}/${lang}`)
    } else {
      lang = 'en' // %% ojo que al mover location, viene por defecto a en ¿aquí está el fallo? 
      i18n.changeLanguage('en') // ésto no hace falta, ya lo hace el i18n, ponle ruso para testear
      // navigate(`${location}/en`)
    }
    
    //  si no ha entrado nunca, que use el lenguage por defecto del navegador
    if (!(langStorage === 'cs' || langStorage === 'de' || langStorage === 'en' || langStorage === 'es' || langStorage === 'pl' ) ) {
      console.log("no tengo el idioma")
      console.log("langBrouser: ")
      console.log(langBrouser)
      if (langBrouser === 'cs' || langBrouser === 'de' || langBrouser === 'en' || langBrouser === 'es' || langBrouser === 'pl' ) {
        console.log("entro en el langBrouser")
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$")
        // localStorage.setItem('lang', langBrouser)
        lang = langBrouser
        i18n.changeLanguage(langBrouser)
        // navigate(`${location}/${langBrouser}}`)
      } else {
        // navigate(`${location}/${langArray['0']}}`)
        // i18n lenguage por defecto %%
        // navigate(`${location}/en`)

        // %%%%%% ojo que al mover location, viene por defecto a en ¿aquí está el fallo? 
        lang = 'en'
        i18n.changeLanguage('en')
      }
    }
    // localStorage.setItem('lang', i18n.language)
    localStorage.setItem('lang', lang)
    i18n.changeLanguage(lang)
    navigate(`${location}/${lang}`)
    // navigate(`${location}/${langBrouser}`)
    document.title = 'El Hierro guide'
    // if (!window.location.pathname.split('/')[1]) {
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> el logo tengo que eliminarlo pero lno puedo insertar las banderas de la misma forma */}
          {/* <ResponsiveDrawer /> */}
          <PersistentDrawerLeft >
            <Outlet />
            <Header />
            <ChangeLanguage />
          </ PersistentDrawerLeft>
      </header>
    </div>
  );
}

export default App;
