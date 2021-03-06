import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getCountryByName} from '../actions/index'
import './SearchBar.css'
import {NavLink} from 'react-router-dom'


function SearchBar() {


  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleInput = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(getCountryByName(name))
    setName('')
  }
  return (
    <div className='container'>
      <NavLink className='navlink-home' to={'/home'}>HOME</NavLink>
      <input className='search' value={name} type={'text'}  placeholder='Buscar Pais'  onChange={(e)=> handleInput(e)} />

      <button className='button' type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
      <NavLink className='activity' to={'/createActivity'}>ACTIVIDAD</NavLink>
    </div>
  )
}

export default SearchBar