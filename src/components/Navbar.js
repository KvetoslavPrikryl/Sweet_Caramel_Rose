import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <div className='header'>
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
        </ul>
    </div>
  )
}

export default Navbar