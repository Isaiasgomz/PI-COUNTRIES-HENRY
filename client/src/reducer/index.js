

const initialState = {
    Countries: [],
    allCountries:[],
    // Activities:[],
    // allActivities:[]
    Detail:[]
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
            
            
        case 'GET_COUNTRY_ID':
            return{
                ...state,
                Detail: action.payload
            }    

        case 'POST_ACTIVITY':
            return{
                ...state
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

            const sortArray = action.payload === 'Desc' ?
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

            
        case 'FILTER_BY_POPULATION':
                const sortPopulation = action.payload === 'Asc' ?
                state.Countries.sort((a,b) => a.population - b.population) :
                state.Countries.sort((a,b) => b.population - a.population)

                return{
                    ...state,
                    Countries: sortPopulation
                }
              
            

        default:
            return state
    }
}