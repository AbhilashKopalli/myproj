import React, { Component } from 'react';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
// import {Helmet} from 'react-helmet';
//import logo from './images/mwaredetec.jpg';
//import anime from 'animejs/lib/anime.es.js';
//import Test from './test'

import AppRouter from './routers/AppRouter'

import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
        {/* <Helmet>
        <style>{'body { background-color: white; color: #ffffff; }'}</style>
        </Helmet> */}
        </div>
    );
  }
}

export default App;
