import axios from 'axios';


const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://localhost:4000/api/cities');
            dispatch({
                type: "GET_ALL_CITIES", 
                payload:response.data.response,
            });
            
        }
    },

    findCity: (cities, id) => {
        return (dispatch, getState) => {
            dispatch({
                type: "GET_A_CITY",
                payload: {cities, id},
            })
        }
    },

    filterCities: (cities, value) => {
        return (dispatch, getState) => {
          dispatch({
                type: "FILTER_CITIES", 
                payload: {cities, value}
            });
            
        }
    },

    getItinerariesById: (city_id) => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/itineraries/" + city_id)
            dispatch({ 
                type: "GET_ITINERARY_BY_ID", 
                payload: response.data.response 
            })
        }

    }
}


export default citiesActions;