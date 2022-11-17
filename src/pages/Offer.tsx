import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
export default function Contact(){
    const [t, i18n] = useTranslation("global");
    return (
      <div style={{ backgroundImage: 'url(images/offer.jpg)', padding: 24, color: '#fff' }}>
        <Typography variant="h2" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
        {t("header.offer")}        
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("offer.tourOperators")}          
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("offer.groups")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("offer.contact")}
        </Typography>
          
        
      </div>
    )
    
}