const initialState = {
    state: [],
    user: { email: '' },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                token: null,
                errors: null,
                toastShowed: false,
                ...action.payload
            }


        /*  case 'USER':
         return {
             ...state,
             user: action.payload
         } */
        default: return state
    }
}

export default authReducer