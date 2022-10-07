// Deuda técnica, si location es erroneo, lo corrige pero va al inglés siempre,
// si lo tenco en checo tendrá que ir al checo

// Deuda técnica: locationArray[0]   langArray[0]
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import './App.css';

function App() {

  const { t, i18n } = useTranslation();
  const langURL = useParams().lang || 'en' // hay qeu tiparlo 
  const navigate = useNavigate()
  let location = useLocation().pathname.split('/')[1]

  useEffect(() => {
    const langBrouser = navigator.language.split("-")['0']
    console.log(`langBrouser: ${langBrouser}`)
    
    let langStorage = localStorage.getItem('lang')
    let lang = "en"

    // si la ruta es erronea, que la corrija  location
    if (!(location === 'home' || location === 'aboutMe' || location === 'myClients' || location === 'offer' || location === 'contact')) {
      // locationArray[0]
      location = 'home'
      localStorage.setItem('component', location)
    }
    
    if (langURL === 'cs' || langURL === 'de' || langURL === 'en' || langURL === 'es' || langURL === 'pl' ) {
      lang = langURL
      localStorage.setItem('component', location)
    } else if (langStorage === 'cs' || langStorage === 'de' || langStorage === 'en' || langStorage === 'es' || langStorage === 'pl' ) {
      lang = langStorage
    } else {
      lang = 'en'
    }
    
    //  si no ha entrado nunca, que use el lenguage por defecto del navegador
    if (!(langStorage === 'cs' || langStorage === 'de' || langStorage === 'en' || langStorage === 'es' || langStorage === 'pl' ) ) {
      if (langBrouser === 'cs' || langBrouser === 'de' || langBrouser === 'en' || langBrouser === 'es' || langBrouser === 'pl' ) {
        lang = langBrouser
      } else {
        lang = 'en'
      }
    }
    localStorage.setItem('lang', lang)
    i18n.changeLanguage(lang)
    navigate(`${location}/${lang}`)
    document.title = 'El Hierro guide'
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
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
