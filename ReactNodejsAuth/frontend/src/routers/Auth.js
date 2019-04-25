const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
};

if (localStorage.getItem('jwtToken') !== null) {
  Auth.authenticate();
}

export default Auth;
