import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import './addpoststyles.css'
import { CircularProgress, IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 } from 'uuid';
import { uploadImg, downloadImg, deleteSomePhoto } from '../../../services/firebaseStorage'
import PetsIcon from '@mui/icons-material/Pets';
import { addPostToAdmin } from '../../../services/postData';
const AddPost = ({ user, handleError }) => {
    
    const [petType, setpetType] = useState(2)
    const [postDescription, setpostDescription] = useState('')
    /** post img methods */
    const [postImg, setpostImg] = useState(null)
    const [postImgId, setpostImgId] = useState(null)
    const [loadUploadImg, setloadUploadImg] = useState(false)
    const inputImgRef = useRef()
    function choosefile() {

        inputImgRef.current.click();
    }
    async function getThefile(e) {
        try {

            e.stopPropagation();
            e.preventDefault();
            const objectUrl = URL.createObjectURL(e.target.files[0])
            setpostImg(objectUrl)
            await uploadPostImg(e.target.files[0])

        } catch (errImg) {
            // console.log(errImg);
        }
    }
    async function uploadPostImg(file) {
        try {
            const imgId = v4()
            setpostImgId(imgId)
            setloadUploadImg(true)
            const res = await uploadImg(file, `${imgId}`)
            setloadUploadImg(false)
        } catch (error) {
            setloadUploadImg(false)
        }
    }

    async function handleRemoveImg() {
        try {
            setloadUploadImg(true)
            const res = await deleteSomePhoto(postImgId)
            inputImgRef.current.value = null
            setpostImg(null)
            setpostImgId(null)
            setloadUploadImg(false)
        } catch (error) {
            setloadUploadImg(false)

        }
    }
    /** */
    /** add the post methods */
    const [postUpload, setpostUpload] = useState(false)
    async function handleAddPost() {

        try {
            const text = postDescription.replace(/\s/g, '')
            if (!text.length) {
                return alert('text must be notEmpty')
            }
            setpostUpload(true)
            const res = await addPostToAdmin(postDescription,
                postImgId + "", petType, user.token, handleError)
            if (res) {
                alert('ur post has been to admin q')
            }
            setpostUpload(false)
            setpostImg(null)
            setpostDescription('')
        } catch (error) {
            setpostUpload(false)

        }
    }

    /** */
    return (
        <div className='addpost_container' >
            <div className='input_description_container' >
                <textarea
                    onChange={evnt => setpostDescription(evnt.target.value)}
                    value={postDescription}
                    className='input_description' />
                <div className='radio_continer' >
                    <div>
                        <label htmlFor='dog'>DOG</label>
                        <input onChange={() => setpetType(0)}
                            type={'radio'} id='dog'
                            checked={petType == 0} />
                    </div>
                    <div>
                        <label htmlFor='cat'>CAT</label>
                        <input onChange={() => setpetType(1)}
                            type={'radio'} id='cat'
                            checked={petType == 1} />
                    </div>
                    <div>
                        <label htmlFor='other'>OTHER</label>
                        <input onChange={() => setpetType(2)}
                            type={'radio'} id='other'
                            checked={petType == 2} />
                    </div>
                </div>
            </div>

            <div className='upload_photo_continer' >
                <input type="file" style={{ display: 'none' }}
                    ref={inputImgRef}
                    onChange={getThefile}
                />
                {
                    (loadUploadImg) && (
                        <CircularProgress />
                    )
                }
                {
                    (!postImg && !loadUploadImg) && (
                        <div className='btn_upload' >
                            <p> UPLOAD PHOTO</p>
                            <IconButton onClick={choosefile} >
                                <PublishIcon />
                            </IconButton>
                        </div>
                    )
                }
                {
                    (postImg && !loadUploadImg) && (
                        <div className='post_img_container' >
                            <img className='post_img' src={postImg} />
                            <IconButton onClick={handleRemoveImg} >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )
                }
                {(!postUpload && !loadUploadImg) && <div className='add_post_btn_container' >
                    <p onClick={handleAddPost} >AddPost  </p><PetsIcon />
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})


export default connect(mapStateToProps)(AddPost)
