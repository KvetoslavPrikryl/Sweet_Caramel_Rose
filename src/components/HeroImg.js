import React from 'react'
import "./HeroImgStyles.css";
import Dog1 from "../img/Dog1.jpg"

const HeroImg = () => {
  return (
    <div>
        <img src={Dog1} alt="Dog_img" />
    </div>
  )
}

export default HeroImg