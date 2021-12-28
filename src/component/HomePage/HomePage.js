import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as userActions from '../../redux/actions/userActions'
import { getHomePosts, getUserData } from '../../services/userdata';
import PostComp from '../postcomp/PostComp';
import './homestyles.css'
import RequstOfAdoption from './requst/RequstOfAdoption';
const HomePage = ({ user }) => {
    const go = useHistory()
    useEffect(() => {
        (async () => {
            if (!user.id) {
                go.push('/auth/login')
                return
            }
            await getPosts()
            await getUserData_()
        })()
    }, [])
    const [posts, setposts] = useState([])
    const [noMore, setnoMore] = useState(false)
    async function getPosts() {
        try {
            if (posts.length == 0) {
                const res = await getHomePosts("0", user.token, handleError)
                if (res.length < 10) setnoMore(true)
                setposts(res)
            } else {
                const lstId = posts[posts.length - 1]._id
                const res = await getHomePosts(lstId, user.token, handleError)
                if (res.length < 10) setnoMore(true)
                setposts(arr => [...arr, ...res])

            }
        } catch (error) {

        }
    }
    const dispatch = useDispatch()
    function handleLogOut() {
        dispatch(userActions.setUserEmail(null))
        dispatch(userActions.setUserId(null))
        dispatch(userActions.setUserToken(null))
        go.push('/auth/login')
    }
    function handleError(response) {

        if (response.status == 401) {
            handleLogOut()
            alert('ur session has been expired')
            return
        }
        alert(response.data)
    }
    const [myCartOfAdoption, setmyCartOfAdoption] = useState([])
    async function getUserData_() {
        try {
            const res = await getUserData(user.id, handleError)
            setmyCartOfAdoption(res.cartOfAdoption)
        } catch (error) {

        }
    }
    return (
        <div className='home_container' >
            <div className='left_div'>
                {
                    myCartOfAdoption.map(item => (
                        <RequstOfAdoption id={item} handleError={handleError} />
                    ))
                }
            </div>
            <div className='middle_div'>
                {
                    posts.map(item => (
                        <PostComp postData={item} handleError={handleError}
                            hideModifi={true} hideDelete = {true} />
                    ))
                }
                {
                    (!noMore) && <div>
                        <p onClick={getPosts} >More Posts{noMore}</p>
                    </div>
                }
                {
                    (noMore) && <div>
                        <p  >NO More new Posts{noMore}</p>
                    </div>
                }
            </div>
            <div className='right_div'></div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps)(HomePage);