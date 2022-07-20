import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../actions/index'
import { Link } from 'react-router-dom'
import Card from './Card'


function Home() {

    const dispatch = useDispatch()
    const AllCountries = useSelector((state) => state.Countries)
    console.log(AllCountries)
    useEffect(() => {
        dispatch(getCountries()) 
    },[dispatch]);

    const handleUpdate = (e) =>{
        e.preventDefault()
        dispatch(getCountries())
    }

  return (
    <div>
        <h1>PROYECTO INDIVIDUAL COUNTRIES</h1>
        <button onClick={(e) => handleUpdate(e) }>Traer paises de nuevo</button>
        <Link to={'/createActivity'}>Crear nueva Actividad</Link>

        <select>
            <option value={'continent'}>Continente</option>
            <option value={'Activity'}>Actividad</option>
        </select>

        <select>
            <option value={'Asc'}>Ascedente</option>
            <option value={'Desc'}>Descendente</option>
        </select>

        {
            AllCountries && AllCountries.map(e => {
                return <Card  flag={e.flag} name={e.name} continent={e.continent} />
            })
        }

    </div>
  )
}

export default Home

