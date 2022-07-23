import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {postActivity} from '../actions/index'
import {useHistory} from 'react-router-dom'


const validate = (input) =>{
    const errors = {}
    if(!input.name){
        errors.name = 'Debes Ingresar Un Nombre'
    }
    return errors
}

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

    const [errors, setErrors] = useState({})

    const handleInput = (e) =>{
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))


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
        
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })
    }


    const handleSubmit = (e)=>{
        
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


    const handleInputDelete = (element) =>{
        setInput({
            ...input,
            countries: input.countries.filter(item => item !== element)
        })
    }

      return (
    <div>

        <h1> Crea tu actividad</h1>

        <form  onSubmit={(e) => handleSubmit(e)}>

            <label>Nombre</label>
            <input type={'text'}
            name={'name'}
            value={input.name}
            pattern='[A-Za-z0-9]{1,15}'
            onChange={(e)=> handleInput(e)}/>
            <br/>
            {
                errors.name && (
                    <p>{errors.name}</p>
                )
            }

            
            
            
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

            <br/>
            <select onChange={ (e) => handleSelectCountry(e)}>
                <option>Seleccionar Paises</option>
                { AllCountries && AllCountries.map(item => (
                    <option key={item.id}
                    value={item.name}>{item.name}</option>
                ))}
            </select>
            
        

               
            


        <br/>
        <button type='submit'>Crear Actividad</button>
      
        </form>
        {
                input.countries && input.countries.map(item =>(
                    <div>
                        <p>{item}</p>
                        <button onClick={()=> handleInputDelete(item)}>X</button>
                    </div>
                    
                ))
            }
         
   
   
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