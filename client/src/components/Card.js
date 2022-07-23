import React from 'react'
import {Link} from 'react-router-dom'

function Card({flag, name, continent, id}) {
  return (
    <div>
      <img src={flag} alt={'Falg of Country'} width={'200px'} height={'150px'} />
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link> 
      <h4>{continent}</h4>
    </div>
  )
}

export default Card