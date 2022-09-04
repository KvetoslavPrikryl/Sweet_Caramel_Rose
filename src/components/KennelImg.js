import React from 'react';
import "./KennelImgStyles.css";

const KennelImg = () => {
  return (
    <div className='kennel-container'>
        <div className='img'></div>
        <div className='kennel-content'>
            <div>
                <h2>Rodiče</h2>
                <div className='dog'>
                    <h3>Pes</h3>
                    <p>Popis psa</p>
                </div>
                <div className='dog'>
                    <h3>Fena</h3>
                    <p>Popis psa</p>
                </div>
            </div>
            <h2 className="">Potomci</h2>
            <div className='kennel-dog kennel-text' >
                <button className='btn'>Psi</button>
                <ul>
                    <li>
                        <h3>Jméno psa</h3>
                        <p>Text o psovi</p>
                    </li>
                </ul>
            </div>
            <div className='kennel-bitch-dog kennel-text'>
                <button className='btn'>Feny</button>
                <ul>
                    <li>
                        <h3>Jméno psa</h3>
                        <p>Text o psovi</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default KennelImg