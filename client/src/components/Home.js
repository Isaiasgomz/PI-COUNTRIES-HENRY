import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../actions/index'
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'


function Home() {

    const dispatch = useDispatch()
    const AllCountries = useSelector((state) => state.Countries)

    const [currentPage, setCurrentPage] = useState(1)
    let [countriesPerPage, setCountriesPerPage] = useState(10)
    // const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfLastCountry = currentPage * (currentPage === 1 ? countriesPerPage=9 :countriesPerPage)

    const indexOfFirstCouontry= indexOfLastCountry - countriesPerPage
    const currentCountry = AllCountries.slice(indexOfFirstCouontry,indexOfLastCountry) 

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    
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

        <Paginado  countriesPerPage={countriesPerPage} allCountries={AllCountries.length} paginado={paginado}/>

        {
            currentCountry && currentCountry.map(e => {
                return <Card  key={e.id} flag={e.flag} name={e.name} continent={e.continent} />
            })
        }

    </div>
  )
}

export default Home

