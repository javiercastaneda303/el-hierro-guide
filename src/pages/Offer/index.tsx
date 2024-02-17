import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../hooks/useWindowsSize";
require('./style.css');

export default function Contact(){
  /* eslint-disable */
    const [t, i18n] = useTranslation("global");
    const {height, width} = useWindowSize();

    return (
      <>
        <div className="container_back-offer">
            <img className="back-image-offer" src="images/offer.jpg" alt="" style={{left: width! < 700 ? (-(((12*height!)/16)-width!)/1.3) : "0"}} />
        </div>
        <div className="background-offer">
          <Typography variant="h4" color="inherit" sx={{ textShadow: '1px 1px #000', width: '100%', textAlign: 'center' }}>
            {t("offer.tourOperators")}
            <br />
            {t("offer.groups")}
            <br />
            {t("offer.contact")}
          </Typography>
        </div>
      </>
    );
}
