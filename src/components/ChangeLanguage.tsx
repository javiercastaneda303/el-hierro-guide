import React from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage(){
    const [t, i18n] = useTranslation("global");
    return (
      <div>
        <img onClick={()=> i18n.changeLanguage("cs")} src="/icons/checo.png" className="icon-language" alt="czech_republic" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("de")} src="/icons/germany.png" className="icon-language" alt="germany" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("en")} src="/icons/united_kingdom.png" className="icon-language" alt="united_kingdom" style={{ cursor: 'pointer' }} />        
        <img onClick={()=> i18n.changeLanguage("es")} src="/icons/spain.png" className="icon-language" alt="spain" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("pl")} src="/icons/poland.png" className="icon-language" alt="poland" style={{ cursor: 'pointer' }} />
      </div>
    )
    
}