import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
// import './style.css'
import { phoneWhatsApp, phoneVisible, phoneOld, email, linkedinURL, instagramURL } from "../../constant";
import { useNavigate } from "react-router-dom";
require('./style.css');
export default function Footer(){
    const [t, i18n] = useTranslation("global");
    let navigate = useNavigate();
  const handleClickLinkedin = ()=>{
    console.log("click")
    navigate(linkedinURL)
  }

    return (
      <div>
        <div className="icon-footer">
          <a href='mailto:email@example.com?subject=Subject&body=Body%20goes%20here'>          
            <img  src="/icons/email.png" className="_icon-language" alt="icon-email" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div>
        <div className="icon-footer">
          <a target="_blank" href="https://www.linkedin.com/in/joannarudnik/"   onClick={handleClickLinkedin}  rel="noreferrer">
            <img src="/icons/linkedin.png"  alt="icon-linkedin" style={{ width:'100%', cursor: 'pointer' }} />
          </a>        
        </div>
        <div className="icon-footer">
          <a target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneWhatsApp}&text=${t("header.whatsappMessage")}`}   rel="noreferrer">    
            <img src="/icons/whatsApp.png"  alt="icon-whatsApp" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div>
        {/* <div className="icon-footer">
          <a target="_blank" href={instagramURL}   rel="noreferrer">
            <img src="/icons/instagram.png"  alt="icon-instagram" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div> */}
        <br></br>
        
        <Typography variant="h6" color="initial">{phoneVisible}</Typography> 
        <Typography variant="h6" color="initial">{email}</Typography> 
      </div>
    )
    
}