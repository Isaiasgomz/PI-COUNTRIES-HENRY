import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getCountryByName} from '../actions/index'


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
    <div>
      <input value={name} type={'text'}  placeholder='Buscar'  onChange={(e)=> handleInput(e)} />

      <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>

    </div>
  )
}

export default SearchBar