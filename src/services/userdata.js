import axios from "axios";
import { prefixApi } from "./prefix";
const get_PostsOfUser_api = prefixApi + 'api/user/getuserposts'
export async function getUserPosts(token, userId, lstId = "0", handleError) {
    try {
        const res = await axios.post(get_PostsOfUser_api, { lstId ,userId }, {
            headers: {
                'x-auth-token': token
            }
        })
        return res.data;
    } catch (ex) {
        handleError(ex.response)
    }
}
const get_user_data_api = prefixApi+'api/admin/getuserdata'
export async function getUserData(userId, handleError) {
    try {
        const res = await axios.post(get_user_data_api, {userId})
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}