import React, { useState } from 'react'



function Activity() {

     

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

    const handleSubmit = (e)=>{
        e.preventDefault()
       
    }

    const handleCheckBox = (e) =>{
        if(e.checked){
            setInput({
                ...input,
                season:e.checked
            })
        }
    }


      return (
    <div>
        <h1> Crea tu actividad</h1>

        <form >
            <label>Nombre</label>
            <input type={'text'}
            name={'name'}
            value={input.name}
            onChange={(e)=> handleInput(e)}/>


            <label>Dificultad</label>
            <input type={'number'} 
            name={'difficulty'}
            value={input.difficulty}
            onChange={(e)=> handleInput(e)}/>

            <label>Duracion</label>
            <input type={'datatime'} 
            name={'duration'} 
            value={input.duration}
            onChange={(e)=> handleInput(e)}/>

            <label>
            <input type={'checkbox'}
            name={'Primavera'}
            value={'Primavera'}
            onChange={(e)=> handleCheckBox(e)}/>
            Primavera</label>

            <label>
            <input type={'checkbox'}
            name={'Verano'}
            value={'Verano'}
            onChange={(e)=> handleCheckBox(e)}/>
            Verano</label>

            <label>
            <input type={'checkbox'}
            name={'Otoño'}
            value={'Otoño'}
            onChange={(e)=> handleCheckBox(e)}/>
            Otoño</label>

            <label>
            <input type={'checkbox'}
            name={'Diciembre'}
            value={'Diciembrea'}
            onChange={(e)=> handleCheckBox(e)}/> Diciembre</label>

        </form>

        <button onClick={(e) => handleSubmit(e)}>Crear Actividad</button>
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