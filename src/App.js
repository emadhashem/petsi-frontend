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


class App extends Component {
  
render(){
  return (
    <Layout>
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/auth/login" component={SignIn}/>
            <Route exact path ="/home" component={HomePage} />
            <Route path = "/auth/signup" component = {SignUp}/>
            <Redirect to = "/auth/login" />
          </Switch>
        </div>
      </Router>
    </Layout>
  )
}
  
}

export default App;
