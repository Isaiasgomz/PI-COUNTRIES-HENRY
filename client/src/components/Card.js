import React from 'react'
import {NavLink} from 'react-router-dom'
import './Card.css'

function Card({flag, name, continent, id}) {
  return (
    <div className='template'>
      <img  src={flag} alt={'Falg of Country'}  />
        <h2>{name}</h2>
      <h4>{continent}</h4>
      <NavLink className={'card-detail'} to={`/detail/${id}`}>
        Detalle
      </NavLink> 
    </div>
  )
}

export default Card