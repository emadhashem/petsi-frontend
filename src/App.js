
import React, { Component } from 'react';
import './App.css';
import SignIn from './component/AuthStaff/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import Layout from './component/layout/body/Layout';
import SignUp from './component/AuthStaff/signup/SignUp';


const App = () => {

  return (
    <Layout>
      <Router>
        <Switch>
          <Route path = "/auth/login" component = {SignIn} />
          <Route path = "/auth/signup" component = {SignUp} />
          <Redirect to = "/auth/login" />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
