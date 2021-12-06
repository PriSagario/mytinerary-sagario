const initialState = {
    state: [],
    itineraries: [],

}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITINERARY_BY_ID':
            return {
                ...state,
                itineraries: action.payload
            }

        default: return state


    }
}

export default itinerariesReducer