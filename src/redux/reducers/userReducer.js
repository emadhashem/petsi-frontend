import * as userTypes from '../types'

const InitState = {
    name: null,
    id: null,
    img: null,
    token: null
}

export default function userReducer(state = InitState, action) {

    switch (action.type) {
        case userTypes.SET_USER_EMAIL: return { email: action.email, ...state }
            break;
        case userTypes.SET_USER_NAME: return { name: action.name, ...state }
            break;
        case userTypes.SET_USER_ID: return { id: action.id, ...state }
            break;
        case userTypes.SET_USER_IMG: return {img : action.img, ...state}
            break;
        case userTypes.SET_USER_TOKEN: return {token : action.token, ...state}
            break;
        default: return state
            break;
    }
}