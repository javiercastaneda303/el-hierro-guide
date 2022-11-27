import React from "react";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography'
// import useWindowSize from "../../hooks/useWindowsSize";
require('./style.css')
export default function AboutMe(){
  const [t, i18n] = useTranslation("global");
  // const {height,width}= useWindowSize()
  return (
    // <div style={{ backgroundImage: 'url(images/aboutMe.jpg)', padding: 24, color: '#fff' }}>
    <>
    <div className="container_back" >
        {/* <img className="back-image" src="images/aboutMe.jpg"  style={{left:(width as number) <1600 ?(((16*(height as number)/12)-(width as number))/2):"50%"}}/> */}
        <img className="back-image" src="images/aboutMe.jpg" />
    </div>
    <div className="background-immage-about-me" >
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.welcome")}          
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.official guide")}
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.pasion")}
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.know")}
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.your friend")}
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.camon")}
        </Typography>
        <Typography variant="h6" className="textShadow-about-me" sx={{ textShadow: '1px 1px #000' }}>
          {t("header.i would like")}
        </Typography>
      </div>
    </>
    )
    
}