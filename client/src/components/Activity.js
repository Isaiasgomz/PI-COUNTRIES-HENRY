import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {postActivity} from '../actions/index'
import {useHistory} from 'react-router-dom'



function Activity() {

    const dispatch = useDispatch()

    const history = useHistory()

    const AllCountries = useSelector((state) => state.Countries)
    
     

    const [input, setInput] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[]
    })

    const handleInput = (e) =>{
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }


    const handleCheckBoxSeason = (e) =>{
       
        if(e.target.checked){
            setInput({
                ...input,
                season:e.target.value
            })
        }
    }


    const handleCheckBoxDifficulty = (e) =>{
        
        if(e.target.checked){
            setInput({
                ...input,
                difficulty: e.target.value
            })
        }
    }

    const handleSelectCountry = (e) =>{
        console.log(e.target.value)
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })
    }


    const handleSubmit = (e)=>{
        console.log(input)
        e.preventDefault()
        dispatch(postActivity(input))
        setInput({
            name:'',
            difficulty:'',
            duration:'',
            season:'',
            countries:[]
        })
        alert('Actividad Creada Correctamente')
       history.push('/home')
       
    }


      return (
    <div>

        <h1> Crea tu actividad</h1>

        <form  onSubmit={(e) => handleSubmit(e)}>

            <label>Nombre</label>
            <input type={'text'}
            name={'name'}
            value={input.name}
            onChange={(e)=> handleInput(e)}/>
            <br/>

            
            
            
            <label>
            Duracion</label>
            <input type={'time'} 
            name={'duration'} 
            value={input.duration}
            onChange={(e)=> handleInput(e)}/>
            <br/>



            <label>Temporada</label>
            <label> Primavera
            <input type={'checkbox'}
            name={'Primavera'}
            value={'Primavera'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Verano
            <input type={'checkbox'}
            name={'Verano'}
            value={'Verano'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Otoño
            <input type={'checkbox'}
            name={'Otoño'}
            value={'Otoño'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Invierno
            <input type={'checkbox'}
            name={'Diciembre'}
            value={'Diciembre'}
            onChange={(e)=> handleCheckBoxSeason(e)}/> </label>
            <br/>



            <label> Dificultad</label>
            <label> 1
            <input  type={'checkbox'} 
             name={'difficulty'}
              value={'1'}
              onClick={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 2
            <input  type={'checkbox'} 
             name={'difficulty'}
              value={'2'}
              onClick={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 3
            <input  type={'checkbox'} 
             name={'difficulty'} 
             value={'3'}
             onClick={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 4
            <input  type={'checkbox'} 
             name={'difficulty'} 
             value={'4'}
             onClick={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 5
            <input  type={'checkbox'} 
             name={'difficulty'} 
             value={'5'}
             onClick={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>


            <select onChange={ (e) => handleSelectCountry(e)}>
                <option>Seleccionar Paises</option>
                { AllCountries && AllCountries.map(item => (
                    <option key={item.id}
                    value={item.name}>{item.name}</option>
                ))}
            </select>


        <button type='submit'>Crear Actividad</button>
      
        </form>

    </div>
  )
}

export default Activity

// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Dificultad
// Duración
// Temporada
// [ ] Posibilidad de seleccionar/agregar varios países en simultáneo
// [ ] Botón/Opción para crear una nueva actividad turística