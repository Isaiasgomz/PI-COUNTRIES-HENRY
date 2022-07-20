import React from 'react'

function Card({flag, name, continent}) {
  return (
    <div>
      <img src={flag} alt={'Falg of Country'} width={'200px'} height={'150px'} />
      <h2>{name}</h2>
      <h4>{continent}</h4>
    </div>
  )
}

export default Card