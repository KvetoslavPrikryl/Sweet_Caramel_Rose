import React, {useState} from 'react';
import "./KennelImgStyles.css";
import bg_img from "../img/Dog2.jpg"
import dog1 from "../img/Dog1.jpg";
import {Link} from "react-router-dom"

const dogMan = [
    {name: "Jmeno 1 psa", img: dog1, text : "Ocenění ", link : "odkaz"},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 3 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 4 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 5 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
]

const dogWomen = [
    {name: "Jmeno 1 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 1 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 1 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 1 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
]
const dogChildern = [
    {name: "Jmeno 1 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
    {name: "Jmeno 2 psa", img: "../img/Dog1.jpg", text : "Text o psovi.", link : "odkaz"},
]

function KennelImg () {
    const [dogShow, dogSetShow] = useState(false)
    const [bitchShow, bitchSetShow] = useState(false)
    const [childShow, childSetShow] = useState(false)
    return (
        <div className='kennel-container'>
            <img src={bg_img} className='bg-img' alt='bg_img' />
            <h1 className='kennel-h1'>Sweet caramel rose</h1>
            <h2 className='kennel-h2'>Naši</h2>
            <div className='kennel-dog'>
                <div className='dog-man'>
                    <button onClick={()=>dogSetShow(!dogShow)} className='btn btn-kennel'>Psi</button>
                    {dogShow? <div>
                        {dogMan.map((dog, index) => <div key={index} className="dog-box">
                            <h2>{dog.name}</h2>
                            <Link className='dog-link' to={dog.link}>Odkaz</Link>
                            <div className='dog-info'>
                                <p>{dog.text}</p>
                                <div className='dog-info-galery'>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                </div>
                            </div>
                            
                        </div>)}
                        <hr className='hr' />
                    </div>:null}
                </div>
                <div className='dog-woman'>
                    <button onClick={()=>bitchSetShow(!bitchShow)} className='btn btn-kennel'>Feny</button>
                    {bitchShow?<di>
                        {dogWomen.map((dog, index) => <div key={index} className="dog-box">
                            <h2>{dog.name}</h2>
                            <Link className='dog-link' to={dog.link}>Odkaz</Link>
                            <div className='dog-info'>
                                <p>{dog.text}</p>
                                <div className='dog-info-galery'>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                </div>
                            </div>
                    </div>)}
                    <hr className='hr' />
                    </di>:null}
                </div>
                <div className='dog-childern'>
                    <button onClick={()=>childSetShow(!childShow)} className='btn btn-kennel'>Štěňata</button>
                    {childShow? <div>
                        {dogChildern.map((dog, index) => <div key={index} className="dog-box">
                            <h2>{dog.name}</h2>
                            <Link className='dog-link' to={dog.link}>Odkaz</Link>
                            <div className='dog-info'>
                                <p>{dog.text}</p>
                                <div className='dog-info-galery'>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                    <img style={{width:150, height:100}} className="dog-info-img" src={dog.img} alt='dog'/>
                                </div>
                            </div>
                        </div>)}
                        <hr className='hr' />
                    </div>:null}
                </div>
            </div>
        </div>
  )
}

export default KennelImg