import userReducer from './userReducer'

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']

}

const rootRedducer = combineReducers({
    user : userReducer
})
export default persistReducer(persistConfig, rootRedducer)