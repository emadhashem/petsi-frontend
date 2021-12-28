import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addToUserFromAdmin, deleteToUserFromAdmin, getPostOfAdmin } from '../../services/postData'
import './adminstyles.css'
import Button from '@mui/material/Button';
import { getUserData } from '../../services/userdata'
import PostComp from '../postcomp/PostComp'
import { CircularProgress } from '@mui/material'

export const AdminPage = ({ user }) => {
    const [admin, setadmin] = useState('')
    const [posts, setposts] = useState([])
    const [pass, setpass] = useState(false)
    const [noMore, setnoMore] = useState(false)
    const [loadingPosts, setloadingPosts] = useState(false)
    const go = useHistory()
    useEffect(() => {
        (async () => {
            if (user.id) {
                go.push('/home')
                return
            }
        })()
    }, [])
    async function setPostTostate() {
        if (admin == 'admin') {
            try {
                setpass(true)
                if (posts.length == 0) {
                    const data = await get10posts()
                    if (data.length == 0) {
                        setnoMore(true)
                    }
                    setposts(data)
                } else {
                    const lstElement = posts[posts.length - 1]._id
                    const data = await get10posts(lstElement)
                    if (!data || data.length == 0) {
                        setnoMore(true)
                    }
                    setposts(arr => {
                        return [...arr, ...data]
                    })
                }
            } catch (error) {

            }
        }
    }
    async function get10posts(lstId = "0") {
        try {
            setloadingPosts(true)
            const res = await getPostOfAdmin(lstId, (data) => alert(data))
            setloadingPosts(false)

            return res

        } catch (error) {
            setloadingPosts(false)

        }

    }
    async function addToUser(newPost) {
        try {
            const res = await addToUserFromAdmin(newPost,
                (response) => alert(response.data))
        } catch (error) {

        }
    }
    async function removeToUser(postId) {
        try {
            const res = await deleteToUserFromAdmin(postId,
                (response) => alert(response.data))
        } catch (error) {

        }
    }
    async function onAccept(postData) {
        try {
            const newPost = (({ _id, ...restOfObj }) => restOfObj)(postData)
            setloadingPosts(true)
            await removeToUser(postData._id)
            await addToUser(newPost)
            removeItemFromList(postData._id)
            setloadingPosts(false)

        } catch (error) {
            setloadingPosts(false)

        }
    }
    async function onReject(id) {
        try {
            setloadingPosts(true)
            await removeToUser(id)
            removeItemFromList(id)
            setloadingPosts(false)
        } catch (error) {
            setloadingPosts(false)

        }

    }
    function removeItemFromList(itemId) {
        setposts(posts.filter(item => item._id != itemId))
    }
    return (
        <div className='adminpage_container' >
            {
                (!pass) && (
                    <div>
                        <input type={"text"} value={admin}
                            onChange={evnt => setadmin(evnt.target.value)} />
                        <Button onClick={setPostTostate} variant="text">go</Button>
                    </div>
                )
            }
            {
                (loadingPosts) && <CircularProgress />
            }
            <div className='posts_container' >

                {
                    posts.map(item => (
                        <PostComp
                            onAccept={onAccept}
                            onReject={onReject}
                            postData={item} key={item._id}
                            hideDelete = {false}
                            />
                    ))
                }
                {
                    (!noMore && admin == 'admin') && <div>
                        <p className='moewpost_' onClick={setPostTostate} >more posts</p>
                    </div>
                }
                {
                    (noMore) && <div>
                        <p>no more upcoming posts</p>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})


export default connect(mapStateToProps)(AdminPage)
