import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserPosts } from '../../services/userdata'
import './profile.css'
import * as userActions from '../../redux/actions/userActions'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

import doctorImg from './doctor.png'
import  AddPost  from './addPost/AddPost'
function Profile({ user }) {
    const { profileId } = useParams()
    const dispatch = useDispatch()
    const go = useHistory()
    useEffect(() => {
        (async () => {
            
            await handleGetPosts();
        })()
    }, [])
    function handleLogOut() {
        dispatch(userActions.setUserEmail(null))
        dispatch(userActions.setUserId(null))
        dispatch(userActions.setUserToken(null))
        go.push('/auth/login')
    }
    const [posts, setposts] = useState([])
    const [morePosts, setmorePosts] = useState(true)
    async function handleGetPosts(lstId = "0") {
        const res = await getUserPosts(user.token, user.id, lstId, handleError)
        if (res) {
            if (res.length == 0) {
                setmorePosts(false)
                return
            }
        }

    }
    function handleError(response) {

        if (response.status == 401) {
            handleLogOut()
            alert('ur session has been expired')
            return
        }
        alert(response.data)
    }

    return (
        <div className='profile_container' >
            <div className='left_div' >
                <div className='user_content' >
                    {
                        (user.role == 'user') ? <img
                            className='doctor_icon' src={doctorImg} /> : null
                    }
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <Avatar src={user.img} sx={{ width: 100, height: 100 }}/>
                    <p>{user.phoneNumber}</p>
                </div>
            </div>
            <div className='middle_div'>
                <AddPost handleError = {handleError} />
            </div>
            <div className='right_div'></div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps)(Profile)
