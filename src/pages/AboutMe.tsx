import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
export default function AboutMe(){
  const [t, i18n] = useTranslation("global");
  return (
    <div style={{ backgroundImage: 'url(images/aboutMe.jpg)', padding: 24, color: '#fff' }}>
        <Typography variant="h2" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.aboutMe")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.welcome")}          
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.official guide")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.pasion")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.know")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.your friend")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.camon")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.i would like")}
        </Typography>
      </div>
    )
    
}