import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
export default function Home(){
    const [t, i18n] = useTranslation("global");
    return (
      <div style={{ backgroundImage: 'url(images/home.jpg)', padding: 48, color: '#fff' }}>
        <Typography variant="h3" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.home")}        
        </Typography>
      </div>
    )
    
}