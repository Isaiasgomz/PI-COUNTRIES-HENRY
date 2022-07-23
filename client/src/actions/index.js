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

export function getActivities(){
    return async function(dispatch){
        const allActivities = await axios.get('http://localhost:3001/activities')
        return dispatch({type:'GET_ACTIVITIES', payload: allActivities.data})
    }
}


export function postActivity (activity) {
    return async function(dispatch){
       const resolve = await axios.post('http://localhost:3001/activities',activity)
       return resolve
    }
}

export function filteredCountryByType(typeOfCountry){
    return{
        type:'COUNTRY_BY_TYPE',
        payload: typeOfCountry
    }
}

export function filterActivity (name){
    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/activities?name=${name}`)
        return dispatch({type: 'ACTIVITY_BY_NAME', payload: json.data})
    }
}

export function filterByOrder(order){
    return{
        type:'ACTIVITY_BY_ORDER',
        payload: order
    }
}

export function filterByPopulation (order){
    return{
        type:'FILTER_BY_POPULATION',
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

export function  getCountryId(id) {
    return async function(dispatch){
        const infoCountry = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({ type: 'GET_COUNTRY_ID', payload: infoCountry.data})
    }
}
