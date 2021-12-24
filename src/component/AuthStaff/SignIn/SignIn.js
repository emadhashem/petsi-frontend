import React, { Component } from "react";
import './SignIn.css';
import image from './pets.jpg';
class SignIn extends Component {


    state = {
        email: '', password: ''
    }

    //handling the onChange 
    handelChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })

    }

    //handel the submit
    handleSubmit = (e) => {
        //to prevent autoload
        e.preventDefault();
    }

    handleonClickSign=(e)=>{
        window.open("/home","_blank");
    }
    
    render() {

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
                                <input className="emailInput" type="email" name="email" placeholder="Enter your email..."  onChange={this.handelChange} ></input>
                            </div>

                            <div className="lableandpass">
                                <label className="passLable">Password</label>
                                <input className="passInput" type="password" name="password" placeholder="Enter your password..."  onChange={this.handelChange} ></input>
                            </div>
                            
                        </div>

                        <div> 
                            <input className="signButton" onSubmit={this.handleSubmit} type="submit" value="Sign in" onClick={this.handleonClickSign}/>
                        </div>

                        <div className="Rigester">
                            <input className="regButton" onSubmit={this.handleSubmit} type="submit" value="Register" />
                        </div>

                        <div className="forgetPass">
                            <a href="/auth/forgetPass">Forget Password</a>
                        </div>

                    </form>
               
                </div>
                <div className="imageBox">
                    <div className="ourLable">it's where is your peti </div>
                    <img src={image} className='image'/>
                </div>
            </div>

        )
    }
}
export default SignIn;

