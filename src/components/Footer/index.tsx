import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
// import './style.css'
import { phoneWhatsApp, phoneVisible, phoneOld, email, linkedinURL, facebookURL } from "../../constant";
import { useNavigate } from "react-router-dom";
require('./style.css');
export default function Footer(){
    const [t, i18n] = useTranslation("global");
    let navigate = useNavigate();
    const handleClickLinkedin = ()=>{
      navigate(linkedinURL)
    }
    const handleClickFacebook = ()=>{
      navigate(facebookURL)
    }

    return (
      <div>
        <div className="icon-footer">
          <a target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneWhatsApp}&text=${t("header.whatsappMessage")}`}   rel="noreferrer">    
            <img src="/icons/whatsApp.png"  alt="icon-whatsApp" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div>
        <div className="icon-footer">
          <a href='mailto:jo.rudnik@gmail.com?subject=Subject&body=Body%20goes%20here'>          
            <img  src="/icons/email.png" className="_icon-language" alt="icon-email" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div>
        <div className="icon-footer">
          <a target="_blank" href="https://www.linkedin.com/in/joannarudnik/"   onClick={handleClickLinkedin}  rel="noreferrer">
            <img src="/icons/linkedin.png"  alt="icon-linkedin" style={{ width:'100%', cursor: 'pointer' }} />
          </a>        
        </div>
        <div className="icon-footer">
          <a target="_blank" href="https://www.facebook.com/elhierroguide"   onClick={handleClickFacebook}  rel="noreferrer">
            <img src="/icons/facebook.png"  alt="icon-linkedin" style={{ width:'100%', cursor: 'pointer' }} />
          </a>        
        </div>
        <div className="icon-footer">
          <a target="_blank" href={`https://www.instagram.com/el.hierro.guide/`}   rel="noreferrer">
            <img src="/icons/instagram.png"  alt="icon-instagram" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div> 
        <br></br>
        
        <Typography variant="h6" color="initial" sx={{ textShadow: '2px 2px #000', color: '#fff' }}>{phoneVisible}</Typography> 
        <Typography variant="h6" color="initial" sx={{ textShadow: '2px 2px #000', color: '#fff' }}>{email}</Typography> 
      </div>
    )
    
}