import React from 'react';
import "./FooterStyles.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import GoogleMap from "./googleMaps";

const Footer = () => {
  return (
        <div className="footer-container">
            <div className="cont-left">
                <div className="location">
                    <FaHome size={20} style={{ color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Ulice</p>
                        <p>Město</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                       <FaPhone size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       Tel. číslo
                    </h4>
                    <h4>
                       <FaMailBulk size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       E-mail
                    </h4>
                </div>
            </div>
            <div className="cont-right" style={{width: "100%", height: "290px",}}>
                <GoogleMap />
            </div>
        </div>
  )
}

export default Footer