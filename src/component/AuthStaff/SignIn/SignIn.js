import React, { Component, useEffect, useState } from "react";
import './SignIn.css';
import image from './pets.jpg';
import {useHistory} from 'react-router-dom'
import { loginUser } from "../../../services/auth";
import { connect, useDispatch } from "react-redux";
import {setUserEmail, setUserId, setUserName, setUserToken, setUserImg} from '../../../redux/actions/userActions'

const SignIn = ({user}) => {
    useEffect(() => {
        if(user.id) {
            go.push('/home')
            return
        }
    }, [])
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    //handling the onChange 
    const go = useHistory()
    const dispatch = useDispatch()
    function handleAllDispatches(data) {
        
        dispatch(setUserEmail(data.email))
        dispatch(setUserName(data.userName))
        dispatch(setUserId(data._id))
        dispatch(setUserImg(data.img))
        dispatch(setUserToken(data.resToken))
        
    }
    const login = async () => {

        const res = await loginUser(email, password, handleError)
        if(res) {
            handleAllDispatches(res)
            go.push('/home')
        }
    }
    function handleError(message) {
        alert(message)
    }
    return (
        <div className="Maincont">
            <div className="cont">
                <div className="petsiRound">
                    Pet<span className="si">Si</span>
                </div>

                <form className="sigin-form">

                    <div className="passAndemail">
                        <div className="lableandemail">
                            <label className="emailLable">E-mail</label>
                            <input value={email}
                                onChange={evnt => setemail(evnt.target.value)}
                                className="emailInput" type="email"
                                name="email" placeholder="Enter your email..."
                            />
                        </div>

                        <div className="lableandpass">
                            <label className="passLable">Password</label>
                            <input
                                value={password}
                                onChange={evnt => setpassword(evnt.target.value)}
                                className="passInput" type="password"
                                name="password" placeholder="Enter your password..."
                            />
                        </div>

                    </div>

                    
                        <input className="signButton"  value="Sign in" 
                            onClick={login}
                         />
                    

                    <div className="Rigester">
                        <input className="regButton" value="Register" 
                        onClick={() => go.push('/auth/signup')}
                        />
                    </div>

                    <div className="forgetPass">
                        <a href="/auth/forgetPass">Forget Password</a>
                    </div>

                </form>

            </div>
            <div className="imageBox">
                <div className="ourLable">it's where is your peti </div>
                <img src={image} className='image' />
            </div>
        </div>

    )

}
const mapStateToProps = ({user}) => ({
    user
})
export default connect(mapStateToProps)(SignIn);

