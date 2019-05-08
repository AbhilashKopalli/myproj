const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePasswordChange(data) {
    let errors = {};
    data.password = !isEmpty(data.password) ? data.password : '';
    data.new_password = !isEmpty(data.new_password) ? data.new_password : '';
    data.new_password_confirm = !isEmpty(data.new_password_confirm) ? data.new_password_confirm : '';


    if(!Validator.isLength(data.new_password, {min: 6, max: 30})) {
        errors.new_password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.new_password_confirm, {min: 6, max: 30})) {
        errors.new_password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.new_password, data.new_password_confirm)) {
        errors.new_password_confirm = 'New Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.new_password_confirm)) {
        errors.new_password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}