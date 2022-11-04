import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
import './style.css'
import { phoneWhatsApp, phoneVisible, phoneOld, email, linkedinURL, instagramURL } from "../../constant";
import { useNavigate } from "react-router-dom";
export default function Footer(){
    const [t, i18n] = useTranslation("global");
    let navigate = useNavigate();
  const handleClickLinkedin = ()=>{
    console.log("click")
    navigate(linkedinURL)
  }

    return (
      <div>
        <a href='mailto:email@example.com?subject=Subject&body=Body%20goes%20here'>          
        <img  src="/icons/email.png" className="icon-language" alt="icon-email" style={{ cursor: 'pointer' }} />
        </a>

        <a target="_blank" href="mailto:jo.rudnik@gmail.com" rel="noreferrer">          
        <img  src="/icons/email.png" className="icon-language" alt="icon-email" style={{ cursor: 'pointer' }} />
        </a>
        <a /*  target="_blank" href={linkedinURL} */  onClick={handleClickLinkedin} className="icon-footer" rel="noreferrer">
          <img src="/icons/linkedin.png" className="icon-language" alt="icon-linkedin" style={{ cursor: 'pointer' }} />
        </a>        
        <a target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneOld}&text=${t("header.whatsappMessage")}`}  className="icon-footer" rel="noreferrer">    
        <img src="/icons/whatsApp.png" className="icon-language" alt="icon-whatsApp" style={{ cursor: 'pointer' }} />
        </a>
        <a target="_blank" href={instagramURL}  className="icon-footer" rel="noreferrer">
          <img src="/icons/instagram.png" className="icon-language" alt="icon-instagram" style={{ cursor: 'pointer' }} />
        </a>
        <br></br>
        
        <Typography variant="h6" color="initial">{phoneVisible}</Typography> 
        <Typography variant="h6" color="initial">{email}</Typography> 
      </div>
    )
    
}