import React from 'react';
import "./HeroImgStyles.css";
import Dog1 from "../img/Dog1.jpg";

const HeroImg = () => {
  return (
    <div className='mask'>
      <div className='img'>
        <img className='dogImg' src={Dog1} alt="Dog_img" />
      </div>
      <div className='content'>
        <h1>Vítejte na stránce <span className='logoName'>Sweet Caramel Rose</span></h1>
      </div>
    </div>
  )
}

export default HeroImg