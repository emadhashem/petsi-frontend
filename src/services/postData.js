import axios from "axios";
import { prefixApi } from "./prefix";

const add_post_api = prefixApi + 'api/post/add'

export async function addPostToAdmin(text, petImg, petType, token, handleError) {
    try {
        const data = {
            text, petImg, petType: petType == 0 ? 'dog' : petType == 1 ? 'cat' : 'other'
        }
        const res = await axios.post(add_post_api, data,
            {
                headers: {
                    'x-auth-token': token
                }
            }
        )
        console.log(res)
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}
const get_post_admin_api = prefixApi+'api/admin/get10posts'
export async function getPostOfAdmin(lstPostId = "0", handleError) {
    try {
        const res = await axios.post(get_post_admin_api, {lstPostId})
        return res.data
    } catch (ex) {
        handleError(ex.response)
    }
}   
