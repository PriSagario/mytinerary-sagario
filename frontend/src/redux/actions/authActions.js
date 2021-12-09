import axios from "axios"

const authActions ={
    cargarUsuario: (userName, password) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('api', {userName, password})
                dispatch({type: "user", payload:{userName}})
            }catch(error){
                
            }
        }
    },
}