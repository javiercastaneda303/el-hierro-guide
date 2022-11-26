import React from "react";
import { useTranslation } from "react-i18next";
export default function MyClients(){
    const [t, i18n] = useTranslation("global");
    return (
      <div style={{ backgroundImage: 'url(images/myClients.jpg)', padding: 24, color: '#fff' }}>
        <p style={{ textShadow: '1px 1px #000' }}>
          {t("header.myClients")}
        </p>
        <div >
          <a target="_blank" href={`https://g.page/r/CU3WF18mMrdyEAI/review`}   rel="noreferrer">    
            <img src="/icons/whatsApp.png"  alt="icon-whatsApp" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div>
         
      </div>
    )
    
}