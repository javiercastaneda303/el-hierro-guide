import React from "react";
import { useTranslation } from "react-i18next";
import './style.css'

export default function ChangeLanguage(){
    const [t, i18n] = useTranslation("global");
    return (
      <div>
        <img onClick={()=> i18n.changeLanguage("cs")} src="/icons/cs.png" className="icon-language" alt="czech_republic" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("de")} src="/icons/de.png" className="icon-language" alt="germany" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("en")} src="/icons/en.png" className="icon-language" alt="united_kingdom" style={{ cursor: 'pointer' }} />        
        <img onClick={()=> i18n.changeLanguage("es")} src="/icons/es.png" className="icon-language" alt="spain" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("pl")} src="/icons/pl.png" className="icon-language" alt="poland" style={{ cursor: 'pointer' }} />
      </div>
    )
    
}