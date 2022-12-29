import GaleryImg from "./GaleryImg"
import "./CuttingGraleryStyles.css"

function CuttingGalery () {
    const galleryImages = [
        {img: "../img/Dog1.jpg"},
        {img: "../img/Dog2.jpg"},
        {img: "../img/Logo.jpg"}
    ]

    return(
        <div className='cuting-galery'>
            <h2>Galerie</h2>
            <GaleryImg galleryImages={galleryImages}/>
        </div>
    )
}

export default CuttingGalery