import React from 'react'
import './Guest.css';

const Guest =()=>{
    return(
        <div className="guest">
            <form className="cont">
                {/*Handdling the onClick to open the Anti Home  page*/ }
                <input type="submit" value ="As Guest"/>
            </form>
        </div>
    )
}
 
export default Guest;