import axios from "axios";
import { prefixApi } from "./prefix";
const get_PostsOfUser_api = prefixApi + 'api/user/getuserposts'
export async function getUserPosts(token, userId, lstId = "0", handleError) {
    try {
        const res = await axios.post(get_PostsOfUser_api, { lstId, userId }, {
            headers: {
                'x-auth-token': token
            }
        })
        return res.data;
    } catch (ex) {
        handleError(ex.response)
    }
}
const remove_post_api = prefixApi + 'api/post/delete'
export async function deletePost(id, token, handleError) {

    try {
        const res = await axios.post(remove_post_api,
            {
                postId: id
            },
            {
                headers: {
                    'x-auth-token': token
                }
            }

        )
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}
const get_user_data_api = prefixApi + 'api/admin/getuserdata'
export async function getUserData(userId, handleError) {
    try {
        const res = await axios.post(get_user_data_api, { userId })
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}
const add_RequestForAdtion_api = prefixApi + 'api/post/update/addadoptrequest'
export async function addRequestForAdtion(postId, token, handleError) {
    try {
        const res = await axios.put(add_RequestForAdtion_api, {postId}, {
            headers: {
                'x-auth-token': token
            }
        })
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}
const delete_RequestForAdtion_api = prefixApi + 'api/post/update/deleteadoptrequest'
export async function deleteRequestForAdtion(postId, token, handleError) {
    try {
        const res = await axios.put(delete_RequestForAdtion_api, {postId}, {
            headers: {
                'x-auth-token': token
            }
        })
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}