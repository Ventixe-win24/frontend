import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Ventixe-symbol.svg'

const Nav = () => {
  return (
    <nav>
         <div className="logo-section">
            <img src={Logo} alt="Ventixe logo" className="logo" />
            <h2 className="brand">Ventixe</h2>
         </div> 

        <NavLink to="/">Events</NavLink> 
    </nav>


    
  )
}

export default Nav