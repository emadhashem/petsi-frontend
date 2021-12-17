import React, { Component } from "react";
import './SignIn.css';
import theImage from '../../../dog.jpg'
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
    handelSubmit = (e) => {
        //to prevent autoload
        e.preventDefault();
    }

    render() {

        return (
            <div className="cont">
                <div className="petsiRound">
                    Pet<span className="si">Si</span>
                </div>
                <form onSubmit={this.handelSubmit} className="sigin-form">
                    <div className="passAndemail">
                        <div className="lableandemail">
                            <label className="emailLable">E-mail</label>
                            <input className="emailInput" type="email" name="email" placeholder="Enter your email..." required onChange={this.handelChange} ></input>
                        </div>
                        <div className="lableandpass">
                            <label className="passLable">Password</label>
                            <input className="passInput" type="password" name="password" placeholder="Enter your password..." required onChange={this.handelChange} ></input>
                        </div>
                        {  /*Handing the onClick to open the Home Page  */}
                    </div>

                    <input className="signButton" onSubmit={this.handeilSubmit} type="submit" value="Sign in"></input>
                </form>
            </div>

        )
    }
}
export default SignIn;

