import axios from "axios"
import {toast} from "react-toastify"

const authActions = {
    postUser: (newUser) => {

        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signUp",
                    { ...newUser })
                if (user.data.success) {
                    localStorage.setItem('token', user.data.response.token)
                    toast.success("Welcome "+ user.data.response.newUser.name)
                    dispatch({ type: 'NEW_USER', payload: user.data.response })
                } else {
                    toast.error(user.data.error)
                }
            } catch (error) {
            }
        }
    },
    signIn: (email, password, google) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signIn", 
                { email, password, google })
                if (user.data.success && !user.data.error) {
                     localStorage.setItem('token', user.data.response.token)
                     toast.success("Welcome "+ user.data.response.user.name)
                    dispatch({ type: 'SIGNIN_USER', payload: { email: user.data.response } })
                } else {
                    toast.error(user.data.error)
                }
            } catch (error) {
            }
        }
    },
    tokenDale: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem("token")
                const response = await axios.get("http://localhost:4000/api/auth",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                dispatch({
                    type: "TOKEN",
                    payload: response.data,
                })
            } catch (error) {
            }
        }
    },
    signOut: () => {
        localStorage.removeItem("token")
        return (dispatch, getState) => {
            dispatch({ type: "SIGN_OUT", payload: "" })
        }
    },
}


export default authActions