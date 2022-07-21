import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        const allData = await axios.get('http://localhost:3001/countries')
        return dispatch({type:'GET_COUNTRIES', payload: allData.data})
    }
}
  
// export function getCountries(){
//     return function(dispatch){
//         fetch('http://localhost:3001/countries')
//         .then(response => response.json())
//         .then(data => dispatch({type:'GET_COUNTRIES', payload:data}))
//     }
// }

// export function getActivities(){
//     return async function(dispatch){
//         const allActivities = await axios.get('http://localhost:3001/activities')
//         return dispatch({type:'GET_ACTIVITIES', payload: allActivities.data})
//     }
// }

export function filteredCountryByType(typeOfCountry){
    return{
        type:'COUNTRY_BY_TYPE',
        payload: typeOfCountry
    }
}

// export function filterActivity (name){
//     return{
//         type:'ACTIVITY_BY_NAME',
//         payload: name
//     }
// }

export function filterByOrder(order){
    return{
        type:'ACTIVITY_BY_ORDER',
        payload: order
    }
}


export function getCountryByName (name){
    return async function(dispatch){
        // try {

            const country = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({type: 'GET_COUNTRY_NAME', payload: country.data})  

        // } catch (error) {
        //    console.log(error) 
        // }
        
    }
}
