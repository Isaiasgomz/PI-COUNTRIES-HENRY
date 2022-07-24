import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card({flag, name, continent, id}) {
  return (
    <div className='template'>
      <img  src={flag} alt={'Falg of Country'}  />
        <h2>{name}</h2>
      <h4>{continent}</h4>
      <Link to={`/detail/${id}`}>
        <h3>Detalle</h3>
      </Link> 
    </div>
  )
}

export default Card