const initialState = {
    state: [],
    user: { email: '' },
    token: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_USER':
            return {
                ...state,
                user: action.payload
            }
        case "SIGNIN_USER":
            return {
                ...state,
                user: action.payload,
            }
            case "SIGN_OUT":
                return {
                  ...state,
                  token: action.payload,
                  user: action.payload,
                }
        case "TOKEN":
            return {
                ...state,
                token: action.payload,
                user: action.payload,
            }

        default: return state
    }
}

export default authReducer