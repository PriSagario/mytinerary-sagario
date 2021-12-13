import axios from "axios"

const authActions = {
    postUser: (newUser) => {

        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signUp",
                    { ...newUser })
                if (user.data.success) {
                    console.log(user)
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'NEW_USER', payload: user.data.response })
                } else {
                    return { errors: user.data.response }
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    signIn: (email, password, google) => {
        return async (dispatch, getState) => {
            try {
                
                const user = await axios.post("http://localhost:4000/api/auth/signIn", { email, password, google })
                if (user.data.success && !user.data.error) {
                     localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'SIGNIN_USER', payload: { email: user.data.response } })
                } else {
                    alert('error user or password')
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    tokenDale: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem("token")
                console.log(token)
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
                console.error(error)
            }
        }
    },
    signOut: () => {
        localStorage.removeItem("token")
        return (dispatch, getState) => {
            dispatch({ type: "SIGN_OUT", payload: null })
        }
    },
}


export default authActions