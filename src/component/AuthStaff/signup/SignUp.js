import React, { useState } from 'react'

function SignUp() {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    function handleSignUp() {
        
    }
    return (
        <div>
            <input type = "text" value = {userName}
                onChange = {(evnt) => setuserName(evnt.target.value) }
            />
            <input type = "text" value = {email}
                onChange = {(evnt) => setemail(evnt.target.value) }
            />
            <input type = "text" value = {password}
                onChange = {(evnt) => setpassword(evnt.target.value) }
            />
            <input type = "button" onClick = {handleSignUp} value = "create acount" />
        </div>
    )
}

export default SignUp
