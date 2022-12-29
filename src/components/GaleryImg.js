import { useState } from "react";
import "./GaleryImgStyles.css";

const GaleryImg = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openImg, setOpenImg] = useState(false)
    const handleOpenImg=(index) =>{
        setSlideNumber(index) 
        setOpenImg(true)
    }

    return(
        <div>
            {openImg && 
                <div className="slideWrap">
                    
                </div>
            }
            <div className="galleryWrap">
                {
                    galleryImages && galleryImages.map((slide,index) => {
                        return(
                            <div className="singleImg" key={index} onClick={() =>handleOpenImg(index)}>
                                <img src={slide.img} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GaleryImg