import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar } from '@mui/material';
import { getUserData } from '../../services/userdata';
import { downloadImg } from '../../services/firebaseStorage';
import './poststyles.css'
import AdoptionReq from '../profile/adoptionReq/AdoptionReq';
import { useHistory } from 'react-router-dom';
function PostComp({ postData, onclick = f => f, onAccept, onReject, hideModifi = false,

}) {
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
    const go = useHistory()
    function handleGotoOthersProfiles() {

        go.push('/home/profile/' + postData.owner)
    }
    return (
        <div className='post_container' >
            <div className='owner_div' >
                <div className='owner_edit'>

                    {(!hideModifi) && <EditIcon onClick={() => onAccept(postData)} />}
                </div>
                <AdoptionReq name={ownerName} img={ownerImg}
                    onclick={handleGotoOthersProfiles} />
                <div className='owner_delete' >
                    <DeleteOutlineIcon onClick={() => onReject(postData._id)} />
                </div>
            </div>
            <div className='text_div'
             onClick={() => onclick(postData.adoptionRequests, postData._id)} >
                {postData.text}
            </div>
            {(petImg_) && <div className='img_div'
                onClick={() => onclick(postData.adoptionRequests, postData._id)} >
                <img className='petImg_' src={petImg_} />
            </div>}
            {

                <div className='reqs_div' >

                </div>
            }
        </div>
    )
}

export default PostComp
