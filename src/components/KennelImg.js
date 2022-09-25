import React, {useState} from 'react';
import "./KennelImgStyles.css";
import dog1 from "../img/Dog1.jpg"


const dogMan = [
    {name: "Jmeno 1 psa", img: dog1, text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Curabitur sagittis hendrerit ante. Integer tempor. Aliquam in lorem sit amet leo accumsan lacinia. "},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi."},
    {name: "Jmeno 3 psa", img: "../img/Dog1.jpg", text : "Text o psovi."},
    {name: "Jmeno 4 psa", img: "../img/Dog1.jpg", text : "Text o psovi."},


]

const dogWomen = [
    {name: "jmeno 1 psa", text: "Text o psovi."},
    {name: "jmeno 1 psa", text: "Text o psovi."},
    {name: "jmeno 1 psa", text: "Text o psovi."}
]

function KennelImg () {
    const [dogShow, dogSetShow] = useState(false)
    const [bitchShow, bitchSetShow] = useState(false)
    return (
        <div className='kennel-container'>
            <div className='kennel-dog'>
                <div className='dog-man'>
                    <button onClick={()=>dogSetShow(!dogShow)} className='btn btn-kennel'>Psi</button>
                    {dogShow? <div>
                        {dogMan.map((dog, index) => <div key={index} className="dog-box1">
                            <h2>{dog.name}</h2>
                            <div className='dog-info'>
                                <img style={{width:150, height:100}} src={dog.img} alt='dog'/>
                                <p>{dog.text}</p>
                            </div>
                        </div>)}
                    </div>:null}
                </div>
                <div className='dog-woman'>
                    <button onClick={()=>bitchSetShow(!bitchShow)} className='btn btn-kennel'>Feny</button>
                    {bitchShow?<di>
                        {dogWomen.map((dog, index) => <div key={index} className="dog-box2">
                        <h2>{dog.name}</h2>
                        <p>{dog.text}</p>
                    </div>)}
                    </di>:null}
                </div>
            </div>
        </div>
  )
}

export default KennelImg