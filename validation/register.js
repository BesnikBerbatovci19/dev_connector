const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    

    if(!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = "Name must be betwen 2 and 30 character";
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Email field is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    if(!Validator.isLength(data.password, { min: 6, max: 30})){
        errors.password = 'Password must be at list 6 character';
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confir Password field is required';
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Password must match';
    }


    return{
        errors,
        isValid: isEmpty(errors)
    }
}

