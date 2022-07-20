

const initialState = {
    Countries: []
}

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                Countries: action.payload
            }
            
    
        default:
            return state
    }
}