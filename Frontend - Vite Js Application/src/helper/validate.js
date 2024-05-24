import { toast } from "react-hot-toast";

//validate login page username

export async function userValidate(values) {
    const errors = userVerify({}, values)
    return errors;
}

// validate register page

export async function registerValidation(values){
    const errors = userVerify({}, values);
    emailVerify(errors, values);
    return errors
}
// *****************************************************************************/
// vlidate username

function userVerify(errors = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.username) {
        errors.username = toast.error("Username Required...!")
    } else if (values.username.includes(" ")) {
        errors.username = toast.error("Invalid Username...!")
    } else if (!values.password) {
        errors.password = toast.error("Password Required...!")
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Wrong Password...!")
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters...!")
    } else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special characters...!")
    }
    return errors
}


//validate email

function emailVerify(error ={}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.email){
        error.email = toast.error("Email Required...!")
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(specialChars.test(values.email)){
        error.email = toast.error("Invalid Email...!")
    }
    return error
}