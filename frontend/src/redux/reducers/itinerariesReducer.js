const initialState = {
    state: [],
    itineraries: [],
    comments: [],

}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITINERARY_BY_ID':
            return {
                ...state,
                itineraries: action.payload
            }

        case "LIKE":
            return {
                ...state,
                itineraries: action.payload,
            }
            case 'GET_COMMENTS':
                return{
                    ...state,
                    comments: action.payload
                } 
            case 'GET_ALL_COMMENTS':
                return{
                    ...state,
                    comments: action.payload
                } 
            case 'POST_COMMENTS':
                return{
                    ...state,
                    comments: action.payload
                } 
             case 'EDIT_COMMENTS':
                 return{
                    ...state,
                    comments: action.payload
                } 
            case 'DELETE_COMMENTS':
                return{
                   ...state,
                   comments: action.payload
                } 
                
            default: return state
    }
}

export default itinerariesReducer