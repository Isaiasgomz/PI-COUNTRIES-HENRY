import React from 'react'
import {Link} from 'react-router-dom'


function Landing() {
  return (
    <div>
      
     
        <Link to={'/home'}>Ir a la pagina de inicio</Link>
      
      <div>
      <img alt='map all word' src='../utils/coronavirus-mundo.jpg' width={'200px'} height={'100px'}/>
      </div>
    </div>
  )
}

export default Landing