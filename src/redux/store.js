import { createStore } from 'redux'
import middleWare from './middlewares/index'
import reducer from './reducers/rootReducer'

import {persistStore} from 'redux-persist'

export const store = createStore(reducer, middleWare)
export const persistor = persistStore(store)