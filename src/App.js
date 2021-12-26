import React, { Component } from 'react';
import './App.css';
import SignIn from './component/AuthStaff/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import Layout from './component/layout/body/Layout';
import SignUp from './component/AuthStaff/signup/SignUp';
import HomePage from './component/HomePage/HomePage';
import Profile from './component/profile/Profile';
import AdminPage from './component/adminpage/AdminPage';


class App extends Component {

  render() {
    return (

      <Router>
        <Layout>
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route path="/auth/login" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/home/profile/:profileId" component={Profile} />
            
            <Redirect to="/auth/login" />
          </Switch>
        </Layout>
      </Router >

    )
  }

}

export default App;
