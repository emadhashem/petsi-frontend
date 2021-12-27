import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { downloadImg } from '../../../services/firebaseStorage'
import { getUserData } from '../../../services/userdata'
import './styless.css'
function AdoptionReq({ name, img, onclick = f => f }) {

    return (
        <div className='owner_info' onClick={onclick} >
            <Avatar src={img} />
            <p>{name}</p>

        </div>
    )
}

export default AdoptionReq
