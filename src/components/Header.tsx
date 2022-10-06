import React from "react";
import { useTranslation } from "react-i18next";

// import iconSpain from '~/icons/spain.png';
// import iconSpain from 'spain.png';
export default function Header(){
    const [t, i18n] = useTranslation("global");
    return (
      <div>
        <p>
          {t("header.welcome")}
        </p>
        <p>
          {t("header.official guide")}
        </p>
        <p>
          {t("header.pasion")}
        </p>
        <p>
          {t("header.know")}
        </p>
        <p>
          {t("header.your friend")}
        </p>
        <p>
          {t("header.camon")}
        </p>
        <p>
          {t("header.i would like")}
        </p>
      </div>
    )
    
}