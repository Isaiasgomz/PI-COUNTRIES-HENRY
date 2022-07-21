

const initialState = {
    Countries: [],
    allCountries:[],
    // Activities:[],
    // allActivities:[]
}

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                Countries: action.payload,
                allCountries: action.payload
            }



            
        // case 'GET_ACTIVITIES':
        //     return{
        //         ...state,
        //         Activities:action.payload
        //     } 

        case 'GET_COUNTRY_NAME':
            return{
                ...state,
                Countries: action.payload
            }

            

        case 'COUNTRY_BY_TYPE':
            const allCountries = state.allCountries
            const countriesFiltered = action.payload === 'all' ? allCountries : allCountries.filter(item => item.continent === action.payload)
            return{
                ...state,
                Countries: countriesFiltered
            }




        // case 'ACTIVITY_BY_NAME':
        //     const allActivities = state.allActivities
        //     const filteredActivities = action.payload === 'all' ? allActivities :  allActivities.filter(item => item.name === action.payload)
        //     return{
        //         ...state,
        //         Activities: filteredActivities
        //     } 
            


            
        case 'ACTIVITY_BY_ORDER':

            const sortArray = action.payload === 'Asc' ?
            state.Countries.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            } ) :
            state.Countries.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })
            
            return{
                ...state,
                Countries:sortArray
            }
            
           
            

        default:
            return state
    }
}