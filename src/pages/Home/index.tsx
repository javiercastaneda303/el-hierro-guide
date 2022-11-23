import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
require('./style.css')
export default function Home(){
    const [t, i18n] = useTranslation("global");
    return (
      // <div style={{ backgroundImage: 'url(images/home.jpg)', padding: 48, color: '#fff' }}>
      <div className="background-immage">
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.explore")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.endless")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.more")}
        </Typography>
      </div>
    )
    
}