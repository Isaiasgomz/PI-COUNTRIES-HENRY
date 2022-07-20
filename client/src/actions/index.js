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
