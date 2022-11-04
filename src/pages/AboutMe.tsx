import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
export default function AboutMe(){
  const [t, i18n] = useTranslation("global");
  return (
    <>
        <Typography variant="h2" color="initial">
          {t("header.aboutMe")}  %% PENDIENTE ELIMINAR ÉSTA LÍNEA
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.welcome")}          
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.official guide")}
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.pasion")}
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.know")}
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.your friend")}
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.camon")}
        </Typography>
        <Typography variant="h6" color="initial">
          {t("header.i would like")}
        </Typography>
      </>
    )
    
}