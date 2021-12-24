import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import searchIcon from './search.svg'
import dogLogo from './tablogo.svg'
import User from './user.svg'
import UploadPic from './upload.svg';
import 'antd/dist/antd.css';
import Pluse from './plus2.png'
class Profile extends Component{
state={
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVdA_ob48Fm8NcYnS3f_ZBW_FB1sNy2PKbQ&usqp=CAU'
    ,UploadPhoto: {UploadPic}
}
imageHandler=(e)=>{
    const reader = new FileReader();
    reader.onload=()=>{
        if(reader.readyState===2){
            this.setState({profileImage: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
}
    render(){
     return(
        <div className='Profile'>
            <div className='navBar'>
               <div className='navBarlist'>   
                    <ul className='ulList' id='menuList'>
                        <div className="home">
                            <li><NavLink to='/home/profile'>Profile</NavLink></li>
                            <li className="profile"><NavLink to='/home'>Home</NavLink></li> 
                        </div>
                    </ul> 
                </div>
                
                <div className="logo">
                        <div className='pet'>Pet
                            <span className='si'>Si</span>
                            <div className="homeLogo">
                            <img src={dogLogo} className="homeLogoIm"/>
                        </div>
                    </div>
                   
                </div>
                <div className="search">
                    <div className="searchInput">
                        <input className="inputSearch" type="text" placeholder="search..."/>
                        <div className="searchIcon">
                            <img src={searchIcon}/>
                        </div>
                    </div>
                    <div className="dtatResult"></div>
                </div>
                <div className="naviList">

                </div>
            
            </div>
            <div className='sections'>
                <section className='sec1'>
                    <div className="section1">
                        <h2>Profile</h2>
                       <div className="profPic">
                         <img src={User} className="user"/>
                        </div>
                       <div className="info" >
                           <div className="nameDiv">
                                <lable for="nameid"> Name</lable>
                                <input className="name " id="nameid"type="text" name="name" />
                           </div>
                           <div className="emailDiv">
                                <lable for="emailid">E-mail</lable>
                                <input className="email " id="emailid" type="text" name="email" />
                           </div>
                            <div className="phoneDiv">
                                <lable for="phoneid">Phone</lable>
                                <input className="phone " id="phoneid" type="text" name="phone" />
                            </div>
                       </div>
                       <div className="buttons">
                        <div className="save">
                            <input className="inputSave" type="button" value="Save"/>
                        </div>
                        
                       </div>
                    </div>
                
                </section>
                <section className='sec2'>
                    <div className="section2">
                        <div className="post">
                            <div classNmae="toDisplay1">
                                <div className="petPhoto">
                                    <img src={UploadPic} className="theimage"/>
                                </div >
                                <div className="petType">
                                    <input type="radio"  id="dog" name="contact" value="Dog" checked/>
                                    <label for="dog" className="dog">Dog</label>
                                    <input type="radio" id="cat"  name="contact" value="Cat"/>
                                    <label for="cat" className="cat">Cat</label>
                                    <input type="radio" id="other"  name="contact" value="Other"/>
                                    <label for="other" className="other">Other</label>
                                </div>
                            </div>
                            <div className="todisplay2">
                                    <div classNmae="Addinfo">
                                        <lable for="age" classNmae="lable1">Age</lable>
                                        <input type="text" className="age" id="age"  placeholder="enter the age.."/>
                                        <lable for="breed" classNmae="lable2">Breed</lable>
                                        <input type="text" className="breed" id="breed" placeholder="enter the breed.."/>
                                       
                                    </div>
                                    <div className ="Add">
                                        <button className='AddPost'> Add Post</button>
                                    </div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className='editPost'></div>
                            {/*div to update photo*/}
                            <div className='postPhoto'></div>
                            <div className='information'>
                                <h4>Informations</h4>
                                {/*div to update info*/}
                                <div className="internalInfo">

                                </div>
                            </div>
                            <div className='requests'>
                            <h4>Requeste</h4>
                             {/*div to show requeste*/}
                            <div className="internalReq">

                            </div>
                            </div>
                        
                        </div>
                    </div>

                </section>
                <section className='sec3'>
                    <div className="section3">
                        <div className="Reviews">
                            <h2>Reviews</h2>
                        </div>
                        <div className='reviewBox'>
                        {/*div to show reviews*/}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
    }
   
}
export default Profile;