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
  )
}

export default Detail