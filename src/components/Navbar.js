import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <div className={click ? "navMenu active": "navMenu"}>
          <ul>
            <li>
                <Link to="/"><button className="btn">Domu</button></Link>
            </li>
            <li>
                <Link to="/Chovatelska_stanice"> <button className='btn'>Chovatelska stanice</button></Link>
            </li>
            <li>
                <Link to="/strihani"><button className="btn">Stříhání</button></Link>
            </li>
            <li>
                <Link to="/kontakt"><button className="btn">Kontakt</button></Link>
            </li>
          </ul>
      </div>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}} />):(<FaBars size={20} style={{color:"white"}} />)}
        </div>
    </div>
    
  )
}

export default Navbar