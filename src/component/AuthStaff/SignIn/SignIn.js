import React, { Component, useState } from "react";
import './SignIn.css';
import image from './pets.jpg';
const SignIn = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    //handling the onChange 
    const handelChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })

    }

    //handel the submit
    const handleSubmit = (e) => {
        //to prevent autoload
        e.preventDefault();
    }

    const handleonClickSign = (e) => {
        e.preventDefault()
        window.open("/home", "_self");
    }



    return (
        <div className="Maincont">
            <div className="cont">
                <div className="petsiRound">
                    Pet<span className="si">Si</span>
                </div>

                <form onSubmit={this.handelSubmit} className="sigin-form">

                    <div className="passAndemail">
                        <div className="lableandemail">
                            <label className="emailLable">E-mail</label>
                            <input value={email}
                                onChange={evnt => setemail(evnt.target.value)}
                                className="emailInput" type="email"
                                name="email" placeholder="Enter your email..."
                            ></input>
                        </div>

                        <div className="lableandpass">
                            <label className="passLable">Password</label>
                            <input
                                value={password}
                                onChange={evnt => setpassword(evnt.target.value)}
                                className="passInput" type="password"
                                name="password" placeholder="Enter your password..."
                            ></input>
                        </div>

                    </div>

                    <div>
                        <input className="signButton"  type="submit" value="Sign in" onClick={handleonClickSign} />
                    </div>

                    <div className="Rigester">
                        <input className="regButton" type="submit" value="Register" />
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
export default SignIn;

