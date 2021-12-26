import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar } from '@mui/material';
import { getUserData } from '../../services/userdata';
import { downloadImg } from '../../services/firebaseStorage';
import './poststyles.css'
function PostComp({ postData, onclick = f => f }) {
    const [ownerName, setownerName] = useState('')
    const [ownerImg, setownerImg] = useState('')
    const [petImg_, setpetImg_] = useState(null)
    useEffect(() => {
        (async () => {
            await getoneUsrData()
            getSomeImg(postData.petImg, (url) => setpetImg_(url))
        })()
    }, [])
    async function getoneUsrData() {

        try {
            const res = await getUserData(postData.owner, handleError)
            setownerImg(res.img)
            setownerName(res.userName)
        } catch (error) {

        }
    }
    function handleError(response) {
        alert(response.data)
    }
    async function getSomeImg(id, cb) {
        try {
            const res = await downloadImg(id)
            cb(res)
        } catch (error) {

        }
    }
    return (
        <div className='post_container' >
            <div className='owner_div' >
                <div className='owner_edit'>

                    <EditIcon />
                </div>
                <div className='owner_info' >
                <Avatar src={ownerImg} />
                    <p>{ownerName}</p>
                    
                </div>
                <div className='owner_delete' >
                    <DeleteOutlineIcon />
                </div>
            </div>
            <div className='text_div' >
                {postData.text}
            </div>
            {(petImg_) && <div className='img_div' >
                <img className='petImg_' src={petImg_} />
            </div>}
            {
                (postData.adoptionRequests) && (
                    <div className='reqs_div' ></div>
                )}
        </div>
    )
}

export default PostComp
