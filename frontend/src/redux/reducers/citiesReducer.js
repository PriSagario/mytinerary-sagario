const initialState = {
    state: [],
    cities: [],
    auxiliar: [],
    city: [],
    itineraries: [],
}

const citiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_CITIES':
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
            }

        case "GET_A_CITY": 
        const city = action.payload.cities.find(city => city._id === action.payload.id)
        return {
            ...state,
            city: city,
        }    
        
        case "FILTER_CITIES":
            const filtered = action.payload.cities.filter((city => 
                city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))
            return {
                ...state,
                auxiliar: filtered,
            }
        default: return state

    }
}

export default citiesReducer;