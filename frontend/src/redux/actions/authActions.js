import axios from "axios"

const authActions = {
    postUser: (newUser) => {

        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signUp",
                    { ...newUser})
                console.log(user)
                if (user.data.success ) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'NEW_USER', payload: user })
                } else {
                    return { errors: user.data.response }
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    signIn: (email, password) => {
        return async (dispatch, getState) => {
            try {
                 const token = localStorage.getItem('token') 
                const user = await axios.post("http://localhost:4000/api/auth/signIn", { email, password },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'NEW_USER', payload: { email: user.data.response } })
                } else {
                    alert('error user or password')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}


export default authActions