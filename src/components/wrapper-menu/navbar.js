import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar () {
    return (
    <nav className="profile-info_navigation">
      <NavLink to='/skills' activeClassName='activeLink' className="navigation_item navigation_item-first">Skills</NavLink>
      <NavLink to='/expirience' activeClassName='activeLink'className="navigation_item">Expirience</NavLink>
      <NavLink to='/education' activeClassName='activeLink' className="navigation_item">Education</NavLink>
      <NavLink to='/hobbie' activeClassName='activeLink'  className="navigation_item">AboutMe</NavLink>
      <NavLink to='/contacts' activeClassName='activeLink' className="navigation_item">Contacts</NavLink>

    </nav>
  
    )
}

export default Navbar