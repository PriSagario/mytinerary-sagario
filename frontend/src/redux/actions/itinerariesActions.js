import axios from "axios"
import {toast} from 'react-toastify'

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
      if (userId && itineraryId) {
        let response = await axios.put("http://localhost:4000/api/like", { userId, itineraryId })
        let res = await axios.get("http://localhost:4000/api/itineraries/" + city_id)
        dispatch({ type: "LIKE", payload: res.data.response })
      } else {
        toast.warning("You must be loged")
      }
    }
  }
}

export default itinerariesAction