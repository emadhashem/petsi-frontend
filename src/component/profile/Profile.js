import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addRequestForAdtion, deletePost, deleteRequestForAdtion, getUserData, getUserPosts } from '../../services/userdata'
import './profile.css'
import * as userActions from '../../redux/actions/userActions'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import PostComp from '../postcomp/PostComp'
import doctorImg from './doctor.png'
import AddPost from './addPost/AddPost'
import { Button, CircularProgress } from '@mui/material'
import Modal from '@mui/material/Modal';
import AdoptionReq from './adoptionReq/AdoptionReq'
import { downloadImg } from '../../services/firebaseStorage'

function AoptionReqToGetuserData({ id, onclick }) {
    const [name, setname] = useState('')
    const [img, setimg] = useState('')
    useEffect(() => {
        (async () => {
            await getUsername()
            getSomeImg(id, (url) => setimg(url))
        })()
    }, [])
    async function getUsername() {
        try {
            const res = await getUserData(id, (response) => alert(response.data))
            setname(res.userName)
        } catch (error) {

        }
    }
    async function getSomeImg(id, cb) {
        try {
            const res = await downloadImg(id)
            cb(res)
        } catch (error) {

        }
    }
    return (
        <AdoptionReq name={name} img={img} onclick={onclick} />
    )
}

function Profile({ user }) {
    const { profileId } = useParams()
    const dispatch = useDispatch()
    const go = useHistory()
    const [refresh, setrefresh] = useState(0)
    useEffect(() => {
        (async () => {

            await handleGetPosts();
        })()
    }, [refresh])
    function handleLogOut() {
        dispatch(userActions.setUserEmail(null))
        dispatch(userActions.setUserId(null))
        dispatch(userActions.setUserToken(null))
        go.push('/auth/login')
    }
    const [posts, setposts] = useState([])
    const [noMore, setnoMore] = useState(false)

    async function handleGetPosts() {
        try {
            setloadGetPosts(true)
            if (posts.length == 0) {
                const res = await getUserPosts(user.token, user.id, "0", handleError)
                if (res.length < 10) setnoMore(true)
                setposts(arr => {
                    return [...arr, ...res]
                })
            } else {
                const lstId = posts[posts.length - 1]._id
                const res = await getUserPosts(user.token, user.id, lstId, handleError)
                if (res.length < 10) setnoMore(true)
                setposts(arr => {
                    return [...arr, ...res]
                })
            }
            setloadGetPosts(false)

        } catch (error) {
            setloadGetPosts(false)

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
    function isMyProfile() {
        return profileId === user.id
    }
    const [loadGetPosts, setloadGetPosts] = useState(false)
    async function deletePost_(id) {
        try {

            setloadGetPosts(true)
            const res = await deletePost(id, user.token, handleError)
            setloadGetPosts(false)
            removeItemFromList(id)

        } catch (error) {
            setloadGetPosts(false)

        }
    }
    function removeItemFromList(itemId) {
        setposts(posts.filter(item => item._id != itemId))
    }
    const [showAdoptionReqsModal, setshowAdoptionReqsModal] = useState(false)
    const [arrOfAdoptions, setarrOfAdoptions] = useState([])
    const [curPostId, setcurPostId] = useState(null)
    function onOpenModalOdAdoption(arr, id) {
        setshowAdoptionReqsModal(true)
        setarrOfAdoptions(arr)
        setcurPostId(id)
    }
    function handleCloseTheModalOfAdoptions() {
        setshowAdoptionReqsModal(false)
    }
    function handleGotoOthersProfiles(id = "") {
        handleCloseTheModalOfAdoptions()
        go.push('/home/profile/' + id)
        
    }
    async function deleteRequst() {
        try {
            const res = await deleteRequestForAdtion(curPostId, user.token, handleError)
            if(res) {
                alert('requst deleted')
                
            }
            handleCloseTheModalOfAdoptions()
            window.location.reload()

        } catch (error) {
            handleCloseTheModalOfAdoptions()
            
        }
    }
    async function addRequest() {
        try {
            const res = await addRequestForAdtion(curPostId, user.token, handleError)
            if(res) {
                alert('requst added')
                
            }
            handleCloseTheModalOfAdoptions()
            window.location.reload()
           
        } catch (error) {
            handleCloseTheModalOfAdoptions()
            
        }
    }
    return (
        <div className='profile_container' >
            <Modal
                open={showAdoptionReqsModal}
                onClose={() => {
                    setshowAdoptionReqsModal(false)
                    setarrOfAdoptions([])
                }}
            >
                <div className='adoptions_modal_conatiner' >

                    <div className='adoptions_body' >
                        {
                            arrOfAdoptions.map(item => (
                                <div className='adoption_content_container' >
                                    <AoptionReqToGetuserData id={item}
                                    onclick={() => handleGotoOthersProfiles(item)} />
                                    {
                                        (item == user.id) && <div>
                                            <Button onClick={deleteRequst}>
                                                delete
                                            </Button>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                        {
                            (arrOfAdoptions.length == 0) && <p>no requests yet</p>
                        }
                    </div>
                    {
                        (isMyProfile()) && <div className='bnts_ofreq' >
                            
                                <Button onClick={addRequest} >
                                    ADD
                                </Button>
                        </div>
                    }
                </div>
            </Modal>
            <div className='left_div' >
                <div className='user_content' >
                    {
                        (user.role == 'user') ? <img
                            className='doctor_icon' src={doctorImg} /> : null
                    }
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <Avatar src={user.img} sx={{ width: 100, height: 100 }} />
                    <p>{user.phoneNumber}</p>
                </div>
            </div>
            <div className='middle_div'>
                {(isMyProfile()) && <AddPost handleError={handleError} />}
                <div>
                    {
                        (loadGetPosts) && (
                            <CircularProgress />
                        )
                    }
                </div>
                {
                    posts.map(item => (
                        <PostComp
                            onclick={onOpenModalOdAdoption}
                            hideModifi={true} onReject={deletePost_} postData={item} />
                    ))
                }
                {
                    (noMore) && <div>
                        <p>NO more upcoming posts</p>
                    </div>
                }
                {
                    (!noMore) && <div>
                    <p onClick={handleGetPosts} > more  posts</p>
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
export default connect(mapStateToProps)(Profile)
