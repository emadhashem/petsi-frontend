import axios from 'axios'
import {prefixApi} from './prefix'

export async function createNewUser(userName, email, password, role_ = 0, handleError) {
    
    try {
        const data = {
            userName,
            email,
            password,
            role : role_ == 0 ? 'user' : 'doctor'
        }
        const res = await axios.post(prefixApi+'api/auth/signup', data)
        return res.data
    } catch (ex) {
        handleError(ex.response.data)
    }
}