import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {postActivity} from '../actions/index'
import {useHistory} from 'react-router-dom'
import './Activity.css'


const validate = (input) =>{
    const button = document.getElementById('error')
    const errors = {}
    if(!input.name || input.name.length <= 2){
        errors.name = 'Debes Ingresar Un Nombre mayor a 2 letras y no debe incluir caracteres especiales ni simbolos'
        button.disabled= true
    }else{
        button.disabled= false
    }
    if(!input.duration){
        errors.duration = 'Por favor ingresar una Duracion para la activadad'
        button.disabled= true  
    }else{
        button.disabled= false
    }
    if(!input.season){
        errors.season = 'Selecione la Temporada'
        button.disabled= true
    }else{
        button.disabled= false
    }
    if(!input.difficulty || input.difficulty.length > 2){
        errors.difficulty = 'Selecione un nivel de Dificultad'
        button.disabled= true
    }else{
        button.disabled= false
    }
    if(input.countries.length === 0){
        errors.countries = 'Selecione como minimo un Pais'
        button.disabled= true
    }else{
        button.disabled= false
    }
    
    return errors
}



function onlyOne(value){
    var x = document.getElementsByClassName('season');
    var i;
    for (i = 0; i < x.length; i++) {
      if(x[i].value !==  value) x[i].checked = false;}
    
    }

    function onlyOneDifficulty(value){
        var x = document.getElementsByClassName('difficulty');
        var i;
        for (i = 0; i < x.length; i++) {
          if(x[i].value !==  value) x[i].checked = false;}
        
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
            setErrors(validate({
                ...input,
                season: e.target.value
            }))
            onlyOne(e.target.value)
            
        }
        if(!e.target.checked){
            setErrors(validate({
                ...input,
                season:''
            }))
            setInput({
                ...input,
                season: ''
            })
        }
        

        }


    const handleCheckBoxDifficulty = (e) =>{
        
        if(e.target.checked){
            setInput({
                ...input,
                difficulty: e.target.value
            })
            setErrors(validate({
                ...input,
                difficulty: e.target.value
            }))
            onlyOneDifficulty(e.target.value)
            
        }
        if(!e.target.checked){
            setErrors(validate({
                ...input,
                difficulty:''
            }))
            setInput({
                ...input,
                difficulty : ''
            })
        }
    }

    const handleSelectCountry = (e) =>{
        
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })
        setErrors(validate({
            ...input,
            countries: e.target.value
        }))

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
       console.log(input)
       
    }
    



    const handleInputDelete = (element) =>{
        setInput({
            ...input,
            countries: input.countries.filter(item => item !== element)
        })
        if(input.countries.length > 0 ){
            setErrors(validate({
                ...input,
                countries: []
            }))
        }
        

    }
    


        
    

      return (
    <div className='form' >

        

        <form  onSubmit={(e) => handleSubmit(e)}>

            <label>Nombre</label><br/>
            <input className='form-input'
            required={true}
             type={'text'}
            name={'name'}
            value={input.name}
            onChange={(e)=> handleInput(e)}/>
            <br/>
            {
                errors.name && (
                    <p className='text-error'>{errors.name}</p>
                )
            }

            
            
            
            <label>
            Duracion</label> <br/>
            <input className='form-input'
            required={true}
             type={'time'} 
            name={'duration'} 
            value={input.duration}
            onChange={(e)=> handleInput(e)}/>
            <br/>
            {
                errors.duration && (
                    <p className='text-error'>{errors.duration}</p>
                )
            }




            <label >Temporada</label><br/>
            <label className='text-input'> Primavera 🌸
            <input className='season' type={'checkbox'}
            name={'check'}
            value={'Primavera'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Verano 🥵
            <input className='season'
             type={'checkbox'}
            name={'check'}
            value={'Verano'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Otoño 🍁
            <input className='season'
             type={'checkbox'}
            name={'check'}
            value={'Otoño'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> Invierno 🥶
            <input className='season'
             type={'checkbox'}
            name={'check'}
            value={'Invierno'}
            onChange={(e)=> handleCheckBoxSeason(e)}/> </label>
            <br/>
            {
                errors.season && (
                    <p className='text-error'>{errors.season}</p>
                )
            }
            <br/>



            <label> Dificultad</label><br/>
            <label className='text-input'> 1
            <input className='difficulty'  type={'checkbox'} 
             name={'difficulty'}
              value={'1'}
              onChange={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 2
            <input  className='difficulty'
             type={'checkbox'} 
             name={'difficulty'}
              value={'2'}
              onChange={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 3
            <input className='difficulty'
             type={'checkbox'} 
             name={'difficulty'} 
             value={'3'}
             onChange={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 4
            <input className='difficulty'
             type={'checkbox'} 
             name={'difficulty'} 
             value={'4'}
             onChange={(e) =>handleCheckBoxDifficulty(e)}/>
            </label>

            <label> 5
            <input  className='difficulty'
             type={'checkbox'} 
             name={'difficulty'} 
             value={'5'}
             onChange={(e) =>handleCheckBoxDifficulty(e)}/>
            </label><br/>
            {
                errors.difficulty && (
                    <p className='text-error'>{errors.difficulty}</p>
                )
            }

            <br/>
            <label>Pais</label><br/>
            <select className='form-input'  onChange={ (e) => handleSelectCountry(e)}>
                <option>Seleccionar Paises</option>
                { AllCountries && AllCountries.map(item => (
                    <option key={item.id}
                    value={item.name}>{item.name}</option>
                ))}
            </select>
            {
                errors.countries && (
                    <p className='text-error'>{errors.countries}</p>
                )
            }
            
        

               
            


        <br/>
        <button className='input-button' type='submit' disabled={!input.name || !input.duration || !input.season || !input.difficulty || !input.countries.length > 0 ? true : false} id= 'error'>Crear Actividad</button>
      
        </form>
        <div className='section-options'>
        {
                input.countries && input.countries.map(item =>(
                    <div className='input-options'>
                        <p>{item}</p>
                        <button className='options-button' onClick={()=> handleInputDelete(item)}>X</button>
                    </div>
                    
                ))
            }
        </div>
         
   
   
    </div>
  )
}

export default Activity

