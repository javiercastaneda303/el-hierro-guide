import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
export default function Home(){
    const [t, i18n] = useTranslation("global");
    return (
      <>
        <Typography variant="h3" color="initial">
          {t("header.home")}        
        </Typography>
      </>
    )
    
}