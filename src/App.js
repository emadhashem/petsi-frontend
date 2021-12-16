
import React, { Component } from 'react';
import './App.css';
import SignIn from './component/SignIn/SignIn';
import Rigester from './component/Rigester/Rigester';
import Password from './component/Password/Password';
import theImage from './dog.jpg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
class App extends Component {
  //creating a state to store the data
  state = { items: [] }
  //sign in function push the input into the state
  SignIn = (item) => {
    let items = this.state.items;
    items.push(item)
    //update the state after pushing
    this.setState({ items: items })
    //testing the output
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className='content'>
          <div className="petsiRound">
            Pet<span className="si">Si</span>
          </div>
          {/*passing the state as props int SignIn.js*/}
          <SignIn SignIn={this.SignIn} />
          <Rigester />
          <Password />
        </div>
        <img src={theImage} className='image'></img>
      </div>
    );
  }

}

export default App;
