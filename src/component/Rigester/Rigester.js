import React from 'react'
import './Rigester.css';

const Rigester =()=>{
    return(
        <div className="register">
            <form className="cont">
                {/*Handdling the onClick to open the register page*/ }
                <input className="RegButton" type="submit" value ="Rigister"/>
            </form>
        </div>
    )
}
 
export default Rigester;