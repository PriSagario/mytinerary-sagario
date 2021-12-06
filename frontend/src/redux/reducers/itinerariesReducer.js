/* const initialState ={
    state: [],
    itineraries: [],
    auxiliar: [],
    itinerary: []
}

const itinerariesReducer = (state= initialState, action) => {
    switch (action, type) {
        case 'GET_ALL_ITINERARIES' :
            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload
            }

            
        case "GET_A_ITINERARY": 
        const city = action.payload.cities.find(city => city._id === action.payload.id)
        return {
            ...state,
            itinerary: itinerary,
        }    
        
        
}
    }
 */