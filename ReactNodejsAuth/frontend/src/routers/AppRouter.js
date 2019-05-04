import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import dashboard from '../layouts/Admin';

import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Login from '../components/Login';
import Home from '../components/Home';
import LoginNew from '../views/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <PrivateRoute exact path="/dashboard" component={dashboard} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/loginNew" component={LoginNew} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default AppRouter;
