import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
import useWindowSize from "../../hooks/useWindowsSize";
require('./style.css')
export default function Home(){
    const [t, i18n] = useTranslation("global");

    const {height,width}= useWindowSize()
    
    return (
      // <div style={{ backgroundImage: 'url(images/home.jpg)', padding: 48, color: '#fff' }}>
      <>
     
      <div className="container_back" >
        <img className="back-image-home" src="images/home.jpg"  style={{left:(width as number) <1147 ?-((16*(height as number)/12)-(width as number)):(-(((16*(height as number)/12)-(width as number))/2))}}/>
      </div>
      <div className="background-home" style={{ paddingTop: '5vw', color: '#fff' }}>

        <Typography variant="h3" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.explore")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.endless")}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #000' }}>
          {t("home.more")}
        </Typography>
      </div>
      </>
    )
    
}