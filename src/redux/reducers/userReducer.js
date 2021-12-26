import * as userTypes from '../types'

const InitState = {
    name: null,
    id: null,
    img: null,
    token: null,
    email: null,
    role: null,
    phoneNumber: null
}

export default function userReducer(state = InitState, action) {

    switch (action.type) {
        case userTypes.SET_USER_EMAIL: return { ...state, email: action.email, }
            break;
        case userTypes.SET_USER_NAME: return { ...state, name: action.name, }
            break;
        case userTypes.SET_USER_ID: return { ...state, id: action.id, }
            break;
        case userTypes.SET_USER_IMG: return { ...state, img: action.img, }
            break;
        case userTypes.SET_USER_TOKEN: return { ...state, token: action.token, }
            break;
        case userTypes.SET_USER_ROLE: return { ...state, role: action.role, }
            break;
        case userTypes.SET_USER_PHONE_NUMBER: return {
            ...state, phoneNumber: action.phoneNumber,
        }
            break;
        default: return state
            break;
    }
}