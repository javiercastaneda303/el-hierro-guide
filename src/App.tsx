// Deuda técnica: locationArray[0]   langArray[0]
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ChangeLanguage from './components/ChangeLanguage';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import './App.css';
import Footer from './components/Footer';

function App() {
  
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const langURL = useParams().lang || window.location.pathname.split('/').reverse()[0]
  const navigate = useNavigate()
  let location = pathname.split('/')[1]


  useEffect(() => {
    //window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [pathname]);

  useEffect(() => {
    const langBrouser = navigator.language.split("-")['0']
    let langStorage = localStorage.getItem('lang')
    let lang = "en"

    // si la ruta es erronea, que la corrija  location
    if (!(location === 'home' || location === 'aboutMe' || location === 'myClients' || location === 'offer' || location === 'contact')) {
      // locationArray[0]
      location = 'home'
      localStorage.setItem('component', location)
    }
    console.log('langURL')
    console.log(langURL)
    if (langURL === 'cs' || langURL === 'de' || langURL === 'en' || langURL === 'es' || langURL === 'pl' ) {
      console.log('línea 35 ')
      lang = langURL
      console.log(lang)
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
    document.documentElement.lang = i18n.language
  }, [langURL]);
  
  return (
    <div className="App">
      <header className="App-header">
          <PersistentDrawerLeft >
            <Outlet />
            <ChangeLanguage />
            <Footer />
          </ PersistentDrawerLeft>
      </header>
    </div>
  );
}

export default App;
