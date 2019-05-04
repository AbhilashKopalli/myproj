import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import Button from "@material-ui/core/Button";
import  { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from 'react-google-login';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',   
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // e.preventDefault();
        console.log('The link was clicked.');
        toast("Wow so easy !");
        toast("Hi there !", {position: toast.POSITION.TOP_LEFT});
        toast("Hello", { autoClose: false })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        toast("Wow so easy !");
    }

    componentDidMount() {
        console.log("hello")
        toast("Wow so easy !");
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        toast("Wow so easy !");
        toast("Hi there !", {position: toast.POSITION.TOP_LEFT});
        toast("Hello", { autoClose: false })
    }

    render() {
        const { errors } = this.state;

        const responseFacebook = (response) => {
            console.log(response);
          }

          const responseGoogle = (response) => {
            console.log(response);
          }
          
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm
                    })}
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary" variant="contained" color="primary">
                        Register User
                    </Button>
                </div>
            </form>
            {/* <div> <button onClick={this.handleClick}>My Awesome Button</button> <ToastContainer /> </div>  */}
            {/* <div> <button onLoad={this.handleClick}>My Awesome Button</button> <ToastContainer /> </div> */}
            <div style={{position: "absolute", bottom: "5px", right: "5px",color: "black",textAlign: "right"}}>
    Spring 2019, CMPE-272 Team 21 </div>
    <FacebookLogin
    appId="602405340241247"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />,
      <GoogleLogin
    clientId="1068075770755-cdqdnjh9to2dqs0a5t2qpnrlphlhbcn9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,

        </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))