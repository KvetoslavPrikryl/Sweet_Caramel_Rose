import React from 'react';
import "./HeroImgStyles.css";

const HeroImg = () => {
  return (
    <div className='mask'>
      <div className='img'></div>
      <div className='content'>
        <h1>Vítejte na stránce <span className='logoName'>Sweet Caramel Rose</span></h1>
      </div>
    </div>
  )
}

export default HeroImg