import axios from 'axios'
import { prefixApi } from './prefix'

const create_acount_api = prefixApi + 'api/auth/signup'
export async function createNewUser(userName, email, password, role_ = 0, handleError) {

    try {
        const data = {
            userName,
            email,
            password,
            role: role_ == 0 ? 'user' : 'doctor'
        }
        const res = await axios.post(create_acount_api, data)
        return res.data
    } catch (ex) {
        handleError(ex.response.data)
    }
}

const login_api = prefixApi + 'api/auth/login'

export async function loginUser(email, password, handleError) {
    try {
        const res = await axios.post(login_api, {email, password})
        return res.data
    } catch (ex) {
        handleError(ex.response.data)
    }
}