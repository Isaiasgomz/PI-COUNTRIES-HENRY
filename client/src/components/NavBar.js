import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='container'>
        <NavLink className='navlink-home' to={'/home'}>HOME</NavLink>
    </div>
  )
}

export default NavBar