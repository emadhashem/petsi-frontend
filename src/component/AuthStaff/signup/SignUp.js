import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import dogImg from '../../../imgages/dog.jpg'
import { createNewUser } from '../../../services/auth'
import './signupStyles.css'
function SignUp() {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState(0)
    const go = useHistory()
    async function handleSignUp() {
        const res = await createNewUser(userName, email, password, role, handleError)
        if(res) {
            go.push('/auth/login')

        }

    }
    function handleError(msg) {
        console.log(msg)
    }
    return (

        <div className='singup_container' >
            <div className='img_holder' >
                <img src={dogImg} />
            </div>
            <div className='input_holder' >
                <input className='signup_input' type="text"
                    placeholder='UserName'
                    value={userName}
                    onChange={(evnt) => setuserName(evnt.target.value)}
                />
                <input className='signup_input' type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(evnt) => setemail(evnt.target.value)}
                />
                <input className='signup_input'
                    placeholder='Password'
                    type="text" value={password}
                    onChange={(evnt) => setpassword(evnt.target.value)}
                />
                <div className='radio_btns_holder' >
                    <div>
                        <input className='radio_input'
                            id="user"
                            type="radio" value="user" checked={role == 0}
                            onChange={() => setrole(0)} />
                        <label htmlFor="user">USER</label><br></br>
                    </div>

                    <div>
                        <input className='radio_input'
                            id="doctor"
                            type="radio" value="doctor" checked={role == 1}
                            onChange={() => setrole(1)}
                        />
                        <label htmlFor="doctor" >DOCTOR</label><br></br>
                    </div>
                </div>
                <input type="button"
                    onClick={handleSignUp} value="create acount" />
            </div>
        </div>
    )
}

export default SignUp
