import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getCountryId} from '../actions/index'



function Detail(props) {

 
  const dispatch = useDispatch()

  
  useEffect(() =>{
    dispatch(getCountryId(props.match.params.id))
  },[])
  
  const country = useSelector((state) => state.Detail)
  
  
  return (
    <React.Fragment>

    <div>
      {
        country ?
        <div>

        <h1>Nombre: {country.name}</h1>
        <h3>ID : {country.id}</h3>
        <h3>Capital : {country.capital}</h3>
        <h3>Poblacion : {country.population}</h3>
        <h3>Area : {country.area}</h3>
        <h3>SubRegion : {country.subregion}</h3>
        <img src={country.flag} alt='country'/>
         </div>
          : <p>Loanding ... Please Await One Moment</p>
      }
    </div>
   <div>

      {
        country.activities ? 
      
          country.activities.map(item => (
            <div>
              <h2>Actividades</h2>
              <h4>Nombre {item.name}</h4>
              <h4>Dificultad {item.difficulty}</h4>
              <h4>Duracion {item.duration}</h4>
              <h4>Season {item.season}</h4>
            </div>
            

          ))
        : <p>'Todavia No Hay Actividades Por Mostrar'</p>
        }
   </div>
    
    </React.Fragment>
    
  )
}

export default Detail

// "name": "ski",
// "difficulty": 3,
// "duration": "20:23",
// "season": "Invierno",