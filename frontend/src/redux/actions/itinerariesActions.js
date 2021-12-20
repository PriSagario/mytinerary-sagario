import axios from "axios"

const itinerariesAction = {
  getItinerariesById: (city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARY_BY_ID",
        payload: response.data.response,
      })
    }
  },
  likes: (userId, itineraryId, city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.put("http://localhost:4000/api/like", {userId, itineraryId})
      

          let res = await axios.get("http://localhost:4000/api/itineraries/" + city_id)
          
          dispatch({type: "LIKE", payload: res.data.response})
       }
   }
}

export default itinerariesAction