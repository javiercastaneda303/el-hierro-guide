import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../hooks/useWindowsSize";
require('./style.css')
export default function Contact(){
    const [t, i18n] = useTranslation("global");
    const {height,width}= useWindowSize()
    return (
      <>
        <div className="container_back-offer" >
            {/* <img className="back-image" src="images/aboutMe.jpg"  style={{left:(width as number) <1600 ?(((16*(height as number)/12)-(width as number))/2):"50%"}}/> */}
            <img className="back-image-offer" src="images/offer.jpg" style={{left:(width as number) <70 ?(-(((12*(height as number)/16)-(width as number))/1.3)):"0"}} />
        </div>
        <div className="background-offer" >
          <Typography variant="h4" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
            {t("offer.tourOperators")}
            <br />
            {t("offer.groups")}
            <br />
            {t("offer.contact")}
          </Typography>
          <br/>          
        </div>
      </>
    )
    
}