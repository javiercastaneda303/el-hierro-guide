import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../hooks/useWindowsSize";
require('./style.css')

export default function MyClients(){
    const [t, i18n] = useTranslation("global");
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    const {height,width}= useWindowSize()
    return (
      <>
        {/* y si a la imágen le quiero poner un min-width:'200px' */}
        {/* style={{ width:'100%', cursor: 'pointer' }} */}
        <div className="container_back-my-clients" >
            {/* <img className="back-image" src="images/aboutMe.jpg"  style={{left:(width as number) <1600 ?(((16*(height as number)/12)-(width as number))/2):"50%"}}/> */}
            <img className="back-image-my-clients" src="images/myClients.jpg" style={{left:(width as number) <1200 ?(-(((16*(height as number)/12)-(width as number))/1.3)):(((width as number)-1600)/2)}} />
        </div>
        <div className="background-my-clients" >
          <Typography variant="h6" color="inherit" sx={{ textShadow: '1px 1px #fff' }}>
            {t("header.reviewRead")}
          </Typography>
          <a target="_blank" href={`https://goo.gl/maps/2ggw8onGKza2kBbw8`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/1-review.png"  alt="1-review"  />
          </a>
          <br/>
          <a target="_blank" href={`https://goo.gl/maps/YvzmurV2UA5Y7FhS9`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/2-review.png"  alt="1-review"  />
          </a>
          <br/>
          <a target="_blank" href={`https://goo.gl/maps/VgNNFUhyzaWB8k856`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/3-review.png"  alt="1-review"  />
          </a>
          {/* ¿y si en lugar de colocarle la ternaria le ponemos un &&? */}
        {!isReadMore ? 
        <>
          <br/>
          <a target="_blank" href={`https://goo.gl/maps/AgYTyLsKpSGPPw2m9`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/4-review.png"  alt="1-review"  />
          </a>
          <br/>
          <a target="_blank" href={`https://goo.gl/maps/7VhUwbKQ5j7dp1Lb8`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/5-review.png"  alt="1-review"  />
          </a>
          <br/>
          <a target="_blank" href={`https://goo.gl/maps/TmQBosbRZYRHwmoh9`}   rel="noreferrer">
            <img className="imgReview" src="/reviews/6-review.png"  alt="1-review"  />
          </a>
        </>
        : ""}
        <span onClick={toggleReadMore} className="read-or-hide" style={{ textShadow: '1px 1px #fff', cursor: 'pointer', color:'black', fontSize: '2em' }}>
        {isReadMore ? t("header.readMore") : t("header.readLess")}
        </span>
        <br/>
        <Typography  color="inherit" sx={{ textShadow: '1px 1px #fff', fontSize: '2em' }}>
          {t("header.reviewInsert")}
        </Typography>
        <a target="_blank" href={`https://g.page/r/CU3WF18mMrdyEAI/review`}   rel="noreferrer">    
          <Typography  color="inherit" sx={{ textShadow: '1px 1px #fff', fontSize: '2em' }}>
            {t("header.clicHere")}
          </Typography>
          <img className="imgReviewInsert" src="/icons/reviews.jpg"  alt="icon-reviews" style={{ cursor: 'pointer' }} />
        </a>
      </div>
      </>
      /*
      <div style={{ backgroundImage: 'url(images/myClients.jpg)', padding: 24, color: '#fff' }}>
         <div >
          <a target="_blank" href={`https://g.page/r/CU3WF18mMrdyEAI/review`}   rel="noreferrer">    
            <img src="/icons/whatsApp.png"  alt="icon-whatsApp" style={{ width:'100%', cursor: 'pointer' }} />
          </a>
        </div> */
         
      
    )
    
}