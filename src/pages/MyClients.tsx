import React from "react";
import { useTranslation } from "react-i18next";
export default function MyClients(){
    const [t, i18n] = useTranslation("global");
    return (
      <>
        <p>
          {t("header.myClients")}
        </p>
      </>
    )
    
}