import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const logger = store => next => action => {
    console.log('type :', action.type)
    let ret = next(action)
    console.log('new state : ', store.getState());
    return ret
}

export default applyMiddleware(thunk, logger)