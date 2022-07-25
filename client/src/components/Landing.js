import React from 'react'
import {NavLink} from 'react-router-dom'
import intro from '../utils/coronavirus-mundo.jpg'
import './Landing.css'


function Landing() {
  return (
    <div className='landing'>
      
     <div className='landing-presentation'>
        <h1>COUNTRY</h1>
        <h2>Planifica las activdades turisticas <br/> favoritas en el pais que te encuntres </h2>
        <NavLink  to={'/home'}>
          <button className={'landing-home'}>HOME</button>
          </NavLink>
     </div>
      
      
      <img className='landing-img' alt='map all word' src={intro} />
      
      
    </div>
  )
}

export default Landing