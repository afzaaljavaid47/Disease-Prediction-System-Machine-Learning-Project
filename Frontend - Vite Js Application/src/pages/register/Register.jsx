import { useState } from 'react'
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import convertToBase64 from '../../helper/convert';
import { registerValidation } from '../../helper/validate';
import "./Register.scss";
import avatar from '../../assets/profile.png'


const Register = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || " " })
      console.log(values)
    }
  })

  // Formik does not support file upload so we need to create this handler

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64);
  }
  return (
    <div className="register">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="card">
        <div className="left">
          <h1>Your Smart Doctor!</h1>
          <h3>Now Your Health Care Doctor is in Your Hands.</h3>
          <span>Already have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">

          <h1>Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='profilePic'>
              <label htmlFor="profile">
                <img src={file || avatar} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id='profile' name='profile' />
            </div>
            <input {...formik.getFieldProps('name')} type="text" placeholder="Name*" />
            <input {...formik.getFieldProps('username')} type="text" placeholder="Username*" />
            <input {...formik.getFieldProps('email')} type="text" placeholder="Email*" />
            {/* <input type="text" placeholder="Phone" /> */}
            <input {...formik.getFieldProps('password')} type="text" placeholder="Password*" />

            <button type='submit'>Register</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
