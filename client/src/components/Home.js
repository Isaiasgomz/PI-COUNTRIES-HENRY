import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries, filteredCountryByType, filterByOrder, filterByPopulation} from '../actions/index'
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'
import SearchBar from './SearchBar'


function Home() {

    const dispatch = useDispatch()
    const AllCountries = useSelector((state) => state.Countries)
    // const allActivities = useSelector((state) => state.Activities)

    const [ordenado, setOrdenado]  = useState('')
    // const [orderPopulation, setOrderPopulation] = useState('')
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

    function handleFilteredByType (e){
        e.preventDefault()
        dispatch(filteredCountryByType(e.target.value))
    }

    // function handleFilterCreated(e){
    //     e.preventDefault()
    //     dispatch(filterActivity(e.target.value))
    // }

    function handleFilterByPopulation(e){
        e.preventDefault()
        dispatch(filterByPopulation(e.target.value))
        setCurrentPage(1)
        setOrdenado(`ordenado ${e.target.value}`)

    }

    function handleFilterByName(e){
        e.preventDefault()
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1)
        setOrdenado(`ordenado ${e.target.value}`)

    }

  return (
    <div>
        
        <h1>PROYECTO INDIVIDUAL COUNTRIES</h1>
        <button onClick={(e) => handleUpdate(e) }>Traer paises de nuevo</button>
        <Link to={'/createActivity'}>Crear nueva Actividad</Link>


        <SearchBar/>
        
       


        <select onClick={(e) =>handleFilteredByType(e)}>
            <option >CONTINENTE</option>
            <option value={'all'}>Todos Los Continentes</option>
            <option value={'Africa'}>Africa</option>
            <option value={'Asia'}>Asia</option>
            <option value={'Europe'}>Europa</option>
            <option value={'North America'}>North America</option>
            <option value={'South America'}>South America</option>
            <option value={'Oceania'}>Oceania</option>
        </select>

        <select onClick={(e) => handleFilterByPopulation(e) }>
            <option >POBLACION</option>
            <option value={'Asc'}>Ascedente</option>
            <option value={'Desc'}>Descendente</option>
        </select>



        <select onClick={(e) => handleFilterByName(e) }>
            <option >ORDEN</option>
            <option value={'Asc'}>Ascedente</option>
            <option value={'Desc'}>Descendente</option>
        </select>
{/* 


        <select onMouseMove={()=> dispatch(getActivities())} onClick={(e) => handleFilterCreated(e) }>
             <option value={'all'}>Todas</option>
            {
                allActivities && allActivities.map(item => {
                  return  <option onClick={(e) => handleFilterCreated(e) } value={item.name}>{item.name}</option>
                })
            }
        </select> */}

    

        <Paginado  countriesPerPage={countriesPerPage} allCountries={AllCountries.length} paginado={paginado}/>

        {
            currentCountry && currentCountry.map(e => {
                return <Card  key={e.id} flag={e.flag} name={e.name} id={e.id} continent={e.continent} />
            })
        }

    </div>
  )
}

export default Home

