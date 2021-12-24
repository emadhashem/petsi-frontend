import React ,{Component} from 'react';
import './App.css';
import SignIn from './component/AuthStaff/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import Layout from './component/layout/body/Layout';
import SignUp from './component/AuthStaff/signup/SignUp';
import HomePage from './component/HomePage/HomePage';
import forgetPass from "./component/AuthStaff/forgetPass/forgetPass";
import Profile from "./component/Profile/Profile";
import Pic1 from "./src/n1.jpg"
import Pic2 from "./src/n2.jpg"
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      profileImage=" "
    }
  }
  handleImageChange=(profileImage)=>{
    this.setState({
      profileImage
    })
  }
render(){
  return (
    <Layout>
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/auth/login" component={SignIn}/>
            <Route exact path ="/home" component={HomePage} />
            <Route path = "/auth/signup" component = {SignUp}/>
            <Route path ="/auth/forgetPass" component={forgetPass}/>
            <Route path="/home/profile" component={Profile} />
            <Redirect to = "/auth/login" />
          </Switch>
        </div>
      </Router>
    </Layout>
  )
}
  
}

export default App;
