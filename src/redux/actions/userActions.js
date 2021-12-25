import * as userTypes from '../types'
export const setIUserName = (name) => ({
    type : userTypes.SET_USER_NAME,
    name
})
export const setUserId = (id) => ({
    type : userTypes.SET_USER_ID,
    id
})

export const setUserImg = (img) => ({
    type : userTypes.SET_USER_IMG,
    img
})

export const setUserToken = (token) => ({
    type : userTypes.SET_USER_TOKEN,
    token
})
export const setUserEmail = (email) => ({
    type : userTypes.SET_USER_EMAIL,
    email
})