import axios from "axios"

const authActions ={
    postUser: (email, password) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signUp", {email, password})
                if(user.data.success && !user.data.error){
                dispatch({type: 'NEW_USER', payload:{email, password}})
                }else{
                   return{errors: user.data.response}
                }
            }catch(error){
              console.log(error)  
            }
        }
    },
    signIn: (email, password) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signIn", {email, password})
                if(user.data.success && !user.data.error){
                dispatch({type:'USER', payload:{email: user.data.response}})
                }else{
                    alert('error user or password')
                }
            }catch(error){
              console.log(error)  
            }
        }
    },
}

module.exports = authActions