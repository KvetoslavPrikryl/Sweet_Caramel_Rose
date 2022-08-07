import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <div className='header'>
        <ul>
            <li>
            <Link to="/">Domu</Link>
            </li>
            <li>
                <Link to="/Chovatelska_stanice">Chovatelska stanice</Link>
            </li>
            <li>
                <Link to="/strihani">Stříhání</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar