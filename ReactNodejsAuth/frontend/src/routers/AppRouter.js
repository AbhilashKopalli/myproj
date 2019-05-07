import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from "../routes.js";
import Navbar from '../components/Navbar';
import Typography from '../views/Typography/Typography.jsx';
import Register from '../components/Register';
import Login from '../components/Login';
import Home from '../components/Home';
import LoginNew from '../views/LoginPage/LoginPage';
import Admin from '../layouts/Admin.jsx'
class AppRouter extends Component {
  render() {
    if (localStorage.getItem("jwtToken") != null)
      return (isLoggedIn)
    else
      return (isLoggedOut)
  }
}

const isLoggedOut = (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/loginNew" component={LoginNew} />
      <Route path="/admin/file-upload" component={Typography} />
    </div>
  </Router>
)
const isLoggedIn = (

  <Router >
    <Switch>
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/admin/dashboard" />


    </Switch>
  </Router >

)
export default AppRouter;
