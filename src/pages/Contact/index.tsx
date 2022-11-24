import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import FormContact from "../../components/FormContact";
require('./style.css')
export default function Contact(){
    const [t, i18n] = useTranslation("global");
    return (      
      <div className="background-immage" >
        <Typography variant="h6" className="textShadow">
          {t("header.contact")}
        </Typography>
        <FormContact />
      </div>
    )
    
}