import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getONEPost, getUserData } from '../../../services/userdata'
import { CircularProgress, Modal } from '@mui/material'
import { downloadImg } from '../../../services/firebaseStorage'
import AdoptionReq from '../../profile/adoptionReq/AdoptionReq'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import './requestofadoption.css'
import {deleteRequestForAdtion} from '../../../services/userdata'
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
            console.log(res)
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
        <AdoptionReq name={name} img={img} onclick={() => onclick(id)} />
    )
}
function RequstOfAdoption({ user, id, handleError }) {
    useEffect(() => {
        (async () => {
            await getDataOfPost()
            await getImgPost()
        })()
    }, [])
    const [text, settext] = useState('')
    const [img, setimg] = useState('')
    const [owner, setowner] = useState('')
    const [arrOfAdoptions, setarrOfAdoptions] = useState([])
    const [showModalOfPost, setshowModalOfPost] = useState(false)

    const [loadDataOfPost, setloadDataOfPost] = useState(false)

    async function getDataOfPost() {
        try {
            setloadDataOfPost(true)
            const res = await getONEPost(id, user.token, handleError)
            if (res) {

                settext(res.text)
                setimg(res.petImg)
                setarrOfAdoptions(res.adoptionRequests)
                console.log(res.adoptionRequests)
            }
            setloadDataOfPost(false)

        } catch (error) {
            setloadDataOfPost(false)

        }
    }
    function closeModal() {
        setshowModalOfPost(false)
    }
    async function getImgPost() {
        try {
            const res = await downloadImg(img)

            setimg(res)
        } catch (error) {
            setimg(null)
        }
    }
    const go = useHistory()
    function handleGotoOthersProfiles(id = "") {
        closeModal()
        go.push('/home/profile/' + id)

    }
    async function deleteRequst() {
        try {
            const res = await deleteRequestForAdtion(id, user.token, handleError)
            if (res) {
                alert('requst deleted')

            }
            closeModal()
            window.location.reload()

        } catch (error) {
            closeModal()

        }
    }
    return (
        <div>
            {
                (!showModalOfPost && loadDataOfPost) && <div> <CircularProgress /> </div>
            }
            <Modal
                open={showModalOfPost}
                onClose={closeModal}
            >
                <div className='modal_content' >
                    <div className='modal_header' >
                        {text}
                        {(img) && <img src={img} />}
                    </div>
                    <div className='modal_body' >
                        {
                            arrOfAdoptions.map(item => (
                                <div className='request_body' >
                                    <AoptionReqToGetuserData id={item}
                                    onclick={handleGotoOthersProfiles} />
                                    <Button onClick = {deleteRequst} >
                                        Delete
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal>
            <div>
                <p onClick={() => setshowModalOfPost(true)} >

                    {text}
                </p>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps)(RequstOfAdoption)
