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
  },
getAllComments: () => {
  return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/comments")
      dispatch({type: "GET_ALL_COMMENTS", payload: response.data.response })
      
  }
},
postComments: (itineraryId, user, message) => {
  return async(dispatch, getState)=>{
    if(itineraryId && user){
      let response = await axios.post("http://localhost:4000/api/comments/" + itineraryId, {user, message})
      let res = await axios.get("http://localhost:4000/api/comments")
      dispatch({type: "POST_COMMENTS", payload: res.data.response })

    }else {
        toast.warning("You must be loged")
      }
  }
},
editComments: (commentId, message) => {
  return async(dispatch, getState)=>{
      const token = localStorage.getItem("token")
      let response = await axios.put("http://localhost:4000/api/comments" , {commentId, message}, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      })
      let res = await axios.get("http://localhost:4000/api/comments")
      dispatch({type: "EDIT_COMMENTS", payload: res.data.response })
  }
},
deleteComments: (commentId) => {
  return async(dispatch, getState)=>{
      const token = localStorage.getItem("token")
      await axios.delete("http://localhost:4000/api/comments/" + commentId , {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      })
      let res = await axios.get("http://localhost:4000/api/comments")
      dispatch({type: "DELETE_COMMENTS", payload: res.data.response })
  }
},
}

export default itinerariesAction