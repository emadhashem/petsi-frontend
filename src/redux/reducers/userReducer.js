import * as userTypes from '../types'

const InitState = {
    name: null,
    id: null,
    img: null,
    token: null,
    email : null
}

export default function userReducer(state = InitState, action) {
    
    switch (action.type) {
        case userTypes.SET_USER_EMAIL: return { ...state, email: action.email,  }
            break;
        case userTypes.SET_USER_NAME: return { ...state, name: action.name,  }
            break;
        case userTypes.SET_USER_ID: return { ...state, id: action.id,  }
            break;
        case userTypes.SET_USER_IMG: return {...state, img : action.img, }
            break;
        case userTypes.SET_USER_TOKEN: return {...state, token : action.token, }
            break;
        default: return state
            break;
    }
}